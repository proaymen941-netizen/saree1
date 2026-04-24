import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { 
  ShoppingCart, 
  Heart, 
  User, 
  Search,
  Menu as MenuIcon,
  MapPin,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useUiSettings } from '@/context/UiSettingsContext';
import { CustomerNotificationsPanel } from './CustomerNotificationsPanel';
import waselLogo from '@assets/ChatGPT_Image_24_أبريل_2026،_07_12_29_ص_1777004113284.png';

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
            <img src={logoUrl} alt={appName} className="h-14 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-white tracking-tight">{appName}</span>
              <span className="text-[10px] font-bold text-[#F97316] tracking-[0.25em] mt-0.5">WASEL</span>
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

      {/* Mobile Header - Red-Orange background like reference image */}
      <div className="md:hidden header-gradient shadow-md">
        <div className="px-3 py-2.5 flex items-center justify-between gap-2">
          {/* Right side: Menu + Notifications + Search */}
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 text-white hover:bg-white/20 shrink-0" 
              onClick={() => document.getElementById('sidebar-trigger')?.click()}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
            <CustomerNotificationsPanel />
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="h-10 w-10 flex items-center justify-center text-white hover:bg-white/20 rounded-full transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Center: App Name + Location */}
          <div 
            className="flex-1 flex flex-col items-center cursor-pointer"
            onClick={() => setLocation('/')}
          >
            <span className="text-white font-black text-lg leading-tight">واصل</span>
            <div className="flex items-center gap-1 text-white/90 text-[10px] mt-0.5">
              <span>دوماً في خدمتك</span>
              <ChevronDown className="h-3 w-3" />
            </div>
          </div>

          {/* Left side: Location Pin + Cart */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleOpenCart}
              className="h-10 w-10 flex items-center justify-center text-white hover:bg-white/20 rounded-full transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-white text-primary text-[9px] rounded-full h-4 w-4 flex items-center justify-center font-black border border-primary/20">
                  {getItemCount()}
                </span>
              )}
            </button>
            <button
              onClick={() => setLocation('/favorites')}
              className="h-10 w-10 flex items-center justify-center text-white hover:bg-white/20 rounded-full transition-colors"
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Expandable */}
        {isSearchOpen && (
          <div className="px-3 pb-2.5">
            <form onSubmit={handleSearch} className="relative">
              <input
                autoFocus
                className="w-full bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:bg-white/30"
                placeholder="ابحث عن مطعم أو طبق..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
