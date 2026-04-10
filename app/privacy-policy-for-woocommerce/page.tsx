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
  ShoppingCart,
  CreditCard,
  Database,
  Users,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for WooCommerce: Orders, Payments & GDPR (2026) | ultrafastutilities",
  description:
    "WooCommerce stores collect order data, payment details, and customer accounts. Learn what your privacy policy must cover for GDPR and CCPA compliance. Generate yours for $4.99.",
  keywords:
    "privacy policy for woocommerce, woocommerce privacy policy, woocommerce gdpr, woocommerce privacy policy template, woocommerce data collection",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-woocommerce",
  },
  openGraph: {
    title:
      "Privacy Policy for WooCommerce: Orders, Payments & GDPR (2026) | ultrafastutilities",
    description:
      "WooCommerce stores collect order data, payment details, and customer accounts. Learn what your privacy policy must cover for GDPR and CCPA compliance. Generate yours for $4.99.",
    url: "https://ultrafastutilities.com/privacy-policy-for-woocommerce",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for WooCommerce | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for WooCommerce: Orders, Payments & GDPR (2026)",
    description:
      "WooCommerce stores collect order data, payment details, and customer accounts. Learn what your privacy policy must cover for GDPR and CCPA compliance.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does my WooCommerce store need its own privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A standard WordPress privacy policy is not sufficient for a WooCommerce store. WooCommerce collects fundamentally different data than a regular WordPress site: order details, payment information, shipping addresses, customer account data, and purchase history. Your privacy policy must specifically address how you handle this ecommerce data, disclose your payment processor, and explain data retention for financial records.",
      },
    },
    {
      "@type": "Question",
      name: "What data does WooCommerce collect from customers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WooCommerce collects order data (customer name, email, billing address, shipping address, phone number, order items, quantities, totals), payment data (card details processed through your payment gateway), customer account data (username, password hash, order history, saved addresses), session data (cart contents, recently viewed products), and analytics data if you use WooCommerce Analytics. The exact data depends on your checkout fields and enabled features.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to disclose my payment gateway in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your payment gateway (Stripe, PayPal, Square, Authorize.net, or any other) is a data processor that receives sensitive customer financial data. Under GDPR, you must identify each data processor, explain what data they receive, and provide a link to their privacy policy. Stating that you accept credit cards without naming your payment processor is not sufficient.",
      },
    },
    {
      "@type": "Question",
      name: "Does WooCommerce store credit card numbers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. WooCommerce itself does not store full credit card numbers. Payment card data is processed by your payment gateway (such as Stripe or PayPal) and never stored in your WordPress database. However, WooCommerce does store transaction IDs, payment method type, and the last four digits of the card for reference. Your privacy policy should clarify this distinction and name your payment processor.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I keep WooCommerce order data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax laws in most jurisdictions require you to retain financial transaction records for 5 to 7 years. This means you cannot delete order data immediately upon customer request if doing so would violate tax law. Your privacy policy must disclose these retention periods and explain the legal basis for retaining data beyond account deletion. GDPR allows retention when required by law under Article 6(1)(c).",
      },
    },
    {
      "@type": "Question",
      name: "Do WooCommerce plugins need to be disclosed in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any WooCommerce plugin that collects, processes, or transmits customer data must be disclosed in your privacy policy. This includes email marketing plugins like Mailchimp for WooCommerce, analytics plugins like Google Analytics, shipping plugins that send address data to carriers, and any plugin that connects to an external service. Each one is a data processor under GDPR.",
      },
    },
    {
      "@type": "Question",
      name: "Does WooCommerce have built-in privacy tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Since WordPress 4.9.6, there are built-in privacy tools that WooCommerce extends. These include a personal data export tool that lets you export all data associated with an email address, a personal data erasure tool that anonymizes or deletes customer data, and a privacy policy page template. WooCommerce adds its own suggested privacy policy text covering ecommerce-specific data handling.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for WooCommerce",
  description:
    "Follow these seven steps to create a GDPR and CCPA compliant privacy policy for your WooCommerce store that covers orders, payments, customer accounts, and plugin disclosures.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit all data collection points in your WooCommerce store",
      text: "Review your checkout fields, registration forms, and account pages. Check what data WooCommerce collects by default and what custom fields you have added. Examine your WooCommerce Analytics settings and any tracking scripts on your store.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify your payment gateway and its data handling",
      text: "Determine which payment gateway you use (Stripe, PayPal, Square, etc.) and understand what customer data it receives. Review the gateway's documentation to understand what data it stores versus what it only processes. You must disclose this in your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "List all WooCommerce plugins that handle customer data",
      text: "Review every active plugin on your WooCommerce store. Identify which ones collect, process, or transmit customer data to external services. Common examples include email marketing plugins, analytics tools, shipping integrations, and CRM connectors.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Determine your data retention periods",
      text: "Establish how long you keep different categories of data. Order records typically must be retained for 5-7 years for tax purposes. Customer account data may be kept until account deletion. Marketing consent records should be kept as proof of consent. Document each retention period.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Generate your privacy policy with WooCommerce-specific details",
      text: "Use a privacy policy generator to create a policy that covers your specific WooCommerce setup. Include details about order data, payment processing, customer accounts, plugin disclosures, and data retention periods. The policy must accurately reflect your actual practices.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Publish using WordPress privacy policy tools",
      text: "Use the built-in WordPress privacy policy page feature to publish your policy. Go to Settings > Privacy in your WordPress admin and set your privacy policy page. WooCommerce will automatically link to this page from the checkout.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Add privacy policy links to checkout and account pages",
      text: "Ensure your privacy policy is linked from the checkout page, registration page, and site footer. Add a consent checkbox at checkout if required by GDPR. Verify that the personal data export and erasure tools work correctly for your store.",
    },
  ],
};

const tocSections = [
  { id: "why-woocommerce-needs", title: "Why WooCommerce Needs Its Own" },
  { id: "what-woocommerce-collects", title: "What WooCommerce Collects" },
  { id: "payment-gateways", title: "Payment Gateway Disclosures" },
  { id: "plugins-data", title: "Plugins That Collect Data" },
  { id: "built-in-privacy-tools", title: "Built-In Privacy Tools" },
  { id: "common-mistakes", title: "Common WooCommerce Mistakes" },
  { id: "how-to-create", title: "How to Create One (7 Steps)" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForWooCommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for WooCommerce: Orders, Payments & GDPR (2026)",
            description:
              "WooCommerce stores collect order data, payment details, and customer accounts. Learn what your privacy policy must cover for GDPR and CCPA compliance.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-09",
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
                name: "Privacy Policy for WooCommerce",
                item: "https://ultrafastutilities.com/privacy-policy-for-woocommerce",
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
                Privacy Policy for WooCommerce
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
                  WooCommerce
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                WooCommerce stores collect order data, payment details,
                shipping addresses, and customer accounts. Your privacy
                policy must cover all of this to comply with GDPR and CCPA.
                A standard WordPress privacy policy is not enough.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For WooCommerce store owners, WordPress developers, and
                ecommerce business operators.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: April 2026 &middot; Reviewed for GDPR, CCPA &amp;
                CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-wordpress"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                WordPress Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShoppingCart className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Ecommerce Privacy Guide
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
                    WooCommerce store?
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
                <span>Last updated: April 2026</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>11 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>WooCommerce stores need a privacy policy that goes beyond standard WordPress requirements.</strong>{" "}
                  WooCommerce collects order data, payment details through
                  gateways like Stripe and PayPal, shipping addresses,
                  customer account information, and purchase history. Your
                  privacy policy must disclose each data category, name your
                  payment processor, list data-collecting plugins, and
                  explain retention periods for financial records.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                WooCommerce powers over 5 million online stores worldwide.
                It is the most popular ecommerce platform built on WordPress,
                and it transforms a standard WordPress site into a full
                online store with product listings, shopping carts, checkout
                flows, customer accounts, and order management.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                This transformation also fundamentally changes the data your
                site collects. A standard WordPress blog might collect names
                and emails through comment forms. A WooCommerce store
                collects billing addresses, shipping addresses, phone
                numbers, payment card details (through your gateway), order
                histories, customer account credentials, and potentially
                much more depending on your plugins.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly what data WooCommerce collects,
                how to handle payment gateway disclosures, which popular
                plugins create additional obligations, how to use
                WooCommerce&apos;s built-in privacy tools, and how to create
                a comprehensive privacy policy that covers all of it.
              </p>

              {/* Section 1: Why WooCommerce Needs Its Own */}
              <section id="why-woocommerce-needs" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why WooCommerce Needs Its Own Privacy Policy Section
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If you already have a WordPress privacy policy, you might
                  assume it covers your WooCommerce store. It does not.
                  WooCommerce collects fundamentally different categories of
                  data that a standard WordPress privacy policy does not
                  address.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  A WordPress privacy policy typically covers comments,
                  cookies, embedded content, and basic analytics. A
                  WooCommerce store needs all of that plus dedicated sections
                  for order processing, payment handling, customer accounts,
                  shipping data, purchase history, and the specific plugins
                  you use to run your store.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Under GDPR, the principle of transparency (Article 5(1)(a))
                  requires you to clearly inform users about every category
                  of personal data you collect and every purpose for which
                  you process it. Under CCPA, you must disclose the
                  categories of personal information collected in the
                  preceding 12 months. Ecommerce data creates multiple new
                  categories that your WordPress policy does not cover.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  There is also a legal basis issue. Different WooCommerce
                  data categories are processed under different GDPR legal
                  bases. Order fulfillment falls under contract performance
                  (Article 6(1)(b)). Financial record retention falls under
                  legal obligation (Article 6(1)(c)). Marketing emails may
                  require consent (Article 6(1)(a)) or legitimate interest
                  (Article 6(1)(f)). Your privacy policy must identify the
                  correct legal basis for each processing activity.
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
                    <p className="text-2xl font-bold text-slate-900">Accounts</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Credentials, history, preferences
                    </p>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I just add WooCommerce sections to my existing
                      WordPress privacy policy?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes, that is a valid approach. You do not need a
                      separate document. But you do need to add dedicated
                      sections covering order data, payment processing,
                      customer accounts, and all ecommerce-specific data
                      flows. The WooCommerce sections should be substantial,
                      not just a sentence or two.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: I only sell a few products. Do I still need all these
                      disclosures?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Whether you sell 3 products or 3,000, the data
                      collection is the same. Every order processes the same
                      categories of personal data: name, address, email,
                      payment details, and order contents. The privacy
                      requirements scale with the type of data collected,
                      not the volume of sales.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: What WooCommerce Collects */}
              <section id="what-woocommerce-collects" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What WooCommerce Collects
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  WooCommerce collects data across multiple categories. Some
                  is stored directly in your WordPress database. Some is
                  passed to external services like payment gateways. Some is
                  generated automatically through sessions and analytics.
                  Understanding the difference is critical for writing an
                  accurate privacy policy.
                </p>

                {/* Data collection table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Data Category
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Specific Data Points
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                          Stored In
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[23%]">
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
                          address, phone number, order items, quantities,
                          totals, tax amounts, shipping method
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WordPress database
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
                          transaction ID, payment method type, last 4 digits
                          (stored by WooCommerce)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Payment gateway (Stripe, PayPal, etc.)
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
                          Username, email, password hash, display name,
                          saved addresses, order history, account creation
                          date
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WordPress database
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contract / Consent
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Session Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Cart contents, recently viewed products, session
                          token, applied coupons
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WordPress database + cookies
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Legitimate interest
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Analytics Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Revenue, order count, products sold, customer
                          segments, conversion rates (WooCommerce Analytics)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WordPress database
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Legitimate interest
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Tax Records
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Transaction amounts, tax rates applied, customer
                          location for tax determination, invoice data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WordPress database
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Legal obligation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Shipping Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shipping address, selected carrier, tracking
                          number, package weight and dimensions, delivery
                          status
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WordPress database + shipping provider
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contract performance
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The key distinction to understand is what WooCommerce
                  stores in your database versus what it passes to external
                  services. Full credit card numbers are never stored in your
                  WordPress database. They are sent directly to your payment
                  gateway for processing. WooCommerce only stores a
                  transaction reference ID and the last four digits for
                  display purposes.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy must be clear about this distinction.
                  Customers need to know that their card details are handled
                  by Stripe, PayPal, or whichever gateway you use, and that
                  those details are subject to that gateway&apos;s privacy
                  policy and security standards.
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
                        WooCommerce stores order data as custom post types in
                        your WordPress database. Starting with WooCommerce 8.2,
                        High-Performance Order Storage (HPOS) moves order data
                        to dedicated database tables for better performance.
                        Regardless of which storage method you use, the same
                        personal data is collected. Your privacy policy does
                        not need to mention the technical storage method, but
                        it must disclose the data categories.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Payment Gateway Disclosures */}
              <section id="payment-gateways" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Payment Gateway Disclosures
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Your payment gateway is one of the most important data
                  processors to disclose in your privacy policy. It receives
                  sensitive financial data from your customers, including
                  credit card numbers, billing addresses, and transaction
                  amounts. Under GDPR, you must identify each data processor
                  that handles personal data on your behalf.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are the most common WooCommerce payment gateways and
                  what data they receive.
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
                          Stripe
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Card number, expiry, CVV, billing address, email,
                          IP address, device fingerprint for fraud detection
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
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          WooCommerce Payments
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Same as Stripe (built on Stripe infrastructure),
                          plus dispute and chargeback data
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
                  Your privacy policy must name the specific payment
                  gateway you use. Saying &quot;we use a third-party payment
                  processor&quot; is not sufficient under GDPR Article 13.
                  You need to identify the processor by name, describe what
                  data it receives, state the purpose (payment processing),
                  and ideally link to their privacy policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  If you accept multiple payment methods (for example, both
                  Stripe for credit cards and PayPal as an alternative),
                  you must disclose each one. Each payment method is a
                  separate data flow to a separate processor, and each must
                  be individually disclosed.
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
                        WooCommerce Payments is built on Stripe&apos;s
                        infrastructure but is operated by Automattic (the
                        company behind WordPress.com). This means your
                        privacy policy should mention both WooCommerce
                        Payments and the fact that it is powered by Stripe.
                        Customer card data is processed by Stripe on behalf
                        of WooCommerce Payments, creating a sub-processor
                        relationship that ideally should be disclosed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need a Data Processing Agreement with my payment
                      gateway?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Under GDPR Article 28, yes. You need a DPA with every
                      data processor. Most major payment gateways have a
                      standard DPA available on their website that you can
                      accept. Stripe, PayPal, and Square all offer GDPR DPAs.
                      Some apply automatically when you agree to their terms
                      of service.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if I switch payment gateways?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      You must update your privacy policy immediately to
                      reflect the new payment processor. Remove references
                      to the old gateway and add the new one. If the switch
                      represents a material change to how payment data is
                      handled, consider notifying existing customers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Plugins That Collect Data */}
              <section id="plugins-data" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Popular WooCommerce Plugins That Collect Data
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Most WooCommerce stores rely on multiple plugins to add
                  functionality: email marketing, analytics, SEO, security,
                  subscriptions, and shipping. Many of these plugins collect
                  customer data or send data to external services. Each one
                  is a data processor that your privacy policy must disclose.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are the most common WooCommerce plugins and the data
                  they handle.
                </p>

                {/* Plugins table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Plugin
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[18%]">
                          Category
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Data It Collects or Transmits
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                          Sends Data Externally
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Mailchimp for WooCommerce
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email Marketing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Customer email, name, purchase history, cart data,
                          product interests, marketing consent
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Mailchimp servers)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Klaviyo
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email Marketing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Customer email, name, order data, browsing behavior,
                          cart abandonment, product views
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Klaviyo servers)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Yoast SEO
                        </td>
                        <td className="px-4 py-3 text-slate-600">SEO</td>
                        <td className="px-4 py-3 text-slate-600">
                          Site usage data if tracking is enabled, structured
                          data generation from product pages
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Optional (Yoast tracking)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Jetpack
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Security / Stats
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Visitor IPs, page views, browser data, login
                          attempts, brute force protection data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (WordPress.com servers)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          WooCommerce Subscriptions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Recurring Billing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Subscription status, renewal dates, payment tokens,
                          billing history, failed payment data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Via payment gateway
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Google Analytics (via plugin)
                        </td>
                        <td className="px-4 py-3 text-slate-600">Analytics</td>
                        <td className="px-4 py-3 text-slate-600">
                          Page views, sessions, enhanced ecommerce data
                          (product views, add to cart, purchases), demographics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Google servers)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          WooCommerce Shipping
                        </td>
                        <td className="px-4 py-3 text-slate-600">Shipping</td>
                        <td className="px-4 py-3 text-slate-600">
                          Shipping address, package dimensions, weight,
                          selected carrier, tracking number
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (carrier APIs)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Wordfence
                        </td>
                        <td className="px-4 py-3 text-slate-600">Security</td>
                        <td className="px-4 py-3 text-slate-600">
                          IP addresses, login attempts, firewall logs,
                          malware scan results
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Wordfence threat network)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Review your Plugins page in WordPress admin and check
                  every active plugin. For each one, ask: does this plugin
                  collect customer data? Does it send data to an external
                  service? If the answer to either question is yes, your
                  privacy policy needs to mention it.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Pay special attention to email marketing plugins like
                  Mailchimp and Klaviyo. These sync your entire customer
                  list, including names, emails, purchase history, and
                  behavioral data, to external servers. This is a
                  significant data transfer that requires explicit
                  disclosure. If these services are based in the US and
                  your customers are in the EU, international data transfer
                  provisions under GDPR also apply.
                </p>

                <p className="text-slate-600 text-sm mt-4">
                  Not sure which plugins are collecting data? Start with a
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

              {/* Section 5: Built-In Privacy Tools */}
              <section id="built-in-privacy-tools" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  WooCommerce&apos;s Built-In Privacy Tools
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Since WordPress 4.9.6, WordPress has included built-in
                  privacy tools that WooCommerce extends with ecommerce-
                  specific functionality. These tools help you comply with
                  GDPR data subject rights, but they are not a substitute
                  for a proper privacy policy.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Personal Data Export
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Under GDPR Article 20, users have the right to receive
                  their personal data in a portable format. WordPress
                  provides a personal data export tool under Tools &gt;
                  Export Personal Data. When you enter a customer&apos;s
                  email and confirm the export, WordPress generates a ZIP
                  file containing all data associated with that email
                  address. WooCommerce adds order data, customer account
                  data, and billing/shipping addresses to this export.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Personal Data Erasure
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Under GDPR Article 17, users have the right to erasure
                  (the &quot;right to be forgotten&quot;). WordPress provides
                  a personal data erasure tool under Tools &gt; Erase
                  Personal Data. WooCommerce integrates with this tool but
                  handles it carefully: it anonymizes order data rather than
                  deleting it entirely, because you may need to retain
                  financial records for tax compliance.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  When you process an erasure request in WooCommerce, customer
                  names and addresses in orders are replaced with
                  &quot;Anonymized&quot; text. The order itself and its
                  financial details (items, totals, tax) are preserved for
                  accounting records. This balances the customer&apos;s
                  right to erasure with your legal obligation to maintain
                  financial records.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Privacy Policy Page
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  WordPress provides a dedicated Privacy Policy page feature
                  under Settings &gt; Privacy. When you set a page as your
                  privacy policy, WordPress links to it automatically from
                  the login and registration pages. WooCommerce extends this
                  by linking to your privacy policy from the checkout page
                  and adding a consent checkbox option.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  WooCommerce also provides suggested privacy policy text
                  that you can add to your page. This suggested text covers
                  basic WooCommerce data handling but is generic. It does
                  not cover your specific payment gateway, plugins, or
                  business practices. It should be used as a starting point,
                  not as your complete policy.
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
                        WooCommerce allows you to configure automatic data
                        retention settings. Under WooCommerce &gt; Settings &gt;
                        Accounts &amp; Privacy, you can set how long inactive
                        accounts are retained, how long pending orders are
                        kept, and whether to anonymize completed orders after
                        a set period. These settings should match the
                        retention periods disclosed in your privacy policy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comparison table */}
                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  WordPress Privacy Tools vs What Your Policy Still Needs
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          GDPR Requirement
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          WordPress/WooCommerce Tool
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          What You Still Need
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Right to data portability
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Personal Data Export tool
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose this right in your policy
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Right to erasure
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Personal Data Erasure tool
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Explain anonymization vs deletion
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Privacy policy page
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Settings &gt; Privacy page
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Write actual, customized policy content
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Consent at checkout
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WooCommerce privacy checkbox
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Specify what consent covers in policy
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Data processor disclosures
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No built-in tool
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name every processor in your policy
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Data retention periods
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WooCommerce retention settings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose exact periods in policy
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common WooCommerce Privacy Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the most frequent privacy mistakes made by
                  WooCommerce store owners. Each one creates a compliance
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
                        Mistake: &quot;My payment gateway handles all the
                        sensitive data&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        While your payment gateway processes the card numbers,
                        WooCommerce still collects and stores extensive
                        personal data: customer names, email addresses,
                        physical addresses, phone numbers, order histories,
                        and transaction references. You are the data
                        controller for all of this data. The fact that card
                        numbers go through Stripe does not absolve you of
                        responsibility for the other personal data your
                        store collects.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;WordPress has a built-in privacy page
                        so I am covered&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        WordPress provides a privacy policy page feature and
                        WooCommerce suggests some generic text for it. But
                        this suggested text is a template, not a complete
                        policy. It does not include your specific payment
                        gateway, your specific plugins, your actual data
                        retention periods, or your contact information.
                        Using the suggested text without customization is
                        like using a blank form without filling it in.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I only sell digital products so I
                        collect less data&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Digital product stores still collect customer names,
                        email addresses, billing addresses, and payment
                        details through the checkout process. WooCommerce
                        creates customer accounts, tracks download history
                        and download counts, and stores IP addresses
                        associated with downloads for license enforcement.
                        The privacy obligations are nearly identical to
                        physical product stores, just without the shipping
                        address component.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My WooCommerce theme came with a
                        privacy policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Some WooCommerce themes include a placeholder privacy
                        policy page. Like template policies on other
                        platforms, these are generic text that does not
                        reflect your specific store setup, payment gateways,
                        plugins, or business details. A compliant privacy
                        policy must be customized to your actual data
                        practices. A theme&apos;s placeholder policy is
                        nearly guaranteed to be inaccurate for your store.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I do not need to disclose plugins&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Every plugin that collects, processes, or transmits
                        customer data is a data processor under GDPR. If
                        Mailchimp for WooCommerce syncs your customer list
                        to Mailchimp servers, that is a data transfer to a
                        third-party processor. If Jetpack sends visitor data
                        to WordPress.com servers, that is another. If your
                        Google Analytics plugin sends ecommerce event data
                        to Google, that is a third. Each must be named in
                        your policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for WooCommerce (7 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow this process to create a comprehensive privacy
                  policy for your WooCommerce store that covers all data
                  flows, satisfies GDPR and CCPA, and works with
                  WordPress&apos;s built-in privacy tools.
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
                        Go through your entire WooCommerce checkout flow as
                        a customer would. Note every field on the checkout
                        page, the registration form, and the account area.
                        Check your WooCommerce settings for additional data
                        collection: customer accounts, guest checkout,
                        marketing consent checkboxes, and analytics tracking.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Identify your payment gateway and its data handling
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Check WooCommerce &gt; Settings &gt; Payments to see
                        which payment methods are active. For each gateway,
                        document what customer data it receives and review
                        its privacy policy and DPA. If you use multiple
                        gateways (such as Stripe and PayPal), each one
                        needs separate disclosure.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        List all plugins that handle customer data
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review every active plugin in your WordPress admin
                        under Plugins &gt; Installed Plugins. For each one,
                        determine whether it collects customer data, sends
                        data to external services, or modifies how WooCommerce
                        handles data. Email marketing, analytics, security,
                        and shipping plugins are the most common ones that
                        require disclosure.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Determine your data retention periods
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Check your WooCommerce &gt; Settings &gt; Accounts &amp;
                        Privacy page for retention settings. Determine how
                        long you need to keep order records for tax purposes
                        (typically 5-7 years in most jurisdictions). Document
                        how long you keep customer accounts, abandoned carts,
                        and marketing consent records. These periods must
                        be stated in your privacy policy.
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
                        to create a policy based on your WooCommerce store&apos;s
                        specific setup. Answer questions about your data
                        practices, payment gateways, plugins, and retention
                        periods. This produces a customized policy that
                        covers all your ecommerce-specific data flows.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Publish using WordPress privacy tools
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Create a new page in WordPress and paste your
                        generated privacy policy content. Then go to Settings
                        &gt; Privacy and select this page as your privacy
                        policy page. WordPress and WooCommerce will
                        automatically link to it from login, registration,
                        and checkout pages.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      7
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add links to checkout and verify privacy tools
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Verify that your privacy policy link appears on the
                        checkout page, in your site footer, and on the
                        registration page. Enable the privacy policy
                        checkbox at checkout if required by GDPR. Test the
                        Personal Data Export and Personal Data Erasure tools
                        to make sure they work correctly with your
                        WooCommerce setup.
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
                        Generate Your WooCommerce Privacy Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Answer a few questions about your WooCommerce store
                        and get a customized, compliant privacy policy in
                        under 60 seconds. Covers order data, payment
                        gateways, plugins, and customer rights.
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
                      Does my WooCommerce store need its own privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. A standard WordPress privacy policy does not cover
                      the ecommerce-specific data that WooCommerce collects:
                      order details, payment information, shipping addresses,
                      customer account data, and purchase history. Your
                      privacy policy must specifically address all of these
                      data categories and identify your payment processor.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What data does WooCommerce collect from customers?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      WooCommerce collects order data (name, email, addresses,
                      phone, order items), payment data (processed through
                      your gateway), customer account data (username, password
                      hash, order history), session data (cart contents),
                      and analytics data. The exact data depends on your
                      checkout fields and enabled features.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need to disclose my payment gateway?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Your payment gateway is a data processor that
                      receives sensitive financial data. Under GDPR, you
                      must name each processor, explain what data it
                      receives, and link to its privacy policy. Saying
                      &quot;we use a third-party processor&quot; without
                      naming it is not sufficient.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does WooCommerce store credit card numbers?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      No. WooCommerce does not store full credit card numbers.
                      Card data is processed by your payment gateway (Stripe,
                      PayPal, etc.) and never stored in your WordPress
                      database. WooCommerce only stores transaction IDs,
                      payment method type, and the last four digits for
                      display purposes. Your privacy policy should clarify
                      this distinction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How long should I keep WooCommerce order data?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Tax laws in most jurisdictions require you to retain
                      financial transaction records for 5 to 7 years. You
                      cannot delete order data immediately upon customer
                      request if doing so would violate tax law. Your
                      privacy policy must disclose these retention periods
                      and explain why some data is kept after account
                      deletion.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do WooCommerce plugins need to be in my privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Any plugin that collects, processes, or transmits
                      customer data is a data processor under GDPR and must
                      be disclosed. This includes email marketing plugins,
                      analytics tools, shipping integrations, security
                      plugins, and any plugin that connects to an external
                      service with customer data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does WooCommerce have built-in privacy tools?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. WordPress provides personal data export and
                      erasure tools that WooCommerce extends with ecommerce
                      data. There is also a privacy policy page feature and
                      suggested privacy policy text. However, these tools
                      help with GDPR compliance processes, not with writing
                      your actual privacy policy. You still need a
                      customized policy that describes your specific data
                      practices.
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
                      href: "/privacy-policy-for-wordpress",
                      title: "Privacy Policy for WordPress",
                      desc: "WordPress-specific privacy requirements and data handling",
                    },
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
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      title: "CCPA Privacy Policy Example",
                      desc: "What a compliant California privacy disclosure looks like",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      title: "Cookie Policy for Websites",
                      desc: "GDPR cookie consent requirements and rules",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "Real consequences of operating without one",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      title: "How Often to Update Your Privacy Policy",
                      desc: "Update frequency requirements under GDPR and CCPA",
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
                  Get Your WooCommerce Privacy Policy
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Your WooCommerce store is collecting order data, payment
                  details, and customer information. Generate a customized,
                  compliant privacy policy that covers everything. Takes
                  under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and CalOPPA &middot; Customized for
                  WooCommerce &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
