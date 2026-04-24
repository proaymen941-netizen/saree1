import { useState, useEffect, useRef, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  Save, Settings, Eye, Image as ImageIcon, Smartphone, Truck, 
  MessageCircle, Phone, Share2, Lock, ShoppingCart, Star, Bell,
  ChevronDown, ChevronRight, Hash, Globe, Bike
} from 'lucide-react';
import ImageUpload from '@/components/ImageUpload';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import type { UiSettings, Driver } from '@shared/schema';

// ─── مكوّنات الإدخال المستقرة (خارج المكوّن الرئيسي لتجنّب إعادة التركيب) ────

function StableTextInput({
  value: externalValue,
  onBlurSave,
  onChange,
  placeholder,
  className,
  dir,
}: {
  value: string;
  onBlurSave: (value: string) => void;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  dir?: string;
}) {
  const [localValue, setLocalValue] = useState(externalValue);
  const isFocused = useRef(false);

  useEffect(() => {
    if (!isFocused.current) {
      setLocalValue(externalValue);
    }
  }, [externalValue]);

  return (
    <Input
      value={localValue}
      onChange={(e) => { setLocalValue(e.target.value); onChange(e.target.value); }}
      onFocus={() => { isFocused.current = true; }}
      onBlur={() => { isFocused.current = false; onBlurSave(localValue); }}
      placeholder={placeholder}
      className={className}
      dir={dir}
    />
  );
}

function StableTextarea({
  value: externalValue,
  onBlurSave,
  onChange,
  placeholder,
  className,
  rows,
}: {
  value: string;
  onBlurSave: (value: string) => void;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
}) {
  const [localValue, setLocalValue] = useState(externalValue);
  const isFocused = useRef(false);

  useEffect(() => {
    if (!isFocused.current) {
      setLocalValue(externalValue);
    }
  }, [externalValue]);

  return (
    <Textarea
      value={localValue}
      onChange={(e) => { setLocalValue(e.target.value); onChange(e.target.value); }}
      onFocus={() => { isFocused.current = true; }}
      onBlur={() => { isFocused.current = false; onBlurSave(localValue); }}
      placeholder={placeholder}
      className={className}
      rows={rows}
    />
  );
}

// ─── SettingRow مكوّن خارجي مستقل (لمنع إعادة التركيب عند تغيّر الحالة الأب) ─

interface SettingRowProps {
  label: string;
  description?: string;
  settingKey: string;
  type?: 'text' | 'boolean' | 'image' | 'textarea';
  placeholder?: string;
  rows?: number;
  value: string;
  hasChange: boolean;
  onTextChange: (key: string, v: string) => void;
  onBlurSave: (key: string, v: string) => void;
  onToggle: (key: string, checked: boolean) => void;
  onImageChange: (key: string, url: string) => void;
}

function SettingRow({
  label, description, settingKey, type = 'text', placeholder, rows = 3,
  value, hasChange, onTextChange, onBlurSave, onToggle, onImageChange,
}: SettingRowProps) {
  return (
    <div className="flex items-start gap-4 py-3">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <Label className="font-medium text-gray-800">{label}</Label>
          {hasChange && <div className="h-2 w-2 bg-orange-500 rounded-full" />}
        </div>
        {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {type === 'boolean' ? (
          <Switch
            checked={value === 'true'}
            onCheckedChange={(checked) => onToggle(settingKey, checked)}
          />
        ) : type === 'image' ? (
          <div className="w-64">
            <ImageUpload
              label=""
              value={value}
              onChange={(url) => onImageChange(settingKey, url)}
              bucket="ui-settings"
            />
          </div>
        ) : type === 'textarea' ? (
          <StableTextarea
            value={value}
            onChange={(v) => onTextChange(settingKey, v)}
            onBlurSave={(v) => onBlurSave(settingKey, v)}
            className="w-64 min-h-[80px] text-sm"
            placeholder={placeholder || `ادخل ${label}`}
            rows={rows}
          />
        ) : (
          <StableTextInput
            value={value}
            onChange={(v) => onTextChange(settingKey, v)}
            onBlurSave={(v) => onBlurSave(settingKey, v)}
            className="w-56 text-sm"
            placeholder={placeholder || `ادخل ${label}`}
            dir="ltr"
          />
        )}
      </div>
    </div>
  );
}

// ─── SectionHeader و SectionCard خارجيان ─────────────────────────────────────

interface SectionHeaderProps {
  sectionKey: string;
  title: string;
  icon: React.ElementType;
  color?: string;
  isExpanded: boolean;
  onToggle: (key: string) => void;
}

function SectionHeader({ sectionKey, title, icon: Icon, color = 'text-orange-600', isExpanded, onToggle }: SectionHeaderProps) {
  return (
    <button
      onClick={() => onToggle(sectionKey)}
      className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors rounded-t-lg"
    >
      <Icon className={`h-5 w-5 ${color}`} />
      <span className="font-semibold text-gray-800 flex-1 text-right">{title}</span>
      {isExpanded ? (
        <ChevronDown className="h-4 w-4 text-gray-400" />
      ) : (
        <ChevronRight className="h-4 w-4 text-gray-400" />
      )}
    </button>
  );
}

interface SectionCardProps {
  sectionKey: string;
  title: string;
  icon: React.ElementType;
  color?: string;
  isExpanded: boolean;
  onToggle: (key: string) => void;
  children: React.ReactNode;
}

function SectionCard({ sectionKey, title, icon, color, isExpanded, onToggle, children }: SectionCardProps) {
  return (
    <Card className="overflow-hidden">
      <SectionHeader sectionKey={sectionKey} title={title} icon={icon} color={color} isExpanded={isExpanded} onToggle={onToggle} />
      {isExpanded && (
        <CardContent className="pt-0 px-4 pb-4 divide-y divide-gray-100">
          {children}
        </CardContent>
      )}
    </Card>
  );
}

// ─── المكوّن الرئيسي ──────────────────────────────────────────────────────────

export default function AdminUiSettings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [pendingChanges, setPendingChanges] = useState<Record<string, string>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    branding: true,
    splash: true,
    support: true,
    cart: true,
    sidebar: true,
    privacy: true,
    navigation: true,
    driver_pages: true,
    driver_permissions: true,
    order_number: true,
    flutter_splash: true,
  });

  const { data: uiSettings, isLoading } = useQuery<UiSettings[]>({
    queryKey: ['/api/admin/ui-settings'],
  });

  const { data: drivers } = useQuery<Driver[]>({
    queryKey: ['/api/admin/drivers'],
  });

  const updateSettingMutation = useMutation({
    mutationFn: async ({ key, value }: { key: string; value: string }) => {
      const response = await apiRequest('PUT', `/api/admin/ui-settings/${key}`, { value });
      return response.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/ui-settings'] });
      
      // إرسال تحديث عبر WebSocket لإجبار التطبيقات على تحديث الإعدادات لحظياً
      const ws = (window as any).WS_MANAGER || (globalThis as any).WS_MANAGER;
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
          type: 'settings_update',
          payload: { key: variables.key, value: variables.value }
        }));
      }

      setPendingChanges(prev => {
        const newChanges = { ...prev };
        delete newChanges[variables.key];
        return newChanges;
      });
      toast({ title: "تم الحفظ", description: "تم تحديث الإعداد بنجاح" });
    },
    onError: () => {
      toast({ title: "خطأ", description: "فشل في حفظ الإعداد", variant: "destructive" });
    },
  });

  const updateDriverMutation = useMutation({
    mutationFn: async ({ driverId, data }: { driverId: string; data: any }) => {
      const response = await apiRequest('PUT', `/api/admin/drivers/${driverId}`, data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/drivers'] });
      toast({ title: "تم الحفظ", description: "تم تحديث صلاحيات السائق" });
    },
    onError: () => {
      toast({ title: "خطأ", description: "فشل في تحديث صلاحيات السائق", variant: "destructive" });
    },
  });

  const resetOrderNumbersMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest('POST', '/api/admin/orders/reset-numbers', {});
      return response.json();
    },
    onSuccess: () => {
      toast({ title: "تم إعادة التسلسل", description: "تم تحديث أرقام الطلبات بنجاح" });
    },
    onError: () => {
      toast({ title: "خطأ", description: "فشل في إعادة تسلسل الأرقام", variant: "destructive" });
    },
  });

  const getValue = useCallback((key: string): string => {
    if (pendingChanges[key] !== undefined) return pendingChanges[key];
    return uiSettings?.find(s => s.key === key)?.value || '';
  }, [pendingChanges, uiSettings]);

  const hasChangePending = useCallback((key: string) => pendingChanges[key] !== undefined, [pendingChanges]);

  // ─── Callbacks مستقرة بـ useCallback لمنع إعادة تركيب المكوّنات الفرعية ───

  const handleTextChange = useCallback((key: string, v: string) => {
    setPendingChanges(prev => ({ ...prev, [key]: v }));
  }, []);

  const handleBlurSave = useCallback((key: string, v: string) => {
    setPendingChanges(prev => ({ ...prev, [key]: v }));
    updateSettingMutation.mutate({ key, value: v });
  }, [updateSettingMutation]);

  const handleToggle = useCallback((key: string, checked: boolean) => {
    const value = checked ? 'true' : 'false';
    setPendingChanges(prev => ({ ...prev, [key]: value }));
    setTimeout(() => updateSettingMutation.mutate({ key, value }), 50);
  }, [updateSettingMutation]);

  const handleImageChange = useCallback((key: string, url: string) => {
    setPendingChanges(prev => ({ ...prev, [key]: url }));
    setTimeout(() => updateSettingMutation.mutate({ key, value: url }), 50);
  }, [updateSettingMutation]);

  const toggleSection = useCallback((key: string) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const saveAll = () => {
    Object.entries(pendingChanges).forEach(([key, value]) => {
      updateSettingMutation.mutate({ key, value });
    });
  };

  const hasChanges = Object.keys(pendingChanges).length > 0;

  // ─── دالة مساعدة لبناء props مكوّن SettingRow ────────────────────────────

  const rowProps = (settingKey: string) => ({
    settingKey,
    value: getValue(settingKey),
    hasChange: hasChangePending(settingKey),
    onTextChange: handleTextChange,
    onBlurSave: handleBlurSave,
    onToggle: handleToggle,
    onImageChange: handleImageChange,
  });

  const secProps = (sectionKey: string) => ({
    sectionKey,
    isExpanded: expandedSections[sectionKey] ?? true,
    onToggle: toggleSection,
  });

  if (isLoading) {
    return (
      <div className="p-6 space-y-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-100 rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full" dir="rtl">
      {/* شريط أدوات ثابت */}
      <div className="sticky top-0 z-20 bg-white border-b shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Settings className="h-7 w-7 text-orange-500" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">إدارة إعدادات المتجر والواجهة</h1>
              <p className="text-sm text-gray-500">التحكم الكامل في مظهر وخيارات التطبيق</p>
            </div>
          </div>
          {hasChanges && (
            <Button onClick={saveAll} disabled={updateSettingMutation.isPending} className="bg-orange-500 hover:bg-orange-600">
              <Save className="h-4 w-4 ml-2" />
              حفظ جميع التغييرات ({Object.keys(pendingChanges).length})
            </Button>
          )}
        </div>
      </div>

      <div className="p-6 space-y-6">
        <Tabs defaultValue="customer" className="w-full">
          <TabsList className="grid grid-cols-4 w-full mb-6 bg-orange-50 border border-orange-100">
            <TabsTrigger value="customer" className="gap-1 text-xs data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Smartphone className="h-3.5 w-3.5" />
              تطبيق العميل
            </TabsTrigger>
            <TabsTrigger value="driver" className="gap-1 text-xs data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Truck className="h-3.5 w-3.5" />
              تطبيق السائق
            </TabsTrigger>
            <TabsTrigger value="store" className="gap-1 text-xs data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Settings className="h-3.5 w-3.5" />
              إعدادات المتجر
            </TabsTrigger>
            <TabsTrigger value="flutter" className="gap-1 text-xs data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Globe className="h-3.5 w-3.5" />
              تطبيق Flutter
            </TabsTrigger>
          </TabsList>

          {/* ===== تبويب تطبيق العميل ===== */}
          <TabsContent value="customer" className="space-y-4">

            {/* الهوية البصرية */}
            <SectionCard {...secProps('branding')} title="الهوية البصرية والشعار" icon={ImageIcon} color="text-purple-600">
              <SettingRow label="اسم التطبيق" {...rowProps('app_name')} placeholder="واصل" description="الاسم الذي يظهر في الشريط العلوي" />
              <SettingRow label="إصدار التطبيق" {...rowProps('app_version')} placeholder="1.0.0" description="رقم إصدار التطبيق الظاهر في القائمة الجانبية" />
              <SettingRow label="اللون الأساسي (hex)" {...rowProps('app_theme')} placeholder="#16a34a" description="لون الموضوع الرئيسي" />
              <SettingRow label="شعار الشريط العلوي" {...rowProps('header_logo_url')} type="image" description="الشعار الصغير في أعلى التطبيق" />
              <SettingRow label="شعار القائمة الجانبية" {...rowProps('sidebar_logo_url')} type="image" description="شعار خاص بالقائمة الجانبية" />
              <SettingRow label="الشعار النصي للقائمة الجانبية" {...rowProps('sidebar_tagline')} placeholder="كل ما تحتاجونه في مكان واحد" description="النص الظاهر أسفل الشعار في القائمة الجانبية" />
              <SettingRow label="تأخير ظهور الشعار (ثواني)" {...rowProps('logo_animation_duration')} placeholder="2.5" description="مدة الانتظار قبل ظهور الشعار" />
            </SectionCard>

            {/* شاشة الترحيب */}
            <SectionCard {...secProps('splash')} title="شاشة الترحيب (السبلاتش)" icon={Star} color="text-yellow-600">
              <SettingRow label="إظهار شاشة الترحيب" {...rowProps('show_splash_screen')} type="boolean" description="عرض شاشة الترحيب عند فتح التطبيق لأول مرة" />
              <SettingRow label="صورة شاشة الترحيب" {...rowProps('splash_image_url')} type="image" description="الصورة الرئيسية في شاشة الترحيب" />
              <SettingRow label="صورة إضافية للترحيب" {...rowProps('splash_image_url_2')} type="image" description="صورة ثانية تظهر في الشاشة (اختياري)" />
              <SettingRow label="عنوان شاشة الترحيب" {...rowProps('splash_title')} placeholder="واصل" description="النص الرئيسي في شاشة الترحيب" />
              <SettingRow label="نص الترحيب (وصف)" {...rowProps('splash_subtitle')} type="textarea" placeholder="أفضل وجبات طازجة..." description="الوصف أسفل العنوان" />
              <SettingRow label="نص زر البداية" {...rowProps('splash_button_text')} placeholder="ابدأ الآن" description="النص على زر البدء في شاشة الترحيب" />
            </SectionCard>

            {/* الدعم والتواصل */}
            <SectionCard {...secProps('support')} title="الدعم والتواصل (نحن معك)" icon={MessageCircle} color="text-green-600">
              <div className="py-2">
                <div className="bg-green-50 rounded-lg p-3 text-xs text-green-700 mb-2">
                  💡 أرقام الواتساب والهاتف تظهر في زر "نحن معك" في الشريط السفلي للتطبيق
                </div>
              </div>
              <SettingRow label="إظهار زر الدعم في الشريط السفلي" {...rowProps('show_support_button')} type="boolean" description="إظهار أو إخفاء زر المساعدة" />
              <SettingRow label="رقم واتساب الدعم" {...rowProps('support_whatsapp')} placeholder="966501234567" description="بدون + وبدون مسافات. مثال: 966501234567" />
              <SettingRow label="رقم الهاتف المباشر" {...rowProps('support_phone')} placeholder="+966501234567" description="رقم الاتصال المباشر مع رمز الدولة" />
              <SettingRow label="عنوان نافذة الدعم" {...rowProps('text_support_title')} placeholder="نحن معك 🌟" description="عنوان نافذة الدعم الفني" />
            </SectionCard>

            {/* القائمة الجانبية والمشاركة */}
            <SectionCard {...secProps('sidebar')} title="القائمة الجانبية والمشاركة" icon={Share2} color="text-blue-600">
              <SettingRow label="إظهار زر المشاركة في القائمة" {...rowProps('show_share_button')} type="boolean" description="إظهار أو إخفاء زر مشاركة التطبيق" />
              <SettingRow label="إظهار زر التواصل في القائمة" {...rowProps('show_contact_button')} type="boolean" description="إظهار أو إخفاء زر التواصل في القائمة الجانبية" />
              <SettingRow label="نص المشاركة" {...rowProps('share_text')} type="textarea" placeholder="جرب تطبيق واصل الآن!" description="النص الافتراضي عند مشاركة التطبيق" rows={2} />
              <SettingRow label="رابط المشاركة" {...rowProps('share_url')} placeholder="https://tamtom.app" description="الرابط الذي يشاركه المستخدم" />
            </SectionCard>

            {/* سياسة الخصوصية */}
            <SectionCard {...secProps('privacy')} title="سياسة الخصوصية" icon={Lock} color="text-gray-600">
              <SettingRow label="إظهار زر سياسة الخصوصية" {...rowProps('show_privacy_button')} type="boolean" description="إظهار أو إخفاء زر السياسة في القائمة الجانبية" />
              <SettingRow label="نص سياسة الخصوصية" {...rowProps('privacy_policy_text')} type="textarea" placeholder="نص سياسة الخصوصية..." description="النص الكامل لسياسة الخصوصية الذي يظهر للمستخدمين" rows={6} />
            </SectionCard>

            {/* إعدادات السلة والدفع */}
            <SectionCard {...secProps('cart')} title="إعدادات السلة والدفع" icon={ShoppingCart} color="text-red-600">
              <div className="py-2">
                <div className="bg-orange-50 rounded-lg p-3 text-xs text-orange-700 mb-2">
                  💡 هذه الإعدادات تتحكم في ما يراه العميل داخل صفحة السلة عند إتمام الطلب
                </div>
              </div>
              <SettingRow
                label="إظهار صندوق الكوبون في السلة"
                {...rowProps('show_coupon_box_always')}
                type="boolean"
                description="إظهار حقل إدخال كود الخصم دائمًا في صفحة السلة"
              />
              <SettingRow
                label="الحد الأدنى لإظهار صندوق الكوبون"
                {...rowProps('coupon_min_order_value')}
                placeholder="0"
                description="أدخل قيمة الحد الأدنى للطلب لإظهار حقل الكوبون (0 = دائمًا). مثال: 50 يعني يظهر فقط إذا قيمة الطلب 50 أو أكثر"
              />
              <SettingRow
                label="إظهار طرق الدفع الإلكترونية"
                {...rowProps('show_payment_cards')}
                type="boolean"
                description="عرض خيارات الدفع (مدى، STC Pay...) في صفحة السلة. إذا كان مطفأً، يظهر الكاش فقط"
              />
              <SettingRow
                label="إظهار الدفع النقدي"
                {...rowProps('show_cash_payment')}
                type="boolean"
                description="عرض خيار الدفع نقداً عند الاستلام"
              />
              <SettingRow
                label="إظهار التحويل البنكي"
                {...rowProps('show_bank_transfer')}
                type="boolean"
                description="عرض خيار الدفع بالتحويل البنكي"
              />
              <SettingRow
                label="نص زر تأكيد الطلب"
                {...rowProps('cart_checkout_button_text')}
                placeholder="تأكيد الطلب"
                description="النص الظاهر على زر إتمام الشراء في السلة"
              />
              <SettingRow
                label="رسالة تحت زر التأكيد"
                {...rowProps('cart_checkout_note')}
                placeholder="سيتواصل معك فريقنا قريباً"
                description="نص صغير يظهر أسفل زر التأكيد"
              />
            </SectionCard>

            {/* خدمة وصل لي */}
            <SectionCard {...secProps('wasalni')} title="إعدادات خدمة وصل لي" icon={Bike} color="text-orange-600">
              <div className="py-2">
                <div className="bg-orange-50 rounded-lg p-3 text-xs text-orange-700 mb-2">
                  💡 هذه الإعدادات تتحكم في خدمة التوصيل الخاص (وصل لي) التي تظهر في شريط التصنيفات
                </div>
              </div>
              <SettingRow
                label="إظهار خدمة وصل لي"
                {...rowProps('show_wasalni_service')}
                type="boolean"
                description="تفعيل أو تعطيل الخدمة في التطبيق بالكامل"
              />
              <SettingRow
                label="اسم الخدمة"
                {...rowProps('wasalni_service_name')}
                placeholder="وصل لي"
                description="الاسم الذي يظهر للمستخدم في شريط التصنيفات"
              />
              <SettingRow
                label="رسوم التوصيل الأساسية (ريال)"
                {...rowProps('wasalni_base_fee')}
                placeholder="5"
                description="رسوم الخدمة التي تظهر بشكل افتراضي للعميل"
                type="number"
              />
            </SectionCard>

            {/* صفحات التطبيق */}
            <SectionCard {...secProps('navigation')} title="صفحات التطبيق (إظهار/إخفاء)" icon={Eye} color="text-orange-600">
              <SettingRow label="صفحة الطلبات" {...rowProps('show_orders_page')} type="boolean" description="عرض صفحة قائمة الطلبات" />
              <SettingRow label="صفحة تتبع الطلب" {...rowProps('show_track_orders_page')} type="boolean" description="عرض صفحة تتبع الطلب" />
              <SettingRow label="شريط البحث" {...rowProps('show_search_bar')} type="boolean" description="عرض شريط البحث في الصفحة الرئيسية" />
              <SettingRow label="قسم التصنيفات" {...rowProps('show_categories')} type="boolean" description="عرض شبكة التصنيفات" />
              <SettingRow label="قسم البانر الرئيسي" {...rowProps('show_hero_section')} type="boolean" description="عرض شريط العروض المتحرك" />
              <SettingRow label="قسم المنتجات المميزة" {...rowProps('show_featured_products')} type="boolean" description="عرض المنتجات الجديدة/المميزة" />
              <SettingRow label="خدمة وصل لي" {...rowProps('show_wasalni_service')} type="boolean" description="إظهار بانر خدمة وصل لي في الرئيسية" />
              <SettingRow label="رسوم خدمة وصل لي" {...rowProps('wasalni_base_fee')} placeholder="500" description="رسوم التوصيل الافتراضية لخدمة وصل لي" />
              <SettingRow label="الشريط السفلي" {...rowProps('bottom_bar_enabled')} type="boolean" description="إظهار شريط التنقل السفلي" />
            </SectionCard>
          </TabsContent>

          {/* ===== تبويب تطبيق السائق ===== */}
          <TabsContent value="driver" className="space-y-4">
            <SectionCard {...secProps('driver_pages')} title="صفحات تطبيق السائق (إظهار/إخفاء)" icon={Eye} color="text-orange-600">
              <SettingRow label="إظهار صفحة المحفظة" {...rowProps('driver_show_wallet')} type="boolean" description="إظهار صفحة المحفظة وأرصدة السائقين" />
              <SettingRow label="إظهار صفحة الإحصائيات" {...rowProps('driver_show_stats')} type="boolean" description="إظهار إحصائيات الطلبات والأرباح" />
              <SettingRow label="إظهار صفحة الملف الشخصي" {...rowProps('driver_show_profile')} type="boolean" description="إظهار صفحة معلومات السائق" />
              <SettingRow label="إظهار تاريخ التوصيل" {...rowProps('driver_show_history')} type="boolean" description="إظهار سجل الطلبات المنجزة" />
            </SectionCard>

            {/* صلاحيات السائقين */}
            <SectionCard {...secProps('driver_permissions')} title="صلاحيات السائقين (كل سائق)" icon={Lock} color="text-blue-600">
              <div className="py-2">
                <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-700 mb-2">
                  💡 يمكنك هنا التحكم بصلاحيات كل سائق على حدة. هذه الإعدادات تؤثر على ما يمكن للسائق الوصول إليه في تطبيقه.
                </div>
              </div>
              {drivers && drivers.length > 0 ? (
                <div className="space-y-4 py-2">
                  {drivers.map((driver) => (
                    <div key={driver.id} className="border border-gray-200 rounded-xl p-4 bg-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <Truck className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{driver.name}</p>
                          <p className="text-xs text-gray-500">{driver.phone}</p>
                        </div>
                        <Badge variant={driver.isActive ? 'default' : 'secondary'} className="mr-auto">
                          {driver.isActive ? 'نشط' : 'غير نشط'}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2.5">
                          <div>
                            <p className="text-sm font-medium text-gray-800">تعديل الملف الشخصي</p>
                            <p className="text-xs text-gray-500">السماح بتغيير البيانات</p>
                          </div>
                          <Switch
                            checked={driver.allowProfileEdit === true}
                            onCheckedChange={(checked) => updateDriverMutation.mutate({ driverId: driver.id, data: { allowProfileEdit: checked } })}
                            disabled={updateDriverMutation.isPending}
                          />
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2.5">
                          <div>
                            <p className="text-sm font-medium text-gray-800">عرض بيانات المحفظة</p>
                            <p className="text-xs text-gray-500">رؤية الرصيد والمعاملات</p>
                          </div>
                          <Switch
                            checked={(driver as any).canViewWallet !== false}
                            onCheckedChange={(checked) => updateDriverMutation.mutate({ driverId: driver.id, data: { canViewWallet: checked } })}
                            disabled={updateDriverMutation.isPending}
                          />
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2.5">
                          <div>
                            <p className="text-sm font-medium text-gray-800">رؤية إحصائياته</p>
                            <p className="text-xs text-gray-500">عرض الأرباح والطلبات</p>
                          </div>
                          <Switch
                            checked={(driver as any).canViewStats !== false}
                            onCheckedChange={(checked) => updateDriverMutation.mutate({ driverId: driver.id, data: { canViewStats: checked } })}
                            disabled={updateDriverMutation.isPending}
                          />
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2.5">
                          <div>
                            <p className="text-sm font-medium text-gray-800">تغيير حالة التوفر</p>
                            <p className="text-xs text-gray-500">متاح/غير متاح بنفسه</p>
                          </div>
                          <Switch
                            checked={(driver as any).canToggleAvailability !== false}
                            onCheckedChange={(checked) => updateDriverMutation.mutate({ driverId: driver.id, data: { canToggleAvailability: checked } })}
                            disabled={updateDriverMutation.isPending}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <Truck className="h-10 w-10 mx-auto mb-2 opacity-30" />
                  <p>لا يوجد سائقون مسجلون حتى الآن</p>
                </div>
              )}
            </SectionCard>

            {/* نصوص واجهة تطبيق السائق */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-orange-500" />
                  نصوص واجهة تطبيق السائق
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-0 divide-y divide-gray-100">
                <SettingRow label="نص زر قبول الطلب" {...rowProps('driver_btn_accept')} placeholder="قبول الطلب" />
                <SettingRow label="نص حالة تم الاستلام" {...rowProps('driver_btn_received')} placeholder="تم الاستلام" />
                <SettingRow label="نص حالة بدء التوصيل" {...rowProps('driver_btn_start_delivery')} placeholder="بدء التوصيل" />
                <SettingRow label="نص حالة تم التسليم" {...rowProps('driver_btn_delivered')} placeholder="تم التسليم" />
                <SettingRow label="نص حالة متاح" {...rowProps('driver_status_available')} placeholder="أنت متاح الآن" />
                <SettingRow label="نص حالة غير متاح" {...rowProps('driver_status_offline')} placeholder="غير متاح" />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== تبويب إعدادات المتجر ===== */}
          <TabsContent value="store" className="space-y-4">

            {/* تسلسل أرقام الطلبات */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Hash className="h-5 w-5 text-orange-500" />
                  إدارة تسلسل أرقام الطلبات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800 font-medium mb-1">⚠️ تنبيه مهم</p>
                  <p className="text-xs text-amber-700">إعادة تسلسل أرقام الطلبات تعيد ترقيم الطلبات الحالية من 1 إلى ما لا نهاية بترتيب تاريخي. هذا لا يحذف أي طلبات.</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50"
                    onClick={() => {
                      if (confirm('هل أنت متأكد من إعادة تسلسل أرقام الطلبات؟ ستبدأ الأرقام من 1.')) {
                        resetOrderNumbersMutation.mutate();
                      }
                    }}
                    disabled={resetOrderNumbersMutation.isPending}
                  >
                    {resetOrderNumbersMutation.isPending ? 'جاري التحديث...' : 'إعادة تسلسل الأرقام (من 1)'}
                  </Button>
                  <p className="text-xs text-gray-500">يُنصح بتنفيذها في وقت قلة الطلبات</p>
                </div>
                <div className="pt-2 divide-y divide-gray-100">
                  <SettingRow label="رقم بداية التسلسل" {...rowProps('order_number_start')} placeholder="1" description="الرقم الذي ستبدأ منه الطلبات الجديدة" />
                  <SettingRow label="بادئة رقم الطلب" {...rowProps('order_number_prefix')} placeholder="TT" description="النص الذي يسبق رقم الطلب (مثال: TT-0001)" />
                </div>
              </CardContent>
            </Card>

            {/* إعدادات المتجر الأساسية */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Settings className="h-5 w-5 text-orange-500" />
                  إعدادات المتجر الأساسية
                </CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-gray-100">
                <SettingRow label="الحد الأدنى للطلب (ريال)" {...rowProps('minimum_order_default')} placeholder="20" description="أقل قيمة للطلب يمكن قبولها" />
                <SettingRow label="وقت الفتح" {...rowProps('opening_time')} placeholder="08:00" description="وقت فتح المتجر يومياً" />
                <SettingRow label="وقت الإغلاق" {...rowProps('closing_time')} placeholder="23:00" description="وقت إغلاق المتجر يومياً" />
              </CardContent>
            </Card>

            {/* إعدادات ساعات الموصلين والطلبات المؤجلة */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Truck className="h-5 w-5 text-orange-500" />
                  ساعات دوام الموصلين والطلبات المؤجلة
                </CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-gray-100">
                <div className="py-3 bg-orange-50 rounded-lg px-3 mb-2 text-sm text-orange-700">
                  💡 عندما يحاول العميل الطلب خارج ساعات الموصلين، يظهر له خيار جدولة الطلب لوقت متاح.
                </div>
                <SettingRow label="بداية دوام الموصلين" {...rowProps('driver_start_time')} placeholder="09:00" description="الوقت الذي يبدأ فيه الموصلون العمل (مثال: 09:00)" />
                <SettingRow label="نهاية دوام الموصلين" {...rowProps('driver_end_time')} placeholder="21:00" description="الوقت الذي ينتهي فيه دوام الموصلين (مثال: 21:00)" />
                <SettingRow label="تفعيل الطلبات المؤجلة" {...rowProps('enable_scheduled_orders')} type="boolean" description="السماح للعملاء بجدولة طلباتهم خارج ساعات الموصلين" />
              </CardContent>
            </Card>

            {/* الإشعارات */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Bell className="h-5 w-5 text-orange-500" />
                  إعدادات الإشعارات
                </CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-gray-100">
                <SettingRow label="إشعارات الطلبات الجديدة للعملاء" {...rowProps('notify_customers_new_order')} type="boolean" description="إرسال إشعار للعميل عند قبول طلبه" />
                <SettingRow label="إشعارات تحديث حالة الطلب" {...rowProps('notify_customers_status_update')} type="boolean" description="إشعار للعميل عند كل تحديث في حالة طلبه" />
                <SettingRow label="إشعارات الطلبات للسائقين" {...rowProps('notify_drivers_new_order')} type="boolean" description="إشعار للسائقين المتاحين عند وصول طلب جديد" />
                <SettingRow label="تنبيه المدير للطلبات المنسية" {...rowProps('notify_admin_pending_orders')} type="boolean" description="تنبيه في لوحة التحكم للطلبات التي لم تُعيَّن لسائق" />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== تبويب تطبيق Flutter ===== */}
          <TabsContent value="flutter" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Globe className="h-5 w-5 text-orange-500" />
                  رابط تطبيق الويب (WebView URL)
                </CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-gray-100">
                <div className="py-3">
                  <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-700 mb-2">
                    💡 هذا هو الرابط الذي يحمّله تطبيق Flutter داخل الـ WebView. قم بتحديثه إذا انتقلت الخدمة إلى نطاق جديد.
                  </div>
                </div>
                <SettingRow label="رابط تطبيق الويب" {...rowProps('webAppUrl')} placeholder="https://your-domain.replit.app" description="الرابط الكامل للموقع الذي يعرضه تطبيق Flutter" />
              </CardContent>
            </Card>

            <SectionCard {...secProps('flutter_splash')} title="شاشة البداية (Flutter Splash Screen)" icon={Star} color="text-yellow-600">
              <SettingRow label="تفعيل شاشة البداية" {...rowProps('splashEnabled')} type="boolean" description="عرض شاشة البداية عند فتح تطبيق Flutter" />
              <SettingRow label="عنوان شاشة البداية" {...rowProps('splashTitle')} placeholder="واصل" description="النص الرئيسي في شاشة البداية" />
              <SettingRow label="وصف شاشة البداية" {...rowProps('splashSubtitle')} type="textarea" placeholder="متجر الخضار والفواكه الطازجة..." description="النص الفرعي أسفل العنوان" rows={2} />
              <SettingRow label="لون خلفية شاشة البداية (hex)" {...rowProps('splashBackgroundColor')} placeholder="#FFFFFF" description="لون خلفية شاشة البداية (مثال: #FFFFFF للأبيض)" />
              <SettingRow label="مدة ظهور شاشة البداية (ميلي ثانية)" {...rowProps('splashDuration')} placeholder="3000" description="المدة التي تبقى فيها شاشة البداية مرئية. 3000 = 3 ثوان" />
              <SettingRow label="صورة شاشة البداية" {...rowProps('splashImageUrl')} type="image" description="الشعار أو الصورة في شاشة البداية" />
            </SectionCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
