"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { ProgressIndicator } from "@/components/progress-indicator";

export default function Question7Page() {
  const [selectedRights, setSelectedRights] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const saved = getFormState();
    if (saved.userRights) setSelectedRights(saved.userRights);
  }, []);

  const rights = [
    "View data",
    "Download data",
    "Request deletion",
    "Opt out of marketing"
  ];

  const handleToggle = (right: string) => {
    setSelectedRights(prev => 
      prev.includes(right) 
        ? prev.filter(r => r !== right)
        : [...prev, right]
    );
  };

  const handleAllToggle = () => {
    if (selectedRights.length === rights.length) {
      setSelectedRights([]);
    } else {
      setSelectedRights([...rights]);
    }
  };

  const handleNext = () => {
    saveFormState({ userRights: selectedRights });
    router.push("/generate/form/question8");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <ProgressIndicator currentStep={7} totalSteps={8} />
          <CardTitle className="text-3xl mb-2">Question 7: User Rights</CardTitle>
          <CardDescription className="text-lg">
            What can users do with their data?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              {rights.map((right) => (
                <div key={right} className="flex items-center space-x-2">
                  <Checkbox
                    id={right}
                    checked={selectedRights.includes(right)}
                    onCheckedChange={() => handleToggle(right)}
                  />
                  <Label htmlFor={right} className="cursor-pointer">
                    {right}
                  </Label>
                </div>
              ))}
              <div className="flex items-center space-x-2 pt-2 border-t">
                <Checkbox
                  id="all"
                  checked={selectedRights.length === rights.length}
                  onCheckedChange={handleAllToggle}
                />
                <Label htmlFor="all" className="cursor-pointer font-semibold">
                  All of the above
                </Label>
              </div>
            </div>

            <Button 
              onClick={handleNext} 
              className="w-full" 
              size="lg"
              disabled={selectedRights.length === 0}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
