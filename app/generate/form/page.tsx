"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { ProgressIndicator } from "@/components/progress-indicator";
import { ArrowLeft, ArrowRight, Layout } from "lucide-react";

export default function FormPage() {
  const [websiteType, setWebsiteType] = useState("");
  const [otherType, setOtherType] = useState("");
  const router = useRouter();

  useEffect(() => {
    const saved = getFormState();
    if (saved.websiteType) {
      setWebsiteType(saved.websiteType);
      if (saved.otherType) setOtherType(saved.otherType);
    }
  }, []);

  const handleBack = () => {
    router.push("/generate");
  };

  const handleNext = () => {
    saveFormState({
      websiteType: websiteType === "other" ? otherType : websiteType,
      otherType: websiteType === "other" ? otherType : undefined,
    });
    router.push("/generate/form/question2");
  };

  const options = [
    { value: "personal-blog", label: "Personal Blog" },
    { value: "business", label: "Business Website" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "saas", label: "SaaS" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "other", label: "Other" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <ProgressIndicator currentStep={1} totalSteps={8} />

        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <Layout className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Website type
              </h2>
              <p className="text-sm text-slate-500">
                What type of website is this?
              </p>
            </div>
          </div>

          <RadioGroup
            value={websiteType}
            onValueChange={setWebsiteType}
            className="space-y-2"
          >
            {options.map((opt) => (
              <label
                key={opt.value}
                htmlFor={opt.value}
                className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                  websiteType === opt.value
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

          {websiteType === "other" && (
            <div className="mt-4">
              <Label
                htmlFor="other-type"
                className="block text-sm font-medium mb-1.5 text-slate-700"
              >
                Please specify:
              </Label>
              <Input
                id="other-type"
                type="text"
                placeholder="Enter website type"
                value={otherType}
                onChange={(e) => setOtherType(e.target.value)}
                className="w-full h-11 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500 rounded-lg"
              />
            </div>
          )}

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
              disabled={
                !websiteType || (websiteType === "other" && !otherType)
              }
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
