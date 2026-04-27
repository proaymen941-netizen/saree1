import dotenv from 'dotenv';
dotenv.config({ override: false }); // Don't override existing env vars (Replit secrets take priority)
import express, { type Request, Response, NextFunction } from "express";
import { eq } from "drizzle-orm";
import compression from "compression";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { registerRoutes } from "./routes";
import { setupWebSockets } from "./socket";
import { registerBroadcast } from "./broadcast";
import { setupVite, serveStatic, log } from "./viteServer";
import { seedDefaultData, ensureDefaultSettings } from "./seed";
import { storage } from "./storage";

const app = express();

// Security Headers (Helmet) - protects against common web vulnerabilities
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "maps.googleapis.com", "*.google.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
      fontSrc: ["'self'", "fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com", "*.google.com", "*.gstatic.com"],
      connectSrc: ["'self'", "ws:", "wss:"],
      frameSrc: ["'self'", "www.google.com", "maps.googleapis.com"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// Rate limiting for auth endpoints to prevent brute force attacks
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: { error: "Too many login attempts, please try again after 15 minutes" },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting only to auth endpoints
app.use("/api/auth/login", authLimiter);
app.use("/api/auth/register", authLimiter);
app.use("/api/auth/admin/login", authLimiter);
app.use("/api/auth/driver/login", authLimiter);

// Enable gzip compression for all responses - major performance improvement
app.use(compression({
  threshold: 1024, // Only compress responses larger than 1KB
  level: 6,        // Balanced compression level
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));

// Disable ETag caching to fix special offers not updating
app.set('etag', false);

// Smart caching for API routes
app.use('/api', (req, res, next) => {
  // Disable cache for mutation requests and auth-sensitive endpoints
  if (req.method !== 'GET') {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
  } else if (req.path.includes('/special-offers') || req.path.includes('/settings')) {
    // Short cache for frequently changing public data
    res.set('Cache-Control', 'public, max-age=30');
  }
  next();
});

// Lightweight request logger (no JSON capture overhead)
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    const server = await registerRoutes(app);
    
    // Setup WebSockets
    const ws = setupWebSockets(server);
    app.set('ws', ws);
    global.WS_MANAGER = ws;
    registerBroadcast(ws.broadcast);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
      throw err;
    });

    // Seed database with default data if using DatabaseStorage
    if (storage.constructor.name === 'DatabaseStorage') {
      log('🌱 Seeding database with default data...');
      await seedDefaultData();
      // ضمان وجود جميع إعدادات الواجهة الافتراضية (يعمل عند كل تشغيل)
      await ensureDefaultSettings();
    }

    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }
    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`serving on port ${port}`);
    });

    // ===== مؤقت تفعيل الطلبات المجدولة =====
    // كل دقيقة: ابحث عن طلبات scheduled موعدها خلال 30 دقيقة أو أقل وفعّلها
    setInterval(async () => {
      try {
        const allOrders = await storage.getOrders();
        const scheduledOrders = allOrders.filter((o: any) => o.status === 'scheduled');
        
        const db = (storage as any).db;
        let scheduledWasalni: any[] = [];
        if (db) {
          const { wasalniRequests } = await import("../shared/schema");
          scheduledWasalni = await db.select().from(wasalniRequests).where(eq(wasalniRequests.status, 'scheduled'));
        }

        const now = new Date();
        const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60 * 1000);

        // تفعيل طلبات الطعام المجدولة
        for (const order of scheduledOrders) {
          if (!order.scheduledDate || !order.scheduledTimeSlot) continue;
          try {
            const timeStr = order.scheduledTimeSlot.replace(/[^\d:]/g, '').trim();
            const [hours, minutes] = timeStr.split(':').map(Number);
            if (isNaN(hours) || isNaN(minutes)) continue;

            const scheduledDateTime = new Date(order.scheduledDate);
            scheduledDateTime.setHours(hours, minutes, 0, 0);

            if (scheduledDateTime <= thirtyMinutesFromNow) {
              await storage.updateOrder(order.id, { status: 'pending', updatedAt: new Date() });

              await storage.createNotification({
                type: 'scheduled_order_ready',
                title: '📅 طلب مجدول جاهز',
                message: `الطلب المجدول رقم ${order.orderNumber} من ${order.customerName} أصبح جاهزاً للتوصيل. موعده: ${order.scheduledDate} ${order.scheduledTimeSlot}`,
                recipientType: 'admin',
                recipientId: null,
                orderId: order.id,
                isRead: false
              });

              await storage.createNotification({
                type: 'order_status_update',
                title: 'طلبك المجدول قيد التنفيذ',
                message: `بدأ تجهيز طلبك المجدول رقم ${order.orderNumber} - سيصلك قريباً`,
                recipientType: 'customer',
                recipientId: order.customerId || order.customerPhone,
                orderId: order.id,
                isRead: false
              });

              await storage.createOrderTracking({
                orderId: order.id,
                status: 'pending',
                message: `تم تفعيل الطلب المجدول تلقائياً - موعد التوصيل: ${order.scheduledDate} ${order.scheduledTimeSlot}`,
                createdBy: 'system',
                createdByType: 'system'
              });

              const wsServer = app.get('ws');
              if (wsServer) wsServer.broadcast('order_update', { orderId: order.id, status: 'pending', type: 'scheduled_activated' });
              log(`✅ تم تفعيل الطلب المجدول: ${order.orderNumber}`);
            }
          } catch (e) { console.error(`خطأ في تفعيل الطلب المجدول ${order.id}:`, e); }
        }

        // تفعيل طلبات وصل لي المجدولة
        for (const request of scheduledWasalni) {
          if (!request.scheduledDate || !request.scheduledTime) continue;
          try {
            const [hours, minutes] = request.scheduledTime.split(':').map(Number);
            const scheduledDateTime = new Date(request.scheduledDate);
            scheduledDateTime.setHours(hours, minutes, 0, 0);

            if (scheduledDateTime <= thirtyMinutesFromNow) {
              await db.update(wasalniRequests).set({ status: 'pending', updatedAt: new Date() }).where(eq(wasalniRequests.id, request.id));

              await storage.createNotification({
                type: 'new_wasalni_request',
                title: '📅 طلب وصل لي مجدول جاهز',
                message: `طلب وصل لي المجدول رقم ${request.requestNumber} أصبح جاهزاً. موعده: ${request.scheduledDate} ${request.scheduledTime}`,
                recipientType: 'admin',
                recipientId: null,
                orderId: null,
                isRead: false
              });

              await storage.createNotification({
                type: 'wasalni_status_update',
                title: 'طلب وصل لي قيد التنفيذ',
                message: `بدأ العمل على طلب وصل لي رقم ${request.requestNumber} - سيصلك قريباً`,
                recipientType: 'customer',
                recipientId: request.customerId || request.customerPhone,
                orderId: null,
                isRead: false
              });

              const wsServer = app.get('ws');
              if (wsServer) wsServer.broadcast('order_update', { type: 'wasalni_activated', requestId: request.id });
              log(`✅ تم تفعيل طلب وصل لي المجدول: ${request.requestNumber}`);
            }
          } catch (e) { console.error(`خطأ في تفعيل طلب وصل لي ${request.id}:`, e); }
        }
      } catch (e) { console.error('خطأ في مؤقت الطلبات المجدولة:', e); }
    }, 60 * 1000);
    log('⏰ تم تشغيل مؤقت الطلبات المجدولة');

  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();