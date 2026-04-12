import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Users,
  Globe,
  AlertTriangle,
  Clock,
  Ban,
  CheckCircle,
  Database,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for HubSpot: CRM & Marketing Guide (2026) | ultrafastutilities",
  description: "Using HubSpot for CRM, marketing, or sales? Your privacy policy must cover tracking code, forms, email tracking, chat, and contact management. Complete guide for HubSpot users.",
  keywords: "privacy policy for hubspot, hubspot privacy policy, hubspot crm privacy policy, hubspot tracking code privacy, hubspot marketing privacy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-hubspot",
  },
  openGraph: {
    title: "Privacy Policy for HubSpot: CRM & Marketing Guide (2026) | ultrafastutilities",
    description: "Using HubSpot for CRM, marketing, or sales? Your privacy policy must cover tracking code, forms, email tracking, chat, and contact management. Complete guide for HubSpot users.",
    url: "https://ultrafastutilities.com/privacy-policy-for-hubspot",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for HubSpot | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for HubSpot: CRM & Marketing Guide (2026) | ultrafastutilities",
    description: "Using HubSpot for CRM, marketing, or sales? Your privacy policy must cover tracking code, forms, email tracking, chat, and contact management. Complete guide for HubSpot users.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-hubspot-needs-policy", title: "Why You Need a Policy" },
  { id: "hubspot-products", title: "HubSpot Products & Data" },
  { id: "tracking-code", title: "HubSpot Tracking Code" },
  { id: "forms-landing-pages", title: "Forms & Landing Pages" },
  { id: "email-tracking", title: "Email Marketing & Tracking" },
  { id: "chatbot-live-chat", title: "Chatbot & Live Chat" },
  { id: "contact-database", title: "Contact Database & Segmentation" },
  { id: "cookie-banner", title: "HubSpot Cookie Banner" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "howto", title: "How to Write Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForHubSpotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for HubSpot: What CRM and Marketing Users Must Disclose",
            description: "Using HubSpot for CRM, marketing, or sales? Your privacy policy must cover tracking code, forms, email tracking, chat, and contact management. Complete guide for HubSpot users.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-04-11",
            dateModified: "2026-04-11",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for HubSpot", item: "https://ultrafastutilities.com/privacy-policy-for-hubspot" },
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
            name: "How to Write a Privacy Policy for HubSpot",
            description: "Step-by-step guide to creating a privacy policy that covers your HubSpot CRM and marketing activities.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Audit your HubSpot data collection", text: "List every type of data HubSpot collects on your behalf: contact emails, names, company info, IP addresses, page views, form submissions, email engagement, and chat transcripts." },
              { "@type": "HowToStep", position: 2, name: "Document all HubSpot products you use", text: "Identify which HubSpot products you actively use: CRM, Marketing Hub, Sales Hub, Service Hub, CMS Hub, or Operations Hub. Each product collects different types of data." },
              { "@type": "HowToStep", position: 3, name: "Disclose tracking code and cookies", text: "Explain that HubSpot's tracking code monitors page views, sessions, referral sources, and visitor behavior on your website. Specify which cookies are set and their purposes." },
              { "@type": "HowToStep", position: 4, name: "Address email tracking and marketing", text: "Disclose that HubSpot tracks email opens, link clicks, and engagement metrics. Explain how this data is used for lead scoring, segmentation, and campaign optimization." },
              { "@type": "HowToStep", position: 5, name: "Cover chatbot and live chat data", text: "If you use HubSpot's chatbot or live chat, disclose what data is collected during conversations including visitor identity, chat transcripts, and any information provided by the visitor." },
              { "@type": "HowToStep", position: 6, name: "Reference HubSpot as a data processor", text: "Name HubSpot Inc. as a third-party data processor, link to their privacy policy, and reference the Data Processing Agreement (DPA) that governs how HubSpot handles your contacts' data." },
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
                name: "Do I need a privacy policy if I use HubSpot?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. HubSpot's Terms of Service require all users to maintain a privacy policy. Additionally, laws like GDPR and CCPA require you to disclose how you collect, use, and store personal data through HubSpot's tracking code, forms, and CRM." },
              },
              {
                "@type": "Question",
                name: "What data does HubSpot's tracking code collect?",
                acceptedAnswer: { "@type": "Answer", text: "HubSpot's tracking code collects page views, session duration, referral sources, browser and device information, IP addresses, and visitor behavior patterns. It uses first-party cookies to identify returning visitors and associate their activity with contact records in your CRM." },
              },
              {
                "@type": "Question",
                name: "Does HubSpot comply with GDPR?",
                acceptedAnswer: { "@type": "Answer", text: "HubSpot offers GDPR-compliant features including a cookie consent banner, lawful basis tracking for contacts, data deletion tools, and a Data Processing Agreement (DPA). However, you as the data controller are responsible for configuring these features correctly and disclosing them in your privacy policy." },
              },
              {
                "@type": "Question",
                name: "Is HubSpot a data processor or data controller?",
                acceptedAnswer: { "@type": "Answer", text: "HubSpot acts as a data processor on your behalf. You are the data controller responsible for determining how and why contact data is processed. HubSpot provides a Data Processing Agreement (DPA) that formalizes this relationship under GDPR." },
              },
              {
                "@type": "Question",
                name: "Does HubSpot's free CRM still require a privacy policy?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Even HubSpot's free CRM collects and stores personal data such as contact names, emails, company information, and activity history. The tracking code also collects website visitor data. All of this requires disclosure in a privacy policy regardless of your HubSpot plan." },
              },
              {
                "@type": "Question",
                name: "How does HubSpot handle email tracking?",
                acceptedAnswer: { "@type": "Answer", text: "HubSpot tracks email opens using a tracking pixel and monitors link clicks through redirect URLs. This data is recorded at the contact level and used for lead scoring, engagement reporting, and workflow triggers. You must disclose this tracking in your privacy policy." },
              },
              {
                "@type": "Question",
                name: "What cookies does HubSpot set on my website?",
                acceptedAnswer: { "@type": "Answer", text: "HubSpot sets several first-party cookies including __hstc (visitor tracking), hubspotutk (visitor identity), __hssc (session tracking), and __hssrc (session reset). These cookies track visitor behavior, identify returning visitors, and connect website activity to CRM contact records." },
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
              <span className="text-slate-600">Privacy Policy for HubSpot</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Database className="w-3.5 h-3.5" />
                CRM and Marketing Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  HubSpot
                </span>
                : What CRM and Marketing Users Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Using HubSpot for CRM, marketing, or sales? Your privacy policy
                must cover tracking code, forms, email tracking, chatbot data,
                and contact management practices.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for marketers, SaaS companies, sales teams, and small business owners.
              </p>
            </div>

            {/* Featured Snippet */}
            <div className="mt-8 max-w-2xl rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed text-slate-700">
                  <strong className="text-slate-900">Quick answer:</strong>{" "}
                  Yes, you need a privacy policy if you use HubSpot. The HubSpot
                  tracking code monitors website visitors, forms capture personal
                  data, email tools track opens and clicks, and the CRM stores
                  contact records. GDPR, CCPA, and HubSpot's own Terms of
                  Service all require you to disclose these data practices.
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-saas"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for SaaS
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/do-i-need-a-privacy-policy-for-collecting-emails"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Collecting Emails Guide
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>14 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: Why HubSpot Users Need a Privacy Policy */}
              <section id="why-hubspot-needs-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why HubSpot Users Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    HubSpot is an all-in-one platform for CRM, marketing, sales,
                    and customer service. From the moment you install the HubSpot
                    tracking code on your website, it begins collecting visitor
                    data. Every form submission, email open, and chat
                    conversation adds personal data to your contact database.
                    This makes you the{" "}
                    <strong className="text-slate-900">data controller</strong>,
                    and you are legally required to disclose what data is
                    collected and how it is used.
                  </p>

                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Three separate requirements mandate a privacy policy for
                    HubSpot users:
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      {
                        label: "HubSpot's Terms of Service",
                        text: "HubSpot requires all customers to maintain a privacy policy that discloses the use of their platform and tracking technologies",
                      },
                      {
                        label: "GDPR (EU visitors and contacts)",
                        text: "You must disclose the legal basis for processing, data retention, cookie usage, and contact rights before collecting any data",
                      },
                      {
                        label: "CCPA (California residents)",
                        text: "Requires disclosure of data categories collected, the purpose of collection, and the right to opt out of data sales",
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

                  {/* Did you know? #1 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        HubSpot's tracking code starts collecting visitor data
                        the moment it is installed on your website. Even if you
                        only use the free CRM, the tracking code logs page
                        views, session data, and IP addresses for every visitor.
                        This counts as personal data collection under GDPR and
                        requires disclosure.
                      </div>
                    </div>
                  </div>

                  {/* Mini-FAQ #1 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <p className="font-semibold text-slate-900 text-sm">
                      Can I just link to HubSpot's privacy policy instead of writing my own?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      No. HubSpot's privacy policy covers how they handle data
                      as a company. As the data controller, you need your own
                      policy explaining what data you collect through HubSpot,
                      why you collect it, and how you use HubSpot to process it.
                      Linking to HubSpot's policy does not fulfill your legal
                      obligation.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: HubSpot Products Data Table */}
              <section id="hubspot-products" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      HubSpot Products and Their Data Collection
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Each HubSpot product collects different types of data that
                      must be disclosed in your privacy policy.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200/60">
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Product</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Data Collected</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Disclosure Required</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/60">
                        {[
                          { product: "CRM", data: "Contact names, emails, companies, activity history", disclosure: "Contact storage, data retention, third-party sharing" },
                          { product: "Marketing Hub", data: "Email opens, clicks, form submissions, ad interactions", disclosure: "Tracking methods, profiling, lead scoring" },
                          { product: "Sales Hub", data: "Email tracking, meeting bookings, call recordings", disclosure: "One-to-one email tracking, recording consent" },
                          { product: "Service Hub", data: "Ticket data, chat transcripts, feedback surveys", disclosure: "Support data storage, satisfaction tracking" },
                          { product: "CMS Hub", data: "Page views, visitor behavior, form data, A/B testing", disclosure: "Website cookies, analytics, personalization" },
                          { product: "Operations Hub", data: "Synced data from third-party tools, data mappings", disclosure: "Data integration sources, cross-platform sharing" },
                        ].map((row) => (
                          <tr key={row.product} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-800">{row.product}</td>
                            <td className="px-4 py-3 text-slate-600">{row.data}</td>
                            <td className="px-4 py-3 text-slate-600">{row.disclosure}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-700">
                    The more HubSpot products you use, the more data you collect
                    and the more detailed your privacy policy needs to be. For
                    SaaS-specific requirements, see our{" "}
                    <Link
                      href="/privacy-policy-for-saas"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      SaaS privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: HubSpot Tracking Code */}
              <section id="tracking-code" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      HubSpot Tracking Code and Website Analytics
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    The HubSpot tracking code is a JavaScript snippet installed
                    on every page of your website. It is the foundation of
                    HubSpot's analytics and connects website visitor behavior to
                    contact records in your CRM. Your privacy policy must
                    disclose how this tracking code works.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Page view tracking",
                        text: "The tracking code records every page a visitor views, including the URL, time spent on page, and scroll depth",
                      },
                      {
                        label: "Visitor identification",
                        text: "HubSpot sets first-party cookies (__hstc, hubspotutk, __hssc) to identify returning visitors and link their browsing history to CRM records",
                      },
                      {
                        label: "Referral source tracking",
                        text: "The code captures how visitors arrived at your site, including search terms, referring URLs, UTM parameters, and ad campaign data",
                      },
                      {
                        label: "Device and browser data",
                        text: "Browser type, operating system, screen resolution, and language preferences are collected for analytics and content optimization",
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

                  {/* Did you know? #2 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        HubSpot's __hstc cookie has a default lifespan of 13
                        months and tracks a visitor across every session during
                        that period. Once a visitor fills out a form, all of
                        their previous anonymous browsing history is
                        retroactively linked to their contact record. This
                        retroactive identification must be disclosed under GDPR.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Forms and Landing Pages */}
              <section id="forms-landing-pages" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Forms and Landing Pages
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    HubSpot forms are one of the primary ways personal data
                    enters your CRM. Whether embedded on your website or hosted
                    on HubSpot landing pages, each form submission creates or
                    updates a contact record. Your privacy policy must explain
                    what data is collected through forms and how it is used.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Form field data",
                        text: "Every field in your form (name, email, phone, company, job title) is stored in the CRM as a contact property",
                      },
                      {
                        label: "Hidden fields and metadata",
                        text: "HubSpot automatically captures the submission IP address, timestamp, page URL, and UTM parameters alongside form data",
                      },
                      {
                        label: "Progressive profiling",
                        text: "HubSpot can show different form fields to returning visitors to gradually collect more information over time. This must be disclosed",
                      },
                      {
                        label: "Landing page analytics",
                        text: "HubSpot landing pages track views, conversion rates, A/B test variants, and visitor behavior before and after form submission",
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

                  <p className="text-base leading-7 text-slate-700">
                    If you collect email addresses through HubSpot forms, see
                    our guide on{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-collecting-emails"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policies for collecting emails
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Email Marketing and Tracking */}
              <section id="email-tracking" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Email Marketing and Tracking
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    HubSpot's email tools track engagement at both the campaign
                    level and the individual contact level. This data feeds into
                    lead scoring, workflow triggers, and reporting. Your privacy
                    policy must disclose these tracking practices.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Open tracking",
                        text: "HubSpot embeds a tracking pixel in emails to detect when a recipient opens the message, recording their IP address, device, and timestamp",
                      },
                      {
                        label: "Click tracking",
                        text: "All links in HubSpot emails are routed through redirect URLs that log which contacts clicked, when they clicked, and how many times",
                      },
                      {
                        label: "One-to-one email tracking",
                        text: "Sales Hub tracks individual emails sent from your inbox, notifying sales reps when a prospect opens or clicks. This applies to personal sales emails, not just marketing campaigns",
                      },
                      {
                        label: "Lead scoring impact",
                        text: "Email engagement data directly affects contact lead scores, which may trigger automated workflows, sales notifications, or list segmentation",
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

                  {/* Mini-FAQ #2 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <p className="font-semibold text-slate-900 text-sm">
                      Can I disable email tracking in HubSpot?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Yes. HubSpot allows you to disable open and click tracking
                      for individual emails and at the account level. However,
                      if tracking is enabled (the default for both Marketing Hub
                      and Sales Hub), you must disclose it in your privacy
                      policy. Many businesses keep tracking enabled for lead
                      scoring and reporting purposes.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Chatbot and Live Chat */}
              <section id="chatbot-live-chat" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Chatbot and Live Chat Data
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    HubSpot's chatbot and live chat tools collect data during
                    every conversation. Chat interactions create or update
                    contact records and are stored as part of the contact
                    timeline. Your privacy policy must address how chat data is
                    handled.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Chat transcripts",
                        text: "Every conversation is saved and linked to the visitor's contact record, including messages, timestamps, and any information shared during the chat",
                      },
                      {
                        label: "Visitor identification",
                        text: "HubSpot uses cookies to identify returning chat visitors. If a visitor provides their email, the chat history is merged with their existing CRM record",
                      },
                      {
                        label: "Chatbot data collection",
                        text: "Automated chatbot flows can collect names, emails, phone numbers, and custom qualifying questions before routing to a live agent",
                      },
                      {
                        label: "Chat routing metadata",
                        text: "HubSpot logs which team member handled the chat, response times, and resolution status for reporting purposes",
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

                  {/* Did you know? #3 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        HubSpot's chatbot can collect personal data before a
                        visitor ever speaks to a human agent. Under GDPR, you
                        must inform visitors that they are interacting with an
                        automated system and disclose what data the chatbot
                        collects. Failing to do so can be treated as a lack of
                        transparency violation.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Contact Database and Segmentation */}
              <section id="contact-database" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Contact Database and Segmentation
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    HubSpot's CRM stores a comprehensive record for every
                    contact, combining data from forms, emails, website visits,
                    chats, and third-party integrations. The way you organize,
                    segment, and use this data has direct privacy implications.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Contact properties",
                        text: "HubSpot stores dozens of default properties (name, email, lifecycle stage, lead score) plus any custom properties you create. All stored data must be disclosed",
                      },
                      {
                        label: "Activity timeline",
                        text: "Every interaction (page view, email open, form submission, chat, call) is logged on the contact timeline, creating a detailed behavioral profile",
                      },
                      {
                        label: "List segmentation",
                        text: "Active and static lists segment contacts based on properties and behavior. This constitutes profiling under GDPR and requires disclosure",
                      },
                      {
                        label: "Data enrichment",
                        text: "HubSpot can enrich contact records with company data, social profiles, and firmographic information from third-party sources",
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

                  <p className="text-base leading-7 text-slate-700">
                    For broader website compliance, see our guide on{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policies for websites
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: HubSpot Cookie Banner */}
              <section id="cookie-banner" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      HubSpot Cookie Consent Banner
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    HubSpot offers a built-in cookie consent banner that helps
                    you comply with GDPR and ePrivacy requirements. Configuring
                    this banner correctly is essential, and your privacy policy
                    must align with how the banner operates.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Cookie categories",
                        text: "HubSpot's banner groups cookies into necessary, analytics, functionality, and advertising categories. Visitors can opt in or out of each category",
                      },
                      {
                        label: "Consent logging",
                        text: "HubSpot records which cookie categories each visitor consented to, providing an audit trail for regulatory compliance",
                      },
                      {
                        label: "Tracking code behavior",
                        text: "When properly configured, the HubSpot tracking code respects cookie consent. If a visitor declines analytics cookies, tracking is limited to anonymous data only",
                      },
                      {
                        label: "Policy alignment",
                        text: "Your privacy policy must match the cookie categories presented in the banner and accurately describe what each category of cookies does",
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

                  <p className="text-base leading-7 text-slate-700">
                    For GDPR-specific policy requirements, see our{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR privacy policy template
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
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
                      Common Mistakes in HubSpot Privacy Policies
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      title: "Not disclosing the tracking code",
                      desc: "Many HubSpot users fail to mention that the tracking code collects page views, IP addresses, and cookie data from every website visitor. This is one of the most common GDPR violations.",
                    },
                    {
                      title: "Ignoring one-to-one email tracking",
                      desc: "Sales Hub tracks individual emails sent from your inbox, not just marketing campaigns. If your sales team uses email tracking, this must be disclosed separately from marketing email practices.",
                    },
                    {
                      title: "Missing chatbot data disclosure",
                      desc: "HubSpot chatbots collect personal data before a human agent is involved. Your privacy policy must address automated data collection through chat, including what data the bot collects and how conversations are stored.",
                    },
                    {
                      title: "No mention of contact profiling",
                      desc: "HubSpot builds detailed behavioral profiles through lead scoring, lifecycle stages, and activity timelines. Under GDPR, this constitutes profiling and must be disclosed with the right to object.",
                    },
                    {
                      title: "Cookie banner and policy mismatch",
                      desc: "Your cookie consent banner must align with your privacy policy. If the banner lists four cookie categories but your policy only mentions two, regulators may consider this a transparency failure.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 text-base">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Wondering what happens if your privacy policy is missing or
                    incomplete? See our guide on{" "}
                    <Link
                      href="/what-happens-without-a-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      what happens without a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 10: HowTo - 6 Steps */}
              <section id="howto" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Write a Privacy Policy for HubSpot
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Follow these six steps to create a compliant privacy policy
                      for your HubSpot CRM and marketing activities.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Audit your HubSpot data collection",
                      desc: "List every type of data HubSpot collects on your behalf: contact emails, names, company info, IP addresses, page views, form submissions, email engagement, and chat transcripts. Check your contact properties for custom fields.",
                    },
                    {
                      step: 2,
                      title: "Document all HubSpot products you use",
                      desc: "Identify which HubSpot products you actively use: CRM, Marketing Hub, Sales Hub, Service Hub, CMS Hub, or Operations Hub. Each product collects different types of data and creates separate disclosure requirements.",
                    },
                    {
                      step: 3,
                      title: "Disclose tracking code and cookies",
                      desc: "Explain that HubSpot's tracking code monitors page views, sessions, referral sources, and visitor behavior. List the specific cookies set (__hstc, hubspotutk, __hssc, __hssrc) and their purposes. Ensure your cookie banner matches.",
                    },
                    {
                      step: 4,
                      title: "Address email tracking and marketing",
                      desc: "Disclose that HubSpot tracks email opens, link clicks, and engagement metrics through tracking pixels and redirect URLs. Explain how this data is used for lead scoring, segmentation, and campaign optimization.",
                    },
                    {
                      step: 5,
                      title: "Cover chatbot and live chat data",
                      desc: "If you use HubSpot's chatbot or live chat, disclose what data is collected during conversations including visitor identity, chat transcripts, and any qualifying information gathered by the bot before routing to an agent.",
                    },
                    {
                      step: 6,
                      title: "Reference HubSpot as a data processor",
                      desc: "Name HubSpot Inc. as a third-party data processor, link to their privacy policy, and reference the Data Processing Agreement (DPA) that governs how HubSpot handles your contacts' data. Note that data is stored on US and EU servers.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-700">{item.step}</span>
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600 ml-11">
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  <p className="text-base leading-7 text-slate-700">
                    For a comparison with other marketing platforms, see our
                    guide on{" "}
                    <Link
                      href="/privacy-policy-for-mailchimp"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy for Mailchimp
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . If you run a small business, our{" "}
                    <Link
                      href="/privacy-policy-for-small-business"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      small business privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    covers additional requirements.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 11: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    11
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
                      q: "Do I need a privacy policy if I use HubSpot?",
                      a: "Yes. HubSpot's Terms of Service require all users to have a privacy policy. Additionally, laws like GDPR and CCPA require you to disclose how you collect, use, and store personal data through HubSpot's tracking code, forms, email tracking, and CRM. Without a privacy policy, you risk both legal penalties and HubSpot account issues.",
                    },
                    {
                      q: "What data does HubSpot's tracking code collect?",
                      a: "HubSpot's tracking code collects page views, session duration, referral sources, browser and device information, IP addresses, and visitor behavior patterns. It uses first-party cookies to identify returning visitors and associate their activity with contact records in your CRM.",
                    },
                    {
                      q: "Does HubSpot comply with GDPR?",
                      a: "HubSpot offers GDPR-compliant features including a cookie consent banner, lawful basis tracking for contacts, data deletion tools, and a Data Processing Agreement (DPA). However, you as the data controller are responsible for configuring these features correctly and disclosing them in your privacy policy.",
                    },
                    {
                      q: "Is HubSpot a data processor or data controller?",
                      a: "HubSpot acts as a data processor on your behalf. You are the data controller responsible for determining how and why contact data is processed. HubSpot provides a Data Processing Agreement (DPA) that formalizes this relationship under GDPR.",
                    },
                    {
                      q: "Does HubSpot's free CRM still require a privacy policy?",
                      a: "Yes. Even HubSpot's free CRM collects and stores personal data such as contact names, emails, company information, and activity history. The tracking code also collects website visitor data. All of this requires disclosure in a privacy policy regardless of your HubSpot plan.",
                    },
                    {
                      q: "How does HubSpot handle email tracking?",
                      a: "HubSpot tracks email opens using a tracking pixel and monitors link clicks through redirect URLs. This data is recorded at the contact level and used for lead scoring, engagement reporting, and workflow triggers. You must disclose this tracking in your privacy policy.",
                    },
                    {
                      q: "What cookies does HubSpot set on my website?",
                      a: "HubSpot sets several first-party cookies including __hstc (visitor tracking), hubspotutk (visitor identity), __hssc (session tracking), and __hssrc (session reset). These cookies track visitor behavior, identify returning visitors, and connect website activity to CRM contact records.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="rounded-xl border border-slate-200/80 p-5">
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.q}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Dark CTA Section */}
              <section className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <Database className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate My HubSpot Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy that
                      covers your HubSpot CRM and marketing tools in under 60
                      seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My HubSpot Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>HubSpot-ready</span>
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
                      href: "/privacy-policy-for-mailchimp",
                      icon: FileText,
                      title: "Privacy Policy for Mailchimp",
                      desc: "Email marketing compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      icon: Globe,
                      title: "Privacy Policy for SaaS",
                      desc: "SaaS-specific compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Website compliance guide",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                      icon: ShieldCheck,
                      title: "Privacy Policy for Collecting Emails",
                      desc: "Email collection disclosure requirements",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: Users,
                      title: "Privacy Policy for Small Business",
                      desc: "Small business compliance essentials",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template structure",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks and consequences of non-compliance",
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
