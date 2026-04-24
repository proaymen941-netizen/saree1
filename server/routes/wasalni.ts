import express from "express";
import { storage } from "../storage.js";
import { wasalniRequests, insertWasalniRequestSchema } from "../../shared/schema.js";
import { randomUUID } from "crypto";

const router = express.Router();

// Get all wasalni requests (admin)
router.get("/", async (req, res) => {
  try {
    const { phone, customerId, status } = req.query;
    const db = (storage as any).db;
    if (!db) return res.status(500).json({ error: "Database not available" });

    const { desc } = await import("drizzle-orm");
    let results = await db.select().from(wasalniRequests).orderBy(desc(wasalniRequests.createdAt));

    if (status) results = results.filter((r: any) => r.status === status);
    if (phone) results = results.filter((r: any) => r.customerPhone === phone);
    if (customerId) results = results.filter((r: any) => r.customerId === customerId);

    res.json(results);
  } catch (error) {
    console.error("Error fetching wasalni requests:", error);
    res.status(500).json({ error: "فشل في جلب الطلبات" });
  }
});

// Get wasalni request by ID
router.get("/:id", async (req, res) => {
  try {
    const db = (storage as any).db;
    const { eq } = await import("drizzle-orm");
    const [request] = await db.select().from(wasalniRequests).where(eq(wasalniRequests.id, req.params.id));
    if (!request) return res.status(404).json({ error: "الطلب غير موجود" });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: "فشل في جلب الطلب" });
  }
});

// Create new wasalni request
router.post("/", async (req, res) => {
  try {
    // التحقق من ساعات عمل التطبيق وحالة الإغلاق
    try {
      const allSettings = await storage.getUiSettings();
      const settingsMap = new Map(allSettings.map((s: any) => [s.key, s.value]));
      const storeStatus = settingsMap.get('store_status');
      const openingTime = settingsMap.get('opening_time') || '08:00';
      const closingTime = settingsMap.get('closing_time') || '23:00';

      if (storeStatus === 'closed') {
        return res.status(400).json({ 
          error: "عذراً، التطبيق مغلق حالياً ولا يمكن استقبال طلبات وصل لي",
          code: "APP_CLOSED"
        });
      }

      // التحقق من الوقت التلقائي إذا لم يكن مفتوحاً يدوياً
      if (storeStatus !== 'open') {
        const now = new Date();
        const currentTime = now.toTimeString().slice(0, 5);
        const timeToMinutes = (t: string) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
        const current = timeToMinutes(currentTime);
        const open = timeToMinutes(openingTime);
        const close = timeToMinutes(closingTime);
        let appIsOpen = close > open ? (current >= open && current < close) : (current >= open || current < close);

        if (!appIsOpen) {
          return res.status(400).json({ 
            error: "التطبيق خارج ساعات العمل حالياً، يرجى الطلب لاحقاً",
            code: "APP_CLOSED"
          });
        }
      }
    } catch (err) {
      console.error("خطأ في التحقق من حالة التطبيق:", err);
    }

    const {
      customerName, customerPhone, customerId,
      fromAddress, toAddress, fromLat, fromLng, toLat, toLng,
      orderType, notes, scheduledDate, scheduledTime, estimatedFee
    } = req.body;

    if (!customerName || !customerPhone || !fromAddress || !toAddress) {
      return res.status(400).json({ error: "البيانات الأساسية مطلوبة: الاسم، الهاتف، من عنوان، إلى عنوان" });
    }

    const requestNumber = `WSL-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    const db = (storage as any).db;
    const [newRequest] = await db.insert(wasalniRequests).values({
      requestNumber,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerId: customerId || null,
      fromAddress: fromAddress.trim(),
      toAddress: toAddress.trim(),
      fromLat: fromLat ? String(fromLat) : null,
      fromLng: fromLng ? String(fromLng) : null,
      toLat: toLat ? String(toLat) : null,
      toLng: toLng ? String(toLng) : null,
      orderType: orderType || "طعام",
      notes: notes?.trim() || null,
      scheduledDate: scheduledDate || null,
      scheduledTime: scheduledTime || null,
      estimatedFee: estimatedFee ? String(estimatedFee) : null,
      status: "pending",
    }).returning();

    // Create notification for admin
    await storage.createNotification({
      type: "new_wasalni_request",
      title: "طلب وصل لي جديد",
      message: `طلب وصل لي جديد رقم ${requestNumber} من ${customerName} - من: ${fromAddress} إلى: ${toAddress}`,
      recipientType: "admin",
      recipientId: null,
      orderId: null,
      isRead: false,
    });

    // Create notification for customer
    await storage.createNotification({
      type: "wasalni_received",
      title: "تم استلام طلب وصل لي",
      message: `تم استلام طلبك رقم ${requestNumber} وهو قيد المراجعة`,
      recipientType: "customer",
      recipientId: customerId || customerPhone,
      orderId: newRequest.id, // ربط الطلب بالتتبع
      isRead: false,
    });

    // بث التحديث عبر WebSocket للإدارة
    const ws = (req.app.get('ws') as any);
    if (ws) {
      ws.broadcast('new_wasalni_request', { requestId: newRequest.id, requestNumber });
    }

    res.status(201).json({ success: true, request: newRequest });
  } catch (error) {
    console.error("Error creating wasalni request:", error);
    res.status(500).json({ error: "فشل في إنشاء الطلب" });
  }
});

// Get wasalni request by request number
router.get("/number/:requestNumber", async (req, res) => {
  try {
    const { requestNumber } = req.params;
    const db = (storage as any).db;
    const { eq } = await import("drizzle-orm");
    const [request] = await db.select().from(wasalniRequests).where(eq(wasalniRequests.requestNumber, requestNumber));
    if (!request) return res.status(404).json({ error: "الطلب غير موجود" });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: "فشل في جلب الطلب" });
  }
});

// Update wasalni request status (admin)
router.put("/:id", async (req, res) => {
  try {
    const db = (storage as any).db;
    const { eq } = await import("drizzle-orm");
    const { status, driverId, adminNotes, cancelReason, estimatedFee } = req.body;

    const updateData: any = { updatedAt: new Date() };
    if (status) updateData.status = status;
    if (driverId !== undefined) updateData.driverId = driverId;
    if (adminNotes !== undefined) updateData.adminNotes = adminNotes;
    if (cancelReason !== undefined) updateData.cancelReason = cancelReason;
    if (estimatedFee !== undefined) updateData.estimatedFee = String(estimatedFee);

    const [updated] = await db.update(wasalniRequests).set(updateData).where(eq(wasalniRequests.id, req.params.id)).returning();
    if (!updated) return res.status(404).json({ error: "الطلب غير موجود" });

    // Notify customer on status change
    if (status) {
      // بث التحديث عبر WebSocket
      const ws = (req.app.get('ws') as any);
      if (ws) {
        ws.broadcast('order_update', { orderId: updated.id, status, type: 'wasalni' });
      }

      const statusMessages: Record<string, string> = {
        confirmed: "تم قبول طلب وصل لي الخاص بك",
        on_way: "السائق في طريقه لاستلام طلبك",
        delivered: "تم تنفيذ طلب وصل لي بنجاح",
        cancelled: `تم إلغاء طلب وصل لي. ${cancelReason ? `السبب: ${cancelReason}` : ''}`,
      };
      if (statusMessages[status]) {
        await storage.createNotification({
          type: "wasalni_status_update",
          title: "تحديث طلب وصل لي",
          message: `${statusMessages[status]} - رقم الطلب: ${updated.requestNumber}`,
          recipientType: "customer",
          recipientId: updated.customerId || updated.customerPhone,
          orderId: updated.id, // ربط الطلب بالتتبع
          isRead: false,
        });
      }
    }

    res.json({ success: true, request: updated });
  } catch (error) {
    console.error("Error updating wasalni request:", error);
    res.status(500).json({ error: "فشل في تحديث الطلب" });
  }
});

// Delete wasalni request
router.delete("/:id", async (req, res) => {
  try {
    const db = (storage as any).db;
    const { eq } = await import("drizzle-orm");
    await db.delete(wasalniRequests).where(eq(wasalniRequests.id, req.params.id));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "فشل في حذف الطلب" });
  }
});

// Assign driver to wasalni request
router.post("/:id/assign-driver", async (req, res) => {
  try {
    const { driverId } = req.body;
    if (!driverId) return res.status(400).json({ error: "معرف السائق مطلوب" });

    const db = (storage as any).db;
    const { eq } = await import("drizzle-orm");
    
    // Check if request exists
    const [request] = await db.select().from(wasalniRequests).where(eq(wasalniRequests.id, req.params.id));
    if (!request) return res.status(404).json({ error: "الطلب غير موجود" });

    // Update request with driver and status
    const [updated] = await db.update(wasalniRequests)
      .set({ 
        driverId, 
        status: "confirmed",
        updatedAt: new Date() 
      })
      .where(eq(wasalniRequests.id, req.params.id))
      .returning();

    // تحديث حالة السائق ليكون مشغولاً
    try {
      await storage.updateDriver(driverId, { isAvailable: false });
    } catch (driverErr) {
      console.error("خطأ في تحديث حالة السائق:", driverErr);
    }

    // Broadcast via WebSocket
    const ws = (req.app.get('ws') as any);
    if (ws) {
      // إشعار للعميل بتحديث الحالة
      ws.broadcast('order_update', { 
        orderId: updated.id, 
        status: 'confirmed', 
        type: 'wasalni',
        requestNumber: request.requestNumber
      });

      // إشعار مباشر للسائق
      if (ws.sendToDriver) {
        ws.sendToDriver(driverId, 'new_order_assigned', { 
          orderId: updated.id, 
          status: 'confirmed',
          message: `تم تعيين طلب وصل لي جديد لك رقم ${request.requestNumber}`,
          type: 'wasalni',
          orderData: updated
        });
      }
    }

    // Create notification for customer
    await storage.createNotification({
      type: "wasalni_driver_assigned",
      title: "تم تعيين سائق لطلبك",
      message: `تم تعيين سائق لطلب وصل لي رقم ${request.requestNumber}. سيتواصل معك السائق قريباً.`,
      recipientType: "customer",
      recipientId: request.customerId || request.customerPhone,
      orderId: updated.id, // ربط الطلب بالتتبع
      isRead: false,
    });

    // Create notification for driver
    await storage.createNotification({
      type: "new_wasalni_assignment",
      title: "طلب وصل لي جديد مُعين لك",
      message: `تم تعيين طلب وصل لي جديد لك رقم ${request.requestNumber}. من: ${request.fromAddress} إلى: ${request.toAddress}`,
      recipientType: "driver",
      recipientId: driverId,
      orderId: updated.id, // ربط الطلب بالتتبع
      isRead: false,
    });

    res.json({ success: true, request: updated });
  } catch (error) {
    console.error("Error assigning driver to wasalni request:", error);
    res.status(500).json({ error: "فشل في تعيين السائق" });
  }
});

export default router;
