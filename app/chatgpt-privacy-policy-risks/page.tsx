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
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "ChatGPT Privacy Policy Risks Why Generic AI Policies Fall Short | ultrafastutilities",
  description: "Understand the limitations and risks of using ChatGPT or generic AI to generate privacy policies. Learn about compliance gaps and why structured documents are essential.",
  keywords: "ChatGPT privacy policy risks, AI privacy policy risks, generic privacy policy problems, privacy policy compliance",
  robots: {
    index: true,
    follow: true,
  },
};

const tocSections = [
  { id: "limitations", title: "Limitations of Generic AI" },
  { id: "compliance-gaps", title: "Compliance Gaps" },
  { id: "structured-documents", title: "Structured Documents" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function ChatGPTPrivacyPolicyRisksPage() {
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
              <span className="text-slate-600">ChatGPT Privacy Policy Risks</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/80 text-red-700 text-xs font-medium mb-6">
                <AlertTriangle className="w-3.5 h-3.5" />
                AI Policy Risks
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                ChatGPT Privacy Policy{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  Risks
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Understand the limitations of using ChatGPT or generic AI to
                generate privacy policies. Learn about compliance gaps and why
                structured documents are essential.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for site owners and developers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/free-vs-paid-privacy-policy-generator"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Free vs Paid Generator
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
                    Need a compliant policy?
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
              {/* Section 1: Limitations of Generic AI */}
              <section id="limitations" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-100 text-red-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Limitations of Generic AI
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      ChatGPT and similar AI tools generate generic text that
                      often misses critical compliance requirements.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    AI tools like ChatGPT can be helpful for drafting text, but{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    require jurisdiction-specific structure and disclosures that
                    generic outputs often miss.
                  </p>

                  <div className="space-y-4">
                    {/* X Item 1 */}
                    <div className="rounded-xl border border-red-200/60 p-5">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            Missing Jurisdiction-Specific Sections
                          </h3>
                          <p className="text-base leading-7 text-slate-700">
                            Generic AI often produces a one-size-fits-all policy
                            that doesn&apos;t include specific{" "}
                            <Link
                              href="/gdpr-privacy-policy-template"
                              className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                            >
                              GDPR
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>{" "}
                            lawful basis disclosures,{" "}
                            <Link
                              href="/ccpa-privacy-policy-example"
                              className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                            >
                              CCPA/CPRA
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>{" "}
                            rights sections, or jurisdiction-aware content. This
                            creates compliance gaps for EU/UK and California users.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* X Item 2 */}
                    <div className="rounded-xl border border-red-200/60 p-5">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            Vague Third Party Disclosures
                          </h3>
                          <p className="text-base leading-7 text-slate-700">
                            AI-generated policies use generic terms like
                            &quot;analytics services&quot; or &quot;payment
                            processors&quot; instead of naming specific services
                            (Google Analytics, Stripe, Dodo, Cloudflare). This
                            violates{" "}
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
                    </div>

                    {/* X Item 3 */}
                    <div className="rounded-xl border border-red-200/60 p-5">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            Incomplete Cookie Classifications
                          </h3>
                          <p className="text-base leading-7 text-slate-700">
                            Generic AI doesn&apos;t properly categorize{" "}
                            <Link
                              href="/cookie-policy-for-websites"
                              className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                            >
                              cookies
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>{" "}
                            (strictly necessary, analytics, marketing, functional)
                            or explain their purpose and duration. This fails{" "}
                            <Link
                              href="/gdpr-privacy-policy-template"
                              className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                            >
                              GDPR
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>{" "}
                            cookie consent requirements.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* X Item 4 */}
                    <div className="rounded-xl border border-red-200/60 p-5">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            Missing Data Retention Periods
                          </h3>
                          <p className="text-base leading-7 text-slate-700">
                            AI-generated policies often omit specific data
                            retention timeframes (account data, transaction data,
                            marketing data, logs).{" "}
                            <Link
                              href="/privacy-policy-for-websites"
                              className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                            >
                              Website privacy policies
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>{" "}
                            require clear retention periods under{" "}
                            <Link
                              href="/gdpr-privacy-policy-template"
                              className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                            >
                              GDPR
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>
                            .
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* X Item 5 */}
                    <div className="rounded-xl border border-red-200/60 p-5">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            No Data Controller/Processor Clarity
                          </h3>
                          <p className="text-base leading-7 text-slate-700">
                            Generic policies don&apos;t clearly distinguish between
                            data controller and processor roles, which is required
                            for{" "}
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
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Compliance Gaps */}
              <section id="compliance-gaps" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-100 text-red-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Compliance Gaps
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      AI-generated policies frequently violate key regulatory
                      requirements.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  {/* GDPR Violations */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          GDPR
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>{" "}
                        Violations
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Missing lawful basis disclosures (consent, contractual necessity, legitimate interests)",
                        "No international data transfer safeguards (Standard Contractual Clauses)",
                        "Incomplete user rights procedures (no contact method, verification process, response timeline)",
                        "Lack of supervisory authority information",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                          <p className="text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CCPA Violations */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        <Link
                          href="/ccpa-privacy-policy-example"
                          className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          CCPA/CPRA
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>{" "}
                        Violations
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        'Missing "Do Not Sell or Share My Personal Information" disclosure',
                        "No opt-out mechanism for sale or sharing of data",
                        "Incomplete categories of personal information collected",
                        "No non-discrimination clause",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                          <p className="text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Why Structured Documents Are Essential */}
              <section id="structured-documents" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Structured Documents Are Essential
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-4">
                  {/* CheckCircle Item 1 */}
                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">
                      <strong className="text-slate-900 font-medium">
                        Jurisdiction-Aware Sections:
                      </strong>{" "}
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
                      sections based on your business location and target audience.
                    </p>
                  </div>

                  {/* CheckCircle Item 2 */}
                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">
                      <strong className="text-slate-900 font-medium">
                        Named Third Party Services:
                      </strong>{" "}
                      Structured documents include specific examples (Google
                      Analytics, Stripe, Dodo, Cloudflare) instead of vague
                      references.
                    </p>
                  </div>

                  {/* CheckCircle Item 3 */}
                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">
                      <strong className="text-slate-900 font-medium">
                        Proper Cookie Classification:
                      </strong>{" "}
                      Structured documents categorize{" "}
                      <Link
                        href="/cookie-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        cookies
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      (necessary, analytics, marketing, functional) with purpose,
                      duration, and examples.
                    </p>
                  </div>

                  {/* CheckCircle Item 4 */}
                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">
                      <strong className="text-slate-900 font-medium">
                        Data Retention Disclosures:
                      </strong>{" "}
                      Structured documents include specific retention timeframes
                      for different data types, meeting{" "}
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

                  {/* CheckCircle Item 5 */}
                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700">
                      <strong className="text-slate-900 font-medium">
                        User Rights Procedures:
                      </strong>{" "}
                      Structured documents provide clear contact methods,
                      verification requirements, and response timelines for
                      exercising rights. Learn more about{" "}
                      <Link
                        href="/free-vs-paid-privacy-policy-generator"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        free vs paid generators
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
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
                      Generate Compliant Privacy Policy $4.99
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally structured privacy policy in
                      under 60 seconds. No generic AI guesswork.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Policy — $4.99
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
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        GDPR
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        CCPA
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
                      href: "/free-vs-paid-privacy-policy-generator",
                      icon: FileText,
                      title: "Free vs Paid Privacy Policy Generator",
                      desc: "Compare free tools vs structured solutions",
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
