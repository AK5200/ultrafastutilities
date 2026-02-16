import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, CheckCircle, X, FileText, ArrowRight, HelpCircle, ArrowUpRight } from "lucide-react";
import SeoIntro from "@/components/SeoIntro";

export const metadata = {
  title: "Free vs Paid Privacy Policy Generator What You're Really Trading Off | ultrafastutilities",
  description: "Compare free and paid privacy policy generators. Understand tradeoffs of free tools and value of structured documents. Generate compliant policies for $4.99.",
  keywords: "free privacy policy generator, paid privacy policy generator, privacy policy generator comparison, free vs paid",
  robots: {
    index: true,
    follow: true,
  },
};

export default function FreeVsPaidPrivacyPolicyGeneratorPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SeoIntro
          title="Free vs Paid Privacy Policy Generator"
          description="Learn requirements and generate a compliant policy using our tool."
          audience="site owners and developers"
        />

        {/* Quick Links Section - Top of Page */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/chatgpt-privacy-policy-risks" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-3 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">ChatGPT Privacy Policy Risks</h3>
                      <p className="text-sm text-blue-700/70 mt-1">AI policy limitations</p>
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

        {/* Clarification Paragraph */}
        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardContent className="p-6">
            <p className="text-blue-900/90">
              Free <Link href="/privacy-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                privacy policy generators
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link> can be useful for understanding basic concepts. The differences become important when you need jurisdiction-specific disclosures and publish-ready documents.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-900 pb-2">Tradeoffs of Free Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Generic and Vague Content</h3>
                  <p className="text-red-800/90">
                    Free generators produce <Link href="/chatgpt-privacy-policy-risks" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      generic templates
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> with vague terms like "analytics services" instead of naming specific services (Google Analytics, Stripe). This creates compliance gaps.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Missing Compliance Sections</h3>
                  <p className="text-red-800/90">
                    Free tools often omit critical sections like <Link href="/gdpr-privacy-policy-template" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> lawful basis, <Link href="/ccpa-privacy-policy-example" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      CCPA/CPRA
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> rights, data retention periods, and international data transfer safeguards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">No Cookie Classification</h3>
                  <p className="text-red-800/90">
                    Free generators don't properly categorize <Link href="/cookie-policy-for-websites" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      cookies
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> (necessary, analytics, marketing, functional) or explain their purpose and duration, failing <Link href="/gdpr-privacy-policy-template" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Incomplete User Rights Procedures</h3>
                  <p className="text-red-800/90">
                    Free tools list user rights but don't explain how to exercise them (contact method, verification, response timeline), creating legal risk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">No Data Controller/Processor Clarity</h3>
                  <p className="text-red-800/90">
                    Free generators don't distinguish between data controller and processor roles, which is required for <Link href="/gdpr-privacy-policy-template" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> compliance, especially for <Link href="/privacy-policy-for-saas" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                      SaaS platforms
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Hidden Costs and Limitations</h3>
                  <p className="text-red-800/90">
                    Free tools often require manual review, legal consultation, or additional paid features to achieve compliance, making them more expensive in the long run.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Value of Structured Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-blue-900/90 mb-4">
                Paid generators focus less on wording and more on including the correct sections and disclosures required by law.
              </p>
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
                    </Link> sections based on your business location and target audience, reducing compliance risk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Named Third Party Services</h3>
                  <p className="text-blue-800/90">
                    Structured documents include specific examples (Google Analytics, Stripe, Dodo, Cloudflare) instead of vague references, meeting <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link> transparency requirements.
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
                    </Link> (necessary, analytics, marketing, functional) with purpose, duration, and examples, enabling <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                      GDPR
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>-compliant consent.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Data Retention Disclosures</h3>
                  <p className="text-blue-800/90">
                    Structured documents include specific retention timeframes for different data types (account data, transaction data, marketing data, logs), meeting <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
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
                    Structured documents provide clear contact methods, verification requirements, and response timelines for exercising rights, reducing legal risk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Ready to Publish</h3>
                  <p className="text-blue-800/90">
                    Structured documents are professionally formatted and ready to publish immediately, saving time and reducing the need for expensive legal review.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <Link href="/generate">
            <Button size="lg" className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30">
              Generate Structured Privacy Policy $4.99
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
            <Link href="/chatgpt-privacy-policy-risks" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">ChatGPT Privacy Policy Risks</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">AI policy limitations and risks</p>
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
