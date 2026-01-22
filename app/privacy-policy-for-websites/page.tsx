import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, CheckCircle, FileText, ExternalLink, ArrowRight, HelpCircle, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy for Websites (GDPR & CCPA) Free Preview | ultrafastutilities",
  description: "Create a compliant privacy policy for your website. Structured for GDPR & CCPA, includes cookie categories and user rights. Free preview. One-time $4.99.",
  keywords: "privacy policy for websites, website privacy policy, GDPR privacy policy, CCPA privacy policy, privacy policy generator",
  robots: "index, follow",
};

export default function PrivacyPolicyForWebsitesPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent pb-3">
            Privacy Policy for Websites (GDPR & CCPA Compliant)
          </h1>
          <p className="text-lg text-blue-800/90">
            Everything you need to know about creating a compliant privacy policy for your website
          </p>
        </div>

        {/* Quick Links Section - Top of Page */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/cookie-policy-for-websites" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-3 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Cookie Policy</h3>
                      <p className="text-sm text-blue-700/70 mt-1">Learn about cookie requirements</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/gdpr-privacy-policy-template" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-3 pr-8">
                    <ShieldCheck className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">GDPR Template</h3>
                      <p className="text-sm text-blue-700/70 mt-1">EU compliance guide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/ccpa-privacy-policy-example" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-3 pr-8">
                    <ShieldCheck className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">CCPA Example</h3>
                      <p className="text-sm text-blue-700/70 mt-1">California privacy rights</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">What is a Website Privacy Policy?</CardTitle>
            <CardDescription className="text-base text-blue-800/80">
              A privacy policy is a legal document that explains how your website collects, uses, stores, and protects user data. It's required by law in many jurisdictions, including the EU (<Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                GDPR
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>) and California (<Link href="/ccpa-privacy-policy-example" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                CCPA/CPRA
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-900/90 mb-4">
              Every website that collects any form of personal information, from email addresses to <Link href="/cookie-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                cookies
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link>, needs a privacy policy. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-blue-800/90 mb-4">
              <li>Contact forms that collect names and emails</li>
              <li>Newsletter signups</li>
              <li>Ecommerce stores processing payments</li>
              <li>SaaS platforms with user accounts</li>
              <li>Any site using analytics or tracking cookies</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <CardTitle className="text-2xl text-red-900 pb-2">
                Why Generic Policies and ChatGPT Are Risky
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Missing Compliance Requirements</h3>
                <p className="text-red-800/90">
                  Generic privacy policies often miss critical sections required by GDPR and CCPA, such as lawful basis for processing, data retention periods, and international data transfer safeguards.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Vague Third Party Disclosures</h3>
                <p className="text-red-800/90">
                  <Link href="/chatgpt-privacy-policy-risks" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                    ChatGPT
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> and free generators typically use generic terms like "analytics" or "advertising" instead of naming specific services like Google Analytics, Stripe, or Cloudflare. This creates compliance gaps.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">No Cookie Classification</h3>
                <p className="text-red-800/90">
                  Many free tools don't properly categorize cookies (necessary, analytics, marketing, functional), which is required for GDPR compliance and proper user consent. Learn more about <Link href="/cookie-policy-for-websites" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                    cookie policy requirements
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Incomplete User Rights Procedures</h3>
                <p className="text-red-800/90">
                  Generic policies list user rights but don't explain how users can exercise them, including contact methods, verification requirements, and response timelines.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">
              GDPR and CCPA Requirements for Websites
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
                  </Link> (EU/UK) Requirements
                </h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Lawful basis for processing (consent, contractual necessity, legitimate interests)</li>
                  <li>Data controller and processor identification</li>
                  <li>Data retention periods with specific timeframes</li>
                  <li>International data transfer safeguards (SCCs)</li>
                  <li>User rights with clear procedures (access, deletion, portability)</li>
                  <li>Cookie classification and consent mechanisms</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <Link href="/ccpa-privacy-policy-example" className="hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    CCPA/CPRA
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> (California) Requirements
                </h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt out of sale or sharing of data</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Non-discrimination clause</li>
                  <li>Clear contact method for exercising rights</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">What Sections Should a Proper Privacy Policy Include?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Information Collection</h3>
                  <p className="text-blue-800/90">What data you collect (names, emails, payment info, cookies, etc.)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">How Data is Collected</h3>
                  <p className="text-blue-800/90">Forms, account creation, checkout flows, cookies, and communications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">How Data is Used</h3>
                  <p className="text-blue-800/90">Service delivery, account management, payments, fraud prevention, analytics, legal compliance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Third Party Services</h3>
                  <p className="text-blue-800/90">Named examples like Google Analytics, Stripe/Paddle, Cloudflare, advertising platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Data Retention</h3>
                  <p className="text-blue-800/90">Specific timeframes for different data types (account data, transactions, marketing, logs)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">User Rights</h3>
                  <p className="text-blue-800/90">GDPR and CCPA rights with clear procedures for exercising them</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">International Data Transfers</h3>
                  <p className="text-blue-800/90">Safeguards and transfer mechanisms (Standard Contractual Clauses)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    <Link href="/cookie-policy-for-websites" className="hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                      Cookie Policy
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </h3>
                  <p className="text-blue-800/90">Cookie classification, duration, and management instructions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <Link href="/generate">
            <Button size="lg" className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30">
              Generate My Privacy Policy $4.99
            </Button>
          </Link>
          <p className="text-sm font-medium text-blue-700/90 mt-3">
            Free preview. One time payment. No subscription.
          </p>
          <p className="text-xs text-blue-600/70 mt-2 max-w-2xl mx-auto">
            Structured around widely accepted GDPR and CCPA requirements. Not legal advice.
          </p>
        </div>

        {/* FAQ Section */}
        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-2xl text-blue-900 pb-2">Frequently Asked Questions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Is a privacy policy legally required for websites?</h3>
                <p className="text-blue-800/90">
                  Yes, if your website collects any personal information (emails, names, cookies, payment data), you're legally required to have a privacy policy in many jurisdictions, including the EU (<Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>) and California (<Link href="/ccpa-privacy-policy-example" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    CCPA/CPRA
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Can I use ChatGPT to generate a privacy policy?</h3>
                <p className="text-blue-800/90">
                  While <Link href="/chatgpt-privacy-policy-risks" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    ChatGPT
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> can generate text, it often misses critical compliance requirements, uses vague third-party disclosures, and lacks proper cookie classification.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Does this work for international visitors?</h3>
                <p className="text-blue-800/90">
                  Yes, our privacy policy generator includes <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> requirements for EU/UK visitors and <Link href="/ccpa-privacy-policy-example" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    CCPA
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> requirements for California residents, making it suitable for international websites.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Do I need a separate cookie policy?</h3>
                <p className="text-blue-800/90">
                  While you can include cookie information in your privacy policy, many websites benefit from a dedicated <Link href="/cookie-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    cookie policy page
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> for better user clarity and GDPR compliance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Resources Section - Enhanced Design */}
        <div className="border-t border-blue-200/50 pt-8 mt-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/cookie-policy-for-websites" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Cookie Policy for Websites</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">Understand cookie requirements and compliance</p>
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
            <Link href="/gdpr-privacy-policy-template" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <ShieldCheck className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">GDPR Privacy Policy Template</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">EU compliance guide and template structure</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/ccpa-privacy-policy-example" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <ShieldCheck className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">CCPA Privacy Policy Example</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">California privacy rights and disclosures</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/chatgpt-privacy-policy-risks" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <AlertTriangle className="w-5 h-5 text-red-600 group-hover:text-red-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">ChatGPT Privacy Policy Risks</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">Why generic AI-generated policies fail</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/free-vs-paid-privacy-policy-generator" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Free vs Paid Generator</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">Compare free tools vs structured solutions</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
