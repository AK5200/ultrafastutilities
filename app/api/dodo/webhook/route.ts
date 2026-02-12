import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "standardwebhooks";

// Initialize webhook verifier (will throw error if key is missing when verifying)
const getWebhook = () => {
  const webhookKey = process.env.DODO_WEBHOOK_KEY;
  if (!webhookKey) {
    throw new Error("DODO_WEBHOOK_KEY is not configured");
  }
  return new Webhook(webhookKey);
};

export async function POST(request: NextRequest) {
  try {
    const headersList = request.headers;
    const rawBody = await request.text();

    const webhookHeaders = {
      "webhook-id": headersList.get("webhook-id") || "",
      "webhook-signature": headersList.get("webhook-signature") || "",
      "webhook-timestamp": headersList.get("webhook-timestamp") || "",
    };

    // Verify webhook signature
    const webhook = getWebhook();
    await webhook.verify(rawBody, webhookHeaders);
    
    const payload = JSON.parse(rawBody);
    
    console.log("[Dodo Webhook] Received event:", payload);

    // Handle different webhook event types
    // Reference: https://docs.dodopayments.com/developer-resources/webhooks/intents/webhook-events-guide
    if (payload.event_type) {
      switch (payload.event_type) {
        case "payment.succeeded":
        case "checkout.completed":
          // Payment was successful
          console.log("[Dodo Webhook] Payment succeeded:", payload);
          
          // TODO: Update your database, unlock premium features, send confirmation email, etc.
          // Example:
          // await updateUserPaymentStatus(payload.customer?.email, payload.payment_id);
          // await unlockPremiumFeatures(payload.customer?.email);
          
          break;
          
        case "payment.failed":
          console.log("[Dodo Webhook] Payment failed:", payload);
          break;
          
        default:
          console.log("[Dodo Webhook] Unhandled event type:", payload.event_type);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Dodo webhook verification error:", error);
    
    // Return 401 if signature verification fails
    if (error.message?.includes("signature") || error.message?.includes("verification")) {
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { error: error.message || "Webhook processing failed" },
      { status: 500 }
    );
  }
}
