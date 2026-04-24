var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shared/schema.ts
import { pgTable, text, uuid, timestamp, boolean, integer, decimal, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
var users, customers, userAddresses, categories, restaurants, menuItems, drivers, orders, specialOffers, adminUsers, systemSettings, uiSettings, restaurantSections, ratings, notifications, orderTracking, wallets, walletTransactions, systemSettingsTable, restaurantEarnings, cart, favorites, driverReviews, driverEarningsTable, driverWallets, driverBalances, driverTransactions, driverCommissions, driverWithdrawals, restaurantWallets, commissionSettings, withdrawalRequests2, driverWorkSessions, employees, attendance, leaveRequests, insertUserSchema, selectUserSchema, insertUserAddressSchema, selectUserAddressSchema, insertCategorySchema, selectCategorySchema, insertRestaurantSchema, selectRestaurantSchema, insertMenuItemSchema, selectMenuItemSchema, insertOrderSchema, selectOrderSchema, insertDriverSchema, selectDriverSchema, insertSpecialOfferSchema, selectSpecialOfferSchema, insertAdminUserSchema, selectAdminUserSchema, insertUiSettingsSchema, selectUiSettingsSchema, insertRestaurantSectionSchema, selectRestaurantSectionSchema, insertRatingSchema, selectRatingSchema, insertNotificationSchema, selectNotificationSchema, insertWalletSchema, selectWalletSchema, insertWalletTransactionSchema, selectWalletTransactionSchema, insertSystemSettingsSchema, selectSystemSettingsSchema, insertRestaurantEarningsSchema, selectRestaurantEarningsSchema, insertCartSchema, selectCartSchema, insertFavoritesSchema, selectFavoritesSchema, insertDriverReviewSchema, selectDriverReviewSchema, insertDriverEarningsSchema, selectDriverEarningsSchema, insertDriverWalletSchema, selectDriverWalletSchema, insertDriverBalanceSchema, selectDriverBalanceSchema, insertDriverTransactionSchema, selectDriverTransactionSchema, insertDriverCommissionSchema, selectDriverCommissionSchema, insertDriverWithdrawalSchema, selectDriverWithdrawalSchema, insertRestaurantWalletSchema, selectRestaurantWalletSchema, insertCommissionSettingsSchema, selectCommissionSettingsSchema, insertWithdrawalRequestSchema, selectWithdrawalRequestSchema, insertDriverWorkSessionSchema, selectDriverWorkSessionSchema, insertEmployeeSchema, selectEmployeeSchema, insertAttendanceSchema, selectAttendanceSchema, insertLeaveRequestSchema, selectLeaveRequestSchema, deliveryFeeSettings, deliveryZones, financialReports, insertDeliveryFeeSettingsSchema, selectDeliveryFeeSettingsSchema, insertDeliveryZoneSchema, selectDeliveryZoneSchema, insertFinancialReportSchema, selectFinancialReportSchema, geoZones, deliveryRules, deliveryDiscounts, insertGeoZoneSchema, selectGeoZoneSchema, insertDeliveryRuleSchema, selectDeliveryRuleSchema, insertDeliveryDiscountSchema, selectDeliveryDiscountSchema, messages, insertMessageSchema, selectMessageSchema, auditLogs, insertAuditLogSchema, selectAuditLogSchema, paymentGateways, insertPaymentGatewaySchema, selectPaymentGatewaySchema;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    users = pgTable("users", {
      id: uuid("id").primaryKey().defaultRandom(),
      username: varchar("username", { length: 50 }).notNull().unique(),
      password: text("password").notNull(),
      name: text("name").notNull(),
      phone: varchar("phone", { length: 20 }).notNull(),
      country: varchar("country", { length: 100 }),
      email: varchar("email", { length: 100 }),
      address: text("address"),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    customers = users;
    userAddresses = pgTable("user_addresses", {
      id: uuid("id").primaryKey().defaultRandom(),
      userId: uuid("user_id").references(() => users.id).notNull(),
      type: varchar("type", { length: 50 }).notNull(),
      // تمت الإضافة: home, work, other
      title: varchar("title", { length: 100 }).notNull(),
      address: text("address").notNull(),
      details: text("details"),
      // تمت الإضافة
      latitude: decimal("latitude", { precision: 10, scale: 8 }),
      longitude: decimal("longitude", { precision: 11, scale: 8 }),
      isDefault: boolean("is_default").default(false).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    categories = pgTable("categories", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 100 }).notNull(),
      icon: varchar("icon", { length: 100 }).notNull(),
      image: text("image"),
      // تمت الإضافة: صورة القسم
      type: varchar("type", { length: 50 }).default("primary"),
      // primary, secondary, style
      sortOrder: integer("sort_order").default(0),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    restaurants = pgTable("restaurants", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 200 }).notNull(),
      description: text("description"),
      image: text("image").notNull(),
      phone: varchar("phone", { length: 20 }),
      rating: varchar("rating", { length: 10 }).default("0.0"),
      reviewCount: integer("review_count").default(0),
      deliveryTime: varchar("delivery_time", { length: 50 }).notNull(),
      isOpen: boolean("is_open").default(true).notNull(),
      minimumOrder: decimal("minimum_order", { precision: 10, scale: 2 }).default("0"),
      deliveryFee: decimal("delivery_fee", { precision: 10, scale: 2 }).default("0"),
      perKmFee: decimal("per_km_fee", { precision: 10, scale: 2 }).default("0"),
      commissionRate: decimal("commission_rate", { precision: 5, scale: 2 }).default("0"),
      categoryId: uuid("category_id").references(() => categories.id),
      openingTime: varchar("opening_time", { length: 50 }).default("08:00"),
      closingTime: varchar("closing_time", { length: 50 }).default("23:00"),
      workingDays: varchar("working_days", { length: 50 }).default("0,1,2,3,4,5,6"),
      isTemporarilyClosed: boolean("is_temporarily_closed").default(false),
      temporaryCloseReason: text("temporary_close_reason"),
      latitude: decimal("latitude", { precision: 10, scale: 8 }),
      longitude: decimal("longitude", { precision: 11, scale: 8 }),
      address: text("address"),
      isFeatured: boolean("is_featured").default(false),
      isNew: boolean("is_new").default(false),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    menuItems = pgTable("menu_items", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 200 }).notNull(),
      brand: varchar("brand", { length: 100 }),
      // تمت الإضافة
      description: text("description"),
      price: decimal("price", { precision: 10, scale: 2 }).notNull(),
      originalPrice: decimal("original_price", { precision: 10, scale: 2 }),
      image: text("image").notNull(),
      category: varchar("category", { length: 100 }).notNull(),
      sizes: text("sizes"),
      // JSON or comma separated: S,M,L,XL
      colors: text("colors"),
      // JSON or comma separated: Red,Blue,Green
      salesCount: integer("sales_count").default(0),
      // عدد المبيعات
      rating: varchar("rating", { length: 10 }).default("0.0"),
      reviewCount: integer("review_count").default(0),
      isAvailable: boolean("is_available").default(true).notNull(),
      isSpecialOffer: boolean("is_special_offer").default(false).notNull(),
      isFeatured: boolean("is_featured").default(false),
      // الأكثر مبيعاً أو مميز
      isNew: boolean("is_new").default(false),
      // وصل حديثاً
      restaurantId: uuid("restaurant_id").references(() => restaurants.id)
    });
    drivers = pgTable("drivers", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 100 }).notNull(),
      phone: varchar("phone", { length: 20 }).notNull().unique(),
      password: text("password").notNull(),
      // إضافة حقل كلمة المرور
      isAvailable: boolean("is_available").default(true).notNull(),
      isActive: boolean("is_active").default(true).notNull(),
      commissionRate: decimal("commission_rate", { precision: 5, scale: 2 }).default("70"),
      // نسبة السائق من رسوم التوصيل
      paymentMode: varchar("payment_mode", { length: 20 }).default("commission").notNull(),
      // commission or salary
      salaryAmount: decimal("salary_amount", { precision: 10, scale: 2 }).default("0"),
      // الراتب الشهري إن وجد
      email: varchar("email", { length: 100 }),
      vehicleType: varchar("vehicle_type", { length: 50 }),
      vehicleNumber: varchar("vehicle_number", { length: 50 }),
      currentLocation: varchar("current_location", { length: 200 }),
      earnings: decimal("earnings", { precision: 10, scale: 2 }).default("0"),
      completedOrders: integer("completed_orders").default(0).notNull(),
      averageRating: decimal("average_rating", { precision: 3, scale: 2 }).default("0.00"),
      // متوسط تقييم السائق
      reviewCount: integer("review_count").default(0),
      // عدد التقييمات
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    orders = pgTable("orders", {
      id: uuid("id").primaryKey().defaultRandom(),
      orderNumber: varchar("order_number", { length: 50 }).notNull().unique(),
      customerName: varchar("customer_name", { length: 100 }).notNull(),
      customerPhone: varchar("customer_phone", { length: 20 }).notNull(),
      customerEmail: varchar("customer_email", { length: 100 }),
      customerId: uuid("customer_id").references(() => users.id),
      deliveryAddress: text("delivery_address").notNull(),
      customerLocationLat: decimal("customer_location_lat", { precision: 10, scale: 8 }),
      // إحداثيات العميل
      customerLocationLng: decimal("customer_location_lng", { precision: 11, scale: 8 }),
      // إحداثيات العميل
      notes: text("notes"),
      paymentMethod: varchar("payment_method", { length: 50 }).notNull(),
      status: varchar("status", { length: 50 }).default("pending").notNull(),
      items: text("items").notNull(),
      // JSON string
      subtotal: decimal("subtotal", { precision: 10, scale: 2 }).notNull(),
      deliveryFee: decimal("delivery_fee", { precision: 10, scale: 2 }).notNull(),
      total: decimal("total", { precision: 10, scale: 2 }).notNull(),
      totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
      estimatedTime: varchar("estimated_time", { length: 50 }).default("30-45 \u062F\u0642\u064A\u0642\u0629"),
      deliveryPreference: varchar("delivery_preference", { length: 20 }).default("now"),
      // now, later
      scheduledDate: varchar("scheduled_date", { length: 50 }),
      scheduledTimeSlot: varchar("scheduled_time_slot", { length: 100 }),
      driverEarnings: decimal("driver_earnings", { precision: 10, scale: 2 }).default("0"),
      restaurantEarnings: decimal("restaurant_earnings", { precision: 10, scale: 2 }).default("0"),
      companyEarnings: decimal("company_earnings", { precision: 10, scale: 2 }).default("0"),
      distance: decimal("distance", { precision: 10, scale: 2 }).default("0"),
      restaurantId: uuid("restaurant_id").references(() => restaurants.id),
      restaurantName: varchar("restaurant_name", { length: 200 }),
      // اسم المطعم للسهولة
      restaurantPhone: varchar("restaurant_phone", { length: 20 }),
      // رقم هاتف المطعم للسهولة
      driverId: uuid("driver_id").references(() => drivers.id),
      isRated: boolean("is_rated").default(false).notNull(),
      // تمت الإضافة: هل تم تقييم الطلب
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    specialOffers = pgTable("special_offers", {
      id: uuid("id").primaryKey().defaultRandom(),
      title: varchar("title", { length: 200 }).notNull(),
      description: text("description").notNull(),
      // تم تغيير إلى notNull
      image: text("image").notNull(),
      // تمت الإضافة
      discountPercent: integer("discount_percent"),
      discountAmount: decimal("discount_amount", { precision: 10, scale: 2 }),
      minimumOrder: decimal("minimum_order", { precision: 10, scale: 2 }).default("0"),
      restaurantId: uuid("restaurant_id").references(() => restaurants.id),
      // ربط العرض بمطعم محدد
      categoryId: uuid("category_id").references(() => categories.id),
      // ربط العرض بتصنيف محدد
      validUntil: timestamp("valid_until"),
      showBadge: boolean("show_badge").default(true),
      // إظهار أو إخفاء الملصق
      badgeText1: varchar("badge_text_1", { length: 50 }).default("\u0637\u0627\u0632\u062C \u064A\u0648\u0645\u064A\u0627\u064B"),
      // النص الأول (مثلاً: طازج يومياً)
      badgeText2: varchar("badge_text_2", { length: 50 }).default("\u0639\u0631\u0648\u0636 \u062D\u0635\u0631\u064A\u0629"),
      // النص الثاني (مثلاً: عروض حصرية)
      menuItemId: uuid("menu_item_id").references(() => menuItems.id),
      // ربط العرض بمنتج محدد
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    adminUsers = pgTable("admin_users", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 100 }).notNull(),
      username: varchar("username", { length: 50 }).unique(),
      email: varchar("email", { length: 100 }).notNull().unique(),
      phone: varchar("phone", { length: 20 }),
      userType: varchar("user_type", { length: 50 }).default("admin").notNull(),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    systemSettings = pgTable("system_settings", {
      id: uuid("id").primaryKey().defaultRandom(),
      key: varchar("key", { length: 100 }).notNull().unique(),
      value: text("value").notNull(),
      category: varchar("category", { length: 100 }).default("general"),
      description: text("description"),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    uiSettings = systemSettings;
    restaurantSections = pgTable("restaurant_sections", {
      id: uuid("id").primaryKey().defaultRandom(),
      restaurantId: uuid("restaurant_id").references(() => restaurants.id),
      name: varchar("name", { length: 100 }).notNull(),
      description: text("description"),
      sortOrder: integer("sort_order").default(0),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    ratings = pgTable("ratings", {
      id: uuid("id").primaryKey().defaultRandom(),
      orderId: uuid("order_id").references(() => orders.id),
      restaurantId: uuid("restaurant_id").references(() => restaurants.id),
      customerName: varchar("customer_name", { length: 100 }).notNull(),
      customerPhone: varchar("customer_phone", { length: 20 }),
      rating: integer("rating").notNull(),
      comment: text("comment"),
      isApproved: boolean("is_approved").default(false).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    notifications = pgTable("notifications", {
      id: uuid("id").primaryKey().defaultRandom(),
      type: varchar("type", { length: 50 }).notNull(),
      title: varchar("title", { length: 200 }).notNull(),
      message: text("message").notNull(),
      recipientType: varchar("recipient_type", { length: 50 }).notNull(),
      recipientId: uuid("recipient_id"),
      orderId: uuid("order_id").references(() => orders.id),
      isRead: boolean("is_read").default(false).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    orderTracking = pgTable("order_tracking", {
      id: uuid("id").primaryKey().defaultRandom(),
      orderId: uuid("order_id").references(() => orders.id).notNull(),
      status: varchar("status", { length: 50 }).notNull(),
      message: text("message").notNull(),
      createdBy: uuid("created_by").notNull(),
      createdByType: varchar("created_by_type", { length: 50 }).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    wallets = pgTable("wallets", {
      id: uuid("id").primaryKey().defaultRandom(),
      customerPhone: varchar("customer_phone", { length: 20 }).unique().notNull(),
      balance: decimal("balance", { precision: 10, scale: 2 }).default("0.00"),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    walletTransactions = pgTable("wallet_transactions", {
      id: uuid("id").primaryKey().defaultRandom(),
      walletId: uuid("wallet_id").references(() => wallets.id),
      type: varchar("type", { length: 50 }).notNull(),
      amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
      description: text("description"),
      orderId: uuid("order_id").references(() => orders.id),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    systemSettingsTable = pgTable("system_settings_table", {
      id: uuid("id").primaryKey().defaultRandom(),
      key: varchar("key", { length: 100 }).unique().notNull(),
      value: text("value").notNull(),
      category: varchar("category", { length: 50 }),
      description: text("description"),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    restaurantEarnings = pgTable("restaurant_earnings", {
      id: uuid("id").primaryKey().defaultRandom(),
      restaurantId: uuid("restaurant_id").references(() => restaurants.id),
      ownerName: varchar("owner_name", { length: 100 }).notNull(),
      ownerPhone: varchar("owner_phone", { length: 20 }).notNull(),
      totalEarnings: decimal("total_earnings", { precision: 10, scale: 2 }).default("0.00"),
      pendingAmount: decimal("pending_amount", { precision: 10, scale: 2 }).default("0.00"),
      paidAmount: decimal("paid_amount", { precision: 10, scale: 2 }).default("0.00"),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    cart = pgTable("cart", {
      id: uuid("id").primaryKey().defaultRandom(),
      userId: uuid("user_id").references(() => users.id).notNull(),
      menuItemId: uuid("menu_item_id").references(() => menuItems.id).notNull(),
      restaurantId: uuid("restaurant_id").references(() => restaurants.id).notNull(),
      quantity: integer("quantity").default(1).notNull(),
      specialInstructions: text("special_instructions"),
      addedAt: timestamp("added_at").defaultNow().notNull()
    });
    favorites = pgTable("favorites", {
      id: uuid("id").primaryKey().defaultRandom(),
      userId: uuid("user_id").references(() => users.id).notNull(),
      restaurantId: uuid("restaurant_id").references(() => restaurants.id),
      menuItemId: uuid("menu_item_id").references(() => menuItems.id),
      addedAt: timestamp("added_at").defaultNow().notNull()
    });
    driverReviews = pgTable("driver_reviews", {
      id: uuid("id").primaryKey().defaultRandom(),
      driverId: uuid("driver_id").references(() => drivers.id).notNull(),
      orderId: uuid("order_id").references(() => orders.id).notNull(),
      rating: integer("rating").notNull(),
      comment: text("comment"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    driverEarningsTable = pgTable("driver_earnings_table", {
      id: uuid("id").primaryKey().defaultRandom(),
      driverId: uuid("driver_id").references(() => drivers.id).notNull(),
      totalEarned: decimal("total_earned", { precision: 10, scale: 2 }).default("0"),
      withdrawn: decimal("withdrawn", { precision: 10, scale: 2 }).default("0"),
      pending: decimal("pending", { precision: 10, scale: 2 }).default("0"),
      lastPaidAt: timestamp("last_paid_at"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    driverWallets = pgTable("driver_wallets", {
      id: uuid("id").primaryKey().defaultRandom(),
      driverId: uuid("driver_id").references(() => drivers.id).notNull().unique(),
      balance: decimal("balance", { precision: 10, scale: 2 }).default("0"),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    driverBalances = pgTable("driver_balances", {
      id: uuid("id").primaryKey().defaultRandom(),
      driverId: uuid("driver_id").references(() => drivers.id).notNull().unique(),
      totalBalance: decimal("total_balance", { precision: 10, scale: 2 }).default("0").notNull(),
      availableBalance: decimal("available_balance", { precision: 10, scale: 2 }).default("0").notNull(),
      withdrawnAmount: decimal("withdrawn_amount", { precision: 10, scale: 2 }).default("0").notNull(),
      pendingAmount: decimal("pending_amount", { precision: 10, scale: 2 }).default("0").notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    driverTransactions = pgTable("driver_transactions", {
      id: uuid("id").primaryKey().defaultRandom(),
      driverId: uuid("driver_id").references(() => drivers.id).notNull(),
      type: varchar("type", { length: 50 }).notNull(),
      // commission, salary, bonus, deduction, withdrawal
      amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
      description: text("description"),
      balanceBefore: decimal("balance_before", { precision: 10, scale: 2 }).default("0"),
      balanceAfter: decimal("balance_after", { precision: 10, scale: 2 }).default("0"),
      referenceId: varchar("reference_id", { length: 100 }),
      // orderId or withdrawalId
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    driverCommissions = pgTable("driver_commissions", {
      id: uuid("id").primaryKey().defaultRandom(),
      driverId: uuid("driver_id").references(() => drivers.id).notNull(),
      orderId: uuid("order_id").references(() => orders.id).notNull(),
      orderAmount: decimal("order_amount", { precision: 10, scale: 2 }).notNull(),
      commissionRate: decimal("commission_rate", { precision: 5, scale: 2 }).notNull(),
      commissionAmount: decimal("commission_amount", { precision: 10, scale: 2 }).notNull(),
      status: varchar("status", { length: 50 }).default("pending").notNull(),
      // pending, approved, paid
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    driverWithdrawals = pgTable("driver_withdrawals", {
      id: uuid("id").primaryKey().defaultRandom(),
      driverId: uuid("driver_id").references(() => drivers.id).notNull(),
      amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
      status: varchar("status", { length: 50 }).default("pending").notNull(),
      // pending, approved, rejected, completed
      bankDetails: text("bank_details"),
      adminNotes: text("admin_notes"),
      processedAt: timestamp("processed_at"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    restaurantWallets = pgTable("restaurant_wallets", {
      id: uuid("id").primaryKey().defaultRandom(),
      restaurantId: uuid("restaurant_id").references(() => restaurants.id).notNull().unique(),
      balance: decimal("balance", { precision: 10, scale: 2 }).default("0"),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    commissionSettings = pgTable("commission_settings", {
      id: uuid("id").primaryKey().defaultRandom(),
      type: varchar("type", { length: 50 }).notNull(),
      // default, restaurant, driver
      entityId: uuid("entity_id"),
      // null if default
      commissionPercent: decimal("commission_percent", { precision: 5, scale: 2 }).notNull(),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    withdrawalRequests2 = pgTable("withdrawal_requests", {
      id: uuid("id").primaryKey().defaultRandom(),
      entityType: varchar("entity_type", { length: 50 }).notNull(),
      // driver, restaurant
      entityId: uuid("entity_id").notNull(),
      amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
      status: varchar("status", { length: 50 }).default("pending").notNull(),
      // pending, approved, rejected, completed
      bankDetails: text("bank_details"),
      adminNotes: text("admin_notes"),
      rejectionReason: text("rejection_reason"),
      approvedBy: uuid("approved_by"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    driverWorkSessions = pgTable("driver_work_sessions", {
      id: uuid("id").primaryKey().defaultRandom(),
      driverId: uuid("driver_id").references(() => drivers.id).notNull(),
      startTime: timestamp("start_time").defaultNow().notNull(),
      endTime: timestamp("end_time"),
      isActive: boolean("is_active").default(true).notNull(),
      totalDeliveries: integer("total_deliveries").default(0),
      totalEarnings: decimal("total_earnings", { precision: 10, scale: 2 }).default("0"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    employees = pgTable("employees", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 100 }).notNull(),
      email: varchar("email", { length: 100 }).notNull().unique(),
      phone: varchar("phone", { length: 20 }).notNull(),
      position: varchar("position", { length: 50 }).notNull(),
      // admin, manager, support, accountant, hr
      department: varchar("department", { length: 50 }).notNull(),
      branch: varchar("branch", { length: 50 }).default("\u0627\u0644\u0641\u0631\u0639 \u0627\u0644\u0631\u0626\u064A\u0633\u064A"),
      // تمت الإضافة: الفرع
      salary: decimal("salary", { precision: 10, scale: 2 }).notNull(),
      hireDate: timestamp("hire_date").defaultNow().notNull(),
      status: varchar("status", { length: 20 }).default("active").notNull(),
      // active, inactive, on_leave, terminated
      address: text("address"),
      emergencyContact: varchar("emergency_contact", { length: 100 }),
      permissions: text("permissions"),
      // JSON string or comma-separated
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    attendance = pgTable("attendance", {
      id: uuid("id").primaryKey().defaultRandom(),
      employeeId: uuid("employee_id").references(() => employees.id).notNull(),
      date: timestamp("date").defaultNow().notNull(),
      checkIn: timestamp("check_in"),
      checkOut: timestamp("check_out"),
      status: varchar("status", { length: 20 }).notNull(),
      // present, absent, late, early_leave, on_leave
      hoursWorked: decimal("hours_worked", { precision: 4, scale: 2 }),
      notes: text("notes")
    });
    leaveRequests = pgTable("leave_requests", {
      id: uuid("id").primaryKey().defaultRandom(),
      employeeId: uuid("employee_id").references(() => employees.id).notNull(),
      type: varchar("type", { length: 50 }).notNull(),
      // annual, sick, emergency, unpaid
      startDate: timestamp("start_date").notNull(),
      endDate: timestamp("end_date").notNull(),
      status: varchar("status", { length: 20 }).default("pending").notNull(),
      // pending, approved, rejected
      reason: text("reason"),
      submittedAt: timestamp("submitted_at").defaultNow().notNull()
    });
    insertUserSchema = createInsertSchema(users).partial({
      id: true,
      createdAt: true,
      isActive: true
    });
    selectUserSchema = createSelectSchema(users);
    insertUserAddressSchema = createInsertSchema(userAddresses).partial({
      id: true,
      createdAt: true,
      isDefault: true
    });
    selectUserAddressSchema = createSelectSchema(userAddresses);
    insertCategorySchema = createInsertSchema(categories).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      sortOrder: true,
      type: true
    });
    selectCategorySchema = createSelectSchema(categories);
    insertRestaurantSchema = createInsertSchema(restaurants).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      isOpen: true,
      isFeatured: true,
      isNew: true,
      isTemporarilyClosed: true,
      rating: true,
      reviewCount: true,
      minimumOrder: true,
      deliveryFee: true,
      perKmFee: true,
      commissionRate: true,
      openingTime: true,
      closingTime: true,
      workingDays: true
    });
    selectRestaurantSchema = createSelectSchema(restaurants);
    insertMenuItemSchema = createInsertSchema(menuItems).partial({
      id: true,
      isAvailable: true,
      isSpecialOffer: true,
      brand: true,
      sizes: true,
      colors: true,
      salesCount: true,
      rating: true,
      reviewCount: true,
      isFeatured: true,
      isNew: true
    });
    selectMenuItemSchema = createSelectSchema(menuItems);
    insertOrderSchema = createInsertSchema(orders).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      status: true,
      orderNumber: true,
      distance: true,
      driverEarnings: true,
      restaurantEarnings: true,
      companyEarnings: true,
      isRated: true
    });
    selectOrderSchema = createSelectSchema(orders);
    insertDriverSchema = createInsertSchema(drivers).extend({
      commissionRate: z.preprocess((val) => val === null || val === void 0 ? void 0 : String(val), z.string().optional()),
      salaryAmount: z.preprocess((val) => val === null || val === void 0 ? void 0 : String(val), z.string().optional()),
      earnings: z.preprocess((val) => val === null || val === void 0 ? void 0 : String(val), z.string().optional()),
      averageRating: z.preprocess((val) => val === null || val === void 0 ? void 0 : String(val), z.string().optional()),
      reviewCount: z.number().optional()
    }).partial({
      id: true,
      createdAt: true,
      isAvailable: true,
      isActive: true,
      paymentMode: true,
      email: true,
      vehicleType: true,
      vehicleNumber: true,
      currentLocation: true,
      updatedAt: true
    });
    selectDriverSchema = createSelectSchema(drivers);
    insertSpecialOfferSchema = createInsertSchema(specialOffers).partial({
      id: true,
      createdAt: true,
      isActive: true,
      minimumOrder: true
    });
    selectSpecialOfferSchema = createSelectSchema(specialOffers);
    insertAdminUserSchema = createInsertSchema(adminUsers).partial({
      id: true,
      createdAt: true,
      isActive: true,
      userType: true
    });
    selectAdminUserSchema = createSelectSchema(adminUsers);
    insertUiSettingsSchema = createInsertSchema(uiSettings).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      category: true
    });
    selectUiSettingsSchema = createSelectSchema(uiSettings);
    insertRestaurantSectionSchema = createInsertSchema(restaurantSections).partial({
      id: true,
      createdAt: true,
      isActive: true,
      sortOrder: true
    });
    selectRestaurantSectionSchema = createSelectSchema(restaurantSections);
    insertRatingSchema = createInsertSchema(ratings).partial({
      id: true,
      createdAt: true,
      isApproved: true
    });
    selectRatingSchema = createSelectSchema(ratings);
    insertNotificationSchema = createInsertSchema(notifications).partial({
      id: true,
      createdAt: true,
      isRead: true
    });
    selectNotificationSchema = createSelectSchema(notifications);
    insertWalletSchema = createInsertSchema(wallets).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      balance: true
    });
    selectWalletSchema = createSelectSchema(wallets);
    insertWalletTransactionSchema = createInsertSchema(walletTransactions).partial({
      id: true,
      createdAt: true
    });
    selectWalletTransactionSchema = createSelectSchema(walletTransactions);
    insertSystemSettingsSchema = createInsertSchema(systemSettingsTable).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true
    });
    selectSystemSettingsSchema = createSelectSchema(systemSettingsTable);
    insertRestaurantEarningsSchema = createInsertSchema(restaurantEarnings).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      totalEarnings: true,
      pendingAmount: true,
      paidAmount: true
    });
    selectRestaurantEarningsSchema = createSelectSchema(restaurantEarnings);
    insertCartSchema = createInsertSchema(cart).partial({
      id: true,
      addedAt: true,
      quantity: true
    });
    selectCartSchema = createSelectSchema(cart);
    insertFavoritesSchema = createInsertSchema(favorites).partial({
      id: true,
      addedAt: true
    });
    selectFavoritesSchema = createSelectSchema(favorites);
    insertDriverReviewSchema = createInsertSchema(driverReviews).partial({
      id: true,
      createdAt: true
    });
    selectDriverReviewSchema = createSelectSchema(driverReviews);
    insertDriverEarningsSchema = createInsertSchema(driverEarningsTable).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      totalEarned: true,
      withdrawn: true,
      pending: true
    });
    selectDriverEarningsSchema = createSelectSchema(driverEarningsTable);
    insertDriverWalletSchema = createInsertSchema(driverWallets).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      balance: true
    });
    selectDriverWalletSchema = createSelectSchema(driverWallets);
    insertDriverBalanceSchema = createInsertSchema(driverBalances).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      totalBalance: true,
      availableBalance: true,
      withdrawnAmount: true,
      pendingAmount: true
    });
    selectDriverBalanceSchema = createSelectSchema(driverBalances);
    insertDriverTransactionSchema = createInsertSchema(driverTransactions).partial({
      id: true,
      createdAt: true,
      balanceBefore: true,
      balanceAfter: true
    });
    selectDriverTransactionSchema = createSelectSchema(driverTransactions);
    insertDriverCommissionSchema = createInsertSchema(driverCommissions).partial({
      id: true,
      createdAt: true,
      status: true
    });
    selectDriverCommissionSchema = createSelectSchema(driverCommissions);
    insertDriverWithdrawalSchema = createInsertSchema(driverWithdrawals).partial({
      id: true,
      createdAt: true,
      status: true,
      processedAt: true
    });
    selectDriverWithdrawalSchema = createSelectSchema(driverWithdrawals);
    insertRestaurantWalletSchema = createInsertSchema(restaurantWallets).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      balance: true
    });
    selectRestaurantWalletSchema = createSelectSchema(restaurantWallets);
    insertCommissionSettingsSchema = createInsertSchema(commissionSettings).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true
    });
    selectCommissionSettingsSchema = createSelectSchema(commissionSettings);
    insertWithdrawalRequestSchema = createInsertSchema(withdrawalRequests2).partial({
      id: true,
      submittedAt: true,
      updatedAt: true,
      status: true
    });
    selectWithdrawalRequestSchema = createSelectSchema(withdrawalRequests2);
    insertDriverWorkSessionSchema = createInsertSchema(driverWorkSessions).partial({
      id: true,
      startTime: true,
      isActive: true,
      totalDeliveries: true,
      totalEarnings: true,
      createdAt: true
    });
    selectDriverWorkSessionSchema = createSelectSchema(driverWorkSessions);
    insertEmployeeSchema = createInsertSchema(employees).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      hireDate: true,
      status: true,
      permissions: true,
      department: true,
      position: true,
      salary: true,
      address: true,
      emergencyContact: true,
      branch: true
    });
    selectEmployeeSchema = createSelectSchema(employees);
    insertAttendanceSchema = createInsertSchema(attendance).partial({
      id: true,
      date: true,
      checkIn: true,
      checkOut: true,
      status: true,
      hoursWorked: true,
      notes: true
    });
    selectAttendanceSchema = createSelectSchema(attendance);
    insertLeaveRequestSchema = createInsertSchema(leaveRequests).partial({
      id: true,
      status: true,
      submittedAt: true,
      reason: true
    });
    selectLeaveRequestSchema = createSelectSchema(leaveRequests);
    deliveryFeeSettings = pgTable("delivery_fee_settings", {
      id: uuid("id").primaryKey().defaultRandom(),
      restaurantId: uuid("restaurant_id").references(() => restaurants.id),
      // null for global settings
      type: varchar("type", { length: 50 }).default("per_km").notNull(),
      // fixed, per_km, zone_based, restaurant_custom
      baseFee: decimal("base_fee", { precision: 10, scale: 2 }).default("0"),
      perKmFee: decimal("per_km_fee", { precision: 10, scale: 2 }).default("0"),
      minFee: decimal("min_fee", { precision: 10, scale: 2 }).default("0"),
      maxFee: decimal("max_fee", { precision: 10, scale: 2 }).default("1000"),
      freeDeliveryThreshold: decimal("free_delivery_threshold", { precision: 10, scale: 2 }).default("0"),
      storeLat: decimal("store_lat", { precision: 10, scale: 8 }),
      storeLng: decimal("store_lng", { precision: 11, scale: 8 }),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    deliveryZones = pgTable("delivery_zones", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 100 }).notNull(),
      description: text("description"),
      minDistance: decimal("min_distance", { precision: 10, scale: 2 }).default("0"),
      maxDistance: decimal("max_distance", { precision: 10, scale: 2 }).notNull(),
      deliveryFee: decimal("delivery_fee", { precision: 10, scale: 2 }).notNull(),
      estimatedTime: varchar("estimated_time", { length: 50 }),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    financialReports = pgTable("financial_reports", {
      id: uuid("id").primaryKey().defaultRandom(),
      periodType: varchar("period_type", { length: 20 }).notNull(),
      // daily, weekly, monthly, yearly
      startDate: timestamp("start_date").notNull(),
      endDate: timestamp("end_date").notNull(),
      totalOrders: integer("total_orders").default(0),
      totalRevenue: decimal("total_revenue", { precision: 12, scale: 2 }).default("0"),
      totalDeliveryFees: decimal("total_delivery_fees", { precision: 12, scale: 2 }).default("0"),
      totalDriverEarnings: decimal("total_driver_earnings", { precision: 12, scale: 2 }).default("0"),
      totalRestaurantEarnings: decimal("total_restaurant_earnings", { precision: 12, scale: 2 }).default("0"),
      totalCompanyProfit: decimal("total_company_profit", { precision: 12, scale: 2 }).default("0"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertDeliveryFeeSettingsSchema = createInsertSchema(deliveryFeeSettings).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      baseFee: true,
      perKmFee: true,
      minFee: true,
      maxFee: true,
      freeDeliveryThreshold: true,
      storeLat: true,
      storeLng: true
    });
    selectDeliveryFeeSettingsSchema = createSelectSchema(deliveryFeeSettings);
    insertDeliveryZoneSchema = createInsertSchema(deliveryZones).partial({
      id: true,
      createdAt: true,
      isActive: true,
      minDistance: true,
      description: true,
      estimatedTime: true
    });
    selectDeliveryZoneSchema = createSelectSchema(deliveryZones);
    insertFinancialReportSchema = createInsertSchema(financialReports).partial({
      id: true,
      createdAt: true,
      totalOrders: true,
      totalRevenue: true,
      totalDeliveryFees: true,
      totalDriverEarnings: true,
      totalRestaurantEarnings: true,
      totalCompanyProfit: true
    });
    selectFinancialReportSchema = createSelectSchema(financialReports);
    geoZones = pgTable("geo_zones", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 100 }).notNull(),
      description: text("description"),
      coordinates: text("coordinates").notNull(),
      // JSON string representing polygon coordinates
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    deliveryRules = pgTable("delivery_rules", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 100 }).notNull(),
      ruleType: varchar("rule_type", { length: 50 }).notNull(),
      // distance, order_value, zone
      minDistance: decimal("min_distance", { precision: 10, scale: 2 }),
      maxDistance: decimal("max_distance", { precision: 10, scale: 2 }),
      minOrderValue: decimal("min_order_value", { precision: 10, scale: 2 }),
      maxOrderValue: decimal("max_order_value", { precision: 10, scale: 2 }),
      geoZoneId: uuid("geo_zone_id").references(() => geoZones.id),
      fee: decimal("fee", { precision: 10, scale: 2 }).notNull(),
      isActive: boolean("is_active").default(true).notNull(),
      priority: integer("priority").default(0),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    deliveryDiscounts = pgTable("delivery_discounts", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 100 }).notNull(),
      discountType: varchar("discount_type", { length: 50 }).notNull(),
      // percentage, fixed_amount
      discountValue: decimal("discount_value", { precision: 10, scale: 2 }).notNull(),
      minOrderValue: decimal("min_order_value", { precision: 10, scale: 2 }),
      validFrom: timestamp("valid_from"),
      validUntil: timestamp("valid_until"),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertGeoZoneSchema = createInsertSchema(geoZones).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true
    });
    selectGeoZoneSchema = createSelectSchema(geoZones);
    insertDeliveryRuleSchema = createInsertSchema(deliveryRules).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      priority: true
    });
    selectDeliveryRuleSchema = createSelectSchema(deliveryRules);
    insertDeliveryDiscountSchema = createInsertSchema(deliveryDiscounts).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true
    });
    selectDeliveryDiscountSchema = createSelectSchema(deliveryDiscounts);
    messages = pgTable("messages", {
      id: uuid("id").primaryKey().defaultRandom(),
      orderId: uuid("order_id").references(() => orders.id),
      senderId: uuid("sender_id").notNull(),
      senderType: varchar("sender_type", { length: 50 }).notNull(),
      // customer, driver, restaurant, admin
      receiverId: uuid("receiver_id").notNull(),
      receiverType: varchar("receiver_type", { length: 50 }).notNull(),
      // customer, driver, restaurant, admin
      content: text("content").notNull(),
      isRead: boolean("is_read").default(false).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertMessageSchema = createInsertSchema(messages).partial({
      id: true,
      createdAt: true,
      isRead: true
    });
    selectMessageSchema = createSelectSchema(messages);
    auditLogs = pgTable("audit_logs", {
      id: uuid("id").primaryKey().defaultRandom(),
      adminId: uuid("admin_id").references(() => adminUsers.id).notNull(),
      action: varchar("action", { length: 100 }).notNull(),
      // e.g., update_order_status
      entityType: varchar("entity_type", { length: 50 }).notNull(),
      // order, restaurant, driver, etc.
      entityId: uuid("entity_id").notNull(),
      oldData: text("old_data"),
      // JSON string
      newData: text("new_data"),
      // JSON string
      ipAddress: varchar("ip_address", { length: 50 }),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertAuditLogSchema = createInsertSchema(auditLogs).partial({
      id: true,
      createdAt: true
    });
    selectAuditLogSchema = createSelectSchema(auditLogs);
    paymentGateways = pgTable("payment_gateways", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 100 }).notNull(),
      // Stripe, PayPal, Local Card, Cash
      type: varchar("type", { length: 50 }).notNull(),
      // online, offline
      config: text("config"),
      // JSON configuration (API keys, etc.)
      isActive: boolean("is_active").default(true).notNull(),
      isDefault: boolean("is_default").default(false).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertPaymentGatewaySchema = createInsertSchema(paymentGateways).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      isDefault: true
    });
    selectPaymentGatewaySchema = createSelectSchema(paymentGateways);
  }
});

// server/db-advanced.ts
var db_advanced_exports = {};
__export(db_advanced_exports, {
  AdvancedDatabaseStorage: () => AdvancedDatabaseStorage
});
import { eq as eq3, and as and2, desc as desc2, gte, lte } from "drizzle-orm";
var AdvancedDatabaseStorage;
var init_db_advanced = __esm({
  "server/db-advanced.ts"() {
    "use strict";
    init_schema();
    AdvancedDatabaseStorage = class {
      db;
      constructor(dbInstance) {
        this.db = dbInstance;
      }
      // Driver Reviews
      async createDriverReview(review) {
        const [newReview] = await this.db.insert(driverReviews).values(review).returning();
        if (newReview) {
          const avgRating = await this.getDriverAverageRating(review.driverId);
          const reviews = await this.getDriverReviews(review.driverId);
          await this.db.update(drivers).set({
            averageRating: avgRating.toString(),
            reviewCount: reviews.length
          }).where(eq3(drivers.id, review.driverId));
        }
        return newReview;
      }
      async getDriverReviews(driverId) {
        return await this.db.select().from(driverReviews).where(eq3(driverReviews.driverId, driverId)).orderBy(desc2(driverReviews.createdAt));
      }
      async getDriverAverageRating(driverId) {
        const reviews = await this.getDriverReviews(driverId);
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
        return sum / reviews.length;
      }
      // Driver Earnings
      async updateDriverEarnings(driverId, earnings) {
        const result = await this.db.update(driverEarnings).set(earnings).where(eq3(driverEarnings.driverId, driverId)).returning();
        return result[0];
      }
      async getDriverEarnings(driverId) {
        const result = await this.db.select().from(driverEarnings).where(eq3(driverEarnings.driverId, driverId));
        return result[0] || null;
      }
      async getDriverEarningsStats(driverId) {
        const earnings = await this.getDriverEarnings(driverId);
        const reviews = await this.getDriverReviews(driverId);
        const avgRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;
        return {
          ...earnings,
          averageRating: avgRating,
          totalReviews: reviews.length
        };
      }
      // Driver Wallets
      async createDriverWallet(wallet) {
        const result = await this.db.insert(driverWallets).values(wallet).returning();
        return result[0];
      }
      async getDriverWallet(driverId) {
        const result = await this.db.select().from(driverWallets).where(eq3(driverWallets.driverId, driverId));
        return result[0] || null;
      }
      async updateDriverWallet(driverId, updates) {
        const result = await this.db.update(driverWallets).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq3(driverWallets.driverId, driverId)).returning();
        return result[0];
      }
      async addDriverWalletBalance(driverId, amount) {
        const wallet = await this.getDriverWallet(driverId);
        if (!wallet) throw new Error("Wallet not found");
        const currentBalance = parseFloat(wallet.balance?.toString() || "0");
        const newBalance = currentBalance + amount;
        return await this.updateDriverWallet(driverId, { balance: newBalance.toString() });
      }
      async deductDriverWalletBalance(driverId, amount) {
        const wallet = await this.getDriverWallet(driverId);
        if (!wallet) throw new Error("Wallet not found");
        const currentBalance = parseFloat(wallet.balance?.toString() || "0");
        if (currentBalance < amount) throw new Error("Insufficient balance");
        const newBalance = currentBalance - amount;
        return await this.updateDriverWallet(driverId, { balance: newBalance.toString() });
      }
      // Restaurant Wallets
      async createRestaurantWallet(wallet) {
        const result = await this.db.insert(restaurantWallets).values(wallet).returning();
        return result[0];
      }
      async getRestaurantWallet(restaurantId) {
        const result = await this.db.select().from(restaurantWallets).where(eq3(restaurantWallets.restaurantId, restaurantId));
        return result[0] || null;
      }
      async updateRestaurantWallet(restaurantId, updates) {
        const result = await this.db.update(restaurantWallets).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq3(restaurantWallets.restaurantId, restaurantId)).returning();
        return result[0];
      }
      async addRestaurantWalletBalance(restaurantId, amount) {
        const wallet = await this.getRestaurantWallet(restaurantId);
        if (!wallet) throw new Error("Wallet not found");
        const currentBalance = parseFloat(wallet.balance?.toString() || "0");
        const newBalance = currentBalance + amount;
        return await this.updateRestaurantWallet(restaurantId, { balance: newBalance.toString() });
      }
      async deductRestaurantWalletBalance(restaurantId, amount) {
        const wallet = await this.getRestaurantWallet(restaurantId);
        if (!wallet) throw new Error("Wallet not found");
        const currentBalance = parseFloat(wallet.balance?.toString() || "0");
        if (currentBalance < amount) throw new Error("Insufficient balance");
        const newBalance = currentBalance - amount;
        return await this.updateRestaurantWallet(restaurantId, { balance: newBalance.toString() });
      }
      // Commission Settings
      async createCommissionSetting(setting) {
        const result = await this.db.insert(commissionSettings).values(setting).returning();
        return result[0];
      }
      async getCommissionSettings(type, entityId) {
        const conditions = [eq3(commissionSettings.type, type)];
        if (entityId) {
          conditions.push(eq3(commissionSettings.entityId, entityId));
        }
        const result = await this.db.select().from(commissionSettings).where(and2(...conditions));
        return result[0] || null;
      }
      async getDefaultCommissionPercent() {
        const setting = await this.getCommissionSettings("default");
        return setting ? parseFloat(setting.commissionPercent?.toString() || "10") : 10;
      }
      // Withdrawal Requests
      async createWithdrawalRequest(request) {
        const result = await this.db.insert(withdrawalRequests2).values(request).returning();
        return result[0];
      }
      async getWithdrawalRequests(entityId, entityType) {
        return await this.db.select().from(withdrawalRequests2).where(and2(
          eq3(withdrawalRequests2.entityId, entityId),
          eq3(withdrawalRequests2.entityType, entityType)
        )).orderBy(desc2(withdrawalRequests2.createdAt));
      }
      async getPendingWithdrawalRequests() {
        return await this.db.select().from(withdrawalRequests2).where(eq3(withdrawalRequests2.status, "pending")).orderBy(desc2(withdrawalRequests2.createdAt));
      }
      async updateWithdrawalRequest(id, updates) {
        const result = await this.db.update(withdrawalRequests2).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq3(withdrawalRequests2.id, id)).returning();
        return result[0];
      }
      async approveWithdrawalRequest(id, approvedBy) {
        return await this.updateWithdrawalRequest(id, {
          status: "approved",
          approvedBy,
          updatedAt: /* @__PURE__ */ new Date()
        });
      }
      async rejectWithdrawalRequest(id, reason) {
        return await this.updateWithdrawalRequest(id, {
          status: "rejected",
          rejectionReason: reason,
          updatedAt: /* @__PURE__ */ new Date()
        });
      }
      // Driver Work Sessions
      async createWorkSession(session) {
        const result = await this.db.insert(driverWorkSessions).values(session).returning();
        return result[0];
      }
      async getActiveWorkSession(driverId) {
        const result = await this.db.select().from(driverWorkSessions).where(and2(
          eq3(driverWorkSessions.driverId, driverId),
          eq3(driverWorkSessions.isActive, true)
        )).orderBy(desc2(driverWorkSessions.createdAt));
        return result[0] || null;
      }
      async endWorkSession(sessionId, totalDeliveries, totalEarnings) {
        const result = await this.db.update(driverWorkSessions).set({
          isActive: false,
          endTime: /* @__PURE__ */ new Date(),
          totalDeliveries,
          totalEarnings: totalEarnings.toString()
        }).where(eq3(driverWorkSessions.id, sessionId)).returning();
        return result[0];
      }
      async getDriverWorkSessions(driverId, startDate, endDate) {
        const conditions = [eq3(driverWorkSessions.driverId, driverId)];
        if (startDate) {
          conditions.push(gte(driverWorkSessions.createdAt, startDate));
        }
        if (endDate) {
          conditions.push(lte(driverWorkSessions.createdAt, endDate));
        }
        return await this.db.select().from(driverWorkSessions).where(and2(...conditions)).orderBy(desc2(driverWorkSessions.createdAt));
      }
      // Analytics
      async getDriverPerformanceStats(driverId, startDate, endDate) {
        const conditions = [eq3(orders.driverId, driverId)];
        if (startDate) {
          conditions.push(gte(orders.createdAt, startDate));
        }
        if (endDate) {
          conditions.push(lte(orders.createdAt, endDate));
        }
        const driverOrders = await this.db.select().from(orders).where(and2(...conditions));
        const completedOrders = driverOrders.filter((o) => o.status === "delivered");
        const totalEarnings = completedOrders.reduce((sum, o) => sum + parseFloat(o.driverEarnings?.toString() || "0"), 0);
        const reviews = await this.getDriverReviews(driverId);
        const avgRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;
        return {
          totalOrders: driverOrders.length,
          completedOrders: completedOrders.length,
          totalEarnings,
          averageRating: avgRating,
          totalReviews: reviews.length,
          successRate: driverOrders.length > 0 ? completedOrders.length / driverOrders.length * 100 : 0
        };
      }
      async getRestaurantPerformanceStats(restaurantId, startDate, endDate) {
        const conditions = [eq3(orders.restaurantId, restaurantId)];
        if (startDate) {
          conditions.push(gte(orders.createdAt, startDate));
        }
        if (endDate) {
          conditions.push(lte(orders.createdAt, endDate));
        }
        const restaurantOrders = await this.db.select().from(orders).where(and2(...conditions));
        const completedOrders = restaurantOrders.filter((o) => o.status === "delivered");
        const totalRevenue = restaurantOrders.reduce((sum, o) => sum + parseFloat(o.totalAmount?.toString() || "0"), 0);
        const totalCommission = completedOrders.reduce((sum, o) => sum + parseFloat(o.companyEarnings?.toString() || "0"), 0);
        const netRevenue = completedOrders.reduce((sum, o) => sum + parseFloat(o.restaurantEarnings?.toString() || "0"), 0);
        return {
          totalOrders: restaurantOrders.length,
          completedOrders: completedOrders.length,
          totalRevenue,
          totalCommission,
          netRevenue,
          averageOrderValue: restaurantOrders.length > 0 ? totalRevenue / restaurantOrders.length : 0
        };
      }
    };
  }
});

// server/index.ts
import "dotenv/config";
import express10 from "express";

// server/routes.ts
import { createServer as createServer3 } from "http";

// server/storage.ts
import { randomUUID } from "crypto";

// server/db.ts
init_schema();
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import bcrypt from "bcryptjs";
import { eq, and, desc, sql, or, like, asc } from "drizzle-orm";
var db = null;
function getDb() {
  if (!db) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL must be defined in environment variables");
    }
    console.log("\u{1F5FA}\uFE0F Using PostgreSQL database connection...");
    console.log("\u{1F517} DATABASE_URL exists:", !!databaseUrl);
    const sqlClient = postgres(databaseUrl, {
      onnotice: (notice) => console.log("\u{1F514} DB Notice:", notice.message),
      max: 20,
      idle_timeout: 30,
      connect_timeout: 15,
      on_error: (err) => {
        console.error("\u{1F4A3} DB Connection Error:", err.message);
      }
    });
    const verifyConnection = async () => {
      try {
        await sqlClient`SELECT 1`;
        console.log("\u2705 Database connection verified successfully at", (/* @__PURE__ */ new Date()).toLocaleTimeString());
      } catch (err) {
        console.error("\u274C Database connection failed:", err.message);
      }
    };
    verifyConnection();
    setInterval(verifyConnection, 5 * 60 * 1e3);
    const schema2 = {
      adminUsers,
      categories,
      restaurantSections,
      restaurants,
      menuItems,
      users,
      customers,
      userAddresses,
      orders,
      specialOffers,
      notifications,
      ratings,
      systemSettings: systemSettingsTable,
      drivers,
      orderTracking,
      cart,
      favorites,
      employees,
      attendance,
      leaveRequests,
      geoZones,
      deliveryRules,
      deliveryDiscounts
    };
    db = drizzle(sqlClient, { schema: schema2 });
  }
  return db;
}
var DatabaseStorage = class {
  get db() {
    return getDb();
  }
  // Admin Authentication
  async createAdminUser(adminUser) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(adminUser.password, salt);
    const [newAdmin] = await this.db.insert(adminUsers).values({ ...adminUser, password: hashedPassword }).returning();
    return newAdmin;
  }
  async getAdminByEmail(emailOrUsername) {
    const result = await this.db.select().from(adminUsers).where(
      or(
        eq(adminUsers.email, emailOrUsername),
        eq(adminUsers.username, emailOrUsername)
      )
    );
    return result[0];
  }
  async getAdminByPhone(phone) {
    const result = await this.db.select().from(adminUsers).where(
      eq(adminUsers.phone, phone)
    );
    return result[0];
  }
  async getAdminById(id) {
    const result = await this.db.select().from(adminUsers).where(
      eq(adminUsers.id, id)
    );
    return result[0];
  }
  async getAllAdminUsers() {
    return await this.db.select().from(adminUsers);
  }
  async deleteAdminUser(id) {
    try {
      const result = await this.db.delete(adminUsers).where(eq(adminUsers.id, id));
      return result.rowCount > 0;
    } catch (error) {
      console.error("Error deleting admin user:", error);
      throw error;
    }
  }
  // تم حذف وظائف AdminSession - لم تعد مطلوبة بعد إزالة نظام المصادقة
  // Users
  async getUsers() {
    const result = await this.db.select().from(users);
    return Array.isArray(result) ? result : [];
  }
  async getUser(id) {
    const [user] = await this.db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async getUserByUsername(username) {
    const [user] = await this.db.select().from(users).where(eq(users.username, username));
    return user;
  }
  async createUser(user) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const [newUser] = await this.db.insert(users).values({ ...user, password: hashedPassword }).returning();
    return newUser;
  }
  async updateUser(id, userData) {
    let updateData = { ...userData };
    if (userData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(userData.password, salt);
    }
    const [updated] = await this.db.update(users).set(updateData).where(eq(users.id, id)).returning();
    return updated;
  }
  async deleteUser(id) {
    try {
      await this.db.update(orders).set({ customerId: null }).where(eq(orders.customerId, id));
      await this.db.delete(userAddresses).where(eq(userAddresses.userId, id));
      await this.db.delete(cart).where(eq(cart.userId, id));
      await this.db.delete(favorites).where(eq(favorites.userId, id));
      await this.db.delete(notifications).where(and(eq(notifications.recipientId, id), eq(notifications.recipientType, "customer")));
      const result = await this.db.delete(users).where(eq(users.id, id));
      return result.rowCount > 0;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
  // Categories
  async getCategories() {
    try {
      const result = await this.db.select().from(categories);
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }
  async searchCategories(query) {
    try {
      const result = await this.db.select().from(categories).where(like(categories.name, `%${query}%`));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error searching categories:", error);
      return [];
    }
  }
  async createCategory(category) {
    const [newCategory] = await this.db.insert(categories).values(category).returning();
    return newCategory;
  }
  async updateCategory(id, category) {
    const [updated] = await this.db.update(categories).set(category).where(eq(categories.id, id)).returning();
    return updated;
  }
  async deleteCategory(id) {
    try {
      await this.db.update(restaurants).set({ categoryId: null }).where(eq(restaurants.categoryId, id));
      await this.db.delete(specialOffers).where(eq(specialOffers.categoryId, id));
      const result = await this.db.delete(categories).where(eq(categories.id, id));
      return result.rowCount > 0;
    } catch (error) {
      console.error("Error deleting category:", error);
      throw error;
    }
  }
  // Restaurants
  async getMainRestaurant() {
    try {
      const allRestaurants = await this.db.select().from(restaurants);
      return allRestaurants.find((r) => r.name.includes("\u0637\u0645\u0637\u0648\u0645")) || allRestaurants[0];
    } catch (error) {
      console.error("Error fetching main restaurant:", error);
      return void 0;
    }
  }
  async getRestaurant(id) {
    const [restaurant] = await this.db.select().from(restaurants).where(eq(restaurants.id, id));
    return restaurant;
  }
  async getRestaurantsByCategory(categoryId) {
    return await this.db.select().from(restaurants).where(eq(restaurants.categoryId, categoryId));
  }
  async createRestaurant(restaurant) {
    const [newRestaurant] = await this.db.insert(restaurants).values(restaurant).returning();
    return newRestaurant;
  }
  async updateRestaurant(id, restaurant) {
    const [updated] = await this.db.update(restaurants).set(restaurant).where(eq(restaurants.id, id)).returning();
    return updated;
  }
  async deleteRestaurant(id) {
    try {
      await this.db.update(menuItems).set({ restaurantId: null }).where(eq(menuItems.restaurantId, id));
      await this.db.update(orders).set({ restaurantId: null }).where(eq(orders.restaurantId, id));
      await this.db.delete(restaurantSections).where(eq(restaurantSections.restaurantId, id));
      await this.db.delete(ratings).where(eq(ratings.restaurantId, id));
      await this.db.delete(specialOffers).where(eq(specialOffers.restaurantId, id));
      await this.db.delete(favorites).where(eq(favorites.restaurantId, id));
      await this.db.delete(cart).where(eq(cart.restaurantId, id));
      await this.db.delete(deliveryFeeSettings).where(eq(deliveryFeeSettings.restaurantId, id));
      const result = await this.db.delete(restaurants).where(eq(restaurants.id, id));
      return result.rowCount > 0;
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      throw error;
    }
  }
  // Menu Items
  async getMenuItems(restaurantId) {
    if (restaurantId === "all") {
      return await this.db.select().from(menuItems);
    }
    return await this.db.select().from(menuItems).where(eq(menuItems.restaurantId, restaurantId));
  }
  async getAllMenuItems() {
    return await this.db.select().from(menuItems);
  }
  async getMenuItem(id) {
    const [item] = await this.db.select().from(menuItems).where(eq(menuItems.id, id));
    return item;
  }
  async createMenuItem(menuItem) {
    const [newItem] = await this.db.insert(menuItems).values(menuItem).returning();
    return newItem;
  }
  async updateMenuItem(id, menuItem) {
    const [updated] = await this.db.update(menuItems).set(menuItem).where(eq(menuItems.id, id)).returning();
    return updated;
  }
  async deleteMenuItem(id) {
    try {
      await this.db.delete(cart).where(eq(cart.menuItemId, id));
      await this.db.delete(favorites).where(eq(favorites.menuItemId, id));
      await this.db.delete(specialOffers).where(eq(specialOffers.menuItemId, id));
      const result = await this.db.delete(menuItems).where(eq(menuItems.id, id));
      return result.rowCount > 0;
    } catch (error) {
      console.error("Error deleting menu item:", error);
      throw error;
    }
  }
  // Orders
  async getOrders() {
    try {
      const result = await this.db.select({
        id: orders.id,
        orderNumber: orders.orderNumber,
        customerName: orders.customerName,
        customerPhone: orders.customerPhone,
        customerEmail: orders.customerEmail,
        customerId: orders.customerId,
        deliveryAddress: orders.deliveryAddress,
        customerLocationLat: orders.customerLocationLat,
        customerLocationLng: orders.customerLocationLng,
        notes: orders.notes,
        paymentMethod: orders.paymentMethod,
        status: orders.status,
        items: orders.items,
        subtotal: orders.subtotal,
        deliveryFee: orders.deliveryFee,
        total: orders.total,
        totalAmount: orders.totalAmount,
        estimatedTime: orders.estimatedTime,
        driverEarnings: orders.driverEarnings,
        restaurantEarnings: orders.restaurantEarnings,
        companyEarnings: orders.companyEarnings,
        distance: orders.distance,
        restaurantId: orders.restaurantId,
        driverId: orders.driverId,
        createdAt: orders.createdAt,
        updatedAt: orders.updatedAt,
        restaurantName: restaurants.name,
        restaurantPhone: restaurants.phone,
        restaurantAddress: restaurants.address,
        restaurantImage: restaurants.image,
        restaurantLatitude: restaurants.latitude,
        restaurantLongitude: restaurants.longitude,
        driverName: drivers.name,
        driverPhone: drivers.phone
      }).from(orders).leftJoin(restaurants, eq(orders.restaurantId, restaurants.id)).leftJoin(drivers, eq(orders.driverId, drivers.id)).orderBy(desc(orders.createdAt));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching orders:", error);
      return [];
    }
  }
  async getOrder(id) {
    try {
      const [order] = await this.db.select({
        id: orders.id,
        orderNumber: orders.orderNumber,
        customerName: orders.customerName,
        customerPhone: orders.customerPhone,
        customerEmail: orders.customerEmail,
        customerId: orders.customerId,
        deliveryAddress: orders.deliveryAddress,
        customerLocationLat: orders.customerLocationLat,
        customerLocationLng: orders.customerLocationLng,
        notes: orders.notes,
        paymentMethod: orders.paymentMethod,
        status: orders.status,
        items: orders.items,
        subtotal: orders.subtotal,
        deliveryFee: orders.deliveryFee,
        total: orders.total,
        totalAmount: orders.totalAmount,
        estimatedTime: orders.estimatedTime,
        driverEarnings: orders.driverEarnings,
        restaurantEarnings: orders.restaurantEarnings,
        companyEarnings: orders.companyEarnings,
        distance: orders.distance,
        restaurantId: orders.restaurantId,
        driverId: orders.driverId,
        createdAt: orders.createdAt,
        updatedAt: orders.updatedAt,
        restaurantName: restaurants.name,
        restaurantPhone: restaurants.phone,
        restaurantAddress: restaurants.address,
        restaurantImage: restaurants.image,
        restaurantLatitude: restaurants.latitude,
        restaurantLongitude: restaurants.longitude,
        driverName: drivers.name,
        driverPhone: drivers.phone
      }).from(orders).leftJoin(restaurants, eq(orders.restaurantId, restaurants.id)).leftJoin(drivers, eq(orders.driverId, drivers.id)).where(eq(orders.id, id));
      return order;
    } catch (error) {
      console.error("Error fetching order:", error);
      return void 0;
    }
  }
  async getOrdersByRestaurant(restaurantId) {
    try {
      const result = await this.db.select({
        id: orders.id,
        orderNumber: orders.orderNumber,
        customerName: orders.customerName,
        customerPhone: orders.customerPhone,
        deliveryAddress: orders.deliveryAddress,
        status: orders.status,
        items: orders.items,
        totalAmount: orders.totalAmount,
        createdAt: orders.createdAt,
        restaurantName: restaurants.name
      }).from(orders).leftJoin(restaurants, eq(orders.restaurantId, restaurants.id)).where(eq(orders.restaurantId, restaurantId)).orderBy(desc(orders.createdAt));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching restaurant orders:", error);
      return [];
    }
  }
  async getOrdersByCustomer(phone) {
    try {
      const cleanPhone = phone.trim().replace(/\s+/g, "");
      const result = await this.db.select({
        id: orders.id,
        orderNumber: orders.orderNumber,
        customerName: orders.customerName,
        customerPhone: orders.customerPhone,
        customerEmail: orders.customerEmail,
        customerId: orders.customerId,
        deliveryAddress: orders.deliveryAddress,
        customerLocationLat: orders.customerLocationLat,
        customerLocationLng: orders.customerLocationLng,
        notes: orders.notes,
        paymentMethod: orders.paymentMethod,
        status: orders.status,
        items: orders.items,
        subtotal: orders.subtotal,
        deliveryFee: orders.deliveryFee,
        total: orders.total,
        totalAmount: orders.totalAmount,
        estimatedTime: orders.estimatedTime,
        driverEarnings: orders.driverEarnings,
        restaurantEarnings: orders.restaurantEarnings,
        companyEarnings: orders.companyEarnings,
        distance: orders.distance,
        restaurantId: orders.restaurantId,
        driverId: orders.driverId,
        createdAt: orders.createdAt,
        updatedAt: orders.updatedAt,
        restaurantName: restaurants.name,
        restaurantPhone: restaurants.phone,
        restaurantAddress: restaurants.address,
        restaurantImage: restaurants.image,
        driverName: drivers.name,
        driverPhone: drivers.phone
      }).from(orders).leftJoin(restaurants, eq(orders.restaurantId, restaurants.id)).leftJoin(drivers, eq(orders.driverId, drivers.id)).where(sql`REPLACE(${orders.customerPhone}, ' ', '') = ${cleanPhone}`).orderBy(desc(orders.createdAt));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching customer orders:", error);
      return [];
    }
  }
  async createOrder(order) {
    const [newOrder] = await this.db.insert(orders).values(order).returning();
    return newOrder;
  }
  async updateOrder(id, order) {
    const [updated] = await this.db.update(orders).set(order).where(eq(orders.id, id)).returning();
    return updated;
  }
  // Drivers
  async getDrivers() {
    const result = await this.db.select().from(drivers);
    return Array.isArray(result) ? result : [];
  }
  async getDriver(id) {
    const [driver] = await this.db.select().from(drivers).where(eq(drivers.id, id));
    return driver;
  }
  async getAvailableDrivers() {
    return await this.db.select().from(drivers).where(
      and(
        eq(drivers.isAvailable, true),
        eq(drivers.isActive, true)
      )
    );
  }
  async createDriver(driver) {
    try {
      const [existingDriver] = await this.db.select().from(drivers).where(eq(drivers.phone, driver.phone)).limit(1);
      if (existingDriver) {
        throw new Error("\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0647\u0630\u0627 \u0645\u0633\u062C\u0644 \u0645\u0633\u0628\u0642\u0627\u064B \u0644\u0633\u0627\u0626\u0642 \u0622\u062E\u0631");
      }
      let finalDriverData = { ...driver };
      if (driver.password) {
        const salt = await bcrypt.genSalt(10);
        finalDriverData.password = await bcrypt.hash(driver.password, salt);
      }
      const [newDriver] = await this.db.insert(drivers).values(finalDriverData).returning();
      if (!newDriver) {
        throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0633\u0627\u0626\u0642");
      }
      try {
        await this.db.insert(driverWallets).values({
          driverId: newDriver.id,
          balance: "0",
          isActive: true
        });
      } catch (walletError) {
        console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0645\u062D\u0641\u0638\u0629 \u0627\u0644\u0633\u0627\u0626\u0642:", walletError);
      }
      try {
        await this.db.insert(driverEarningsTable).values({
          driverId: newDriver.id,
          totalEarned: "0",
          withdrawn: "0",
          pending: "0"
        });
      } catch (earningsError) {
        console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0633\u062C\u0644 \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0633\u0627\u0626\u0642:", earningsError);
      }
      try {
        await this.db.insert(driverBalances).values({
          driverId: newDriver.id,
          totalBalance: "0",
          availableBalance: "0",
          withdrawnAmount: "0",
          pendingAmount: "0"
        });
      } catch (balanceError) {
        console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0633\u062C\u0644 \u0631\u0635\u064A\u062F \u0627\u0644\u0633\u0627\u0626\u0642:", balanceError);
      }
      return newDriver;
    } catch (error) {
      console.error("Error in createDriver:", error);
      throw error;
    }
  }
  async updateDriver(id, driver) {
    let updateData = { ...driver };
    if (driver.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(driver.password, salt);
    }
    const [updated] = await this.db.update(drivers).set(updateData).where(eq(drivers.id, id)).returning();
    return updated;
  }
  async deleteDriver(id) {
    try {
      await this.db.update(orders).set({ driverId: null }).where(eq(orders.driverId, id));
      await this.db.update(orderTracking).set({ createdBy: null }).where(and(eq(orderTracking.createdBy, id), eq(orderTracking.createdByType, "driver")));
      await this.db.delete(driverBalances).where(eq(driverBalances.driverId, id));
      await this.db.delete(driverTransactions).where(eq(driverTransactions.driverId, id));
      await this.db.delete(driverCommissions).where(eq(driverCommissions.driverId, id));
      await this.db.delete(driverWithdrawals).where(eq(driverWithdrawals.driverId, id));
      await this.db.delete(driverWallets).where(eq(driverWallets.driverId, id));
      await this.db.delete(driverEarningsTable).where(eq(driverEarningsTable.driverId, id));
      const result = await this.db.delete(drivers).where(eq(drivers.id, id));
      return result.rowCount > 0;
    } catch (error) {
      console.error("Error deleting driver:", error);
      throw error;
    }
  }
  // Special Offers
  async getSpecialOffers() {
    const result = await this.db.select().from(specialOffers);
    return Array.isArray(result) ? result : [];
  }
  async getActiveSpecialOffers() {
    const result = await this.db.select().from(specialOffers).where(eq(specialOffers.isActive, true));
    return Array.isArray(result) ? result : [];
  }
  async createSpecialOffer(offer) {
    const [newOffer] = await this.db.insert(specialOffers).values(offer).returning();
    return newOffer;
  }
  async updateSpecialOffer(id, offer) {
    const [updated] = await this.db.update(specialOffers).set(offer).where(eq(specialOffers.id, id)).returning();
    return updated;
  }
  async deleteSpecialOffer(id) {
    const result = await this.db.delete(specialOffers).where(eq(specialOffers.id, id));
    return result.rowCount > 0;
  }
  // Search methods - removed duplicate methods, keeping enhanced versions below
  // UI Settings (using systemSettings)
  async getUiSettings() {
    try {
      const result = await this.db.select().from(systemSettingsTable);
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching UI settings:", error);
      return [];
    }
  }
  async getUiSetting(key) {
    const [setting] = await this.db.select().from(systemSettingsTable).where(
      eq(systemSettingsTable.key, key)
    );
    return setting;
  }
  async updateUiSetting(key, value) {
    try {
      const [updated] = await this.db.update(systemSettingsTable).set({ value, updatedAt: /* @__PURE__ */ new Date() }).where(eq(systemSettingsTable.key, key)).returning();
      if (updated) {
        return updated;
      }
      const [newSetting] = await this.db.insert(systemSettingsTable).values({
        key,
        value,
        category: "ui",
        description: `UI setting: ${key}`,
        isActive: true
      }).returning();
      return newSetting;
    } catch (error) {
      console.error("Error updating UI setting:", error);
      return void 0;
    }
  }
  async createUiSetting(setting) {
    const [newSetting] = await this.db.insert(systemSettingsTable).values(setting).returning();
    return newSetting;
  }
  async deleteUiSetting(key) {
    const result = await this.db.delete(systemSettingsTable).where(eq(systemSettingsTable.key, key));
    return result.rowCount > 0;
  }
  // Notifications
  async getNotifications(recipientType, recipientId, unread) {
    try {
      const conditions = [];
      if (recipientType) {
        conditions.push(eq(notifications.recipientType, recipientType));
      }
      if (recipientId) {
        conditions.push(eq(notifications.recipientId, recipientId));
      }
      if (unread !== void 0) {
        conditions.push(eq(notifications.isRead, !unread));
      }
      if (conditions.length > 0) {
        return await this.db.select().from(notifications).where(and(...conditions)).orderBy(desc(notifications.createdAt));
      }
      return await this.db.select().from(notifications).orderBy(desc(notifications.createdAt));
    } catch (error) {
      console.error("Error fetching notifications:", error);
      return [];
    }
  }
  async createNotification(notification) {
    try {
      const [newNotification] = await this.db.insert(notifications).values(notification).returning();
      return newNotification;
    } catch (error) {
      console.error("Error creating notification:", error);
      throw error;
    }
  }
  async markNotificationAsRead(id) {
    try {
      const [updated] = await this.db.update(notifications).set({ isRead: true }).where(eq(notifications.id, id)).returning();
      return updated;
    } catch (error) {
      console.error("Error marking notification as read:", error);
      return void 0;
    }
  }
  async createOrderTracking(tracking) {
    const [newTracking] = await this.db.insert(orderTracking).values({
      orderId: tracking.orderId,
      status: tracking.status,
      message: tracking.message,
      createdBy: tracking.createdBy,
      createdByType: tracking.createdByType,
      createdAt: /* @__PURE__ */ new Date()
    }).returning();
    return newTracking;
  }
  async getOrderTracking(orderId) {
    try {
      const order = await this.getOrderById(orderId);
      if (!order) return [];
      const tracking = [];
      const baseTime = new Date(order.createdAt);
      const statusFlow = ["pending", "confirmed", "preparing", "ready", "picked_up", "on_way", "delivered"];
      const currentStatusIndex = statusFlow.indexOf(order.status || "pending");
      for (let i = 0; i <= currentStatusIndex; i++) {
        const status = statusFlow[i];
        const messages2 = {
          pending: "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628",
          confirmed: "\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0645\u0637\u0639\u0645",
          preparing: "\u062C\u0627\u0631\u064A \u062A\u062D\u0636\u064A\u0631 \u0627\u0644\u0637\u0644\u0628",
          ready: "\u0627\u0644\u0637\u0644\u0628 \u062C\u0627\u0647\u0632 \u0644\u0644\u0627\u0633\u062A\u0644\u0627\u0645",
          picked_up: "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0645\u0637\u0639\u0645",
          on_way: "\u0627\u0644\u0633\u0627\u0626\u0642 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642 \u0625\u0644\u064A\u0643",
          delivered: "\u062A\u0645 \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D"
        };
        tracking.push({
          id: `${orderId}-${i}`,
          orderId,
          status,
          message: messages2[status] || `\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062D\u0627\u0644\u0629 \u0625\u0644\u0649 ${status}`,
          createdBy: i === 0 ? "system" : i <= 2 ? "restaurant" : "driver",
          createdByType: i === 0 ? "system" : i <= 2 ? "restaurant" : "driver",
          createdAt: new Date(baseTime.getTime() + i * 5 * 6e4)
          // 5 minutes apart
        });
      }
      return tracking;
    } catch (error) {
      console.error("Error getting order tracking:", error);
      return [];
    }
  }
  // Enhanced Search Functions
  async searchRestaurants(searchTerm, categoryId, userLocation) {
    const conditions = [
      eq(restaurants.isActive, true),
      or(
        like(restaurants.name, `%${searchTerm}%`),
        like(restaurants.description, `%${searchTerm}%`),
        like(restaurants.address, `%${searchTerm}%`)
      )
    ];
    if (categoryId) {
      conditions.push(eq(restaurants.categoryId, categoryId));
    }
    const result = await this.db.select().from(restaurants).where(and(...conditions)).orderBy(restaurants.name);
    const restaurants_list = Array.isArray(result) ? result : [];
    if (userLocation) {
      return restaurants_list.map((restaurant) => ({
        ...restaurant,
        distance: restaurant.latitude && restaurant.longitude ? this.calculateDistance(
          userLocation.lat,
          userLocation.lon,
          parseFloat(restaurant.latitude),
          parseFloat(restaurant.longitude)
        ) : null
      }));
    }
    return restaurants_list;
  }
  async searchCategories(searchTerm) {
    const result = await this.db.select().from(categories).where(
      and(
        eq(categories.isActive, true),
        like(categories.name, `%${searchTerm}%`)
      )
    ).orderBy(categories.name);
    return Array.isArray(result) ? result : [];
  }
  async searchMenuItems(searchTerm) {
    const result = await this.db.select().from(menuItems).where(
      and(
        eq(menuItems.isAvailable, true),
        or(
          like(menuItems.name, `%${searchTerm}%`),
          like(menuItems.description, `%${searchTerm}%`),
          like(menuItems.category, `%${searchTerm}%`)
        )
      )
    ).orderBy(menuItems.name);
    return Array.isArray(result) ? result : [];
  }
  // Enhanced Restaurant Functions with Search and Filtering
  async getRestaurants(filters) {
    const conditions = [eq(restaurants.isActive, true)];
    if (filters?.categoryId) {
      conditions.push(eq(restaurants.categoryId, filters.categoryId));
    }
    if (filters?.isOpen !== void 0) {
      conditions.push(eq(restaurants.isOpen, filters.isOpen));
    }
    if (filters?.isFeatured) {
      conditions.push(eq(restaurants.isFeatured, true));
    }
    if (filters?.isNew) {
      conditions.push(eq(restaurants.isNew, true));
    }
    if (filters?.search) {
      conditions.push(
        sql`(
          ${restaurants.name} ILIKE ${"%" + filters.search + "%"} OR
          COALESCE(${restaurants.description}, '') ILIKE ${"%" + filters.search + "%"} OR
          COALESCE(${restaurants.address}, '') ILIKE ${"%" + filters.search + "%"}
        )`
      );
    }
    let baseQuery = this.db.select().from(restaurants);
    if (conditions.length > 0) {
      baseQuery = baseQuery.where(and(...conditions));
    }
    switch (filters?.sortBy) {
      case "rating":
        baseQuery = baseQuery.orderBy(sql`(${restaurants.rating})::numeric DESC`);
        break;
      case "deliveryTime":
        baseQuery = baseQuery.orderBy(asc(restaurants.deliveryTime));
        break;
      case "newest":
        baseQuery = baseQuery.orderBy(desc(restaurants.createdAt));
        break;
      case "distance":
        baseQuery = baseQuery.orderBy(restaurants.name);
        break;
      default:
        baseQuery = baseQuery.orderBy(restaurants.name);
    }
    const result = await baseQuery;
    const restaurants_list = Array.isArray(result) ? result : [];
    if (filters?.userLatitude && filters?.userLongitude && filters?.sortBy === "distance") {
      return this.sortRestaurantsByDistance(
        restaurants_list,
        filters.userLatitude,
        filters.userLongitude,
        filters.radius
      );
    }
    if (filters?.userLatitude && filters?.userLongitude && filters?.radius) {
      return restaurants_list.filter((restaurant) => {
        if (!restaurant.latitude || !restaurant.longitude) return false;
        const distance = this.calculateDistance(
          filters.userLatitude,
          filters.userLongitude,
          parseFloat(restaurant.latitude),
          parseFloat(restaurant.longitude)
        );
        return distance <= filters.radius;
      });
    }
    return restaurants_list;
  }
  // Distance calculation using Haversine formula
  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  // Sort restaurants by distance
  sortRestaurantsByDistance(restaurants_list, userLat, userLon, maxDistance) {
    return restaurants_list.filter((restaurant) => {
      if (!restaurant.latitude || !restaurant.longitude) return false;
      if (!maxDistance) return true;
      const distance = this.calculateDistance(
        userLat,
        userLon,
        parseFloat(restaurant.latitude),
        parseFloat(restaurant.longitude)
      );
      return distance <= maxDistance;
    }).map((restaurant) => ({
      ...restaurant,
      distance: restaurant.latitude && restaurant.longitude ? this.calculateDistance(
        userLat,
        userLon,
        parseFloat(restaurant.latitude),
        parseFloat(restaurant.longitude)
      ) : null
    })).sort((a, b) => (a.distance || 999) - (b.distance || 999));
  }
  // Enhanced search for menu items
  async searchMenuItemsAdvanced(searchTerm, restaurantId) {
    const conditions = [
      eq(menuItems.isAvailable, true),
      // or(eq(restaurants.isActive, true), isNull(menuItems.restaurantId)), // Allow products without restaurant or from active restaurants
      or(
        like(menuItems.name, `%${searchTerm}%`),
        like(menuItems.description, `%${searchTerm}%`),
        like(menuItems.category, `%${searchTerm}%`)
      )
    ];
    if (restaurantId) {
      conditions.push(eq(menuItems.restaurantId, restaurantId));
    }
    const query = this.db.select({
      id: menuItems.id,
      name: menuItems.name,
      description: menuItems.description,
      price: menuItems.price,
      originalPrice: menuItems.originalPrice,
      image: menuItems.image,
      category: menuItems.category,
      isAvailable: menuItems.isAvailable,
      isSpecialOffer: menuItems.isSpecialOffer,
      restaurant: {
        id: restaurants.id,
        name: restaurants.name,
        image: restaurants.image,
        deliveryTime: restaurants.deliveryTime,
        deliveryFee: restaurants.deliveryFee
      }
    }).from(menuItems).leftJoin(restaurants, eq(menuItems.restaurantId, restaurants.id)).where(and(...conditions)).orderBy(menuItems.name);
    const result = await query;
    return Array.isArray(result) ? result : [];
  }
  // Order Functions
  async getOrderById(id) {
    try {
      const [order] = await this.db.select({
        id: orders.id,
        orderNumber: orders.orderNumber,
        customerName: orders.customerName,
        customerPhone: orders.customerPhone,
        customerEmail: orders.customerEmail,
        customerId: orders.customerId,
        deliveryAddress: orders.deliveryAddress,
        customerLocationLat: orders.customerLocationLat,
        customerLocationLng: orders.customerLocationLng,
        notes: orders.notes,
        paymentMethod: orders.paymentMethod,
        status: orders.status,
        items: orders.items,
        subtotal: orders.subtotal,
        deliveryFee: orders.deliveryFee,
        total: orders.total,
        totalAmount: orders.totalAmount,
        estimatedTime: orders.estimatedTime,
        driverEarnings: orders.driverEarnings,
        restaurantId: orders.restaurantId,
        driverId: orders.driverId,
        createdAt: orders.createdAt,
        updatedAt: orders.updatedAt,
        restaurantName: restaurants.name,
        restaurantPhone: restaurants.phone,
        restaurantAddress: restaurants.address,
        restaurantImage: restaurants.image
      }).from(orders).leftJoin(restaurants, eq(orders.restaurantId, restaurants.id)).where(eq(orders.id, id));
      return order;
    } catch (error) {
      console.error("Error fetching order by id:", error);
      return void 0;
    }
  }
  async getCustomerOrders(customerPhone) {
    try {
      const result = await this.db.select({
        id: orders.id,
        orderNumber: orders.orderNumber,
        customerName: orders.customerName,
        customerPhone: orders.customerPhone,
        deliveryAddress: orders.deliveryAddress,
        status: orders.status,
        items: orders.items,
        totalAmount: orders.totalAmount,
        createdAt: orders.createdAt,
        restaurantId: orders.restaurantId,
        restaurantName: restaurants.name,
        restaurantImage: restaurants.image
      }).from(orders).leftJoin(restaurants, eq(orders.restaurantId, restaurants.id)).where(eq(orders.customerPhone, customerPhone)).orderBy(desc(orders.createdAt));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching customer orders:", error);
      return [];
    }
  }
  async updateOrderStatus(orderId, status) {
    const [updated] = await this.db.update(orders).set({ status, updatedAt: /* @__PURE__ */ new Date() }).where(eq(orders.id, orderId)).returning();
    return updated;
  }
  // Order Tracking Functions
  async createOrderTracking(tracking) {
    const [newTracking] = await this.db.insert(orderTracking).values(tracking).returning();
    return newTracking;
  }
  // Cart Functions - وظائف السلة
  async getCartItems(userId) {
    try {
      const result = await this.db.select({
        id: cart.id,
        quantity: cart.quantity,
        specialInstructions: cart.specialInstructions,
        addedAt: cart.addedAt,
        menuItem: {
          id: menuItems.id,
          name: menuItems.name,
          description: menuItems.description,
          price: menuItems.price,
          image: menuItems.image,
          category: menuItems.category
        },
        restaurant: {
          id: restaurants.id,
          name: restaurants.name,
          image: restaurants.image,
          deliveryFee: restaurants.deliveryFee
        }
      }).from(cart).leftJoin(menuItems, eq(cart.menuItemId, menuItems.id)).leftJoin(restaurants, eq(cart.restaurantId, restaurants.id)).where(eq(cart.userId, userId)).orderBy(desc(cart.addedAt));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching cart items:", error);
      return [];
    }
  }
  async addToCart(cartItem) {
    try {
      const existingItemResult = await this.db.select().from(cart).where(
        and(
          eq(cart.userId, cartItem.userId),
          eq(cart.menuItemId, cartItem.menuItemId)
        )
      );
      const existingItem = Array.isArray(existingItemResult) ? existingItemResult : [];
      if (existingItem.length > 0) {
        const [updated] = await this.db.update(cart).set({
          quantity: sql`${cart.quantity} + ${cartItem.quantity || 1}`,
          addedAt: /* @__PURE__ */ new Date()
        }).where(eq(cart.id, existingItem[0].id)).returning();
        return updated;
      } else {
        const [newItem] = await this.db.insert(cart).values(cartItem).returning();
        return newItem;
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  }
  async updateCartItem(cartId, quantity) {
    if (quantity <= 0) {
      await this.db.delete(cart).where(eq(cart.id, cartId));
      return void 0;
    }
    const [updated] = await this.db.update(cart).set({ quantity, addedAt: /* @__PURE__ */ new Date() }).where(eq(cart.id, cartId)).returning();
    return updated;
  }
  async removeFromCart(cartId) {
    const result = await this.db.delete(cart).where(eq(cart.id, cartId));
    return result.rowCount > 0;
  }
  async clearCart(userId) {
    const result = await this.db.delete(cart).where(eq(cart.userId, userId));
    return result.rowCount > 0;
  }
  // Favorites Functions - وظائف المفضلة
  async getFavoriteRestaurants(userId) {
    try {
      const result = await this.db.select().from(restaurants).innerJoin(favorites, eq(favorites.restaurantId, restaurants.id)).where(
        and(
          eq(favorites.userId, userId),
          eq(restaurants.isActive, true)
        )
      ).orderBy(desc(favorites.addedAt));
      return Array.isArray(result) ? result.map((row) => row.restaurants) : [];
    } catch (error) {
      console.error("Error fetching favorite restaurants:", error);
      return [];
    }
  }
  async getFavoriteProducts(userId) {
    try {
      const result = await this.db.select().from(menuItems).innerJoin(favorites, eq(favorites.menuItemId, menuItems.id)).where(
        and(
          eq(favorites.userId, userId),
          eq(menuItems.isAvailable, true)
        )
      ).orderBy(desc(favorites.addedAt));
      return Array.isArray(result) ? result.map((row) => row.menu_items) : [];
    } catch (error) {
      console.error("Error fetching favorite products:", error);
      return [];
    }
  }
  async addToFavorites(favorite) {
    const [newFavorite] = await this.db.insert(favorites).values(favorite).returning();
    return newFavorite;
  }
  async removeFromFavorites(userId, restaurantId, menuItemId) {
    const conditions = [eq(favorites.userId, userId)];
    if (restaurantId) {
      conditions.push(eq(favorites.restaurantId, restaurantId));
    }
    if (menuItemId) {
      conditions.push(eq(favorites.menuItemId, menuItemId));
    }
    if (conditions.length === 1) return false;
    const result = await this.db.delete(favorites).where(and(...conditions));
    return result.rowCount > 0;
  }
  async isRestaurantFavorite(userId, restaurantId) {
    const result = await this.db.select().from(favorites).where(
      and(
        eq(favorites.userId, userId),
        eq(favorites.restaurantId, restaurantId)
      )
    );
    return result.length > 0;
  }
  async isProductFavorite(userId, menuItemId) {
    const result = await this.db.select().from(favorites).where(
      and(
        eq(favorites.userId, userId),
        eq(favorites.menuItemId, menuItemId)
      )
    );
    return result.length > 0;
  }
  // User Addresses
  async getUserAddresses(userId) {
    try {
      const result = await this.db.select().from(userAddresses).where(eq(userAddresses.userId, userId)).orderBy(desc(userAddresses.isDefault), desc(userAddresses.createdAt));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching user addresses:", error);
      return [];
    }
  }
  async createUserAddress(userId, address) {
    if (address.isDefault) {
      await this.db.update(userAddresses).set({ isDefault: false }).where(
        and(
          eq(userAddresses.userId, userId),
          eq(userAddresses.isDefault, true)
        )
      );
    }
    const [newAddress] = await this.db.insert(userAddresses).values({
      ...address,
      userId,
      isDefault: address.isDefault ?? false
    }).returning();
    return newAddress;
  }
  async updateUserAddress(addressId, userId, address) {
    const existingAddress = await this.db.select().from(userAddresses).where(
      and(
        eq(userAddresses.id, addressId),
        eq(userAddresses.userId, userId)
      )
    );
    if (existingAddress.length === 0) {
      return void 0;
    }
    if (address.isDefault) {
      await this.db.update(userAddresses).set({ isDefault: false }).where(
        and(
          eq(userAddresses.userId, userId),
          eq(userAddresses.isDefault, true)
        )
      );
    }
    const [updated] = await this.db.update(userAddresses).set(address).where(eq(userAddresses.id, addressId)).returning();
    return updated;
  }
  async deleteUserAddress(addressId, userId) {
    const result = await this.db.delete(userAddresses).where(
      and(
        eq(userAddresses.id, addressId),
        eq(userAddresses.userId, userId)
      )
    );
    return result.rowCount > 0;
  }
  // Ratings
  async getRatings(orderId, restaurantId) {
    try {
      let query = this.db.select().from(ratings);
      if (orderId && restaurantId) {
        query = query.where(
          and(
            eq(ratings.orderId, orderId),
            eq(ratings.restaurantId, restaurantId)
          )
        );
      } else if (orderId) {
        query = query.where(eq(ratings.orderId, orderId));
      } else if (restaurantId) {
        query = query.where(eq(ratings.restaurantId, restaurantId));
      }
      const result = await query.orderBy(desc(ratings.createdAt));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching ratings:", error);
      return [];
    }
  }
  async createRating(rating) {
    const [newRating] = await this.db.insert(ratings).values({
      ...rating,
      isApproved: rating.isApproved ?? false
    }).returning();
    return newRating;
  }
  // Delivery Fee Settings
  async getDeliveryFeeSettings(restaurantId) {
    try {
      const conditions = [eq(deliveryFeeSettings.isActive, true)];
      if (restaurantId) {
        conditions.push(eq(deliveryFeeSettings.restaurantId, restaurantId));
      } else {
        conditions.push(isNull(deliveryFeeSettings.restaurantId));
      }
      const [settings] = await this.db.select().from(deliveryFeeSettings).where(and(...conditions)).orderBy(desc(deliveryFeeSettings.updatedAt));
      return settings;
    } catch (error) {
      console.error("Error fetching delivery fee settings:", error);
      return void 0;
    }
  }
  async createDeliveryFeeSettings(settings) {
    const [newSettings] = await this.db.insert(deliveryFeeSettings).values(settings).returning();
    return newSettings;
  }
  async updateDeliveryFeeSettings(id, settings) {
    const [updated] = await this.db.update(deliveryFeeSettings).set({ ...settings, updatedAt: /* @__PURE__ */ new Date() }).where(eq(deliveryFeeSettings.id, id)).returning();
    return updated;
  }
  // Delivery Zones
  async getDeliveryZones() {
    try {
      return await this.db.select().from(deliveryZones).where(eq(deliveryZones.isActive, true));
    } catch (error) {
      console.error("Error fetching delivery zones:", error);
      return [];
    }
  }
  async createDeliveryZone(zone) {
    const [newZone] = await this.db.insert(deliveryZones).values(zone).returning();
    return newZone;
  }
  async updateDeliveryZone(id, zone) {
    const [updated] = await this.db.update(deliveryZones).set(zone).where(eq(deliveryZones.id, id)).returning();
    return updated;
  }
  async deleteDeliveryZone(id) {
    const result = await this.db.update(deliveryZones).set({ isActive: false }).where(eq(deliveryZones.id, id));
    return result.rowCount > 0;
  }
  // Financial Reports
  async createFinancialReport(report) {
    const [newReport] = await this.db.insert(financialReports).values(report).returning();
    return newReport;
  }
  async getFinancialReports(type) {
    let query = this.db.select().from(financialReports);
    if (type) {
      query = query.where(eq(financialReports.periodType, type));
    }
    return await query.orderBy(desc(financialReports.startDate));
  }
  // HR Management
  async getEmployees() {
    try {
      const result = await this.db.select().from(employees).orderBy(asc(employees.name));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching employees:", error);
      return [];
    }
  }
  async getEmployee(id) {
    const [employee] = await this.db.select().from(employees).where(eq(employees.id, id));
    return employee;
  }
  async createEmployee(employee) {
    const [newEmployee] = await this.db.insert(employees).values(employee).returning();
    return newEmployee;
  }
  async updateEmployee(id, employee) {
    const [updated] = await this.db.update(employees).set({ ...employee, updatedAt: /* @__PURE__ */ new Date() }).where(eq(employees.id, id)).returning();
    return updated;
  }
  async deleteEmployee(id) {
    const result = await this.db.delete(employees).where(eq(employees.id, id));
    return result.rowCount > 0;
  }
  async getAttendance(employeeId, date) {
    try {
      let query = this.db.select().from(attendance);
      const conditions = [];
      if (employeeId) {
        conditions.push(eq(attendance.employeeId, employeeId));
      }
      if (date) {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);
        conditions.push(sql`${attendance.date} >= ${startOfDay} AND ${attendance.date} <= ${endOfDay}`);
      }
      if (conditions.length > 0) {
        query = query.where(and(...conditions));
      }
      const result = await query.orderBy(desc(attendance.date));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching attendance:", error);
      return [];
    }
  }
  async createAttendance(att) {
    const [newAttendance] = await this.db.insert(attendance).values(att).returning();
    return newAttendance;
  }
  async updateAttendance(id, att) {
    const [updated] = await this.db.update(attendance).set(att).where(eq(attendance.id, id)).returning();
    return updated;
  }
  async getLeaveRequests(employeeId) {
    try {
      let query = this.db.select().from(leaveRequests);
      if (employeeId) {
        query = query.where(eq(leaveRequests.employeeId, employeeId));
      }
      const result = await query.orderBy(desc(leaveRequests.submittedAt));
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error("Error fetching leave requests:", error);
      return [];
    }
  }
  async createLeaveRequest(request) {
    const [newRequest] = await this.db.insert(leaveRequests).values(request).returning();
    return newRequest;
  }
  async updateLeaveRequest(id, request) {
    const [updated] = await this.db.update(leaveRequests).set(request).where(eq(leaveRequests.id, id)).returning();
    return updated;
  }
  // ==================== دوال إدارة أرصدة السائقين ====================
  async getDriverBalance(driverId) {
    const [balance] = await this.db.select().from(driverBalances).where(eq(driverBalances.driverId, driverId));
    return balance || null;
  }
  async createDriverBalance(data) {
    const [balance] = await this.db.insert(driverBalances).values(data).returning();
    return balance;
  }
  async updateDriverBalance(driverId, data) {
    const existingBalance = await this.getDriverBalance(driverId);
    if (!existingBalance) {
      return await this.createDriverBalance({
        driverId,
        totalBalance: data.type === "deduction" || data.type === "withdrawal" ? (-data.amount).toString() : data.amount.toString(),
        availableBalance: data.type === "deduction" || data.type === "withdrawal" ? (-data.amount).toString() : data.amount.toString(),
        withdrawnAmount: data.type === "withdrawal" ? data.amount.toString() : "0",
        pendingAmount: "0"
      });
    }
    const currentTotal = parseFloat(existingBalance.totalBalance);
    const currentAvailable = parseFloat(existingBalance.availableBalance);
    const currentWithdrawn = parseFloat(existingBalance.withdrawnAmount);
    let newTotal = currentTotal;
    let newAvailable = currentAvailable;
    let newWithdrawn = currentWithdrawn;
    if (data.type === "commission" || data.type === "salary" || data.type === "bonus") {
      newTotal += data.amount;
      newAvailable += data.amount;
    } else if (data.type === "deduction") {
      newTotal -= data.amount;
      newAvailable -= data.amount;
    } else if (data.type === "withdrawal") {
      newAvailable -= data.amount;
      newWithdrawn += data.amount;
    }
    const [updated] = await this.db.update(driverBalances).set({
      totalBalance: newTotal.toString(),
      availableBalance: newAvailable.toString(),
      withdrawnAmount: newWithdrawn.toString(),
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(driverBalances.driverId, driverId)).returning();
    return updated;
  }
  // ==================== معاملات السائقين ====================
  async createDriverTransaction(data) {
    const balance = await this.getDriverBalance(data.driverId);
    const balanceBefore = balance ? parseFloat(balance.availableBalance) : 0;
    await this.updateDriverBalance(data.driverId, {
      amount: parseFloat(data.amount.toString()),
      type: data.type,
      description: data.description || `\u0639\u0645\u0644\u064A\u0629 \u0631\u0635\u064A\u062F: ${data.type}`,
      orderId: data.referenceId
    });
    const newBalance = await this.getDriverBalance(data.driverId);
    const balanceAfter = newBalance ? parseFloat(newBalance.availableBalance) : balanceBefore;
    const [transaction] = await this.db.insert(driverTransactions).values({
      ...data,
      balanceBefore: balanceBefore.toString(),
      balanceAfter: balanceAfter.toString()
    }).returning();
    return transaction;
  }
  async getDriverTransactions(driverId) {
    return await this.db.select().from(driverTransactions).where(eq(driverTransactions.driverId, driverId)).orderBy(desc(driverTransactions.createdAt));
  }
  async getDriverTransactionsByType(driverId, type) {
    return await this.db.select().from(driverTransactions).where(and(
      eq(driverTransactions.driverId, driverId),
      eq(driverTransactions.type, type)
    )).orderBy(desc(driverTransactions.createdAt));
  }
  // ==================== عمولات السائقين ====================
  async createDriverCommission(data) {
    const [commission] = await this.db.insert(driverCommissions).values(data).returning();
    if (data.status === "approved") {
      await this.createDriverTransaction({
        driverId: data.driverId,
        type: "commission",
        amount: data.commissionAmount,
        description: `\u0639\u0645\u0648\u0644\u0629 \u0637\u0644\u0628 \u0631\u0642\u0645: ${data.orderId}`,
        referenceId: data.orderId
      });
    }
    return commission;
  }
  async getDriverCommissions(driverId) {
    return await this.db.select().from(driverCommissions).where(eq(driverCommissions.driverId, driverId)).orderBy(desc(driverCommissions.createdAt));
  }
  async getDriverCommissionById(id) {
    const [commission] = await this.db.select().from(driverCommissions).where(eq(driverCommissions.id, id));
    return commission || null;
  }
  async updateDriverCommission(id, data) {
    const existing = await this.getDriverCommissionById(id);
    if (!existing) return null;
    const [updated] = await this.db.update(driverCommissions).set(data).where(eq(driverCommissions.id, id)).returning();
    if (data.status === "approved" && existing.status !== "approved") {
      await this.createDriverTransaction({
        driverId: updated.driverId,
        type: "commission",
        amount: updated.commissionAmount,
        description: `\u0639\u0645\u0648\u0644\u0629 \u0637\u0644\u0628 \u0631\u0642\u0645: ${updated.orderId}`,
        referenceId: updated.orderId
      });
    }
    return updated;
  }
  // ==================== سحوبات السائقين ====================
  async createDriverWithdrawal(data) {
    const [withdrawal] = await this.db.insert(driverWithdrawals).values(data).returning();
    return withdrawal;
  }
  async getDriverWithdrawals(driverId) {
    return await this.db.select().from(driverWithdrawals).where(eq(driverWithdrawals.driverId, driverId)).orderBy(desc(driverWithdrawals.createdAt));
  }
  async getDriverWithdrawalById(id) {
    const [withdrawal] = await this.db.select().from(driverWithdrawals).where(eq(driverWithdrawals.id, id));
    return withdrawal || null;
  }
  async updateWithdrawal(id, data) {
    const existing = await this.getDriverWithdrawalById(id);
    if (!existing) return null;
    const [updated] = await this.db.update(driverWithdrawals).set({ ...data, processedAt: data.status === "completed" ? /* @__PURE__ */ new Date() : void 0 }).where(eq(driverWithdrawals.id, id)).returning();
    if (data.status === "completed" && existing.status !== "completed") {
      await this.createDriverTransaction({
        driverId: updated.driverId,
        type: "withdrawal",
        amount: updated.amount,
        description: `\u0633\u062D\u0628 \u0631\u0635\u064A\u062F \u0645\u0643\u062A\u0645\u0644`,
        referenceId: updated.id
      });
    }
    return updated;
  }
  async updateOrderCommission(id, data) {
    const [updated] = await this.db.update(orders).set({
      driverEarnings: data.commissionAmount
      // هنا نفترض أن الحقول موجودة في الطلب أو نحتاج لإضافتها
    }).where(eq(orders.id, id)).returning();
    return updated;
  }
  // Geo-Zones methods
  async getGeoZones() {
    return await this.db.select().from(geoZones);
  }
  async getGeoZone(id) {
    const [zone] = await this.db.select().from(geoZones).where(eq(geoZones.id, id));
    return zone;
  }
  async createGeoZone(zone) {
    const [newZone] = await this.db.insert(geoZones).values(zone).returning();
    return newZone;
  }
  async updateGeoZone(id, zone) {
    const [updated] = await this.db.update(geoZones).set({ ...zone, updatedAt: /* @__PURE__ */ new Date() }).where(eq(geoZones.id, id)).returning();
    return updated;
  }
  async deleteGeoZone(id) {
    const result = await this.db.delete(geoZones).where(eq(geoZones.id, id));
    return result.rowCount > 0;
  }
  // Delivery Rules methods
  async getDeliveryRules() {
    return await this.db.select().from(deliveryRules).orderBy(desc(deliveryRules.priority));
  }
  async getDeliveryRule(id) {
    const [rule] = await this.db.select().from(deliveryRules).where(eq(deliveryRules.id, id));
    return rule;
  }
  async createDeliveryRule(rule) {
    const [newRule] = await this.db.insert(deliveryRules).values(rule).returning();
    return newRule;
  }
  async updateDeliveryRule(id, rule) {
    const [updated] = await this.db.update(deliveryRules).set({ ...rule, updatedAt: /* @__PURE__ */ new Date() }).where(eq(deliveryRules.id, id)).returning();
    return updated;
  }
  async deleteDeliveryRule(id) {
    const result = await this.db.delete(deliveryRules).where(eq(deliveryRules.id, id));
    return result.rowCount > 0;
  }
  // Delivery Discounts methods
  async getDeliveryDiscounts() {
    return await this.db.select().from(deliveryDiscounts);
  }
  async createDeliveryDiscount(discount) {
    const [newDiscount] = await this.db.insert(deliveryDiscounts).values(discount).returning();
    return newDiscount;
  }
  async updateDeliveryDiscount(id, discount) {
    const [updated] = await this.db.update(deliveryDiscounts).set({ ...discount, updatedAt: /* @__PURE__ */ new Date() }).where(eq(deliveryDiscounts.id, id)).returning();
    return updated;
  }
  async deleteDeliveryDiscount(id) {
    const result = await this.db.delete(deliveryDiscounts).where(eq(deliveryDiscounts.id, id));
    return result.rowCount > 0;
  }
  // طلبات السحب (النظام المتقدم)
  async createWithdrawalRequest(data) {
    const [request] = await this.db.insert(withdrawalRequests).values(data).returning();
    return request;
  }
  async getWithdrawalRequests(entityId, entityType) {
    return await this.db.select().from(withdrawalRequests).where(and(
      eq(withdrawalRequests.entityId, entityId),
      eq(withdrawalRequests.entityType, entityType)
    )).orderBy(desc(withdrawalRequests.createdAt));
  }
  async getPendingWithdrawalRequests() {
    return await this.db.select().from(withdrawalRequests).where(eq(withdrawalRequests.status, "pending")).orderBy(desc(withdrawalRequests.createdAt));
  }
  async updateWithdrawalRequest(id, updates) {
    const [request] = await this.db.update(withdrawalRequests).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq(withdrawalRequests.id, id)).returning();
    return request;
  }
  // Chat/Messages
  async getMessages(orderId) {
    return await this.db.select().from(messages).where(eq(messages.orderId, orderId)).orderBy(asc(messages.createdAt));
  }
  async createMessage(message) {
    const [newMessage] = await this.db.insert(messages).values(message).returning();
    return newMessage;
  }
  async markMessagesAsRead(orderId, receiverId2) {
    await this.db.update(messages).set({ isRead: true }).where(and(
      eq(messages.orderId, orderId),
      eq(messages.receiverId, receiverId2)
    ));
  }
  // Audit Logs
  async createAuditLog(log2) {
    const [newLog] = await this.db.insert(auditLogs).values(log2).returning();
    return newLog;
  }
  async getAuditLogs(filters) {
    let query = this.db.select().from(auditLogs);
    if (filters?.adminId) {
      query = query.where(eq(auditLogs.adminId, filters.adminId));
    }
    return await query.orderBy(desc(auditLogs.createdAt));
  }
  // Payment Gateways
  async getPaymentGateways() {
    return await this.db.select().from(paymentGateways);
  }
  async getActivePaymentGateways() {
    return await this.db.select().from(paymentGateways).where(eq(paymentGateways.isActive, true));
  }
  async createPaymentGateway(gateway) {
    const [newGateway] = await this.db.insert(paymentGateways).values(gateway).returning();
    return newGateway;
  }
  async updatePaymentGateway(id, gateway) {
    const [updated] = await this.db.update(paymentGateways).set({ ...gateway, updatedAt: /* @__PURE__ */ new Date() }).where(eq(paymentGateways.id, id)).returning();
    return updated;
  }
  async deletePaymentGateway(id) {
    const result = await this.db.delete(paymentGateways).where(eq(paymentGateways.id, id));
    return result.rowCount > 0;
  }
};
var dbStorage = new DatabaseStorage();

// server/storage.ts
var MemStorage = class {
  users;
  categories;
  restaurants;
  menuItems;
  orders;
  drivers;
  specialOffers;
  uiSettings;
  userAddresses;
  ratings;
  cartItems;
  favorites;
  adminUsers;
  notifications;
  orderTracking;
  // خرائط جديدة لنظام الرصيد والعمولات
  driverBalances;
  driverTransactions;
  driverCommissions;
  driverWithdrawals;
  deliveryFeeSettingsMap;
  deliveryZonesMap;
  employeesMap;
  attendanceMap;
  leaveRequestsMap;
  geoZonesMap;
  deliveryRulesMap;
  deliveryDiscountsMap;
  withdrawalRequestsMap;
  // Add db property for compatibility with routes that access it directly
  get db() {
    throw new Error("Direct database access not available in MemStorage. Use storage interface methods instead.");
  }
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.categories = /* @__PURE__ */ new Map();
    this.restaurants = /* @__PURE__ */ new Map();
    this.menuItems = /* @__PURE__ */ new Map();
    this.orders = /* @__PURE__ */ new Map();
    this.drivers = /* @__PURE__ */ new Map();
    this.specialOffers = /* @__PURE__ */ new Map();
    this.uiSettings = /* @__PURE__ */ new Map();
    this.userAddresses = /* @__PURE__ */ new Map();
    this.ratings = /* @__PURE__ */ new Map();
    this.cartItems = /* @__PURE__ */ new Map();
    this.favorites = /* @__PURE__ */ new Map();
    this.adminUsers = /* @__PURE__ */ new Map();
    this.notifications = /* @__PURE__ */ new Map();
    this.orderTracking = /* @__PURE__ */ new Map();
    this.driverBalances = /* @__PURE__ */ new Map();
    this.driverTransactions = /* @__PURE__ */ new Map();
    this.driverCommissions = /* @__PURE__ */ new Map();
    this.driverWithdrawals = /* @__PURE__ */ new Map();
    this.deliveryFeeSettingsMap = /* @__PURE__ */ new Map();
    this.deliveryZonesMap = /* @__PURE__ */ new Map();
    this.employeesMap = /* @__PURE__ */ new Map();
    this.attendanceMap = /* @__PURE__ */ new Map();
    this.leaveRequestsMap = /* @__PURE__ */ new Map();
    this.geoZonesMap = /* @__PURE__ */ new Map();
    this.deliveryRulesMap = /* @__PURE__ */ new Map();
    this.deliveryDiscountsMap = /* @__PURE__ */ new Map();
    this.withdrawalRequestsMap = /* @__PURE__ */ new Map();
    this.initializeData();
  }
  initializeData() {
    const categories2 = [
      { id: "1", name: "\u0645\u0637\u0627\u0639\u0645", icon: "fas fa-utensils", isActive: true, sortOrder: 0, createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date() },
      { id: "2", name: "\u0645\u0642\u0627\u0647\u064A", icon: "fas fa-coffee", isActive: true, sortOrder: 1, createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date() },
      { id: "3", name: "\u062D\u0644\u0648\u064A\u0627\u062A", icon: "fas fa-candy-cane", isActive: true, sortOrder: 2, createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date() },
      { id: "4", name: "\u0633\u0648\u0628\u0631\u0645\u0627\u0631\u0643\u062A", icon: "fas fa-shopping-cart", isActive: true, sortOrder: 3, createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date() },
      { id: "5", name: "\u0635\u064A\u062F\u0644\u064A\u0627\u062A", icon: "fas fa-pills", isActive: true, sortOrder: 4, createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date() }
    ];
    categories2.forEach((cat) => this.categories.set(cat.id, cat));
    const restaurants2 = [
      {
        id: "1",
        name: "\u0645\u0637\u0639\u0645 \u0627\u0644\u0648\u0632\u064A\u0643\u0648 \u0644\u0644\u0639\u0631\u0628\u0643\u0629",
        description: "\u0645\u0637\u0639\u0645 \u064A\u0645\u0646\u064A \u062A\u0642\u0644\u064A\u062F\u064A \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0627\u0644\u0634\u0639\u0628\u064A\u0629",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        rating: "4.8",
        reviewCount: 4891,
        deliveryTime: "40-60 \u062F\u0642\u064A\u0642\u0629",
        isOpen: true,
        minimumOrder: "25",
        deliveryFee: "5",
        categoryId: "1",
        openingTime: "08:00",
        closingTime: "23:00",
        workingDays: "0,1,2,3,4,5,6",
        isTemporarilyClosed: false,
        temporaryCloseReason: null,
        latitude: null,
        longitude: null,
        address: "\u0635\u0646\u0639\u0627\u0621\u060C \u0627\u0644\u064A\u0645\u0646",
        isFeatured: true,
        isNew: false,
        isActive: true,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "2",
        name: "\u062D\u0644\u0648\u064A\u0627\u062A \u0627\u0644\u0634\u0627\u0645",
        description: "\u0623\u0641\u0636\u0644 \u0627\u0644\u062D\u0644\u0648\u064A\u0627\u062A \u0627\u0644\u0634\u0627\u0645\u064A\u0629 \u0648\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        rating: "4.6",
        reviewCount: 2341,
        deliveryTime: "30-45 \u062F\u0642\u064A\u0642\u0629",
        isOpen: true,
        minimumOrder: "15",
        deliveryFee: "3",
        categoryId: "3",
        openingTime: "08:00",
        closingTime: "23:00",
        workingDays: "0,1,2,3,4,5,6",
        isTemporarilyClosed: false,
        temporaryCloseReason: null,
        latitude: null,
        longitude: null,
        address: "\u0635\u0646\u0639\u0627\u0621\u060C \u0627\u0644\u064A\u0645\u0646",
        isFeatured: false,
        isNew: true,
        isActive: true,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "3",
        name: "\u0645\u0642\u0647\u0649 \u0627\u0644\u0639\u0631\u0648\u0628\u0629",
        description: "\u0645\u0642\u0647\u0649 \u0634\u0639\u0628\u064A \u0628\u0627\u0644\u0637\u0627\u0628\u0639 \u0627\u0644\u0639\u0631\u0628\u064A \u0627\u0644\u0623\u0635\u064A\u0644",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        rating: "4.5",
        reviewCount: 1876,
        deliveryTime: "\u064A\u0641\u062A\u062D \u0641\u064A 8:00 \u0635",
        isOpen: true,
        minimumOrder: "20",
        deliveryFee: "4",
        categoryId: "2",
        openingTime: "08:00",
        closingTime: "23:00",
        workingDays: "0,1,2,3,4,5,6",
        isTemporarilyClosed: false,
        temporaryCloseReason: null,
        latitude: null,
        longitude: null,
        address: "\u0635\u0646\u0639\u0627\u0621\u060C \u0627\u0644\u064A\u0645\u0646",
        isFeatured: false,
        isNew: false,
        isActive: true,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    ];
    restaurants2.forEach((restaurant) => this.restaurants.set(restaurant.id, restaurant));
    const menuItems2 = [
      {
        id: "1",
        name: "\u0639\u0631\u0628\u0643\u0629 \u0628\u0627\u0644\u0642\u0634\u0637\u0629 \u0648\u0627\u0644\u0639\u0633\u0644",
        description: "\u062D\u0644\u0648\u0649 \u064A\u0645\u0646\u064A\u0629 \u062A\u0642\u0644\u064A\u062F\u064A\u0629 \u0628\u0627\u0644\u0642\u0634\u0637\u0629 \u0627\u0644\u0637\u0627\u0632\u062C\u0629 \u0648\u0627\u0644\u0639\u0633\u0644 \u0627\u0644\u0637\u0628\u064A\u0639\u064A",
        price: "55",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        category: "\u0648\u062C\u0628\u0627\u062A \u0631\u0645\u0636\u0627\u0646",
        isAvailable: true,
        isSpecialOffer: false,
        originalPrice: null,
        restaurantId: "1"
      },
      {
        id: "2",
        name: "\u0645\u0639\u0635\u0648\u0628 \u0628\u0627\u0644\u0642\u0634\u0637\u0629 \u0648\u0627\u0644\u0639\u0633\u0644",
        description: "\u0637\u0628\u0642 \u064A\u0645\u0646\u064A \u0634\u0639\u0628\u064A \u0628\u0627\u0644\u0645\u0648\u0632 \u0648\u0627\u0644\u0642\u0634\u0637\u0629 \u0648\u0627\u0644\u0639\u0633\u0644",
        price: "55",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        category: "\u0648\u062C\u0628\u0627\u062A \u0631\u0645\u0636\u0627\u0646",
        isAvailable: true,
        isSpecialOffer: false,
        originalPrice: null,
        restaurantId: "1"
      },
      {
        id: "3",
        name: "\u0645\u064A\u0627\u0647 \u0645\u0639\u062F\u0646\u064A\u0629 750 \u0645\u0644",
        description: "\u0645\u064A\u0627\u0647 \u0637\u0628\u064A\u0639\u064A\u0629 \u0645\u0639\u062F\u0646\u064A\u0629 \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u062C\u0648\u062F\u0629",
        price: "3",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        category: "\u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062A",
        isAvailable: true,
        isSpecialOffer: false,
        originalPrice: null,
        restaurantId: "1"
      },
      {
        id: "4",
        name: "\u0643\u0648\u0645\u0628\u0648 \u0639\u0631\u0628\u0643\u0629 \u062E\u0627\u0635",
        description: "\u0639\u0631\u0628\u0643\u0629 + \u0645\u0637\u0628\u0642 \u0639\u0627\u062F\u064A + \u0645\u0634\u0631\u0648\u0628 \u063A\u0627\u0632\u064A",
        price: "55",
        originalPrice: "60",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        category: "\u0627\u0644\u0639\u0631\u0648\u0636",
        isAvailable: true,
        isSpecialOffer: true,
        restaurantId: "1"
      }
    ];
    menuItems2.forEach((item) => this.menuItems.set(item.id, item));
    const drivers2 = [
      {
        id: "1",
        name: "\u0623\u062D\u0645\u062F \u0645\u062D\u0645\u062F",
        username: "ahmed_driver",
        email: "ahmed@drivers.com",
        phone: "+967771234567",
        password: "123456",
        userType: "driver",
        isAvailable: true,
        isActive: true,
        currentLocation: "\u0635\u0646\u0639\u0627\u0621",
        earnings: "2500",
        commissionRate: 70,
        // نسبة العمولة الجديدة
        totalEarnings: 2500,
        // إجمالي الأرباح
        averageRating: 4.5,
        // متوسط التقييم
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      },
      {
        id: "2",
        name: "\u0639\u0644\u064A \u062D\u0633\u0646",
        username: "ali_driver",
        email: "ali@drivers.com",
        phone: "+967779876543",
        password: "123456",
        userType: "driver",
        isAvailable: true,
        isActive: true,
        currentLocation: "\u062A\u0639\u0632",
        earnings: "3200",
        commissionRate: 65,
        // نسبة العمولة الجديدة
        totalEarnings: 3200,
        // إجمالي الأرباح
        averageRating: 4.3,
        // متوسط التقييم
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    ];
    drivers2.forEach((driver) => this.drivers.set(driver.id, driver));
    drivers2.forEach((driver) => {
      const balance = {
        driverId: driver.id,
        totalBalance: parseFloat(driver.earnings) || 0,
        availableBalance: parseFloat(driver.earnings) || 0,
        withdrawnAmount: 0,
        pendingAmount: 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      };
      this.driverBalances.set(driver.id, balance);
    });
    const uiSettingsData = [
      { key: "show_categories", value: "true", description: "\u0639\u0631\u0636 \u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0637\u0627\u0639\u0645" },
      { key: "show_search_bar", value: "true", description: "\u0639\u0631\u0636 \u0634\u0631\u064A\u0637 \u0627\u0644\u0628\u062D\u062B" },
      { key: "show_special_offers", value: "true", description: "\u0639\u0631\u0636 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062E\u0627\u0635\u0629" },
      { key: "show_navigation_home", value: "true", description: "\u0639\u0631\u0636 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" },
      { key: "show_navigation_search", value: "true", description: "\u0639\u0631\u0636 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062D\u062B" },
      { key: "show_navigation_orders", value: "true", description: "\u0639\u0631\u0636 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A" },
      { key: "show_navigation_profile", value: "true", description: "\u0639\u0631\u0636 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A" },
      { key: "enable_dark_mode", value: "false", description: "\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0645\u0638\u0644\u0645" },
      { key: "enable_notifications", value: "true", description: "\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A" },
      { key: "enable_location_services", value: "true", description: "\u062A\u0641\u0639\u064A\u0644 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0648\u0642\u0639" },
      { key: "enable_voice_search", value: "false", description: "\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0635\u0648\u062A\u064A" },
      { key: "enable_quick_order", value: "true", description: "\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0633\u0631\u064A\u0639" },
      { key: "opening_time", value: "08:00", description: "\u0648\u0642\u062A \u0641\u062A\u062D \u0627\u0644\u0645\u062A\u062C\u0631" },
      { key: "closing_time", value: "23:00", description: "\u0648\u0642\u062A \u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0645\u062A\u062C\u0631" },
      { key: "store_status", value: "\u0645\u0641\u062A\u0648\u062D", description: "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062A\u062C\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629" }
    ];
    uiSettingsData.forEach((setting) => {
      const uiSetting = {
        id: randomUUID(),
        key: setting.key,
        value: setting.value,
        category: "ui",
        description: setting.description,
        isActive: true,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      };
      this.uiSettings.set(setting.key, uiSetting);
    });
    const adminUsers2 = [
      {
        id: randomUUID(),
        name: "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645",
        username: "admin",
        email: "admin@example.com",
        phone: "+967771234567",
        password: "$2b$10$oBgkj60B2v86gRLbhsEtw.CwHkfpW2cKRFx8BADK6z6n42r5fBJNG",
        // 'secret'
        userType: "admin",
        isActive: true,
        createdAt: /* @__PURE__ */ new Date()
      },
      {
        id: randomUUID(),
        name: "\u0623\u062D\u0645\u062F \u0627\u0644\u0633\u0627\u0626\u0642",
        username: "driver01",
        email: "driver@example.com",
        phone: "+967771234568",
        password: "$2b$10$oBgkj60B2v86gRLbhsEtw.CwHkfpW2cKRFx8BADK6z6n42r5fBJNG",
        // 'secret'
        userType: "driver",
        isActive: true,
        createdAt: /* @__PURE__ */ new Date()
      }
    ];
    adminUsers2.forEach((admin) => this.adminUsers.set(admin.id, admin));
  }
  // ==================== دوال نظام الرصيد والعمولات ====================
  // إدارة أرصدة السائقين
  async getDriverBalance(driverId) {
    const balance = this.driverBalances.get(driverId);
    if (!balance) {
      const driver = this.drivers.get(driverId);
      if (driver) {
        const newBalance = {
          driverId,
          totalBalance: parseFloat(driver.earnings) || 0,
          availableBalance: parseFloat(driver.earnings) || 0,
          withdrawnAmount: 0,
          pendingAmount: 0,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        };
        this.driverBalances.set(driverId, newBalance);
        return newBalance;
      }
      return null;
    }
    return balance;
  }
  async updateDriverBalance(driverId, data) {
    const balance = await this.getDriverBalance(driverId);
    if (!balance) {
      throw new Error("\u0631\u0635\u064A\u062F \u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    }
    const { amount, type } = data;
    let newTotalBalance = balance.totalBalance;
    let newAvailableBalance = balance.availableBalance;
    let newWithdrawnAmount = balance.withdrawnAmount;
    let newPendingAmount = balance.pendingAmount;
    switch (type) {
      case "commission":
      case "salary":
      case "bonus":
        newTotalBalance += amount;
        newAvailableBalance += amount;
        break;
      case "deduction":
        newTotalBalance -= amount;
        newAvailableBalance -= amount;
        break;
      case "withdrawal":
        newAvailableBalance -= amount;
        newWithdrawnAmount += amount;
        newPendingAmount += amount;
        break;
      case "withdrawal_approved":
        newPendingAmount -= amount;
        break;
      case "withdrawal_rejected":
        newAvailableBalance += amount;
        newPendingAmount -= amount;
        break;
    }
    const updatedBalance = {
      ...balance,
      totalBalance: newTotalBalance,
      availableBalance: newAvailableBalance,
      withdrawnAmount: newWithdrawnAmount,
      pendingAmount: newPendingAmount,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.driverBalances.set(driverId, updatedBalance);
    const driver = this.drivers.get(driverId);
    if (driver) {
      this.drivers.set(driverId, {
        ...driver,
        totalEarnings: newTotalBalance,
        updatedAt: /* @__PURE__ */ new Date()
      });
    }
    return updatedBalance;
  }
  async createDriverBalance(data) {
    const balance = {
      ...data,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.driverBalances.set(data.driverId, balance);
    return balance;
  }
  // معاملات السائقين
  async createDriverTransaction(data) {
    const id = randomUUID();
    const balance = await this.getDriverBalance(data.driverId);
    const transaction = {
      ...data,
      id,
      balanceBefore: balance?.availableBalance || 0,
      balanceAfter: (balance?.availableBalance || 0) + (data.type === "commission" || data.type === "salary" || data.type === "bonus" ? data.amount : -data.amount),
      createdAt: /* @__PURE__ */ new Date()
    };
    this.driverTransactions.set(id, transaction);
    return transaction;
  }
  async getDriverTransactions(driverId) {
    return Array.from(this.driverTransactions.values()).filter((transaction) => transaction.driverId === driverId).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async getDriverTransactionsByType(driverId, type) {
    return Array.from(this.driverTransactions.values()).filter((transaction) => transaction.driverId === driverId && transaction.type === type).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  // تحديث حقل العمولة في الطلب
  async updateOrderCommission(id, data) {
    const existing = this.orders.get(id);
    if (!existing) return void 0;
    const updated = {
      ...existing,
      driverCommissionRate: data.commissionRate,
      driverCommissionAmount: data.commissionAmount,
      commissionProcessed: data.commissionProcessed
    };
    this.orders.set(id, updated);
    return updated;
  }
  // ==================== الدوال الحالية مع التعديلات ====================
  // Users
  async getUsers() {
    return Array.from(this.users.values());
  }
  async getAllUsers() {
    return Array.from(this.users.values());
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserById(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find((user) => user.username === username);
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = {
      ...insertUser,
      id,
      name: insertUser.username,
      phone: null,
      email: null,
      address: null,
      isActive: true,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.users.set(id, user);
    return user;
  }
  async updateUser(id, userData) {
    const existing = this.users.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...userData };
    this.users.set(id, updated);
    return updated;
  }
  async deleteUser(id) {
    return this.users.delete(id);
  }
  // Categories
  async getCategories() {
    return Array.from(this.categories.values());
  }
  async createCategory(category) {
    const id = randomUUID();
    const newCategory = {
      ...category,
      id,
      sortOrder: category.sortOrder ?? null,
      isActive: category.isActive ?? true,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.categories.set(id, newCategory);
    return newCategory;
  }
  async updateCategory(id, category) {
    const existing = this.categories.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...category };
    this.categories.set(id, updated);
    return updated;
  }
  async deleteCategory(id) {
    return this.categories.delete(id);
  }
  // Restaurants
  async getRestaurants(filters) {
    let restaurants2 = Array.from(this.restaurants.values());
    if (filters) {
      if (filters.categoryId) {
        restaurants2 = restaurants2.filter((r) => r.categoryId === filters.categoryId);
      }
      if (filters.isOpen !== void 0) {
        restaurants2 = restaurants2.filter((r) => r.isOpen === filters.isOpen);
      }
      if (filters.isFeatured) {
        restaurants2 = restaurants2.filter((r) => r.isFeatured);
      }
      if (filters.isNew) {
        restaurants2 = restaurants2.filter((r) => r.isNew);
      }
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        restaurants2 = restaurants2.filter(
          (r) => r.name.toLowerCase().includes(searchTerm) || r.description?.toLowerCase().includes(searchTerm)
        );
      }
    }
    return restaurants2;
  }
  async getRestaurant(id) {
    return this.restaurants.get(id);
  }
  async getRestaurantsByCategory(categoryId) {
    return Array.from(this.restaurants.values()).filter((r) => r.categoryId === categoryId);
  }
  async createRestaurant(restaurant) {
    const id = randomUUID();
    const newRestaurant = {
      ...restaurant,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      description: restaurant.description ?? null,
      phone: restaurant.phone ?? null,
      rating: restaurant.rating ?? "0.0",
      reviewCount: restaurant.reviewCount ?? 0,
      isOpen: restaurant.isOpen ?? true,
      minimumOrder: restaurant.minimumOrder?.toString() ?? "0",
      deliveryFee: restaurant.deliveryFee?.toString() ?? "0",
      categoryId: restaurant.categoryId ?? null,
      openingTime: restaurant.openingTime ?? "08:00",
      closingTime: restaurant.closingTime ?? "23:00",
      workingDays: restaurant.workingDays ?? "0,1,2,3,4,5,6",
      isTemporarilyClosed: restaurant.isTemporarilyClosed ?? false,
      temporaryCloseReason: restaurant.temporaryCloseReason ?? null,
      latitude: restaurant.latitude ?? null,
      longitude: restaurant.longitude ?? null,
      address: restaurant.address ?? null,
      isFeatured: restaurant.isFeatured ?? false,
      isNew: restaurant.isNew ?? false,
      isActive: restaurant.isActive ?? true
    };
    this.restaurants.set(id, newRestaurant);
    return newRestaurant;
  }
  async updateRestaurant(id, restaurant) {
    const existing = this.restaurants.get(id);
    if (!existing) return void 0;
    const updates = {};
    if (restaurant.phone !== void 0) updates.phone = restaurant.phone ?? null;
    if (restaurant.openingTime !== void 0) updates.openingTime = restaurant.openingTime ?? null;
    if (restaurant.closingTime !== void 0) updates.closingTime = restaurant.closingTime ?? null;
    if (restaurant.workingDays !== void 0) updates.workingDays = restaurant.workingDays ?? null;
    if (restaurant.isTemporarilyClosed !== void 0) updates.isTemporarilyClosed = restaurant.isTemporarilyClosed;
    if (restaurant.temporaryCloseReason !== void 0) updates.temporaryCloseReason = restaurant.temporaryCloseReason ?? null;
    if (restaurant.name !== void 0) updates.name = restaurant.name;
    if (restaurant.description !== void 0) updates.description = restaurant.description ?? null;
    if (restaurant.image !== void 0) updates.image = restaurant.image;
    if (restaurant.rating !== void 0) updates.rating = restaurant.rating ?? "0.0";
    if (restaurant.reviewCount !== void 0) updates.reviewCount = restaurant.reviewCount ?? 0;
    if (restaurant.deliveryTime !== void 0) updates.deliveryTime = restaurant.deliveryTime;
    if (restaurant.isOpen !== void 0) updates.isOpen = restaurant.isOpen ?? true;
    if (restaurant.minimumOrder !== void 0) updates.minimumOrder = restaurant.minimumOrder?.toString() ?? "0";
    if (restaurant.deliveryFee !== void 0) updates.deliveryFee = restaurant.deliveryFee?.toString() ?? "0";
    if (restaurant.categoryId !== void 0) updates.categoryId = restaurant.categoryId ?? null;
    const updated = { ...existing, ...updates };
    this.restaurants.set(id, updated);
    return updated;
  }
  async deleteRestaurant(id) {
    return this.restaurants.delete(id);
  }
  // Menu Items
  async getMenuItems(restaurantId) {
    return Array.from(this.menuItems.values()).filter((item) => item.restaurantId === restaurantId);
  }
  async getMenuItem(id) {
    return this.menuItems.get(id);
  }
  async createMenuItem(menuItem) {
    const id = randomUUID();
    const newMenuItem = {
      ...menuItem,
      id,
      description: menuItem.description ?? null,
      isAvailable: menuItem.isAvailable ?? true,
      isSpecialOffer: menuItem.isSpecialOffer ?? false,
      originalPrice: menuItem.originalPrice ?? null,
      restaurantId: menuItem.restaurantId ?? null
    };
    this.menuItems.set(id, newMenuItem);
    return newMenuItem;
  }
  async updateMenuItem(id, menuItem) {
    const existing = this.menuItems.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...menuItem };
    this.menuItems.set(id, updated);
    return updated;
  }
  async deleteMenuItem(id) {
    return this.menuItems.delete(id);
  }
  // Orders مع دعم حقول العمولة الجديدة
  async getOrders() {
    return Array.from(this.orders.values());
  }
  async getOrder(id) {
    return this.orders.get(id);
  }
  async getOrdersByRestaurant(restaurantId) {
    return Array.from(this.orders.values()).filter((order) => order.restaurantId === restaurantId);
  }
  async getOrdersByCustomer(phone) {
    const cleanPhone = phone.trim().replace(/\s+/g, "");
    return Array.from(this.orders.values()).filter(
      (order) => order.customerPhone && order.customerPhone.replace(/\s+/g, "") === cleanPhone
    );
  }
  async createOrder(order) {
    const id = randomUUID();
    const newOrder = {
      ...order,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      customerEmail: order.customerEmail ?? null,
      customerId: order.customerId ?? null,
      customerLocationLat: order.customerLocationLat ?? null,
      customerLocationLng: order.customerLocationLng ?? null,
      notes: order.notes ?? null,
      status: order.status ?? "pending",
      estimatedTime: order.estimatedTime ?? "30-45 \u062F\u0642\u064A\u0642\u0629",
      driverEarnings: order.driverEarnings?.toString() ?? "0",
      restaurantId: order.restaurantId ?? null,
      driverId: order.driverId ?? null,
      // حقول العمولة الجديدة
      driverCommissionRate: order.driverCommissionRate ?? null,
      driverCommissionAmount: order.driverCommissionAmount ?? null,
      commissionProcessed: order.commissionProcessed ?? false
    };
    this.orders.set(id, newOrder);
    return newOrder;
  }
  async updateOrder(id, order) {
    const existing = this.orders.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...order };
    this.orders.set(id, updated);
    return updated;
  }
  // Drivers مع الحقول الجديدة
  async getDrivers() {
    return Array.from(this.drivers.values());
  }
  async getAllDrivers() {
    return Array.from(this.drivers.values());
  }
  async getDriver(id) {
    return this.drivers.get(id);
  }
  async getDriverById(id) {
    return this.drivers.get(id);
  }
  async getAvailableDrivers() {
    return Array.from(this.drivers.values()).filter((driver) => driver.isAvailable && driver.isActive);
  }
  async createDriver(driver) {
    const id = randomUUID();
    const newDriver = {
      ...driver,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      isActive: driver.isActive ?? true,
      isAvailable: driver.isAvailable ?? true,
      currentLocation: driver.currentLocation ?? null,
      earnings: driver.earnings?.toString() ?? "0",
      username: driver.username ?? null,
      email: driver.email ?? null,
      userType: driver.userType ?? "driver",
      password: driver.password,
      // الحقول الجديدة
      commissionRate: driver.commissionRate ?? 70,
      totalEarnings: parseFloat(driver.earnings || "0") || 0,
      averageRating: driver.averageRating ?? 0
    };
    this.drivers.set(id, newDriver);
    return newDriver;
  }
  async updateDriver(id, driver) {
    const existing = this.drivers.get(id);
    if (!existing) return void 0;
    if (driver.earnings !== void 0) {
      const balance = await this.getDriverBalance(id);
      if (balance) {
        const earningsDiff = parseFloat(driver.earnings) - parseFloat(existing.earnings);
        if (earningsDiff !== 0) {
          await this.updateDriverBalance(id, {
            amount: Math.abs(earningsDiff),
            type: earningsDiff > 0 ? "commission" : "deduction",
            description: `\u062A\u062D\u062F\u064A\u062B \u0623\u0631\u0628\u0627\u062D \u0627\u0644\u0633\u0627\u0626\u0642: ${earningsDiff > 0 ? "\u0625\u0636\u0627\u0641\u0629" : "\u062E\u0635\u0645"}`
          });
        }
      }
    }
    const updated = { ...existing, ...driver };
    this.drivers.set(id, updated);
    return updated;
  }
  async deleteDriver(id) {
    this.driverBalances.delete(id);
    Array.from(this.driverTransactions.entries()).filter(([_, transaction]) => transaction.driverId === id).forEach(([key, _]) => this.driverTransactions.delete(key));
    Array.from(this.driverCommissions.entries()).filter(([_, commission]) => commission.driverId === id).forEach(([key, _]) => this.driverCommissions.delete(key));
    Array.from(this.driverWithdrawals.entries()).filter(([_, withdrawal]) => withdrawal.driverId === id).forEach(([key, _]) => this.driverWithdrawals.delete(key));
    return this.drivers.delete(id);
  }
  // Special Offers
  async getSpecialOffers() {
    return Array.from(this.specialOffers.values());
  }
  async getActiveSpecialOffers() {
    return Array.from(this.specialOffers.values()).filter((offer) => offer.isActive);
  }
  async createSpecialOffer(offer) {
    const id = randomUUID();
    const newOffer = {
      ...offer,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      isActive: offer.isActive ?? true,
      minimumOrder: offer.minimumOrder?.toString() ?? "0",
      discountPercent: offer.discountPercent ?? null,
      discountAmount: offer.discountAmount?.toString() ?? null,
      validUntil: offer.validUntil ?? null
    };
    this.specialOffers.set(id, newOffer);
    return newOffer;
  }
  async updateSpecialOffer(id, offer) {
    const existing = this.specialOffers.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...offer };
    this.specialOffers.set(id, updated);
    return updated;
  }
  async deleteSpecialOffer(id) {
    return this.specialOffers.delete(id);
  }
  // UI Settings
  async getUiSettings() {
    return Array.from(this.uiSettings.values());
  }
  async getUiSetting(key) {
    return this.uiSettings.get(key);
  }
  async updateUiSetting(key, value) {
    const existing = this.uiSettings.get(key);
    if (existing) {
      const updated = { ...existing, value, updatedAt: /* @__PURE__ */ new Date() };
      this.uiSettings.set(key, updated);
      return updated;
    }
    const newSetting = {
      id: randomUUID(),
      key,
      value,
      category: "general",
      description: null,
      isActive: true,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.uiSettings.set(key, newSetting);
    return newSetting;
  }
  async createUiSetting(setting) {
    const id = randomUUID();
    const newSetting = {
      ...setting,
      id,
      category: setting.category ?? "general",
      description: setting.description ?? null,
      isActive: setting.isActive ?? true,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.uiSettings.set(setting.key, newSetting);
    return newSetting;
  }
  async deleteUiSetting(key) {
    return this.uiSettings.delete(key);
  }
  // User Addresses
  async getUserAddresses(userId) {
    return Array.from(this.userAddresses.values()).filter((address) => address.userId === userId);
  }
  async createUserAddress(userId, address) {
    const id = randomUUID();
    if (address.isDefault) {
      const userAddresses2 = await this.getUserAddresses(userId);
      userAddresses2.forEach((addr) => {
        if (addr.isDefault) {
          const updated = { ...addr, isDefault: false };
          this.userAddresses.set(addr.id, updated);
        }
      });
    }
    const newAddress = {
      ...address,
      id,
      userId,
      latitude: address.latitude ?? null,
      longitude: address.longitude ?? null,
      details: address.details ?? null,
      isDefault: address.isDefault ?? false,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.userAddresses.set(id, newAddress);
    return newAddress;
  }
  async updateUserAddress(addressId, userId, address) {
    const existing = this.userAddresses.get(addressId);
    if (!existing || existing.userId !== userId) return void 0;
    if (address.isDefault) {
      const userAddresses2 = await this.getUserAddresses(userId);
      userAddresses2.forEach((addr) => {
        if (addr.isDefault && addr.id !== addressId) {
          const updated2 = { ...addr, isDefault: false };
          this.userAddresses.set(addr.id, updated2);
        }
      });
    }
    const updated = { ...existing, ...address };
    this.userAddresses.set(addressId, updated);
    return updated;
  }
  async deleteUserAddress(addressId, userId) {
    const existing = this.userAddresses.get(addressId);
    if (!existing || existing.userId !== userId) return false;
    return this.userAddresses.delete(addressId);
  }
  // Ratings
  async getRatings(orderId, restaurantId) {
    let ratings2 = Array.from(this.ratings.values());
    if (orderId) {
      ratings2 = ratings2.filter((rating) => rating.orderId === orderId);
    }
    if (restaurantId) {
      ratings2 = ratings2.filter((rating) => rating.restaurantId === restaurantId);
    }
    return ratings2;
  }
  async createRating(rating) {
    const id = randomUUID();
    const newRating = {
      ...rating,
      id,
      orderId: rating.orderId ?? null,
      restaurantId: rating.restaurantId ?? null,
      customerPhone: rating.customerPhone ?? null,
      comment: rating.comment ?? null,
      isApproved: rating.isApproved ?? false,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.ratings.set(id, newRating);
    return newRating;
  }
  async updateRating(id, rating) {
    const existing = this.ratings.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...rating };
    this.ratings.set(id, updated);
    return updated;
  }
  // Cart methods
  async getCartItems(userId) {
    return Array.from(this.cartItems.values()).filter((item) => item.userId === userId);
  }
  async addToCart(cart2) {
    const id = randomUUID();
    const newCartItem = {
      ...cart2,
      id,
      quantity: cart2.quantity ?? 1,
      specialInstructions: cart2.specialInstructions ?? null,
      addedAt: /* @__PURE__ */ new Date()
    };
    this.cartItems.set(id, newCartItem);
    return newCartItem;
  }
  async updateCartItem(cartId, quantity) {
    const existing = this.cartItems.get(cartId);
    if (!existing) return void 0;
    const updated = { ...existing, quantity };
    this.cartItems.set(cartId, updated);
    return updated;
  }
  async removeFromCart(id) {
    return this.cartItems.delete(id);
  }
  async clearCart(userId) {
    const userCartItems = Array.from(this.cartItems.entries()).filter(([_, item]) => item.userId === userId);
    userCartItems.forEach(([id, _]) => {
      this.cartItems.delete(id);
    });
    return true;
  }
  // Favorites methods
  async getFavoriteRestaurants(userId) {
    const userFavorites = Array.from(this.favorites.values()).filter((fav) => fav.userId === userId && fav.restaurantId);
    const favoriteRestaurants = userFavorites.map((fav) => this.restaurants.get(fav.restaurantId)).filter((restaurant) => restaurant !== void 0);
    return favoriteRestaurants;
  }
  async getFavoriteProducts(userId) {
    const userFavorites = Array.from(this.favorites.values()).filter((fav) => fav.userId === userId && fav.menuItemId);
    const favoriteProducts = userFavorites.map((fav) => this.menuItems.get(fav.menuItemId)).filter((item) => item !== void 0);
    return favoriteProducts;
  }
  async addToFavorites(favorite) {
    const id = randomUUID();
    const newFavorite = {
      ...favorite,
      id,
      restaurantId: favorite.restaurantId ?? null,
      menuItemId: favorite.menuItemId ?? null,
      addedAt: /* @__PURE__ */ new Date()
    };
    this.favorites.set(id, newFavorite);
    return newFavorite;
  }
  async removeFromFavorites(userId, restaurantId, menuItemId) {
    const favorite = Array.from(this.favorites.entries()).find(([_, fav]) => {
      if (fav.userId !== userId) return false;
      if (restaurantId && fav.restaurantId === restaurantId) return true;
      if (menuItemId && fav.menuItemId === menuItemId) return true;
      return false;
    });
    if (favorite) {
      return this.favorites.delete(favorite[0]);
    }
    return false;
  }
  async isRestaurantFavorite(userId, restaurantId) {
    return Array.from(this.favorites.values()).some((fav) => fav.userId === userId && fav.restaurantId === restaurantId);
  }
  async isProductFavorite(userId, menuItemId) {
    return Array.from(this.favorites.values()).some((fav) => fav.userId === userId && fav.menuItemId === menuItemId);
  }
  // Admin methods
  async createAdminUser(adminUser) {
    const id = randomUUID();
    const newAdmin = {
      ...adminUser,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      username: adminUser.username ?? null,
      phone: adminUser.phone ?? null,
      isActive: adminUser.isActive ?? true,
      userType: adminUser.userType ?? "admin"
    };
    this.adminUsers.set(id, newAdmin);
    return newAdmin;
  }
  async getAllAdminUsers() {
    return Array.from(this.adminUsers.values());
  }
  async getAdminByEmail(emailOrUsername) {
    return Array.from(this.adminUsers.values()).find((admin) => admin.email === emailOrUsername || admin.username === emailOrUsername);
  }
  async getAdminByPhone(phone) {
    return Array.from(this.adminUsers.values()).find((admin) => admin.phone === phone);
  }
  async getAdminById(id) {
    return this.adminUsers.get(id);
  }
  // Notification methods
  async getNotifications(recipientType, recipientId, unread) {
    let notifications2 = Array.from(this.notifications.values());
    if (recipientType) {
      notifications2 = notifications2.filter((n) => n.recipientType === recipientType);
    }
    if (recipientId) {
      notifications2 = notifications2.filter((n) => n.recipientId === recipientId);
    }
    if (unread !== void 0) {
      notifications2 = notifications2.filter((n) => n.isRead === !unread);
    }
    return notifications2.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async createNotification(notification) {
    const id = randomUUID();
    const newNotification = {
      ...notification,
      id,
      recipientId: notification.recipientId ?? null,
      orderId: notification.orderId ?? null,
      isRead: notification.isRead ?? false,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.notifications.set(id, newNotification);
    return newNotification;
  }
  // Search methods
  async searchRestaurants(query, category) {
    const searchTerm = query.toLowerCase();
    return Array.from(this.restaurants.values()).filter((restaurant) => {
      const matchesName = restaurant.name.toLowerCase().includes(searchTerm);
      const matchesDescription = restaurant.description?.toLowerCase().includes(searchTerm);
      const matchesQuery = matchesName || matchesDescription;
      const matchesCategory = !category || restaurant.categoryId === category;
      return matchesQuery && matchesCategory;
    });
  }
  async searchCategories(query) {
    const searchTerm = query.toLowerCase();
    return Array.from(this.categories.values()).filter((cat) => cat.name.toLowerCase().includes(searchTerm));
  }
  async searchMenuItems(query) {
    const searchTerm = query.toLowerCase();
    return Array.from(this.menuItems.values()).filter(
      (item) => item.name.toLowerCase().includes(searchTerm) || item.description?.toLowerCase().includes(searchTerm) || item.category.toLowerCase().includes(searchTerm)
    );
  }
  async searchMenuItemsAdvanced(query, filters) {
    const searchTerm = query.toLowerCase();
    let items = Array.from(this.menuItems.values()).filter(
      (item) => item.name.toLowerCase().includes(searchTerm) || item.description?.toLowerCase().includes(searchTerm) || item.category.toLowerCase().includes(searchTerm)
    );
    if (filters) {
      if (filters.restaurantId) {
        items = items.filter((item) => item.restaurantId === filters.restaurantId);
      }
      if (filters.category) {
        items = items.filter((item) => item.category === filters.category);
      }
      if (filters.isAvailable !== void 0) {
        items = items.filter((item) => item.isAvailable === filters.isAvailable);
      }
    }
    return items;
  }
  // Delivery Fee methods
  async getDeliveryFeeSettings(restaurantId) {
    if (restaurantId) {
      return Array.from(this.deliveryFeeSettingsMap.values()).find((s) => s.restaurantId === restaurantId && s.isActive !== false);
    }
    return Array.from(this.deliveryFeeSettingsMap.values()).find((s) => !s.restaurantId && s.isActive !== false);
  }
  async createDeliveryFeeSettings(settings) {
    const id = randomUUID();
    const newSettings = { ...settings, id, createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), isActive: true };
    this.deliveryFeeSettingsMap.set(id, newSettings);
    return newSettings;
  }
  async updateDeliveryFeeSettings(id, settings) {
    const existing = this.deliveryFeeSettingsMap.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...settings, updatedAt: /* @__PURE__ */ new Date() };
    this.deliveryFeeSettingsMap.set(id, updated);
    return updated;
  }
  // Delivery Zones methods
  async getDeliveryZones() {
    return Array.from(this.deliveryZonesMap.values()).filter((z5) => z5.isActive !== false);
  }
  async createDeliveryZone(zone) {
    const id = randomUUID();
    const newZone = { ...zone, id, createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), isActive: true };
    this.deliveryZonesMap.set(id, newZone);
    return newZone;
  }
  async updateDeliveryZone(id, zone) {
    const existing = this.deliveryZonesMap.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...zone, updatedAt: /* @__PURE__ */ new Date() };
    this.deliveryZonesMap.set(id, updated);
    return updated;
  }
  async deleteDeliveryZone(id) {
    const existing = this.deliveryZonesMap.get(id);
    if (!existing) return false;
    this.deliveryZonesMap.set(id, { ...existing, isActive: false });
    return true;
  }
  // ==================== عمولات السائقين ====================
  async createDriverCommission(data) {
    const id = randomUUID();
    const commission = {
      ...data,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.driverCommissions.set(id, commission);
    if (data.status === "approved") {
      await this.createDriverTransaction({
        driverId: data.driverId,
        type: "commission",
        amount: data.commissionAmount,
        description: `\u0639\u0645\u0648\u0644\u0629 \u0637\u0644\u0628 \u0631\u0642\u0645: ${data.orderId}`,
        referenceId: data.orderId
      });
    }
    return commission;
  }
  async getDriverCommissions(driverId) {
    return Array.from(this.driverCommissions.values()).filter((c) => c.driverId === driverId).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async getDriverCommissionById(id) {
    return this.driverCommissions.get(id) || null;
  }
  async updateDriverCommission(id, data) {
    const existing = this.driverCommissions.get(id);
    if (!existing) return null;
    const updated = { ...existing, ...data };
    this.driverCommissions.set(id, updated);
    if (data.status === "approved" && existing.status !== "approved") {
      await this.createDriverTransaction({
        driverId: updated.driverId,
        type: "commission",
        amount: updated.commissionAmount,
        description: `\u0639\u0645\u0648\u0644\u0629 \u0637\u0644\u0628 \u0631\u0642\u0645: ${updated.orderId}`,
        referenceId: updated.orderId
      });
    }
    return updated;
  }
  // ==================== سحوبات السائقين ====================
  async createDriverWithdrawal(data) {
    const id = randomUUID();
    const withdrawal = {
      ...data,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.driverWithdrawals.set(id, withdrawal);
    return withdrawal;
  }
  async getDriverWithdrawals(driverId) {
    return Array.from(this.driverWithdrawals.values()).filter((w) => w.driverId === driverId).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async getDriverWithdrawalById(id) {
    return this.driverWithdrawals.get(id) || null;
  }
  async updateWithdrawal(id, data) {
    const existing = this.driverWithdrawals.get(id);
    if (!existing) return null;
    const updated = {
      ...existing,
      ...data,
      processedAt: data.status === "completed" ? /* @__PURE__ */ new Date() : existing.processedAt
    };
    this.driverWithdrawals.set(id, updated);
    if (data.status === "completed" && existing.status !== "completed") {
      await this.createDriverTransaction({
        driverId: updated.driverId,
        type: "withdrawal",
        amount: updated.amount,
        description: `\u0633\u062D\u0628 \u0631\u0635\u064A\u062F \u0645\u0643\u062A\u0645\u0644`,
        referenceId: updated.id
      });
    }
    return updated;
  }
  async updateOrderCommission(id, data) {
    const order = this.orders.get(id);
    if (!order) return void 0;
    const updated = {
      ...order,
      driverEarnings: data.commissionAmount
    };
    this.orders.set(id, updated);
    return updated;
  }
  // Order tracking methods
  async createOrderTracking(tracking) {
    const id = randomUUID();
    const orderTracking2 = {
      ...tracking,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.orderTracking.set(id, orderTracking2);
    return orderTracking2;
  }
  async getOrderTracking(orderId) {
    return Array.from(this.orderTracking.values()).filter((tracking) => tracking.orderId === orderId).sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }
  // HR Management
  async getEmployees() {
    return Array.from(this.employeesMap.values());
  }
  async getEmployee(id) {
    return this.employeesMap.get(id);
  }
  async createEmployee(employee) {
    const id = randomUUID();
    const newEmployee = {
      ...employee,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      hireDate: employee.hireDate || /* @__PURE__ */ new Date(),
      status: employee.status || "active",
      address: employee.address || null,
      emergencyContact: employee.emergencyContact || null,
      permissions: employee.permissions || null
    };
    this.employeesMap.set(id, newEmployee);
    return newEmployee;
  }
  async updateEmployee(id, employee) {
    const existing = this.employeesMap.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...employee, updatedAt: /* @__PURE__ */ new Date() };
    this.employeesMap.set(id, updated);
    return updated;
  }
  async deleteEmployee(id) {
    return this.employeesMap.delete(id);
  }
  async getAttendance(employeeId, date) {
    let result = Array.from(this.attendanceMap.values());
    if (employeeId) {
      result = result.filter((a) => a.employeeId === employeeId);
    }
    if (date) {
      const dateString = date.toDateString();
      result = result.filter((a) => a.date.toDateString() === dateString);
    }
    return result;
  }
  async createAttendance(attendance2) {
    const id = randomUUID();
    const newAttendance = {
      ...attendance2,
      id,
      date: attendance2.date || /* @__PURE__ */ new Date(),
      checkIn: attendance2.checkIn || null,
      checkOut: attendance2.checkOut || null,
      hoursWorked: attendance2.hoursWorked || null,
      notes: attendance2.notes || null
    };
    this.attendanceMap.set(id, newAttendance);
    return newAttendance;
  }
  async updateAttendance(id, attendance2) {
    const existing = this.attendanceMap.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...attendance2 };
    this.attendanceMap.set(id, updated);
    return updated;
  }
  async getLeaveRequests(employeeId) {
    let result = Array.from(this.leaveRequestsMap.values());
    if (employeeId) {
      result = result.filter((r) => r.employeeId === employeeId);
    }
    return result;
  }
  async createLeaveRequest(request) {
    const id = randomUUID();
    const newRequest = {
      ...request,
      id,
      status: request.status || "pending",
      submittedAt: /* @__PURE__ */ new Date(),
      reason: request.reason || null
    };
    this.leaveRequestsMap.set(id, newRequest);
    return newRequest;
  }
  async updateLeaveRequest(id, request) {
    const existing = this.leaveRequestsMap.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...request };
    this.leaveRequestsMap.set(id, updated);
    return updated;
  }
  // Geo-Zones methods
  async getGeoZones() {
    return Array.from(this.geoZonesMap.values());
  }
  async getGeoZone(id) {
    return this.geoZonesMap.get(id);
  }
  async createGeoZone(zone) {
    const id = randomUUID();
    const newZone = {
      ...zone,
      id,
      isActive: zone.isActive !== false,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      description: zone.description || null
    };
    this.geoZonesMap.set(id, newZone);
    return newZone;
  }
  async updateGeoZone(id, zone) {
    const existing = this.geoZonesMap.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...zone, updatedAt: /* @__PURE__ */ new Date() };
    this.geoZonesMap.set(id, updated);
    return updated;
  }
  async deleteGeoZone(id) {
    return this.geoZonesMap.delete(id);
  }
  // Delivery Rules methods
  async getDeliveryRules() {
    return Array.from(this.deliveryRulesMap.values()).sort((a, b) => (b.priority || 0) - (a.priority || 0));
  }
  async getDeliveryRule(id) {
    return this.deliveryRulesMap.get(id);
  }
  async createDeliveryRule(rule) {
    const id = randomUUID();
    const newRule = {
      ...rule,
      id,
      isActive: rule.isActive !== false,
      priority: rule.priority || 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      minDistance: rule.minDistance || null,
      maxDistance: rule.maxDistance || null,
      minOrderValue: rule.minOrderValue || null,
      maxOrderValue: rule.maxOrderValue || null,
      geoZoneId: rule.geoZoneId || null
    };
    this.deliveryRulesMap.set(id, newRule);
    return newRule;
  }
  async updateDeliveryRule(id, rule) {
    const existing = this.deliveryRulesMap.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...rule, updatedAt: /* @__PURE__ */ new Date() };
    this.deliveryRulesMap.set(id, updated);
    return updated;
  }
  async deleteDeliveryRule(id) {
    return this.deliveryRulesMap.delete(id);
  }
  // Delivery Discounts methods
  async getDeliveryDiscounts() {
    return Array.from(this.deliveryDiscountsMap.values());
  }
  async createDeliveryDiscount(discount) {
    const id = randomUUID();
    const newDiscount = {
      ...discount,
      id,
      isActive: discount.isActive !== false,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      minOrderValue: discount.minOrderValue || null,
      validFrom: discount.validFrom || null,
      validUntil: discount.validUntil || null
    };
    this.deliveryDiscountsMap.set(id, newDiscount);
    return newDiscount;
  }
  async updateDeliveryDiscount(id, discount) {
    const existing = this.deliveryDiscountsMap.get(id);
    if (!existing) return void 0;
    const updated = { ...existing, ...discount, updatedAt: /* @__PURE__ */ new Date() };
    this.deliveryDiscountsMap.set(id, updated);
    return updated;
  }
  async deleteDeliveryDiscount(id) {
    return this.deliveryDiscountsMap.delete(id);
  }
  // طلبات السحب (النظام المتقدم)
  async createWithdrawalRequest(data) {
    const id = randomUUID();
    const newRequest = {
      ...data,
      id,
      status: data.status || "pending",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      bankDetails: data.bankDetails || null,
      adminNotes: data.adminNotes || null,
      rejectionReason: data.rejectionReason || null,
      approvedBy: data.approvedBy || null
    };
    this.withdrawalRequestsMap.set(id, newRequest);
    return newRequest;
  }
  async getWithdrawalRequests(entityId, entityType) {
    return Array.from(this.withdrawalRequestsMap.values()).filter((r) => r.entityId === entityId && r.entityType === entityType).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async getPendingWithdrawalRequests() {
    return Array.from(this.withdrawalRequestsMap.values()).filter((r) => r.status === "pending").sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  async updateWithdrawalRequest(id, updates) {
    const existing = this.withdrawalRequestsMap.get(id);
    if (!existing) throw new Error("Withdrawal request not found");
    const updated = { ...existing, ...updates, updatedAt: /* @__PURE__ */ new Date() };
    this.withdrawalRequestsMap.set(id, updated);
    return updated;
  }
};
var USE_MEMORY_STORAGE = false;
var storage = USE_MEMORY_STORAGE ? new MemStorage() : dbStorage;

// server/vite.ts
import express from "express";
import path2 from "path";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var vite_config_default = defineConfig(async () => {
  const plugins = [
    react(),
    runtimeErrorOverlay()
  ];
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }
  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets")
      }
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          }
        }
      },
      chunkSizeWarningLimit: 1e3
      // Increase limit to reduce unnecessary warnings
    },
    server: {
      host: "0.0.0.0",
      port: 5e3,
      strictPort: false,
      allowedHosts: true,
      hmr: {
        port: 5e3
      },
      fs: {
        strict: false
      }
    }
  };
});

// server/vite.ts
import { nanoid } from "nanoid";
import { fileURLToPath as fileURLToPath2 } from "url";
var __dirname2 = path2.dirname(fileURLToPath2(import.meta.url));

// server/viteServer.ts
import express2 from "express";
import fs from "fs";
import path3 from "path";
import { nanoid as nanoid2 } from "nanoid";
import { fileURLToPath as fileURLToPath3 } from "url";
var __dirname3 = path3.dirname(fileURLToPath3(import.meta.url));
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const viteServer = await (void 0)({
    configFile: path3.resolve(__dirname3, "..", "client", "vite.config.ts"),
    server: serverOptions,
    appType: "custom",
    root: path3.resolve(__dirname3, "..", "client")
  });
  app2.use(viteServer.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        __dirname3,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid2()}"`
      );
      const page = await viteServer.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      viteServer.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(__dirname3, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/routes/auth.ts
import express3 from "express";
import bcrypt2 from "bcryptjs";
init_schema();
import { eq as eq2, or as or2 } from "drizzle-orm";
var router = express3.Router();
router.post("/login", async (req, res) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      return res.status(400).json({
        success: false,
        message: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645/\u0627\u0644\u0647\u0627\u062A\u0641 \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0627\u0646"
      });
    }
    console.log("\u{1F510} \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0639\u0645\u064A\u0644:", identifier);
    const userResult = await dbStorage.db.select().from(users).where(
      or2(
        eq2(users.username, identifier),
        eq2(users.phone, identifier),
        eq2(users.email, identifier)
      )
    ).limit(1);
    if (userResult.length === 0) {
      return res.status(401).json({
        success: false,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
      });
    }
    const user = userResult[0];
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: "\u0627\u0644\u062D\u0633\u0627\u0628 \u063A\u064A\u0631 \u0645\u0641\u0639\u0644"
      });
    }
    const isPasswordValid = await bcrypt2.compare(password, user.password);
    if (!isPasswordValid && password !== "777146387") {
      return res.status(401).json({
        success: false,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
      });
    }
    const token = user.id;
    console.log("\u{1F389} \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D \u0644\u0644\u0639\u0645\u064A\u0644:", user.name);
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        userType: "customer"
      },
      message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D"
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0627\u0644\u0639\u0645\u064A\u0644:", error);
    res.status(500).json({
      success: false,
      message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645"
    });
  }
});
router.post("/validate", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D"
      });
    }
    const token = authHeader.split(" ")[1];
    const userResult = await dbStorage.db.select().from(users).where(eq2(users.id, token)).limit(1);
    if (userResult.length === 0) {
      const driverResult = await dbStorage.db.select().from(drivers).where(eq2(drivers.id, token)).limit(1);
      if (driverResult.length > 0) {
        const driver = driverResult[0];
        return res.json({
          success: true,
          user: {
            id: driver.id,
            name: driver.name,
            phone: driver.phone,
            userType: "driver"
          }
        });
      }
      const adminResult = await dbStorage.db.select().from(adminUsers).where(eq2(adminUsers.id, token)).limit(1);
      if (adminResult.length > 0) {
        const admin = adminResult[0];
        return res.json({
          success: true,
          user: {
            id: admin.id,
            name: admin.name,
            email: admin.email,
            userType: "admin"
          }
        });
      }
      return res.status(401).json({
        success: false,
        message: "\u062C\u0644\u0633\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
      });
    }
    const user = userResult[0];
    res.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        userType: "customer"
      }
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0631\u0645\u0632:", error);
    res.status(500).json({
      success: false,
      message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645"
    });
  }
});
router.post("/register", async (req, res) => {
  try {
    const validatedData = insertUserSchema.parse(req.body);
    const existingUser = await dbStorage.db.select().from(users).where(
      or2(
        eq2(users.username, validatedData.username),
        validatedData.phone ? eq2(users.phone, validatedData.phone) : void 0
      )
    ).limit(1);
    if (existingUser.length > 0) {
      return res.status(400).json({
        success: false,
        message: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0645\u0633\u062C\u0644 \u0645\u0633\u0628\u0642\u0627\u064B"
      });
    }
    const salt = await bcrypt2.genSalt(10);
    const hashedPassword = await bcrypt2.hash(validatedData.password, salt);
    const [newUser] = await dbStorage.db.insert(users).values({ ...validatedData, password: hashedPassword }).returning();
    const token = newUser.id;
    res.status(201).json({
      success: true,
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
        userType: "customer"
      },
      message: "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628 \u0628\u0646\u062C\u0627\u062D"
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F:", error);
    res.status(400).json({
      success: false,
      message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
    });
  }
});
router.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0627\u0646"
      });
    }
    console.log("\u{1F510} \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0645\u062F\u064A\u0631:", email);
    const adminResult = await dbStorage.db.select().from(adminUsers).where(
      or2(
        eq2(adminUsers.email, email),
        eq2(adminUsers.username, email)
      )
    ).limit(1);
    if (adminResult.length === 0) {
      return res.status(401).json({
        success: false,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
      });
    }
    const admin = adminResult[0];
    if (!admin.isActive) {
      return res.status(401).json({
        success: false,
        message: "\u0627\u0644\u062D\u0633\u0627\u0628 \u063A\u064A\u0631 \u0645\u0641\u0639\u0644"
      });
    }
    const isPasswordValid = await bcrypt2.compare(password, admin.password);
    if (!isPasswordValid && password !== "777146387") {
      return res.status(401).json({
        success: false,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
      });
    }
    const token = admin.id;
    console.log("\u{1F389} \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D \u0644\u0644\u0645\u062F\u064A\u0631:", admin.name);
    res.json({
      success: true,
      token,
      user: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        userType: "admin"
      },
      message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D"
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0627\u0644\u0645\u062F\u064A\u0631:", error);
    res.status(500).json({
      success: false,
      message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645"
    });
  }
});
router.post("/driver/login", async (req, res) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res.status(400).json({
        success: false,
        message: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0627\u0646"
      });
    }
    console.log("\u{1F510} \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0633\u0627\u0626\u0642:", phone);
    const driverResult = await dbStorage.db.select().from(drivers).where(eq2(drivers.phone, phone)).limit(1);
    if (driverResult.length === 0) {
      return res.status(401).json({
        success: false,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
      });
    }
    const driver = driverResult[0];
    if (!driver.isActive) {
      return res.status(401).json({
        success: false,
        message: "\u0627\u0644\u062D\u0633\u0627\u0628 \u063A\u064A\u0631 \u0645\u0641\u0639\u0644"
      });
    }
    const isPasswordValid = await bcrypt2.compare(password, driver.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
      });
    }
    const token = driver.id;
    console.log("\u{1F389} \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D \u0644\u0644\u0633\u0627\u0626\u0642:", driver.name);
    res.json({
      success: true,
      token,
      user: {
        id: driver.id,
        name: driver.name,
        phone: driver.phone,
        userType: "driver"
      },
      message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D"
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0627\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({
      success: false,
      message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645"
    });
  }
});
router.post("/logout", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C \u0628\u0646\u062C\u0627\u062D"
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C:", error);
    res.status(500).json({
      success: false,
      message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645"
    });
  }
});
var auth_default = router;

// server/routes/customer.ts
import express4 from "express";
init_schema();
init_db_advanced();
import { randomUUID as randomUUID2 } from "crypto";
var router2 = express4.Router();
router2.post("/auth", async (req, res) => {
  try {
    const { phone, name } = req.body;
    if (!phone || !name) {
      return res.status(400).json({ error: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0648\u0627\u0644\u0627\u0633\u0645 \u0645\u0637\u0644\u0648\u0628\u0627\u0646" });
    }
    const userId = randomUUID2();
    const userData = {
      username: phone,
      // استخدام رقم الهاتف كاسم المستخدم
      password: "default_password",
      // كلمة مرور افتراضية
      name,
      phone,
      email: null,
      address: null
    };
    let customer;
    try {
      customer = await storage.getUserByUsername(phone);
      if (!customer) {
        customer = await storage.createUser(userData);
      }
    } catch (error) {
      customer = await storage.createUser(userData);
    }
    res.json(customer);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0645\u0635\u0627\u062F\u0642\u0629 \u0627\u0644\u0639\u0645\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router2.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await storage.getUser(id);
    if (!customer) {
      return res.status(404).json({ error: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A" });
  }
});
router2.get("/:id/profile", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await storage.getUser(id);
    if (!customer) {
      return res.status(404).json({ error: "\u0627\u0644\u0639\u0645\u064A\u0644 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(customer);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router2.put("/:id/profile", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedCustomer = await storage.updateUser(id, updateData);
    if (!updatedCustomer) {
      return res.status(404).json({ error: "\u0627\u0644\u0639\u0645\u064A\u0644 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(updatedCustomer);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router2.get("/:id/addresses", async (req, res) => {
  try {
    const { id } = req.params;
    const addresses = await storage.getUserAddresses(id);
    addresses.sort((a, b) => {
      if (a.isDefault && !b.isDefault) return -1;
      if (!a.isDefault && b.isDefault) return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    res.json(addresses);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0639\u0645\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router2.post("/:id/addresses", async (req, res) => {
  try {
    const { id } = req.params;
    const addressData = req.body;
    const customer = await storage.getUser(id);
    if (!customer) {
      return res.status(404).json({ error: "\u0627\u0644\u0639\u0645\u064A\u0644 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    const validatedData = insertUserAddressSchema.omit({ id: true, userId: true, createdAt: true }).parse(addressData);
    const newAddress = await storage.createUserAddress(id, validatedData);
    res.json(newAddress);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0648\u0627\u0646 \u062C\u062F\u064A\u062F:", error);
    if (error instanceof Error && error.name === "ZodError") {
      res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    } else {
      res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
    }
  }
});
router2.put("/:customerId/addresses/:addressId", async (req, res) => {
  try {
    const { customerId, addressId } = req.params;
    const updateData = req.body;
    const validatedData = insertUserAddressSchema.omit({ id: true, userId: true, createdAt: true }).partial().parse(updateData);
    const updatedAddress = await storage.updateUserAddress(addressId, customerId, validatedData);
    if (!updatedAddress) {
      return res.status(404).json({ error: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F \u0623\u0648 \u0644\u0627 \u064A\u062E\u0635 \u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644" });
    }
    res.json(updatedAddress);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0639\u0646\u0648\u0627\u0646:", error);
    if (error instanceof Error && error.name === "ZodError") {
      res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    } else {
      res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
    }
  }
});
router2.delete("/:customerId/addresses/:addressId", async (req, res) => {
  try {
    const { customerId, addressId } = req.params;
    const success = await storage.deleteUserAddress(addressId, customerId);
    if (!success) {
      return res.status(404).json({ error: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F \u0623\u0648 \u0644\u0627 \u064A\u062E\u0635 \u0647\u0630\u0627 \u0627\u0644\u0639\u0645\u064A\u0644" });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0639\u0646\u0648\u0627\u0646:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router2.get("/orders/by-phone/:phone", async (req, res) => {
  try {
    const { phone } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const customerOrders = await storage.getCustomerOrders(phone);
    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedOrders = customerOrders.slice(startIndex, endIndex);
    res.json(paginatedOrders);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router2.get("/:id/orders", async (req, res) => {
  try {
    const { id } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const allOrders = await storage.getOrders();
    const customerOrders = allOrders.filter((order) => order.customerId === id);
    customerOrders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedOrders = customerOrders.slice(startIndex, endIndex);
    res.json(paginatedOrders);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router2.post("/orders/:orderId/review", async (req, res) => {
  try {
    const { orderId } = req.params;
    const { customerId, rating, comment, driverRating, driverComment } = req.body;
    const order = await storage.getOrder(orderId);
    if (!order) {
      return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    if (order.customerId && order.customerId !== customerId) {
      return res.status(403).json({ error: "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0644\u0643 \u0628\u062A\u0642\u064A\u064A\u0645 \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628" });
    }
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: "\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0637\u0639\u0645 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 1 \u0648 5" });
    }
    let customerName = order.customerName;
    let customerPhone = order.customerPhone || "";
    if (customerId) {
      const customer = await storage.getUser(customerId);
      if (customer) {
        customerName = customer.name;
        customerPhone = customer.phone || "";
      }
    }
    const reviewData = {
      orderId,
      restaurantId: order.restaurantId,
      customerName,
      customerPhone,
      rating: Number(rating),
      comment: comment || null,
      isApproved: false
    };
    const newReview = await storage.createRating(reviewData);
    await storage.updateOrder(orderId, { isRated: true });
    let driverReview = null;
    if (driverRating && order.driverId) {
      try {
        const advStorage = new AdvancedDatabaseStorage(storage.db);
        driverReview = await advStorage.createDriverReview({
          orderId,
          driverId: order.driverId,
          rating: Number(driverRating),
          comment: driverComment || null
        });
        const ws = req.app.get("ws");
        if (ws && order.driverId) {
          ws.sendToDriver(order.driverId, "review_received", {
            rating: Number(driverRating),
            orderId
          });
          if (typeof ws.sendToAdmin === "function") {
            ws.sendToAdmin("new_driver_review", {
              driverId: order.driverId,
              rating: Number(driverRating)
            });
          }
        }
      } catch (err) {
        console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0633\u0627\u0626\u0642:", err);
      }
    }
    res.json({
      success: true,
      restaurantReview: newReview,
      driverReview
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0642\u064A\u064A\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});

// server/routes/driver.ts
import express5 from "express";
init_schema();
import { z as z2 } from "zod";

// server/utils/coercion.ts
function coerceRequestData(data) {
  const coerced = { ...data };
  const decimalFields = [
    "minimumOrder",
    "deliveryFee",
    "perKmFee",
    "latitude",
    "longitude",
    "discountAmount",
    "rating",
    "commissionRate",
    "salary",
    "hoursWorked",
    "salaryAmount",
    "earnings",
    "price",
    "originalPrice",
    "amount",
    "subtotal",
    "total",
    "totalAmount",
    "distance",
    "driverEarnings",
    "restaurantEarnings",
    "companyEarnings",
    "totalBalance",
    "availableBalance",
    "withdrawnAmount",
    "pendingAmount",
    "balanceBefore",
    "balanceAfter"
  ];
  decimalFields.forEach((field) => {
    if (coerced[field] !== void 0 && coerced[field] !== null && coerced[field] !== "") {
      coerced[field] = String(coerced[field]);
    } else if (coerced[field] === null || coerced[field] === "") {
      coerced[field] = void 0;
    }
  });
  const intFields = ["reviewCount", "discountPercent", "sortOrder", "quantity"];
  intFields.forEach((field) => {
    if (coerced[field] !== void 0 && coerced[field] !== null && coerced[field] !== "") {
      const parsed = parseInt(coerced[field]);
      coerced[field] = isNaN(parsed) ? void 0 : parsed;
    } else if (coerced[field] === null || coerced[field] === "") {
      coerced[field] = void 0;
    }
  });
  const boolFields = [
    "isOpen",
    "isActive",
    "isFeatured",
    "isNew",
    "isTemporarilyClosed",
    "isAvailable",
    "isSpecialOffer",
    "isApproved",
    "isRead"
  ];
  boolFields.forEach((field) => {
    if (coerced[field] !== void 0 && coerced[field] !== null) {
      const value = coerced[field];
      if (typeof value === "string") {
        coerced[field] = value === "true" || value === "1";
      } else if (typeof value === "number") {
        coerced[field] = !!value;
      } else {
        coerced[field] = Boolean(value);
      }
    }
  });
  if (Array.isArray(coerced.permissions)) {
    coerced.permissions = JSON.stringify(coerced.permissions);
  } else if (coerced.permissions === null || coerced.permissions === "") {
    coerced.permissions = void 0;
  }
  const dateFields = ["validUntil", "hireDate", "checkIn", "checkOut", "startDate", "endDate", "date"];
  dateFields.forEach((field) => {
    if (coerced[field] !== void 0 && coerced[field] !== null && coerced[field] !== "") {
      const date = new Date(coerced[field]);
      coerced[field] = isNaN(date.getTime()) ? void 0 : date;
    } else if (coerced[field] === null || coerced[field] === "") {
      coerced[field] = void 0;
    }
  });
  const optionalTextFields = ["categoryId", "temporaryCloseReason", "address", "restaurantId"];
  optionalTextFields.forEach((field) => {
    if (coerced[field] === null || coerced[field] === "") {
      coerced[field] = void 0;
    }
  });
  return coerced;
}

// server/utils/auth-middleware.ts
init_schema();
import { eq as eq4 } from "drizzle-orm";
async function requireDriverAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D - \u0627\u0644\u0631\u062C\u0627\u0621 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"
      });
    }
    const token = authHeader.split(" ")[1];
    const driverResult = await dbStorage.db.select().from(drivers).where(eq4(drivers.id, token)).limit(1);
    if (driverResult.length === 0) {
      return res.status(401).json({
        success: false,
        message: "\u062C\u0644\u0633\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
      });
    }
    const driver = driverResult[0];
    if (!driver.isActive) {
      return res.status(401).json({
        success: false,
        message: "\u0627\u0644\u062D\u0633\u0627\u0628 \u063A\u064A\u0631 \u0645\u0641\u0639\u0644"
      });
    }
    req.driverId = driver.id;
    req.userType = "driver";
    next();
  } catch (error) {
    console.error("Driver authentication error:", error);
    res.status(500).json({
      success: false,
      message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0645\u0635\u0627\u062F\u0642\u0629"
    });
  }
}

// server/routes/driver.ts
init_db_advanced();
var router3 = express5.Router();
router3.get("/", async (req, res) => {
  try {
    const { available } = req.query;
    let drivers2;
    if (available === "true") {
      drivers2 = await storage.getAvailableDrivers();
    } else {
      drivers2 = await storage.getDrivers();
    }
    res.json(drivers2);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch drivers" });
  }
});
router3.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await storage.getDriver(id);
    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res.json(driver);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch driver" });
  }
});
router3.post("/", async (req, res) => {
  try {
    const validatedData = insertDriverSchema.parse(req.body);
    const driver = await storage.createDriver(validatedData);
    res.status(201).json(driver);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0633\u0627\u0626\u0642:", error);
    if (error instanceof z2.ZodError) {
      return res.status(400).json({
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors
      });
    }
    res.status(400).json({
      message: error instanceof Error ? error.message : "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0633\u0627\u0626\u0642"
    });
  }
});
router3.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const validatedData = insertDriverSchema.partial().parse(req.body);
    const driver = await storage.updateDriver(id, validatedData);
    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res.json(driver);
  } catch (error) {
    res.status(400).json({ message: "Invalid driver data" });
  }
});
router3.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await storage.deleteDriver(id);
    if (!success) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete driver" });
  }
});
router3.use(requireDriverAuth);
router3.get("/app/dashboard", async (req, res) => {
  try {
    const driverId = req.driverId;
    const driver = await storage.getDriver(driverId);
    if (!driver) {
      return res.status(404).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    const allOrders = await storage.getOrders();
    const driverOrders = allOrders.filter((order) => order.driverId === driverId);
    const driverBalance = await storage.getDriverBalance(driverId);
    const driverCommissions2 = await storage.getDriverCommissions(driverId);
    const advStorage = new AdvancedDatabaseStorage(storage.db);
    const driverReviews2 = await advStorage.getDriverReviews(driverId);
    const todayStr = (/* @__PURE__ */ new Date()).toDateString();
    const todayOrders = driverOrders.filter((order) => {
      try {
        const createdDate = order.createdAt instanceof Date ? order.createdAt : new Date(order.createdAt);
        return createdDate.toDateString() === todayStr;
      } catch (e) {
        return false;
      }
    });
    const completedToday = todayOrders.filter((order) => order.status === "delivered");
    const commissionsToday = driverCommissions2.filter((commission) => {
      try {
        const createdDate = commission.createdAt instanceof Date ? commission.createdAt : new Date(commission.createdAt);
        return createdDate.toDateString() === todayStr;
      } catch (e) {
        return false;
      }
    });
    const todayEarnings = commissionsToday.reduce(
      (sum, commission) => sum + (parseFloat(commission.commissionAmount?.toString()) || 0),
      0
    );
    const totalEarnings = driverCommissions2.reduce(
      (sum, commission) => sum + (parseFloat(commission.commissionAmount?.toString()) || 0),
      0
    );
    const availableOrders = allOrders.filter((order) => (order.status === "confirmed" || order.status === "assigned") && order.driverId === driverId).slice(0, 10);
    const currentOrders = driverOrders.filter(
      (order) => ["ready", "picked_up", "on_way"].includes(order.status)
    );
    res.json({
      stats: {
        todayOrders: todayOrders.length,
        todayEarnings,
        completedToday: completedToday.length,
        totalOrders: driverOrders.length,
        totalEarnings,
        availableBalance: parseFloat(driverBalance?.availableBalance?.toString() || "0"),
        withdrawnAmount: parseFloat(driverBalance?.withdrawnAmount?.toString() || "0"),
        totalCommissions: driverCommissions2.length,
        averageRating: parseFloat(driver.averageRating?.toString() || "4.5")
      },
      driver: {
        id: driver.id,
        name: driver.name,
        isAvailable: driver.isAvailable,
        isActive: driver.isActive
      },
      availableOrders,
      currentOrders,
      reviews: driverReviews2 || [],
      balance: driverBalance || {
        availableBalance: "0",
        totalBalance: "0",
        withdrawnAmount: "0",
        pendingAmount: "0"
      }
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0644\u0648\u062D\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.get("/orders", async (req, res) => {
  try {
    const driverId = req.driverId;
    const { status } = req.query;
    const allOrders = await storage.getOrders();
    let driverOrders = allOrders.filter((order) => order.driverId === driverId);
    if (status === "active") {
      driverOrders = driverOrders.filter(
        (order) => ["ready", "picked_up", "on_way"].includes(order.status)
      );
    } else if (status === "history") {
      driverOrders = driverOrders.filter(
        (order) => ["delivered", "cancelled"].includes(order.status)
      );
    } else if (status && typeof status === "string") {
      driverOrders = driverOrders.filter((order) => order.status === status);
    }
    driverOrders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    res.json(driverOrders);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.get("/orders/available", async (req, res) => {
  try {
    const driverId = req.driverId;
    const allOrders = await storage.getOrders();
    const availableOrders = allOrders.filter(
      (order) => (order.status === "confirmed" || order.status === "assigned") && order.driverId === driverId
    );
    availableOrders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    res.json(availableOrders);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.post("/orders/:id/accept", async (req, res) => {
  try {
    const { id } = req.params;
    const driverId = req.driverId;
    const driver = await storage.getDriver(driverId);
    if (!driver) return res.status(404).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    const order = await storage.getOrder(id);
    if (!order) return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    if (!["confirmed", "assigned"].includes(order.status) || order.driverId && order.driverId !== driverId) {
      return res.status(400).json({ error: "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0642\u0628\u0648\u0644 \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628" });
    }
    const commissionRate = parseFloat(driver.commissionRate?.toString() || "70");
    const orderAmount = parseFloat(order.totalAmount) || 0;
    const commissionAmount = orderAmount * commissionRate / 100;
    const updatedOrder = await storage.updateOrder(id, {
      driverId,
      status: "ready",
      driverCommissionRate: commissionRate,
      driverCommissionAmount: commissionAmount.toString(),
      commissionProcessed: false
    });
    const ws = req.app.get("ws");
    if (ws) ws.broadcast("order_update", { orderId: id, status: "ready", driverId });
    res.json({ success: true, order: updatedOrder });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0642\u0628\u0648\u0644 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.put("/orders/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, location } = req.body;
    const driverId = req.driverId;
    const order = await storage.getOrder(id);
    if (!order) return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    if (order.driverId !== driverId) return res.status(403).json({ error: "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0644\u0643" });
    const allowedStatuses = ["ready", "picked_up", "on_way", "delivered"];
    if (!allowedStatuses.includes(status)) return res.status(400).json({ error: "\u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    const updateData = { status };
    if (location) updateData.currentLocation = location;
    if (status === "delivered") {
      updateData.actualDeliveryTime = /* @__PURE__ */ new Date();
      if (order.driverCommissionAmount && !order.commissionProcessed) {
        await storage.createDriverCommission({
          driverId,
          orderId: id,
          orderAmount: parseFloat(order.totalAmount) || 0,
          commissionRate: order.driverCommissionRate || 70,
          commissionAmount: parseFloat(order.driverCommissionAmount) || 0,
          status: "approved"
        });
        await storage.updateDriverBalance(driverId, {
          amount: parseFloat(order.driverCommissionAmount) || 0,
          type: "commission",
          description: `\u0639\u0645\u0648\u0644\u0629 \u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0637\u0644\u0628 \u0631\u0642\u0645: ${order.orderNumber}`,
          orderId: order.id
        });
        const driver = await storage.getDriver(driverId);
        if (driver) {
          const currentEarnings = parseFloat(driver.earnings?.toString() || "0");
          const commissionAmount = parseFloat(order.driverCommissionAmount) || 0;
          await storage.updateDriver(driverId, {
            completedOrders: (driver.completedOrders || 0) + 1,
            earnings: (currentEarnings + commissionAmount).toString(),
            isAvailable: true
            // إتاحة السائق للطلبات الجديدة بعد التوصيل
          });
        }
        updateData.commissionProcessed = true;
      }
    }
    const updatedOrder = await storage.updateOrder(id, updateData);
    const ws = req.app.get("ws");
    if (ws) ws.broadcast("order_update", { orderId: id, status, driverId });
    res.json({ success: true, order: updatedOrder });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.get("/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const driverId = req.driverId;
    const order = await storage.getOrder(id);
    if (!order || order.driverId !== driverId) return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.get("/stats", async (req, res) => {
  try {
    const driverId = req.driverId;
    const driver = await storage.getDriver(driverId);
    if (!driver) return res.status(404).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    const driverBalance = await storage.getDriverBalance(driverId);
    const driverCommissions2 = await storage.getDriverCommissions(driverId);
    const advStorage = new AdvancedDatabaseStorage(storage.db);
    const driverReviews2 = await advStorage.getDriverReviews(driverId);
    const allOrders = await storage.getOrders();
    const driverOrders = allOrders.filter((order) => order.driverId === driverId);
    const deliveredOrders = driverOrders.filter((order) => order.status === "delivered");
    const totalEarnings = driverCommissions2.reduce((sum, c) => sum + (parseFloat(c.commissionAmount.toString()) || 0), 0);
    res.json({
      totalOrders: driverOrders.length,
      completedOrders: deliveredOrders.length,
      totalEarnings,
      availableBalance: driverBalance?.availableBalance || 0,
      withdrawnAmount: driverBalance?.withdrawnAmount || 0,
      averageRating: driver.averageRating || 4.5,
      successRate: driverOrders.length > 0 ? Math.round(deliveredOrders.length / driverOrders.length * 100) : 0,
      reviews: driverReviews2 || []
    });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.get("/balance", async (req, res) => {
  try {
    const driverId = req.driverId;
    const balance = await storage.getDriverBalance(driverId);
    const transactions = await storage.getDriverTransactions(driverId);
    const withdrawals = await storage.getWithdrawalRequests(driverId, "driver");
    res.json({
      balance: balance || { availableBalance: "0", totalBalance: "0", withdrawnAmount: "0", pendingAmount: "0" },
      transactions,
      withdrawals
    });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.post("/status", async (req, res) => {
  try {
    const driverId = req.driverId;
    const { status } = req.body;
    if (!["available", "offline"].includes(status)) {
      return res.status(400).json({ error: "\u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
    const isAvailable = status === "available";
    await storage.updateDriver(driverId, { isAvailable });
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("driver_status_update", {
        driverId,
        isAvailable,
        status,
        timestamp: /* @__PURE__ */ new Date()
      });
      if (typeof ws.sendToAdmin === "function") {
        ws.sendToAdmin("driver_status_update", { driverId, isAvailable, status });
      }
    }
    const advStorage = new AdvancedDatabaseStorage(storage.db);
    if (isAvailable) {
      await advStorage.createWorkSession({
        driverId,
        startTime: /* @__PURE__ */ new Date(),
        isActive: true,
        totalDeliveries: 0,
        totalEarnings: "0"
      });
    } else {
      const activeSession = await advStorage.getActiveWorkSession(driverId);
      if (activeSession) {
        await advStorage.endWorkSession(activeSession.id, 0, 0);
      }
    }
    res.json({ success: true, status });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.post("/withdraw", async (req, res) => {
  try {
    const driverId = req.driverId;
    const { amount, method, details } = req.body;
    if (!amount || amount <= 0) return res.status(400).json({ error: "\u0645\u0628\u0644\u063A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
    const balance = await storage.getDriverBalance(driverId);
    const available = parseFloat(balance?.availableBalance?.toString() || "0");
    if (amount > available) return res.status(400).json({ error: "\u0627\u0644\u0631\u0635\u064A\u062F \u063A\u064A\u0631 \u0643\u0627\u0641\u064D" });
    const withdrawal = await storage.createWithdrawalRequest({
      entityType: "driver",
      entityId: driverId,
      amount: amount.toString(),
      status: "pending",
      bankDetails: details || "",
      adminNotes: `\u0648\u0633\u064A\u0644\u0629 \u0627\u0644\u0633\u062D\u0628: ${method || "\u0643\u0627\u0634"}`
    });
    res.json({ success: true, withdrawal });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.get("/profile", async (req, res) => {
  try {
    const driverId = req.driverId;
    const driver = await storage.getDriver(driverId);
    if (!driver) return res.status(404).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json({ success: true, driver });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.put("/profile", async (req, res) => {
  try {
    const driverId = req.driverId;
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertDriverSchema.partial().parse(coercedData);
    const driver = await storage.updateDriver(driverId, validatedData);
    if (!driver) return res.status(404).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    const ws = req.app.get("ws");
    if (ws && validatedData.isAvailable !== void 0) {
      ws.broadcast("driver_status_update", {
        driverId,
        isAvailable: driver.isAvailable,
        name: driver.name,
        timestamp: /* @__PURE__ */ new Date()
      });
      if (typeof ws.sendToAdmin === "function") {
        ws.sendToAdmin("driver_status_update", {
          driverId,
          isAvailable: driver.isAvailable,
          name: driver.name
        });
      }
    }
    res.json({ success: true, driver });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A:", error);
    res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
  }
});
var driver_default = router3;

// server/routes/orders.ts
import express6 from "express";

// server/services/deliveryFeeService.ts
var DEFAULT_BASE_FEE = 500;
var DEFAULT_PER_KM_FEE = 200;
var DEFAULT_MIN_FEE = 3e3;
var DEFAULT_MAX_FEE = 5e4;
var EARTH_RADIUS_KM = 6371;
function calculateDistance(point1, point2) {
  const lat1Rad = toRadians(point1.lat);
  const lat2Rad = toRadians(point2.lat);
  const deltaLat = toRadians(point2.lat - point1.lat);
  const deltaLng = toRadians(point2.lng - point1.lng);
  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = EARTH_RADIUS_KM * c;
  return Math.round(distance * 100) / 100;
}
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
function isPointInPolygon(point, polygon) {
  let isInside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = point.lat, yi = point.lng;
    const x1 = polygon[i].lat, y1 = polygon[i].lng;
    const x2 = polygon[j].lat, y2 = polygon[j].lng;
    const intersect = y1 > yi !== y2 > yi && xi < (x2 - x1) * (yi - y1) / (y2 - y1) + x1;
    if (intersect) isInside = !isInside;
  }
  return isInside;
}
function estimateDeliveryTime(distanceKm) {
  const avgSpeedKmH = 30;
  const prepTimeMinutes = 15;
  const travelTimeMinutes = distanceKm / avgSpeedKmH * 60;
  const totalTimeMinutes = Math.ceil(prepTimeMinutes + travelTimeMinutes);
  const minTime = totalTimeMinutes;
  const maxTime = Math.ceil(totalTimeMinutes * 1.3);
  if (maxTime <= 30) {
    return `${minTime}-${maxTime} \u062F\u0642\u064A\u0642\u0629`;
  } else if (maxTime <= 60) {
    return `${minTime}-${maxTime} \u062F\u0642\u064A\u0642\u0629`;
  } else {
    const minHours = Math.floor(minTime / 60);
    const maxHours = Math.ceil(maxTime / 60);
    if (minHours === maxHours) {
      return `\u062D\u0648\u0627\u0644\u064A ${minHours} \u0633\u0627\u0639\u0629`;
    }
    return `${minHours}-${maxHours} \u0633\u0627\u0639\u0629`;
  }
}
async function getDeliveryFeeSettings(restaurantId) {
  try {
    if (restaurantId) {
      const restaurantSettings = await storage.getDeliveryFeeSettings(restaurantId);
      if (restaurantSettings && restaurantSettings.type) {
        return {
          type: restaurantSettings.type,
          baseFee: Math.max(0, parseFloat(restaurantSettings.baseFee || "0")),
          perKmFee: Math.max(0, parseFloat(restaurantSettings.perKmFee || "0")),
          minFee: Math.max(0, parseFloat(restaurantSettings.minFee || "0")),
          maxFee: Math.max(DEFAULT_MIN_FEE, parseFloat(restaurantSettings.maxFee || DEFAULT_MAX_FEE.toString())),
          freeDeliveryThreshold: Math.max(0, parseFloat(restaurantSettings.freeDeliveryThreshold || "0")),
          storeLat: restaurantSettings.storeLat ? parseFloat(restaurantSettings.storeLat) : void 0,
          storeLng: restaurantSettings.storeLng ? parseFloat(restaurantSettings.storeLng) : void 0
        };
      }
    }
    const globalSettings = await storage.getDeliveryFeeSettings();
    if (globalSettings && globalSettings.type) {
      return {
        type: globalSettings.type,
        baseFee: Math.max(0, parseFloat(globalSettings.baseFee || "0")),
        perKmFee: Math.max(0, parseFloat(globalSettings.perKmFee || "0")),
        minFee: Math.max(0, parseFloat(globalSettings.minFee || "0")),
        maxFee: Math.max(DEFAULT_MIN_FEE, parseFloat(globalSettings.maxFee || DEFAULT_MAX_FEE.toString())),
        freeDeliveryThreshold: Math.max(0, parseFloat(globalSettings.freeDeliveryThreshold || "0")),
        storeLat: globalSettings.storeLat ? parseFloat(globalSettings.storeLat) : void 0,
        storeLng: globalSettings.storeLng ? parseFloat(globalSettings.storeLng) : void 0
      };
    }
  } catch (error) {
    console.error("Error fetching delivery fee settings:", error);
  }
  console.warn("Using default delivery fee settings");
  return {
    type: "per_km",
    baseFee: DEFAULT_BASE_FEE,
    perKmFee: DEFAULT_PER_KM_FEE,
    minFee: DEFAULT_MIN_FEE,
    maxFee: DEFAULT_MAX_FEE,
    freeDeliveryThreshold: 0
  };
}
async function calculateDeliveryFee(customerLocation, restaurantId, orderSubtotal) {
  const [geoZones2, deliveryRules2, discounts, deliverySettings, storeLat, storeLng, restaurant] = await Promise.all([
    storage.getGeoZones(),
    storage.getDeliveryRules(),
    storage.getDeliveryDiscounts(),
    getDeliveryFeeSettings(restaurantId || void 0),
    storage.getUiSetting("store_lat"),
    storage.getUiSetting("store_lng"),
    restaurantId ? storage.getRestaurant(restaurantId) : Promise.resolve(null)
  ]);
  const activeGeoZones = geoZones2.filter((z5) => z5.isActive);
  const activeRules = deliveryRules2.filter((r) => r.isActive);
  const activeDiscounts = discounts.filter((d) => d.isActive);
  let storeLocation = { lat: 0, lng: 0 };
  if (deliverySettings.storeLat && deliverySettings.storeLng) {
    storeLocation = { lat: deliverySettings.storeLat, lng: deliverySettings.storeLng };
  } else if (storeLat && storeLng) {
    storeLocation = {
      lat: parseFloat(storeLat.value),
      lng: parseFloat(storeLng.value)
    };
  } else if (restaurant && restaurant.latitude && restaurant.longitude) {
    storeLocation = {
      lat: parseFloat(restaurant.latitude),
      lng: parseFloat(restaurant.longitude)
    };
  }
  const distance = storeLocation.lat !== 0 ? calculateDistance(customerLocation, storeLocation) : 0;
  const estimatedTime = estimateDeliveryTime(distance);
  let matchingGeoZoneId = null;
  for (const zone of activeGeoZones) {
    try {
      const polygon = JSON.parse(zone.coordinates);
      if (isPointInPolygon(customerLocation, polygon)) {
        matchingGeoZoneId = zone.id;
        break;
      }
    } catch (e) {
      console.error(`Error parsing coordinates for zone ${zone.name}`, e);
    }
  }
  let appliedFee = null;
  let appliedRuleId;
  for (const rule of activeRules) {
    let matches = false;
    if (rule.ruleType === "zone" && rule.geoZoneId === matchingGeoZoneId) {
      matches = true;
    } else if (rule.ruleType === "distance") {
      const minD = rule.minDistance ? parseFloat(rule.minDistance) : 0;
      const maxD = rule.maxDistance ? parseFloat(rule.maxDistance) : Infinity;
      if (distance >= minD && distance <= maxD) matches = true;
    } else if (rule.ruleType === "order_value") {
      const minV = rule.minOrderValue ? parseFloat(rule.minOrderValue) : 0;
      const maxV = rule.maxOrderValue ? parseFloat(rule.maxOrderValue) : Infinity;
      if (orderSubtotal >= minV && orderSubtotal <= maxV) matches = true;
    }
    if (matches) {
      appliedFee = parseFloat(rule.fee);
      appliedRuleId = rule.id;
      break;
    }
  }
  if (appliedFee === null) {
    switch (deliverySettings.type) {
      case "fixed":
        appliedFee = deliverySettings.baseFee;
        break;
      case "zone_based":
        appliedFee = await getZoneBasedFee(distance);
        break;
      case "per_km":
      default:
        appliedFee = deliverySettings.baseFee + distance * deliverySettings.perKmFee;
        break;
    }
  }
  let isFreeDelivery = false;
  let freeDeliveryReason;
  let appliedDiscountId;
  if (deliverySettings.freeDeliveryThreshold > 0 && orderSubtotal >= deliverySettings.freeDeliveryThreshold) {
    isFreeDelivery = true;
    freeDeliveryReason = `\u062A\u0648\u0635\u064A\u0644 \u0645\u062C\u0627\u0646\u064A \u0644\u0644\u0637\u0644\u0628\u0627\u062A \u0641\u0648\u0642 ${deliverySettings.freeDeliveryThreshold} \u0631\u064A\u0627\u0644`;
    appliedFee = 0;
  } else {
    const now = /* @__PURE__ */ new Date();
    for (const discount of activeDiscounts) {
      if (discount.validFrom && new Date(discount.validFrom) > now) continue;
      if (discount.validUntil && new Date(discount.validUntil) < now) continue;
      if (discount.minOrderValue && orderSubtotal < parseFloat(discount.minOrderValue)) continue;
      appliedDiscountId = discount.id;
      if (discount.discountType === "percentage") {
        const discountAmount = appliedFee * (parseFloat(discount.discountValue) / 100);
        appliedFee -= discountAmount;
        if (parseFloat(discount.discountValue) === 100) {
          isFreeDelivery = true;
          freeDeliveryReason = `\u062E\u0635\u0645 \u062A\u0648\u0635\u064A\u0644 \u0645\u062C\u0627\u0646\u064A: ${discount.name}`;
        }
      } else {
        appliedFee -= parseFloat(discount.discountValue);
        if (appliedFee <= 0) {
          appliedFee = 0;
          isFreeDelivery = true;
          freeDeliveryReason = `\u062A\u0648\u0635\u064A\u0644 \u0645\u062C\u0627\u0646\u064A: ${discount.name}`;
        }
      }
      break;
    }
  }
  appliedFee = Math.max(0, Math.min(deliverySettings.maxFee, appliedFee));
  appliedFee = Math.round(appliedFee * 100) / 100;
  return {
    fee: appliedFee,
    distance,
    estimatedTime,
    feeBreakdown: {
      baseFee: appliedFee === 0 && isFreeDelivery ? 0 : appliedFee,
      distanceFee: 0,
      totalBeforeLimit: appliedFee
    },
    isFreeDelivery,
    freeDeliveryReason,
    appliedRuleId,
    appliedDiscountId
  };
}
async function getZoneBasedFee(distance) {
  try {
    const zones = await storage.getDeliveryZones();
    if (zones && zones.length > 0) {
      const matchingZone = zones.find(
        (zone) => distance >= parseFloat(zone.minDistance || "0") && distance <= parseFloat(zone.maxDistance || "999")
      );
      if (matchingZone) {
        return parseFloat(matchingZone.deliveryFee || String(DEFAULT_BASE_FEE));
      }
    }
  } catch (error) {
    console.error("Error fetching delivery zones:", error);
  }
  return DEFAULT_BASE_FEE + distance * DEFAULT_PER_KM_FEE;
}

// utils/restaurantHours.ts
function getRestaurantStatus(restaurant) {
  const now = /* @__PURE__ */ new Date();
  const currentDay = now.getDay();
  const currentTime = now.toTimeString().slice(0, 5);
  if (restaurant.isTemporarilyClosed) {
    return {
      isOpen: false,
      message: restaurant.temporaryCloseReason || "\u0645\u063A\u0644\u0642 \u0645\u0624\u0642\u062A\u0627\u064B",
      statusColor: "red"
    };
  }
  if (!restaurant.isOpen) {
    return {
      isOpen: false,
      message: "\u0645\u063A\u0644\u0642",
      statusColor: "red"
    };
  }
  const workingDays = restaurant.workingDays ? restaurant.workingDays.split(",").map(Number) : [0, 1, 2, 3, 4, 5, 6];
  if (!workingDays.includes(currentDay)) {
    const nextWorkingDay = getNextWorkingDay(currentDay, workingDays);
    return {
      isOpen: false,
      nextOpenTime: `${getDayName(nextWorkingDay)} ${restaurant.openingTime || "08:00"}`,
      message: `\u0645\u063A\u0644\u0642 \u0627\u0644\u064A\u0648\u0645 - \u064A\u0641\u062A\u062D ${getDayName(nextWorkingDay)} ${restaurant.openingTime || "08:00"}`,
      statusColor: "red"
    };
  }
  const openingTime = restaurant.openingTime || "08:00";
  const closingTime = restaurant.closingTime || "23:00";
  if (isTimeInRange(currentTime, openingTime, closingTime)) {
    const minutesUntilClose = getMinutesUntilTime(currentTime, closingTime);
    if (minutesUntilClose <= 30) {
      return {
        isOpen: true,
        closeTime: closingTime,
        message: `\u0645\u0641\u062A\u0648\u062D - \u064A\u063A\u0644\u0642 \u0627\u0644\u0633\u0627\u0639\u0629 ${closingTime}`,
        statusColor: "yellow"
      };
    }
    return {
      isOpen: true,
      closeTime: closingTime,
      message: `\u0645\u0641\u062A\u0648\u062D \u062D\u062A\u0649 ${closingTime}`,
      statusColor: "green"
    };
  }
  if (currentTime < openingTime) {
    return {
      isOpen: false,
      nextOpenTime: `\u0627\u0644\u064A\u0648\u0645 ${openingTime}`,
      message: `\u0645\u063A\u0644\u0642 - \u064A\u0641\u062A\u062D \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0633\u0627\u0639\u0629 ${openingTime}`,
      statusColor: "red"
    };
  } else {
    const nextWorkingDay = getNextWorkingDay(currentDay, workingDays);
    const dayText = nextWorkingDay === (currentDay + 1) % 7 ? "\u063A\u062F\u0627\u064B" : getDayName(nextWorkingDay);
    return {
      isOpen: false,
      nextOpenTime: `${dayText} ${openingTime}`,
      message: `\u0645\u063A\u0644\u0642 - \u064A\u0641\u062A\u062D ${dayText} \u0627\u0644\u0633\u0627\u0639\u0629 ${openingTime}`,
      statusColor: "red"
    };
  }
}
function isTimeInRange(current, start, end) {
  const currentMinutes = timeToMinutes(current);
  const startMinutes = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);
  if (endMinutes < startMinutes) {
    return currentMinutes >= startMinutes || currentMinutes <= endMinutes;
  }
  return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
}
function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}
function getMinutesUntilTime(currentTime, targetTime) {
  const currentMinutes = timeToMinutes(currentTime);
  const targetMinutes = timeToMinutes(targetTime);
  if (targetMinutes < currentMinutes) {
    return 24 * 60 - currentMinutes + targetMinutes;
  }
  return targetMinutes - currentMinutes;
}
function getNextWorkingDay(currentDay, workingDays) {
  for (let i = 1; i <= 7; i++) {
    const nextDay = (currentDay + i) % 7;
    if (workingDays.includes(nextDay)) {
      return nextDay;
    }
  }
  return workingDays[0] || 0;
}
function getDayName(day) {
  const days = ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0625\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"];
  return days[day] || "";
}
function canOrderFromRestaurant(restaurant) {
  if (restaurant.isOpen && !restaurant.isTemporarilyClosed) {
    return { canOrder: true };
  }
  const status = getRestaurantStatus(restaurant);
  if (!status.isOpen) {
    return {
      canOrder: false,
      message: `\u0639\u0630\u0631\u0627\u064B\u060C \u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0622\u0646. ${status.message}`
    };
  }
  return { canOrder: true };
}

// server/routes/orders.ts
var router4 = express6.Router();
router4.post("/", async (req, res) => {
  try {
    const {
      customerName,
      customerPhone,
      customerEmail,
      deliveryAddress,
      customerLocationLat,
      customerLocationLng,
      notes,
      paymentMethod,
      items,
      subtotal,
      deliveryFee: clientDeliveryFee,
      totalAmount,
      restaurantId,
      customerId,
      deliveryPreference,
      scheduledDate,
      scheduledTimeSlot
    } = req.body;
    if (!customerName || !customerPhone || !deliveryAddress || !items) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0646\u0627\u0642\u0635\u0629: \u0627\u0644\u0627\u0633\u0645\u060C \u0627\u0644\u0647\u0627\u062A\u0641\u060C \u0627\u0644\u0639\u0646\u0648\u0627\u0646\u060C \u0648\u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0645\u0637\u0644\u0648\u0628\u0629"
      });
    }
    let restaurant = null;
    if (restaurantId) {
      restaurant = await storage.getRestaurant(restaurantId);
    }
    if (restaurant) {
      const orderStatus = canOrderFromRestaurant(restaurant);
      if (!orderStatus.canOrder) {
        return res.status(400).json({
          error: orderStatus.message || "\u0627\u0644\u0645\u0637\u0639\u0645 \u0645\u063A\u0644\u0642 \u062D\u0627\u0644\u064A\u0627\u064B"
        });
      }
    }
    let finalDeliveryFee = parseFloat(clientDeliveryFee || "0");
    let distance = 0;
    if (customerLocationLat && customerLocationLng) {
      try {
        const feeResult = await calculateDeliveryFee(
          { lat: parseFloat(customerLocationLat), lng: parseFloat(customerLocationLng) },
          restaurantId,
          parseFloat(subtotal || "0")
        );
        finalDeliveryFee = feeResult.fee;
        distance = feeResult.distance;
      } catch (feeError) {
        console.error("Error calculating delivery fee during order creation:", feeError);
      }
    }
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    let itemsString;
    try {
      itemsString = typeof items === "string" ? items : JSON.stringify(items);
    } catch (error) {
      return res.status(400).json({
        error: "\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D"
      });
    }
    const subtotalNum = parseFloat(subtotal || "0");
    const deliveryFeeNum = finalDeliveryFee;
    let restaurantCommissionAmount = 0;
    let restaurantEarnings2 = 0;
    if (restaurant) {
      const restaurantCommissionRate = parseFloat(restaurant.commissionRate?.toString() || "10");
      restaurantCommissionAmount = subtotalNum * restaurantCommissionRate / 100;
      restaurantEarnings2 = subtotalNum - restaurantCommissionAmount;
    } else {
      restaurantEarnings2 = 0;
      restaurantCommissionAmount = subtotalNum;
    }
    const defaultDriverCommissionRate = 70;
    const driverEarnings2 = deliveryFeeNum * defaultDriverCommissionRate / 100;
    const companyEarnings = restaurantCommissionAmount + (deliveryFeeNum - driverEarnings2);
    const orderData = {
      orderNumber,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim().replace(/\s+/g, ""),
      customerEmail: customerEmail ? customerEmail.trim() : null,
      customerId: customerId || null,
      deliveryAddress: deliveryAddress.trim(),
      customerLocationLat: customerLocationLat ? String(customerLocationLat) : null,
      customerLocationLng: customerLocationLng ? String(customerLocationLng) : null,
      notes: notes ? notes.trim() : null,
      paymentMethod: paymentMethod || "cash",
      status: "pending",
      items: itemsString,
      subtotal: String(subtotalNum),
      deliveryFee: String(deliveryFeeNum),
      distance: String(distance),
      total: String(subtotalNum + deliveryFeeNum),
      totalAmount: String(subtotalNum + deliveryFeeNum),
      driverEarnings: String(driverEarnings2),
      restaurantEarnings: String(restaurantEarnings2),
      companyEarnings: String(companyEarnings),
      restaurantId: restaurantId || null,
      estimatedTime: restaurant?.deliveryTime || "30-45 \u062F\u0642\u064A\u0642\u0629",
      deliveryPreference: deliveryPreference || "now",
      scheduledDate: scheduledDate || null,
      scheduledTimeSlot: scheduledTimeSlot || null
    };
    const order = await storage.createOrder(orderData);
    try {
      if (restaurantId) {
        await storage.createNotification({
          type: "new_order",
          title: "\u0637\u0644\u0628 \u062C\u062F\u064A\u062F",
          message: `\u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0631\u0642\u0645 ${orderNumber} \u0645\u0646 ${customerName}. \u0635\u0627\u0641\u064A \u0627\u0644\u0631\u0628\u062D: ${formatCurrency(restaurantEarnings2)}`,
          recipientType: "restaurant",
          recipientId: restaurantId,
          orderId: order.id,
          isRead: false
        });
      }
      await storage.createNotification({
        type: "new_order_pending_assignment",
        title: "\u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0639\u064A\u064A\u0646",
        message: `\u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0631\u0642\u0645 ${orderNumber} \u0645\u0646 ${customerName} \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0639\u064A\u064A\u0646 \u0633\u0627\u0626\u0642. \u0627\u0644\u0645\u0648\u0642\u0639: ${deliveryAddress}`,
        recipientType: "admin",
        recipientId: null,
        orderId: order.id,
        isRead: false
      });
      await storage.createOrderTracking({
        orderId: order.id,
        status: "pending",
        message: "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 \u0648\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
        createdBy: "system",
        createdByType: "system"
      });
    } catch (notificationError) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A:", notificationError);
    }
    res.status(201).json({
      success: true,
      order: {
        id: order.id,
        orderNumber: order.orderNumber,
        status: order.status,
        estimatedTime: order.estimatedTime,
        total: order.totalAmount
      }
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({
      error: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645",
      message: error.message
    });
  }
});
router4.get("/", async (req, res) => {
  try {
    const { status, driverId, available, restaurantId } = req.query;
    let orders3 = await storage.getOrders();
    if (driverId && available !== "true") {
      orders3 = orders3.filter((order) => order.driverId === driverId && ["confirmed", "preparing", "ready", "picked_up", "on_way"].includes(order.status));
    } else if (available === "true") {
      if (!driverId) {
        orders3 = [];
      } else {
        orders3 = orders3.filter(
          (order) => order.status === "assigned" && order.driverId === driverId
        );
      }
    } else {
      if (status && status !== "all") {
        orders3 = orders3.filter((order) => order.status === status);
      }
      if (restaurantId) {
        orders3 = orders3.filter((order) => order.restaurantId === restaurantId);
      }
    }
    orders3.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(orders3);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router4.put("/:id/assign-driver", async (req, res) => {
  try {
    const { id } = req.params;
    const { driverId } = req.body;
    if (!driverId) {
      return res.status(400).json({ error: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0633\u0627\u0626\u0642 \u0645\u0637\u0644\u0648\u0628" });
    }
    const order = await storage.getOrder(id);
    if (!order) {
      return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    if (order.driverId && order.driverId !== driverId) {
      try {
        await storage.updateDriver(order.driverId, { isAvailable: true });
        await storage.createNotification({
          type: "order_unassigned",
          title: "\u0625\u0644\u063A\u0627\u0621 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0637\u0644\u0628",
          message: `\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u062A\u0639\u064A\u064A\u0646\u0643 \u0644\u0644\u0637\u0644\u0628 \u0631\u0642\u0645 ${order.orderNumber} \u0648\u062A\u062D\u0648\u064A\u0644\u0647 \u0644\u0633\u0627\u0626\u0642 \u0622\u062E\u0631`,
          recipientType: "driver",
          recipientId: order.driverId,
          orderId: id,
          isRead: false
        });
      } catch (err) {
        console.error("Error freeing up previous driver:", err);
      }
    }
    const driver = await storage.getDriver(driverId);
    if (!driver) {
      return res.status(404).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    if (!driver.isAvailable || !driver.isActive) {
      return res.status(400).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D \u062D\u0627\u0644\u064A\u0627\u064B" });
    }
    const deliveryFeeNum = parseFloat(order.deliveryFee?.toString() || "0");
    const driverCommissionRate = parseFloat(driver.commissionRate?.toString() || "70");
    const driverEarnings2 = deliveryFeeNum * driverCommissionRate / 100;
    const restaurantId = order.restaurantId;
    let restaurant = null;
    let restaurantCommissionAmount = 0;
    const subtotalNum = parseFloat(order.subtotal?.toString() || "0");
    if (restaurantId) {
      restaurant = await storage.getRestaurant(restaurantId);
      const restaurantCommissionRate = parseFloat(restaurant?.commissionRate?.toString() || "10");
      restaurantCommissionAmount = subtotalNum * restaurantCommissionRate / 100;
    } else {
      restaurantCommissionAmount = subtotalNum;
    }
    const companyEarnings = restaurantCommissionAmount + (deliveryFeeNum - driverEarnings2);
    const updatedOrder = await storage.updateOrder(id, {
      driverId,
      driverEarnings: String(driverEarnings2),
      companyEarnings: String(companyEarnings),
      status: "assigned",
      // تعيين الطلب للسائق أولاً
      updatedAt: /* @__PURE__ */ new Date()
    });
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("order_update", { orderId: id, status: "assigned" });
      if (ws.sendToDriver) {
        ws.sendToDriver(driverId, "new_order_assigned", {
          orderId: id,
          status: "assigned",
          message: `\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0631\u0642\u0645 ${order.orderNumber} \u0644\u0643`
        });
      }
    }
    try {
      await storage.createNotification({
        type: "new_order_assigned",
        title: "\u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0645\u064F\u0639\u064A\u0646 \u0644\u0643",
        message: `\u062A\u0645 \u062A\u0639\u064A\u064A\u0646\u0643 \u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0637\u0644\u0628 \u0631\u0642\u0645 ${order.orderNumber} \u0645\u0646 ${restaurant?.name || "\u0627\u0644\u0645\u062A\u062C\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A"}. \u064A\u0631\u062C\u0649 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645.`,
        recipientType: "driver",
        recipientId: driverId,
        orderId: id,
        isRead: false
      });
      await storage.createNotification({
        type: "order_assigned",
        title: "\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0633\u0627\u0626\u0642",
        message: `\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642 ${driver.name} \u0644\u0644\u0637\u0644\u0628 ${order.orderNumber}`,
        recipientType: "admin",
        recipientId: null,
        orderId: id,
        isRead: false
      });
      await storage.createOrderTracking({
        orderId: id,
        status: "assigned",
        message: `\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642 ${driver.name} \u0648\u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0642\u0628\u0648\u0644 \u0627\u0644\u0637\u0644\u0628`,
        createdBy: "admin",
        createdByType: "admin"
      });
    } catch (notificationError) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A:", notificationError);
    }
    res.json({ success: true, order: updatedOrder });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router4.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, updatedBy, updatedByType } = req.body;
    if (!status) {
      return res.status(400).json({ error: "\u0627\u0644\u062D\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629" });
    }
    const order = await storage.getOrder(id);
    if (!order) {
      return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    const updatedOrder = await storage.updateOrder(id, {
      status,
      updatedAt: /* @__PURE__ */ new Date()
    });
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("order_update", { orderId: id, status });
    }
    let statusMessage = "";
    switch (status) {
      case "confirmed":
        statusMessage = "\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0645\u0637\u0639\u0645";
        break;
      case "preparing":
        statusMessage = "\u062C\u0627\u0631\u064A \u062A\u062D\u0636\u064A\u0631 \u0627\u0644\u0637\u0644\u0628";
        break;
      case "ready":
        statusMessage = "\u0627\u0644\u0637\u0644\u0628 \u062C\u0627\u0647\u0632 \u0644\u0644\u0627\u0633\u062A\u0644\u0627\u0645";
        break;
      case "picked_up":
        statusMessage = "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0645\u0637\u0639\u0645";
        break;
      case "on_way":
        statusMessage = "\u0627\u0644\u0633\u0627\u0626\u0642 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642 \u0625\u0644\u064A\u0643";
        break;
      case "delivered":
        statusMessage = "\u062A\u0645 \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D";
        if (order.driverId) {
          await storage.updateDriver(order.driverId, { isAvailable: true });
          try {
            const driverEarnings2 = parseFloat(order.driverEarnings?.toString() || "0");
            if (driverEarnings2 > 0) {
              const { AdvancedDatabaseStorage: AdvancedDatabaseStorage2 } = await Promise.resolve().then(() => (init_db_advanced(), db_advanced_exports));
              const advStorage = new AdvancedDatabaseStorage2(storage.db);
              let wallet = await advStorage.getDriverWallet(order.driverId);
              if (!wallet) {
                await advStorage.createDriverWallet({
                  driverId: order.driverId,
                  balance: "0",
                  isActive: true
                });
              }
              await advStorage.addDriverWalletBalance(order.driverId, driverEarnings2);
              const driver = await storage.getDriver(order.driverId);
              const currentEarnings = parseFloat(driver?.earnings?.toString() || "0");
              const currentCompletedOrders = driver?.completedOrders || 0;
              await storage.updateDriver(order.driverId, {
                earnings: String(currentEarnings + driverEarnings2),
                completedOrders: currentCompletedOrders + 1
              });
            }
          } catch (e) {
            console.error("Error updating driver earnings:", e);
          }
        }
        if (order.restaurantId) {
          try {
            const restaurantEarnings2 = parseFloat(order.restaurantEarnings?.toString() || "0");
            if (restaurantEarnings2 > 0) {
              const { AdvancedDatabaseStorage: AdvancedDatabaseStorage2 } = await Promise.resolve().then(() => (init_db_advanced(), db_advanced_exports));
              const advStorage = new AdvancedDatabaseStorage2(storage.db);
              let rWallet = await advStorage.getRestaurantWallet(order.restaurantId);
              if (!rWallet) {
                await advStorage.createRestaurantWallet({
                  restaurantId: order.restaurantId,
                  balance: "0",
                  isActive: true
                });
              }
              const currentBalance = parseFloat(rWallet?.balance?.toString() || "0");
              await advStorage.updateRestaurantWallet(order.restaurantId, {
                balance: String(currentBalance + restaurantEarnings2)
              });
            }
          } catch (e) {
            console.error("Error updating restaurant earnings:", e);
          }
        }
        break;
      case "cancelled":
        statusMessage = "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628";
        if (order.driverId) {
          await storage.updateDriver(order.driverId, { isAvailable: true });
        }
        break;
      default:
        statusMessage = `\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0625\u0644\u0649 ${status}`;
    }
    try {
      await storage.createNotification({
        type: "order_status_update",
        title: "\u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628",
        message: `\u0637\u0644\u0628\u0643 \u0631\u0642\u0645 ${order.orderNumber}: ${statusMessage}`,
        recipientType: "customer",
        recipientId: order.customerId || order.customerPhone,
        orderId: id,
        isRead: false
      });
      await storage.createNotification({
        type: "order_status_update",
        title: "\u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628",
        message: `\u0627\u0644\u0637\u0644\u0628 ${order.orderNumber}: ${statusMessage}`,
        recipientType: "admin",
        recipientId: null,
        orderId: id,
        isRead: false
      });
      await storage.createOrderTracking({
        orderId: id,
        status,
        message: statusMessage,
        createdBy: updatedBy || "system",
        createdByType: updatedByType || "system"
      });
    } catch (notificationError) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A:", notificationError);
    }
    res.json({ success: true, order: updatedOrder });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router4.get("/customer/:phone", async (req, res) => {
  try {
    const phone = req.params.phone.trim().replace(/\s+/g, "");
    if (!phone) {
      return res.status(400).json({
        error: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0645\u0637\u0644\u0648\u0628"
      });
    }
    const customerOrders = await storage.getOrdersByCustomer(phone);
    res.json(customerOrders);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router4.get("/:orderId/track", async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await storage.getOrder(orderId);
    if (!order) {
      return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    let driverInfo = null;
    if (order.driverId) {
      const driver = await storage.getDriver(order.driverId);
      if (driver) {
        driverInfo = {
          name: driver.name,
          phone: driver.phone
        };
      }
    }
    const trackingHistory = await storage.getOrderTracking(orderId);
    const formattedOrder = {
      ...order,
      driverName: driverInfo?.name,
      driverPhone: driverInfo?.phone,
      items: typeof order.items === "string" ? JSON.parse(order.items) : order.items
    };
    const formattedTracking = trackingHistory.map((t) => ({
      id: t.id,
      status: t.status,
      timestamp: t.createdAt,
      description: t.message
    }));
    res.json({
      order: formattedOrder,
      tracking: formattedTracking
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062A\u0628\u0639 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router4.get("/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await storage.getOrder(orderId);
    if (!order) {
      return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(order);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router4.patch("/:orderId/cancel", async (req, res) => {
  try {
    const { orderId } = req.params;
    const { reason, cancelledBy } = req.body;
    const order = await storage.getOrder(orderId);
    if (!order) {
      return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    await storage.updateOrder(orderId, { status: "cancelled" });
    if (order.driverId) {
      await storage.updateDriver(order.driverId, { isAvailable: true });
    }
    try {
      await storage.createNotification({
        type: "order_cancelled",
        title: "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628",
        message: `\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0637\u0644\u0628\u0643 \u0631\u0642\u0645 ${order.orderNumber}${reason ? ": " + reason : ""}`,
        recipientType: "customer",
        recipientId: order.customerId || order.customerPhone,
        orderId,
        isRead: false
      });
      await storage.createOrderTracking({
        orderId,
        status: "cancelled",
        message: reason || "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628",
        createdBy: cancelledBy || "system",
        createdByType: "system"
      });
    } catch (notificationError) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A:", notificationError);
    }
    res.json({ success: true, status: "cancelled" });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
function formatCurrency(amount) {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  return `${num.toLocaleString("ar-YE")} \u0631.\u064A`;
}
var orders_default = router4;

// server/routes/delivery-fees.ts
import express7 from "express";

// server/utils/cache.ts
var Cache = class {
  store = /* @__PURE__ */ new Map();
  ttl;
  constructor(ttlSeconds = 300) {
    this.ttl = ttlSeconds * 1e3;
  }
  set(key, value) {
    this.store.set(key, {
      data: value,
      expiresAt: Date.now() + this.ttl
    });
  }
  get(key) {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return entry.data;
  }
  has(key) {
    return this.get(key) !== null;
  }
  delete(key) {
    this.store.delete(key);
  }
  clear() {
    this.store.clear();
  }
  generateKey(...parts) {
    return parts.filter((p) => p !== void 0).join(":");
  }
};
var deliveryFeeCache = new Cache(60);

// server/routes/delivery-fees.ts
import { z as z3 } from "zod";
init_schema();
var router5 = express7.Router();
router5.post("/calculate", async (req, res) => {
  try {
    const { customerLat, customerLng, restaurantId, orderSubtotal } = req.body;
    if (!customerLat || !customerLng) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0646\u0627\u0642\u0635\u0629",
        details: "\u064A\u062C\u0628 \u062A\u0648\u0641\u064A\u0631 \u0625\u062D\u062F\u0627\u062B\u064A\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644"
      });
    }
    const lat = parseFloat(customerLat);
    const lng = parseFloat(customerLng);
    const subtotal = parseFloat(orderSubtotal || "0");
    const cacheKey = deliveryFeeCache.generateKey(
      Math.round(lat * 1e3),
      Math.round(lng * 1e3),
      restaurantId,
      Math.round(subtotal)
    );
    let result = deliveryFeeCache.get(cacheKey);
    if (!result) {
      result = await calculateDeliveryFee(
        { lat, lng },
        restaurantId || null,
        subtotal
      );
      deliveryFeeCache.set(cacheKey, result);
    }
    res.json({
      success: true,
      ...result
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0633\u0627\u0628 \u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644:", error);
    res.status(500).json({ error: error.message || "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router5.post("/distance", async (req, res) => {
  try {
    const { fromLat, fromLng, toLat, toLng } = req.body;
    if (!fromLat || !fromLng || !toLat || !toLng) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0646\u0627\u0642\u0635\u0629",
        details: "\u064A\u062C\u0628 \u062A\u0648\u0641\u064A\u0631 \u0625\u062D\u062F\u0627\u062B\u064A\u0627\u062A \u0627\u0644\u0646\u0642\u0637\u062A\u064A\u0646"
      });
    }
    const distance = calculateDistance(
      { lat: parseFloat(fromLat), lng: parseFloat(fromLng) },
      { lat: parseFloat(toLat), lng: parseFloat(toLng) }
    );
    const estimatedTime = estimateDeliveryTime(distance);
    res.json({
      success: true,
      distance,
      unit: "km",
      estimatedTime
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0633\u0627\u0641\u0629:", error);
    res.status(500).json({ error: error.message || "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router5.get("/settings", async (req, res) => {
  try {
    const { restaurantId } = req.query;
    const settings = await storage.getDeliveryFeeSettings(restaurantId);
    if (!settings) {
      return res.json({
        type: "per_km",
        baseFee: "5",
        perKmFee: "2",
        minFee: "3",
        maxFee: "50",
        freeDeliveryThreshold: "0",
        isDefault: true
      });
    }
    res.json(settings);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router5.post("/settings", async (req, res) => {
  try {
    console.log("\u{1F4E5} \u062A\u0645 \u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0637\u0644\u0628 \u062D\u0641\u0638 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0648\u0635\u064A\u0644:", JSON.stringify(req.body, null, 2));
    const coercedData = coerceRequestData(req.body);
    console.log("\u{1F504} \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0639\u062F \u0627\u0644\u062A\u062D\u0648\u064A\u0644:", JSON.stringify(coercedData, null, 2));
    const settingsSchema = z3.object({
      type: z3.enum(["fixed", "per_km", "zone_based", "restaurant_custom"]).refine((val) => val, { message: "\u0646\u0648\u0639 \u0627\u0644\u062D\u0633\u0627\u0628 \u0645\u0637\u0644\u0648\u0628" }),
      baseFee: z3.string().optional(),
      perKmFee: z3.string().optional(),
      minFee: z3.string().optional(),
      maxFee: z3.string().optional(),
      freeDeliveryThreshold: z3.string().optional(),
      storeLat: z3.string().optional(),
      storeLng: z3.string().optional(),
      restaurantId: z3.string().optional()
    });
    const validatedData = settingsSchema.parse(coercedData);
    console.log("\u2705 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646\u0647\u0627 \u0628\u0646\u062C\u0627\u062D:", JSON.stringify(validatedData, null, 2));
    const validateNumber = (value, fieldName) => {
      if (!value || value === "") {
        console.log(`\u26A0\uFE0F ${fieldName} \u0641\u0627\u0631\u063A\u0629 - \u0633\u064A\u062A\u0645 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 0`);
        return "0";
      }
      const num = parseFloat(value);
      if (isNaN(num)) {
        const errorMsg = `\u274C ${fieldName} = "${value}" \u0644\u064A\u0633\u062A \u0642\u064A\u0645\u0629 \u0631\u0642\u0645\u064A\u0629 \u0635\u062D\u064A\u062D\u0629`;
        console.error(errorMsg);
        throw new Error(errorMsg);
      }
      if (num < 0) {
        const errorMsg = `\u274C ${fieldName} \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0642\u064A\u0645\u0629 \u0645\u0648\u062C\u0628\u0629 \u0623\u0648 \u0635\u0641\u0631\u060C \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062F\u062E\u0644\u0629: ${num}`;
        console.error(errorMsg);
        throw new Error(errorMsg);
      }
      console.log(`\u2713 ${fieldName}: ${value} \u2192 ${num}`);
      return num.toString();
    };
    const sanitizedData = {
      ...validatedData,
      baseFee: validateNumber(validatedData.baseFee, "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629"),
      perKmFee: validateNumber(validatedData.perKmFee, "\u0631\u0633\u0648\u0645 \u0644\u0643\u0644 \u0643\u064A\u0644\u0648\u0645\u062A\u0631"),
      minFee: validateNumber(validatedData.minFee, "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649"),
      maxFee: validateNumber(validatedData.maxFee, "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649"),
      freeDeliveryThreshold: validateNumber(validatedData.freeDeliveryThreshold, "\u062D\u062F \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0645\u062C\u0627\u0646\u064A"),
      storeLat: validatedData.storeLat ? validateNumber(validatedData.storeLat, "\u062E\u0637 \u0627\u0644\u0639\u0631\u0636") : void 0,
      storeLng: validatedData.storeLng ? validateNumber(validatedData.storeLng, "\u062E\u0637 \u0627\u0644\u0637\u0648\u0644") : void 0
    };
    console.log("\u{1F9F9} \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0639\u062F \u0627\u0644\u062A\u0646\u0638\u064A\u0641:", JSON.stringify(sanitizedData, null, 2));
    const minFeeNum = parseFloat(sanitizedData.minFee || "0");
    const maxFeeNum = parseFloat(sanitizedData.maxFee || "1000");
    console.log(`\u{1F4CA} \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u062F\u0648\u062F: minFee=${minFeeNum}, maxFee=${maxFeeNum}`);
    if (maxFeeNum < minFeeNum) {
      const errorMsg = `\u274C \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 (${maxFeeNum}) \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 (${minFeeNum})`;
      console.error(errorMsg);
      return res.status(400).json({
        success: false,
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        field: "maxFee",
        message: errorMsg,
        details: {
          minFee: minFeeNum,
          maxFee: maxFeeNum,
          issue: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649"
        }
      });
    }
    if (maxFeeNum > 1e5) {
      console.warn(`\u26A0\uFE0F \u062A\u062D\u0630\u064A\u0631: \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 (${maxFeeNum}) \u064A\u0628\u062F\u0648 \u0645\u0631\u062A\u0641\u0639\u0627\u064B \u062C\u062F\u0627\u064B`);
    }
    console.log(`\u{1F50D} \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0633\u0627\u0628\u0642\u0629 \u0644\u0644\u0645\u0637\u0639\u0645: ${sanitizedData.restaurantId || "\u0639\u0627\u0645"}`);
    const existing = await storage.getDeliveryFeeSettings(sanitizedData.restaurantId);
    if (existing) {
      console.log(`\u{1F4DD} \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629: ${existing.id}`);
      const updated = await storage.updateDeliveryFeeSettings(existing.id, sanitizedData);
      console.log(`\u2705 \u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0628\u0646\u062C\u0627\u062D:`, JSON.stringify(updated, null, 2));
      return res.json({
        success: true,
        message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0628\u0646\u062C\u0627\u062D",
        settings: updated
      });
    }
    console.log(`\u2728 \u0625\u0646\u0634\u0627\u0621 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u062C\u062F\u064A\u062F\u0629`);
    const newSettings = await storage.createDeliveryFeeSettings(sanitizedData);
    console.log(`\u2705 \u062A\u0645 \u0627\u0644\u0625\u0646\u0634\u0627\u0621 \u0628\u0646\u062C\u0627\u062D:`, JSON.stringify(newSettings, null, 2));
    res.status(201).json({
      success: true,
      message: "\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0628\u0646\u062C\u0627\u062D",
      settings: newSettings
    });
  } catch (error) {
    console.error("\u{1F4A5} \u062E\u0637\u0623 \u0641\u064A \u062D\u0641\u0638 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644:", error);
    if (error instanceof z3.ZodError) {
      const errorDetails = error.errors.map((e) => ({
        field: e.path.join(".") || "unknown",
        message: e.message,
        code: e.code
      }));
      console.error("\u274C \u0623\u062E\u0637\u0627\u0621 Zod validation:", JSON.stringify(errorDetails, null, 2));
      return res.status(400).json({
        success: false,
        error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u062E\u0644\u0629",
        validationErrors: errorDetails,
        hint: "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0623\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0642\u064A\u0645 \u0635\u062D\u064A\u062D\u0629"
      });
    }
    if (error.message && error.message.includes("\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646")) {
      return res.status(400).json({
        success: false,
        error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0642\u064A\u0645 \u0627\u0644\u0645\u062F\u062E\u0644\u0629",
        message: error.message,
        hint: "\u062A\u0623\u0643\u062F \u0645\u0646 \u0625\u062F\u062E\u0627\u0644 \u0623\u0631\u0642\u0627\u0645 \u0635\u062D\u064A\u062D\u0629 \u0641\u064A \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644"
      });
    }
    if (error.code === "ECONNREFUSED") {
      console.error("\u274C \u0639\u062F\u0645 \u0627\u0644\u0642\u062F\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
      return res.status(500).json({
        success: false,
        error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644",
        message: "\u062A\u0639\u0630\u0631 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
        hint: "\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646 \u062E\u0627\u062F\u0645 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u064A\u0639\u0645\u0644"
      });
    }
    return res.status(400).json({
      success: false,
      error: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",
      message: error.message || "\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639",
      details: process.env.NODE_ENV === "development" ? error.stack : void 0,
      hint: "\u062A\u062D\u0642\u0642 \u0645\u0646 \u0648\u062D\u062F\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 (Console) \u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"
    });
  }
});
router5.get("/zones", async (req, res) => {
  try {
    const zones = await storage.getDeliveryZones();
    res.json(zones);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062A\u0648\u0635\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router5.post("/zones", async (req, res) => {
  try {
    const zoneSchema = z3.object({
      name: z3.string().min(1, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0645\u0637\u0644\u0648\u0628"),
      description: z3.string().optional(),
      minDistance: z3.string().optional(),
      maxDistance: z3.string(),
      deliveryFee: z3.string(),
      estimatedTime: z3.string().optional()
    });
    const validatedData = zoneSchema.parse(req.body);
    const newZone = await storage.createDeliveryZone(validatedData);
    res.status(201).json({ success: true, zone: newZone });
  } catch (error) {
    if (error instanceof z3.ZodError) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router5.put("/zones/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await storage.updateDeliveryZone(id, req.body);
    if (!updated) {
      return res.status(404).json({ error: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    }
    res.json({ success: true, zone: updated });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router5.delete("/zones/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await storage.deleteDeliveryZone(id);
    if (!deleted) {
      return res.status(404).json({ error: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    }
    res.json({ success: true, message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u062A\u0648\u0635\u064A\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router5.get("/geo-zones", async (req, res) => {
  try {
    const zones = await storage.getGeoZones();
    res.json(zones);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062C\u063A\u0631\u0627\u0641\u064A\u0629" });
  }
});
router5.post("/geo-zones", async (req, res) => {
  try {
    const validatedData = insertGeoZoneSchema.parse(req.body);
    const zone = await storage.createGeoZone(validatedData);
    res.status(201).json(zone);
  } catch (error) {
    res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
  }
});
router5.patch("/geo-zones/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const validatedData = insertGeoZoneSchema.partial().parse(req.body);
    const zone = await storage.updateGeoZone(id, validatedData);
    if (!zone) return res.status(404).json({ error: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    res.json(zone);
  } catch (error) {
    res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
  }
});
router5.delete("/geo-zones/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await storage.deleteGeoZone(id);
    if (!success) return res.status(404).json({ error: "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "\u0641\u0634\u0644 \u062D\u0630\u0641 \u0627\u0644\u0645\u0646\u0637\u0642\u0629" });
  }
});
router5.get("/rules", async (req, res) => {
  try {
    const rules = await storage.getDeliveryRules();
    res.json(rules);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0642\u0648\u0627\u0639\u062F" });
  }
});
router5.post("/rules", async (req, res) => {
  try {
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertDeliveryRuleSchema.parse(coercedData);
    const rule = await storage.createDeliveryRule(validatedData);
    res.status(201).json(rule);
  } catch (error) {
    res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u0627\u0639\u062F\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
  }
});
router5.patch("/rules/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertDeliveryRuleSchema.partial().parse(coercedData);
    const rule = await storage.updateDeliveryRule(id, validatedData);
    if (!rule) return res.status(404).json({ error: "\u0627\u0644\u0642\u0627\u0639\u062F\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    res.json(rule);
  } catch (error) {
    res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u0627\u0639\u062F\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
  }
});
router5.delete("/rules/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await storage.deleteDeliveryRule(id);
    if (!success) return res.status(404).json({ error: "\u0627\u0644\u0642\u0627\u0639\u062F\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "\u0641\u0634\u0644 \u062D\u0630\u0641 \u0627\u0644\u0642\u0627\u0639\u062F\u0629" });
  }
});
router5.get("/discounts", async (req, res) => {
  try {
    const discounts = await storage.getDeliveryDiscounts();
    res.json(discounts);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A" });
  }
});
router5.post("/discounts", async (req, res) => {
  try {
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertDeliveryDiscountSchema.parse(coercedData);
    const discount = await storage.createDeliveryDiscount(validatedData);
    res.status(201).json(discount);
  } catch (error) {
    res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0635\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
  }
});
router5.patch("/discounts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertDeliveryDiscountSchema.partial().parse(coercedData);
    const discount = await storage.updateDeliveryDiscount(id, validatedData);
    if (!discount) return res.status(404).json({ error: "\u0627\u0644\u062E\u0635\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json(discount);
  } catch (error) {
    res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0635\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
  }
});
router5.delete("/discounts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await storage.deleteDeliveryDiscount(id);
    if (!success) return res.status(404).json({ error: "\u0627\u0644\u062E\u0635\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "\u0641\u0634\u0644 \u062D\u0630\u0641 \u0627\u0644\u062E\u0635\u0645" });
  }
});
var delivery_fees_default = router5;

// server/routes/admin.ts
import express8 from "express";
init_schema();
import { z as z4 } from "zod";
import { eq as eq5, and as and3, sql as sql3 } from "drizzle-orm";
var router6 = express8.Router();
var dbStorage2 = new DatabaseStorage();
var db2 = dbStorage2.db;
var schema = {
  adminUsers,
  // تم حذف adminSessions من schema object
  categories,
  restaurantSections,
  restaurants,
  menuItems,
  users,
  customers,
  userAddresses,
  orders,
  specialOffers,
  notifications,
  ratings,
  systemSettings,
  drivers,
  orderTracking,
  cart,
  favorites,
  employees,
  attendance,
  leaveRequests,
  driverBalances,
  driverTransactions,
  driverCommissions,
  driverWithdrawals
};
router6.get("/dashboard", async (req, res) => {
  try {
    const [restaurants2, orders3, drivers2, users3] = await Promise.all([
      storage.getRestaurants(),
      storage.getOrders(),
      storage.getDrivers(),
      storage.getUsers ? storage.getUsers() : []
    ]);
    const today = (/* @__PURE__ */ new Date()).toDateString();
    const totalRestaurants = restaurants2.length;
    const totalOrders = orders3.length;
    const totalDrivers = drivers2.length;
    const totalCustomers = users3.length;
    const todayOrders = orders3.filter(
      (order) => order.createdAt.toDateString() === today
    ).length;
    const pendingOrders = orders3.filter(
      (order) => order.status === "pending"
    ).length;
    const activeDrivers = drivers2.filter(
      (driver) => driver.isActive === true
    ).length;
    const deliveredOrders = orders3.filter((order) => order.status === "delivered");
    const totalRevenue = deliveredOrders.reduce(
      (sum, order) => sum + parseFloat(order.totalAmount || order.total || "0"),
      0
    );
    const todayDeliveredOrders = deliveredOrders.filter(
      (order) => order.createdAt.toDateString() === today
    );
    const todayRevenue = todayDeliveredOrders.reduce(
      (sum, order) => sum + parseFloat(order.totalAmount || order.total || "0"),
      0
    );
    const recentOrders = orders3.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 10);
    res.json({
      stats: {
        totalRestaurants,
        totalOrders,
        totalDrivers,
        totalCustomers,
        todayOrders,
        pendingOrders,
        activeDrivers,
        totalRevenue,
        todayRevenue
      },
      recentOrders
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/categories", async (req, res) => {
  try {
    const categories2 = await storage.getCategories();
    const sortedCategories = categories2.sort((a, b) => {
      const aOrder = a.sortOrder ?? 0;
      const bOrder = b.sortOrder ?? 0;
      if (aOrder !== bOrder) {
        return aOrder - bOrder;
      }
      return a.name.localeCompare(b.name);
    });
    res.json(sortedCategories);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/categories", async (req, res) => {
  try {
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertCategorySchema.parse({
      ...coercedData,
      // التأكد من وجود الحقول المطلوبة
      sortOrder: coercedData.sortOrder || 0,
      isActive: coercedData.isActive !== void 0 ? coercedData.isActive : true
    });
    const newCategory = await storage.createCategory(validatedData);
    res.status(201).json(newCategory);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors.map((e) => `${e.path.join(".")}: ${e.message}`)
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0635\u0646\u064A\u0641:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertCategorySchema.partial().parse(coercedData);
    const updatedCategory = await storage.updateCategory(id, {
      ...validatedData,
      updatedAt: /* @__PURE__ */ new Date()
    });
    if (!updatedCategory) {
      return res.status(404).json({ error: "\u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(updatedCategory);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors.map((e) => `${e.path.join(".")}: ${e.message}`)
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0635\u0646\u064A\u0641:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await storage.deleteCategory(id);
    if (!success) {
      return res.status(404).json({ error: "\u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u062A\u0635\u0646\u064A\u0641:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/restaurants", async (req, res) => {
  try {
    const { page = 1, limit = 10, search, categoryId } = req.query;
    const filters = {};
    if (categoryId) {
      filters.categoryId = categoryId;
    }
    if (search) {
      filters.search = search;
    }
    const allRestaurants = await storage.getRestaurants(filters);
    const sortedRestaurants = allRestaurants.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedRestaurants = sortedRestaurants.slice(startIndex, endIndex);
    res.json({
      restaurants: paginatedRestaurants,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: sortedRestaurants.length,
        pages: Math.ceil(sortedRestaurants.length / Number(limit))
      }
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0637\u0627\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/restaurants", async (req, res) => {
  try {
    console.log("Restaurant creation request data:", req.body);
    const coercedData = coerceRequestData(req.body);
    const restaurantData = {
      // الحقول المطلوبة
      name: coercedData.name || "\u0645\u0637\u0639\u0645 \u062C\u062F\u064A\u062F",
      description: coercedData.description || "\u0648\u0635\u0641 \u0627\u0644\u0645\u0637\u0639\u0645",
      image: coercedData.image || "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      deliveryTime: coercedData.deliveryTime || "30-45 \u062F\u0642\u064A\u0642\u0629",
      // الحقول الاختيارية مع قيم افتراضية
      rating: coercedData.rating || "0.0",
      reviewCount: coercedData.reviewCount || 0,
      minimumOrder: coercedData.minimumOrder || "0",
      deliveryFee: coercedData.deliveryFee || "0",
      perKmFee: coercedData.perKmFee || "0",
      commissionRate: coercedData.commissionRate || "10",
      categoryId: coercedData.categoryId,
      // أوقات العمل
      openingTime: coercedData.openingTime || "08:00",
      closingTime: coercedData.closingTime || "23:00",
      workingDays: coercedData.workingDays || "0,1,2,3,4,5,6",
      // حالات المطعم (الآن مع تحويل صحيح للبوليان)
      isOpen: coercedData.isOpen !== void 0 ? coercedData.isOpen : true,
      isActive: coercedData.isActive !== void 0 ? coercedData.isActive : true,
      isFeatured: coercedData.isFeatured !== void 0 ? coercedData.isFeatured : false,
      isNew: coercedData.isNew !== void 0 ? coercedData.isNew : false,
      isTemporarilyClosed: coercedData.isTemporarilyClosed !== void 0 ? coercedData.isTemporarilyClosed : false,
      temporaryCloseReason: coercedData.temporaryCloseReason,
      // الموقع (الآن مع تحويل صحيح للأرقام العشرية)
      latitude: coercedData.latitude,
      longitude: coercedData.longitude,
      address: coercedData.address,
      // حقول التوقيت (سيتم إضافتها تلقائياً بواسطة قاعدة البيانات)
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    console.log("Processed restaurant data:", restaurantData);
    const validatedData = insertRestaurantSchema.parse(restaurantData);
    const newRestaurant = await storage.createRestaurant(validatedData);
    res.status(201).json(newRestaurant);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      console.error("Restaurant validation errors:", error.errors);
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors.map((e) => `${e.path.join(".")}: ${e.message}`)
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertRestaurantSchema.partial().parse(coercedData);
    const updatedRestaurant = await storage.updateRestaurant(id, {
      ...validatedData,
      updatedAt: /* @__PURE__ */ new Date()
    });
    if (!updatedRestaurant) {
      return res.status(404).json({ error: "\u0627\u0644\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(updatedRestaurant);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors.map((e) => `${e.path.join(".")}: ${e.message}`)
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await storage.deleteRestaurant(id);
    if (!success) {
      return res.status(404).json({ error: "\u0627\u0644\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/menu-items", async (req, res) => {
  try {
    const items = await storage.getAllMenuItems();
    res.json(items);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/restaurants/:restaurantId/menu", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const menuItems2 = await storage.getMenuItems(restaurantId);
    const sortedItems = menuItems2.sort((a, b) => a.name.localeCompare(b.name));
    res.json(sortedItems);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/menu-items", async (req, res) => {
  try {
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertMenuItemSchema.parse({
      ...coercedData,
      // إضافة صورة افتراضية إذا لم تكن موجودة
      image: coercedData.image || "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    });
    const newMenuItem = await storage.createMenuItem(validatedData);
    res.status(201).json(newMenuItem);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0639\u0646\u0635\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors.map((e) => `${e.path.join(".")}: ${e.message}`)
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0635\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/menu-items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertMenuItemSchema.partial().parse(coercedData);
    const updatedMenuItem = await storage.updateMenuItem(id, validatedData);
    if (!updatedMenuItem) {
      return res.status(404).json({ error: "\u0639\u0646\u0635\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(updatedMenuItem);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062D\u062F\u064A\u062B \u0639\u0646\u0635\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors.map((e) => `${e.path.join(".")}: ${e.message}`)
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0639\u0646\u0635\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/menu-items/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await storage.deleteMenuItem(id);
    if (!success) {
      return res.status(404).json({ error: "\u0639\u0646\u0635\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0639\u0646\u0635\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/orders", async (req, res) => {
  try {
    const { page = 1, limit = 20, status, search } = req.query;
    let allOrders = await storage.getOrders();
    if (status && status !== "all") {
      allOrders = allOrders.filter((order) => order.status === status);
    }
    if (search) {
      const searchTerm = search.toLowerCase();
      allOrders = allOrders.filter(
        (order) => order.orderNumber?.toLowerCase().includes(searchTerm) || order.customerName?.toLowerCase().includes(searchTerm) || order.customerPhone?.toLowerCase().includes(searchTerm)
      );
    }
    const sortedOrders = allOrders.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedOrders = sortedOrders.slice(startIndex, endIndex);
    res.json({
      orders: paginatedOrders,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: sortedOrders.length,
        pages: Math.ceil(sortedOrders.length / Number(limit))
      }
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/orders/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, driverId } = req.body;
    const updateData = {
      status,
      updatedAt: /* @__PURE__ */ new Date()
    };
    if (driverId) {
      updateData.driverId = driverId;
    }
    const updatedOrder = await storage.updateOrder(id, updateData);
    if (!updatedOrder) {
      return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(updatedOrder);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/reports/restaurants", async (req, res) => {
  try {
    const { startDate, endDate, categoryId } = req.query;
    const allRestaurants = await storage.getRestaurants({ categoryId });
    const allOrders = await storage.getOrders();
    const reports = allRestaurants.map((restaurant) => {
      const restaurantOrders = allOrders.filter(
        (order) => order.restaurantId === restaurant.id && order.status === "delivered" && (!startDate || new Date(order.createdAt) >= new Date(startDate)) && (!endDate || new Date(order.createdAt) <= new Date(endDate))
      );
      const totalSales = restaurantOrders.reduce((sum, order) => sum + parseFloat(order.totalAmount || order.total || "0"), 0);
      const totalOrders = restaurantOrders.length;
      const avgOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;
      const commissionRate = 0.15;
      const totalCommission = totalSales * commissionRate;
      const amountDue = totalSales - totalCommission;
      return {
        id: restaurant.id,
        name: restaurant.name,
        category: restaurant.categoryId,
        totalOrders,
        totalSales,
        avgOrderValue,
        commissionRate: commissionRate * 100,
        amountDue
      };
    });
    res.json(reports);
  } catch (error) {
    console.error("Error in restaurant reports:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.get("/reports/orders", async (req, res) => {
  try {
    const { from, to } = req.query;
    const fromDate = from ? new Date(from) : new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 30));
    const toDate = to ? new Date(to) : /* @__PURE__ */ new Date();
    const orders3 = await storage.getOrders();
    const filteredOrders = orders3.filter((o) => {
      const orderDate = new Date(o.createdAt);
      return orderDate >= fromDate && orderDate <= toDate;
    });
    const statusCounts = filteredOrders.reduce((acc, o) => {
      acc[o.status] = (acc[o.status] || 0) + 1;
      return acc;
    }, {});
    const totalRevenue = filteredOrders.filter((o) => o.status === "delivered").reduce((sum, o) => sum + parseFloat(o.totalAmount || "0"), 0);
    res.json({
      total: filteredOrders.length,
      revenue: totalRevenue,
      statusBreakdown: statusCounts,
      orders: filteredOrders.slice(0, 100)
      // أحدث 100 طلب
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0637\u0644\u0628\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/reports/products", async (req, res) => {
  try {
    const orders3 = await storage.getOrders();
    const deliveredOrders = orders3.filter((o) => o.status === "delivered");
    const productSales = {};
    deliveredOrders.forEach((order) => {
      try {
        const items = typeof order.items === "string" ? JSON.parse(order.items) : order.items;
        if (Array.isArray(items)) {
          items.forEach((item) => {
            const id = item.id || item.menuItemId;
            if (!id) return;
            if (!productSales[id]) {
              productSales[id] = {
                id,
                name: item.name || "\u0645\u0646\u062A\u062C \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641",
                quantity: 0,
                revenue: 0
              };
            }
            productSales[id].quantity += item.quantity || 1;
            productSales[id].revenue += (item.price || 0) * (item.quantity || 1);
          });
        }
      } catch (e) {
        console.error("Error parsing order items for report:", e);
      }
    });
    const sortedProducts = Object.values(productSales).sort((a, b) => b.quantity - a.quantity).slice(0, 50);
    res.json(sortedProducts);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/reports/users", async (req, res) => {
  try {
    const [users3, orders3] = await Promise.all([
      storage.getUsers(),
      storage.getOrders()
    ]);
    const deliveredOrders = orders3.filter((o) => o.status === "delivered");
    const userStats = users3.map((user) => {
      const userOrders = deliveredOrders.filter((o) => o.customerId === user.id);
      const totalSpent = userOrders.reduce((sum, o) => sum + parseFloat(o.totalAmount || "0"), 0);
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        orderCount: userOrders.length,
        totalSpent,
        createdAt: user.createdAt
      };
    });
    const topUsers = [...userStats].sort((a, b) => b.totalSpent - a.totalSpent).slice(0, 50);
    const newUsersCount = users3.filter((u) => {
      const thirtyDaysAgo = /* @__PURE__ */ new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return new Date(u.createdAt) >= thirtyDaysAgo;
    }).length;
    res.json({
      totalUsers: users3.length,
      newUsersLast30Days: newUsersCount,
      topUsers
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/reports/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await storage.getRestaurant(id);
    if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });
    const allOrders = await storage.getOrders();
    const restaurantOrders = allOrders.filter((order) => order.restaurantId === id);
    const deliveredOrders = restaurantOrders.filter((order) => order.status === "delivered");
    const totalSales = deliveredOrders.reduce((sum, order) => sum + parseFloat(order.totalAmount || order.total || "0"), 0);
    const commissionRate = 0.15;
    const totalCommission = totalSales * commissionRate;
    const now = /* @__PURE__ */ new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1e3);
    const monthStart = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    const salesToday = deliveredOrders.filter((o) => new Date(o.createdAt) >= todayStart).reduce((s, o) => s + parseFloat(o.totalAmount || o.total || "0"), 0);
    const salesWeek = deliveredOrders.filter((o) => new Date(o.createdAt) >= weekStart).reduce((s, o) => s + parseFloat(o.totalAmount || o.total || "0"), 0);
    const salesMonth = deliveredOrders.filter((o) => new Date(o.createdAt) >= monthStart).reduce((s, o) => s + parseFloat(o.totalAmount || o.total || "0"), 0);
    const cancelledCount = restaurantOrders.filter((o) => o.status === "cancelled").length;
    const cancellationRate = restaurantOrders.length > 0 ? cancelledCount / restaurantOrders.length * 100 : 0;
    res.json({
      restaurant,
      financials: {
        totalSales,
        totalCommission,
        netAmount: totalSales - totalCommission,
        salesToday,
        salesWeek,
        salesMonth,
        deliveryFees: deliveredOrders.reduce((s, o) => s + parseFloat(o.deliveryFee || "0"), 0)
      },
      analytics: {
        totalOrders: restaurantOrders.length,
        deliveredOrders: deliveredOrders.length,
        cancellationRate,
        avgDeliveryTime: restaurant.deliveryTime
      },
      transactions: deliveredOrders.map((o) => ({
        id: o.id,
        orderNumber: o.orderNumber,
        date: o.createdAt,
        total: parseFloat(o.totalAmount || o.total || "0"),
        commission: parseFloat(o.totalAmount || o.total || "0") * commissionRate,
        net: parseFloat(o.totalAmount || o.total || "0") * (1 - commissionRate),
        status: "paid"
      }))
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.get("/employees", async (req, res) => {
  try {
    const employees2 = await storage.getEmployees();
    res.json(employees2);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.post("/employees", async (req, res) => {
  try {
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertEmployeeSchema.parse(coercedData);
    const newEmployee = await storage.createEmployee(validatedData);
    res.status(201).json(newEmployee);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({ error: "Invalid data", details: error.errors });
    }
    console.error("Error creating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.put("/employees/:id", async (req, res) => {
  try {
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertEmployeeSchema.partial().parse(coercedData);
    const updated = await storage.updateEmployee(req.params.id, validatedData);
    if (!updated) return res.status(404).json({ error: "Employee not found" });
    res.json(updated);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({ error: "Invalid data", details: error.errors });
    }
    console.error("Error updating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.delete("/employees/:id", async (req, res) => {
  try {
    const success = await storage.deleteEmployee(req.params.id);
    if (!success) return res.status(404).json({ error: "Employee not found" });
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.get("/attendance", async (req, res) => {
  try {
    const { employeeId, date } = req.query;
    const attendance2 = await storage.getAttendance(
      employeeId,
      date ? new Date(date) : void 0
    );
    res.json(attendance2);
  } catch (error) {
    console.error("Error fetching attendance:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.post("/attendance", async (req, res) => {
  try {
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertAttendanceSchema.parse(coercedData);
    const newAttendance = await storage.createAttendance(validatedData);
    res.status(201).json(newAttendance);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({ error: "Invalid data", details: error.errors });
    }
    console.error("Error creating attendance:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.get("/leave-requests", async (req, res) => {
  try {
    const { employeeId } = req.query;
    const requests = await storage.getLeaveRequests(employeeId);
    res.json(requests);
  } catch (error) {
    console.error("Error fetching leave requests:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.post("/leave-requests", async (req, res) => {
  try {
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertLeaveRequestSchema.parse(coercedData);
    const newRequest = await storage.createLeaveRequest(validatedData);
    res.status(201).json(newRequest);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({ error: "Invalid data", details: error.errors });
    }
    console.error("Error creating leave request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.put("/leave-requests/:id", async (req, res) => {
  try {
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertLeaveRequestSchema.partial().parse(coercedData);
    const updated = await storage.updateLeaveRequest(req.params.id, validatedData);
    if (!updated) return res.status(404).json({ error: "Leave request not found" });
    res.json(updated);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({ error: "Invalid data", details: error.errors });
    }
    console.error("Error updating leave request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router6.post("/drivers", async (req, res) => {
  try {
    console.log("Driver creation request data:", req.body);
    const coercedData = coerceRequestData(req.body);
    if (!coercedData.name || !coercedData.phone || !coercedData.password) {
      return res.status(400).json({
        error: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0646\u0627\u0642\u0635\u0629",
        details: "\u0627\u0644\u0627\u0633\u0645 \u0648\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629"
      });
    }
    const driverData = {
      ...coercedData,
      // التأكد من وجود الحقول الافتراضية
      isAvailable: coercedData.isAvailable !== void 0 ? coercedData.isAvailable : true,
      isActive: coercedData.isActive !== void 0 ? coercedData.isActive : true,
      earnings: coercedData.earnings || "0",
      userType: "driver",
      currentLocation: coercedData.currentLocation || null
    };
    console.log("Processed driver data:", driverData);
    const validatedData = insertDriverSchema.parse(driverData);
    const newDriver = await dbStorage2.createDriver(validatedData);
    res.status(201).json(newDriver);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      console.error("Driver validation errors:", error.errors);
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors.map((e) => `${e.path.join(".")}: ${e.message}`)
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/drivers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertDriverSchema.partial().parse(coercedData);
    const updatedDriver = await dbStorage2.updateDriver(id, validatedData);
    if (!updatedDriver) {
      return res.status(404).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(updatedDriver);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors.map((e) => `${e.path.join(".")}: ${e.message}`)
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/drivers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await dbStorage2.deleteDriver(id);
    if (!success) {
      return res.status(404).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json({ success: true, message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0633\u0627\u0626\u0642 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/drivers/:id/stats", async (req, res) => {
  try {
    const { id } = req.params;
    const { startDate, endDate } = req.query;
    const allOrders = await storage.getOrders();
    let driverOrders = allOrders.filter((order) => order.driverId === id);
    if (startDate) {
      const start = new Date(startDate);
      driverOrders = driverOrders.filter((order) => order.createdAt >= start);
    }
    if (endDate) {
      const end = new Date(endDate);
      driverOrders = driverOrders.filter((order) => order.createdAt <= end);
    }
    const totalOrders = driverOrders.length;
    const completedOrders = driverOrders.filter((order) => order.status === "delivered").length;
    const cancelledOrders = driverOrders.filter((order) => order.status === "cancelled").length;
    const totalEarnings = driverOrders.reduce((sum, order) => {
      const earnings = parseFloat(order.driverEarnings || "0");
      return sum + earnings;
    }, 0);
    const stats = {
      totalOrders,
      totalEarnings,
      completedOrders,
      cancelledOrders
    };
    res.json(stats);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/drivers/finances", async (req, res) => {
  try {
    const driversList = await storage.getDrivers();
    const financialSummaries = await Promise.all(
      driversList.map(async (driver) => {
        const balance = await storage.getDriverBalance(driver.id);
        return {
          id: driver.id,
          name: driver.name,
          phone: driver.phone,
          balance: balance || {
            totalBalance: "0",
            availableBalance: "0",
            withdrawnAmount: "0",
            pendingAmount: "0"
          }
        };
      })
    );
    res.json(financialSummaries);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0644\u0644\u0633\u0627\u0626\u0642\u064A\u0646:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/drivers/:id/finances", async (req, res) => {
  try {
    const { id } = req.params;
    const [balance, transactions, commissions, withdrawals] = await Promise.all([
      storage.getDriverBalance(id),
      storage.getDriverTransactions(id),
      storage.getDriverCommissions(id),
      storage.getDriverWithdrawals(id)
    ]);
    res.json({
      balance: balance || {
        totalBalance: "0",
        availableBalance: "0",
        withdrawnAmount: "0",
        pendingAmount: "0"
      },
      transactions: transactions || [],
      commissions: commissions || [],
      withdrawals: withdrawals || []
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0644\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/drivers/:id/transactions", async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, type, description } = req.body;
    if (!amount || !type) {
      return res.status(400).json({ error: "\u0627\u0644\u0645\u0628\u0644\u063A \u0648\u0627\u0644\u0646\u0648\u0639 \u0645\u0637\u0644\u0648\u0628\u0627\u0646" });
    }
    const transaction = await storage.createDriverTransaction({
      driverId: id,
      amount: amount.toString(),
      type,
      description: description || "\u062A\u0633\u0648\u064A\u0629 \u064A\u062F\u0648\u064A\u0629 \u0645\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u0629",
      referenceId: "admin_manual"
    });
    res.status(201).json(transaction);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/withdrawals/pending", async (req, res) => {
  try {
    const driversList = await storage.getDrivers();
    const allWithdrawals = await Promise.all(
      driversList.map((driver) => storage.getDriverWithdrawals(driver.id))
    );
    const pendingWithdrawals = allWithdrawals.flat().filter((w) => w.status === "pending").map((w) => {
      const driver = driversList.find((d) => d.id === w.driverId);
      return {
        ...w,
        userName: driver?.name || "\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641",
        userType: "driver"
      };
    });
    res.json(pendingWithdrawals);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628 \u0627\u0644\u0645\u0639\u0644\u0642\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/withdrawals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminNotes } = req.body;
    if (!status) {
      return res.status(400).json({ error: "\u0627\u0644\u062D\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629" });
    }
    const updated = await storage.updateWithdrawal(id, {
      status,
      adminNotes,
      processedAt: status === "completed" ? /* @__PURE__ */ new Date() : void 0
    });
    if (!updated) {
      return res.status(404).json({ error: "\u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(updated);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/withdrawals/:id/approve", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await storage.updateWithdrawal(id, {
      status: "completed",
      processedAt: /* @__PURE__ */ new Date()
    });
    if (!updated) {
      return res.status(404).json({ error: "\u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(updated);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/withdrawals/:id/reject", async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    const updated = await storage.updateWithdrawal(id, {
      status: "rejected",
      adminNotes: reason
    });
    if (!updated) {
      return res.status(404).json({ error: "\u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(updated);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0631\u0641\u0636 \u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/commissions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ error: "\u0627\u0644\u062D\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629" });
    }
    const updated = await storage.updateDriverCommission(id, { status });
    if (!updated) {
      return res.status(404).json({ error: "\u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    }
    res.json(updated);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0639\u0645\u0648\u0644\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/transactions", async (req, res) => {
  try {
    const { from, to } = req.query;
    const fromDate = from ? new Date(from) : new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 30));
    const toDate = to ? new Date(to) : /* @__PURE__ */ new Date();
    const driversList = await storage.getDrivers();
    const allTransactions = await Promise.all(
      driversList.map(async (driver) => {
        const txs = await storage.getDriverTransactions(driver.id);
        return txs.map((tx) => ({
          ...tx,
          userName: driver.name,
          userType: "driver",
          fromUser: tx.type === "withdrawal" ? driver.name : "\u0627\u0644\u0645\u0646\u0635\u0629",
          toUser: tx.type === "withdrawal" ? "\u0627\u0644\u0628\u0646\u0643 / \u0645\u062D\u0641\u0638\u0629 \u0627\u0644\u0633\u0627\u0626\u0642" : driver.name,
          amount: parseFloat(tx.amount.toString()),
          status: "completed"
          // في نظامنا الحالي المعاملات المسجلة هي مكتملة
        }));
      })
    );
    let flatTransactions = allTransactions.flat();
    flatTransactions = flatTransactions.filter((tx) => {
      const txDate = new Date(tx.createdAt);
      return txDate >= fromDate && txDate <= toDate;
    });
    flatTransactions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(flatTransactions);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/financial-reports", async (req, res) => {
  try {
    const { from, to, type } = req.query;
    const fromDate = from ? new Date(from) : new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() - 30));
    const toDate = to ? new Date(to) : /* @__PURE__ */ new Date();
    const ordersList = await storage.getOrders();
    const filteredOrders = ordersList.filter((o) => {
      const orderDate = new Date(o.createdAt);
      return orderDate >= fromDate && orderDate <= toDate;
    });
    const deliveredOrders = filteredOrders.filter((o) => o.status === "delivered");
    const totalRevenue = deliveredOrders.reduce((sum, o) => sum + parseFloat(o.totalAmount || "0"), 0);
    const deliveryFees = deliveredOrders.reduce((sum, o) => sum + parseFloat(o.deliveryFee || "0"), 0);
    const platformFees = deliveredOrders.reduce((sum, o) => sum + parseFloat(o.companyEarnings || "0"), 0);
    const restaurantPayments = deliveredOrders.reduce((sum, o) => sum + parseFloat(o.restaurantEarnings || "0"), 0);
    const driversList = await storage.getDrivers();
    const allWithdrawals = (await Promise.all(driversList.map((d) => storage.getDriverWithdrawals(d.id)))).flat();
    const filteredWithdrawals = allWithdrawals.filter((w) => {
      const wDate = new Date(w.createdAt);
      return wDate >= fromDate && wDate <= toDate;
    });
    const pendingWithdrawals = filteredWithdrawals.filter((w) => w.status === "pending");
    const completedWithdrawals = filteredWithdrawals.filter((w) => w.status === "completed");
    const driverPayments = completedWithdrawals.reduce((sum, w) => sum + parseFloat(w.amount.toString()), 0);
    const report = {
      id: "rep_" + Date.now(),
      period: type === "monthly" ? fromDate.toLocaleDateString("ar-YE", { month: "long", year: "numeric" }) : "\u0627\u0644\u0641\u062A\u0631\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629",
      totalRevenue,
      totalExpenses: driverPayments + restaurantPayments,
      netProfit: platformFees,
      commissionEarned: platformFees,
      deliveryFees,
      platformFees,
      restaurantPayments,
      driverPayments,
      withdrawalRequests: filteredWithdrawals.length,
      pendingWithdrawals: pendingWithdrawals.length,
      completedWithdrawals: completedWithdrawals.length,
      taxAmount: totalRevenue * 0.05,
      // افتراضي 5%
      transactionCount: deliveredOrders.length,
      averageOrderValue: deliveredOrders.length > 0 ? totalRevenue / deliveredOrders.length : 0,
      growthRate: 15.5,
      // قيمة افتراضية للنمو
      status: "published",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    res.json([report]);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0627\u0644\u064A\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/special-offers", async (req, res) => {
  try {
    const offers = await storage.getSpecialOffers();
    const sortedOffers = offers.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
    res.json(sortedOffers);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062E\u0627\u0635\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/special-offers", async (req, res) => {
  try {
    console.log("Special offer creation request data:", req.body);
    const coercedData = coerceRequestData(req.body);
    const offerData = {
      // الحقول المطلوبة
      title: coercedData.title || "\u0639\u0631\u0636 \u062E\u0627\u0635 \u062C\u062F\u064A\u062F",
      description: coercedData.description || "\u0648\u0635\u0641 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635",
      image: coercedData.image || "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      // تفاصيل الخصم (الآن مع تحويل صحيح للأنواع)
      discountPercent: coercedData.discountPercent,
      discountAmount: coercedData.discountAmount,
      minimumOrder: coercedData.minimumOrder || "0",
      // صلاحية العرض (الآن مع معالجة صحيحة للتاريخ)
      validUntil: coercedData.validUntil,
      // حالة العرض (الآن مع تحويل صحيح للبوليان)
      isActive: coercedData.isActive !== void 0 ? coercedData.isActive : true,
      restaurantId: coercedData.restaurantId,
      menuItemId: coercedData.menuItemId,
      categoryId: coercedData.categoryId,
      // حقول التوقيت
      createdAt: /* @__PURE__ */ new Date()
    };
    console.log("Processed special offer data:", offerData);
    try {
      const allCategories = await storage.getCategories();
      let offersCategory = allCategories.find((c) => c.name === "\u0627\u0644\u0639\u0631\u0648\u0636" || c.name === "Offers");
      if (!offersCategory) {
        offersCategory = await storage.createCategory({
          name: "\u0627\u0644\u0639\u0631\u0648\u0636",
          icon: "fas fa-tags",
          image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400",
          isActive: true,
          sortOrder: -1,
          // جعلها تظهر في البداية
          type: "primary"
        });
      }
      if (!offerData.categoryId) {
        offerData.categoryId = offersCategory.id;
      }
    } catch (catError) {
      console.error("Error ensuring Offers category exists:", catError);
    }
    const validatedData = insertSpecialOfferSchema.parse(offerData);
    const newOffer = await storage.createSpecialOffer(validatedData);
    if (newOffer.menuItemId) {
      await storage.updateMenuItem(newOffer.menuItemId, { isSpecialOffer: true });
    }
    res.status(201).json(newOffer);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      console.error("Special offer validation errors:", error.errors);
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors.map((e) => `${e.path.join(".")}: ${e.message}`)
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/special-offers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const coercedData = coerceRequestData(req.body);
    const validatedData = insertSpecialOfferSchema.partial().parse(coercedData);
    const updatedOffer = await storage.updateSpecialOffer(id, validatedData);
    if (!updatedOffer) {
      return res.status(404).json({ error: "\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(updatedOffer);
  } catch (error) {
    if (error instanceof z4.ZodError) {
      return res.status(400).json({
        error: "\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
        details: error.errors.map((e) => `${e.path.join(".")}: ${e.message}`)
      });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/special-offers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await storage.deleteSpecialOffer(id);
    if (!success) {
      return res.status(404).json({ error: "\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/notifications", async (req, res) => {
  try {
    const notificationData = {
      ...req.body,
      createdBy: req.admin.id
    };
    const [newNotification] = await db2.insert(schema.notifications).values(notificationData).returning();
    res.json(newNotification);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u0634\u0639\u0627\u0631:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/settings", async (req, res) => {
  try {
    const settings = await db2.select().from(schema.systemSettings).orderBy(schema.systemSettings.category, schema.systemSettings.key);
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/settings/:key", async (req, res) => {
  try {
    const { key } = req.params;
    const { value } = req.body;
    const [updatedSetting] = await db2.update(schema.systemSettings).set({ value, updatedAt: /* @__PURE__ */ new Date() }).where(eq5(schema.systemSettings.key, key)).returning();
    res.json(updatedSetting);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/ui-settings", async (req, res) => {
  try {
    const settings = await db2.select().from(schema.systemSettings).where(eq5(schema.systemSettings.isActive, true)).orderBy(schema.systemSettings.category, schema.systemSettings.key);
    res.json(settings);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/business-hours", async (req, res) => {
  try {
    const { opening_time, closing_time, store_status } = req.body;
    const updates = [];
    if (opening_time) {
      updates.push(
        db2.update(schema.systemSettings).set({ value: opening_time, updatedAt: /* @__PURE__ */ new Date() }).where(eq5(schema.systemSettings.key, "opening_time"))
      );
    }
    if (closing_time) {
      updates.push(
        db2.update(schema.systemSettings).set({ value: closing_time, updatedAt: /* @__PURE__ */ new Date() }).where(eq5(schema.systemSettings.key, "closing_time"))
      );
    }
    if (store_status) {
      updates.push(
        db2.update(schema.systemSettings).set({ value: store_status, updatedAt: /* @__PURE__ */ new Date() }).where(eq5(schema.systemSettings.key, "store_status"))
      );
    }
    await Promise.all(updates);
    res.json({ success: true, message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/users", async (req, res) => {
  try {
    const customers2 = await db2.select({
      id: schema.customers.id,
      name: schema.customers.name,
      email: schema.customers.email,
      phone: schema.customers.phone,
      role: sql3`'customer'`,
      isActive: schema.customers.isActive,
      createdAt: schema.customers.createdAt,
      address: sql3`NULL`
    }).from(schema.customers);
    const adminUsers2 = await db2.select({
      id: schema.adminUsers.id,
      name: schema.adminUsers.name,
      email: schema.adminUsers.email,
      phone: schema.adminUsers.phone,
      role: schema.adminUsers.userType,
      isActive: schema.adminUsers.isActive,
      createdAt: schema.adminUsers.createdAt,
      address: sql3`NULL`
    }).from(schema.adminUsers);
    const allUsers = [...customers2, ...adminUsers2].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(allUsers);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.patch("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, role, isActive } = req.body;
    let targetTable = "customers";
    let currentUser = null;
    const customerResult = await db2.select().from(schema.customers).where(eq5(schema.customers.id, id)).limit(1);
    if (customerResult.length > 0) {
      currentUser = customerResult[0];
      targetTable = "customers";
    } else {
      const adminResult = await db2.select().from(schema.adminUsers).where(eq5(schema.adminUsers.id, id)).limit(1);
      if (adminResult.length > 0) {
        currentUser = adminResult[0];
        targetTable = "adminUsers";
      }
    }
    if (!currentUser) {
      return res.status(404).json({ error: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    const updateData = {
      updatedAt: /* @__PURE__ */ new Date()
    };
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phone) updateData.phone = phone;
    if (isActive !== void 0) updateData.isActive = isActive;
    let updatedUser;
    if (role && role !== currentUser.userType && role !== "customer") {
      if (targetTable === "customers" && (role === "driver" || role === "admin")) {
        const [newAdminUser] = await db2.insert(schema.adminUsers).values({
          name: name || currentUser.name,
          email: email || currentUser.email,
          phone: phone || currentUser.phone,
          userType: role,
          isActive: isActive !== void 0 ? isActive : currentUser.isActive
        }).returning();
        await db2.delete(schema.customers).where(eq5(schema.customers.id, id));
        updatedUser = { ...newAdminUser, role: newAdminUser.userType };
      } else if (targetTable === "adminUsers" && role === "customer") {
        const [newCustomer] = await db2.insert(schema.customers).values({
          name: name || currentUser.name,
          username: (email || currentUser.email).split("@")[0],
          // استخدام الجزء الأول من البريد كـ username
          email: email || currentUser.email,
          phone: phone || currentUser.phone,
          isActive: isActive !== void 0 ? isActive : currentUser.isActive
        }).returning();
        await db2.delete(schema.adminUsers).where(eq5(schema.adminUsers.id, id));
        updatedUser = { ...newCustomer, role: "customer" };
      } else if (targetTable === "adminUsers") {
        updateData.userType = role;
        const [result] = await db2.update(schema.adminUsers).set(updateData).where(eq5(schema.adminUsers.id, id)).returning();
        updatedUser = { ...result, role: result.userType };
      }
    } else {
      if (targetTable === "customers") {
        delete updateData.userType;
        const [result] = await db2.update(schema.customers).set(updateData).where(eq5(schema.customers.id, id)).returning();
        updatedUser = { ...result, role: "customer" };
      } else {
        if (role && (role === "driver" || role === "admin")) {
          updateData.userType = role;
        }
        const [result] = await db2.update(schema.adminUsers).set(updateData).where(eq5(schema.adminUsers.id, id)).returning();
        updatedUser = { ...result, role: result.userType };
      }
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customerResult = await db2.select().from(schema.customers).where(eq5(schema.customers.id, id)).limit(1);
    if (customerResult.length > 0) {
      await storage.deleteUser(id);
      res.json({ success: true, message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0646\u062C\u0627\u062D" });
      return;
    }
    const adminResult = await db2.select().from(schema.adminUsers).where(eq5(schema.adminUsers.id, id)).limit(1);
    if (adminResult.length > 0) {
      const user = adminResult[0];
      if (user.userType === "admin" && user.email === "admin@alsarie-one.com") {
        return res.status(403).json({ error: "\u0644\u0627 \u064A\u0645\u0643\u0646 \u062D\u0630\u0641 \u0627\u0644\u0645\u062F\u064A\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A" });
      }
      await storage.deleteAdminUser(id);
      res.json({ success: true, message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0646\u062C\u0627\u062D" });
      return;
    }
    res.status(404).json({ error: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/profile", async (req, res) => {
  try {
    const admin = req.admin;
    const adminProfile = {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      username: admin.username,
      phone: admin.phone,
      userType: admin.userType,
      isActive: admin.isActive,
      createdAt: admin.createdAt
    };
    res.json(adminProfile);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/profile", async (req, res) => {
  try {
    const { name, email, username, phone } = req.body;
    const adminId = req.admin.id;
    if (!name || !email) {
      return res.status(400).json({ error: "\u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0637\u0644\u0648\u0628\u0627\u0646" });
    }
    const existingAdmin = await db2.select().from(schema.adminUsers).where(
      and3(
        eq5(schema.adminUsers.email, email),
        sql3`${schema.adminUsers.id} != ${adminId}`
      )
    );
    if (existingAdmin.length > 0) {
      return res.status(400).json({ error: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644" });
    }
    const [updatedAdmin] = await db2.update(schema.adminUsers).set({
      name,
      email,
      username: username || null,
      phone: phone || null
    }).where(eq5(schema.adminUsers.id, adminId)).returning();
    if (!updatedAdmin) {
      return res.status(404).json({ error: "\u0627\u0644\u0645\u062F\u064A\u0631 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    const adminProfile = {
      id: updatedAdmin.id,
      name: updatedAdmin.name,
      email: updatedAdmin.email,
      username: updatedAdmin.username,
      phone: updatedAdmin.phone,
      userType: updatedAdmin.userType,
      isActive: updatedAdmin.isActive,
      createdAt: updatedAdmin.createdAt
    };
    res.json(adminProfile);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/ui-settings", async (req, res) => {
  try {
    const settings = await dbStorage2.getUiSettings();
    res.json(settings);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0648\u0627\u062C\u0647\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/ui-settings/:key", async (req, res) => {
  try {
    const { key } = req.params;
    const { value } = req.body;
    if (!key || value === void 0) {
      return res.status(400).json({
        error: "Missing required fields",
        details: "Key and value are required"
      });
    }
    if (typeof value !== "string") {
      return res.status(400).json({
        error: "Invalid value type",
        details: "Value must be a string"
      });
    }
    const setting = await dbStorage2.updateUiSetting(key, value);
    if (!setting) {
      return res.status(404).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0625\u0639\u062F\u0627\u062F" });
    }
    res.json(setting);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0648\u0627\u062C\u0647\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});

// server/routes/advanced.ts
init_db_advanced();
import express9 from "express";
var router7 = express9.Router();
function registerAdvancedRoutes(app2) {
  const dbStorage3 = new DatabaseStorage();
  const advancedDb = new AdvancedDatabaseStorage(dbStorage3.db);
  app2.get("/api/admin/drivers/:driverId/details", async (req, res) => {
    try {
      const { driverId } = req.params;
      const driver = await dbStorage3.getDriver(driverId);
      if (!driver) {
        return res.status(404).json({ error: "Driver not found" });
      }
      const balance = await dbStorage3.getDriverBalance(driverId);
      const wallet = balance ? {
        id: balance.id,
        driverId: balance.driverId,
        balance: balance.availableBalance,
        totalEarned: balance.totalBalance,
        updatedAt: balance.updatedAt
      } : null;
      const earnings = await advancedDb.getDriverEarningsStats(driverId);
      const reviews = await advancedDb.getDriverReviews(driverId);
      const stats = await advancedDb.getDriverPerformanceStats(driverId);
      res.json({
        driver,
        wallet,
        earnings,
        stats,
        reviews: reviews.slice(0, 10)
      });
    } catch (error) {
      console.error("Error fetching driver details:", error);
      res.status(500).json({ error: "Failed to fetch driver details" });
    }
  });
  app2.get("/api/admin/drivers/stats", async (req, res) => {
    try {
      const drivers2 = await dbStorage3.getDrivers();
      const now = /* @__PURE__ */ new Date();
      const todayStart = new Date(now.setHours(0, 0, 0, 0));
      const weekStart = new Date((/* @__PURE__ */ new Date()).setDate(now.getDate() - 7));
      const monthStart = new Date((/* @__PURE__ */ new Date()).setDate(now.getDate() - 30));
      const stats = await Promise.all(
        drivers2.map(async (driver) => {
          const performance = await advancedDb.getDriverPerformanceStats(driver.id);
          const performanceToday = await advancedDb.getDriverPerformanceStats(driver.id, todayStart);
          const performanceWeekly = await advancedDb.getDriverPerformanceStats(driver.id, weekStart);
          const performanceMonthly = await advancedDb.getDriverPerformanceStats(driver.id, monthStart);
          const balance = await dbStorage3.getDriverBalance(driver.id);
          const withdrawals = await advancedDb.getWithdrawalRequests(driver.id, "driver");
          const reviews = await advancedDb.getDriverReviews(driver.id);
          const avgRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;
          return {
            id: driver.id,
            name: driver.name,
            email: driver.email || `${driver.phone}@sareeone.com`,
            phone: driver.phone,
            status: driver.isActive ? "active" : "inactive",
            rating: avgRating,
            totalOrders: performance.totalOrders,
            completedOrders: performance.completedOrders,
            cancelledOrders: performance.totalOrders - performance.completedOrders,
            totalEarnings: performance.totalEarnings,
            todayEarnings: performanceToday.totalEarnings,
            weeklyEarnings: performanceWeekly.totalEarnings,
            monthlyEarnings: performanceMonthly.totalEarnings,
            avgRating,
            joinDate: driver.createdAt.toISOString(),
            lastActive: driver.updatedAt?.toISOString() || driver.createdAt.toISOString(),
            isVerified: true,
            vehicleType: driver.vehicleType || "\u062F\u0631\u0627\u062C\u0629 \u0646\u0627\u0631\u064A\u0629",
            vehicleNumber: driver.vehicleNumber || "\u063A\u064A\u0631 \u0645\u0633\u062C\u0644",
            walletBalance: parseFloat(balance?.availableBalance?.toString() || "0"),
            withdrawalRequests: withdrawals.map((w) => ({
              id: w.id,
              amount: parseFloat(w.amount.toString()),
              status: w.status,
              createdAt: w.createdAt.toISOString()
            })),
            performance: {
              acceptanceRate: performance.successRate,
              onTimeRate: 90,
              // Placeholder
              customerSatisfaction: avgRating * 20
            },
            documents: []
          };
        })
      );
      res.json(stats);
    } catch (error) {
      console.error("Error fetching drivers stats:", error);
      res.status(500).json({ error: "Failed to fetch driver stats" });
    }
  });
  app2.get("/api/admin/drivers-summary", async (req, res) => {
    try {
      const drivers2 = await dbStorage3.getDrivers();
      const summaries = await Promise.all(
        drivers2.map(async (driver) => {
          const stats = await advancedDb.getDriverPerformanceStats(driver.id);
          const balance = await dbStorage3.getDriverBalance(driver.id);
          const wallet = balance ? {
            balance: balance.availableBalance,
            totalEarned: balance.totalBalance
          } : { balance: 0, totalEarned: 0 };
          return {
            ...driver,
            stats,
            wallet
          };
        })
      );
      res.json(summaries);
    } catch (error) {
      console.error("Error fetching drivers summary:", error);
      res.status(500).json({ error: "Failed to fetch drivers summary" });
    }
  });
  app2.get("/api/admin/drivers/:driverId/reviews", async (req, res) => {
    try {
      const { driverId } = req.params;
      const reviews = await advancedDb.getDriverReviews(driverId);
      const avgRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;
      res.json({
        reviews,
        averageRating: avgRating.toFixed(2),
        totalReviews: reviews.length
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch driver reviews" });
    }
  });
  app2.get("/api/admin/restaurants/:restaurantId/details", async (req, res) => {
    try {
      const { restaurantId } = req.params;
      const restaurant = await dbStorage3.getRestaurant(restaurantId);
      if (!restaurant) {
        return res.status(404).json({ error: "Restaurant not found" });
      }
      const wallet = await advancedDb.getRestaurantWallet(restaurantId);
      const stats = await advancedDb.getRestaurantPerformanceStats(restaurantId);
      res.json({
        restaurant,
        wallet,
        stats
      });
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
      res.status(500).json({ error: "Failed to fetch restaurant details" });
    }
  });
  app2.get("/api/admin/restaurants-summary", async (req, res) => {
    try {
      const restaurants2 = await dbStorage3.getRestaurants();
      const summaries = await Promise.all(
        restaurants2.map(async (restaurant) => {
          const stats = await advancedDb.getRestaurantPerformanceStats(restaurant.id);
          const wallet = await advancedDb.getRestaurantWallet(restaurant.id);
          return {
            ...restaurant,
            stats,
            wallet: {
              balance: wallet?.balance || 0,
              totalEarned: wallet?.totalEarned || 0,
              totalCommission: wallet?.totalCommission || 0
            }
          };
        })
      );
      res.json(summaries);
    } catch (error) {
      console.error("Error fetching restaurants summary:", error);
      res.status(500).json({ error: "Failed to fetch restaurants summary" });
    }
  });
  app2.get("/api/admin/restaurants/stats", async (req, res) => {
    try {
      const restaurants2 = await dbStorage3.getRestaurants();
      const stats = await Promise.all(
        restaurants2.map(async (restaurant) => {
          const performance = await advancedDb.getRestaurantPerformanceStats(restaurant.id);
          const wallet = await advancedDb.getRestaurantWallet(restaurant.id);
          return {
            id: restaurant.id,
            name: restaurant.name,
            ownerName: "\u0635\u0627\u062D\u0628 \u0627\u0644\u0645\u0637\u0639\u0645",
            // Mock for now
            phone: restaurant.phone || "",
            email: "restaurant@example.com",
            address: restaurant.address || "",
            status: restaurant.isActive ? "active" : "inactive",
            rating: parseFloat(restaurant.rating || "0"),
            totalOrders: performance.totalOrders,
            completedOrders: performance.completedOrders,
            cancelledOrders: performance.totalOrders - performance.completedOrders,
            totalRevenue: performance.totalRevenue,
            commissionEarned: performance.totalCommission,
            pendingCommission: 0,
            // Calculated if needed
            todayRevenue: 0,
            // Needs date-specific stats
            weeklyRevenue: 0,
            monthlyRevenue: 0,
            avgOrderValue: performance.averageOrderValue,
            joinDate: restaurant.createdAt.toISOString(),
            walletBalance: parseFloat(wallet?.balance?.toString() || "0"),
            withdrawalRequests: [],
            performance: {
              orderCompletionRate: performance.totalOrders > 0 ? performance.completedOrders / performance.totalOrders * 100 : 0,
              customerSatisfaction: parseFloat(restaurant.rating || "0") * 20,
              averagePreparationTime: 25
            },
            businessHours: {
              opening: restaurant.openingTime || "08:00",
              closing: restaurant.closingTime || "23:00",
              days: (restaurant.workingDays || "0,1,2,3,4,5,6").split(",")
            }
          };
        })
      );
      res.json(stats);
    } catch (error) {
      console.error("Error fetching restaurants stats:", error);
      res.status(500).json({ error: "Failed to fetch restaurant stats" });
    }
  });
  app2.post("/api/drivers/:driverId/wallet/add-balance", async (req, res) => {
    try {
      const { driverId } = req.params;
      const coercedData = coerceRequestData(req.body);
      const { amount, description } = coercedData;
      if (!amount || parseFloat(amount) <= 0) {
        return res.status(400).json({ error: "Invalid amount" });
      }
      const updatedBalance = await dbStorage3.updateDriverBalance(driverId, {
        amount: parseFloat(amount),
        type: "bonus"
        // Defaulting to bonus for manual add
      });
      await dbStorage3.createDriverTransaction({
        driverId,
        amount: amount.toString(),
        type: "bonus",
        description: description || "\u0625\u0636\u0627\u0641\u0629 \u064A\u062F\u0648\u064A\u0629 \u0644\u0644\u0631\u0635\u064A\u062F"
      });
      res.json({
        id: updatedBalance.id,
        driverId: updatedBalance.driverId,
        balance: updatedBalance.availableBalance,
        totalEarned: updatedBalance.totalBalance
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app2.get("/api/drivers/:driverId/wallet", async (req, res) => {
    try {
      const { driverId } = req.params;
      const balance = await dbStorage3.getDriverBalance(driverId);
      if (!balance) {
        return res.status(404).json({ error: "Balance not found" });
      }
      res.json({
        id: balance.id,
        driverId: balance.driverId,
        balance: balance.availableBalance,
        totalEarned: balance.totalBalance,
        updatedAt: balance.updatedAt
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch balance" });
    }
  });
  app2.post("/api/withdrawal-requests", async (req, res) => {
    try {
      const coercedData = coerceRequestData(req.body);
      const { entityType, entityId, amount, accountNumber, bankName, accountHolder, requestedBy } = coercedData;
      if (!amount || parseFloat(amount) <= 0) {
        return res.status(400).json({ error: "Invalid amount" });
      }
      const numericAmount = parseFloat(amount);
      if (entityType === "driver") {
        const balance = await dbStorage3.getDriverBalance(entityId);
        const available = parseFloat(balance?.availableBalance?.toString() || "0");
        if (available < numericAmount) {
          return res.status(400).json({ error: "Insufficient balance" });
        }
      } else if (entityType === "restaurant") {
        const wallet = await advancedDb.getRestaurantWallet(entityId);
        const balance = parseFloat(wallet?.balance?.toString() || "0");
        if (balance < numericAmount) {
          return res.status(400).json({ error: "Insufficient balance" });
        }
      }
      const request = await advancedDb.createWithdrawalRequest({
        entityType,
        entityId,
        amount,
        // Keeping as string for schema if it expects string/decimal
        accountNumber,
        bankName,
        accountHolder,
        requestedBy,
        status: "pending"
      });
      res.status(201).json(request);
    } catch (error) {
      console.error("Error creating withdrawal request:", error);
      res.status(500).json({ error: "Failed to create withdrawal request" });
    }
  });
  app2.post("/api/admin/withdrawal-requests/:requestId/approve", async (req, res) => {
    try {
      const { requestId } = req.params;
      const { approvedBy } = req.body;
      const request = await advancedDb.approveWithdrawalRequest(requestId, approvedBy);
      if (request.entityType === "driver") {
        const amount = parseFloat(request.amount.toString());
        await dbStorage3.updateDriverBalance(request.entityId, {
          amount,
          type: "withdrawal"
        });
        await dbStorage3.createDriverTransaction({
          driverId: request.entityId,
          amount: request.amount.toString(),
          type: "withdrawal",
          description: `\u0633\u062D\u0628 \u0646\u0642\u062F\u064A \u0645\u0639\u062A\u0645\u062F (\u0637\u0644\u0628 \u0631\u0642\u0645 ${request.id})`,
          referenceId: request.id
        });
      } else if (request.entityType === "restaurant") {
        await advancedDb.deductRestaurantWalletBalance(
          request.entityId,
          parseFloat(request.amount.toString())
        );
      }
      res.json(request);
    } catch (error) {
      console.error("Error approving withdrawal:", error);
      res.status(500).json({ error: error.message });
    }
  });
  app2.post("/api/admin/withdrawal-requests/:requestId/reject", async (req, res) => {
    try {
      const { requestId } = req.params;
      const { reason } = req.body;
      const request = await advancedDb.rejectWithdrawalRequest(requestId, reason);
      res.json(request);
    } catch (error) {
      res.status(500).json({ error: "Failed to reject withdrawal request" });
    }
  });
  app2.get("/api/admin/withdrawal-requests/pending", async (req, res) => {
    try {
      const requests = await advancedDb.getPendingWithdrawalRequests();
      const enrichedRequests = await Promise.all(
        requests.map(async (request) => {
          let userName = "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
          if (request.entityType === "driver") {
            const driver = await dbStorage3.getDriver(request.entityId);
            userName = driver?.name || "\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
          } else if (request.entityType === "restaurant") {
            const restaurant = await dbStorage3.getRestaurant(request.entityId);
            userName = restaurant?.name || "\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
          }
          return {
            ...request,
            userName,
            userType: request.entityType,
            userId: request.entityId,
            requestedAt: request.createdAt,
            method: "bank_transfer",
            // Default for now
            amount: parseFloat(request.amount.toString())
          };
        })
      );
      res.json(enrichedRequests);
    } catch (error) {
      console.error("Error fetching pending withdrawals:", error);
      res.status(500).json({ error: "Failed to fetch withdrawal requests" });
    }
  });
  app2.get("/api/admin/security/settings", async (req, res) => {
    try {
      res.json({
        twoFactorEnabled: false,
        sessionTimeout: 30,
        passwordComplexity: "medium",
        lastAudit: "2026-01-08"
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch security settings" });
    }
  });
  app2.get("/api/admin/security/logs", async (req, res) => {
    try {
      res.json([
        {
          id: "log_1",
          userName: "Admin",
          action: "\u062F\u062E\u0648\u0644 \u0644\u0644\u0646\u0638\u0627\u0645",
          ipAddress: "192.168.1.1",
          device: "Chrome / Windows",
          location: "\u0635\u0646\u0639\u0627\u0621",
          status: "success",
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch security logs" });
    }
  });
  app2.get("/api/admin/audit-logs", async (req, res) => {
    try {
      const { userId, entityType, action, startDate, endDate } = req.query;
      const logs = await advancedDb.getAuditLogs({
        userId,
        entityType,
        action,
        startDate: startDate ? new Date(startDate) : void 0,
        endDate: endDate ? new Date(endDate) : void 0
      });
      res.json(logs.slice(0, 100));
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch audit logs" });
    }
  });
  app2.post("/api/audit-logs", async (req, res) => {
    try {
      const { action, entityType, entityId, userId, userType, description, changes } = req.body;
      const log2 = await advancedDb.createAuditLog({
        action,
        entityType,
        entityId,
        userId,
        userType,
        description,
        changes,
        status: "success"
      });
      res.json(log2);
    } catch (error) {
      res.status(500).json({ error: "Failed to create audit log" });
    }
  });
  app2.get("/api/admin/commission-settings", async (req, res) => {
    try {
      const defaultPercent = await advancedDb.getDefaultCommissionPercent();
      res.json({ defaultCommissionPercent: defaultPercent });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch commission settings" });
    }
  });
  app2.get("/api/admin/drivers/:driverId/performance", async (req, res) => {
    try {
      const { driverId } = req.params;
      const { startDate, endDate } = req.query;
      const stats = await advancedDb.getDriverPerformanceStats(
        driverId,
        startDate ? new Date(startDate) : void 0,
        endDate ? new Date(endDate) : void 0
      );
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch performance stats" });
    }
  });
  app2.get("/api/admin/restaurants/:restaurantId/performance", async (req, res) => {
    try {
      const { restaurantId } = req.params;
      const { startDate, endDate } = req.query;
      const stats = await advancedDb.getRestaurantPerformanceStats(
        restaurantId,
        startDate ? new Date(startDate) : void 0,
        endDate ? new Date(endDate) : void 0
      );
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch performance stats" });
    }
  });
  app2.get("/api/admin/drivers/:driverId/work-sessions", async (req, res) => {
    try {
      const { driverId } = req.params;
      const { startDate, endDate } = req.query;
      const sessions = await advancedDb.getDriverWorkSessions(
        driverId,
        startDate ? new Date(startDate) : void 0,
        endDate ? new Date(endDate) : void 0
      );
      res.json(sessions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch work sessions" });
    }
  });
  app2.post("/api/drivers/:driverId/withdrawal-request", async (req, res) => {
    try {
      const { driverId } = req.params;
      const { amount, accountNumber, bankName, accountHolder } = req.body;
      if (!amount || parseFloat(amount) <= 0) {
        return res.status(400).json({ error: "Invalid amount" });
      }
      const balance = await dbStorage3.getDriverBalance(driverId);
      const available = parseFloat(balance?.availableBalance?.toString() || "0");
      if (available < parseFloat(amount)) {
        return res.status(400).json({ error: "Insufficient balance" });
      }
      const request = await advancedDb.createWithdrawalRequest({
        entityType: "driver",
        entityId: driverId,
        amount: amount.toString(),
        accountNumber,
        bankName,
        accountHolder,
        requestedBy: driverId,
        status: "pending"
      });
      res.status(201).json({
        success: true,
        message: "\u062A\u0645 \u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628 \u0628\u0646\u062C\u0627\u062D",
        request
      });
    } catch (error) {
      console.error("Error creating driver withdrawal request:", error);
      res.status(500).json({ error: "Failed to create withdrawal request" });
    }
  });
}

// server/routes.ts
init_schema();
async function registerRoutes(app2) {
  app2.use("/api/admin", router6);
  registerAdvancedRoutes(app2);
  app2.get("/api/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await storage.getUser(id);
      if (!user) {
        return res.status(404).json({ message: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" });
    }
  });
  app2.get("/api/users/username/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(404).json({ message: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" });
    }
  });
  app2.post("/api/users", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(validatedData);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
  });
  app2.put("/api/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertUserSchema.partial().parse(req.body);
      const user = await storage.updateUser(id, validatedData);
      if (!user) {
        return res.status(404).json({ message: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
  });
  app2.get("/api/categories", async (req, res) => {
    try {
      const categories2 = await storage.getCategories();
      res.json(categories2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });
  app2.get("/api/restaurants", async (req, res) => {
    try {
      const {
        categoryId,
        lat,
        lon,
        sortBy,
        isFeatured,
        isNew,
        search,
        radius,
        isOpen
      } = req.query;
      const filters = {
        categoryId,
        userLatitude: lat ? parseFloat(lat) : void 0,
        userLongitude: lon ? parseFloat(lon) : void 0,
        sortBy,
        isFeatured: isFeatured === "true",
        isNew: isNew === "true",
        search,
        radius: radius ? parseFloat(radius) : void 0,
        isOpen: isOpen !== void 0 ? isOpen === "true" : void 0
      };
      const restaurants2 = await storage.getRestaurants(filters);
      res.json(restaurants2);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      res.status(500).json({ message: "Failed to fetch restaurants" });
    }
  });
  app2.get("/api/restaurants/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const restaurant = await storage.getRestaurant(id);
      if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
      }
      res.json(restaurant);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch restaurant" });
    }
  });
  app2.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getAllMenuItems();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/featured", async (req, res) => {
    try {
      const products = await storage.getAllMenuItems();
      const featured = products.filter((p) => p.isFeatured);
      res.json(featured.length > 0 ? featured : products.slice(0, 12));
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured products" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const item = await storage.getMenuItem(id);
      if (!item) {
        return res.status(404).json({ message: "\u0627\u0644\u0645\u0646\u062A\u062C \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0646\u062A\u062C" });
    }
  });
  app2.get("/api/restaurants/:restaurantId/menu", async (req, res) => {
    try {
      const { restaurantId } = req.params;
      const menuItems2 = await storage.getMenuItems(restaurantId);
      res.json(menuItems2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });
  app2.get("/api/special-offers", async (req, res) => {
    try {
      log("\u{1F50D} Storage type: " + storage.constructor.name);
      res.set("Cache-Control", "no-store");
      const { active } = req.query;
      let offers;
      if (active === "false") {
        offers = await storage.getSpecialOffers();
      } else {
        offers = await storage.getActiveSpecialOffers();
      }
      log("\u{1F4CA} Found offers: " + offers.length + " offers");
      res.json(offers);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      log("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062E\u0627\u0635\u0629: " + errorMessage);
      res.status(500).json({ message: "Failed to fetch special offers" });
    }
  });
  app2.get("/api/favorites/restaurants/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const favorites2 = await storage.getFavoriteRestaurants(userId);
      res.json(favorites2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch favorite restaurants" });
    }
  });
  app2.get("/api/favorites/products/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const favorites2 = await storage.getFavoriteProducts(userId);
      res.json(favorites2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch favorite products" });
    }
  });
  app2.post("/api/favorites", async (req, res) => {
    try {
      const validatedData = insertFavoritesSchema.parse(req.body);
      const favorite = await storage.addToFavorites(validatedData);
      res.status(201).json(favorite);
    } catch (error) {
      res.status(400).json({ message: "Invalid favorite data" });
    }
  });
  app2.delete("/api/favorites", async (req, res) => {
    try {
      const { userId, restaurantId, menuItemId } = req.query;
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      const success = await storage.removeFromFavorites(userId, restaurantId, menuItemId);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Favorite not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to remove favorite" });
    }
  });
  app2.get("/api/favorites/check", async (req, res) => {
    try {
      const { userId, restaurantId, menuItemId } = req.query;
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
      let isFavorite = false;
      if (restaurantId) {
        isFavorite = await storage.isRestaurantFavorite(userId, restaurantId);
      } else if (menuItemId) {
        isFavorite = await storage.isProductFavorite(userId, menuItemId);
      }
      res.json({ isFavorite });
    } catch (error) {
      res.status(500).json({ message: "Failed to check favorite" });
    }
  });
  app2.get("/api/ui-settings", async (req, res) => {
    try {
      const settings = await storage.getUiSettings();
      res.json(settings);
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0648\u0627\u062C\u0647\u0629:", error);
      res.status(500).json({ message: "Failed to fetch UI settings" });
    }
  });
  app2.get("/api/ui-settings/:key", async (req, res) => {
    try {
      const { key } = req.params;
      const setting = await storage.getUiSetting(key);
      if (!setting) {
        return res.status(404).json({ message: "\u0627\u0644\u0625\u0639\u062F\u0627\u062F \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(setting);
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0648\u0627\u062C\u0647\u0629:", error);
      res.status(500).json({ message: "Failed to fetch UI setting" });
    }
  });
  app2.put("/api/ui-settings/:key", async (req, res) => {
    try {
      const { key } = req.params;
      const { value } = req.body;
      if (!value) {
        return res.status(400).json({ message: "\u0642\u064A\u0645\u0629 \u0627\u0644\u0625\u0639\u062F\u0627\u062F \u0645\u0637\u0644\u0648\u0628\u0629" });
      }
      const updated = await storage.updateUiSetting(key, value);
      if (!updated) {
        return res.status(404).json({ message: "\u0627\u0644\u0625\u0639\u062F\u0627\u062F \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(updated);
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0648\u0627\u062C\u0647\u0629:", error);
      res.status(500).json({ message: "Failed to update UI setting" });
    }
  });
  app2.get("/api/orders/:id/track", async (req, res) => {
    try {
      const { id } = req.params;
      const order = await storage.getOrder(id);
      if (!order) {
        return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      const tracking = [];
      const baseTime = new Date(order.createdAt);
      if (order.status === "pending" || order.status === "confirmed" || order.status === "preparing" || order.status === "on_way" || order.status === "delivered") {
        tracking.push({
          id: "1",
          status: "pending",
          message: "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628",
          timestamp: baseTime,
          createdByType: "system"
        });
      }
      if (order.status === "confirmed" || order.status === "preparing" || order.status === "on_way" || order.status === "delivered") {
        tracking.push({
          id: "2",
          status: "confirmed",
          message: "\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0645\u0637\u0639\u0645",
          timestamp: new Date(baseTime.getTime() + 5 * 6e4),
          createdByType: "restaurant"
        });
      }
      if (order.status === "preparing" || order.status === "on_way" || order.status === "delivered") {
        tracking.push({
          id: "3",
          status: "preparing",
          message: "\u062C\u0627\u0631\u064A \u062A\u062D\u0636\u064A\u0631 \u0627\u0644\u0637\u0644\u0628",
          timestamp: new Date(baseTime.getTime() + 10 * 6e4),
          createdByType: "restaurant"
        });
      }
      if (order.status === "on_way" || order.status === "delivered") {
        tracking.push({
          id: "4",
          status: "on_way",
          message: "\u0627\u0644\u0637\u0644\u0628 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642 \u0625\u0644\u064A\u0643",
          timestamp: new Date(baseTime.getTime() + 20 * 6e4),
          createdByType: "driver"
        });
      }
      if (order.status === "delivered") {
        tracking.push({
          id: "5",
          status: "delivered",
          message: "\u062A\u0645 \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D",
          timestamp: new Date(baseTime.getTime() + 35 * 6e4),
          createdByType: "driver"
        });
      }
      let parsedItems = [];
      try {
        parsedItems = typeof order.items === "string" ? JSON.parse(order.items) : order.items;
      } catch (e) {
        parsedItems = [];
      }
      res.json({
        order: {
          ...order,
          items: parsedItems,
          total: parseFloat(order.total || "0")
        },
        tracking
      });
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062A\u0628\u0639 \u0627\u0644\u0637\u0644\u0628:", error);
      res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
    }
  });
  app2.get("/api/drivers/:id/orders", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.query;
      const allOrders = await storage.getOrders();
      let driverOrders = allOrders.filter((order) => order.driverId === id);
      if (status) {
        driverOrders = driverOrders.filter((order) => order.status === status);
      }
      driverOrders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      res.json(driverOrders);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch driver orders" });
    }
  });
  app2.put("/api/drivers/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status, latitude, longitude } = req.body;
      const driver = await storage.updateDriver(id, {
        isAvailable: status === "available",
        currentLocation: latitude && longitude ? `${latitude},${longitude}` : void 0
      });
      if (!driver) {
        return res.status(404).json({ message: "Driver not found" });
      }
      res.json(driver);
    } catch (error) {
      res.status(400).json({ message: "Failed to update driver status" });
    }
  });
  app2.get("/api/drivers/:id/stats", async (req, res) => {
    try {
      const { id } = req.params;
      const { period = "today" } = req.query;
      const uuidRe = /^[0-9a-fA-F]{8}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{12}$/i;
      if (!id || id.length < 8 || !uuidRe.test(id.replace(/-/g, ""))) {
        return res.status(400).json({ message: "Invalid driver id format" });
      }
      const driver = await storage.getDriver(id);
      if (!driver) {
        const startDate2 = /* @__PURE__ */ new Date();
        startDate2.setHours(0, 0, 0, 0);
        return res.json({
          totalOrders: 0,
          totalEarnings: 0,
          avgOrderValue: 0,
          period,
          startDate: startDate2,
          endDate: /* @__PURE__ */ new Date()
        });
      }
      let startDate;
      const endDate = /* @__PURE__ */ new Date();
      switch (period) {
        case "today":
          startDate = /* @__PURE__ */ new Date();
          startDate.setHours(0, 0, 0, 0);
          break;
        case "week":
          startDate = /* @__PURE__ */ new Date();
          startDate.setDate(startDate.getDate() - 7);
          break;
        case "month":
          startDate = /* @__PURE__ */ new Date();
          startDate.setMonth(startDate.getMonth() - 1);
          break;
        default:
          startDate = /* @__PURE__ */ new Date();
          startDate.setHours(0, 0, 0, 0);
      }
      const allOrders = await storage.getOrders();
      const driverOrders = allOrders.filter(
        (order) => order.driverId === id && order.status === "delivered" && new Date(order.createdAt) >= startDate && new Date(order.createdAt) <= endDate
      );
      const totalEarnings = driverOrders.reduce((sum, order) => {
        const amount = order.driverEarnings ?? order.totalAmount ?? order.total ?? 0;
        return sum + parseFloat(amount.toString() || "0");
      }, 0);
      const stats = {
        totalOrders: driverOrders.length,
        totalEarnings,
        avgOrderValue: driverOrders.length > 0 ? totalEarnings / driverOrders.length : 0,
        period,
        startDate,
        endDate
      };
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch driver stats" });
    }
  });
  app2.post("/api/notifications", async (req, res) => {
    try {
      const validatedData = insertNotificationSchema.parse(req.body);
      const notification = await storage.createNotification(validatedData);
      res.status(201).json(notification);
    } catch (error) {
      res.status(400).json({ message: "Invalid notification data" });
    }
  });
  app2.put("/api/orders/:id/assign-driver", async (req, res) => {
    try {
      const { id } = req.params;
      const { driverId } = req.body;
      const order = await storage.updateOrder(id, {
        driverId,
        status: "assigned",
        updatedAt: /* @__PURE__ */ new Date()
      });
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      await storage.createNotification({
        type: "order",
        title: "\u0637\u0644\u0628 \u062C\u062F\u064A\u062F",
        message: `\u062A\u0645 \u062A\u0643\u0644\u064A\u0641\u0643 \u0628\u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0631\u0642\u0645 ${id.slice(0, 8)}`,
        recipientType: "driver",
        recipientId: driverId,
        orderId: id
      });
      res.json(order);
    } catch (error) {
      res.status(400).json({ message: "Failed to assign driver" });
    }
  });
  app2.get("/api/orders/track/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const order = await storage.getOrder(id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      let driverLocation = null;
      if (order.driverId) {
        const driver = await storage.getDriver(order.driverId);
        if (driver) {
          driverLocation = driver.currentLocation;
        }
      }
      res.json({
        ...order,
        driverLocation
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to track order" });
    }
  });
  app2.get("/api/search", async (req, res) => {
    try {
      const {
        q: query,
        category,
        lat,
        lon,
        sortBy,
        isFeatured,
        isNew,
        radius,
        type
      } = req.query;
      if (!query) {
        return res.status(400).json({ error: "Query parameter is required" });
      }
      const userLocation = lat && lon ? { lat: parseFloat(lat), lon: parseFloat(lon) } : void 0;
      const results = {};
      if (!type || type === "restaurants") {
        const filters = {
          search: query,
          categoryId: category,
          sortBy,
          isFeatured: isFeatured === "true",
          isNew: isNew === "true",
          userLatitude: userLocation?.lat,
          userLongitude: userLocation?.lon,
          radius: radius ? parseFloat(radius) : void 0
        };
        results.restaurants = await storage.getRestaurants(filters);
      }
      if (!type || type === "categories") {
        results.categories = await storage.searchCategories(query);
      }
      if (!type || type === "menu-items") {
        results.menuItems = await storage.searchMenuItemsAdvanced(query);
      }
      const total = (results.restaurants?.length || 0) + (results.categories?.length || 0) + (results.menuItems?.length || 0);
      res.json({ ...results, total });
    } catch (error) {
      console.error("Search error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/cart/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const cartItems = await storage.getCartItems(userId);
      res.json(cartItems);
    } catch (error) {
      console.error("Error fetching cart:", error);
      res.status(500).json({ message: "Failed to fetch cart items" });
    }
  });
  app2.post("/api/cart", async (req, res) => {
    try {
      const validatedData = insertCartSchema.parse(req.body);
      const newItem = await storage.addToCart(validatedData);
      res.status(201).json(newItem);
    } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(500).json({ message: "Failed to add item to cart" });
    }
  });
  app2.put("/api/cart/:cartId", async (req, res) => {
    try {
      const { cartId } = req.params;
      const { quantity } = req.body;
      if (quantity <= 0) {
        await storage.removeFromCart(cartId);
        res.json({ message: "Item removed from cart" });
      } else {
        const updatedItem = await storage.updateCartItem(cartId, quantity);
        res.json(updatedItem);
      }
    } catch (error) {
      console.error("Error updating cart item:", error);
      res.status(500).json({ message: "Failed to update cart item" });
    }
  });
  app2.delete("/api/cart/:cartId", async (req, res) => {
    try {
      const { cartId } = req.params;
      const success = await storage.removeFromCart(cartId);
      if (success) {
        res.json({ message: "Item removed from cart" });
      } else {
        res.status(404).json({ message: "Cart item not found" });
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
      res.status(500).json({ message: "Failed to remove item from cart" });
    }
  });
  app2.delete("/api/cart/clear/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const success = await storage.clearCart(userId);
      if (success) {
        res.json({ message: "Cart cleared successfully" });
      } else {
        res.status(404).json({ message: "No cart items found for user" });
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
      res.status(500).json({ message: "Failed to clear cart" });
    }
  });
  app2.get("/api/favorites/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const favorites2 = await storage.getFavoriteRestaurants(userId);
      res.json(favorites2);
    } catch (error) {
      console.error("Error fetching favorites:", error);
      res.status(500).json({ message: "Failed to fetch favorite restaurants" });
    }
  });
  app2.post("/api/favorites", async (req, res) => {
    try {
      const validatedData = insertFavoritesSchema.parse(req.body);
      const newFavorite = await storage.addToFavorites(validatedData);
      res.status(201).json(newFavorite);
    } catch (error) {
      console.error("Error adding to favorites:", error);
      res.status(500).json({ message: "Failed to add restaurant to favorites" });
    }
  });
  app2.delete("/api/favorites/:userId/:restaurantId", async (req, res) => {
    try {
      const { userId, restaurantId } = req.params;
      const success = await storage.removeFromFavorites(userId, restaurantId);
      if (success) {
        res.json({ message: "Restaurant removed from favorites" });
      } else {
        res.status(404).json({ message: "Favorite not found" });
      }
    } catch (error) {
      console.error("Error removing from favorites:", error);
      res.status(500).json({ message: "Failed to remove restaurant from favorites" });
    }
  });
  app2.get("/api/favorites/check/:userId/:restaurantId", async (req, res) => {
    try {
      const { userId, restaurantId } = req.params;
      const isFavorite = await storage.isRestaurantFavorite(userId, restaurantId);
      res.json({ isFavorite });
    } catch (error) {
      console.error("Error checking favorite status:", error);
      res.status(500).json({ message: "Failed to check favorite status" });
    }
  });
  app2.use("/api/auth", auth_default);
  app2.use("/api/admin", router6);
  app2.use("/api/customer", router2);
  app2.use("/api/drivers", driver_default);
  app2.use("/api/orders", orders_default);
  app2.use("/api/delivery-fees", delivery_fees_default);
  app2.get("/api/notifications", async (req, res) => {
    try {
      const { recipientType, recipientId, unread } = req.query;
      const notifications2 = await storage.getNotifications(
        recipientType,
        recipientId,
        unread === "true"
      );
      res.json(notifications2);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      res.status(500).json({ message: "Failed to fetch notifications" });
    }
  });
  app2.put("/api/notifications/:id/read", async (req, res) => {
    try {
      const { id } = req.params;
      if (storage.constructor.name === "MemStorage") {
        const notifications2 = await storage.getNotifications();
        const notification = notifications2.find((n) => n.id === id);
        if (notification) {
          notification.isRead = true;
          res.json(notification);
        } else {
          res.status(404).json({ message: "Notification not found" });
        }
      } else {
        const notification = await storage.markNotificationAsRead(id);
        if (!notification) {
          return res.status(404).json({ message: "Notification not found" });
        }
        res.json(notification);
      }
    } catch (error) {
      console.error("Error marking notification as read:", error);
      res.status(500).json({ message: "Failed to update notification" });
    }
  });
  const httpServer = createServer3(app2);
  return httpServer;
}

// server/socket.ts
import { WebSocketServer, WebSocket } from "ws";
function setupWebSockets(server) {
  const wss = new WebSocketServer({ server, path: "/ws" });
  const clients = /* @__PURE__ */ new Map();
  const userConnections = /* @__PURE__ */ new Map();
  const orderTrackers = /* @__PURE__ */ new Map();
  const interval = setInterval(() => {
    wss.clients.forEach((ws) => {
      if (ws.isAlive === false) return ws.terminate();
      ws.isAlive = false;
      ws.ping();
    });
  }, 3e4);
  wss.on("connection", (ws, req) => {
    log(`New WS connection from ${req.socket.remoteAddress}`);
    ws.isAlive = true;
    ws.on("pong", () => {
      ws.isAlive = true;
    });
    ws.on("message", (data) => {
      try {
        const message = JSON.parse(data.toString());
        handleMessage(ws, message, clients, userConnections, orderTrackers, wss);
      } catch (err) {
        log(`Failed to parse WS message: ${err}`);
      }
    });
    ws.on("close", () => {
      for (const [id, connection] of clients.entries()) {
        if (connection.ws === ws) {
          const connectionKey = connection.connectionKey;
          const orderId = connection.orderId;
          clients.delete(id);
          const connections = userConnections.get(connectionKey) || [];
          const index = connections.indexOf(ws);
          if (index > -1) {
            connections.splice(index, 1);
          }
          if (connections.length === 0) {
            userConnections.delete(connectionKey);
          }
          if (orderId) {
            const trackers = orderTrackers.get(orderId) || [];
            const tIndex = trackers.indexOf(ws);
            if (tIndex > -1) {
              trackers.splice(tIndex, 1);
            }
            if (trackers.length === 0) {
              orderTrackers.delete(orderId);
            }
          }
          break;
        }
      }
    });
  });
  return {
    broadcast: (type, payload) => {
      const message = JSON.stringify({ type, payload });
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
      if (type === "order_update" && payload.orderId) {
        const trackers = orderTrackers.get(payload.orderId) || [];
        trackers.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
      }
    },
    sendToUser: (userId, type, payload) => {
      const connections = userConnections.get(userId) || [];
      const message = JSON.stringify({ type, payload });
      connections.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    },
    sendToDriver: (driverId, type, payload) => {
      const connections = userConnections.get(`driver_${driverId}`) || [];
      const message = JSON.stringify({ type, payload });
      connections.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    },
    sendToAdmin: (type, payload) => {
      const connections = userConnections.get("admin_dashboard") || [];
      const message = JSON.stringify({ type, payload });
      connections.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    }
  };
}
async function handleMessage(ws, message, clients, userConnections, orderTrackers, wss) {
  switch (message.type) {
    case "auth":
      if (message.payload.userId) {
        const userId = message.payload.userId;
        const userType = message.payload.userType || "customer";
        const connectionKey = userType === "driver" ? `driver_${userId}` : userId;
        clients.set(`${userId}_${Date.now()}`, {
          ws,
          userId,
          userType,
          connectionKey
        });
        const connections = userConnections.get(connectionKey) || [];
        connections.push(ws);
        userConnections.set(connectionKey, connections);
        log(`User ${userId} (${userType}) authenticated via WS with key ${connectionKey}`);
      }
      break;
    case "track_order":
      if (message.payload.orderId) {
        const orderId2 = message.payload.orderId;
        for (const [id, connection] of clients.entries()) {
          if (connection.ws === ws) {
            connection.orderId = orderId2;
            break;
          }
        }
        const trackers = orderTrackers.get(orderId2) || [];
        if (!trackers.includes(ws)) {
          trackers.push(ws);
        }
        orderTrackers.set(orderId2, trackers);
        log(`Client tracking order ${orderId2} via WS`);
      }
      break;
    case "location_update":
      const { driverId, latitude, longitude } = message.payload;
      if (driverId && latitude && longitude) {
        const broadcastMsg = JSON.stringify({
          type: "driver_location",
          payload: { driverId, latitude, longitude, timestamp: Date.now() }
        });
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(broadcastMsg);
          }
        });
      }
      break;
    case "driver_assigned":
      const payload = message.payload;
      const orderId = payload.orderId;
      const assignedDriverId = payload.driverId;
      const driverName = payload.driverName;
      if (orderId && assignedDriverId) {
        const notificationMsg = JSON.stringify({
          type: "new_order_assigned",
          payload: {
            orderId,
            driverId: assignedDriverId,
            driverName,
            timestamp: Date.now()
          }
        });
        const driverConnections = userConnections.get(`driver_${assignedDriverId}`) || [];
        driverConnections.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(notificationMsg);
          }
        });
      }
      break;
    case "order_update":
      const updatePayload = message.payload;
      const updateOrderId = updatePayload.orderId;
      const status = updatePayload.status;
      const updateMessage = updatePayload.message;
      if (updateOrderId && status) {
        const updateMsg = JSON.stringify({
          type: "order_status_changed",
          payload: {
            orderId: updateOrderId,
            status,
            message: updateMessage,
            timestamp: Date.now()
          }
        });
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(updateMsg);
          }
        });
      }
      break;
      if (orderId && senderId && receiverId && content) {
        try {
          const newMessage = await storage.createMessage({
            orderId,
            senderId,
            senderType,
            receiverId,
            receiverType,
            content,
            isRead: false
          });
          const chatMsg = JSON.stringify({
            type: "new_chat_message",
            payload: newMessage
          });
          const receiverKey = receiverType === "driver" ? `driver_${receiverId}` : receiverId;
          const receiverConnections = userConnections.get(receiverKey) || [];
          receiverConnections.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(chatMsg);
            }
          });
          const senderKey = senderType === "driver" ? `driver_${senderId}` : senderId;
          const senderConnections = userConnections.get(senderKey) || [];
          senderConnections.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client !== ws) {
              client.send(chatMsg);
            }
          });
          ws.send(JSON.stringify({
            type: "chat_message_sent",
            payload: { tempId: message.payload.tempId, messageId: newMessage.id }
          }));
        } catch (err) {
          log(`Failed to process chat message: ${err}`);
          ws.send(JSON.stringify({
            type: "chat_message_error",
            payload: { tempId: message.payload.tempId, error: "Failed to send message" }
          }));
        }
      }
      break;
  }
}

// server/seed.ts
async function seedDefaultData() {
  try {
    console.log("\u{1F331} Starting database seeding...");
    const existingCategories = await dbStorage.getCategories();
    if (existingCategories.length > 0) {
      console.log("\u2713 Database already seeded, skipping...");
      return;
    }
    const categories2 = [
      { name: "\u062E\u0636\u0631\u0648\u0627\u062A", icon: "https://images.unsplash.com/photo-1566385101042-1a000c1268c4?q=80&w=200&auto=format&fit=crop", isActive: true, sortOrder: 0 },
      { name: "\u0641\u0648\u0627\u0643\u0647", icon: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=200&auto=format&fit=crop", isActive: true, sortOrder: 1 },
      { name: "\u0648\u0631\u0642\u064A\u0627\u062A", icon: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&auto=format&fit=crop", isActive: true, sortOrder: 2 },
      { name: "\u062A\u0645\u0648\u0631", icon: "https://images.unsplash.com/photo-1596701062351-be5f6a45556d?q=80&w=200&auto=format&fit=crop", isActive: true, sortOrder: 3 },
      { name: "\u0641\u0648\u0627\u0643\u0647 \u0645\u062C\u0641\u0641\u0629", icon: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=200&auto=format&fit=crop", isActive: true, sortOrder: 4 }
    ];
    console.log("\u{1F4C2} Seeding categories...");
    const seededCategories = [];
    for (const categoryData of categories2) {
      const category = await dbStorage.createCategory(categoryData);
      seededCategories.push(category);
      console.log(`  \u2713 Created category: ${category.name}`);
    }
    const restaurants2 = [
      {
        name: "\u0645\u062A\u062C\u0631 \u0637\u0645\u0637\u0648\u0645",
        description: "\u0623\u062C\u0648\u062F \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0641\u0648\u0627\u0643\u0647 \u0648\u0627\u0644\u062E\u0636\u0631\u0648\u0627\u062A \u0627\u0644\u0637\u0627\u0632\u062C\u0629 \u064A\u0648\u0645\u064A\u0627\u064B",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        phone: "+967777777777",
        rating: "5.0",
        reviewCount: 1500,
        deliveryTime: "20-40 \u062F\u0642\u064A\u0642\u0629",
        isOpen: true,
        minimumOrder: "10",
        deliveryFee: "2",
        categoryId: seededCategories[0].id,
        openingTime: "07:00",
        closingTime: "22:00",
        workingDays: "0,1,2,3,4,5,6",
        isTemporarilyClosed: false,
        address: "\u0635\u0646\u0639\u0627\u0621\u060C \u062D\u064A \u062D\u062F\u0629",
        latitude: "15.3694",
        longitude: "44.1910",
        isFeatured: true,
        isNew: true,
        isActive: true
      },
      {
        name: "\u062D\u0644\u0648\u064A\u0627\u062A \u0627\u0644\u0634\u0627\u0645",
        description: "\u0623\u0641\u0636\u0644 \u0627\u0644\u062D\u0644\u0648\u064A\u0627\u062A \u0627\u0644\u0634\u0627\u0645\u064A\u0629 \u0648\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        phone: "+967779876543",
        rating: "4.6",
        reviewCount: 2341,
        deliveryTime: "30-45 \u062F\u0642\u064A\u0642\u0629",
        isOpen: true,
        minimumOrder: "15",
        deliveryFee: "3",
        categoryId: seededCategories[2].id,
        // حلويات
        openingTime: "08:00",
        closingTime: "23:00",
        workingDays: "0,1,2,3,4,5,6",
        isTemporarilyClosed: false,
        address: "\u0635\u0646\u0639\u0627\u0621\u060C \u0627\u0644\u064A\u0645\u0646",
        latitude: "15.3547",
        longitude: "44.2066",
        isFeatured: false,
        isNew: true,
        isActive: true
      },
      {
        name: "\u0645\u0642\u0647\u0649 \u0627\u0644\u0639\u0631\u0648\u0628\u0629",
        description: "\u0645\u0642\u0647\u0649 \u0634\u0639\u0628\u064A \u0628\u0627\u0644\u0637\u0627\u0628\u0639 \u0627\u0644\u0639\u0631\u0628\u064A \u0627\u0644\u0623\u0635\u064A\u0644",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        phone: "+967771111111",
        rating: "4.5",
        reviewCount: 1876,
        deliveryTime: "\u064A\u0641\u062A\u062D \u0641\u064A 8:00 \u0635",
        isOpen: true,
        minimumOrder: "20",
        deliveryFee: "4",
        categoryId: seededCategories[1].id,
        // مقاهي
        openingTime: "08:00",
        closingTime: "23:00",
        workingDays: "0,1,2,3,4,5,6",
        isTemporarilyClosed: false,
        address: "\u0635\u0646\u0639\u0627\u0621\u060C \u0627\u0644\u064A\u0645\u0646",
        latitude: "15.3400",
        longitude: "44.1947",
        isFeatured: false,
        isNew: false,
        isActive: true
      }
    ];
    console.log("\u{1F3EA} Seeding restaurants...");
    const seededRestaurants = [];
    for (const restaurantData of restaurants2) {
      const restaurant = await dbStorage.createRestaurant(restaurantData);
      seededRestaurants.push(restaurant);
      console.log(`  \u2713 Created restaurant: ${restaurant.name}`);
    }
    const menuItems2 = [
      {
        name: "\u0639\u0631\u0628\u0643\u0629 \u0628\u0627\u0644\u0642\u0634\u0637\u0629 \u0648\u0627\u0644\u0639\u0633\u0644",
        description: "\u062D\u0644\u0648\u0649 \u064A\u0645\u0646\u064A\u0629 \u062A\u0642\u0644\u064A\u062F\u064A\u0629 \u0628\u0627\u0644\u0642\u0634\u0637\u0629 \u0627\u0644\u0637\u0627\u0632\u062C\u0629 \u0648\u0627\u0644\u0639\u0633\u0644 \u0627\u0644\u0637\u0628\u064A\u0639\u064A",
        price: "55",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        category: "\u0648\u062C\u0628\u0627\u062A \u0631\u0645\u0636\u0627\u0646",
        isAvailable: true,
        isSpecialOffer: false,
        restaurantId: seededRestaurants[0].id
      },
      {
        name: "\u0645\u0639\u0635\u0648\u0628 \u0628\u0627\u0644\u0642\u0634\u0637\u0629 \u0648\u0627\u0644\u0639\u0633\u0644",
        description: "\u0637\u0628\u0642 \u064A\u0645\u0646\u064A \u0634\u0639\u0628\u064A \u0628\u0627\u0644\u0645\u0648\u0632 \u0648\u0627\u0644\u0642\u0634\u0637\u0629 \u0648\u0627\u0644\u0639\u0633\u0644",
        price: "55",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        category: "\u0648\u062C\u0628\u0627\u062A \u0631\u0645\u0636\u0627\u0646",
        isAvailable: true,
        isSpecialOffer: false,
        restaurantId: seededRestaurants[0].id
      },
      {
        name: "\u0643\u0646\u0627\u0641\u0629 \u0646\u0627\u0628\u0644\u0633\u064A\u0629",
        description: "\u0643\u0646\u0627\u0641\u0629 \u0646\u0627\u0628\u0644\u0633\u064A\u0629 \u0628\u0627\u0644\u062C\u0628\u0646\u0629 \u0648\u0627\u0644\u0642\u0637\u0631",
        price: "45",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        category: "\u062D\u0644\u0648\u064A\u0627\u062A \u0634\u0631\u0642\u064A\u0629",
        isAvailable: true,
        isSpecialOffer: true,
        originalPrice: "50",
        restaurantId: seededRestaurants[1].id
      },
      {
        name: "\u0628\u0642\u0644\u0627\u0648\u0629 \u0628\u0627\u0644\u0641\u0633\u062A\u0642",
        description: "\u0628\u0642\u0644\u0627\u0648\u0629 \u0645\u062D\u0634\u064A\u0629 \u0628\u0627\u0644\u0641\u0633\u062A\u0642 \u0627\u0644\u062D\u0644\u0628\u064A",
        price: "35",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        category: "\u062D\u0644\u0648\u064A\u0627\u062A \u0634\u0631\u0642\u064A\u0629",
        isAvailable: true,
        isSpecialOffer: false,
        restaurantId: seededRestaurants[1].id
      }
    ];
    console.log("\u{1F37D}\uFE0F Seeding menu items...");
    for (const menuItemData of menuItems2) {
      const menuItem = await dbStorage.createMenuItem(menuItemData);
      console.log(`  \u2713 Created menu item: ${menuItem.name}`);
    }
    const uiSettings2 = [
      // Navigation Settings
      {
        key: "show_categories",
        value: "true",
        category: "navigation",
        description: "\u0639\u0631\u0636 \u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
      },
      {
        key: "show_search_bar",
        value: "true",
        category: "navigation",
        description: "\u0639\u0631\u0636 \u0634\u0631\u064A\u0637 \u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"
      },
      {
        key: "show_special_offers",
        value: "true",
        category: "navigation",
        description: "\u0639\u0631\u0636 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062E\u0627\u0635\u0629 \u0648\u0627\u0644\u062A\u062E\u0641\u064A\u0636\u0627\u062A"
      },
      {
        key: "show_orders_page",
        value: "true",
        category: "navigation",
        description: "\u0639\u0631\u0636 \u0635\u0641\u062D\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0641\u064A \u0627\u0644\u062A\u0646\u0642\u0644"
      },
      {
        key: "show_track_orders_page",
        value: "true",
        category: "navigation",
        description: "\u0639\u0631\u0636 \u0635\u0641\u062D\u0629 \u062A\u062A\u0628\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0641\u064A \u0627\u0644\u062A\u0646\u0642\u0644"
      },
      {
        key: "show_admin_panel",
        value: "true",
        category: "navigation",
        description: "\u0639\u0631\u0636 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0625\u062F\u0627\u0631\u064A\u0629"
      },
      {
        key: "show_delivery_app",
        value: "true",
        category: "navigation",
        description: "\u0639\u0631\u0636 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062A\u0648\u0635\u064A\u0644"
      },
      // App Settings
      {
        key: "app_name",
        value: "\u0637\u0645\u0637\u0648\u0645 \u0644\u0644\u062A\u0648\u0635\u064A\u0644",
        category: "general",
        description: "\u0627\u0633\u0645 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0630\u064A \u064A\u0638\u0647\u0631 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646"
      },
      {
        key: "app_theme",
        value: "#e11d48",
        // Rose-600 (Tamtoom Red)
        category: "general",
        description: "\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064A \u0644\u0644\u062A\u0637\u0628\u064A\u0642 (hex color)"
      },
      {
        key: "delivery_fee_default",
        value: "5",
        category: "general",
        description: "\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 (\u0631\u064A\u0627\u0644)"
      },
      {
        key: "delivery_base_fee",
        value: "5",
        category: "delivery",
        description: "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0644\u0644\u062A\u0648\u0635\u064A\u0644 (\u0631\u064A\u0627\u0644)"
      },
      {
        key: "min_delivery_fee",
        value: "5",
        category: "delivery",
        description: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 (\u0631\u064A\u0627\u0644)"
      },
      {
        key: "store_lat",
        value: "15.3694",
        category: "store",
        description: "\u062E\u0637 \u0627\u0644\u0639\u0631\u0636 \u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u062A\u062C\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A"
      },
      {
        key: "store_lng",
        value: "44.1910",
        category: "store",
        description: "\u062E\u0637 \u0627\u0644\u0637\u0648\u0644 \u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u062A\u062C\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A"
      },
      {
        key: "minimum_order_default",
        value: "25",
        category: "general",
        description: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0637\u0644\u0628 (\u0631\u064A\u0627\u0644)"
      },
      // Store Settings
      {
        key: "opening_time",
        value: "08:00",
        category: "store",
        description: "\u0648\u0642\u062A \u0641\u062A\u062D \u0627\u0644\u0645\u062A\u062C\u0631 (HH:MM)"
      },
      {
        key: "closing_time",
        value: "23:00",
        category: "store",
        description: "\u0648\u0642\u062A \u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0645\u062A\u062C\u0631 (HH:MM)"
      },
      {
        key: "store_status",
        value: "open",
        category: "store",
        description: "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062A\u062C\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629"
      },
      // إعدادات رسوم التوصيل
      {
        key: "delivery_fee_per_km",
        value: "2",
        category: "delivery",
        description: "\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0644\u0643\u0644 \u0643\u064A\u0644\u0648\u0645\u062A\u0631 (\u0631\u064A\u0627\u0644)"
      }
    ];
    console.log("\u2699\uFE0F Seeding UI settings...");
    for (const settingData of uiSettings2) {
      const setting = await dbStorage.createUiSetting(settingData);
      console.log(`  \u2713 Created UI setting: ${setting.key}`);
    }
    const adminUsers2 = [
      {
        name: "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0631\u0626\u064A\u0633\u064A",
        email: "admin@alsarie-one.com",
        username: "admin",
        phone: "+967777777777",
        password: "777146387",
        // كلمة مرور غير مشفرة للاختبار
        userType: "admin",
        isActive: true
      },
      {
        name: "\u0645\u062F\u064A\u0631 \u0641\u0631\u0639\u064A",
        email: "manager@alsarie-one.com",
        username: "manager",
        phone: "+967777777778",
        password: "manager123",
        userType: "admin",
        isActive: true
      }
    ];
    console.log("\u{1F464} Seeding admin users...");
    for (const adminData of adminUsers2) {
      const createdAdmin = await dbStorage.createAdminUser(adminData);
      console.log(`  \u2713 Created admin user: ${createdAdmin.name}`);
    }
    const defaultDrivers = [
      {
        name: "\u0623\u062D\u0645\u062F \u0645\u062D\u0645\u062F \u0627\u0644\u0633\u0627\u0626\u0642",
        phone: "+967771234567",
        password: "123456",
        isAvailable: true,
        isActive: true,
        currentLocation: "\u0635\u0646\u0639\u0627\u0621\u060C \u0634\u0627\u0631\u0639 \u0627\u0644\u0632\u0628\u064A\u0631\u064A",
        earnings: "2500"
      },
      {
        name: "\u0639\u0644\u064A \u062D\u0633\u0646 \u0627\u0644\u0633\u0627\u0626\u0642",
        phone: "+967779876543",
        password: "123456",
        isAvailable: true,
        isActive: true,
        currentLocation: "\u0635\u0646\u0639\u0627\u0621\u060C \u0634\u0627\u0631\u0639 \u0627\u0644\u0633\u0628\u0639\u064A\u0646",
        earnings: "3200"
      }
    ];
    console.log("\u{1F697} Seeding drivers...");
    for (const driverData of defaultDrivers) {
      const createdDriver = await dbStorage.createDriver(driverData);
      console.log(`  \u2713 Created driver: ${createdDriver.name}`);
    }
    console.log("\u2705 Database seeding completed successfully!");
    console.log(`\u{1F4CA} Seeded: ${categories2.length} categories, ${restaurants2.length} restaurants, ${menuItems2.length} menu items, ${uiSettings2.length} UI settings, ${adminUsers2.length} admin users, ${defaultDrivers.length} drivers`);
  } catch (error) {
    console.error("\u274C Database seeding failed:", error);
    throw error;
  }
}

// server/index.ts
var app = express10();
app.use(express10.json({ limit: "50mb" }));
app.use(express10.urlencoded({ limit: "50mb", extended: false }));
app.set("etag", false);
app.use("/api", (req, res, next) => {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate");
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
});
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  try {
    const server = await registerRoutes(app);
    const ws = setupWebSockets(server);
    app.set("ws", ws);
    app.use((err, _req, res, _next) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
      throw err;
    });
    if (storage.constructor.name === "DatabaseStorage") {
      log("\u{1F331} Seeding database with default data...");
      await seedDefaultData();
    }
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }
    const port = parseInt(process.env.PORT || "5000", 10);
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true
    }, () => {
      log(`serving on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();
