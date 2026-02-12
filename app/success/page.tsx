"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { trackPaymentSuccess } from "@/lib/analytics";

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  const paramsSummary = useMemo(() => {
    return Array.from(searchParams.entries());
  }, [searchParams]);

  useEffect(() => {
    // Client-side unlock (sandbox/dev UX). In production this should be verified via Dodo webhooks.
    localStorage.setItem("isPaid", "true");
    localStorage.setItem("paidPlan", "plus");
    localStorage.removeItem("pendingUpgrade");

    trackPaymentSuccess(4.99);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCountdown((c) => Math.max(0, c - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (countdown === 0) router.replace("/preview");
  }, [countdown, router]);

  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md overflow-hidden">
          <CardHeader>
            <div className="flex items-center gap-2 text-blue-700">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-semibold tracking-wide">PAYMENT CONFIRMED</span>
            </div>
            <CardTitle className="text-3xl sm:text-4xl mt-2 text-blue-900 pb-2">Plus unlocked</CardTitle>
            <CardDescription className="text-base text-blue-800/80">
              Thanks! You now have access to premium documents and watermark-free downloads.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {paramsSummary.length > 0 && (
              <div className="rounded-xl border border-blue-200/50 bg-white/80 backdrop-blur-sm p-4 text-sm">
                <div className="font-medium mb-2 text-blue-900">Return details</div>
                <div className="grid grid-cols-1 gap-1 text-blue-800/90">
                  {paramsSummary.slice(0, 8).map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="min-w-28 font-mono text-xs text-blue-600/70">{k}</span>
                      <span className="break-all">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1 h-auto py-4 text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30" asChild>
                <Link href="/preview">Go to documents</Link>
              </Button>
              <Button className="flex-1 h-auto py-4 text-base border-blue-300 text-blue-700 hover:bg-blue-50" variant="outline" asChild>
                <Link href="/generate">Create another</Link>
              </Button>
            </div>

            <p className="text-sm text-blue-800/80">
              Redirecting to your documents in <span className="font-semibold">{countdown}</span>…
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto">
          <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2 text-blue-700">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-wide">PAYMENT CONFIRMED</span>
              </div>
              <CardTitle className="text-3xl sm:text-4xl mt-2 text-blue-900 pb-2">Plus unlocked</CardTitle>
              <CardDescription className="text-base text-blue-800/80">
                Loading...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}
