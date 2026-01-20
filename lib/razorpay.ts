export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id?: string;
  handler: (response: any) => void;
  prefill?: {
    email?: string;
    contact?: string;
    name?: string;
  };
  theme?: {
    color?: string;
  };
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function loadRazorpay(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Razorpay"));
    document.body.appendChild(script);
  });
}

export function openRazorpayCheckout(options: RazorpayOptions) {
  if (!window.Razorpay) {
    throw new Error("Razorpay not loaded");
  }

  const razorpay = new window.Razorpay({
    key: options.key,
    amount: options.amount,
    currency: options.currency,
    name: options.name,
    description: options.description,
    order_id: options.order_id,
    handler: options.handler,
    prefill: options.prefill,
    theme: options.theme || { color: "#2563eb" },
    modal: {
      ondismiss: () => {
        console.log("Payment cancelled");
      }
    }
  });

  razorpay.open();
}
