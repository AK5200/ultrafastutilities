"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Question8Page() {
  const [businessName, setBusinessName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("");
  const router = useRouter();

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleGenerate = () => {
    // Store form data and proceed to preview
    router.push("/preview");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">Question 8: Business Details</CardTitle>
          <CardDescription className="text-lg">
            Enter your business information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label htmlFor="business-name" className="block text-sm font-medium mb-2">
                Business/Website Name *
              </Label>
              <Input
                id="business-name"
                type="text"
                placeholder="Enter business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                Contact Email *
              </Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="contact@example.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="country" className="block text-sm font-medium mb-2">
                Country *
              </Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger id="country" className="w-full">
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
                <Label htmlFor="state" className="block text-sm font-medium mb-2">
                  State *
                </Label>
                <Select value={state} onValueChange={setState}>
                  <SelectTrigger id="state" className="w-full">
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

            <Button 
              onClick={handleGenerate} 
              className="w-full" 
              size="lg"
              disabled={!businessName || !contactEmail || !country || (country === "India" && !state)}
            >
              Generate Policy
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
