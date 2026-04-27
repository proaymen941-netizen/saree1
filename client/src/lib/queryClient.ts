import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Centralized token management
const TOKEN_KEYS = {
  customer: 'auth_token',
  admin: 'admin_token',
  driver: 'driver_token',
};

function getTokenByPath(url: string): string | null {
  if (url.includes('/api/admin/') || url.includes('/api/restaurant-accounts/') || url.includes('/api/flutter/')) {
    return localStorage.getItem(TOKEN_KEYS.admin);
  }
  if (url.includes('/api/drivers/') && (url.includes('/app/') || url.includes('/profile') || url.includes('/stats') || url.includes('/balance'))) {
    return localStorage.getItem(TOKEN_KEYS.driver);
  }
  // For customer-facing auth-protected endpoints
  if (url.includes('/api/users/') || url.includes('/api/cart/') || url.includes('/api/favorites/') || 
      url.includes('/api/orders/') || url.includes('/api/notifications/customer')) {
    return localStorage.getItem(TOKEN_KEYS.customer);
  }
  return null;
}

// Global fetch patch: auto-injects tokens and handles 401
if (typeof window !== 'undefined' && !(window as any).__authFetchPatched) {
  const originalFetch = window.fetch.bind(window);
  (window as any).__authFetchPatched = true;
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : (input as Request).url;
    
    // Inject Authorization header if token exists for this path
    const token = getTokenByPath(url || '');
    if (token) {
      const headers = new Headers(init?.headers || (input instanceof Request ? input.headers : {}));
      if (!headers.has('Authorization')) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      init = { ...(init || {}), headers };
    }

    const response = await originalFetch(input as any, init);

    // Handle 401 Unauthorized globally
    if (response.status === 401) {
      console.warn('🚨 401 Unauthorized received for:', url);
      
      // Clear all tokens and redirect to login
      Object.values(TOKEN_KEYS).forEach(key => localStorage.removeItem(key));
      
      // Only redirect if we're not already on a login page
      if (typeof window !== 'undefined' && !url?.includes('/login')) {
        window.location.href = '/login';
      }
    }

    return response;
  };
}

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const headers: Record<string, string> = {};
  
  if (data) {
    headers["Content-Type"] = "application/json";
  }
  
  // Token is injected via global fetch patch, no need to add here

  const res = await fetch(url, {
    method,
    headers,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const url = queryKey.join("/") as string;
    const headers: Record<string, string> = {};
    
    // Token injection handled by global fetch patch

    const res = await fetch(url, {
      headers,
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,       // Disable auto-refetch by default (use WebSockets instead)
      refetchOnWindowFocus: false,  // Disable refetch on window focus to reduce requests
      staleTime: 60 * 1000,         // 1 minute cache for most data
      gcTime: 5 * 60 * 1000,        // Keep in cache for 5 minutes
      retry: (failureCount, error: any) => {
        if (error?.message?.includes('401') || error?.message?.includes('403') || error?.message?.includes('500')) {
          return false;
        }
        return failureCount < 2;
      },
    },
    mutations: {
      retry: false,
    },
  },
});

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const url = queryKey.join("/") as string;
    const headers: Record<string, string> = {};
    
    // Add Authorization header for admin API calls
    if (url.startsWith('/api/admin/')) {
      const token = localStorage.getItem('admin_token');
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    const res = await fetch(url, {
      headers,
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,       // Disable auto-refetch by default (use WebSockets instead)
      refetchOnWindowFocus: false,  // Disable refetch on window focus to reduce requests
      staleTime: 60 * 1000,         // 1 minute cache for most data
      gcTime: 5 * 60 * 1000,        // Keep in cache for 5 minutes
      retry: (failureCount, error: any) => {
        if (error?.message?.includes('401') || error?.message?.includes('403') || error?.message?.includes('500')) {
          return false;
        }
        return failureCount < 2;
      },
    },
    mutations: {
      retry: false,
    },
  },
});
