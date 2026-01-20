import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
    
    if (!razorpayKeySecret) {
      return NextResponse.json(
        { error: "Payment configuration error" },
        { status: 500 }
      );
    }

    // Verify signature
    const generatedSignature = crypto
      .createHmac("sha256", razorpayKeySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // Store payment in Supabase (if configured)
    // For now, we'll just return success
    // In production, store payment details in database

    return NextResponse.json({ 
      success: true,
      payment_id: razorpay_payment_id 
    });
  } catch (error: any) {
    console.error("Payment webhook error:", error);
    return NextResponse.json(
      { error: error.message || "Payment processing failed" },
      { status: 500 }
    );
  }
}
