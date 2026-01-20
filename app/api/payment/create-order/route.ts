import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();
    
    const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!razorpayKeyId || !razorpayKeySecret) {
      return NextResponse.json(
        { error: "Payment configuration error" },
        { status: 500 }
      );
    }

    // Create order via Razorpay API
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString("base64")}`
      },
      body: JSON.stringify({
        amount: amount * 100, // Convert to paise
        currency: "INR",
        receipt: `order_${Date.now()}`
      })
    });

    if (!response.ok) {
      throw new Error("Failed to create order");
    }

    const order = await response.json();

    return NextResponse.json({ orderId: order.id });
  } catch (error: any) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create order" },
      { status: 500 }
    );
  }
}
