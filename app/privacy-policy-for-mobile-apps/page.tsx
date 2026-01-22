import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, Smartphone, AlertTriangle, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Privacy Policy for Mobile Apps - iOS & Android App Store Ready | ultrafastutilities",
  description: "Create a privacy policy for your mobile app. Meet Apple App Store and Google Play Store requirements. Cover permissions, tracking, GDPR, and CCPA compliance.",
  keywords: "privacy policy for mobile apps, iOS privacy policy, Android privacy policy, app store privacy policy, mobile app GDPR",
};

export default function PrivacyPolicyForMobileAppsPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent pb-3">
            Privacy Policy for Mobile Apps
          </h1>
          <p className="text-lg text-blue-800/90">
            Create a compliant privacy policy for iOS and Android mobile apps
          </p>
        </div>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <CardTitle className="text-2xl text-blue-900 pb-2">Permissions and Tracking</CardTitle>
            </div>
            <CardDescription className="text-base text-blue-800/80">
              Mobile apps request various permissions and track user behavior, requiring comprehensive privacy disclosures.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Device Permissions</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Location data (GPS, network-based, precise/approximate)</li>
                  <li>Camera and photo library access</li>
                  <li>Microphone access</li>
                  <li>Contacts and calendar access</li>
                  <li>Push notifications and device tokens</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Device Identifiers</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Advertising IDs (IDFA on iOS, GAID on Android)</li>
                  <li>Device IDs and hardware identifiers</li>
                  <li>Installation IDs and app instance IDs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Usage and Analytics</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>App usage patterns and feature interactions</li>
                  <li>Crash reports and error logs</li>
                  <li>Performance metrics and session data</li>
                  <li>In-app purchase and subscription data</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Apple and Google Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Apple App Store Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Privacy policy URL required during app submission</li>
                  <li>Must disclose all data collection practices</li>
                  <li>App Tracking Transparency (ATT) framework compliance</li>
                  <li>Third-party SDK disclosure (analytics, advertising, payment)</li>
                  <li>Data use explanations for each permission requested</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Google Play Store Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Privacy policy URL required in Play Console</li>
                  <li>Must be accessible without user registration</li>
                  <li>Data Safety section compliance (data collection, sharing, security)</li>
                  <li>Permission explanations and data use disclosures</li>
                  <li>Third-party service disclosure (SDKs, analytics, advertising)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">GDPR and CCPA Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  GDPR Compliance for Mobile Apps
                </h3>
                <p className="text-blue-800/90 mb-2">
                  EU/UK users require:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Explicit consent before collecting personal data</li>
                  <li>Lawful basis disclosure (consent, contractual necessity)</li>
                  <li>Clear opt-out mechanisms for tracking</li>
                  <li>Data portability and deletion rights</li>
                  <li>International data transfer safeguards</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  CCPA/CPRA Compliance for Mobile Apps
                </h3>
                <p className="text-blue-800/90 mb-2">
                  California users require:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of sale or sharing (advertising IDs, location data)</li>
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
              Generate My Mobile App Privacy Policy – $4.99
            </Button>
          </Link>
          <p className="text-sm text-blue-700/80 mt-4">
            One time payment. Instant access. No subscription.
          </p>
        </div>

        <div className="border-t border-blue-200/50 pt-8 mt-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Related Resources</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy-for-apps" className="text-blue-600 hover:text-blue-800 underline">
              Privacy Policy for Apps
            </Link>
            <Link href="/gdpr-privacy-policy-template" className="text-blue-600 hover:text-blue-800 underline">
              GDPR Privacy Policy Template
            </Link>
            <Link href="/ccpa-privacy-policy-example" className="text-blue-600 hover:text-blue-800 underline">
              CCPA Privacy Policy Example
            </Link>
            <Link href="/generate" className="text-blue-600 hover:text-blue-800 underline">
              Policy Generator
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
