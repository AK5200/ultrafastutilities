"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { saveFormState, getFormState } from "@/lib/form-state";
import { PolicyData } from "@/lib/types";
import { ProgressIndicator } from "@/components/progress-indicator";
import { trackGeneratePolicy } from "@/lib/analytics";
import { ArrowLeft } from "lucide-react";

export default function Question8Page() {
  const [businessName, setBusinessName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Load saved state
    const saved = getFormState();
    if (saved.businessName) setBusinessName(saved.businessName);
    if (saved.contactEmail) setContactEmail(saved.contactEmail);
    if (saved.country) setCountry(saved.country);
    if (saved.state) setState(saved.state);
  }, []);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleBack = () => {
    router.push("/generate/form/question7");
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      // Collect all form data from previous questions
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
      
      // Save current question data
      saveFormState({
        businessName,
        contactEmail,
        country,
        state: country === "India" ? state : undefined,
      });
      
      // Store in localStorage for preview page
      localStorage.setItem("policyData", JSON.stringify(allData));
      
      // Generate policy via API
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(allData)
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
    <main className="min-h-screen px-4 py-12 sm:py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        <Card className="w-full border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md">
        <CardHeader>
          <ProgressIndicator currentStep={8} totalSteps={8} />
          <CardTitle className="text-2xl mb-1 text-blue-900 pb-2">Business details</CardTitle>
          <CardDescription className="text-base text-blue-800/80">
            Enter your business information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label htmlFor="business-name" className="block text-sm font-medium mb-2 text-blue-900">
                Business/Website Name *
              </Label>
              <Input
                id="business-name"
                type="text"
                placeholder="Enter business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full border-blue-300 text-blue-900 placeholder:text-blue-400 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                required
              />
            </div>

            <div>
              <Label htmlFor="contact-email" className="block text-sm font-medium mb-2 text-blue-900">
                Contact Email *
              </Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="contact@example.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full border-blue-300 text-blue-900 placeholder:text-blue-400 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                required
              />
            </div>

            <div>
              <Label htmlFor="country" className="block text-sm font-medium mb-2 text-blue-900">
                Country *
              </Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger id="country" className="w-full border-blue-300 text-blue-900 focus:ring-blue-500">
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
                <Label htmlFor="state" className="block text-sm font-medium mb-2 text-blue-900">
                  State *
                </Label>
                <Select value={state} onValueChange={setState}>
                  <SelectTrigger id="state" className="w-full border-blue-300 text-blue-900 focus:ring-blue-500">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianStates.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

                <div className="flex gap-3">
                  <Button 
                    onClick={handleBack} 
                    variant="outline"
                    className="flex-1 h-auto py-4 text-base border-blue-300 text-blue-700 hover:bg-blue-50" 
                    size="lg"
                    disabled={isGenerating}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleGenerate}
                    className="flex-1 h-auto py-4 text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30"
                    size="lg"
                    disabled={!businessName || !contactEmail || !country || (country === "India" && !state) || isGenerating}
                  >
                    {isGenerating ? "Generating..." : "Generate Policy"}
                  </Button>
                </div>
          </div>
        </CardContent>
        </Card>
      </div>
    </main>
  );
}
