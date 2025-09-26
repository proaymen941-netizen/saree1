import 'dotenv/config';
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { seedDefaultData } from "./seed";
import { storage } from "./storage";
import { ensureBucketsExist } from "./supabase";

const app = express();

// إعداد MIME types الصحيحة
app.use((req, res, next) => {
  // تعيين MIME types الصحيحة للملفات
  if (req.url?.endsWith('.js') || req.url?.endsWith('.mjs')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  } else if (req.url?.endsWith('.ts') || req.url?.endsWith('.tsx')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  } else if (req.url?.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
  } else if (req.url?.endsWith('.html')) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
  } else if (req.url?.endsWith('.json')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
  }
  
  // إضافة headers الأمان
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Disable ETag caching to fix special offers not updating
app.set('etag', false);

// Disable all caching for API routes
app.use('/api', (req, res, next) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Last-Modified', new Date().toUTCString());
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
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
    // إعداد Supabase buckets
    log('🪣 محاولة إعداد buckets التخزين في Supabase...');
    try {
      await ensureBucketsExist();
      log('✅ تم إعداد Supabase بنجاح');
    } catch (supabaseError) {
      log('⚠️ تعذر إعداد Supabase. سيعمل التطبيق بدون خدمة رفع الصور.');
      console.error('Supabase setup error:', supabaseError);
    }
    
    const server = await registerRoutes(app);

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
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();
