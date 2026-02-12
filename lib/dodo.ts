// Dodo payment integration for overlay checkout

declare global {
  interface Window {
    Dodo?: {
      // Dodo API structure (adjust based on actual Dodo API)
      Initialize?: (config: { 
        token: string;
        eventCallback?: (data: any) => void;
      }) => void;
      Environment?: {
        set: (env: string) => void;
      };
      // Alternative/older API
      setup?: (config: { merchant: number | string; environment?: string }) => void;
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

// Diagnostic function to check Dodo setup
export function diagnoseDodoSetup(): void {
  console.group('[Dodo Diagnostics]');
  
  const clientToken = process.env.NEXT_PUBLIC_DODO_CLIENT_TOKEN;
  const merchantId = process.env.NEXT_PUBLIC_DODO_MERCHANT_ID;
  const environment = process.env.NEXT_PUBLIC_DODO_ENV || "sandbox";
  const priceId = process.env.NEXT_PUBLIC_DODO_PRICE_ID;
  
  console.log('Environment Variables:');
  console.log('  NEXT_PUBLIC_DODO_CLIENT_TOKEN:', clientToken ? `${clientToken.substring(0, 15)}...` : '❌ MISSING');
  if (clientToken) {
    console.log('  Token length:', clientToken.length, 'characters');
    console.log('  Token starts with:', clientToken.substring(0, 10));
  }
  console.log('  NEXT_PUBLIC_DODO_MERCHANT_ID:', merchantId || 'Using default');
  console.log('  NEXT_PUBLIC_DODO_ENV:', environment);
  console.log('  NEXT_PUBLIC_DODO_PRICE_ID:', priceId || 'Using default');
  
  if (clientToken) {
    const tokenPrefix = clientToken.substring(0, 8);
    // Dodo tokens can have different prefixes (adjust based on actual Dodo API)
    const validSandboxPrefixes = ['test_', 'sandbox_'];
    const validLivePrefixes = ['live_', 'prod_'];
    const validPrefixes = environment === 'sandbox' ? validSandboxPrefixes : validLivePrefixes;
    
    const isValid = validPrefixes.some(prefix => tokenPrefix.startsWith(prefix));
    if (isValid) {
      console.log('  ✓ Token prefix matches environment');
    } else {
      console.warn(`  ⚠ Token prefix '${tokenPrefix}' may not match environment '${environment}'`);
      console.warn(`  Expected prefixes: ${validPrefixes.join(' or ')}`);
    }
  } else {
    console.error('  ❌ Client-side token is required for Dodo integration');
  }
  
  console.log('\nDodo Object Status:');
  if (window.Dodo) {
    console.log('  ✓ Dodo object exists');
    console.log('  Initialized:', (window.Dodo as any).Initialized ? '✓' : '✗');
    console.log('  Checkout available:', window.Dodo.Checkout ? '✓' : '✗');
    console.log('  Available methods:', Object.keys(window.Dodo).join(', '));
    
    // Check if we can access Checkout.open
    if (window.Dodo.Checkout) {
      console.log('  Checkout.open type:', typeof window.Dodo.Checkout.open);
    }
  } else {
    console.error('  ❌ Dodo object not found. Call loadDodo() first.');
  }
  
  console.log('\nTroubleshooting Tips:');
  if (!clientToken) {
    console.error('  ❌ Missing client-side token. Get it from: Dodo Dashboard → Developer Tools → Authentication');
  } else if (clientToken.length < 20) {
    console.warn('  ⚠ Token seems too short. Valid tokens are usually 30+ characters.');
  }
  console.log('  • Ensure your domain is approved in Dodo Dashboard → Checkout → Website Approval');
  console.log('  • For sandbox, localhost should work without approval');
  console.log('  • Verify the token is active and not revoked');
  console.log('  • Check that price ID exists in your Dodo account');
  
  console.groupEnd();
}

export function loadDodo(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if already loaded and initialized
    if (window.Dodo) {
      resolve();
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector('script[src*="dodo"]');
    if (existingScript) {
      // Wait for it to load
      existingScript.addEventListener('load', () => {
        setTimeout(() => {
          if (window.Dodo) {
            initializeDodo();
            resolve();
          } else {
            reject(new Error("Dodo object not available after script load"));
          }
        }, 100);
      });
      return;
    }

    // TODO: Replace with actual Dodo SDK URL
    const script = document.createElement("script");
    script.src = "https://cdn.dodo.com/dodo/v2/dodo.js"; // Update with actual Dodo SDK URL
    script.async = true;
    
    script.onload = () => {
      // Give Dodo a moment to initialize
      setTimeout(() => {
        if (window.Dodo) {
          initializeDodo();
          resolve();
        } else {
          reject(new Error("Dodo object not available after script load"));
        }
      }, 100);
    };
    
    script.onerror = () => reject(new Error("Failed to load Dodo.js"));
    document.head.appendChild(script);
  });
}

// Event callback handler for Dodo (adjust based on actual Dodo API)
function createEventCallback() {
  return function(data: any) {
    console.log('[Dodo Event]', data);
    
    // Handle different event types (adjust based on actual Dodo API)
    if (data?.event_name) {
      const eventName = data.event_name;
      
      switch (eventName) {
        case 'checkout.error':
        case 'checkout.payment.error':
          console.error('[Dodo Checkout Error]', data);
          // Extract detailed error information
          const errorDetail = data?.detail || data?.error?.message || data?.error || data?.message || 'Unknown error';
          const errorCode = data?.code || data?.error?.code || '';
          const errorType = data?.type || '';
          
          let errorMsg = errorDetail;
          if (errorCode) errorMsg += ` (Code: ${errorCode})`;
          if (errorType) errorMsg += ` (Type: ${errorType})`;
          
          // Show helpful message for token errors
          if (errorDetail.includes('token') || errorDetail.includes('Failed to retrieve')) {
            errorMsg += '\n\nThis usually means:\n- Your client-side token is invalid or expired\n- The token doesn\'t match your environment (sandbox vs live)\n- Domain approval is required in Dodo dashboard';
          }
          
          alert(`Dodo Checkout Error: ${errorMsg}`);
          break;
          
        case 'checkout.warning':
          console.warn('[Dodo Checkout Warning]', data);
          if (data?.warning) {
            console.warn('[Dodo] Warning details:', data.warning);
          }
          break;
          
        case 'checkout.completed':
          console.log('[Dodo Checkout Completed]', data);
          break;
          
        case 'checkout.closed':
          console.log('[Dodo Checkout Closed]');
          break;
          
        default:
          console.log(`[Dodo] Event: ${eventName}`, data);
      }
    } else {
      // Fallback for events without event_name
      console.log('[Dodo] Event data:', data);
    }
  };
}

// Global flag to prevent multiple initializations
let dodoInitialized = false;

function initializeDodo() {
  const merchantIdStr = process.env.NEXT_PUBLIC_DODO_MERCHANT_ID || "";
  const merchantId = merchantIdStr ? parseInt(merchantIdStr, 10) : null;
  const environment = process.env.NEXT_PUBLIC_DODO_ENV || "sandbox";
  const clientToken = process.env.NEXT_PUBLIC_DODO_CLIENT_TOKEN;
  
  try {
    if (!window.Dodo) {
      throw new Error("Dodo object is not available");
    }

    // Prevent multiple initializations
    if (dodoInitialized) {
      console.log("[Dodo] Already initialized (flag), skipping...");
      return;
    }

    // Log full Dodo object structure for debugging
    console.log("[Dodo] Full Dodo object:", window.Dodo);
    console.log("[Dodo] Dodo.Initialized:", (window.Dodo as any).Initialized);
    
    // Log available methods for debugging
    const availableMethods = Object.keys(window.Dodo);
    console.log("[Dodo] Available methods:", availableMethods);

    // Check if already initialized by Dodo itself
    if ((window.Dodo as any).Initialized) {
      console.log("[Dodo] Already initialized (Dodo flag), skipping...");
      dodoInitialized = true;
      return;
    }

    // Validate merchant ID is a valid integer (for fallback)
    if (merchantId && isNaN(merchantId)) {
      throw new Error(`Invalid merchant ID: ${merchantIdStr}. Must be a valid integer.`);
    }

    // Dodo API: Initialize with client-side token (preferred)
    if (clientToken) {
      console.log("[Dodo] Attempting to initialize with client-side token...");
      console.log("[Dodo] Token prefix:", clientToken.substring(0, 5));
      console.log("[Dodo] Environment setting:", environment);
      
      // Set environment first if available (must match token type)
      if (window.Dodo.Environment && typeof window.Dodo.Environment.set === 'function') {
        console.log(`[Dodo] Setting environment to: ${environment}`);
        try {
          window.Dodo.Environment.set(environment);
        } catch (envError) {
          console.warn("[Dodo] Failed to set environment:", envError);
        }
      }
      
      if (typeof window.Dodo.Initialize === 'function') {
        console.log("[Dodo] Calling Dodo.Initialize()...");
        try {
          window.Dodo.Initialize({ 
            token: clientToken,
            eventCallback: createEventCallback()
          });
          console.log("[Dodo] Initialize() called successfully with eventCallback");
          dodoInitialized = true;
          
          // Check if initialization was successful
          setTimeout(() => {
            if ((window.Dodo as any).Initialized) {
              console.log("[Dodo] ✓ Initialization confirmed");
            } else {
              console.warn("[Dodo] ⚠ Initialization status unclear - but continuing anyway");
            }
          }, 500);
          return;
        } catch (initError: any) {
          console.error("[Dodo] Initialize() threw an error:", initError);
          throw new Error(`Dodo initialization failed: ${initError.message || initError}`);
        }
      } else {
        console.warn("[Dodo] Dodo.Initialize is not a function. Available:", Object.keys(window.Dodo));
      }
    } else {
      console.warn("[Dodo] No client-side token found. Using fallback Setup method.");
      console.warn("[Dodo] For Dodo integration, NEXT_PUBLIC_DODO_CLIENT_TOKEN is required.");
    }

    // Try alternative API patterns (fallback for older versions)
    if (typeof (window.Dodo as any).Setup === 'function') {
      console.log("[Dodo] Using fallback Setup() method...");
      // Set environment first if available
      if (window.Dodo.Environment && typeof window.Dodo.Environment.set === 'function') {
        try {
          window.Dodo.Environment.set(environment);
        } catch (envError) {
          console.warn("[Dodo] Failed to set environment:", envError);
        }
      }
      (window.Dodo as any).Setup({
        merchant: merchantId,
      });
      console.log("[Dodo] Initialized with Setup (capital S)");
      dodoInitialized = true;
      return;
    }

    // Try lowercase setup
    if (typeof (window.Dodo as any).setup === 'function') {
      console.log("[Dodo] Using fallback setup() method...");
      // Set environment first if available
      if (window.Dodo.Environment && typeof window.Dodo.Environment.set === 'function') {
        try {
          window.Dodo.Environment.set(environment);
        } catch (envError) {
          console.warn("[Dodo] Failed to set environment:", envError);
        }
      }
      (window.Dodo as any).setup({
        merchant: merchantId,
      });
      console.log("[Dodo] Initialized with setup (lowercase)");
      dodoInitialized = true;
      return;
    }

    // If nothing works, provide helpful error
    console.error("Dodo initialization methods not found. Available methods:", availableMethods);
    console.error("Note: Dodo integration requires a client-side token");
    console.error("Get it from: Dodo Dashboard → Developer Tools → Authentication");
    console.error("Token must match environment: 'test_' for sandbox, 'live_' for production");
    throw new Error(
      `Dodo initialization failed. Available methods: ${availableMethods.join(", ")}. ` +
      `For Dodo integration, you need NEXT_PUBLIC_DODO_CLIENT_TOKEN. ` +
      `Get it from Dodo Dashboard → Developer Tools → Authentication. ` +
      `Token must start with 'test_' for sandbox or 'live_' for production.`
    );
  } catch (error) {
    console.error("Error initializing Dodo:", error);
    dodoInitialized = false; // Reset flag on error
    throw error;
  }
}

export function openDodoCheckout(options: {
  priceId: string;
  customerEmail?: string;
  successUrl?: string;
  variant?: "one-page" | "multi-page";
}) {
  if (!window.Dodo) {
    throw new Error("Dodo not loaded. Call loadDodo() first.");
  }

  if (!window.Dodo.Checkout || typeof window.Dodo.Checkout.open !== 'function') {
    throw new Error("Dodo.Checkout.open is not available. Dodo may not be initialized correctly.");
  }

  const origin = (process.env.NEXT_PUBLIC_SITE_URL || window.location.origin).replace(/\/$/, "");
  const successUrl = options.successUrl || `${origin}/success`;
  const variant = options.variant || process.env.NEXT_PUBLIC_DODO_CHECKOUT_VARIANT || "multi-page";

  console.log('[Dodo] Opening checkout with:', {
    priceId: options.priceId,
    customerEmail: options.customerEmail,
    successUrl: successUrl,
    variant: variant,
  });

  try {
    // Verify Dodo is initialized
    if (!(window.Dodo as any).Initialized) {
      console.warn('[Dodo] Warning: Dodo may not be fully initialized');
    }

    // Dodo checkout structure (adjust based on actual Dodo API)
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

    console.log('[Dodo] Checkout options:', JSON.stringify(checkoutOptions, null, 2));

    // Wrap in try-catch to catch any synchronous errors
    try {
      window.Dodo.Checkout.open(checkoutOptions);
      console.log('[Dodo] Checkout.open() called successfully');
    } catch (syncError: any) {
      console.error('[Dodo] Synchronous error opening checkout:', syncError);
      // Extract more details from error if available
      const errorMessage = syncError?.message || syncError?.toString() || 'Unknown error';
      const errorDetails = syncError?.error || syncError?.data || {};
      console.error('[Dodo] Error details:', errorDetails);
      throw new Error(`Dodo checkout error: ${errorMessage}. Details: ${JSON.stringify(errorDetails)}`);
    }

    // Set up a timeout to check if checkout actually opened
    setTimeout(() => {
      // Check if checkout overlay is visible
      const dodoOverlay = document.querySelector('[data-dodo-checkout]') || 
                           document.querySelector('.dodo-checkout') ||
                           document.querySelector('iframe[src*="dodo"]');
      if (!dodoOverlay) {
        console.warn('[Dodo] Checkout overlay not detected after 1 second');
        console.warn('[Dodo] This might indicate an error. Check browser console and network tab.');
      } else {
        console.log('[Dodo] Checkout overlay detected');
      }
    }, 1000);

  } catch (error) {
    console.error("[Dodo] Error opening checkout:", error);
    throw error;
  }
}
