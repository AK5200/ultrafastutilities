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
        websiteUrl: url,
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
      saveFormState({ websiteUrl: url });
    }
    router.push("/generate/form");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">Generate Your Privacy Policy</CardTitle>
          <CardDescription className="text-lg">
            Enter your website URL to get started. This helps us customize your policy.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <label htmlFor="url" className="block text-sm font-medium mb-2">
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
                className="w-full"
                disabled={isDetecting}
              />
              <p className="text-sm text-gray-500 mt-2">
                You can skip this step if you prefer to enter details manually.
              </p>
              {error && (
                <p className="text-sm text-red-500 mt-2">{error}</p>
              )}
            </div>
            <div className="flex gap-2">
              {url && (
                <Button 
                  onClick={handleDetect} 
                  className="flex-1" 
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
                className={url ? "flex-1" : "w-full"} 
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
    </main>
  );
}
