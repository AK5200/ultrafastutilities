// Google Analytics 4 helper functions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackPageView(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: url,
    });
  }
}

export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
}

export function trackGeneratePolicy() {
  trackEvent("generate_policy", {
    event_category: "engagement",
    event_label: "Policy Generation",
  });
}

export function trackPaymentSuccess(amount: number) {
  trackEvent("purchase", {
    event_category: "ecommerce",
    value: amount,
    currency: "INR",
  });
}
