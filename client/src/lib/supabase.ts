import { createClient } from '@supabase/supabase-js';

// Get Supabase credentials from environment
const supabaseUrl = (import.meta.env?.VITE_SUPABASE_URL as string)?.trim() || 'https://flftwguecvlvnksvtgon.supabase.co';
const supabaseAnonKey = (import.meta.env?.VITE_SUPABASE_ANON_KEY as string)?.trim() || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsZnR3Z3VlY3Zsdm5rc3Z0Z29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMTM2MjYsImV4cCI6MjA3Mzc4OTYyNn0.yrENa4caA4MYNyYzMB8bF0MWJz46WF4Q7tyHNIo5kQY';

// التحقق من صحة الإعدادات
if (!supabaseUrl || !supabaseAnonKey || !supabaseUrl.startsWith('http')) {
  console.warn('⚠️ إعدادات Supabase غير صحيحة أو مفقودة في العميل.');
  console.log('🔗 URL:', supabaseUrl);
}

export const supabase = supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      },
      global: {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    })
  : null;

// دالة التحقق من توفر Supabase
export function isSupabaseAvailable(): boolean {
  return supabase !== null;
}

// دالة آمنة لرفع الصور
export async function uploadImage(file: File, category: string = 'general'): Promise<UploadResult> {
  if (!supabase) {
    throw new Error('خدمة Supabase غير متوفرة. يرجى التحقق من إعدادات الاتصال.');
  }

  // التحقق من صحة الملف
  if (!file || !(file instanceof File)) {
    throw new Error('ملف غير صحيح');
  }

  // التحقق من نوع الملف
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('نوع الملف غير مدعوم. يرجى اختيار صورة بصيغة JPG, PNG, WebP, أو GIF');
  }

  // التحقق من حجم الملف (5MB)
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('حجم الملف كبير جداً. الحد الأقصى 5 ميجابايت');
  }

  // الحصول على اسم bucket المناسب
  const bucketName = STORAGE_BUCKETS[category as keyof typeof STORAGE_BUCKETS] || STORAGE_BUCKETS.general;
  
  // Generate unique filename
  const fileExt = file.name.split('.').pop();
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substring(2, 15);
  const fileName = `${category}/${timestamp}-${randomId}.${fileExt}`;

  try {
    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true,
        contentType: file.type
      });

    if (error) {
      throw new Error(`فشل في رفع الصورة: ${error.message}`);
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucketName)
      .getPublicUrl(data.path);

    return {
      url: publicUrl,
      path: data.path,
      size: file.size,
      contentType: file.type
    };
  } catch (error) {
    console.error('خطأ في رفع الصورة:', error);
    throw error;
  }
}

// أسماء buckets للتخزين
export const STORAGE_BUCKETS = {
  restaurants: 'restaurant-images',
  menuItems: 'menu-item-images',
  offers: 'offer-images', 
  categories: 'category-images',
  general: 'general-images'
};

export interface UploadResult {
  url: string;
  path: string;
  size?: number;
  contentType?: string;
}


export async function deleteImage(path: string, category: string = 'general'): Promise<boolean> {
  if (!supabase) {
    console.warn('⚠️ خدمة Supabase غير متوفرة. لا يمكن حذف الصورة.');
    return false;
  }

  try {
    const bucketName = STORAGE_BUCKETS[category as keyof typeof STORAGE_BUCKETS] || STORAGE_BUCKETS.general;
    
    const { error } = await supabase.storage
      .from(bucketName)
      .remove([path]);

    if (error) {
      console.error('خطأ في حذف الصورة:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('خطأ في حذف الصورة:', error);
    return false;
  }
}

// دالة التحقق من وجود buckets وإنشاؤها إذا لزم الأمر
export async function ensureClientBucketsExist() {
  if (!supabase) {
    console.warn('⚠️ خدمة Supabase غير متوفرة في العميل.');
    return;
  }

  try {
    const { data: buckets, error } = await supabase.storage.listBuckets();
    
    if (error) {
      console.error('خطأ في جلب قائمة buckets:', error);
      return;
    }

    for (const [category, bucketName] of Object.entries(STORAGE_BUCKETS)) {
      const bucketExists = buckets?.some(bucket => bucket.name === bucketName);
      
      if (!bucketExists) {
        console.log(`📦 bucket غير موجود: ${bucketName}`);
        // في العميل، لا يمكننا إنشاء buckets - يجب أن يتم ذلك من الخادم
      }
    }
  } catch (error) {
    console.error('خطأ في التحقق من buckets:', error);
  }
}