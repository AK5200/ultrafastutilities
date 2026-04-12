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
  Clock,
  Ban,
  Info,
  ShoppingBag,
  Users,
  Store,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Amazon Sellers (FBA + Brand Registry, 2026)",
  description:
    "Amazon requires a privacy policy for Brand Registry, external sites, and Amazon Ads. Covers FBA buyer data and multi channel rules. Free, updated April 2026.",
  keywords:
    "privacy policy for amazon seller, amazon seller privacy policy, amazon fba privacy policy, amazon marketplace privacy policy, amazon third party seller privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-amazon-seller",
  },
  openGraph: {
    title:
      "Privacy Policy for Amazon Sellers (FBA + Brand Registry, 2026)",
    description:
      "Amazon requires a privacy policy for Brand Registry, external sites, and Amazon Ads. Covers FBA buyer data and multi channel rules. Free, updated April 2026.",
    url: "https://ultrafastutilities.com/privacy-policy-for-amazon-seller",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Amazon Sellers | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Amazon Sellers (FBA + Brand Registry, 2026)",
    description:
      "Amazon requires a privacy policy for Brand Registry, external sites, and Amazon Ads. Covers FBA buyer data and multi channel rules. Free, updated April 2026.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "when-sellers-need", title: "When Sellers Need a Policy" },
  { id: "data-you-access", title: "Data You Access as a Seller" },
  { id: "customer-data-policy", title: "Amazon's Customer Data Policy" },
  { id: "fba-vs-fbm", title: "FBA vs FBM Data Differences" },
  { id: "amazon-ads", title: "Amazon Ads & Sponsored Products" },
  { id: "brand-registry", title: "Brand Registry & Storefront" },
  { id: "external-website", title: "External Website Requirements" },
  { id: "multi-channel", title: "Multi-Channel Selling" },
  { id: "common-mistakes", title: "Common Mistakes" },
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
      name: "Does Amazon's privacy policy cover my seller business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Amazon's privacy policy covers Amazon as a platform and how Amazon collects and uses customer data. It does not cover how you, as a third-party seller, handle buyer data you receive through orders, Buyer-Seller Messaging, or your own external website. If you operate outside Amazon's standard order flow or have your own website linked to your seller account, you need your own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do FBA sellers need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FBA sellers receive less buyer data than FBM sellers since Amazon handles shipping and returns. However, FBA sellers still access buyer names through order reports, may receive buyer messages through Buyer-Seller Messaging, collect advertising data through Amazon Ads, and often have external websites or social media pages that collect visitor data. If you use any of these channels, you need a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Can Amazon suspend my account for privacy violations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amazon's Customer Data Policy strictly prohibits misuse of buyer data. Violations such as contacting buyers outside of Buyer-Seller Messaging, using buyer data for marketing without consent, or sharing buyer data with unauthorized third parties can result in account suspension, listing removal, or permanent ban from the marketplace.",
      },
    },
    {
      "@type": "Question",
      name: "What buyer data do Amazon sellers have access to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amazon sellers receive buyer names, shipping addresses (for FBM orders), order details, return and refund data, Buyer-Seller Messages, and Brand Analytics data (for brand-registered sellers). FBA sellers receive less shipping data since Amazon handles fulfillment, but still access order reports containing buyer names and order information. Advertising data from Sponsored Products and Sponsored Brands campaigns is also accessible.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for my Amazon storefront?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you have a Brand Registry and operate an Amazon Storefront, you are collecting data through A+ Content engagement, storefront traffic analytics, and Brand Analytics. While this data is aggregated by Amazon, if you use it to inform marketing decisions or share it with third-party agencies, you should have a privacy policy. If your storefront links to an external website, that website definitely needs its own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does GDPR apply to Amazon sellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you sell on Amazon's European marketplaces (Amazon.co.uk, Amazon.de, Amazon.fr, Amazon.it, Amazon.es) or if EU-based buyers purchase from your US listings. GDPR applies based on where your customers are located, not where you are based. Since Amazon operates globally, sellers with international sales almost certainly have EU buyers and must comply with GDPR for their data handling.",
      },
    },
    {
      "@type": "Question",
      name: "How is selling on Amazon different from Etsy for privacy purposes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amazon restricts seller access to buyer data more tightly than Etsy. Amazon does not share buyer email addresses with sellers, routes all communication through Buyer-Seller Messaging, and has strict rules against contacting buyers outside the platform. However, Amazon sellers who operate external websites, run Amazon Ads, or use Brand Analytics still handle significant amounts of data that require privacy disclosure.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Amazon Seller Business",
  description:
    "Follow these six steps to create a compliant privacy policy for your Amazon seller business that covers buyer data handling, FBA and FBM requirements, Amazon Ads, and multi-channel selling.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your data access points",
      text: "Document every source of buyer data in your Amazon seller business: Seller Central order reports, Buyer-Seller Messaging, Brand Analytics, Amazon Ads campaign data, A+ Content engagement metrics, and any external tools or websites connected to your seller account.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map your fulfillment model data flow",
      text: "Identify whether you use FBA, FBM, or both. FBM sellers handle shipping addresses and carrier data directly. FBA sellers receive less buyer data but still access order information. Document the specific data points each model provides and any third-party shipping or logistics tools you use for FBM orders.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "List all external platforms and tools",
      text: "Document every external service that receives data from your Amazon business: your own website, email marketing platforms, social media advertising, inventory management software, repricing tools, accounting software, and any agencies that access your Seller Central account or advertising data.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Determine which privacy laws apply",
      text: "If you sell on Amazon's EU marketplaces or have EU buyers, GDPR applies. If you sell to California residents, CCPA may apply. Check your order reports to confirm where your buyers are located. Most Amazon sellers with meaningful sales volumes will need to comply with multiple privacy regulations.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a document tailored to your Amazon seller business. Include details about your fulfillment model, advertising practices, external website data collection, and multi-channel selling if applicable. The generator will produce a compliant document covering all required sections.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Publish and maintain your policy",
      text: "Host your privacy policy on your external website and link to it from your Amazon Storefront if you have Brand Registry. Include a reference in your Buyer-Seller Message templates where appropriate. Review your policy quarterly or whenever you change tools, add sales channels, or modify your advertising strategy.",
    },
  ],
};

export default function PrivacyPolicyForAmazonSellerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Amazon Sellers [FBA Guide 2026]",
            description:
              "Amazon requires a privacy policy for Brand Registry and external websites. Covers FBA data, buyer info, Amazon Ads, and multi-channel selling. Generate yours free.",
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
                name: "Privacy Policy for Amazon Seller",
                item: "https://ultrafastutilities.com/privacy-policy-for-amazon-seller",
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
                Privacy Policy for Amazon Seller
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <FileText className="w-3.5 h-3.5" />
                Marketplace Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Amazon Sellers
                </span>
                : What FBA and Third-Party Sellers Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything Amazon sellers need to know about privacy compliance.
                Covering FBA and FBM data handling, Buyer-Seller Messaging,
                Amazon Ads, Brand Registry, external website requirements, and
                multi-channel selling obligations.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Amazon FBA sellers, FBM sellers, and third-party marketplace
                sellers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Store className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Ecommerce Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-etsy"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Etsy Seller Privacy Policy
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
                    Need an Amazon seller privacy policy?
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
                <p className="text-xs font-medium text-slate-500 mb-2">
                  <time dateTime="2026-04-11">April 11, 2026</time> &mdash;{" "}
                  <span className="text-slate-400">2026 Amazon seller rules</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>
                    Amazon third-party sellers who handle buyer data, operate
                    external websites, run Amazon Ads, or sell across multiple
                    channels need their own privacy policy.
                  </strong>{" "}
                  Amazon&apos;s privacy policy covers the Amazon platform, not
                  your individual seller business. If you access buyer data
                  through Seller Central, use Brand Analytics, advertise with
                  Sponsored Products, or link to an external website from your
                  listings, you must have a privacy policy that discloses your
                  data practices.
                </p>
              </div>

              {/* Section 1: When Amazon Sellers Need a Privacy Policy */}
              <section id="when-sellers-need" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      When Amazon Sellers Need a Privacy Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Understanding when your Amazon seller business requires its
                      own privacy disclosures.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Most Amazon third-party sellers need their own privacy
                    policy. While Amazon has a comprehensive privacy notice that
                    covers the Amazon platform and its own data collection
                    practices, this policy does not extend to how you, as a
                    seller, handle buyer data that you access through Seller
                    Central, Brand Analytics, or your external business
                    operations.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    You need a privacy policy if you operate an external website
                    linked to your Amazon listings, run Amazon Ads or Sponsored
                    Products campaigns, use Brand Registry and access Brand
                    Analytics data, sell on multiple channels (Amazon plus
                    Shopify, your own site, or other marketplaces), use
                    third-party tools that access your Seller Central data, or
                    fulfill orders yourself (FBM) and handle buyer shipping
                    addresses directly.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Even pure FBA sellers who only sell on Amazon may need a
                    privacy policy if they access buyer data through order
                    reports, use advertising tools, or plan to build an
                    off-Amazon presence. The need becomes clearer as your
                    business grows. Understanding{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-an-online-store"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      whether your online store needs a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    is essential for any seller moving beyond basic Amazon-only
                    operations.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    The consequences of operating without proper privacy
                    disclosures can include regulatory fines, account
                    restrictions, and loss of buyer trust. Learn more about{" "}
                    <Link
                      href="/what-happens-without-a-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      what happens without a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
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
                          Amazon has over 2 million active third-party sellers
                          worldwide, and third-party sellers account for
                          approximately 60% of all units sold on the platform.
                          Amazon operates marketplaces in over 20 countries,
                          meaning sellers on Amazon&apos;s global marketplaces
                          are almost certainly processing buyer data from
                          multiple jurisdictions with different privacy laws.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Data You Access as an Amazon Seller */}
              <section id="data-you-access" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Data You Access as an Amazon Seller
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A breakdown of every type of buyer data available through
                      Seller Central and related tools.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    As an Amazon seller, you have access to various types of
                    buyer and business data through Seller Central, advertising
                    dashboards, and Brand Registry. Understanding exactly what
                    data you handle is critical for creating an accurate privacy
                    policy.
                  </p>

                  {/* Data Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Data Type
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            How You Receive It
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Your Responsibility
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Disclosure Required
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Buyer Names
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Order reports, Seller Central dashboard
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Order fulfillment, customer service
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Shipping Addresses
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            FBM order details, shipping labels
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Delivery (FBM), address verification
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Yes (FBM); Limited (FBA)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Order Data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Seller Central reports, API integrations
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Fulfillment, accounting, inventory planning
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Returns and Refunds
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Return reports, A-to-Z claims
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Return processing, quality tracking
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Buyer-Seller Messages
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Amazon Buyer-Seller Messaging system
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Customer support, order inquiries
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Brand Analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Brand Registry dashboard (aggregated)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Market research, product development
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Recommended
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Advertising Data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Amazon Ads console, campaign reports
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Campaign optimization, ROI tracking
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            A+ Content Engagement
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Brand Registry performance metrics
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Content optimization, conversion analysis
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Recommended
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    The key distinction is between data Amazon shares with you
                    through Seller Central (order data, buyer names, messages)
                    and data you collect independently through your own website,
                    marketing channels, or third-party tools. For Seller Central
                    data, Amazon&apos;s Customer Data Policy governs what you can
                    and cannot do. For data you collect independently, you have
                    full data controller responsibilities and must disclose your
                    practices in your own privacy policy.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Unlike platforms such as{" "}
                    <Link
                      href="/privacy-policy-for-etsy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Etsy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , Amazon does not share buyer email addresses directly with
                    sellers. All buyer communication is routed through
                    Amazon&apos;s Buyer-Seller Messaging system, which uses
                    anonymized email addresses. This limits your direct data
                    exposure but does not eliminate the need for a privacy policy.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Do I see buyer payment information?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        No. Amazon handles all payment processing through Amazon
                        Pay. You never see or have access to buyer credit card
                        details, bank account information, or other payment
                        methods. Your privacy policy should clarify that payment
                        processing is handled entirely by Amazon.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Can I export buyer data from Seller Central?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Yes. You can download order reports from Seller Central
                        that contain buyer names, shipping addresses (for FBM
                        orders), and order details. Amazon&apos;s Customer Data
                        Policy restricts how you may use this exported data. You
                        must not use it for unsolicited marketing or share it
                        with unauthorized third parties.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Amazon's Customer Data Policy */}
              <section id="customer-data-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Amazon&apos;s Customer Data Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What Amazon requires and prohibits regarding your use of
                      buyer data.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Amazon&apos;s Customer Data Policy is one of the strictest
                    among major marketplaces. Unlike{" "}
                    <Link
                      href="/privacy-policy-for-etsy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Etsy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="/privacy-policy-for-shopify"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Shopify
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , Amazon tightly controls how sellers can use buyer data and
                    actively enforces these restrictions.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Here is what Amazon&apos;s data policy specifies:
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      {
                        label: "Use data only for order fulfillment",
                        text: "Amazon requires that buyer data received through orders be used only for fulfilling and servicing those orders. You may not use buyer data for marketing, advertising, or any purpose unrelated to the specific Amazon transaction.",
                      },
                      {
                        label: "No contacting buyers outside Amazon",
                        text: "Sellers are prohibited from contacting buyers through any channel other than Amazon's Buyer-Seller Messaging system. You cannot use buyer names or addresses to send direct mail, and you cannot attempt to obtain buyer email addresses for external marketing.",
                      },
                      {
                        label: "No sharing buyer data with third parties",
                        text: "You may not share buyer data with third parties except as necessary to fulfill the order (such as shipping carriers for FBM orders). Sharing buyer data with marketing agencies, data brokers, or advertising platforms is strictly prohibited.",
                      },
                      {
                        label: "Data security requirements",
                        text: "Amazon requires sellers to implement appropriate security measures to protect buyer data. This includes securing Seller Central access, protecting exported order reports, and ensuring any third-party tools with API access to your account meet security standards.",
                      },
                      {
                        label: "Compliance with applicable laws",
                        text: "Amazon's policy requires sellers to comply with all applicable privacy laws in their jurisdiction and in the jurisdictions of their buyers. This includes GDPR for EU buyers, CCPA for California buyers, and other regional privacy regulations.",
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

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Violating Amazon&apos;s Customer Data Policy can result in
                    account suspension or permanent ban. Amazon monitors seller
                    communications and has automated systems to detect policy
                    violations, particularly around unauthorized buyer contact
                    and data misuse. Your privacy policy should reflect these
                    restrictions and show buyers that you operate within
                    Amazon&apos;s data handling framework.
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
                          Amazon strengthened its Customer Data Policy in 2024,
                          adding explicit language about seller responsibilities
                          for data protection and breach notification. The
                          updated policy requires sellers to notify Amazon within
                          72 hours of discovering any unauthorized access to
                          buyer data. Amazon also expanded its enforcement team
                          to investigate data policy violations more actively,
                          resulting in a significant increase in seller
                          suspensions related to data misuse.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: FBA vs FBM Data Differences */}
              <section id="fba-vs-fbm" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      FBA vs FBM Data Differences
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How your fulfillment model affects the buyer data you
                      handle and your privacy obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Your fulfillment method significantly impacts the amount and
                    type of buyer data you handle. Fulfillment by Amazon (FBA)
                    and Fulfillment by Merchant (FBM) create different data
                    flows and, therefore, different privacy obligations.
                  </p>

                  {/* Comparison Table: FBA vs FBM */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            Data Point
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                            FBA (Fulfillment by Amazon)
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                            FBM (Fulfillment by Merchant)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Shipping Addresses
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Amazon handles; you do not receive full addresses
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You receive full addresses for label printing
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Buyer Names
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Visible in order reports
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Visible in order reports and shipping labels
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Return Handling
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Amazon processes returns; limited data exposure
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You handle returns directly; full data access
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Carrier Data Sharing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Amazon shares with carriers on your behalf
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You share buyer data with your chosen carriers
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Privacy Policy Urgency
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Needed if you have external website or run ads
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Strongly recommended for all FBM sellers
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    FBM sellers have a more immediate need for a privacy policy
                    because they directly handle buyer shipping addresses, share
                    data with carriers, and may use third-party shipping
                    platforms like ShipStation, Shippo, or Pirate Ship. Each of
                    these tools receives buyer personal data, creating
                    third-party data sharing that must be disclosed.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    FBA sellers handle less buyer data day-to-day since Amazon
                    manages fulfillment, but the privacy obligation does not
                    disappear. If you access order reports, use advertising
                    tools, or operate any off-Amazon channels, you still need a
                    privacy policy. Many sellers use a hybrid model (FBA for some
                    products, FBM for others), which means they need to cover
                    both data flows in their privacy policy.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Amazon Ads and Sponsored Products */}
              <section id="amazon-ads" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Amazon Ads and Sponsored Products
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Privacy implications of running advertising campaigns on
                      Amazon.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    If you run Sponsored Products, Sponsored Brands, or
                    Sponsored Display campaigns through Amazon Ads, you access
                    advertising performance data that has privacy implications.
                    While Amazon aggregates this data and does not provide
                    individual buyer identifiers in advertising reports, the data
                    still informs your business decisions and may be shared with
                    agencies or tools.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy should disclose that you use Amazon
                    Advertising services, that advertising performance data
                    informs your product listings and marketing strategies, that
                    you may share aggregated advertising data with agencies or
                    consultants, and that Amazon uses cookies and tracking
                    technologies to deliver your advertisements to relevant
                    audiences.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you also run external advertising campaigns (Google Ads,
                    Facebook Ads, TikTok Ads) that drive traffic to your Amazon
                    listings, these platforms collect their own user data through
                    pixels and tracking cookies. Your privacy policy should cover
                    these external advertising practices as well, especially if
                    you have a landing page or website that serves as an
                    intermediary between the ad platform and Amazon.
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
                          Amazon&apos;s advertising revenue exceeded $46 billion
                          in 2023, making it the third-largest digital
                          advertising platform globally. Amazon Ads uses
                          first-party shopping data to target advertisements,
                          which means your Sponsored Products campaigns leverage
                          buyer browsing and purchase behavior. While you do not
                          see individual buyer profiles, the targeting system
                          processes significant amounts of personal data on your
                          behalf.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Brand Registry and Storefront */}
              <section id="brand-registry" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Brand Registry and Storefront
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Additional data access and privacy considerations for
                      brand-registered sellers.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Sellers enrolled in Amazon Brand Registry gain access to
                    additional data and tools that create further privacy
                    considerations. Brand Analytics provides search term reports,
                    demographics data, market basket analysis, and repeat
                    purchase behavior data. While this data is aggregated and
                    does not identify individual buyers, it represents processed
                    personal data under GDPR.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Amazon Storefronts give brand-registered sellers a
                    customizable multi-page shopping experience within Amazon.
                    Storefronts collect engagement metrics including page views,
                    click-through rates, and visitor traffic sources. If your
                    storefront links to an external website, visitors who click
                    through will be tracked by your website&apos;s analytics
                    tools, creating a data handoff that your privacy policy must
                    address.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    A+ Content (formerly Enhanced Brand Content) allows sellers
                    to create rich product descriptions with images, comparison
                    charts, and brand storytelling. Amazon tracks engagement with
                    A+ Content modules, providing you with performance data that
                    reflects buyer behavior and preferences. If you share this
                    performance data with marketing agencies, design teams, or
                    consultants, your privacy policy should disclose this sharing
                    practice.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    This is similar to how{" "}
                    <Link
                      href="/privacy-policy-for-shopify"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Shopify store owners
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    need to disclose analytics and tracking even when the
                    platform handles payment processing separately.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: External Website Requirements */}
              <section id="external-website" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      External Website Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Privacy obligations when you operate a website alongside
                      your Amazon seller business.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Many Amazon sellers operate their own websites for brand
                    building, direct sales, or driving additional traffic to
                    their Amazon listings. If you have an external website, the
                    privacy requirements expand significantly. Your website
                    collects data through analytics tools (Google Analytics,
                    Facebook Pixel), contact forms, email signup forms, cookies,
                    and potentially direct checkout if you sell off-Amazon as
                    well.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy must cover all data collection on your
                    external website in addition to your Amazon-specific data
                    handling. This includes cookies and tracking technologies
                    used on your site, analytics data collected about visitors,
                    email addresses collected through newsletter signups or
                    contact forms, any ecommerce data if you sell directly
                    through your website, and Amazon Associates or affiliate
                    tracking if applicable. For comprehensive guidance, see our{" "}
                    <Link
                      href="/privacy-policy-for-ecommerce"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      ecommerce privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If your website uses Amazon Attribution links to track
                    off-Amazon marketing performance, this creates additional
                    data flows between your website and Amazon that should be
                    disclosed. Similarly, if you embed Amazon product widgets or
                    use Amazon&apos;s Product Advertising API on your website,
                    Amazon may set cookies on your visitors&apos; browsers.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    A{" "}
                    <Link
                      href="/privacy-policy-for-small-business"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      small business privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    that covers both your Amazon seller operations and your
                    external website is the most practical approach. A single
                    comprehensive document with sections for each platform
                    ensures nothing is missed.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: Multi-Channel Selling */}
              <section id="multi-channel" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Multi-Channel Selling
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Privacy considerations when selling on Amazon alongside
                      other platforms.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Many Amazon sellers also sell on{" "}
                    <Link
                      href="/privacy-policy-for-etsy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Etsy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    ,{" "}
                    <Link
                      href="/privacy-policy-for-shopify"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Shopify
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , Walmart Marketplace, eBay, or their own direct-to-consumer
                    website. Multi-channel selling creates unique privacy
                    challenges because buyer data flows through multiple
                    platforms, each with their own data policies and
                    restrictions.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy should address each sales channel and
                    how data is handled on each platform. Key considerations
                    include inventory management tools (like ChannelAdvisor,
                    Sellbrite, or Linnworks) that sync order data across
                    platforms, customer data that may overlap if the same buyer
                    purchases from you on multiple platforms, fulfillment
                    services that receive order data from all channels, and
                    accounting and tax software that aggregates financial data
                    from all sales channels.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    A critical rule to remember: Amazon&apos;s Customer Data
                    Policy prohibits using buyer data from Amazon orders on other
                    platforms. You cannot take a buyer&apos;s name from an Amazon
                    order and add them to your Shopify marketing list. Each
                    platform&apos;s data must be kept separate according to that
                    platform&apos;s rules. Your privacy policy should reflect
                    this separation and explain how you maintain data boundaries
                    across channels.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Can I combine customer data from Amazon and my Shopify
                        store?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        No. Amazon&apos;s Customer Data Policy strictly prohibits
                        using Amazon buyer data outside of the Amazon
                        transaction. You cannot merge Amazon order data with
                        your Shopify customer database, send Amazon buyers to
                        your Shopify email list, or use Amazon buyer data for
                        retargeting on other platforms. Your privacy policy
                        should clearly state that data from each platform is
                        handled according to that platform&apos;s data policies.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Do I need separate privacy policies for each sales
                        channel?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Not necessarily. You can maintain a single comprehensive
                        privacy policy that covers all your sales channels with
                        separate sections for each platform. This is often more
                        practical than managing multiple documents. The policy
                        should clearly explain how data from each channel is
                        collected, used, and stored independently.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 9: Common Amazon Seller Privacy Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Amazon Seller Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Errors that can lead to account suspension, fines, or
                      buyer trust issues.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    These five privacy mistakes are common among Amazon sellers
                    and can lead to account suspension, GDPR violations, or
                    damaged buyer relationships.
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Amazon handles all data so I do not
                          need a privacy policy&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Amazon&apos;s privacy notice covers Amazon as a
                          platform, not your individual seller business. You
                          access buyer names, order data, and shipping addresses
                          through Seller Central. If you export this data, use
                          third-party tools, run advertising campaigns, or
                          operate an external website, you are handling data
                          independently and need your own privacy policy.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Using Amazon buyer data for off-platform
                          marketing&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Some sellers attempt to use buyer names or order data
                          from Amazon to build marketing lists, send product
                          inserts directing buyers to sign up elsewhere, or
                          target buyers on social media. Amazon strictly
                          prohibits this and actively monitors for violations.
                          Using Amazon buyer data for unauthorized marketing is
                          one of the fastest paths to account suspension.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;FBA sellers do not handle any buyer
                          data&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          While FBA sellers handle less data than FBM sellers,
                          they still access buyer names in order reports, receive
                          buyer messages, access advertising performance data,
                          and may use Brand Analytics. Additionally, most FBA
                          sellers have external websites, social media accounts,
                          or other marketing channels that collect visitor data
                          independently.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Giving third-party tools unrestricted
                          Seller Central access&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Many sellers grant MWS or SP-API access to repricing
                          tools, inventory managers, or analytics platforms
                          without considering the data implications. Each tool
                          with API access to your Seller Central account can
                          access buyer data from your orders. Your privacy policy
                          must disclose these third-party integrations and ensure
                          each tool meets data protection standards.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Not updating the privacy policy when
                          adding new sales channels&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Sellers who expand from Amazon to Shopify, Etsy,
                          Walmart, or their own website often forget to update
                          their privacy policy to reflect the new data
                          collection. Each new channel introduces new data flows,
                          new third-party integrations, and potentially new
                          jurisdictional requirements. Your privacy policy must
                          be updated each time you add or change a sales channel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 10: How to Create a Privacy Policy for Your Amazon Seller Business */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your Amazon Seller
                      Business
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A step-by-step process tailored to Amazon sellers and
                      their unique data handling needs.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Creating a privacy policy for your Amazon seller business is
                    straightforward. Follow these six steps to create a policy
                    that covers your data handling across Seller Central,
                    advertising, and any external channels.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1",
                        title: "Audit your data access points",
                        content:
                          "Review your Seller Central account and document every source of buyer data: order reports, Buyer-Seller Messages, Brand Analytics (if brand-registered), Amazon Ads campaign data, and A+ Content engagement metrics. Also document any data you access through API integrations with third-party tools.",
                      },
                      {
                        step: "Step 2",
                        title: "Map your fulfillment model data flow",
                        content:
                          "Identify whether you use FBA, FBM, or a hybrid model. For FBM orders, document how you handle shipping addresses, which carriers you use, and whether you use third-party shipping platforms. For FBA, note that Amazon handles fulfillment but you still access order data through reports.",
                      },
                      {
                        step: "Step 3",
                        title: "List all external platforms and tools",
                        content:
                          "Document every external service connected to your Amazon business: your own website, email marketing platforms, social media accounts, inventory management tools, repricing software, accounting systems, and any agencies that access your Seller Central account or advertising data.",
                      },
                      {
                        step: "Step 4",
                        title: "Determine applicable privacy laws",
                        content:
                          "Check your order reports to see where your buyers are located. If you sell on Amazon's EU marketplaces or have EU buyers on your US listings, GDPR applies. If you have California buyers, CCPA may apply. Most established Amazon sellers need to comply with multiple regulations.",
                      },
                      {
                        step: "Step 5",
                        title: "Generate your privacy policy",
                        content:
                          "Use a privacy policy generator to create a document tailored to your Amazon seller business. Include details about your fulfillment model, advertising practices, external website data collection, and multi-channel selling if applicable. The generator will produce a compliant document covering all required sections.",
                      },
                      {
                        step: "Step 6",
                        title: "Publish and maintain your policy",
                        content:
                          "Host your privacy policy on your external website and link to it from your Amazon Storefront if you have Brand Registry. Review it quarterly or whenever you change tools, add sales channels, or modify your advertising strategy. Keep the last updated date current.",
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
                    The process should take about 30 minutes total. The{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      policy generation
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    itself takes under 60 seconds once you have your data
                    practices documented. For GDPR-specific requirements,
                    reference our{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR privacy policy template
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    to ensure your policy meets EU compliance standards.
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
                      Generate Your Amazon Seller Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your Amazon seller business in under 60 seconds. Covers
                      FBA, FBM, Amazon Ads, and multi-channel selling.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Amazon Seller Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Amazon seller ready</span>
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
                      href: "/privacy-policy-for-etsy",
                      icon: ShoppingBag,
                      title: "Privacy Policy for Etsy",
                      desc: "Etsy seller compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      icon: Store,
                      title: "Privacy Policy for Ecommerce",
                      desc: "Ecommerce store compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-shopify",
                      icon: Store,
                      title: "Privacy Policy for Shopify",
                      desc: "Shopify store compliance",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-an-online-store",
                      icon: ShoppingBag,
                      title: "Online Store Privacy Policy",
                      desc: "Do online stores need a policy?",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: Users,
                      title: "Privacy Policy for Small Business",
                      desc: "Small business compliance guide",
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
                      icon: FileText,
                      title: "Privacy Policy Generator",
                      desc: "Generate your policy in seconds",
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
