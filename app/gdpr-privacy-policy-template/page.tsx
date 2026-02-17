import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Scale,
  BookOpen,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "GDPR Privacy Policy Template Structured for Compliance (Free Preview) | ultrafastutilities",
  description: "Get a GDPR-compliant privacy policy template. Understand GDPR requirements, lawful basis, data retention, and user rights. Generate your full policy for $4.99.",
  keywords: "GDPR privacy policy template, GDPR privacy policy, EU privacy policy, UK privacy policy, GDPR compliance",
  robots: {
    index: true,
    follow: true,
  },
};

const tocSections = [
  { id: "gdpr-requirements", title: "GDPR Requirements" },
  { id: "structured-templates", title: "Why Templates Must Be Structured" },
  { id: "example-structure", title: "Example Template Structure" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function GDPRPrivacyPolicyTemplatePage() {
  return (
    <>
      <ReadingProgress />
      <main className="min-h-screen">
        {/* Hero Section */}
        <header className="relative overflow-hidden border-b border-slate-200/60">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-blue-50/60 blur-3xl" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">GDPR Privacy Policy Template</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                GDPR Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                GDPR Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about GDPR-compliant privacy policies.
                Covering lawful basis, data retention, international transfers,
                and user rights.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for site owners and developers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Websites
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-saas"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for SaaS
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Policy Generator
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </header>

        {/* Content Area with Sidebar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Sticky Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />

                {/* Sidebar CTA */}
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/80">
                  <p className="text-sm font-semibold text-slate-800">
                    Need your own policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate in under 60 seconds
                  </p>
                  <Link href="/generate">
                    <Button
                      size="sm"
                      className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg"
                    >
                      Generate Policy
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="max-w-[720px]">
              {/* Section 1: GDPR Requirements */}
              <section id="gdpr-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GDPR Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      The General Data Protection Regulation (GDPR) applies to any
                      organization processing personal data of EU/UK residents,
                      regardless of where the organization is located.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-[52px]">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Key GDPR Principles
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Lawfulness, fairness, and transparency",
                      "Purpose limitation (collect only for specified purposes)",
                      "Data minimization (collect only necessary data)",
                      "Accuracy (keep data up to date)",
                      "Storage limitation (retain only as long as necessary)",
                      "Integrity and confidentiality (security measures)",
                      "Accountability (demonstrate compliance)",
                    ].map((principle) => (
                      <div
                        key={principle}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <Scale className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-700">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Why Templates Must Be Structured */}
              <section id="structured-templates" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Templates Must Be Structured
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    GDPR requires specific sections and disclosures. A generic
                    template won&apos;t suffice — you need a structured document
                    that includes:
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          Legal Basis for Processing
                        </h3>
                        <p className="text-base leading-7 text-slate-700 mt-1">
                          Explicit disclosure of lawful basis: consent, contractual
                          necessity, legal obligation, vital interests, public task,
                          or legitimate interests
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          Data Controller and Processors
                        </h3>
                        <p className="text-base leading-7 text-slate-700 mt-1">
                          Clear identification of who controls data and which
                          third-party services act as processors
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          Data Retention Periods
                        </h3>
                        <p className="text-base leading-7 text-slate-700 mt-1">
                          Specific timeframes for different data types (account data,
                          transaction data, marketing data, logs)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          International Data Transfers
                        </h3>
                        <p className="text-base leading-7 text-slate-700 mt-1">
                          Disclosure of safeguards when transferring data outside the
                          EU/UK (Standard Contractual Clauses, adequacy decisions)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          User Rights with Procedures
                        </h3>
                        <p className="text-base leading-7 text-slate-700 mt-1">
                          Right to access, rectification, erasure, restriction,
                          portability, objection, and withdrawal of consent — with
                          clear contact methods and response timelines
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Example Template Structure */}
              <section id="example-structure" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Example Template Structure
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-4">
                    This page provides an example structure and educational
                    guidance. A complete, customized privacy policy requires
                    tailoring these sections to your specific data practices.
                  </p>
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Below is an example of how GDPR-required sections are
                    typically structured in a privacy policy.
                  </p>

                  {/* Example Box 1: Legal Basis */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5 mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        1. Legal Basis for Processing Personal Data (GDPR)
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 mb-3">
                      We process your personal data based on the following lawful
                      bases:
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-600 ml-1">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">Consent:</strong> You
                          have given clear consent for us to process your personal
                          data for specific purposes (e.g., marketing emails,
                          optional analytics).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">
                            Contractual necessity:
                          </strong>{" "}
                          Processing is necessary for the performance of a contract
                          (e.g., account creation, order processing).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">
                            Legal obligation:
                          </strong>{" "}
                          Processing is necessary for compliance with a legal
                          obligation (e.g., tax reporting, court orders).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">
                            Legitimate interests:
                          </strong>{" "}
                          Processing is necessary for our legitimate interests
                          (e.g., fraud prevention, security monitoring, product
                          improvement), provided your interests and fundamental
                          rights do not override those interests.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Example Box 2: Your Rights */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        2. Your Rights under GDPR
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 mb-3">
                      Under GDPR, you have the following rights:
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-600 ml-1">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">
                            Right of access:
                          </strong>{" "}
                          Request a copy of your personal data
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">
                            Right to rectification:
                          </strong>{" "}
                          Request correction of inaccurate data
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">
                            Right to erasure:
                          </strong>{" "}
                          Request deletion of your data (with exceptions)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">
                            Right to restrict processing:
                          </strong>{" "}
                          Request limitation of how we process your data
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">
                            Right to data portability:
                          </strong>{" "}
                          Receive your data in a structured, machine-readable format
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">
                            Right to object:
                          </strong>{" "}
                          Object to processing based on legitimate interests
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                        <span>
                          <strong className="text-slate-800">
                            Right to withdraw consent:
                          </strong>{" "}
                          Withdraw consent at any time
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm leading-relaxed text-slate-600 mt-3">
                      To exercise these rights, contact us at [email]. We will
                      respond within the timeframes required by GDPR. You also
                      have the right to lodge a complaint with your local
                      supervisory authority.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* CTA Section */}
              <section id="generate" className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <ShieldCheck className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Full GDPR Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, GDPR-compliant privacy policy for your
                      website or app in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-base px-8 py-6 h-auto bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate Full GDPR Privacy Policy $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Customized for your website or app</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Related Resources */}
              <section id="resources" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Website compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      icon: FileText,
                      title: "Privacy Policy for SaaS",
                      desc: "SaaS platform compliance",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California privacy rights and disclosures",
                    },
                    {
                      href: "/generate",
                      icon: ShieldCheck,
                      title: "Policy Generator",
                      desc: "Create your compliant privacy policy",
                    },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="group">
                      <div className="h-full rounded-xl border border-slate-200/80 p-4 hover:border-blue-200 hover:shadow-sm transition-all bg-white/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors">
                            <item.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-slate-800 group-hover:text-blue-700 transition-colors text-sm">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
