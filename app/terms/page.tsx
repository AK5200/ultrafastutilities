import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { ShieldCheck, FileText, RefreshCw, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service, Privacy Policy & Refund Policy | ultrafastutilities",
  description: "Terms of Service, Privacy Policy, and Refund Policy for ultrafastutilities. All policies in one place for Dodo verification.",
  alternates: {
    canonical: "https://ultrafastutilities.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const effectiveDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const businessName = "ultrafastutilities";
  const contactEmail = "anuformal@gmail.com";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Header */}
      <div className="border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Legal Documents
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Terms of Service, Privacy Policy & Refund Policy
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Review the terms, privacy practices, and refund policy for ultrafastutilities.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Quick Navigation */}
        <div className="mb-8 flex flex-wrap gap-3">
          <a href="#terms" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-sm text-slate-700 transition-colors">
            <FileText className="w-4 h-4" />
            Terms of Service
          </a>
          <a href="#privacy" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-sm text-slate-700 transition-colors">
            <ShieldCheck className="w-4 h-4" />
            Privacy Policy
          </a>
          <a href="#refund" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-sm text-slate-700 transition-colors">
            <RefreshCw className="w-4 h-4" />
            Refund Policy
          </a>
        </div>

        {/* Terms of Service Section */}
        <div id="terms" className="mb-12 rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 overflow-hidden">
          <div className="border-b border-slate-200/60 px-5 sm:px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Terms of Service</h2>
                <p className="text-xs sm:text-sm text-slate-500">Last updated: {effectiveDate}</p>
              </div>
            </div>
          </div>

          <div className="px-5 sm:px-8 py-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">1. Acceptance of Terms</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                By accessing and using {businessName} (the "Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this Service.
              </p>
              <p className="text-sm leading-relaxed mt-2 text-slate-700">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and {businessName} ("we," "our," or "us"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">2. Description of Service</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                {businessName} provides an automated document generation service that creates privacy policies, terms of service, and cookie policies based on information you provide. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice.
              </p>
              <div className="mt-3 pl-4 border-l-2 border-slate-200">
                <h4 className="text-base font-semibold mb-2 text-slate-900">2.1 Digital Document Purchase</h4>
                <p className="text-sm leading-relaxed text-slate-700">
                  When you purchase digital documents through our Service, you are purchasing a license to use the generated documents for your business purposes. The documents are provided as digital files that you can download, modify, and use in accordance with these Terms.
                </p>
              </div>
              <div className="mt-3 pl-4 border-l-2 border-slate-200">
                <h4 className="text-base font-semibold mb-2 text-slate-900">2.2 No Legal Advice</h4>
                <p className="text-sm leading-relaxed text-slate-700">
                  The documents generated by our Service are templates and do not constitute legal advice. We are not a law firm, and our Service does not provide legal services. The documents are provided "as is" for informational purposes only. You should consult with a qualified legal professional to ensure the documents meet your specific legal requirements and business needs.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">3. User Responsibilities</h3>
              <p className="text-sm leading-relaxed mb-2 text-slate-700">You agree to:</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 text-slate-700">
                <li>Provide accurate, current, and complete information when using our service</li>
                <li>Review and customize generated documents before use</li>
                <li>Consult with legal professionals as needed</li>
                <li>Use the generated documents in compliance with applicable laws</li>
                <li>Not use our service for any illegal or unauthorized purpose</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept all responsibility for activities that occur under your account</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">4. User Conduct</h3>
              <p className="text-sm leading-relaxed mb-2 text-slate-700">You agree not to use the Service to:</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 text-slate-700">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any harmful, offensive, or illegal content</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
                <li>Use automated systems (bots, scrapers) to access the Service without permission</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">5. Intellectual Property</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of {businessName} or its content suppliers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-sm leading-relaxed mt-2 text-slate-700">
                The documents you generate using our service are yours to use, modify, and distribute as you see fit. However, the underlying templates, algorithms, and service design remain the property of {businessName}.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">6. Disclaimer of Warranties</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                THE MATERIALS ON {businessName.toUpperCase()} ARE PROVIDED ON AN 'AS IS' BASIS. {businessName.toUpperCase()} MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES INCLUDING, WITHOUT LIMITATION:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 mt-2 text-slate-700">
                <li>Implied warranties or conditions of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property or other violation of rights</li>
                <li>Accuracy, reliability, or completeness of content</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">7. Limitation of Liability</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                IN NO EVENT SHALL {businessName.toUpperCase()} OR ITS SUPPLIERS, AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA OR PROFIT, OR DUE TO BUSINESS INTERRUPTION) ARISING OUT OF THE USE OR INABILITY TO USE THE MATERIALS ON {businessName.toUpperCase()}, EVEN IF {businessName} OR AN AUTHORIZED REPRESENTATIVE HAS BEEN NOTIFIED ORALLY OR IN WRITING OF THE POSSIBILITY OF SUCH DAMAGE.
              </p>
              <p className="text-sm leading-relaxed mt-2 text-slate-700">
                Some jurisdictions do not allow limitations on implied warranties or limitations of liability for incidental or consequential damages, so these limitations may not apply to you.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">8. Indemnification</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                You agree to indemnify, defend, and hold harmless {businessName}, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from your use of and access to the Service, your violation of any term of these Terms, or your violation of any third-party right.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">9. Modifications to Terms</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                {businessName} may revise these Terms of Service at any time without notice. By using this Service, you are agreeing to be bound by the then current version of these Terms of Service. We will notify you of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">10. Termination</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">11. Governing Law</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                These Terms and Conditions are governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising out of or relating to these Terms or the Service shall be resolved through appropriate legal channels.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div id="privacy" className="mb-12 rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 overflow-hidden">
          <div className="border-b border-slate-200/60 px-5 sm:px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Privacy Policy</h2>
                <p className="text-xs sm:text-sm text-slate-500">Last updated: {effectiveDate}</p>
              </div>
            </div>
          </div>

          <div className="px-5 sm:px-8 py-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">1. Information We Collect</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                We collect information that you provide directly to us when you use our Service, including:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 mt-2 text-slate-700">
                <li>Information you provide when creating an account (name, email address)</li>
                <li>Information you provide when using our document generation service (business details, website information)</li>
                <li>Payment information processed securely through Dodo (we do not store payment card details)</li>
                <li>Communications you send to us (support requests, feedback)</li>
              </ul>
              <p className="text-sm leading-relaxed mt-2 text-slate-700">
                We also automatically collect certain information when you use our Service, including:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 mt-2 text-slate-700">
                <li>Log data (IP address, browser type, pages visited, time spent on pages)</li>
                <li>Device information (device type, operating system)</li>
                <li>Cookies and similar tracking technologies (see Cookie Policy section)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">2. How We Use Your Information</h3>
              <p className="text-sm leading-relaxed mb-2 text-slate-700">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 text-slate-700">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process your transactions and send you related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">3. Information Sharing and Disclosure</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 mt-2 text-slate-700">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing (Dodo), hosting, analytics, and customer support.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With Your Consent:</strong> We may share your information with your consent or at your direction.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">4. Data Security</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">5. Your Rights and Choices</h3>
              <p className="text-sm leading-relaxed mb-2 text-slate-700">Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 text-slate-700">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Opt-out of certain data processing activities</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
              <p className="text-sm leading-relaxed mt-2 text-slate-700">
                To exercise these rights, please contact us at {contactEmail}. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">6. Cookies and Tracking Technologies</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                We use cookies and similar tracking technologies to collect and use personal information about you. For more information about our use of cookies, please see our Cookie Policy section below or visit our dedicated cookie policy page.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">7. Data Retention</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">8. International Data Transfers</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from those in your country. We take appropriate safeguards to ensure that your personal information receives an adequate level of protection.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">9. Children's Privacy</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Our Service is not intended for children under the age of 13 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">10. Changes to This Privacy Policy</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">11. Contact Us</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                If you have any questions about this Privacy Policy, please contact us at: <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Refund Policy Section */}
        <div id="refund" className="mb-12 rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/30 overflow-hidden">
          <div className="border-b border-slate-200/60 px-5 sm:px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Refund Policy</h2>
                <p className="text-xs sm:text-sm text-slate-500">Last updated: {effectiveDate}</p>
              </div>
            </div>
          </div>

          <div className="px-5 sm:px-8 py-6 space-y-4">
            <p className="text-sm leading-relaxed text-slate-700">
              All sales are final. We do not offer refunds for purchases made through our Service.
            </p>
            <p className="text-sm leading-relaxed text-slate-700">
              This is a one-time digital product purchase that provides immediate access to our document generation service and premium features. Once you have completed your purchase and gained access to the Service, the transaction is considered complete.
            </p>
            <p className="text-sm leading-relaxed text-slate-700">
              Due to the digital nature of our product and the immediate access provided upon purchase, we are unable to offer refunds, exchanges, or cancellations. By completing your purchase, you acknowledge that you have read and understood this refund policy.
            </p>
            <p className="text-sm leading-relaxed text-slate-700">
              If you have any questions or concerns about your purchase, please contact us at {contactEmail} before completing your transaction.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-12 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white shadow-lg shadow-slate-200/30 overflow-hidden">
          <div className="px-5 sm:px-8 py-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Contact Information</h3>
                <p className="text-sm leading-relaxed text-slate-700 mb-3">
                  If you have any questions about these Terms of Service, Privacy Policy, or Refund Policy, please contact us:
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline ml-2">{contactEmail}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
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
