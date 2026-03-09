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
  Package,
  Mail,
  Users,
  Globe,
  CreditCard,
  Store,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Etsy Sellers: GDPR & Buyer Data (2026) | ultrafastutilities",
  description:
    "Etsy sellers who collect buyer data need their own privacy policy. Learn what Etsy's Seller Handbook requires, how to handle EU buyer data under GDPR, and what your shop policy must include.",
  keywords:
    "privacy policy for etsy, etsy privacy policy, etsy seller privacy policy, etsy shop privacy policy, etsy gdpr seller, etsy privacy policy template",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-etsy",
  },
  openGraph: {
    title:
      "Privacy Policy for Etsy Sellers: GDPR & Buyer Data (2026) | ultrafastutilities",
    description:
      "Etsy sellers who collect buyer data need their own privacy policy. Learn what Etsy's Seller Handbook requires, how to handle EU buyer data under GDPR, and what your shop policy must include.",
    url: "https://ultrafastutilities.com/privacy-policy-for-etsy",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Etsy Sellers | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Etsy Sellers: GDPR & Buyer Data (2026) | ultrafastutilities",
    description:
      "Etsy sellers who collect buyer data need their own privacy policy. Learn what Etsy's Seller Handbook requires, how to handle EU buyer data under GDPR, and what your shop policy must include.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "do-etsy-sellers-need", title: "Do Etsy Sellers Need One?" },
  { id: "what-data-sellers-handle", title: "What Data Sellers Handle" },
  { id: "seller-handbook", title: "Etsy Seller Handbook Requirements" },
  { id: "gdpr-for-etsy", title: "GDPR for Etsy Sellers" },
  { id: "where-to-display", title: "Where to Display Your Policy" },
  { id: "common-mistakes", title: "Common Etsy Privacy Mistakes" },
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
      name: "Does Etsy's privacy policy cover my shop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Etsy's privacy policy covers the Etsy platform and Etsy's own data collection. It does not cover your individual shop's data practices. If you collect buyer data outside of Etsy's standard order process, market to buyers via email, use external tools to manage your shop, or have your own website linked from your Etsy shop, you need your own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if I only sell on Etsy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you only process orders through Etsy's standard checkout and never collect buyer data outside of Etsy's built-in tools, Etsy's platform privacy policy may cover your basic order processing. However, if you collect email addresses for marketing, use third-party tools like Mailchimp or Google Analytics, communicate with buyers outside of Etsy messages, or sell to EU buyers (triggering GDPR), you need your own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does GDPR apply to Etsy sellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if any of your buyers are located in the EU or UK. GDPR applies based on where your customers are, not where you are located. Since Etsy is a global marketplace, most sellers will have at least some EU buyers. When GDPR applies, you need a privacy policy that includes your lawful basis for processing, data retention periods, third-party data sharing, and information about buyers' rights to access, correct, and delete their data.",
      },
    },
    {
      "@type": "Question",
      name: "What buyer data do Etsy sellers have access to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Etsy sellers receive buyer names, shipping addresses, email addresses (for order communication), order details, custom order specifications, and review content. If you use Etsy Ads, you also receive advertising performance data. If you collect email addresses for a mailing list or use external tools like Google Analytics on a linked website, you have additional data that must be disclosed.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I put my privacy policy on Etsy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add your privacy policy to your Etsy shop's Policies section under Shop Settings. You can also include a summary or link in your shop's About page, in listing descriptions, and in order confirmation messages. If you have a separate website linked from your Etsy shop, host your full privacy policy there and reference it from your Etsy shop policies.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the same privacy policy for Etsy and my own website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if the policy is comprehensive enough to cover both platforms. It should address Etsy-specific data handling (order data, Etsy messages, custom order details) as well as any website-specific data collection (cookies, analytics, contact forms). Many sellers maintain a single document with separate sections for each platform to ensure complete coverage.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if an Etsy seller doesn't have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you collect buyer data outside of Etsy's standard order process without a privacy policy, you face potential GDPR fines of up to 20 million euros for EU buyer data, CCPA penalties for California buyer data, and possible violations of Etsy's own seller policies. Additionally, buyers who discover you lack a privacy policy may lose trust in your shop and leave negative reviews.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Etsy Shop",
  description:
    "Follow these six steps to create a compliant privacy policy for your Etsy seller shop that covers buyer data handling, GDPR requirements, and third-party tool integrations.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Identify all buyer data you handle",
      text: "Document every type of buyer data you access through Etsy: names, shipping addresses, email addresses, order details, custom order specifications, and review data. Also note any data you collect outside of Etsy, such as email newsletter signups, website analytics, or social media interactions.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "List all third-party tools you use",
      text: "Identify every external tool or service connected to your Etsy business: email marketing platforms (Mailchimp, Klaviyo), analytics tools (Google Analytics), shipping services (ShipStation, Pirate Ship), accounting software (QuickBooks, Wave), and any social media advertising platforms where you use buyer data.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Determine which privacy laws apply",
      text: "If you sell to EU buyers, GDPR applies. If you sell to California residents and meet CCPA thresholds, CCPA applies. Since Etsy is a global marketplace, most sellers with meaningful sales volumes will need to comply with both. Check your Etsy order history to confirm where your buyers are located.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a document tailored to your Etsy shop. Answer questions about your specific data practices, the tools you use, and the types of buyer data you handle. The generator will produce a compliant document covering all required sections.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add the policy to your Etsy shop",
      text: "Go to your Etsy Shop Manager, navigate to Settings then Options then Policies, and add your privacy policy text. Also consider adding a summary to your About page and including a note in your listing descriptions that links to your full policy.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Review and update regularly",
      text: "Review your privacy policy whenever you change tools, start a new marketing channel, modify your data practices, or expand to new markets. At minimum, conduct an annual review to ensure your policy accurately reflects your current practices. CCPA requires at least annual updates.",
    },
  ],
};

export default function PrivacyPolicyForEtsyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Etsy Sellers: GDPR & Buyer Data (2026) | ultrafastutilities",
            description:
              "Etsy sellers who collect buyer data need their own privacy policy. Learn what Etsy's Seller Handbook requires, how to handle EU buyer data under GDPR, and what your shop policy must include.",
            author: { "@type": "Person", name: "Anupam Kumar" },
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
                name: "Privacy Policy for Etsy",
                item: "https://ultrafastutilities.com/privacy-policy-for-etsy",
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
                Privacy Policy for Etsy
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
                  Etsy Sellers
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything Etsy sellers need to know about privacy compliance.
                Covering buyer data handling, GDPR requirements for EU buyers,
                Etsy Seller Handbook policies, and how to create your own shop
                privacy policy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Etsy sellers, shop owners, and handmade business owners.
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
                href="/privacy-policy-for-small-business"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Small Business Privacy Policy
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
                    Need an Etsy privacy policy?
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
                    Etsy sellers who collect buyer data outside of Etsy&apos;s
                    standard order process need their own privacy policy.
                  </strong>{" "}
                  Etsy&apos;s privacy policy covers the platform, not your
                  individual shop. If you collect emails for marketing, use
                  third-party tools, or sell to EU buyers, you must have your
                  own privacy policy that discloses your data practices.
                </p>
              </div>

              {/* Section 1: Do Etsy Sellers Need Their Own Privacy Policy? */}
              <section id="do-etsy-sellers-need" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Do Etsy Sellers Need Their Own Privacy Policy?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Understanding the difference between Etsy&apos;s platform
                      privacy policy and your shop&apos;s obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Yes, most Etsy sellers need their own privacy policy. While
                    Etsy has a comprehensive privacy policy that covers the
                    platform itself, this policy only addresses how Etsy (the
                    company) handles data. It does not cover how you, as an
                    individual seller, handle buyer data that comes through your
                    shop.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Every time a buyer places an order in your shop, you receive
                    personal information: their name, shipping address, email
                    address, and order details. If you do anything with this data
                    beyond fulfilling the immediate order, you need your own
                    privacy policy. This includes keeping buyer emails for future
                    marketing, using shipping services that store buyer
                    addresses, tracking buyer preferences for product
                    development, or using any external tools to manage your Etsy
                    business.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    For sellers with their own website in addition to their Etsy
                    shop, the need is even clearer. Your website collects data
                    through analytics, contact forms, and cookies, all of which
                    require a{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      website privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . If you link your Etsy shop to your website, both platforms
                    should be covered.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    The distinction matters legally. Under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , you are considered a data controller for any buyer data
                    you process independently of Etsy. Etsy is a separate data
                    controller for the data it processes as a platform. Neither
                    party&apos;s privacy policy covers the other&apos;s data
                    handling. The consequences of operating without proper
                    privacy disclosures can be significant. Learn more about{" "}
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
                          Etsy has over 9 million active sellers and serves
                          buyers in nearly every country worldwide. In 2023, 46%
                          of Etsy&apos;s gross merchandise sales came from
                          outside the United States, meaning nearly half of all
                          transactions involve international buyers. For sellers
                          with EU buyers, this triggers GDPR compliance
                          obligations regardless of where the seller is located.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What Data Etsy Sellers Handle */}
              <section id="what-data-sellers-handle" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Data Etsy Sellers Handle
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A breakdown of every type of buyer data that passes
                      through your Etsy shop.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    As an Etsy seller, you have access to more buyer data than
                    you might realize. Understanding exactly what data you handle
                    is the first step toward creating an accurate privacy policy.
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
                            Order details, shipping labels
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
                            Order details, label printing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Delivery, address verification
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Email Addresses
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Etsy messages, order communication
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Order updates, support (marketing only with consent)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Payment Info
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Etsy Payments (you do not see card details)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Handled by Etsy Payments, not by you
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Clarify Etsy handles this
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Custom Order Details
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Buyer messages, custom order requests
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Fulfillment, may contain personal preferences
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Review Data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Public reviews on your listings
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Managed through Etsy platform
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Platform-managed
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Marketing List Data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Collected via external signup forms
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Full responsibility (consent required)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Yes (with consent details)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    The key distinction is between data that flows through
                    Etsy&apos;s standard order process and data you collect or
                    use independently. For standard order data (names, addresses
                    for shipping), your obligation is primarily to disclose how
                    you use it and how long you keep it. For data you collect
                    independently (marketing emails, website analytics), you
                    have full data controller responsibilities.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-collecting-emails"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      collect email addresses
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    from buyers for marketing purposes, this creates additional
                    consent requirements beyond what Etsy&apos;s order process
                    covers. You need explicit opt-in consent under GDPR and must
                    provide an unsubscribe mechanism.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Do I see buyer credit card information?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        No. Etsy Payments handles all payment processing. You
                        never see or have access to buyer payment card details.
                        Your privacy policy should clarify that payment
                        processing is handled by Etsy Payments and that you do
                        not store or have access to payment card information.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: What about buyer phone numbers?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Etsy may provide buyer phone numbers for shipping label
                        purposes in some cases. If you receive phone numbers
                        through the order process, disclose this in your privacy
                        policy and explain that they are used solely for
                        delivery coordination.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Etsy's Seller Handbook Privacy Requirements */}
              <section id="seller-handbook" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Etsy&apos;s Seller Handbook Privacy Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What Etsy recommends and requires from sellers regarding
                      privacy compliance.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Etsy&apos;s Seller Handbook and policies address privacy in
                    several ways. While Etsy does not strictly require every
                    seller to have their own privacy policy, the platform
                    strongly recommends it and, in certain situations, it
                    becomes mandatory through Etsy&apos;s terms.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Here is what Etsy&apos;s policies specify:
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      {
                        label: "Seller responsibility for data use",
                        text: "Etsy's Seller Policy states that sellers are responsible for their own use of buyer data received through orders. This means you cannot use buyer data for purposes unrelated to the transaction without separate consent.",
                      },
                      {
                        label: "Marketing communication rules",
                        text: "Etsy prohibits sellers from adding buyers to marketing lists without explicit consent. If you want to send promotional emails to past buyers, you need a separate opt-in process and a privacy policy explaining your marketing practices.",
                      },
                      {
                        label: "Third-party tool disclosure",
                        text: "If you use third-party services to manage your shop (shipping tools, accounting software, email marketing), Etsy expects you to ensure these tools handle buyer data appropriately and in compliance with applicable laws.",
                      },
                      {
                        label: "EU seller requirements",
                        text: "For sellers based in the EU, or those selling to EU buyers, Etsy's policies reference GDPR obligations. Sellers must comply with GDPR independently and cannot rely on Etsy's own GDPR compliance as a substitute.",
                      },
                      {
                        label: "Shop policies section",
                        text: "Etsy provides a dedicated Shop Policies section where sellers can list their privacy practices alongside shipping, returns, and exchange policies. Etsy recommends using this section to communicate your data handling practices to buyers.",
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
                    The bottom line is that while Etsy provides the
                    infrastructure for transactions, the privacy compliance
                    responsibility for your specific data handling sits with you
                    as the seller. This is similar to how{" "}
                    <Link
                      href="/privacy-policy-for-shopify"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Shopify store owners
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    need their own privacy policies despite Shopify handling
                    payment processing.
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
                          Etsy updated its Seller Policy in 2023 to place
                          stronger emphasis on data protection compliance. The
                          updated policy explicitly states that sellers who use
                          buyer data for marketing without consent may face
                          account restrictions. Etsy also added language
                          requiring sellers to cooperate with buyer data access
                          and deletion requests, aligning with GDPR and CCPA
                          requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: GDPR for Etsy Sellers */}
              <section id="gdpr-for-etsy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GDPR for Etsy Sellers
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How GDPR applies when you have EU buyers, regardless of
                      where you are located.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    If any of your Etsy buyers are located in the EU or UK,
                    GDPR applies to you. This is true even if you are based in
                    the United States, Canada, Australia, or any other
                    non-EU country. GDPR&apos;s reach is based on where your
                    customers are, not where you are. Since Etsy is a global
                    marketplace with significant EU buyer traffic, most
                    established sellers will have EU buyers in their order
                    history.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Under GDPR, you and Etsy have separate roles:
                  </p>

                  {/* Comparison Table: Controller vs Processor */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            Aspect
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                            Etsy (Platform)
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                            You (Seller)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            GDPR Role
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Data controller for platform data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Data controller for data you collect/use
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Privacy Policy
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Etsy&apos;s own privacy policy
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Your own privacy policy needed
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Data Subject Requests
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Etsy handles requests about platform data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You handle requests about your data use
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Lawful Basis
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Etsy establishes its own lawful bases
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You must establish lawful bases for your processing
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Payment Data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Etsy Payments handles and is responsible
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You do not process payment card data
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    For order fulfillment data (names, shipping addresses), your
                    lawful basis under GDPR is typically &quot;contractual
                    necessity&quot; since you need this data to fulfill the
                    buyer&apos;s order. For marketing communications, you need
                    &quot;consent&quot; as your lawful basis, which means
                    explicit opt-in from the buyer before you can send
                    promotional emails.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy must also disclose data retention
                    periods. How long do you keep buyer shipping addresses after
                    an order is delivered? How long do you retain order records
                    for tax purposes? GDPR requires you to define these periods
                    and not keep data longer than necessary.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    California buyers also have rights under{" "}
                    <Link
                      href="/ccpa-privacy-policy-example"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      CCPA
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , including the right to know what data you collect, the
                    right to delete their data, and the right to opt out of
                    data sales. If you share buyer data with advertising
                    platforms or analytics tools, this may constitute a
                    &quot;sale&quot; under CCPA that requires disclosure and an
                    opt-out mechanism.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: What if a buyer asks me to delete their data?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Under GDPR, you must respond to data deletion requests
                        within 30 days. Delete the buyer&apos;s personal data
                        from your records, but note that you may retain order
                        records for tax compliance purposes. Explain this
                        exception in your response. Etsy handles deletion
                        requests for platform data separately.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Am I a data controller or data processor?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        You are a data controller for buyer data you use
                        independently of Etsy (marketing emails, external tool
                        data, website analytics). For data processed purely
                        through Etsy&apos;s order system, you and Etsy are
                        independent data controllers. You are not a processor
                        for Etsy, and Etsy is not a processor for you.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Where to Display Your Privacy Policy on Etsy */}
              <section id="where-to-display" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Where to Display Your Privacy Policy on Etsy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Making your privacy policy accessible to buyers across
                      all touchpoints.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Unlike platforms like{" "}
                    <Link
                      href="/privacy-policy-for-shopify"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Shopify
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    or WordPress where you have full control over page creation,
                    Etsy limits where you can place content. Here are the best
                    locations for your privacy policy:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Shop Policies section",
                        desc: "Go to Shop Manager, then Settings, then Options, then Policies. Add your privacy policy text to the shop policies area. This is the most visible location for buyers who check your shop policies before purchasing.",
                      },
                      {
                        step: "2",
                        title: "About page",
                        desc: "Include a summary of your privacy practices on your shop's About page. This is a good place for a brief overview with a reference to your full privacy policy. Buyers often check the About page to learn about the seller.",
                      },
                      {
                        step: "3",
                        title: "Listing descriptions",
                        desc: "For shops that collect data beyond standard order information (custom orders requiring personal details, personalization requiring photos), include a privacy notice in the relevant listing descriptions explaining what data is collected and why.",
                      },
                      {
                        step: "4",
                        title: "Order confirmation messages",
                        desc: "If you send custom order confirmation or follow-up messages through Etsy, include a link or reference to your privacy policy. This is especially important if your follow-up message asks for additional information or marketing consent.",
                      },
                      {
                        step: "5",
                        title: "Separate website",
                        desc: "If you have your own website (many Etsy sellers do), host your full privacy policy there and reference it from your Etsy shop. This gives you the most control over formatting and content, and allows you to use a single comprehensive policy that covers both platforms.",
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
                    The most practical approach for most Etsy sellers is to host
                    a full privacy policy on a separate website (even a simple
                    one-page site) and reference it from your Etsy shop policies.
                    This gives you complete control over the content and
                    formatting, and makes it easy to include all required GDPR
                    and CCPA disclosures without being constrained by Etsy&apos;s
                    text formatting limitations.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Common Etsy Seller Privacy Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Etsy Seller Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Misconceptions that put Etsy sellers at legal risk.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    These five privacy mistakes are common among Etsy sellers
                    and can lead to GDPR violations, account restrictions, or
                    buyer complaints.
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Etsy&apos;s privacy policy covers my
                          shop&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Etsy&apos;s privacy policy covers Etsy as a platform
                          and how Etsy handles data for its own purposes. It
                          does not cover how you, as a seller, use buyer data.
                          If you keep buyer addresses for your records, add
                          buyers to a mailing list, or use third-party tools
                          that access buyer data, none of that is covered by
                          Etsy&apos;s privacy policy. You need your own.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I only ship within the US so GDPR
                          doesn&apos;t apply&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Even if you only ship to US addresses, your Etsy
                          listings are visible to EU buyers, and EU-based buyers
                          may purchase items for US delivery (gifts, forwarding
                          services). If any buyer providing you with personal
                          data is an EU resident, GDPR applies to your handling
                          of their data. Since you cannot always determine where
                          a buyer is located, the safest approach is to comply
                          with GDPR for all buyers.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I don&apos;t collect data, Etsy
                          does&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          While Etsy processes the transaction, you receive and
                          handle buyer personal data every time an order comes
                          in. You see buyer names, addresses, email addresses,
                          and order details. You print shipping labels with this
                          data. You may store this data in spreadsheets,
                          accounting software, or shipping platforms. All of this
                          constitutes &quot;processing&quot; under GDPR and
                          &quot;collecting&quot; under CCPA.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Handmade sellers don&apos;t need
                          privacy policies&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Whether you sell handmade jewelry, vintage clothing,
                          or digital downloads, privacy laws apply to how you
                          handle buyer data, not what you sell. The type of
                          product is irrelevant to your data protection
                          obligations. In fact, handmade and custom sellers often
                          collect more personal data through custom order
                          conversations (photos, measurements, personal
                          preferences) than standard retailers.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I&apos;ll worry about it when I&apos;m
                          bigger&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Privacy laws do not have a minimum size threshold for
                          most requirements. GDPR applies to any entity
                          processing personal data of EU residents, regardless
                          of size or revenue. While CCPA does have revenue
                          thresholds, other California laws (like CalOPPA) apply
                          to all commercial websites. Building privacy compliance
                          into your shop from the start is far easier than
                          retrofitting it later when you have thousands of buyer
                          records to account for.
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
                          EU data protection authorities have increasingly
                          turned their attention to small online sellers and
                          marketplace vendors. In 2023, several EU member states
                          issued guidance specifically addressing GDPR
                          obligations for marketplace sellers, clarifying that
                          selling through a platform like Etsy does not exempt
                          sellers from their own data controller
                          responsibilities. The UK&apos;s ICO has published
                          similar guidance for small businesses selling through
                          online marketplaces.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: How to Create a Privacy Policy for Your Etsy Shop */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your Etsy Shop
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A step-by-step process tailored to Etsy sellers and
                      their unique data handling needs.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Creating a privacy policy for your Etsy shop is
                    straightforward. Follow these six steps to create a policy
                    that covers your buyer data handling and meets GDPR and CCPA
                    requirements.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1",
                        title: "Identify all buyer data you handle",
                        content:
                          "Go through your recent orders and document every type of buyer data you access: names, shipping addresses, email addresses, order details, custom order specifications, and any data from conversations. Also note any data you collect outside Etsy, such as email newsletter signups or website form submissions.",
                      },
                      {
                        step: "Step 2",
                        title: "List all third-party tools",
                        content:
                          "Document every external service that receives buyer data from your Etsy business: shipping services (ShipStation, Pirate Ship, Shippo), email marketing (Mailchimp, Klaviyo), accounting software (QuickBooks, Wave), analytics tools (Google Analytics on your website), and social media advertising platforms.",
                      },
                      {
                        step: "Step 3",
                        title: "Determine applicable privacy laws",
                        content:
                          "Check your Etsy order history to see where your buyers are located. If you have EU buyers, GDPR applies. If you have California buyers and meet CCPA thresholds, CCPA applies. For most Etsy sellers with any meaningful sales volume, both regulations will be relevant.",
                      },
                      {
                        step: "Step 4",
                        title: "Generate your privacy policy",
                        content:
                          "Use a privacy policy generator to create a tailored document for your Etsy shop. Provide details about your data practices, the tools you use, and the types of buyer data you handle. A good generator will produce a policy covering all required sections including data collection, sharing, retention, and buyer rights.",
                      },
                      {
                        step: "Step 5",
                        title: "Add the policy to your Etsy shop",
                        content:
                          "Add your privacy policy to your shop's Policies section in Shop Manager. If you have a separate website, host the full policy there as well. Include references to your privacy policy in your About page and any listing descriptions where you collect additional personal data.",
                      },
                      {
                        step: "Step 6",
                        title: "Set up regular reviews",
                        content:
                          "Schedule an annual review of your privacy policy. Update it immediately whenever you start using a new third-party tool, begin collecting a new type of buyer data, start a marketing email list, or expand your business to a new platform. Keep the 'last updated' date current.",
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
                    The process should take about 20 to 30 minutes total. The{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      policy generation
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    itself takes under 60 seconds once you have your data
                    practices documented. Do not{" "}
                    <Link
                      href="/can-i-copy-someone-elses-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      copy another seller&apos;s privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    since their data practices will differ from yours. Remember to{" "}
                    <Link
                      href="/how-often-should-you-update-your-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      update your policy regularly
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    as your business evolves.
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
                      Generate Your Etsy Shop Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your Etsy seller shop in under 60 seconds. Covers buyer
                      data handling, GDPR, and CCPA.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Etsy Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Etsy seller ready</span>
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
                      href: "/privacy-policy-for-ecommerce",
                      icon: Store,
                      title: "Privacy Policy for Ecommerce",
                      desc: "Ecommerce store compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: ShoppingBag,
                      title: "Privacy Policy for Small Business",
                      desc: "Small business compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-shopify",
                      icon: Store,
                      title: "Privacy Policy for Shopify",
                      desc: "Shopify store compliance",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance template and guide",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: FileText,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance example",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks and penalties explained",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                      icon: Mail,
                      title: "Collecting Emails Privacy Policy",
                      desc: "Email collection requirements",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      icon: Clock,
                      title: "How Often to Update Your Policy",
                      desc: "Update frequency and triggers",
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
