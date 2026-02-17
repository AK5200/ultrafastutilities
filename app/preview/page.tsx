"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generatePDF } from "@/lib/pdf-generator";
import { trackPaymentSuccess } from "@/lib/analytics";
import { initiateDodoCheckout, diagnoseDodoSetup } from "@/lib/dodo";
import {
  ShieldCheck,
  Copy,
  Download,
  FileDown,
  Lock,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function PreviewPage() {
  const [activeTab, setActiveTab] = useState("privacy");
  const [policyData, setPolicyData] = useState<any>(null);
  const [isPaid, setIsPaid] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedPolicies, setGeneratedPolicies] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("policyData");
    const policies = localStorage.getItem("generatedPolicies");
    if (stored) setPolicyData(JSON.parse(stored));
    if (policies) setGeneratedPolicies(JSON.parse(policies));

    const paid = localStorage.getItem("isPaid") === "true";
    setIsPaid(paid);

    diagnoseDodoSetup();
  }, []);

  const getCurrentPolicyText = () => {
    if (!generatedPolicies) return "Loading...";
    if (activeTab === "privacy") return generatedPolicies.privacyPolicy || "";
    if (activeTab === "terms") return generatedPolicies.termsOfService || "";
    return generatedPolicies.cookiePolicy || "";
  };

  const handleCopy = async () => {
    const text = getCurrentPolicyText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    const text = getCurrentPolicyText();
    const filename =
      activeTab === "privacy"
        ? "privacy-policy.txt"
        : activeTab === "terms"
        ? "terms-of-service.txt"
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

  const handlePayment = async () => {
    try {
      const productId = process.env.NEXT_PUBLIC_DODO_PRODUCT_ID;
      if (!productId) {
        throw new Error(
          "Product ID is not configured. Please set NEXT_PUBLIC_DODO_PRODUCT_ID"
        );
      }

      localStorage.setItem("pendingUpgrade", "plus");

      await initiateDodoCheckout({
        productId: productId,
        customerEmail: policyData?.contactEmail,
        customerName: policyData?.businessName,
        quantity: 1,
        returnUrl: `${window.location.origin}/success`,
      });
    } catch (error: any) {
      console.error("Payment error:", error);
      let errorMessage = error.message || "Unknown error";
      if (errorMessage.includes("Product ID")) {
        errorMessage +=
          "\n\nPlease check:\n- NEXT_PUBLIC_DODO_PRODUCT_ID is set in .env.local\n- Product ID exists in your Dodo Dashboard";
      } else if (errorMessage.includes("API")) {
        errorMessage +=
          "\n\nPlease check:\n- DODO_PAYMENTS_API_KEY is set in server environment\n- API key is valid and active";
      }
      alert(
        `Failed to start checkout: ${errorMessage}\n\nCheck browser console (F12) for details.`
      );
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

  const renderActions = () => (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={handleCopy}
        size="sm"
        className="h-9 text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        {copied ? (
          <>
            <CheckCircle className="mr-1.5 h-3.5 w-3.5" />
            Copied
          </>
        ) : (
          <>
            <Copy className="mr-1.5 h-3.5 w-3.5" />
            Copy
          </>
        )}
      </Button>
      <Button
        onClick={handleDownload}
        size="sm"
        variant="outline"
        className="h-9 text-xs sm:text-sm border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg"
      >
        <Download className="mr-1.5 h-3.5 w-3.5" />
        <span className="hidden xs:inline">Download</span> Text
      </Button>
      {isPaid && (
        <Button
          onClick={handleDownloadPDF}
          size="sm"
          variant="outline"
          className="h-9 text-xs sm:text-sm border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg"
        >
          <FileDown className="mr-1.5 h-3.5 w-3.5" />
          PDF
        </Button>
      )}
    </div>
  );

  const renderPolicyContent = () => (
    <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-6">
      <div className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-800">
        {getCurrentPolicyText()
          .split("\n")
          .map((line: string, i: number) => (
            <div
              key={i}
              className={
                line.match(/^[0-9]+\./)
                  ? "font-bold mt-4 mb-2 text-slate-900"
                  : line.match(/^[A-Z]/) && line.length < 100
                  ? "font-semibold mt-3 mb-1 text-slate-900"
                  : "mb-2"
              }
            >
              {line}
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Header */}
      <div className="border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Documents Ready
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Preview your documents
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Review, copy, and download your generated policies.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Upgrade Banner */}
        {!isPaid && (
          <div className="mb-6 rounded-xl border border-amber-200/80 bg-gradient-to-r from-amber-50 to-yellow-50 p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">
                    Upgrade to Plus
                  </p>
                  <p className="text-xs text-slate-500">
                    Unlock Terms of Service, Cookie Policy &amp; PDF downloads
                  </p>
                </div>
              </div>
              <Button
                className="h-9 text-sm bg-amber-500 hover:bg-amber-600 text-white rounded-lg shadow-sm whitespace-nowrap"
                onClick={handlePayment}
                disabled={!policyData}
              >
                Upgrade — $4.99
              </Button>
            </div>
          </div>
        )}

        {/* Document Viewer */}
        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Tabs - responsive: stacked text on mobile */}
            <div className="border-b border-slate-200/60 px-4 sm:px-6 pt-4 sm:pt-5">
              <TabsList className="w-full bg-slate-100/80 rounded-lg p-1 h-auto">
                <TabsTrigger
                  value="privacy"
                  className="flex-1 text-xs sm:text-sm py-2 sm:py-2.5 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  Privacy Policy
                </TabsTrigger>
                <TabsTrigger
                  value="terms"
                  disabled={!isPaid}
                  className="flex-1 text-xs sm:text-sm py-2 sm:py-2.5 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <span className="sm:hidden">Terms</span>
                  <span className="hidden sm:inline">Terms of Service</span>
                  {!isPaid && (
                    <Lock className="ml-1 h-3 w-3 text-slate-400 flex-shrink-0" />
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="cookies"
                  disabled={!isPaid}
                  className="flex-1 text-xs sm:text-sm py-2 sm:py-2.5 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  <span className="sm:hidden">Cookies</span>
                  <span className="hidden sm:inline">Cookie Policy</span>
                  {!isPaid && (
                    <Lock className="ml-1 h-3 w-3 text-slate-400 flex-shrink-0" />
                  )}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Content Area */}
            <div className="p-4 sm:p-6">
              <TabsContent value="privacy" className="mt-0">
                <div className="mb-4">{renderActions()}</div>
                {renderPolicyContent()}
                <div className="mt-4">{renderActions()}</div>
              </TabsContent>

              <TabsContent value="terms" className="mt-0">
                <div className="mb-4">{renderActions()}</div>
                {renderPolicyContent()}
                <div className="mt-4">{renderActions()}</div>
              </TabsContent>

              <TabsContent value="cookies" className="mt-0">
                <div className="mb-4">{renderActions()}</div>
                {renderPolicyContent()}
                <div className="mt-4">{renderActions()}</div>
              </TabsContent>
            </div>

            {/* Bottom Upgrade / Unlocked Card */}
            <div className="px-4 sm:px-6 pb-6">
              {!isPaid && (
                <div className="rounded-xl border border-blue-200/80 bg-gradient-to-br from-blue-50 to-slate-50 p-5 sm:p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        Upgrade to Plus
                      </h3>
                      <p className="text-sm text-slate-500 mt-0.5">
                        One-time $4.99 — unlock everything.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-5">
                    {[
                      "Terms of Service document",
                      "Cookie Policy document",
                      "PDF download for all documents",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full h-11 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm"
                    onClick={handlePayment}
                    disabled={!policyData}
                  >
                    Upgrade — $4.99
                  </Button>
                </div>
              )}

              {isPaid && (
                <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        Premium features unlocked
                      </p>
                      <p className="text-xs text-slate-500">
                        All documents and PDF downloads are available.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
