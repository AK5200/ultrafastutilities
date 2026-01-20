"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Question6Page() {
  const [cookieType, setCookieType] = useState("");
  const router = useRouter();

  const handleNext = () => {
    router.push("/generate/form/question7");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">Question 6: Cookies</CardTitle>
          <CardDescription className="text-lg">
            Do you use cookies?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <RadioGroup value={cookieType} onValueChange={setCookieType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="essential" id="essential" />
                <Label htmlFor="essential">Essential only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="analytics" id="analytics" />
                <Label htmlFor="analytics">Analytics cookies</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advertising" id="advertising" />
                <Label htmlFor="advertising">Advertising cookies</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All types</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="none" />
                <Label htmlFor="none">No cookies</Label>
              </div>
            </RadioGroup>

            <Button 
              onClick={handleNext} 
              className="w-full" 
              size="lg"
              disabled={!cookieType}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
