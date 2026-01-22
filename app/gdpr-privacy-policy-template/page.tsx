import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, FileText, AlertTriangle, CheckCircle, ArrowRight, HelpCircle, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "GDPR Privacy Policy Template Structured for Compliance (Free Preview) | ultrafastutilities",
  description: "Get a GDPR-compliant privacy policy template. Understand GDPR requirements, lawful basis, data retention, and user rights. Generate your full policy for $4.99.",
  keywords: "GDPR privacy policy template, GDPR privacy policy, EU privacy policy, UK privacy policy, GDPR compliance",
  robots: "index, follow",
};

export default function GDPRPrivacyPolicyTemplatePage() {
  return (
    <main className="min-h-screen px-4 py-16 sm:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50/50 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent pb-3">
            GDPR Privacy Policy Template
          </h1>
          <p className="text-lg text-blue-800/90">
            Understand GDPR requirements and get a structured template for your privacy policy
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
              <CardTitle className="text-2xl text-blue-900 pb-2">GDPR Requirements</CardTitle>
            </div>
            <CardDescription className="text-base text-blue-800/80">
              The General Data Protection Regulation (GDPR) applies to any organization processing personal data of EU/UK residents, regardless of where the organization is located.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Key GDPR Principles</h3>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 ml-4">
                  <li>Lawfulness, fairness, and transparency</li>
                  <li>Purpose limitation (collect only for specified purposes)</li>
                  <li>Data minimization (collect only necessary data)</li>
                  <li>Accuracy (keep data up to date)</li>
                  <li>Storage limitation (retain only as long as necessary)</li>
                  <li>Integrity and confidentiality (security measures)</li>
                  <li>Accountability (demonstrate compliance)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Why Templates Must Be Structured</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-blue-900/90 mb-4">
                GDPR requires specific sections and disclosures. A generic template won't suffice—you need a structured document that includes:
              </p>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Legal Basis for Processing</h3>
                  <p className="text-blue-800/90">
                    Explicit disclosure of lawful basis: consent, contractual necessity, legal obligation, vital interests, public task, or legitimate interests
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Data Controller and Processors</h3>
                  <p className="text-blue-800/90">
                    Clear identification of who controls data and which third-party services act as processors
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Data Retention Periods</h3>
                  <p className="text-blue-800/90">
                    Specific timeframes for different data types (account data, transaction data, marketing data, logs)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">International Data Transfers</h3>
                  <p className="text-blue-800/90">
                    Disclosure of safeguards when transferring data outside the EU/UK (Standard Contractual Clauses, adequacy decisions)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">User Rights with Procedures</h3>
                  <p className="text-blue-800/90">
                    Right to access, rectification, erasure, restriction, portability, objection, and withdrawal of consent—with clear contact methods and response timelines
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200/50 shadow-xl rounded-2xl bg-white/70 backdrop-blur-md mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-900 pb-2">Example Template Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-blue-900/90 mb-4">
                This page provides an example structure and educational guidance. A complete, customized privacy policy requires tailoring these sections to your specific data practices.
              </p>
              <p className="text-blue-800/90 mb-4">
                Below is an example of how GDPR-required sections are typically structured in a privacy policy.
              </p>
              <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-200/50">
                <h3 className="font-semibold text-blue-900 mb-2">1. Legal Basis for Processing Personal Data (GDPR)</h3>
                <p className="text-blue-800/90 text-sm mb-2">
                  We process your personal data based on the following lawful bases:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 text-sm ml-4">
                  <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for specific purposes (e.g., marketing emails, optional analytics).</li>
                  <li><strong>Contractual necessity:</strong> Processing is necessary for the performance of a contract (e.g., account creation, order processing).</li>
                  <li><strong>Legal obligation:</strong> Processing is necessary for compliance with a legal obligation (e.g., tax reporting, court orders).</li>
                  <li><strong>Legitimate interests:</strong> Processing is necessary for our legitimate interests (e.g., fraud prevention, security monitoring, product improvement), provided your interests and fundamental rights do not override those interests.</li>
                </ul>
              </div>
              <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-200/50">
                <h3 className="font-semibold text-blue-900 mb-2">2. Your Rights (GDPR)</h3>
                <p className="text-blue-800/90 text-sm mb-2">
                  Under GDPR, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800/90 text-sm ml-4">
                  <li><strong>Right of access:</strong> Request a copy of your personal data</li>
                  <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Right to erasure:</strong> Request deletion of your data (with exceptions)</li>
                  <li><strong>Right to restrict processing:</strong> Request limitation of how we process your data</li>
                  <li><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Right to object:</strong> Object to processing based on legitimate interests</li>
                  <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="text-blue-800/90 text-sm mt-2">
                  To exercise these rights, contact us at [email]. We will respond within the timeframes required by GDPR. You also have the right to lodge a complaint with your local supervisory authority.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-8">
          <Link href="/generate">
            <Button size="lg" className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/30">
              Generate Full GDPR Privacy Policy $4.99
            </Button>
          </Link>
          <p className="text-sm font-medium text-blue-700/90 mt-3">
            Free preview • One time payment • Customized for your website or app
          </p>
          <p className="text-xs text-blue-600/70 mt-2 max-w-2xl mx-auto">
            Structured around widely accepted GDPR and CCPA requirements. Not legal advice.
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
            <Link href="/ccpa-privacy-policy-example" className="group">
              <Card className="h-full border-2 border-blue-200/50 hover:border-blue-400/70 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer relative">
                <CardContent className="p-4">
                  <ArrowRight className="w-5 h-5 text-blue-600/70 group-hover:text-blue-600 absolute top-4 right-4 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="flex items-start gap-2 mb-2 pr-8">
                    <ShieldCheck className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-blue-900 group-hover:text-blue-700 transition-colors">CCPA Privacy Policy Example</h3>
                  </div>
                  <p className="text-sm text-blue-700/70">California privacy rights and disclosures</p>
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
