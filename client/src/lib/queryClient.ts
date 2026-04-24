import { QueryClient, QueryFunction } from "@tanstack/react-query";

// اعتراض fetch عام لإضافة توكن المدير تلقائياً لجميع طلبات /api/admin/* و /api/restaurant-accounts/*
// يضمن عمل جميع الاستدعاءات المباشرة (بدون apiRequest) بعد تفعيل المصادقة في الخادم.
if (typeof window !== 'undefined' && !(window as any).__adminFetchPatched) {
  const originalFetch = window.fetch.bind(window);
  (window as any).__adminFetchPatched = true;
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    try {
      const url = typeof input === 'string'
        ? input
        : input instanceof URL ? input.toString() : (input as Request).url;
      const needsAdminAuth = url.includes('/api/admin/')
        || url.includes('/api/restaurant-accounts/')
        || url.includes('/api/flutter/');
      if (needsAdminAuth) {
        const token = localStorage.getItem('admin_token');
        if (token) {
          const headers = new Headers(init?.headers || (input instanceof Request ? input.headers : {}));
          if (!headers.has('Authorization')) {
            headers.set('Authorization', `Bearer ${token}`);
          }
          init = { ...(init || {}), headers };
        }
      }
    } catch {}
    return originalFetch(input as any, init);
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
  
  // Add Authorization header for admin API calls
  if (url.startsWith('/api/admin/')) {
    const token = localStorage.getItem('admin_token');
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  const res = await fetch(url, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
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
