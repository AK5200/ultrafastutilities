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
  BarChart3,
  CreditCard,
  MessageSquare,
  Users,
  Calendar,
  ShoppingBag,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Wix: GDPR & CCPA Compliant (2026) | ultrafastutilities",
  description:
    "Create a compliant privacy policy for your Wix website. Covers Wix Analytics, Wix Payments, Wix Forms, App Market integrations, and GDPR requirements. Generate yours for $4.99.",
  keywords:
    "privacy policy for wix, wix privacy policy, wix website privacy policy, wix gdpr, wix privacy policy template, wix privacy policy generator",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-wix",
  },
  openGraph: {
    title:
      "Privacy Policy for Wix: GDPR & CCPA Compliant (2026) | ultrafastutilities",
    description:
      "Create a compliant privacy policy for your Wix website. Covers Wix Analytics, Wix Payments, Wix Forms, App Market integrations, and GDPR requirements. Generate yours for $4.99.",
    url: "https://ultrafastutilities.com/privacy-policy-for-wix",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Wix | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Wix: GDPR & CCPA Compliant (2026) | ultrafastutilities",
    description:
      "Create a compliant privacy policy for your Wix website. Covers Wix Analytics, Wix Payments, Wix Forms, App Market integrations, and GDPR requirements. Generate yours for $4.99.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "does-your-wix-site-need", title: "Does Your Wix Site Need One?" },
  { id: "wix-collects-automatically", title: "What Wix Collects Automatically" },
  { id: "wix-features-data", title: "Wix Features That Collect Data" },
  { id: "wix-app-market", title: "Wix App Market Integrations" },
  { id: "where-to-add", title: "Where to Add Your Policy" },
  { id: "common-mistakes", title: "Common Wix Privacy Mistakes" },
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
      name: "Does Wix provide a privacy policy for my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Wix has its own privacy policy that covers the Wix platform, but it does not cover your individual website. You are responsible for creating and maintaining a privacy policy that describes your own data collection practices, including any Wix features and third-party apps you use.",
      },
    },
    {
      "@type": "Question",
      name: "Is a privacy policy required for a Wix website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your Wix website collects any personal data, including through Wix Analytics, Wix Forms, contact pages, or payment processing, you are legally required to have a privacy policy under GDPR, CCPA, and most other privacy laws. Even a simple portfolio site with Wix Analytics enabled is collecting visitor data.",
      },
    },
    {
      "@type": "Question",
      name: "Does Wix's cookie banner make my site GDPR compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not by itself. Wix offers a built-in cookie consent banner, but GDPR compliance requires more than just a banner. You also need a comprehensive privacy policy, proper cookie categorization, the ability to block non-essential cookies until consent is given, and clear descriptions of each cookie's purpose and duration.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a privacy policy to my Wix site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a new page in the Wix Editor and paste your privacy policy content. Then add a link to this page in your site footer, your cookie consent banner, and any forms that collect personal data. You can also add it through Wix's built-in legal pages feature under Site Settings.",
      },
    },
    {
      "@type": "Question",
      name: "Do Wix App Market apps need to be disclosed in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every third-party app you install from the Wix App Market that collects or processes visitor data must be disclosed in your privacy policy. This includes apps like Google Analytics, Mailchimp, Privy, Tidio Chat, Facebook Pixel, and any other app that tracks, stores, or transmits user data.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my Wix site does not have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operating a Wix site without a privacy policy when you collect personal data can result in GDPR fines of up to 20 million euros or 4% of global annual revenue. CCPA violations carry penalties of $2,500 to $7,500 per violation. Beyond fines, you risk losing customer trust and may violate Wix's own terms of service.",
      },
    },
    {
      "@type": "Question",
      name: "Can I copy another Wix site's privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Copying another site's privacy policy is both a copyright violation and a compliance risk. Each privacy policy must accurately reflect your specific data practices, the Wix features you use, the apps you have installed, and your particular business operations. A copied policy will almost certainly be inaccurate for your site.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Wix Site",
  description:
    "Follow these six steps to create a compliant privacy policy for your Wix website that covers all Wix-specific data collection and third-party integrations.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your Wix site's data collection",
      text: "Review every Wix feature you have enabled: Wix Analytics, Wix Forms, Wix Chat, Wix Payments, Wix Members Area, Wix Blog comments, and Wix Stores. Document which ones are active and what data each collects from visitors.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "List all Wix App Market integrations",
      text: "Go to your Wix dashboard and review every app installed from the App Market. For each app, identify what user data it collects, processes, or shares. Common apps include Google Analytics, Mailchimp, Facebook Pixel, and Tidio Chat.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Determine which privacy laws apply to you",
      text: "Identify your legal obligations based on where you and your visitors are located. If you have any EU visitors, GDPR applies. If you have California visitors and meet CCPA thresholds, CCPA applies. Most Wix sites serve a global audience, so both regulations typically apply.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a policy tailored to your Wix site. Answer questions about your specific data practices, Wix features, and third-party integrations. The generator produces a compliant document covering all required sections.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add the privacy policy to your Wix site",
      text: "Create a dedicated page in the Wix Editor for your privacy policy. Add it to your site footer navigation, link it from your cookie consent banner, and include links in any forms that collect personal data such as contact forms or newsletter signups.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Set up ongoing review and updates",
      text: "Schedule an annual review of your privacy policy. Update it immediately whenever you install a new Wix app, enable a new Wix feature, change payment providers, or modify how you collect or use visitor data. CCPA requires at least annual updates.",
    },
  ],
};

export default function PrivacyPolicyForWixPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Wix: GDPR & CCPA Compliant (2026) | ultrafastutilities",
            description:
              "Create a compliant privacy policy for your Wix website. Covers Wix Analytics, Wix Payments, Wix Forms, App Market integrations, and GDPR requirements. Generate yours for $4.99.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-03-09",
            dateModified: "2026-03-27",
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
                name: "Privacy Policy for Wix",
                item: "https://ultrafastutilities.com/privacy-policy-for-wix",
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
                Privacy Policy for Wix
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
                  Wix
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about privacy compliance for your
                Wix website. Covering Wix Analytics, Wix Payments, Wix Forms,
                App Market integrations, and GDPR requirements.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Wix site owners, designers, and developers.
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
                href="/privacy-policy-for-wordpress"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                WordPress Privacy Policy
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
                    Need a Wix privacy policy?
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
                <span>Last updated: March 2026</span>
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>10 min read</span>
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
                    Every Wix website that collects personal data needs its own
                    privacy policy.
                  </strong>{" "}
                  Wix&apos;s platform privacy policy only covers Wix itself, not
                  your individual site. If you use Wix Analytics, Wix Forms, Wix
                  Payments, or any App Market integrations, you must disclose
                  this data collection to your visitors under GDPR and CCPA.
                </p>
              </div>

              {/* Section 1: Does Your Wix Site Need a Privacy Policy? */}
              <section id="does-your-wix-site-need" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Does Your Wix Site Need a Privacy Policy?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Understanding why Wix sites require their own privacy
                      disclosures.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    The short answer is yes. Wix expects all customers to uphold
                    applicable privacy laws. If your Wix website collects any
                    personal data from visitors, you are legally required to have
                    a privacy policy. This includes data collected through
                    contact forms, analytics, payment processing, newsletter
                    signups, user accounts, and even basic visitor tracking.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Many Wix site owners assume that because they built their
                    site on a managed platform, Wix handles privacy compliance
                    for them. This is a dangerous misconception. Wix&apos;s own{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    covers the Wix platform itself, not your website or your
                    data collection activities. You are the data controller for
                    any information collected through your Wix site.
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
                    must provide a clear, accessible privacy policy. Under{" "}
                    <Link
                      href="/ccpa-privacy-policy-example"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      CCPA
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , California residents have the right to know what data is
                    being collected about them. Since Wix sites are accessible
                    globally, both regulations typically apply.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Even a simple Wix portfolio site with no forms collects data
                    through Wix Analytics, which tracks page views, session
                    duration, referral sources, and device information. This
                    alone triggers the requirement for a privacy policy. If you
                    also use Wix Forms, Wix Chat, Wix Payments, or any
                    third-party apps from the App Market, your data collection
                    footprint grows significantly.
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
                          Wix powers over 250 million websites worldwide. Despite
                          this massive scale, Wix&apos;s Terms of Use place full
                          responsibility for privacy compliance on individual site
                          owners. Section 11 of Wix&apos;s Terms explicitly states
                          that users must comply with all applicable privacy
                          regulations for their own websites and data collection
                          activities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What Wix Collects Automatically */}
              <section id="wix-collects-automatically" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Wix Collects Automatically
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Data collection that happens on every Wix site, even
                      without your direct involvement.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Every Wix website automatically collects certain data through
                    the platform&apos;s built-in services. It is important to
                    understand the difference between what Wix collects as a
                    platform provider and what you collect as a site owner. Both
                    must be disclosed, but they serve different purposes.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Wix Service
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
                            Wix Analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Page views, sessions, referrers, device info,
                            geographic location
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Wix (for you)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Wix Hosting
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            IP addresses, browser type, operating system, access
                            timestamps
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Wix (platform)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Wix Chat
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Conversation content, visitor name, email (if
                            provided), timestamps
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You (site owner)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Wix Members
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Account credentials, profile information, login
                            activity
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You (site owner)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Wix Cookies
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Session identifiers, preferences, security tokens
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Wix (platform)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    The key distinction is that Wix collects some data as part of
                    its platform infrastructure (hosting logs, security cookies),
                    while other data is collected specifically for your benefit
                    (analytics dashboards, chat conversations). Your privacy
                    policy must cover both categories because visitors experience
                    both types of collection when they visit your site.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Even if you never look at your Wix Analytics dashboard, the
                    data is still being collected. Wix Analytics is enabled by
                    default on all Wix sites, which means every visitor&apos;s
                    page views, session duration, device type, browser, and
                    approximate location are being recorded from the moment your
                    site goes live.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    For a comprehensive understanding of{" "}
                    <Link
                      href="/cookie-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      cookie policies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , including how to properly classify and disclose the cookies
                    your Wix site uses, see our dedicated guide.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Can I disable Wix Analytics to avoid data collection?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        You can limit what Wix Analytics tracks, but you cannot
                        fully disable all platform-level data collection. Wix
                        hosting still logs IP addresses and access data for
                        security and performance purposes. Your privacy policy
                        should disclose this baseline data collection.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Is Wix Analytics the same as Google Analytics?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        No. Wix Analytics is Wix&apos;s own built-in analytics
                        tool that runs on all Wix sites. Google Analytics is a
                        separate third-party service that you install via the Wix
                        App Market. If you use both, you must disclose both in
                        your privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Wix-Specific Features That Collect Data */}
              <section id="wix-features-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Wix-Specific Features That Collect Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Each Wix feature you enable creates additional data
                      collection that must be disclosed.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* Wix Forms */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Wix Forms
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                      Wix Forms is one of the most common data collection tools
                      on Wix sites. Every form submission stores the data in
                      your Wix dashboard, including:
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Contact form submissions (names, emails, phone numbers, messages)
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

                  {/* Wix Payments */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Wix Payments
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                      Wix Payments processes transactions through third-party
                      payment providers. Your privacy policy must disclose:
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Payment card details (processed by the payment provider, not stored by you)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Billing names and addresses
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Transaction amounts and order details
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        The identity of the payment processor handling the transaction
                      </li>
                    </ul>
                  </div>

                  {/* Wix Bookings */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Wix Bookings
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                      If you offer appointment scheduling through Wix Bookings,
                      the following data is collected:
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
                        Payment information for paid bookings
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Custom intake form responses
                      </li>
                    </ul>
                  </div>

                  {/* Wix Stores */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Wix Stores
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                      Wix Stores collects extensive{" "}
                      <Link
                        href="/privacy-policy-for-ecommerce"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        ecommerce data
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      that requires detailed privacy disclosures:
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
                        Payment and billing information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Abandoned cart tracking data
                      </li>
                    </ul>
                  </div>

                  {/* Wix Blog */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-pink-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Wix Blog
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                      If you run a{" "}
                      <Link
                        href="/do-i-need-a-privacy-policy-for-a-blog"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        blog on Wix
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , additional data is collected through:
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Blog comment author names and email addresses
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Email subscriptions for blog updates
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Comment content and posting timestamps
                      </li>
                    </ul>
                  </div>

                  {/* Wix Members Area */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                        <Users className="w-4 h-4 text-teal-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Wix Members Area
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                      The Wix Members Area creates user accounts on your site,
                      collecting:
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Registration data (name, email, password)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Profile information and avatars
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Activity history and login records
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Member-to-member communication data
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Wix App Market Integrations */}
              <section id="wix-app-market" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Wix App Market Integrations
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Third-party apps that add data collection you must
                      disclose.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    The Wix App Market contains thousands of third-party
                    applications that can be installed on your site. Each app
                    that collects, processes, or shares visitor data must be
                    disclosed in your privacy policy. Here are the most commonly
                    used apps and what they collect:
                  </p>

                  {/* App Market Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            App
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
                            Privy
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Email addresses, popup interaction data, browsing
                            behavior
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Lead capture and popups
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (email collection)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Tidio Chat
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Chat messages, visitor name, email, browsing pages
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Live chat support
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (conversation data)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Instagram Feed
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Instagram cookies, engagement tracking
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
                            TripAdvisor Widget
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Third-party cookies, review interaction data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Review display
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Low (limited data)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Each of these apps introduces additional data processing that
                    operates independently of Wix&apos;s own data collection.
                    When a visitor lands on your site, they may be tracked by
                    Wix Analytics, Google Analytics, and Facebook Pixel
                    simultaneously, with each service sending data to different
                    servers in different countries. Your privacy policy must
                    explain all of this to be compliant.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Before installing any app from the Wix App Market, review
                    its privacy practices. Many apps have their own privacy
                    policies and data processing agreements that affect your
                    compliance obligations. If you are{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-collecting-emails"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      collecting emails
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    {" "}through apps like Mailchimp or Privy, you have
                    additional consent requirements under GDPR.
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
                          The average Wix website with common apps installed
                          (Google Analytics, a chat widget, and a marketing
                          popup) sends visitor data to at least 4 to 6 different
                          third-party companies. Each of these data transfers
                          must be individually disclosed in your privacy policy
                          under GDPR Article 13, including the identity of each
                          recipient and the purpose of each transfer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Where to Add Your Privacy Policy in Wix */}
              <section id="where-to-add" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Where to Add Your Privacy Policy in Wix
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
                    where and how to add your privacy policy to your Wix site:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Create a dedicated privacy policy page",
                        desc: "In the Wix Editor, click 'Add Page' and create a new page titled 'Privacy Policy.' Paste your complete privacy policy content into this page. Make sure the page URL slug is set to something clear like /privacy-policy.",
                      },
                      {
                        step: "2",
                        title: "Add a footer link",
                        desc: "Add a link to your privacy policy page in your site's footer. This is the most common and expected location for privacy policy links. In the Wix Editor, edit your footer section and add a text link or navigation menu item pointing to your privacy policy page.",
                      },
                      {
                        step: "3",
                        title: "Link from your cookie consent banner",
                        desc: "If you use Wix's built-in cookie consent banner (or a third-party cookie consent app), configure it to include a link to your privacy policy. Visitors should be able to read your full privacy policy directly from the consent banner.",
                      },
                      {
                        step: "4",
                        title: "Add links to all forms",
                        desc: "Every form on your Wix site that collects personal data (contact forms, newsletter signups, registration forms) should include a link to your privacy policy. Add a checkbox or text like 'By submitting this form, you agree to our Privacy Policy' with a link.",
                      },
                      {
                        step: "5",
                        title: "Configure Wix ADI sites",
                        desc: "If you built your site using Wix ADI (Artificial Design Intelligence), go to Settings and then Legal to add your privacy policy. Wix ADI sites handle page creation differently from the standard Editor, so use the Settings menu to manage legal pages.",
                      },
                      {
                        step: "6",
                        title: "Link from checkout pages",
                        desc: "If you use Wix Stores or Wix Payments, make sure your privacy policy is linked from the checkout flow. Wix includes some default legal links during checkout, but verify that your custom privacy policy is properly referenced.",
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
                    Make sure your policy is prominent and easy to find.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Should I use Wix&apos;s built-in legal pages feature?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Wix offers a built-in legal pages feature under Site
                        Settings, but this only provides a basic template. It is
                        better to create a full custom page with a comprehensive
                        privacy policy that covers your specific data practices,
                        apps, and compliance requirements.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Do I need a separate{" "}
                        <Link
                          href="/privacy-policy-vs-terms-and-conditions"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          terms and conditions
                        </Link>{" "}
                        page?
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

              {/* Section 6: Common Wix Privacy Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Wix Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Misconceptions that leave Wix site owners exposed to fines
                      and compliance issues.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    These are the five most common privacy mistakes Wix site
                    owners make. Each one creates a real compliance gap that
                    can lead to regulatory action.
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Wix provides a privacy policy for me&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Wix has its own privacy policy for the Wix platform,
                          but this policy covers Wix as a company, not your
                          website. You are the data controller for your site and
                          must have your own privacy policy that describes your
                          specific data collection practices, the apps you use,
                          and how you handle visitor information.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I use Wix&apos;s built-in cookie banner so
                          I&apos;m compliant&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          A cookie consent banner is only one part of GDPR
                          compliance. You also need a comprehensive privacy
                          policy, proper cookie categorization, the technical
                          ability to block non-essential cookies before consent,
                          and clear documentation of each cookie&apos;s purpose.
                          The banner alone does not make you compliant, and
                          Wix&apos;s default banner may not meet all GDPR
                          requirements without proper configuration.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;My Wix template came with legal pages&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Some Wix templates include placeholder legal pages, but
                          these contain generic or placeholder text that does not
                          reflect your actual data practices. Using template
                          legal pages without customizing them is worse than
                          having no policy at all because it creates a false
                          sense of compliance. You could be{" "}
                          <Link
                            href="/can-i-copy-someone-elses-privacy-policy"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            copying someone else&apos;s policy
                          </Link>
                          , which is both a copyright and compliance risk.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I don&apos;t collect data, I just have a
                          website&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Every Wix website collects data automatically. Wix
                          Analytics tracks page views, session data, and visitor
                          devices. Wix hosting logs IP addresses and browser
                          information. Wix sets cookies for functionality and
                          session management. Even a simple one-page portfolio
                          site on Wix is collecting personal data that must be
                          disclosed.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Wix handles GDPR for Wix sites&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Wix has made its platform GDPR-compliant for its own
                          data processing as a platform provider. However, GDPR
                          compliance for your specific website is your
                          responsibility. You are the data controller. You must
                          provide your own privacy notices, establish lawful
                          bases for processing, respond to data subject access
                          requests, and maintain records of processing
                          activities. Wix provides tools to help, but the legal
                          obligation is yours.
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
                          A 2024 survey of 500 Wix websites found that over 60%
                          either had no privacy policy at all or were using a
                          generic template that did not mention Wix-specific data
                          collection features. Of those with privacy policies,
                          fewer than 25% disclosed their Wix App Market
                          integrations, even though these apps were actively
                          collecting visitor data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: How to Create a Privacy Policy for Your Wix Site */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your Wix Site
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A step-by-step process to generate a compliant privacy
                      policy tailored to your Wix website.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Creating a privacy policy for your Wix site does not have to
                    be complicated. Follow these six steps to create a policy
                    that covers all your Wix-specific data collection and meets
                    GDPR and CCPA requirements.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1",
                        title: "Audit your Wix site's data collection",
                        content:
                          "Go through your Wix dashboard and document every feature you have enabled. Check which Wix features are active: Wix Analytics, Wix Forms, Wix Chat, Wix Payments, Wix Members Area, Wix Blog, and Wix Stores. For each one, note what types of data it collects from visitors.",
                      },
                      {
                        step: "Step 2",
                        title: "List all Wix App Market integrations",
                        content:
                          "Open your Wix App Market management page and review every installed app. For each app, identify what visitor data it accesses, collects, or transmits. Pay special attention to analytics tools, marketing apps, chat widgets, and social media integrations.",
                      },
                      {
                        step: "Step 3",
                        title: "Determine which privacy laws apply",
                        content:
                          "Based on where you are located and where your visitors come from, identify your legal obligations. If you have any EU visitors, GDPR applies. If you have California visitors and meet CCPA thresholds, CCPA applies. Most Wix sites have a global audience, so both typically apply.",
                      },
                      {
                        step: "Step 4",
                        title: "Generate your privacy policy",
                        content:
                          "Use a privacy policy generator to create a document tailored to your Wix site. Answer questions about your data practices, features, and integrations. A good generator will produce a policy covering all required sections including data collection, cookies, third-party sharing, user rights, and data retention.",
                      },
                      {
                        step: "Step 5",
                        title: "Add the policy to your Wix site",
                        content:
                          "Create a dedicated page in the Wix Editor, paste your privacy policy, and add links from your footer, cookie banner, all forms, and checkout pages. Make sure the policy is accessible before any data collection occurs.",
                      },
                      {
                        step: "Step 6",
                        title: "Schedule regular reviews",
                        content:
                          "Set a reminder to review your privacy policy at least annually. Update it immediately whenever you install or remove Wix apps, enable new Wix features, change payment providers, or modify your data collection practices. Keep the 'last updated' date current.",
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
                    most time-consuming part is the initial audit of your Wix
                    features and apps. Once you know what data you collect, the{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      policy generation
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    itself takes under 60 seconds. Remember to{" "}
                    <Link
                      href="/how-often-should-you-update-your-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      update your policy regularly
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    as your site evolves.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
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
                      Generate Your Wix Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your Wix website in under 60 seconds. Covers all Wix
                      features and App Market integrations.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Wix Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Wix-ready disclosures</span>
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
                      href: "/privacy-policy-for-wordpress",
                      icon: FileText,
                      title: "Privacy Policy for WordPress",
                      desc: "WordPress-specific compliance",
                    },
                    {
                      href: "/privacy-policy-for-shopify",
                      icon: ShoppingBag,
                      title: "Privacy Policy for Shopify",
                      desc: "Shopify store compliance guide",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance template and guide",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: FileText,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie compliance requirements",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks and penalties explained",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      icon: Clock,
                      title: "How Often to Update Your Policy",
                      desc: "Update frequency and triggers",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      icon: Ban,
                      title: "Can I Copy a Privacy Policy?",
                      desc: "Why copying policies is risky",
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
