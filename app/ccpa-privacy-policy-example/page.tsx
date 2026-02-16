import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, FileText, AlertTriangle, CheckCircle, ArrowRight, HelpCircle, ArrowUpRight } from "lucide-react";
import SeoIntro from "@/components/SeoIntro";

export const metadata = {
  title: "CCPA Privacy Policy Example California Consumer Privacy Rights | ultrafastutilities",
  description: "Get a CCPA/CPRA-compliant privacy policy example. Understand California privacy rights, required disclosures, and example structure. Generate your full policy for $4.99.",
  keywords: "CCPA privacy policy, CPRA privacy policy, California privacy policy, CCPA compliance, California privacy rights",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CCPAPrivacyPolicyExamplePage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SeoIntro
          title="CCPA Privacy Policy Example"
          description="Learn requirements and generate a compliant policy using our tool."
          audience="site owners and developers"
        />

        {/* Quick Links Section - Top of Page */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <Link href="/privacy-policy-for-saas" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-3 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Privacy Policy for SaaS</h3>
                      <p className="text-sm text-blue-700/70 mt-1">SaaS platform compliance</p>
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

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <CardTitle className="text-2xl text-blue-900 pb-2">California Privacy Rights</CardTitle>
            </div>
            <CardDescription className="text-base text-blue-800/80">
              The California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) grant California residents specific rights regarding their personal information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Who Must Comply</h3>
                <p className="text-blue-800/90">
                  CCPA/CPRA applies to businesses that:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Have annual gross revenue exceeding $25 million, OR</li>
                  <li>Buy, sell, or share personal information of 100,000+ California residents/households, OR</li>
                  <li>Derive 50%+ of annual revenue from selling or sharing personal information</li>
                </ul>
                <p className="text-blue-800/90 mt-2 text-sm">
                  Even businesses below these thresholds may need to provide CCPA-style disclosures when handling California user data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Required Disclosures</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-blue-900/90 mb-4">
                CCPA/CPRA requires specific disclosures in your <Link href="/privacy-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                  privacy policy
                  <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>:
              </p>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Categories of Personal Information Collected</h3>
                  <p className="text-blue-800/90">
                    Disclose what types of personal information you collect (identifiers, commercial information, internet activity, geolocation, etc.)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Sources of Personal Information</h3>
                  <p className="text-blue-800/90">
                    Explain where you collect information from (directly from users, <Link href="/privacy-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                      third party services
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>, <Link href="/cookie-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                      cookies
                      <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>, etc.)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Business or Commercial Purpose</h3>
                  <p className="text-blue-800/90">
                    Explain why you collect and use personal information (service delivery, marketing, analytics, etc.)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Third Party Sharing</h3>
                  <p className="text-blue-800/90">
                    Disclose if you sell or share personal information with third parties (advertising networks, analytics providers, etc.)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Example Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-blue-900/90 mb-4">
                This page provides an example structure for educational purposes. A complete <Link href="/privacy-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                  CCPA privacy policy
                  <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link> must be customized to reflect your specific data practices and disclosures.
              </p>
              <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-200/50">
                <h3 className="font-semibold text-blue-900 mb-2">Additional Rights for California Residents (CCPA / CPRA)</h3>
                <p className="text-blue-800/90 text-sm mb-2">
                  If you are a California resident, you have the following additional rights:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 text-sm ml-4">
                  <li><strong>Right to Know:</strong> You have the right to request that we disclose what personal information we collect, use, disclose, and sell or share about you.</li>
                  <li><strong>Right to Delete:</strong> You have the right to request that we delete your personal information, subject to certain exceptions (e.g., transaction records, legal compliance).</li>
                  <li><strong>Right to Correct:</strong> You have the right to request that we correct inaccurate personal information.</li>
                  <li><strong>Right to Opt Out of Sale or Sharing:</strong> You have the right to opt out of the sale or sharing of your personal information. If we sell or share personal information, we will provide a "Do Not Sell or Share My Personal Information" link.</li>
                  <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA/CPRA rights.</li>
                  <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> You have the right to limit how we use sensitive personal information (under CPRA).</li>
                </ul>
                <p className="text-blue-800/90 text-sm mt-2">
                  To exercise these rights, contact us at [email] or use our online request form. We will verify your identity and respond within the timeframes required by CCPA/CPRA (generally within 45 days). You may designate an authorized agent to make requests on your behalf.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <Link href="/generate">
            <Button size="lg" className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30">
              Generate Full CCPA Privacy Policy $4.99
            </Button>
          </Link>
          <p className="text-sm font-medium text-blue-700/90 mt-3">
            Free preview • One time payment • Customized for your business
          </p>
          <p className="text-xs text-blue-600/70 mt-2 max-w-2xl mx-auto">
            Structured around widely accepted <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
              GDPR
              <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link> and CCPA requirements. Not legal advice.
          </p>
        </div>

        {/* Related Resources Section - Enhanced Design */}
        <div className="border-t border-blue-200/50 pt-8 mt-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <Link href="/privacy-policy-for-saas" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Privacy Policy for SaaS</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">SaaS platform compliance</p>
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
