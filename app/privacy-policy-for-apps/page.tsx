import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, Smartphone, AlertTriangle, CheckCircle, FileText, ArrowRight, HelpCircle, ArrowUpRight } from "lucide-react";
import SeoIntro from "@/components/SeoIntro";

export const metadata = {
  title: "Privacy Policy for Mobile Apps (iOS & Android) GDPR & CCPA | ultrafastutilities",
  description: "Create a privacy policy for your mobile app. Meet App Store and Play Store requirements. Get GDPR & CCPA-ready documents for iOS and Android apps.",
  keywords: "privacy policy for apps, mobile app privacy policy, iOS privacy policy, Android privacy policy, app store privacy policy",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyForAppsPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SeoIntro
          title="Privacy Policy for Mobile Apps"
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
              <Smartphone className="w-8 h-8 text-blue-600" />
              <CardTitle className="text-2xl text-blue-900 pb-2">Why Apps Require Privacy Policies</CardTitle>
            </div>
            <CardDescription className="text-base text-blue-800/80">
              Mobile apps collect a significant amount of personal data, from device identifiers to location data, making privacy policies not just recommended but legally required under <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                GDPR
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link> and <Link href="/ccpa-privacy-policy-example" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                CCPA
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link> regulations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-900/90 mb-4">
              Mobile apps typically collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-blue-800/90 mb-4">
              <li>Device identifiers (UDID, advertising IDs)</li>
              <li>Location data (GPS, network-based)</li>
              <li>User account information (email, username, profile data)</li>
              <li>In-app purchase and payment data</li>
              <li>Analytics and crash reporting data</li>
              <li>Push notification tokens</li>
              <li>Camera, microphone, and photo library access</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">App Store and Play Store Expectations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-800/90 font-semibold mb-4">
              Apps without clear and compliant privacy policies risk rejection or removal from app stores.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Apple App Store Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Privacy policy URL must be provided during app submission</li>
                  <li>Must disclose all data collection practices</li>
                  <li>Must explain how data is used and shared</li>
                  <li>Must comply with App Tracking Transparency (ATT) framework</li>
                  <li>Must disclose third party SDKs and their data practices</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Google Play Store Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Privacy policy URL required in Play Console</li>
                  <li>Must be accessible without requiring user registration</li>
                  <li>Must disclose data collection, sharing, and security practices</li>
                  <li>Must comply with Google Play's Data Safety section requirements</li>
                  <li>Must explain permissions requested by the app</li>
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
              </Link> and <Link href="/ccpa-privacy-policy-example" className="hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                CCPA
                <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Link> Implications for Apps
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
                  </Link> Compliance for Apps
                </h3>
                <p className="text-blue-800/90 mb-2">
                  If your app has users in the EU or UK, you must comply with <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> requirements:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Obtain consent where required and clearly explain the lawful basis for processing personal data</li>
                  <li>Explain lawful basis for processing (consent, contractual necessity)</li>
                  <li>Provide clear opt out mechanisms</li>
                  <li>Allow data portability and deletion requests</li>
                  <li>Disclose international data transfers and safeguards</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  <Link href="/ccpa-privacy-policy-example" className="hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    CCPA/CPRA
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> Compliance for Apps
                </h3>
                <p className="text-blue-800/90 mb-2">
                  If your app has California users, you must comply with <Link href="/ccpa-privacy-policy-example" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    CCPA/CPRA
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> requirements:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Disclose what personal information is collected</li>
                  <li>Allow users to opt out of sale or sharing of data</li>
                  <li>Provide a "Do Not Sell My Personal Information" link</li>
                  <li>Respond to deletion requests within 45 days</li>
                  <li>Not discriminate against users who exercise their rights</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <CardTitle className="text-2xl text-red-900 pb-2">Common Mistakes Developers Make</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Using Generic Templates</h3>
                <p className="text-red-800/90">
                  Copy-pasting a generic privacy policy without customizing it for your app's specific data collection practices can lead to compliance violations and app store rejections. This is especially common with generic <Link href="/chatgpt-privacy-policy-risks" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                    AI-generated policies
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Not Disclosing Third Party SDKs</h3>
                <p className="text-red-800/90">
                  Failing to mention analytics SDKs (Firebase, Mixpanel), advertising SDKs (Google Ads, Facebook Audience Network), or payment processors (Stripe, Apple Pay) creates legal risk.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Vague Permission Explanations</h3>
                <p className="text-red-800/90">
                  Simply stating "we collect location data" isn't enough. You must explain why (navigation, local recommendations) and how long it's retained.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-red-900 mb-2">Missing Data Retention Policies</h3>
                <p className="text-red-800/90">
                  Not specifying how long you retain user data violates <Link href="/gdpr-privacy-policy-template" className="font-semibold text-red-900 hover:text-red-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> requirements and can lead to regulatory fines.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <Link href="/generate">
            <Button size="lg" className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30">
              Generate My App Privacy Policy $4.99
            </Button>
          </Link>
          <p className="text-sm font-medium text-blue-700/90 mt-3">
            Free preview • One time payment • App Store & Play Store ready
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
                <h3 className="font-semibold text-blue-900 mb-2">Is a privacy policy required to publish an app on the App Store or Play Store?</h3>
                <p className="text-blue-800/90">
                  Yes, both Apple App Store and Google Play Store require a privacy policy URL during app submission. Apps without a compliant privacy policy will be rejected or removed from the stores.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Does this work for both iOS and Android apps?</h3>
                <p className="text-blue-800/90">
                  Yes, our privacy policy generator creates policies that meet the requirements for both iOS (App Store) and Android (Play Store) apps, including compliance with <Link href="/gdpr-privacy-policy-template" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    GDPR
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> and <Link href="/ccpa-privacy-policy-example" className="font-semibold text-blue-900 hover:text-blue-700 transition-colors relative inline-block pr-2.5 group">
                    CCPA
                    <ArrowUpRight className="w-2.5 h-2.5 absolute top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link> regulations.
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
