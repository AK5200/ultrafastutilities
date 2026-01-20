"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Question3Page() {
  const [selectedMethods, setSelectedMethods] = useState<string[]>([]);
  const router = useRouter();

  const methods = [
    "Contact forms",
    "Account signup",
    "Newsletter",
    "Checkout",
    "Cookies",
    "Social login",
    "User content"
  ];

  const handleToggle = (method: string) => {
    setSelectedMethods(prev => 
      prev.includes(method) 
        ? prev.filter(m => m !== method)
        : [...prev, method]
    );
  };

  const handleNext = () => {
    router.push("/generate/form/question4");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">Question 3: Collection Methods</CardTitle>
          <CardDescription className="text-lg">
            How do you collect this information?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              {methods.map((method) => (
                <div key={method} className="flex items-center space-x-2">
                  <Checkbox
                    id={method}
                    checked={selectedMethods.includes(method)}
                    onCheckedChange={() => handleToggle(method)}
                  />
                  <Label htmlFor={method} className="cursor-pointer">
                    {method}
                  </Label>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleNext} 
              className="w-full" 
              size="lg"
              disabled={selectedMethods.length === 0}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
