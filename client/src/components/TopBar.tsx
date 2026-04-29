import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { 
  ShoppingCart, 
  Heart, 
  User, 
  Search,
  Menu as MenuIcon,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useUiSettings } from '@/context/UiSettingsContext';
import { CustomerNotificationsPanel } from './CustomerNotificationsPanel';
import waselLogo from '@assets/wasel-logo.png';

// شريط حالة عمل التطبيق (مفتوح/مغلق + ساعات العمل) - استبدل زر الموقع
const WorkingHoursIndicator: React.FC = () => {
  const { getSetting } = useUiSettings();
  const storeStatus = getSetting('store_status') || 'auto';
  const openingTime = getSetting('opening_time') || '08:00';
  const closingTime = getSetting('closing_time') || '23:00';

  // حساب الحالة الفعلية
  const computeIsOpen = (): boolean => {
    if (storeStatus === 'open') return true;
    if (storeStatus === 'closed') return false;
    // تلقائي - حسب ساعات العمل
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const toMin = (t: string) => {
      const [h, m] = t.split(':').map(Number);
      return (h || 0) * 60 + (m || 0);
    };
    const open = toMin(openingTime);
    const close = toMin(closingTime);
    if (close > open) return currentMinutes >= open && currentMinutes < close;
    // عبور منتصف الليل
    return currentMinutes >= open || currentMinutes < close;
  };

  const [isOpen, setIsOpen] = React.useState(computeIsOpen);

  React.useEffect(() => {
    setIsOpen(computeIsOpen());
    const t = setInterval(() => setIsOpen(computeIsOpen()), 60000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeStatus, openingTime, closingTime]);

  // تنسيق 12 ساعة مع ص/م بالعربية
  const format12 = (t: string): string => {
    if (!t || !t.includes(':')) return t;
    const [hStr, mStr] = t.split(':');
    let h = parseInt(hStr, 10);
    const m = (mStr || '00').padStart(2, '0');
    if (isNaN(h)) return t;
    const suffix = h >= 12 ? 'م' : 'ص';
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${m} ${suffix}`;
  };

  return (
    <div className="relative px-3 pb-2.5">
      <div
        className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-xl backdrop-blur-sm border transition-colors ${
          isOpen
            ? 'bg-green-500/10 border-green-400/30'
            : 'bg-red-500/10 border-red-400/30'
        }`}
        data-testid="indicator-working-hours"
      >
        <div className="relative">
          <span
            className={`absolute inset-0 rounded-full ${
              isOpen ? 'bg-green-400 animate-ping' : 'bg-red-400'
            } opacity-60`}
          />
          <span
            className={`relative block w-2.5 h-2.5 rounded-full ${
              isOpen ? 'bg-green-400' : 'bg-red-400'
            }`}
          />
        </div>
        <Clock className={`h-3.5 w-3.5 ${isOpen ? 'text-green-300' : 'text-red-300'}`} />
        <div className="flex-1 text-right">
          <div className="text-[9px] font-bold text-white/60 leading-none">
            {isOpen ? 'التطبيق مفتوح الآن' : 'التطبيق مغلق حالياً'}
          </div>
          <div className="text-xs font-bold text-white truncate leading-tight mt-0.5">
            ساعات العمل: {format12(openingTime)} - {format12(closingTime)}
          </div>
        </div>
        <span
          className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
            isOpen
              ? 'bg-green-400/20 text-green-300 border border-green-400/30'
              : 'bg-red-400/20 text-red-300 border border-red-400/30'
          }`}
        >
          {isOpen ? 'OPEN' : 'CLOSED'}
        </span>
      </div>
    </div>
  );
};

export const TopBar: React.FC = () => {
  const [, setLocation] = useLocation();
  const { state } = useCart();
  const { user } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const { toast } = useToast();
  const { getSetting, loading: settingsLoading } = useUiSettings();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const logoUrl = getSetting('header_logo_url') || getSetting('logo_url') || waselLogo;
  const appName = getSetting('app_name') || 'واصل';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const handleOpenCart = () => {
    window.dispatchEvent(new CustomEvent('openCart'));
  };

  const getItemCount = () => state.items.reduce((sum, item) => sum + item.quantity, 0);

  const Logo = () => (
    <div 
      className="cursor-pointer shrink-0"
      onClick={() => setLocation('/')}
    >
      {settingsLoading ? (
        <div className="h-10 md:h-16 w-24 bg-gray-100 animate-pulse rounded-lg" />
      ) : logoUrl ? (
        <img src={logoUrl} alt={appName} className="h-10 md:h-16 w-auto object-contain" />
      ) : (
        <div className="text-2xl md:text-4xl font-black tracking-tighter select-none text-white">
          {appName}
        </div>
      )}
    </div>
  );

  return (
    <div className="sticky top-0 z-50">
      {/* Desktop Header - dark navy with orange accent */}
      <div className="bg-gradient-to-r from-[#0E1729] via-[#152033] to-[#0E1729] border-b border-white/10 hidden md:block shadow-lg">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-8">
          <div 
            className="cursor-pointer shrink-0 flex items-center gap-3 group"
            onClick={() => setLocation('/')}
            data-testid="link-home-logo"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#F5A623] rounded-full blur-xl opacity-25 group-hover:opacity-40 transition-opacity" />
              <img src={logoUrl} alt={appName} className="relative h-14 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_15px_rgba(245,166,35,0.45)]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-white tracking-tight">{appName}</span>
              <span className="text-[10px] font-bold text-[#F5A623] tracking-[0.3em] mt-1">WASEL</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <form onSubmit={handleSearch} className="relative group">
              <Input 
                className="w-full pr-12 pl-4 h-12 bg-gray-100 border-2 border-transparent focus:border-primary/20 focus:bg-white rounded-xl transition-all text-base font-bold"
                placeholder={t('search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
                <Search className="h-6 w-6" />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLocation(user ? '/profile' : '/auth')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <User className="h-7 w-7 text-gray-700" />
            </button>
            
            <button 
              onClick={() => setLocation('/favorites')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <Heart className="h-7 w-7 text-gray-700" />
            </button>

            <button 
              onClick={handleOpenCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <div className="relative">
                <ShoppingCart className="h-7 w-7 text-gray-700" />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-bold border-2 border-white">
                    {getItemCount()}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header - Modern glass design with navy gradient + amber accents */}
      <div className="md:hidden relative bg-gradient-to-br from-[#0E1729] via-[#152033] to-[#0B1220] shadow-xl overflow-hidden">
        {/* Decorative glow blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F5A623] opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-[#FFC061] opacity-10 blur-3xl pointer-events-none" />

        <div className="relative px-3 py-2.5 flex items-center justify-between gap-2">
          {/* Right side (RTL leading): Menu + Notifications */}
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 text-white hover:bg-white/15 shrink-0 rounded-xl" 
              onClick={() => document.getElementById('sidebar-trigger')?.click()}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
            <CustomerNotificationsPanel />
          </div>

          {/* Center: Brand pill with logo + name */}
          <div 
            className="flex-1 flex items-center justify-center cursor-pointer"
            onClick={() => setLocation('/')}
            data-testid="link-home-logo-mobile"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="relative">
                <div className="absolute inset-0 bg-[#F5A623] rounded-full blur-md opacity-50" />
                <img src={logoUrl} alt={appName} className="relative h-8 w-8 object-contain drop-shadow-[0_0_8px_rgba(245,166,35,0.5)]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-base">{appName}</span>
                <span className="text-[8px] font-bold text-[#F5A623] tracking-[0.25em] mt-0.5">WASEL</span>
              </div>
            </div>
          </div>

          {/* Left side (RTL trailing): Search + Cart */}
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="h-10 w-10 flex items-center justify-center text-white hover:bg-white/15 rounded-xl transition-colors"
              aria-label="search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={handleOpenCart}
              className="h-10 w-10 flex items-center justify-center text-white hover:bg-white/15 rounded-xl transition-colors relative"
              aria-label="cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#F5A623] text-[#0E1729] text-[9px] rounded-full h-4 min-w-4 px-1 flex items-center justify-center font-black ring-2 ring-[#0E1729] shadow-lg">
                  {getItemCount()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Working Hours Indicator */}
        <WorkingHoursIndicator />

        {/* Mobile Search Bar - Expandable */}
        {isSearchOpen && (
          <div className="relative px-3 pb-3 -mt-1">
            <form onSubmit={handleSearch} className="relative">
              <input
                autoFocus
                className="w-full bg-white/95 text-slate-900 placeholder-slate-400 border border-white/30 rounded-2xl px-4 py-2.5 pr-11 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F5A623] shadow-lg"
                placeholder="ابحث عن مطعم أو طبق..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#F5A623] text-white flex items-center justify-center shadow-md">
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}

        {/* Bottom curved decoration */}
        <div className="relative h-3 bg-background rounded-t-3xl -mb-px" />
      </div>
    </div>
  );
};

export default TopBar;
