import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Scale,
  Users,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "CCPA Privacy Policy Example California Consumer Privacy Rights | ultrafastutilities",
  description: "Get a CCPA/CPRA-compliant privacy policy example. Understand California privacy rights, required disclosures, and example structure. Generate your full policy for $4.99.",
  keywords: "CCPA privacy policy, CPRA privacy policy, California privacy policy, CCPA compliance, California privacy rights",
  robots: {
    index: true,
    follow: true,
  },
};

const tocSections = [
  { id: "california-privacy-rights", title: "California Privacy Rights" },
  { id: "required-disclosures", title: "Required Disclosures" },
  { id: "example-structure", title: "Example Structure" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function CCPAPrivacyPolicyExamplePage() {
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
              <span className="text-slate-600">CCPA Privacy Policy Example</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Scale className="w-3.5 h-3.5" />
                California Privacy
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                CCPA Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Example
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Understand California consumer privacy rights, required
                disclosures, and example policy structure. Generate a
                CCPA/CPRA-compliant policy for your business.
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
              {/* Section 1: California Privacy Rights */}
              <section id="california-privacy-rights" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      California Privacy Rights
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    The California Consumer Privacy Act (CCPA) and California
                    Privacy Rights Act (CPRA) grant California residents specific
                    rights regarding their personal information. If your business
                    collects data from California residents, you need to include
                    CCPA-specific disclosures in your{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Who Must Comply
                    </h3>
                    <p className="text-base leading-7 text-slate-700 mb-3">
                      CCPA/CPRA applies to businesses that:
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Have annual gross revenue exceeding $25 million, OR
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Buy, sell, or share personal information of 100,000+
                        California residents/households, OR
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Derive 50%+ of annual revenue from selling or sharing
                        personal information
                      </li>
                    </ul>
                    <p className="text-sm text-slate-500 mt-3">
                      Even businesses below these thresholds may need to provide
                      CCPA-style disclosures when handling California user data.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Required Disclosures */}
              <section id="required-disclosures" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Required Disclosures
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      CCPA/CPRA requires specific disclosures in your{" "}
                      <Link
                        href="/privacy-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        privacy policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Categories of Personal Information Collected
                      </h3>
                      <p className="text-slate-600">
                        Disclose what types of personal information you collect
                        (identifiers, commercial information, internet activity,
                        geolocation, etc.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Sources of Personal Information
                      </h3>
                      <p className="text-slate-600">
                        Explain where you collect information from (directly from
                        users,{" "}
                        <Link
                          href="/privacy-policy-for-websites"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          third party services
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        ,{" "}
                        <Link
                          href="/cookie-policy-for-websites"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          cookies
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        , etc.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Business or Commercial Purpose
                      </h3>
                      <p className="text-slate-600">
                        Explain why you collect and use personal information
                        (service delivery, marketing, analytics, etc.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Third Party Sharing
                      </h3>
                      <p className="text-slate-600">
                        Disclose if you sell or share personal information with
                        third parties (advertising networks, analytics providers,
                        etc.)
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Example Structure */}
              <section id="example-structure" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Example Structure
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    This page provides an example structure for educational
                    purposes. A complete{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      CCPA privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    must be customized to reflect your specific data practices
                    and disclosures.
                  </p>

                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Additional Rights for California Residents (CCPA / CPRA)
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 mb-3">
                      If you are a California resident, you have the following
                      additional rights:
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">Right to Know:</strong>{" "}
                          You have the right to request that we disclose what
                          personal information we collect, use, disclose, and sell
                          or share about you.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">Right to Delete:</strong>{" "}
                          You have the right to request that we delete your personal
                          information, subject to certain exceptions (e.g.,
                          transaction records, legal compliance).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">Right to Correct:</strong>{" "}
                          You have the right to request that we correct inaccurate
                          personal information.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">
                            Right to Opt Out of Sale or Sharing:
                          </strong>{" "}
                          You have the right to opt out of the sale or sharing of
                          your personal information. If we sell or share personal
                          information, we will provide a &quot;Do Not Sell or Share My
                          Personal Information&quot; link.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">
                            Right to Non-Discrimination:
                          </strong>{" "}
                          We will not discriminate against you for exercising your
                          CCPA/CPRA rights.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">
                            Right to Limit Use of Sensitive Personal Information:
                          </strong>{" "}
                          You have the right to limit how we use sensitive personal
                          information (under CPRA).
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm text-slate-500 mt-4">
                      To exercise these rights, contact us at [email] or use our
                      online request form. We will verify your identity and
                      respond within the timeframes required by CCPA/CPRA
                      (generally within 45 days). You may designate an authorized
                      agent to make requests on your behalf.
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
                      Generate Full CCPA Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, CCPA/CPRA-compliant privacy policy
                      for your business in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 h-auto bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate Full CCPA Privacy Policy — $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Customized for your business</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-200 hover:text-white transition-colors inline-flex items-center gap-0.5 underline underline-offset-2"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      and CCPA requirements. Not legal advice.
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
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template structure",
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
