"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { PolicyData } from "@/lib/types";
import { ProgressIndicator } from "@/components/progress-indicator";
import { trackGeneratePolicy } from "@/lib/analytics";
import { ArrowLeft, Building2, Loader2, ShieldCheck } from "lucide-react";

export default function Question8Page() {
  const [businessName, setBusinessName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const saved = getFormState();
    if (saved.businessName) setBusinessName(saved.businessName);
    if (saved.contactEmail) setContactEmail(saved.contactEmail);
    if (saved.country) setCountry(saved.country);
    if (saved.state) setState(saved.state);
  }, []);

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const handleBack = () => {
    router.push("/generate/form/question7");
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const savedState = getFormState();
      const allData: PolicyData = {
        ...savedState,
        businessName,
        contactEmail,
        country,
        state: country === "India" ? state : undefined,
        websiteType: savedState.websiteType || "",
        dataCollected: savedState.dataCollected || [],
        collectionMethods: savedState.collectionMethods || [],
        dataUsage: savedState.dataUsage || [],
        thirdPartySharing: savedState.thirdPartySharing || [],
        cookies: savedState.cookies || "",
        userRights: savedState.userRights || [],
      } as PolicyData;

      saveFormState({
        businessName,
        contactEmail,
        country,
        state: country === "India" ? state : undefined,
      });

      localStorage.setItem("policyData", JSON.stringify(allData));

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(allData),
      });

      if (!response.ok) {
        throw new Error("Failed to generate policy");
      }

      const generated = await response.json();
      localStorage.setItem("generatedPolicies", JSON.stringify(generated));

      trackGeneratePolicy();

      router.push("/preview");
    } catch (error) {
      console.error("Error generating policy:", error);
      alert("Failed to generate policy. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <ProgressIndicator currentStep={8} totalSteps={8} />

        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Business details
              </h2>
              <p className="text-sm text-slate-500">
                Enter your business information
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <Label
                htmlFor="business-name"
                className="block text-sm font-medium mb-1.5 text-slate-700"
              >
                Business/Website Name *
              </Label>
              <Input
                id="business-name"
                type="text"
                placeholder="Enter business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full h-11 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500 rounded-lg"
                required
              />
            </div>

            <div>
              <Label
                htmlFor="contact-email"
                className="block text-sm font-medium mb-1.5 text-slate-700"
              >
                Contact Email *
              </Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="contact@example.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full h-11 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-500 rounded-lg"
                required
              />
            </div>

            <div>
              <Label
                htmlFor="country"
                className="block text-sm font-medium mb-1.5 text-slate-700"
              >
                Country *
              </Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger
                  id="country"
                  className="w-full h-11 border-slate-200 text-slate-900 focus:ring-blue-500 rounded-lg"
                >
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="United States">United States</SelectItem>
                  <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {country === "India" && (
              <div>
                <Label
                  htmlFor="state"
                  className="block text-sm font-medium mb-1.5 text-slate-700"
                >
                  State *
                </Label>
                <Select value={state} onValueChange={setState}>
                  <SelectTrigger
                    id="state"
                    className="w-full h-11 border-slate-200 text-slate-900 focus:ring-blue-500 rounded-lg"
                  >
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianStates.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="flex gap-3 pt-3">
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 h-11 text-sm border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg"
                disabled={isGenerating}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={handleGenerate}
                className="flex-1 h-11 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
                disabled={
                  !businessName ||
                  !contactEmail ||
                  !country ||
                  (country === "India" && !state) ||
                  isGenerating
                }
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    Generate Policy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
