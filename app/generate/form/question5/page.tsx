"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { ProgressIndicator } from "@/components/progress-indicator";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";

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
    "No sharing",
  ];

  const handleToggle = (party: string) => {
    if (party === "No sharing") {
      setSelectedParties(["No sharing"]);
    } else {
      setSelectedParties((prev) => {
        const filtered = prev.filter((p) => p !== "No sharing");
        if (filtered.includes(party)) {
          return filtered.filter((p) => p !== party);
        } else {
          return [...filtered, party];
        }
      });
    }
  };

  const handleBack = () => {
    router.push("/generate/form/question4");
  };

  const handleNext = () => {
    saveFormState({ thirdPartySharing: selectedParties });
    router.push("/generate/form/question6");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <ProgressIndicator currentStep={5} totalSteps={8} />

        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Third-party sharing
              </h2>
              <p className="text-sm text-slate-500">
                Do you share data with third parties?
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {parties.map((party) => (
              <label
                key={party}
                htmlFor={party}
                className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition-all ${
                  selectedParties.includes(party)
                    ? "border-blue-300 bg-blue-50/50 ring-1 ring-blue-200"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                <Checkbox
                  id={party}
                  checked={selectedParties.includes(party)}
                  onCheckedChange={() => handleToggle(party)}
                  className="border-slate-300 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
                <Label
                  htmlFor={party}
                  className="cursor-pointer text-sm font-medium text-slate-700 flex-1"
                >
                  {party}
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
              disabled={selectedParties.length === 0}
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
