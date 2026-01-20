"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function FormPage() {
  const [websiteType, setWebsiteType] = useState("");
  const [otherType, setOtherType] = useState("");
  const router = useRouter();

  const handleNext = () => {
    // Store form data and proceed to next question
    router.push("/generate/form/question2");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">Question 1: Website Type</CardTitle>
          <CardDescription className="text-lg">
            What type of website is this?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <RadioGroup value={websiteType} onValueChange={setWebsiteType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal-blog" id="personal-blog" />
                <Label htmlFor="personal-blog">Personal Blog</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business">Business Website</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ecommerce" id="ecommerce" />
                <Label htmlFor="ecommerce">E-commerce</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="saas" id="saas" />
                <Label htmlFor="saas">SaaS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mobile-app" id="mobile-app" />
                <Label htmlFor="mobile-app">Mobile App</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>
            
            {websiteType === "other" && (
              <div className="mt-4">
                <Label htmlFor="other-type" className="block text-sm font-medium mb-2">
                  Please specify:
                </Label>
                <Input
                  id="other-type"
                  type="text"
                  placeholder="Enter website type"
                  value={otherType}
                  onChange={(e) => setOtherType(e.target.value)}
                  className="w-full"
                />
              </div>
            )}

            <Button 
              onClick={handleNext} 
              className="w-full" 
              size="lg"
              disabled={!websiteType || (websiteType === "other" && !otherType)}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
