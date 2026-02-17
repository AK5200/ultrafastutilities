"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { ProgressIndicator } from "@/components/progress-indicator";
import { ArrowLeft, ArrowRight, Target } from "lucide-react";

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
    "Legal compliance",
  ];

  const handleToggle = (option: string) => {
    setSelectedUsage((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const handleBack = () => {
    router.push("/generate/form/question3");
  };

  const handleNext = () => {
    saveFormState({ dataUsage: selectedUsage });
    router.push("/generate/form/question5");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <ProgressIndicator currentStep={4} totalSteps={8} />

        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Data usage
              </h2>
              <p className="text-sm text-slate-500">
                What do you use this data for?
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {usageOptions.map((option) => (
              <label
                key={option}
                htmlFor={option}
                className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                  selectedUsage.includes(option)
                    ? "border-blue-300 bg-blue-50/50 ring-1 ring-blue-200"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                <Checkbox
                  id={option}
                  checked={selectedUsage.includes(option)}
                  onCheckedChange={() => handleToggle(option)}
                  className="border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <Label
                  htmlFor={option}
                  className="cursor-pointer text-sm font-medium text-slate-700 flex-1"
                >
                  {option}
                </Label>
              </label>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <Button
              onClick={handleBack}
              variant="outline"
              className="flex-1 h-11 text-sm border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              className="flex-1 h-11 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
              disabled={selectedUsage.length === 0}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
