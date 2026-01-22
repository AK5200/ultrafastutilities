import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, Cookie, AlertTriangle, CheckCircle, FileText, ArrowRight, HelpCircle, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Cookie Policy for Websites GDPR Cookie Requirements | ultrafastutilities",
  description: "Create a compliant cookie policy for your website. Understand cookie categories, GDPR consent requirements, and EU cookie rules. Generate your policy for $4.99.",
  keywords: "cookie policy, cookie policy for websites, GDPR cookies, EU cookie law, cookie consent, cookie policy generator",
  robots: "index, follow",
};

export default function CookiePolicyForWebsitesPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent pb-3">
            Cookie Policy for Websites
          </h1>
          <p className="text-lg text-blue-800/90">
            Everything you need to know about creating a compliant cookie policy
          </p>
        </div>

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
              <Cookie className="w-8 h-8 text-blue-600" />
              <CardTitle className="text-2xl text-blue-900 pb-2">What is a Cookie Policy?</CardTitle>
            </div>
            <CardDescription className="text-base text-blue-800/80">
              A cookie policy is a document that explains what cookies your website uses, why you use them, and how users can manage or disable them.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-900/90 mb-4">
              Cookies are small text files stored on a user's device when they visit a website. They serve various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-blue-800/90">
              <li>Remembering user preferences and login sessions</li>
              <li>Tracking website analytics and user behavior</li>
              <li>Enabling advertising and marketing campaigns</li>
              <li>Improving website functionality and performance</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Cookie Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Strictly Necessary Cookies
                </h3>
                <p className="text-blue-800/90 mb-2">
                  These cookies are essential for the website to function properly. They enable core features like user authentication, security, and shopping cart functionality.
                </p>
                <p className="text-sm text-blue-700/80">
                  <strong>Examples:</strong> Session cookies, authentication tokens, security cookies
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Analytics Cookies
                </h3>
                <p className="text-blue-800/90 mb-2">
                  These cookies help website owners understand how visitors interact with their site by collecting and reporting information anonymously.
                </p>
                <p className="text-sm text-blue-700/80">
                  <strong>Examples:</strong> Google Analytics, Adobe Analytics, Mixpanel
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Marketing/Advertising Cookies
                </h3>
                <p className="text-blue-800/90 mb-2">
                  These cookies track users across websites to build a profile of their interests and show relevant advertisements.
                </p>
                <p className="text-sm text-blue-700/80">
                  <strong>Examples:</strong> Google Ads, Facebook Pixel, LinkedIn Insight Tag
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Functional Cookies
                </h3>
                <p className="text-blue-800/90 mb-2">
                  These cookies enable enhanced functionality and personalization, such as remembering language preferences or video player settings.
                </p>
                <p className="text-sm text-blue-700/80">
                  <strong>Examples:</strong> Language preferences, video player settings, chat widget preferences
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Consent Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-blue-900/90">
                Under <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                  GDPR
                  <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link> and EU cookie law (ePrivacy Directive), you must obtain user consent before placing non-essential cookies on their device.
              </p>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">What Consent Must Include:</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Clear explanation of what cookies are used and why</li>
                  <li>Option to accept or reject non-essential cookies</li>
                  <li>Granular control (users should be able to accept some categories and reject others)</li>
                  <li>Easy way to withdraw consent at any time</li>
                  <li>No pre-checked boxes (consent must be active, not passive)</li>
                </ul>
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
              </Link> and EU Cookie Rules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  ePrivacy Directive (EU Cookie Law)
                </h3>
                <p className="text-blue-800/90">
                  The ePrivacy Directive requires websites to obtain user consent before storing or accessing information on a user's device (including cookies), except for strictly necessary cookies.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <Link href="/gdpr-privacy-policy-template" className="hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> Requirements
                </h3>
                <p className="text-blue-800/90 mb-2">
                  Under <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>, cookie data that can identify users is considered personal data, requiring:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Lawful basis for processing (consent for non-essential cookies)</li>
                  <li>Transparency about what data is collected</li>
                  <li>User rights (access, deletion, portability)</li>
                  <li>Data retention periods</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <CardTitle className="text-2xl text-red-900 pb-2">Why Generic Cookie Text Fails</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Vague Cookie Descriptions</h3>
                <p className="text-red-800/90">
                  Generic statements like "we use cookies for analytics and advertising" don't meet <Link href="/gdpr-privacy-policy-template" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> requirements. You must name specific services (Google Analytics, Facebook Pixel) and explain their purpose.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Missing Cookie Categories</h3>
                <p className="text-red-800/90">
                  Failing to properly categorize cookies (necessary, analytics, marketing, functional) makes it impossible for users to give informed consent.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">No Duration Information</h3>
                <p className="text-red-800/90">
                  Users need to know how long cookies persist (session cookies vs. persistent cookies with expiration dates).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Third Party Cookie Disclosure</h3>
                <p className="text-red-800/90">
                  Not clearly explaining which third party services set cookies (Google Analytics, payment processors, CDN providers) creates compliance gaps.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <Link href="/generate">
            <Button size="lg" className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30">
              Generate My Cookie Policy $4.99
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
                <h3 className="font-semibold text-blue-900 mb-2">Is a cookie policy legally required for websites?</h3>
                <p className="text-blue-800/90">
                  Yes, if your website uses cookies (especially non-essential cookies like analytics or advertising), you're legally required to have a cookie policy under <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> and EU cookie law (ePrivacy Directive).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Do I need a separate cookie policy if I already have a privacy policy?</h3>
                <p className="text-blue-800/90">
                  While you can include cookie information in your <Link href="/privacy-policy-for-websites" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    privacy policy
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>, many websites benefit from a dedicated cookie policy page for better user clarity and GDPR compliance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">What happens if I don't comply with cookie consent requirements?</h3>
                <p className="text-blue-800/90">
                  Non-compliance with GDPR cookie requirements can result in regulatory fines up to 4% of annual revenue or €20 million, whichever is higher. Additionally, users may file complaints with data protection authorities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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
            <Link href="/privacy-policy-for-ecommerce" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <FileText className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">Privacy Policy for Ecommerce</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">Ecommerce store compliance</p>
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
