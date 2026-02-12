import { NextRequest, NextResponse } from "next/server";
import { createDodoCheckoutSession } from "@/lib/dodo";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, customerEmail, customerName, quantity, returnUrl } = body;

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Create checkout session using Dodo Payments API
    const session = await createDodoCheckoutSession({
      productId,
      customerEmail,
      customerName,
      quantity: quantity || 1,
      returnUrl: returnUrl || `${process.env.NEXT_PUBLIC_SITE_URL || request.headers.get("origin") || "http://localhost:3000"}/success`,
    });

    return NextResponse.json({
      checkout_url: session.checkout_url,
      session_id: session.session_id,
    });
  } catch (error: any) {
    console.error("Dodo checkout session creation error:", error);
    return NextResponse.json(
      {
        error: error.message || "Failed to create checkout session",
      },
      { status: 500 }
    );
  }
}
