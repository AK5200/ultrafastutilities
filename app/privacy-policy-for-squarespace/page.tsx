import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  Globe,
  Clock,
  Ban,
  Info,
  Settings,
  MessageSquare,
  Users,
  Calendar,
  ShoppingBag,
  Mail,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Squarespace: Complete Guide (2026) | ultrafastutilities",
  description:
    "Create a privacy policy for your Squarespace website. Covers Squarespace Analytics, forms, Commerce, email campaigns, member areas, scheduling, and third-party integrations.",
  keywords:
    "privacy policy for squarespace, squarespace privacy policy, squarespace privacy policy template, squarespace privacy policy page, squarespace website privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-squarespace",
  },
  openGraph: {
    title:
      "Privacy Policy for Squarespace: Complete Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for your Squarespace website. Covers Squarespace Analytics, forms, Commerce, email campaigns, member areas, scheduling, and third-party integrations.",
    url: "https://ultrafastutilities.com/privacy-policy-for-squarespace",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Squarespace | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Squarespace: Complete Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for your Squarespace website. Covers Squarespace Analytics, forms, Commerce, email campaigns, member areas, scheduling, and third-party integrations.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-squarespace-collects", title: "What Squarespace Collects" },
  { id: "squarespace-features-data", title: "Squarespace Features Data" },
  { id: "third-party-integrations", title: "Third-Party Integrations" },
  { id: "how-to-add", title: "How to Add Your Policy" },
  { id: "common-mistakes", title: "Common Squarespace Mistakes" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Squarespace provide a privacy policy for my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Squarespace has its own privacy policy that covers the Squarespace platform, but it does not cover your individual website. You are responsible for creating and maintaining a privacy policy that describes your own data collection practices, including any Squarespace features and third-party integrations you use.",
      },
    },
    {
      "@type": "Question",
      name: "Is a privacy policy required for a Squarespace website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your Squarespace website collects any personal data, including through Squarespace Analytics, form blocks, Commerce, email campaigns, or member areas, you are legally required to have a privacy policy under GDPR, CCPA, and most other privacy laws. Even a simple portfolio site with built-in analytics enabled is collecting visitor data.",
      },
    },
    {
      "@type": "Question",
      name: "Does Squarespace's cookie banner make my site GDPR compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not by itself. Squarespace offers a built-in cookie banner, but GDPR compliance requires more than just a banner. You also need a comprehensive privacy policy, proper cookie categorization, the ability to block non-essential cookies until consent is given, and clear descriptions of each cookie's purpose and duration.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a privacy policy to my Squarespace site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a new page in the Squarespace editor and paste your privacy policy content. Then add a link to this page in your site footer navigation, your cookie consent banner, and any forms that collect personal data. Squarespace also lets you add legal links through the footer settings in your site design panel.",
      },
    },
    {
      "@type": "Question",
      name: "Do third-party integrations need to be disclosed in my Squarespace privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every third-party service you connect to your Squarespace site that collects or processes visitor data must be disclosed in your privacy policy. This includes Google Analytics, Mailchimp, Stripe, PayPal, Instagram, Pinterest, Facebook Pixel, and any other integration that tracks, stores, or transmits user data.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my Squarespace site does not have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operating a Squarespace site without a privacy policy when you collect personal data can result in GDPR fines of up to 20 million euros or 4% of global annual revenue. CCPA violations carry penalties of $2,500 to $7,500 per violation. Beyond fines, you risk losing customer trust and may violate Squarespace's own terms of service.",
      },
    },
    {
      "@type": "Question",
      name: "Can I copy another Squarespace site's privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Copying another site's privacy policy is both a copyright violation and a compliance risk. Each privacy policy must accurately reflect your specific data practices, the Squarespace features you use, the integrations you have connected, and your particular business operations. A copied policy will almost certainly be inaccurate for your site.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Squarespace Site",
  description:
    "Follow these six steps to create a compliant privacy policy for your Squarespace website that covers all Squarespace-specific data collection and third-party integrations.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your Squarespace site's data collection",
      text: "Review every Squarespace feature you have enabled: Analytics, form blocks, Commerce, email campaigns, member areas, Acuity Scheduling, and blog comments. Document which ones are active and what data each collects from visitors.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "List all third-party integrations",
      text: "Go to your Squarespace settings and review every connected integration. For each one, identify what user data it collects, processes, or shares. Common integrations include Google Analytics, Mailchimp, Stripe, PayPal, Instagram, Pinterest, and Facebook Pixel.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Determine which privacy laws apply to you",
      text: "Identify your legal obligations based on where you and your visitors are located. If you have any EU visitors, GDPR applies. If you have California visitors and meet CCPA thresholds, CCPA applies. Most Squarespace sites serve a global audience, so both regulations typically apply.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a policy tailored to your Squarespace site. Answer questions about your specific data practices, Squarespace features, and third-party integrations. The generator produces a compliant document covering all required sections.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add the privacy policy to your Squarespace site",
      text: "Create a dedicated page in the Squarespace editor for your privacy policy. Add it to your site footer navigation, link it from your cookie consent banner, and include links in any forms that collect personal data such as contact forms or newsletter signups.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Set up ongoing review and updates",
      text: "Schedule an annual review of your privacy policy. Update it immediately whenever you connect a new integration, enable a new Squarespace feature, change payment providers, or modify how you collect or use visitor data. CCPA requires at least annual updates.",
    },
  ],
};

export default function PrivacyPolicyForSquarespacePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Squarespace: Complete Guide (2026) | ultrafastutilities",
            description:
              "Create a privacy policy for your Squarespace website. Covers Squarespace Analytics, forms, Commerce, email campaigns, member areas, scheduling, and third-party integrations.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-04-11",
            dateModified: "2026-04-11",
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
                name: "Privacy Policy for Squarespace",
                item: "https://ultrafastutilities.com/privacy-policy-for-squarespace",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
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
              <span className="text-slate-600">
                Privacy Policy for Squarespace
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
                  Squarespace
                </span>
                : What to Include and How to Add One
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about privacy compliance for your
                Squarespace website. Covering Squarespace Analytics, forms,
                Commerce, email campaigns, member areas, scheduling, and
                third-party integrations.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Squarespace site owners, designers, and developers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Websites
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-wix"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Wix Privacy Policy
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
                    Need a Squarespace privacy policy?
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
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <span>Last updated: April 2026</span>
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>11 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>
                    Every Squarespace website that collects personal data needs
                    its own privacy policy.
                  </strong>{" "}
                  Squarespace&apos;s platform privacy policy only covers
                  Squarespace itself, not your individual site. If you use
                  Squarespace Analytics, form blocks, Commerce, email campaigns,
                  member areas, or any third-party integrations, you must
                  disclose this data collection to your visitors under GDPR and
                  CCPA.
                </p>
              </div>

              {/* Section 1: What Squarespace Collects By Default */}
              <section id="what-squarespace-collects" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Squarespace Collects By Default
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Data collection that happens on every Squarespace site,
                      even without your direct involvement.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Every Squarespace website automatically collects certain data
                    through the platform&apos;s built-in services. Even if you
                    never look at your analytics dashboard, Squarespace is
                    recording visitor activity from the moment your site goes
                    live. Understanding the difference between what Squarespace
                    collects as a platform provider and what you collect as a
                    site owner is essential for writing an accurate{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Squarespace Analytics is enabled by default on all sites. It
                    tracks page views, unique visitors, traffic sources, popular
                    content, geographic location (by country and region), device
                    type, browser type, and time spent on pages. This data is
                    collected through first-party cookies and server logs. Even a
                    simple one-page portfolio site on Squarespace triggers all of
                    this tracking automatically.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Beyond analytics, Squarespace hosting logs IP addresses,
                    browser information, operating systems, and access
                    timestamps for every visitor. Squarespace also sets cookies
                    for session management, security, and site functionality.
                    Under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , any website that collects personal data from EU residents
                    must provide a clear, accessible privacy policy. Since
                    Squarespace sites are accessible globally, both GDPR and
                    CCPA typically apply.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    The consequences of operating without a privacy policy can be
                    severe. Learn more about the{" "}
                    <Link
                      href="/what-happens-without-a-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      risks of not having a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , including fines of up to 20 million euros under GDPR.
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
                          Squarespace powers millions of websites worldwide,
                          including businesses, portfolios, and online stores.
                          Despite this scale, Squarespace&apos;s Terms of
                          Service place full responsibility for privacy
                          compliance on individual site owners. You are the data
                          controller for any personal information collected
                          through your Squarespace site, not Squarespace.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Squarespace Service
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                            Data Collected
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Collected By
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Disclosure Required
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Squarespace Analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Page views, unique visitors, traffic sources, device
                            info, geographic location
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Squarespace (for you)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Squarespace Hosting
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            IP addresses, browser type, operating system, access
                            timestamps
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Squarespace (platform)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Squarespace Cookies
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Session identifiers, preferences, security tokens,
                            analytics cookies
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Squarespace (platform)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Site Search
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Search queries, search result clicks
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Squarespace (for you)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    The key distinction is that Squarespace collects some data as
                    part of its platform infrastructure (hosting logs, security
                    cookies), while other data is collected specifically for your
                    benefit (analytics dashboards, search queries). Your privacy
                    policy must cover both categories because visitors experience
                    both types of collection when they visit your site.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Can I disable Squarespace Analytics to avoid data
                        collection?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        You cannot fully disable Squarespace Analytics or
                        platform-level data collection. Squarespace hosting
                        still logs IP addresses and access data for security and
                        performance purposes. Your privacy policy should
                        disclose this baseline data collection regardless of
                        whether you actively use the analytics dashboard.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Is Squarespace Analytics the same as Google
                        Analytics?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        No. Squarespace Analytics is Squarespace&apos;s own
                        built-in analytics tool that runs on all Squarespace
                        sites. Google Analytics is a separate third-party
                        service that you connect through the integrations panel.
                        If you use both, you must disclose both in your privacy
                        policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Squarespace Features That Collect Data */}
              <section id="squarespace-features-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Squarespace Features That Collect Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Each Squarespace feature you enable creates additional
                      data collection that must be disclosed.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  {/* Features Data Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                            Feature
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[38%]">
                            Data Collected
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Privacy Impact
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Consent Needed
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Page views, visitors, traffic sources, geography,
                            device data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (tracking cookies)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Yes (GDPR)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Forms
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Names, emails, phone numbers, custom field data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (PII collection)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Commerce
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Billing info, shipping addresses, order history,
                            payment data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (financial data)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Email Campaigns
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Email addresses, open rates, click rates, subscriber
                            activity
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (email tracking)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Member Areas
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Account credentials, profile info, login activity,
                            content access
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (account data)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Scheduling (Acuity)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Client names, contact info, appointment details,
                            intake forms
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (PII collection)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Blog Comments
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Commenter names, emails, comment content, timestamps
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (PII collection)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Acuity Scheduling
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Appointment bookings, client history, payment for
                            sessions, custom intake data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (sensitive data possible)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-6">
                    {/* Forms */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-violet-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Form Blocks
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        Squarespace form blocks are one of the most common data
                        collection tools on the platform. Every form submission
                        stores the data in your Squarespace panel, including:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Contact form submissions (names, emails, phone
                          numbers, messages)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Newsletter signup email addresses
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Custom form fields (any data you choose to collect)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Submission timestamps and source pages
                        </li>
                      </ul>
                    </div>

                    {/* Commerce */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <ShoppingBag className="w-4 h-4 text-emerald-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Squarespace Commerce
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        Squarespace Commerce processes transactions through
                        Stripe or PayPal. Your privacy policy must disclose:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Payment card details (processed by Stripe or PayPal,
                          not stored by you)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Billing names and addresses
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Shipping addresses and order history
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Abandoned cart tracking and recovery emails
                        </li>
                      </ul>
                    </div>

                    {/* Email Campaigns */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                          <Mail className="w-4 h-4 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Email Campaigns
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        Squarespace Email Campaigns is a built-in email
                        marketing tool that collects:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Subscriber email addresses and names
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Email open rates and click-through tracking
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Subscriber engagement history
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Unsubscribe and bounce data
                        </li>
                      </ul>
                    </div>

                    {/* Member Areas */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                          <Users className="w-4 h-4 text-teal-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Member Areas
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        Squarespace Member Areas creates gated content sections
                        with user accounts, collecting:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Registration data (name, email, password)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Membership tier and subscription status
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Content access history and login records
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Payment data for paid memberships
                        </li>
                      </ul>
                    </div>

                    {/* Scheduling / Acuity */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-orange-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Acuity Scheduling
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        Acuity Scheduling (now part of Squarespace) collects
                        appointment and client data:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Client names and contact information
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Appointment dates, times, and service types
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Payment information for paid appointments
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Custom intake form responses (which may include
                          sensitive data)
                        </li>
                      </ul>
                    </div>

                    {/* Blog Comments */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-pink-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Blog Comments
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        If you enable comments on your Squarespace blog,
                        additional data is collected:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Commenter names and email addresses
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Comment content and posting timestamps
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Website URLs (if provided by commenters)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Third-Party Integrations */}
              <section id="third-party-integrations" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Third-Party Integrations
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      External services connected to your Squarespace site that
                      add data collection you must disclose.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Squarespace allows you to connect a wide range of
                    third-party services through its integrations panel and code
                    injection features. Each integration that collects,
                    processes, or shares visitor data must be disclosed in your
                    privacy policy. Here are the most commonly used integrations
                    and what they collect:
                  </p>

                  {/* Integrations Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                            Integration
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            Data Collected
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Purpose
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[23%]">
                            Privacy Impact
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Google Analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Page views, sessions, demographics, behavior flow,
                            device data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Website analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (cross-site tracking)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Mailchimp
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Email addresses, names, open/click rates
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Email marketing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (consent required)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Stripe
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Payment card details, billing addresses, transaction
                            data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Payment processing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (financial data)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            PayPal
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Payment details, email, billing and shipping
                            addresses
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Payment processing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (financial data)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Instagram
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Instagram cookies, engagement tracking, embedded
                            content data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Social media display
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Low to Medium (cookies)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Pinterest
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Pin activity, save button clicks, browsing behavior
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Social sharing and ads
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (tracking pixels)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Facebook Pixel
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Browsing behavior, conversions, device data, IP
                            address
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Advertising retargeting
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (cross-site tracking)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Each of these integrations introduces additional data
                    processing that operates independently of Squarespace&apos;s
                    own data collection. When a visitor lands on your site, they
                    may be tracked by Squarespace Analytics, Google Analytics,
                    and Facebook Pixel simultaneously, with each service sending
                    data to different servers in different countries. Your
                    privacy policy must explain all of this to be compliant.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Squarespace also allows you to inject custom code through
                    the Code Injection feature (under Settings). Any tracking
                    scripts, pixels, or analytics tools you add through code
                    injection must also be disclosed. Many Squarespace users add
                    Google Tag Manager, Hotjar, or other tracking tools this way
                    without realizing the privacy implications.
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
                          The average Squarespace website with common
                          integrations (Google Analytics, a social media feed,
                          and a payment processor) sends visitor data to at
                          least 4 to 6 different third-party companies. Each of
                          these data transfers must be individually disclosed in
                          your privacy policy under GDPR Article 13, including
                          the identity of each recipient and the purpose of each
                          transfer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: How to Add Privacy Policy in Squarespace Editor */}
              <section id="how-to-add" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Add a Privacy Policy in Squarespace
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Step-by-step instructions for placing your policy where
                      visitors and regulators can find it.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Having a privacy policy is only half the requirement. It
                    must also be easily accessible to your visitors. Here is
                    where and how to add your privacy policy to your Squarespace
                    site:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Create a dedicated privacy policy page",
                        desc: "In the Squarespace editor, go to Pages and click the plus icon to add a new blank page. Title it 'Privacy Policy' and paste your complete privacy policy content. Set the URL slug to /privacy-policy for clarity. You can place this page in the 'Not Linked' section so it does not appear in your main navigation.",
                      },
                      {
                        step: "2",
                        title: "Add a footer link",
                        desc: "Go to your site's footer settings (under Design or the footer section editor). Add a navigation link pointing to your privacy policy page. The footer is the most common and expected location for privacy policy links. Visitors and regulators will look here first.",
                      },
                      {
                        step: "3",
                        title: "Link from your cookie consent banner",
                        desc: "Squarespace includes a built-in cookie banner that you can enable under Settings. Configure it to include a link to your privacy policy page. Visitors should be able to read your full privacy policy directly from the consent banner before accepting cookies.",
                      },
                      {
                        step: "4",
                        title: "Add links to all forms",
                        desc: "Every form block on your Squarespace site that collects personal data (contact forms, newsletter signups) should include a link to your privacy policy. Add a text block below the form with language like 'By submitting this form, you agree to our Privacy Policy' with a link.",
                      },
                      {
                        step: "5",
                        title: "Link from checkout and Commerce pages",
                        desc: "If you use Squarespace Commerce, make sure your privacy policy is linked from the checkout flow. Go to Commerce settings and add your privacy policy URL to the legal pages section. Customers should see the link before completing a purchase.",
                      },
                      {
                        step: "6",
                        title: "Add to Member Area signup flows",
                        desc: "If you use Squarespace Member Areas, ensure your privacy policy is visible during the registration process. Members should agree to your privacy policy before creating an account. Add the link to your signup page or gate page content.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800">
                            {item.title}
                          </p>
                          <p className="text-slate-600 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    GDPR requires that your privacy policy be accessible
                    &quot;at the time when personal data are obtained.&quot; This
                    means visitors must be able to read your policy before
                    submitting any data, not just from a buried footer link.
                    Make sure your policy is prominent and easy to find on every
                    page that collects information.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Should I put my privacy policy in the main navigation
                        or the footer?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        The footer is the standard location for legal pages on
                        Squarespace sites. Place the page in the &quot;Not
                        Linked&quot; section of your Pages panel so it does not
                        clutter your main navigation, then add a link in your
                        footer. This keeps your design clean while ensuring
                        accessibility.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Can I use Squarespace&apos;s built-in legal page
                        templates?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Squarespace does not provide pre-written privacy policy
                        templates. You need to create your own page and add your
                        custom privacy policy content. A generic template will
                        not accurately reflect your specific data practices,
                        integrations, and compliance requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Squarespace Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Misconceptions that leave Squarespace site owners exposed
                      to fines and compliance issues.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    These are the five most common privacy mistakes Squarespace
                    site owners make. Each one creates a real compliance gap
                    that can lead to regulatory action.
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Squarespace handles privacy compliance
                          for me&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Squarespace has its own privacy policy for the
                          Squarespace platform, but this policy covers
                          Squarespace as a company, not your website. You are
                          the data controller for your site and must have your
                          own privacy policy that describes your specific data
                          collection practices, the integrations you use, and
                          how you handle visitor information.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;The cookie banner is all I need for
                          GDPR&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Squarespace&apos;s built-in cookie banner is only one
                          part of GDPR compliance. You also need a
                          comprehensive privacy policy, proper cookie
                          categorization, the technical ability to block
                          non-essential cookies before consent, and clear
                          documentation of each cookie&apos;s purpose. The
                          banner alone does not make you compliant.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I do not collect data, I just have a
                          portfolio site&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Every Squarespace website collects data automatically.
                          Squarespace Analytics tracks page views, session data,
                          and visitor devices. Squarespace hosting logs IP
                          addresses and browser information. Squarespace sets
                          cookies for functionality and session management. Even
                          a simple one-page portfolio site on Squarespace is
                          collecting personal data that must be disclosed.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I only need to disclose Squarespace
                          features, not third-party tools&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Any third-party service you connect to your
                          Squarespace site, whether through the integrations
                          panel or code injection, must be disclosed in your
                          privacy policy. This includes Google Analytics,
                          Facebook Pixel, Mailchimp, Stripe, PayPal, and any
                          tracking scripts. Visitors have the right to know
                          about every service that processes their data.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I copied a privacy policy from another
                          Squarespace site&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Copying another site&apos;s privacy policy is both a
                          copyright violation and a compliance risk. Each
                          privacy policy must accurately reflect your specific
                          data practices, the Squarespace features you use, the
                          integrations you have connected, and your business
                          operations. A copied policy will almost certainly be
                          inaccurate. Learn more about why{" "}
                          <Link
                            href="/privacy-policy-for-websites"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            every website needs its own policy
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Did you know box 3 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          Many Squarespace users add tracking scripts through
                          the Code Injection feature without updating their
                          privacy policy. A study of Squarespace websites found
                          that over 50% had undisclosed third-party trackers
                          running on their sites. Each undisclosed tracker is a
                          separate GDPR violation that can result in fines of
                          up to 20 million euros.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: How to Create a Privacy Policy for Your Squarespace Site */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your Squarespace Site
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A step-by-step process to generate a compliant privacy
                      policy tailored to your Squarespace website.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Creating a privacy policy for your Squarespace site does not
                    have to be complicated. Follow these six steps to create a
                    policy that covers all your Squarespace-specific data
                    collection and meets GDPR and CCPA requirements.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1",
                        title: "Audit your Squarespace site's data collection",
                        content:
                          "Go through your Squarespace settings and document every feature you have enabled. Check which features are active: Analytics, form blocks, Commerce, Email Campaigns, Member Areas, Acuity Scheduling, and blog comments. For each one, note what types of data it collects from visitors.",
                      },
                      {
                        step: "Step 2",
                        title: "List all third-party integrations",
                        content:
                          "Open your Squarespace integrations panel and review every connected service. Also check the Code Injection section for any manually added tracking scripts. For each integration, identify what visitor data it accesses, collects, or transmits. Pay special attention to analytics tools, payment processors, and social media connections.",
                      },
                      {
                        step: "Step 3",
                        title: "Determine which privacy laws apply",
                        content:
                          "Based on where you are located and where your visitors come from, identify your legal obligations. If you have any EU visitors, GDPR applies. If you have California visitors and meet CCPA thresholds, CCPA applies. Most Squarespace sites have a global audience, so both typically apply.",
                      },
                      {
                        step: "Step 4",
                        title: "Generate your privacy policy",
                        content:
                          "Use a privacy policy generator to create a document tailored to your Squarespace site. Answer questions about your data practices, features, and integrations. A good generator will produce a policy covering all required sections including data collection, cookies, third-party sharing, user rights, and data retention.",
                      },
                      {
                        step: "Step 5",
                        title: "Add the policy to your Squarespace site",
                        content:
                          "Create a dedicated page in the Squarespace editor, paste your privacy policy, and add links from your footer, cookie banner, all forms, checkout pages, and member signup flows. Make sure the policy is accessible before any data collection occurs.",
                      },
                      {
                        step: "Step 6",
                        title: "Schedule regular reviews",
                        content:
                          "Set a reminder to review your privacy policy at least annually. Update it immediately whenever you connect or remove integrations, enable new Squarespace features, change payment providers, or modify your data collection practices. Keep the 'last updated' date current.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="rounded-xl border border-slate-200/80 p-5"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                            {item.step}
                          </span>
                          <h3 className="font-semibold text-slate-900">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-base leading-7 text-slate-600 ml-[70px]">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    The entire process should take less than 30 minutes. The
                    most time-consuming part is the initial audit of your
                    Squarespace features and integrations. Once you know what
                    data you collect, the{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      policy generation
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    itself takes under 60 seconds. Compare your approach with
                    other platforms like{" "}
                    <Link
                      href="/privacy-policy-for-webflow"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Webflow
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="/privacy-policy-for-carrd"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Carrd
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    to see how privacy requirements vary across website
                    builders.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {faqSchema.mainEntity.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200/80 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {faq.name}
                          </h3>
                          <p className="mt-2 text-base leading-7 text-slate-600">
                            {faq.acceptedAnswer.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                      Generate Your Squarespace Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your Squarespace website in under 60 seconds. Covers all
                      Squarespace features and third-party integrations.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Squarespace Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Squarespace-ready disclosures</span>
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
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "General website compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-wix",
                      icon: FileText,
                      title: "Privacy Policy for Wix",
                      desc: "Wix-specific compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-webflow",
                      icon: FileText,
                      title: "Privacy Policy for Webflow",
                      desc: "Webflow-specific compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-carrd",
                      icon: FileText,
                      title: "Privacy Policy for Carrd",
                      desc: "Carrd-specific compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-weebly",
                      icon: FileText,
                      title: "Privacy Policy for Weebly",
                      desc: "Weebly-specific compliance guide",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance template and guide",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks and penalties explained",
                    },
                    {
                      href: "/generate",
                      icon: Settings,
                      title: "Privacy Policy Generator",
                      desc: "Generate your policy in 60 seconds",
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
