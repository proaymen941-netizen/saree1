import { useQuery } from '@tanstack/react-query';
import { Clock } from 'lucide-react';
import { useMemo, useState, useEffect } from 'react';

const calculateStoreStatus = (openingTime: string, closingTime: string): { isOpen: boolean; message: string } => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);
  
  const currentMinutes = timeToMinutes(currentTime);
  const openMinutes = timeToMinutes(openingTime);
  const closeMinutes = timeToMinutes(closingTime);
  
  let isOpen = false;
  
  if (closeMinutes > openMinutes) {
    isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  } else {
    isOpen = currentMinutes >= openMinutes || currentMinutes < closeMinutes;
  }
  
  if (isOpen) {
    let minutesUntilClose;
    if (closeMinutes > openMinutes) {
      minutesUntilClose = closeMinutes - currentMinutes;
    } else {
      if (currentMinutes >= openMinutes) {
        minutesUntilClose = (24 * 60) + closeMinutes - currentMinutes;
      } else {
        minutesUntilClose = closeMinutes - currentMinutes;
      }
    }
    
    if (minutesUntilClose <= 30) {
      return { isOpen: true, message: `يغلق قريباً - ${closingTime}` };
    }
    return { isOpen: true, message: `مفتوح حتى ${closingTime}` };
  }
  
  return { isOpen: false, message: `يفتح الساعة ${openingTime}` };
};

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

export default function TimingBanner() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const { data: uiSettings } = useQuery({
    queryKey: ['/api/admin/ui-settings'],
  });

  const openingTime = (uiSettings as any[])?.find((setting: any) => setting.key === 'opening_time')?.value || '11:00';
  const closingTime = (uiSettings as any[])?.find((setting: any) => setting.key === 'closing_time')?.value || '23:00';
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);
  
  const storeStatus = useMemo(() => {
    return calculateStoreStatus(openingTime, closingTime);
  }, [openingTime, closingTime, currentTime]);

  return (
    <div className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        <div
          className={`shrink-0 px-3 py-1 rounded-lg text-xs font-black ${
            storeStatus.isOpen
              ? 'bg-emerald-500 text-white'
              : 'bg-gray-800 text-white'
          }`}
        >
          {storeStatus.isOpen ? 'مفتوح' : 'مغلق'}
        </div>
        <div className="flex-1 flex items-center justify-center gap-2 text-sm text-gray-600 font-medium">
          <Clock className="h-4 w-4 text-primary shrink-0" />
          <span>أوقات الدوام من الساعة <strong>{openingTime}</strong> حتى <strong>{closingTime}</strong></span>
        </div>
      </div>
    </div>
  );
}
