import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,

  Ban,
  Info,
  Store,
  Lock,
  Eye,
  Database,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Shopify Apps: App Store Requirements (2026) | ultrafastutilities",
  description:
    "Shopify requires every app in its App Store to have a privacy policy. Learn what Shopify reviews, which merchant data you must disclose, and how to create a compliant policy for your app.",
  keywords:
    "privacy policy for shopify app, shopify app privacy policy, shopify app store requirements, shopify app data handling, shopify app developer privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-shopify-app",
  },
  openGraph: {
    title:
      "Privacy Policy for Shopify Apps: App Store Requirements (2026) | ultrafastutilities",
    description:
      "Shopify requires every app in its App Store to have a privacy policy. Learn what Shopify reviews, which merchant data you must disclose, and how to create a compliant policy for your app.",
    url: "https://ultrafastutilities.com/privacy-policy-for-shopify-app",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Shopify Apps | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Shopify Apps: App Store Requirements (2026)",
    description:
      "Shopify requires every app in its App Store to have a privacy policy. Learn what Shopify reviews and which merchant data you must disclose.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does my Shopify app need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shopify requires every app listed in the Shopify App Store to have a privacy policy. This applies regardless of whether your app is free or paid, public or custom. If your app accesses any merchant or customer data through Shopify APIs, you must have a publicly accessible privacy policy that discloses what data you collect, how you use it, and how merchants or their customers can request deletion.",
      },
    },
    {
      "@type": "Question",
      name: "What data does Shopify consider personal information for apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify considers personal information to include any data that identifies or could identify an individual. For apps, this includes customer names, email addresses, shipping addresses, phone numbers, order details, payment information, browsing behavior tracked through storefronts, and any data accessed via Shopify API scopes such as read_customers, read_orders, or read_products. Merchant data like store owner contact details and business information also qualifies.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I add my privacy policy URL in the Shopify Partner Dashboard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Shopify Partner Dashboard, navigate to your app listing under Apps. In the App setup section, you will find a field for your app privacy policy URL. This URL must point to a publicly accessible page that does not require authentication to view. The URL is displayed on your app's listing page in the Shopify App Store so merchants can review it before installing your app.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my Shopify app does not have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your app will not pass Shopify's app review process and will not be listed in the Shopify App Store. Existing apps that are found to violate Shopify's Partner Program Agreement, which requires a privacy policy, can be removed from the store and your Partner account may face suspension. Shopify has increased enforcement of privacy requirements significantly in recent years.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to handle GDPR data requests for my Shopify app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shopify requires all apps to implement mandatory GDPR webhooks for handling data subject requests. You must implement endpoints for customers/data_request, customers/redact, and shop/redact webhooks. These webhooks allow Shopify to forward data deletion and access requests from merchants and their customers to your app. Failure to implement these webhooks will prevent your app from being approved.",
      },
    },
    {
      "@type": "Question",
      name: "Does my custom or private Shopify app need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom apps built for a single merchant are not listed in the public App Store, but they still access merchant and customer data through Shopify APIs. While Shopify does not review custom apps the same way it reviews public apps, you are still bound by the Partner Program Agreement and applicable privacy laws like GDPR and CCPA. Having a privacy policy is strongly recommended and may be legally required depending on where your merchants and their customers are located.",
      },
    },
    {
      "@type": "Question",
      name: "What must my Shopify app privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy must disclose what merchant and customer data your app accesses through Shopify API scopes, how that data is used, whether it is shared with any third-party services, how it is stored and secured, how long it is retained, and how merchants or customers can request access to or deletion of their data. You must also disclose your GDPR webhook implementation and any data processing that occurs outside of Shopify's platform.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Shopify App",
  description:
    "Follow these six steps to create a compliant privacy policy for your Shopify app that satisfies App Store requirements and passes the review process.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit every API scope your app requests",
      text: "Review your app configuration and list every Shopify API scope your app requests. For each scope, document what merchant or customer data it gives your app access to and whether your app actually reads, stores, or transmits that data. Remove any scopes you do not actively use.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map all data flows from Shopify to your app",
      text: "Trace how data moves from Shopify through your app. Identify what data is received via webhooks, what is fetched through the Admin API or Storefront API, what is stored in your database, what is processed by third-party services, and what is displayed back to merchants. Document each data flow.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Distinguish merchant data from customer data",
      text: "Separate the data your app handles into merchant data (store owner information, business details, store configuration) and customer data (shopper names, emails, addresses, order history). Each category has different disclosure requirements and different data subject rights under privacy laws.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Implement mandatory GDPR webhooks",
      text: "Set up the three required GDPR webhook endpoints: customers/data_request for handling data access requests, customers/redact for deleting customer data, and shop/redact for cleaning up data when a merchant uninstalls your app. These are required for app approval and must be reflected in your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Generate your privacy policy with Shopify-specific details",
      text: "Use a privacy policy generator to create a policy that covers your Shopify app's specific data handling. Include details about each API scope, data storage methods, third-party services, GDPR webhook handling, and data retention periods. The policy must accurately reflect your app's actual behavior.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Add the privacy policy URL to your Partner Dashboard",
      text: "In the Shopify Partner Dashboard, navigate to your app listing and add your privacy policy URL in the App setup section. This URL must be publicly accessible and will be displayed on your app's listing in the Shopify App Store for merchants to review before installation.",
    },
  ],
};

const tocSections = [
  { id: "app-store-requirements", title: "App Store Privacy Requirements" },
  { id: "data-your-app-accesses", title: "Data Your App Accesses" },
  { id: "merchant-vs-customer-data", title: "Merchant vs Customer Data" },
  { id: "app-review-process", title: "App Review Process" },
  { id: "gdpr-requirements", title: "GDPR Requirements" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "where-to-display", title: "Where to Display Your Policy" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create One (6 Steps)" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForShopifyAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Shopify Apps: App Store Requirements (2026)",
            description:
              "Shopify requires every app in its App Store to have a privacy policy. Learn what Shopify reviews, which merchant data you must disclose, and how to create a compliant policy for your app.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-16",
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
                name: "Privacy Policy for Shopify Apps",
                item: "https://ultrafastutilities.com/privacy-policy-for-shopify-app",
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
                Privacy Policy for Shopify Apps
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Developer Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Shopify Apps
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Shopify requires every app in its App Store to have a
                privacy policy. Without one, your app will not pass the
                review process and will not be listed for merchants to
                install.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Shopify app developers, agencies, and teams building
                public or custom apps on the Shopify platform.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA &amp;
                Shopify App Store compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-shopify"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Store className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Shopify Store Policies
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-saas"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Database className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                SaaS Privacy Policies
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
                    Building a Shopify app?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Get your privacy policy in 60 seconds
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>12 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Shopify requires every app in its App Store to have a privacy policy.</strong>{" "}
                  If your app accesses any merchant or customer data through
                  Shopify APIs, you must provide a publicly accessible privacy
                  policy URL in your Partner Dashboard. Your policy must
                  disclose what data you access, how you use it, and how
                  merchants or their customers can request data deletion.
                  Apps submitted without a privacy policy will not pass review.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Shopify apps operate with direct access to merchant stores
                and their customer data. Through API scopes, your app can
                read orders, customer profiles, product catalogs, payment
                records, and store analytics. This level of access is why
                Shopify enforces strict privacy requirements for every app
                in its ecosystem.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                The Shopify App Store review process checks for a valid
                privacy policy URL, proper GDPR webhook implementation,
                and accurate data handling disclosures. Shopify has
                significantly increased its enforcement of these
                requirements as privacy regulations like GDPR and CCPA
                have expanded. Apps that fail to meet these requirements
                are rejected during review or removed from the store.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers the Shopify App Store privacy
                requirements, which API scopes trigger data handling
                disclosures, how to distinguish between merchant and
                customer data, the mandatory GDPR webhooks, third-party
                service disclosure, and how to create a compliant privacy
                policy that passes the review process.
              </p>

              {/* Section 1: App Store Privacy Requirements */}
              <section id="app-store-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Shopify App Store Privacy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Shopify&apos;s Partner Program Agreement and API Terms
                  of Service require every app to handle merchant and
                  customer data responsibly. These are not guidelines.
                  They are contractual obligations enforced through the
                  app review process and ongoing compliance monitoring.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Shopify Requires
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy URL:</strong> A publicly accessible
                      URL entered in the Partner Dashboard that links to your
                      app&apos;s privacy policy. This URL is displayed on your
                      app&apos;s listing in the Shopify App Store.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Accurate data disclosures:</strong> Your policy
                      must accurately describe what merchant and customer data
                      your app accesses through Shopify APIs, how it uses that
                      data, whether it shares data with third parties, and how
                      data subjects can request deletion.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>GDPR webhook implementation:</strong> Your app
                      must implement the three mandatory GDPR webhooks:
                      customers/data_request, customers/redact, and shop/redact.
                      These handle data access and deletion requests forwarded
                      by Shopify.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Minimum necessary scopes:</strong> Your app must
                      only request API scopes it actually needs. Requesting
                      broad access &quot;just in case&quot; will trigger
                      additional review scrutiny and require more extensive
                      privacy disclosures.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data retention limits:</strong> Your app must not
                      retain merchant or customer data longer than necessary
                      for the app&apos;s purpose. When a merchant uninstalls
                      your app, you must delete their data within 48 hours
                      unless you have a legal obligation to retain it.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Shopify reviews apps both when they are submitted and on
                  an ongoing basis. Apps that violate these requirements
                  can be removed from the App Store without warning.
                  Partner accounts with repeated violations can be
                  permanently suspended. Shopify has removed hundreds of
                  apps for privacy and data handling violations.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Required</p>
                    <p className="text-xs text-slate-500 mt-1">
                      For all App Store listings
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Public</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Must be publicly accessible
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <AlertTriangle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Enforced</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Rejection or removal
                    </p>
                  </div>
                </div>

                {/* Did you know box 1 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Shopify processes over $200 billion in annual gross
                        merchandise volume across millions of stores worldwide.
                        Every app in the ecosystem has the potential to access
                        data from thousands of merchants and millions of their
                        customers. This is why Shopify treats app privacy
                        compliance as a top priority and has dedicated review
                        teams that specifically check privacy policy accuracy
                        and GDPR webhook implementation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enforcement Consequences */}
                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Enforcement Consequences
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      New Apps
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Rejected
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Will not pass review without a compliant privacy policy
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      Existing Apps
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Removed
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Can be taken down at any time for non-compliance
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Types of Data Your App Accesses */}
              <section id="data-your-app-accesses" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Types of Data Your Shopify App Accesses
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Shopify apps access data through API scopes that are
                  requested during the OAuth installation flow. Each scope
                  grants access to specific types of merchant or customer
                  data. Your privacy policy must disclose every category
                  of data your app accesses, even if your app only reads
                  the data without storing it.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          API Scope
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Data Access
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Data Category
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Sensitivity
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          read_customers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Customer names, emails, addresses, phone numbers,
                          order history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Personal data
                        </td>
                        <td className="px-4 py-3 text-slate-600">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          read_orders
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Order details, line items, shipping info, payment
                          status, customer references
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Transactional
                        </td>
                        <td className="px-4 py-3 text-slate-600">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          read_products
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product titles, descriptions, prices, images,
                          inventory levels
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Business data
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          read_analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Store analytics, traffic data, conversion metrics,
                          sales reports
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Business data
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          read_shipping
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shipping zones, rates, carrier configurations,
                          fulfillment details
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Business data
                        </td>
                        <td className="px-4 py-3 text-slate-600">Low</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          read_content
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Blog posts, pages, articles, and other store content
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Content data
                        </td>
                        <td className="px-4 py-3 text-slate-600">Low</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          read_themes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Theme files, template code, store design assets
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Business data
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          read_inventory
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Inventory levels, locations, stock adjustments
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Business data
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          write_checkouts
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Checkout data, cart contents, payment details,
                          customer checkout info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Personal + financial
                        </td>
                        <td className="px-4 py-3 text-slate-600">Very High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          read_shopify_payments
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Payment transactions, payouts, disputes, balance info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Financial data
                        </td>
                        <td className="px-4 py-3 text-slate-600">Very High</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The general rule is that any scope prefixed with
                  &quot;read_customers&quot;, &quot;read_orders&quot;, or
                  any scope that touches checkout or payment data will
                  require detailed privacy disclosures. Even scopes like
                  read_products, which seem benign, give your app access
                  to proprietary business information that merchants
                  expect to be kept confidential.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  Write scopes (write_customers, write_orders, etc.) carry
                  additional responsibility because your app can modify
                  data, not just read it. Your privacy policy should
                  clearly explain what modifications your app makes and
                  why.
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
                        Shopify&apos;s API rate limiting is partially based on
                        your app&apos;s requested scopes. Apps that request
                        fewer scopes and demonstrate responsible data handling
                        can receive higher API limits. This is another reason
                        to only request the scopes your app actually needs.
                        Your privacy policy should reflect only the scopes
                        you request, making it easier to keep accurate and
                        pass review.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Merchant vs Customer Data */}
              <section id="merchant-vs-customer-data" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Merchant Data vs Customer Data
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  One of the most important distinctions in Shopify app
                  privacy is the difference between merchant data and
                  customer data. These two categories have different
                  owners, different rights, and different legal
                  implications. Your privacy policy must address both
                  clearly.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Merchant Data
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Merchant data belongs to the store owner who installed
                  your app. It includes the merchant&apos;s name, email
                  address, store URL, business address, product catalog,
                  pricing information, store configuration, theme files,
                  and analytics data. The merchant is your direct customer,
                  and they have consented to your app accessing their data
                  by installing it.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  However, consent through installation does not mean
                  unlimited use. Your app may only use merchant data for
                  the purposes described in your app listing and privacy
                  policy. You cannot sell merchant data to third parties.
                  You cannot use it for purposes unrelated to your
                  app&apos;s functionality. When a merchant uninstalls
                  your app, you must delete their data within 48 hours.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Customer Data
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Customer data belongs to the people who shop at the
                  merchant&apos;s store. It includes shopper names, email
                  addresses, shipping addresses, phone numbers, order
                  history, and browsing behavior. This data passes through
                  Shopify to your app, but the data subjects are the
                  shoppers, not the merchant.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Customer data carries additional legal obligations under
                  GDPR, CCPA, and other privacy laws. These shoppers may
                  not know your app exists, yet your app is processing
                  their personal information. Under GDPR, you are
                  typically a data processor acting on behalf of the
                  merchant (the data controller). Your privacy policy
                  should explain this relationship and how customers can
                  exercise their data rights.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Who is the data controller for customer data in
                      my Shopify app?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      The merchant is typically the data controller because
                      they determine why and how customer data is processed.
                      Your app acts as a data processor on their behalf. This
                      means you process customer data according to the
                      merchant&apos;s instructions and your app&apos;s stated
                      purpose. Your privacy policy should clarify this
                      controller-processor relationship.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I use customer data for my own analytics or
                      product improvement?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Only if you clearly disclose this in your privacy policy
                      and the merchant agrees to it. Under GDPR, using customer
                      data for your own purposes (beyond providing the app
                      service) may make you a joint data controller, which
                      brings additional obligations. Shopify&apos;s API Terms
                      of Service restrict how you can use merchant and customer
                      data. Always check the latest terms before using data
                      for secondary purposes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: App Review Process */}
              <section id="app-review-process" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Shopify App Review Process
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Every public Shopify app must pass a review before it is
                  listed in the App Store. The review process covers
                  functionality, security, performance, and privacy. The
                  privacy portion specifically checks your privacy policy,
                  GDPR webhook implementation, and data handling practices.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Reviewers Check
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy URL is valid and public:</strong>{" "}
                      The URL must load a publicly accessible page with your
                      actual privacy policy. Broken links, login-required
                      pages, or placeholder content will cause rejection.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Policy matches requested scopes:</strong>{" "}
                      Reviewers check that your privacy policy discloses the
                      data categories that correspond to your requested API
                      scopes. If your app requests read_customers but your
                      policy does not mention customer data, it will be
                      flagged.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>GDPR webhooks are implemented:</strong>{" "}
                      Reviewers verify that your app responds correctly to
                      the mandatory GDPR webhook endpoints. Your app must
                      return proper HTTP status codes and actually process
                      the requests, not just acknowledge them.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Scopes are justified:</strong>{" "}
                      If your app requests scopes that seem broader than
                      its stated functionality, reviewers will ask you to
                      justify why those scopes are needed. Your privacy
                      policy should explain how each data type supports
                      your app&apos;s functionality.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  The review process typically takes several days for new
                  apps. If your app is rejected for privacy issues, you
                  will receive specific feedback about what needs to be
                  fixed. You can resubmit after making the corrections.
                  Repeated rejections for the same issues may result in
                  longer review times for future submissions.
                </p>
              </section>

              {/* Section 5: GDPR Requirements */}
              <section id="gdpr-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  GDPR Requirements for Shopify Apps
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Shopify serves merchants and customers in the European
                  Union, which means GDPR applies to virtually every
                  Shopify app. Even if you are based outside the EU, if
                  your app processes data from EU-based shoppers, you are
                  subject to GDPR requirements. Shopify enforces this by
                  requiring all apps to implement mandatory GDPR webhooks.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Mandatory GDPR Webhooks
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Shopify requires every app to implement three webhook
                  endpoints that handle GDPR data subject requests. These
                  webhooks are not optional. Your app will not pass review
                  without them.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="font-semibold text-slate-800 mb-1">
                      customers/data_request
                    </p>
                    <p className="text-sm text-slate-600">
                      Triggered when a customer requests access to their
                      personal data. Your app must respond with all data it
                      holds about that customer. This maps to GDPR&apos;s
                      right of access (Article 15). Your response should
                      include any customer data your app has stored,
                      processed, or derived from Shopify data.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="font-semibold text-slate-800 mb-1">
                      customers/redact
                    </p>
                    <p className="text-sm text-slate-600">
                      Triggered when a customer requests deletion of their
                      personal data. Your app must delete all data it holds
                      about that customer within 30 days. This maps to
                      GDPR&apos;s right to erasure (Article 17). You must
                      delete the data from your databases, backups, and any
                      third-party services where you forwarded the data.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="font-semibold text-slate-800 mb-1">
                      shop/redact
                    </p>
                    <p className="text-sm text-slate-600">
                      Triggered 48 hours after a merchant uninstalls your app.
                      Your app must delete all data associated with that
                      merchant&apos;s store, including any customer data
                      accessed through that merchant&apos;s store. This ensures
                      your app does not retain data from merchants who are no
                      longer using your service.
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy must disclose that your app
                  implements these webhooks and explain how merchants and
                  their customers can exercise their data rights. Include
                  specific information about your response timeframes and
                  the process for handling these requests.
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
                        Shopify sends GDPR webhook requests even if you have
                        not explicitly registered for them. If your app&apos;s
                        GDPR webhook endpoints return errors or do not exist,
                        Shopify logs these failures. Accumulated failures can
                        affect your app&apos;s standing in the App Store and
                        may trigger a compliance review. Always ensure your
                        GDPR endpoints are working, even if you receive
                        few requests.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Third-Party Services Disclosure */}
              <section id="third-party-services" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Third-Party Services Disclosure
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Many Shopify apps rely on third-party services to
                  function. Whether you use a cloud database, analytics
                  platform, email service, payment processor, or AI API,
                  any service that receives merchant or customer data from
                  your app must be disclosed in your privacy policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For each third-party service, your privacy policy should
                  explain what data is shared with that service, why it is
                  shared, and link to the service&apos;s own privacy policy.
                  Common third-party services in Shopify apps include:
                </p>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cloud hosting providers:</strong> AWS, Google
                      Cloud, or Azure where your app&apos;s backend runs and
                      stores data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Analytics services:</strong> Mixpanel, Amplitude,
                      Google Analytics, or similar services tracking app usage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Email and communication services:</strong>{" "}
                      SendGrid, Mailchimp, or Twilio used to send
                      notifications to merchants or customers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>AI and machine learning APIs:</strong> OpenAI,
                      Google AI, or similar services that process merchant
                      or product data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Error tracking and monitoring:</strong> Sentry,
                      Datadog, or LogRocket that may capture request data
                      containing personal information
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Under GDPR, when you share data with third-party services,
                  you should have Data Processing Agreements (DPAs) in place
                  with each service. Your privacy policy should mention that
                  these agreements exist and that third parties are
                  contractually bound to handle data in compliance with
                  applicable privacy laws.
                </p>
              </section>

              {/* Section 7: Where to Display Your Privacy Policy */}
              <section id="where-to-display" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Where to Display Your Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Your Shopify app&apos;s privacy policy needs to be
                  accessible in multiple locations, not just the App Store
                  listing. Merchants and their customers should be able
                  to find your policy wherever they interact with your app.
                </p>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Shopify App Store listing:</strong> The privacy
                      policy URL in your Partner Dashboard is displayed on
                      your app&apos;s public listing page. This is required
                      by Shopify.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Your app&apos;s website:</strong> If your app
                      has a marketing website or landing page, include a link
                      to your privacy policy in the footer. This is standard
                      practice and expected by Shopify reviewers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Within the app interface:</strong> Add a link to
                      your privacy policy somewhere accessible within your
                      app&apos;s admin interface. A common placement is in
                      the app&apos;s settings page or footer navigation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>OAuth consent screen:</strong> When merchants
                      install your app, the OAuth flow shows them what
                      permissions your app requests. While Shopify controls
                      this screen, some apps include a link to their privacy
                      policy in the pre-install landing page.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Storefront-facing elements:</strong> If your
                      app adds widgets, popups, or forms to the
                      merchant&apos;s storefront that collect customer data,
                      those elements should link to your privacy policy or
                      the merchant&apos;s privacy policy.
                    </span>
                  </li>
                </ul>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Should my storefront widgets link to my privacy
                      policy or the merchant&apos;s?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      If your app collects customer data directly through a
                      storefront widget (like a popup form or survey), best
                      practice is to link to both. The merchant is the data
                      controller, so their privacy policy is primary. But
                      customers should also be able to see how your app
                      handles their data. Discuss with your merchants how
                      they want to handle this, and make sure your
                      app&apos;s data collection is covered in the
                      merchant&apos;s privacy policy as well.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Shopify App Privacy Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These mistakes are the most common reasons Shopify apps
                  get rejected during review or removed from the App Store.
                  Each one reflects a misunderstanding of Shopify&apos;s
                  requirements or applicable privacy laws.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My app only reads products, so no
                        privacy policy is needed&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Product data is proprietary business information that
                        belongs to the merchant. Even if your app only reads
                        product titles and prices, you are accessing merchant
                        data through Shopify APIs. Shopify requires a privacy
                        policy for all App Store listings regardless of which
                        scopes you request. The policy must explain what data
                        your app accesses and how it uses that data.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;GDPR webhooks are just for EU
                        merchants&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Shopify requires all apps to implement GDPR webhooks
                        regardless of where the app developer or merchants
                        are located. Shopify serves merchants globally, and
                        any merchant could have EU-based customers. The
                        webhooks are a platform requirement, not just a GDPR
                        compliance feature. Your app will not pass review
                        without functional GDPR webhook endpoints.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I can keep data after a merchant
                        uninstalls&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        When a merchant uninstalls your app, Shopify sends
                        a shop/redact webhook within 48 hours. You must
                        delete all data associated with that merchant&apos;s
                        store, including customer data you accessed through
                        their store. The only exception is data you are
                        legally required to retain, such as financial records
                        for tax purposes. Your privacy policy must clearly
                        state your data retention and deletion practices.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;The merchant&apos;s privacy policy
                        covers my app&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The merchant&apos;s privacy policy covers their store
                        and how they handle customer data. It does not cover
                        your app&apos;s data handling practices. You are a
                        separate entity processing data through Shopify APIs.
                        You need your own privacy policy that explains how
                        your app specifically handles the merchant and
                        customer data it accesses. Shopify requires this as
                        part of the app listing.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I do not need to disclose my hosting
                        provider or analytics tools&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Every third-party service that receives merchant or
                        customer data from your app should be disclosed in
                        your privacy policy. This includes your cloud hosting
                        provider, database service, analytics tools, error
                        tracking services, and any APIs your app calls. Under
                        GDPR, you need Data Processing Agreements with each
                        of these services. Shopify reviewers check for
                        third-party disclosure completeness.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for Your Shopify App
                  (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow this process to create a privacy policy that
                  satisfies Shopify App Store requirements, passes the
                  review process, and complies with GDPR and CCPA.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit every API scope your app requests
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review your app configuration in the Partner Dashboard
                        and list every API scope your app requests. For each
                        scope, document what merchant or customer data it gives
                        your app access to and whether your app reads, stores,
                        or transmits that data. Remove any scopes you are not
                        actively using. Fewer scopes means fewer disclosure
                        requirements and a smoother review process.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Map all data flows from Shopify to your app
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Trace how data moves from Shopify through your app.
                        What data is received via webhooks? What is fetched
                        through the Admin API or Storefront API? What is
                        stored in your database? What is processed by
                        third-party services? What is displayed back to
                        merchants in your app interface? Document every flow.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Separate merchant data from customer data
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Categorize the data your app handles into merchant
                        data (store owner information, business details,
                        store configuration) and customer data (shopper
                        names, emails, addresses, order history). Each
                        category has different disclosure requirements and
                        different data subject rights under GDPR and CCPA.
                        Your privacy policy must address both categories.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Implement your GDPR webhooks
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Set up the three required GDPR webhook endpoints:
                        customers/data_request, customers/redact, and
                        shop/redact. Test them to ensure they return proper
                        HTTP status codes and actually process the requests.
                        Your privacy policy must reference these webhooks
                        and explain the process for data access and deletion
                        requests.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Generate your privacy policy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Use a{" "}
                        <Link
                          href="/generate"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          privacy policy generator
                        </Link>{" "}
                        to create a policy tailored to your Shopify app&apos;s
                        data handling. Include details about each API scope,
                        data storage methods, third-party services, GDPR
                        webhook handling, data retention periods, and merchant
                        versus customer data distinctions. The policy must
                        accurately reflect your app&apos;s actual behavior.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add the URL to your Partner Dashboard
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        In the Shopify Partner Dashboard, navigate to your
                        app listing and add your privacy policy URL in the
                        App setup section. This URL must be publicly accessible
                        and will be displayed on your app&apos;s listing in
                        the Shopify App Store for merchants to review before
                        installing your app.
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
                        Generate Your Shopify App Privacy Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Answer a few questions about your Shopify app and
                        get a privacy policy that passes the App Store
                        review process. Covers API scopes, data handling,
                        GDPR webhooks, and merchant rights.
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
                      Does my Shopify app need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Shopify requires every app listed in the App Store
                      to have a privacy policy. This applies to free and paid
                      apps, public and custom apps. If your app accesses any
                      merchant or customer data through Shopify APIs, you must
                      provide a publicly accessible privacy policy URL in your
                      Partner Dashboard.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What data does Shopify consider personal information?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Shopify considers personal information to include any
                      data that identifies or could identify an individual.
                      This includes customer names, emails, addresses, phone
                      numbers, order details, payment information, and browsing
                      behavior. Merchant data like store owner contact details
                      and business information also qualifies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Where do I add my privacy policy URL?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      In the Shopify Partner Dashboard, navigate to your app
                      listing under Apps. In the App setup section, you will
                      find a field for your privacy policy URL. This URL must
                      be publicly accessible without requiring authentication.
                      It will be displayed on your app&apos;s listing page in
                      the Shopify App Store.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if my app does not have a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your app will not pass Shopify&apos;s review process and
                      will not be listed in the App Store. Existing apps found
                      to violate the Partner Program Agreement can be removed
                      from the store. Your Partner account may face suspension
                      for repeated violations. Shopify has increased
                      enforcement significantly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need to handle GDPR data requests?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Shopify requires all apps to implement mandatory
                      GDPR webhooks: customers/data_request,
                      customers/redact, and shop/redact. These handle data
                      access and deletion requests forwarded by Shopify from
                      merchants and their customers. Failure to implement
                      these webhooks will prevent your app from being
                      approved.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my custom or private app need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Custom apps are not reviewed the same way as public
                      apps, but they still access merchant and customer data.
                      You are bound by the Partner Program Agreement and
                      applicable privacy laws. A privacy policy is strongly
                      recommended and may be legally required depending on
                      where your merchants and their customers are located.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What must my Shopify app privacy policy include?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your policy must disclose what merchant and customer
                      data your app accesses through API scopes, how it is
                      used, whether it is shared with third parties, how it
                      is stored and secured, how long it is retained, and
                      how data subjects can request access or deletion. You
                      must also disclose your GDPR webhook implementation.
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
                      href: "/privacy-policy-for-shopify",
                      title: "Privacy Policy for Shopify Stores",
                      desc: "Privacy policy requirements for Shopify store owners",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      title: "Privacy Policy for Ecommerce",
                      desc: "Complete guide to ecommerce privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      title: "Privacy Policy for SaaS",
                      desc: "Privacy requirements for software-as-a-service platforms",
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
                      href: "/privacy-policy-for-apps",
                      title: "Privacy Policy for Apps",
                      desc: "App store requirements for mobile and desktop applications",
                    },
                    {
                      href: "/is-a-privacy-policy-legally-required",
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "When the law requires you to have a privacy policy",
                    },
                    {
                      href: "/generate",
                      title: "Generate Your Privacy Policy",
                      desc: "Create a customized privacy policy in under 60 seconds",
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
                  Ready to Submit Your Shopify App?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a missing privacy policy block your App Store
                  submission. Generate a compliant policy that covers your
                  API scopes, GDPR webhooks, data handling, and merchant
                  rights. Takes under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and Shopify App Store requirements &middot;
                  Customized for apps &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
