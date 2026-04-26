import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { dbStorage } from '../db';
import { drivers, adminUsers } from '@shared/schema';
import { eq } from 'drizzle-orm';

const JWT_SECRET = process.env.JWT_SECRET || 'saree1-secret-key-2026';

export interface AuthenticatedRequest extends Request {
  driverId?: string;
  userType?: string;
  admin?: any;
  userId?: string;
  adminPermissions?: any;
}

interface TokenPayload {
  id: string;
  userType: 'customer' | 'driver' | 'admin';
}

/**
 * Middleware to require admin authentication
 */
export async function requireAdminAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'غير مصرح - الرجاء تسجيل الدخول كمدير'
      });
    }

    const token = authHeader.split(' ')[1];

    let decoded: TokenPayload;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'جلسة منتهية أو غير صالحة'
      });
    }

    if (decoded.userType !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'غير مصرح - للمديرين فقط'
      });
    }

    const adminResult = await dbStorage.db
      .select()
      .from(adminUsers)
      .where(eq(adminUsers.id, decoded.id))
      .limit(1);

    if (adminResult.length === 0 || !adminResult[0].isActive) {
      return res.status(401).json({
        success: false,
        message: 'جلسة غير صالحة أو الحساب غير مفعل'
      });
    }

    req.admin = adminResult[0];
    req.userType = 'admin';
    req.userId = decoded.id;

    // تحليل الصلاحيات للمدير الفرعي
    if (req.admin.userType === 'sub_admin') {
      try {
        req.adminPermissions = req.admin.permissions ? JSON.parse(req.admin.permissions) : [];
      } catch {
        req.adminPermissions = [];
      }
    } else {
      req.adminPermissions = null; // null = all permissions (main admin)
    }

    next();
  } catch (error) {
    console.error('Admin authentication error:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ في المصادقة'
    });
  }
}

/**
 * Middleware to require driver authentication
 */
export async function requireDriverAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'غير مصرح - الرجاء تسجيل الدخول'
      });
    }

    const token = authHeader.split(' ')[1];

    let decoded: TokenPayload;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'جلسة منتهية أو غير صالحة'
      });
    }

    if (decoded.userType !== 'driver' && decoded.userType !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'غير مصرح - للسائقين فقط'
      });
    }

    const driverResult = await dbStorage.db
      .select()
      .from(drivers)
      .where(eq(drivers.id, decoded.id))
      .limit(1);

    if (driverResult.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'جلسة غير صالحة'
      });
    }

    const driver = driverResult[0];

    if (!driver.isActive) {
      return res.status(401).json({
        success: false,
        message: 'الحساب غير مفعل'
      });
    }

    req.driverId = driver.id;
    req.userId = driver.id;
    req.userType = 'driver';

    next();
  } catch (error) {
    console.error('Driver authentication error:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ في المصادقة'
    });
  }
}

/**
 * Middleware to require customer authentication
 */
export async function requireCustomerAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'غير مصرح - الرجاء تسجيل الدخول'
      });
    }

    const token = authHeader.split(' ')[1];

    let decoded: TokenPayload;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'جلسة منتهية أو غير صالحة'
      });
    }

    if (decoded.userType !== 'customer' && decoded.userType !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'غير مصرح - للعملاء فقط'
      });
    }

    req.userId = decoded.id;
    req.userType = decoded.userType;
    next();
  } catch (error) {
    console.error('Customer authentication error:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ في المصادقة'
    });
  }
}

/**
 * Middleware to verify ownership
 * Allows admins or the owner of the resource
 */
export function requireOwnership(paramName: string = 'id') {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.userId && !req.admin) {
      return res.status(401).json({ success: false, message: 'غير مصرح' });
    }

    if (req.userType === 'admin') {
      return next();
    }

    const resourceId = req.params[paramName];
    if (req.userId !== resourceId) {
      return res.status(403).json({
        success: false,
        message: 'غير مصرح لك بالوصول لهذه البيانات'
      });
    }

    next();
  };
}
