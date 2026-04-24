import React, { useEffect, useState } from 'react';
import { useUiSettings } from '@/context/UiSettingsContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Loader2 } from 'lucide-react';
import { prefetchBootstrap } from '@/lib/bootstrap';
import waselLogo from '@assets/ChatGPT_Image_24_أبريل_2026،_07_12_29_ص_1777005957448.png';

interface SplashScreenProps {
  onFinish: () => void;
}

const MIN_SPLASH_MS = 900;   // الحد الأدنى لعرض الشاشة لتجنب الوميض
const MAX_BOOTSTRAP_MS = 6000; // أقصى انتظار لتحميل البيانات قبل تفعيل الزر

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const { getSetting, loading: settingsLoading } = useUiSettings();
  const { user } = useAuth();
  const [show, setShow] = useState(true);
  const [ready, setReady] = useState(false);

  // تحميل بيانات التطبيق من الخادم أثناء عرض السبلاش لتجنب التأخير لاحقاً
  useEffect(() => {
    let cancelled = false;
    const startedAt = Date.now();

    const phone = user?.phone || localStorage.getItem('customer_phone') || '';
    const customerId = user?.id || '';

    const bootPromise = prefetchBootstrap({ phone, customerId, force: true });
    const timeoutPromise = new Promise(resolve => setTimeout(resolve, MAX_BOOTSTRAP_MS));

    Promise.race([bootPromise, timeoutPromise]).finally(() => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, MIN_SPLASH_MS - elapsed);
      setTimeout(() => {
        if (!cancelled) setReady(true);
      }, remaining);
    });

    return () => { cancelled = true; };
  }, [user?.id, user?.phone]);

  if (settingsLoading) {
    return (
      <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const logoUrl = getSetting('logo_url') || waselLogo;
  const splashTitle = getSetting('splash_title') || 'واصل';
  const splashSubtitle = getSetting('splash_subtitle') || 'نوصل لك بكل سرعة وأمان';
  const buttonText = getSetting('splash_button_text') || 'ابدأ الآن';

  const handleStart = () => {
    setShow(false);
    setTimeout(onFinish, 500);
  };

  if (!show) {
    return (
      <div className="fixed inset-0 bg-[#0E1729] z-[9999] transition-opacity duration-500 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col transition-opacity duration-500 overflow-hidden bg-gradient-to-b from-[#0E1729] via-[#152033] to-[#0B1220]">
      {/* خلفيات إشعاع متحركة */}
      <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#F5A623] opacity-20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#FFC061] opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#F5A623] opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* خطوط سرعة متحركة */}
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute top-1/4 right-0 h-1 w-32 bg-gradient-to-l from-[#F5A623] to-transparent rounded-full splash-speed-line" />
        <div className="absolute top-1/3 right-0 h-0.5 w-24 bg-gradient-to-l from-[#FFC061] to-transparent rounded-full splash-speed-line" style={{ animationDelay: '0.4s' }} />
        <div className="absolute top-1/2 right-0 h-1 w-40 bg-gradient-to-l from-[#F5A623] to-transparent rounded-full splash-speed-line" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-2/3 right-0 h-0.5 w-28 bg-gradient-to-l from-[#FFC061] to-transparent rounded-full splash-speed-line" style={{ animationDelay: '1.2s' }} />
      </div>

      {/* قسم الشعار */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        <div className="relative splash-logo-enter">
          {/* هالة توهج خلف الشعار */}
          <div className="absolute inset-0 bg-[#F5A623] rounded-full blur-[80px] opacity-45 scale-90" />
          <div className="absolute inset-0 bg-[#FFC061] rounded-full blur-[120px] opacity-25 scale-110" />

          {/* حلقة دوّارة منقّطة حول الشعار */}
          <div className="absolute inset-0 -m-6 md:-m-8 rounded-full border-2 border-dashed border-[#F5A623]/40 splash-rotate-slow pointer-events-none" />
          <div className="absolute inset-0 -m-12 md:-m-14 rounded-full border border-[#F5A623]/15 splash-rotate-reverse pointer-events-none" />

          <img
            src={logoUrl}
            alt="واصل - Wasel"
            className="relative w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_25px_60px_rgba(245,166,35,0.6)] splash-float"
            data-testid="img-splash-logo"
          />

          {/* نقاط لامعة دوّارة */}
          <div className="absolute inset-0 -m-6 md:-m-8 splash-rotate-slow pointer-events-none">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F5A623] shadow-[0_0_12px_rgba(245,166,35,0.9)]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
          </div>
        </div>

        {/* العنوان والوصف */}
        <div className="mt-10 text-center space-y-3 splash-text-enter">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-[0_4px_20px_rgba(245,166,35,0.4)]" data-testid="text-splash-title">
            {splashTitle}
          </h1>
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#F5A623]" />
            <p className="text-[#F5A623] text-xs md:text-sm font-bold tracking-[0.4em]">WASEL</p>
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#F5A623]" />
          </div>
          <p className="text-base md:text-lg font-medium text-white/75 leading-relaxed max-w-[320px] md:max-w-md mx-auto pt-2">
            {splashSubtitle}
          </p>
        </div>
      </div>

      {/* قسم الزر */}
      <div className="w-full px-8 pb-10 md:pb-14 relative z-10 splash-button-enter">
        <div className="max-w-sm mx-auto">
          <Button
            onClick={handleStart}
            disabled={!ready}
            data-testid="button-splash-start"
            className="w-full h-16 md:h-[68px] rounded-2xl text-lg md:text-xl font-black bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#EA670F] hover:to-[#F97316] text-white shadow-[0_15px_40px_rgba(249,115,22,0.45)] flex items-center justify-center gap-3 active:scale-95 transition-all group disabled:opacity-70 disabled:cursor-not-allowed border border-white/10"
          >
            {ready ? (
              <>
                {buttonText}
                <ChevronLeft className="h-6 w-6 group-hover:-translate-x-2 transition-transform" />
              </>
            ) : (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                جاري التحميل...
              </>
            )}
          </Button>
          <p className="text-center text-white/40 text-xs mt-4 font-medium tracking-wide">
            © 2026 واصل · جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
