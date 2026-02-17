"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { ProgressIndicator } from "@/components/progress-indicator";
import { ArrowLeft, ArrowRight, Cookie } from "lucide-react";

export default function Question6Page() {
  const [cookieType, setCookieType] = useState("");
  const router = useRouter();

  useEffect(() => {
    const saved = getFormState();
    if (saved.cookies) setCookieType(saved.cookies);
  }, []);

  const handleBack = () => {
    router.push("/generate/form/question5");
  };

  const handleNext = () => {
    saveFormState({ cookies: cookieType });
    router.push("/generate/form/question7");
  };

  const options = [
    { value: "essential", label: "Essential only" },
    { value: "analytics", label: "Analytics cookies" },
    { value: "advertising", label: "Advertising cookies" },
    { value: "all", label: "All types" },
    { value: "none", label: "No cookies" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <ProgressIndicator currentStep={6} totalSteps={8} />

        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Cookies</h2>
              <p className="text-sm text-slate-500">Do you use cookies?</p>
            </div>
          </div>

          <RadioGroup
            value={cookieType}
            onValueChange={setCookieType}
            className="space-y-2"
          >
            {options.map((opt) => (
              <label
                key={opt.value}
                htmlFor={opt.value}
                className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                  cookieType === opt.value
                    ? "border-blue-300 bg-blue-50/50 ring-1 ring-blue-200"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                <RadioGroupItem
                  value={opt.value}
                  id={opt.value}
                  className="border-slate-300 text-blue-600"
                />
                <Label
                  htmlFor={opt.value}
                  className="cursor-pointer text-sm font-medium text-slate-700 flex-1"
                >
                  {opt.label}
                </Label>
              </label>
            ))}
          </RadioGroup>

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
              disabled={!cookieType}
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
