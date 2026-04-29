import dotenv from 'dotenv';
dotenv.config({ override: false }); // Don't override existing env vars (Replit secrets take priority)
import express, { type Request, Response, NextFunction } from "express";
import { eq, lt, inArray, and } from "drizzle-orm";
import compression from "compression";
import { registerRoutes } from "./routes";
import { setupWebSockets } from "./socket";
import { registerBroadcast } from "./broadcast";
import { setupVite, serveStatic, log } from "./viteServer";
import { seedDefaultData, ensureDefaultSettings } from "./seed";
import { storage } from "./storage";

const app = express();

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

      // ===== تنبيه الطلبات التي مرّ عليها 15 دقيقة دون تعيين سائق =====
      try {
        const allOrdersForAlert = await storage.getOrders();
        const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
        const alertedMap: Map<string, number> = ((globalThis as any).__unassignedAlerts ||= new Map());
        // تنظيف العناصر القديمة (أقدم من 24 ساعة)
        const dayAgo = Date.now() - 24 * 60 * 60 * 1000;
        for (const [k, v] of alertedMap) if (v < dayAgo) alertedMap.delete(k);

        const stale = allOrdersForAlert.filter((o: any) => {
          if (o.driverId) return false;
          const status = String(o.status || '').toLowerCase();
          if (!['pending', 'confirmed', 'preparing', 'ready'].includes(status)) return false;
          const createdAt = o.createdAt ? new Date(o.createdAt) : null;
          if (!createdAt || isNaN(createdAt.getTime())) return false;
          if (createdAt > fifteenMinutesAgo) return false;
          // لا تنبّه أكثر من مرة لنفس الطلب خلال نفس الساعة
          const lastAlerted = alertedMap.get(o.id);
          if (lastAlerted && (Date.now() - lastAlerted) < 60 * 60 * 1000) return false;
          return true;
        });

        if (stale.length > 0) {
          const wsServer = app.get('ws');
          for (const order of stale) {
            alertedMap.set((order as any).id, Date.now());
            const minutes = Math.floor((Date.now() - new Date((order as any).createdAt).getTime()) / 60000);
            const message = `الطلب رقم ${(order as any).orderNumber} لم يُسند إلى سائق منذ ${minutes} دقيقة`;
            try {
              await storage.createNotification({
                type: 'order_unassigned_alert',
                title: '⚠️ طلب بدون سائق',
                message,
                recipientType: 'admin',
                recipientId: null,
                orderId: (order as any).id,
                isRead: false,
              });
            } catch (e) { console.error('خطأ في إنشاء إشعار الإسناد المتأخر:', e); }
            if (wsServer && typeof wsServer.sendToAdmin === 'function') {
              wsServer.sendToAdmin('order_unassigned_alert', {
                orderId: (order as any).id,
                orderNumber: (order as any).orderNumber,
                customerName: (order as any).customerName,
                minutes,
                message,
              });
            }
          }
        }
      } catch (e) { console.error('خطأ في تنبيه الطلبات غير المُسندة:', e); }

      // ===== تنظيف دوري كل ساعة: حذف الإشعارات > 24 ساعة والطلبات المنتهية > يومين =====
      try {
        const counterKey = '__cleanupCounter';
        const counter: number = ((globalThis as any)[counterKey] || 0) + 1;
        (globalThis as any)[counterKey] = counter;
        // 60 = كل ساعة (لأن المؤقت يعمل كل دقيقة). نُشغّل التنظيف عند بدء التشغيل ثم كل ساعة.
        const shouldRun = counter === 1 || counter % 60 === 0;
        if (shouldRun && (storage as any).db) {
          const db = (storage as any).db;
          const schema = await import("../shared/schema");
          const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
          const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);

          // ---- 1) حذف الإشعارات الأقدم من 24 ساعة ----
          try {
            const deletedNotifs = await db
              .delete(schema.notifications)
              .where(lt(schema.notifications.createdAt, oneDayAgo))
              .returning({ id: schema.notifications.id });
            if (deletedNotifs?.length) log(`🧹 تم حذف ${deletedNotifs.length} إشعاراً قديماً (>24 ساعة)`);
          } catch (e) { console.error('خطأ في حذف الإشعارات القديمة:', e); }

          // ---- 2) حذف الطلبات المنتهية الأقدم من يومين (وكل سجلاتها المرتبطة) ----
          try {
            const TERMINAL = ['delivered', 'cancelled', 'refunded', 'rejected', 'completed'];
            const oldOrders = await db
              .select({ id: schema.orders.id })
              .from(schema.orders)
              .where(and(
                lt(schema.orders.createdAt, twoDaysAgo),
                inArray(schema.orders.status, TERMINAL),
              ));

            if (oldOrders.length > 0) {
              const oldIds = oldOrders.map((o: any) => o.id);

              // حذف السجلات التابعة بالترتيب الآمن (FKs تشير إلى orders.id)
              const childTables: any[] = [
                schema.orderTracking,
                schema.ratings,
                schema.driverReviews,
                schema.driverCommissions,
                schema.walletTransactions,
                schema.loyaltyTransactions,
                schema.supportTickets,
                schema.messages,
                schema.couponUsages,
              ].filter(Boolean);

              for (const tbl of childTables) {
                try {
                  await db.delete(tbl).where(inArray((tbl as any).orderId, oldIds));
                } catch (e) {
                  console.error(`خطأ في حذف سجلات تابعة من جدول ${(tbl as any)[Symbol.for('drizzle:Name')] || ''}:`, e);
                }
              }

              // حذف إشعارات الطلبات (لا توجد علاقة FK لكن نُنظّفها يدوياً)
              try {
                await db.delete(schema.notifications).where(inArray(schema.notifications.orderId, oldIds));
              } catch (_) {}

              // حذف الطلبات نفسها
              try {
                const deletedOrders = await db
                  .delete(schema.orders)
                  .where(inArray(schema.orders.id, oldIds))
                  .returning({ id: schema.orders.id });
                if (deletedOrders?.length) log(`🧹 تم حذف ${deletedOrders.length} طلب منتهي قديم (>يومين)`);
              } catch (e) {
                console.error('فشل حذف الطلبات القديمة (قد يكون بسبب علاقة لم تُحذف):', e);
              }
            }
          } catch (e) { console.error('خطأ في حذف الطلبات القديمة:', e); }

          // ---- 3) حذف طلبات وصل لي المنتهية الأقدم من يومين ----
          try {
            if (schema.wasalniRequests) {
              const TERMINAL_WASALNI = ['delivered', 'cancelled', 'completed', 'rejected'];
              const deletedWasalni = await db
                .delete(schema.wasalniRequests)
                .where(and(
                  lt(schema.wasalniRequests.createdAt, twoDaysAgo),
                  inArray(schema.wasalniRequests.status, TERMINAL_WASALNI),
                ))
                .returning({ id: schema.wasalniRequests.id });
              if (deletedWasalni?.length) log(`🧹 تم حذف ${deletedWasalni.length} طلب "وصل لي" منتهي قديم`);
            }
          } catch (e) { console.error('خطأ في حذف طلبات وصل لي القديمة:', e); }
        }
      } catch (e) { console.error('خطأ في مهمة التنظيف الدورية:', e); }
    }, 60 * 1000);
    log('⏰ تم تشغيل مؤقت الطلبات المجدولة');

  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();