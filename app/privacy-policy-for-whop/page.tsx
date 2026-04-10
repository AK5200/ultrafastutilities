import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Users,
  Globe,
  Lock,
  CreditCard,
  Key,
  MessageCircle,
  Clock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Whop Sellers [Digital Products 2026]",
  description:
    "Create a privacy policy for your Whop store. Covers buyer data, Discord integration, license keys, subscriptions, payment processing, and refund data.",
  keywords:
    "privacy policy for whop, whop privacy policy, whop seller privacy, whop GDPR, whop digital products privacy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-whop",
  },
  openGraph: {
    title: "Privacy Policy for Whop Sellers [Digital Products 2026]",
    description:
      "Create a privacy policy for your Whop store. Covers buyer data, Discord integration, license keys, subscriptions, payment processing, and refund data.",
    url: "https://ultrafastutilities.com/privacy-policy-for-whop",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Whop Sellers | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Whop Sellers [Digital Products 2026]",
    description:
      "Create a privacy policy for your Whop store. Covers buyer data, Discord integration, license keys, subscriptions, payment processing, and refund data.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-whop-needs-policy", title: "Why Whop Sellers Need a Policy" },
  { id: "buyer-data", title: "Buyer Data Collection" },
  { id: "integrations", title: "Integrations and API Data" },
  { id: "payment-processing", title: "Payment and Refund Data" },
  { id: "what-to-include", title: "What to Include" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForWhopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Whop Sellers [Digital Products 2026]",
            description:
              "Create a privacy policy for your Whop store. Covers buyer data, Discord integration, license keys, subscriptions, payment processing, and refund data.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2025-01-01",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Whop Sellers", item: "https://ultrafastutilities.com/privacy-policy-for-whop" },
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
              <span className="text-slate-600">Privacy Policy for Whop Sellers</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Zap className="w-3.5 h-3.5" />
                Digital Products
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Whop Sellers
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Whop is a growing platform for selling digital products,
                communities, and SaaS tools. Here is what your privacy policy
                needs to cover as a Whop seller.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Whop sellers, community builders, and SaaS creators.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <CreditCard className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                E-commerce Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-saas"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                SaaS Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Generate Policy
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
                  <span>7 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: Why Whop Sellers Need a Privacy Policy */}
              <section id="why-whop-needs-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Whop Sellers Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Whop is a marketplace for digital products -- courses,
                    communities, SaaS tools, bots, and memberships. When someone
                    buys your product on Whop, you receive their name, email
                    address, and payment information through Whop&apos;s payment
                    processing. This makes you a data controller under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/ccpa-privacy-policy-example"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      CCPA
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , and you need a privacy policy that discloses your data
                    practices.
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Key point:</strong>{" "}
                        Whop processes payments on your behalf, but you are still
                        the data controller for your customers. Whop&apos;s own
                        privacy policy covers their platform -- it does not cover
                        how you use buyer data in your Discord server, SaaS tool,
                        or community.
                      </div>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Most Whop sellers integrate with Discord for community access,
                    use webhooks for automation, issue license keys for software,
                    and manage subscriptions with recurring billing. Each of these
                    touchpoints creates data flows that must be disclosed in your
                    privacy policy.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Buyer Data Collection */}
              <section id="buyer-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Buyer Data Collection on Whop
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What personal data you receive when someone purchases
                      your digital product.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* Purchase Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Purchase and Account Data
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Buyer name and email address from Whop account registration
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Payment method type and last four digits (full card details handled by Stripe via Whop)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Purchase history, subscription status, and billing cycle dates
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Whop user ID and membership tier information
                      </li>
                    </ul>
                  </div>

                  {/* Membership Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Users className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Membership and Subscription Data
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Active subscription status, renewal dates, and cancellation timestamps
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Membership tier changes and upgrade/downgrade history
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Usage metrics for SaaS products (API calls, feature access, login frequency)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Free trial conversion data and promotional code usage
                      </li>
                    </ul>
                  </div>

                  {/* License Keys */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Key className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        License Key Management
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        License keys linked to buyer email and Whop user account
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Device activation data -- hardware IDs, IP addresses used for activation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        License validation checks log timestamps and requesting IP addresses
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Transfer and resale records if license reassignment is supported
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Integrations and API Data */}
              <section id="integrations" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Integrations and API Data Flows
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Whop sellers commonly integrate with external platforms for
                    community access, automation, and product delivery. Each
                    integration creates additional data flows that your privacy
                    policy must disclose.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Integration</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Data Shared</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Privacy Consideration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { integration: "Discord", data: "Discord user ID, username, server roles", consideration: "Whop auto-grants Discord roles on purchase -- links Whop account to Discord identity" },
                          { integration: "Telegram", data: "Telegram user ID, username, group membership", consideration: "Buyer added to private groups -- group admins see user profile data" },
                          { integration: "Webhooks", data: "Purchase events, user data payloads", consideration: "Webhook endpoints receive buyer PII -- ensure receiving servers are secure" },
                          { integration: "Whop API", data: "Full buyer profile, membership status, license data", consideration: "API access to buyer data requires disclosure of who accesses it and why" },
                          { integration: "Custom domains", data: "Analytics, cookies, visitor tracking", consideration: "Custom domain Whop pages may use your analytics tools -- disclose tracking" },
                        ].map((row, i) => (
                          <tr key={row.integration} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="py-3 px-4 font-medium text-slate-800">{row.integration}</td>
                            <td className="py-3 px-4 text-slate-600">{row.data}</td>
                            <td className="py-3 px-4 text-slate-600">{row.consideration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Important:</strong>{" "}
                        When a buyer purchases your Whop product and gets auto-added
                        to your Discord server, you are transferring their data to a
                        third-party platform. Under GDPR, this is a data transfer
                        that must be disclosed and may require the buyer&apos;s consent.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Payment and Refund Data */}
              <section id="payment-processing" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Payment Processing and Refund Data
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Whop handles payment processing through Stripe, but as the
                    seller, you are responsible for disclosing how financial data
                    is handled and how long you retain records of transactions
                    and refunds.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Whop as payment processor",
                        text: "Whop processes payments via Stripe on your behalf. Full credit card numbers are never stored by you or Whop -- Stripe handles PCI compliance. Disclose this relationship.",
                      },
                      {
                        label: "Transaction records",
                        text: "You receive transaction amounts, dates, buyer email, and payment status through the Whop dashboard. These records may be retained for tax and accounting purposes.",
                      },
                      {
                        label: "Refund data retention",
                        text: "When a buyer requests a refund, the transaction record is updated but not deleted. Refund reason, date, and amount are stored alongside the original purchase data.",
                      },
                      {
                        label: "Chargeback information",
                        text: "Disputed transactions may require sharing buyer data with Stripe and the buyer's bank. Disclose that chargeback disputes involve third-party data sharing.",
                      },
                      {
                        label: "Tax compliance",
                        text: "Whop collects and remits sales tax in applicable jurisdictions. Transaction data may be shared with tax authorities as required by law.",
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
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: What to Include */}
              <section id="what-to-include" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Your Whop Privacy Policy Must Include
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="space-y-4">
                    {[
                      {
                        icon: CreditCard,
                        iconBg: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "Payment and Transaction Disclosure",
                        desc: "Explain that Whop processes payments via Stripe, what transaction data you access, how long you retain purchase records, and your refund data practices.",
                      },
                      {
                        icon: MessageCircle,
                        iconBg: "bg-indigo-50",
                        iconColor: "text-indigo-600",
                        title: "Community Integration Data",
                        desc: "Disclose that purchasing your product may auto-add buyers to Discord or Telegram communities. Explain what data is shared with these platforms and who can see it.",
                      },
                      {
                        icon: Key,
                        iconBg: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "License and Access Management",
                        desc: "If you sell software with license keys, disclose the activation data collected (device IDs, IPs), validation frequency, and what happens to data when a license expires.",
                      },
                      {
                        icon: Zap,
                        iconBg: "bg-orange-50",
                        iconColor: "text-orange-600",
                        title: "Webhook and API Data Flows",
                        desc: "List any webhooks or API integrations that receive buyer data. Explain what external services process purchases and where data is transmitted.",
                      },
                      {
                        icon: Lock,
                        iconBg: "bg-rose-50",
                        iconColor: "text-rose-600",
                        title: "Data Retention and Deletion Rights",
                        desc: "Specify how long you keep buyer data after subscription cancellation or refund. Provide instructions for buyers to request deletion of their personal information.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}
                        >
                          <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 text-[15px]">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-500 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                      Generate Your Whop Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy for your Whop store
                      that covers buyer data, integrations, license management,
                      and compliance needs.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Whop-specific disclosures</span>
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
                      icon: CreditCard,
                      title: "E-commerce Privacy Policy",
                      desc: "Online store compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      icon: Globe,
                      title: "SaaS Privacy Policy",
                      desc: "Software service compliance",
                    },
                    {
                      href: "/privacy-policy-for-discord",
                      icon: MessageCircle,
                      title: "Privacy Policy for Discord",
                      desc: "Discord server compliance",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance requirements",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-twitch",
                      icon: FileText,
                      title: "Privacy Policy for Twitch",
                      desc: "Streamer compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-stripe",
                      icon: CreditCard,
                      title: "Privacy Policy for Stripe",
                      desc: "Payment processing compliance",
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
