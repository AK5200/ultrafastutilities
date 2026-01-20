"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { ProgressIndicator } from "@/components/progress-indicator";

export default function Question4Page() {
  const [selectedUsage, setSelectedUsage] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const saved = getFormState();
    if (saved.dataUsage) setSelectedUsage(saved.dataUsage);
  }, []);

  const usageOptions = [
    "Providing services",
    "Processing orders",
    "Marketing emails",
    "Customer support",
    "Analytics",
    "Personalization",
    "Legal compliance"
  ];

  const handleToggle = (option: string) => {
    setSelectedUsage(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const handleNext = () => {
    saveFormState({ dataUsage: selectedUsage });
    router.push("/generate/form/question5");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <ProgressIndicator currentStep={4} totalSteps={8} />
          <CardTitle className="text-3xl mb-2">Question 4: Data Usage</CardTitle>
          <CardDescription className="text-lg">
            What do you use this data for?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              {usageOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={option}
                    checked={selectedUsage.includes(option)}
                    onCheckedChange={() => handleToggle(option)}
                  />
                  <Label htmlFor={option} className="cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleNext} 
              className="w-full" 
              size="lg"
              disabled={selectedUsage.length === 0}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
