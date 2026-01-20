"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function GeneratePage() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    // Store URL in state or pass to next step
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
                onChange={(e) => setUrl(e.target.value)}
                className="w-full"
              />
              <p className="text-sm text-gray-500 mt-2">
                You can skip this step if you prefer to enter details manually.
              </p>
            </div>
            <Button onClick={handleContinue} className="w-full" size="lg">
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
