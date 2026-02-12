import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, X, CheckCircle, FileText, ArrowRight, HelpCircle, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "ChatGPT Privacy Policy Risks Why Generic AI Policies Fall Short | ultrafastutilities",
  description: "Understand the limitations and risks of using ChatGPT or generic AI to generate privacy policies. Learn about compliance gaps and why structured documents are essential.",
  keywords: "ChatGPT privacy policy risks, AI privacy policy risks, generic privacy policy problems, privacy policy compliance",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChatGPTPrivacyPolicyRisksPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent pb-3">
            ChatGPT Privacy Policy Risks
          </h1>
          <p className="text-lg text-blue-800/90">
            Why generic AI-generated privacy policies create compliance gaps and legal risks
          </p>
        </div>

        {/* Quick Links Section - Top of Page */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/free-vs-paid-privacy-policy-generator" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-3 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Free vs Paid Generator</h3>
                      <p className="text-sm text-blue-700/70 mt-1">Compare options</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/privacy-policy-for-websites" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-3 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Privacy Policy for Websites</h3>
                      <p className="text-sm text-blue-700/70 mt-1">Website compliance guide</p>
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

        <Card className="border-2 border-red-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <CardTitle className="text-2xl text-red-900 pb-2">Limitations of Generic AI</CardTitle>
            </div>
            <CardDescription className="text-base text-red-800/80">
              ChatGPT and similar AI tools generate generic text that often misses critical compliance requirements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-900/90 mb-4">
              AI tools like ChatGPT can be helpful for drafting text, but <Link href="/privacy-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                privacy policies
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link> require jurisdiction-specific structure and disclosures that generic outputs often miss.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Missing Jurisdiction-Specific Sections</h3>
                  <p className="text-red-800/90">
                    Generic AI often produces a one-size-fits-all policy that doesn't include specific <Link href="/gdpr-privacy-policy-template" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> lawful basis disclosures, <Link href="/ccpa-privacy-policy-example" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      CCPA/CPRA
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> rights sections, or jurisdiction-aware content. This creates compliance gaps for EU/UK and California users.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Vague Third Party Disclosures</h3>
                  <p className="text-red-800/90">
                    AI-generated policies use generic terms like "analytics services" or "payment processors" instead of naming specific services (Google Analytics, Stripe, Dodo, Cloudflare). This violates <Link href="/gdpr-privacy-policy-template" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> transparency requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Incomplete Cookie Classifications</h3>
                  <p className="text-red-800/90">
                    Generic AI doesn't properly categorize <Link href="/cookie-policy-for-websites" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      cookies
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> (strictly necessary, analytics, marketing, functional) or explain their purpose and duration. This fails <Link href="/gdpr-privacy-policy-template" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> cookie consent requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Missing Data Retention Periods</h3>
                  <p className="text-red-800/90">
                    AI-generated policies often omit specific data retention timeframes (account data, transaction data, marketing data, logs). <Link href="/gdpr-privacy-policy-template" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> requires clear retention periods.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">No Data Controller/Processor Clarity</h3>
                  <p className="text-red-800/90">
                    Generic policies don't clearly distinguish between data controller and processor roles, which is required for <Link href="/gdpr-privacy-policy-template" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> compliance, especially for <Link href="/privacy-policy-for-saas" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      SaaS platforms
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-900 pb-2">Compliance Gaps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-red-900 mb-2"><Link href="/gdpr-privacy-policy-template" className="hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                  GDPR
                  <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link> Violations</h3>
                <ul className="list-disc list-inside space-y-1 text-red-800/90 ml-4">
                  <li>Missing lawful basis disclosures (consent, contractual necessity, legitimate interests)</li>
                  <li>No international data transfer safeguards (Standard Contractual Clauses)</li>
                  <li>Incomplete user rights procedures (no contact method, verification process, response timeline)</li>
                  <li>Lack of supervisory authority information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2"><Link href="/ccpa-privacy-policy-example" className="hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                  CCPA/CPRA
                  <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link> Violations</h3>
                <ul className="list-disc list-inside space-y-1 text-red-800/90 ml-4">
                  <li>Missing "Do Not Sell or Share My Personal Information" disclosure</li>
                  <li>No opt-out mechanism for sale or sharing of data</li>
                  <li>Incomplete categories of personal information collected</li>
                  <li>No non-discrimination clause</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Why <Link href="/free-vs-paid-privacy-policy-generator" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
              Structured Documents
              <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link> Are Essential</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Jurisdiction-Aware Sections</h3>
                  <p className="text-blue-800/90">
                    Structured documents automatically include <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> and <Link href="/ccpa-privacy-policy-example" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                      CCPA/CPRA
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> sections based on your business location and target audience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Named Third Party Services</h3>
                  <p className="text-blue-800/90">
                    Structured documents include specific examples (Google Analytics, Stripe, Dodo, Cloudflare) instead of vague references.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Proper Cookie Classification</h3>
                  <p className="text-blue-800/90">
                    Structured documents categorize <Link href="/cookie-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                      cookies
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> (necessary, analytics, marketing, functional) with purpose, duration, and examples.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Data Retention Disclosures</h3>
                  <p className="text-blue-800/90">
                    Structured documents include specific retention timeframes for different data types, meeting <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">User Rights Procedures</h3>
                  <p className="text-blue-800/90">
                    Structured documents provide clear contact methods, verification requirements, and response timelines for exercising rights.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <Link href="/generate">
            <Button size="lg" className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30">
              Generate Compliant Privacy Policy $4.99
            </Button>
          </Link>
          <p className="text-sm font-medium text-blue-700/90 mt-3">
            Free preview • One time payment • Structured for GDPR & CCPA
          </p>
          <p className="text-xs text-blue-600/70 mt-2 max-w-2xl mx-auto">
            Structured around widely accepted <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
              GDPR
              <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link> and <Link href="/ccpa-privacy-policy-example" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
              CCPA
              <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link> requirements. Not legal advice.
          </p>
        </div>

        {/* Related Resources Section - Enhanced Design */}
        <div className="border-t border-blue-200/50 pt-8 mt-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/free-vs-paid-privacy-policy-generator" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Free vs Paid Privacy Policy Generator</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">Compare free tools vs structured solutions</p>
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
