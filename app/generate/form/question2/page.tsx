"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Question2Page() {
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const router = useRouter();

  const dataOptions = [
    "Name",
    "Email",
    "Phone",
    "Address",
    "Payment info",
    "DOB",
    "Govt ID",
    "Photos",
    "None of the above"
  ];

  const handleToggle = (option: string) => {
    if (option === "None of the above") {
      setSelectedData(["None of the above"]);
    } else {
      setSelectedData(prev => {
        const filtered = prev.filter(item => item !== "None of the above");
        if (filtered.includes(option)) {
          return filtered.filter(item => item !== option);
        } else {
          return [...filtered, option];
        }
      });
    }
  };

  const handleNext = () => {
    router.push("/generate/form/question3");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">Question 2: Data Collected</CardTitle>
          <CardDescription className="text-lg">
            What personal information do you collect?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-3">
              {dataOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={option}
                    checked={selectedData.includes(option)}
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
              disabled={selectedData.length === 0}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
