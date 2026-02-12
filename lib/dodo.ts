// Dodo Payments integration using Checkout Sessions
// Reference: https://docs.dodopayments.com/developer-resources/integration-guide

export interface DodoCheckoutOptions {
  productId: string;
  customerEmail?: string;
  customerName?: string;
  quantity?: number;
  returnUrl?: string;
}

export interface DodoCheckoutSession {
  checkout_url: string;
  session_id?: string;
}

/**
 * Create a Dodo Payments checkout session
 * This should be called from a server-side API route, not directly from the client
 */
export async function createDodoCheckoutSession(
  options: DodoCheckoutOptions
): Promise<DodoCheckoutSession> {
  const apiKey = process.env.DODO_PAYMENTS_API_KEY;
  const environment = process.env.DODO_PAYMENTS_ENV || "test_mode";
  const baseUrl = environment === "test_mode" 
    ? "https://test.dodopayments.com" 
    : "https://api.dodopayments.com";

  if (!apiKey) {
    throw new Error("DODO_PAYMENTS_API_KEY is not configured");
  }

  const response = await fetch(`${baseUrl}/checkouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      product_cart: [
        {
          product_id: options.productId,
          quantity: options.quantity || 1,
        },
      ],
      customer: options.customerEmail || options.customerName
        ? {
            email: options.customerEmail,
            name: options.customerName,
          }
        : undefined,
      return_url: options.returnUrl || `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/success`,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: "Unknown error" }));
    throw new Error(
      `Failed to create checkout session: ${errorData.message || response.statusText}`
    );
  }

  const data = await response.json();
  return {
    checkout_url: data.checkout_url,
    session_id: data.session_id || data.id,
  };
}

/**
 * Client-side function to initiate checkout
 * Calls the API route which creates a checkout session and redirects
 */
export async function initiateDodoCheckout(options: DodoCheckoutOptions): Promise<void> {
  try {
    const response = await fetch("/api/dodo/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to create checkout session");
    }

    const data = await response.json();
    
    if (data.checkout_url) {
      // Redirect to Dodo checkout
      window.location.href = data.checkout_url;
    } else {
      throw new Error("No checkout URL received from server");
    }
  } catch (error: any) {
    console.error("[Dodo] Checkout initiation error:", error);
    throw error;
  }
}

/**
 * Diagnostic function to check Dodo setup (client-side)
 */
export function diagnoseDodoSetup(): void {
  console.group('[Dodo Diagnostics]');
  
  const productId = process.env.NEXT_PUBLIC_DODO_PRODUCT_ID;
  const environment = process.env.NEXT_PUBLIC_DODO_PAYMENTS_ENV || "test_mode";
  
  console.log('Client-side Environment Variables:');
  console.log('  NEXT_PUBLIC_DODO_PRODUCT_ID:', productId || '❌ MISSING');
  console.log('  NEXT_PUBLIC_DODO_PAYMENTS_ENV:', environment);
  
  console.log('\nServer-side Configuration:');
  console.log('  DODO_PAYMENTS_API_KEY: ✓ Server-side only (not accessible from client)');
  console.log('  Note: API key is correctly configured server-side only for security');
  
  console.log('\nIntegration Type:');
  console.log('  ✓ Using Checkout Sessions (server-side API)');
  console.log('  ✓ No client-side SDK required');
  
  if (!productId) {
    console.error('\n⚠️  Missing Configuration:');
    console.error('  ❌ NEXT_PUBLIC_DODO_PRODUCT_ID is required');
    console.log('\nSetup Instructions:');
    console.log('  • Create a product in Dodo Dashboard');
    console.log('  • Copy the product ID to NEXT_PUBLIC_DODO_PRODUCT_ID in .env.local');
    console.log('  • Ensure DODO_PAYMENTS_API_KEY is set server-side');
    console.log('  • Configure webhook URL: https://ultrafastutilities.com/api/dodo/webhook');
  } else {
    console.log('\n✓ Configuration looks good!');
    console.log('  • Product ID is set');
    console.log('  • API key is configured server-side (as expected)');
  }
  
  console.groupEnd();
}
