import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Ban,
  Info,
  ShoppingCart,
  CreditCard,
  Users,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for BigCommerce: Store Owner Guide (2026) | ultrafastutilities",
  description:
    "Create a privacy policy for your BigCommerce store. Covers customer data, payment processing, BigCommerce analytics, apps, shipping integrations, and multi-channel selling requirements.",
  keywords:
    "privacy policy for bigcommerce, bigcommerce privacy policy, bigcommerce privacy policy template, bigcommerce store privacy policy, bigcommerce legal requirements",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-bigcommerce",
  },
  openGraph: {
    title:
      "Privacy Policy for BigCommerce: Store Owner Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for your BigCommerce store. Covers customer data, payment processing, BigCommerce analytics, apps, shipping integrations, and multi-channel selling requirements.",
    url: "https://ultrafastutilities.com/privacy-policy-for-bigcommerce",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for BigCommerce | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for BigCommerce: Store Owner Guide (2026)",
    description:
      "Create a privacy policy for your BigCommerce store. Covers customer data, payment processing, BigCommerce analytics, apps, shipping integrations, and multi-channel selling requirements.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does my BigCommerce store need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BigCommerce stores collect customer names, email addresses, billing and shipping addresses, payment details through integrated gateways, order histories, and account credentials. Privacy laws including GDPR, CCPA, and PIPEDA require you to disclose this data collection in a privacy policy. BigCommerce does not provide a compliant privacy policy for you. Store owners are responsible for creating their own.",
      },
    },
    {
      "@type": "Question",
      name: "What customer data does BigCommerce collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BigCommerce collects order data (customer name, email, billing address, shipping address, phone number, order items, totals), payment data (processed through your configured gateway such as Braintree, Stripe, or PayPal), customer account data (username, password hash, saved addresses, order history), storefront analytics (page views, conversion events, product interactions), and marketing data if you use BigCommerce email tools or connected apps.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to disclose BigCommerce apps in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any BigCommerce app that collects, processes, or transmits customer data must be disclosed in your privacy policy. This includes email marketing apps like Klaviyo, shipping apps like ShipStation, review apps like Yotpo, and marketing channel apps like Google Shopping and Facebook. Each app is a data processor under GDPR that receives customer data from your store.",
      },
    },
    {
      "@type": "Question",
      name: "Does BigCommerce store credit card numbers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. BigCommerce does not store full credit card numbers in your store database. Payment card data is processed by your payment gateway (Braintree, Stripe, PayPal, or another provider) and handled according to PCI DSS standards. BigCommerce stores transaction IDs, payment method type, and order reference data. Your privacy policy should clarify this distinction and name your specific payment gateway.",
      },
    },
    {
      "@type": "Question",
      name: "How does multi-channel selling affect my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you sell on multiple channels through BigCommerce (Amazon, eBay, Facebook, Instagram), customer data flows between BigCommerce and each channel platform. Your privacy policy must disclose each sales channel, explain what data is shared with each platform, and note that each channel has its own privacy policy governing data it collects independently. Multi-channel selling creates additional data processor relationships that require disclosure.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a privacy policy to my BigCommerce store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In BigCommerce, go to Storefront > Web Pages and create a new page for your privacy policy. Add the page link to your site footer through Storefront > Footer Scripts or your theme settings. You should also link to it from your checkout flow. BigCommerce allows you to add a terms and conditions checkbox at checkout under Settings > General > Order Notifications that can reference your privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does BigCommerce have built-in GDPR compliance tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BigCommerce provides some GDPR-related features including a cookie consent banner, the ability to export customer data, and options to delete customer accounts. However, these tools do not replace the need for a comprehensive privacy policy. You are still responsible for disclosing all data collection, naming your payment processors and third-party apps, specifying retention periods, and providing contact information for privacy requests.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for BigCommerce",
  description:
    "Follow these six steps to create a GDPR and CCPA compliant privacy policy for your BigCommerce store that covers customer data, payments, apps, and multi-channel selling.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit all data collection points in your BigCommerce store",
      text: "Review your checkout fields, customer registration forms, and account pages. Check what data BigCommerce collects by default and what custom fields you have added. Examine your BigCommerce Analytics settings and any tracking scripts installed on your store.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify your payment gateway and its data handling",
      text: "Check which payment gateway you use in BigCommerce (Braintree, Stripe, PayPal, Square, or Authorize.net). Review the gateway documentation to understand what customer data it processes and stores. You must disclose the specific gateway by name in your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "List all BigCommerce apps that handle customer data",
      text: "Review every installed app in your BigCommerce control panel under Apps > My Apps. Identify which apps collect, process, or transmit customer data to external services. Common examples include Klaviyo, ShipStation, Yotpo, Google Shopping, and Facebook channel apps.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Document your multi-channel selling connections",
      text: "If you sell on Amazon, eBay, Facebook, Instagram, or other channels through BigCommerce, document each connection. Each sales channel receives customer and order data from your store. Your privacy policy must disclose these data sharing relationships.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Generate your privacy policy with BigCommerce-specific details",
      text: "Use a privacy policy generator to create a policy that covers your specific BigCommerce setup. Include details about order data, payment processing, installed apps, multi-channel selling, and data retention periods. The policy must accurately reflect your actual practices.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Publish and link from checkout and footer",
      text: "Create a new web page in BigCommerce under Storefront > Web Pages and paste your privacy policy content. Add the link to your site footer and checkout flow. Enable a terms and conditions checkbox at checkout that references your privacy policy.",
    },
  ],
};

const tocSections = [
  { id: "what-bigcommerce-collects", title: "What BigCommerce Collects" },
  { id: "customer-data-flow", title: "Customer Data Flow" },
  { id: "payment-gateways", title: "Payment Gateway Disclosures" },
  { id: "bigcommerce-apps", title: "BigCommerce Apps" },
  { id: "multi-channel-selling", title: "Multi-Channel Selling" },
  { id: "how-to-add", title: "How to Add in BigCommerce" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForBigCommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for BigCommerce: What Every Store Owner Must Disclose",
            description:
              "Create a privacy policy for your BigCommerce store. Covers customer data, payment processing, BigCommerce analytics, apps, shipping integrations, and multi-channel selling requirements.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
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
                name: "Privacy Policy for BigCommerce",
                item: "https://ultrafastutilities.com/privacy-policy-for-bigcommerce",
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
                Privacy Policy for BigCommerce
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <FileText className="w-3.5 h-3.5" />
                Ecommerce Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  BigCommerce
                </span>
                : What Every Store Owner Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                BigCommerce stores collect customer data, payment details,
                shipping addresses, and order histories across multiple
                sales channels. Your privacy policy must cover all of this
                to comply with GDPR, CCPA, and other privacy laws.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For BigCommerce store owners, ecommerce operators, and
                multi-channel sellers.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA &amp;
                CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShoppingCart className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Ecommerce Privacy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-shopify"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Shopify Privacy Policy
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
                    BigCommerce store?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate a compliant policy for $4.99
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
                  <strong>BigCommerce stores need a privacy policy that covers customer data, payment processing, installed apps, and multi-channel selling.</strong>{" "}
                  BigCommerce collects order details, payment information
                  through gateways like Braintree and Stripe, shipping
                  addresses, customer account data, and analytics. If you
                  sell on Amazon, eBay, Facebook, or Instagram through
                  BigCommerce, your privacy policy must also disclose those
                  data sharing relationships. Every installed app that
                  handles customer data requires disclosure.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                BigCommerce is a hosted ecommerce platform that powers
                online stores across industries, from small businesses to
                enterprise brands. Unlike self-hosted platforms, BigCommerce
                handles server infrastructure, security patches, and PCI
                compliance at the platform level. But this does not eliminate
                your obligation to maintain a privacy policy.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                As a BigCommerce store owner, you are the data controller
                for all customer information your store collects. This
                includes checkout data, customer accounts, payment details
                sent to your gateway, shipping information shared with
                carriers, and data transmitted to every third-party app you
                have installed. BigCommerce itself is a data processor
                acting on your behalf, but you remain responsible for
                disclosing all data practices to your customers.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly what data BigCommerce collects,
                how customer data flows through your store, payment gateway
                disclosure requirements, app-specific obligations,
                multi-channel selling considerations, and how to publish
                your privacy policy in the BigCommerce admin.
              </p>

              {/* Section 1: What BigCommerce Collects */}
              <section id="what-bigcommerce-collects" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What BigCommerce Collects
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  BigCommerce collects data at multiple points throughout the
                  customer journey. Some data is collected during checkout,
                  some through customer accounts, some through storefront
                  browsing, and some through connected apps and sales
                  channels. Your privacy policy must address each category.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Under GDPR, the principle of transparency (Article 5(1)(a))
                  requires you to clearly inform users about every category
                  of personal data you collect. Under CCPA, you must
                  disclose the categories of personal information collected
                  in the preceding 12 months. BigCommerce stores typically
                  fall into multiple data categories that require individual
                  disclosure.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <ShoppingCart className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Orders</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Names, addresses, items, totals
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <CreditCard className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Payments</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Card data via payment gateway
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Channels</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Amazon, eBay, Facebook, Instagram
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  BigCommerce collects the following categories of data by
                  default: customer names and email addresses from checkout
                  and account registration, billing and shipping addresses,
                  phone numbers, order details including items purchased and
                  quantities, payment references and transaction IDs,
                  customer account credentials and saved addresses, storefront
                  analytics including page views and product interactions,
                  and IP addresses for fraud detection and analytics.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The key distinction to understand is what BigCommerce
                  stores on its platform versus what it sends to external
                  services. Full credit card numbers are never stored in your
                  BigCommerce store. They are processed directly by your
                  payment gateway. BigCommerce stores transaction reference
                  IDs and payment method type for order management purposes.
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
                        BigCommerce is a Level 1 PCI DSS certified platform,
                        which means it meets the highest level of payment
                        card industry security standards. This covers the
                        platform infrastructure, but it does not cover your
                        privacy policy obligations. PCI compliance protects
                        card data security. Privacy compliance requires you
                        to disclose what data you collect and why.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Customer Data Flow */}
              <section id="customer-data-flow" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Customer Data Flow in BigCommerce
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Understanding how customer data moves through your
                  BigCommerce store is essential for writing an accurate
                  privacy policy. Data does not stay in one place. It flows
                  from your storefront to BigCommerce servers, then to
                  payment gateways, shipping providers, marketing apps, and
                  sales channels.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  Here is how customer data flows through a typical
                  BigCommerce store.
                </p>

                {/* Customer data flow table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Data Category
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Specific Data Points
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Where It Goes
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          GDPR Legal Basis
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Order Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Customer name, email, billing address, shipping
                          address, phone, order items, quantities, totals
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          BigCommerce platform, shipping providers, tax
                          services
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contract performance
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Payment Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Card number, expiry, CVV (processed by gateway),
                          transaction ID, payment method (stored by
                          BigCommerce)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Payment gateway (Braintree, Stripe, PayPal)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contract performance
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Account Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Username, email, password hash, saved addresses,
                          order history, wish lists
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          BigCommerce platform
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contract / Consent
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Analytics Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Page views, product interactions, conversion events,
                          search queries, traffic sources
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          BigCommerce Analytics, connected analytics apps
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Legitimate interest
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Shipping Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shipping address, selected carrier, tracking
                          number, package details, delivery status
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shipping providers (via ShipStation, ShipperHQ, or
                          direct)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contract performance
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Channel Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product listings, order sync data, customer details
                          shared with Amazon, eBay, Facebook, Instagram
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Each connected sales channel platform
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contract performance / Consent
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Marketing Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email addresses, marketing consent, campaign
                          interactions, abandoned cart data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email marketing apps (Klaviyo, Privy, Justuno)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Consent / Legitimate interest
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy must trace these data flows
                  accurately. For each category, customers need to know what
                  data is collected, why it is collected, where it goes, and
                  how long it is kept. This is the core transparency
                  requirement under both GDPR and CCPA.
                </p>

                {/* Mini FAQ 1 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does BigCommerce itself need to be listed as a data
                      processor in my privacy policy?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. BigCommerce hosts your store and processes customer
                      data on your behalf. Under GDPR, BigCommerce is a data
                      processor and should be disclosed. BigCommerce provides
                      a Data Processing Addendum (DPA) as part of its terms
                      of service for this purpose.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What about guest checkout data?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Even when customers check out as guests without
                      creating an account, BigCommerce still collects their
                      name, email, billing address, shipping address, and
                      payment details. Guest checkout data must be covered
                      in your privacy policy just like registered customer
                      data.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Payment Gateway Disclosures */}
              <section id="payment-gateways" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Payment Gateway Disclosures
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  BigCommerce integrates with multiple payment gateways that
                  process sensitive customer financial data. Your payment
                  gateway receives credit card numbers, billing addresses,
                  and transaction details directly from customers during
                  checkout. Under GDPR Article 13, you must identify each
                  payment processor by name and explain what data it
                  receives.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are the most common BigCommerce payment gateways and
                  what data they handle.
                </p>

                {/* Payment gateways table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Gateway
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Data Received
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          PCI Compliant
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          GDPR DPA Available
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Braintree
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Card number, expiry, CVV, billing address, email,
                          IP address, device data for fraud detection
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          PCI DSS Level 1
                        </td>
                        <td className="px-4 py-3 text-slate-600">Yes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Stripe
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Card number, expiry, CVV, billing address, email,
                          IP address, device fingerprint for fraud prevention
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          PCI DSS Level 1
                        </td>
                        <td className="px-4 py-3 text-slate-600">Yes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          PayPal
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          PayPal account email, transaction amount, billing
                          address, shipping address, order details
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          PCI DSS Level 1
                        </td>
                        <td className="px-4 py-3 text-slate-600">Yes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Square
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Card number, expiry, CVV, billing address,
                          transaction amount, customer name, email
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          PCI DSS Level 1
                        </td>
                        <td className="px-4 py-3 text-slate-600">Yes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Authorize.net
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Card number, expiry, CVV, billing name and address,
                          transaction amount, IP address
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          PCI DSS Level 1
                        </td>
                        <td className="px-4 py-3 text-slate-600">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy must name the specific payment gateway
                  you use. Saying &quot;we use a third-party payment
                  processor&quot; is not sufficient under GDPR. You need to
                  identify the processor by name, describe what data it
                  receives, state the purpose (payment processing), and
                  ideally link to their privacy policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  If you accept multiple payment methods (for example,
                  Braintree for credit cards and PayPal as an alternative),
                  you must disclose each one separately. Each payment method
                  represents a distinct data flow to a distinct processor.
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
                        BigCommerce offers a built-in payment solution called
                        BigCommerce Payments, which is powered by Braintree
                        (a PayPal company). If you use BigCommerce Payments,
                        your privacy policy should mention both BigCommerce
                        Payments and the fact that Braintree processes the
                        actual card transactions. This is similar to how
                        Shopify Payments operates through Stripe.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: BigCommerce Apps */}
              <section id="bigcommerce-apps" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  BigCommerce Apps That Collect Customer Data
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Most BigCommerce stores rely on apps from the BigCommerce
                  App Marketplace to add functionality: email marketing,
                  reviews, shipping, analytics, and sales channel
                  integrations. Many of these apps collect customer data or
                  send data to external services. Each one is a data
                  processor that your privacy policy must disclose.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are the most common BigCommerce apps and the data
                  they handle.
                </p>

                {/* Apps table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                          App
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[18%]">
                          Category
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Data It Collects or Transmits
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Sends Data Externally
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Klaviyo
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email Marketing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Customer email, name, order data, browsing behavior,
                          cart abandonment, product views, purchase history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Klaviyo servers)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          ShipStation
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shipping
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shipping address, customer name, order items,
                          package weight and dimensions, carrier selection,
                          tracking numbers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (ShipStation servers, carrier APIs)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Yotpo
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Reviews
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Customer name, email, order data, review content,
                          photos, star ratings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Yotpo servers)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Google Shopping
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Sales Channel
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product data, pricing, inventory levels, order
                          data synced from Google Shopping purchases
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Google Merchant Center)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Facebook
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Sales Channel
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product catalog, order data, customer interactions,
                          pixel tracking data, conversion events
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Meta servers)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Justuno
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Conversion
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Visitor behavior, email addresses from popups,
                          browsing patterns, device data, conversion events
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Justuno servers)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Privy
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email Capture
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email addresses, phone numbers from popups, cart
                          data, browsing behavior, coupon usage
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Privy servers)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Review your installed apps in BigCommerce under Apps &gt;
                  My Apps. For each app, determine whether it collects
                  customer data, sends data to external services, or adds
                  tracking scripts to your storefront. If any of these are
                  true, the app must be disclosed in your privacy policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Pay special attention to email marketing and conversion
                  apps like Klaviyo, Justuno, and Privy. These apps often
                  track browsing behavior across your entire store, collect
                  email addresses through popups, and sync customer data to
                  external servers. This represents a significant data
                  transfer that requires explicit disclosure and, in many
                  cases, consent.
                </p>

                <p className="text-slate-600 text-sm mt-4">
                  Not sure which apps are collecting data? Start with a
                  fresh, accurate policy generated from your current setup
                  using a{" "}
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

              {/* Section 5: Multi-Channel Selling */}
              <section id="multi-channel-selling" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Multi-Channel Selling and Privacy Implications
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  One of BigCommerce&apos;s key features is multi-channel
                  selling. You can connect your BigCommerce store to Amazon,
                  eBay, Facebook, Instagram, Google Shopping, and other
                  marketplaces to sell products across platforms. This
                  creates additional data flows that your privacy policy
                  must address.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  When you sell through multiple channels, customer data
                  flows in both directions. Orders placed on Amazon sync
                  back to BigCommerce for fulfillment. Product data from
                  BigCommerce syncs out to each connected channel. Customer
                  details from marketplace orders enter your BigCommerce
                  database. Each of these data flows involves sharing
                  personal information with a third-party platform.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Amazon Channel
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  When you connect BigCommerce to Amazon, order data
                  (customer name, shipping address, order items) syncs
                  between the two platforms. Amazon has its own privacy
                  policy governing data it collects from buyers on its
                  marketplace. Your privacy policy should note that orders
                  placed through Amazon are also subject to Amazon&apos;s
                  privacy policy, and that order data is shared between
                  BigCommerce and Amazon for fulfillment purposes.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  eBay Channel
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Similar to Amazon, eBay order data syncs to BigCommerce.
                  This includes buyer names, shipping addresses, and order
                  details. eBay also collects its own data from buyers.
                  Your privacy policy should disclose the data sharing
                  relationship between your BigCommerce store and eBay.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Facebook and Instagram Channels
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  BigCommerce integrates with Facebook and Instagram for
                  product catalog sync and social commerce. This involves
                  sharing your product catalog with Meta, installing the
                  Facebook Pixel on your storefront for conversion tracking,
                  and syncing order data for purchases made through Facebook
                  or Instagram Shops. The Facebook Pixel collects browsing
                  behavior, device data, and conversion events from your
                  storefront visitors, even those who do not purchase.
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
                        When you sell on multiple channels through BigCommerce,
                        a single customer may appear in your database multiple
                        times with slightly different data from each channel.
                        BigCommerce does not automatically merge these records.
                        This means you may hold more customer data than you
                        realize, which increases your disclosure obligations
                        and makes data subject access requests more complex
                        to fulfill.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ 2 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do marketplace channels have their own privacy
                      policies that cover my customers?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Amazon, eBay, Facebook, and Instagram each have
                      their own privacy policies that govern data they
                      collect on their platforms. However, when order data
                      syncs to your BigCommerce store, you become the data
                      controller for that data in your system. Your privacy
                      policy must cover how you handle data received from
                      these channels.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need separate privacy policies for each sales
                      channel?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No. A single comprehensive privacy policy can cover
                      all your sales channels. However, it must mention each
                      channel by name and explain what data is shared with
                      each platform. The policy should be accessible from
                      your BigCommerce storefront, and you should reference
                      it in your marketplace seller profiles where possible.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: How to Add in BigCommerce Admin */}
              <section id="how-to-add" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Add a Privacy Policy in BigCommerce (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow this process to create and publish a comprehensive
                  privacy policy for your BigCommerce store that covers all
                  data flows, satisfies GDPR and CCPA, and is properly
                  linked throughout your storefront.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit all data collection points in your store
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go through your entire BigCommerce checkout flow as
                        a customer. Note every field on the checkout page,
                        the registration form, and the account area. Check
                        your BigCommerce Analytics settings, installed apps,
                        and connected sales channels. Document every point
                        where customer data is collected or transmitted.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Identify your payment gateway and installed apps
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Check your payment settings in BigCommerce under
                        Store Setup &gt; Payments. Note which gateway is
                        active (Braintree, Stripe, PayPal, or another). Then
                        review Apps &gt; My Apps to list every installed app
                        that handles customer data. For each app, document
                        what data it accesses and where it sends that data.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Document multi-channel connections
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Check Channel Manager in your BigCommerce admin to
                        see all connected sales channels. For each channel
                        (Amazon, eBay, Facebook, Instagram, Google Shopping),
                        document what customer data is shared with that
                        platform. Include both outbound data (product
                        listings) and inbound data (orders syncing back).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
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
                        to create a policy based on your BigCommerce
                        store&apos;s specific setup. Answer questions about
                        your data practices, payment gateways, apps,
                        multi-channel selling, and retention periods. This
                        produces a customized policy covering all your
                        ecommerce data flows.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Create a web page in BigCommerce
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go to Storefront &gt; Web Pages in your BigCommerce
                        admin. Create a new page titled &quot;Privacy
                        Policy&quot; and paste your generated privacy policy
                        content. Set the page URL to /privacy-policy/ for
                        consistency. Make sure the page is visible and
                        accessible from your navigation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Link from footer, checkout, and enable consent
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add your privacy policy link to the site footer
                        through your theme settings or footer script area.
                        Enable the terms and conditions checkbox at checkout
                        under Settings &gt; General to reference your
                        privacy policy. Verify that the cookie consent banner
                        is active if you serve customers in the EU.
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
                        Generate Your BigCommerce Privacy Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Answer a few questions about your BigCommerce store
                        and get a customized, compliant privacy policy in
                        under 60 seconds. Covers order data, payment
                        gateways, apps, and multi-channel selling.
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

              {/* Section 7: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common BigCommerce Privacy Policy Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the most frequent privacy mistakes made by
                  BigCommerce store owners. Each one creates a compliance
                  gap that could result in GDPR fines, CCPA penalties, or
                  customer trust issues.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;BigCommerce is PCI compliant so I do
                        not need to worry about data privacy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        PCI DSS compliance covers payment card security, not
                        privacy. BigCommerce being PCI compliant means card
                        data is handled securely at the infrastructure level.
                        But your store still collects names, email addresses,
                        physical addresses, phone numbers, order histories,
                        and account data. You are the data controller for
                        all of this, and you need a privacy policy that
                        discloses every category.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I do not mention my installed apps
                        because they are internal tools&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        BigCommerce apps are not internal tools. Apps like
                        Klaviyo, ShipStation, and Yotpo are third-party
                        services that receive customer data from your store.
                        When Klaviyo syncs your customer list, that is a
                        data transfer to an external processor. When
                        ShipStation receives shipping addresses, that is
                        another. Each app must be named as a data processor
                        in your privacy policy.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My multi-channel sales are covered by
                        each marketplace&apos;s own privacy policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        While Amazon, eBay, and Facebook have their own
                        privacy policies for their platforms, when order data
                        syncs to your BigCommerce store, you become the data
                        controller for that data. Your privacy policy must
                        disclose that you receive customer data from these
                        channels, explain what you do with it, and note the
                        data sharing relationship between your store and
                        each marketplace.
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
                        BigCommerce store&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Every BigCommerce store has a unique combination of
                        payment gateways, installed apps, sales channels,
                        and data practices. A privacy policy copied from
                        another store will not accurately reflect your data
                        collection. It may list apps you do not use, omit
                        apps you do use, name the wrong payment gateway, or
                        miss your multi-channel connections. An inaccurate
                        privacy policy is worse than a generic one because
                        it actively misleads customers.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I do not need to update my policy when
                        I add new apps or channels&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Every time you install a new BigCommerce app that
                        handles customer data, connect a new sales channel,
                        or change your payment gateway, your privacy policy
                        becomes outdated. Under GDPR, your privacy policy
                        must accurately reflect your current data practices
                        at all times. A policy that was accurate six months
                        ago may not cover the apps and channels you have
                        added since then.
                      </p>
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
                      Does my BigCommerce store need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. BigCommerce stores collect customer names, emails,
                      billing and shipping addresses, payment details, order
                      histories, and account data. Privacy laws including
                      GDPR, CCPA, and PIPEDA require you to disclose this
                      data collection. BigCommerce does not provide a
                      compliant privacy policy for you. Store owners are
                      responsible for creating their own.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What customer data does BigCommerce collect?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      BigCommerce collects order data (name, email,
                      addresses, phone, items), payment data (processed
                      through your gateway), account data (username,
                      password hash, order history), storefront analytics
                      (page views, conversion events), and marketing data
                      if you use email tools or connected apps. The exact
                      data depends on your checkout configuration and
                      installed apps.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need to disclose BigCommerce apps in my privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Any BigCommerce app that collects, processes, or
                      transmits customer data is a data processor under GDPR
                      and must be disclosed. This includes email marketing
                      apps like Klaviyo, shipping apps like ShipStation,
                      review apps like Yotpo, and sales channel apps for
                      Google Shopping and Facebook.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does BigCommerce store credit card numbers?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      No. BigCommerce does not store full credit card numbers.
                      Card data is processed by your payment gateway
                      (Braintree, Stripe, PayPal, or another provider) and
                      handled according to PCI DSS standards. BigCommerce
                      stores transaction IDs and payment method type for
                      order reference. Your privacy policy should clarify
                      this and name your specific gateway.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How does multi-channel selling affect my privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      When you sell on Amazon, eBay, Facebook, or Instagram
                      through BigCommerce, customer data flows between your
                      store and each channel. Your privacy policy must
                      disclose each sales channel, explain what data is
                      shared, and note that each channel has its own privacy
                      policy. Multi-channel selling creates additional data
                      processor relationships requiring disclosure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I add a privacy policy to my BigCommerce store?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      In BigCommerce, go to Storefront &gt; Web Pages and
                      create a new page for your privacy policy. Add the
                      link to your site footer through theme settings. Enable
                      a terms and conditions checkbox at checkout under
                      Settings &gt; General. Make sure the privacy policy is
                      accessible from every page via your footer navigation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does BigCommerce have built-in GDPR compliance tools?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      BigCommerce provides a cookie consent banner, the
                      ability to export and delete customer data, and
                      checkout consent options. However, these tools do not
                      replace a comprehensive privacy policy. You are still
                      responsible for disclosing all data collection, naming
                      processors and apps, specifying retention periods, and
                      providing contact information for privacy requests.
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
                      href: "/privacy-policy-for-ecommerce",
                      title: "Privacy Policy for Ecommerce",
                      desc: "General ecommerce privacy requirements and best practices",
                    },
                    {
                      href: "/privacy-policy-for-shopify",
                      title: "Privacy Policy for Shopify",
                      desc: "Shopify-specific privacy obligations and disclosures",
                    },
                    {
                      href: "/privacy-policy-for-woocommerce",
                      title: "Privacy Policy for WooCommerce",
                      desc: "WooCommerce orders, payments, and plugin disclosures",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-an-online-store",
                      title: "Do I Need a Privacy Policy for an Online Store?",
                      desc: "Legal requirements for ecommerce privacy policies",
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
                      href: "/privacy-policy-for-stripe",
                      title: "Privacy Policy for Stripe",
                      desc: "Payment processing disclosures for Stripe users",
                    },
                    {
                      href: "/privacy-policy-for-google-analytics",
                      title: "Privacy Policy for Google Analytics",
                      desc: "Analytics tracking disclosure requirements",
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
                  Get Your BigCommerce Privacy Policy
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Your BigCommerce store is collecting customer data, payment
                  details, and order information across multiple channels.
                  Generate a customized, compliant privacy policy that covers
                  everything. Takes under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and CalOPPA &middot; Customized for
                  BigCommerce &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
