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
  Globe,
  Clock,
  Ban,
  Info,
  Settings,
  CreditCard,
  MessageSquare,
  Users,
  ShoppingBag,
  Mail,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Weebly: Complete Guide (2026) | ultrafastutilities",
  description:
    "Create a privacy policy for your Weebly website. Covers Weebly's built-in analytics, contact forms, ecommerce, membership features, and Square integration requirements.",
  keywords:
    "privacy policy for weebly, weebly privacy policy, weebly privacy policy template, weebly website privacy policy, weebly store privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-weebly",
  },
  openGraph: {
    title:
      "Privacy Policy for Weebly: Complete Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for your Weebly website. Covers Weebly's built-in analytics, contact forms, ecommerce, membership features, and Square integration requirements.",
    url: "https://ultrafastutilities.com/privacy-policy-for-weebly",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Weebly | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Weebly: Complete Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for your Weebly website. Covers Weebly's built-in analytics, contact forms, ecommerce, membership features, and Square integration requirements.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-weebly-collects", title: "What Weebly Collects" },
  { id: "weebly-features-data", title: "Weebly Features That Collect Data" },
  { id: "square-integration", title: "Square Integration" },
  { id: "third-party-apps", title: "Third-Party Apps and Integrations" },
  { id: "how-to-add", title: "How to Add Your Policy" },
  { id: "gdpr-ccpa", title: "GDPR/CCPA Requirements" },
  { id: "common-mistakes", title: "Common Weebly Privacy Mistakes" },
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
      name: "Does Weebly provide a privacy policy for my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Weebly (owned by Square) has its own privacy policy that covers the Weebly platform, but it does not cover your individual website. You are responsible for creating and maintaining a privacy policy that describes your own data collection practices, including any Weebly features and third-party integrations you use.",
      },
    },
    {
      "@type": "Question",
      name: "Is a privacy policy required for a Weebly website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your Weebly website collects any personal data, including through Weebly's built-in analytics, contact forms, ecommerce features, or membership areas, you are legally required to have a privacy policy under GDPR, CCPA, and most other privacy laws. Even a basic Weebly site with analytics enabled is collecting visitor data.",
      },
    },
    {
      "@type": "Question",
      name: "How does Square's ownership of Weebly affect my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Since Square acquired Weebly in 2018, Weebly sites that use ecommerce or payment features process transactions through Square's payment infrastructure. Your privacy policy must disclose that payment data is processed by Square, explain what data Square collects, and link to Square's privacy policy. This is especially important for Weebly stores.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a privacy policy to my Weebly site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Weebly Editor, create a new page and paste your privacy policy content. Then add a link to this page in your site footer using the footer editor. You should also link your privacy policy from any contact forms, newsletter signup areas, and your checkout flow if you run a Weebly store.",
      },
    },
    {
      "@type": "Question",
      name: "Do Weebly App Center apps need to be disclosed in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every third-party app you install from the Weebly App Center that collects or processes visitor data must be disclosed in your privacy policy. This includes apps for analytics, email marketing, live chat, social media feeds, and any other app that tracks, stores, or transmits user data.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my Weebly site does not have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operating a Weebly site without a privacy policy when you collect personal data can result in GDPR fines of up to 20 million euros or 4% of global annual revenue. CCPA violations carry penalties of $2,500 to $7,500 per violation. Beyond fines, you risk losing customer trust and may violate Weebly's own terms of service.",
      },
    },
    {
      "@type": "Question",
      name: "Does Weebly's free plan still require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Whether you use Weebly's free plan or a paid plan, if your site collects any personal data, you need a privacy policy. Weebly's built-in analytics and cookies run on all plans, including the free tier. The legal requirement is based on data collection, not on which plan you are using.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Weebly Site",
  description:
    "Follow these six steps to create a compliant privacy policy for your Weebly website that covers all Weebly-specific data collection, Square integration, and third-party apps.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your Weebly site's data collection",
      text: "Review every Weebly feature you have enabled: built-in analytics, contact forms, ecommerce store, blog comments, membership areas, and newsletter signups. Document which ones are active and what data each collects from visitors.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Review your Square integration",
      text: "If you use Weebly's ecommerce or payment features, document how Square processes payment data on your behalf. Note that Square collects billing information, transaction details, and payment card data through its payment infrastructure.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "List all third-party apps and integrations",
      text: "Check your Weebly App Center installations and any custom embed codes you have added. For each integration, identify what user data it collects, processes, or shares. Common integrations include Google Analytics, Mailchimp, and social media widgets.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Determine which privacy laws apply",
      text: "Identify your legal obligations based on where you and your visitors are located. If you have any EU visitors, GDPR applies. If you have California visitors and meet CCPA thresholds, CCPA applies. Most Weebly sites serve a global audience, so both regulations typically apply.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a policy tailored to your Weebly site. Answer questions about your specific data practices, Weebly features, Square integration, and third-party apps. The generator produces a compliant document covering all required sections.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Add the policy to your Weebly site and maintain it",
      text: "Create a dedicated page in the Weebly Editor for your privacy policy. Add it to your site footer, link it from contact forms and newsletter signups, and include it in your checkout flow. Schedule annual reviews and update immediately when you add new features or integrations.",
    },
  ],
};

export default function PrivacyPolicyForWeeblyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Weebly: Complete Guide (2026) | ultrafastutilities",
            description:
              "Create a privacy policy for your Weebly website. Covers Weebly's built-in analytics, contact forms, ecommerce, membership features, and Square integration requirements.",
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
                name: "Privacy Policy for Weebly",
                item: "https://ultrafastutilities.com/privacy-policy-for-weebly",
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
                Privacy Policy for Weebly
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
                  Weebly
                </span>
                : What to Include for Your Weebly Website
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about privacy compliance for your
                Weebly website. Covering built-in analytics, contact forms,
                ecommerce, membership features, and Square integration
                requirements.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Weebly site owners, store operators, and designers.
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
                    Need a Weebly privacy policy?
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>12 min read</span>
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
                    Every Weebly website that collects personal data needs its
                    own privacy policy.
                  </strong>{" "}
                  Weebly&apos;s platform privacy policy only covers Weebly and
                  its parent company Square, not your individual site. If you
                  use Weebly&apos;s built-in analytics, contact forms,
                  ecommerce store, membership features, or any third-party
                  integrations, you must disclose this data collection to your
                  visitors under GDPR and CCPA.
                </p>
              </div>

              {/* Section 1: What Weebly Collects */}
              <section id="what-weebly-collects" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Weebly Collects Automatically
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Data collection that happens on every Weebly site, even
                      without your direct involvement.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Every Weebly website automatically collects certain data
                    through the platform&apos;s built-in services. Weebly, which
                    is now owned by Square, runs analytics and tracking on all
                    sites hosted on its platform. Even if you never check your
                    Weebly Stats dashboard, visitor data is being recorded from
                    the moment your site goes live.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Many Weebly site owners assume that because they built their
                    site on a managed platform, Weebly handles privacy
                    compliance for them. This is a dangerous misconception.
                    Weebly&apos;s own{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    covers the Weebly and Square platforms themselves, not your
                    website or your data collection activities. You are the data
                    controller for any information collected through your Weebly
                    site.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
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
                    Weebly sites are accessible globally, both GDPR and CCPA
                    typically apply.
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

                  {/* Comparison Table */}
                  <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Weebly Service
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
                            Weebly Stats
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Page views, unique visitors, referral sources,
                            search terms, geographic location
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Weebly (for you)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Weebly Hosting
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            IP addresses, browser type, operating system,
                            access timestamps
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Weebly (platform)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Weebly Cookies
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Session identifiers, preferences, login tokens,
                            cart data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Weebly (platform)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Square Tracking
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Marketing analytics, conversion tracking,
                            cross-platform identifiers
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Square (parent company)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    The key distinction is that Weebly collects some data as
                    part of its platform infrastructure (hosting logs, security
                    cookies), while other data is collected specifically for
                    your benefit (analytics dashboards, form submissions). Your
                    privacy policy must cover both categories because visitors
                    experience both types of collection when they visit your
                    site.
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
                          Square acquired Weebly in 2018 for $365 million. Since
                          the acquisition, Weebly sites are deeply integrated
                          with Square&apos;s payment and marketing ecosystem.
                          This means your Weebly site may share data with Square
                          even if you do not explicitly use Square Payments.
                          Square&apos;s Terms of Service place full
                          responsibility for privacy compliance on individual
                          site owners.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Weebly Features That Collect Data */}
              <section id="weebly-features-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Weebly Features That Collect Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Each Weebly feature you enable creates additional data
                      collection that must be disclosed.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Weebly offers a range of built-in features that collect
                    personal data from your visitors. Here is a breakdown of
                    each feature and the data it collects. Your privacy policy
                    must cover every feature you have enabled.
                  </p>

                  {/* Features Data Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Feature
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                            Data Collected
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Storage Location
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Privacy Impact
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Analytics (Stats)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Page views, unique visitors, referrers, search
                            terms, device and browser data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Weebly/Square servers
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Forms
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Names, emails, phone numbers, custom field data,
                            submission timestamps
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Weebly dashboard
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Store/Ecommerce
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Customer names, emails, shipping/billing addresses,
                            order history, payment data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Weebly + Square
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Blog
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Commenter names, email addresses, comment content,
                            timestamps
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Weebly servers
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Membership
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Account credentials, profile data, login activity,
                            access permissions
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Weebly servers
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Newsletter
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Email addresses, subscription preferences,
                            open/click rates
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Weebly/Square Marketing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-6">
                    {/* Contact Forms */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-violet-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Contact Forms
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        Weebly&apos;s drag-and-drop form builder makes it easy
                        to add contact forms, but every submission stores
                        personal data in your Weebly dashboard:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Contact form submissions (names, emails, phone numbers, messages)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          RSVP forms and survey responses
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

                    {/* Ecommerce Store */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                          <ShoppingBag className="w-4 h-4 text-orange-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Weebly Store (Ecommerce)
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        Weebly&apos;s ecommerce features collect extensive
                        customer data that requires detailed privacy
                        disclosures:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Customer names, emails, and shipping addresses
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Order history, product preferences, and cart data
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Payment and billing information (processed through Square)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Tax calculation data and coupon usage
                        </li>
                      </ul>
                    </div>

                    {/* Blog */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-pink-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Weebly Blog
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        If you run a blog on your Weebly site, additional data
                        is collected through:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Blog comment author names and email addresses
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Comment content and posting timestamps
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          RSS feed subscriber information
                        </li>
                      </ul>
                    </div>

                    {/* Membership */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                          <Users className="w-4 h-4 text-teal-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Membership Areas
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        Weebly&apos;s membership feature creates user accounts
                        on your site, collecting:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Registration data (name, email, password)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Profile information and access levels
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Login history and activity records
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Content access and download history
                        </li>
                      </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <Mail className="w-4 h-4 text-emerald-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Newsletter and Email Marketing
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                        Weebly Promote (now integrated with Square Marketing)
                        collects email subscriber data:
                      </p>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Subscriber email addresses and names
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Email open rates and click-through data
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          Subscription preferences and opt-out history
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Can I disable Weebly Stats to avoid data collection?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        You can limit what Weebly Stats tracks, but you cannot
                        fully disable all platform-level data collection.
                        Weebly hosting still logs IP addresses and access data
                        for security and performance purposes. Your privacy
                        policy should disclose this baseline data collection.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Is Weebly Stats the same as Google Analytics?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        No. Weebly Stats is Weebly&apos;s own built-in
                        analytics tool that runs on all Weebly sites. Google
                        Analytics is a separate third-party service that you
                        can add through Weebly&apos;s settings or embed code.
                        If you use both, you must disclose both in your privacy
                        policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Square Integration */}
              <section id="square-integration" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Square Integration and Payment Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How Square&apos;s ownership of Weebly affects your
                      privacy obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-4">
                    Weebly is owned by Square (now Block, Inc.), which means
                    your Weebly site is deeply integrated with Square&apos;s
                    payment and marketing ecosystem. If you accept payments
                    through your Weebly store, all transactions are processed
                    through Square&apos;s payment infrastructure.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mb-6">
                    This integration has significant privacy implications that
                    many Weebly site owners overlook. Your privacy policy must
                    explicitly disclose that Square processes payment data on
                    your behalf.
                  </p>

                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        What Square Collects Through Weebly
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Payment card details (processed by Square, not stored on your Weebly site)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Billing names, addresses, and contact information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Transaction amounts, order details, and purchase history
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Fraud prevention and risk assessment data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        PCI compliance and security verification data
                      </li>
                    </ul>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Even if you do not run a Weebly store, Square&apos;s
                    integration means certain analytics and marketing data may
                    flow between Weebly and Square&apos;s broader ecosystem.
                    Your privacy policy should mention Square as a data
                    processor and link to Square&apos;s privacy policy for
                    transparency.
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
                          Square processes payments for millions of businesses
                          worldwide. When a customer makes a purchase on your
                          Weebly store, their payment data passes through
                          Square&apos;s PCI-compliant infrastructure. While
                          Square handles the security of payment processing,
                          you are still required to disclose this data sharing
                          arrangement in your privacy policy under both GDPR
                          Article 13 and CCPA requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Third-Party Apps and Integrations */}
              <section id="third-party-apps" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Third-Party Apps and Integrations
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Apps and embed codes that add data collection you must
                      disclose.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    The Weebly App Center and custom embed codes allow you to
                    add third-party functionality to your site. Each
                    integration that collects, processes, or shares visitor
                    data must be disclosed in your privacy policy. Here are
                    the most commonly used integrations:
                  </p>

                  {/* Third-Party Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Integration
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            Data Collected
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Purpose
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
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
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Google AdSense
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Browsing behavior, ad interaction data, cookies,
                            device identifiers
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Display advertising
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (ad tracking)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Social Media Widgets
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Social cookies, engagement tracking, share data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Social sharing and feeds
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (cookies)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Live Chat Apps
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Chat messages, visitor name, email, browsing pages
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Customer support
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (conversation data)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Each of these integrations introduces additional data
                    processing that operates independently of Weebly&apos;s own
                    data collection. When a visitor lands on your site, they
                    may be tracked by Weebly Stats, Google Analytics, and
                    Facebook Pixel simultaneously, with each service sending
                    data to different servers in different countries. Your
                    privacy policy must explain all of this to be compliant.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Weebly also allows you to add custom HTML, CSS, and
                    JavaScript through embed code elements. If you use these to
                    add tracking scripts, retargeting pixels, or any other
                    data-collecting code, these must also be disclosed in your
                    privacy policy. Compare how other website builders like{" "}
                    <Link
                      href="/privacy-policy-for-squarespace"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Squarespace
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy-for-webflow"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Webflow
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    handle third-party integrations.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: How to Add Privacy Policy in Weebly */}
              <section id="how-to-add" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Add a Privacy Policy in Weebly
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
                    where and how to add your privacy policy to your Weebly
                    site:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Create a dedicated privacy policy page",
                        desc: "In the Weebly Editor, click the 'Pages' tab and add a new page titled 'Privacy Policy.' Use a standard page layout and paste your complete privacy policy content. Set the page URL slug to /privacy-policy for clarity.",
                      },
                      {
                        step: "2",
                        title: "Add a footer link",
                        desc: "Click on your site footer in the Weebly Editor and add a text element with a link to your privacy policy page. The footer is the most common and expected location for privacy policy links. Visitors and regulators look here first.",
                      },
                      {
                        step: "3",
                        title: "Link from all contact forms",
                        desc: "Every form on your Weebly site that collects personal data should include a link to your privacy policy. Add text below or above the submit button like 'By submitting this form, you agree to our Privacy Policy' with a hyperlink.",
                      },
                      {
                        step: "4",
                        title: "Add to newsletter signup areas",
                        desc: "If you use Weebly's newsletter or email collection features, include a privacy policy link near the signup field. This is required under GDPR for email marketing consent.",
                      },
                      {
                        step: "5",
                        title: "Link from your checkout flow",
                        desc: "If you run a Weebly store, make sure your privacy policy is linked from the checkout process. Customers should be able to review your privacy practices before completing a purchase.",
                      },
                      {
                        step: "6",
                        title: "Hide from main navigation (optional)",
                        desc: "In the Weebly Pages panel, you can toggle the privacy policy page to not appear in the main navigation menu while still being accessible through footer links and direct URLs. This keeps your navigation clean.",
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
                    &quot;at the time when personal data are obtained.&quot;
                    This means visitors must be able to read your policy before
                    submitting any data, not just from a buried footer link.
                    Make sure your policy is prominent and easy to find.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Can I use Weebly&apos;s built-in text editor for my
                        privacy policy?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Yes. Weebly&apos;s text element supports headings,
                        paragraphs, lists, and links, which is sufficient for a
                        privacy policy page. Simply drag a text element onto
                        your privacy policy page and format your content using
                        the built-in editor. For longer policies, consider
                        using multiple text elements with clear section
                        headings.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Should I also have a separate{" "}
                        <Link
                          href="/privacy-policy-for-carrd"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          terms page
                        </Link>
                        ?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Yes. A privacy policy and terms and conditions are two
                        different legal documents that serve different purposes.
                        Your privacy policy explains how you handle data. Your
                        terms and conditions govern the rules for using your
                        site. Both should be separate pages linked from your
                        footer.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: GDPR/CCPA Requirements */}
              <section id="gdpr-ccpa" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GDPR and CCPA Requirements for Weebly Sites
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What you need to include in your privacy policy to meet
                      regulatory standards.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Your Weebly privacy policy must meet the requirements of
                    both{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and CCPA if you serve visitors from the EU and California.
                    Since Weebly sites are accessible globally, most site
                    owners need to comply with both.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="rounded-xl border border-slate-200/80 p-5">
                      <h3 className="font-semibold text-slate-900 mb-3">
                        GDPR Requirements for Weebly Sites
                      </h3>
                      <ul className="space-y-2 text-base leading-7 text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          Identity of the data controller (you) and contact details
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          Types of personal data collected through Weebly features
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          Lawful basis for each type of data processing
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          Disclosure of data sharing with Square and third parties
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          Data retention periods for each category of data
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          User rights (access, rectification, erasure, portability)
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-200/80 p-5">
                      <h3 className="font-semibold text-slate-900 mb-3">
                        CCPA Requirements for Weebly Sites
                      </h3>
                      <ul className="space-y-2 text-base leading-7 text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          Categories of personal information collected
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          Categories of sources from which data is collected
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          Business purpose for collecting or selling data
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          Categories of third parties with whom data is shared
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1.5" />
                          Right to opt out of the sale of personal information
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    A common gap for Weebly site owners is failing to disclose
                    the Square integration in their privacy policy. Since Square
                    is both the platform owner and the payment processor, many
                    site owners assume this is implied. However, GDPR Article
                    13 requires you to explicitly name all recipients of
                    personal data and the purpose of each transfer.
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
                          Weebly sites that use the ecommerce features are
                          subject to both privacy regulations and PCI DSS
                          compliance requirements. While Square handles the
                          technical PCI compliance for payment processing, your
                          privacy policy must still explain to customers how
                          their payment data is collected, who processes it, and
                          how long transaction records are retained.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Weebly Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Misconceptions that leave Weebly site owners exposed to
                      fines and compliance issues.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    These are the five most common privacy mistakes Weebly
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
                          Mistake: &quot;Weebly and Square handle privacy for me&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Weebly and Square have their own privacy policies
                          that cover the platform, but these policies do not
                          cover your individual website. You are the data
                          controller for your site and must have your own
                          privacy policy that describes your specific data
                          collection practices, features used, and how you
                          handle visitor information.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I do not mention Square in my privacy
                          policy&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          If your Weebly site accepts payments or uses
                          ecommerce features, Square processes transaction data
                          on your behalf. Failing to disclose Square as a data
                          processor violates GDPR Article 13, which requires
                          you to name all recipients of personal data and
                          explain the purpose of each data transfer.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;My Weebly template came with legal pages&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Some Weebly templates include placeholder legal pages,
                          but these contain generic or placeholder text that
                          does not reflect your actual data practices. Using
                          template legal pages without customizing them is worse
                          than having no policy because it creates a false
                          sense of compliance.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I do not collect data, I just have a simple
                          Weebly site&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Every Weebly website collects data automatically.
                          Weebly Stats tracks page views, visitor data, and
                          referral sources. Weebly hosting logs IP addresses
                          and browser information. Weebly and Square set
                          cookies for functionality and analytics. Even a simple
                          one-page Weebly site is collecting personal data that
                          must be disclosed.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I only need a privacy policy if I have a
                          Weebly store&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          While Weebly ecommerce sites have more extensive data
                          collection, every Weebly site needs a privacy policy
                          regardless of whether it has a store. Contact forms,
                          blog comments, newsletter signups, membership areas,
                          and even basic analytics all trigger the legal
                          requirement for a privacy policy under GDPR and CCPA.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: How to Create a Privacy Policy */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your Weebly Site
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A step-by-step process to generate a compliant privacy
                      policy tailored to your Weebly website.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Creating a privacy policy for your Weebly site does not
                    have to be complicated. Follow these six steps to create a
                    policy that covers all your Weebly-specific data collection
                    and meets GDPR and CCPA requirements.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1",
                        title: "Audit your Weebly site's data collection",
                        content:
                          "Go through your Weebly dashboard and document every feature you have enabled. Check which features are active: Weebly Stats, contact forms, ecommerce store, blog comments, membership areas, and newsletter signups. For each one, note what types of data it collects from visitors.",
                      },
                      {
                        step: "Step 2",
                        title: "Review your Square integration",
                        content:
                          "If you use Weebly's ecommerce or payment features, document how Square processes payment data on your behalf. Note the types of transaction data collected, where it is stored, and how long it is retained. Check your Square dashboard for additional data processing details.",
                      },
                      {
                        step: "Step 3",
                        title: "List all third-party apps and embed codes",
                        content:
                          "Check your Weebly App Center installations and any custom embed codes you have added to your site. For each integration, identify what visitor data it accesses, collects, or transmits. Pay special attention to analytics tools, marketing scripts, and social media widgets.",
                      },
                      {
                        step: "Step 4",
                        title: "Determine which privacy laws apply",
                        content:
                          "Based on where you are located and where your visitors come from, identify your legal obligations. If you have any EU visitors, GDPR applies. If you have California visitors and meet CCPA thresholds, CCPA applies. Most Weebly sites have a global audience, so both typically apply.",
                      },
                      {
                        step: "Step 5",
                        title: "Generate your privacy policy",
                        content:
                          "Use a privacy policy generator to create a document tailored to your Weebly site. Answer questions about your data practices, features, Square integration, and third-party apps. A good generator will produce a policy covering all required sections including data collection, cookies, third-party sharing, user rights, and data retention.",
                      },
                      {
                        step: "Step 6",
                        title: "Add the policy and schedule reviews",
                        content:
                          "Create a dedicated page in the Weebly Editor, paste your privacy policy, and add links from your footer, all forms, newsletter signups, and checkout pages. Set a reminder to review your privacy policy at least annually and update it whenever you add new features or integrations.",
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
                    Weebly features and integrations. Once you know what data
                    you collect, the{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      policy generation
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    itself takes under 60 seconds.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 9: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
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
                <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <ShieldCheck className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your Weebly Privacy Policy
                    </h2>
                    <p className="mt-3 text-slate-300 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your Weebly website in under 60 seconds. Covers all
                      Weebly features, Square integration, and third-party
                      apps.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-xl shadow-lg shadow-slate-900/20"
                      >
                        Generate My Weebly Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-slate-400">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500/50" />
                      <span>Weebly-ready disclosures</span>
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
                      href: "/privacy-policy-for-squarespace",
                      icon: Globe,
                      title: "Privacy Policy for Squarespace",
                      desc: "Squarespace compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-webflow",
                      icon: Settings,
                      title: "Privacy Policy for Webflow",
                      desc: "Webflow compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-carrd",
                      icon: FileText,
                      title: "Privacy Policy for Carrd",
                      desc: "Carrd compliance guide",
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
                      icon: ArrowRight,
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
