import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  X,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Scale,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Free vs Paid Privacy Policy Generator What You're Really Trading Off | ultrafastutilities",
  description: "Compare free and paid privacy policy generators. Understand tradeoffs of free tools and value of structured documents. Generate compliant policies for $4.99.",
  keywords: "free privacy policy generator, paid privacy policy generator, privacy policy generator comparison, free vs paid",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/free-vs-paid-privacy-policy-generator",
  },
};

const tocSections = [
  { id: "overview", title: "Overview" },
  { id: "tradeoffs", title: "Tradeoffs of Free Tools" },
  { id: "structured-value", title: "Value of Structured Documents" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function FreeVsPaidPrivacyPolicyGeneratorPage() {
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
              <span className="text-slate-600">Free vs Paid Privacy Policy Generator</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Scale className="w-3.5 h-3.5" />
                Generator Comparison
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Free vs Paid Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Generator
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Understand the real tradeoffs of free tools and the value of
                structured, jurisdiction-aware privacy policy documents.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for site owners and developers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/chatgpt-privacy-policy-risks"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <AlertTriangle className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                ChatGPT Privacy Policy Risks
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Websites
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
              {/* Section 1: Overview */}
              <section id="overview" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Overview
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Free{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy generators
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    can be useful for understanding basic concepts. The
                    differences become important when you need
                    jurisdiction-specific disclosures and publish-ready
                    documents.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Tradeoffs of Free Tools */}
              <section id="tradeoffs" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-100 text-red-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Tradeoffs of Free Tools
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Item 1: Generic and Vague Content */}
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        Generic and Vague Content
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Free generators produce{" "}
                        <Link
                          href="/chatgpt-privacy-policy-risks"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          generic templates
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        with vague terms like &ldquo;analytics services&rdquo;
                        instead of naming specific services (Google Analytics,
                        Stripe). This creates compliance gaps.
                      </p>
                    </div>
                  </div>

                  {/* Item 2: Missing Compliance Sections */}
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        Missing Compliance Sections
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Free tools often omit critical sections like{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          GDPR
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        lawful basis,{" "}
                        <Link
                          href="/ccpa-privacy-policy-example"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          CCPA/CPRA
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        rights, data retention periods, and international data
                        transfer safeguards.
                      </p>
                    </div>
                  </div>

                  {/* Item 3: No Cookie Classification */}
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        No Cookie Classification
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Free generators don&apos;t properly categorize{" "}
                        <Link
                          href="/cookie-policy-for-websites"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          cookies
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        (necessary, analytics, marketing, functional) or explain
                        their purpose and duration, failing{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          GDPR
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        requirements.
                      </p>
                    </div>
                  </div>

                  {/* Item 4: Incomplete User Rights Procedures */}
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        Incomplete User Rights Procedures
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Free tools list user rights but don&apos;t explain how
                        to exercise them (contact method, verification, response
                        timeline), creating legal risk.
                      </p>
                    </div>
                  </div>

                  {/* Item 5: No Data Controller/Processor Clarity */}
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        No Data Controller/Processor Clarity
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Free generators don&apos;t distinguish between data
                        controller and processor roles, which is required for{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          GDPR
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        compliance, especially for{" "}
                        <Link
                          href="/privacy-policy-for-saas"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          SaaS platforms
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        .
                      </p>
                    </div>
                  </div>

                  {/* Item 6: Hidden Costs and Limitations */}
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        Hidden Costs and Limitations
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Free tools often require manual review, legal
                        consultation, or additional paid features to achieve
                        compliance, making them more expensive in the long run.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Value of Structured Documents */}
              <section id="structured-value" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Value of Structured Documents
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Paid generators focus less on wording and more on
                      including the correct sections and disclosures required by
                      law.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Item 1: Jurisdiction-Aware Sections */}
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        Jurisdiction-Aware Sections
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Structured documents automatically include{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          GDPR
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/ccpa-privacy-policy-example"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          CCPA/CPRA
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        sections based on your business location and target
                        audience, reducing compliance risk.
                      </p>
                    </div>
                  </div>

                  {/* Item 2: Named Third Party Services */}
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        Named Third Party Services
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Structured documents include specific examples (Google
                        Analytics, Stripe, Dodo, Cloudflare) instead of vague
                        references, meeting{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          GDPR
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        transparency requirements.
                      </p>
                    </div>
                  </div>

                  {/* Item 3: Proper Cookie Classification */}
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        Proper Cookie Classification
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Structured documents categorize{" "}
                        <Link
                          href="/cookie-policy-for-websites"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          cookies
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        (necessary, analytics, marketing, functional) with
                        purpose, duration, and examples, enabling{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          GDPR
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        -compliant consent.
                      </p>
                    </div>
                  </div>

                  {/* Item 4: Data Retention Disclosures */}
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        Data Retention Disclosures
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Structured documents include specific retention
                        timeframes for different data types (account data,
                        transaction data, marketing data, logs), meeting{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          GDPR
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        requirements.
                      </p>
                    </div>
                  </div>

                  {/* Item 5: User Rights Procedures */}
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        User Rights Procedures
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Structured documents provide clear contact methods,
                        verification requirements, and response timelines for
                        exercising rights, reducing legal risk.
                      </p>
                    </div>
                  </div>

                  {/* Item 6: Ready to Publish */}
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-[15px]">
                        Ready to Publish
                      </h3>
                      <p className="text-base leading-7 text-slate-700 mt-1">
                        Structured documents are professionally formatted and
                        ready to publish immediately, saving time and reducing
                        the need for expensive legal review.
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
                      Generate Structured Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally structured privacy policy in
                      under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate Structured Privacy Policy $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Structured for GDPR &amp; CCPA</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-200 hover:text-white transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="font-medium text-blue-200 hover:text-white transition-colors inline-flex items-center gap-0.5"
                      >
                        CCPA
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
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
                      href: "/chatgpt-privacy-policy-risks",
                      icon: AlertTriangle,
                      title: "ChatGPT Privacy Policy Risks",
                      desc: "AI policy limitations and risks",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Website compliance guide",
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
