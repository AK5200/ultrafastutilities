import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  Globe,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Websites (GDPR & CCPA) Free Preview | ultrafastutilities",
  description: "Create a compliant privacy policy for your website. Structured for GDPR & CCPA, includes cookie categories and user rights. Free preview. One-time $4.99.",
  keywords: "privacy policy for websites, website privacy policy, GDPR privacy policy, CCPA privacy policy, privacy policy generator",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-websites",
  },
};

const tocSections = [
  { id: "what-is", title: "What Is a Privacy Policy?" },
  { id: "generic-risks", title: "Why Generic Policies Are Risky" },
  { id: "gdpr-ccpa", title: "GDPR & CCPA Requirements" },
  { id: "sections", title: "Required Sections" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForWebsitesPage() {
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
              <span className="text-slate-600">Privacy Policy for Websites</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Globe className="w-3.5 h-3.5" />
                Website Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Websites
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about creating a compliant privacy
                policy for your website. Covering GDPR, CCPA, cookie
                requirements, and user rights.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for site owners and developers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/cookie-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Cookie Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                GDPR Template
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/ccpa-privacy-policy-example"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                CCPA Example
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
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
              {/* Section 1: What is a Website Privacy Policy? */}
              <section id="what-is" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What is a Website Privacy Policy?
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    A privacy policy is a legal document that explains how your
                    website collects, uses, stores, and protects user data. It's
                    required by law in many jurisdictions, including the EU (
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    ) and California (
                    <Link
                      href="/ccpa-privacy-policy-example"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      CCPA/CPRA
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    ).
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Every website that collects any form of personal information,
                    from email addresses to{" "}
                    <Link
                      href="/cookie-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      cookies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , needs a privacy policy. This includes:
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {[
                      "Contact forms that collect names and emails",
                      "Newsletter signups",
                      "Ecommerce stores processing payments",
                      "SaaS platforms with user accounts",
                      "Any site using analytics or tracking cookies",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-base leading-7 text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Why Generic Policies and ChatGPT Are Risky */}
              <section id="generic-risks" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Generic Policies and ChatGPT Are Risky
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="rounded-xl border border-red-200/60 bg-red-50/30 p-5">
                    <div className="flex gap-3 mb-4">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-base leading-7 text-slate-700">
                        <strong className="text-slate-900">Caution:</strong>{" "}
                        Generic and AI-generated privacy policies often fail to
                        meet compliance requirements. Here are the key risks.
                      </p>
                    </div>

                    <div className="space-y-5 mt-5">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Missing Compliance Requirements
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Generic privacy policies often miss critical sections
                          required by GDPR and CCPA, such as lawful basis for
                          processing, data retention periods, and international
                          data transfer safeguards.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Vague Third Party Disclosures
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          <Link
                            href="/chatgpt-privacy-policy-risks"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            ChatGPT
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>{" "}
                          and free generators typically use generic terms like
                          "analytics" or "advertising" instead of naming specific
                          services like Google Analytics, Stripe, or Cloudflare.
                          This creates compliance gaps.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          No Cookie Classification
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Many free tools don't properly categorize cookies
                          (necessary, analytics, marketing, functional), which is
                          required for GDPR compliance and proper user consent.
                          Learn more about{" "}
                          <Link
                            href="/cookie-policy-for-websites"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            cookie policy requirements
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                          .
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Incomplete User Rights Procedures
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Generic policies list user rights but don't explain how
                          users can exercise them, including contact methods,
                          verification requirements, and response timelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: GDPR and CCPA Requirements */}
              <section id="gdpr-ccpa" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GDPR and CCPA Requirements for Websites
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  {/* GDPR */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          GDPR
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>{" "}
                        (EU/UK) Requirements
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Lawful basis for processing (consent, contractual necessity, legitimate interests)",
                        "Data controller and processor identification",
                        "Data retention periods with specific timeframes",
                        "International data transfer safeguards (SCCs)",
                        "User rights with clear procedures (access, deletion, portability)",
                        "Cookie classification and consent mechanisms",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CCPA */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        <Link
                          href="/ccpa-privacy-policy-example"
                          className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          CCPA/CPRA
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>{" "}
                        (California) Requirements
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Right to know what personal information is collected",
                        "Right to delete personal information",
                        "Right to opt out of sale or sharing of data",
                        "Right to correct inaccurate information",
                        "Non-discrimination clause",
                        "Clear contact method for exercising rights",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: What Sections Should a Proper Privacy Policy Include? */}
              <section id="sections" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Sections Should a Proper Privacy Policy Include?
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  {[
                    {
                      title: "Information Collection",
                      desc: "What data you collect (names, emails, payment info, cookies, etc.)",
                    },
                    {
                      title: "How Data is Collected",
                      desc: "Forms, account creation, checkout flows, cookies, and communications",
                    },
                    {
                      title: "How Data is Used",
                      desc: "Service delivery, account management, payments, fraud prevention, analytics, legal compliance",
                    },
                    {
                      title: "Third Party Services",
                      desc: "Named examples like Google Analytics, Stripe/Dodo, Cloudflare, advertising platforms",
                    },
                    {
                      title: "Data Retention",
                      desc: "Specific timeframes for different data types (account data, transactions, marketing, logs)",
                    },
                    {
                      title: "User Rights",
                      desc: "GDPR and CCPA rights with clear procedures for exercising them",
                    },
                    {
                      title: "International Data Transfers",
                      desc: "Safeguards and transfer mechanisms (Standard Contractual Clauses)",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Cookie Policy item with link */}
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-0.5">
                        <Link
                          href="/cookie-policy-for-websites"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          Cookie Policy
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        Cookie classification, duration, and management
                        instructions
                      </p>
                    </div>
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
                      Generate Your Website Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your website in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy — $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>No subscription</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-8">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <HelpCircle className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Is a privacy policy legally required for websites?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes, if your website collects any personal information
                      (emails, names, cookies, payment data), you're legally
                      required to have a privacy policy in many jurisdictions,
                      including the EU (
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      ) and California (
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        CCPA/CPRA
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      ).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Can I use ChatGPT to generate a privacy policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      While{" "}
                      <Link
                        href="/chatgpt-privacy-policy-risks"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        ChatGPT
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      can generate text, it often misses critical compliance
                      requirements, uses vague third-party disclosures, and
                      lacks proper cookie classification.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Does this work for international visitors?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes, our privacy policy generator includes{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      requirements for EU/UK visitors and{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        CCPA
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      requirements for California residents, making it suitable
                      for international websites.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Do I need a separate cookie policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      While you can include cookie information in your privacy
                      policy, many websites benefit from a dedicated{" "}
                      <Link
                        href="/cookie-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        cookie policy page
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      for better user clarity and GDPR compliance.
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
                      href: "/cookie-policy-for-websites",
                      icon: FileText,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie compliance requirements",
                    },
                    {
                      href: "/generate",
                      icon: ShieldCheck,
                      title: "Policy Generator",
                      desc: "Create your compliant privacy policy",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template structure",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California privacy rights and disclosures",
                    },
                    {
                      href: "/chatgpt-privacy-policy-risks",
                      icon: AlertTriangle,
                      title: "ChatGPT Privacy Policy Risks",
                      desc: "Why generic AI-generated policies fail",
                    },
                    {
                      href: "/free-vs-paid-privacy-policy-generator",
                      icon: FileText,
                      title: "Free vs Paid Generator",
                      desc: "Compare free tools vs structured solutions",
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
