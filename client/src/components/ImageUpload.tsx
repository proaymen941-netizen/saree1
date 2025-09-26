import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload, Image as ImageIcon, Loader as Loader2, X } from 'lucide-react';

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  category?: string;
  placeholder?: string;
  required?: boolean;
  'data-testid'?: string;
}

export default function ImageUpload({
  label,
  value,
  onChange,
  category = 'general',
  placeholder = 'https://example.com/image.jpg',
  required = false,
  'data-testid': testId
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // التحقق من توفر خدمة رفع الصور
    const response = await fetch('/api/images/upload', {
      method: 'HEAD'
    });
    
    if (!response.ok) {
      toast({
        title: "خدمة رفع الصور غير متوفرة",
        description: "يرجى إدخال رابط الصورة يدوياً",
        variant: "destructive",
      });
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "خطأ في نوع الملف",
        description: "يرجى اختيار ملف صورة صالح",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "حجم الملف كبير جداً",
        description: "يرجى اختيار صورة أصغر من 5 ميجابايت",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // رفع الصورة عبر API الخادم
      const formData = new FormData();
      formData.append('image', file);
      formData.append('category', category);
      formData.append('optimize', 'true');
      
      const response = await fetch('/api/images/upload', {
        method: 'POST',
        body: formData,
        headers: {
          // لا تضع Content-Type header عند استخدام FormData
          // المتصفح سيضعه تلقائياً مع boundary
        }
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'فشل في رفع الصورة');
      }
      
      const result = await response.json();
      
      if (result.success && result.data?.url) {
        onChange(result.data.url);
        
        toast({
          title: "تم رفع الصورة بنجاح",
          description: `تم حفظ الصورة (${(file.size / 1024 / 1024).toFixed(2)} MB)`,
        });
      } else {
        throw new Error(result.message || 'فشل في رفع الصورة');
      }
    } catch (error) {
      console.error('خطأ في رفع الصورة:', error);
      toast({
        title: "فشل في رفع الصورة",
        description: error instanceof Error ? error.message : "حدث خطأ غير متوقع",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const clearImage = () => {
    onChange('');
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={testId}>{label}</Label>
      <div className="flex gap-2">
        <Input
          id={testId}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          data-testid={testId}
          className="flex-1"
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          data-testid={`${testId}-upload-button`}
        >
          {isUploading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Upload className="h-4 w-4" />
          )}
          {isUploading ? 'جاري الرفع...' : 'رفع صورة'}
        </Button>
        {value && (
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={clearImage}
            data-testid={`${testId}-clear-button`}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Preview */}
      {value && (
        <div className="mt-2">
          <img
            src={value}
            alt="معاينة الصورة"
            className="w-20 h-20 object-cover rounded-md border"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = 'https://via.placeholder.com/80x80?text=خطأ+في+الصورة';
            }}
          />
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
        data-testid={`${testId}-file-input`}
      />
    </div>
  );
}