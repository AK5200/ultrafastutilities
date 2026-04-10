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
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do I Need a Privacy Policy for My Shopify Store? Yes (2026) | ultrafastutilities",
  description:
    "Yes, every Shopify store needs a privacy policy. Shopify collects customer data through checkout, payments, and analytics. Learn what laws apply and how to add one to your store.",
  keywords:
    "do i need a privacy policy for shopify, shopify privacy policy required, shopify store privacy policy, does shopify need privacy policy, shopify legal requirements",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-shopify-store",
  },
  openGraph: {
    title:
      "Do I Need a Privacy Policy for My Shopify Store? Yes (2026) | ultrafastutilities",
    description:
      "Yes, every Shopify store needs a privacy policy. Shopify collects customer data through checkout, payments, and analytics. Learn what laws apply and how to add one to your store.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-shopify-store",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Do I Need a Privacy Policy for My Shopify Store? | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do I Need a Privacy Policy for My Shopify Store? Yes (2026)",
    description:
      "Yes, every Shopify store needs a privacy policy. Shopify collects customer data through checkout, payments, and analytics.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a privacy policy for my Shopify store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every Shopify store collects personal data through checkout, customer accounts, payment processing, and built-in analytics. Privacy laws like GDPR, CCPA, and PIPEDA require a privacy policy for any website that collects personal data. Shopify itself recommends that every store have one and provides a built-in privacy policy page template.",
      },
    },
    {
      "@type": "Question",
      name: "Does Shopify provide a privacy policy for my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify provides a basic privacy policy template that you can access through Settings > Legal in your Shopify admin. However, this template is generic and may not cover your specific data practices, third-party apps, or marketing tools. You should customize it or generate a policy tailored to your store's actual data collection practices.",
      },
    },
    {
      "@type": "Question",
      name: "What data does Shopify collect from my customers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify collects customer names, email addresses, shipping and billing addresses, phone numbers, payment information (processed through Shopify Payments or third-party gateways), IP addresses, browser and device information, browsing behavior on your store, order history, and cookies for analytics and session management. If you use Shopify Email or Shopify Inbox, additional communication data is also collected.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get fined for not having a privacy policy on my Shopify store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under GDPR, fines can reach up to 20 million euros or 4% of annual global revenue. Under CCPA, penalties can be up to $7,500 per intentional violation. Canada's PIPEDA can impose fines up to $100,000 CAD per violation. Even if regulators do not target you directly, payment processors and advertising platforms may restrict your account for non-compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy even if I only sell to customers in one country?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nearly every country has some form of privacy or data protection law. Even if you only sell domestically, you are still collecting personal data through your Shopify store's checkout, analytics, and payment systems. Additionally, online stores often receive visitors from other countries, and laws like GDPR apply based on the customer's location, not yours.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I put my privacy policy on my Shopify store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy should be linked in your store's footer so it is accessible from every page. You should also link it in your checkout flow, customer account creation page, and any email signup forms. Shopify allows you to add legal pages through Settings > Legal, and these automatically appear in your checkout. For your main store pages, add the link to your footer navigation menu.",
      },
    },
    {
      "@type": "Question",
      name: "Do Shopify apps require their own privacy disclosures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every third-party Shopify app you install may collect additional customer data beyond what Shopify collects by default. Your privacy policy must disclose all data collection, including data collected by apps. Common apps like email marketing tools, review platforms, analytics services, and upsell apps all process customer data. You should review each app's data practices and include them in your privacy policy.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Add a Privacy Policy to Your Shopify Store",
  description:
    "Follow these five steps to create and publish a privacy policy for your Shopify store that covers legal requirements and platform recommendations.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your store's data collection",
      text: "Review every way your Shopify store collects customer data. This includes checkout forms, customer account registration, email signup forms, contact forms, Shopify analytics, payment processing, and any third-party apps you have installed. Make a list of all data types collected and how they are used.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify applicable privacy laws",
      text: "Determine which privacy laws apply to your store based on where your customers are located. If you sell to EU customers, GDPR applies. If you sell to California residents, CCPA applies. If you sell to Canadian customers, PIPEDA applies. Most Shopify stores selling internationally need to comply with multiple regulations.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Generate or draft your privacy policy",
      text: "Use a privacy policy generator to create a policy tailored to your Shopify store's specific data practices. Include details about data collected at checkout, payment processing, cookies and tracking, third-party app data sharing, email marketing, and customer rights under applicable laws.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add the policy to your Shopify admin",
      text: "Go to Settings > Legal in your Shopify admin and paste your privacy policy into the Privacy Policy field. This automatically adds it to your checkout pages. Then create a page under Online Store > Pages if you want a standalone privacy policy page accessible from your main navigation.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Link it across your store",
      text: "Add your privacy policy link to your store's footer navigation menu so it appears on every page. Also link it in your email signup forms, customer registration pages, and any pop-ups that collect personal data. Test all links to make sure they work correctly on both desktop and mobile.",
    },
  ],
};

const tocSections = [
  { id: "short-answer", title: "The Short Answer" },
  { id: "why-shopify-stores-need-one", title: "Why Shopify Stores Need One" },
  { id: "legal-requirements", title: "Legal Requirements" },
  { id: "shopify-built-in-features", title: "Shopify's Built-in Features" },
  { id: "payment-processor-requirements", title: "Payment Processor Requirements" },
  { id: "app-data-disclosures", title: "App Data Disclosures" },
  { id: "myths-debunked", title: "Common Myths Debunked" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function DoINeedAPrivacyPolicyForShopifyStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do I Need a Privacy Policy for My Shopify Store? Yes (2026)",
            description:
              "Yes, every Shopify store needs a privacy policy. Shopify collects customer data through checkout, payments, and analytics. Learn what laws apply and how to add one to your store.",
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
                name: "Do I Need a Privacy Policy for My Shopify Store?",
                item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-shopify-store",
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
                Do I Need a Privacy Policy for My Shopify Store?
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Shopify Store Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for My{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Shopify Store?
                </span>{" "}
                Yes, and Shopify Recommends One Too
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes. Every Shopify store collects customer data through
                checkout, payments, analytics, and customer accounts. Privacy
                laws require you to disclose this, and Shopify itself
                recommends every store have a privacy policy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Shopify store owners, dropshippers, and ecommerce
                entrepreneurs who want to stay legally compliant.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: April 2026 &middot; Reviewed for GDPR, CCPA &amp;
                PIPEDA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-shopify"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Shopify Privacy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/shopify-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Shopify Policy Template
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
                <span>10 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, every Shopify store needs a privacy policy.</strong>{" "}
                  Shopify automatically collects customer data through checkout
                  forms, payment processing, analytics, and customer accounts.
                  Privacy laws including GDPR (EU), CCPA (California), and
                  PIPEDA (Canada) require you to disclose how you collect, use,
                  and protect this data. Shopify recommends every store have a
                  privacy policy and provides a built-in template through
                  Settings &gt; Legal, though you should customize it for your
                  specific data practices.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                &quot;Do I need a privacy policy for my Shopify store?&quot; is
                one of the most common questions new store owners ask. The
                answer is a clear yes, and it applies whether you sell physical
                products, digital downloads, or services.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                The moment a customer visits your Shopify store, data
                collection begins. Shopify uses cookies for session management
                and analytics. When a customer adds items to their cart and
                checks out, they provide their name, email, shipping address,
                and payment details. All of this is personal data that privacy
                laws require you to disclose.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly why your Shopify store needs a
                privacy policy, what data Shopify collects by default, which
                laws apply, how to use Shopify&apos;s built-in features, what
                payment processors require, how to handle app disclosures,
                and the most common myths that trip store owners up.
              </p>

              {/* Section 1: The Short Answer */}
              <section id="short-answer" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Short Answer: Yes, You Need One
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Every Shopify store needs a privacy policy. This is not
                  optional and it is not a technicality. Shopify stores
                  collect personal data by default through the checkout
                  process, customer accounts, order tracking, and built-in
                  analytics. If you collect personal data from website
                  visitors or customers, privacy laws in nearly every
                  jurisdiction require you to have a privacy policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Shopify itself recognizes this. The platform provides a
                  built-in legal page template for privacy policies, and
                  their documentation explicitly recommends that every store
                  have one. Payment processors like Shopify Payments, PayPal,
                  and Stripe also require merchants to have a privacy policy
                  as part of their terms of service.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The requirement comes from multiple sources simultaneously.
                  Privacy laws like GDPR, CCPA, and PIPEDA create legal
                  obligations. Payment processor agreements create contractual
                  obligations. And advertising platforms like Google Ads and
                  Meta Ads require a privacy policy before you can run paid
                  campaigns for your store.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Yes</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Every Shopify store needs one
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Built-in</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Shopify provides a legal page template
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Scale className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Legal</p>
                    <p className="text-xs text-slate-500 mt-1">
                      GDPR, CCPA, and PIPEDA apply
                    </p>
                  </div>
                </div>

                {/* Mini FAQ 1 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: I just started my Shopify store and have no sales yet. Do I still need one?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. The privacy policy requirement is triggered by data
                      collection, not by sales. The moment your store is live
                      and accessible to visitors, Shopify begins collecting
                      data through cookies and analytics. Even before your
                      first sale, visitors are providing data simply by
                      browsing your store.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Is the Shopify default template enough?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      The Shopify template is a starting point, but it is
                      generic. It may not cover your specific third-party apps,
                      marketing tools, or custom data collection. You should
                      customize it to reflect your actual data practices,
                      including any apps you have installed and any marketing
                      platforms you use.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Why Shopify Stores Need One */}
              <section id="why-shopify-stores-need-one" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why Shopify Stores Need a Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The core reason is straightforward: Shopify stores collect
                  personal data by default. Even a brand-new store with no
                  apps installed and no custom code collects a significant
                  amount of customer data. The table below shows what Shopify
                  collects out of the box.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Data Collected by Default
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          When It Happens
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Why It Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Customer name and email
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Checkout, account creation
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Directly identifies a person
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Shipping and billing addresses
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Checkout
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Physical location data is sensitive personal info
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Payment information
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Checkout (via payment gateway)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Financial data requires strong disclosure
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          IP address
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Every page visit
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Personal data under GDPR, reveals location
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Browser and device info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Every page visit
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Can contribute to device fingerprinting
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Cookies and session data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          First page load
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Tracks cart, sessions, and preferences
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Browsing behavior and order history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Ongoing analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Reveals purchasing patterns and interests
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Phone number
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Checkout (if enabled)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Directly identifies a person
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
                        Shopify processes over 10% of all US ecommerce
                        transactions. With millions of stores on the platform,
                        regulators are increasingly aware of Shopify stores as
                        data collectors. A 2025 survey found that 67% of
                        Shopify stores had privacy policies that did not
                        accurately reflect their actual data collection
                        practices, often because they used the default template
                        without customizing it.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Legal Requirements */}
              <section id="legal-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Legal Requirements: GDPR, CCPA, and PIPEDA
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Three major privacy regulations are most relevant to Shopify
                  store owners. Each applies based on where your customers are
                  located, not where your business is based. If you sell
                  internationally, all three likely apply to your store.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        GDPR (European Union)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If any of your customers are in the EU, GDPR applies to
                        your Shopify store. GDPR requires a privacy policy that
                        explains what data you collect, why you collect it, how
                        long you keep it, and what rights customers have over
                        their data. You must also have a lawful basis for
                        processing (such as consent or contractual necessity)
                        and provide a way for customers to exercise their data
                        rights. Fines can reach up to 20 million euros or 4%
                        of annual global revenue.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        CCPA (California, USA)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If you have customers in California and meet certain
                        business thresholds, the California Consumer Privacy
                        Act requires you to disclose what personal information
                        you collect, the purposes of collection, and whether
                        you sell or share personal information with third
                        parties. You must provide a &quot;Do Not Sell My
                        Personal Information&quot; link if applicable. Penalties
                        can be up to $7,500 per intentional violation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        PIPEDA (Canada)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Canada&apos;s Personal Information Protection and
                        Electronic Documents Act applies if you collect, use,
                        or disclose personal information from Canadian
                        customers in the course of commercial activity. Since
                        Shopify is a Canadian company, many Shopify stores
                        have a significant Canadian customer base. PIPEDA
                        requires meaningful consent for data collection,
                        clear disclosure of purposes, and the ability for
                        customers to access and correct their data. Fines can
                        reach up to $100,000 CAD per violation.
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
                        Beyond these three, over 140 countries now have some
                        form of data protection law. Brazil&apos;s LGPD,
                        Australia&apos;s Privacy Act, the UK&apos;s Data
                        Protection Act 2018, and India&apos;s Digital Personal
                        Data Protection Act all impose similar requirements. If
                        you sell internationally through your Shopify store,
                        you are likely subject to multiple privacy regulations
                        simultaneously.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 my-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">
                        Important caveat
                      </p>
                      <p className="text-sm text-slate-700">
                        These laws apply based on your customer&apos;s
                        location, not yours. A Shopify store based in the
                        United States that ships to EU customers must comply
                        with GDPR. A store based in the UK that sells to
                        California residents must comply with CCPA. Since
                        Shopify stores are accessible globally by default,
                        assuming these laws apply to you is the safest
                        approach.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Shopify's Built-in Features */}
              <section id="shopify-built-in-features" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Shopify&apos;s Built-in Privacy Features
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Shopify provides several built-in tools to help with privacy
                  compliance. However, these tools are starting points, not
                  complete solutions. Understanding what Shopify provides and
                  what you still need to handle yourself is important.
                </p>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Legal page templates:</strong> Shopify provides
                      templates for a privacy policy, terms of service, refund
                      policy, and shipping policy under Settings &gt; Legal.
                      These templates auto-populate with your store name and
                      address.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Checkout legal links:</strong> When you add a
                      privacy policy through Settings &gt; Legal, Shopify
                      automatically links it in your checkout flow so
                      customers can review it before completing their purchase.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cookie banner (EU compliance):</strong> Shopify
                      offers a built-in cookie consent banner for stores
                      targeting EU customers. This helps with GDPR cookie
                      consent requirements, though you may need a more robust
                      solution depending on your setup.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Customer data request tools:</strong> Shopify
                      provides tools in the admin to handle customer data
                      access and deletion requests, helping you comply with
                      GDPR and CCPA data subject rights.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data Processing Addendum:</strong> Shopify
                      offers a Data Processing Addendum (DPA) for merchants
                      who need one for GDPR compliance, covering how Shopify
                      processes data on your behalf.
                    </span>
                  </li>
                </ul>

                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 my-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">
                        What Shopify does NOT cover for you
                      </p>
                      <p className="text-sm text-slate-700">
                        Shopify&apos;s built-in template does not cover data
                        collected by third-party apps you install, custom
                        tracking scripts you add (like Google Analytics or Meta
                        Pixel), email marketing platforms, review collection
                        tools, or any custom forms on your store. You are
                        responsible for disclosing all of these in your
                        privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Payment Processor Requirements */}
              <section id="payment-processor-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Payment Processor Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Beyond privacy laws, your payment processor almost certainly
                  requires a privacy policy. This is a contractual obligation
                  separate from any legal requirement. Failing to have one can
                  result in your payment processing being suspended.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-bold text-slate-800 mb-1">
                      Shopify Payments
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      Shopify&apos;s built-in payment processor (powered by
                      Stripe) requires merchants to have a privacy policy.
                      Non-compliance can lead to account restrictions or
                      holds on your payouts.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-bold text-slate-800 mb-1">
                      PayPal
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      PayPal&apos;s Acceptable Use Policy requires all
                      merchants to have a privacy policy that discloses their
                      data practices. PayPal may limit or freeze your account
                      for non-compliance.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-bold text-slate-800 mb-1">
                      Stripe (direct)
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      If you use Stripe as a third-party gateway, their terms
                      require a privacy policy. Stripe also acts as a data
                      processor for payment data and expects you to inform
                      customers about this.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <p className="text-sm font-bold text-slate-800 mb-1">
                      Other gateways
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      Authorize.net, Square, Klarna, Afterpay, and virtually
                      every payment gateway require merchants to maintain a
                      privacy policy. This is standard across the payments
                      industry.
                    </p>
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
                        Payment processor account suspensions are one of the
                        most common ways Shopify store owners discover they
                        need a privacy policy. When a payment processor
                        reviews your account and finds no privacy policy, they
                        may place a hold on your funds until you add one. This
                        can happen even months after you start processing
                        payments.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: App Data Disclosures */}
              <section id="app-data-disclosures" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  App Data Disclosures
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Most Shopify stores use third-party apps, and each app may
                  collect additional customer data beyond what Shopify
                  collects by default. Your privacy policy must disclose all
                  data collection happening on your store, including data
                  collected by apps.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Common categories of Shopify apps and the data they
                  typically collect include:
                </p>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Email marketing apps</strong> (Klaviyo, Mailchimp,
                      Omnisend): Collect email addresses, purchase history,
                      browsing behavior, and engagement data for segmentation
                      and automated campaigns.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Review apps</strong> (Judge.me, Loox,
                      Stamped.io): Collect customer names, email addresses,
                      photos, and review content. Some send automated review
                      request emails.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Analytics and tracking</strong> (Google Analytics,
                      Meta Pixel, TikTok Pixel): Collect browsing behavior, IP
                      addresses, device information, and conversion data.
                      Often share this data with advertising platforms.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Upsell and recommendation apps:</strong> Track
                      browsing behavior, cart contents, and purchase history
                      to power personalized product recommendations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Live chat and support apps:</strong> Collect
                      customer messages, email addresses, and sometimes
                      browsing data for context. Conversations are stored on
                      the app provider&apos;s servers.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Every app you install should be reviewed for its data
                  practices. Check each app&apos;s own privacy policy and
                  terms of service, then make sure your store&apos;s privacy
                  policy covers the data that app collects. If you remove an
                  app, check whether it retained any customer data and update
                  your privacy policy accordingly.
                </p>

                {/* Mini FAQ 2 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need to list every app by name in my privacy policy?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      You do not necessarily need to name every app, but you
                      must disclose the categories of third parties that
                      receive customer data and the purposes for which they
                      receive it. Under GDPR, you should name specific
                      recipients or categories of recipients. Being more
                      specific is always better from a compliance perspective.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: Common Myths Debunked */}
              <section id="myths-debunked" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Myths Debunked
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These five myths are the most common misconceptions that
                  lead Shopify store owners to skip the privacy policy. Every
                  one of them is wrong.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Shopify handles all the legal stuff for
                        me&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Shopify is a platform provider, not your legal team.
                        Shopify provides tools and templates, but you are the
                        data controller for your store. You are responsible
                        for your own privacy compliance, including having a
                        complete and accurate privacy policy. Shopify&apos;s
                        own privacy policy covers Shopify&apos;s data
                        practices, not yours.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I only sell physical products, so I do
                        not need a privacy policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Selling physical products requires collecting names,
                        addresses, phone numbers, and payment details for
                        shipping and payment processing. This is personal
                        data regardless of what you sell. Physical product
                        stores often collect more personal data than digital
                        product stores because of the shipping information
                        requirement.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My store is too small for anyone to
                        care&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Privacy laws do not have a minimum store size. GDPR
                        applies to any business processing EU residents&apos;
                        data regardless of revenue or employee count. Payment
                        processors require a privacy policy for all merchants.
                        And customer complaints to data protection authorities
                        can trigger investigations at any scale. A single
                        unhappy customer can report your store.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I can just copy another store&apos;s
                        privacy policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Copying another store&apos;s privacy policy is
                        problematic for multiple reasons. Their policy
                        reflects their data practices, not yours. They may
                        use different apps, different payment processors, and
                        collect different data. A policy that does not
                        accurately reflect your data handling is not legally
                        compliant. It can also create copyright issues.
                        Generate a policy tailored to your actual practices.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Privacy policies are only for stores
                        that sell in the EU&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        While GDPR is the most well-known privacy law, it is
                        far from the only one. The United States has CCPA
                        (California), VCDPA (Virginia), CPA (Colorado), and
                        state laws in over a dozen other states. Canada has
                        PIPEDA. Brazil has LGPD. Australia has its Privacy
                        Act. Nearly every country where you might have
                        customers has some form of data protection requirement.
                        A privacy policy is a global necessity for online
                        stores.
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
                      Do I need a privacy policy for my Shopify store?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Every Shopify store collects personal data through
                      checkout, customer accounts, payment processing, and
                      analytics. Privacy laws like GDPR, CCPA, and PIPEDA
                      require a privacy policy for any website that collects
                      personal data. Shopify itself recommends every store
                      have one.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Shopify provide a privacy policy for my store?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Shopify provides a basic template through Settings &gt;
                      Legal, but it is generic. It may not cover your specific
                      apps, marketing tools, or custom data collection. You
                      should customize it or use a privacy policy generator
                      to create one tailored to your store&apos;s actual
                      data practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What data does Shopify collect from my customers?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Shopify collects customer names, email addresses,
                      shipping and billing addresses, phone numbers, payment
                      information, IP addresses, browser and device data,
                      browsing behavior, order history, and cookies. If you
                      use Shopify Email or Shopify Inbox, additional
                      communication data is also collected.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can I get fined for not having a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Under GDPR, fines can reach up to 20 million euros
                      or 4% of annual global revenue. Under CCPA, penalties
                      can be up to $7,500 per intentional violation.
                      PIPEDA can impose fines up to $100,000 CAD per
                      violation. Payment processors may also restrict your
                      account for non-compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy if I only sell in one country?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Nearly every country has data protection laws.
                      Even if you only sell domestically, your Shopify store
                      collects personal data through checkout and analytics.
                      Additionally, online stores often receive visitors from
                      other countries, and laws like GDPR apply based on the
                      customer&apos;s location, not yours.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Where should I put my privacy policy on my Shopify store?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Link it in your store&apos;s footer (accessible from
                      every page), in your checkout flow (automatic if you use
                      Settings &gt; Legal), on customer account creation
                      pages, and near any email signup forms. Test all links
                      on both desktop and mobile.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do Shopify apps require their own privacy disclosures?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your privacy policy must cover all data collection on
                      your store, including data collected by third-party
                      apps. Review each app&apos;s data practices and include
                      them in your policy. Common apps like email marketing
                      tools, review platforms, and analytics services all
                      collect customer data that must be disclosed.
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
                      desc: "Complete guide to Shopify privacy requirements",
                    },
                    {
                      href: "/shopify-privacy-policy-template",
                      title: "Shopify Privacy Policy Template",
                      desc: "Ready-to-use template for your Shopify store",
                    },
                    {
                      href: "/privacy-policy-for-shopify-app",
                      title: "Privacy Policy for Shopify Apps",
                      desc: "Requirements for Shopify app developers",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      title: "Privacy Policy for Ecommerce",
                      desc: "Ecommerce-specific privacy requirements",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-an-online-store",
                      title: "Privacy Policy for Online Stores",
                      desc: "General online store privacy requirements",
                    },
                    {
                      href: "/is-a-privacy-policy-legally-required",
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "Legal requirements across jurisdictions",
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
                  Your Shopify Store Needs a Privacy Policy. Get One Now.
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a missing privacy policy put your Shopify store
                  at risk of fines, payment holds, or lost customer trust.
                  Generate a compliant policy tailored to your store in under
                  60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and PIPEDA requirements &middot;
                  Customized for Shopify stores &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
