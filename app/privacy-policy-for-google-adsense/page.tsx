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
  DollarSign,
  Globe,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Google AdSense — Requirements for Approval | ultrafastutilities",
  description:
    "Google AdSense requires a privacy policy before approval. Learn exactly what Google demands, what sections to include, and generate an AdSense-ready policy in 60 seconds.",
  keywords:
    "privacy policy for google adsense, adsense privacy policy requirements, do i need a privacy policy for adsense, google adsense privacy policy template, adsense approval privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-google-adsense",
  },
};

const tocSections = [
  { id: "why-adsense", title: "Why AdSense Requires One" },
  { id: "google-requirements", title: "Google's Exact Requirements" },
  { id: "rejection-reasons", title: "Common Rejection Reasons" },
  { id: "sections", title: "What to Include" },
  { id: "gdpr-ccpa", title: "GDPR & CCPA for Ad Publishers" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForGoogleAdSensePage() {
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
              <span className="text-slate-600">
                Privacy Policy for Google AdSense
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <DollarSign className="w-3.5 h-3.5" />
                Ad Monetization Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Google AdSense
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Google will reject your AdSense application without a compliant
                privacy policy. Here&apos;s exactly what Google requires, why
                applications get denied, and how to get approved.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For bloggers, publishers, and website owners monetizing with ads.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                General Website Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/cookie-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Cookie Policy Guide
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
            </div>
          </div>
        </header>

        {/* Content Area with Sidebar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />

                <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/80">
                  <p className="text-sm font-semibold text-slate-800">
                    Need an AdSense-ready policy?
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
              {/* Section 1: Why AdSense Requires a Privacy Policy */}
              <section id="why-adsense" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Google AdSense Requires a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Google AdSense uses personalized advertising, cookies, and
                    tracking technologies to serve targeted ads on your website.
                    Because your site becomes a data collection point the moment
                    you add AdSense code, Google requires you to disclose this to
                    your visitors.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    This isn&apos;t optional. Google&apos;s AdSense Program
                    Policies explicitly state that publishers must have a{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    that covers:
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {[
                      "The use of cookies by Google and third-party advertising vendors",
                      "How Google uses the DoubleClick cookie to serve ads based on prior visits",
                      "How users can opt out of personalized advertising via Google's Ads Settings",
                      "Links to third-party vendor policies if you use additional ad networks",
                      "Any other data your site collects (analytics, forms, accounts, etc.)",
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

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Without a privacy policy that covers these points, your
                    AdSense application will be rejected — or your existing
                    account may be suspended.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Google's Exact Requirements */}
              <section id="google-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Google&apos;s Exact Privacy Policy Requirements
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    According to Google&apos;s AdSense Program Policies and the
                    Required Content page, your privacy policy must specifically
                    address these items:
                  </p>

                  {[
                    {
                      title: "Third-Party Ad Technology Disclosure",
                      desc: "State that third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your site or other websites.",
                    },
                    {
                      title: "DoubleClick Cookie Notice",
                      desc: "Disclose Google's use of the DoubleClick cookie, which enables Google and its partners to serve ads based on users' browsing patterns across the web.",
                    },
                    {
                      title: "Opt-Out Instructions",
                      desc: "Inform users they can opt out of personalized advertising by visiting Google's Ads Settings. If you're in the EU, link to www.youronlinechoices.com as well.",
                    },
                    {
                      title: "Additional Ad Networks",
                      desc: "If you use other third-party advertising networks alongside AdSense, link to their respective privacy policies or opt-out mechanisms.",
                    },
                    {
                      title: "Accessible Privacy Policy Page",
                      desc: "Your privacy policy must be on a publicly accessible page on your site — not behind a login, inside a PDF, or on an external domain. Google's review team must be able to find it.",
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
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Common Rejection Reasons */}
              <section id="rejection-reasons" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why AdSense Applications Get Rejected
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="rounded-xl border border-red-200/60 bg-red-50/30 p-5">
                    <div className="flex gap-3 mb-4">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-base leading-7 text-slate-700">
                        <strong className="text-slate-900">
                          Common rejection:
                        </strong>{" "}
                        Google sends a &ldquo;Policy compliance — Privacy
                        policy&rdquo; rejection when your privacy policy is
                        missing, incomplete, or doesn&apos;t meet their specific
                        requirements.
                      </p>
                    </div>

                    <div className="space-y-5 mt-5">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          No Privacy Policy Page at All
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          The most common reason. Many first-time publishers
                          apply without creating a privacy policy page. Google
                          will not approve your application until one exists and
                          is linked from your site.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Generic Policy Without Ad Disclosures
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Using a{" "}
                          <Link
                            href="/chatgpt-privacy-policy-risks"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            ChatGPT-generated policy
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>{" "}
                          or a{" "}
                          <Link
                            href="/free-vs-paid-privacy-policy-generator"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            free generator
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>{" "}
                          that doesn&apos;t mention Google AdSense, DoubleClick
                          cookies, or personalized advertising. Google
                          specifically looks for these disclosures.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Policy Not Accessible or Not Linked
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Your privacy policy exists but isn&apos;t linked from
                          your website&apos;s footer, navigation, or a prominent
                          location. Google&apos;s review team must be able to
                          find it without searching.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Missing Cookie and Tracking Disclosures
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Your policy doesn&apos;t explain how{" "}
                          <Link
                            href="/cookie-policy-for-websites"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            cookies
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>{" "}
                          are used for advertising purposes, how third-party
                          vendors collect data, or how users can opt out.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          No GDPR or CCPA Coverage
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          If your site receives traffic from the EU or
                          California (most sites do), Google expects your policy
                          to address{" "}
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
                            CCPA
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>{" "}
                          requirements, especially around ad personalization
                          consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: What to Include */}
              <section id="sections" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Your AdSense Privacy Policy Must Include
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  {[
                    {
                      title: "Advertising Cookies Disclosure",
                      desc: "Explain that Google uses cookies (including the DoubleClick cookie) to serve personalized ads based on users' browsing history across the web.",
                    },
                    {
                      title: "Google AdSense as a Third-Party Vendor",
                      desc: "Name Google AdSense specifically as a third-party advertising service that collects and processes visitor data on your site.",
                    },
                    {
                      title: "Data Collected by Ad Technology",
                      desc: "Describe what data is collected through advertising technology — IP addresses, browser type, pages visited, time on site, and interaction with ads.",
                    },
                    {
                      title: "User Opt-Out Options",
                      desc: "Provide clear instructions and links for opting out of personalized ads via Google Ads Settings and, for EU visitors, the European Interactive Digital Advertising Alliance.",
                    },
                    {
                      title: "Google Analytics Disclosure",
                      desc: "If you also use Google Analytics (most AdSense publishers do), disclose this separately — what data it collects, cookies it sets, and how to opt out.",
                    },
                    {
                      title: "Other Data Collection",
                      desc: "Cover all other data your site collects beyond advertising — contact forms, email signups, comments, user accounts, and any other personal information.",
                    },
                    {
                      title: "Data Retention Periods",
                      desc: "Specify how long different types of data are retained — ad interaction data, analytics data, form submissions, and account information.",
                    },
                    {
                      title: "User Rights",
                      desc: "Include GDPR rights (access, deletion, portability) and CCPA rights (right to know, delete, opt out of sale) with clear procedures for exercising them.",
                    },
                    {
                      title: "Contact Information",
                      desc: "Provide a way for visitors to contact you about privacy concerns — an email address or contact form. Google checks for this.",
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
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: GDPR & CCPA for Ad Publishers */}
              <section id="gdpr-ccpa" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GDPR and CCPA Requirements for Ad Publishers
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  <p className="text-base leading-7 text-slate-700">
                    Running ads on your site adds extra regulatory requirements
                    beyond a standard{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      website privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . Advertising technology processes personal data at scale,
                    which means stricter compliance obligations.
                  </p>

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
                        for AdSense Publishers
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Obtain consent before loading AdSense scripts for EU/UK visitors (Google requires this)",
                        "Disclose Google as a data processor and list the data shared with Google's ad network",
                        "Explain lawful basis for ad personalization (typically consent under GDPR)",
                        "Provide opt-out mechanism for personalized ads before they are served",
                        "Include Google's data processing terms reference in your compliance documentation",
                        "Offer non-personalized ad option for users who decline consent",
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
                        for AdSense Publishers
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Disclose that ad-related data may constitute \"selling\" or \"sharing\" under CCPA definitions",
                        "Enable Google's Restricted Data Processing flag for California users who opt out",
                        'Provide a "Do Not Sell or Share My Personal Information" link',
                        "List categories of personal information shared with advertising partners",
                        "Explain how ad personalization data is used and with which third parties",
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
                      Generate Your AdSense-Ready Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Get a privacy policy that meets Google AdSense
                      requirements, plus GDPR &amp; CCPA compliance — with a
                      Cookie Policy included. Ready in 60 seconds.
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
                      <span>Privacy + Cookie + ToS</span>
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
                      Will Google reject my AdSense application without a
                      privacy policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes. Google explicitly requires a privacy policy that
                      discloses the use of cookies for advertising. Applications
                      without one receive a &ldquo;Policy compliance&rdquo;
                      rejection. Existing accounts can also be suspended for
                      non-compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Can I use a free privacy policy template for AdSense?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Most{" "}
                      <Link
                        href="/free-vs-paid-privacy-policy-generator"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        free generators
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/chatgpt-privacy-policy-risks"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        ChatGPT-generated policies
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      don&apos;t include AdSense-specific disclosures like the
                      DoubleClick cookie, personalized advertising opt-out, or
                      third-party ad vendor notices. This leads to rejections.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Where should I put my privacy policy for AdSense approval?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Place it on a dedicated page (e.g.,
                      yoursite.com/privacy-policy) and link it from your
                      website&apos;s footer on every page. Google&apos;s review
                      team must be able to find it easily. Don&apos;t put it
                      behind a login, in a PDF, or on a different domain.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Do I also need a cookie policy for AdSense?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes, especially for EU visitors. AdSense uses multiple
                      cookies for ad targeting and measurement. A{" "}
                      <Link
                        href="/cookie-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        cookie policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      that classifies advertising cookies and explains their
                      purpose is essential for{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      compliance. Our generator includes one automatically.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      How long does AdSense approval take after adding a privacy
                      policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      After adding a compliant privacy policy, you can resubmit
                      your application. Google typically reviews within 1–14
                      days. Make sure your policy is live, accessible, and linked
                      from your footer before resubmitting.
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
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "General website privacy policy guide",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: FileText,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie compliance and classification",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide for publishers",
                    },
                    {
                      href: "/chatgpt-privacy-policy-risks",
                      icon: AlertTriangle,
                      title: "ChatGPT Privacy Policy Risks",
                      desc: "Why generic AI policies get rejected",
                    },
                    {
                      href: "/free-vs-paid-privacy-policy-generator",
                      icon: FileText,
                      title: "Free vs Paid Generator",
                      desc: "Why free templates fall short",
                    },
                    {
                      href: "/privacy-policy-for-wordpress",
                      icon: FileText,
                      title: "Privacy Policy for WordPress",
                      desc: "WordPress-specific compliance guide",
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
