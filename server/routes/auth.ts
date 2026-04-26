import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { dbStorage } from '../db';
import { adminUsers, drivers, users, insertUserSchema } from '@shared/schema';
import { eq, or, sql } from 'drizzle-orm';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'saree1-secret-key-2026';

const generateToken = (id: string, userType: 'customer' | 'driver' | 'admin') => {
  return jwt.sign({ id, userType }, JWT_SECRET, { expiresIn: '24h' });
};

// فحص حالة الإعداد الأولي - هل توجد حسابات في قاعدة البيانات؟
router.get('/setup-status', async (req, res) => {
  try {
    const [adminCount] = await dbStorage.db.select({ count: sql<number>`count(*)::int` }).from(adminUsers);
    const [driverCount] = await dbStorage.db.select({ count: sql<number>`count(*)::int` }).from(drivers);
    const [userCount] = await dbStorage.db.select({ count: sql<number>`count(*)::int` }).from(users);

    res.json({
      adminExists: (adminCount?.count ?? 0) > 0,
      driverExists: (driverCount?.count ?? 0) > 0,
      userExists: (userCount?.count ?? 0) > 0,
    });
  } catch (error) {
    console.error('خطأ في فحص حالة الإعداد:', error);
    res.json({ adminExists: true, driverExists: true, userExists: true });
  }
});

// دالة مساعدة للتحقق من كلمة المرور - تدعم كل من كلمات المرور المشفرة والعادية
// وتقوم بترقية كلمات المرور العادية تلقائياً إلى مشفرة
async function verifyPassword(inputPassword: string, storedPassword: string): Promise<boolean> {
  if (!inputPassword || !storedPassword) return false;
  
  // التحقق إذا كانت كلمة المرور مشفرة بـ bcrypt
  const isBcryptHash = storedPassword.startsWith('$2b$') || storedPassword.startsWith('$2a$') || storedPassword.startsWith('$2y$');
  
  if (isBcryptHash) {
    // مقارنة مع الهاش
    return await bcrypt.compare(inputPassword, storedPassword);
  } else {
    // مقارنة كلمة مرور عادية (غير مشفرة)
    return inputPassword === storedPassword;
  }
}

// دالة لتشفير كلمة المرور وتحديثها في قاعدة البيانات إذا كانت غير مشفرة
async function upgradePasswordIfNeeded(
  storedPassword: string,
  inputPassword: string,
  updateFn: (hashedPassword: string) => Promise<void>
): Promise<void> {
  const isBcryptHash = storedPassword.startsWith('$2b$') || storedPassword.startsWith('$2a$') || storedPassword.startsWith('$2y$');
  if (!isBcryptHash) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(inputPassword, salt);
      await updateFn(hashedPassword);
      console.log('🔒 تم ترقية كلمة المرور إلى هاش bcrypt تلقائياً');
    } catch (err) {
      console.error('⚠️ فشل في ترقية كلمة المرور:', err);
    }
  }
}

// تسجيل الدخول للعملاء
router.post('/login', async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({
        success: false,
        message: 'اسم المستخدم/الهاتف وكلمة المرور مطلوبان'
      });
    }

    console.log('🔐 محاولة تسجيل دخول عميل:', identifier);

    // البحث عن العميل في قاعدة البيانات (باسم المستخدم أو الهاتف أو البريد)
    const userResult = await dbStorage.db
      .select()
      .from(users)
      .where(
        or(
          eq(users.username, identifier),
          eq(users.phone, identifier),
          eq(users.email, identifier)
        )
      )
      .limit(1);

    if (userResult.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'بيانات الدخول غير صحيحة'
      });
    }

    const user = userResult[0];

    // التحقق من حالة الحساب
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'الحساب غير مفعل'
      });
    }

    // التحقق من كلمة المرور (يدعم المشفر والعادي)
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'بيانات الدخول غير صحيحة'
      });
    }

    // ترقية كلمة المرور تلقائياً إذا كانت غير مشفرة
    await upgradePasswordIfNeeded(user.password, password, async (hashedPwd) => {
      await dbStorage.db.update(users).set({ password: hashedPwd }).where(eq(users.id, user.id));
    });

    const token = generateToken(user.id, 'customer');
    console.log('🎉 تم تسجيل الدخول بنجاح للعميل:', user.name);
    
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        userType: 'customer'
      },
      message: 'تم تسجيل الدخول بنجاح'
    });

  } catch (error) {
    console.error('خطأ في تسجيل دخول العميل:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ في الخادم'
    });
  }
});

// التحقق من صحة الرمز وجلب بيانات المستخدم
router.post('/validate', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'غير مصرح'
      });
    }

    const token = authHeader.split(' ')[1];

    // التحقق من التوكن وفك تشفيره
    let decoded: any;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'جلسة منتهية أو غير صالحة'
      });
    }

    const userId = decoded.id;
    const userType = decoded.userType;

    // البحث عن المستخدم باستخدام المعرف ونوع المستخدم من التوكن
    if (userType === 'customer') {
      const userResult = await dbStorage.db
        .select()
        .from(users)
        .where(eq(users.id, userId))
        .limit(1);
      
      if (userResult.length > 0) {
        const user = userResult[0];
        if (!user.isActive) {
          return res.status(401).json({ success: false, message: 'الحساب غير مفعل' });
        }
        return res.json({
          success: true,
          user: {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            userType: 'customer',
            isActive: user.isActive
          }
        });
      }
    } else if (userType === 'driver') {
      const driverResult = await dbStorage.db
        .select()
        .from(drivers)
        .where(eq(drivers.id, userId))
        .limit(1);
      
      if (driverResult.length > 0) {
        const driver = driverResult[0];
        return res.json({
          success: true,
          user: {
            id: driver.id,
            name: driver.name,
            phone: driver.phone,
            userType: 'driver'
          }
        });
      }
    } else if (userType === 'admin') {
      const adminResult = await dbStorage.db
        .select()
        .from(adminUsers)
        .where(eq(adminUsers.id, userId))
        .limit(1);
      
      if (adminResult.length > 0) {
        const admin = adminResult[0];
        return res.json({
          success: true,
          user: {
            id: admin.id,
            name: admin.name,
            email: admin.email,
            userType: 'admin'
          }
        });
      }
    }

    return res.status(401).json({
      success: false,
      message: 'مستخدم غير موجود'
    });
  } catch (error) {
    console.error('خطأ في التحقق من الرمز:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ في الخادم'
    });
  }
});

// تسجيل عميل جديد
router.post('/register', async (req, res) => {
  try {
    const validatedData = insertUserSchema.parse(req.body);

    // التحقق من الحد الأدنى لطول كلمة المرور
    if (!validatedData.password || validatedData.password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'
      });
    }

    // التحقق من وجود المستخدم مسبقاً
    const existingUser = await dbStorage.db
      .select()
      .from(users)
      .where(
        or(
          eq(users.username, validatedData.username),
          validatedData.phone ? eq(users.phone, validatedData.phone) : undefined
        )
      )
      .limit(1);

    if (existingUser.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'اسم المستخدم أو رقم الهاتف مسجل مسبقاً'
      });
    }

    // تشفير كلمة المرور دائماً عند التسجيل
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(validatedData.password, salt);

    const [newUser] = await dbStorage.db
      .insert(users)
      .values({ ...validatedData, password: hashedPassword })
      .returning();

    const token = generateToken(newUser.id, 'customer');

    res.status(201).json({
      success: true,
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
        userType: 'customer'
      },
      message: 'تم إنشاء الحساب بنجاح'
    });
  } catch (error) {
    console.error('خطأ في تسجيل عميل جديد:', error);
    res.status(400).json({
      success: false,
      message: 'بيانات التسجيل غير صحيحة'
    });
  }
});

// تسجيل الدخول عبر التواصل الاجتماعي (Google / Apple)
router.post('/social-login', async (req, res) => {
  try {
    const { provider, socialId, email, name, phone } = req.body;

    if (!provider || !socialId) {
      return res.status(400).json({
        success: false,
        message: 'مزود الخدمة ومعرف التواصل الاجتماعي مطلوبان'
      });
    }

    console.log(`🔐 محاولة تسجيل دخول اجتماعي (${provider}):`, socialId);

    let user;
    
    // 1. البحث عن المستخدم بالمعرف الاجتماعي
    const socialQuery = provider === 'google' ? eq(users.googleId, socialId) : eq(users.appleId, socialId);
    const existingSocialUser = await dbStorage.db.select().from(users).where(socialQuery).limit(1);

    if (existingSocialUser.length > 0) {
      user = existingSocialUser[0];
    } else if (email) {
      // 2. البحث عن المستخدم بالبريد الإلكتروني لربط الحساب
      const existingEmailUser = await dbStorage.db.select().from(users).where(eq(users.email, email)).limit(1);
      
      if (existingEmailUser.length > 0) {
        user = existingEmailUser[0];
        // تحديث معرف التواصل الاجتماعي
        const updateData: any = {};
        if (provider === 'google') updateData.googleId = socialId;
        if (provider === 'apple') updateData.appleId = socialId;
        
        await dbStorage.db.update(users).set(updateData).where(eq(users.id, user.id));
        console.log(`🔗 تم ربط حساب ${provider} بالمستخدم الموجود:`, email);
      }
    }

    if (!user) {
      // 3. إنشاء مستخدم جديد
      console.log(`🆕 إنشاء مستخدم جديد عبر ${provider}:`, name);
      const [newUser] = await dbStorage.db.insert(users).values({
        name: name || 'مستخدم جديد',
        email: email || null,
        phone: phone || '0000000000', // قيمة افتراضية إذا لم يتوفر رقم الهاتف
        googleId: provider === 'google' ? socialId : null,
        appleId: provider === 'apple' ? socialId : null,
        isActive: true,
      }).returning();
      user = newUser;
    }

    // التحقق من حالة الحساب
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'الحساب غير مفعل'
      });
    }

    const token = user.id;
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        userType: 'customer'
      },
      message: 'تم تسجيل الدخول بنجاح'
    });

  } catch (error) {
    console.error('خطأ في تسجيل الدخول الاجتماعي:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ في الخادم'
    });
  }
});

// تسجيل الدخول للمديرين
router.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'البريد الإلكتروني وكلمة المرور مطلوبان'
      });
    }

    console.log('🔐 محاولة تسجيل دخول مدير:', email);

    // البحث عن المدير في قاعدة البيانات (بالبريد أو اسم المستخدم أو الهاتف)
    const adminResult = await dbStorage.db
      .select()
      .from(adminUsers)
      .where(
        or(
          eq(adminUsers.email, email),
          eq(adminUsers.username, email),
          eq(adminUsers.phone, email)
        )
      )
      .limit(1);

    if (adminResult.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'بيانات الدخول غير صحيحة'
      });
    }

    const admin = adminResult[0];

    // التحقق من حالة الحساب
    if (!admin.isActive) {
      return res.status(401).json({
        success: false,
        message: 'الحساب غير مفعل'
      });
    }

    // التحقق من كلمة المرور (يدعم المشفر والعادي)
    const isPasswordValid = await verifyPassword(password, admin.password);

    if (!isPasswordValid) {
      console.log('❌ كلمة المرور غير صحيحة للمدير:', email);
      return res.status(401).json({
        success: false,
        message: 'بيانات الدخول غير صحيحة'
      });
    }

    // ترقية كلمة المرور تلقائياً إذا كانت غير مشفرة
    await upgradePasswordIfNeeded(admin.password, password, async (hashedPwd) => {
      await dbStorage.db.update(adminUsers).set({ password: hashedPwd }).where(eq(adminUsers.id, admin.id));
    });

    const token = generateToken(admin.id, 'admin');
    console.log('🎉 تم تسجيل الدخول بنجاح للمدير:', admin.name);
    
    let permissions: string[] = [];
    try {
      permissions = admin.permissions ? JSON.parse(admin.permissions) : [];
    } catch {}

    res.json({
      success: true,
      token,
      user: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
        userType: admin.userType,
        permissions,
      },
      message: 'تم تسجيل الدخول بنجاح'
    });

  } catch (error) {
    console.error('خطأ في تسجيل دخول المدير:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ في الخادم'
    });
  }
});

// تسجيل الدخول للسائقين
router.post('/driver/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({
        success: false,
        message: 'رقم الهاتف وكلمة المرور مطلوبان'
      });
    }

    console.log('🔐 محاولة تسجيل دخول سائق:', phone);

    // البحث عن السائق في قاعدة البيانات
    const driverResult = await dbStorage.db
      .select()
      .from(drivers)
      .where(eq(drivers.phone, phone))
      .limit(1);

    if (driverResult.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'بيانات الدخول غير صحيحة'
      });
    }

    const driver = driverResult[0];

    // التحقق من حالة الحساب
    if (!driver.isActive) {
      return res.status(401).json({
        success: false,
        message: 'الحساب غير مفعل'
      });
    }

    // التحقق من كلمة المرور (يدعم المشفر والعادي)
    const isPasswordValid = await verifyPassword(password, driver.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'بيانات الدخول غير صحيحة'
      });
    }

    // ترقية كلمة المرور تلقائياً إذا كانت غير مشفرة
    await upgradePasswordIfNeeded(driver.password, password, async (hashedPwd) => {
      await dbStorage.db.update(drivers).set({ password: hashedPwd }).where(eq(drivers.id, driver.id));
    });

    const token = generateToken(driver.id, 'driver');
    console.log('🎉 تم تسجيل الدخول بنجاح للسائق:', driver.name);
    
    res.json({
      success: true,
      token,
      user: {
        id: driver.id,
        name: driver.name,
        phone: driver.phone,
        userType: 'driver'
      },
      message: 'تم تسجيل الدخول بنجاح'
    });

  } catch (error) {
    console.error('خطأ في تسجيل دخول السائق:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ في الخادم'
    });
  }
});

// تسجيل الخروج
router.post('/logout', async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'تم تسجيل الخروج بنجاح'
    });
  } catch (error) {
    console.error('خطأ في تسجيل الخروج:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ في الخادم'
    });
  }
});

export default router;
