import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent pb-3">
            Contact Us
          </h1>
          <p className="text-lg text-blue-800/90">
            We're here to help. Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-blue-900">Email Support</CardTitle>
              <CardDescription className="text-blue-800/80">
                Send us an email and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:support@ultrafastutilities.com" className="text-blue-600 hover:text-blue-800 font-medium">
                support@ultrafastutilities.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-blue-900">General Inquiries</CardTitle>
              <CardDescription className="text-blue-800/80">
                Have questions about our services? We're happy to help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:info@ultrafastutilities.com" className="text-blue-600 hover:text-blue-800 font-medium">
                info@ultrafastutilities.com
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900">Frequently Asked Questions</CardTitle>
            <CardDescription className="text-blue-800/80">
              Quick answers to common questions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">How long does it take to generate a policy?</h3>
              <p className="text-blue-800/80 text-sm">Our generator creates your policies instantly after you answer a few simple questions—usually in under 2 minutes.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Is my data secure?</h3>
              <p className="text-blue-800/80 text-sm">Yes, we take data security seriously. All information is processed securely and we don't store your personal data after generation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Can I edit the generated policies?</h3>
              <p className="text-blue-800/80 text-sm">Absolutely! The generated policies are provided as text that you can copy, download, and customize to fit your specific needs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Do you provide legal advice?</h3>
              <p className="text-blue-800/80 text-sm">No, we provide document templates. For legal advice specific to your situation, please consult with a qualified attorney.</p>
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
