import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  Ban,
  Info,
  Copy,
  ClipboardList,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Shopify Privacy Policy Template (Free, Store-Ready) (2026) | ultrafastutilities",
  description:
    "Free Shopify privacy policy template customized for online stores. Covers Shopify Payments, customer data, order processing, email marketing, abandoned cart emails, and app disclosures.",
  keywords:
    "shopify privacy policy template, shopify privacy policy, shopify store privacy policy, shopify privacy policy example, free shopify privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/shopify-privacy-policy-template",
  },
  openGraph: {
    title:
      "Shopify Privacy Policy Template (Free, Store-Ready) (2026) | ultrafastutilities",
    description:
      "Free Shopify privacy policy template customized for online stores. Covers Shopify Payments, customer data, order processing, email marketing, abandoned cart emails, and app disclosures.",
    url: "https://ultrafastutilities.com/shopify-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shopify Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shopify Privacy Policy Template (Free, Store-Ready) (2026)",
    description:
      "Free Shopify privacy policy template customized for online stores. Covers Shopify Payments, customer data, order processing, email marketing, and app disclosures.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does every Shopify store need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every Shopify store collects personal data through customer accounts, order processing, email signups, and cookies. Privacy laws like GDPR, CCPA, and PIPEDA require any business that collects personal data to have a privacy policy. Shopify itself requires stores to have a privacy policy in its Terms of Service. Even if you only sell to customers in one country, you need a privacy policy that accurately describes your data practices.",
      },
    },
    {
      "@type": "Question",
      name: "What must a Shopify privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Shopify privacy policy must include: what personal data you collect from customers, how you use that data, what third parties receive customer data (including Shopify itself, payment processors, shipping carriers, and apps), how you handle cookies and tracking, how customers can access or delete their data, your data retention periods, your contact information, and the effective date. Stores selling to EU customers must also include GDPR-specific sections like legal basis for processing and data subject rights.",
      },
    },
    {
      "@type": "Question",
      name: "Does Shopify provide a default privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify provides a basic privacy policy template in Settings > Policies that you can use as a starting point. However, the default template is generic and does not cover your specific apps, marketing practices, or third-party integrations. You need to customize it to reflect the actual data practices of your store, including every app you have installed, your email marketing tools, your analytics setup, and any other services that process customer data.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to list every Shopify app in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should disclose any app that processes customer personal data. This includes email marketing apps like Klaviyo, review apps like Judge.me, subscription apps like ReCharge, and any app that tracks customer behavior or accesses order data. You do not need to list apps that only affect your admin experience and never touch customer data. When in doubt, check the app's own privacy policy to see what data it accesses.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a privacy policy to my Shopify store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to your Shopify Admin, then Settings, then Policies. Paste your privacy policy into the Privacy Policy field. Shopify automatically creates a page at yourstore.com/policies/privacy-policy and adds it to your checkout footer. You can also add a link to your privacy policy in your store's footer navigation by going to Online Store > Navigation and adding it to the Footer menu.",
      },
    },
    {
      "@type": "Question",
      name: "Is a free Shopify privacy policy template legally valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A free template can be legally valid if you customize it to accurately describe your store's actual data practices. The legal validity depends on accuracy and completeness, not whether you paid for the template. You must replace all placeholders, add your specific apps and integrations, and ensure every data flow is disclosed. Stores handling sensitive categories or operating in heavily regulated industries should have their policy reviewed by a legal professional.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my Shopify store's privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Update your privacy policy whenever your data practices change. This includes installing new apps that access customer data, adding new payment processors, changing email marketing providers, starting to sell in new regions, or modifying your cookie and tracking setup. At minimum, review your policy quarterly since Shopify apps update their own data practices frequently. Always update the effective date when you make changes.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Shopify Store",
  description:
    "Follow these six steps to create and publish a complete privacy policy for your Shopify store that covers customer data, payment processing, apps, and compliance requirements.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your installed Shopify apps",
      text: "Go to your Shopify Admin and review every installed app. For each app, check what customer data it accesses: email addresses, order history, browsing behavior, or personal details. Apps like Klaviyo, Judge.me, ReCharge, and Facebook Channel all process customer data and must be disclosed in your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "List all payment processors you accept",
      text: "Identify every payment method enabled in your store. This typically includes Shopify Payments (powered by Stripe), PayPal, Shop Pay, and any buy-now-pay-later services like Klarna or Afterpay. Each payment processor handles sensitive financial data and must be disclosed with a link to their own privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Map your customer data flows",
      text: "Document every way you collect customer data: checkout forms, account registration, email signups, abandoned cart recovery, contact forms, and analytics tracking. For each data point, note where it is stored, who can access it, and whether it is shared with any third party. This mapping drives the content of your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Customize the template with your store details",
      text: "Replace every placeholder in the template with your actual store name, data practices, app disclosures, and contact information. Remove sections that do not apply to your store. Add any additional disclosures for practices unique to your business, such as loyalty programs, referral systems, or wholesale accounts.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add the policy to your Shopify Admin",
      text: "Go to Settings > Policies in your Shopify Admin. Paste your completed privacy policy into the Privacy Policy field. Shopify automatically generates a page at /policies/privacy-policy and links it in your checkout footer. Also add a link in your footer navigation under Online Store > Navigation.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Verify visibility and set a review schedule",
      text: "Visit your live store and confirm the privacy policy link appears in both the footer and the checkout page. Click through to verify the full text renders correctly. Set a calendar reminder to review the policy quarterly or whenever you install a new app, add a payment method, or change your marketing tools.",
    },
  ],
};

const tocSections = [
  { id: "what-template-must-include", title: "What Your Template Must Include" },
  { id: "full-template-preview", title: "Full Template Preview" },
  { id: "shopify-data-flows", title: "Shopify-Specific Data Flows" },
  { id: "payment-processor-disclosures", title: "Payment Processor Disclosures" },
  { id: "app-disclosures", title: "App Disclosures" },
  { id: "where-to-add-in-shopify", title: "Where to Add in Shopify Admin" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function ShopifyPrivacyPolicyTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Shopify Privacy Policy Template (Free, Store-Ready) (2026)",
            description:
              "Free Shopify privacy policy template customized for online stores. Covers Shopify Payments, customer data, order processing, email marketing, abandoned cart emails, and app disclosures.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-27",
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
                name: "Privacy Policy for Shopify",
                item: "https://ultrafastutilities.com/privacy-policy-for-shopify",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Shopify Privacy Policy Template",
                item: "https://ultrafastutilities.com/shopify-privacy-policy-template",
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
              <Link
                href="/privacy-policy-for-shopify"
                className="hover:text-blue-600 transition-colors"
              >
                Shopify Privacy Policy
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">
                Template
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Copy className="w-3.5 h-3.5" />
                Free Template
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Shopify Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
                : Free Template for Shopify Store Owners
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A free, store-ready privacy policy template built
                specifically for Shopify stores. Covers customer data,
                order processing, Shopify Payments, email marketing,
                abandoned cart emails, and third-party app disclosures.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Shopify store owners who need a compliant privacy
                policy without hiring a lawyer or starting from scratch.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                Shopify compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-shopify"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Full Shopify Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ClipboardList className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
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
                    Need a custom policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate one tailored to your Shopify store
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
                <span>16 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>A Shopify privacy policy must include: what customer data your store collects (names, emails, addresses, payment info), how you use that data for order processing and marketing, which third parties receive data (Shopify, payment processors, shipping carriers, apps), your cookie and tracking practices, how customers can access or delete their data, and your contact information.</strong>{" "}
                  Stores selling to EU customers must also include GDPR
                  sections covering legal basis for processing and data
                  subject rights. Stores with California customers need
                  CCPA disclosures about categories of personal information
                  collected and the right to opt out.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Setting up a Shopify store is straightforward, but writing
                a privacy policy that covers all your data practices is
                not. Your store collects customer data through checkout,
                account registration, email signups, abandoned cart
                recovery, cookies, and every third-party app you install.
                Each of these data flows needs to be disclosed in your
                privacy policy.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                This page provides a complete, free template built
                specifically for Shopify stores. It covers every section
                your store needs, including Shopify-specific data flows,
                payment processor disclosures, and app-by-app data
                disclosures. If you need the full context on why Shopify
                stores need privacy policies, read the{" "}
                <Link
                  href="/privacy-policy-for-shopify"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  complete Shopify privacy policy guide
                </Link>{" "}
                first.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                If you run a Shopify app rather than a store, see the{" "}
                <Link
                  href="/privacy-policy-for-shopify-app"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  privacy policy for Shopify apps
                </Link>{" "}
                guide instead. The requirements for app developers are
                different from those for store owners.
              </p>

              {/* Section 1: What Your Template Must Include */}
              <section id="what-template-must-include" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Your Template Must Include
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Every Shopify store privacy policy needs to cover
                  specific areas. Privacy laws require these sections,
                  and customers increasingly look for them before making
                  a purchase. Here is the complete checklist of required
                  and recommended sections for Shopify stores.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Required Sections
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Customer data collection:</strong> What personal
                      data you collect from customers, including names, email
                      addresses, shipping addresses, phone numbers, payment
                      information, and account details.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Order processing data:</strong> How customer data
                      is used to fulfill orders, process payments, calculate
                      taxes, arrange shipping, and send order confirmations
                      and tracking updates.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Payment processor disclosures:</strong> Which
                      payment processors handle customer financial data,
                      including Shopify Payments, PayPal, Shop Pay, and any
                      buy-now-pay-later services like Klarna or Afterpay.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Third-party app disclosures:</strong> Every
                      installed Shopify app that accesses customer data must
                      be disclosed, including what data the app processes
                      and why.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Marketing and email practices:</strong> How you
                      use customer data for email marketing, abandoned cart
                      recovery emails, promotional campaigns, and how
                      customers can opt out.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cookies and tracking:</strong> What cookies your
                      store uses, including Shopify analytics, Google Analytics,
                      Facebook Pixel, and any other tracking scripts installed
                      on your store.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Customer rights and data deletion:</strong> How
                      customers can request access to their data, correct
                      inaccurate information, or request deletion. Include
                      your process for handling these requests.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Contact information:</strong> A way for customers
                      to reach you with privacy questions. An email address is
                      the minimum requirement.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Recommended Additional Sections
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>GDPR compliance section:</strong> Legal basis for
                      processing, data retention periods, and EU customer rights
                      including access, rectification, and erasure. Required if
                      you sell to EU customers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>CCPA compliance section:</strong> Categories of
                      personal information collected, the right to know, the
                      right to delete, and the right to opt out of data sales.
                      Required if you sell to California residents.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data retention policy:</strong> How long you keep
                      customer data after an order is fulfilled, how long
                      account data is retained, and when data is deleted.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Shipping carrier disclosures:</strong> Which
                      shipping carriers receive customer names and addresses,
                      and links to their privacy policies.
                    </span>
                  </li>
                </ul>

                {/* Did you know box 1 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Shopify stores typically share customer data with
                        between 5 and 15 third parties without the store
                        owner realizing it. Every installed app, every
                        payment processor, every shipping carrier, and
                        every analytics or marketing tool is a separate
                        third party that your privacy policy must disclose.
                        Run an audit of your installed apps before writing
                        your policy to avoid missing any.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Full Template Preview */}
              <section id="full-template-preview" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Full Template Preview
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Below is the complete privacy policy template with each
                  section shown. Bracketed text like [Your Store Name]
                  indicates placeholders you need to replace with your
                  specific details. Remove any sections that do not apply
                  to your store.
                </p>

                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                  {/* Template Header */}
                  <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      Shopify Store Privacy Policy Template
                    </span>
                  </div>

                  <div className="p-5 space-y-6 text-sm text-slate-700 leading-relaxed">
                    {/* Section: Title */}
                    <div>
                      <p className="font-bold text-slate-900 text-base mb-2">
                        Privacy Policy for [Your Store Name]
                      </p>
                      <p className="text-slate-500 text-xs">
                        Effective Date: [Date]
                      </p>
                    </div>

                    {/* Section: Introduction */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        1. Introduction
                      </p>
                      <p>
                        This privacy policy describes how [Your Store Name]
                        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                        collects, uses, stores, and shares personal data
                        when you visit our online store at [yourstore.com],
                        create an account, place an order, or interact with
                        us in any way. Our store is built on the Shopify
                        platform. By using our store, you agree to the data
                        practices described in this policy.
                      </p>
                    </div>

                    {/* Section: Customer Data Collection */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        2. Customer Data We Collect
                      </p>
                      <p className="mb-2">
                        We collect the following types of personal data:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>Name, email address, phone number, and shipping/billing address (provided during checkout or account creation)</li>
                        <li>Payment information (processed securely by our payment processors; we do not store credit card numbers)</li>
                        <li>Order history, product preferences, and shopping cart contents</li>
                        <li>IP address, browser type, device information, and browsing behavior on our store</li>
                        <li>Email marketing preferences and subscription status</li>
                        <li>[Any additional data types specific to your store]</li>
                      </ul>
                    </div>

                    {/* Section: How We Use Data */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        3. How We Use Your Data
                      </p>
                      <p className="mb-2">
                        We use the collected data for the following purposes:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>To process and fulfill your orders, including payment processing, shipping, and delivery updates</li>
                        <li>To create and manage your customer account</li>
                        <li>To send order confirmations, shipping notifications, and customer service communications</li>
                        <li>To send marketing emails, promotional offers, and abandoned cart reminders (with your consent)</li>
                        <li>To improve our store, products, and customer experience through analytics</li>
                        <li>To comply with legal obligations including tax reporting and fraud prevention</li>
                      </ul>
                    </div>

                    {/* Section: Third-Party Sharing */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        4. Third-Party Data Sharing
                      </p>
                      <p className="mb-2">
                        We share customer data with the following categories of third parties:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>Shopify:</strong> Our ecommerce platform that processes and stores order data on our behalf</li>
                        <li><strong>Payment processors:</strong> [Shopify Payments, PayPal, Shop Pay, Klarna, Afterpay] to process transactions securely</li>
                        <li><strong>Shipping carriers:</strong> [USPS, UPS, FedEx, DHL] to deliver your orders</li>
                        <li><strong>Email marketing:</strong> [e.g., Klaviyo, Shopify Email] to send marketing communications</li>
                        <li><strong>Analytics:</strong> [e.g., Google Analytics] to understand store traffic and customer behavior</li>
                        <li><strong>Shopify apps:</strong> [List your installed apps that access customer data]</li>
                      </ul>
                      <p className="mt-2">
                        We do not sell your personal data to third parties.
                      </p>
                    </div>

                    {/* Section: Cookies */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        5. Cookies and Tracking
                      </p>
                      <p>
                        Our store uses cookies and similar tracking
                        technologies. Shopify sets essential cookies for
                        store functionality, cart management, and checkout.
                        We also use [Google Analytics, Facebook Pixel, or
                        other tracking tools] to understand how customers
                        interact with our store. You can manage cookie
                        preferences through your browser settings. Disabling
                        cookies may affect store functionality, including
                        the ability to add items to your cart and complete
                        checkout.
                      </p>
                    </div>

                    {/* Section: Data Storage */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        6. Data Storage and Security
                      </p>
                      <p>
                        Your data is stored on Shopify&apos;s secure servers.
                        Shopify uses industry-standard encryption and
                        security measures to protect your data. Payment
                        information is processed through PCI-DSS compliant
                        payment processors and is not stored on our servers.
                        We retain your order data for [specify period, e.g.,
                        &quot;7 years for tax and legal compliance&quot;]
                        and account data for as long as your account is
                        active.
                      </p>
                    </div>

                    {/* Section: Customer Rights */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        7. Your Rights and Data Deletion
                      </p>
                      <p>
                        You have the right to access, correct, or delete
                        your personal data. To request a copy of your data,
                        update inaccurate information, or request deletion,
                        contact us at [your email]. We will respond to your
                        request within 30 days. Note that we may need to
                        retain certain data for legal compliance, such as
                        order records for tax purposes.
                      </p>
                    </div>

                    {/* Section: GDPR */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        8. GDPR Compliance (EU Customers)
                      </p>
                      <p>
                        If you are located in the European Union, we process
                        your data under the legal basis of [contract
                        performance for order fulfillment / legitimate
                        interest for fraud prevention / consent for
                        marketing emails]. You have the right to access,
                        rectify, erase, restrict processing, and port your
                        data. You also have the right to withdraw consent
                        for marketing at any time. To exercise these rights,
                        contact us at [your email].
                      </p>
                    </div>

                    {/* Section: Changes */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        9. Changes to This Policy
                      </p>
                      <p>
                        We may update this privacy policy from time to time
                        to reflect changes in our data practices, new apps
                        or services, or legal requirements. Changes will be
                        posted on this page with an updated effective date.
                        We encourage you to review this policy periodically.
                      </p>
                    </div>

                    {/* Section: Contact */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        10. Contact Us
                      </p>
                      <p>
                        If you have questions about this privacy policy or
                        how we handle your data, contact us at: [your email
                        address] or through our contact page at
                        [yourstore.com/contact].
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mt-6 mb-4">
                  This template gives you the foundation. The sections
                  below walk you through Shopify-specific data flows,
                  payment processor disclosures, and app-by-app data
                  disclosures you should add to customize the template
                  for your store.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I use Shopify&apos;s default privacy policy
                      template instead of this one?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Shopify&apos;s built-in template in Settings &gt;
                      Policies is a starting point, but it is generic. It
                      does not cover your specific apps, marketing tools,
                      or payment processors. This template includes those
                      Shopify-specific sections so you can disclose your
                      actual data practices accurately. You can paste this
                      template into the Shopify Policies field directly.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need a separate privacy policy if I already
                      have terms and conditions?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Terms and conditions and privacy policies serve
                      different legal purposes. Your terms of service govern
                      the commercial relationship with customers, while your
                      privacy policy governs how you handle their personal
                      data. Privacy laws specifically require a separate
                      privacy policy document. Combining them into one
                      page is not recommended.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Shopify-Specific Data Flows */}
              <section id="shopify-data-flows" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Shopify-Specific Data Flows
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Understanding who collects what data in a Shopify store
                  is critical for writing an accurate privacy policy. Data
                  collection in a Shopify store is split between three
                  parties: Shopify itself, you as the store owner, and
                  third-party apps. The table below breaks down which
                  party collects which data types.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Data Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[23%]">
                          Shopify (Platform)
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[23%]">
                          Store Owner (You)
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[24%]">
                          Third-Party Apps
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Customer name and email
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Stored in Shopify database
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Collected via checkout and account forms
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Accessed by email marketing and review apps
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Shipping address
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Stored for order fulfillment
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shared with shipping carriers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Accessed by fulfillment and dropshipping apps
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Payment information
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Processed via Shopify Payments (Stripe)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Never stored; handled by payment processor
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Not accessible to third-party apps
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Order history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Stored in Shopify database
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Used for customer service and reporting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Accessed by analytics, review, and subscription apps
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Browsing behavior
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Tracked via Shopify analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Used for abandoned cart recovery
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Tracked by analytics pixels and marketing apps
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Email marketing data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shopify Email stores subscriber lists
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Managed through email signup forms
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Synced to Klaviyo, Mailchimp, or similar
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Cookies and device data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Essential cookies for cart and checkout
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Configured through theme and settings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Set by Google Analytics, Facebook Pixel, etc.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy needs to account for all three
                  columns. Many store owners only disclose what they
                  personally collect, forgetting that Shopify and
                  installed apps also process customer data on their
                  behalf. For a broader look at ecommerce privacy
                  requirements, see the{" "}
                  <Link
                    href="/privacy-policy-for-ecommerce"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    ecommerce privacy policy guide
                  </Link>
                  .
                </p>
              </section>

              {/* Section 4: Payment Processor Disclosures */}
              <section id="payment-processor-disclosures" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Payment Processor Disclosures
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Every payment method you accept involves a third-party
                  processor that handles sensitive financial data. Your
                  privacy policy must disclose each payment processor and
                  link to their privacy policy. Below are the most common
                  payment processors used by Shopify stores.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      name: "Shopify Payments (powered by Stripe)",
                      data: "Credit/debit card numbers, billing address, transaction amounts, and fraud detection data",
                      note: "Enabled by default on most Shopify stores. Shopify Payments is built on Stripe's infrastructure. Both Shopify's and Stripe's privacy policies apply.",
                    },
                    {
                      name: "PayPal",
                      data: "Email address, name, billing address, and transaction details through PayPal's platform",
                      note: "Customers who choose PayPal are redirected to PayPal's site to complete payment. PayPal's own privacy policy governs data collected on their platform.",
                    },
                    {
                      name: "Stripe (direct integration)",
                      data: "Card details, billing information, IP address, and device data for fraud prevention",
                      note: "Some stores use Stripe directly instead of through Shopify Payments. If you use both, disclose both.",
                    },
                    {
                      name: "Shop Pay",
                      data: "Email, shipping address, and payment details stored in the customer's Shop account",
                      note: "Shop Pay is Shopify's accelerated checkout. Customer data is stored in their Shop account and shared with your store during checkout.",
                    },
                    {
                      name: "Klarna",
                      data: "Name, address, email, date of birth, and financial assessment data for buy-now-pay-later decisions",
                      note: "Klarna performs its own credit assessment. Customers who choose Klarna share additional personal data directly with Klarna.",
                    },
                    {
                      name: "Afterpay",
                      data: "Name, address, email, phone number, and payment schedule data for installment plans",
                      note: "Similar to Klarna, Afterpay collects additional data for installment payment eligibility. Their own privacy policy governs this collection.",
                    },
                  ].map((processor) => (
                    <div
                      key={processor.name}
                      className="rounded-xl border border-slate-200 bg-white p-5"
                    >
                      <h3 className="font-semibold text-slate-800 mb-2">
                        {processor.name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-2">
                        <strong>Data processed:</strong> {processor.data}
                      </p>
                      <p className="text-sm text-slate-500">
                        {processor.note}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-slate-700 leading-7 mt-6 mb-4">
                  Only include the payment processors that are active in
                  your store. Check your Shopify Admin under Settings &gt;
                  Payments to see which providers are enabled. If you
                  accept manual payment methods like bank transfers or
                  cash on delivery, disclose how that data is handled
                  separately.
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
                        Shopify Payments is powered by Stripe, which means
                        two separate companies process your customers&apos;
                        payment data. Your privacy policy should reference
                        both Shopify&apos;s and Stripe&apos;s privacy
                        policies. Many store owners only mention Shopify
                        and miss the Stripe disclosure, which can be a
                        compliance gap under GDPR.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: App Disclosures */}
              <section id="app-disclosures" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  App Disclosures
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Every Shopify app that accesses customer data needs to
                  be disclosed in your privacy policy. Below are the most
                  common Shopify apps and what customer data they typically
                  access. Include the ones you use and remove the rest.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          App
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Purpose
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Customer Data Accessed
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Privacy Note
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Klaviyo
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email and SMS marketing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email, name, order history, browsing behavior, cart contents
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Syncs customer data for segmentation and automated flows
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Oberlo / DSers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Dropshipping fulfillment
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Customer name, shipping address, order details
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Shares order data with AliExpress suppliers
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Judge.me
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product reviews
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email, name, order history, review content
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Sends review request emails to customers after purchase
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          ReCharge
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Subscription management
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email, name, payment info (tokenized), order and subscription history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Manages recurring billing and stores subscription preferences
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Privy
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Pop-ups and email capture
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email, browsing behavior, cart contents
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Tracks on-site behavior to trigger pop-ups and collect emails
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Google Shopping
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product feed and ads
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product data, conversion tracking, customer purchase events
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Sends purchase data to Google for ad optimization
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Facebook Channel
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Facebook and Instagram commerce
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product data, customer browsing events, purchase conversions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Installs Meta Pixel for tracking and shares catalog data
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  This is not an exhaustive list. Go to your Shopify
                  Admin &gt; Apps and review every installed app. For each
                  app, check its permissions to see what customer data it
                  can access. If an app reads customer data, it belongs
                  in your privacy policy. For more on Shopify app privacy
                  requirements, see the{" "}
                  <Link
                    href="/privacy-policy-for-shopify-app"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    privacy policy for Shopify apps
                  </Link>{" "}
                  guide.
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
                        Under GDPR, every third-party app that processes
                        customer data on your behalf is considered a
                        &quot;data processor,&quot; and you are the
                        &quot;data controller.&quot; This means you are
                        legally responsible for ensuring each app handles
                        customer data appropriately. If a Shopify app
                        mishandles customer data, your store is liable,
                        not just the app developer. This is why disclosing
                        every app in your privacy policy matters.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Where to Add in Shopify Admin */}
              <section id="where-to-add-in-shopify" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Where to Add in Shopify Admin
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Once your privacy policy is ready, follow these steps
                  to add it to your Shopify store so it is visible to
                  customers during checkout and from your store footer.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Open Settings in your Shopify Admin
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Log in to your Shopify Admin at
                        yourstore.myshopify.com/admin. Click
                        &quot;Settings&quot; in the bottom-left corner of the
                        sidebar. This opens the store settings panel.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Navigate to Policies
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        In the Settings menu, scroll down and click
                        &quot;Policies.&quot; This page contains fields for
                        your privacy policy, refund policy, shipping policy,
                        and terms of service.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Paste your privacy policy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Click the &quot;Privacy policy&quot; field and paste
                        your completed privacy policy. Shopify&apos;s editor
                        supports rich text formatting, so your headings,
                        lists, and links will render correctly. Review the
                        formatting to make sure everything looks right.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Save and verify the auto-generated page
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Click &quot;Save&quot; at the top of the page.
                        Shopify automatically creates a page at
                        yourstore.com/policies/privacy-policy and adds a
                        link to your checkout footer. Visit this URL to
                        confirm the policy renders correctly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add to your footer navigation
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go to Online Store &gt; Navigation in your Shopify
                        Admin. Click on your &quot;Footer menu.&quot; Add a
                        new menu item, select &quot;Policies&quot; as the
                        link type, and choose your privacy policy. This
                        ensures the link appears in your store footer on
                        every page, not just at checkout.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Test from a customer perspective
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Visit your live store as a customer. Check that the
                        privacy policy link appears in the footer, on the
                        checkout page, and in the account registration area.
                        Click through to confirm the full text loads
                        correctly with proper formatting.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the five most common privacy policy mistakes
                  Shopify store owners make. Avoiding them will keep your
                  store compliant and build customer trust.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Not disclosing installed Shopify apps
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Every Shopify app that accesses customer data is a
                        third-party data processor. If you have Klaviyo
                        sending emails, Judge.me collecting reviews, or
                        DSers fulfilling dropship orders, each one must
                        appear in your privacy policy. Customers and
                        regulators expect to know who has access to their
                        data. Failing to disclose apps is one of the most
                        common GDPR compliance gaps for Shopify stores.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Using a generic privacy policy not built
                        for ecommerce
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        A generic{" "}
                        <Link
                          href="/privacy-policy-for-ecommerce"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          website privacy policy
                        </Link>{" "}
                        does not cover order processing, payment processors,
                        shipping carriers, abandoned cart emails, or Shopify
                        app integrations. Shopify stores have unique data
                        flows that a standard website template cannot
                        address. Your privacy policy must reflect the
                        specific way an ecommerce store collects, processes,
                        and shares customer data.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Forgetting to mention abandoned cart emails
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Abandoned cart recovery emails use customer data
                        (email address and cart contents) for marketing
                        purposes. Whether you use Shopify&apos;s built-in
                        abandoned cart feature or a third-party app like
                        Klaviyo, this practice must be disclosed in your
                        privacy policy. Under GDPR, sending abandoned cart
                        emails without proper disclosure and legal basis
                        can result in complaints and fines.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Not updating the policy when adding new apps
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Shopify store owners install and remove apps
                        regularly. Every time you add an app that accesses
                        customer data, your privacy policy must be updated
                        to reflect the new data sharing. An outdated policy
                        that does not mention your current apps is
                        inaccurate, which violates transparency
                        requirements under GDPR, CCPA, and other privacy
                        laws. Review your policy whenever you install a
                        new app.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Claiming you do not collect data when
                        Shopify does it for you
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Some store owners think that because Shopify handles
                        the technical data collection, they do not need to
                        disclose it. Under privacy law, you are the data
                        controller. Shopify processes data on your behalf.
                        You are responsible for disclosing all data
                        collection that happens through your store, even
                        if Shopify&apos;s systems are doing the technical
                        work. Your privacy policy must cover what Shopify
                        collects in addition to what you collect directly.
                        For more on this, see{" "}
                        <Link
                          href="/do-i-need-a-privacy-policy-for-shopify-store"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          do I need a privacy policy for my Shopify store
                        </Link>
                        .
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
                      Does every Shopify store need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Every Shopify store collects personal data through
                      checkout, account creation, email signups, and cookies.
                      Privacy laws like GDPR, CCPA, and PIPEDA require any
                      business that collects personal data to have a privacy
                      policy. Shopify itself requires it in its Terms of
                      Service. Even if you only sell domestically, you need
                      a privacy policy that accurately describes your data
                      practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What must a Shopify privacy policy include?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your policy must include: what personal data you collect,
                      how you use it, which third parties receive it (Shopify,
                      payment processors, shipping carriers, apps), your
                      cookie practices, how customers can access or delete
                      their data, your retention periods, contact information,
                      and the effective date. Stores with EU customers need
                      GDPR sections. Stores with California customers need{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        CCPA disclosures
                      </Link>
                      .
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Shopify provide a default privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Shopify provides a basic template in Settings &gt;
                      Policies, but it is generic. It does not cover your
                      specific apps, marketing tools, payment processors,
                      or third-party integrations. You need to customize it
                      to reflect your actual data practices. This template
                      provides the Shopify-specific sections that the default
                      template lacks.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need to list every Shopify app in my privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      You should disclose any app that processes customer
                      personal data. This includes email marketing apps,
                      review apps, subscription apps, and any app that
                      tracks customer behavior or accesses order data. You
                      do not need to list apps that only affect your admin
                      experience and never touch customer data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I add a privacy policy to my Shopify store?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Go to your Shopify Admin, then Settings, then
                      Policies. Paste your privacy policy into the Privacy
                      Policy field. Shopify automatically creates a page at
                      yourstore.com/policies/privacy-policy and adds it to
                      your checkout footer. Also add a link in your footer
                      navigation under Online Store &gt; Navigation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Is a free Shopify privacy policy template legally
                      valid?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A free template can be legally valid if you customize
                      it to accurately describe your store&apos;s actual data
                      practices. Legal validity depends on accuracy and
                      completeness, not whether you paid for the template.
                      Replace all placeholders, add your specific apps and
                      integrations, and ensure every data flow is disclosed.
                      Stores in heavily regulated industries should consider
                      legal review.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How often should I update my Shopify store&apos;s
                      privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Update it whenever your data practices change: new
                      apps, new payment processors, new marketing tools,
                      new regions you sell to, or changes to your cookie
                      setup. At minimum, review quarterly since Shopify
                      apps update their data practices frequently. Always
                      update the effective date when you make changes. See
                      our guide on{" "}
                      <Link
                        href="/privacy-policy-for-shopify"
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        Shopify privacy policy requirements
                      </Link>{" "}
                      for ongoing compliance tips.
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
                      title: "Privacy Policy for Shopify",
                      desc: "Complete guide to Shopify store privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-shopify-app",
                      title: "Privacy Policy for Shopify Apps",
                      desc: "Requirements for Shopify app developers",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-shopify-store",
                      title: "Do I Need a Privacy Policy for Shopify?",
                      desc: "Why every Shopify store needs a privacy policy",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      title: "Privacy Policy for Ecommerce",
                      desc: "Ecommerce-specific privacy requirements and best practices",
                    },
                    {
                      href: "/ecommerce-privacy-policy-template",
                      title: "Ecommerce Privacy Policy Template",
                      desc: "General ecommerce template for any online store platform",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      title: "CCPA Privacy Policy Example",
                      desc: "California Consumer Privacy Act compliance example",
                    },
                    {
                      href: "/generate",
                      title: "Generate Your Privacy Policy",
                      desc: "Answer a few questions and get a custom policy in seconds",
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
                  Want a Policy Customized for Your Shopify Store?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Skip the manual customization. Answer a few questions
                  about your Shopify store, your apps, and your payment
                  processors, and get a privacy policy tailored to your
                  exact setup. Takes under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and Shopify requirements &middot;
                  Customized for your store &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
