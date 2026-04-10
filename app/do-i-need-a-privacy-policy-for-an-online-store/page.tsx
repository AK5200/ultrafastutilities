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
  Lock,
  Eye,
  Scale,
  ShoppingCart,
  CreditCard,
  Globe,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do I Need a Privacy Policy for My Online Store? Yes (2026) | ultrafastutilities",
  description:
    "Yes, every online store needs a privacy policy. You collect customer names, addresses, payment info, and browsing data. Learn what laws require it and how to create one fast.",
  keywords:
    "do i need a privacy policy for online store, ecommerce privacy policy required, online store privacy policy, does my shop need privacy policy, online business privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-an-online-store",
  },
  openGraph: {
    title:
      "Do I Need a Privacy Policy for My Online Store? Yes (2026) | ultrafastutilities",
    description:
      "Yes, every online store needs a privacy policy. You collect customer names, addresses, payment info, and browsing data. Learn what laws require it and how to create one fast.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-an-online-store",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Do I Need a Privacy Policy for My Online Store? | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do I Need a Privacy Policy for My Online Store? Yes (2026)",
    description:
      "Yes, every online store needs a privacy policy. You collect customer names, addresses, payment info, and browsing data.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a privacy policy for my online store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every online store that collects customer information needs a privacy policy. When customers create accounts, place orders, or even browse your site, you collect personal data such as names, email addresses, shipping addresses, payment details, and browsing behavior. Privacy laws including GDPR, CCPA, and PIPEDA require you to disclose how you handle this data. Ecommerce platforms like Shopify and WooCommerce also require sellers to have a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "What personal data does an online store collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online stores collect a wide range of personal data including customer names, email addresses, phone numbers, shipping and billing addresses, credit card or payment information, order history, browsing behavior, IP addresses, device information, and cookies. If you use marketing tools like email newsletters, abandoned cart recovery, or retargeting ads, you collect even more data. All of this must be disclosed in your privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does Shopify require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shopify's Terms of Service require all merchants to have a privacy policy that complies with applicable laws. Shopify provides a privacy policy generator tool, but the responsibility for maintaining an accurate and legally compliant policy rests with the store owner. Shopify also requires merchants to comply with GDPR if they serve EU customers and provides built-in tools for GDPR compliance.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my online store does not have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operating an online store without a privacy policy can result in legal penalties under GDPR (fines up to 20 million euros), CCPA (fines up to $7,500 per violation), and other privacy laws. Your payment processor may suspend your account. Your ecommerce platform may restrict your store. You may also lose customer trust, as shoppers increasingly look for privacy policies before making purchases.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy even if I only sell physical products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Selling physical products does not exempt you from privacy policy requirements. When customers order physical products, you collect their names, shipping addresses, billing addresses, email addresses, phone numbers, and payment information. You may also collect browsing data through analytics and cookies. The type of product you sell does not matter. What matters is whether you collect personal data, and every online store does.",
      },
    },
    {
      "@type": "Question",
      name: "Does my small online store need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The size of your store does not determine whether you need a privacy policy. GDPR applies to all businesses that process personal data of EU residents regardless of size. Your ecommerce platform and payment processor require one regardless of your revenue. Even a store with a handful of customers collects personal data through orders, and that data must be disclosed in a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "What should an ecommerce privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An ecommerce privacy policy should include what personal data you collect (names, addresses, payment info, browsing data), how you collect it (order forms, cookies, analytics), why you collect it (order fulfillment, marketing, fraud prevention), who you share it with (payment processors, shipping carriers, marketing tools), how you protect it, how long you retain it, and what rights customers have regarding their data. It should also disclose the use of cookies, tracking pixels, and any third-party integrations.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Online Store",
  description:
    "Follow these five steps to create a privacy policy that covers your online store and keeps you compliant with ecommerce regulations.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Identify all data your store collects",
      text: "Make a list of every piece of personal data your online store collects. This includes order information (names, addresses, email, phone), payment data (credit card details handled by your payment processor), account data (login credentials, order history), browsing data (pages viewed, products clicked), and marketing data (email signups, abandoned cart data). Check your ecommerce platform, payment processor, analytics tools, and marketing integrations.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "List all third-party services that receive customer data",
      text: "Identify every third-party service that receives your customers' personal data. Common ones include payment processors (Stripe, PayPal, Square), shipping carriers (USPS, UPS, FedEx), email marketing platforms (Mailchimp, Klaviyo), analytics tools (Google Analytics), advertising platforms (Facebook Pixel, Google Ads), and customer support tools. Each of these must be disclosed in your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Determine which privacy laws apply to your store",
      text: "Check which privacy laws apply based on where your customers are located, not where your business is based. If you sell to EU customers, GDPR applies. If you sell to California residents, CCPA applies. If you sell to Canadian customers, PIPEDA applies. Many other countries and states have their own privacy laws. Your privacy policy must comply with all applicable regulations.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate or draft your privacy policy",
      text: "Use a privacy policy generator to create a policy tailored to your online store. Make sure it covers all the data you identified in step one, lists all third-party services from step two, and meets the legal requirements from step three. The policy should be written in clear, plain language that your customers can understand.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Publish and link your privacy policy",
      text: "Add your privacy policy to a dedicated page on your store. Link to it from your website footer, checkout page, account registration form, and any data collection forms. Most ecommerce platforms have a built-in location for legal pages. Make sure the policy is accessible before any data collection occurs, not buried behind multiple clicks.",
    },
  ],
};

const tocSections = [
  { id: "short-answer", title: "The Short Answer" },
  { id: "data-collected", title: "Data Every Online Store Collects" },
  { id: "platform-requirements", title: "Platform Requirements" },
  { id: "payment-processors", title: "Payment Processor Requirements" },
  { id: "legal-requirements", title: "Legal Requirements by Region" },
  { id: "marketing-analytics", title: "Marketing and Analytics Data" },
  { id: "myths-debunked", title: "Common Myths Debunked" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function DoINeedAPrivacyPolicyForAnOnlineStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do I Need a Privacy Policy for My Online Store? Yes (2026)",
            description:
              "Yes, every online store needs a privacy policy. You collect customer names, addresses, payment info, and browsing data. Learn what laws require it and how to create one fast.",
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
                name: "Do I Need a Privacy Policy for My Online Store?",
                item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-an-online-store",
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
                Do I Need a Privacy Policy for My Online Store?
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShoppingCart className="w-3.5 h-3.5" />
                Ecommerce Privacy Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for My{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Online Store?
                </span>{" "}
                Yes, Every Ecommerce Site Needs One
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes. Every online store collects customer names, email
                addresses, shipping addresses, payment information, and
                browsing data. Privacy laws and platform policies require
                you to disclose how you handle all of it.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For online store owners, ecommerce entrepreneurs, Shopify
                sellers, and anyone selling products or services online.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: April 2026 &middot; Reviewed for GDPR, CCPA &amp;
                ecommerce platform compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Ecommerce Privacy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/ecommerce-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Ecommerce Policy Template
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
                    Need a privacy policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate one in 60 seconds
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
                  <strong>Yes, every online store needs a privacy policy.</strong>{" "}
                  When customers browse your store, create accounts, or place
                  orders, you collect personal data including names, email
                  addresses, shipping addresses, payment details, and browsing
                  behavior. Privacy laws like GDPR, CCPA, and PIPEDA require
                  you to disclose this data collection. Your ecommerce
                  platform (Shopify, WooCommerce, BigCommerce) and payment
                  processor (Stripe, PayPal, Square) also require it in their
                  terms of service.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                The question &quot;do I need a privacy policy for my online
                store?&quot; has a straightforward answer: yes, without
                exception. Every ecommerce business collects personal data
                from customers. Whether you sell physical products, digital
                downloads, or services, the moment a customer visits your
                store, data collection begins.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                Online stores are among the most data-intensive businesses
                on the internet. You collect names, addresses, phone numbers,
                email addresses, and payment information through orders. You
                collect browsing data, product preferences, and purchase
                history through analytics and cookies. You share customer
                data with payment processors, shipping carriers, email
                marketing platforms, and advertising networks.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly what data your online store
                collects, what your ecommerce platform and payment processor
                require, which privacy laws apply by region, how marketing
                and analytics tools add to your obligations, common myths
                that trip store owners up, and how to create a compliant
                privacy policy quickly.
              </p>

              {/* Section 1: The Short Answer */}
              <section id="short-answer" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Short Answer: Yes, Every Online Store Needs One
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If you run an online store of any kind, you need a privacy
                  policy. This applies whether you sell on Shopify,
                  WooCommerce, BigCommerce, Etsy, Amazon, or your own custom
                  platform. It applies whether you sell physical products,
                  digital goods, subscriptions, or services. It applies
                  whether you have ten customers or ten million.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The requirement comes from three separate sources. First,
                  privacy laws in nearly every jurisdiction require
                  businesses that collect personal data to have a privacy
                  policy. Second, every major ecommerce platform requires
                  merchants to have one as a condition of using the platform.
                  Third, every payment processor requires merchants to
                  maintain a privacy policy as part of their merchant
                  agreement.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  There is no scenario where an online store does not collect
                  personal data. Even if you never ask customers to create an
                  account, you still collect their name, address, and payment
                  information when they place an order. Even if you do not
                  use analytics, your web server logs IP addresses. The
                  question is not whether you need a privacy policy. The
                  question is how comprehensive it needs to be.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Yes</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Every online store needs one
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Required</p>
                    <p className="text-xs text-slate-500 mt-1">
                      By platforms, processors, and laws
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Scale className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Legal</p>
                    <p className="text-xs text-slate-500 mt-1">
                      GDPR, CCPA, PIPEDA, and more
                    </p>
                  </div>
                </div>

                {/* Mini FAQ 1 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: I only sell physical products. Do I still need one?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Selling physical products means you collect shipping
                      addresses, billing addresses, names, phone numbers, email
                      addresses, and payment information. These are all personal
                      data that must be disclosed in a privacy policy. The type
                      of product you sell does not change your privacy
                      obligations.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if I only have a few customers?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      The number of customers does not matter. GDPR applies to
                      any business processing personal data of EU residents
                      regardless of size. Your ecommerce platform requires a
                      privacy policy whether you have 5 orders or 50,000.
                      Payment processors require it in their merchant agreement
                      with no minimum threshold.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Data Every Online Store Collects */}
              <section id="data-collected" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Every Online Store Collects
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Many store owners underestimate how much personal data they
                  collect. The following table covers the data types that
                  virtually every online store handles, whether intentionally
                  or through third-party integrations.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Data Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          When Collected
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Examples
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Shared With
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Identity data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Account creation, checkout
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Full name, username, date of birth
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Payment processor, shipping carrier
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contact data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Checkout, newsletter signup
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email address, phone number
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email marketing platform, SMS provider
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Address data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Checkout, account settings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shipping address, billing address
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shipping carrier, tax service
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Payment data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Checkout
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Credit card number, PayPal email
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Payment processor (Stripe, PayPal)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Order data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Every purchase
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Items purchased, order total, order history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Fulfillment service, accounting software
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Browsing data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Every page visit
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Pages viewed, products clicked, time on site
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Analytics (Google Analytics), ad platforms
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Device and technical data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Every visit
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          IP address, browser type, device type
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Analytics, fraud prevention tools
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Marketing data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email signups, ad interactions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email preferences, ad clicks, referral source
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email platform, Facebook, Google Ads
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                        A typical online store shares customer data with 10 to
                        20 third-party services. This includes your payment
                        processor, shipping carrier, email marketing platform,
                        analytics tool, advertising network, fraud prevention
                        service, tax calculation service, customer review
                        platform, and live chat tool. Every one of these must
                        be disclosed in your privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Platform Requirements */}
              <section id="platform-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Platform Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Every major ecommerce platform requires merchants to have a
                  privacy policy. This is separate from legal requirements and
                  applies regardless of where your business or customers are
                  located.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center">
                      S
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Shopify
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Shopify&apos;s Terms of Service require all merchants to
                        maintain a privacy policy that complies with applicable
                        laws. Shopify provides a built-in privacy policy
                        generator and a dedicated legal page section in every
                        store theme. Shopify also requires GDPR compliance for
                        merchants serving EU customers and provides tools for
                        data subject access requests. Merchants who fail to
                        maintain a privacy policy risk account restrictions.
                      </p>
                      <p className="text-xs text-slate-500 mt-2">
                        <Link href="/privacy-policy-for-shopify" className="text-blue-600 hover:text-blue-700 underline">
                          Read our full Shopify privacy policy guide
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-purple-100 text-purple-700 font-bold text-sm flex items-center justify-center">
                      W
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        WooCommerce
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        WooCommerce runs on WordPress, which includes a built-in
                        privacy policy page tool. WooCommerce itself adds
                        privacy-related settings for cookie consent, data
                        retention, and customer data erasure requests. Since
                        WooCommerce is self-hosted, you bear full responsibility
                        for compliance. There is no platform team reviewing your
                        store. You must ensure your privacy policy covers all
                        WooCommerce plugins and integrations you use.
                      </p>
                      <p className="text-xs text-slate-500 mt-2">
                        <Link href="/privacy-policy-for-woocommerce" className="text-blue-600 hover:text-blue-700 underline">
                          Read our full WooCommerce privacy policy guide
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      B
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        BigCommerce
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        BigCommerce requires merchants to comply with all
                        applicable privacy laws and maintain appropriate privacy
                        disclosures. The platform provides a web pages section
                        where you can add your privacy policy and link it in
                        your store footer. BigCommerce also supports cookie
                        consent banners and provides data processing agreements
                        for GDPR compliance.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-100 text-orange-700 font-bold text-sm flex items-center justify-center">
                      E
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Etsy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Etsy&apos;s Seller Policy requires sellers to comply
                        with all applicable privacy laws. While Etsy provides
                        its own platform privacy policy for the marketplace,
                        individual sellers who collect customer data outside of
                        Etsy (through their own websites, email lists, or
                        custom orders) need their own privacy policy. Sellers
                        using Etsy Ads or Pattern websites have additional
                        privacy disclosure obligations.
                      </p>
                      <p className="text-xs text-slate-500 mt-2">
                        <Link href="/privacy-policy-for-etsy" className="text-blue-600 hover:text-blue-700 underline">
                          Read our full Etsy privacy policy guide
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm flex items-center justify-center">
                      A
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Amazon (Third-Party Sellers)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Amazon requires third-party sellers to comply with all
                        applicable privacy laws. If you operate your own website
                        alongside Amazon, you need a privacy policy for that
                        website. Amazon&apos;s Business Solutions Agreement
                        requires sellers to maintain appropriate privacy
                        practices. Sellers using Amazon&apos;s Buy with Prime
                        feature on their own websites have explicit privacy
                        policy requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Did you know box 2 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Shopify alone powers over 4 million online stores
                        worldwide. Every single one of those stores is required
                        by Shopify&apos;s Terms of Service to have a privacy
                        policy. Yet studies show that a significant percentage
                        of small Shopify stores either lack a privacy policy
                        entirely or use one that does not accurately reflect
                        their data practices.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Payment Processor Requirements */}
              <section id="payment-processors" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Payment Processor Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Your payment processor is a separate entity from your
                  ecommerce platform, and it has its own privacy policy
                  requirements. If you accept online payments, your merchant
                  agreement almost certainly requires a privacy policy.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold text-slate-800">Stripe</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Stripe&apos;s Services Agreement requires merchants to
                      maintain a privacy policy that accurately discloses how
                      customer data is collected, used, and shared. Stripe
                      processes sensitive payment data on your behalf, and your
                      privacy policy must inform customers that their payment
                      information is handled by Stripe. Failure to maintain a
                      compliant privacy policy can result in account
                      restrictions or termination.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold text-slate-800">PayPal</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      PayPal&apos;s User Agreement requires merchants to post a
                      privacy policy on their website that complies with
                      applicable laws. PayPal specifically requires that your
                      privacy policy disclose the sharing of customer
                      information with PayPal for payment processing. PayPal
                      may review your website for compliance and can limit or
                      suspend your account if a privacy policy is missing.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold text-slate-800">Square</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Square&apos;s General Terms of Service require merchants
                      to comply with all applicable privacy laws and maintain
                      appropriate privacy disclosures. If you use Square for
                      online payments, your privacy policy must disclose that
                      payment data is processed through Square. Square&apos;s
                      terms also require you to obtain appropriate consent for
                      data collection from your customers.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 my-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">
                        Important
                      </p>
                      <p className="text-sm text-slate-700">
                        Your payment processor handles the most sensitive
                        customer data: credit card numbers, bank account
                        details, and billing information. Even though the
                        processor handles the actual payment data, your privacy
                        policy must disclose that this data is collected and
                        processed by the third-party provider. Customers have a
                        right to know who handles their financial information.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Legal Requirements by Region */}
              <section id="legal-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Legal Requirements by Region
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Privacy laws are based on where your customers are located,
                  not where your business is based. If you sell to customers
                  in multiple countries, multiple privacy laws may apply
                  simultaneously.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Region
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Law
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Key Requirement
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Penalty for Non-Compliance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          European Union
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          GDPR
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Privacy policy, consent for cookies, data subject rights, lawful basis for processing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Up to 20 million euros or 4% of global revenue
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          California, USA
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          CCPA / CPRA
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Privacy policy, right to opt out of data sale, data access and deletion rights
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Up to $7,500 per intentional violation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Canada
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          PIPEDA
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Privacy policy, meaningful consent, data breach reporting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Up to $100,000 CAD per violation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          United Kingdom
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          UK GDPR
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Same as EU GDPR, enforced by the ICO
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Up to 17.5 million GBP or 4% of global revenue
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Australia
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Privacy Act
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Privacy policy, Australian Privacy Principles compliance
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Up to $50 million AUD per serious violation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Brazil
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          LGPD
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Privacy policy, consent for data processing, data protection officer
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Up to 2% of revenue, capped at 50 million BRL
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  If your online store ships internationally or accepts orders
                  from customers in multiple countries, you are likely subject
                  to several of these laws simultaneously. Your privacy policy
                  should be written to satisfy the strictest applicable
                  requirements, which in most cases means GDPR compliance.
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
                        As of 2026, over 140 countries have enacted some form of
                        data protection or privacy legislation. If your online
                        store is accessible from the internet and you do not
                        geo-block specific regions, you are potentially subject
                        to privacy laws in every country where a customer places
                        an order. The practical approach is to comply with GDPR
                        as a baseline, since it is one of the most comprehensive
                        privacy frameworks in the world.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Marketing and Analytics Data */}
              <section id="marketing-analytics" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Marketing and Analytics Data
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Beyond order and payment data, online stores collect
                  significant amounts of data through marketing and analytics
                  tools. This data is often overlooked in privacy policies, but
                  it must be disclosed.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Analytics Tools
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Google Analytics:</strong> Collects page views,
                      session duration, bounce rate, device type, browser,
                      operating system, geographic location, and referral
                      source. Uses cookies to track users across sessions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Hotjar or similar heatmap tools:</strong> Records
                      mouse movements, clicks, scrolls, and sometimes screen
                      recordings of user sessions. This captures detailed
                      browsing behavior.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Platform analytics:</strong> Shopify, WooCommerce,
                      and other platforms have built-in analytics that track
                      customer behavior, conversion rates, and product
                      performance.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Marketing and Advertising
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Facebook Pixel / Meta Pixel:</strong> Tracks page
                      views, add-to-cart events, purchases, and other
                      conversion events. Sends this data to Meta for ad
                      targeting and retargeting.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Google Ads conversion tracking:</strong> Tracks
                      when a customer completes a purchase after clicking a
                      Google ad. Uses cookies and may collect personal data for
                      remarketing lists.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Email marketing (Mailchimp, Klaviyo):</strong>{" "}
                      Collects email addresses, names, purchase history, and
                      engagement data. Tracks email opens, clicks, and
                      conversions. Often used for abandoned cart recovery,
                      which tracks browsing behavior.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Retargeting and remarketing:</strong> Uses cookies
                      and tracking pixels to show ads to people who have
                      visited your store. This means customer browsing data is
                      shared with advertising platforms.
                    </span>
                  </li>
                </ul>

                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 my-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">
                        Important for GDPR compliance
                      </p>
                      <p className="text-sm text-slate-700">
                        Under GDPR, most marketing cookies and tracking pixels
                        require explicit opt-in consent before they are loaded.
                        Your privacy policy must disclose these tools, and you
                        need a cookie consent banner that allows EU visitors to
                        accept or reject non-essential cookies. Loading
                        Facebook Pixel or Google Analytics before obtaining
                        consent is a GDPR violation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Common Myths Debunked */}
              <section id="myths-debunked" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Myths Debunked
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These five myths are the most common reasons online store
                  owners skip or delay creating a privacy policy. Every one
                  of them is wrong.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My store is too small to need a privacy
                        policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Business size does not determine privacy policy
                        requirements. GDPR applies to any business processing
                        personal data of EU residents, regardless of revenue or
                        employee count. Your ecommerce platform requires a
                        privacy policy whether you make $100 or $100,000 per
                        month. Even a store with a single product and a handful
                        of orders collects names, addresses, and payment data
                        that must be disclosed.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My ecommerce platform&apos;s privacy policy
                        covers my store&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Shopify&apos;s privacy policy covers Shopify as a
                        platform. It does not cover your store. WooCommerce and
                        WordPress have their own privacy policies for their
                        services. Your store is your business, and you are the
                        data controller for your customers&apos; personal data.
                        You need your own privacy policy that specifically
                        describes your data practices, your third-party
                        integrations, and your contact information.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I do not collect data because my payment
                        processor handles everything&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        While your payment processor handles the actual credit
                        card processing, you still collect customer names,
                        email addresses, shipping addresses, order details,
                        and browsing data. You also initiate the data
                        collection by presenting the checkout form. Under
                        privacy law, you are the data controller and the
                        payment processor is a data processor acting on your
                        behalf. You are responsible for disclosing the
                        entire data flow, including the processor&apos;s role.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I only sell in the US, so international
                        privacy laws do not apply&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Unless you actively geo-block international visitors,
                        customers from the EU, Canada, the UK, Australia, and
                        other regulated regions can access and purchase from
                        your store. GDPR applies when you process data of EU
                        residents, regardless of where your business is located.
                        Many US states also have their own privacy laws. If
                        you sell online, assume that multiple privacy laws
                        apply to your business.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I will add a privacy policy later when my
                        store grows&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Privacy policy requirements apply from the moment you
                        start collecting personal data, which is the moment
                        your first customer visits your store. Waiting until
                        your store grows means operating in violation of
                        platform requirements and privacy laws from day one.
                        It also means retroactively notifying customers about
                        data practices that were never disclosed. Create your
                        privacy policy before you launch, not after.
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
                      Do I need a privacy policy for my online store?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Every online store collects personal data through
                      orders, account creation, browsing, and marketing tools.
                      Privacy laws like GDPR and CCPA require you to disclose
                      this. Your ecommerce platform and payment processor also
                      require a privacy policy in their terms of service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What personal data does an online store collect?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Online stores collect names, email addresses, phone
                      numbers, shipping and billing addresses, payment
                      information, order history, browsing behavior, IP
                      addresses, device data, and marketing preferences. If
                      you use analytics or advertising tools, you collect even
                      more data through cookies and tracking pixels.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Shopify require a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Shopify&apos;s Terms of Service require all
                      merchants to have a privacy policy that complies with
                      applicable laws. Shopify provides a privacy policy
                      generator, but you are responsible for keeping it
                      accurate and up to date. Learn more in our{" "}
                      <Link href="/do-i-need-a-privacy-policy-for-shopify-store" className="text-blue-600 hover:text-blue-700 underline">
                        Shopify privacy policy guide
                      </Link>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if my online store has no privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      You risk legal penalties under GDPR (up to 20 million
                      euros), CCPA (up to $7,500 per violation), and other
                      privacy laws. Your payment processor may suspend your
                      account. Your ecommerce platform may restrict your store.
                      You may also lose customer trust. Read more about{" "}
                      <Link href="/what-happens-without-a-privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                        what happens without a privacy policy
                      </Link>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy if I only sell physical products?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Selling physical products means you collect shipping
                      addresses, billing addresses, names, phone numbers, email
                      addresses, and payment information. The type of product
                      does not affect privacy requirements. What matters is
                      whether you collect personal data, and every online store
                      does.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my small online store need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Store size does not determine privacy requirements.
                      GDPR applies regardless of business size. Your ecommerce
                      platform and payment processor require one regardless of
                      your revenue. Even a store with a handful of customers
                      collects personal data that must be disclosed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What should an ecommerce privacy policy include?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your privacy policy should cover what data you collect,
                      how you collect it, why you collect it, who you share it
                      with (payment processors, shipping carriers, marketing
                      tools), how you protect it, how long you retain it, and
                      what rights customers have. It should also disclose
                      cookies, tracking pixels, and all third-party
                      integrations.
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
                      desc: "Complete guide to ecommerce privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-shopify",
                      title: "Privacy Policy for Shopify",
                      desc: "Shopify-specific privacy policy guide",
                    },
                    {
                      href: "/privacy-policy-for-woocommerce",
                      title: "Privacy Policy for WooCommerce",
                      desc: "WooCommerce privacy compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-etsy",
                      title: "Privacy Policy for Etsy",
                      desc: "Etsy seller privacy policy requirements",
                    },
                    {
                      href: "/ecommerce-privacy-policy-template",
                      title: "Ecommerce Privacy Policy Template",
                      desc: "Ready-to-use template for online stores",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-shopify-store",
                      title: "Do I Need a Privacy Policy for Shopify?",
                      desc: "Shopify-specific privacy policy requirements",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "Real consequences of operating without one",
                    },
                    {
                      href: "/generate",
                      title: "Generate Your Privacy Policy",
                      desc: "Create a compliant policy in under 60 seconds",
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
                  Your Online Store Needs a Privacy Policy. Get One Now.
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a missing privacy policy put your store at legal
                  risk or violate your platform&apos;s terms of service.
                  Generate a compliant policy tailored to your ecommerce
                  business in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, PIPEDA &amp; ecommerce platform requirements &middot;
                  Customized for online stores &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
