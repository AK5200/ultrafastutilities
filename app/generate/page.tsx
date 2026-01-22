"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { saveFormState } from "@/lib/form-state";
import { Loader2 } from "lucide-react";

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
        body: JSON.stringify({ url })
      });

      if (!response.ok) {
        throw new Error("Failed to detect website information");
      }

      const data = await response.json();
      
      // Save detected data
      saveFormState({
        url: url,
        businessName: data.title || "",
        contactEmail: data.contactEmail || "",
      });

      router.push("/generate/form");
    } catch (err: any) {
      setError(err.message || "Failed to detect website. You can continue manually.");
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
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 pb-3">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Get started
            </span>
          </h1>
          <p className="text-lg text-blue-800/90">
            Add your website URL to auto-fill details (optional), then answer a few questions.
          </p>
        </div>

        <Card className="w-full border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-900 pb-2">Website URL</CardTitle>
          <CardDescription className="text-base text-blue-800/80">
            We'll try to detect your site name and contact email automatically.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <label htmlFor="url" className="block text-sm font-medium mb-2 text-blue-900">
                Website URL (Optional)
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
                className="w-full border-blue-300 text-blue-900 placeholder:text-blue-400 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                disabled={isDetecting}
              />
              <p className="text-sm text-blue-600/70 mt-2">
                You can skip this step if you prefer to enter details manually.
              </p>
              {error && (
                <div className="mt-3 rounded-lg border border-red-300 bg-red-50/80 px-3 py-2 text-sm text-red-700">
                  {error}
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {url && (
                <Button 
                  onClick={handleDetect} 
                  className="flex-1 h-auto py-4 text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30" 
                  size="lg"
                  disabled={isDetecting}
                >
                  {isDetecting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Detecting...
                    </>
                  ) : (
                    "Auto-detect"
                  )}
                </Button>
              )}
              <Button 
                onClick={handleContinue} 
                className={url ? "flex-1 border-blue-300 text-blue-700 hover:bg-blue-50" : "w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30"} 
                size="lg"
                disabled={isDetecting}
                variant={url ? "outline" : "default"}
              >
                Continue
              </Button>
            </div>
          </div>
        </CardContent>
        </Card>
      </div>
    </main>
  );
}
