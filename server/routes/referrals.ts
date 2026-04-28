import { Router } from "express";
import { db } from "../db";
import { referralCodes, referralUsages, loyaltyPoints, loyaltyTransactions } from "@shared/schema";
import { eq, desc } from "drizzle-orm";
import { nanoid } from "nanoid";

const router = Router();

const REFERRER_POINTS = 100;
const REFERRED_POINTS = 50;

router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    let [referralCode] = await db
      .select()
      .from(referralCodes)
      .where(eq(referralCodes.userId, userId));

    if (!referralCode) {
      const code = nanoid(8).toUpperCase();
      [referralCode] = await db
        .insert(referralCodes)
        .values({ userId, code, totalReferrals: 0, totalEarned: "0", isActive: true })
        .returning();
    }

    const usages = await db
      .select()
      .from(referralUsages)
      .where(eq(referralUsages.referrerId, userId))
      .orderBy(desc(referralUsages.createdAt));

    res.json({
      ...referralCode,
      usages,
      referrerReward: REFERRER_POINTS,
      referredReward: REFERRED_POINTS,
    });
  } catch (error: any) {
    console.error("Error fetching referral code:", error);
    res.status(500).json({ message: "خطأ في جلب رمز الإحالة" });
  }
});

router.post("/use", async (req, res) => {
  try {
    const { code, newUserId } = req.body;
    if (!code || !newUserId) return res.status(400).json({ message: "البيانات مطلوبة" });

    const [referralCode] = await db
      .select()
      .from(referralCodes)
      .where(eq(referralCodes.code, code));

    if (!referralCode || !referralCode.isActive) {
      return res.status(404).json({ message: "رمز الإحالة غير صالح" });
    }

    if (referralCode.userId === newUserId) {
      return res.status(400).json({ message: "لا يمكنك استخدام رمز الإحالة الخاص بك" });
    }

    const existingUsage = await db
      .select()
      .from(referralUsages)
      .where(eq(referralUsages.referredUserId, newUserId));

    if (existingUsage.length > 0) {
      return res.status(400).json({ message: "تم استخدام رمز إحالة مسبقاً" });
    }

    await db.insert(referralUsages).values({
      referralCodeId: referralCode.id,
      referrerId: referralCode.userId,
      referredUserId: newUserId,
      pointsAwarded: REFERRER_POINTS,
      discountAwarded: "0",
    });

    await db
      .update(referralCodes)
      .set({
        totalReferrals: referralCode.totalReferrals + 1,
        totalEarned: String(parseFloat(referralCode.totalEarned) + REFERRER_POINTS),
      })
      .where(eq(referralCodes.id, referralCode.id));

    const [referrerPoints] = await db.select().from(loyaltyPoints).where(eq(loyaltyPoints.userId, referralCode.userId));
    if (referrerPoints) {
      await db.update(loyaltyPoints).set({
        totalPoints: referrerPoints.totalPoints + REFERRER_POINTS,
        availablePoints: referrerPoints.availablePoints + REFERRER_POINTS,
        updatedAt: new Date(),
      }).where(eq(loyaltyPoints.userId, referralCode.userId));
    } else {
      await db.insert(loyaltyPoints).values({ userId: referralCode.userId, totalPoints: REFERRER_POINTS, redeemedPoints: 0, availablePoints: REFERRER_POINTS, tier: "bronze" });
    }
    await db.insert(loyaltyTransactions).values({ userId: referralCode.userId, type: "bonus", points: REFERRER_POINTS, description: "مكافأة إحالة مستخدم جديد" });

    const [newUserPoints] = await db.select().from(loyaltyPoints).where(eq(loyaltyPoints.userId, newUserId));
    if (newUserPoints) {
      await db.update(loyaltyPoints).set({
        totalPoints: newUserPoints.totalPoints + REFERRED_POINTS,
        availablePoints: newUserPoints.availablePoints + REFERRED_POINTS,
        updatedAt: new Date(),
      }).where(eq(loyaltyPoints.userId, newUserId));
    } else {
      await db.insert(loyaltyPoints).values({ userId: newUserId, totalPoints: REFERRED_POINTS, redeemedPoints: 0, availablePoints: REFERRED_POINTS, tier: "bronze" });
    }
    await db.insert(loyaltyTransactions).values({ userId: newUserId, type: "bonus", points: REFERRED_POINTS, description: "مكافأة الانضمام برمز الإحالة" });

    res.json({ success: true, message: "تم تطبيق رمز الإحالة بنجاح", referrerPoints: REFERRER_POINTS, newUserPoints: REFERRED_POINTS });
  } catch (error: any) {
    console.error("Error using referral code:", error);
    res.status(500).json({ message: "خطأ في استخدام رمز الإحالة" });
  }
});

export default router;
