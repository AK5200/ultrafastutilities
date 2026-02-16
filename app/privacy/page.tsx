import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SeoIntro from "@/components/SeoIntro";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <SeoIntro
        title="Privacy Policy"
        description="How ultrafastutilities collects, uses, and protects your personal information."
      />

      <div className="relative max-w-4xl mx-auto">

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">ultrafastutilities Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-blue-900/90">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">1. Introduction</h2>
              <p className="text-sm leading-relaxed">
                Welcome to ultrafastutilities. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">2. Information We Collect</h2>
              <p className="text-sm leading-relaxed mb-2">
                We collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Information you provide when using our policy generator (website URL, business details, etc.)</li>
                <li>Payment information processed securely through our payment provider (Dodo)</li>
                <li>Technical data such as IP address, browser type, and device information</li>
                <li>Usage data about how you interact with our service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">3. How We Use Your Information</h2>
              <p className="text-sm leading-relaxed mb-2">
                We use your information to:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Generate personalized privacy policies, terms of service, and cookie policies</li>
                <li>Process payments and manage your account</li>
                <li>Improve our service and user experience</li>
                <li>Communicate with you about your account and our services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">4. Data Storage and Security</h2>
              <p className="text-sm leading-relaxed">
                We store your form data locally in your browser (localStorage) and do not transmit it to our servers 
                except when generating your policies. Payment information is handled securely by Dodo, our payment processor. 
                We implement appropriate technical and organizational measures to protect your data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">5. Third-Party Services</h2>
              <p className="text-sm leading-relaxed mb-2">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li><strong>Dodo:</strong> Payment processing (privacy policy: <a href="https://docs.dodopayments.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">docs.dodopayments.com/privacy</a>)</li>
                <li><strong>Google Analytics:</strong> Website analytics (if enabled)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">6. Your Rights</h2>
              <p className="text-sm leading-relaxed mb-2">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">7. Cookies</h2>
              <p className="text-sm leading-relaxed">
                We use essential cookies to maintain your session and preferences. We do not use tracking cookies 
                for advertising purposes. You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">8. Data Retention</h2>
              <p className="text-sm leading-relaxed">
                We retain your form data only as long as necessary to provide our service. Since data is stored 
                locally in your browser, you can clear it at any time by clearing your browser's localStorage.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">9. Children's Privacy</h2>
              <p className="text-sm leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">10. Changes to This Policy</h2>
              <p className="text-sm leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by 
                posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-900">11. Contact Us</h2>
              <p className="text-sm leading-relaxed">
                If you have questions about this privacy policy, please contact us at: 
                <a href="mailto:support@ultrafastutilities.com" className="text-blue-600 hover:underline ml-1">
                  support@ultrafastutilities.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/generate">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30">
              Generate Your Policy Now
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
