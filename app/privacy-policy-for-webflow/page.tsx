import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Ban,
  Info,
  Globe,
  Code,
  Layout,
  ShoppingCart,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Webflow: GDPR & CCPA Compliant (2026) | ultrafastutilities",
  description:
    "Create a compliant privacy policy for your Webflow site. Covers Webflow Analytics, hosting data, Ecommerce, form submissions, and third-party integrations. Generate yours for $4.99.",
  keywords:
    "privacy policy for webflow, webflow privacy policy, webflow gdpr compliance, webflow privacy policy template, webflow cookie policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-webflow",
  },
  openGraph: {
    title:
      "Privacy Policy for Webflow: GDPR & CCPA Compliant (2026) | ultrafastutilities",
    description:
      "Create a compliant privacy policy for your Webflow site. Covers Webflow Analytics, hosting data, Ecommerce, form submissions, and third-party integrations. Generate yours for $4.99.",
    url: "https://ultrafastutilities.com/privacy-policy-for-webflow",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Webflow | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Webflow: GDPR & CCPA Compliant (2026)",
    description:
      "Create a compliant privacy policy for your Webflow site. Covers Webflow Analytics, hosting data, Ecommerce, form submissions, and third-party integrations.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does my Webflow site need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every Webflow site needs a privacy policy because Webflow hosting automatically collects visitor data including IP addresses, browser information, and device details through server logs. If you use Webflow Analytics, forms, Ecommerce, or any third-party integrations, you are collecting additional personal data that must be disclosed under GDPR, CCPA, and CalOPPA.",
      },
    },
    {
      "@type": "Question",
      name: "What data does Webflow collect automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Webflow hosting automatically collects IP addresses, browser type and version, device information, operating system, referring URLs, and pages visited through standard server logs. If you enable Webflow Analytics, it also tracks page views, unique visitors, session duration, referral sources, and geographic location data. Webflow forms collect whatever fields you include in your form designs.",
      },
    },
    {
      "@type": "Question",
      name: "Does Webflow Analytics require cookie consent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Webflow Analytics is designed to be privacy-friendly and does not use cookies for tracking. However, if you have added any third-party scripts to your Webflow site such as Google Analytics, Facebook Pixel, or Hotjar, those tools do set cookies and require consent under GDPR and the ePrivacy Directive. Your privacy policy must disclose all analytics tools in use.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a separate cookie policy for my Webflow site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your Webflow site sets any cookies beyond essential functionality, you need to disclose them. This can be done within your privacy policy or as a separate cookie policy. Most Webflow sites use third-party integrations that set cookies, so a cookie disclosure is almost always necessary. Webflow itself sets minimal cookies, but third-party embeds and scripts add their own.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a privacy policy to my Webflow site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a new static page in your Webflow project with the URL slug /privacy-policy. Paste your privacy policy content into the page. Then add a link to this page in your site footer using a global symbol so it appears on every page. If you use Webflow Ecommerce, also link to your privacy policy from your checkout flow and any form submission pages.",
      },
    },
    {
      "@type": "Question",
      name: "Does Webflow Ecommerce require special privacy disclosures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you use Webflow Ecommerce, your privacy policy must disclose the collection of order data including names, email addresses, shipping addresses, and phone numbers. You must also disclose your payment processor, which is Stripe for Webflow Ecommerce, and explain that payment card details are processed by Stripe rather than stored on your servers. Customer account data and order history must also be addressed.",
      },
    },
    {
      "@type": "Question",
      name: "Is the privacy policy that came with my Webflow template sufficient?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Template privacy policies are generic placeholder text that does not reflect your specific data practices, third-party integrations, or business details. A compliant privacy policy must accurately describe your actual data collection, the specific tools and processors you use, your contact information, and the legal rights available to your users. Using a template policy without customization is a compliance risk.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Webflow",
  description:
    "Follow these six steps to create a compliant privacy policy for your Webflow website that covers hosting data, analytics, forms, and third-party integrations.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit all data collection on your Webflow site",
      text: "Review every form, integration, and feature on your Webflow site. Check which Webflow native features you use (Analytics, Forms, Ecommerce) and list every third-party script or integration you have added through custom code, embeds, or Webflow integrations.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify all third-party services and processors",
      text: "List every external service that receives visitor data from your Webflow site. This includes analytics platforms, email marketing tools, payment processors, CRM systems, live chat widgets, and any embedded content. Each one is a data processor that must be disclosed.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Determine which privacy laws apply to your site",
      text: "Identify your legal obligations based on where your visitors are located. If you have EU visitors, GDPR applies. California visitors trigger CCPA and CalOPPA. Canadian visitors mean PIPEDA applies. Most Webflow sites have global traffic, so multiple frameworks typically apply.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy with accurate details",
      text: "Use a privacy policy generator to create a policy that reflects your specific Webflow setup. Answer questions about your actual data practices, integrations, and business type. This produces a customized policy rather than a generic template.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Create a dedicated privacy policy page in Webflow",
      text: "In your Webflow Designer, create a new static page with the slug /privacy-policy. Paste your generated policy content into the page. Style it to match your site design and ensure it is readable on all device sizes.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Link to your privacy policy from the footer and forms",
      text: "Add a link to your privacy policy in your site footer using a Webflow symbol so it appears on every page. Add links near form submission buttons, on your checkout page if using Ecommerce, and in your cookie consent banner if applicable.",
    },
  ],
};

const tocSections = [
  { id: "does-webflow-need", title: "Does Your Webflow Site Need One?" },
  { id: "what-webflow-collects", title: "What Webflow Collects" },
  { id: "third-party-integrations", title: "Third-Party Integrations" },
  { id: "webflow-ecommerce", title: "Webflow Ecommerce Requirements" },
  { id: "where-to-display", title: "Where to Display Your Policy" },
  { id: "common-mistakes", title: "Common Webflow Mistakes" },
  { id: "how-to-create", title: "How to Create One (6 Steps)" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForWebflowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Webflow: GDPR & CCPA Compliant (2026)",
            description:
              "Create a compliant privacy policy for your Webflow site. Covers Webflow Analytics, hosting data, Ecommerce, form submissions, and third-party integrations.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-09",
            dateModified: "2026-03-09",
            publisher: {
              "@type": "Organization",
              name: "ultrafastutilities",
              url: "https://ultrafastutilities.com",
            },
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://ultrafastutilities.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Privacy Policy for Webflow",
                item: "https://ultrafastutilities.com/privacy-policy-for-webflow",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
              <span className="text-slate-600">
                Privacy Policy for Webflow
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Globe className="w-3.5 h-3.5" />
                Website Builder Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Webflow
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Your Webflow site collects personal data through hosting logs,
                analytics, forms, and every third-party integration you have
                added. GDPR, CCPA, and CalOPPA all require you to disclose
                this in a privacy policy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Webflow designers, agencies, and business owners running
                sites on the Webflow platform.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Website Privacy Policies
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
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Generate My Policy
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
                    Need a Webflow policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate one in 60 seconds for $4.99
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
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>Last updated: March 2026</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>10 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, your Webflow site needs a privacy policy.</strong>{" "}
                  Webflow hosting automatically collects visitor IP addresses,
                  browser data, and device information through server logs.
                  Webflow Analytics tracks page views and sessions. Forms
                  collect user submissions. Every third-party integration adds
                  additional data processing. GDPR, CCPA, and CalOPPA all
                  require you to disclose this collection in a privacy policy.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Webflow has become one of the most popular website builders for
                designers, agencies, and small businesses. Its visual editor
                and powerful CMS make it easy to build professional sites
                without writing code. But every Webflow site, whether it is a
                simple portfolio or a full Ecommerce store, collects personal
                data from visitors.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                Many Webflow users assume that because they are not writing
                server-side code, they are not collecting data. That is
                incorrect. Webflow hosting processes visitor requests and logs
                connection data. If you have enabled Webflow Analytics, added
                a contact form, embedded a YouTube video, or installed Google
                Analytics through custom code, your site is collecting
                personal data that privacy laws require you to disclose.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly what your Webflow site collects,
                which integrations create additional obligations, the specific
                requirements for Webflow Ecommerce, and how to create a
                compliant privacy policy that covers everything.
              </p>

              {/* Section 1: Does Your Webflow Site Need a Privacy Policy? */}
              <section id="does-webflow-need" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Does Your Webflow Site Need a Privacy Policy?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Yes. There is no scenario where a Webflow site does not need
                  a privacy policy. Even the simplest Webflow site, a single
                  landing page with no forms and no integrations, still
                  collects data through Webflow hosting infrastructure.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Webflow sites are hosted on Amazon Web Services (AWS) and
                  Fastly CDN. When a visitor loads your site, the hosting
                  infrastructure logs their IP address, browser type, device
                  information, and the pages they visit. This is standard web
                  server behavior, but under GDPR, IP addresses are classified
                  as personal data. That alone triggers the requirement for a
                  privacy policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Beyond hosting logs, most Webflow sites collect additional
                  data through at least one of these features: Webflow
                  Analytics (page views, sessions, referrers), Webflow Forms
                  (name, email, message, or whatever fields you have added),
                  custom code embeds (Google Analytics, Facebook Pixel, chat
                  widgets), or Webflow Ecommerce (order details, payment
                  information, shipping addresses).
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The legal requirements are clear. GDPR requires a privacy
                  policy if you process any personal data of EU residents.
                  CCPA requires one if you collect data from California
                  residents and meet certain business thresholds. CalOPPA
                  requires a privacy policy for any commercial website or
                  online service that collects personally identifiable
                  information from California consumers, regardless of
                  business size.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Globe className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Hosting</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Logs IP addresses automatically
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Layout className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Forms</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Collects user submissions
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Code className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Scripts</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Third-party tracking tools
                    </p>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: My Webflow site is just a portfolio. Do I still need one?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Even a portfolio site collects IP addresses and
                      browser data through Webflow hosting. If you have a
                      contact form, that is additional personal data. If you
                      use any analytics, that is more. A privacy policy is
                      required regardless of the site type.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does Webflow provide a privacy policy for my site?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No. Webflow has its own privacy policy covering its
                      platform, but that does not cover your site. You are the
                      data controller for your website. Webflow is a data
                      processor. You are responsible for providing your own
                      privacy policy to your visitors.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: What Webflow Collects Automatically */}
              <section id="what-webflow-collects" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Webflow Collects Automatically
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Before you even add a single integration or custom code
                  snippet, your Webflow site is already collecting data. It is
                  important to understand what Webflow processes natively so
                  your privacy policy accurately reflects these baseline data
                  flows.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  Webflow hosting runs on AWS infrastructure with Fastly CDN.
                  Every page load generates server logs. These logs are
                  standard for any web hosting, but they contain personal data
                  under GDPR definitions. Beyond hosting, Webflow offers
                  native analytics and form handling, each of which processes
                  additional categories of personal data.
                </p>

                {/* Data collection table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Webflow Feature
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Data Collected
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Active By Default
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Uses Cookies
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Webflow Hosting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          IP address, browser type, device info, OS, pages
                          visited, referring URL, timestamps
                        </td>
                        <td className="px-4 py-3 text-slate-600">Yes</td>
                        <td className="px-4 py-3 text-slate-600">No</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Webflow Analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Page views, unique visitors, sessions, session
                          duration, referral sources, geographic location,
                          device categories
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          On paid plans
                        </td>
                        <td className="px-4 py-3 text-slate-600">No</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Webflow Forms
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Whatever fields you add: name, email, phone, message,
                          file uploads, plus submission metadata
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          When forms are added
                        </td>
                        <td className="px-4 py-3 text-slate-600">No</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Webflow Ecommerce
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Customer name, email, shipping address, billing
                          address, phone, order history, cart contents
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          When Ecommerce is enabled
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (session)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Webflow Memberships
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email, password hash, membership tier, access
                          history, account creation date
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          When Memberships is enabled
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (auth)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Webflow Logic
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Form submission data passed to external services via
                          automated workflows
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          When Logic flows are set up
                        </td>
                        <td className="px-4 py-3 text-slate-600">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Each of these features processes personal data in a slightly
                  different way. Webflow hosting logs are processed by Webflow
                  as your data processor. Form submissions are stored in your
                  Webflow project dashboard. Ecommerce data is stored within
                  Webflow and shared with Stripe for payment processing.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy needs to account for every active feature.
                  A Webflow site using hosting, analytics, forms, and Ecommerce
                  is collecting significantly more data than one using just
                  hosting. The policy must match your actual setup.
                </p>

                {/* Did you know box 1 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Webflow Analytics is designed to be cookie-free and
                        privacy-friendly. Unlike Google Analytics, it does not
                        set tracking cookies or use persistent identifiers.
                        However, it still processes visitor IP addresses for
                        geographic data, which qualifies as personal data under
                        GDPR. Being cookie-free does not mean consent-free or
                        disclosure-free. Your privacy policy still needs to
                        mention it.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Third-Party Integrations */}
              <section id="third-party-integrations" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Third-Party Integrations on Webflow
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The native Webflow features are just the starting point.
                  Most Webflow sites add third-party tools through custom code
                  embeds, Webflow integrations, or the Project Settings code
                  injection area. Each integration that receives visitor data
                  is a separate data processor that must be disclosed in your
                  privacy policy.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are the most common third-party integrations found on
                  Webflow sites, along with what data they collect and why
                  your policy must mention them.
                </p>

                {/* Integrations table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                          Integration
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[18%]">
                          Category
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Data It Accesses
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Sets Cookies
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Google Analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">Analytics</td>
                        <td className="px-4 py-3 text-slate-600">
                          Page views, sessions, demographics, device data,
                          location, behavior flow
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (_ga, _gid, _gat)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Hotjar
                        </td>
                        <td className="px-4 py-3 text-slate-600">Analytics</td>
                        <td className="px-4 py-3 text-slate-600">
                          Heatmaps, session recordings, mouse movements,
                          clicks, scroll depth, form interactions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (_hjid, _hjSession)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Facebook Pixel
                        </td>
                        <td className="px-4 py-3 text-slate-600">Advertising</td>
                        <td className="px-4 py-3 text-slate-600">
                          Page views, conversions, button clicks, purchase
                          events, user agent data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (_fbp, _fbc)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Mailchimp
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email Marketing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email address, name, signup source, subscription
                          preferences
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Possible (embedded forms)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Zapier
                        </td>
                        <td className="px-4 py-3 text-slate-600">Automation</td>
                        <td className="px-4 py-3 text-slate-600">
                          Form submission data, webhook payloads, whatever data
                          your Zap processes
                        </td>
                        <td className="px-4 py-3 text-slate-600">No</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Stripe
                        </td>
                        <td className="px-4 py-3 text-slate-600">Payments</td>
                        <td className="px-4 py-3 text-slate-600">
                          Card details, billing address, email, transaction
                          history, fraud detection data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (__stripe_mid)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Memberstack
                        </td>
                        <td className="px-4 py-3 text-slate-600">Memberships</td>
                        <td className="px-4 py-3 text-slate-600">
                          Email, password, membership tier, payment data,
                          access history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (auth tokens)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Finsweet
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Webflow Enhancement
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Depends on attributes used: CMS filtering, form
                          handling, cookie consent data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Possible (Cookie Consent)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Jetboost
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Search / Filter
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Search queries, filter selections, favorites data,
                          user preferences
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Possible (user prefs)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Every tool in this list acts as a data processor under GDPR.
                  Your privacy policy must identify each one, describe what
                  data it receives, and explain why you use it. Simply stating
                  &quot;we use third-party services&quot; is not specific
                  enough to satisfy GDPR Article 13 requirements.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  A common oversight is forgetting about tools added through
                  Webflow custom code injection. Check your Project Settings
                  under the Custom Code tab. Many Webflow users paste tracking
                  scripts there and forget about them. Each one may be sending
                  visitor data to an external service that your privacy policy
                  does not mention.
                </p>

                {/* Did you know box 2 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Webflow Logic, the platform&apos;s native automation tool,
                        can send form data to external services like Google
                        Sheets, Airtable, Slack, and email platforms. Each
                        destination in a Logic flow is a data processor. If
                        you use Logic to route form submissions to three
                        different services, that is three processors your
                        privacy policy needs to disclose.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  If you are unsure which integrations are active on your
                  Webflow site, open your browser developer tools on your live
                  site and check the Network tab as a page loads. You will see
                  every external domain your site connects to. Each one that
                  receives visitor data needs to be in your privacy policy.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do embedded YouTube videos count as a third-party
                      integration?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Embedding a YouTube video loads Google scripts that
                      set cookies and track viewer behavior. This applies to
                      Vimeo embeds, Spotify embeds, Google Maps, and any other
                      embedded third-party content. Each one sends visitor data
                      to the embedded service and should be disclosed.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What about Webflow Apps from the marketplace?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Webflow Apps installed from the Webflow marketplace may
                      access your project data and visitor data depending on
                      their permissions. Review each app&apos;s data access
                      requirements and include relevant disclosures in your
                      privacy policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Webflow Ecommerce */}
              <section id="webflow-ecommerce" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Webflow Ecommerce Privacy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If you use Webflow Ecommerce, your privacy obligations are
                  significantly more extensive than for a standard Webflow site.
                  Ecommerce involves collecting sensitive personal data
                  including payment information, physical addresses, and
                  detailed purchase histories.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Webflow Ecommerce uses Stripe as its payment processor. This
                  is not optional. All payment card data goes through Stripe.
                  Your privacy policy must disclose Stripe as a data processor,
                  explain that card details are processed by Stripe rather than
                  stored on your servers, and link to Stripe&apos;s privacy
                  policy.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Data Collected Through Webflow Ecommerce
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Order data:</strong> Customer name, email address,
                      billing address, shipping address, phone number, order
                      items, quantities, and order totals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Payment data:</strong> Payment card details
                      (processed by Stripe, not stored in Webflow), transaction
                      IDs, payment status, and refund information
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Customer account data:</strong> Email, password
                      hash, order history, saved addresses, and wishlist items
                      if customer accounts are enabled
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cart data:</strong> Items added to cart, cart
                      abandonment data, session information for maintaining
                      cart state across page loads
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Tax data:</strong> Location information used for
                      tax calculation, tax identification numbers in some
                      jurisdictions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Shipping data:</strong> Shipping method selected,
                      tracking numbers, delivery status, and carrier
                      information
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy for a Webflow Ecommerce site needs
                  dedicated sections covering how you handle order data, how
                  payments are processed, what data Stripe receives, how long
                  you retain order records, and what rights customers have
                  regarding their purchase data.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Under GDPR, you must also identify your legal basis for
                  processing each category of Ecommerce data. Order
                  fulfillment data is typically processed under &quot;contract
                  performance&quot; (Article 6(1)(b)). Marketing emails to
                  customers require either legitimate interest or consent.
                  Financial record retention may fall under &quot;legal
                  obligation&quot; (Article 6(1)(c)).
                </p>

                {/* Did you know box 3 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Even after a customer completes a purchase on your
                        Webflow Ecommerce site, you may have legal obligations
                        to retain their order data. Tax laws in many
                        jurisdictions require you to keep transaction records
                        for 5 to 7 years. Your privacy policy should disclose
                        these retention periods and explain that some data is
                        kept beyond account deletion to comply with financial
                        regulations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comparison: standard vs ecommerce */}
                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Standard Webflow Site vs Ecommerce: Privacy Comparison
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Requirement
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[32%]">
                          Standard Webflow Site
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[33%]">
                          Webflow Ecommerce Site
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Privacy policy required
                        </td>
                        <td className="px-4 py-3 text-slate-600">Yes</td>
                        <td className="px-4 py-3 text-slate-600">Yes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Payment processor disclosure
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Only if accepting payments
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required (Stripe)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Financial data section
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Usually not needed
                        </td>
                        <td className="px-4 py-3 text-slate-600">Required</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Data retention disclosures
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Recommended
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required (tax law)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Order data handling
                        </td>
                        <td className="px-4 py-3 text-slate-600">N/A</td>
                        <td className="px-4 py-3 text-slate-600">
                          Full disclosure needed
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Customer account section
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Only if using Memberships
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required if accounts enabled
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-600 text-sm">
                  Running a Webflow Ecommerce store without a comprehensive
                  privacy policy is a significant compliance risk. Generate a
                  policy that covers all your Ecommerce data flows with a{" "}
                  <Link
                    href="/generate"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    privacy policy generator
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  .
                </p>
              </section>

              {/* Section 5: Where to Display */}
              <section id="where-to-display" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Where to Display Your Privacy Policy on Webflow
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Creating a privacy policy is only half the requirement. You
                  also need to make it accessible. Privacy laws require that
                  your policy be easy to find, not buried in a page that
                  visitors will never see. CalOPPA specifically requires a
                  &quot;conspicuous&quot; link from your homepage.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  Here is where your privacy policy link should appear on your
                  Webflow site.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Site footer (every page)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Create a Webflow Symbol for your footer and include a
                        &quot;Privacy Policy&quot; link. Symbols are reusable
                        components that appear on every page, so updating the
                        symbol updates the link site-wide. This is the most
                        important placement and satisfies CalOPPA&apos;s
                        conspicuous link requirement.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Dedicated /privacy-policy page
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Create a static page in your Webflow project with the
                        URL slug &quot;privacy-policy&quot;. This is where your
                        full policy text lives. Keep the page clean and
                        readable. Avoid heavy animations or design elements
                        that make the text hard to read.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Near form submission buttons
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add a small text link below or near every form submit
                        button that says something like &quot;By submitting,
                        you agree to our Privacy Policy.&quot; This is
                        especially important for GDPR consent. The link should
                        go to your /privacy-policy page.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Cookie consent banner
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If your site sets non-essential cookies (most Webflow
                        sites with third-party integrations do), you need a
                        cookie consent banner. This banner should link to your
                        privacy policy or a dedicated cookie section within it.
                        Tools like Finsweet Cookie Consent or CookieYes
                        integrate well with Webflow.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Ecommerce checkout page
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If you use Webflow Ecommerce, add a privacy policy
                        link on the checkout page. Customers are providing
                        sensitive personal and financial data during checkout,
                        and they should be able to review your policy before
                        completing their purchase.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  A good test: can a first-time visitor find your privacy
                  policy within one click from any page on your site? If the
                  answer is no, your placement needs improvement. The footer
                  link is the minimum. Adding links near forms and on checkout
                  pages demonstrates stronger compliance practices.
                </p>
              </section>

              {/* Section 6: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Webflow Privacy Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the most frequent privacy policy mistakes made by
                  Webflow site owners. Each one creates a real compliance gap
                  that could result in fines, app store rejections, or loss of
                  advertising accounts.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Webflow handles compliance for me&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Webflow is a data processor, not a data controller.
                        Under GDPR, you are the data controller for your
                        website. Webflow processes data on your behalf based on
                        the instructions you give through your site design. The
                        legal responsibility for having a privacy policy, for
                        obtaining consent, and for responding to data subject
                        requests falls entirely on you. Webflow&apos;s own
                        privacy policy covers their platform, not your site.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My template came with a privacy
                        policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Many Webflow templates include a placeholder privacy
                        policy page with generic legal text. This text does not
                        reflect your specific data practices, integrations, or
                        business details. A compliant privacy policy must be
                        customized to describe your actual data collection. A
                        template policy that mentions tools you do not use and
                        fails to mention ones you do is worse than having no
                        policy at all because it actively misleads visitors.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I only use Webflow Analytics so I am
                        fine&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Even if Webflow Analytics is your only analytics tool,
                        you still need a privacy policy. Webflow Analytics
                        processes visitor IP addresses for geographic data,
                        which is personal data under GDPR. Additionally,
                        Webflow hosting logs visitor data regardless of whether
                        you use Analytics. And most sites have additional data
                        flows through forms, embeds, or third-party scripts
                        that site owners overlook.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I do not need consent for Webflow
                        forms&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Webflow forms collect whatever personal data you
                        include in the form fields. Under GDPR, you need a
                        legal basis for processing this data. If you use form
                        submissions for marketing purposes, you typically need
                        explicit consent. Even for inquiry forms, you need to
                        disclose how the data will be used, stored, and for
                        how long. A link to your privacy policy near the form
                        submit button is a minimum requirement.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My Webflow site is just a portfolio&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Portfolio sites still collect data. Webflow hosting
                        logs visitor IP addresses and browser information on
                        every page load. If you have a contact form, you are
                        collecting names and emails. If you have embedded your
                        Dribbble, Behance, or Instagram feed, those embeds
                        load third-party scripts that track visitors.
                        Portfolio sites are commercial websites and CalOPPA
                        applies to any commercial site collecting data from
                        California visitors.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for Webflow (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow this process to create a privacy policy that
                  accurately covers your Webflow site and satisfies GDPR,
                  CCPA, and CalOPPA requirements.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit all data collection on your Webflow site
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Start by mapping every data collection point on your
                        site. Check which Webflow native features you use:
                        Analytics, Forms, Ecommerce, Memberships, Logic. Then
                        review your Project Settings Custom Code section for
                        any tracking scripts. Open your live site in a browser
                        and check the Network tab in developer tools to see
                        which external services your site contacts.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Identify all third-party services and processors
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Create a list of every external service that receives
                        visitor data from your Webflow site. Include analytics
                        platforms (Google Analytics, Hotjar), email tools
                        (Mailchimp, ConvertKit), payment processors (Stripe),
                        automation tools (Zapier, Make), CRM systems
                        (HubSpot), live chat (Intercom, Crisp), and any
                        embedded content (YouTube, Vimeo, Google Maps).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Determine which privacy laws apply
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Webflow sites are accessible globally, so consider
                        where your visitors are located. EU visitors trigger
                        GDPR. California visitors trigger CCPA and CalOPPA.
                        Canadian visitors mean PIPEDA applies. Check your
                        Webflow Analytics geographic data to understand your
                        audience. Most Webflow sites need to comply with
                        multiple frameworks.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Generate your privacy policy with accurate details
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Use a{" "}
                        <Link
                          href="/generate"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          privacy policy generator
                        </Link>{" "}
                        to create a policy based on your specific Webflow
                        setup. Answer questions about your data practices,
                        the integrations you identified in step 2, your
                        business type, and your contact information. This
                        produces a customized policy in minutes rather than
                        a generic template.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Create a dedicated privacy policy page in Webflow
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        In the Webflow Designer, create a new static page
                        with the URL slug &quot;privacy-policy&quot;. Add your
                        generated privacy policy content to the page. Use
                        clean, readable typography. Ensure the page is
                        responsive and accessible on all screen sizes. Add
                        a &quot;Last Updated&quot; date at the top of the
                        page.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Link to your policy from the footer and forms
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add a &quot;Privacy Policy&quot; link in your site
                        footer Symbol so it appears on every page. Add a
                        consent notice with a policy link near every form
                        submit button. If you use Webflow Ecommerce, add
                        the link to your checkout page. If you use a cookie
                        consent banner, link to your policy from the banner.
                        Publish your site and verify all links work correctly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Generate Your Webflow Privacy Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Answer a few questions about your Webflow site and get
                        a customized, compliant privacy policy in under 60
                        seconds. Covers Webflow hosting, analytics, forms,
                        Ecommerce, and all your third-party integrations.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My Privacy Policy
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my Webflow site need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Every Webflow site needs a privacy policy because
                      Webflow hosting automatically collects visitor data
                      including IP addresses and browser information. If you
                      use Webflow Analytics, forms, Ecommerce, or any
                      third-party integrations, you are collecting even more
                      data that must be disclosed under GDPR, CCPA, and
                      CalOPPA.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What data does Webflow collect automatically?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Webflow hosting logs IP addresses, browser type and
                      version, device information, operating system, referring
                      URLs, and pages visited. If Webflow Analytics is enabled,
                      it also tracks page views, unique visitors, session
                      duration, referral sources, and geographic location.
                      Webflow forms collect whatever fields you include in
                      your form designs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Webflow Analytics require cookie consent?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Webflow Analytics itself does not use cookies. However,
                      if you have added any third-party scripts like Google
                      Analytics, Facebook Pixel, or Hotjar, those tools set
                      cookies and require consent under GDPR. Your privacy
                      policy must still disclose Webflow Analytics even though
                      it is cookie-free, because it processes visitor IP
                      addresses.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a separate cookie policy for Webflow?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      If your Webflow site sets non-essential cookies through
                      third-party integrations, you need to disclose them.
                      This can be a separate cookie policy or a dedicated
                      section within your privacy policy. Since most Webflow
                      sites include at least one third-party integration that
                      sets cookies, a cookie disclosure is almost always
                      necessary.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I add a privacy policy page to Webflow?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      In the Webflow Designer, create a new static page with
                      the slug &quot;privacy-policy.&quot; Add your policy
                      content to the page. Then add a link to this page in your
                      site footer using a Webflow Symbol so it appears
                      globally. Also add links near form submit buttons and
                      on your checkout page if using Ecommerce.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Webflow Ecommerce need special privacy disclosures?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Webflow Ecommerce collects order data, customer
                      account information, shipping addresses, and processes
                      payments through Stripe. Your privacy policy must
                      disclose all of this, identify Stripe as a payment
                      processor, and explain data retention for financial
                      records. You also need sections on customer rights
                      regarding their purchase data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Is the privacy policy from my Webflow template enough?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      No. Template privacy policies contain generic placeholder
                      text that does not describe your actual data practices.
                      A compliant policy must reflect your specific
                      integrations, business details, and data flows. Using a
                      template policy without customization is a compliance
                      risk because it misrepresents your actual data handling
                      to visitors.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section id="resources" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "Complete guide to website privacy policies and what to include",
                    },
                    {
                      href: "/privacy-policy-for-wix",
                      title: "Privacy Policy for Wix",
                      desc: "Wix-specific privacy requirements and data collection",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      title: "Cookie Policy for Websites",
                      desc: "GDPR cookie consent requirements and how to comply",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "Real consequences of operating without one",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      title: "Privacy Policy for Ecommerce",
                      desc: "What online stores must disclose about data collection",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      title: "How Often to Update Your Privacy Policy",
                      desc: "Update frequency requirements under GDPR and CCPA",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      title: "Can I Copy Someone Else's Privacy Policy?",
                      desc: "Why copying creates copyright and compliance risk",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all bg-white"
                    >
                      <FileText className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                      <div>
                        <p className="font-medium text-slate-800 text-sm group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Final CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center">
                <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">
                  Get Your Webflow Privacy Policy
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Your Webflow site is collecting personal data right now.
                  Generate a customized, compliant privacy policy that covers
                  all your Webflow features and integrations. Takes under 60
                  seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and CalOPPA &middot; Customized for
                  Webflow &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
