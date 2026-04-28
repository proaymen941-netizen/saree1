import { Router } from "express";
import { db } from "../db";
import { loyaltyPoints, loyaltyTransactions } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

const router = Router();

const POINTS_PER_ORDER_SAR = 10;
const POINTS_REDEMPTION_VALUE = 0.05;

function calculateTier(totalPoints: number): string {
  if (totalPoints >= 5000) return "platinum";
  if (totalPoints >= 2000) return "gold";
  if (totalPoints >= 500) return "silver";
  return "bronze";
}

router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    let [pointsRecord] = await db
      .select()
      .from(loyaltyPoints)
      .where(eq(loyaltyPoints.userId, userId));

    if (!pointsRecord) {
      [pointsRecord] = await db
        .insert(loyaltyPoints)
        .values({
          userId,
          totalPoints: 0,
          redeemedPoints: 0,
          availablePoints: 0,
          tier: "bronze",
        })
        .returning();
    }

    const transactions = await db
      .select()
      .from(loyaltyTransactions)
      .where(eq(loyaltyTransactions.userId, userId))
      .orderBy(desc(loyaltyTransactions.createdAt))
      .limit(20);

    res.json({
      ...pointsRecord,
      transactions,
      redemptionValue: (pointsRecord.availablePoints * POINTS_REDEMPTION_VALUE).toFixed(2),
      pointsPerSar: POINTS_PER_ORDER_SAR,
    });
  } catch (error: any) {
    console.error("Error fetching loyalty points:", error);
    res.status(500).json({ message: "خطأ في جلب نقاط الولاء" });
  }
});

router.post("/earn", async (req, res) => {
  try {
    const { userId, orderId, orderTotal } = req.body;

    const pointsEarned = Math.floor(parseFloat(orderTotal) * POINTS_PER_ORDER_SAR);

    let [pointsRecord] = await db
      .select()
      .from(loyaltyPoints)
      .where(eq(loyaltyPoints.userId, userId));

    const newTotal = (pointsRecord?.totalPoints || 0) + pointsEarned;
    const newAvailable = (pointsRecord?.availablePoints || 0) + pointsEarned;
    const newTier = calculateTier(newTotal);

    if (!pointsRecord) {
      [pointsRecord] = await db
        .insert(loyaltyPoints)
        .values({
          userId,
          totalPoints: pointsEarned,
          redeemedPoints: 0,
          availablePoints: pointsEarned,
          tier: newTier,
        })
        .returning();
    } else {
      [pointsRecord] = await db
        .update(loyaltyPoints)
        .set({
          totalPoints: newTotal,
          availablePoints: newAvailable,
          tier: newTier,
          updatedAt: new Date(),
        })
        .where(eq(loyaltyPoints.userId, userId))
        .returning();
    }

    await db.insert(loyaltyTransactions).values({
      userId,
      orderId,
      type: "earned",
      points: pointsEarned,
      description: `مكافأة طلب بقيمة ${orderTotal} ريال`,
    });

    res.json({ success: true, pointsEarned, newTotal, newTier: pointsRecord.tier });
  } catch (error: any) {
    console.error("Error earning loyalty points:", error);
    res.status(500).json({ message: "خطأ في إضافة النقاط" });
  }
});

router.post("/redeem", async (req, res) => {
  try {
    const { userId, pointsToRedeem } = req.body;

    const [pointsRecord] = await db
      .select()
      .from(loyaltyPoints)
      .where(eq(loyaltyPoints.userId, userId));

    if (!pointsRecord || pointsRecord.availablePoints < pointsToRedeem) {
      return res.status(400).json({ message: "نقاط غير كافية" });
    }

    const discountValue = (pointsToRedeem * POINTS_REDEMPTION_VALUE).toFixed(2);

    await db
      .update(loyaltyPoints)
      .set({
        redeemedPoints: pointsRecord.redeemedPoints + pointsToRedeem,
        availablePoints: pointsRecord.availablePoints - pointsToRedeem,
        updatedAt: new Date(),
      })
      .where(eq(loyaltyPoints.userId, userId));

    await db.insert(loyaltyTransactions).values({
      userId,
      type: "redeemed",
      points: -pointsToRedeem,
      description: `استبدال ${pointsToRedeem} نقطة بخصم ${discountValue} ريال`,
    });

    res.json({ success: true, discountValue, pointsRedeemed: pointsToRedeem });
  } catch (error: any) {
    console.error("Error redeeming loyalty points:", error);
    res.status(500).json({ message: "خطأ في استبدال النقاط" });
  }
});

router.post("/admin/bonus", async (req, res) => {
  try {
    const { userId, points, reason } = req.body;
    const adminToken = req.headers.authorization?.split(' ')[1];
    if (!adminToken) return res.status(401).json({ message: "غير مصرح" });

    let [pointsRecord] = await db
      .select()
      .from(loyaltyPoints)
      .where(eq(loyaltyPoints.userId, userId));

    if (!pointsRecord) {
      [pointsRecord] = await db
        .insert(loyaltyPoints)
        .values({ userId, totalPoints: points, redeemedPoints: 0, availablePoints: points, tier: calculateTier(points) })
        .returning();
    } else {
      const newTotal = pointsRecord.totalPoints + points;
      await db
        .update(loyaltyPoints)
        .set({ totalPoints: newTotal, availablePoints: pointsRecord.availablePoints + points, tier: calculateTier(newTotal), updatedAt: new Date() })
        .where(eq(loyaltyPoints.userId, userId));
    }

    await db.insert(loyaltyTransactions).values({
      userId,
      type: "bonus",
      points,
      description: reason || "مكافأة من الإدارة",
    });

    res.json({ success: true, message: "تم إضافة النقاط بنجاح" });
  } catch (error: any) {
    console.error("Error adding bonus points:", error);
    res.status(500).json({ message: "خطأ في إضافة النقاط" });
  }
});

router.get("/admin/stats", async (req, res) => {
  try {
    const allPoints = await db.select().from(loyaltyPoints);

    const stats = {
      totalUsers: allPoints.length,
      totalPointsIssued: allPoints.reduce((s, p) => s + p.totalPoints, 0),
      totalPointsRedeemed: allPoints.reduce((s, p) => s + p.redeemedPoints, 0),
      tierBreakdown: {
        bronze: allPoints.filter(p => p.tier === "bronze").length,
        silver: allPoints.filter(p => p.tier === "silver").length,
        gold: allPoints.filter(p => p.tier === "gold").length,
        platinum: allPoints.filter(p => p.tier === "platinum").length,
      },
    };

    res.json(stats);
  } catch (error: any) {
    res.status(500).json({ message: "خطأ في جلب إحصائيات الولاء" });
  }
});

export default router;
