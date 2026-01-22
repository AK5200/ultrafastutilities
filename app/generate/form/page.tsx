"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { ProgressIndicator } from "@/components/progress-indicator";
import { ArrowLeft } from "lucide-react";

export default function FormPage() {
  const [websiteType, setWebsiteType] = useState("");
  const [otherType, setOtherType] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Load saved state
    const saved = getFormState();
    if (saved.websiteType) {
      setWebsiteType(saved.websiteType);
      if (saved.otherWebsiteType) setOtherType(saved.otherWebsiteType);
    }
  }, []);

  const handleBack = () => {
    router.push("/generate");
  };

  const handleNext = () => {
    // Save form data
    saveFormState({
      websiteType: websiteType === "other" ? otherType : websiteType,
      otherWebsiteType: websiteType === "other" ? otherType : undefined,
    });
    router.push("/generate/form/question2");
  };

  return (
    <main className="min-h-screen px-4 py-12 sm:py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        <Card className="w-full border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md">
        <CardHeader>
          <ProgressIndicator currentStep={1} totalSteps={8} />
          <CardTitle className="text-2xl mb-1 text-blue-900 pb-2">Website type</CardTitle>
          <CardDescription className="text-base text-blue-800/80">
            What type of website is this?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <RadioGroup value={websiteType} onValueChange={setWebsiteType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal-blog" id="personal-blog" className="border-blue-400 text-blue-600" />
                <Label htmlFor="personal-blog" className="text-blue-900">Personal Blog</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" className="border-blue-400 text-blue-600" />
                <Label htmlFor="business" className="text-blue-900">Business Website</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ecommerce" id="ecommerce" className="border-blue-400 text-blue-600" />
                <Label htmlFor="ecommerce" className="text-blue-900">E-commerce</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="saas" id="saas" className="border-blue-400 text-blue-600" />
                <Label htmlFor="saas" className="text-blue-900">SaaS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mobile-app" id="mobile-app" className="border-blue-400 text-blue-600" />
                <Label htmlFor="mobile-app" className="text-blue-900">Mobile App</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" className="border-blue-400 text-blue-600" />
                <Label htmlFor="other" className="text-blue-900">Other</Label>
              </div>
            </RadioGroup>
            
            {websiteType === "other" && (
              <div className="mt-4">
                <Label htmlFor="other-type" className="block text-sm font-medium mb-2 text-blue-900">
                  Please specify:
                </Label>
                <Input
                  id="other-type"
                  type="text"
                  placeholder="Enter website type"
                  value={otherType}
                  onChange={(e) => setOtherType(e.target.value)}
                  className="w-full border-blue-300 text-blue-900 placeholder:text-blue-400 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                />
              </div>
            )}

            <div className="flex gap-3">
              <Button 
                onClick={handleBack} 
                variant="outline"
                className="flex-1 h-auto py-4 text-base border-blue-300 text-blue-700 hover:bg-blue-50" 
                size="lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button 
                onClick={handleNext} 
                className="flex-1 h-auto py-4 text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30" 
                size="lg"
                disabled={!websiteType || (websiteType === "other" && !otherType)}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
        </Card>
      </div>
    </main>
  );
}
