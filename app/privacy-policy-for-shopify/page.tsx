import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, Store, AlertTriangle, CheckCircle, FileText, ArrowRight, HelpCircle, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy for Shopify Stores (GDPR & CCPA) Free Preview | ultrafastutilities",
  description: "Create a privacy policy for your Shopify store. Cover Shopify data collection, payments, cookies, analytics, and compliance. Generate compliant documents for $4.99.",
  keywords: "privacy policy for Shopify, Shopify privacy policy, Shopify store privacy policy, Shopify GDPR, Shopify CCPA",
  robots: "index, follow",
};

export default function PrivacyPolicyForShopifyPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent pb-3">
            Privacy Policy for Shopify Stores
          </h1>
          <p className="text-lg text-blue-800/90">
            Create a compliant privacy policy for your Shopify store
          </p>
        </div>

        {/* Quick Links Section - Top of Page */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/privacy-policy-for-ecommerce" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-3 pr-8">
                    <Store className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Privacy Policy for Ecommerce</h3>
                      <p className="text-sm text-blue-700/70 mt-1">Ecommerce store compliance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/cookie-policy-for-websites" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-3 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Cookie Policy</h3>
                      <p className="text-sm text-blue-700/70 mt-1">Cookie compliance guide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/generate" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-3 pr-8">
                    <ShieldCheck className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Policy Generator</h3>
                      <p className="text-sm text-blue-700/70 mt-1">Create your policy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Why Shopify Privacy Policies Are Different */}
        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Why Shopify Privacy Policies Are Different</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-900/90">
              Shopify stores rely on built-in analytics, checkout cookies, payment processing, and third-party apps. This makes generic ecommerce privacy policies insufficient for Shopify merchants, especially under <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                GDPR
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link> and <Link href="/ccpa-privacy-policy-example" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                CCPA
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Store className="w-8 h-8 text-blue-600" />
              <CardTitle className="text-2xl text-blue-900 pb-2">Shopify Data Collection</CardTitle>
            </div>
            <CardDescription className="text-base text-blue-800/80">
              Shopify stores collect customer data through various channels that require comprehensive privacy disclosures.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Customer Account Information</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Email addresses and account credentials</li>
                  <li>Customer names and contact information</li>
                  <li>Purchase history and order preferences</li>
                  <li>Wishlists and saved addresses</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Payment Processing</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Payment details processed securely by Shopify Payments, Stripe, or PayPal</li>
                  <li>Billing addresses and tax information</li>
                  <li>Transaction records and receipts</li>
                  <li>Refund and chargeback data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Shipping Information</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Shipping addresses and delivery preferences</li>
                  <li>Tracking numbers and shipment status</li>
                  <li>Return and exchange information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Cookies and Analytics</h3>
                <p className="text-blue-800/90 mb-2">
                  Shopify stores use <Link href="/cookie-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    cookies
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Shopify analytics cookies (cart, checkout, storefront)</li>
                  <li>Third-party analytics (Google Analytics, Facebook Pixel)</li>
                  <li>Marketing and retargeting cookies</li>
                  <li>Performance and security cookies</li>
                </ul>
                <p className="text-blue-800/90 mt-2 text-sm">
                  Consent is required for non-essential analytics and marketing cookies under <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">
              <Link href="/gdpr-privacy-policy-template" className="hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                GDPR
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link> and <Link href="/ccpa-privacy-policy-example" className="hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                CCPA
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link> Compliance Expectations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <Link href="/gdpr-privacy-policy-template" className="hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> Compliance for Shopify Stores
                </h3>
                <p className="text-blue-800/90 mb-2">
                  EU/UK customers require:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Lawful basis disclosure (contractual necessity for orders, consent for marketing)</li>
                  <li>Data retention periods (transaction data: 7 years, account data: while active)</li>
                  <li>International data transfer safeguards (Shopify processes data globally)</li>
                  <li>User rights procedures (access, deletion, portability, objection)</li>
                  <li>Cookie consent mechanisms (GDPR-compliant cookie banner)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <Link href="/ccpa-privacy-policy-example" className="hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    CCPA/CPRA
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> Compliance for Shopify Stores
                </h3>
                <p className="text-blue-800/90 mb-2">
                  California customers require:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Right to know what personal information is collected and shared</li>
                  <li>Right to delete personal information (with exceptions for transaction records)</li>
                  <li>Right to opt out of sale or sharing (e.g., advertising data shared with Google Ads, Meta Ads)</li>
                  <li>"Do Not Sell My Personal Information" link if applicable</li>
                  <li>Non-discrimination clause</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <Link href="/generate">
            <Button size="lg" className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30">
              Generate My Shopify Privacy Policy $4.99
            </Button>
          </Link>
          <p className="text-sm font-medium text-blue-700/90 mt-3">
            Free preview • One time payment • Shopify-ready disclosures
          </p>
          <p className="text-xs text-blue-600/70 mt-2 max-w-2xl mx-auto">
            Structured around widely accepted GDPR and CCPA requirements. Not legal advice.
          </p>
        </div>

        {/* Related Resources Section - Enhanced Design */}
        <div className="border-t border-blue-200/50 pt-8 mt-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/privacy-policy-for-ecommerce" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <Store className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Privacy Policy for Ecommerce</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">Ecommerce store compliance guide</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/cookie-policy-for-websites" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Cookie Policy for Websites</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">Cookie compliance requirements</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/privacy-policy-for-websites" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Privacy Policy for Websites</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">Website compliance guide</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/generate" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <ShieldCheck className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Policy Generator</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">Create your compliant privacy policy</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
