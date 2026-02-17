"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { saveFormState } from "@/lib/form-state";
import {
  Loader2,
  ShieldCheck,
  Globe,
  ArrowRight,
  Clock,
  CreditCard,
  FileText,
} from "lucide-react";

export default function GeneratePage() {
  const [url, setUrl] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleDetect = async () => {
    if (!url) {
      handleContinue();
      return;
    }

    setIsDetecting(true);
    setError("");

    try {
      const response = await fetch("/api/detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Failed to detect website information");
      }

      const data = await response.json();

      saveFormState({
        url: url,
        businessName: data.title || "",
        contactEmail: data.contactEmail || "",
      });

      router.push("/generate/form");
    } catch (err: any) {
      setError(
        err.message || "Failed to detect website. You can continue manually."
      );
    } finally {
      setIsDetecting(false);
    }
  };

  const handleContinue = () => {
    if (url) {
      saveFormState({ url: url });
    }
    router.push("/generate/form");
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-blue-50/60 blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Privacy Policy Generator
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Generate Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto">
            Answer 8 quick questions about your website or app. We&apos;ll
            generate a structured, compliant privacy policy in under 60 seconds.
          </p>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              60 seconds
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-blue-500" />
              $4.99 one-time
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              Free preview
            </span>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-xl mx-auto px-4 sm:px-6 -mt-6 relative z-10 pb-16">
        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/40 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Website URL
              </h2>
              <p className="text-sm text-slate-500">
                Auto-detect your site name &amp; email (optional)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Your website URL
              </label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                }}
                className="w-full h-11 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500 focus-visible:border-blue-400 rounded-lg"
                disabled={isDetecting}
              />
              <p className="text-xs text-slate-400 mt-1.5">
                Skip this step to enter details manually
              </p>
              {error && (
                <div className="mt-3 rounded-lg border border-red-200 bg-red-50/80 px-3 py-2 text-sm text-red-700">
                  {error}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {url && (
                <Button
                  onClick={handleDetect}
                  className="flex-1 h-11 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
                  disabled={isDetecting}
                >
                  {isDetecting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Detecting...
                    </>
                  ) : (
                    <>
                      <Globe className="mr-2 h-4 w-4" />
                      Auto-detect
                    </>
                  )}
                </Button>
              )}
              <Button
                onClick={handleContinue}
                className={
                  url
                    ? "flex-1 h-11 text-sm border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg"
                    : "w-full h-11 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
                }
                disabled={isDetecting}
                variant={url ? "outline" : "default"}
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
