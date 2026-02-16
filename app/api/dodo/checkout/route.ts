import { NextRequest, NextResponse } from "next/server";
import { createDodoCheckoutSession } from "@/lib/dodo";

export async function POST(request: NextRequest) {
  let productId: string | undefined;
  let customerEmail: string | undefined;
  let customerName: string | undefined;
  let quantity: number | undefined;
  let returnUrl: string | undefined;
  
  try {
    const body = await request.json();
    productId = body.productId;
    customerEmail = body.customerEmail;
    customerName = body.customerName;
    quantity = body.quantity;
    returnUrl = body.returnUrl;

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
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    
    // Return more detailed error for debugging
    const errorMessage = error.message || "Failed to create checkout session";
    const errorDetails = {
      error: errorMessage,
      details: process.env.NODE_ENV === "development" 
        ? {
            stack: error.stack,
            name: error.name,
            environment: process.env.DODO_PAYMENTS_ENV,
            hasApiKey: !!process.env.DODO_PAYMENTS_API_KEY,
            productId: productId,
          }
        : undefined,
    };
    
    return NextResponse.json(errorDetails, { status: 500 });
  }
}
