"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generatePDF } from "@/lib/pdf-generator";
import { trackPaymentSuccess } from "@/lib/analytics";
import { initiateDodoCheckout, diagnoseDodoSetup } from "@/lib/dodo";

export default function PreviewPage() {
  const [activeTab, setActiveTab] = useState("privacy");
  const [policyData, setPolicyData] = useState<any>(null);
  const [isPaid, setIsPaid] = useState(false);

  const [generatedPolicies, setGeneratedPolicies] = useState<any>(null);

  useEffect(() => {
    // Get policy data from localStorage
    const stored = localStorage.getItem("policyData");
    const policies = localStorage.getItem("generatedPolicies");
    if (stored) {
      setPolicyData(JSON.parse(stored));
    }
    if (policies) {
      setGeneratedPolicies(JSON.parse(policies));
    }
    
    // Check if user has paid
    const paid = localStorage.getItem("isPaid") === "true";
    setIsPaid(paid);

    // Run diagnostics on mount
    diagnoseDodoSetup();
  }, []);

  const handleCopy = async () => {
    const text = getCurrentPolicyText();
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    const text = getCurrentPolicyText();
    const filename = activeTab === "privacy" ? "privacy-policy.txt" 
                   : activeTab === "terms" ? "terms-of-service.txt"
                   : "cookie-policy.txt";
    
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getCurrentPolicyText = () => {
    if (!generatedPolicies) return "Loading...";
    
    if (activeTab === "privacy") {
      return generatedPolicies.privacyPolicy || "";
    } else if (activeTab === "terms") {
      return generatedPolicies.termsOfService || "";
    } else {
      return generatedPolicies.cookiePolicy || "";
    }
  };

  const handlePayment = async () => {
    try {
      console.log('[Payment] Starting checkout process...');
      
      const productId = process.env.NEXT_PUBLIC_DODO_PRODUCT_ID;
      
      if (!productId) {
        throw new Error("Product ID is not configured. Please set NEXT_PUBLIC_DODO_PRODUCT_ID");
      }
      
      console.log('[Payment] Creating checkout session with productId:', productId);
      console.log('[Payment] Customer email:', policyData?.contactEmail);
      
      localStorage.setItem("pendingUpgrade", "plus");
      
      // Initiate checkout - this will create a session and redirect to Dodo checkout
      await initiateDodoCheckout({
        productId: productId,
        customerEmail: policyData?.contactEmail,
        customerName: policyData?.businessName,
        quantity: 1,
        returnUrl: `${window.location.origin}/success`,
      });
      
    } catch (error: any) {
      console.error("Payment error:", error);
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name,
      });
      
      // Provide helpful error message
      let errorMessage = error.message || "Unknown error";
      
      if (errorMessage.includes('Product ID')) {
        errorMessage += "\n\nPlease check:\n- NEXT_PUBLIC_DODO_PRODUCT_ID is set in .env.local\n- Product ID exists in your Dodo Dashboard";
      } else if (errorMessage.includes('API')) {
        errorMessage += "\n\nPlease check:\n- DODO_PAYMENTS_API_KEY is set in server environment\n- API key is valid and active";
      }
      
      alert(`Failed to start checkout: ${errorMessage}\n\nCheck browser console (F12) for details.`);
    }
  };

  const handleDownloadPDF = () => {
    if (!generatedPolicies) return;
    generatePDF(
      generatedPolicies.privacyPolicy || "",
      generatedPolicies.termsOfService || "",
      generatedPolicies.cookiePolicy || "",
      isPaid
    );
  };

  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent pb-3">
            Preview your documents
          </h1>
          <p className="text-lg text-blue-800/90">
            Review, copy, and download your generated policies.
          </p>
        </div>

        {/* Premium Top Upgrade Card */}
        {!isPaid && (
          <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-yellow-50/60 via-amber-50/50 to-yellow-50/60 border border-yellow-200/50 shadow-md shadow-yellow-500/10 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-wide text-amber-800 bg-gradient-to-r from-yellow-200 to-amber-200 px-2.5 py-1 rounded-full shadow-sm">
                  PLUS
                </span>
                <span className="text-sm text-amber-900/80">
                  Unlock Terms of Service, Cookie Policy & PDF downloads
                </span>
              </div>
              <Button
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-md shadow-amber-500/20 whitespace-nowrap text-sm"
                onClick={handlePayment}
                disabled={!policyData}
              >
                Upgrade $4.99
              </Button>
            </div>
          </div>
        )}

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Your ultrafastutilities documents</CardTitle>
            <CardDescription className="text-blue-800/80">
              Review your generated privacy policy and related documents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
                <TabsTrigger value="terms" disabled={!isPaid}>
                  Terms of Service {!isPaid && "(Premium)"}
                </TabsTrigger>
                <TabsTrigger value="cookies" disabled={!isPaid}>
                  Cookie Policy {!isPaid && "(Premium)"}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="privacy" className="mt-6">
                <div className="flex gap-4 mb-6">
                  <Button onClick={handleCopy} className="bg-blue-600 hover:bg-blue-700">Copy</Button>
                  <Button onClick={handleDownload} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download as Text</Button>
                  {isPaid && (
                    <Button onClick={handleDownloadPDF} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download PDF</Button>
                  )}
                </div>
                <div className="max-w-none mb-6 p-4 sm:p-6 border border-blue-200/50 rounded-xl bg-white/80 backdrop-blur-sm">
                  <div className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-blue-900">
                    {getCurrentPolicyText().split("\n").map((line: string, i: number) => (
                      <div key={i} className={line.match(/^[0-9]+\./) ? "font-bold mt-4 mb-2" : line.match(/^[A-Z]/) && line.length < 100 ? "font-semibold mt-3 mb-1" : "mb-2"}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleCopy} className="bg-blue-600 hover:bg-blue-700">Copy</Button>
                  <Button onClick={handleDownload} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download as Text</Button>
                  {isPaid && (
                    <Button onClick={handleDownloadPDF} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download PDF</Button>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="terms" className="mt-6">
                <div className="flex gap-4 mb-6">
                  <Button onClick={handleCopy} className="bg-blue-600 hover:bg-blue-700">Copy</Button>
                  <Button onClick={handleDownload} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download as Text</Button>
                  {isPaid && (
                    <Button onClick={handleDownloadPDF} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download PDF</Button>
                  )}
                </div>
                <div className="max-w-none mb-6 p-4 sm:p-6 border border-blue-200/50 rounded-xl bg-white/80 backdrop-blur-sm">
                  <div className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-blue-900">
                    {getCurrentPolicyText().split("\n").map((line: string, i: number) => (
                      <div key={i} className={line.match(/^[0-9]+\./) ? "font-bold mt-4 mb-2" : line.match(/^[A-Z]/) && line.length < 100 ? "font-semibold mt-3 mb-1" : "mb-2"}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleCopy} className="bg-blue-600 hover:bg-blue-700">Copy</Button>
                  <Button onClick={handleDownload} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download as Text</Button>
                  {isPaid && (
                    <Button onClick={handleDownloadPDF} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download PDF</Button>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="cookies" className="mt-6">
                <div className="flex gap-4 mb-6">
                  <Button onClick={handleCopy} className="bg-blue-600 hover:bg-blue-700">Copy</Button>
                  <Button onClick={handleDownload} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download as Text</Button>
                  {isPaid && (
                    <Button onClick={handleDownloadPDF} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download PDF</Button>
                  )}
                </div>
                <div className="max-w-none mb-6 p-4 sm:p-6 border border-blue-200/50 rounded-xl bg-white/80 backdrop-blur-sm">
                  <div className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-blue-900">
                    {getCurrentPolicyText().split("\n").map((line: string, i: number) => (
                      <div key={i} className={line.match(/^[0-9]+\./) ? "font-bold mt-4 mb-2" : line.match(/^[A-Z]/) && line.length < 100 ? "font-semibold mt-3 mb-1" : "mb-2"}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleCopy} className="bg-blue-600 hover:bg-blue-700">Copy</Button>
                  <Button onClick={handleDownload} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download as Text</Button>
                  {isPaid && (
                    <Button onClick={handleDownloadPDF} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">Download PDF</Button>
                  )}
                </div>
              </TabsContent>
              
              {/* Bigger Bottom Upgrade Card */}
              {!isPaid && (
                <div className="mt-8 pt-6 border-t border-blue-200/50">
                  <Card className="overflow-hidden rounded-xl border-2 border-blue-300/50 bg-gradient-to-br from-blue-50/80 via-white/90 to-blue-100/40 backdrop-blur-md shadow-lg">
                    <CardHeader>
                      <div className="inline-flex items-center gap-2">
                        <span className="text-xs font-semibold tracking-wide text-blue-700 bg-blue-100/70 px-2 py-1 rounded-full">
                          PLUS
                        </span>
                      </div>
                      <CardTitle className="text-xl text-blue-900 pb-2">Upgrade to Plus</CardTitle>
                      <CardDescription className="text-blue-800/80">
                        Unlock premium documents for a one-time $4.99.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside mb-5 space-y-2 text-blue-900/90 text-sm">
                        <li>Terms of Service</li>
                        <li>Cookie Policy</li>
                        <li>PDF download for all documents</li>
                      </ul>
                      <Button
                        className="w-full h-auto py-4 text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30"
                        onClick={handlePayment}
                        disabled={!policyData}
                      >
                        Upgrade $4.99
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {isPaid && (
                <div className="mt-8 pt-6 border-t border-blue-200/50">
                  <Card className="border-2 border-blue-200/50 shadow-sm rounded-xl bg-white/70 backdrop-blur-md">
                    <CardHeader>
                      <CardTitle className="text-blue-900">Premium Features Unlocked</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-blue-800/80">
                        You now have access to all premium documents and PDF downloads.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
