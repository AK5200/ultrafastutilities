import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, MessageSquare, Clock, HelpCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Support & Inquiries | ultrafastutilities",
  description: "Get in touch with the ultrafastutilities team for support and general inquiries. We're here to help with your privacy policy needs.",
  alternates: {
    canonical: "https://ultrafastutilities.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Header */}
      <div className="border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Get in Touch
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Get in touch with the ultrafastutilities team for support and general inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email Support */}
          <div className="rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Email Support</h2>
              <p className="text-sm text-slate-500 mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:support@ultrafastutilities.com"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                support@ultrafastutilities.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* General Inquiries */}
          <div className="rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">General Inquiries</h2>
              <p className="text-sm text-slate-500 mb-4">
                Have questions about our services? We're happy to help.
              </p>
              <a
                href="mailto:info@ultrafastutilities.com"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                info@ultrafastutilities.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Response Time Banner */}
        <div className="mb-8 rounded-xl border border-blue-200/80 bg-gradient-to-r from-blue-50 to-slate-50 p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">
                Quick Response Time
              </p>
              <p className="text-xs text-slate-600">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 overflow-hidden">
          <div className="border-b border-slate-200/60 px-5 sm:px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
                <p className="text-sm text-slate-500">Quick answers to common questions</p>
              </div>
            </div>
          </div>

          <div className="px-5 sm:px-8 py-6 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                How long does it take to generate a policy?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Our generator creates your policies instantly after you answer a few simple questions—usually in under 2 minutes.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Is my data secure?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Yes, we take data security seriously. All information is processed securely and we don't store your personal data after generation.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Can I edit the generated policies?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Absolutely! The generated policies are provided as text that you can copy, download, and customize to fit your specific needs.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Do you provide legal advice?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                No, we provide document templates. For legal advice specific to your situation, please consult with a qualified attorney.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link href="/generate">
            <Button className="h-11 px-8 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm">
              Generate Your Policy Now
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
