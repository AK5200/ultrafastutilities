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
  Package,
  Mail,
  Users,
  Globe,
  CreditCard,
  Key,
  Download,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Gumroad Sellers [Complete Guide 2026]",
  description:
    "Gumroad sellers must disclose buyer data, payments, email lists, and license keys. Learn what to include and generate yours free.",
  keywords:
    "privacy policy for gumroad, gumroad privacy policy, gumroad seller privacy policy, digital product privacy policy, gumroad data collection",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-gumroad",
  },
  openGraph: {
    title:
      "Privacy Policy for Gumroad Sellers [Complete Guide 2026]",
    description:
      "Gumroad sellers must disclose buyer data, payments, email lists, and license keys. Learn what to include and generate yours free.",
    url: "https://ultrafastutilities.com/privacy-policy-for-gumroad",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Gumroad Sellers [Complete Guide 2026]",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Gumroad Sellers [Complete Guide 2026]",
    description:
      "Gumroad sellers must disclose buyer data, payments, email lists, and license keys. Learn what to include and generate yours free.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-gumroad-sellers-need", title: "Why Sellers Need a Policy" },
  { id: "what-gumroad-collects", title: "What Gumroad Collects" },
  { id: "gumroad-vs-your-responsibility", title: "Gumroad vs You" },
  { id: "payment-processing", title: "Payment Processing" },
  { id: "email-lists", title: "Email Lists & Updates" },
  { id: "license-key-management", title: "License Key Management" },
  { id: "affiliate-program", title: "Affiliate Program Data" },
  { id: "gumroad-discover", title: "Gumroad Discover" },
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
      name: "Does Gumroad's privacy policy cover my products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Gumroad's privacy policy covers the Gumroad platform and Gumroad's own data collection. It does not cover your individual data practices as a seller. If you collect buyer emails for marketing, use third-party tools, issue license keys, or run an affiliate program, you need your own privacy policy that discloses how you handle buyer data independently of Gumroad.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if I only sell on Gumroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most cases. Even if Gumroad is your only sales platform, you receive buyer emails, names, and payment confirmation data with every purchase. If you send email updates to past buyers, use Gumroad's built-in email features, issue license keys that track usage, or participate in Gumroad's affiliate program, you are processing personal data and need your own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does GDPR apply to Gumroad sellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if any of your buyers are located in the EU or UK. Gumroad is a global platform, and digital products are particularly likely to attract international buyers since there are no shipping constraints. GDPR applies based on where your customers are, not where you are located. When GDPR applies, your privacy policy must include your lawful basis for processing, data retention periods, third-party data sharing, and information about buyers' rights.",
      },
    },
    {
      "@type": "Question",
      name: "What buyer data do Gumroad sellers receive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gumroad sellers receive buyer email addresses, names (if provided), payment confirmation details, IP addresses (through analytics), download history, license key activation data, affiliate referral information, and any custom field data collected during checkout. The exact data depends on your product type and checkout configuration.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to disclose Gumroad's payment processing in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your privacy policy should explain that payments are processed through Gumroad and that you do not directly access or store full payment card details. Gumroad uses Stripe for payment processing, so your policy should mention that buyer payment information is handled by Gumroad and its payment processor (Stripe) and is subject to their respective privacy policies.",
      },
    },
    {
      "@type": "Question",
      name: "How should I handle license key data in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your digital products include license keys, your privacy policy must disclose that you collect and store license key activation data, which may include device identifiers, IP addresses, activation timestamps, and usage frequency. Explain how long you retain this data, whether you use it for anything beyond license verification, and how buyers can request deletion of their activation history.",
      },
    },
    {
      "@type": "Question",
      name: "What about Gumroad's affiliate program and privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you use Gumroad's affiliate program, your privacy policy should disclose that affiliate referral data is collected, including which affiliate referred the buyer and the referral URL. This data is used to calculate affiliate commissions. Buyers should know that their purchase may be linked to an affiliate partner and what data is shared with affiliates for commission tracking purposes.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Gumroad Products",
  description:
    "Follow these six steps to create a compliant privacy policy for your Gumroad digital products that covers buyer data handling, license keys, email lists, and affiliate programs.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit all buyer data you collect",
      text: "Document every type of buyer data you receive through Gumroad: email addresses, names, payment confirmations, IP addresses, download logs, license key activations, affiliate referral data, and any custom checkout fields. Include data from Gumroad's built-in analytics and email tools.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map your third-party integrations",
      text: "List every external service connected to your Gumroad business: email marketing platforms (ConvertKit, Mailchimp), analytics tools (Google Analytics), automation services (Zapier), payment processors (Gumroad uses Stripe), and any tools that receive buyer data through Gumroad's API or integrations.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Identify applicable privacy laws",
      text: "Digital products sold on Gumroad reach buyers worldwide. If you have EU buyers, GDPR applies. If you have California buyers, CCPA may apply. Since digital products have no shipping barriers, most Gumroad sellers with meaningful sales will have international buyers triggering multiple privacy regulations.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a document tailored to your Gumroad business. Include details about digital product delivery, license key management, email list practices, affiliate program participation, and all third-party tools that handle buyer data.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Publish and link your policy",
      text: "Host your privacy policy on a dedicated page (your own website or a linked page). Add the link to your Gumroad product descriptions, your Gumroad profile page, your checkout page custom fields, and any email communications you send to buyers.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Review and update regularly",
      text: "Review your privacy policy whenever you add new products, change your email marketing approach, modify license key practices, adjust affiliate program terms, or integrate new third-party tools. At minimum, conduct an annual review to keep your policy accurate and current.",
    },
  ],
};

export default function PrivacyPolicyForGumroadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Gumroad Sellers [Complete Guide 2026]",
            description:
              "Gumroad sellers must disclose buyer data, payments, email lists, and license keys. Learn what to include and generate yours free.",
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
                name: "Privacy Policy for Gumroad",
                item: "https://ultrafastutilities.com/privacy-policy-for-gumroad",
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
                Privacy Policy for Gumroad
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <FileText className="w-3.5 h-3.5" />
                Digital Product Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Gumroad
                </span>
                : What Digital Product Sellers Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything Gumroad sellers need to know about privacy
                compliance. Covering buyer data, payment processing, email
                lists, license keys, affiliate programs, and Gumroad Discover
                marketplace requirements.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Gumroad creators, digital product sellers, and online course
                authors.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Package className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Ecommerce Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-teachable"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Teachable Privacy Policy
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
                    Need a Gumroad privacy policy?
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
                <span>Last updated: April 2026</span>
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
                    Gumroad sellers who collect buyer data need their own
                    privacy policy, separate from Gumroad&apos;s platform
                    policy.
                  </strong>{" "}
                  If you sell digital products, collect buyer emails, issue
                  license keys, run an affiliate program, or use Gumroad&apos;s
                  email marketing features, you must disclose your data
                  practices in a privacy policy. Gumroad&apos;s own privacy
                  policy covers the platform, not your individual business.
                </p>
              </div>

              {/* Section 1: Why Gumroad Sellers Need a Privacy Policy */}
              <section id="why-gumroad-sellers-need" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Gumroad Sellers Need a Privacy Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Understanding the gap between Gumroad&apos;s platform
                      policy and your obligations as a seller.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Gumroad makes it easy to sell digital products, but the
                    platform&apos;s privacy policy only covers Gumroad as a
                    company. It does not address how you, as an individual
                    seller, handle the buyer data you receive through every
                    transaction. Every time someone purchases your product, you
                    receive their email address, name, and purchase details. What
                    you do with that data is your responsibility to disclose.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Digital products create unique privacy considerations that
                    physical product sellers do not face. License keys tied to
                    buyer accounts, download tracking, software activation data,
                    and membership access logs all constitute personal data
                    processing. If you sell ebooks, courses, software, templates,
                    or any other digital product on Gumroad, the data trail
                    extends well beyond the initial purchase.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Gumroad also provides built-in email marketing tools that
                    let you send updates and promotional content to past buyers.
                    Using these features means you are actively processing buyer
                    data for marketing purposes, which requires explicit
                    disclosure in a privacy policy. Under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , marketing emails require a lawful basis (typically
                    consent), and your privacy policy must explain this. The
                    consequences of operating without proper disclosures can be
                    significant. Learn more about{" "}
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
                          Gumroad has processed over $1 billion in creator sales
                          and serves buyers in nearly every country. Since
                          digital products have no shipping limitations, Gumroad
                          sellers tend to have a higher percentage of
                          international buyers than physical product sellers.
                          This means most Gumroad sellers with any meaningful
                          sales volume will have EU buyers, triggering GDPR
                          compliance obligations regardless of the seller&apos;s
                          location.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What Gumroad Collects */}
              <section id="what-gumroad-collects" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Data Gumroad Collects From Buyers
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A complete breakdown of buyer data that flows through
                      your Gumroad products.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    As a Gumroad seller, you have access to more buyer data
                    than you might expect. Understanding each data type is the
                    first step toward building an accurate privacy policy.
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
                            Buyer Email
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Every purchase, checkout form
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Delivery, updates, marketing (with consent)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Buyer Name
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Checkout form (if collected)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Order records, customer support
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Payment Info
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Gumroad/Stripe processes (you see confirmation only)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Handled by Gumroad and Stripe
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Clarify Gumroad handles this
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            IP Address
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Analytics, download logs
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Fraud prevention, geographic analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Download History
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Gumroad tracks downloads per buyer
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Product delivery verification
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            License Keys
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Generated per purchase for software products
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Activation tracking, usage verification
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Affiliate Referrals
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Gumroad affiliate tracking system
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Commission tracking, referral source data
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Custom Fields
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Custom checkout fields you configure
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Full responsibility (you define what is collected)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Yes (with purpose details)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    The key distinction for Gumroad sellers is that digital
                    product delivery creates an ongoing data relationship. Unlike
                    physical products where the transaction ends at delivery,
                    digital products involve download links, license
                    verifications, product updates, and ongoing access
                    management. Each of these touchpoints generates data that
                    must be disclosed.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you use Gumroad&apos;s custom checkout fields to collect
                    additional information (company name, use case, or other
                    details), you have full data controller responsibility for
                    that data. Your privacy policy must explain what custom data
                    you collect and why. Understanding whether you need a policy
                    for your{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-an-online-store"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      online store
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    is essential for any digital seller.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Does Gumroad share buyer emails with sellers?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Yes. Gumroad provides sellers with buyer email addresses
                        for every purchase. This is a core part of the platform
                        since sellers need to communicate with buyers about
                        product delivery, updates, and support. Your privacy
                        policy must disclose how you use these email addresses,
                        especially if you use them for marketing beyond the
                        original transaction.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: What about buyers who use &quot;Pay what you
                        want&quot; pricing?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Even if a buyer pays $0 for a free product, Gumroad
                        still collects their email address, and you receive it.
                        Free product downloads generate the same data collection
                        obligations as paid purchases. Your privacy policy must
                        cover data collected from both free and paid
                        transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Gumroad vs Your Responsibility */}
              <section
                id="gumroad-vs-your-responsibility"
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Gumroad vs Your Responsibility
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Clarifying where Gumroad&apos;s data obligations end and
                      yours begin.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Gumroad and you are separate data controllers under privacy
                    law. Gumroad handles platform-level data processing
                    (checkout infrastructure, payment processing through Stripe,
                    platform analytics), while you are responsible for how you
                    use buyer data once you receive it. Neither party&apos;s
                    privacy policy covers the other&apos;s practices.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            Aspect
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                            Gumroad (Platform)
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                            You (Seller)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Payment Processing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Gumroad + Stripe handle card data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You receive payment confirmations only
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Email Collection
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Gumroad collects at checkout
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You receive and use buyer emails
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Product Delivery
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Gumroad hosts and delivers files
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You manage product content and updates
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Marketing Emails
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Gumroad provides email tools
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You decide content and frequency
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            License Keys
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Gumroad generates keys
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            You manage verification and revocation
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    This shared responsibility model is common across digital
                    product platforms. Similar to how{" "}
                    <Link
                      href="/privacy-policy-for-teachable"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Teachable course creators
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy-for-patreon"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Patreon creators
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    need their own policies, Gumroad sellers must independently
                    disclose their data practices to buyers.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    The practical impact is straightforward: you need your own
                    privacy policy that covers everything you do with buyer data
                    after Gumroad delivers it to you. Gumroad&apos;s policy
                    covers the checkout and payment infrastructure. Your policy
                    covers your email marketing, license management, customer
                    support interactions, and any third-party tools you connect
                    to your Gumroad account.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Payment Processing */}
              <section id="payment-processing" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Payment Processing on Gumroad
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How buyer payment data is handled and what your policy
                      must disclose.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Gumroad uses Stripe as its underlying payment processor. When
                    a buyer enters their credit card or PayPal information, that
                    data goes directly to Stripe and Gumroad. You, as the
                    seller, never see or have access to full payment card
                    numbers, CVVs, or banking details. What you do receive is
                    payment confirmation data: the amount paid, the buyer&apos;s
                    email, the transaction ID, and in some cases the last four
                    digits of the card.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy should clearly state that payment
                    processing is handled by Gumroad and Stripe, that you do
                    not store full payment card information, and that buyers
                    should refer to Gumroad&apos;s and Stripe&apos;s privacy
                    policies for details about how their payment data is
                    processed. This transparency builds buyer trust and
                    satisfies the disclosure requirements under both GDPR and
                    CCPA.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you offer subscription products on Gumroad, recurring
                    billing is also handled by Gumroad and Stripe. However,
                    you should disclose in your privacy policy that buyers who
                    subscribe will have their payment information stored by
                    Gumroad&apos;s payment processor for recurring charges, and
                    explain how buyers can cancel their subscriptions.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Email Lists and Updates */}
              <section id="email-lists" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Email Lists and Updates
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Gumroad&apos;s email features and your disclosure
                      obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Gumroad provides built-in email tools that let you send
                    updates, announcements, and promotional content to your
                    buyer list. Every buyer who purchases your product is
                    automatically added to your Gumroad audience, and you can
                    send them emails directly through the platform. This is one
                    of the most important features to address in your privacy
                    policy.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Under GDPR, sending marketing emails requires a lawful
                    basis. For transactional emails (order confirmations, product
                    delivery, critical product updates), your lawful basis is
                    contractual necessity. For promotional emails (new product
                    launches, discounts, newsletters), you typically need consent
                    as your lawful basis. Your privacy policy should
                    differentiate between these two types of communication and
                    explain the legal basis for each.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you also use external email marketing tools like
                    ConvertKit, Mailchimp, or Drip alongside Gumroad&apos;s
                    built-in features, your privacy policy must disclose each
                    platform that receives buyer email addresses. Many Gumroad
                    sellers connect their accounts to external tools via Zapier
                    or direct integrations, which means buyer data flows to
                    additional third parties that buyers should know about.
                    Sellers on platforms like{" "}
                    <Link
                      href="/privacy-policy-for-substack"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Substack
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    face similar email list disclosure requirements.
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
                          Gumroad&apos;s email feature allows sellers to segment
                          their audience by product purchased, making targeted
                          marketing possible. However, this segmentation creates
                          additional privacy obligations. Your privacy policy
                          should disclose that you may use purchase history to
                          personalize email communications, as this constitutes
                          profiling under GDPR and must be disclosed to buyers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: License Key Management */}
              <section id="license-key-management" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      License Key Management
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Privacy implications of Gumroad&apos;s license key
                      system for software sellers.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Gumroad offers a built-in license key system for software
                    products. When a buyer purchases a software product with
                    license keys enabled, Gumroad generates a unique key tied
                    to that buyer&apos;s purchase. This key can be verified
                    through Gumroad&apos;s API to confirm the purchase is
                    legitimate.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    From a privacy perspective, license key verification creates
                    a data processing activity that must be disclosed. When your
                    software checks a license key against Gumroad&apos;s API,
                    the request may include the buyer&apos;s IP address, device
                    information, and activation timestamp. If you store
                    activation data on your own servers (activation count,
                    device identifiers, last verification time), this is
                    additional personal data processing under your control.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy should explain what data is collected
                    during license verification, whether you store activation
                    data beyond what Gumroad retains, how many devices can be
                    activated, and what happens to activation data if a buyer
                    requests a refund or data deletion. This level of detail
                    is especially important under GDPR, where data subjects
                    have the right to know every way their data is processed.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Affiliate Program Data */}
              <section id="affiliate-program" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Affiliate Program Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How Gumroad&apos;s affiliate system impacts your privacy
                      obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Gumroad allows sellers to set up affiliate programs where
                    third parties earn commissions for referring buyers to your
                    products. When a buyer arrives through an affiliate link,
                    Gumroad tracks the referral using cookies and URL parameters.
                    This tracking data connects the buyer&apos;s purchase to the
                    specific affiliate who referred them.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy must disclose that affiliate tracking
                    occurs, what data is collected through affiliate links
                    (referral URL, affiliate ID, purchase amount), and that this
                    data is shared with the referring affiliate for commission
                    calculation. Buyers have a right to know that their purchase
                    is linked to a third-party affiliate and what information
                    that affiliate receives.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Under GDPR, affiliate tracking cookies require consent
                    before being placed on a buyer&apos;s device. While Gumroad
                    manages the cookie placement as part of its platform, your
                    privacy policy should still reference the use of affiliate
                    tracking cookies and link to Gumroad&apos;s cookie policy
                    for technical details. This ensures full transparency with
                    your buyers about all tracking that occurs in connection
                    with your products.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: Gumroad Discover Marketplace */}
              <section id="gumroad-discover" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Gumroad Discover Marketplace
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Additional privacy considerations when your products
                      appear on Gumroad Discover.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Gumroad Discover is the platform&apos;s built-in
                    marketplace where buyers can browse and find products from
                    various sellers. If you opt into Gumroad Discover, your
                    products become visible to Gumroad&apos;s broader audience,
                    which significantly increases your exposure to international
                    buyers.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    The privacy implications of Gumroad Discover are important.
                    When buyers find your products through Discover rather than
                    through your direct links, they may not have visited your
                    website or profile page where your privacy policy is
                    displayed. This means you need to ensure your privacy policy
                    is accessible from your Gumroad product pages and that
                    buyers can find it before or at the point of purchase.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Gumroad Discover also expands your potential buyer base to
                    include users from every country where Gumroad operates.
                    This makes it even more likely that you will have EU buyers
                    subject to GDPR, California buyers subject to CCPA, and
                    buyers from other jurisdictions with their own privacy laws.
                    If you participate in Discover, treat your privacy
                    obligations as global from the start. For broader guidance
                    on{" "}
                    <Link
                      href="/privacy-policy-for-ecommerce"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      ecommerce privacy policies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , see our dedicated guide.
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
                          Gumroad Discover charges an additional fee on sales
                          made through the marketplace (on top of Gumroad&apos;s
                          standard fee). In exchange, Gumroad promotes your
                          products to its broader audience. From a privacy
                          standpoint, Discover sales mean Gumroad is actively
                          marketing your products and driving buyer data to you
                          from users who may have no prior relationship with you,
                          making your privacy policy even more important for
                          first-time buyers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 9: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Gumroad Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Misconceptions that put Gumroad sellers at legal risk.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    These five privacy mistakes are common among Gumroad
                    sellers and can lead to GDPR violations, buyer complaints,
                    or loss of trust.
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Gumroad&apos;s privacy policy covers my
                          products&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Gumroad&apos;s privacy policy covers the Gumroad
                          platform. It does not cover how you use buyer emails,
                          manage license keys, run your affiliate program, or
                          send marketing communications. If you use buyer data
                          for any purpose beyond what Gumroad handles
                          automatically, you need your own privacy policy.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Digital products don&apos;t involve
                          personal data&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Every Gumroad transaction involves personal data: buyer
                          email, name, payment details, IP address, and download
                          history. Software products add license keys and
                          activation data. The fact that you are not shipping a
                          physical package does not reduce your data collection.
                          In many cases, digital products collect more data than
                          physical ones through ongoing license checks, download
                          tracking, and product update notifications.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I just send product updates, not
                          marketing&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          The line between product updates and marketing is
                          thinner than most sellers think. If your &quot;product
                          update&quot; email includes links to your new products,
                          upsells, or promotional content, it qualifies as
                          marketing under GDPR and CAN-SPAM. Your privacy policy
                          should clearly define what types of emails you send and
                          provide an unsubscribe mechanism for promotional
                          content.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;License key tracking is not data
                          collection&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          License key verification requests contain personal
                          data: IP addresses, device identifiers, timestamps, and
                          the license key itself (which is linked to a specific
                          buyer). Storing activation records, tracking the number
                          of devices, and logging verification attempts all
                          constitute personal data processing that requires
                          disclosure in your privacy policy.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;My affiliate program does not affect
                          privacy&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Affiliate programs create data sharing with third
                          parties. When an affiliate refers a buyer, the
                          affiliate learns that the buyer made a purchase (to
                          track their commission). Affiliate cookies track buyer
                          browsing behavior. This third-party data sharing must
                          be disclosed in your privacy policy, and under GDPR,
                          affiliate tracking cookies require consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 10: How to Create Your Policy */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your Gumroad Products
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A step-by-step process tailored to digital product
                      sellers on Gumroad.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Creating a privacy policy for your Gumroad business is
                    straightforward. Follow these six steps to create a policy
                    that covers your digital product data handling, license key
                    management, and email marketing practices.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1",
                        title: "Audit all buyer data you collect",
                        content:
                          "Document every type of buyer data you receive through Gumroad: email addresses, names, payment confirmations, download records, license key activations, affiliate referral data, and any custom checkout field data. Also note data from Gumroad's built-in analytics and email tools.",
                      },
                      {
                        step: "Step 2",
                        title: "Map your third-party integrations",
                        content:
                          "List every external service that receives buyer data from your Gumroad business: email marketing platforms (ConvertKit, Mailchimp), automation tools (Zapier), analytics services (Google Analytics on your website), and any custom API integrations that pull data from Gumroad.",
                      },
                      {
                        step: "Step 3",
                        title: "Identify applicable privacy laws",
                        content:
                          "Since digital products reach buyers worldwide without shipping limitations, most Gumroad sellers with any meaningful volume will have EU buyers (triggering GDPR) and California buyers (potentially triggering CCPA). Check your Gumroad analytics to confirm your buyer locations.",
                      },
                      {
                        step: "Step 4",
                        title: "Generate your privacy policy",
                        content:
                          "Use a privacy policy generator to create a document tailored to your Gumroad business. Include details about digital product delivery, license key management, email marketing practices, affiliate program participation, and all third-party tools that handle buyer data.",
                      },
                      {
                        step: "Step 5",
                        title: "Publish and link your policy",
                        content:
                          "Host your privacy policy on a dedicated page. Add the link to your Gumroad profile, product descriptions, and any email communications. If you have your own website, host the full policy there and link to it from Gumroad.",
                      },
                      {
                        step: "Step 6",
                        title: "Review and update regularly",
                        content:
                          "Update your privacy policy when you add new products, change email marketing tools, modify license key practices, adjust affiliate program terms, or integrate new third-party services. At minimum, conduct an annual review to keep your policy current and accurate.",
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
                    practices documented. Use a{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR privacy policy template
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    as a starting reference if you have EU buyers.
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
                      Generate Your Gumroad Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your Gumroad digital products in under 60 seconds. Covers
                      buyer data, license keys, email lists, and affiliates.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Gumroad Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Digital seller ready</span>
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
                      href: "/privacy-policy-for-teachable",
                      icon: FileText,
                      title: "Privacy Policy for Teachable",
                      desc: "Online course platform compliance",
                    },
                    {
                      href: "/privacy-policy-for-patreon",
                      icon: Users,
                      title: "Privacy Policy for Patreon",
                      desc: "Creator membership platform guide",
                    },
                    {
                      href: "/privacy-policy-for-substack",
                      icon: Mail,
                      title: "Privacy Policy for Substack",
                      desc: "Newsletter platform compliance",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      icon: Package,
                      title: "Privacy Policy for Ecommerce",
                      desc: "Ecommerce store compliance guide",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-an-online-store",
                      icon: Globe,
                      title: "Online Store Privacy Policy",
                      desc: "Do you need one? Find out",
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
                      icon: CreditCard,
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
