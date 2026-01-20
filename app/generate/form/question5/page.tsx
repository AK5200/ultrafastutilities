"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { ProgressIndicator } from "@/components/progress-indicator";

export default function Question5Page() {
  const [selectedParties, setSelectedParties] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const saved = getFormState();
    if (saved.thirdPartySharing) setSelectedParties(saved.thirdPartySharing);
  }, []);

  const parties = [
    "Payment processors",
    "Email services",
    "Analytics",
    "Advertising",
    "Cloud hosting",
    "CRM tools",
    "No sharing"
  ];

  const handleToggle = (party: string) => {
    if (party === "No sharing") {
      setSelectedParties(["No sharing"]);
    } else {
      setSelectedParties(prev => {
        const filtered = prev.filter(p => p !== "No sharing");
        if (filtered.includes(party)) {
          return filtered.filter(p => p !== party);
        } else {
          return [...filtered, party];
        }
      });
    }
  };

  const handleNext = () => {
    saveFormState({ thirdPartySharing: selectedParties });
    router.push("/generate/form/question6");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <ProgressIndicator currentStep={5} totalSteps={8} />
          <CardTitle className="text-3xl mb-2">Question 5: Third Party Sharing</CardTitle>
          <CardDescription className="text-lg">
            Do you share data with third parties?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              {parties.map((party) => (
                <div key={party} className="flex items-center space-x-2">
                  <Checkbox
                    id={party}
                    checked={selectedParties.includes(party)}
                    onCheckedChange={() => handleToggle(party)}
                  />
                  <Label htmlFor={party} className="cursor-pointer">
                    {party}
                  </Label>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleNext} 
              className="w-full" 
              size="lg"
              disabled={selectedParties.length === 0}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
