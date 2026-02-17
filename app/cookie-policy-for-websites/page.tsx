import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Cookie,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  Lock,
  BarChart3,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Cookie Policy for Websites GDPR Cookie Requirements | ultrafastutilities",
  description: "Create a compliant cookie policy for your website. Understand cookie categories, GDPR consent requirements, and EU cookie rules. Generate your policy for $4.99.",
  keywords: "cookie policy, cookie policy for websites, GDPR cookies, EU cookie law, cookie consent, cookie policy generator",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/cookie-policy-for-websites",
  },
};

const tocSections = [
  { id: "what-is", title: "What Is a Cookie Policy?" },
  { id: "cookie-categories", title: "Cookie Categories" },
  { id: "consent-requirements", title: "Consent Requirements" },
  { id: "gdpr-eu-rules", title: "GDPR & EU Cookie Rules" },
  { id: "generic-fails", title: "Why Generic Text Fails" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function CookiePolicyForWebsitesPage() {
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
              <span className="text-slate-600">Cookie Policy for Websites</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Cookie className="w-3.5 h-3.5" />
                Cookie Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Cookie Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Websites
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about cookie compliance. Covering
                cookie categories, GDPR consent requirements, and EU cookie
                rules for your website.
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
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                GDPR Template
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
                    Need a cookie policy?
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
              {/* Section 1: What is a Cookie Policy? */}
              <section id="what-is" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Is a Cookie Policy?
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    A cookie policy is a document that explains what cookies your
                    website uses, why you use them, and how users can manage or
                    disable them. Cookies are small text files stored on a
                    user&#39;s device when they visit a website.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    They serve various purposes:
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Remembering user preferences and login sessions",
                      "Tracking website analytics and user behavior",
                      "Enabling advertising and marketing campaigns",
                      "Improving website functionality and performance",
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
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Cookie Categories */}
              <section id="cookie-categories" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Cookie Categories
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Websites use different types of cookies, each serving a
                      distinct purpose.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* Strictly Necessary */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Strictly Necessary Cookies
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11">
                      These cookies are essential for the website to function
                      properly. They enable core features like user
                      authentication, security, and shopping cart functionality.
                    </p>
                    <p className="text-sm text-slate-500 mt-2 ml-11">
                      <strong className="text-slate-700">Examples:</strong>{" "}
                      Session cookies, authentication tokens, security cookies
                    </p>
                  </div>

                  {/* Analytics */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Analytics Cookies
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11">
                      These cookies help website owners understand how visitors
                      interact with their site by collecting and reporting
                      information anonymously.
                    </p>
                    <p className="text-sm text-slate-500 mt-2 ml-11">
                      <strong className="text-slate-700">Examples:</strong>{" "}
                      Google Analytics, Adobe Analytics, Mixpanel
                    </p>
                  </div>

                  {/* Marketing / Advertising */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Marketing / Advertising Cookies
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11">
                      These cookies track users across websites to build a
                      profile of their interests and show relevant
                      advertisements.
                    </p>
                    <p className="text-sm text-slate-500 mt-2 ml-11">
                      <strong className="text-slate-700">Examples:</strong>{" "}
                      Google Ads, Facebook Pixel, LinkedIn Insight Tag
                    </p>
                  </div>

                  {/* Functional */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Functional Cookies
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11">
                      These cookies enable enhanced functionality and
                      personalization, such as remembering language preferences
                      or video player settings.
                    </p>
                    <p className="text-sm text-slate-500 mt-2 ml-11">
                      <strong className="text-slate-700">Examples:</strong>{" "}
                      Language preferences, video player settings, chat widget
                      preferences
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Consent Requirements */}
              <section id="consent-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Consent Requirements
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and EU cookie law (ePrivacy Directive), you must obtain user
                    consent before placing non-essential cookies on their device.
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      What Consent Must Include
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Clear explanation of what cookies are used and why",
                        "Option to accept or reject non-essential cookies",
                        "Granular control (users should be able to accept some categories and reject others)",
                        "Easy way to withdraw consent at any time",
                        "No pre-checked boxes (consent must be active, not passive)",
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

              {/* Section 4: GDPR and EU Cookie Rules */}
              <section id="gdpr-eu-rules" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                      >
                        GDPR
                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                      </Link>{" "}
                      and EU Cookie Rules
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  {/* ePrivacy Directive */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        ePrivacy Directive (EU Cookie Law)
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600">
                      The ePrivacy Directive requires websites to obtain user
                      consent before storing or accessing information on a
                      user&#39;s device (including cookies), except for strictly
                      necessary cookies.
                    </p>
                  </div>

                  {/* GDPR Requirements */}
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
                        Requirements
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 mb-4">
                      Under{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , cookie data that can identify users is considered
                      personal data, requiring:
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Lawful basis",
                          text: "Consent for non-essential cookies",
                        },
                        {
                          label: "Transparency",
                          text: "Clear disclosure about what data is collected",
                        },
                        {
                          label: "User rights",
                          text: "Access, deletion, and portability of cookie data",
                        },
                        {
                          label: "Data retention",
                          text: "Defined retention periods for cookie data",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">
                            <strong className="text-slate-800 font-medium">
                              {item.label}:
                            </strong>{" "}
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Why Generic Cookie Text Fails */}
              <section id="generic-fails" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-100 text-red-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Generic Cookie Text Fails
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="rounded-xl border border-red-200/60 bg-red-50/30 p-5">
                    <div className="flex gap-3 mb-5">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Common pitfalls:</strong>{" "}
                        Generic cookie banners and copy-paste policies often
                        fail to meet{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          GDPR
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        compliance requirements.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <h3 className="font-semibold text-red-900 mb-1.5 text-sm">
                          Vague Cookie Descriptions
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                          Generic statements like &ldquo;we use cookies for analytics
                          and advertising&rdquo; don&#39;t meet{" "}
                          <Link
                            href="/gdpr-privacy-policy-template"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            GDPR
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>{" "}
                          requirements. You must name specific services (Google
                          Analytics, Facebook Pixel) and explain their purpose.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-red-900 mb-1.5 text-sm">
                          Missing Cookie Categories
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                          Failing to properly categorize cookies (necessary,
                          analytics, marketing, functional) makes it impossible
                          for users to give informed consent.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-red-900 mb-1.5 text-sm">
                          No Duration Information
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                          Users need to know how long cookies persist (session
                          cookies vs. persistent cookies with expiration dates).
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-red-900 mb-1.5 text-sm">
                          Third-Party Cookie Disclosure
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                          Not clearly explaining which third-party services set
                          cookies (Google Analytics, payment processors, CDN
                          providers) creates compliance gaps.
                        </p>
                      </div>
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
                    <Cookie className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate My Cookie Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant cookie policy for
                      your website in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Cookie Policy — $4.99
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
                <div className="flex items-center gap-2 mb-8">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      Is a cookie policy legally required for websites?
                    </h3>
                    <p className="text-base leading-7 text-slate-600">
                      Yes, if your website uses cookies (especially non-essential
                      cookies like analytics or advertising), you&#39;re legally
                      required to have a cookie policy under{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      and EU cookie law (ePrivacy Directive).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      Do I need a separate cookie policy if I already have a
                      privacy policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-600">
                      While you can include cookie information in your{" "}
                      <Link
                        href="/privacy-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        privacy policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , many websites benefit from a dedicated cookie policy page
                      for better user clarity and GDPR compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      What happens if I don&#39;t comply with cookie consent
                      requirements?
                    </h3>
                    <p className="text-base leading-7 text-slate-600">
                      Non-compliance with{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      cookie requirements can result in regulatory fines up to 4%
                      of annual revenue or 20 million euros, whichever is higher.
                      Additionally, users may file complaints with data
                      protection authorities.
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
                      href: "/privacy-policy-for-ecommerce",
                      icon: ShieldCheck,
                      title: "Privacy Policy for Ecommerce",
                      desc: "Ecommerce store compliance",
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
