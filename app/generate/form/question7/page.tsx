"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { ProgressIndicator } from "@/components/progress-indicator";
import { ArrowLeft } from "lucide-react";

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

  const handleBack = () => {
    router.push("/generate/form/question6");
  };

  const handleNext = () => {
    saveFormState({ userRights: selectedRights });
    router.push("/generate/form/question8");
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
          <ProgressIndicator currentStep={7} totalSteps={8} />
          <CardTitle className="text-2xl mb-1 text-blue-900 pb-2">User rights</CardTitle>
          <CardDescription className="text-base text-blue-800/80">
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
                    className="border-blue-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <Label htmlFor={right} className="cursor-pointer text-blue-900">
                    {right}
                  </Label>
                </div>
              ))}
              <div className="flex items-center space-x-2 pt-2 border-t border-blue-200/50">
                <Checkbox
                  id="all"
                  checked={selectedRights.length === rights.length}
                  onCheckedChange={handleAllToggle}
                  className="border-blue-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <Label htmlFor="all" className="cursor-pointer font-semibold text-blue-900">
                  All of the above
                </Label>
              </div>
            </div>

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
                disabled={selectedRights.length === 0}
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
