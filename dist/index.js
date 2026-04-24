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
var schema_exports = {};
__export(schema_exports, {
  adminUsers: () => adminUsers,
  attendance: () => attendance,
  auditLogs: () => auditLogs,
  cart: () => cart,
  categories: () => categories,
  commissionSettings: () => commissionSettings,
  couponUsages: () => couponUsages,
  coupons: () => coupons,
  customers: () => customers,
  deliveryDiscounts: () => deliveryDiscounts,
  deliveryFeeSettings: () => deliveryFeeSettings,
  deliveryRules: () => deliveryRules,
  deliveryZones: () => deliveryZones,
  deviceTokens: () => deviceTokens,
  driverBalances: () => driverBalances,
  driverCommissions: () => driverCommissions,
  driverEarningsTable: () => driverEarningsTable,
  driverReviews: () => driverReviews,
  driverTransactions: () => driverTransactions,
  driverWallets: () => driverWallets,
  driverWithdrawals: () => driverWithdrawals,
  driverWorkSessions: () => driverWorkSessions,
  drivers: () => drivers,
  employees: () => employees,
  favorites: () => favorites,
  financialReports: () => financialReports,
  geoZones: () => geoZones,
  insertAdminUserSchema: () => insertAdminUserSchema,
  insertAttendanceSchema: () => insertAttendanceSchema,
  insertAuditLogSchema: () => insertAuditLogSchema,
  insertCartSchema: () => insertCartSchema,
  insertCategorySchema: () => insertCategorySchema,
  insertCommissionSettingsSchema: () => insertCommissionSettingsSchema,
  insertCouponSchema: () => insertCouponSchema,
  insertCouponUsageSchema: () => insertCouponUsageSchema,
  insertDeliveryDiscountSchema: () => insertDeliveryDiscountSchema,
  insertDeliveryFeeSettingsSchema: () => insertDeliveryFeeSettingsSchema,
  insertDeliveryRuleSchema: () => insertDeliveryRuleSchema,
  insertDeliveryZoneSchema: () => insertDeliveryZoneSchema,
  insertDriverBalanceSchema: () => insertDriverBalanceSchema,
  insertDriverCommissionSchema: () => insertDriverCommissionSchema,
  insertDriverEarningsSchema: () => insertDriverEarningsSchema,
  insertDriverReviewSchema: () => insertDriverReviewSchema,
  insertDriverSchema: () => insertDriverSchema,
  insertDriverTransactionSchema: () => insertDriverTransactionSchema,
  insertDriverWalletSchema: () => insertDriverWalletSchema,
  insertDriverWithdrawalSchema: () => insertDriverWithdrawalSchema,
  insertDriverWorkSessionSchema: () => insertDriverWorkSessionSchema,
  insertEmployeeSchema: () => insertEmployeeSchema,
  insertFavoritesSchema: () => insertFavoritesSchema,
  insertFinancialReportSchema: () => insertFinancialReportSchema,
  insertGeoZoneSchema: () => insertGeoZoneSchema,
  insertLeaveRequestSchema: () => insertLeaveRequestSchema,
  insertMenuItemSchema: () => insertMenuItemSchema,
  insertMessageSchema: () => insertMessageSchema,
  insertNotificationSchema: () => insertNotificationSchema,
  insertOrderSchema: () => insertOrderSchema,
  insertPaymentGatewaySchema: () => insertPaymentGatewaySchema,
  insertPaymentMethodDocumentSchema: () => insertPaymentMethodDocumentSchema,
  insertPaymentMethodSchema: () => insertPaymentMethodSchema,
  insertRatingSchema: () => insertRatingSchema,
  insertRestaurantEarningsSchema: () => insertRestaurantEarningsSchema,
  insertRestaurantSchema: () => insertRestaurantSchema,
  insertRestaurantSectionSchema: () => insertRestaurantSectionSchema,
  insertRestaurantWalletSchema: () => insertRestaurantWalletSchema,
  insertSpecialOfferSchema: () => insertSpecialOfferSchema,
  insertSystemSettingsSchema: () => insertSystemSettingsSchema,
  insertUiSettingsSchema: () => insertUiSettingsSchema,
  insertUserAddressSchema: () => insertUserAddressSchema,
  insertUserSchema: () => insertUserSchema,
  insertWalletSchema: () => insertWalletSchema,
  insertWalletTransactionSchema: () => insertWalletTransactionSchema,
  insertWasalniRequestSchema: () => insertWasalniRequestSchema,
  insertWithdrawalRequestSchema: () => insertWithdrawalRequestSchema,
  leaveRequests: () => leaveRequests,
  loyaltyPoints: () => loyaltyPoints,
  loyaltyTransactions: () => loyaltyTransactions,
  menuItems: () => menuItems,
  messages: () => messages,
  notifications: () => notifications,
  orderTracking: () => orderTracking,
  orders: () => orders,
  paymentGateways: () => paymentGateways,
  paymentMethodDocuments: () => paymentMethodDocuments,
  paymentMethods: () => paymentMethods,
  ratings: () => ratings,
  referralCodes: () => referralCodes,
  referralUsages: () => referralUsages,
  restaurantEarnings: () => restaurantEarnings,
  restaurantSections: () => restaurantSections,
  restaurantUsers: () => restaurantUsers,
  restaurantWallets: () => restaurantWallets,
  restaurants: () => restaurants,
  selectAdminUserSchema: () => selectAdminUserSchema,
  selectAttendanceSchema: () => selectAttendanceSchema,
  selectAuditLogSchema: () => selectAuditLogSchema,
  selectCartSchema: () => selectCartSchema,
  selectCategorySchema: () => selectCategorySchema,
  selectCommissionSettingsSchema: () => selectCommissionSettingsSchema,
  selectCouponSchema: () => selectCouponSchema,
  selectCouponUsageSchema: () => selectCouponUsageSchema,
  selectDeliveryDiscountSchema: () => selectDeliveryDiscountSchema,
  selectDeliveryFeeSettingsSchema: () => selectDeliveryFeeSettingsSchema,
  selectDeliveryRuleSchema: () => selectDeliveryRuleSchema,
  selectDeliveryZoneSchema: () => selectDeliveryZoneSchema,
  selectDriverBalanceSchema: () => selectDriverBalanceSchema,
  selectDriverCommissionSchema: () => selectDriverCommissionSchema,
  selectDriverEarningsSchema: () => selectDriverEarningsSchema,
  selectDriverReviewSchema: () => selectDriverReviewSchema,
  selectDriverSchema: () => selectDriverSchema,
  selectDriverTransactionSchema: () => selectDriverTransactionSchema,
  selectDriverWalletSchema: () => selectDriverWalletSchema,
  selectDriverWithdrawalSchema: () => selectDriverWithdrawalSchema,
  selectDriverWorkSessionSchema: () => selectDriverWorkSessionSchema,
  selectEmployeeSchema: () => selectEmployeeSchema,
  selectFavoritesSchema: () => selectFavoritesSchema,
  selectFinancialReportSchema: () => selectFinancialReportSchema,
  selectGeoZoneSchema: () => selectGeoZoneSchema,
  selectLeaveRequestSchema: () => selectLeaveRequestSchema,
  selectMenuItemSchema: () => selectMenuItemSchema,
  selectMessageSchema: () => selectMessageSchema,
  selectNotificationSchema: () => selectNotificationSchema,
  selectOrderSchema: () => selectOrderSchema,
  selectPaymentGatewaySchema: () => selectPaymentGatewaySchema,
  selectPaymentMethodDocumentSchema: () => selectPaymentMethodDocumentSchema,
  selectPaymentMethodSchema: () => selectPaymentMethodSchema,
  selectRatingSchema: () => selectRatingSchema,
  selectRestaurantEarningsSchema: () => selectRestaurantEarningsSchema,
  selectRestaurantSchema: () => selectRestaurantSchema,
  selectRestaurantSectionSchema: () => selectRestaurantSectionSchema,
  selectRestaurantWalletSchema: () => selectRestaurantWalletSchema,
  selectSpecialOfferSchema: () => selectSpecialOfferSchema,
  selectSystemSettingsSchema: () => selectSystemSettingsSchema,
  selectUiSettingsSchema: () => selectUiSettingsSchema,
  selectUserAddressSchema: () => selectUserAddressSchema,
  selectUserSchema: () => selectUserSchema,
  selectWalletSchema: () => selectWalletSchema,
  selectWalletTransactionSchema: () => selectWalletTransactionSchema,
  selectWasalniRequestSchema: () => selectWasalniRequestSchema,
  selectWithdrawalRequestSchema: () => selectWithdrawalRequestSchema,
  specialOffers: () => specialOffers,
  supportTickets: () => supportTickets,
  systemSettings: () => systemSettings,
  systemSettingsTable: () => systemSettingsTable,
  uiSettings: () => uiSettings,
  userAddresses: () => userAddresses,
  users: () => users,
  walletTransactions: () => walletTransactions,
  wallets: () => wallets,
  wasalniRequests: () => wasalniRequests2,
  withdrawalRequests: () => withdrawalRequests2
});
import { pgTable, text, uuid, timestamp, boolean, integer, decimal, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
var users, customers, userAddresses, categories, restaurants, menuItems, drivers, orders, specialOffers, adminUsers, systemSettingsTable, systemSettings, uiSettings, restaurantSections, ratings, notifications, orderTracking, wallets, walletTransactions, restaurantEarnings, cart, favorites, driverReviews, driverEarningsTable, driverWallets, driverBalances, driverTransactions, driverCommissions, driverWithdrawals, restaurantWallets, commissionSettings, withdrawalRequests2, driverWorkSessions, employees, attendance, leaveRequests, loyaltyPoints, loyaltyTransactions, supportTickets, referralCodes, referralUsages, deviceTokens, restaurantUsers, insertUserSchema, selectUserSchema, insertUserAddressSchema, selectUserAddressSchema, insertCategorySchema, selectCategorySchema, insertRestaurantSchema, selectRestaurantSchema, insertMenuItemSchema, selectMenuItemSchema, insertOrderSchema, selectOrderSchema, insertDriverSchema, selectDriverSchema, insertSpecialOfferSchema, selectSpecialOfferSchema, insertAdminUserSchema, selectAdminUserSchema, insertUiSettingsSchema, selectUiSettingsSchema, insertRestaurantSectionSchema, selectRestaurantSectionSchema, insertRatingSchema, selectRatingSchema, insertNotificationSchema, selectNotificationSchema, insertWalletSchema, selectWalletSchema, insertWalletTransactionSchema, selectWalletTransactionSchema, insertSystemSettingsSchema, selectSystemSettingsSchema, insertRestaurantEarningsSchema, selectRestaurantEarningsSchema, insertCartSchema, selectCartSchema, insertFavoritesSchema, selectFavoritesSchema, insertDriverReviewSchema, selectDriverReviewSchema, insertDriverEarningsSchema, selectDriverEarningsSchema, insertDriverWalletSchema, selectDriverWalletSchema, insertDriverBalanceSchema, selectDriverBalanceSchema, insertDriverTransactionSchema, selectDriverTransactionSchema, insertDriverCommissionSchema, selectDriverCommissionSchema, insertDriverWithdrawalSchema, selectDriverWithdrawalSchema, insertRestaurantWalletSchema, selectRestaurantWalletSchema, insertCommissionSettingsSchema, selectCommissionSettingsSchema, insertWithdrawalRequestSchema, selectWithdrawalRequestSchema, insertDriverWorkSessionSchema, selectDriverWorkSessionSchema, insertEmployeeSchema, selectEmployeeSchema, insertAttendanceSchema, selectAttendanceSchema, insertLeaveRequestSchema, selectLeaveRequestSchema, deliveryFeeSettings, deliveryZones, financialReports, insertDeliveryFeeSettingsSchema, selectDeliveryFeeSettingsSchema, insertDeliveryZoneSchema, selectDeliveryZoneSchema, insertFinancialReportSchema, selectFinancialReportSchema, geoZones, deliveryRules, deliveryDiscounts, insertGeoZoneSchema, selectGeoZoneSchema, insertDeliveryRuleSchema, selectDeliveryRuleSchema, insertDeliveryDiscountSchema, selectDeliveryDiscountSchema, messages, insertMessageSchema, selectMessageSchema, auditLogs, insertAuditLogSchema, selectAuditLogSchema, paymentGateways, insertPaymentGatewaySchema, selectPaymentGatewaySchema, paymentMethods, insertPaymentMethodSchema, selectPaymentMethodSchema, paymentMethodDocuments, insertPaymentMethodDocumentSchema, selectPaymentMethodDocumentSchema, coupons, insertCouponSchema, selectCouponSchema, couponUsages, insertCouponUsageSchema, selectCouponUsageSchema, wasalniRequests2, insertWasalniRequestSchema, selectWasalniRequestSchema;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    users = pgTable("users", {
      id: uuid("id").primaryKey().defaultRandom(),
      username: varchar("username", { length: 50 }).unique(),
      password: text("password"),
      name: text("name").notNull(),
      phone: varchar("phone", { length: 20 }).notNull(),
      email: varchar("email", { length: 100 }),
      address: text("address"),
      googleId: text("google_id"),
      appleId: text("apple_id"),
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
      latitude: decimal("latitude", { precision: 10, scale: 8 }),
      longitude: decimal("longitude", { precision: 11, scale: 8 }),
      earnings: decimal("earnings", { precision: 10, scale: 2 }).default("0"),
      completedOrders: integer("completed_orders").default(0).notNull(),
      averageRating: decimal("average_rating", { precision: 3, scale: 2 }).default("0.00"),
      // متوسط تقييم السائق
      reviewCount: integer("review_count").default(0),
      // عدد التقييمات
      allowProfileEdit: boolean("allow_profile_edit").default(true),
      // السماح للسائق بتعديل ملفه الشخصي
      canViewWallet: boolean("can_view_wallet").default(true),
      // السماح برؤية المحفظة
      canViewStats: boolean("can_view_stats").default(true),
      // السماح برؤية الإحصائيات
      canToggleAvailability: boolean("can_toggle_availability").default(true),
      // السماح بتغيير حالة التوفر
      notes: text("notes"),
      // ملاحظات عن السائق
      joinDate: timestamp("join_date").defaultNow(),
      // تاريخ الانضمام
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
      driverCommissionRate: decimal("driver_commission_rate", { precision: 5, scale: 2 }).default("0"),
      driverCommissionAmount: decimal("driver_commission_amount", { precision: 10, scale: 2 }).default("0"),
      commissionProcessed: boolean("commission_processed").default(false).notNull(),
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
      // حقول خدمة وصل لي
      isWaselLi: boolean("is_wasel_li").default(false).notNull(),
      pickupAddress: text("pickup_address"),
      pickupLocationLat: decimal("pickup_location_lat", { precision: 10, scale: 8 }),
      pickupLocationLng: decimal("pickup_location_lng", { precision: 11, scale: 8 }),
      pickupPhone: varchar("pickup_phone", { length: 20 }),
      pickupName: varchar("pickup_name", { length: 100 }),
      waselLiItemType: varchar("wasel_li_item_type", { length: 100 }),
      // حقول الطلبات الآجلة
      isScheduled: boolean("is_scheduled").default(false).notNull(),
      scheduledDateTime: timestamp("scheduled_date_time"),
      isScheduledOrderSent: boolean("is_scheduled_order_sent").default(false).notNull(),
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
      password: text("password"),
      // كلمة مرور مشفرة (bcrypt)
      userType: varchar("user_type", { length: 50 }).default("admin").notNull(),
      // admin | sub_admin
      permissions: text("permissions"),
      // JSON: قائمة الصلاحيات للمدير المساعد
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    systemSettingsTable = pgTable("system_settings_table", {
      id: uuid("id").primaryKey().defaultRandom(),
      key: varchar("key", { length: 100 }).unique().notNull(),
      value: text("value").notNull(),
      category: varchar("category", { length: 100 }).default("general"),
      description: text("description"),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    systemSettings = systemSettingsTable;
    uiSettings = systemSettingsTable;
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
      recipientId: text("recipient_id"),
      // تم التغيير من uuid إلى text لدعم الهوية بالهاتف للمستخدمين غير المسجلين
      orderId: uuid("order_id"),
      isRead: boolean("is_read").default(false).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    orderTracking = pgTable("order_tracking", {
      id: uuid("id").primaryKey().defaultRandom(),
      orderId: uuid("order_id").references(() => orders.id).notNull(),
      status: varchar("status", { length: 50 }).notNull(),
      message: text("message").notNull(),
      createdBy: text("created_by").notNull(),
      // تم التغيير من uuid إلى text لدعم "system" أو "admin" أو رقم الهاتف
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
    loyaltyPoints = pgTable("loyalty_points", {
      id: uuid("id").primaryKey().defaultRandom(),
      userId: uuid("user_id").references(() => users.id).notNull(),
      totalPoints: integer("total_points").default(0).notNull(),
      redeemedPoints: integer("redeemed_points").default(0).notNull(),
      availablePoints: integer("available_points").default(0).notNull(),
      tier: varchar("tier", { length: 20 }).default("bronze").notNull(),
      // bronze, silver, gold, platinum
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    loyaltyTransactions = pgTable("loyalty_transactions", {
      id: uuid("id").primaryKey().defaultRandom(),
      userId: uuid("user_id").references(() => users.id).notNull(),
      orderId: uuid("order_id").references(() => orders.id),
      type: varchar("type", { length: 30 }).notNull(),
      // earned, redeemed, expired, bonus
      points: integer("points").notNull(),
      description: text("description"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    supportTickets = pgTable("support_tickets", {
      id: uuid("id").primaryKey().defaultRandom(),
      userId: uuid("user_id").references(() => users.id),
      customerName: varchar("customer_name", { length: 100 }).notNull(),
      customerPhone: varchar("customer_phone", { length: 20 }).notNull(),
      orderId: uuid("order_id").references(() => orders.id),
      category: varchar("category", { length: 50 }).notNull(),
      // delivery, quality, payment, driver, other
      subject: varchar("subject", { length: 200 }).notNull(),
      description: text("description").notNull(),
      status: varchar("status", { length: 30 }).default("open").notNull(),
      // open, in_progress, resolved, closed
      priority: varchar("priority", { length: 20 }).default("normal").notNull(),
      // low, normal, high, urgent
      assignedTo: uuid("assigned_to").references(() => adminUsers.id),
      adminResponse: text("admin_response"),
      resolvedAt: timestamp("resolved_at"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    referralCodes = pgTable("referral_codes", {
      id: uuid("id").primaryKey().defaultRandom(),
      userId: uuid("user_id").references(() => users.id).notNull(),
      code: varchar("code", { length: 20 }).notNull().unique(),
      totalReferrals: integer("total_referrals").default(0).notNull(),
      totalEarned: decimal("total_earned", { precision: 10, scale: 2 }).default("0").notNull(),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    referralUsages = pgTable("referral_usages", {
      id: uuid("id").primaryKey().defaultRandom(),
      referralCodeId: uuid("referral_code_id").references(() => referralCodes.id).notNull(),
      referrerId: uuid("referrer_id").references(() => users.id).notNull(),
      referredUserId: uuid("referred_user_id").references(() => users.id).notNull(),
      pointsAwarded: integer("points_awarded").default(0),
      discountAwarded: decimal("discount_awarded", { precision: 10, scale: 2 }).default("0"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    deviceTokens = pgTable("device_tokens", {
      id: uuid("id").primaryKey().defaultRandom(),
      userId: uuid("user_id").references(() => users.id),
      driverId: uuid("driver_id").references(() => drivers.id),
      token: text("token").notNull().unique(),
      platform: varchar("platform", { length: 20 }).notNull(),
      // android, ios, web
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    restaurantUsers = pgTable("restaurant_users", {
      id: uuid("id").primaryKey().defaultRandom(),
      restaurantId: uuid("restaurant_id").references(() => restaurants.id).notNull(),
      name: varchar("name", { length: 100 }).notNull(),
      email: varchar("email", { length: 100 }).notNull().unique(),
      phone: varchar("phone", { length: 20 }).notNull(),
      password: text("password").notNull(),
      role: varchar("role", { length: 30 }).default("owner").notNull(),
      // owner, manager, staff
      isActive: boolean("is_active").default(true).notNull(),
      lastLoginAt: timestamp("last_login_at"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
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
      updatedAt: true,
      allowProfileEdit: true,
      notes: true,
      joinDate: true
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
    paymentMethods = pgTable("payment_methods", {
      id: uuid("id").primaryKey().defaultRandom(),
      name: varchar("name", { length: 100 }).notNull(),
      nameAr: varchar("name_ar", { length: 100 }).notNull(),
      type: varchar("type", { length: 50 }).notNull(),
      // card, wallet, cash, bank_transfer
      provider: varchar("provider", { length: 50 }).notNull(),
      // mada, stc_pay, apple_pay, visa, mastercard, cash, bank
      icon: varchar("icon", { length: 200 }),
      description: text("description"),
      isActive: boolean("is_active").default(true).notNull(),
      isOnline: boolean("is_online").default(true).notNull(),
      requiresDocument: boolean("requires_document").default(false).notNull(),
      sortOrder: integer("sort_order").default(0),
      config: text("config"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertPaymentMethodSchema = createInsertSchema(paymentMethods).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      isOnline: true,
      requiresDocument: true,
      sortOrder: true
    });
    selectPaymentMethodSchema = createSelectSchema(paymentMethods);
    paymentMethodDocuments = pgTable("payment_method_documents", {
      id: uuid("id").primaryKey().defaultRandom(),
      paymentMethodId: uuid("payment_method_id").references(() => paymentMethods.id).notNull(),
      documentType: varchar("document_type", { length: 100 }).notNull(),
      // iban, account_number, merchant_id, etc.
      label: varchar("label", { length: 200 }).notNull(),
      value: text("value").notNull(),
      isVisible: boolean("is_visible").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertPaymentMethodDocumentSchema = createInsertSchema(paymentMethodDocuments).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isVisible: true
    });
    selectPaymentMethodDocumentSchema = createSelectSchema(paymentMethodDocuments);
    coupons = pgTable("coupons", {
      id: uuid("id").primaryKey().defaultRandom(),
      code: varchar("code", { length: 50 }).notNull().unique(),
      nameAr: varchar("name_ar", { length: 200 }).notNull(),
      description: text("description"),
      type: varchar("type", { length: 20 }).notNull().default("percentage"),
      // percentage, fixed
      value: decimal("value", { precision: 10, scale: 2 }).notNull(),
      minOrderValue: decimal("min_order_value", { precision: 10, scale: 2 }).default("0"),
      maxDiscount: decimal("max_discount", { precision: 10, scale: 2 }),
      usageLimit: integer("usage_limit"),
      usageCount: integer("usage_count").default(0).notNull(),
      perUserLimit: integer("per_user_limit").default(1),
      applicableFor: varchar("applicable_for", { length: 50 }).default("all"),
      // all, new_users, specific_restaurant
      restaurantId: uuid("restaurant_id").references(() => restaurants.id),
      categoryId: uuid("category_id").references(() => categories.id),
      startDate: timestamp("start_date"),
      endDate: timestamp("end_date"),
      isActive: boolean("is_active").default(true).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertCouponSchema = createInsertSchema(coupons).partial({
      id: true,
      createdAt: true,
      updatedAt: true,
      isActive: true,
      usageCount: true,
      description: true,
      maxDiscount: true,
      usageLimit: true,
      perUserLimit: true,
      applicableFor: true,
      restaurantId: true,
      categoryId: true,
      startDate: true,
      endDate: true,
      minOrderValue: true
    });
    selectCouponSchema = createSelectSchema(coupons);
    couponUsages = pgTable("coupon_usages", {
      id: uuid("id").primaryKey().defaultRandom(),
      couponId: uuid("coupon_id").references(() => coupons.id).notNull(),
      userId: uuid("user_id").references(() => users.id),
      userPhone: varchar("user_phone", { length: 20 }),
      orderId: uuid("order_id").references(() => orders.id),
      discountAmount: decimal("discount_amount", { precision: 10, scale: 2 }).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertCouponUsageSchema = createInsertSchema(couponUsages).partial({
      id: true,
      createdAt: true,
      userId: true,
      userPhone: true,
      orderId: true
    });
    selectCouponUsageSchema = createSelectSchema(couponUsages);
    wasalniRequests2 = pgTable("wasalni_requests", {
      id: uuid("id").primaryKey().defaultRandom(),
      requestNumber: varchar("request_number", { length: 50 }).notNull(),
      customerName: text("customer_name").notNull(),
      customerPhone: varchar("customer_phone", { length: 20 }).notNull(),
      customerId: uuid("customer_id").references(() => users.id),
      fromAddress: text("from_address").notNull(),
      toAddress: text("to_address").notNull(),
      fromLat: decimal("from_lat", { precision: 10, scale: 8 }),
      fromLng: decimal("from_lng", { precision: 11, scale: 8 }),
      toLat: decimal("to_lat", { precision: 10, scale: 8 }),
      toLng: decimal("to_lng", { precision: 11, scale: 8 }),
      orderType: varchar("order_type", { length: 100 }).default("\u0637\u0639\u0627\u0645"),
      notes: text("notes"),
      scheduledDate: varchar("scheduled_date", { length: 20 }),
      scheduledTime: varchar("scheduled_time", { length: 20 }),
      estimatedFee: decimal("estimated_fee", { precision: 10, scale: 2 }),
      status: varchar("status", { length: 30 }).default("pending").notNull(),
      driverId: uuid("driver_id").references(() => drivers.id),
      cancelReason: text("cancel_reason"),
      adminNotes: text("admin_notes"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    insertWasalniRequestSchema = createInsertSchema(wasalniRequests2).partial({
      id: true,
      requestNumber: true,
      customerId: true,
      fromLat: true,
      fromLng: true,
      toLat: true,
      toLng: true,
      orderType: true,
      notes: true,
      scheduledDate: true,
      scheduledTime: true,
      estimatedFee: true,
      status: true,
      driverId: true,
      cancelReason: true,
      adminNotes: true,
      createdAt: true,
      updatedAt: true
    });
    selectWasalniRequestSchema = createSelectSchema(wasalniRequests2);
  }
});

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __dirname, vite_config_default;
var init_vite_config = __esm({
  "vite.config.ts"() {
    "use strict";
    __dirname = path.dirname(fileURLToPath(import.meta.url));
    vite_config_default = defineConfig(async () => {
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
          // تعطيل manualChunks تماماً - هذا هو الحل الأضمن
          chunkSizeWarningLimit: 1500
        },
        server: {
          host: "0.0.0.0",
          port: 5e3,
          strictPort: false,
          allowedHosts: true,
          hmr: {
            clientPort: 443
          },
          fs: {
            strict: false
          }
        }
      };
    });
  }
});

// server/vite.ts
var vite_exports = {};
__export(vite_exports, {
  log: () => log,
  serveStatic: () => serveStatic,
  setupVite: () => setupVite
});
import express from "express";
import fs from "fs";
import path2 from "path";
import { nanoid } from "nanoid";
import { fileURLToPath as fileURLToPath2 } from "url";
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
    ...vite_config_default,
    configFile: path2.resolve(__dirname2, "..", "client", "vite.config.ts"),
    server: serverOptions,
    appType: "custom",
    root: path2.resolve(__dirname2, "..", "client")
  });
  app2.use(viteServer.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
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
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}
var __dirname2;
var init_vite = __esm({
  "server/vite.ts"() {
    "use strict";
    init_vite();
    init_vite_config();
    __dirname2 = path2.dirname(fileURLToPath2(import.meta.url));
  }
});

// server/index.ts
import dotenv from "dotenv";
import express16 from "express";
import { eq as eq9 } from "drizzle-orm";
import compression from "compression";

// server/routes.ts
import express15 from "express";
import { createServer as createServer2 } from "http";
import path6 from "path";
import { fileURLToPath as fileURLToPath5 } from "url";

// server/storage.ts
import { randomUUID } from "crypto";

// server/db.ts
init_schema();
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import bcrypt from "bcryptjs";
import { eq, and, desc, sql, or, like, asc, isNull } from "drizzle-orm";
var db2 = null;
function getDb() {
  if (!db2) {
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
    db2 = drizzle(sqlClient, { schema: schema2 });
  }
  return db2;
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
      return allRestaurants.find((r) => r.name.includes("\u0648\u0627\u0635\u0644")) || allRestaurants[0];
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
  async getRestaurantSections(restaurantId) {
    return await this.db.select().from(restaurantSections).where(eq(restaurantSections.restaurantId, restaurantId)).orderBy(restaurantSections.sortOrder);
  }
  async createRestaurantSection(section) {
    const [newSection] = await this.db.insert(restaurantSections).values(section).returning();
    return newSection;
  }
  async updateRestaurantSection(id, section) {
    const [updated] = await this.db.update(restaurantSections).set(section).where(eq(restaurantSections.id, id)).returning();
    return updated;
  }
  async deleteRestaurantSection(id) {
    const result = await this.db.delete(restaurantSections).where(eq(restaurantSections.id, id)).returning();
    return result.length > 0;
  }
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
  // Wasalni
  async getWasalniRequest(id) {
    try {
      const [request] = await this.db.select({
        id: wasalniRequests2.id,
        requestNumber: wasalniRequests2.requestNumber,
        customerName: wasalniRequests2.customerName,
        customerPhone: wasalniRequests2.customerPhone,
        customerId: wasalniRequests2.customerId,
        fromAddress: wasalniRequests2.fromAddress,
        toAddress: wasalniRequests2.toAddress,
        fromLat: wasalniRequests2.fromLat,
        fromLng: wasalniRequests2.fromLng,
        toLat: wasalniRequests2.toLat,
        toLng: wasalniRequests2.toLng,
        orderType: wasalniRequests2.orderType,
        notes: wasalniRequests2.notes,
        status: wasalniRequests2.status,
        driverId: wasalniRequests2.driverId,
        estimatedFee: wasalniRequests2.estimatedFee,
        createdAt: wasalniRequests2.createdAt,
        updatedAt: wasalniRequests2.updatedAt,
        driverName: drivers.name,
        driverPhone: drivers.phone
      }).from(wasalniRequests2).leftJoin(drivers, eq(wasalniRequests2.driverId, drivers.id)).where(eq(wasalniRequests2.id, id));
      return request;
    } catch (error) {
      console.error("Error fetching wasalni request:", error);
      return void 0;
    }
  }
  async updateWasalniRequest(id, data) {
    try {
      const [updated] = await this.db.update(wasalniRequests2).set({ ...data, updatedAt: /* @__PURE__ */ new Date() }).where(eq(wasalniRequests2.id, id)).returning();
      return updated;
    } catch (error) {
      console.error("Error updating wasalni request:", error);
      return void 0;
    }
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
  async getClosestDrivers(lat, lon, limit = 5) {
    const availableDrivers = await this.getAvailableDrivers();
    const driversWithDistance = availableDrivers.filter((driver) => driver.latitude !== null && driver.longitude !== null).map((driver) => {
      const distance = this.calculateDistance(
        lat,
        lon,
        parseFloat(driver.latitude),
        parseFloat(driver.longitude)
      );
      return { ...driver, distance };
    }).sort((a, b) => a.distance - b.distance).slice(0, limit);
    return driversWithDistance;
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
    if (updated && (driver.latitude || driver.longitude) && global.WS_MANAGER) {
      global.WS_MANAGER.broadcast("driver_location", {
        driverId: id,
        latitude: updated.latitude,
        longitude: updated.longitude,
        currentLocation: updated.currentLocation,
        timestamp: Date.now()
      });
    }
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
        conditions.push(
          or(
            eq(notifications.recipientId, recipientId),
            isNull(notifications.recipientId),
            eq(notifications.recipientId, "all")
          )
        );
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
      if (global.WS_MANAGER) {
        if (notification.recipientType === "customer" || notification.recipientType === "all" || notification.recipientType === "flutter") {
          if (!notification.recipientId || notification.recipientId === "all") {
            global.WS_MANAGER.broadcast("NEW_NOTIFICATION", newNotification);
          } else {
            global.WS_MANAGER.sendToUser(notification.recipientId, "NEW_NOTIFICATION", newNotification);
            if (notification.orderId) {
              try {
                const [orderRow] = await this.db.select({
                  customerId: orders.customerId,
                  customerPhone: orders.customerPhone
                }).from(orders).where(eq(orders.id, notification.orderId)).limit(1);
                if (orderRow) {
                  const altIds = [orderRow.customerId, orderRow.customerPhone].filter((v) => !!v && v !== notification.recipientId);
                  for (const altId of altIds) {
                    global.WS_MANAGER.sendToUser(altId, "NEW_NOTIFICATION", newNotification);
                  }
                }
              } catch (lookupErr) {
                console.error("Notification fallback lookup failed:", lookupErr);
              }
            }
          }
          global.WS_MANAGER.sendToAdmin("NEW_NOTIFICATION", newNotification);
        } else if (notification.recipientType === "driver" && notification.recipientId) {
          global.WS_MANAGER.sendToDriver(notification.recipientId, "NEW_NOTIFICATION", newNotification);
          global.WS_MANAGER.sendToAdmin("NEW_NOTIFICATION", newNotification);
        } else if (notification.recipientType === "admin") {
          global.WS_MANAGER.sendToAdmin("NEW_NOTIFICATION", newNotification);
        }
      }
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
      const tracking = await this.db.select().from(orderTracking).where(eq(orderTracking.orderId, orderId)).orderBy(asc(orderTracking.createdAt));
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
  // Centralized Order Completion Logic
  async completeOrder(orderId) {
    try {
      const order = await this.getOrder(orderId);
      if (!order) return void 0;
      if (order.status === "delivered") return order;
      const [updatedOrder] = await this.db.update(orders).set({
        status: "delivered",
        updatedAt: /* @__PURE__ */ new Date(),
        actualDeliveryTime: /* @__PURE__ */ new Date(),
        commissionProcessed: true
      }).where(eq(orders.id, orderId)).returning();
      if (order.driverId) {
        const driverEarnings = parseFloat(order.driverEarnings?.toString() || order.driverCommissionAmount?.toString() || "0");
        if (driverEarnings > 0) {
          await this.createDriverCommission({
            driverId: order.driverId,
            orderId: order.id,
            orderAmount: parseFloat(order.totalAmount?.toString() || "0"),
            commissionRate: parseFloat(order.driverCommissionRate?.toString() || "70"),
            commissionAmount: driverEarnings,
            status: "approved"
          });
          const driver = await this.getDriver(order.driverId);
          if (driver) {
            const currentEarnings = parseFloat(driver.earnings?.toString() || "0");
            await this.updateDriver(order.driverId, {
              completedOrders: (driver.completedOrders || 0) + 1,
              earnings: (currentEarnings + driverEarnings).toString(),
              isAvailable: true
            });
          }
        } else {
          await this.updateDriver(order.driverId, { isAvailable: true });
        }
      }
      if (order.restaurantId) {
        const restaurantEarnings2 = parseFloat(order.restaurantEarnings?.toString() || "0");
        if (restaurantEarnings2 > 0) {
          let [rWallet] = await this.db.select().from(restaurantWallets).where(eq(restaurantWallets.restaurantId, order.restaurantId));
          if (!rWallet) {
            [rWallet] = await this.db.insert(restaurantWallets).values({
              restaurantId: order.restaurantId,
              balance: "0",
              isActive: true
            }).returning();
          }
          const currentBalance = parseFloat(rWallet.balance?.toString() || "0");
          await this.db.update(restaurantWallets).set({
            balance: (currentBalance + restaurantEarnings2).toString(),
            updatedAt: /* @__PURE__ */ new Date()
          }).where(eq(restaurantWallets.restaurantId, order.restaurantId));
        }
      }
      await this.createOrderTracking({
        orderId: order.id,
        status: "delivered",
        message: "\u062A\u0645 \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D \u0648\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u0627\u062F\u064A\u0629",
        createdBy: "system",
        createdByType: "system"
      });
      return updatedOrder;
    } catch (error) {
      console.error("Error completing order:", error);
      throw error;
    }
  }
  // Chat/Messages
  async getMessages(orderId) {
    return await this.db.select().from(messages).where(eq(messages.orderId, orderId)).orderBy(asc(messages.createdAt));
  }
  async createMessage(message) {
    const [newMessage] = await this.db.insert(messages).values(message).returning();
    return newMessage;
  }
  async markMessagesAsRead(orderId, receiverId) {
    await this.db.update(messages).set({ isRead: true }).where(and(
      eq(messages.orderId, orderId),
      eq(messages.receiverId, receiverId)
    ));
  }
  // Audit Logs
  async createAuditLog(log3) {
    const [newLog] = await this.db.insert(auditLogs).values(log3).returning();
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
  // Payment Methods (Saudi payment methods)
  async getPaymentMethods() {
    return await this.db.select().from(paymentMethods).orderBy(asc(paymentMethods.sortOrder));
  }
  async getActivePaymentMethods() {
    return await this.db.select().from(paymentMethods).where(eq(paymentMethods.isActive, true)).orderBy(asc(paymentMethods.sortOrder));
  }
  async getPaymentMethod(id) {
    const [method] = await this.db.select().from(paymentMethods).where(eq(paymentMethods.id, id));
    return method;
  }
  async createPaymentMethod(method) {
    const [newMethod] = await this.db.insert(paymentMethods).values(method).returning();
    return newMethod;
  }
  async updatePaymentMethod(id, method) {
    const [updated] = await this.db.update(paymentMethods).set({ ...method, updatedAt: /* @__PURE__ */ new Date() }).where(eq(paymentMethods.id, id)).returning();
    return updated;
  }
  async deletePaymentMethod(id) {
    await this.db.delete(paymentMethodDocuments).where(eq(paymentMethodDocuments.paymentMethodId, id));
    const result = await this.db.delete(paymentMethods).where(eq(paymentMethods.id, id));
    return result.rowCount > 0;
  }
  async getPaymentMethodDocuments(paymentMethodId) {
    return await this.db.select().from(paymentMethodDocuments).where(eq(paymentMethodDocuments.paymentMethodId, paymentMethodId));
  }
  async createPaymentMethodDocument(doc) {
    const [newDoc] = await this.db.insert(paymentMethodDocuments).values(doc).returning();
    return newDoc;
  }
  async updatePaymentMethodDocument(id, doc) {
    const [updated] = await this.db.update(paymentMethodDocuments).set({ ...doc, updatedAt: /* @__PURE__ */ new Date() }).where(eq(paymentMethodDocuments.id, id)).returning();
    return updated;
  }
  async deletePaymentMethodDocument(id) {
    const result = await this.db.delete(paymentMethodDocuments).where(eq(paymentMethodDocuments.id, id));
    return result.rowCount > 0;
  }
  // Coupons
  async getCoupons() {
    return await this.db.select().from(coupons).orderBy(desc(coupons.createdAt));
  }
  async getCouponByCode(code) {
    const [coupon] = await this.db.select().from(coupons).where(eq(coupons.code, code.toUpperCase()));
    return coupon;
  }
  async createCoupon(couponData) {
    const data = { ...couponData, code: couponData.code.toUpperCase() };
    if (data.startDate && typeof data.startDate === "string") data.startDate = new Date(data.startDate);
    if (data.endDate && typeof data.endDate === "string") data.endDate = new Date(data.endDate);
    const [newCoupon] = await this.db.insert(coupons).values(data).returning();
    return newCoupon;
  }
  async updateCoupon(id, couponData) {
    const updateData = { ...couponData, updatedAt: /* @__PURE__ */ new Date() };
    if (updateData.code) updateData.code = updateData.code.toUpperCase();
    if (updateData.startDate && typeof updateData.startDate === "string") updateData.startDate = new Date(updateData.startDate);
    if (updateData.endDate && typeof updateData.endDate === "string") updateData.endDate = new Date(updateData.endDate);
    const [updated] = await this.db.update(coupons).set(updateData).where(eq(coupons.id, id)).returning();
    return updated;
  }
  async deleteCoupon(id) {
    const result = await this.db.delete(coupons).where(eq(coupons.id, id));
    return result.rowCount > 0;
  }
  async validateCoupon(code, orderValue, userId, userPhone) {
    const coupon = await this.getCouponByCode(code);
    if (!coupon) return { valid: false, message: "\u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" };
    if (!coupon.isActive) return { valid: false, message: "\u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u063A\u064A\u0631 \u0646\u0634\u0637" };
    const now = /* @__PURE__ */ new Date();
    if (coupon.startDate && new Date(coupon.startDate) > now) return { valid: false, message: "\u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u0644\u0645 \u064A\u0628\u062F\u0623 \u0628\u0639\u062F" };
    if (coupon.endDate && new Date(coupon.endDate) < now) return { valid: false, message: "\u0627\u0646\u062A\u0647\u062A \u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0643\u0648\u0628\u0648\u0646" };
    if (coupon.minOrderValue && orderValue < parseFloat(String(coupon.minOrderValue))) {
      return { valid: false, message: `\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0637\u0644\u0628 ${coupon.minOrderValue} \u0631\u064A\u0627\u0644` };
    }
    if (coupon.usageLimit && coupon.usageCount >= coupon.usageLimit) {
      return { valid: false, message: "\u062A\u0645 \u0627\u0633\u062A\u0646\u0641\u0627\u0630 \u0627\u0644\u0643\u0648\u0628\u0648\u0646" };
    }
    let discount = 0;
    if (coupon.type === "percentage") {
      discount = orderValue * parseFloat(String(coupon.value)) / 100;
      if (coupon.maxDiscount) discount = Math.min(discount, parseFloat(String(coupon.maxDiscount)));
    } else {
      discount = parseFloat(String(coupon.value));
    }
    discount = Math.min(discount, orderValue);
    return { valid: true, coupon, discount };
  }
  async useCoupon(couponId, data) {
    await this.db.insert(couponUsages).values(data);
    await this.db.update(coupons).set({ usageCount: sql`${coupons.usageCount} + 1` }).where(eq(coupons.id, couponId));
  }
  // Detailed Reports
  async getDetailedReport(filters) {
    const { type, startDate, endDate } = filters || {};
    const start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
    const end = endDate ? new Date(endDate) : /* @__PURE__ */ new Date();
    const allOrders = await this.db.select().from(orders).where(and(sql`${orders.createdAt} >= ${start}`, sql`${orders.createdAt} <= ${end}`));
    const statusLabel = {
      pending: "\u0642\u064A\u062F \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631",
      confirmed: "\u0645\u0624\u0643\u062F",
      preparing: "\u0642\u064A\u062F \u0627\u0644\u062A\u062D\u0636\u064A\u0631",
      ready: "\u062C\u0627\u0647\u0632",
      picked_up: "\u062A\u0645 \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645",
      on_way: "\u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642",
      delivered: "\u062A\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644",
      cancelled: "\u0645\u0644\u063A\u0649"
    };
    const statusColor = {
      pending: "bg-yellow-100 text-yellow-700",
      confirmed: "bg-blue-100 text-blue-700",
      preparing: "bg-orange-100 text-orange-700",
      ready: "bg-purple-100 text-purple-700",
      picked_up: "bg-indigo-100 text-indigo-700",
      on_way: "bg-cyan-100 text-cyan-700",
      delivered: "bg-green-100 text-green-700",
      cancelled: "bg-red-100 text-red-700"
    };
    if (type === "orders") {
      const total2 = allOrders.reduce((s, o) => s + parseFloat(String(o.total || 0)), 0);
      const delivered2 = allOrders.filter((o) => o.status === "delivered").length;
      const cancelled2 = allOrders.filter((o) => o.status === "cancelled").length;
      const avgOrder = allOrders.length > 0 ? (total2 / allOrders.length).toFixed(2) : "0";
      const summary = [
        { name: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0637\u0644\u0628\u0627\u062A", details: `\u0645\u0646 ${start.toLocaleDateString("ar")} \u0625\u0644\u0649 ${end.toLocaleDateString("ar")}`, value: `${allOrders.length} \u0637\u0644\u0628`, status: "\u0625\u062C\u0645\u0627\u0644\u064A", statusColor: "bg-blue-100 text-blue-700" },
        { name: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A", details: "\u0645\u062C\u0645\u0648\u0639 \u0642\u064A\u0645 \u062C\u0645\u064A\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062A", value: `${total2.toFixed(2)} \u0631.\u0633`, status: "\u0625\u064A\u0631\u0627\u062F\u0627\u062A", statusColor: "bg-green-100 text-green-700" },
        { name: "\u0637\u0644\u0628\u0627\u062A \u0645\u0643\u062A\u0645\u0644\u0629", details: "\u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0645 \u062A\u0648\u0635\u064A\u0644\u0647\u0627 \u0628\u0646\u062C\u0627\u062D", value: `${delivered2} \u0637\u0644\u0628`, status: "\u0645\u0643\u062A\u0645\u0644", statusColor: "bg-green-100 text-green-700" },
        { name: "\u0637\u0644\u0628\u0627\u062A \u0645\u0644\u063A\u0627\u0629", details: "\u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0645 \u0625\u0644\u063A\u0627\u0624\u0647\u0627", value: `${cancelled2} \u0637\u0644\u0628`, status: "\u0645\u0644\u063A\u0649", statusColor: "bg-red-100 text-red-700" },
        { name: "\u0645\u0639\u062F\u0644 \u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628\u0627\u062A", details: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629", value: allOrders.length > 0 ? `${(delivered2 / allOrders.length * 100).toFixed(1)}%` : "0%", status: "\u0646\u0633\u0628\u0629", statusColor: "bg-purple-100 text-purple-700" },
        { name: "\u0645\u062A\u0648\u0633\u0637 \u0642\u064A\u0645\u0629 \u0627\u0644\u0637\u0644\u0628", details: "\u0645\u062A\u0648\u0633\u0637 \u0642\u064A\u0645\u0629 \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0648\u0627\u062D\u062F", value: `${avgOrder} \u0631.\u0633`, status: "\u0645\u062A\u0648\u0633\u0637", statusColor: "bg-orange-100 text-orange-700" }
      ];
      const orderRows = allOrders.slice(0, 50).map((o) => ({
        name: `\u0637\u0644\u0628 #${o.orderNumber || o.id}`,
        details: `${new Date(o.createdAt).toLocaleDateString("ar")} - ${o.customerName || "\u0639\u0645\u064A\u0644"}`,
        value: `${parseFloat(String(o.total || 0)).toFixed(2)} \u0631.\u0633`,
        status: statusLabel[o.status || ""] || o.status || "",
        statusColor: statusColor[o.status || ""] || "bg-gray-100 text-gray-700"
      }));
      return { data: [...summary, ...orderRows] };
    }
    if (!type || type === "products") {
      const items = await this.db.select().from(menuItems);
      const data = items.map((item) => ({
        name: item.name,
        details: item.category || "",
        value: `${parseFloat(String(item.price || 0)).toFixed(2)} \u0631.\u0633`,
        status: item.isAvailable ? "\u0645\u062A\u0627\u062D" : "\u063A\u064A\u0631 \u0645\u062A\u0627\u062D",
        statusColor: item.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }));
      return { data };
    }
    if (type === "drivers") {
      const driversData = await this.db.select().from(drivers);
      const data = driversData.map((d) => ({
        name: d.name || d.phone,
        details: d.phone || "",
        value: `${allOrders.filter((o) => o.driverId === d.id).length} \u062A\u0648\u0635\u064A\u0644\u0629`,
        status: d.isActive ? "\u0646\u0634\u0637" : "\u063A\u064A\u0631 \u0646\u0634\u0637",
        statusColor: d.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
      }));
      return { data };
    }
    if (type === "customers") {
      const usersData = await this.db.select().from(users);
      const data = usersData.map((u) => ({
        name: u.name || u.phone,
        details: u.phone || "",
        value: `${allOrders.filter((o) => o.customerId === u.id).length} \u0637\u0644\u0628`,
        status: u.isActive ? "\u0646\u0634\u0637" : "\u063A\u064A\u0631 \u0646\u0634\u0637",
        statusColor: u.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
      }));
      return { data };
    }
    if (type === "admins") {
      const adminsData = await this.db.select().from(adminUsers);
      const data = adminsData.map((a) => ({
        name: a.name || a.email,
        details: a.phone || a.email || "",
        value: a.userType === "admin" ? "\u0645\u062F\u064A\u0631 \u0631\u0626\u064A\u0633\u064A" : "\u0645\u0634\u0631\u0641 \u0641\u0631\u0639\u064A",
        status: a.isActive ? "\u0646\u0634\u0637" : "\u063A\u064A\u0631 \u0646\u0634\u0637",
        statusColor: a.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }));
      return { data };
    }
    const total = allOrders.reduce((s, o) => s + parseFloat(String(o.total || 0)), 0);
    const delivered = allOrders.filter((o) => o.status === "delivered").length;
    const cancelled = allOrders.filter((o) => o.status === "cancelled").length;
    return {
      data: [
        { name: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0637\u0644\u0628\u0627\u062A", details: `\u0645\u0646 ${start.toLocaleDateString("ar")} \u0625\u0644\u0649 ${end.toLocaleDateString("ar")}`, value: `${allOrders.length} \u0637\u0644\u0628`, status: "\u0625\u062C\u0645\u0627\u0644\u064A", statusColor: "bg-blue-100 text-blue-700" },
        { name: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A", details: "\u0645\u062C\u0645\u0648\u0639 \u0642\u064A\u0645 \u062C\u0645\u064A\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062A", value: `${total.toFixed(2)} \u0631.\u0633`, status: "\u0625\u064A\u0631\u0627\u062F\u0627\u062A", statusColor: "bg-green-100 text-green-700" },
        { name: "\u0637\u0644\u0628\u0627\u062A \u0645\u0643\u062A\u0645\u0644\u0629", details: "\u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0645 \u062A\u0648\u0635\u064A\u0644\u0647\u0627", value: `${delivered} \u0637\u0644\u0628`, status: "\u0645\u0643\u062A\u0645\u0644", statusColor: "bg-green-100 text-green-700" },
        { name: "\u0637\u0644\u0628\u0627\u062A \u0645\u0644\u063A\u0627\u0629", details: "\u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0645 \u0625\u0644\u063A\u0627\u0624\u0647\u0627", value: `${cancelled} \u0637\u0644\u0628`, status: "\u0645\u0644\u063A\u0649", statusColor: "bg-red-100 text-red-700" },
        { name: "\u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u062A\u0645\u0627\u0645", details: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629", value: allOrders.length > 0 ? `${(delivered / allOrders.length * 100).toFixed(1)}%` : "0%", status: "\u0646\u0633\u0628\u0629", statusColor: "bg-purple-100 text-purple-700" }
      ]
    };
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
    const restaurants3 = [
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
    restaurants3.forEach((restaurant) => this.restaurants.set(restaurant.id, restaurant));
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
    let restaurants3 = Array.from(this.restaurants.values());
    if (filters) {
      if (filters.categoryId) {
        restaurants3 = restaurants3.filter((r) => r.categoryId === filters.categoryId);
      }
      if (filters.isOpen !== void 0) {
        restaurants3 = restaurants3.filter((r) => r.isOpen === filters.isOpen);
      }
      if (filters.isFeatured) {
        restaurants3 = restaurants3.filter((r) => r.isFeatured);
      }
      if (filters.isNew) {
        restaurants3 = restaurants3.filter((r) => r.isNew);
      }
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        restaurants3 = restaurants3.filter(
          (r) => r.name.toLowerCase().includes(searchTerm) || r.description?.toLowerCase().includes(searchTerm)
        );
      }
    }
    return restaurants3;
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
  async getRestaurantSections(restaurantId) {
    return [];
  }
  async createRestaurantSection(section) {
    return section;
  }
  async updateRestaurantSection(id, section) {
    return void 0;
  }
  async deleteRestaurantSection(id) {
    return false;
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
  async getWasalniRequest(id) {
    return void 0;
  }
  async updateWasalniRequest(id, data) {
    return void 0;
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
    if (global.WS_MANAGER) {
      if (notification.recipientType === "customer" && notification.recipientId) {
        global.WS_MANAGER.sendToUser(notification.recipientId, "NEW_NOTIFICATION", newNotification);
      } else if (notification.recipientType === "driver" && notification.recipientId) {
        global.WS_MANAGER.sendToDriver(notification.recipientId, "NEW_NOTIFICATION", newNotification);
      } else if (notification.recipientType === "admin") {
        global.WS_MANAGER.sendToAdmin("NEW_NOTIFICATION", newNotification);
      }
      global.WS_MANAGER.sendToAdmin("NEW_NOTIFICATION", newNotification);
    }
    return newNotification;
  }
  async markNotificationAsRead(id) {
    const notification = this.notifications.get(id);
    if (!notification) return void 0;
    const updated = { ...notification, isRead: true };
    this.notifications.set(id, updated);
    return updated;
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
    return Array.from(this.deliveryZonesMap.values()).filter((z6) => z6.isActive !== false);
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

// server/viteServer.ts
import express2 from "express";
import fs2 from "fs";
import path3 from "path";
import { nanoid as nanoid2 } from "nanoid";
import { fileURLToPath as fileURLToPath3 } from "url";
var __dirname3 = path3.dirname(fileURLToPath3(import.meta.url));
function log2(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite2(app2, server) {
  const vite = await Promise.resolve().then(() => (init_vite(), vite_exports));
  const serverOptions = {
    middlewareMode: true,
    hmr: {
      server,
      clientPort: 443
    },
    allowedHosts: true
  };
  const viteServer = await vite.createServer({
    configFile: path3.resolve(__dirname3, "..", "vite.config.ts"),
    server: serverOptions,
    appType: "custom",
    root: path3.resolve(__dirname3, "..", "client")
  });
  app2.use(viteServer.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let clientTemplate;
      const clientIndexPath = path3.resolve(__dirname3, "..", "client", "index.html");
      const rootIndexPath = path3.resolve(__dirname3, "..", "index.html");
      if (fs2.existsSync(clientIndexPath)) {
        clientTemplate = clientIndexPath;
      } else {
        clientTemplate = rootIndexPath;
      }
      let template = await fs2.promises.readFile(clientTemplate, "utf-8");
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
function serveStatic2(app2) {
  const distPath = path3.resolve(__dirname3, "public");
  if (!fs2.existsSync(distPath)) {
    console.error(`Build directory not found: ${distPath}`);
    console.error("Please run 'npm run build' first");
    app2.use("*", (_req, res) => {
      res.status(503).send(`
        <html><body>
          <h1>\u0627\u0644\u062E\u0627\u062F\u0645 \u064A\u0639\u0645\u0644 \u0648\u0644\u0643\u0646 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0644\u0645 \u062A\u064F\u0628\u0646\u064E \u0628\u0639\u062F</h1>
          <p>Server is running but frontend build is missing. Run 'npm run build'.</p>
        </body></html>
      `);
    });
    return;
  }
  app2.use(express2.static(distPath, {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".png")) {
        res.setHeader("Content-Type", "image/png");
      } else if (filePath.endsWith(".ico")) {
        res.setHeader("Content-Type", "image/x-icon");
      } else if (filePath.endsWith(".svg")) {
        res.setHeader("Content-Type", "image/svg+xml");
      } else if (filePath.endsWith(".webmanifest") || filePath.endsWith("manifest.json")) {
        res.setHeader("Content-Type", "application/manifest+json");
      }
    }
  }));
  app2.use("*", (_req, res) => {
    const indexPath = path3.resolve(distPath, "index.html");
    if (fs2.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("index.html not found");
    }
  });
}

// server/broadcast.ts
var _broadcast = null;
var _settingsVersion = Date.now();
function registerBroadcast(fn) {
  _broadcast = fn;
}
function broadcastEvent(type, payload) {
  if (_broadcast) {
    _broadcast(type, payload);
  }
}
function broadcastSettingsChanged(changedKey) {
  _settingsVersion = Date.now();
  broadcastEvent("settings_changed", {
    version: _settingsVersion,
    changedKey,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
}

// server/routes/auth.ts
import express3 from "express";
import bcrypt2 from "bcryptjs";
init_schema();
import { eq as eq2, or as or2, sql as sql2 } from "drizzle-orm";
var router = express3.Router();
router.get("/setup-status", async (req, res) => {
  try {
    const [adminCount] = await dbStorage.db.select({ count: sql2`count(*)::int` }).from(adminUsers);
    const [driverCount] = await dbStorage.db.select({ count: sql2`count(*)::int` }).from(drivers);
    const [userCount] = await dbStorage.db.select({ count: sql2`count(*)::int` }).from(users);
    res.json({
      adminExists: (adminCount?.count ?? 0) > 0,
      driverExists: (driverCount?.count ?? 0) > 0,
      userExists: (userCount?.count ?? 0) > 0
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0641\u062D\u0635 \u062D\u0627\u0644\u0629 \u0627\u0644\u0625\u0639\u062F\u0627\u062F:", error);
    res.json({ adminExists: true, driverExists: true, userExists: true });
  }
});
async function verifyPassword(inputPassword, storedPassword) {
  if (!inputPassword || !storedPassword) return false;
  const isBcryptHash = storedPassword.startsWith("$2b$") || storedPassword.startsWith("$2a$") || storedPassword.startsWith("$2y$");
  if (isBcryptHash) {
    return await bcrypt2.compare(inputPassword, storedPassword);
  } else {
    return inputPassword === storedPassword;
  }
}
async function upgradePasswordIfNeeded(storedPassword, inputPassword, updateFn) {
  const isBcryptHash = storedPassword.startsWith("$2b$") || storedPassword.startsWith("$2a$") || storedPassword.startsWith("$2y$");
  if (!isBcryptHash) {
    try {
      const salt = await bcrypt2.genSalt(10);
      const hashedPassword = await bcrypt2.hash(inputPassword, salt);
      await updateFn(hashedPassword);
      console.log("\u{1F512} \u062A\u0645 \u062A\u0631\u0642\u064A\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0625\u0644\u0649 \u0647\u0627\u0634 bcrypt \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B");
    } catch (err) {
      console.error("\u26A0\uFE0F \u0641\u0634\u0644 \u0641\u064A \u062A\u0631\u0642\u064A\u0629 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631:", err);
    }
  }
}
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
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
      });
    }
    await upgradePasswordIfNeeded(user.password, password, async (hashedPwd) => {
      await dbStorage.db.update(users).set({ password: hashedPwd }).where(eq2(users.id, user.id));
    });
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
router.post("/social-login", async (req, res) => {
  try {
    const { provider, socialId, email, name, phone } = req.body;
    if (!provider || !socialId) {
      return res.status(400).json({
        success: false,
        message: "\u0645\u0632\u0648\u062F \u0627\u0644\u062E\u062F\u0645\u0629 \u0648\u0645\u0639\u0631\u0641 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A \u0645\u0637\u0644\u0648\u0628\u0627\u0646"
      });
    }
    console.log(`\u{1F510} \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0627\u062C\u062A\u0645\u0627\u0639\u064A (${provider}):`, socialId);
    let user;
    const socialQuery = provider === "google" ? eq2(users.googleId, socialId) : eq2(users.appleId, socialId);
    const existingSocialUser = await dbStorage.db.select().from(users).where(socialQuery).limit(1);
    if (existingSocialUser.length > 0) {
      user = existingSocialUser[0];
    } else if (email) {
      const existingEmailUser = await dbStorage.db.select().from(users).where(eq2(users.email, email)).limit(1);
      if (existingEmailUser.length > 0) {
        user = existingEmailUser[0];
        const updateData = {};
        if (provider === "google") updateData.googleId = socialId;
        if (provider === "apple") updateData.appleId = socialId;
        await dbStorage.db.update(users).set(updateData).where(eq2(users.id, user.id));
        console.log(`\u{1F517} \u062A\u0645 \u0631\u0628\u0637 \u062D\u0633\u0627\u0628 ${provider} \u0628\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u0648\u062C\u0648\u062F:`, email);
      }
    }
    if (!user) {
      console.log(`\u{1F195} \u0625\u0646\u0634\u0627\u0621 \u0645\u0633\u062A\u062E\u062F\u0645 \u062C\u062F\u064A\u062F \u0639\u0628\u0631 ${provider}:`, name);
      const [newUser] = await dbStorage.db.insert(users).values({
        name: name || "\u0645\u0633\u062A\u062E\u062F\u0645 \u062C\u062F\u064A\u062F",
        email: email || null,
        phone: phone || "0000000000",
        // قيمة افتراضية إذا لم يتوفر رقم الهاتف
        googleId: provider === "google" ? socialId : null,
        appleId: provider === "apple" ? socialId : null,
        isActive: true
      }).returning();
      user = newUser;
    }
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: "\u0627\u0644\u062D\u0633\u0627\u0628 \u063A\u064A\u0631 \u0645\u0641\u0639\u0644"
      });
    }
    const token = user.id;
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        userType: "customer"
      },
      message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D"
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A:", error);
    res.status(500).json({
      success: false,
      message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645"
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
        eq2(adminUsers.username, email),
        eq2(adminUsers.phone, email)
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
    const isPasswordValid = await verifyPassword(password, admin.password);
    if (!isPasswordValid) {
      console.log("\u274C \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629 \u0644\u0644\u0645\u062F\u064A\u0631:", email);
      return res.status(401).json({
        success: false,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
      });
    }
    await upgradePasswordIfNeeded(admin.password, password, async (hashedPwd) => {
      await dbStorage.db.update(adminUsers).set({ password: hashedPwd }).where(eq2(adminUsers.id, admin.id));
    });
    const token = admin.id;
    console.log("\u{1F389} \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0646\u062C\u0627\u062D \u0644\u0644\u0645\u062F\u064A\u0631:", admin.name);
    let permissions = [];
    try {
      permissions = admin.permissions ? JSON.parse(admin.permissions) : [];
    } catch {
    }
    res.json({
      success: true,
      token,
      user: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
        userType: admin.userType,
        permissions
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
    const isPasswordValid = await verifyPassword(password, driver.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
      });
    }
    await upgradePasswordIfNeeded(driver.password, password, async (hashedPwd) => {
      await dbStorage.db.update(drivers).set({ password: hashedPwd }).where(eq2(drivers.id, driver.id));
    });
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
import { randomUUID as randomUUID2 } from "crypto";

// server/db-advanced.ts
init_schema();
import { eq as eq3, and as and2, desc as desc2, gte, lte } from "drizzle-orm";
var AdvancedDatabaseStorage = class {
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
    const result = await this.db.update(driverEarningsTable).set(earnings).where(eq3(driverEarningsTable.driverId, driverId)).returning();
    return result[0];
  }
  async getDriverEarnings(driverId) {
    const result = await this.db.select().from(driverEarningsTable).where(eq3(driverEarningsTable.driverId, driverId));
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
  // Driver Wallets (Balances)
  async createDriverWallet(balance) {
    const result = await this.db.insert(driverBalances).values(balance).returning();
    return result[0];
  }
  async getDriverWallet(driverId) {
    const result = await this.db.select().from(driverBalances).where(eq3(driverBalances.driverId, driverId));
    return result[0] || null;
  }
  async updateDriverWallet(driverId, updates) {
    const result = await this.db.update(driverBalances).set({ ...updates, updatedAt: /* @__PURE__ */ new Date() }).where(eq3(driverBalances.driverId, driverId)).returning();
    return result[0];
  }
  async addDriverWalletBalance(driverId, amount) {
    const wallet = await this.getDriverWallet(driverId);
    if (!wallet) {
      return await this.createDriverWallet({
        driverId,
        totalBalance: amount.toString(),
        availableBalance: amount.toString(),
        withdrawnAmount: "0",
        pendingAmount: "0"
      });
    }
    const currentAvailable = parseFloat(wallet.availableBalance?.toString() || "0");
    const currentTotal = parseFloat(wallet.totalBalance?.toString() || "0");
    return await this.updateDriverWallet(driverId, {
      availableBalance: (currentAvailable + amount).toString(),
      totalBalance: (currentTotal + amount).toString()
    });
  }
  async deductDriverWalletBalance(driverId, amount) {
    const wallet = await this.getDriverWallet(driverId);
    if (!wallet) throw new Error("Wallet not found");
    const currentAvailable = parseFloat(wallet.availableBalance?.toString() || "0");
    const currentTotal = parseFloat(wallet.totalBalance?.toString() || "0");
    if (currentAvailable < amount) throw new Error("Insufficient balance");
    return await this.updateDriverWallet(driverId, {
      availableBalance: (currentAvailable - amount).toString(),
      totalBalance: (currentTotal - amount).toString()
    });
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
  // التقارير المتقدمة الجديدة
  async getDailyRevenue(days = 30) {
    const startDate = /* @__PURE__ */ new Date();
    startDate.setDate(startDate.getDate() - days);
    const recentOrders = await this.db.select().from(orders).where(and2(
      eq3(orders.status, "delivered"),
      gte(orders.createdAt, startDate)
    ));
    const revenueByDay = {};
    for (let i = 0; i <= days; i++) {
      const d = /* @__PURE__ */ new Date();
      d.setDate(d.getDate() - i);
      revenueByDay[d.toISOString().split("T")[0]] = 0;
    }
    recentOrders.forEach((order) => {
      const day = order.createdAt.toISOString().split("T")[0];
      if (revenueByDay[day] !== void 0) {
        revenueByDay[day] += parseFloat(order.totalAmount?.toString() || "0");
      }
    });
    return Object.entries(revenueByDay).map(([date, amount]) => ({ date, amount })).sort((a, b) => a.date.localeCompare(b.date));
  }
  async getCustomerRetentionStats() {
    const allOrders = await this.db.select().from(orders);
    const customerOrderCount = {};
    allOrders.forEach((order) => {
      if (order.customerId) {
        customerOrderCount[order.customerId] = (customerOrderCount[order.customerId] || 0) + 1;
      }
    });
    const counts = Object.values(customerOrderCount);
    const totalCustomers = counts.length;
    const returningCustomers = counts.filter((c) => c > 1).length;
    const newCustomers = totalCustomers - returningCustomers;
    return {
      newCustomers,
      returningCustomers,
      retentionRate: totalCustomers > 0 ? returningCustomers / totalCustomers * 100 : 0
    };
  }
  async getTopDeliveryAreas(limit = 5) {
    const allOrders = await this.db.select().from(orders);
    const areaCounts = {};
    allOrders.forEach((order) => {
      const address = order.deliveryAddress || "";
      const area = address.split(",")[0].trim();
      if (area) {
        areaCounts[area] = (areaCounts[area] || 0) + 1;
      }
    });
    return Object.entries(areaCounts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, limit);
  }
  async getInactiveUsers(days = 7) {
    const thresholdDate = /* @__PURE__ */ new Date();
    thresholdDate.setDate(thresholdDate.getDate() - days);
    const allUsers = await this.db.select().from(users);
    const recentOrders = await this.db.select().from(orders).where(gte(orders.createdAt, thresholdDate));
    const activeCustomerIds = new Set(recentOrders.map((o) => o.customerId).filter(Boolean));
    const inactiveUsers = allUsers.filter((u) => !activeCustomerIds.has(u.id));
    return inactiveUsers;
  }
};

// server/routes/customer.ts
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
router3.get("/app/dashboard", requireDriverAuth, async (req, res) => {
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
      (order) => ["preparing", "ready", "picked_up", "on_way"].includes(order.status)
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
router3.get("/orders/available", requireDriverAuth, async (req, res) => {
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
router3.get("/orders", requireDriverAuth, async (req, res) => {
  try {
    const driverId = req.driverId;
    const { status } = req.query;
    const allOrders = await storage.getOrders();
    let driverOrders = allOrders.filter((order) => order.driverId === driverId);
    if (status === "active") {
      driverOrders = driverOrders.filter(
        (order) => ["preparing", "ready", "picked_up", "on_way"].includes(order.status)
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
router3.post("/orders/:id/accept", requireDriverAuth, async (req, res) => {
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
    const deliveryFee = parseFloat(order.deliveryFee?.toString() || "0") || 0;
    const commissionAmount = deliveryFee * commissionRate / 100;
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
router3.put("/orders/:id/status", requireDriverAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status, location } = req.body;
    const driverId = req.driverId;
    const order = await storage.getOrder(id);
    if (!order) return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    if (order.driverId !== driverId) return res.status(403).json({ error: "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0644\u0643" });
    const allowedStatuses = ["preparing", "ready", "picked_up", "on_way", "delivered"];
    if (!allowedStatuses.includes(status)) return res.status(400).json({ error: "\u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    if (location) {
      await storage.updateDriver(driverId, { currentLocation: location });
    }
    let updatedOrder;
    if (status === "delivered") {
      updatedOrder = await storage.completeOrder(id);
    } else {
      updatedOrder = await storage.updateOrder(id, { status });
    }
    try {
      const statusMessages = {
        preparing: "\u062C\u0627\u0631\u064A \u062A\u062D\u0636\u064A\u0631 \u0627\u0644\u0637\u0644\u0628",
        ready: "\u0627\u0644\u0637\u0644\u0628 \u062C\u0627\u0647\u0632 \u0644\u0644\u0627\u0633\u062A\u0644\u0627\u0645",
        picked_up: "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0645\u0637\u0639\u0645",
        on_way: "\u0627\u0644\u0633\u0627\u0626\u0642 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642 \u0625\u0644\u064A\u0643",
        delivered: "\u062A\u0645 \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D"
      };
      const statusMessage = statusMessages[status] || `\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0625\u0644\u0649 ${status}`;
      if (order.customerId || order.customerPhone) {
        await storage.createNotification({
          type: "order_status_update",
          title: "\u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628",
          message: `\u0637\u0644\u0628\u0643 \u0631\u0642\u0645 ${order.orderNumber}: ${statusMessage}`,
          recipientType: "customer",
          recipientId: order.customerId || order.customerPhone,
          orderId: id,
          isRead: false
        });
      }
      try {
        await storage.createOrderTracking({
          orderId: id,
          status,
          message: statusMessage,
          createdBy: driverId,
          createdByType: "driver"
        });
      } catch (trackErr) {
        console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0642\u064A\u062F \u0627\u0644\u062A\u062A\u0628\u0639:", trackErr);
      }
      await storage.createNotification({
        type: "order_status_update",
        title: "\u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0633\u0627\u0626\u0642",
        message: `\u0627\u0644\u0637\u0644\u0628 ${order.orderNumber}: ${statusMessage}`,
        recipientType: "admin",
        recipientId: null,
        orderId: id,
        isRead: false
      });
    } catch (notifErr) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0633\u0627\u0626\u0642:", notifErr);
    }
    const ws = req.app.get("ws");
    if (ws) ws.broadcast("order_update", { orderId: id, status, driverId });
    res.json({ success: true, order: updatedOrder });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.post("/location", requireDriverAuth, async (req, res) => {
  try {
    const driverId = req.driverId;
    const { latitude, longitude, currentLocation } = req.body;
    if (!latitude || !longitude) {
      return res.status(400).json({ error: "\u0627\u0644\u0625\u062D\u062F\u0627\u062B\u064A\u0627\u062A \u0645\u0637\u0644\u0648\u0628\u0629" });
    }
    await storage.updateDriver(driverId, {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      currentLocation: currentLocation || void 0
    });
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("driver_location", {
        driverId,
        latitude,
        longitude,
        timestamp: /* @__PURE__ */ new Date()
      });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0648\u0642\u0639:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.get("/orders/:id", requireDriverAuth, async (req, res) => {
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
router3.get("/stats", requireDriverAuth, async (req, res) => {
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
router3.get("/balance", requireDriverAuth, async (req, res) => {
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
router3.post("/status", requireDriverAuth, async (req, res) => {
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
router3.post("/location", requireDriverAuth, async (req, res) => {
  try {
    const driverId = req.driverId;
    const { latitude, longitude, address } = req.body;
    if (latitude === void 0 || longitude === void 0) {
      return res.status(400).json({ error: "\u0627\u0644\u0625\u062D\u062F\u0627\u062B\u064A\u0627\u062A \u0645\u0637\u0644\u0648\u0628\u0629" });
    }
    await storage.updateDriver(driverId, {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      currentLocation: address || void 0
    });
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("driver_location", {
        driverId,
        latitude,
        longitude,
        timestamp: /* @__PURE__ */ new Date()
      });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0645\u0648\u0642\u0639 \u0627\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.post("/withdraw", requireDriverAuth, async (req, res) => {
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
router3.get("/profile", requireDriverAuth, async (req, res) => {
  try {
    const driverId = req.driverId;
    const driver = await storage.getDriver(driverId);
    if (!driver) return res.status(404).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json({ success: true, driver });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.put("/profile", requireDriverAuth, async (req, res) => {
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
router3.get("/wasalni", requireDriverAuth, async (req, res) => {
  try {
    const driverId = req.driverId;
    const { status } = req.query;
    const db5 = storage.db;
    if (!db5) return res.status(500).json({ error: "Database not available" });
    const { wasalniRequests: wasalniRequests3 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const { eq: eq10 } = await import("drizzle-orm");
    let results = await db5.select().from(wasalniRequests3).where(eq10(wasalniRequests3.driverId, driverId));
    if (status === "available") {
      results = results.filter((r) => r.status === "confirmed");
    } else if (status === "active") {
      results = results.filter((r) => ["confirmed", "on_way"].includes(r.status));
    } else if (status === "history") {
      results = results.filter((r) => ["delivered", "cancelled"].includes(r.status));
    }
    results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(results);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0648\u0635\u0644 \u0644\u064A \u0644\u0644\u0633\u0627\u0626\u0642:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router3.put("/wasalni/:id/status", requireDriverAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const driverId = req.driverId;
    const db5 = storage.db;
    if (!db5) return res.status(500).json({ error: "Database not available" });
    const { wasalniRequests: wasalniRequests3 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const { eq: eq10 } = await import("drizzle-orm");
    const [request] = await db5.select().from(wasalniRequests3).where(eq10(wasalniRequests3.id, id));
    if (!request) return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    if (request.driverId !== driverId) return res.status(403).json({ error: "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0644\u0643 \u0628\u062A\u062D\u062F\u064A\u062B \u0647\u0630\u0627 \u0627\u0644\u0637\u0644\u0628" });
    const allowedStatuses = ["on_way", "delivered", "cancelled"];
    if (!allowedStatuses.includes(status)) return res.status(400).json({ error: "\u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    const [updated] = await db5.update(wasalniRequests3).set({ status, updatedAt: /* @__PURE__ */ new Date() }).where(eq10(wasalniRequests3.id, id)).returning();
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("order_update", { orderId: id, status, type: "wasalni", driverId });
    }
    const statusMessages = {
      on_way: "\u0627\u0644\u0633\u0627\u0626\u0642 \u0641\u064A \u0637\u0631\u064A\u0642\u0647 \u0644\u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643",
      delivered: "\u062A\u0645 \u062A\u0646\u0641\u064A\u0630 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0628\u0646\u062C\u0627\u062D",
      cancelled: "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0645\u0646 \u0642\u0650\u0628\u0644 \u0627\u0644\u0633\u0627\u0626\u0642"
    };
    if (request.customerId || request.customerPhone) {
      await storage.createNotification({
        type: "wasalni_status_update",
        title: "\u062A\u062D\u062F\u064A\u062B \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A",
        message: `${statusMessages[status] || "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628"} - \u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628: ${request.requestNumber}`,
        recipientType: "customer",
        recipientId: request.customerId || request.customerPhone,
        orderId: id,
        isRead: false
      });
    }
    await storage.createNotification({
      type: "wasalni_status_update",
      title: "\u062A\u062D\u062F\u064A\u062B \u0648\u0635\u0644 \u0644\u064A \u0645\u0646 \u0627\u0644\u0633\u0627\u0626\u0642",
      message: `\u0627\u0644\u0637\u0644\u0628 ${request.requestNumber}: ${statusMessages[status] || status}`,
      recipientType: "admin",
      recipientId: null,
      orderId: id,
      isRead: false
    });
    if (status === "delivered" || status === "cancelled") {
      await storage.updateDriver(driverId, { isAvailable: true });
    }
    res.json({ success: true, request: updated });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0648\u0635\u0644 \u0644\u064A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
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
var driver_default = router3;

// server/routes/orders.ts
import express6 from "express";

// server/services/deliveryFeeService.ts
var DEFAULT_BASE_FEE = 5;
var DEFAULT_PER_KM_FEE = 2;
var DEFAULT_MIN_FEE = 3;
var DEFAULT_MAX_FEE = 50;
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
async function getDeliveryFeeSettings() {
  try {
    const globalSettings = await storage.getDeliveryFeeSettings();
    if (globalSettings && globalSettings.type) {
      return {
        type: globalSettings.type,
        baseFee: Math.max(0, parseFloat(globalSettings.baseFee || "0")),
        perKmFee: Math.max(0, parseFloat(globalSettings.perKmFee || "0")),
        minFee: Math.max(0, parseFloat(globalSettings.minFee || "0")),
        maxFee: Math.max(0, parseFloat(globalSettings.maxFee || DEFAULT_MAX_FEE.toString())),
        freeDeliveryThreshold: Math.max(0, parseFloat(globalSettings.freeDeliveryThreshold || "0"))
      };
    }
  } catch (error) {
    console.error("Error fetching delivery fee settings:", error);
  }
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
  const [geoZones2, deliveryRules2, discounts, deliverySettings, restaurant] = await Promise.all([
    storage.getGeoZones(),
    storage.getDeliveryRules(),
    storage.getDeliveryDiscounts(),
    getDeliveryFeeSettings(),
    restaurantId ? storage.getRestaurant(restaurantId) : Promise.resolve(null)
  ]);
  const activeGeoZones = geoZones2.filter((z6) => z6.isActive);
  const activeRules = deliveryRules2.filter((r) => r.isActive);
  const activeDiscounts = discounts.filter((d) => d.isActive);
  let storeLocation = { lat: 0, lng: 0 };
  if (restaurant && restaurant.latitude && restaurant.longitude) {
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
    try {
      const recentOrders = await storage.getOrdersByCustomer(customerPhone);
      const sixtySecondsAgo = new Date(Date.now() - 60 * 1e3);
      const incomingTotal = parseFloat(String(totalAmount));
      const isDuplicate = recentOrders.some((order2) => {
        const orderTime = new Date(order2.createdAt);
        const orderTotal = parseFloat(order2.totalAmount);
        return orderTime > sixtySecondsAgo && Math.abs(orderTotal - incomingTotal) < 0.01 && order2.status !== "cancelled";
      });
      if (isDuplicate) {
        return res.status(400).json({
          error: "\u0644\u0642\u062F \u0642\u0645\u062A \u0628\u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u0645\u0645\u0627\u062B\u0644 \u0645\u0624\u062E\u0631\u0627\u064B\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629 \u0623\u0648 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0642\u0627\u0626\u0645\u0629 \u0637\u0644\u0628\u0627\u062A\u0643 \u0644\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0648\u0635\u0648\u0644 \u0627\u0644\u0637\u0644\u0628"
        });
      }
    } catch (err) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u062A\u0643\u0631\u0631\u0629:", err);
    }
    const isScheduledOrder = deliveryPreference === "scheduled";
    try {
      const allSettings = await storage.getUiSettings();
      const settingsMap = new Map(allSettings.map((s) => [s.key, s.value]));
      const storeStatus = settingsMap.get("store_status");
      const openingTime = settingsMap.get("opening_time") || "08:00";
      const closingTime = settingsMap.get("closing_time") || "23:00";
      const allowScheduledWhenClosed = settingsMap.get("allow_scheduled_orders_when_closed") !== "false";
      if (storeStatus === "closed") {
        if (!isScheduledOrder || !allowScheduledWhenClosed) {
          return res.status(400).json({
            error: "\u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u063A\u0644\u0642 \u062D\u0627\u0644\u064A\u0627\u064B \u0645\u0646 \u0642\u0650\u0628\u0644 \u0627\u0644\u0625\u062F\u0627\u0631\u0629",
            code: "APP_CLOSED",
            message: "\u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u063A\u0644\u0642 \u062D\u0627\u0644\u064A\u0627\u064B \u0645\u0646 \u0642\u0650\u0628\u0644 \u0627\u0644\u0625\u062F\u0627\u0631\u0629"
          });
        }
      }
      if (storeStatus === "open") {
      } else if (!isScheduledOrder) {
        const now = /* @__PURE__ */ new Date();
        const currentTime = now.toTimeString().slice(0, 5);
        const timeToMinutes2 = (t) => {
          const [h, m] = t.split(":").map(Number);
          return h * 60 + m;
        };
        const current = timeToMinutes2(currentTime);
        const open = timeToMinutes2(openingTime);
        const close = timeToMinutes2(closingTime);
        let appIsOpen = close > open ? current >= open && current < close : current >= open || current < close;
        if (!appIsOpen) {
          const isBeforeOpen = current < open;
          const whenOpen = isBeforeOpen ? `\u064A\u0641\u062A\u062D \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0633\u0627\u0639\u0629 ${openingTime}` : `\u064A\u0641\u062A\u062D \u063A\u062F\u0627\u064B \u0627\u0644\u0633\u0627\u0639\u0629 ${openingTime}`;
          return res.status(400).json({
            error: `\u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u063A\u0644\u0642 \u062D\u0627\u0644\u064A\u0627\u064B. ${whenOpen}`
          });
        }
      }
    } catch (_) {
    }
    let restaurant = null;
    if (restaurantId) {
      restaurant = await storage.getRestaurant(restaurantId);
    }
    if (restaurant) {
      const orderStatus2 = canOrderFromRestaurant(restaurant);
      if (!orderStatus2.canOrder) {
        return res.status(400).json({
          error: orderStatus2.message || "\u0627\u0644\u0645\u0637\u0639\u0645 \u0645\u063A\u0644\u0642 \u062D\u0627\u0644\u064A\u0627\u064B"
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
    const driverEarnings = deliveryFeeNum * defaultDriverCommissionRate / 100;
    const companyEarnings = restaurantCommissionAmount + (deliveryFeeNum - driverEarnings);
    const orderStatus = isScheduledOrder ? "scheduled" : "pending";
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
      status: orderStatus,
      items: itemsString,
      subtotal: String(subtotalNum),
      deliveryFee: String(deliveryFeeNum),
      distance: String(distance),
      total: String(subtotalNum + deliveryFeeNum),
      totalAmount: String(subtotalNum + deliveryFeeNum),
      driverEarnings: String(driverEarnings),
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
      const adminNotifTitle = isScheduledOrder ? "\u0637\u0644\u0628 \u0645\u062C\u062F\u0648\u0644 \u062C\u062F\u064A\u062F" : "\u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0639\u064A\u064A\u0646";
      const adminNotifMsg = isScheduledOrder ? `\u0637\u0644\u0628 \u0645\u062C\u062F\u0648\u0644 \u0631\u0642\u0645 ${orderNumber} \u0645\u0646 ${customerName}. \u0645\u0648\u0639\u062F \u0627\u0644\u062A\u0648\u0635\u064A\u0644: ${req.body.scheduledDate} ${req.body.scheduledTimeSlot}` : `\u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0631\u0642\u0645 ${orderNumber} \u0645\u0646 ${customerName} \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0639\u064A\u064A\u0646 \u0633\u0627\u0626\u0642. \u0627\u0644\u0645\u0648\u0642\u0639: ${deliveryAddress}`;
      await storage.createNotification({
        type: isScheduledOrder ? "new_scheduled_order" : "new_order_pending_assignment",
        title: adminNotifTitle,
        message: adminNotifMsg,
        recipientType: "admin",
        recipientId: null,
        orderId: order.id,
        isRead: false
      });
      if (customerId || customerPhone) {
        await storage.createNotification({
          type: "order_status_update",
          title: isScheduledOrder ? "\u062A\u0645 \u062C\u062F\u0648\u0644\u0629 \u0637\u0644\u0628\u0643" : "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643",
          message: isScheduledOrder ? `\u062A\u0645 \u062C\u062F\u0648\u0644\u0629 \u0637\u0644\u0628\u0643 \u0631\u0642\u0645 ${orderNumber} \u0644\u0644\u062A\u0648\u0635\u064A\u0644 \u0641\u064A ${req.body.scheduledDate} ${req.body.scheduledTimeSlot}` : `\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643 \u0631\u0642\u0645 ${orderNumber} \u0648\u0647\u0648 \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u062D\u0627\u0644\u064A\u0627\u064B`,
          recipientType: "customer",
          recipientId: customerId || customerPhone,
          orderId: order.id,
          isRead: false
        });
      }
      await storage.createOrderTracking({
        orderId: order.id,
        status: orderStatus,
        message: isScheduledOrder ? `\u062A\u0645 \u062C\u062F\u0648\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0644\u0644\u062A\u0648\u0635\u064A\u0644 \u0641\u064A ${req.body.scheduledDate} ${req.body.scheduledTimeSlot}` : "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 \u0648\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629",
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
    const driverEarnings = deliveryFeeNum * driverCommissionRate / 100;
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
    const companyEarnings = restaurantCommissionAmount + (deliveryFeeNum - driverEarnings);
    const updatedOrder = await storage.updateOrder(id, {
      driverId,
      driverEarnings: String(driverEarnings),
      companyEarnings: String(companyEarnings),
      status: "assigned",
      // تعيين الطلب للسائق أولاً
      updatedAt: /* @__PURE__ */ new Date()
    });
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("order_update", {
        orderId: id,
        status: "assigned",
        driverId,
        driverName: driver?.name,
        type: "regular",
        orderNumber: order.orderNumber
      });
      if (ws.sendToDriver) {
        ws.sendToDriver(driverId, "new_order_assigned", {
          orderId: id,
          status: "assigned",
          message: `\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0631\u0642\u0645 ${order.orderNumber} \u0644\u0643`,
          type: "regular",
          orderData: updatedOrder
        });
      }
    }
    try {
      await storage.createNotification({
        type: "driver_assigned",
        title: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062F \u0633\u0627\u0626\u0642 \u0644\u0637\u0644\u0628\u0643",
        message: `\u062A\u0645 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0633\u0627\u0626\u0642 ${driver?.name || "\u0645\u0646\u062F\u0648\u0628\u0646\u0627"} \u0644\u062A\u0648\u0635\u064A\u0644 \u0637\u0644\u0628\u0643 \u0631\u0642\u0645 ${order.orderNumber}`,
        recipientType: "customer",
        recipientId: order.customerId || order.customerPhone,
        orderId: id,
        isRead: false
      });
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
      await storage.createNotification({
        type: "order_status_update",
        title: "\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0633\u0627\u0626\u0642 \u0644\u0637\u0644\u0628\u0643",
        message: `\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642 ${driver.name} \u0644\u062A\u0648\u0635\u064A\u0644 \u0637\u0644\u0628\u0643 \u0631\u0642\u0645 ${order.orderNumber}. \u0627\u0644\u0633\u0627\u0626\u0642 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642 \u0627\u0644\u0622\u0646.`,
        recipientType: "customer",
        recipientId: order.customerId || order.customerPhone,
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
router4.put("/:id/prices", async (req, res) => {
  try {
    const { id } = req.params;
    const { items, deliveryFee, subtotal, totalAmount, priceAdjustmentNote } = req.body;
    const order = await storage.getOrder(id);
    if (!order) {
      return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    const updatedOrder = await storage.updateOrder(id, {
      items: typeof items === "string" ? items : JSON.stringify(items),
      deliveryFee: deliveryFee?.toString(),
      subtotal: subtotal?.toString(),
      totalAmount: totalAmount?.toString(),
      notes: priceAdjustmentNote ? `${order.notes ? order.notes + "\n" : ""}[\u062A\u0639\u062F\u064A\u0644 \u0645\u062F\u064A\u0631: ${priceAdjustmentNote}]` : order.notes,
      updatedAt: /* @__PURE__ */ new Date()
    });
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("order_update", { orderId: id, priceUpdated: true });
    }
    res.json({ success: true, order: updatedOrder });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0639\u062F\u064A\u0644 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router4.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, updatedBy, updatedByType, cancelReason } = req.body;
    if (!status) {
      return res.status(400).json({ error: "\u0627\u0644\u062D\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629" });
    }
    const order = await storage.getOrder(id);
    if (!order) {
      return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    let updatedOrder;
    if (status === "delivered") {
      updatedOrder = await storage.completeOrder(id);
    } else {
      const updateData = {
        status,
        updatedAt: /* @__PURE__ */ new Date()
      };
      if (status === "cancelled" && cancelReason) {
        updateData.cancelReason = cancelReason;
      }
      updatedOrder = await storage.updateOrder(id, updateData);
    }
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("order_update", {
        orderId: id,
        status,
        orderNumber: order.orderNumber,
        type: "regular"
      });
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
        break;
      case "cancelled":
        statusMessage = cancelReason ? `\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628 - \u0627\u0644\u0633\u0628\u0628: ${cancelReason}` : "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628";
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
router4.get("/:orderId/closest-drivers", async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await storage.getOrder(orderId);
    let lat = null;
    let lng = null;
    if (order) {
      if (order.restaurantId) {
        const restaurant = await storage.getRestaurant(order.restaurantId);
        if (restaurant && restaurant.latitude && restaurant.longitude) {
          lat = parseFloat(restaurant.latitude);
          lng = parseFloat(restaurant.longitude);
        }
      }
      if (lat === null && order.customerLocationLat && order.customerLocationLng) {
        lat = parseFloat(order.customerLocationLat);
        lng = parseFloat(order.customerLocationLng);
      }
    } else {
      const db5 = storage.db;
      if (db5) {
        const { wasalniRequests: wasalniRequests3 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
        const { eq: eq10 } = await import("drizzle-orm");
        const [found] = await db5.select().from(wasalniRequests3).where(eq10(wasalniRequests3.id, orderId));
        if (found && found.fromLat && found.fromLng) {
          lat = parseFloat(found.fromLat);
          lng = parseFloat(found.fromLng);
        }
      }
    }
    if (lat === null || lng === null) {
      return res.status(400).json({ error: "\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u062D\u062F\u064A\u062F \u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u0646\u0637\u0644\u0627\u0642 \u0644\u0644\u0637\u0644\u0628" });
    }
    const closestDrivers = await storage.getClosestDrivers(lat, lng, 10);
    res.json(closestDrivers);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0633\u0627\u0626\u0642\u064A\u0646 \u0627\u0644\u0623\u0642\u0631\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router4.get("/number/:orderNumber", async (req, res) => {
  try {
    const { orderNumber } = req.params;
    const db5 = storage.db;
    if (!db5) return res.status(500).json({ error: "Database not available" });
    const { orders: orders3 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const { eq: eq10 } = await import("drizzle-orm");
    const [order] = await db5.select().from(orders3).where(eq10(orders3.orderNumber, orderNumber));
    if (!order) return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0628\u062D\u062B" });
  }
});
router4.get("/:orderId/track", async (req, res) => {
  try {
    const { orderId } = req.params;
    let order = await storage.getOrder(orderId);
    let isWaselLi = false;
    let wasalniRequest = null;
    if (!order) {
      const db5 = storage.db;
      if (db5) {
        const { wasalniRequests: wasalniRequests3 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
        const { eq: eq10 } = await import("drizzle-orm");
        const [found] = await db5.select().from(wasalniRequests3).where(eq10(wasalniRequests3.id, orderId));
        wasalniRequest = found;
      }
      if (!wasalniRequest) {
        return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      isWaselLi = true;
      order = {
        id: wasalniRequest.id,
        orderNumber: wasalniRequest.requestNumber,
        customerName: wasalniRequest.customerName,
        customerPhone: wasalniRequest.customerPhone,
        deliveryAddress: wasalniRequest.toAddress,
        status: wasalniRequest.status,
        estimatedTime: "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u062F\u064A\u062F",
        driverId: wasalniRequest.driverId,
        isWaselLi: true,
        pickupAddress: wasalniRequest.fromAddress,
        pickupPhone: wasalniRequest.customerPhone,
        pickupName: wasalniRequest.customerName,
        waselLiItemType: wasalniRequest.orderType,
        totalAmount: String(wasalniRequest.estimatedFee || "0"),
        createdAt: wasalniRequest.createdAt,
        items: JSON.stringify([])
      };
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
    let trackingHistory = [];
    try {
      trackingHistory = await storage.getOrderTracking(orderId);
    } catch (err) {
      console.error("Error fetching tracking history:", err);
    }
    const formattedOrder = {
      ...order,
      driverName: driverInfo?.name,
      driverPhone: driverInfo?.phone,
      items: typeof order.items === "string" ? JSON.parse(order.items) : order.items
    };
    let formattedTracking = trackingHistory.map((t) => ({
      id: t.id,
      status: t.status,
      timestamp: t.createdAt,
      description: t.message
    }));
    if (formattedTracking.length === 0) {
      formattedTracking = [
        {
          id: "initial",
          status: order.status || "pending",
          timestamp: order.createdAt,
          description: isWaselLi ? "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A" : "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 \u0648\u062C\u0627\u0631\u064A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629"
        }
      ];
    }
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
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("order_update", {
        orderId,
        status: "cancelled",
        orderNumber: order.orderNumber,
        type: "regular"
      });
    }
    try {
      const statusMessage = reason ? `\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628 - \u0627\u0644\u0633\u0628\u0628: ${reason}` : "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628";
      await storage.createNotification({
        type: "order_status_update",
        title: "\u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628",
        message: `\u0637\u0644\u0628\u0643 \u0631\u0642\u0645 ${order.orderNumber}: ${statusMessage}`,
        recipientType: "customer",
        recipientId: order.customerId || order.customerPhone,
        orderId,
        isRead: false
      });
      await storage.createOrderTracking({
        orderId,
        status: "cancelled",
        message: statusMessage,
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
      freeDeliveryThreshold: validateNumber(validatedData.freeDeliveryThreshold, "\u062D\u062F \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0645\u062C\u0627\u0646\u064A")
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
      console.log(`\u2705 \u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0628\u0646\u062C\u0627\u062D`);
      deliveryFeeCache.clear();
      broadcastSettingsChanged("delivery_fee_settings");
      return res.json({
        success: true,
        message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0628\u0646\u062C\u0627\u062D",
        settings: updated
      });
    }
    console.log(`\u2728 \u0625\u0646\u0634\u0627\u0621 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u062C\u062F\u064A\u062F\u0629`);
    const newSettings = await storage.createDeliveryFeeSettings(sanitizedData);
    console.log(`\u2705 \u062A\u0645 \u0627\u0644\u0625\u0646\u0634\u0627\u0621 \u0628\u0646\u062C\u0627\u062D`);
    deliveryFeeCache.clear();
    broadcastSettingsChanged("delivery_fee_settings");
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
import bcrypt3 from "bcryptjs";
init_schema();
import { z as z4 } from "zod";
import { eq as eq5, desc as desc3, sql as sql4, inArray as inArray2 } from "drizzle-orm";
var router6 = express8.Router();
var dbStorage2 = new DatabaseStorage();
var db3 = dbStorage2.db;
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
router6.use(async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      const adminUser = await dbStorage2.getAdminById(token);
      if (adminUser && adminUser.isActive) {
        req.admin = adminUser;
        if (adminUser.userType === "sub_admin") {
          try {
            req.adminPermissions = adminUser.permissions ? JSON.parse(adminUser.permissions) : [];
          } catch {
            req.adminPermissions = [];
          }
        } else {
          req.adminPermissions = null;
        }
      }
    }
  } catch (e) {
  }
  next();
});
function requirePermission(permission) {
  return (req, res, next) => {
    if (!req.admin) return next();
    if (req.admin.userType === "admin") return next();
    const perms = req.adminPermissions || [];
    if (!perms.includes(permission)) {
      return res.status(403).json({ error: "\u0644\u064A\u0633 \u0644\u062F\u064A\u0643 \u0635\u0644\u0627\u062D\u064A\u0629 \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0648\u0638\u064A\u0641\u0629" });
    }
    next();
  };
}
router6.get("/dashboard", async (req, res) => {
  try {
    const [restaurants3, orders3, drivers2, users2] = await Promise.all([
      storage.getRestaurants(),
      storage.getOrders(),
      storage.getDrivers(),
      storage.getUsers ? storage.getUsers() : []
    ]);
    const today = (/* @__PURE__ */ new Date()).toDateString();
    const totalRestaurants = restaurants3.length;
    const totalOrders = orders3.length;
    const totalDrivers = drivers2.length;
    const totalCustomers = users2.length;
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
    broadcastSettingsChanged("restaurants");
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
    broadcastSettingsChanged("restaurants");
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
router6.get("/restaurants/:restaurantId/sections", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const sections = await storage.getRestaurantSections(restaurantId);
    res.json(sections);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/restaurant-sections", async (req, res) => {
  try {
    const section = await storage.createRestaurantSection(req.body);
    res.status(201).json(section);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/restaurant-sections/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const section = await storage.updateRestaurantSection(id, req.body);
    if (!section) return res.status(404).json({ error: "\u0627\u0644\u0642\u0633\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json(section);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0642\u0633\u0645 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/restaurant-sections/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const success = await storage.deleteRestaurantSection(id);
    if (!success) return res.status(404).json({ error: "\u0627\u0644\u0642\u0633\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0642\u0633\u0645 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
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
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("order_update", {
        orderId: id,
        status,
        orderNumber: updatedOrder.orderNumber,
        type: "regular"
      });
    }
    let statusMessage = "";
    switch (status) {
      case "confirmed":
        statusMessage = "\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628";
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
        break;
      case "cancelled":
        statusMessage = "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0625\u062F\u0627\u0631\u0629";
        break;
      default:
        statusMessage = `\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0625\u0644\u0649 ${status}`;
    }
    try {
      await storage.createOrderTracking({
        orderId: id,
        status,
        message: statusMessage,
        createdBy: req.admin?.id || "admin",
        createdByType: "admin"
      });
      await storage.createNotification({
        type: "order_status_update",
        title: "\u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628",
        message: `\u0637\u0644\u0628\u0643 \u0631\u0642\u0645 ${updatedOrder.orderNumber}: ${statusMessage}`,
        recipientType: "customer",
        recipientId: updatedOrder.customerId || updatedOrder.customerPhone,
        orderId: id,
        isRead: false
      });
    } catch (err) {
      console.error("Error creating tracking/notification in admin update:", err);
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
    const [users2, orders3] = await Promise.all([
      storage.getUsers(),
      storage.getOrders()
    ]);
    const deliveredOrders = orders3.filter((o) => o.status === "delivered");
    const userStats = users2.map((user) => {
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
    const newUsersCount = users2.filter((u) => {
      const thirtyDaysAgo = /* @__PURE__ */ new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return new Date(u.createdAt) >= thirtyDaysAgo;
    }).length;
    res.json({
      totalUsers: users2.length,
      newUsersLast30Days: newUsersCount,
      topUsers
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/drivers-summary", async (req, res) => {
  try {
    const driversList = await storage.getDrivers();
    const allOrders = await storage.getOrders();
    const summary = await Promise.all(
      driversList.map(async (driver) => {
        const driverOrders = allOrders.filter((o) => o.driverId === driver.id && o.status === "delivered");
        const totalEarnings = driverOrders.reduce((sum, o) => sum + parseFloat(o.deliveryFee || "0"), 0);
        const balance = await storage.getDriverBalance(driver.id).catch(() => null);
        return {
          id: driver.id,
          name: driver.name,
          phone: driver.phone,
          isAvailable: driver.isAvailable,
          stats: {
            totalOrders: driverOrders.length,
            totalEarnings: balance ? parseFloat(balance.totalBalance || "0") : totalEarnings,
            averageRating: parseFloat(driver.rating || "0"),
            availableBalance: balance ? parseFloat(balance.availableBalance || "0") : 0
          }
        };
      })
    );
    res.json(summary);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0645\u0644\u062E\u0635 \u0627\u0644\u0633\u0627\u0626\u0642\u064A\u0646:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/restaurants-summary", async (req, res) => {
  try {
    const allRestaurants = await storage.getRestaurants({});
    const allOrders = await storage.getOrders();
    const summary = allRestaurants.map((restaurant) => {
      const restaurantOrders = allOrders.filter((o) => o.restaurantId === restaurant.id && o.status === "delivered");
      const totalRevenue = restaurantOrders.reduce((sum, o) => sum + parseFloat(o.totalAmount || o.total || "0"), 0);
      const commissionRate = 0.15;
      const totalCommission = totalRevenue * commissionRate;
      return {
        id: restaurant.id,
        name: restaurant.name,
        phone: restaurant.phone,
        isOpen: restaurant.isOpen,
        stats: {
          totalOrders: restaurantOrders.length,
          totalRevenue,
          totalCommission,
          netEarnings: totalRevenue - totalCommission,
          avgOrderValue: restaurantOrders.length > 0 ? totalRevenue / restaurantOrders.length : 0
        }
      };
    });
    res.json(summary);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0645\u0644\u062E\u0635 \u0627\u0644\u0645\u0637\u0627\u0639\u0645:", error);
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
router6.get("/drivers", async (req, res) => {
  try {
    const drivers2 = await storage.getDrivers();
    res.json(drivers2);
  } catch (error) {
    console.error("Error fetching drivers:", error);
    res.status(500).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u0627\u0626\u0642\u064A\u0646" });
  }
});
router6.get("/drivers/:id/stats", async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await storage.getDriver(id);
    if (!driver) return res.status(404).json({ error: "\u0627\u0644\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    const orders3 = await storage.getOrders();
    const driverOrders = orders3.filter((o) => o.driverId === id);
    const completedOrders = driverOrders.filter((o) => o.status === "delivered");
    const totalEarnings = completedOrders.reduce((sum, o) => sum + parseFloat(o.deliveryFee || "0"), 0);
    res.json({
      totalOrders: driverOrders.length,
      completedOrders: completedOrders.length,
      totalEarnings: totalEarnings.toFixed(2),
      rating: driver.rating || 0
    });
  } catch (error) {
    console.error("Error fetching driver stats:", error);
    res.status(500).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0633\u0627\u0626\u0642" });
  }
});
router6.get("/stats", async (req, res) => {
  try {
    const orders3 = await storage.getOrders();
    const drivers2 = await storage.getDrivers();
    const categories2 = await storage.getCategories();
    const restaurants3 = await storage.getRestaurants();
    const users2 = await storage.getUsers();
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const todayOrders = orders3.filter((o) => new Date(o.createdAt) >= today);
    const totalRevenue = orders3.filter((o) => o.status === "delivered").reduce((sum, o) => sum + parseFloat(o.totalAmount || "0"), 0);
    res.json({
      totalOrders: orders3.length,
      todayOrders: todayOrders.length,
      totalDrivers: drivers2.length,
      activeDrivers: drivers2.filter((d) => d.isAvailable).length,
      totalCategories: categories2.length,
      totalRestaurants: restaurants3.length,
      totalUsers: users2.length,
      totalRevenue: totalRevenue.toFixed(2)
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A" });
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
      createdBy: req.admin?.id || null
    };
    const [newNotification] = await db3.insert(schema.notifications).values(notificationData).returning();
    broadcastEvent("new_notification", {
      notification: newNotification,
      recipientType: notificationData.recipientType,
      recipientId: notificationData.recipientId,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    res.json(newNotification);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u0634\u0639\u0627\u0631:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/notifications", async (req, res) => {
  try {
    const { recipientType, recipientId, limit: limitParam } = req.query;
    const limitNum = parseInt(limitParam) || 50;
    let query = db3.select().from(schema.notifications).orderBy(desc3(schema.notifications.createdAt)).limit(limitNum);
    const notifs = await query;
    res.json(notifs);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/settings", async (req, res) => {
  try {
    const settings = await db3.select().from(schema.systemSettings).orderBy(schema.systemSettings.category, schema.systemSettings.key);
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/settings/:key", async (req, res) => {
  try {
    const { key } = req.params;
    const { value } = req.body;
    const [updatedSetting] = await db3.update(schema.systemSettings).set({ value, updatedAt: /* @__PURE__ */ new Date() }).where(eq5(schema.systemSettings.key, key)).returning();
    broadcastSettingsChanged(key);
    res.json(updatedSetting);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/business-hours", async (req, res) => {
  try {
    const { opening_time, closing_time, store_status } = req.body;
    const updates = [];
    if (opening_time) {
      updates.push(
        db3.update(schema.systemSettings).set({ value: opening_time, updatedAt: /* @__PURE__ */ new Date() }).where(eq5(schema.systemSettings.key, "opening_time"))
      );
    }
    if (closing_time) {
      updates.push(
        db3.update(schema.systemSettings).set({ value: closing_time, updatedAt: /* @__PURE__ */ new Date() }).where(eq5(schema.systemSettings.key, "closing_time"))
      );
    }
    if (store_status) {
      updates.push(
        db3.update(schema.systemSettings).set({ value: store_status, updatedAt: /* @__PURE__ */ new Date() }).where(eq5(schema.systemSettings.key, "store_status"))
      );
    }
    await Promise.all(updates);
    broadcastSettingsChanged("business_hours");
    res.json({ success: true, message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0639\u0645\u0644:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/users", async (req, res) => {
  try {
    const customers2 = await db3.select({
      id: schema.customers.id,
      name: schema.customers.name,
      email: schema.customers.email,
      phone: schema.customers.phone,
      role: sql4`'customer'`,
      isActive: schema.customers.isActive,
      createdAt: schema.customers.createdAt,
      address: sql4`NULL`
    }).from(schema.customers);
    const adminUsers2 = await db3.select({
      id: schema.adminUsers.id,
      name: schema.adminUsers.name,
      email: schema.adminUsers.email,
      phone: schema.adminUsers.phone,
      role: schema.adminUsers.userType,
      isActive: schema.adminUsers.isActive,
      createdAt: schema.adminUsers.createdAt,
      address: sql4`NULL`
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
    const customerResult = await db3.select().from(schema.customers).where(eq5(schema.customers.id, id)).limit(1);
    if (customerResult.length > 0) {
      currentUser = customerResult[0];
      targetTable = "customers";
    } else {
      const adminResult = await db3.select().from(schema.adminUsers).where(eq5(schema.adminUsers.id, id)).limit(1);
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
        const [newAdminUser] = await db3.insert(schema.adminUsers).values({
          name: name || currentUser.name,
          email: email || currentUser.email,
          phone: phone || currentUser.phone,
          userType: role,
          isActive: isActive !== void 0 ? isActive : currentUser.isActive
        }).returning();
        await db3.delete(schema.customers).where(eq5(schema.customers.id, id));
        updatedUser = { ...newAdminUser, role: newAdminUser.userType };
      } else if (targetTable === "adminUsers" && role === "customer") {
        const [newCustomer] = await db3.insert(schema.customers).values({
          name: name || currentUser.name,
          username: (email || currentUser.email).split("@")[0],
          // استخدام الجزء الأول من البريد كـ username
          email: email || currentUser.email,
          phone: phone || currentUser.phone,
          isActive: isActive !== void 0 ? isActive : currentUser.isActive
        }).returning();
        await db3.delete(schema.adminUsers).where(eq5(schema.adminUsers.id, id));
        updatedUser = { ...newCustomer, role: "customer" };
      } else if (targetTable === "adminUsers") {
        updateData.userType = role;
        const [result] = await db3.update(schema.adminUsers).set(updateData).where(eq5(schema.adminUsers.id, id)).returning();
        updatedUser = { ...result, role: result.userType };
      }
    } else {
      if (targetTable === "customers") {
        delete updateData.userType;
        const [result] = await db3.update(schema.customers).set(updateData).where(eq5(schema.customers.id, id)).returning();
        updatedUser = { ...result, role: "customer" };
      } else {
        if (role && (role === "driver" || role === "admin")) {
          updateData.userType = role;
        }
        const [result] = await db3.update(schema.adminUsers).set(updateData).where(eq5(schema.adminUsers.id, id)).returning();
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
    const customerResult = await db3.select().from(schema.customers).where(eq5(schema.customers.id, id)).limit(1);
    if (customerResult.length > 0) {
      await storage.deleteUser(id);
      res.json({ success: true, message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0646\u062C\u0627\u062D" });
      return;
    }
    const adminResult = await db3.select().from(schema.adminUsers).where(eq5(schema.adminUsers.id, id)).limit(1);
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
    broadcastSettingsChanged(key);
    res.json(setting);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0648\u0627\u062C\u0647\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/coupons", async (req, res) => {
  try {
    const coupons2 = await storage.getCoupons();
    res.json(coupons2);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/coupons", async (req, res) => {
  try {
    const coupon = await storage.createCoupon(req.body);
    res.status(201).json(coupon);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0643\u0648\u0628\u0648\u0646:", error);
    if (error?.code === "23505") {
      return res.status(400).json({ error: "\u0643\u0648\u062F \u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644\u060C \u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0643\u0648\u062F \u0622\u062E\u0631" });
    }
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645: " + (error?.message || "") });
  }
});
router6.put("/coupons/:id", async (req, res) => {
  try {
    const coupon = await storage.updateCoupon(req.params.id, req.body);
    if (!coupon) return res.status(404).json({ error: "\u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json(coupon);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0643\u0648\u0628\u0648\u0646:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/coupons/:id", async (req, res) => {
  try {
    const success = await storage.deleteCoupon(req.params.id);
    if (!success) return res.status(404).json({ error: "\u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0643\u0648\u0628\u0648\u0646:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/reports/detailed", async (req, res) => {
  try {
    const filters = {
      type: req.query.type,
      startDate: req.query.startDate,
      endDate: req.query.endDate
    };
    const report = await storage.getDetailedReport(filters);
    res.json(report);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/payment-methods", async (req, res) => {
  try {
    const methods = await storage.getPaymentMethods();
    const methodsWithDocs = await Promise.all(methods.map(async (m) => {
      const docs = await storage.getPaymentMethodDocuments(m.id);
      return { ...m, documents: docs };
    }));
    res.json(methodsWithDocs);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0631\u0642 \u0627\u0644\u062F\u0641\u0639:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/payment-methods", async (req, res) => {
  try {
    const method = await storage.createPaymentMethod(req.body);
    res.status(201).json(method);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/payment-methods/:id", async (req, res) => {
  try {
    const method = await storage.updatePaymentMethod(req.params.id, req.body);
    if (!method) return res.status(404).json({ error: "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    res.json(method);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/payment-methods/:id", async (req, res) => {
  try {
    const success = await storage.deletePaymentMethod(req.params.id);
    if (!success) return res.status(404).json({ error: "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/payment-methods/:id/documents", async (req, res) => {
  try {
    const docs = await storage.getPaymentMethodDocuments(req.params.id);
    res.json(docs);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0648\u062B\u0627\u0626\u0642 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/payment-methods/:id/documents", async (req, res) => {
  try {
    const doc = await storage.createPaymentMethodDocument({ ...req.body, paymentMethodId: req.params.id });
    res.status(201).json(doc);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0648\u062B\u064A\u0642\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/payment-methods/:id/documents/:docId", async (req, res) => {
  try {
    const doc = await storage.updatePaymentMethodDocument(req.params.docId, req.body);
    if (!doc) return res.status(404).json({ error: "\u0627\u0644\u0648\u062B\u064A\u0642\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    res.json(doc);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0648\u062B\u064A\u0642\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/payment-methods/:id/documents/:docId", async (req, res) => {
  try {
    const success = await storage.deletePaymentMethodDocument(req.params.docId);
    if (!success) return res.status(404).json({ error: "\u0627\u0644\u0648\u062B\u064A\u0642\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    res.json({ success: true });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0648\u062B\u064A\u0642\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/orders/reset-numbers", async (req, res) => {
  try {
    const allOrders = await storage.getOrders();
    const sorted = [...allOrders].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
    const prefix = req.body.prefix || "";
    for (let i = 0; i < sorted.length; i++) {
      const newNumber = `${prefix}${String(i + 1).padStart(4, "0")}`;
      await db3.update(orders).set({ orderNumber: newNumber }).where(eq5(orders.id, sorted[i].id));
    }
    res.json({ success: true, message: `\u062A\u0645 \u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0644\u0633\u0644 ${sorted.length} \u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D` });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0639\u0627\u062F\u0629 \u062A\u0633\u0644\u0633\u0644 \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0637\u0644\u0628\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/backup", async (req, res) => {
  try {
    const [
      allOrders,
      allDrivers,
      allRestaurants,
      allCategories,
      allMenuItems,
      allSpecialOffers,
      allUsers
    ] = await Promise.all([
      storage.getOrders(),
      storage.getDrivers(),
      storage.getRestaurants(),
      storage.getCategories(),
      storage.getAllMenuItems(),
      storage.getSpecialOffers(),
      storage.getUsers ? storage.getUsers() : []
    ]);
    const backup = {
      version: "1.0",
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      data: {
        orders: allOrders,
        drivers: allDrivers,
        restaurants: allRestaurants,
        categories: allCategories,
        menuItems: allMenuItems,
        specialOffers: allSpecialOffers,
        users: allUsers
      },
      counts: {
        orders: allOrders.length,
        drivers: allDrivers.length,
        restaurants: allRestaurants.length,
        categories: allCategories.length,
        menuItems: allMenuItems.length,
        specialOffers: allSpecialOffers.length,
        users: allUsers.length
      }
    };
    const filename = `tamtom-backup-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.json(backup);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/backup/stats", async (req, res) => {
  try {
    const [
      allOrders,
      allDrivers,
      allRestaurants,
      allCategories,
      allMenuItems,
      allSpecialOffers
    ] = await Promise.all([
      storage.getOrders(),
      storage.getDrivers(),
      storage.getRestaurants(),
      storage.getCategories(),
      storage.getAllMenuItems(),
      storage.getSpecialOffers()
    ]);
    res.json({
      counts: {
        orders: allOrders.length,
        drivers: allDrivers.length,
        restaurants: allRestaurants.length,
        categories: allCategories.length,
        menuItems: allMenuItems.length,
        specialOffers: allSpecialOffers.length
      },
      lastBackup: null
    });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/profile", async (req, res) => {
  try {
    let admin = null;
    if (req.admin) {
      admin = req.admin;
    } else {
      const [found] = await db3.select().from(adminUsers).where(eq5(adminUsers.userType, "admin")).limit(1);
      admin = found;
    }
    if (!admin) return res.status(404).json({ error: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0644\u0641 \u0627\u0644\u0645\u062F\u064A\u0631" });
    const { password: _, ...safeAdmin } = admin;
    res.json(safeAdmin);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/profile", async (req, res) => {
  try {
    const { name, email, username, phone } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "\u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0637\u0644\u0648\u0628\u0627\u0646" });
    }
    let adminId;
    if (req.admin) {
      adminId = req.admin.id;
    } else {
      const [found] = await db3.select().from(adminUsers).where(eq5(adminUsers.userType, "admin")).limit(1);
      if (!found) return res.status(404).json({ error: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0644\u0641 \u0627\u0644\u0645\u062F\u064A\u0631" });
      adminId = found.id;
    }
    const updatePayload = {
      name,
      email,
      username: username && username.trim() ? username.trim() : null,
      phone: phone && phone.trim() ? phone.trim() : null
    };
    const [updated] = await db3.update(adminUsers).set(updatePayload).where(eq5(adminUsers.id, adminId)).returning();
    if (!updated) return res.status(404).json({ error: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0644\u0641 \u0627\u0644\u0645\u062F\u064A\u0631" });
    const { password: _, ...safeAdmin } = updated;
    res.json(safeAdmin);
  } catch (error) {
    console.error("\u274C \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0645\u0644\u0641 \u0627\u0644\u0645\u062F\u064A\u0631:", error);
    if (error?.code === "23505") {
      return res.status(400).json({ error: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644" });
    }
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645: " + (error?.message || "") });
  }
});
router6.put("/change-password", async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    let admin = null;
    if (req.admin) {
      const [found] = await db3.select().from(adminUsers).where(eq5(adminUsers.id, req.admin.id)).limit(1);
      admin = found;
    } else {
      const [found] = await db3.select().from(adminUsers).where(eq5(adminUsers.userType, "admin")).limit(1);
      admin = found;
    }
    if (!admin) return res.status(404).json({ error: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u064A\u0631" });
    const isValid = await bcrypt3.compare(currentPassword, admin.password || "");
    if (!isValid) {
      return res.status(400).json({ error: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
    const hashed = await bcrypt3.hash(newPassword, 10);
    await db3.update(adminUsers).set({ password: hashed }).where(eq5(adminUsers.id, admin.id));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/sub-admins", requirePermission("manage_admins"), async (req, res) => {
  try {
    const subAdmins = await db3.select().from(adminUsers).where(eq5(adminUsers.userType, "sub_admin"));
    const safe = subAdmins.map((u) => {
      const { password: _, ...rest } = u;
      return rest;
    });
    res.json(safe);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/sub-admins", requirePermission("manage_admins"), async (req, res) => {
  try {
    const { name, phone, password, permissions, isActive } = req.body;
    let { email, username } = req.body;
    if (!name || !name.trim()) return res.status(400).json({ error: "\u0627\u0644\u0627\u0633\u0645 \u0645\u0637\u0644\u0648\u0628" });
    if (!phone || !phone.trim()) return res.status(400).json({ error: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0645\u0637\u0644\u0648\u0628" });
    if (!password) return res.status(400).json({ error: "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0629" });
    if (!email || !email.trim()) {
      email = `${phone.replace(/\D/g, "")}@subadmin.local`;
    }
    const hashed = await bcrypt3.hash(password, 10);
    const [newSubAdmin] = await db3.insert(adminUsers).values({
      name,
      email,
      username: username || null,
      phone,
      password: hashed,
      userType: "sub_admin",
      permissions: typeof permissions === "string" ? permissions : JSON.stringify(permissions || []),
      isActive: isActive !== false
    }).returning();
    const { password: _, ...safe } = newSubAdmin;
    res.status(201).json(safe);
  } catch (error) {
    if (error?.code === "23505") {
      return res.status(409).json({ error: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0623\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644" });
    }
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.put("/sub-admins/:id", requirePermission("manage_admins"), async (req, res) => {
  try {
    const { name, phone, password, permissions, isActive } = req.body;
    let { email, username } = req.body;
    const updateData = { name, phone, isActive };
    if (email !== void 0) updateData.email = email;
    if (username !== void 0) updateData.username = username || null;
    if (password) {
      updateData.password = await bcrypt3.hash(password, 10);
    }
    if (permissions !== void 0) {
      updateData.permissions = typeof permissions === "string" ? permissions : JSON.stringify(permissions);
    }
    const [updated] = await db3.update(adminUsers).set(updateData).where(eq5(adminUsers.id, req.params.id)).returning();
    if (!updated) return res.status(404).json({ error: "\u0627\u0644\u0645\u0634\u0631\u0641 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    const { password: _, ...safe } = updated;
    res.json(safe);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.delete("/sub-admins/:id", requirePermission("manage_admins"), async (req, res) => {
  try {
    await db3.delete(adminUsers).where(eq5(adminUsers.id, req.params.id));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/security/settings", async (req, res) => {
  try {
    res.json({
      twoFactorEnabled: false,
      sessionTimeout: 60,
      passwordComplexity: "medium",
      ipWhitelist: [],
      lastAudit: (/* @__PURE__ */ new Date()).toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.get("/security/logs", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const logs = await db3.select({
      id: auditLogs.id,
      adminId: auditLogs.adminId,
      action: auditLogs.action,
      entityType: auditLogs.entityType,
      entityId: auditLogs.entityId,
      ipAddress: auditLogs.ipAddress,
      createdAt: auditLogs.createdAt,
      oldData: auditLogs.oldData,
      newData: auditLogs.newData
    }).from(auditLogs).where(sql4`${auditLogs.entityType} = 'auth'`).orderBy(desc3(auditLogs.createdAt)).limit(limit);
    const adminIds = [...new Set(logs.map((l) => l.adminId))];
    let adminMap = {};
    if (adminIds.length > 0) {
      const admins = await db3.select({ id: adminUsers.id, name: adminUsers.name }).from(adminUsers).where(inArray2(adminUsers.id, adminIds));
      admins.forEach((a) => {
        adminMap[a.id] = a.name;
      });
    }
    const formatted = logs.map((log3) => ({
      id: log3.id,
      userId: log3.adminId,
      userName: adminMap[log3.adminId] || "\u0645\u0633\u062A\u062E\u062F\u0645",
      action: log3.action === "login" ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : log3.action === "logout" ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C" : log3.action,
      ipAddress: log3.ipAddress || "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641",
      device: log3.oldData ? (() => {
        try {
          return JSON.parse(log3.oldData)?.device || "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
        } catch {
          return "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
        }
      })() : "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641",
      location: "\u0627\u0644\u064A\u0645\u0646",
      createdAt: log3.createdAt,
      status: log3.newData ? (() => {
        try {
          return JSON.parse(log3.newData)?.status || "success";
        } catch {
          return "success";
        }
      })() : "success"
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/security/log-login", async (req, res) => {
  try {
    const { adminId, ipAddress, device } = req.body;
    if (!adminId) return res.status(400).json({ error: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u062F\u064A\u0631 \u0645\u0637\u0644\u0648\u0628" });
    await db3.insert(auditLogs).values({
      adminId,
      action: "login",
      entityType: "auth",
      entityId: adminId,
      ipAddress: ipAddress || req.ip || "unknown",
      oldData: JSON.stringify({ device: device || req.headers["user-agent"] || "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641" }),
      newData: JSON.stringify({ status: "success" })
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router6.post("/security/log-logout", async (req, res) => {
  try {
    const { userId, userName } = req.body;
    if (!userId) return res.status(400).json({ error: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628" });
    const [admin] = await db3.select({ id: adminUsers.id }).from(adminUsers).where(eq5(adminUsers.id, userId)).limit(1);
    if (!admin) return res.json({ success: true });
    await db3.insert(auditLogs).values({
      adminId: userId,
      action: "logout",
      entityType: "auth",
      entityId: userId,
      ipAddress: req.ip || "unknown",
      oldData: JSON.stringify({ device: req.headers["user-agent"] || "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", name: userName }),
      newData: JSON.stringify({ status: "success" })
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});

// server/routes/advanced.ts
import express9 from "express";
var router7 = express9.Router();
function registerAdvancedRoutes(app2) {
  const dbStorage4 = new DatabaseStorage();
  const advancedDb = new AdvancedDatabaseStorage(dbStorage4.db);
  app2.get("/api/admin/drivers/:driverId/details", async (req, res) => {
    try {
      const { driverId } = req.params;
      const driver = await dbStorage4.getDriver(driverId);
      if (!driver) {
        return res.status(404).json({ error: "Driver not found" });
      }
      const balance = await dbStorage4.getDriverBalance(driverId);
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
      const drivers2 = await dbStorage4.getDrivers();
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
          const balance = await dbStorage4.getDriverBalance(driver.id);
          const withdrawals = await advancedDb.getWithdrawalRequests(driver.id, "driver");
          const reviews = await advancedDb.getDriverReviews(driver.id);
          const avgRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;
          return {
            id: driver.id,
            name: driver.name,
            email: driver.email || `${driver.phone}@wasel.app`,
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
      const drivers2 = await dbStorage4.getDrivers();
      const summaries = await Promise.all(
        drivers2.map(async (driver) => {
          const stats = await advancedDb.getDriverPerformanceStats(driver.id);
          const balance = await dbStorage4.getDriverBalance(driver.id);
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
      const restaurant = await dbStorage4.getRestaurant(restaurantId);
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
      const restaurants3 = await dbStorage4.getRestaurants();
      const summaries = await Promise.all(
        restaurants3.map(async (restaurant) => {
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
      const restaurants3 = await dbStorage4.getRestaurants();
      const stats = await Promise.all(
        restaurants3.map(async (restaurant) => {
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
      await dbStorage4.createDriverTransaction({
        driverId,
        amount: amount.toString(),
        type: "bonus",
        description: description || "\u0625\u0636\u0627\u0641\u0629 \u064A\u062F\u0648\u064A\u0629 \u0644\u0644\u0631\u0635\u064A\u062F"
      });
      const updatedBalance = await dbStorage4.getDriverBalance(driverId);
      res.json({
        id: updatedBalance?.id,
        driverId: updatedBalance?.driverId,
        balance: updatedBalance?.availableBalance,
        totalEarned: updatedBalance?.totalBalance
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  app2.get("/api/drivers/:driverId/wallet", async (req, res) => {
    try {
      const { driverId } = req.params;
      const balance = await dbStorage4.getDriverBalance(driverId);
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
        const balance = await dbStorage4.getDriverBalance(entityId);
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
        await dbStorage4.createDriverTransaction({
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
            const driver = await dbStorage4.getDriver(request.entityId);
            userName = driver?.name || "\u0633\u0627\u0626\u0642 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641";
          } else if (request.entityType === "restaurant") {
            const restaurant = await dbStorage4.getRestaurant(request.entityId);
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
      const log3 = await advancedDb.createAuditLog({
        action,
        entityType,
        entityId,
        userId,
        userType,
        description,
        changes,
        status: "success"
      });
      res.json(log3);
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
      const balance = await dbStorage4.getDriverBalance(driverId);
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
  app2.get("/api/admin/analytics/daily-revenue", async (req, res) => {
    try {
      const days = parseInt(req.query.days) || 30;
      const data = await advancedDb.getDailyRevenue(days);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch daily revenue" });
    }
  });
  app2.get("/api/admin/analytics/customer-retention", async (req, res) => {
    try {
      const data = await advancedDb.getCustomerRetentionStats();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch retention stats" });
    }
  });
  app2.get("/api/admin/analytics/top-areas", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 5;
      const data = await advancedDb.getTopDeliveryAreas(limit);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch top areas" });
    }
  });
  app2.get("/api/admin/marketing/inactive-users", async (req, res) => {
    try {
      const days = parseInt(req.query.days) || 7;
      const users2 = await advancedDb.getInactiveUsers(days);
      res.json(users2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inactive users" });
    }
  });
  app2.post("/api/admin/marketing/send-mass-notification", async (req, res) => {
    try {
      const { userIds, title, message, type = "offer" } = req.body;
      if (!userIds || !Array.isArray(userIds) || !title || !message) {
        return res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u0646\u0627\u0642\u0635\u0629" });
      }
      const results = await Promise.all(
        userIds.map(
          (userId) => dbStorage4.createNotification({
            type,
            title,
            message,
            recipientType: "customer",
            recipientId: userId,
            isRead: false
          })
        )
      );
      res.json({
        success: true,
        message: `\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 ${results.length} \u0625\u0634\u0639\u0627\u0631 \u0628\u0646\u062C\u0627\u062D`,
        count: results.length
      });
    } catch (error) {
      console.error("Error sending mass notification:", error);
      res.status(500).json({ error: "Failed to send notifications" });
    }
  });
}

// server/routes/public.ts
import express10 from "express";
init_schema();
import { eq as eq6, desc as desc4 } from "drizzle-orm";
var router8 = express10.Router();
router8.get("/app-status", async (req, res) => {
  try {
    const { opening, closing, status } = req.query;
    const openingTime = opening || "08:00";
    const closingTime = closing || "23:00";
    const storeStatus = status || "open";
    if (storeStatus === "closed") {
      return res.json({ isOpen: false, message: "\u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u063A\u0644\u0642 \u062D\u0627\u0644\u064A\u0627\u064B \u0645\u0646 \u0642\u0650\u0628\u0644 \u0627\u0644\u0625\u062F\u0627\u0631\u0629", openingTime });
    }
    if (storeStatus === "open") {
      return res.json({ isOpen: true });
    }
    const now = /* @__PURE__ */ new Date();
    const yemenTime = new Date(now.getTime() + 3 * 60 * 60 * 1e3);
    const currentTime = yemenTime.toISOString().split("T")[1].slice(0, 5);
    const timeToMinutes2 = (t) => {
      const [h, m] = t.split(":").map(Number);
      return h * 60 + m;
    };
    const current = timeToMinutes2(currentTime);
    const open = timeToMinutes2(openingTime);
    const close = timeToMinutes2(closingTime);
    let appIsOpen = close > open ? current >= open && current < close : current >= open || current < close;
    if (!appIsOpen) {
      const isBeforeOpen = current < open;
      const whenOpen = isBeforeOpen ? `\u064A\u0641\u062A\u062D \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0633\u0627\u0639\u0629 ${openingTime}` : `\u064A\u0641\u062A\u062D \u063A\u062F\u0627\u064B \u0627\u0644\u0633\u0627\u0639\u0629 ${openingTime}`;
      return res.json({
        isOpen: false,
        message: `\u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u063A\u0644\u0642 \u062D\u0627\u0644\u064A\u0627\u064B. ${whenOpen}`,
        openingTime
      });
    }
    res.json({ isOpen: true });
  } catch (error) {
    res.status(500).json({ isOpen: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0637\u0628\u064A\u0642" });
  }
});
router8.get("/categories", async (req, res) => {
  try {
    const categories2 = await storage.getCategories();
    res.json(categories2);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router8.get("/restaurants", async (req, res) => {
  try {
    const { categoryId, search } = req.query;
    let restaurants3;
    if (search) {
      restaurants3 = await storage.searchRestaurants(`%${search}%`, categoryId);
    } else if (categoryId && categoryId !== "all") {
      restaurants3 = await storage.getRestaurantsByCategory(categoryId);
    } else {
      restaurants3 = await storage.getRestaurants();
    }
    res.json(restaurants3);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0637\u0627\u0639\u0645:", error);
    res.status(500).json({ message: "Failed to fetch restaurants" });
  }
});
router8.get("/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await storage.getRestaurant(id);
    if (!restaurant) {
      return res.status(404).json({ message: "\u0627\u0644\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json(restaurant);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ message: "Failed to fetch restaurant" });
  }
});
router8.get("/restaurants/:id/menu", async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await storage.getRestaurant(id);
    if (!restaurant) {
      return res.status(404).json({ message: "\u0627\u0644\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    const menuItems2 = await storage.getMenuItems(id);
    res.json({
      restaurant,
      menu: [],
      allItems: menuItems2
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ message: "Failed to fetch menu items" });
  }
});
router8.get("/restaurants/:id/sections", async (req, res) => {
  try {
    const { id } = req.params;
    const sections = await storage.getRestaurantSections(id);
    res.json(sections);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ message: "Failed to fetch restaurant sections" });
  }
});
router8.post("/restaurants/:id/rate", async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment, customerName } = req.body;
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 1 \u0648 5" });
    }
    const restaurant = await storage.getRestaurant(id);
    if (!restaurant) {
      return res.status(404).json({ message: "\u0627\u0644\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    const ratingData = {
      restaurantId: id,
      customerName: customerName || "\u0632\u0627\u0626\u0631",
      rating: Number(rating),
      comment: comment || null,
      isApproved: false
    };
    const newRating = await storage.createRating(ratingData);
    res.status(201).json({ success: true, rating: newRating });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645:", error);
    res.status(500).json({ message: "\u0641\u0634\u0644 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645" });
  }
});
router8.get("/special-offers", async (req, res) => {
  try {
    console.log("\u{1F50D} Storage type:", storage.constructor.name);
    res.set("Cache-Control", "no-store");
    const { active } = req.query;
    let offers;
    if (active === "false") {
      offers = await storage.getSpecialOffers();
    } else {
      offers = await storage.getActiveSpecialOffers();
    }
    console.log("\u{1F4CA} Found offers:", offers.length, offers);
    res.json(offers);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062E\u0627\u0635\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router8.post("/orders", async (req, res) => {
  try {
    const orderData = req.body;
    const orderNumber = `ORD${Date.now()}${Math.floor(Math.random() * 1e3)}`;
    const newOrderData = {
      ...orderData,
      orderNumber,
      status: "pending",
      paymentStatus: "pending"
    };
    const [newOrder] = await db.insert(orders).values(newOrderData).returning();
    await db.insert(orderTracking).values({
      orderId: newOrder.id,
      status: "pending",
      message: "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D",
      createdByType: "system"
    });
    res.json(newOrder);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router8.get("/orders/:id/track", async (req, res) => {
  try {
    const { id } = req.params;
    const order = await db.query.orders.findFirst({
      where: eq6(orders.id, id)
    });
    if (!order) {
      return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    const tracking = await db.query.orderTracking.findMany({
      where: eq6(orderTracking.orderId, id),
      orderBy: desc4(orderTracking.timestamp)
    });
    res.json({
      order,
      tracking
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062A\u0628\u0639 \u0627\u0644\u0637\u0644\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router8.get("/settings", async (req, res) => {
  try {
    const settings = await db.query.systemSettings.findMany({
      where: eq6(systemSettings.isPublic, true)
    });
    const settingsObject = settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {});
    res.json(settingsObject);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router8.get("/search", async (req, res) => {
  try {
    const { q, type = "all" } = req.query;
    if (!q) {
      return res.json({ restaurants: [], categories: [], menuItems: [] });
    }
    const searchTerm = `%${q}%`;
    let results = { restaurants: [], categories: [], menuItems: [] };
    if (type === "all" || type === "restaurants") {
      results.restaurants = await storage.searchRestaurants(searchTerm);
    }
    if (type === "all" || type === "categories") {
      results.categories = await storage.searchCategories(searchTerm);
    }
    if (type === "all" || type === "menu") {
      results.menuItems = await storage.searchMenuItems(searchTerm);
    }
    res.json(results);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0628\u062D\u062B:", error);
    res.status(500).json({ message: "Failed to search" });
  }
});
router8.post("/coupons/validate", async (req, res) => {
  try {
    const { code, orderValue, categoryIds } = req.body;
    if (!code) return res.status(400).json({ valid: false, message: "\u0643\u0648\u062F \u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u0645\u0637\u0644\u0648\u0628" });
    const result = await storage.validateCoupon(code, orderValue || 0);
    if (!result.valid) {
      return res.json(result);
    }
    if (result.coupon?.categoryId && categoryIds?.length > 0) {
      const couponCategoryId = String(result.coupon.categoryId);
      const cartCategories = categoryIds.map((id) => String(id));
      if (!cartCategories.includes(couponCategoryId)) {
        return res.json({
          valid: false,
          message: "\u0647\u0630\u0627 \u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u0645\u062E\u0635\u0635 \u0644\u062A\u0635\u0646\u064A\u0641 \u0645\u0639\u064A\u0646 \u0644\u0627 \u064A\u0648\u062C\u062F \u0641\u064A \u0633\u0644\u062A\u0643"
        });
      }
    }
    res.json(result);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0643\u0648\u0628\u0648\u0646:", error);
    res.status(500).json({ valid: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0643\u0648\u0628\u0648\u0646" });
  }
});
router8.get("/flutter/app-config", async (req, res) => {
  try {
    const settingKeys = [
      "splash_image_url",
      "splash_image_url2",
      "splash_title",
      "splash_subtitle",
      "splash_background_color",
      "splash_duration",
      "logo_url",
      "app_name",
      "primary_color",
      "secondary_color",
      "accent_color",
      "store_status",
      "privacy_policy_text",
      "show_splash_screen"
    ];
    const settings = {};
    for (const key of settingKeys) {
      try {
        const setting = await storage.getUiSetting(key);
        if (setting) settings[key] = String(setting.value ?? "");
      } catch {
      }
    }
    const webAppUrl = process.env.REPLIT_DEV_DOMAIN ? `https://${process.env.REPLIT_DEV_DOMAIN}` : process.env.REPL_SLUG ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co` : process.env.WEB_APP_URL || "";
    res.json({
      success: true,
      config: {
        splashEnabled: settings["show_splash_screen"] !== "false",
        splashImageUrl: settings["splash_image_url"] || "",
        splashImageUrl2: settings["splash_image_url2"] || "",
        splashTitle: settings["splash_title"] || "\u0648\u0627\u0635\u0644",
        splashSubtitle: settings["splash_subtitle"] || "\u0645\u062A\u062C\u0631 \u0627\u0644\u062E\u0636\u0627\u0631 \u0648\u0627\u0644\u0641\u0648\u0627\u0643\u0647",
        splashBackgroundColor: settings["splash_background_color"] || "#FFFFFF",
        splashDuration: parseInt(settings["splash_duration"] || "3000"),
        logoUrl: settings["logo_url"] || "",
        appName: settings["app_name"] || "\u0648\u0627\u0635\u0644",
        appVersion: "1.0.0",
        primaryColor: settings["primary_color"] || "#4CAF50",
        secondaryColor: settings["secondary_color"] || "#FF9800",
        accentColor: settings["accent_color"] || "#2196F3",
        webAppUrl,
        storeStatus: settings["store_status"] || "open",
        privacyPolicyText: settings["privacy_policy_text"] || ""
      }
    });
  } catch (error) {
    console.error("Flutter config error:", error);
    res.json({
      success: false,
      config: {
        splashEnabled: true,
        splashImageUrl: "",
        splashImageUrl2: "",
        splashTitle: "\u0648\u0627\u0635\u0644",
        splashSubtitle: "\u0645\u062A\u062C\u0631 \u0627\u0644\u062E\u0636\u0627\u0631 \u0648\u0627\u0644\u0641\u0648\u0627\u0643\u0647",
        splashBackgroundColor: "#FFFFFF",
        splashDuration: 3e3,
        logoUrl: "",
        appName: "\u0648\u0627\u0635\u0644",
        appVersion: "1.0.0",
        primaryColor: "#4CAF50",
        secondaryColor: "#FF9800",
        accentColor: "#2196F3",
        webAppUrl: "",
        storeStatus: "open",
        privacyPolicyText: ""
      }
    });
  }
});

// server/routes/restaurant-accounts.ts
import express11 from "express";
init_schema();
import { z as z5 } from "zod";
import { eq as eq7, desc as desc5, and as and5 } from "drizzle-orm";
var router9 = express11.Router();
var dbStorage3 = new DatabaseStorage();
var db4 = dbStorage3.db;
function getAdvStorage() {
  return new AdvancedDatabaseStorage(db4);
}
router9.get("/", async (req, res) => {
  try {
    const advStorage = getAdvStorage();
    const allRestaurants = await dbStorage3.getRestaurants();
    const accounts = await Promise.all(allRestaurants.map(async (restaurant) => {
      const wallet = await advStorage.getRestaurantWallet(restaurant.id);
      const restaurantOrders = await db4.select().from(orders).where(eq7(orders.restaurantId, restaurant.id));
      const deliveredOrders = restaurantOrders.filter((o) => o.status === "delivered");
      const totalRevenue = deliveredOrders.reduce((sum, o) => sum + parseFloat(o.restaurantEarnings?.toString() || "0"), 0);
      const allWithdrawals = await db4.select().from(withdrawalRequests2).where(and5(eq7(withdrawalRequests2.entityId, restaurant.id), eq7(withdrawalRequests2.entityType, "restaurant")));
      const pendingAmount = allWithdrawals.filter((w) => w.status === "pending").reduce((sum, w) => sum + parseFloat(w.amount?.toString() || "0"), 0);
      const withdrawnAmount = allWithdrawals.filter((w) => w.status === "completed").reduce((sum, w) => sum + parseFloat(w.amount?.toString() || "0"), 0);
      return {
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          image: restaurant.image,
          isActive: restaurant.isActive,
          phone: restaurant.phone || ""
        },
        account: {
          totalOrders: deliveredOrders.length,
          totalRevenue: totalRevenue.toFixed(2),
          availableBalance: wallet?.balance?.toString() || "0",
          pendingAmount: pendingAmount.toFixed(2),
          withdrawnAmount: withdrawnAmount.toFixed(2),
          commissionRate: restaurant.commissionRate?.toString() || "0"
        }
      };
    }));
    res.json(accounts);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0645\u0637\u0627\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.get("/all-withdrawals", async (req, res) => {
  try {
    const { status } = req.query;
    let allWithdrawals = await db4.select().from(withdrawalRequests2).where(eq7(withdrawalRequests2.entityType, "restaurant")).orderBy(desc5(withdrawalRequests2.createdAt));
    if (status && typeof status === "string" && status !== "all") {
      allWithdrawals = allWithdrawals.filter((w) => w.status === status);
    }
    const allRestaurants = await dbStorage3.getRestaurants();
    const restaurantMap = new Map(allRestaurants.map((r) => [r.id, r]));
    const enriched = allWithdrawals.map((w) => {
      const restaurant = restaurantMap.get(w.entityId);
      let bankInfo = {};
      try {
        bankInfo = w.bankDetails ? JSON.parse(w.bankDetails) : {};
      } catch {
      }
      return {
        ...w,
        restaurantName: restaurant?.name || "\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641",
        restaurantImage: restaurant?.image || null,
        bankName: bankInfo.bankName || "",
        accountNumber: bankInfo.accountNumber || "",
        accountHolder: bankInfo.accountHolder || restaurant?.name || ""
      };
    });
    res.json({ withdrawals: enriched, total: enriched.length });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062C\u0645\u064A\u0639 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.get("/:restaurantId", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const advStorage = getAdvStorage();
    const restaurant = await dbStorage3.getRestaurant(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: "\u0627\u0644\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    let wallet = await advStorage.getRestaurantWallet(restaurantId);
    if (!wallet) {
      wallet = await advStorage.createRestaurantWallet({
        restaurantId,
        balance: "0",
        isActive: true
      });
    }
    const restaurantOrders = await db4.select().from(orders).where(eq7(orders.restaurantId, restaurantId));
    const deliveredOrders = restaurantOrders.filter((o) => o.status === "delivered");
    const totalRevenue = deliveredOrders.reduce((sum, o) => sum + parseFloat(o.restaurantEarnings?.toString() || "0"), 0);
    const allWithdrawals = await db4.select().from(withdrawalRequests2).where(and5(eq7(withdrawalRequests2.entityId, restaurantId), eq7(withdrawalRequests2.entityType, "restaurant")));
    const pendingAmount = allWithdrawals.filter((w) => w.status === "pending").reduce((sum, w) => sum + parseFloat(w.amount?.toString() || "0"), 0);
    const withdrawnAmount = allWithdrawals.filter((w) => w.status === "completed").reduce((sum, w) => sum + parseFloat(w.amount?.toString() || "0"), 0);
    res.json({
      id: wallet.id,
      restaurantId,
      ownerName: restaurant.name,
      ownerPhone: restaurant.phone || "",
      totalOrders: deliveredOrders.length,
      totalRevenue: totalRevenue.toFixed(2),
      availableBalance: wallet.balance?.toString() || "0",
      pendingAmount: pendingAmount.toFixed(2),
      withdrawnAmount: withdrawnAmount.toFixed(2),
      commissionRate: restaurant.commissionRate?.toString() || "0",
      createdAt: wallet.createdAt,
      updatedAt: wallet.updatedAt
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.get("/:restaurantId/stats", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { period } = req.query;
    const advStorage = getAdvStorage();
    const wallet = await advStorage.getRestaurantWallet(restaurantId);
    const restaurant = await dbStorage3.getRestaurant(restaurantId);
    const restaurantOrders = await db4.select().from(orders).where(eq7(orders.restaurantId, restaurantId));
    let filteredOrders = restaurantOrders;
    const now = /* @__PURE__ */ new Date();
    if (period === "today") {
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      filteredOrders = restaurantOrders.filter((o) => new Date(o.createdAt) >= today);
    } else if (period === "week") {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1e3);
      filteredOrders = restaurantOrders.filter((o) => new Date(o.createdAt) >= weekAgo);
    } else if (period === "month") {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1e3);
      filteredOrders = restaurantOrders.filter((o) => new Date(o.createdAt) >= monthAgo);
    }
    const deliveredOrders = filteredOrders.filter((o) => o.status === "delivered");
    const pendingOrders = filteredOrders.filter((o) => o.status === "pending");
    const cancelledOrders = filteredOrders.filter((o) => o.status === "cancelled");
    const totalRevenue = deliveredOrders.reduce((sum, o) => sum + parseFloat(o.restaurantEarnings?.toString() || "0"), 0);
    const totalCommission = deliveredOrders.reduce((sum, o) => sum + parseFloat(o.companyEarnings?.toString() || "0"), 0);
    const avgOrderValue = deliveredOrders.length > 0 ? totalRevenue / deliveredOrders.length : 0;
    const allDelivered = restaurantOrders.filter((o) => o.status === "delivered");
    const allWithdrawals = await db4.select().from(withdrawalRequests2).where(and5(eq7(withdrawalRequests2.entityId, restaurantId), eq7(withdrawalRequests2.entityType, "restaurant")));
    const totalWithdrawn = allWithdrawals.filter((w) => w.status === "completed").reduce((sum, w) => sum + parseFloat(w.amount?.toString() || "0"), 0);
    const netRevenue = allDelivered.reduce((sum, o) => sum + parseFloat(o.restaurantEarnings?.toString() || "0"), 0);
    res.json({
      period,
      totalOrders: filteredOrders.length,
      deliveredOrders: deliveredOrders.length,
      pendingOrders: pendingOrders.length,
      cancelledOrders: cancelledOrders.length,
      totalRevenue,
      totalCommission,
      avgOrderValue,
      successRate: filteredOrders.length > 0 ? (deliveredOrders.length / filteredOrders.length * 100).toFixed(1) : "0",
      // all-time
      completedOrders: allDelivered.length,
      netRevenue: netRevenue.toFixed(2),
      totalWithdrawn: totalWithdrawn.toFixed(2),
      availableBalance: wallet?.balance?.toString() || "0",
      commissionRate: restaurant?.commissionRate?.toString() || "0"
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.put("/:restaurantId/commission", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { commissionRate } = req.body;
    if (commissionRate === void 0 || commissionRate === null) {
      return res.status(400).json({ error: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629" });
    }
    const rate = parseFloat(commissionRate);
    if (isNaN(rate) || rate < 0 || rate > 100) {
      return res.status(400).json({ error: "\u0646\u0633\u0628\u0629 \u0627\u0644\u0639\u0645\u0648\u0644\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0628\u064A\u0646 0 \u0648 100" });
    }
    await dbStorage3.updateRestaurant(restaurantId, { commissionRate: rate.toString() });
    const restaurant = await dbStorage3.getRestaurant(restaurantId);
    res.json({ success: true, restaurant, commissionRate: rate });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0646\u0633\u0628\u0629 \u0627\u0644\u0639\u0645\u0648\u0644\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.put("/:restaurantId", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const accountSchema = z5.object({
      ownerName: z5.string().optional(),
      ownerPhone: z5.string().optional(),
      ownerEmail: z5.string().email().optional(),
      bankName: z5.string().optional(),
      bankAccountNumber: z5.string().optional(),
      bankAccountName: z5.string().optional(),
      commissionRate: z5.string().optional()
    });
    const validatedData = accountSchema.parse(req.body);
    if (validatedData.commissionRate !== void 0) {
      await dbStorage3.updateRestaurant(restaurantId, {
        commissionRate: validatedData.commissionRate
      });
    }
    const restaurant = await dbStorage3.getRestaurant(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ error: "\u0627\u0644\u0645\u0637\u0639\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    res.json({ success: true, restaurant });
  } catch (error) {
    if (error instanceof z5.ZodError) {
      return res.status(400).json({ error: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", details: error.errors });
    }
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.get("/:restaurantId/transactions", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { type, limit: limitParam, offset: offsetParam } = req.query;
    const restaurantOrders = await db4.select().from(orders).where(eq7(orders.restaurantId, restaurantId)).orderBy(desc5(orders.createdAt));
    let transactions = restaurantOrders.filter((o) => o.status === "delivered").map((o) => ({
      id: o.id,
      restaurantId,
      type: "order_revenue",
      amount: o.restaurantEarnings?.toString() || "0",
      description: `\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0637\u0644\u0628 \u0631\u0642\u0645 ${o.orderNumber}`,
      orderId: o.id,
      createdAt: o.createdAt
    }));
    const withdrawals = await db4.select().from(withdrawalRequests2).where(and5(eq7(withdrawalRequests2.entityId, restaurantId), eq7(withdrawalRequests2.entityType, "restaurant"))).orderBy(desc5(withdrawalRequests2.createdAt));
    const withdrawalTransactions = withdrawals.map((w) => {
      let bankInfo = {};
      try {
        bankInfo = w.bankDetails ? JSON.parse(w.bankDetails) : {};
      } catch {
      }
      return {
        id: w.id,
        restaurantId,
        type: `withdrawal_${w.status}`,
        amount: `-${w.amount}`,
        description: `\u0637\u0644\u0628 \u0633\u062D\u0628 - ${w.status === "completed" ? "\u0645\u0643\u062A\u0645\u0644" : w.status === "pending" ? "\u0645\u0639\u0644\u0642" : w.status === "approved" ? "\u0645\u0648\u0627\u0641\u0642 \u0639\u0644\u064A\u0647" : "\u0645\u0631\u0641\u0648\u0636"}`,
        bankName: bankInfo.bankName || "",
        accountNumber: bankInfo.accountNumber || "",
        status: w.status,
        adminNotes: w.adminNotes || "",
        createdAt: w.createdAt
      };
    });
    let allTransactions = [...transactions, ...withdrawalTransactions].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    if (type) allTransactions = allTransactions.filter((t) => t.type.includes(type));
    const limitNum = parseInt(limitParam) || 50;
    const offsetNum = parseInt(offsetParam) || 0;
    const paginated = allTransactions.slice(offsetNum, offsetNum + limitNum);
    res.json({ transactions: paginated, total: allTransactions.length, limit: limitNum, offset: offsetNum });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0637\u0639\u0645:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.post("/:restaurantId/withdraw", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { amount, bankName, accountNumber, accountHolder } = req.body;
    if (!amount || parseFloat(amount) <= 0) {
      return res.status(400).json({ error: "\u0627\u0644\u0645\u0628\u0644\u063A \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631" });
    }
    const advStorage = getAdvStorage();
    const wallet = await advStorage.getRestaurantWallet(restaurantId);
    const currentBalance = parseFloat(wallet?.balance?.toString() || "0");
    if (currentBalance < parseFloat(amount)) {
      return res.status(400).json({ error: "\u0627\u0644\u0631\u0635\u064A\u062F \u063A\u064A\u0631 \u0643\u0627\u0641\u064D" });
    }
    const restaurant = await dbStorage3.getRestaurant(restaurantId);
    const bankDetails = JSON.stringify({ bankName: bankName || "", accountNumber: accountNumber || "", accountHolder: accountHolder || restaurant?.name || "" });
    const withdrawal = await db4.insert(withdrawalRequests2).values({
      entityType: "restaurant",
      entityId: restaurantId,
      amount: amount.toString(),
      bankDetails,
      status: "pending"
    }).returning();
    res.json({ success: true, message: "\u062A\u0645 \u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628 \u0628\u0646\u062C\u0627\u062D", withdrawal: withdrawal[0] });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.get("/:restaurantId/withdrawals", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { status } = req.query;
    let withdrawals = await db4.select().from(withdrawalRequests2).where(and5(eq7(withdrawalRequests2.entityId, restaurantId), eq7(withdrawalRequests2.entityType, "restaurant"))).orderBy(desc5(withdrawalRequests2.createdAt));
    if (status && typeof status === "string") {
      withdrawals = withdrawals.filter((w) => w.status === status);
    }
    const enriched = withdrawals.map((w) => {
      let bankInfo = {};
      try {
        bankInfo = w.bankDetails ? JSON.parse(w.bankDetails) : {};
      } catch {
      }
      return { ...w, bankName: bankInfo.bankName || "", accountNumber: bankInfo.accountNumber || "", accountHolder: bankInfo.accountHolder || "" };
    });
    res.json({ withdrawals: enriched, total: enriched.length });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.get("/:restaurantId/daily-stats", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { startDate, endDate } = req.query;
    const restaurantOrders = await db4.select().from(orders).where(eq7(orders.restaurantId, restaurantId));
    let start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
    let end = endDate ? new Date(endDate) : /* @__PURE__ */ new Date();
    const filteredOrders = restaurantOrders.filter((o) => {
      const d = new Date(o.createdAt);
      return d >= start && d <= end && o.status === "delivered";
    });
    const dailyMap = {};
    filteredOrders.forEach((o) => {
      const day = new Date(o.createdAt).toISOString().split("T")[0];
      if (!dailyMap[day]) dailyMap[day] = { date: day, orders: 0, revenue: 0 };
      dailyMap[day].orders++;
      dailyMap[day].revenue += parseFloat(o.restaurantEarnings?.toString() || "0");
    });
    const stats = Object.values(dailyMap).sort((a, b) => a.date.localeCompare(b.date));
    res.json(stats);
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u064A\u0648\u0645\u064A\u0629:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.put("/withdrawals/:withdrawalId", async (req, res) => {
  try {
    const { withdrawalId } = req.params;
    const { status, adminNotes, rejectionReason } = req.body;
    if (!["approved", "rejected", "completed"].includes(status)) {
      return res.status(400).json({ error: "\u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
    const [updated] = await db4.update(withdrawalRequests2).set({
      status,
      adminNotes: adminNotes || null,
      rejectionReason: status === "rejected" ? rejectionReason || adminNotes || null : null,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq7(withdrawalRequests2.id, withdrawalId)).returning();
    if (!updated) {
      return res.status(404).json({ error: "\u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    }
    if (status === "completed" && updated.entityId) {
      const advStorage = getAdvStorage();
      const amount = parseFloat(updated.amount?.toString() || "0");
      if (amount > 0) {
        try {
          await advStorage.deductRestaurantWalletBalance(updated.entityId, amount);
        } catch (e) {
          console.error("\u062E\u0637\u0623 \u0641\u064A \u062E\u0635\u0645 \u0631\u0635\u064A\u062F \u0627\u0644\u0645\u0637\u0639\u0645:", e);
        }
      }
    }
    res.json({ success: true, withdrawal: updated });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0637\u0644\u0628 \u0627\u0644\u0633\u062D\u0628:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router9.get("/:restaurantId/statement", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { from, to } = req.query;
    const restaurant = await dbStorage3.getRestaurant(restaurantId);
    if (!restaurant) return res.status(404).json({ error: "\u0627\u0644\u0645\u062A\u062C\u0631 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    const advStorage = getAdvStorage();
    const wallet = await advStorage.getRestaurantWallet(restaurantId);
    const commissionRate = parseFloat(restaurant.commissionRate?.toString() || "15");
    let restaurantOrders = await db4.select().from(orders).where(eq7(orders.restaurantId, restaurantId)).orderBy(desc5(orders.createdAt));
    if (from || to) {
      const fromDate = from ? new Date(from) : /* @__PURE__ */ new Date("2000-01-01");
      const toDate = to ? new Date(to) : /* @__PURE__ */ new Date();
      toDate.setHours(23, 59, 59, 999);
      restaurantOrders = restaurantOrders.filter((o) => {
        const d = new Date(o.createdAt);
        return d >= fromDate && d <= toDate;
      });
    }
    const deliveredOrders = restaurantOrders.filter((o) => o.status === "delivered");
    const cancelledOrders = restaurantOrders.filter((o) => o.status === "cancelled");
    const statementLines = deliveredOrders.map((o) => {
      const subtotal = parseFloat(o.subtotal?.toString() || "0");
      const deliveryFee = parseFloat(o.deliveryFee?.toString() || "0");
      const totalAmount = parseFloat(o.totalAmount?.toString() || o.total?.toString() || "0");
      const restaurantEarnings2 = parseFloat(o.restaurantEarnings?.toString() || "0");
      const commission = parseFloat(o.companyEarnings?.toString() || (subtotal * commissionRate / 100).toFixed(2));
      const net = restaurantEarnings2 > 0 ? restaurantEarnings2 : subtotal - subtotal * commissionRate / 100;
      return {
        orderId: o.id,
        orderNumber: o.orderNumber,
        date: o.createdAt,
        customerName: o.customerName || o.customerPhone || "\u0639\u0645\u064A\u0644",
        status: o.status,
        subtotal,
        deliveryFee,
        totalAmount,
        commissionRate,
        commissionAmount: parseFloat((subtotal * commissionRate / 100).toFixed(2)),
        restaurantNet: parseFloat(net.toFixed(2)),
        deliveryFeeShare: deliveryFee
      };
    });
    const allWithdrawals = await db4.select().from(withdrawalRequests2).where(and5(eq7(withdrawalRequests2.entityId, restaurantId), eq7(withdrawalRequests2.entityType, "restaurant"))).orderBy(desc5(withdrawalRequests2.createdAt));
    let filteredWithdrawals = allWithdrawals;
    if (from || to) {
      const fromDate = from ? new Date(from) : /* @__PURE__ */ new Date("2000-01-01");
      const toDate = to ? new Date(to) : /* @__PURE__ */ new Date();
      toDate.setHours(23, 59, 59, 999);
      filteredWithdrawals = allWithdrawals.filter((w) => {
        const d = new Date(w.createdAt);
        return d >= fromDate && d <= toDate;
      });
    }
    const totalOrdersCount = restaurantOrders.length;
    const totalSubtotal = statementLines.reduce((s, l) => s + l.subtotal, 0);
    const totalCommission = statementLines.reduce((s, l) => s + l.commissionAmount, 0);
    const totalNet = statementLines.reduce((s, l) => s + l.restaurantNet, 0);
    const totalWithdrawn = filteredWithdrawals.filter((w) => w.status === "completed").reduce((s, w) => s + parseFloat(w.amount?.toString() || "0"), 0);
    const pendingWithdrawals = filteredWithdrawals.filter((w) => w.status === "pending").reduce((s, w) => s + parseFloat(w.amount?.toString() || "0"), 0);
    const currentBalance = parseFloat(wallet?.balance?.toString() || "0");
    res.json({
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        phone: restaurant.phone || "",
        address: restaurant.address || "",
        commissionRate
      },
      period: {
        from: from || null,
        to: to || null
      },
      summary: {
        totalOrders: totalOrdersCount,
        deliveredOrders: deliveredOrders.length,
        cancelledOrders: cancelledOrders.length,
        totalSubtotal: parseFloat(totalSubtotal.toFixed(2)),
        totalCommission: parseFloat(totalCommission.toFixed(2)),
        totalNet: parseFloat(totalNet.toFixed(2)),
        totalWithdrawn: parseFloat(totalWithdrawn.toFixed(2)),
        pendingWithdrawals: parseFloat(pendingWithdrawals.toFixed(2)),
        currentBalance: parseFloat(currentBalance.toFixed(2))
      },
      orders: statementLines,
      withdrawals: filteredWithdrawals.map((w) => {
        let bankInfo = {};
        try {
          bankInfo = w.bankDetails ? JSON.parse(w.bankDetails) : {};
        } catch {
        }
        return {
          id: w.id,
          date: w.createdAt,
          amount: parseFloat(w.amount?.toString() || "0"),
          status: w.status,
          bankName: bankInfo.bankName || "",
          accountNumber: bankInfo.accountNumber || "",
          notes: w.notes || ""
        };
      }),
      generatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0643\u0634\u0641 \u062D\u0633\u0627\u0628 \u0627\u0644\u0645\u062A\u062C\u0631:", error);
    res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
var restaurant_accounts_default = router9;

// server/routes/flutter.ts
import express12 from "express";
init_schema();
import { drizzle as drizzle2 } from "drizzle-orm/postgres-js";
import postgres2 from "postgres";
import { eq as eq8, and as and6, gt, desc as desc6, or as or5 } from "drizzle-orm";
var router10 = express12.Router();
var _db = null;
function getDb2() {
  if (_db) return _db;
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  const client = postgres2(url, { max: 5 });
  _db = drizzle2(client);
  return _db;
}
router10.get("/app-config", async (req, res) => {
  try {
    const settings = await storage.getUiSettings();
    const getValue = (key, fallback = "") => {
      if (!Array.isArray(settings)) return fallback;
      const setting = settings.find((s) => s.key === key);
      return setting ? setting.value : fallback;
    };
    const serverUrl = process.env.REPLIT_DEV_DOMAIN ? `https://${process.env.REPLIT_DEV_DOMAIN}` : `http://localhost:${process.env.PORT || 5e3}`;
    const config = {
      splashEnabled: getValue("splashEnabled", "true") !== "false",
      splashImageUrl: getValue("splashImageUrl", ""),
      splashImageUrl2: getValue("splashImageUrl2", ""),
      splashTitle: getValue("splashTitle", "\u0648\u0627\u0635\u0644"),
      splashSubtitle: getValue("splashSubtitle", "\u0645\u062A\u062C\u0631 \u0627\u0644\u062E\u0636\u0627\u0631 \u0648\u0627\u0644\u0641\u0648\u0627\u0643\u0647"),
      splashBackgroundColor: getValue("splashBackgroundColor", "#FFFFFF"),
      splashDuration: parseInt(getValue("splashDuration", "3000"), 10),
      appName: getValue("appName", "\u0648\u0627\u0635\u0644"),
      appVersion: getValue("appVersion", "1.1.0"),
      primaryColor: getValue("primaryColor", "#E53935"),
      secondaryColor: getValue("secondaryColor", "#4CAF50"),
      accentColor: getValue("accentColor", "#FF9800"),
      logoUrl: getValue("logoUrl", ""),
      webAppUrl: getValue("webAppUrl", serverUrl),
      storeStatus: getValue("storeStatus", "open"),
      privacyPolicyText: getValue("privacyPolicyText", ""),
      showSearchBar: getValue("showSearchBar", "true") !== "false",
      showCategories: getValue("showCategories", "true") !== "false",
      showSpecialOffers: getValue("showSpecialOffers", "true") !== "false",
      showSupportButton: getValue("showSupportButton", "true") !== "false",
      supportWhatsapp: getValue("supportWhatsapp", "966500000000"),
      openingTime: getValue("openingTime", "08:00"),
      closingTime: getValue("closingTime", "23:00"),
      serverUrl
    };
    res.json({ success: true, config });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A Flutter:", error);
    res.status(500).json({ success: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router10.post("/register-token", async (req, res) => {
  try {
    const { token, platform } = req.body;
    if (!token) {
      return res.status(400).json({ success: false, message: "Token \u0645\u0637\u0644\u0648\u0628" });
    }
    const db5 = getDb2();
    await db5.insert(deviceTokens).values({
      token,
      platform: platform || "android",
      isActive: true
    }).onConflictDoUpdate({
      target: deviceTokens.token,
      set: {
        platform: platform || "android",
        isActive: true,
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    res.json({ success: true, message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062C\u0647\u0627\u0632 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0631\u0645\u0632 FCM:", error);
    res.status(500).json({ success: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router10.post("/deregister-token", async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ success: false, message: "Token \u0645\u0637\u0644\u0648\u0628" });
    }
    const db5 = getDb2();
    await db5.update(deviceTokens).set({ isActive: false, updatedAt: /* @__PURE__ */ new Date() }).where(eq8(deviceTokens.token, token));
    res.json({ success: true, message: "\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062C\u0647\u0627\u0632" });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0644\u063A\u0627\u0621 \u0631\u0645\u0632 FCM:", error);
    res.status(500).json({ success: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router10.get("/notifications/poll", async (req, res) => {
  try {
    const db5 = getDb2();
    const since = req.query.since;
    let sinceDate;
    if (since) {
      sinceDate = new Date(since);
      if (isNaN(sinceDate.getTime())) {
        sinceDate = new Date(Date.now() - 24 * 60 * 60 * 1e3);
      }
    } else {
      sinceDate = new Date(Date.now() - 24 * 60 * 60 * 1e3);
    }
    const newNotifications = await db5.select({
      id: notifications.id,
      type: notifications.type,
      title: notifications.title,
      message: notifications.message,
      recipientType: notifications.recipientType,
      orderId: notifications.orderId,
      createdAt: notifications.createdAt
    }).from(notifications).where(
      and6(
        or5(
          eq8(notifications.recipientType, "all"),
          eq8(notifications.recipientType, "customer"),
          eq8(notifications.recipientType, "flutter")
        ),
        gt(notifications.createdAt, sinceDate)
      )
    ).orderBy(desc6(notifications.createdAt)).limit(50);
    res.json({
      success: true,
      notifications: newNotifications,
      count: newNotifications.length,
      serverTime: (/* @__PURE__ */ new Date()).toISOString()
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0634\u0639\u0627\u0631\u0627\u062A Flutter:", error);
    res.status(500).json({ success: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router10.post("/notifications/send", async (req, res) => {
  try {
    const { title, message, type = "info", recipientType = "flutter" } = req.body;
    if (!title || !message) {
      return res.status(400).json({ success: false, message: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0645\u0637\u0644\u0648\u0628\u0627\u0646" });
    }
    const db5 = getDb2();
    const newNotification = await storage.createNotification({
      type,
      title,
      message,
      recipientType,
      recipientId: null,
      isRead: false
    });
    res.json({
      success: true,
      message: "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0628\u0646\u062C\u0627\u062D \u0644\u062C\u0645\u064A\u0639 \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u062A\u0637\u0628\u064A\u0642",
      notification: newNotification
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0625\u0634\u0639\u0627\u0631 Flutter:", error);
    res.status(500).json({ success: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router10.post("/notifications/send-targeted", async (req, res) => {
  try {
    const { title, message, type = "info", recipientType = "all", recipientId = null } = req.body;
    if (!title || !message) {
      return res.status(400).json({ success: false, message: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0645\u0637\u0644\u0648\u0628\u0627\u0646" });
    }
    const db5 = getDb2();
    const newNotification = await storage.createNotification({
      type,
      title,
      message,
      recipientType,
      recipientId: recipientId || null,
      isRead: false
    });
    const recipientLabel = recipientType === "all" ? "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646" : recipientType === "customer" ? "\u0627\u0644\u0639\u0645\u0644\u0627\u0621" : recipientType === "driver" ? "\u0627\u0644\u0633\u0627\u0626\u0642\u064A\u0646" : recipientType === "flutter" ? "\u0645\u0633\u062A\u062E\u062F\u0645\u064A \u0627\u0644\u062A\u0637\u0628\u064A\u0642" : "\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u062D\u062F\u062F";
    res.json({
      success: true,
      message: `\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0628\u0646\u062C\u0627\u062D \u0625\u0644\u0649 ${recipientLabel}`,
      notification: newNotification
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0627\u0644\u0645\u0648\u062C\u0651\u0647:", error);
    res.status(500).json({ success: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router10.get("/notifications/history", async (req, res) => {
  try {
    const db5 = getDb2();
    const { recipientType, type: notifType, limit: limitStr, offset: offsetStr } = req.query;
    const limitNum = parseInt(limitStr) || 50;
    const offsetNum = parseInt(offsetStr) || 0;
    let query = db5.select().from(notifications).orderBy(desc6(notifications.createdAt));
    const allNotifications = await query;
    let filtered = allNotifications;
    if (recipientType && recipientType !== "all") {
      filtered = filtered.filter((n) => n.recipientType === recipientType);
    }
    if (notifType) {
      filtered = filtered.filter((n) => n.type === notifType);
    }
    const paginated = filtered.slice(offsetNum, offsetNum + limitNum);
    const unreadCount = filtered.filter((n) => !n.isRead).length;
    res.json({
      success: true,
      notifications: paginated,
      total: filtered.length,
      unreadCount,
      limit: limitNum,
      offset: offsetNum
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0633\u062C\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A:", error);
    res.status(500).json({ success: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router10.delete("/notifications/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const db5 = getDb2();
    await db5.delete(notifications).where(eq8(notifications.id, id));
    res.json({ success: true, message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0628\u0646\u062C\u0627\u062D" });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631:", error);
    res.status(500).json({ success: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router10.get("/notifications/stats", async (req, res) => {
  try {
    const db5 = getDb2();
    const allNotifications = await db5.select().from(notifications).orderBy(desc6(notifications.createdAt));
    const deviceCount = await db5.select().from(deviceTokens).where(eq8(deviceTokens.isActive, true));
    const total = allNotifications.length;
    const unread = allNotifications.filter((n) => !n.isRead).length;
    const byType = {};
    const byRecipient = {};
    allNotifications.forEach((n) => {
      byType[n.type] = (byType[n.type] || 0) + 1;
      byRecipient[n.recipientType] = (byRecipient[n.recipientType] || 0) + 1;
    });
    res.json({
      success: true,
      total,
      unread,
      readRate: total > 0 ? ((total - unread) / total * 100).toFixed(1) : "0",
      deviceCount: deviceCount.length,
      byType,
      byRecipient
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A:", error);
    res.status(500).json({ success: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
router10.get("/device-tokens", async (req, res) => {
  try {
    const db5 = getDb2();
    const tokens = await db5.select().from(deviceTokens).where(eq8(deviceTokens.isActive, true));
    res.json({ success: true, tokens, count: tokens.length });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 device tokens:", error);
    res.status(500).json({ success: false, message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
  }
});
var flutter_default = router10;

// server/routes/wasalni.ts
import express13 from "express";
init_schema();
var router11 = express13.Router();
router11.get("/", async (req, res) => {
  try {
    const { phone, customerId, status } = req.query;
    const db5 = storage.db;
    if (!db5) return res.status(500).json({ error: "Database not available" });
    const { desc: desc7 } = await import("drizzle-orm");
    let results = await db5.select().from(wasalniRequests2).orderBy(desc7(wasalniRequests2.createdAt));
    if (status) results = results.filter((r) => r.status === status);
    if (phone) results = results.filter((r) => r.customerPhone === phone);
    if (customerId) results = results.filter((r) => r.customerId === customerId);
    res.json(results);
  } catch (error) {
    console.error("Error fetching wasalni requests:", error);
    res.status(500).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u0627\u062A" });
  }
});
router11.get("/:id", async (req, res) => {
  try {
    const db5 = storage.db;
    const { eq: eq10 } = await import("drizzle-orm");
    const [request] = await db5.select().from(wasalniRequests2).where(eq10(wasalniRequests2.id, req.params.id));
    if (!request) return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628" });
  }
});
router11.post("/", async (req, res) => {
  try {
    try {
      const allSettings = await storage.getUiSettings();
      const settingsMap = new Map(allSettings.map((s) => [s.key, s.value]));
      const storeStatus = settingsMap.get("store_status");
      const openingTime = settingsMap.get("opening_time") || "08:00";
      const closingTime = settingsMap.get("closing_time") || "23:00";
      if (storeStatus === "closed") {
        return res.status(400).json({
          error: "\u0639\u0630\u0631\u0627\u064B\u060C \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u063A\u0644\u0642 \u062D\u0627\u0644\u064A\u0627\u064B \u0648\u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0637\u0644\u0628\u0627\u062A \u0648\u0635\u0644 \u0644\u064A",
          code: "APP_CLOSED"
        });
      }
      if (storeStatus !== "open") {
        const now = /* @__PURE__ */ new Date();
        const currentTime = now.toTimeString().slice(0, 5);
        const timeToMinutes2 = (t) => {
          const [h, m] = t.split(":").map(Number);
          return h * 60 + m;
        };
        const current = timeToMinutes2(currentTime);
        const open = timeToMinutes2(openingTime);
        const close = timeToMinutes2(closingTime);
        let appIsOpen = close > open ? current >= open && current < close : current >= open || current < close;
        if (!appIsOpen) {
          return res.status(400).json({
            error: "\u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u062E\u0627\u0631\u062C \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644 \u062D\u0627\u0644\u064A\u0627\u064B\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0637\u0644\u0628 \u0644\u0627\u062D\u0642\u0627\u064B",
            code: "APP_CLOSED"
          });
        }
      }
    } catch (err) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0637\u0628\u064A\u0642:", err);
    }
    const {
      customerName,
      customerPhone,
      customerId,
      fromAddress,
      toAddress,
      fromLat,
      fromLng,
      toLat,
      toLng,
      orderType,
      notes,
      scheduledDate,
      scheduledTime,
      estimatedFee
    } = req.body;
    if (!customerName || !customerPhone || !fromAddress || !toAddress) {
      return res.status(400).json({ error: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629: \u0627\u0644\u0627\u0633\u0645\u060C \u0627\u0644\u0647\u0627\u062A\u0641\u060C \u0645\u0646 \u0639\u0646\u0648\u0627\u0646\u060C \u0625\u0644\u0649 \u0639\u0646\u0648\u0627\u0646" });
    }
    const requestNumber = `WSL-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    const db5 = storage.db;
    const [newRequest] = await db5.insert(wasalniRequests2).values({
      requestNumber,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerId: customerId || null,
      fromAddress: fromAddress.trim(),
      toAddress: toAddress.trim(),
      fromLat: fromLat ? String(fromLat) : null,
      fromLng: fromLng ? String(fromLng) : null,
      toLat: toLat ? String(toLat) : null,
      toLng: toLng ? String(toLng) : null,
      orderType: orderType || "\u0637\u0639\u0627\u0645",
      notes: notes?.trim() || null,
      scheduledDate: scheduledDate || null,
      scheduledTime: scheduledTime || null,
      estimatedFee: estimatedFee ? String(estimatedFee) : null,
      status: "pending"
    }).returning();
    await storage.createNotification({
      type: "new_wasalni_request",
      title: "\u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u062C\u062F\u064A\u062F",
      message: `\u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u062C\u062F\u064A\u062F \u0631\u0642\u0645 ${requestNumber} \u0645\u0646 ${customerName} - \u0645\u0646: ${fromAddress} \u0625\u0644\u0649: ${toAddress}`,
      recipientType: "admin",
      recipientId: null,
      orderId: null,
      isRead: false
    });
    await storage.createNotification({
      type: "wasalni_received",
      title: "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A",
      message: `\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643 \u0631\u0642\u0645 ${requestNumber} \u0648\u0647\u0648 \u0642\u064A\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629`,
      recipientType: "customer",
      recipientId: customerId || customerPhone,
      orderId: newRequest.id,
      // ربط الطلب بالتتبع
      isRead: false
    });
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("new_wasalni_request", { requestId: newRequest.id, requestNumber });
    }
    res.status(201).json({ success: true, request: newRequest });
  } catch (error) {
    console.error("Error creating wasalni request:", error);
    res.status(500).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628" });
  }
});
router11.get("/number/:requestNumber", async (req, res) => {
  try {
    const { requestNumber } = req.params;
    const db5 = storage.db;
    const { eq: eq10 } = await import("drizzle-orm");
    const [request] = await db5.select().from(wasalniRequests2).where(eq10(wasalniRequests2.requestNumber, requestNumber));
    if (!request) return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628" });
  }
});
router11.put("/:id", async (req, res) => {
  try {
    const db5 = storage.db;
    const { eq: eq10 } = await import("drizzle-orm");
    const { status, driverId, adminNotes, cancelReason, estimatedFee } = req.body;
    const updateData = { updatedAt: /* @__PURE__ */ new Date() };
    if (status) updateData.status = status;
    if (driverId !== void 0) updateData.driverId = driverId;
    if (adminNotes !== void 0) updateData.adminNotes = adminNotes;
    if (cancelReason !== void 0) updateData.cancelReason = cancelReason;
    if (estimatedFee !== void 0) updateData.estimatedFee = String(estimatedFee);
    const [updated] = await db5.update(wasalniRequests2).set(updateData).where(eq10(wasalniRequests2.id, req.params.id)).returning();
    if (!updated) return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    if (status) {
      const ws = req.app.get("ws");
      if (ws) {
        ws.broadcast("order_update", { orderId: updated.id, status, type: "wasalni" });
      }
      const statusMessages = {
        confirmed: "\u062A\u0645 \u0642\u0628\u0648\u0644 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0627\u0644\u062E\u0627\u0635 \u0628\u0643",
        on_way: "\u0627\u0644\u0633\u0627\u0626\u0642 \u0641\u064A \u0637\u0631\u064A\u0642\u0647 \u0644\u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628\u0643",
        delivered: "\u062A\u0645 \u062A\u0646\u0641\u064A\u0630 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0628\u0646\u062C\u0627\u062D",
        cancelled: `\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A. ${cancelReason ? `\u0627\u0644\u0633\u0628\u0628: ${cancelReason}` : ""}`
      };
      if (statusMessages[status]) {
        await storage.createNotification({
          type: "wasalni_status_update",
          title: "\u062A\u062D\u062F\u064A\u062B \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A",
          message: `${statusMessages[status]} - \u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628: ${updated.requestNumber}`,
          recipientType: "customer",
          recipientId: updated.customerId || updated.customerPhone,
          orderId: updated.id,
          // ربط الطلب بالتتبع
          isRead: false
        });
      }
    }
    res.json({ success: true, request: updated });
  } catch (error) {
    console.error("Error updating wasalni request:", error);
    res.status(500).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0637\u0644\u0628" });
  }
});
router11.delete("/:id", async (req, res) => {
  try {
    const db5 = storage.db;
    const { eq: eq10 } = await import("drizzle-orm");
    await db5.delete(wasalniRequests2).where(eq10(wasalniRequests2.id, req.params.id));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0637\u0644\u0628" });
  }
});
router11.post("/:id/assign-driver", async (req, res) => {
  try {
    const { driverId } = req.body;
    if (!driverId) return res.status(400).json({ error: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0633\u0627\u0626\u0642 \u0645\u0637\u0644\u0648\u0628" });
    const db5 = storage.db;
    const { eq: eq10 } = await import("drizzle-orm");
    const [request] = await db5.select().from(wasalniRequests2).where(eq10(wasalniRequests2.id, req.params.id));
    if (!request) return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
    const [updated] = await db5.update(wasalniRequests2).set({
      driverId,
      status: "confirmed",
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq10(wasalniRequests2.id, req.params.id)).returning();
    try {
      await storage.updateDriver(driverId, { isAvailable: false });
    } catch (driverErr) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0633\u0627\u0626\u0642:", driverErr);
    }
    const ws = req.app.get("ws");
    if (ws) {
      ws.broadcast("order_update", {
        orderId: updated.id,
        status: "confirmed",
        type: "wasalni",
        requestNumber: request.requestNumber
      });
      if (ws.sendToDriver) {
        ws.sendToDriver(driverId, "new_order_assigned", {
          orderId: updated.id,
          status: "confirmed",
          message: `\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u062C\u062F\u064A\u062F \u0644\u0643 \u0631\u0642\u0645 ${request.requestNumber}`,
          type: "wasalni",
          orderData: updated
        });
      }
    }
    await storage.createNotification({
      type: "wasalni_driver_assigned",
      title: "\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0633\u0627\u0626\u0642 \u0644\u0637\u0644\u0628\u0643",
      message: `\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0633\u0627\u0626\u0642 \u0644\u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0631\u0642\u0645 ${request.requestNumber}. \u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0627\u0644\u0633\u0627\u0626\u0642 \u0642\u0631\u064A\u0628\u0627\u064B.`,
      recipientType: "customer",
      recipientId: request.customerId || request.customerPhone,
      orderId: updated.id,
      // ربط الطلب بالتتبع
      isRead: false
    });
    await storage.createNotification({
      type: "new_wasalni_assignment",
      title: "\u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u062C\u062F\u064A\u062F \u0645\u064F\u0639\u064A\u0646 \u0644\u0643",
      message: `\u062A\u0645 \u062A\u0639\u064A\u064A\u0646 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u062C\u062F\u064A\u062F \u0644\u0643 \u0631\u0642\u0645 ${request.requestNumber}. \u0645\u0646: ${request.fromAddress} \u0625\u0644\u0649: ${request.toAddress}`,
      recipientType: "driver",
      recipientId: driverId,
      orderId: updated.id,
      // ربط الطلب بالتتبع
      isRead: false
    });
    res.json({ success: true, request: updated });
  } catch (error) {
    console.error("Error assigning driver to wasalni request:", error);
    res.status(500).json({ error: "\u0641\u0634\u0644 \u0641\u064A \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642" });
  }
});
var wasalni_default = router11;

// server/imageUpload.ts
import express14 from "express";
import multer from "multer";
import path5 from "path";
import { randomUUID as randomUUID3 } from "crypto";

// server/localStorage.ts
import fs3 from "fs";
import path4 from "path";
import { fileURLToPath as fileURLToPath4 } from "url";
var __dirname4 = path4.dirname(fileURLToPath4(import.meta.url));
var UPLOADS_DIR = path4.resolve(__dirname4, "..", "uploads");
var STORAGE_BUCKETS = {
  restaurants: "restaurants",
  menuItems: "menuItems",
  offers: "offers",
  categories: "categories",
  general: "general"
};
function ensureUploadsDir() {
  if (!fs3.existsSync(UPLOADS_DIR)) {
    fs3.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
  for (const bucket of Object.values(STORAGE_BUCKETS)) {
    const bucketDir = path4.join(UPLOADS_DIR, bucket);
    if (!fs3.existsSync(bucketDir)) {
      fs3.mkdirSync(bucketDir, { recursive: true });
    }
  }
}
function getPublicUrl(filename, category) {
  return `/uploads/${category}/${filename}`;
}
function deleteLocalFile(filePath) {
  try {
    const fullPath = path4.join(UPLOADS_DIR, filePath);
    if (fs3.existsSync(fullPath)) {
      fs3.unlinkSync(fullPath);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

// server/imageUpload.ts
var router12 = express14.Router();
ensureUploadsDir();
var storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = req.body?.category || "general";
    const bucket = STORAGE_BUCKETS[category] || "general";
    const dest = path5.join(UPLOADS_DIR, bucket);
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    const timestamp2 = Date.now();
    const randomId = randomUUID3().substring(0, 8);
    const extension = file.originalname.split(".").pop()?.toLowerCase() || "jpg";
    cb(null, `${timestamp2}-${randomId}.${extension}`);
  }
});
var upload = multer({
  storage: storage2,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("\u0646\u0648\u0639 \u0627\u0644\u0645\u0644\u0641 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645. \u064A\u0631\u062C\u0649 \u0631\u0641\u0639 \u0635\u0648\u0631\u0629 \u0628\u0635\u064A\u063A\u0629 JPG, PNG, WebP, \u0623\u0648 GIF"));
    }
  }
});
router12.post("/upload", upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0644\u0641" });
    }
    const category = req.body?.category || "general";
    const bucket = STORAGE_BUCKETS[category] || "general";
    const url = getPublicUrl(req.file.filename, bucket);
    res.json({
      success: true,
      message: "\u062A\u0645 \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D",
      data: {
        url,
        path: `${bucket}/${req.file.filename}`,
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        category,
        contentType: req.file.mimetype
      }
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629:", error);
    res.status(500).json({ success: false, message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629" });
  }
});
router12.post("/upload-multiple", upload.array("images", 10), (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length === 0) {
      return res.status(400).json({ success: false, message: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0644\u0641\u0627\u062A" });
    }
    const category = req.body?.category || "general";
    const bucket = STORAGE_BUCKETS[category] || "general";
    const uploadedFiles = files.map((file) => ({
      url: getPublicUrl(file.filename, bucket),
      path: `${bucket}/${file.filename}`,
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      contentType: file.mimetype
    }));
    res.json({
      success: true,
      message: `\u062A\u0645 \u0631\u0641\u0639 ${files.length} \u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D`,
      data: uploadedFiles,
      failed: []
    });
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631:", error);
    res.status(500).json({ success: false, message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631" });
  }
});
router12.delete("/delete", (req, res) => {
  try {
    const { url, category } = req.body;
    if (!url) {
      return res.status(400).json({ success: false, message: "\u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629 \u0645\u0637\u0644\u0648\u0628" });
    }
    const match = url.match(/\/uploads\/(.+)$/);
    if (!match) {
      return res.status(400).json({ success: false, message: "\u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
    }
    const deleted = deleteLocalFile(match[1]);
    if (deleted) {
      res.json({ success: true, message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D" });
    } else {
      res.status(404).json({ success: false, message: "\u0627\u0644\u0635\u0648\u0631\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
    }
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0629:", error);
    res.status(500).json({ success: false, message: "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062D\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0629" });
  }
});
router12.head("/upload", (req, res) => {
  res.status(200).end();
});
var imageUpload_default = router12;

// server/routes.ts
init_schema();
var __dirname5 = path6.dirname(fileURLToPath5(import.meta.url));
async function registerRoutes(app2) {
  ensureUploadsDir();
  app2.use("/uploads", express15.static(UPLOADS_DIR));
  app2.get("/.well-known/assetlinks.json", (_req, res) => {
    try {
      const filePath = path6.resolve(import.meta.dirname, "..", "client", "public", "well-known", "assetlinks.json");
      res.type("application/json").sendFile(filePath);
    } catch (err) {
      res.status(404).json({ error: "assetlinks.json not found" });
    }
  });
  app2.use("/api/images", imageUpload_default);
  app2.use("/api/auth", auth_default);
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
      const restaurants3 = await storage.getRestaurants(filters);
      res.json(restaurants3);
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
      const allItems = await storage.getMenuItems(restaurantId);
      res.json({ allItems });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });
  app2.get("/api/special-offers", async (req, res) => {
    try {
      log2("\u{1F50D} Storage type: " + storage.constructor.name);
      res.set("Cache-Control", "no-store");
      const { active } = req.query;
      let offers;
      if (active === "false") {
        offers = await storage.getSpecialOffers();
      } else {
        offers = await storage.getActiveSpecialOffers();
      }
      log2("\u{1F4CA} Found offers: " + offers.length + " offers");
      res.json(offers);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      log2("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062E\u0627\u0635\u0629: " + errorMessage);
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
  app2.get("/api/bootstrap", async (req, res) => {
    try {
      const { phone, customerId } = req.query;
      const [
        uiSettings2,
        categories2,
        restaurants3,
        specialOffers2,
        paymentMethodsRaw
      ] = await Promise.all([
        storage.getUiSettings().catch(() => []),
        storage.getCategories().catch(() => []),
        storage.getRestaurants({}).catch(() => []),
        storage.getActiveSpecialOffers().catch(() => []),
        storage.getActivePaymentMethods?.().catch(() => []) ?? Promise.resolve([])
      ]);
      const paymentMethods2 = await Promise.all(
        (paymentMethodsRaw || []).map(async (m) => {
          try {
            const docs = await storage.getPaymentMethodDocuments?.(m.id) ?? [];
            return { ...m, documents: docs };
          } catch {
            return { ...m, documents: [] };
          }
        })
      );
      let customerData = null;
      if (phone || customerId) {
        const [addresses, orders3, allNotifs] = await Promise.all([
          customerId ? storage.getUserAddresses?.(customerId).catch(() => []) ?? Promise.resolve([]) : Promise.resolve([]),
          phone ? storage.getOrdersByCustomer(phone).catch(() => []) : Promise.resolve([]),
          storage.getNotifications?.("customer").catch(() => []) ?? Promise.resolve([])
        ]);
        const myNotifications = (allNotifs || []).filter((n) => {
          if (!n.recipientId || n.recipientId === "all") return true;
          if (customerId && n.recipientId === customerId) return true;
          if (phone && n.recipientId === phone) return true;
          return false;
        });
        myNotifications.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        customerData = {
          addresses: addresses || [],
          orders: orders3 || [],
          notifications: myNotifications.slice(0, 30),
          unreadCount: myNotifications.filter((n) => !n.isRead).length
        };
      }
      res.set("Cache-Control", "no-store");
      res.json({
        uiSettings: uiSettings2,
        categories: categories2,
        restaurants: restaurants3,
        specialOffers: specialOffers2,
        paymentMethods: paymentMethods2,
        customer: customerData,
        serverTime: Date.now()
      });
    } catch (error) {
      console.error("Error in /api/bootstrap:", error);
      res.status(500).json({ message: "Failed to load bootstrap data" });
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
      broadcastSettingsChanged(key);
      res.json(updated);
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0648\u0627\u062C\u0647\u0629:", error);
      res.status(500).json({ message: "Failed to update UI setting" });
    }
  });
  app2.get("/api/orders/:id/track", async (req, res) => {
    try {
      const { id } = req.params;
      let orderData = await storage.getOrder(id);
      let isWaselLi = false;
      if (!orderData) {
        const wasalniOrder = await storage.getWasalniRequest(id);
        if (wasalniOrder) {
          isWaselLi = true;
          orderData = {
            ...wasalniOrder,
            orderNumber: wasalniOrder.requestNumber,
            deliveryAddress: wasalniOrder.toAddress,
            customerLocationLat: wasalniOrder.toLat,
            customerLocationLng: wasalniOrder.toLng,
            total: wasalniOrder.estimatedFee,
            items: [],
            // Wasalni has no items list usually
            isWaselLi: true,
            pickupAddress: wasalniOrder.fromAddress,
            pickupLocationLat: wasalniOrder.fromLat,
            pickupLocationLng: wasalniOrder.fromLng,
            waselLiItemType: wasalniOrder.orderType,
            restaurantName: "\u0648\u0635\u0644 \u0644\u064A"
          };
        }
      }
      if (!orderData) {
        return res.status(404).json({ error: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      const trackingEntries = await storage.getOrderTracking(id);
      let tracking = trackingEntries.map((t, index) => ({
        id: t.id || String(index + 1),
        status: t.status,
        message: t.message,
        timestamp: t.createdAt,
        createdByType: t.createdByType
      }));
      if (tracking.length === 0) {
        const baseTime = new Date(orderData.createdAt);
        if (orderData.status === "pending" || orderData.status === "confirmed" || orderData.status === "preparing" || orderData.status === "on_way" || orderData.status === "delivered") {
          tracking.push({
            id: "1",
            status: "pending",
            message: isWaselLi ? "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A" : "\u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0637\u0644\u0628",
            timestamp: baseTime,
            createdByType: "system"
          });
        }
        if (orderData.status === "confirmed" || orderData.status === "preparing" || orderData.status === "on_way" || orderData.status === "delivered") {
          tracking.push({
            id: "2",
            status: "confirmed",
            message: isWaselLi ? "\u062A\u0645 \u0642\u0628\u0648\u0644 \u0637\u0644\u0628\u0643 \u0648\u062C\u0627\u0631\u064A \u062A\u0639\u064A\u064A\u0646 \u0633\u0627\u0626\u0642" : "\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0645\u0637\u0639\u0645",
            timestamp: new Date(baseTime.getTime() + 5 * 6e4),
            createdByType: isWaselLi ? "system" : "restaurant"
          });
        }
        if (orderData.status === "preparing" || orderData.status === "on_way" || orderData.status === "delivered") {
          tracking.push({
            id: "3",
            status: "preparing",
            message: isWaselLi ? "\u0627\u0644\u0633\u0627\u0626\u0642 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642 \u0644\u0646\u0642\u0637\u0629 \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645" : "\u062C\u0627\u0631\u064A \u062A\u062D\u0636\u064A\u0631 \u0627\u0644\u0637\u0644\u0628",
            timestamp: new Date(baseTime.getTime() + 10 * 6e4),
            createdByType: isWaselLi ? "driver" : "restaurant"
          });
        }
        if (orderData.status === "on_way" || orderData.status === "delivered") {
          tracking.push({
            id: "4",
            status: "on_way",
            message: isWaselLi ? "\u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0633\u062A\u0644\u0645 \u0627\u0644\u063A\u0631\u0636 \u0648\u0647\u0648 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642 \u0625\u0644\u064A\u0643" : "\u0627\u0644\u0637\u0644\u0628 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642 \u0625\u0644\u064A\u0643",
            timestamp: new Date(baseTime.getTime() + 20 * 6e4),
            createdByType: "driver"
          });
        }
        if (orderData.status === "delivered") {
          tracking.push({
            id: "5",
            status: "delivered",
            message: isWaselLi ? "\u062A\u0645 \u062A\u0648\u0635\u064A\u0644 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0628\u0646\u062C\u0627\u062D" : "\u062A\u0645 \u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D",
            timestamp: new Date(baseTime.getTime() + 35 * 6e4),
            createdByType: "driver"
          });
        }
      }
      let parsedItems = [];
      try {
        parsedItems = typeof orderData.items === "string" ? JSON.parse(orderData.items) : orderData.items;
      } catch (e) {
        parsedItems = [];
      }
      res.json({
        order: {
          ...orderData,
          items: parsedItems,
          total: parseFloat(orderData.total || "0")
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
  app2.get("/api/restaurants/:restaurantId/sections", async (req, res) => {
    try {
      const { restaurantId } = req.params;
      const sections = await storage.getRestaurantSections(restaurantId);
      res.json(sections);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch sections" });
    }
  });
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
      res.status(500).json({ message: "Failed to fetch notifications" });
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
  app2.put("/api/notifications/:id/read", async (req, res) => {
    try {
      const { id } = req.params;
      const notification = await storage.markNotificationAsRead(id);
      if (!notification) {
        return res.status(404).json({ message: "Notification not found" });
      }
      res.json(notification);
    } catch (error) {
      res.status(400).json({ message: "Failed to update notification" });
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
  app2.use("/api/restaurant-accounts", restaurant_accounts_default);
  app2.use("/api/flutter", flutter_default);
  app2.use("/api/wasalni", wasalni_default);
  app2.use("/api", router8);
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
  app2.get("/api/notifications/customer", async (req, res) => {
    try {
      const { phone, customerId } = req.query;
      if (!phone && !customerId) {
        return res.status(400).json({ message: "phone or customerId required" });
      }
      const allNotifs = await storage.getNotifications("customer");
      const filtered = allNotifs.filter((n) => {
        if (!n.recipientId || n.recipientId === "all") return true;
        if (customerId && n.recipientId === customerId) return true;
        if (phone && n.recipientId === phone) return true;
        return false;
      });
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      res.json(filtered);
    } catch (error) {
      console.error("Error fetching customer notifications:", error);
      res.status(500).json({ message: "Failed to fetch notifications" });
    }
  });
  app2.put("/api/notifications/customer/mark-all-read", async (req, res) => {
    try {
      const { phone, customerId } = req.body;
      if (!phone && !customerId) {
        return res.status(400).json({ message: "phone or customerId required" });
      }
      const allNotifs = await storage.getNotifications("customer");
      const unread = allNotifs.filter((n) => {
        if (n.isRead) return false;
        if (!n.recipientId || n.recipientId === "all") return true;
        if (customerId && n.recipientId === customerId) return true;
        if (phone && n.recipientId === phone) return true;
        return false;
      });
      await Promise.all(unread.map((n) => storage.markNotificationAsRead(n.id)));
      if (global.WS_MANAGER) {
        const payload = { allRead: true, count: unread.length };
        if (customerId) global.WS_MANAGER.sendToUser(customerId, "notifications_updated", payload);
        if (phone) global.WS_MANAGER.sendToUser(phone, "notifications_updated", payload);
      }
      res.json({ success: true, markedCount: unread.length });
    } catch (error) {
      console.error("Error marking customer notifications as read:", error);
      res.status(500).json({ message: "Failed to mark notifications as read" });
    }
  });
  app2.put("/api/notifications/:id/read", async (req, res) => {
    try {
      const { id } = req.params;
      const notification = await storage.markNotificationAsRead(id);
      if (!notification) {
        return res.status(404).json({ message: "Notification not found" });
      }
      if (global.WS_MANAGER && notification.recipientId) {
        const payload = { id: notification.id, isRead: true };
        if (notification.recipientType === "driver") {
          global.WS_MANAGER.sendToDriver(notification.recipientId, "notifications_updated", payload);
        } else {
          global.WS_MANAGER.sendToUser(notification.recipientId, "notifications_updated", payload);
        }
      }
      res.json(notification);
    } catch (error) {
      console.error("Error marking notification as read:", error);
      res.status(500).json({ message: "Failed to update notification" });
    }
  });
  app2.get("/api/payment-methods", async (req, res) => {
    try {
      const methods = await storage.getActivePaymentMethods();
      const methodsWithDocs = await Promise.all(methods.map(async (m) => {
        const docs = await storage.getPaymentMethodDocuments(m.id);
        return { ...m, documents: docs };
      }));
      res.json(methodsWithDocs);
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0631\u0642 \u0627\u0644\u062F\u0641\u0639:", error);
      res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
    }
  });
  app2.post("/api/coupons/validate", async (req, res) => {
    try {
      const { code, orderValue, userId, userPhone } = req.body;
      if (!code) return res.status(400).json({ error: "\u0643\u0648\u062F \u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u0645\u0637\u0644\u0648\u0628" });
      if (!orderValue) return res.status(400).json({ error: "\u0642\u064A\u0645\u0629 \u0627\u0644\u0637\u0644\u0628 \u0645\u0637\u0644\u0648\u0628\u0629" });
      const result = await storage.validateCoupon(code, parseFloat(orderValue), userId, userPhone);
      res.json(result);
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0643\u0648\u0628\u0648\u0646:", error);
      res.status(500).json({ error: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
    }
  });
  const httpServer = createServer2(app2);
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
    log2(`New WS connection from ${req.socket.remoteAddress}`);
    ws.isAlive = true;
    ws.on("pong", () => {
      ws.isAlive = true;
    });
    ws.on("message", (data) => {
      try {
        const message = JSON.parse(data.toString());
        handleMessage(ws, message, clients, userConnections, orderTrackers, wss);
      } catch (err) {
        log2(`Failed to parse WS message: ${err}`);
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
        log2(`User ${userId} (${userType}) authenticated via WS with key ${connectionKey}`);
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
        log2(`Client tracking order ${orderId2} via WS`);
      }
      break;
    case "location_update":
      const { driverId, latitude, longitude, currentLocation } = message.payload;
      if (driverId && latitude && longitude) {
        try {
          storage.updateDriver(driverId, {
            latitude: latitude.toString(),
            longitude: longitude.toString(),
            currentLocation: currentLocation || void 0
          }).catch((err) => console.error("Error updating driver location in DB:", err));
        } catch (e) {
          console.error("Failed to update driver location:", e);
        }
        const broadcastMsg = JSON.stringify({
          type: "driver_location",
          payload: { driverId, latitude, longitude, currentLocation, timestamp: Date.now() }
        });
        wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(broadcastMsg);
          }
        });
      }
      break;
    case "settings_update":
      const settingsPayload = message.payload;
      const settingsMsg = JSON.stringify({
        type: "settings_changed",
        payload: settingsPayload
      });
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(settingsMsg);
        }
      });
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
  }
}

// server/seed.ts
var defaultUiSettings = [
  // إعدادات التنقل
  { key: "show_categories", value: "true", category: "navigation", description: "\u0639\u0631\u0636 \u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0637\u0627\u0639\u0645 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" },
  { key: "show_search_bar", value: "true", category: "navigation", description: "\u0639\u0631\u0636 \u0634\u0631\u064A\u0637 \u0627\u0644\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" },
  { key: "show_special_offers", value: "true", category: "navigation", description: "\u0639\u0631\u0636 \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u062E\u0627\u0635\u0629 \u0648\u0627\u0644\u062A\u062E\u0641\u064A\u0636\u0627\u062A" },
  { key: "show_orders_page", value: "true", category: "navigation", description: "\u0639\u0631\u0636 \u0635\u0641\u062D\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0641\u064A \u0627\u0644\u062A\u0646\u0642\u0644" },
  { key: "show_track_orders_page", value: "true", category: "navigation", description: "\u0639\u0631\u0636 \u0635\u0641\u062D\u0629 \u062A\u062A\u0628\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0641\u064A \u0627\u0644\u062A\u0646\u0642\u0644" },
  { key: "show_admin_panel", value: "true", category: "navigation", description: "\u0639\u0631\u0636 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0625\u062F\u0627\u0631\u064A\u0629" },
  { key: "show_delivery_app", value: "true", category: "navigation", description: "\u0639\u0631\u0636 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062A\u0648\u0635\u064A\u0644" },
  { key: "show_hero_section", value: "true", category: "navigation", description: "\u0639\u0631\u0636 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u062A\u062D\u0631\u0643" },
  { key: "show_featured_products", value: "true", category: "navigation", description: "\u0639\u0631\u0636 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0629" },
  { key: "show_wasalni_service", value: "true", category: "navigation", description: "\u0639\u0631\u0636 \u062E\u062F\u0645\u0629 \u0648\u0635\u0644 \u0644\u064A \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" },
  { key: "wasalni_base_fee", value: "5", category: "delivery", description: "\u0631\u0633\u0648\u0645 \u062E\u062F\u0645\u0629 \u0648\u0635\u0644 \u0644\u064A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629" },
  { key: "bottom_bar_enabled", value: "true", category: "navigation", description: "\u0625\u0638\u0647\u0627\u0631 \u0634\u0631\u064A\u0637 \u0627\u0644\u062A\u0646\u0642\u0644 \u0627\u0644\u0633\u0641\u0644\u064A" },
  // إعدادات عامة
  { key: "app_name", value: "\u0648\u0627\u0635\u0644", category: "general", description: "\u0627\u0633\u0645 \u0627\u0644\u062A\u0637\u0628\u064A\u0642" },
  { key: "app_theme", value: "#ec3714", category: "general", description: "\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064A \u0644\u0644\u062A\u0637\u0628\u064A\u0642 (hex)" },
  { key: "delivery_fee_default", value: "5", category: "general", description: "\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 (\u0631\u064A\u0627\u0644)" },
  { key: "minimum_order_default", value: "25", category: "general", description: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0637\u0644\u0628 (\u0631\u064A\u0627\u0644)" },
  // إعدادات التوصيل
  { key: "delivery_base_fee", value: "5", category: "delivery", description: "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0644\u0644\u062A\u0648\u0635\u064A\u0644 (\u0631\u064A\u0627\u0644)" },
  { key: "min_delivery_fee", value: "5", category: "delivery", description: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 (\u0631\u064A\u0627\u0644)" },
  { key: "delivery_fee_per_km", value: "2", category: "delivery", description: "\u0631\u0633\u0648\u0645 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0644\u0643\u0644 \u0643\u064A\u0644\u0648\u0645\u062A\u0631 (\u0631\u064A\u0627\u0644)" },
  // إعدادات المتجر
  { key: "store_lat", value: "15.3694", category: "store", description: "\u062E\u0637 \u0627\u0644\u0639\u0631\u0636 \u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u062A\u062C\u0631" },
  { key: "store_lng", value: "44.1910", category: "store", description: "\u062E\u0637 \u0627\u0644\u0637\u0648\u0644 \u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u062A\u062C\u0631" },
  { key: "opening_time", value: "08:00", category: "store", description: "\u0648\u0642\u062A \u0641\u062A\u062D \u0627\u0644\u0645\u062A\u062C\u0631" },
  { key: "closing_time", value: "23:00", category: "store", description: "\u0648\u0642\u062A \u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0645\u062A\u062C\u0631" },
  { key: "store_status", value: "open", category: "store", description: "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062A\u062C\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629" },
  // إعدادات الهوية البصرية
  { key: "header_logo_url", value: "", category: "branding", description: "\u0634\u0639\u0627\u0631 \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u0639\u0644\u0648\u064A" },
  { key: "sidebar_image_url", value: "", category: "branding", description: "\u0635\u0648\u0631\u0629 \u062E\u0644\u0641\u064A\u0629 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062C\u0627\u0646\u0628\u064A\u0629" },
  { key: "sidebar_logo_url", value: "", category: "branding", description: "\u0634\u0639\u0627\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062C\u0627\u0646\u0628\u064A\u0629 (\u0625\u0630\u0627 \u0643\u0627\u0646 \u0645\u062E\u062A\u0644\u0641\u0627\u064B \u0639\u0646 \u0634\u0639\u0627\u0631 \u0627\u0644\u0647\u064A\u062F\u0631)" },
  { key: "show_sidebar_logo", value: "true", category: "branding", description: "\u0625\u0638\u0647\u0627\u0631 \u0634\u0639\u0627\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062C\u0627\u0646\u0628\u064A\u0629" },
  { key: "sidebar_tagline", value: "\u0648\u0627\u0635\u0644 \xB7 \u0646\u0648\u0635\u0644 \u0644\u0643 \u0628\u0643\u0644 \u0633\u0631\u0639\u0629 \u0648\u0623\u0645\u0627\u0646", category: "branding", description: "\u0627\u0644\u0634\u0639\u0627\u0631 \u0627\u0644\u0646\u0635\u064A \u0641\u064A \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062C\u0627\u0646\u0628\u064A\u0629" },
  { key: "address_text", value: "\u0623\u062E\u062A\u0627\u0631 \u0627\u0644\u0639\u0646\u0648\u0627\u0646", category: "branding", description: "\u0646\u0635 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0648\u0642\u0639 \u0641\u064A \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u0639\u0644\u0648\u064A" },
  // إعدادات الشاشة الرئيسية - بانر العروض
  { key: "offer_banner_1_title", value: "\u0639\u0631\u0648\u0636 \u062D\u0635\u0631\u064A\u0629 \u064A\u0648\u0645\u064A\u0629 \u0644\u0644\u062A\u0648\u0635\u064A\u0644", category: "home", description: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u0623\u0648\u0644" },
  { key: "offer_banner_1_subtitle", value: "\u0627\u0637\u0644\u0628 \u0627\u0644\u0622\u0646 \u0648\u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0623\u0633\u0631\u0639 \u062A\u0648\u0635\u064A\u0644", category: "home", description: "\u0646\u0635 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u0623\u0648\u0644" },
  { key: "offer_banner_2_title", value: "\u0627\u0643\u062A\u0634\u0641 \u0623\u062D\u062F\u062B \u0627\u0644\u0639\u0631\u0648\u0636 \u0648\u0627\u0644\u062E\u0635\u0648\u0645\u0627\u062A", category: "home", description: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u062B\u0627\u0646\u064A" },
  { key: "offer_banner_2_subtitle", value: "\u062E\u0635\u0648\u0645\u0627\u062A \u062D\u0635\u0631\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0644\u0628\u0627\u062A", category: "home", description: "\u0646\u0635 \u0627\u0644\u0628\u0627\u0646\u0631 \u0627\u0644\u062B\u0627\u0646\u064A" },
  // إعدادات أزرار التصنيف والصفحة الرئيسية
  { key: "btn_tab_all", value: "\u0627\u0644\u0643\u0644", category: "home", description: "\u0646\u0635 \u062A\u0628\u0648\u064A\u0628 \u0643\u0644 \u0627\u0644\u0645\u0637\u0627\u0639\u0645" },
  { key: "btn_tab_nearest", value: "\u0627\u0644\u0623\u0642\u0631\u0628", category: "home", description: "\u0646\u0635 \u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u0623\u0642\u0631\u0628" },
  { key: "btn_tab_new", value: "\u0627\u0644\u062C\u062F\u064A\u062F\u0629", category: "home", description: "\u0646\u0635 \u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u062C\u062F\u064A\u062F\u0629" },
  { key: "btn_tab_favorites", value: "\u0627\u0644\u0645\u0641\u0636\u0644\u0629", category: "home", description: "\u0646\u0635 \u062A\u0628\u0648\u064A\u0628 \u0627\u0644\u0645\u0641\u0636\u0644\u0629" },
  { key: "btn_shop_now", value: "\u062A\u0633\u0648\u0642 \u0627\u0644\u0622\u0646", category: "home", description: "\u0646\u0635 \u0632\u0631 \u0627\u0644\u062A\u0633\u0648\u0642" },
  { key: "text_all_categories", value: "\u0643\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A", category: "home", description: "\u0646\u0635 \u0632\u0631 \u0643\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A" },
  { key: "app_version", value: "1.0.0", category: "general", description: "\u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u062A\u0637\u0628\u064A\u0642" },
  { key: "top_bar_logo_url", value: "", category: "branding", description: "\u0634\u0639\u0627\u0631 \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u0639\u0644\u0648\u064A \u0627\u0644\u062B\u0627\u0646\u0648\u064A" },
  { key: "logo_animation_duration", value: "2.5", category: "branding", description: "\u0645\u062F\u0629 \u0638\u0647\u0648\u0631 \u0627\u0644\u0634\u0639\u0627\u0631 (\u062B\u0648\u0627\u0646\u064A)" },
  // إعدادات شاشة الترحيب
  { key: "show_splash_screen", value: "true", category: "splash", description: "\u0639\u0631\u0636 \u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0631\u062D\u064A\u0628" },
  { key: "splash_image_url", value: "", category: "splash", description: "\u0635\u0648\u0631\u0629 \u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0631\u062D\u064A\u0628" },
  { key: "splash_image_url_2", value: "", category: "splash", description: "\u0635\u0648\u0631\u0629 \u0625\u0636\u0627\u0641\u064A\u0629 \u0644\u0644\u062A\u0631\u062D\u064A\u0628" },
  { key: "splash_title", value: "\u0648\u0627\u0635\u0644", category: "splash", description: "\u0639\u0646\u0648\u0627\u0646 \u0634\u0627\u0634\u0629 \u0627\u0644\u062A\u0631\u062D\u064A\u0628" },
  { key: "splash_subtitle", value: "\u0646\u0648\u0635\u0644 \u0644\u0643 \u0628\u0643\u0644 \u0633\u0631\u0639\u0629 \u0648\u0623\u0645\u0627\u0646", category: "splash", description: "\u0646\u0635 \u0627\u0644\u062A\u0631\u062D\u064A\u0628" },
  { key: "splash_button_text", value: "\u0627\u0628\u062F\u0623 \u0627\u0644\u0622\u0646", category: "splash", description: "\u0646\u0635 \u0632\u0631 \u0627\u0644\u0628\u062F\u0627\u064A\u0629" },
  // إعدادات الدعم والتواصل
  { key: "show_support_button", value: "true", category: "support", description: "\u0625\u0638\u0647\u0627\u0631 \u0632\u0631 \u0627\u0644\u062F\u0639\u0645 \u0641\u064A \u0627\u0644\u0634\u0631\u064A\u0637 \u0627\u0644\u0633\u0641\u0644\u064A" },
  { key: "support_whatsapp", value: "", category: "support", description: "\u0631\u0642\u0645 \u0648\u0627\u062A\u0633\u0627\u0628 \u0627\u0644\u062F\u0639\u0645" },
  { key: "support_phone", value: "", category: "support", description: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u0628\u0627\u0634\u0631" },
  { key: "text_support_title", value: "\u0646\u062D\u0646 \u0645\u0639\u0643 \u{1F31F}", category: "support", description: "\u0639\u0646\u0648\u0627\u0646 \u0646\u0627\u0641\u0630\u0629 \u0627\u0644\u062F\u0639\u0645" },
  // إعدادات المشاركة والقائمة الجانبية
  { key: "show_share_button", value: "true", category: "sidebar", description: "\u0625\u0638\u0647\u0627\u0631 \u0632\u0631 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064A \u0627\u0644\u0642\u0627\u0626\u0645\u0629" },
  { key: "show_contact_button", value: "true", category: "sidebar", description: "\u0625\u0638\u0647\u0627\u0631 \u0632\u0631 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0641\u064A \u0627\u0644\u0642\u0627\u0626\u0645\u0629" },
  { key: "share_text", value: "\u062C\u0631\u0628 \u0648\u0627\u0635\u0644 \u0627\u0644\u0622\u0646!", category: "sidebar", description: "\u0646\u0635 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629" },
  { key: "share_url", value: "", category: "sidebar", description: "\u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629" },
  // إعدادات الخصوصية
  { key: "show_privacy_button", value: "true", category: "privacy", description: "\u0625\u0638\u0647\u0627\u0631 \u0632\u0631 \u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629" },
  { key: "privacy_policy_text", value: "", category: "privacy", description: "\u0646\u0635 \u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629" },
  // إعدادات السلة والدفع
  { key: "show_payment_cards", value: "true", category: "cart", description: "\u0625\u0638\u0647\u0627\u0631 \u0628\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u062F\u0641\u0639 \u0641\u064A \u0627\u0644\u0633\u0644\u0629" },
  { key: "show_coupon_box_always", value: "true", category: "cart", description: "\u0625\u0638\u0647\u0627\u0631 \u0635\u0646\u062F\u0648\u0642 \u0627\u0644\u0643\u0648\u0628\u0648\u0646 \u062F\u0627\u0626\u0645\u064B\u0627" },
  { key: "coupon_min_order_value", value: "0", category: "cart", description: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0637\u0644\u0628 \u0644\u0625\u0638\u0647\u0627\u0631 \u0635\u0646\u062F\u0648\u0642 \u0627\u0644\u0643\u0648\u0628\u0648\u0646 (0 = \u062F\u0627\u0626\u0645\u0627\u064B)" },
  { key: "show_cash_payment", value: "true", category: "cart", description: "\u0625\u0638\u0647\u0627\u0631 \u062E\u064A\u0627\u0631 \u0627\u0644\u062F\u0641\u0639 \u0646\u0642\u062F\u0627\u064B" },
  { key: "show_bank_transfer", value: "false", category: "cart", description: "\u0625\u0638\u0647\u0627\u0631 \u062E\u064A\u0627\u0631 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0628\u0646\u0643\u064A" },
  { key: "cart_checkout_button_text", value: "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0637\u0644\u0628", category: "cart", description: "\u0646\u0635 \u0632\u0631 \u0627\u0644\u062F\u0641\u0639" },
  { key: "cart_checkout_note", value: "", category: "cart", description: "\u0631\u0633\u0627\u0644\u0629 \u062A\u062D\u062A \u0632\u0631 \u0627\u0644\u062A\u0623\u0643\u064A\u062F" },
  // إعدادات تطبيق السائق - إظهار/إخفاء الصفحات
  { key: "driver_show_wallet", value: "true", category: "driver", description: "\u0625\u0638\u0647\u0627\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u062D\u0641\u0638\u0629 \u0644\u0644\u0633\u0627\u0626\u0642" },
  { key: "driver_show_stats", value: "true", category: "driver", description: "\u0625\u0638\u0647\u0627\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0644\u0644\u0633\u0627\u0626\u0642" },
  { key: "driver_show_profile", value: "true", category: "driver", description: "\u0625\u0638\u0647\u0627\u0631 \u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A \u0644\u0644\u0633\u0627\u0626\u0642" },
  { key: "driver_show_history", value: "true", category: "driver", description: "\u0625\u0638\u0647\u0627\u0631 \u0633\u062C\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0644 \u0644\u0644\u0633\u0627\u0626\u0642" },
  // إعدادات ساعات عمل الموصلين والطلبات المؤجلة
  { key: "driver_start_time", value: "09:00", category: "driver", description: "\u0648\u0642\u062A \u0628\u062F\u0621 \u062F\u0648\u0627\u0645 \u0627\u0644\u0645\u0648\u0635\u0644\u064A\u0646 (\u0645\u062B\u0627\u0644: 09:00)" },
  { key: "driver_end_time", value: "21:00", category: "driver", description: "\u0648\u0642\u062A \u0627\u0646\u062A\u0647\u0627\u0621 \u062F\u0648\u0627\u0645 \u0627\u0644\u0645\u0648\u0635\u0644\u064A\u0646 (\u0645\u062B\u0627\u0644: 21:00)" },
  { key: "enable_scheduled_orders", value: "true", category: "driver", description: "\u0627\u0644\u0633\u0645\u0627\u062D \u0644\u0644\u0639\u0645\u0644\u0627\u0621 \u0628\u062C\u062F\u0648\u0644\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u062E\u0627\u0631\u062C \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0645\u0648\u0635\u0644\u064A\u0646" }
];
async function ensureDefaultSettings() {
  try {
    const existing = await dbStorage.getUiSettings();
    const existingKeys = new Set(existing.map((s) => s.key));
    let added = 0;
    for (const setting of defaultUiSettings) {
      if (!existingKeys.has(setting.key)) {
        await dbStorage.createUiSetting(setting);
        added++;
      }
    }
    if (added > 0) {
      console.log(`\u2699\uFE0F \u0623\u064F\u0636\u064A\u0641\u062A ${added} \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0648\u0627\u062C\u0647\u0629 \u062C\u062F\u064A\u062F\u0629 \u0625\u0644\u0649 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A`);
    }
  } catch (error) {
    console.error("\u062E\u0637\u0623 \u0641\u064A \u0636\u0645\u0627\u0646 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629:", error);
  }
}
async function seedDefaultData() {
  try {
    console.log("\u{1F331} Starting database seeding...");
    const existingCategories = await dbStorage.getCategories();
    if (existingCategories.length > 0) {
      console.log("\u2713 Database already seeded, skipping initial data...");
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
    const restaurants3 = [
      {
        name: "\u0645\u062A\u062C\u0631 \u0648\u0627\u0635\u0644",
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
    for (const restaurantData of restaurants3) {
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
    console.log("\u2699\uFE0F Seeding UI settings...");
    for (const settingData of defaultUiSettings) {
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
    console.log(`\u{1F4CA} Seeded: ${categories2.length} categories, ${restaurants3.length} restaurants, ${menuItems2.length} menu items, ${defaultUiSettings.length} UI settings, ${adminUsers2.length} admin users, ${defaultDrivers.length} drivers`);
  } catch (error) {
    console.error("\u274C Database seeding failed:", error);
    throw error;
  }
}

// server/index.ts
dotenv.config({ override: false });
var app = express16();
app.use(compression({
  threshold: 1024,
  // Only compress responses larger than 1KB
  level: 6
  // Balanced compression level
}));
app.use(express16.json({ limit: "50mb" }));
app.use(express16.urlencoded({ limit: "50mb", extended: false }));
app.set("etag", false);
app.use("/api", (req, res, next) => {
  if (req.method !== "GET") {
    res.set("Cache-Control", "no-cache, no-store, must-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
  } else if (req.path.includes("/special-offers") || req.path.includes("/settings")) {
    res.set("Cache-Control", "public, max-age=30");
  }
  next();
});
app.use((req, res, next) => {
  const start = Date.now();
  const path7 = req.path;
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path7.startsWith("/api")) {
      let logLine = `${req.method} ${path7} ${res.statusCode} in ${duration}ms`;
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log2(logLine);
    }
  });
  next();
});
(async () => {
  try {
    const server = await registerRoutes(app);
    const ws = setupWebSockets(server);
    app.set("ws", ws);
    global.WS_MANAGER = ws;
    registerBroadcast(ws.broadcast);
    app.use((err, _req, res, _next) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      res.status(status).json({ message });
      throw err;
    });
    if (storage.constructor.name === "DatabaseStorage") {
      log2("\u{1F331} Seeding database with default data...");
      await seedDefaultData();
      await ensureDefaultSettings();
    }
    if (app.get("env") === "development") {
      await setupVite2(app, server);
    } else {
      serveStatic2(app);
    }
    const port = parseInt(process.env.PORT || "5000", 10);
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true
    }, () => {
      log2(`serving on port ${port}`);
    });
    setInterval(async () => {
      try {
        const allOrders = await storage.getOrders();
        const scheduledOrders = allOrders.filter((o) => o.status === "scheduled");
        const db5 = storage.db;
        let scheduledWasalni = [];
        if (db5) {
          const { wasalniRequests: wasalniRequests3 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
          scheduledWasalni = await db5.select().from(wasalniRequests3).where(eq9(wasalniRequests3.status, "scheduled"));
        }
        const now = /* @__PURE__ */ new Date();
        const thirtyMinutesFromNow = new Date(now.getTime() + 30 * 60 * 1e3);
        for (const order of scheduledOrders) {
          if (!order.scheduledDate || !order.scheduledTimeSlot) continue;
          try {
            const timeStr = order.scheduledTimeSlot.replace(/[^\d:]/g, "").trim();
            const [hours, minutes] = timeStr.split(":").map(Number);
            if (isNaN(hours) || isNaN(minutes)) continue;
            const scheduledDateTime = new Date(order.scheduledDate);
            scheduledDateTime.setHours(hours, minutes, 0, 0);
            if (scheduledDateTime <= thirtyMinutesFromNow) {
              await storage.updateOrder(order.id, { status: "pending", updatedAt: /* @__PURE__ */ new Date() });
              await storage.createNotification({
                type: "scheduled_order_ready",
                title: "\u{1F4C5} \u0637\u0644\u0628 \u0645\u062C\u062F\u0648\u0644 \u062C\u0627\u0647\u0632",
                message: `\u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0645\u062C\u062F\u0648\u0644 \u0631\u0642\u0645 ${order.orderNumber} \u0645\u0646 ${order.customerName} \u0623\u0635\u0628\u062D \u062C\u0627\u0647\u0632\u0627\u064B \u0644\u0644\u062A\u0648\u0635\u064A\u0644. \u0645\u0648\u0639\u062F\u0647: ${order.scheduledDate} ${order.scheduledTimeSlot}`,
                recipientType: "admin",
                recipientId: null,
                orderId: order.id,
                isRead: false
              });
              await storage.createNotification({
                type: "order_status_update",
                title: "\u0637\u0644\u0628\u0643 \u0627\u0644\u0645\u062C\u062F\u0648\u0644 \u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
                message: `\u0628\u062F\u0623 \u062A\u062C\u0647\u064A\u0632 \u0637\u0644\u0628\u0643 \u0627\u0644\u0645\u062C\u062F\u0648\u0644 \u0631\u0642\u0645 ${order.orderNumber} - \u0633\u064A\u0635\u0644\u0643 \u0642\u0631\u064A\u0628\u0627\u064B`,
                recipientType: "customer",
                recipientId: order.customerId || order.customerPhone,
                orderId: order.id,
                isRead: false
              });
              await storage.createOrderTracking({
                orderId: order.id,
                status: "pending",
                message: `\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0645\u062C\u062F\u0648\u0644 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B - \u0645\u0648\u0639\u062F \u0627\u0644\u062A\u0648\u0635\u064A\u0644: ${order.scheduledDate} ${order.scheduledTimeSlot}`,
                createdBy: "system",
                createdByType: "system"
              });
              const wsServer = app.get("ws");
              if (wsServer) wsServer.broadcast("order_update", { orderId: order.id, status: "pending", type: "scheduled_activated" });
              log2(`\u2705 \u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0645\u062C\u062F\u0648\u0644: ${order.orderNumber}`);
            }
          } catch (e) {
            console.error(`\u062E\u0637\u0623 \u0641\u064A \u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0645\u062C\u062F\u0648\u0644 ${order.id}:`, e);
          }
        }
        for (const request of scheduledWasalni) {
          if (!request.scheduledDate || !request.scheduledTime) continue;
          try {
            const [hours, minutes] = request.scheduledTime.split(":").map(Number);
            const scheduledDateTime = new Date(request.scheduledDate);
            scheduledDateTime.setHours(hours, minutes, 0, 0);
            if (scheduledDateTime <= thirtyMinutesFromNow) {
              await db5.update(wasalniRequests).set({ status: "pending", updatedAt: /* @__PURE__ */ new Date() }).where(eq9(wasalniRequests.id, request.id));
              await storage.createNotification({
                type: "new_wasalni_request",
                title: "\u{1F4C5} \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0645\u062C\u062F\u0648\u0644 \u062C\u0627\u0647\u0632",
                message: `\u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0627\u0644\u0645\u062C\u062F\u0648\u0644 \u0631\u0642\u0645 ${request.requestNumber} \u0623\u0635\u0628\u062D \u062C\u0627\u0647\u0632\u0627\u064B. \u0645\u0648\u0639\u062F\u0647: ${request.scheduledDate} ${request.scheduledTime}`,
                recipientType: "admin",
                recipientId: null,
                orderId: null,
                isRead: false
              });
              await storage.createNotification({
                type: "wasalni_status_update",
                title: "\u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
                message: `\u0628\u062F\u0623 \u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0631\u0642\u0645 ${request.requestNumber} - \u0633\u064A\u0635\u0644\u0643 \u0642\u0631\u064A\u0628\u0627\u064B`,
                recipientType: "customer",
                recipientId: request.customerId || request.customerPhone,
                orderId: null,
                isRead: false
              });
              const wsServer = app.get("ws");
              if (wsServer) wsServer.broadcast("order_update", { type: "wasalni_activated", requestId: request.id });
              log2(`\u2705 \u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A \u0627\u0644\u0645\u062C\u062F\u0648\u0644: ${request.requestNumber}`);
            }
          } catch (e) {
            console.error(`\u062E\u0637\u0623 \u0641\u064A \u062A\u0641\u0639\u064A\u0644 \u0637\u0644\u0628 \u0648\u0635\u0644 \u0644\u064A ${request.id}:`, e);
          }
        }
      } catch (e) {
        console.error("\u062E\u0637\u0623 \u0641\u064A \u0645\u0624\u0642\u062A \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u062C\u062F\u0648\u0644\u0629:", e);
      }
    }, 60 * 1e3);
    log2("\u23F0 \u062A\u0645 \u062A\u0634\u063A\u064A\u0644 \u0645\u0624\u0642\u062A \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u062C\u062F\u0648\u0644\u0629");
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();
