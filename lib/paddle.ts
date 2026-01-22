// Paddle.js v2 integration for overlay checkout

declare global {
  interface Window {
    Paddle?: {
      // v2 API
      Initialize?: (config: { 
        token: string;
        eventCallback?: (data: any) => void;
      }) => void;
      Environment?: {
        set: (env: string) => void;
      };
      // Alternative/older API
      setup?: (config: { seller: number | string; environment?: string }) => void;
      Checkout: {
        open: (options: {
          items: Array<{ priceId: string; quantity?: number }>;
          customer?: { 
            email?: string;
            address?: {
              countryCode?: string;
              postalCode?: string;
            };
          };
          settings?: {
            successUrl?: string;
            variant?: "one-page" | "multi-page";
          };
        }) => void;
      };
    };
  }
}

// Diagnostic function to check Paddle setup
export function diagnosePaddleSetup(): void {
  console.group('[Paddle Diagnostics]');
  
  const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
  const sellerId = process.env.NEXT_PUBLIC_PADDLE_SELLER_ID;
  const environment = process.env.NEXT_PUBLIC_PADDLE_ENV || "sandbox";
  const priceId = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID;
  
  console.log('Environment Variables:');
  console.log('  NEXT_PUBLIC_PADDLE_CLIENT_TOKEN:', clientToken ? `${clientToken.substring(0, 15)}...` : '❌ MISSING');
  if (clientToken) {
    console.log('  Token length:', clientToken.length, 'characters');
    console.log('  Token starts with:', clientToken.substring(0, 10));
  }
  console.log('  NEXT_PUBLIC_PADDLE_SELLER_ID:', sellerId || 'Using default: 46202');
  console.log('  NEXT_PUBLIC_PADDLE_ENV:', environment);
  console.log('  NEXT_PUBLIC_PADDLE_PRICE_ID:', priceId || 'Using default');
  
  if (clientToken) {
    const tokenPrefix = clientToken.substring(0, 8);
    // Paddle tokens can have different prefixes:
    // - test_* (older sandbox tokens)
    // - live_* (older live tokens)
    // - pdl_sdbx_* (newer sandbox tokens)
    // - pdl_live_* (newer live tokens)
    const validSandboxPrefixes = ['test_', 'pdl_sdbx'];
    const validLivePrefixes = ['live_', 'pdl_live'];
    const validPrefixes = environment === 'sandbox' ? validSandboxPrefixes : validLivePrefixes;
    
    const isValid = validPrefixes.some(prefix => tokenPrefix.startsWith(prefix));
    if (isValid) {
      console.log('  ✓ Token prefix matches environment');
    } else {
      console.warn(`  ⚠ Token prefix '${tokenPrefix}' may not match environment '${environment}'`);
      console.warn(`  Expected prefixes: ${validPrefixes.join(' or ')}`);
    }
  } else {
    console.error('  ❌ Client-side token is required for Paddle.js v2');
  }
  
  console.log('\nPaddle Object Status:');
  if (window.Paddle) {
    console.log('  ✓ Paddle object exists');
    console.log('  Initialized:', (window.Paddle as any).Initialized ? '✓' : '✗');
    console.log('  Checkout available:', window.Paddle.Checkout ? '✓' : '✗');
    console.log('  Available methods:', Object.keys(window.Paddle).join(', '));
    
    // Check if we can access Checkout.open
    if (window.Paddle.Checkout) {
      console.log('  Checkout.open type:', typeof window.Paddle.Checkout.open);
    }
  } else {
    console.error('  ❌ Paddle object not found. Call loadPaddle() first.');
  }
  
  console.log('\nTroubleshooting Tips:');
  if (!clientToken) {
    console.error('  ❌ Missing client-side token. Get it from: Paddle Dashboard → Developer Tools → Authentication');
  } else if (clientToken.length < 20) {
    console.warn('  ⚠ Token seems too short. Valid tokens are usually 30+ characters.');
  }
  console.log('  • Ensure your domain is approved in Paddle Dashboard → Checkout → Website Approval');
  console.log('  • For sandbox, localhost should work without approval');
  console.log('  • Verify the token is active and not revoked');
  console.log('  • Check that price ID exists in your Paddle account');
  
  console.groupEnd();
}

export function loadPaddle(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if already loaded and initialized
    if (window.Paddle) {
      resolve();
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector('script[src*="paddle.com/paddle"]');
    if (existingScript) {
      // Wait for it to load
      existingScript.addEventListener('load', () => {
        setTimeout(() => {
          if (window.Paddle) {
            initializePaddle();
            resolve();
          } else {
            reject(new Error("Paddle object not available after script load"));
          }
        }, 100);
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    
    script.onload = () => {
      // Give Paddle a moment to initialize
      setTimeout(() => {
        if (window.Paddle) {
          initializePaddle();
          resolve();
        } else {
          reject(new Error("Paddle object not available after script load"));
        }
      }, 100);
    };
    
    script.onerror = () => reject(new Error("Failed to load Paddle.js"));
    document.head.appendChild(script);
  });
}

// Event callback handler for Paddle.js v2 (official method)
function createEventCallback() {
  return function(data: any) {
    console.log('[Paddle Event]', data);
    
    // Handle different event types
    if (data?.event_name) {
      const eventName = data.event_name;
      
      switch (eventName) {
        case 'checkout.error':
        case 'checkout.payment.error':
          console.error('[Paddle Checkout Error]', data);
          // Extract detailed error information
          const errorDetail = data?.detail || data?.error?.message || data?.error || data?.message || 'Unknown error';
          const errorCode = data?.code || data?.error?.code || '';
          const errorType = data?.type || '';
          
          let errorMsg = errorDetail;
          if (errorCode) errorMsg += ` (Code: ${errorCode})`;
          if (errorType) errorMsg += ` (Type: ${errorType})`;
          
          // Show helpful message for JWT errors
          if (errorDetail.includes('JWT') || errorDetail.includes('Failed to retrieve')) {
            errorMsg += '\n\nThis usually means:\n- Your client-side token is invalid or expired\n- The token doesn\'t match your environment (sandbox vs live)\n- Domain approval is required in Paddle dashboard';
          }
          
          alert(`Paddle Checkout Error: ${errorMsg}`);
          break;
          
        case 'checkout.warning':
          console.warn('[Paddle Checkout Warning]', data);
          if (data?.warning) {
            console.warn('[Paddle] Warning details:', data.warning);
          }
          break;
          
        case 'checkout.completed':
          console.log('[Paddle Checkout Completed]', data);
          break;
          
        case 'checkout.closed':
          console.log('[Paddle Checkout Closed]');
          break;
          
        default:
          console.log(`[Paddle] Event: ${eventName}`, data);
      }
    } else {
      // Fallback for events without event_name
      console.log('[Paddle] Event data:', data);
    }
  };
}

// Global flag to prevent multiple initializations
let paddleInitialized = false;

function initializePaddle() {
  const sellerIdStr = process.env.NEXT_PUBLIC_PADDLE_SELLER_ID || "46202";
  const sellerId = parseInt(sellerIdStr, 10);
  const environment = process.env.NEXT_PUBLIC_PADDLE_ENV || "sandbox";
  const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
  
  try {
    if (!window.Paddle) {
      throw new Error("Paddle object is not available");
    }

    // Prevent multiple initializations
    if (paddleInitialized) {
      console.log("[Paddle] Already initialized (flag), skipping...");
      return;
    }

    // Log full Paddle object structure for debugging
    console.log("[Paddle] Full Paddle object:", window.Paddle);
    console.log("[Paddle] Paddle.Initialized:", (window.Paddle as any).Initialized);
    
    // Log available methods for debugging
    const availableMethods = Object.keys(window.Paddle);
    console.log("[Paddle] Available methods:", availableMethods);

    // Check if already initialized by Paddle itself
    if ((window.Paddle as any).Initialized) {
      console.log("[Paddle] Already initialized (Paddle flag), skipping...");
      paddleInitialized = true;
      return;
    }

    // Validate seller ID is a valid integer (for fallback)
    if (isNaN(sellerId)) {
      throw new Error(`Invalid seller ID: ${sellerIdStr}. Must be a valid integer.`);
    }

    // Paddle.js v2 API: Initialize with client-side token (preferred)
    if (clientToken) {
      console.log("[Paddle] Attempting to initialize with client-side token...");
      console.log("[Paddle] Token prefix:", clientToken.substring(0, 5));
      console.log("[Paddle] Environment setting:", environment);
      
      // Set environment first if available (must match token type)
      if (window.Paddle.Environment && typeof window.Paddle.Environment.set === 'function') {
        console.log(`[Paddle] Setting environment to: ${environment}`);
        try {
          window.Paddle.Environment.set(environment);
        } catch (envError) {
          console.warn("[Paddle] Failed to set environment:", envError);
        }
      }
      
      if (typeof window.Paddle.Initialize === 'function') {
        console.log("[Paddle] Calling Paddle.Initialize()...");
        try {
          // Use eventCallback for events (official Paddle.js v2 method)
          // Reference: https://developer.paddle.com/build/checkout/build-overlay-checkout
          window.Paddle.Initialize({ 
            token: clientToken,
            eventCallback: createEventCallback()
          });
          console.log("[Paddle] Initialize() called successfully with eventCallback");
          paddleInitialized = true;
          
          // Check if initialization was successful
          setTimeout(() => {
            if ((window.Paddle as any).Initialized) {
              console.log("[Paddle] ✓ Initialization confirmed");
            } else {
              console.warn("[Paddle] ⚠ Initialization status unclear - but continuing anyway");
            }
          }, 500);
          return;
        } catch (initError: any) {
          console.error("[Paddle] Initialize() threw an error:", initError);
          throw new Error(`Paddle initialization failed: ${initError.message || initError}`);
        }
      } else {
        console.warn("[Paddle] Paddle.Initialize is not a function. Available:", Object.keys(window.Paddle));
      }
    } else {
      console.warn("[Paddle] No client-side token found. Using fallback Setup method.");
      console.warn("[Paddle] For Paddle.js v2, NEXT_PUBLIC_PADDLE_CLIENT_TOKEN is required.");
    }

    // Try alternative API patterns (fallback for older versions)
    // Some versions might use Paddle.Setup (capital S)
    // Note: Setup doesn't accept 'environment' parameter - set it separately if needed
    if (typeof (window.Paddle as any).Setup === 'function') {
      console.log("[Paddle] Using fallback Setup() method...");
      // Set environment first if available
      if (window.Paddle.Environment && typeof window.Paddle.Environment.set === 'function') {
        try {
          window.Paddle.Environment.set(environment);
        } catch (envError) {
          console.warn("[Paddle] Failed to set environment:", envError);
        }
      }
      (window.Paddle as any).Setup({
        seller: sellerId, // Now an integer
      });
      console.log("[Paddle] Initialized with Setup (capital S)");
      paddleInitialized = true;
      return;
    }

    // Try lowercase setup
    if (typeof (window.Paddle as any).setup === 'function') {
      console.log("[Paddle] Using fallback setup() method...");
      // Set environment first if available
      if (window.Paddle.Environment && typeof window.Paddle.Environment.set === 'function') {
        try {
          window.Paddle.Environment.set(environment);
        } catch (envError) {
          console.warn("[Paddle] Failed to set environment:", envError);
        }
      }
      (window.Paddle as any).setup({
        seller: sellerId, // Now an integer
      });
      console.log("[Paddle] Initialized with setup (lowercase)");
      paddleInitialized = true;
      return;
    }

    // If nothing works, provide helpful error
    console.error("Paddle initialization methods not found. Available methods:", availableMethods);
    console.error("Note: Paddle.js v2 requires a client-side token (starts with 'test_' or 'live_')");
    console.error("Get it from: Paddle Dashboard → Developer Tools → Authentication");
    console.error("Token must match environment: 'test_' for sandbox, 'live_' for production");
    throw new Error(
      `Paddle initialization failed. Available methods: ${availableMethods.join(", ")}. ` +
      `For Paddle.js v2, you need NEXT_PUBLIC_PADDLE_CLIENT_TOKEN (not seller ID). ` +
      `Get it from Paddle Dashboard → Developer Tools → Authentication. ` +
      `Token must start with 'test_' for sandbox or 'live_' for production.`
    );
  } catch (error) {
    console.error("Error initializing Paddle:", error);
    paddleInitialized = false; // Reset flag on error
    throw error;
  }
}

export function openPaddleCheckout(options: {
  priceId: string;
  customerEmail?: string;
  successUrl?: string;
  variant?: "one-page" | "multi-page";
}) {
  if (!window.Paddle) {
    throw new Error("Paddle not loaded. Call loadPaddle() first.");
  }

  if (!window.Paddle.Checkout || typeof window.Paddle.Checkout.open !== 'function') {
    throw new Error("Paddle.Checkout.open is not available. Paddle may not be initialized correctly.");
  }

  const origin = (process.env.NEXT_PUBLIC_SITE_URL || window.location.origin).replace(/\/$/, "");
  const successUrl = options.successUrl || `${origin}/success`;
  const variant = options.variant || process.env.NEXT_PUBLIC_PADDLE_CHECKOUT_VARIANT || "multi-page";

  console.log('[Paddle] Opening checkout with:', {
    priceId: options.priceId,
    customerEmail: options.customerEmail,
    successUrl: successUrl,
    variant: variant,
  });

  try {
    // Verify Paddle is initialized
    if (!(window.Paddle as any).Initialized) {
      console.warn('[Paddle] Warning: Paddle may not be fully initialized');
    }

    // Paddle.js v2 checkout structure (official API)
    // Reference: https://developer.paddle.com/build/checkout/build-overlay-checkout
    const checkoutOptions: any = {
      items: [
        {
          priceId: options.priceId,
          quantity: 1,
        },
      ],
    };

    // Add customer information if provided
    if (options.customerEmail) {
      checkoutOptions.customer = {
        email: options.customerEmail,
      };
    }

    // Add settings if successUrl or variant is specified
    if (successUrl || variant) {
      checkoutOptions.settings = {};
      if (successUrl) {
        checkoutOptions.settings.successUrl = successUrl;
      }
      if (variant) {
        checkoutOptions.settings.variant = variant;
      }
    }

    console.log('[Paddle] Checkout options:', JSON.stringify(checkoutOptions, null, 2));

    // Wrap in try-catch to catch any synchronous errors
    try {
      window.Paddle.Checkout.open(checkoutOptions);
      console.log('[Paddle] Checkout.open() called successfully');
    } catch (syncError: any) {
      console.error('[Paddle] Synchronous error opening checkout:', syncError);
      // Extract more details from error if available
      const errorMessage = syncError?.message || syncError?.toString() || 'Unknown error';
      const errorDetails = syncError?.error || syncError?.data || {};
      console.error('[Paddle] Error details:', errorDetails);
      throw new Error(`Paddle checkout error: ${errorMessage}. Details: ${JSON.stringify(errorDetails)}`);
    }

    // Set up a timeout to check if checkout actually opened
    setTimeout(() => {
      // Check if checkout overlay is visible
      const paddleOverlay = document.querySelector('[data-paddle-checkout]') || 
                           document.querySelector('.paddle-checkout') ||
                           document.querySelector('iframe[src*="paddle.com"]');
      if (!paddleOverlay) {
        console.warn('[Paddle] Checkout overlay not detected after 1 second');
        console.warn('[Paddle] This might indicate an error. Check browser console and network tab.');
      } else {
        console.log('[Paddle] Checkout overlay detected');
      }
    }, 1000);

  } catch (error) {
    console.error("[Paddle] Error opening checkout:", error);
    throw error;
  }
}
