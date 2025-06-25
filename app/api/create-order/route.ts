import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!, // ✅ Must be defined
  key_secret: process.env.RAZORPAY_KEY_SECRET!, // ✅ Must be defined
});

export async function POST(req: NextRequest) {
  try {
    const order = await razorpay.orders.create({
      amount: 100 * 100,
      currency: "INR",
      receipt: `receipt_${Math.random().toString(36).substring(2)}`,
    });

    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}
