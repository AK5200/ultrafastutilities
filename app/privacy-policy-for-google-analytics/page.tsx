import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  BarChart3,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Globe,
  Cookie,
  Server,
  Clock,
  Eye,
  XCircle,
  Settings,
  Lightbulb,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Google Analytics: Website Owner Guide (2026) | ultrafastutilities",
  description: "Using Google Analytics? Your privacy policy must disclose it. Google requires it. Learn what GA4 collects, cookie consent requirements, IP anonymization, data retention settings, and GDPR compliance.",
  keywords: "privacy policy for google analytics, google analytics privacy policy, ga4 privacy policy, google analytics cookie policy, google analytics gdpr",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-google-analytics",
  },
  openGraph: {
    title: "Privacy Policy for Google Analytics: Website Owner Guide (2026) | ultrafastutilities",
    description: "Using Google Analytics? Your privacy policy must disclose it. Google requires it. Learn what GA4 collects, cookie consent requirements, IP anonymization, data retention settings, and GDPR compliance.",
    url: "https://ultrafastutilities.com/privacy-policy-for-google-analytics",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Google Analytics | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Google Analytics: Website Owner Guide (2026) | ultrafastutilities",
    description: "Using Google Analytics? Your privacy policy must disclose it. Google requires it. Learn what GA4 collects, cookie consent requirements, IP anonymization, data retention settings, and GDPR compliance.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-required", title: "Why GA Requires It" },
  { id: "what-ga4-collects", title: "What GA4 Collects" },
  { id: "ga4-vs-ua", title: "GA4 vs Universal Analytics" },
  { id: "cookie-consent", title: "Cookie Consent by Region" },
  { id: "ip-anonymization", title: "IP and Data Retention" },
  { id: "signals-remarketing", title: "Signals and Remarketing" },
  { id: "server-side", title: "Server-Side Tracking" },
  { id: "how-to-write", title: "How to Write the Disclosure" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForGoogleAnalyticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Google Analytics: What You Must Disclose to Visitors",
            description: "Using Google Analytics? Your privacy policy must disclose it. Google requires it. Learn what GA4 collects, cookie consent requirements, IP anonymization, data retention settings, and GDPR compliance.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-03-27",
            dateModified: "2026-03-27",
            publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Google Analytics", item: "https://ultrafastutilities.com/privacy-policy-for-google-analytics" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Add a Google Analytics Disclosure to Your Privacy Policy",
            description: "Step-by-step guide for website owners to properly disclose Google Analytics usage in their privacy policy.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Name the tool", text: "State that your website uses Google Analytics, a web analytics service provided by Google LLC." },
              { "@type": "HowToStep", position: 2, name: "Describe what is collected", text: "List the data categories GA4 collects: cookies, IP address, pages viewed, session duration, device information, and more." },
              { "@type": "HowToStep", position: 3, name: "Explain the purpose", text: "State why you use Google Analytics, such as understanding visitor behavior, improving content, and measuring marketing performance." },
              { "@type": "HowToStep", position: 4, name: "Disclose data sharing", text: "Explain that data is transmitted to and processed by Google servers, potentially including servers in the United States." },
              { "@type": "HowToStep", position: 5, name: "Provide opt-out information", text: "Link to the Google Analytics opt-out browser add-on and explain how visitors can manage cookie preferences." },
              { "@type": "HowToStep", position: 6, name: "Link to Google's privacy policy", text: "Include a link to Google's privacy policy at policies.google.com/privacy so visitors can review Google's own data practices." },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Does Google require a privacy policy for Google Analytics?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Section 7 of the Google Analytics Terms of Service requires you to have a privacy policy that discloses your use of Google Analytics, including how data is collected and processed. Failure to comply can result in account termination." },
              },
              {
                "@type": "Question",
                name: "What must I disclose about Google Analytics in my privacy policy?",
                acceptedAnswer: { "@type": "Answer", text: "You must disclose that you use Google Analytics, what data it collects (cookies, IP addresses, browsing behavior), why you collect it, how Google processes the data, and how visitors can opt out. You should also link to Google's own privacy policy." },
              },
              {
                "@type": "Question",
                name: "Does GA4 use cookies?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. GA4 uses first-party cookies (primarily _ga and _ga_<container-id>) to distinguish unique users and sessions. These cookies store a randomly generated client ID and have a default expiration of 2 years for _ga and 24 hours for session cookies." },
              },
              {
                "@type": "Question",
                name: "Is Google Analytics GDPR compliant?",
                acceptedAnswer: { "@type": "Answer", text: "Google Analytics can be used in a GDPR-compliant manner, but the responsibility falls on the website owner. You must obtain cookie consent before firing GA tags in the EU/EEA, configure IP anonymization, set appropriate data retention periods, and sign a Data Processing Agreement with Google." },
              },
              {
                "@type": "Question",
                name: "Do I need cookie consent for Google Analytics?",
                acceptedAnswer: { "@type": "Answer", text: "In the EU/EEA and UK, yes. The GDPR and ePrivacy Directive require prior consent before setting non-essential cookies. In the US, requirements vary by state. California's CCPA requires disclosure but not prior consent. Many other regions are adopting similar consent requirements." },
              },
              {
                "@type": "Question",
                name: "What is the difference between GA4 and Universal Analytics for privacy?",
                acceptedAnswer: { "@type": "Answer", text: "GA4 was designed with privacy in mind. It does not store IP addresses, uses first-party cookies only, has built-in consent mode, supports cookieless measurement, and offers shorter default data retention. Universal Analytics stored full IP addresses and relied more heavily on cookies." },
              },
              {
                "@type": "Question",
                name: "Can I use Google Analytics without cookies?",
                acceptedAnswer: { "@type": "Answer", text: "GA4 supports a 'cookieless' mode through Google Consent Mode v2. When a user declines cookies, GA4 can still collect anonymized, aggregated data using pings without setting cookies. However, this provides less granular data and still requires disclosure in your privacy policy." },
              },
            ],
          }),
        }}
      />
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
              <span className="text-slate-600">Privacy Policy for Google Analytics</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BarChart3 className="w-3.5 h-3.5" />
                Analytics Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Google Analytics
                </span>
                : What You Must Disclose to Visitors
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Google requires every website using Google Analytics to have a
                privacy policy that discloses it. Learn exactly what GA4
                collects, consent requirements, and how to stay compliant.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for site owners and developers.
              </p>
            </div>

            {/* Featured Snippet */}
            <div className="mt-8 max-w-2xl rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
              <div className="flex gap-3">
                <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed text-slate-700">
                  <strong className="text-slate-900">Quick answer:</strong>{" "}
                  Yes, you need a privacy policy if you use Google Analytics. Section 7 of the
                  Google Analytics Terms of Service mandates it. Your policy must name Google
                  Analytics, describe what data is collected, explain cookie usage, and provide
                  an opt-out mechanism. Failing to comply can result in account termination.
                </div>
              </div>
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
                href="/cookie-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Cookie className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Cookie Policy Guide
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
              {/* Author + Trust Signals */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">
                    AK
                  </div>
                  <span>
                    Written by{" "}
                    <span className="font-semibold text-slate-800">
                      Anupam Kumar
                    </span>
                  </span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <span>Last updated: March 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>12 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: Why Google Analytics Requires a Privacy Policy */}
              <section id="why-required" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Google Analytics Requires a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    It is not optional. Section 7 of the{" "}
                    <strong className="text-slate-900">Google Analytics Terms of Service</strong>{" "}
                    explicitly states that you must have and abide by an appropriate privacy
                    policy. This policy must inform visitors that you use cookies, collect
                    data, and share information with Google.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Beyond Google&apos;s own requirements, privacy laws like the{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and CCPA also mandate disclosure of all third-party analytics tools.
                    Without proper disclosure, you risk both legal penalties and losing
                    your Google Analytics account.
                  </p>

                  {/* Key requirement callout */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Google TOS mandate:</strong>{" "}
                        &quot;You must post a Privacy Policy and that Privacy Policy must provide
                        notice of Your use of cookies, identifiers for mobile devices, or
                        similar technology used to collect data.&quot; Violating this can result
                        in account suspension or termination.
                      </div>
                    </div>
                  </div>

                  {/* Did you know? #1 */}
                  <div className="mt-6 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Google has terminated Analytics accounts for TOS violations,
                        including failure to maintain a compliant privacy policy. Once
                        terminated, all historical data is permanently deleted.
                      </div>
                    </div>
                  </div>

                  {/* Mini FAQ */}
                  <div className="mt-6 space-y-4">
                    <div className="rounded-xl border border-slate-200/80 p-5">
                      <h3 className="font-semibold text-slate-900 text-sm">
                        What happens if I use GA without a privacy policy?
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 mt-2">
                        You violate Google&apos;s Terms of Service, which can lead to account
                        termination. Under GDPR, you could face fines up to 4% of annual
                        revenue. Under CCPA, penalties can reach $7,500 per intentional violation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What GA4 Collects */}
              <section id="what-ga4-collects" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What GA4 Collects
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every data point GA4 captures that you must disclose in your
                      privacy policy.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  {/* Data Collection Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200/60">
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Data Type</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Details</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Disclosure Required</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/60">
                        {[
                          { type: "Cookies", details: "_ga, _ga_<id> first-party cookies with client IDs", required: "Yes, always" },
                          { type: "IP Address", details: "Collected but not logged in GA4 (anonymized by default)", required: "Yes, mention collection" },
                          { type: "Device Info", details: "Browser, OS, screen resolution, device category", required: "Yes" },
                          { type: "Pages Viewed", details: "Page URLs, page titles, and page referrer", required: "Yes" },
                          { type: "Session Duration", details: "Time spent on site, engagement time per page", required: "Yes" },
                          { type: "Referrer", details: "Traffic source, campaign parameters, medium", required: "Yes" },
                          { type: "Demographics", details: "Age, gender, interests (if enabled via Google Signals)", required: "Yes, if enabled" },
                          { type: "User ID", details: "Custom user identifier (if you configure it)", required: "Yes, if implemented" },
                          { type: "Events", details: "Clicks, scrolls, file downloads, video plays, form submissions", required: "Yes" },
                          { type: "Conversions", details: "Goals, purchase events, custom conversion events", required: "Yes" },
                        ].map((row) => (
                          <tr key={row.type} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                            <td className="px-4 py-3 text-slate-600">{row.details}</td>
                            <td className="px-4 py-3 text-slate-600">{row.required}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Did you know? #2 */}
                  <div className="mt-6 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        GA4 automatically collects &quot;enhanced measurement&quot; events like
                        scroll depth, outbound clicks, site search, and file downloads
                        without any extra code. Your privacy policy should cover these
                        automatic collections even if you did not explicitly set them up.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: GA4 vs Universal Analytics Privacy Differences */}
              <section id="ga4-vs-ua" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GA4 vs Universal Analytics Privacy Differences
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Google sunsetted Universal Analytics (UA) in July 2023 and replaced it
                    with GA4. The privacy model changed significantly. If your privacy
                    policy still references Universal Analytics, it needs updating.
                  </p>

                  <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200/60">
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Feature</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Universal Analytics</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">GA4</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/60">
                        {[
                          { feature: "IP Storage", ua: "Full IP logged by default", ga4: "IP not stored (anonymized by default)" },
                          { feature: "Cookie Type", ua: "Third-party and first-party", ga4: "First-party cookies only" },
                          { feature: "Consent Mode", ua: "Not built in", ga4: "Native Consent Mode v2" },
                          { feature: "Cookieless Tracking", ua: "Not supported", ga4: "Supported via modeling" },
                          { feature: "Data Retention", ua: "Up to 50 months", ga4: "2 or 14 months (default 2)" },
                          { feature: "User Deletion", ua: "Manual process", ga4: "Built-in user deletion API" },
                        ].map((row) => (
                          <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-800">{row.feature}</td>
                            <td className="px-4 py-3 text-slate-600">{row.ua}</td>
                            <td className="px-4 py-3 text-slate-600">{row.ga4}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Cookie Consent Requirements by Region */}
              <section id="cookie-consent" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Cookie Consent Requirements by Region
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-6">
                  <p className="text-base leading-7 text-slate-700">
                    Google Analytics sets cookies, and the consent requirements vary
                    depending on where your visitors are located. You need a{" "}
                    <Link
                      href="/cookie-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      cookie policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    that addresses each region.
                  </p>

                  {[
                    {
                      icon: Globe,
                      region: "EU/EEA and UK (GDPR + ePrivacy)",
                      requirement: "Prior opt-in consent required before setting any GA cookies. You must not fire the GA tag until the user actively consents. Use Google Consent Mode to handle this.",
                      color: "violet",
                    },
                    {
                      icon: Globe,
                      region: "California, USA (CCPA/CPRA)",
                      requirement: "Disclosure required, but prior consent is not mandatory for analytics. You must provide a 'Do Not Sell or Share My Personal Information' link and honor Global Privacy Control signals.",
                      color: "emerald",
                    },
                    {
                      icon: Globe,
                      region: "Brazil (LGPD)",
                      requirement: "Similar to GDPR. Consent or legitimate interest required. You must disclose the data controller, purpose, and provide opt-out rights.",
                      color: "orange",
                    },
                    {
                      icon: Globe,
                      region: "Canada (PIPEDA)",
                      requirement: "Meaningful consent required. Implied consent may be acceptable for analytics cookies if disclosure is clear, but explicit consent is safer.",
                      color: "blue",
                    },
                  ].map((item) => (
                    <div key={item.region} className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg bg-${item.color}-50 flex items-center justify-center`}>
                          <item.icon className={`w-4 h-4 text-${item.color}-600`} />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          {item.region}
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11">
                        {item.requirement}
                      </p>
                    </div>
                  ))}

                  {/* Mini FAQ */}
                  <div className="rounded-xl border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 text-sm">
                      What is Google Consent Mode v2?
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 mt-2">
                      Consent Mode v2 lets Google tags adjust their behavior based on
                      user consent status. When consent is denied, GA4 sends cookieless
                      pings instead of setting cookies. Google then uses modeling to fill
                      data gaps. As of March 2024, Consent Mode v2 is required for sites
                      serving EU users who want to use GA4 audience features.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: IP Anonymization and Data Retention Settings */}
              <section id="ip-anonymization" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      IP Anonymization and Data Retention Settings
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        IP Anonymization in GA4
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        GA4 anonymizes IP addresses by default. Unlike Universal Analytics
                        where you had to manually enable <code className="text-sm bg-slate-100 px-1.5 py-0.5 rounded">anonymize_ip</code>,
                        GA4 never stores full IP addresses. However, the IP is still briefly
                        processed for geolocation before being discarded. You should still
                        disclose that IP addresses are collected and processed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Data Retention Configuration
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        GA4 offers two retention periods: 2 months or 14 months.
                        The default is 2 months. This applies to user-level and event-level
                        data, not aggregated reports. For GDPR compliance, shorter retention
                        periods are recommended. Configure this in Admin &gt; Data Settings &gt;
                        Data Retention.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        User Data Deletion
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        GA4 provides a User Deletion API and a manual deletion tool
                        in the admin interface. When a user requests data deletion under
                        GDPR or CCPA, you can delete their data by client ID or user ID.
                        Your privacy policy should explain this right and how users can
                        exercise it.
                      </p>
                    </div>
                  </div>

                  {/* Did you know? #3 */}
                  <div className="rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Even with GA4&apos;s default IP anonymization, several EU data
                        protection authorities initially ruled that Google Analytics
                        violated GDPR due to data transfers to the US. Google addressed
                        this with the EU-US Data Privacy Framework in 2023, but you should
                        still mention international data transfers in your policy.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Google Signals and Remarketing */}
              <section id="signals-remarketing" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Google Signals and Remarketing
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    If you enable Google Signals or use Google Analytics data for
                    remarketing, your privacy obligations increase significantly. These
                    features link analytics data to Google accounts, enabling cross-device
                    tracking and personalized advertising.
                  </p>

                  <div className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Google Signals
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        When enabled, Google Signals collects demographics and interest
                        data from users who have turned on Ads Personalization in their
                        Google accounts. This enables cross-device reporting. Your privacy
                        policy must disclose that you collect demographic and interest data,
                        and you must link to Google&apos;s Ads Settings page where users can
                        opt out.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Remarketing and Advertising Features
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        If you use GA4 data for Google Ads remarketing audiences, you must
                        disclose this practice. Visitors must be informed that their browsing
                        data may be used to show them targeted ads on other websites. This
                        is closely related to your{" "}
                        <Link
                          href="/do-i-need-a-privacy-policy-for-google-adsense"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          Google AdSense disclosure requirements
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Server-Side Tracking */}
              <section id="server-side" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Server-Side Tracking
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Server-side Google Tag Manager (sGTM) allows you to route GA4 data
                    through your own server before sending it to Google. While this gives
                    you more control over data, it does not eliminate the need for a
                    privacy policy.
                  </p>

                  <div className="mt-6 space-y-5">
                    <div className="flex items-start gap-3">
                      <Server className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Privacy Benefits of Server-Side Tracking
                        </h3>
                        <ul className="space-y-2 text-base leading-7 text-slate-600">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                            You can strip or redact personal data before it reaches Google
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                            IP addresses can be removed at the server level
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                            First-party cookies are set from your own domain
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                            Reduced exposure to ad blockers and browser restrictions
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                      <div className="flex gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm leading-relaxed text-slate-700">
                          <strong className="text-slate-900">Important:</strong>{" "}
                          Server-side tracking does not bypass consent requirements.
                          You still need cookie consent in the EU, and you must still
                          disclose data collection in your privacy policy. The data is
                          still being collected from visitors, just routed differently.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: How to Write the GA Disclosure */}
              <section id="how-to-write" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Write the GA Disclosure
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Follow these six steps to create a complete Google Analytics
                      disclosure for your{" "}
                      <Link
                        href="/privacy-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        website privacy policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {[
                    {
                      step: "Step 1",
                      title: "Name the tool",
                      text: "State that your website uses Google Analytics, a web analytics service provided by Google LLC (or Google Ireland Limited for EU users). Use the exact product name.",
                    },
                    {
                      step: "Step 2",
                      title: "Describe what is collected",
                      text: "List the categories of data GA4 collects: cookies, anonymized IP addresses, pages viewed, session duration, device and browser information, referral sources, and any custom events you track.",
                    },
                    {
                      step: "Step 3",
                      title: "Explain the purpose",
                      text: "State why you use Google Analytics. Common purposes include understanding visitor behavior, improving website content, measuring marketing campaign performance, and identifying technical issues.",
                    },
                    {
                      step: "Step 4",
                      title: "Disclose data sharing with Google",
                      text: "Explain that collected data is transmitted to and processed by Google on servers that may be located in the United States. Reference the EU-US Data Privacy Framework if applicable.",
                    },
                    {
                      step: "Step 5",
                      title: "Provide opt-out information",
                      text: "Link to the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout) and explain how visitors can manage cookie preferences through your consent banner.",
                    },
                    {
                      step: "Step 6",
                      title: "Link to Google's privacy policy",
                      text: "Include a direct link to Google's privacy policy (policies.google.com/privacy) and their partner data usage page (policies.google.com/technologies/partner-sites) for full transparency.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {item.step}: {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you use{" "}
                    <Link
                      href="/privacy-policy-for-wordpress"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      WordPress
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , many GA plugins include basic disclosure templates, but these
                    rarely cover all requirements. Review and customize them to include
                    every data type listed above.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 9: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      5 Common Mistakes to Avoid
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      mistake: "Not mentioning Google Analytics by name",
                      explanation: "Vague language like 'we use analytics tools' is insufficient. Google's TOS requires you to specifically name Google Analytics in your privacy policy.",
                    },
                    {
                      mistake: "Firing GA tags before consent in the EU",
                      explanation: "Loading the GA script before obtaining cookie consent violates the ePrivacy Directive. Use Google Consent Mode or defer script loading until consent is granted.",
                    },
                    {
                      mistake: "Referencing Universal Analytics settings",
                      explanation: "If your policy still mentions UA tracking IDs (UA-XXXXX), anonymize_ip configuration, or UA-specific cookies, it is outdated. Update it for GA4.",
                    },
                    {
                      mistake: "Forgetting to disclose Google Signals or remarketing",
                      explanation: "If you have Google Signals enabled or use GA audiences for ads, these create additional data processing that must be separately disclosed in your policy.",
                    },
                    {
                      mistake: "No opt-out mechanism provided",
                      explanation: "Your policy must tell visitors how to opt out. At minimum, link to the Google Analytics Opt-out Add-on and provide a cookie settings control on your site.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-xl border border-slate-200/80 p-5 hover:border-red-200 hover:shadow-sm transition-all">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">
                          {item.mistake}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600 mt-1">
                          {item.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      q: "Does Google require a privacy policy for Google Analytics?",
                      a: "Yes. Section 7 of the Google Analytics Terms of Service requires you to have a privacy policy that discloses your use of Google Analytics, including how data is collected and processed. Failure to comply can result in account termination.",
                    },
                    {
                      q: "What must I disclose about Google Analytics in my privacy policy?",
                      a: "You must disclose that you use Google Analytics, what data it collects (cookies, IP addresses, browsing behavior), why you collect it, how Google processes the data, and how visitors can opt out. You should also link to Google's own privacy policy.",
                    },
                    {
                      q: "Does GA4 use cookies?",
                      a: "Yes. GA4 uses first-party cookies (primarily _ga and _ga_<container-id>) to distinguish unique users and sessions. These cookies store a randomly generated client ID and have a default expiration of 2 years for _ga and 24 hours for session cookies.",
                    },
                    {
                      q: "Is Google Analytics GDPR compliant?",
                      a: "Google Analytics can be used in a GDPR-compliant manner, but the responsibility falls on the website owner. You must obtain cookie consent before firing GA tags in the EU/EEA, configure appropriate data retention periods, and sign a Data Processing Agreement with Google.",
                    },
                    {
                      q: "Do I need cookie consent for Google Analytics?",
                      a: "In the EU/EEA and UK, yes. The GDPR and ePrivacy Directive require prior consent before setting non-essential cookies. In the US, requirements vary by state. California's CCPA requires disclosure but not prior consent for analytics cookies.",
                    },
                    {
                      q: "Can I use Google Analytics without cookies?",
                      a: "GA4 supports a cookieless mode through Google Consent Mode v2. When a user declines cookies, GA4 can still collect anonymized, aggregated data using pings without setting cookies. However, this provides less granular data and still requires disclosure in your privacy policy.",
                    },
                    {
                      q: "Do I need a separate cookie policy for Google Analytics?",
                      a: "While not strictly required by Google, having a dedicated cookie policy is best practice and required in the EU. It should list the specific GA cookies (_ga, _ga_<id>), their purpose, and their expiration. You can include this in your main privacy policy or as a separate page.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-xl border border-slate-200/80 p-5">
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.q}
                      </h3>
                      <p className="text-base leading-7 text-slate-600 mt-2">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Dark CTA Section */}
              <section id="generate" className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <BarChart3 className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your Google Analytics Privacy Policy
                    </h2>
                    <p className="mt-3 text-slate-300 text-base max-w-md mx-auto">
                      Stop worrying about compliance. Generate a privacy policy that
                      properly discloses Google Analytics and meets GDPR requirements.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-blue-600 text-white hover:bg-blue-500 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy Now
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-slate-400">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500/50" />
                      <span>GA4-ready</span>
                    </div>

                    <p className="text-xs text-slate-500 mt-3 max-w-lg mx-auto">
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
                      desc: "Complete website compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-firebase",
                      icon: Settings,
                      title: "Privacy Policy for Firebase",
                      desc: "Firebase and Google services compliance",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-google-adsense",
                      icon: BarChart3,
                      title: "Privacy Policy for Google AdSense",
                      desc: "AdSense disclosure requirements",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: Cookie,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie consent and disclosure guide",
                    },
                    {
                      href: "/privacy-policy-for-wordpress",
                      icon: FileText,
                      title: "Privacy Policy for WordPress",
                      desc: "WordPress-specific compliance guide",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance template and structure",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks of operating without a policy",
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
