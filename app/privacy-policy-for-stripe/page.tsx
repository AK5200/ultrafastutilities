import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CreditCard,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Lock,
  Eye,
  Globe,
  Fingerprint,
  BarChart3,
  Clock,
  Ban,
  Lightbulb,
  HelpCircle,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Stripe: Payment Integration Guide (2026) | ultrafastutilities",
  description: "Using Stripe for payments? Your privacy policy must disclose it. Learn what Stripe collects, how to describe payment data processing, PCI compliance, Stripe Radar, and Connect requirements.",
  keywords: "privacy policy for stripe, stripe privacy policy, stripe payment privacy policy, stripe data collection, stripe privacy policy requirements",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-stripe",
  },
  openGraph: {
    title: "Privacy Policy for Stripe: Payment Integration Guide (2026) | ultrafastutilities",
    description: "Using Stripe for payments? Your privacy policy must disclose it. Learn what Stripe collects, how to describe payment data processing, PCI compliance, Stripe Radar, and Connect requirements.",
    url: "https://ultrafastutilities.com/privacy-policy-for-stripe",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Stripe | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Stripe: Payment Integration Guide (2026) | ultrafastutilities",
    description: "Using Stripe for payments? Your privacy policy must disclose it. Learn what Stripe collects, how to describe payment data processing, PCI compliance, Stripe Radar, and Connect requirements.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-disclose", title: "Why Disclose Stripe" },
  { id: "what-stripe-collects", title: "What Stripe Collects" },
  { id: "stripe-products", title: "Stripe Products Data" },
  { id: "pci-compliance", title: "PCI DSS Compliance" },
  { id: "stripe-connect", title: "Stripe Connect" },
  { id: "stripe-identity", title: "Stripe Identity" },
  { id: "stripe-radar", title: "Stripe Radar" },
  { id: "how-to-describe", title: "How to Describe Stripe" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-steps", title: "Step-by-Step Guide" },
  { id: "faqs", title: "FAQs" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForStripePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Stripe: What to Disclose When Using Stripe Payments",
            description: "Using Stripe for payments? Your privacy policy must disclose it. Learn what Stripe collects, how to describe payment data processing, PCI compliance, Stripe Radar, and Connect requirements.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-04-11",
            dateModified: "2026-04-11",
            publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Stripe", item: "https://ultrafastutilities.com/privacy-policy-for-stripe" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Add Stripe Disclosures to Your Privacy Policy",
            description: "A step-by-step guide to properly disclosing Stripe payment processing in your website or app privacy policy.",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Identify Which Stripe Products You Use",
                text: "List every Stripe product integrated into your platform: Payments, Checkout, Billing, Connect, Radar, Identity, Tax, Invoicing, or Link. Each product collects different data types.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Document the Data Stripe Collects",
                text: "For each Stripe product, document the specific personal data collected: card details, billing addresses, IP addresses, device fingerprints, behavioral analytics, and email addresses for receipts.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Name Stripe as a Third-Party Processor",
                text: "Explicitly name Stripe, Inc. as a third-party payment processor in your privacy policy. Include a link to Stripe's own privacy policy at https://stripe.com/privacy.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Describe the Legal Basis for Processing",
                text: "Explain why payment data is processed: contractual necessity to fulfill orders, legal obligations for tax and financial regulations, and legitimate interests for fraud prevention via Stripe Radar.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Address PCI DSS Compliance",
                text: "State that payment card data is handled in accordance with PCI DSS standards. Clarify that Stripe, as a PCI Level 1 certified provider, processes and stores card data on your behalf.",
              },
              {
                "@type": "HowToStep",
                position: 6,
                name: "Add Product-Specific Disclosures",
                text: "If you use Stripe Connect, disclose multi-party data sharing. If you use Stripe Identity, disclose biometric and identity document collection. If you use Stripe Radar, disclose automated fraud detection.",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need to mention Stripe by name in my privacy policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Both GDPR and Stripe's own terms require you to name third-party processors. Your privacy policy should explicitly state that Stripe, Inc. processes payment data and link to Stripe's privacy policy.",
                },
              },
              {
                "@type": "Question",
                name: "What data does Stripe collect from my customers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Stripe collects card numbers, expiration dates, CVC codes, billing addresses, IP addresses, device fingerprints, behavioral data through Stripe Radar for fraud detection, and email addresses for receipts. The exact data depends on which Stripe products you use.",
                },
              },
              {
                "@type": "Question",
                name: "Does Stripe store credit card numbers on my server?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. When properly integrated, Stripe tokenizes card data so sensitive card numbers never touch your server. Stripe handles PCI compliance as a Level 1 Service Provider. Your privacy policy should clarify this distinction.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a privacy policy if I only use Stripe Checkout?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Even with Stripe's hosted Checkout page, you are still the merchant collecting payment for goods or services. You must disclose that customer data is shared with Stripe for payment processing and link to Stripe's privacy policy.",
                },
              },
              {
                "@type": "Question",
                name: "How does Stripe Radar affect my privacy policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Stripe Radar uses machine learning to analyze transaction patterns, device fingerprints, and behavioral signals for fraud detection. Under GDPR, automated decision-making that significantly affects individuals requires disclosure. Your policy should explain that fraud screening occurs and describe the data used.",
                },
              },
              {
                "@type": "Question",
                name: "What additional disclosures does Stripe Connect require?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Stripe Connect platforms must disclose multi-party data sharing: data flows between you (the platform), connected accounts (sellers/service providers), and Stripe. You must also explain that connected accounts may have their own privacy policies governing their use of customer data.",
                },
              },
              {
                "@type": "Question",
                name: "Is Stripe compliant with GDPR and CCPA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Stripe is certified under the EU-US Data Privacy Framework and offers Data Processing Agreements for GDPR compliance. For CCPA, Stripe acts as a service provider. However, you as the merchant must still include proper disclosures in your own privacy policy.",
                },
              },
            ],
          }),
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
              <span className="text-slate-600">Privacy Policy for Stripe</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <CreditCard className="w-3.5 h-3.5" />
                Payment Integration
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Stripe
                </span>
                : What to Disclose When Using Stripe Payments
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                If you accept payments through Stripe, your privacy policy must
                disclose it. Learn exactly what data Stripe collects, how to
                describe payment processing, and what PCI, Radar, and Connect
                requirements mean for your policy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for merchants, SaaS founders, and marketplace operators.
              </p>
            </div>

            {/* Featured Snippet Box */}
            <div className="mt-8 max-w-2xl rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
              <div className="flex gap-3">
                <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed text-slate-700">
                  <strong className="text-slate-900">Quick answer:</strong>{" "}
                  Any website or app using Stripe must name Stripe, Inc. as a
                  third-party payment processor in its privacy policy, describe
                  the payment data collected (card details, billing address, IP,
                  device fingerprint), reference PCI DSS compliance, and link to
                  Stripe&apos;s own privacy policy. Additional disclosures are
                  required if you use Stripe Radar, Connect, or Identity.
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                eCommerce Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-shopify"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Shopify Policy
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
                    Need your own policy?
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
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <span>Last updated: April 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>12 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: Why Stripe Requires Privacy Policy Disclosure */}
              <section id="why-disclose" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Stripe Requires Privacy Policy Disclosure
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Stripe processes sensitive financial information on behalf of
                    your customers. Under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , CCPA, PCI DSS, and Stripe&apos;s own Terms of Service, you
                    are required to disclose that a third-party payment processor
                    handles customer data. Failing to do so can result in
                    regulatory fines, Stripe account suspension, or loss of
                    customer trust.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Even if Stripe handles all the card processing and you never
                    see raw card numbers, you are still the data controller (or
                    &quot;business&quot; under CCPA) responsible for telling
                    customers what happens to their information. Whether you run
                    an{" "}
                    <Link
                      href="/privacy-policy-for-ecommerce"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      eCommerce store
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , a{" "}
                    <Link
                      href="/privacy-policy-for-saas"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      SaaS platform
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , or a{" "}
                    <Link
                      href="/privacy-policy-for-apps"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      mobile app
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , this disclosure is mandatory.
                  </p>

                  {/* Did you know? #1 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Stripe&apos;s Services Agreement explicitly requires
                        merchants to maintain a privacy policy that discloses
                        the use of third-party payment processing. Violating
                        this can lead to account termination, even if no data
                        breach occurs.
                      </div>
                    </div>
                  </div>

                  {/* Mini-FAQ #1 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <div className="flex gap-3">
                      <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Can I just link to Stripe&apos;s privacy policy instead of writing my own section?</strong>{" "}
                        No. Linking to Stripe&apos;s policy is recommended, but
                        it does not replace your obligation to describe in your
                        own privacy policy what data is shared with Stripe and
                        why.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What Stripe Collects */}
              <section id="what-stripe-collects" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Data Stripe Collects from Your Customers
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every Stripe transaction involves collecting multiple
                      categories of personal data.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200/60">
                          <th className="text-left px-5 py-3 font-semibold text-slate-900">Data Type</th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-900">Details</th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-900">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Card details</td>
                          <td className="px-5 py-3 text-slate-600">Card number, expiration date, CVC</td>
                          <td className="px-5 py-3 text-slate-600">Process payment transactions</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Billing address</td>
                          <td className="px-5 py-3 text-slate-600">Street, city, state, postal code, country</td>
                          <td className="px-5 py-3 text-slate-600">Address verification (AVS), tax calculation</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">IP address</td>
                          <td className="px-5 py-3 text-slate-600">IPv4 or IPv6 address at checkout</td>
                          <td className="px-5 py-3 text-slate-600">Fraud detection, geolocation</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Device fingerprint</td>
                          <td className="px-5 py-3 text-slate-600">Browser type, OS, screen resolution, timezone</td>
                          <td className="px-5 py-3 text-slate-600">Fraud prevention via Stripe Radar</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Behavioral data</td>
                          <td className="px-5 py-3 text-slate-600">Mouse movements, typing patterns, session data</td>
                          <td className="px-5 py-3 text-slate-600">Radar machine learning fraud signals</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Email for receipts</td>
                          <td className="px-5 py-3 text-slate-600">Customer email address</td>
                          <td className="px-5 py-3 text-slate-600">Send payment confirmations, invoices</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Did you know? #2 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Stripe.js collects device and behavioral data
                        automatically when loaded on a page, even before the
                        customer clicks &quot;Pay.&quot; This means data
                        collection begins as soon as your checkout page loads,
                        not just when a payment is submitted.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Stripe Products Data */}
              <section id="stripe-products" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Data Collection by Stripe Product
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Different Stripe products collect different types of data.
                      Your disclosures should match the products you use.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200/60">
                          <th className="text-left px-5 py-3 font-semibold text-slate-900">Stripe Product</th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-900">Additional Data Collected</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Payments</td>
                          <td className="px-5 py-3 text-slate-600">Card details, billing info, transaction metadata</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Checkout</td>
                          <td className="px-5 py-3 text-slate-600">Email, phone, shipping address, saved payment methods</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Billing</td>
                          <td className="px-5 py-3 text-slate-600">Subscription plans, renewal dates, usage data for metered billing</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Connect</td>
                          <td className="px-5 py-3 text-slate-600">Connected account owner identity, bank details, tax IDs, business info</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Radar</td>
                          <td className="px-5 py-3 text-slate-600">Device fingerprints, behavioral signals, IP geolocation, risk scores</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Identity</td>
                          <td className="px-5 py-3 text-slate-600">Government ID images, selfie photos, biometric face data</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Tax</td>
                          <td className="px-5 py-3 text-slate-600">Customer location, tax IDs, transaction amounts for tax calculation</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Invoicing</td>
                          <td className="px-5 py-3 text-slate-600">Customer name, email, billing address, itemized purchase history</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">Link</td>
                          <td className="px-5 py-3 text-slate-600">Saved payment methods, email, phone for cross-merchant recognition</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: PCI DSS Compliance */}
              <section id="pci-compliance" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      PCI DSS Compliance and Your Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    The Payment Card Industry Data Security Standard (PCI DSS)
                    governs how card data must be handled. Stripe is a PCI Level
                    1 Service Provider, the highest certification level. When you
                    use Stripe, you benefit from their compliance, but your
                    privacy policy must still address how payment data flows.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        label: "Tokenization",
                        text: "Stripe replaces card numbers with tokens so raw card data never reaches your server. State this clearly in your policy.",
                      },
                      {
                        label: "PCI scope reduction",
                        text: "By using Stripe Elements or Checkout, you reduce your PCI compliance burden. Your policy should explain that card data is handled entirely by Stripe.",
                      },
                      {
                        label: "Data storage",
                        text: "Clarify that you do not store full card numbers. Stripe retains card data in their PCI-compliant infrastructure.",
                      },
                      {
                        label: "Encryption in transit",
                        text: "All data transmitted to Stripe uses TLS encryption. Mentioning this reassures customers about security.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <Lock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Mini-FAQ #2 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <div className="flex gap-3">
                      <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Do I need my own PCI certification if I use Stripe?</strong>{" "}
                        Most merchants using Stripe Elements or Checkout qualify
                        for the simplest PCI self-assessment (SAQ A). You do not
                        need a full PCI audit, but you still must complete the
                        annual Self-Assessment Questionnaire.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Stripe Connect */}
              <section id="stripe-connect" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Stripe Connect: Marketplace and Platform Disclosures
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    If you operate a marketplace or platform using Stripe
                    Connect, your privacy obligations are more complex. Data
                    flows between three parties: your platform, connected
                    accounts (sellers or service providers), and Stripe itself.
                    Your policy must address all three relationships.
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                          <Globe className="w-4 h-4 text-violet-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Platform-to-Stripe Data Sharing
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11">
                        Disclose that your platform shares customer payment data
                        with Stripe to facilitate transactions with connected
                        accounts. Explain that Stripe acts as both a processor
                        for your platform and a processor for connected accounts.
                      </p>
                    </div>

                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-emerald-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Connected Account Data
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11">
                        Stripe collects identity documents, bank account details,
                        tax identification numbers, and business information from
                        connected accounts during onboarding. If you facilitate
                        this onboarding, disclose it in your policy.
                      </p>
                    </div>

                    <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                          <Eye className="w-4 h-4 text-orange-600" />
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          Customer Data Visibility
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-600 ml-11">
                        Inform customers that connected accounts may have access
                        to certain transaction data (order details, payment
                        status) and that those accounts may have their own
                        privacy policies.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Stripe Identity */}
              <section id="stripe-identity" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Stripe Identity Verification Disclosures
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Stripe Identity collects government-issued ID images, selfie
                    photographs, and biometric face data for identity
                    verification. This is some of the most sensitive personal
                    data you can process, and several jurisdictions have specific
                    biometric data laws (Illinois BIPA, Texas CUBI, Washington
                    state biometric law).
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        label: "ID document collection",
                        text: "Disclose that government ID images (passport, driver's license) are captured and transmitted to Stripe for verification.",
                      },
                      {
                        label: "Biometric data",
                        text: "Under laws like Illinois BIPA, you must obtain informed consent before collecting biometric identifiers. Your policy must explicitly state that facial geometry data is collected.",
                      },
                      {
                        label: "Retention period",
                        text: "Specify how long Stripe retains identity verification data. Stripe typically retains this data for the duration of the business relationship plus a regulatory retention period.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <Fingerprint className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Did you know? #3 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Under Illinois BIPA, companies that collect biometric
                        data without proper consent face statutory damages of
                        $1,000 to $5,000 per violation. If you use Stripe
                        Identity, your privacy policy must include a biometric
                        data disclosure to avoid this liability.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Stripe Radar */}
              <section id="stripe-radar" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Stripe Radar: Fraud Detection Privacy Requirements
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Stripe Radar uses machine learning to score transactions for
                    fraud risk. It analyzes device fingerprints, IP addresses,
                    behavioral patterns (how a user types, moves their mouse, and
                    navigates your checkout), and transaction history across the
                    entire Stripe network. Under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR Article 22
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , automated decision-making that significantly affects
                    individuals requires specific disclosures.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        label: "Automated decision-making",
                        text: "Disclose that transactions may be automatically blocked or flagged based on Radar's risk assessment without human review.",
                      },
                      {
                        label: "Data signals used",
                        text: "List the types of data Radar analyzes: device fingerprints, IP geolocation, email reputation, card testing patterns, and cross-network transaction history.",
                      },
                      {
                        label: "Right to human review",
                        text: "Under GDPR, customers have the right to request human review of automated decisions. Your policy should explain how to exercise this right.",
                      },
                      {
                        label: "Legitimate interest basis",
                        text: "Fraud prevention is typically justified under the legitimate interests lawful basis. State this clearly and describe your balancing test.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <BarChart3 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: How to Describe Stripe */}
              <section id="how-to-describe" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Describe Stripe in Your Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Your privacy policy should include a dedicated section for
                    payment processing. Here is what to cover, whether you run a{" "}
                    <Link
                      href="/privacy-policy-for-shopify"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Shopify store
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    or a{" "}
                    <Link
                      href="/privacy-policy-for-woocommerce"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      WooCommerce site
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    :
                  </p>

                  <div className="mt-6 space-y-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Name the Processor
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          State: &quot;We use Stripe, Inc. as our payment
                          processor.&quot; Include Stripe&apos;s address (354 Oyster
                          Point Blvd, South San Francisco, CA 94080) for GDPR
                          compliance.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          List the Data Shared
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Enumerate the categories: payment card information,
                          billing address, email, IP address, and device data.
                          Do not use vague language like &quot;payment
                          information.&quot;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Explain the Legal Basis
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          For GDPR, state the lawful basis: contractual necessity
                          for payment processing, legitimate interests for fraud
                          prevention, and legal obligations for tax and financial
                          regulations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Link to Stripe&apos;s Policy
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Include a direct link to https://stripe.com/privacy so
                          customers can review Stripe&apos;s own data practices.
                          This is required by Stripe&apos;s terms and recommended
                          by GDPR transparency principles.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Mention International Transfers
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Stripe processes data in the United States. If you have
                          EU customers, disclose this transfer and note that
                          Stripe participates in the EU-US Data Privacy Framework.
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
                      Common Mistakes to Avoid
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      title: "Not naming Stripe at all",
                      desc: "Saying \"we use a third-party payment processor\" is insufficient under GDPR. You must name Stripe explicitly.",
                    },
                    {
                      title: "Claiming you store card data",
                      desc: "If you use Stripe Elements or Checkout, card data never touches your servers. Claiming otherwise is inaccurate and may alarm customers.",
                    },
                    {
                      title: "Ignoring Stripe.js data collection",
                      desc: "Stripe.js collects device fingerprints and behavioral data for Radar. Failing to disclose this violates cookie and tracking transparency requirements.",
                    },
                    {
                      title: "Missing Stripe Connect disclosures",
                      desc: "Marketplace operators must explain the three-way data flow (platform, connected account, Stripe). A single-party disclosure is incomplete.",
                    },
                    {
                      title: "Omitting automated decision-making",
                      desc: "If Stripe Radar blocks transactions automatically, GDPR requires you to disclose automated decision-making and the right to human review.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-red-100/80 bg-red-50/30 p-4"
                    >
                      <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 10: HowTo Steps */}
              <section id="how-to-steps" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Step-by-Step: Adding Stripe to Your Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  {[
                    {
                      step: 1,
                      title: "Identify Which Stripe Products You Use",
                      text: "Audit your integration: Payments, Checkout, Billing, Connect, Radar, Identity, Tax, Invoicing, or Link. Each product has unique data collection.",
                    },
                    {
                      step: 2,
                      title: "Document the Data Stripe Collects",
                      text: "For each product, list the personal data: card details, billing addresses, IP addresses, device fingerprints, behavioral analytics, and email addresses.",
                    },
                    {
                      step: 3,
                      title: "Name Stripe as a Third-Party Processor",
                      text: "Add a clear statement naming Stripe, Inc. as your payment processor. Include a link to stripe.com/privacy.",
                    },
                    {
                      step: 4,
                      title: "Describe the Legal Basis for Processing",
                      text: "State the lawful basis: contractual necessity for orders, legal obligations for tax, and legitimate interests for fraud prevention.",
                    },
                    {
                      step: 5,
                      title: "Address PCI DSS Compliance",
                      text: "Explain that Stripe is a PCI Level 1 certified provider and that card data is tokenized so it never reaches your servers.",
                    },
                    {
                      step: 6,
                      title: "Add Product-Specific Disclosures",
                      text: "Include sections for Connect (multi-party data sharing), Identity (biometric data), and Radar (automated fraud detection) if applicable.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-600 mt-1">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQs */}
              <section id="faqs" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "Do I need to mention Stripe by name in my privacy policy?",
                      a: "Yes. Both GDPR and Stripe's own terms require you to name third-party processors. Your privacy policy should explicitly state that Stripe, Inc. processes payment data and link to Stripe's privacy policy.",
                    },
                    {
                      q: "What data does Stripe collect from my customers?",
                      a: "Stripe collects card numbers, expiration dates, CVC codes, billing addresses, IP addresses, device fingerprints, behavioral data through Stripe Radar for fraud detection, and email addresses for receipts. The exact data depends on which Stripe products you use.",
                    },
                    {
                      q: "Does Stripe store credit card numbers on my server?",
                      a: "No. When properly integrated, Stripe tokenizes card data so sensitive card numbers never touch your server. Stripe handles PCI compliance as a Level 1 Service Provider. Your privacy policy should clarify this distinction.",
                    },
                    {
                      q: "Do I need a privacy policy if I only use Stripe Checkout?",
                      a: "Yes. Even with Stripe's hosted Checkout page, you are still the merchant collecting payment for goods or services. You must disclose that customer data is shared with Stripe for payment processing and link to Stripe's privacy policy.",
                    },
                    {
                      q: "How does Stripe Radar affect my privacy policy?",
                      a: "Stripe Radar uses machine learning to analyze transaction patterns, device fingerprints, and behavioral signals for fraud detection. Under GDPR, automated decision-making that significantly affects individuals requires disclosure. Your policy should explain that fraud screening occurs and describe the data used.",
                    },
                    {
                      q: "What additional disclosures does Stripe Connect require?",
                      a: "Stripe Connect platforms must disclose multi-party data sharing: data flows between you (the platform), connected accounts (sellers/service providers), and Stripe. You must also explain that connected accounts may have their own privacy policies governing their use of customer data.",
                    },
                    {
                      q: "Is Stripe compliant with GDPR and CCPA?",
                      a: "Stripe is certified under the EU-US Data Privacy Framework and offers Data Processing Agreements for GDPR compliance. For CCPA, Stripe acts as a service provider. However, you as the merchant must still include proper disclosures in your own privacy policy.",
                    },
                  ].map((item) => (
                    <div
                      key={item.q}
                      className="rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.q}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Dark CTA Section */}
              <section className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-blue-500/10 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
                  </div>

                  <div className="relative">
                    <CreditCard className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your Stripe-Ready Privacy Policy
                    </h2>
                    <p className="mt-3 text-slate-300 text-base max-w-md mx-auto">
                      Create a customized privacy policy that properly discloses
                      Stripe payment processing, Radar fraud detection, and all
                      required PCI DSS language.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-blue-600 text-white hover:bg-blue-500 font-semibold rounded-xl shadow-lg shadow-blue-900/30"
                      >
                        Generate My Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-slate-400">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500/50" />
                      <span>Stripe-specific clauses</span>
                    </div>

                    <p className="text-xs text-slate-500 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR, CCPA, and PCI DSS
                      requirements. Not legal advice. Learn more about{" "}
                      <Link
                        href="/what-happens-without-a-privacy-policy"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        what happens without a privacy policy
                      </Link>
                      .
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
                      icon: FileText,
                      title: "Privacy Policy for eCommerce",
                      desc: "Online store compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      icon: FileText,
                      title: "Privacy Policy for SaaS",
                      desc: "SaaS platform privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-shopify",
                      icon: FileText,
                      title: "Privacy Policy for Shopify",
                      desc: "Shopify-specific privacy disclosures",
                    },
                    {
                      href: "/privacy-policy-for-woocommerce",
                      icon: FileText,
                      title: "Privacy Policy for WooCommerce",
                      desc: "WooCommerce privacy policy guide",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      icon: ShieldCheck,
                      title: "Privacy Policy for Apps",
                      desc: "Mobile app privacy requirements",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Policy",
                      desc: "Risks of missing privacy disclosures",
                    },
                    {
                      href: "/generate",
                      icon: ShieldCheck,
                      title: "Policy Generator",
                      desc: "Create your compliant privacy policy",
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
