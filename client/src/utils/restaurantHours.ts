export interface RestaurantStatus {
  isOpen: boolean;
  nextOpenTime?: string;
  closeTime?: string;
  message: string;
  statusColor: 'green' | 'red' | 'yellow';
}

export function getRestaurantStatus(restaurant: any, appIsOpen?: boolean): RestaurantStatus {
  // If the global app is closed, force all restaurants to show as closed
  if (appIsOpen === false) {
    return {
      isOpen: false,
      message: 'التطبيق مغلق حالياً',
      statusColor: 'red',
    };
  }

  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
  const currentTime = now.toTimeString().slice(0, 5); // HH:MM format

  // Check if temporarily closed
  if (restaurant.isTemporarilyClosed) {
    return {
      isOpen: false,
      message: restaurant.temporaryCloseReason || 'مغلق مؤقتاً',
      statusColor: 'red'
    };
  }

  // Check if restaurant is manually set to closed
  if (!restaurant.isOpen) {
    return {
      isOpen: false,
      message: 'مغلق',
      statusColor: 'red'
    };
  }

  // Parse working days
  const workingDays = restaurant.workingDays 
    ? restaurant.workingDays.split(',').map(Number)
    : [0, 1, 2, 3, 4, 5, 6];

  // Check if today is a working day
  if (!workingDays.includes(currentDay)) {
    const nextWorkingDay = getNextWorkingDay(currentDay, workingDays);
    return {
      isOpen: false,
      nextOpenTime: `${getDayName(nextWorkingDay)} ${restaurant.openingTime || '08:00'}`,
      message: `مغلق اليوم - يفتح ${getDayName(nextWorkingDay)} ${restaurant.openingTime || '08:00'}`,
      statusColor: 'red'
    };
  }

  const openingTime = restaurant.openingTime || '08:00';
  const closingTime = restaurant.closingTime || '23:00';

  // Check if currently within working hours
  if (isTimeInRange(currentTime, openingTime, closingTime)) {
    const minutesUntilClose = getMinutesUntilTime(currentTime, closingTime);
    
    if (minutesUntilClose <= 30) {
      return {
        isOpen: true,
        closeTime: closingTime,
        message: `مفتوح - يغلق الساعة ${closingTime}`,
        statusColor: 'yellow'
      };
    }
    
    return {
      isOpen: true,
      closeTime: closingTime,
      message: `مفتوح حتى ${closingTime}`,
      statusColor: 'green'
    };
  }

  // Restaurant is closed - calculate next opening time
  if (currentTime < openingTime) {
    // Will open today
    return {
      isOpen: false,
      nextOpenTime: `اليوم ${openingTime}`,
      message: `مغلق - يفتح اليوم الساعة ${openingTime}`,
      statusColor: 'red'
    };
  } else {
    // Will open tomorrow or next working day
    const nextWorkingDay = getNextWorkingDay(currentDay, workingDays);
    const dayText = nextWorkingDay === (currentDay + 1) % 7 ? 'غداً' : getDayName(nextWorkingDay);
    
    return {
      isOpen: false,
      nextOpenTime: `${dayText} ${openingTime}`,
      message: `مغلق - يفتح ${dayText} الساعة ${openingTime}`,
      statusColor: 'red'
    };
  }
}

function isTimeInRange(current: string, start: string, end: string): boolean {
  const currentMinutes = timeToMinutes(current);
  const startMinutes = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);

  // Handle overnight hours (e.g., 22:00 to 02:00)
  if (endMinutes < startMinutes) {
    return currentMinutes >= startMinutes || currentMinutes <= endMinutes;
  }
  
  return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
}

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function getMinutesUntilTime(currentTime: string, targetTime: string): number {
  const currentMinutes = timeToMinutes(currentTime);
  const targetMinutes = timeToMinutes(targetTime);
  
  if (targetMinutes < currentMinutes) {
    // Next day
    return (24 * 60) - currentMinutes + targetMinutes;
  }
  
  return targetMinutes - currentMinutes;
}

function getNextWorkingDay(currentDay: number, workingDays: number[]): number {
  for (let i = 1; i <= 7; i++) {
    const nextDay = (currentDay + i) % 7;
    if (workingDays.includes(nextDay)) {
      return nextDay;
    }
  }
  return workingDays[0] || 0;
}

function getDayName(day: number): string {
  const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  return days[day] || '';
}

export function canOrderFromRestaurant(restaurant: any, appIsOpen?: boolean): { canOrder: boolean; message?: string } {
  if (appIsOpen === false) {
    return {
      canOrder: false,
      message: 'التطبيق مغلق حالياً، يرجى المحاولة لاحقاً'
    };
  }

  const status = getRestaurantStatus(restaurant);
  
  if (!status.isOpen) {
    const openMsg = status.nextOpenTime 
      ? `سيفتح ${status.nextOpenTime}` 
      : '';
    return {
      canOrder: false,
      message: `عذراً، المتجر مغلق حالياً. ${openMsg}`
    };
  }
  
  return { canOrder: true };
}

export interface AppStatus {
  isOpen: boolean;
  message: string;
  openingTime: string;
  closingTime: string;
}

export function getAppStatus(openingTime: string, closingTime: string, storeStatus?: string): AppStatus {
  if (storeStatus === 'closed') {
    return {
      isOpen: false,
      message: 'التطبيق مغلق حالياً من قِبل الإدارة',
      openingTime,
      closingTime,
    };
  }

  // إذا كان المتجر مفتوحاً يدوياً، نتجاوز فحص الوقت تماماً
  if (storeStatus === 'open') {
    return {
      isOpen: true,
      message: 'مفتوح',
      openingTime,
      closingTime,
    };
  }

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
    return {
      isOpen: true,
      message: `مفتوح حتى ${closingTime}`,
      openingTime,
      closingTime,
    };
  }

  const isBeforeOpen = currentMinutes < openMinutes;
  const openMsg = isBeforeOpen
    ? `يفتح اليوم الساعة ${openingTime}`
    : `يفتح غداً الساعة ${openingTime}`;

  return {
    isOpen: false,
    message: `التطبيق مغلق حالياً. ${openMsg}`,
    openingTime,
    closingTime,
  };
}