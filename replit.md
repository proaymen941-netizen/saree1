# واصل - Wasel Food Delivery System

## Project Overview
A comprehensive food delivery system supporting three user roles: Customers, Drivers, and Administrators. Built as a full-stack TypeScript application with a React frontend and Express backend.

## Architecture
- **Frontend**: React 18 + Vite, Tailwind CSS, Radix UI, TanStack Query, Wouter routing
- **Backend**: Node.js + Express, Drizzle ORM, PostgreSQL, WebSockets (ws), Passport.js auth
- **Database**: PostgreSQL (Replit managed), Drizzle ORM schema in `/shared/schema.ts`
- **Package Manager**: npm
- **Build Tool**: Vite (frontend) + esbuild (backend)

## Project Structure
- `/client` - React frontend application
  - `/src/pages` - Pages organized by role: admin, driver, customer
  - `/src/components` - Reusable UI components (Shadcn UI based)
  - `/src/context` - React Context providers (Auth, Cart, Location, Theme)
- `/server` - Express backend
  - `index.ts` - Entry point
  - `db.ts` - DatabaseStorage class (Drizzle ORM)
  - `storage.ts` - IStorage interface + MemStorage fallback
  - `routes/` - Modular API routes (admin, driver, orders, etc.)
  - `viteServer.ts` - Vite dev server integration
  - `seed.ts` - Default data seeding
- `/shared` - Shared code (Drizzle schema, types)
- `/drizzle` - Migration files

## Comprehensive Audit Fixes (April 27, 2026 - Session 3)

### Phase 1 — Security Hardening
- **JWT_SECRET enforcement**: `server/utils/auth-middleware.ts` and `server/routes/auth.ts` now throw at startup if `JWT_SECRET` is missing in production. Removed insecure hardcoded fallback `'saree1-secret-key-2026'`.
- **Env loading order**: Replaced `import dotenv from 'dotenv'; dotenv.config()` with `import 'dotenv/config'` in `server/index.ts` to ensure env vars load BEFORE other module imports (ES module hoisting issue).
- **Favorites endpoints** (`server/routes.ts`): Added `requireCustomerAuth` + ownership checks to all `/api/favorites/*` routes. Removed duplicate registrations of POST/GET/DELETE that lacked auth.
- **Customer routes** (`server/routes/customer.ts`): Added `requireCustomerAuth` + `requireOwnership('id')` to all `/api/customer/:id/*` routes (profile read/write, addresses CRUD, orders).
- **Customer orders by phone** (`server/routes/orders.ts`): `GET /api/orders/customer/:phone` now requires auth and verifies the authenticated user's phone matches the requested phone (admins exempted).
- **Wasalni POST** (`server/routes/wasalni.ts`): If body includes `customerId`, the request must be authenticated and the token's user id must match (or be admin). Guests can still post without `customerId`.
- **CSP relaxation**: Added OpenStreetMap tile/Nominatim hosts and Replit cartographer dev origins to helmet CSP. Added `'unsafe-eval'` for dev tooling. Production stays restrictive.

### Phase 2 — Functional Fixes
- **Reorder feature** (`client/src/pages/OrdersPage.tsx`): `handleReorder` now actually parses order items, clears the cart, adds each item with the original quantity, and navigates to `/cart`. Wasalni orders show a friendly "not supported" toast.
- **Admin Security refresh button** (`client/src/pages/AdminSecurity.tsx`): Wired the previously no-op "تحديث إعدادات الأمان" button to invalidate security queries with loading state and toast feedback.
- **Admin Financial Reports** (`client/src/pages/AdminFinancialReports.tsx`): Replaced hardcoded mock `categoryData` (مطاعم/متاجر/بقالات/صيدليات) with real revenue source breakdown computed from `latestReport` (commissions, delivery fees, platform fees, restaurant payments).

### Phase 3 — Integration / UX
- **Driver token cleanup** (`client/src/pages/DriverApp.tsx`): `handleLogout` now removes both `driver_token` (canonical) and `driverToken` (legacy) plus `driverId` to prevent stale-token issues.
- **Order cancellation toast** (`client/src/pages/driver/EnhancedDriverDashboard.tsx`): Added `order_cancelled` to the relevant WebSocket message types and a destructive toast notifying the driver of cancellation reasons.

## Driver App Audit Fixes (Session 2)
- **EnhancedDriverDashboard.tsx**: CRITICAL fix — replaced broken `WS_MANAGER` polling with a dedicated WebSocket connection for the driver app (independent of customer WS). Driver now correctly authenticates and receives real-time notifications
- **EnhancedDriverDashboard.tsx**: Removed `activeTab` from WebSocket `useEffect` dependency array (was causing WS reconnect on every tab switch). Used `activeTabRef` pattern instead to avoid stale closures
- **EnhancedDriverDashboard.tsx**: Added `driverWsRef` to share WS reference with geolocation effect (for location update sends)
- **ProfilePage.tsx**: Now fetches fresh profile data from `/api/drivers/app/dashboard` server endpoint (was only reading stale localStorage data set at login time)
- **CustomerAuthPage.tsx**: Implemented real Google Sign-In using Google Identity Services (GIS) SDK. When `VITE_GOOGLE_CLIENT_ID` env var is set, renders Google's official button and decodes real JWT to get `sub`, `email`, `name`. Falls back to clear error if unconfigured. Apple login keeps existing flow.

## Google Sign-In Setup (To Activate)
1. Create a project in Google Cloud Console and enable "Google Identity" API
2. Create OAuth 2.0 credentials (Web application type)
3. Add your Replit app URL to authorized origins
4. Set `VITE_GOOGLE_CLIENT_ID` environment variable with your client ID
5. The Google Sign-In button in `/auth` will automatically activate

## Recent Fixes Applied (Comprehensive Audit)
- Fixed `eq import` error in `server/index.ts` scheduled orders timer
- Fixed admin/driver login routing in `AuthContext.tsx` and `LoginPage.tsx`
- **Cart.tsx**: Fixed post-order redirect from broken `/order-tracking/:id` → correct `/orders/:id`
- **App.tsx**: Added missing routes: `/favorites` (Favorites), `/wasalni` (WasalniPage), `/category/:name` (CategoryPage)
- **OrderTracking.tsx**: Added WebSocket auth messages (userId + customerPhone), added auto-reconnect, added working cancel order button via `PATCH /api/orders/:id/cancel`
- **CustomerAuthPage.tsx**: Fixed social login using wrong localStorage key (`token` → `auth_token`)
- **auth.ts**: Added `isActive` field to `/api/auth/validate` response; added isActive check to block inactive users
- **admin.ts**: Added targeted `sendToUser` + `sendToDriver` calls in `PUT /api/admin/orders/:id/status` in addition to broadcast, ensuring customer gets direct WS notification when driver is assigned
- **NotificationContext.tsx**: Now listens for both `order_update` AND `order_status_changed` WS types; sends auth for both user.id and customer_phone; added Arabic status labels for notifications
- **socket.ts**: Fixed missing `isAlive` field in client entries on auth

## Key Auth Pattern
- Customer auth token stored as `auth_token` in localStorage = user UUID
- Admin: `admin_token`, Driver: `driver_token`
- Customer phone stored in `customer_phone` localStorage key
- WS auth sends both userId (UUID) and phone to cover all targeting patterns

## Driver Earnings Bug Fix (Critical)
**Bug**: Driver wallet balance was being doubled on order completion (e.g., 3000 earned → 6000 added).
**Root Cause**: In `server/db.ts` `completeOrder()`, both `updateDriverBalance()` AND `createDriverCommission()` (which internally calls `createDriverTransaction()` which calls `updateDriverBalance()` again) were called for the same amount.
**Fix Applied**:
1. `completeOrder()` (db.ts): Removed direct `updateDriverBalance()` call - now only `createDriverCommission()` handles the balance update chain
2. `add-balance` route (advanced.ts): Removed extra `updateDriverBalance()` call - now only `createDriverTransaction()` updates the balance  
3. Withdrawal approval route (advanced.ts): Same fix - removed duplicate `updateDriverBalance()` call

## Restaurant Financial Statement
- **API**: `GET /api/restaurant-accounts/:restaurantId/statement?from=&to=` - returns detailed order-by-order breakdown with commission, net earnings, and withdrawal history
- **UI Page**: `client/src/pages/admin/RestaurantStatementPage.tsx` - full-featured statement with period filter, summary cards, detailed order table, withdrawal history, print, and PDF download (jsPDF + autoTable)
- **Navigation**: Added "تقرير PDF" button in `AdminRestaurantAccounts.tsx` next to each restaurant
- **Route**: `/admin/restaurant-accounts/:restaurantId/statement`

## Real-time Dashboard Updates
- Admin Dashboard (`AdminDashboard.tsx`): Added WebSocket listener for instant invalidation on order/notification events, reduced polling to 15 seconds
- Driver Dashboard: Already had WebSocket + added wasalni query invalidation
- Customer Notifications Panel: Added WebSocket for real-time notification refresh
- Added GPS location auto-fill (Nominatim reverse geocoding) to WasalniPage steps 1 & 2
- Added conditional coupon field in CartPage based on `coupon_min_order_value` setting
- Added `coupon_min_order_value` to seed.ts and AdminUiSettings admin panel
- Removed hard location requirement from cart checkout button (order can be placed without GPS)
- Fixed React invalid hook call and setState-in-render warning in App.tsx

## Development
- **Dev command**: `npm run dev` (runs Express + Vite middleware on port 5000)
- **Build command**: `npm run build`
- **DB push**: `npm run db:push`

## Key Features
- Customer app: Browse restaurants/categories, place orders, order tracking
- Driver app: Manage deliveries, earnings, wallet
- Admin panel: Orders management, drivers, financial reports, system settings
- Real-time updates via WebSockets
- PWA support with service worker
- Scheduled orders with auto-activation timer
- Hidden 4-click admin access (tap logo)
- **AppClosedOverlay**: Interactive popup when store is closed, allows scheduling orders with date/time picker
- **Wasalni Service (وصل لي)**: Full delivery-from-anywhere service
  - Customer page: `/wasalni` with from/to address, order type, scheduled time, notes, invoice view
  - Admin page: `/admin/wasalni` with request management, status updates, fee setting
  - DB table: `wasalni_requests` (schema in `/shared/schema.ts`)
  - API: `/api/wasalni` (CRUD in `server/routes/wasalni.ts`)
  - Toggle: `show_wasalni_service` UI setting in admin panel
- **Notifications fix**: Customer notifications now correctly fetched from server
- **Scheduled orders bypass closure**: Scheduled orders allowed even when store is closed

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection (managed by Replit)
- `SESSION_SECRET` - Session encryption key (managed by Replit)
- `NODE_ENV` - Set to "development" for dev mode

## Deployment
- Target: autoscale
- Build: `npm run build`
- Run: `node dist/index.js`

## Replit Import Setup (April 27, 2026)
- **Missing `helmet` and `express-rate-limit` deps**: `server/index.ts` imports `helmet` and `express-rate-limit` but they were not listed in `package.json`. This is what caused the Render deployment to crash with `ERR_MODULE_NOT_FOUND: Cannot find package 'helmet'`. Installed both packages so they are now in `dependencies` (helmet ^8.x, express-rate-limit ^8.x). This must be committed and redeployed on Render.
- **Database schema**: `npm run db:push --force` was run against the existing Neon `DATABASE_URL` (from `.env`) to create all 54 tables. Default seed data (categories, restaurants, menu items, admin users, drivers, 73 UI settings) was then inserted automatically by `seedDefaultData()` on first server start.
- **Workflow**: A Replit workflow named "Start application" runs `npm run dev` and binds to port 5000 (webview). The dev script sets `NODE_ENV=development` so Vite middleware is mounted (the `.env` file has `NODE_ENV=production` for Render, but `dotenv.config({ override: false })` in `server/index.ts` correctly leaves the dev-time value untouched).
- **Deployment**: Configured for `autoscale` with build `npm run build` and start `npm run start` (the existing scripts).
- **Vite config**: Already correct for Replit — `host: 0.0.0.0`, `port: 5000`, `allowedHosts: true`, HMR via `wss` on port 443. No changes needed.

## Latest Session Fixes (April 2026)
- **Targeted notifications (server/socket.ts)**: New `notifyOrder(type, payload, recipients)` helper sends WebSocket events only to the specific customer (by id and phone), assigned driver, admin dashboard, and active order trackers. Replaced all global `ws.broadcast('order_update', ...)` calls in `server/routes/orders.ts`, `server/routes/wasalni.ts`, `server/routes/driver.ts`, and one in `server/routes/admin.ts` with `ws.notifyOrder(...)` so each customer only receives their own order updates.
- **TopBar working hours indicator**: Replaced the "deliver to current location" mobile button with a `WorkingHoursIndicator` (`client/src/components/TopBar.tsx`) that reads `store_status`, `opening_time`, `closing_time` from `useUiSettings`, computes open/closed automatically (supports midnight crossover), and shows time in 12-hour format with Arabic ص/م suffix. Auto-refreshes every minute.
- **AdminOffers.tsx**: Converted misused `useState(() => {...})` to `useEffect`. Added `onError` toasts and proper `response.ok` checks to all three mutations (create / update / delete). Switched `validUntil` to ISO string for safer JSON serialization. Verified end-to-end with `POST /api/admin/special-offers` returning 201 with auto-linked "العروض" category.
- **Admin sidebar cleanup (AdminLayout.tsx)**: Removed three menu items whose routes had no page (would render NotFound): "تقارير المتاجر" (`/admin/restaurant-reports`), "التقارير التفصيلية" (`/admin/detailed-reports`), "التقارير المتقدمة" (`/admin/advanced-reports`).
- **Google Sign-In secret**: Requested `VITE_GOOGLE_CLIENT_ID` from the user (the GIS button code in `CustomerAuthPage.tsx` was already complete from a previous session and activates as soon as the env var is set).
