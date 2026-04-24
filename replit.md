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

## Recent Fixes Applied
- Fixed `eq import` error in `server/index.ts` scheduled orders timer
- Fixed admin/driver login routing in `AuthContext.tsx` and `LoginPage.tsx`

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
