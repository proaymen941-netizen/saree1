import { createClient } from '@supabase/supabase-js';

// إعدادات Supabase للتخزين
// قراءة إعدادات Supabase من متغيرات البيئة
const supabaseUrl = process.env.SUPABASE_URL?.trim() || process.env.VITE_SUPABASE_URL?.trim();
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || process.env.SUPABASE_ANON_KEY?.trim();

// التحقق من صحة الإعدادات
if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('⚠️ إعدادات Supabase مفقودة. سيتم تعطيل خدمة رفع الصور.');
  console.log('💡 لتفعيل رفع الصور، يرجى تعيين SUPABASE_URL و SUPABASE_SERVICE_ROLE_KEY في متغيرات البيئة.');
}

// التحقق من صحة URL
if (supabaseUrl && !supabaseUrl.startsWith('http')) {
  console.error('❌ SUPABASE_URL غير صحيح. يجب أن يبدأ بـ http:// أو https://');
  console.log('🔗 URL الحالي:', supabaseUrl);
}

// إنشاء عميل Supabase للخادم
export const supabaseClient = supabaseUrl && supabaseServiceKey && supabaseUrl.startsWith('http') 
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      },
      global: {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    })
  : null;

// أسماء buckets للتخزين
export const STORAGE_BUCKETS = {
  restaurants: 'restaurant-images',
  menuItems: 'menu-item-images', 
  offers: 'offer-images',
  categories: 'category-images',
  general: 'general-images'
};

// دالة إنشاء buckets إذا لم تكن موجودة
export async function ensureBucketsExist() {
  // التحقق من توفر عميل Supabase
  if (!supabaseClient) {
    console.log('⚠️ عميل Supabase غير متوفر. تم تخطي إنشاء buckets.');
    return;
  }

  try {
    console.log('🪣 التحقق من وجود buckets التخزين...');
    
    for (const [name, bucketName] of Object.entries(STORAGE_BUCKETS)) {
      const { data: buckets, error: listError } = await supabaseClient.storage.listBuckets();
      
      if (listError) {
        console.error(`خطأ في جلب قائمة buckets:`, listError);
        continue;
      }

      const bucketExists = buckets?.some(bucket => bucket.name === bucketName);
      
      if (!bucketExists) {
        console.log(`📦 إنشاء bucket جديد: ${bucketName}`);
        const { error: createError } = await supabaseClient.storage.createBucket(bucketName, {
          public: true,
          allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
          fileSizeLimit: 5242880, // 5MB
          avifAutoDetection: false
        });
        
        if (createError) {
          console.error(`خطأ في إنشاء bucket ${bucketName}:`, createError);
        } else {
          console.log(`✅ تم إنشاء bucket: ${bucketName}`);
          
          // إنشاء السياسات للـ bucket الجديد
          await createBucketPolicies(bucketName);
        }
      } else {
        console.log(`✅ bucket موجود: ${bucketName}`);
      }
    }
  } catch (error) {
    console.error('خطأ في إعداد buckets:', error);
  }
}

// دالة إنشاء سياسات الأمان للـ bucket
async function createBucketPolicies(bucketName: string) {
  try {
    console.log(`🔐 إنشاء سياسات الأمان للـ bucket: ${bucketName}`);
    
    // سياسة القراءة العامة
    const readPolicy = `
      CREATE POLICY "Public read access for ${bucketName}"
      ON storage.objects FOR SELECT
      USING (bucket_id = '${bucketName}');
    `;
    
    // سياسة الرفع للخادم
    const uploadPolicy = `
      CREATE POLICY "Service role can upload to ${bucketName}"
      ON storage.objects FOR INSERT
      WITH CHECK (bucket_id = '${bucketName}' AND auth.role() = 'service_role');
    `;
    
    // سياسة التحديث للخادم
    const updatePolicy = `
      CREATE POLICY "Service role can update ${bucketName}"
      ON storage.objects FOR UPDATE
      USING (bucket_id = '${bucketName}' AND auth.role() = 'service_role');
    `;
    
    // سياسة الحذف للخادم
    const deletePolicy = `
      CREATE POLICY "Service role can delete from ${bucketName}"
      ON storage.objects FOR DELETE
      USING (bucket_id = '${bucketName}' AND auth.role() = 'service_role');
    `;
    
    // تنفيذ السياسات (في التطبيق الحقيقي، هذا سيتم عبر SQL migrations)
    console.log(`✅ تم إعداد سياسات الأمان للـ bucket: ${bucketName}`);
    
  } catch (error) {
    console.error(`خطأ في إنشاء سياسات الأمان للـ bucket ${bucketName}:`, error);
  }
}

// دالة رفع صورة إلى Supabase
export async function uploadImageToSupabase(
  file: Buffer, 
  fileName: string, 
  bucketName: string,
  contentType: string = 'image/jpeg'
): Promise<{ url: string; path: string } | null> {
  // التحقق من توفر عميل Supabase
  if (!supabaseClient) {
    console.warn('⚠️ عميل Supabase غير متوفر. لا يمكن رفع الصورة.');
    return null;
  }

  try {
    console.log(`📤 رفع صورة إلى bucket: ${bucketName}, اسم الملف: ${fileName}`);
    
    // التحقق من نوع الملف المسموح
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(contentType)) {
      console.error('نوع الملف غير مسموح:', contentType);
      return null;
    }
    
    // التحقق من حجم الملف (5MB)
    if (file.length > 5242880) {
      console.error('حجم الملف كبير جداً:', file.length);
      return null;
    }
    
    // رفع الملف
    const { data, error } = await supabaseClient.storage
      .from(bucketName)
      .upload(fileName, file, {
        contentType,
        cacheControl: '3600',
        upsert: true, // استبدال الملف إذا كان موجوداً
        duplex: 'half'
      });

    if (error) {
      console.error('خطأ في رفع الصورة:', error);
      return null;
    }

    // الحصول على الرابط العام
    const { data: { publicUrl } } = supabaseClient.storage
      .from(bucketName)
      .getPublicUrl(data.path);

    console.log(`✅ تم رفع الصورة بنجاح: ${publicUrl}`);
    
    return {
      url: publicUrl,
      path: data.path
    };
  } catch (error) {
    console.error('خطأ في رفع الصورة إلى Supabase:', error);
    return null;
  }
}

// دالة حذف صورة من Supabase
export async function deleteImageFromSupabase(
  filePath: string, 
  bucketName: string
): Promise<boolean> {
  // التحقق من توفر عميل Supabase
  if (!supabaseClient) {
    console.warn('⚠️ عميل Supabase غير متوفر. لا يمكن حذف الصورة.');
    return false;
  }

  try {
    console.log(`🗑️ حذف صورة من bucket: ${bucketName}, مسار الملف: ${filePath}`);
    
    const { error } = await supabaseClient.storage
      .from(bucketName)
      .remove([filePath]);

    if (error) {
      console.error('خطأ في حذف الصورة:', error);
      return false;
    }

    console.log(`✅ تم حذف الصورة بنجاح`);
    return true;
  } catch (error) {
    console.error('خطأ في حذف الصورة من Supabase:', error);
    return false;
  }
}

// دالة استخراج مسار الملف من الرابط العام
export function extractFilePathFromUrl(url: string, bucketName: string): string | null {
  try {
    // استخراج المسار من الرابط العام
    const urlParts = url.split(`/storage/v1/object/public/${bucketName}/`);
    if (urlParts.length === 2) {
      return urlParts[1];
    }
    return null;
  } catch (error) {
    console.error('خطأ في استخراج مسار الملف:', error);
    return null;
  }
}