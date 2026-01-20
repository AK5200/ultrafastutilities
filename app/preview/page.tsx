"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loadRazorpay, openRazorpayCheckout } from "@/lib/razorpay";
import { generatePDF } from "@/lib/pdf-generator";
import { trackPaymentSuccess, trackGeneratePolicy } from "@/lib/analytics";

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
      await loadRazorpay();
      
      // Create order
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 999 })
      });
      
      const { orderId } = await orderResponse.json();
      
      if (!orderId) {
        throw new Error("Failed to create order");
      }

      openRazorpayCheckout({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: 99900, // in paise
        currency: "INR",
        name: "PolicyDraft",
        description: "Premium Privacy Policy Package",
        order_id: orderId,
        prefill: {
          email: policyData?.contactEmail || ""
        },
        handler: async (response: any) => {
          // Verify payment
          const verifyResponse = await fetch("/api/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response)
          });
          
          if (verifyResponse.ok) {
            localStorage.setItem("isPaid", "true");
            setIsPaid(true);
            trackPaymentSuccess(999);
            alert("Payment successful! Premium features unlocked.");
          } else {
            alert("Payment verification failed. Please contact support.");
          }
        }
      });
    } catch (error: any) {
      console.error("Payment error:", error);
      alert(`Payment failed: ${error.message}`);
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

  const handleSendEmail = async () => {
    if (!generatedPolicies || !policyData) return;
    
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: policyData.contactEmail,
          privacyPolicy: generatedPolicies.privacyPolicy,
          termsOfService: generatedPolicies.termsOfService,
          cookiePolicy: generatedPolicies.cookiePolicy
        })
      });

      if (response.ok) {
        alert("Documents sent to your email!");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error: any) {
      alert(`Failed to send email: ${error.message}`);
    }
  };

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl mb-2">Preview Your Policy</CardTitle>
            <CardDescription>
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
                <div className="prose max-w-none mb-6 p-4 border rounded">
                  <div className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                    {getCurrentPolicyText().split("\n").map((line, i) => (
                      <div key={i} className={line.match(/^[0-9]+\./) ? "font-bold mt-4 mb-2" : line.match(/^[A-Z]/) && line.length < 100 ? "font-semibold mt-3 mb-1" : "mb-2"}>
                        {line}
                      </div>
                    ))}
                  </div>
                  {!isPaid && (
                    <div className="mt-4 pt-4 border-t text-center text-sm text-gray-500 italic">
                      Generated by PolicyDraft.in - Create yours free
                    </div>
                  )}
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleCopy}>Copy</Button>
                  <Button onClick={handleDownload} variant="outline">Download as Text</Button>
                </div>
              </TabsContent>

              <TabsContent value="terms" className="mt-6">
                <div className="prose max-w-none mb-6 p-4 border rounded">
                  <pre className="whitespace-pre-wrap font-sans">
                    Terms of Service content...
                  </pre>
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleCopy}>Copy</Button>
                  <Button onClick={handleDownload} variant="outline">Download as Text</Button>
                </div>
              </TabsContent>

              <TabsContent value="cookies" className="mt-6">
                <div className="prose max-w-none mb-6 p-4 border rounded">
                  <pre className="whitespace-pre-wrap font-sans">
                    Cookie Policy content...
                  </pre>
                </div>
                <div className="flex gap-4">
                  <Button onClick={handleCopy}>Copy</Button>
                  <Button onClick={handleDownload} variant="outline">Download as Text</Button>
                </div>
              </TabsContent>
            </Tabs>

            {!isPaid && (
              <Card className="mt-6 border-primary">
                <CardHeader>
                  <CardTitle>Upgrade to Premium</CardTitle>
                  <CardDescription>
                    Unlock all features for just ₹999 one-time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Remove watermark</li>
                    <li>Get Terms of Service</li>
                    <li>Get Cookie Policy</li>
                    <li>Download as PDF</li>
                    <li>Email documents</li>
                  </ul>
                  <Button 
                    className="w-full" 
                    onClick={handlePayment}
                    disabled={!policyData}
                  >
                    Pay Now - ₹999
                  </Button>
                </CardContent>
              </Card>
            )}

            {isPaid && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Premium Features Unlocked</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full mb-2" 
                    onClick={handleSendEmail}
                  >
                    Send Documents to Email
                  </Button>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
