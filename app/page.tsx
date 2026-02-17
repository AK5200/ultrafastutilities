import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  FileText,
  CheckCircle,
  X,
  ArrowRight,
  Clock,
  CreditCard,
  Globe,
  Scale,
  Cookie,
  Smartphone,
  ShoppingCart,
  Cloud,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-blue-50/60 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Trusted by 1,000+ businesses
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Don&apos;t Guess Your Privacy Policy.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Get It Right for $5.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Free generators and AI tools miss critical compliance details. Get
              a professionally structured, GDPR &amp; CCPA-ready Privacy Policy,
              Cookie Policy, and Terms of Service — built to reduce common legal
              mistakes and ready to ship instantly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/generate">
                <Button
                  size="lg"
                  className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 h-auto bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/20"
                >
                  Create Your Policy Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                60 seconds
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="inline-flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-blue-500" />
                One-time $4.99
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="inline-flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-500" />
                Free preview
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-14 sm:py-16 px-4 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed">
            &ldquo;This is the most reliable privacy policy generator I have
            used.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-slate-500">
            Sarah Chen, Startup Founder
          </p>
        </div>
      </section>

      {/* Why ultrafastutilities */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Structured around real compliance standards
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              GDPR and CCPA requirements, cookie classification, data retention,
              and user rights handling — not generic AI text.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: Zap,
                title: "Generate in Real-Time",
                desc: "Answer a few questions, instantly get your Privacy Policy, Terms of Service, and Cookie Policy. No waiting.",
              },
              {
                icon: ShieldCheck,
                title: "GDPR & CCPA-Ready",
                desc: "Jurisdiction-aware sections, cookie classification, data retention disclosures, and controller/processor clarity.",
              },
              {
                icon: FileText,
                title: "Complete Document Suite",
                desc: "Privacy Policy, Terms of Service, and Cookie Policy with lawful basis, user rights, and third-party disclosures.",
              },
              {
                icon: Globe,
                title: "Built for Confidence",
                desc: "A structured, reliable starting point so you can publish without second-guessing whether something was missed.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-20 px-4 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Why not just use ChatGPT?
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Generic AI policies miss critical compliance requirements.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200/60 bg-slate-50/50">
                    <th className="text-left p-4 sm:p-5 font-medium text-slate-500 text-xs uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="text-center p-4 sm:p-5 font-semibold text-blue-700 text-xs uppercase tracking-wider">
                      ultrafastutilities
                    </th>
                    <th className="text-center p-4 sm:p-5 font-medium text-slate-500 text-xs uppercase tracking-wider">
                      ChatGPT / Free tools
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "GDPR & CCPA coverage",
                      us: "Jurisdiction-aware sections",
                      them: "Often generic",
                    },
                    {
                      feature: "Cookie classification",
                      us: "Defined categories",
                      them: "Vague or missing",
                    },
                    {
                      feature: "Data retention",
                      us: "Specific timeframes",
                      them: "Commonly omitted",
                    },
                    {
                      feature: "Third-party services",
                      us: "Named examples",
                      them: "Generic references",
                    },
                    {
                      feature: "Controller/processor roles",
                      us: "Clear distinction",
                      them: "Not addressed",
                    },
                    {
                      feature: "International transfers",
                      us: "Safeguards explained",
                      them: "Rarely covered",
                    },
                    {
                      feature: "User rights handling",
                      us: "Contact & process",
                      them: "Listed without guidance",
                    },
                    {
                      feature: "Overall quality",
                      us: "Ready to publish",
                      them: "Needs heavy review",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i < 7
                          ? "border-b border-slate-100"
                          : ""
                      }
                    >
                      <td className="p-4 sm:p-5 font-medium text-slate-800">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        <CheckCircle className="w-5 h-5 text-blue-600 mx-auto" />
                        <p className="text-xs text-slate-500 mt-1 hidden sm:block">
                          {row.us}
                        </p>
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                        <p className="text-xs text-slate-400 mt-1 hidden sm:block">
                          {row.them}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Pages / Resources */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Privacy compliance guides
            </h2>
            <p className="mt-3 text-base text-slate-600">
              In-depth resources for every platform and regulation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/privacy-policy-for-websites",
                icon: Globe,
                title: "Privacy Policy for Websites",
              },
              {
                href: "/privacy-policy-for-apps",
                icon: Smartphone,
                title: "Privacy Policy for Apps",
              },
              {
                href: "/privacy-policy-for-ecommerce",
                icon: ShoppingCart,
                title: "Privacy Policy for E-commerce",
              },
              {
                href: "/privacy-policy-for-saas",
                icon: Cloud,
                title: "Privacy Policy for SaaS",
              },
              {
                href: "/privacy-policy-for-shopify",
                icon: ShoppingCart,
                title: "Privacy Policy for Shopify",
              },
              {
                href: "/privacy-policy-for-mobile-apps",
                icon: Smartphone,
                title: "Privacy Policy for Mobile Apps",
              },
              {
                href: "/gdpr-privacy-policy-template",
                icon: Scale,
                title: "GDPR Privacy Policy Template",
              },
              {
                href: "/ccpa-privacy-policy-example",
                icon: Scale,
                title: "CCPA Privacy Policy Example",
              },
              {
                href: "/cookie-policy-for-websites",
                icon: Cookie,
                title: "Cookie Policy for Websites",
              },
              {
                href: "/what-happens-without-a-privacy-policy",
                icon: ShieldCheck,
                title: "What Happens Without a Privacy Policy?",
              },
              {
                href: "/chatgpt-privacy-policy-risks",
                icon: FileText,
                title: "ChatGPT Privacy Policy Risks",
              },
              {
                href: "/free-vs-paid-privacy-policy-generator",
                icon: FileText,
                title: "Free vs Paid Generators",
              },
            ].map((page) => (
              <Link key={page.href} href={page.href} className="group">
                <div className="h-full rounded-xl border border-slate-200/80 p-4 hover:border-blue-200 hover:shadow-sm transition-all bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors">
                      <page.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="font-medium text-slate-800 group-hover:text-blue-700 transition-colors text-sm flex-1">
                      {page.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-12 text-center relative overflow-hidden">
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
                Stop guessing. Get it done properly.
              </h2>
              <p className="mt-3 text-blue-100 text-base max-w-lg mx-auto">
                Privacy Policy, Cookie Policy, and Terms of Service — structured,
                compliant, and ready to publish. One-time $4.99.
              </p>

              <Link href="/generate">
                <Button
                  size="lg"
                  className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                >
                  Get ultrafastutilities Now
                </Button>
              </Link>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                <span>Free preview</span>
                <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                <span>One-time payment</span>
                <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                <span>Instant access</span>
              </div>

              <p className="text-xs text-blue-300/80 mt-3">
                Structured templates, not legal advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Company
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Product
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/generate"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    Generate Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/free-vs-paid-privacy-policy-generator"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    Free vs Paid
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Guides
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/privacy-policy-for-websites"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    For Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy-for-apps"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    For Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy-for-websites"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Compliance
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/gdpr-privacy-policy-template"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    GDPR Template
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ccpa-privacy-policy-example"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    CCPA Example
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-happens-without-a-privacy-policy"
                    className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                  >
                    No Policy? Risks
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200/60 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-slate-400 text-xs">
                &copy; {new Date().getFullYear()} ultrafastutilities. All
                rights reserved.
              </p>
              <p className="text-slate-400 text-xs">
                Legal documents for everyone.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
