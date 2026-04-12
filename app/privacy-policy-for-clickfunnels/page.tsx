import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  ShoppingCart,
  AlertTriangle,
  CheckCircle,
  Ban,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Mail,
  CreditCard,
  Users,
  Clock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for ClickFunnels: Complete Guide (2026) | ultrafastutilities",
  description:
    "Learn what to include in your ClickFunnels privacy policy. Covers order form data, upsells, Follow-up Funnels, Stripe/PayPal integration, and GDPR compliance.",
  keywords:
    "privacy policy for clickfunnels, clickfunnels privacy policy, clickfunnels gdpr, clickfunnels data collection, funnel builder privacy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-clickfunnels",
  },
  openGraph: {
    title: "Privacy Policy for ClickFunnels: Complete Guide (2026) | ultrafastutilities",
    description: "Learn what to include in your ClickFunnels privacy policy. Covers order form data, upsells, Follow-up Funnels, Stripe/PayPal integration, and GDPR compliance.",
    url: "https://ultrafastutilities.com/privacy-policy-for-clickfunnels",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for ClickFunnels | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for ClickFunnels: Complete Guide (2026) | ultrafastutilities",
    description: "Learn what to include in your ClickFunnels privacy policy. Covers order form data, upsells, Follow-up Funnels, Stripe/PayPal integration, and GDPR compliance.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "does-clickfunnels-require-policy", title: "Does ClickFunnels Require a Policy?" },
  { id: "what-data-clickfunnels-collects", title: "What Data ClickFunnels Collects" },
  { id: "order-forms-and-payments", title: "Order Forms and Payment Data" },
  { id: "follow-up-funnels-email", title: "Follow-up Funnels and Email Marketing" },
  { id: "gdpr-ccpa-compliance", title: "GDPR and CCPA Compliance" },
  { id: "where-to-add-policy", title: "Where to Add Your Policy Link" },
  { id: "what-to-include", title: "What to Include in Your Policy" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "faq", title: "FAQ" },
];

export default function PrivacyPolicyForClickFunnels() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for ClickFunnels: Complete Guide (2026)",
            description: "Learn what to include in your ClickFunnels privacy policy.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-01-01",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for ClickFunnels", item: "https://ultrafastutilities.com/privacy-policy-for-clickfunnels" },
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
                name: "Does ClickFunnels require a privacy policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. ClickFunnels requires all funnel pages that collect personal data (opt-in forms, order forms, contact forms) to have a visible link to a privacy policy. Without it, ClickFunnels can suspend your account. Additionally, GDPR, CCPA, and other privacy laws require a policy whenever you collect personal data from visitors.",
                },
              },
              {
                "@type": "Question",
                name: "Where do I add a privacy policy link in ClickFunnels?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In ClickFunnels 2.0, go to your funnel page editor and add a text element or footer section with a link to your hosted privacy policy. Best practice is to add it near any form where data is collected, and in your site footer. You can also add it globally via your page templates.",
                },
              },
              {
                "@type": "Question",
                name: "What data does ClickFunnels collect?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ClickFunnels collects lead information submitted in opt-in forms (name, email, phone), order data from purchase forms (billing info processed by Stripe/PayPal), funnel analytics (page visits, conversions, traffic sources), and behavioral data for A/B testing. ClickFunnels also uses cookies for tracking and session management.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need GDPR consent for ClickFunnels opt-in forms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if you collect email addresses from EU or UK residents, GDPR requires explicit consent. Add a clear opt-in checkbox (unchecked by default) near your form stating what subscribers will receive. Do not pre-check it. Store consent records including timestamp, form version, and IP address for compliance documentation.",
                },
              },
              {
                "@type": "Question",
                name: "Does ClickFunnels share my customers' data?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ClickFunnels shares customer data with third-party service providers necessary to operate the platform, including payment processors (Stripe, PayPal), email service providers integrated with your account, and infrastructure providers. As the funnel owner, you are the data controller and must disclose all third parties in your own privacy policy.",
                },
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
            "@type": "HowTo",
            name: "How to Create a Privacy Policy for ClickFunnels",
            step: [
              { "@type": "HowToStep", name: "List all data collection points", text: "Identify every opt-in form, order form, contact form, and upsell page in your funnels." },
              { "@type": "HowToStep", name: "Identify all integrations", text: "List your email platform, payment processors, analytics tools, and ad pixels connected to ClickFunnels." },
              { "@type": "HowToStep", name: "Draft your policy", text: "Cover data collected, legal basis, how it is used, third parties, retention, and user rights." },
              { "@type": "HowToStep", name: "Add GDPR consent checkboxes", text: "Place unchecked consent checkboxes near opt-in forms for EU visitors." },
              { "@type": "HowToStep", name: "Link from every funnel page", text: "Add your privacy policy link to all funnel page footers and near every form." },
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
              <span className="text-slate-600">Privacy Policy for ClickFunnels</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShoppingCart className="w-3.5 h-3.5" />
                ClickFunnels Privacy Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  ClickFunnels
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about privacy compliance for your ClickFunnels funnels -- from opt-in forms and order pages to Follow-up Funnels and Stripe integration.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for funnel owners and marketers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-kajabi"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Kajabi Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-dropshipping"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShoppingCart className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Dropshipping Privacy
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
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

              {/* Featured snippet */}
              <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-6 mb-10">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-lg font-bold text-blue-900 mb-2">Quick Answer: Does ClickFunnels Require a Privacy Policy?</h2>
                    <p className="text-sm leading-relaxed text-slate-700">
                      Yes. ClickFunnels requires a visible privacy policy link on any funnel page that collects personal data. Without one, ClickFunnels can suspend or terminate your account.
                      Additionally, privacy laws (GDPR, CCPA, CAN-SPAM) independently require a policy for any funnel that captures leads or processes payments from consumers in regulated jurisdictions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: Does ClickFunnels Require a Policy? */}
              <section id="does-clickfunnels-require-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Does ClickFunnels Require a Privacy Policy?
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-4">
                    ClickFunnels explicitly requires funnel owners to include a link to a privacy policy on any page that collects personal information. This includes opt-in pages, order forms, webinar registration pages, and contact pages. ClickFunnels can take enforcement action -- including account suspension -- against funnels that lack this disclosure.
                  </p>
                  <p className="text-base leading-7 text-slate-700 mb-4">
                    Beyond ClickFunnels' own requirements, applicable law requires a privacy policy in the following situations:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: Mail, label: "Email list building", desc: "Any opt-in form collecting email addresses" },
                      { icon: CreditCard, label: "Order forms", desc: "Any page collecting billing or payment data" },
                      { icon: Users, label: "EU/UK visitors", desc: "GDPR applies to all EU and UK resident data" },
                      { icon: ShieldCheck, label: "California users", desc: "CCPA thresholds may apply to large funnels" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 rounded-xl border border-slate-200/80 p-4 hover:border-blue-200 hover:shadow-sm transition-all">
                        <item.icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                          <p className="text-slate-500 text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: What Data ClickFunnels Collects */}
              <section id="what-data-clickfunnels-collects" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Data ClickFunnels Collects
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      ClickFunnels collects data at multiple levels -- both as the platform provider and as the tool through which you collect your own leads' data.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Data Type</th>
                          <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Collected By</th>
                          <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Your Policy Responsibility</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Opt-in form data (name, email, phone)", "You (via ClickFunnels forms)", "Full disclosure required"],
                          ["Order form data (billing, shipping)", "You + payment processor", "Disclose, reference processor policy"],
                          ["Funnel page analytics (views, conversions)", "ClickFunnels platform", "Note third-party analytics"],
                          ["Traffic source / UTM parameters", "ClickFunnels + ad platforms", "Disclose ad tracking pixels"],
                          ["Session cookies", "ClickFunnels platform", "Include in cookie disclosure"],
                          ["IP addresses", "ClickFunnels platform", "Covered by ClickFunnels' own policy"],
                          ["A/B test behavioral data", "ClickFunnels platform", "Disclose use of split testing"],
                        ].map(([type, by, responsibility], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            <td className="border border-slate-300 px-4 py-2 font-medium text-slate-700">{type}</td>
                            <td className="border border-slate-300 px-4 py-2 text-slate-600">{by}</td>
                            <td className="border border-slate-300 px-4 py-2 text-slate-600">{responsibility}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: Order Forms and Payment Data */}
              <section id="order-forms-and-payments" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Order Forms and Payment Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      ClickFunnels integrates with Stripe, PayPal, and other payment gateways to process orders.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">What You Receive as the Funnel Owner</h3>
                    <div className="space-y-3">
                      {[
                        "Customer name and email",
                        "Shipping/billing address",
                        "Product purchased and amount paid",
                        "Transaction ID (not the full card number)",
                        "Purchase timestamp and funnel source",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 text-base leading-7">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">What Payment Processors Handle</h3>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      Stripe and PayPal handle card data directly under their own PCI-compliant systems. You do not receive raw card numbers. However, your privacy policy must still:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Name Stripe and/or PayPal as data processors",
                        "Link to their respective privacy policies",
                        "Explain what order data you retain and for how long",
                        "State the legal basis for processing payment data (contract performance)",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 text-base leading-7">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">One-Click Upsells (OTO) and Order Bumps</h3>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      ClickFunnels' upsell and order bump features process additional charges using stored payment credentials. Your privacy policy should note that:
                    </p>
                    <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                      <div className="flex gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm leading-relaxed text-slate-700">
                          <strong className="text-slate-900">Did you know?</strong>{" "}
                          When customers accept a one-click upsell, their payment details are passed to the processor again. Many funnel owners forget to disclose that stored payment credentials from the initial order may be used to process upsells without re-entering payment details.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: Follow-up Funnels and Email Marketing */}
              <section id="follow-up-funnels-email" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Follow-up Funnels and Email Marketing
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      ClickFunnels 2.0 includes Follow-up Funnels (formerly Actionetics), a built-in email marketing system.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    If you use Follow-up Funnels or integrate an external email platform (ActiveCampaign, Klaviyo, Mailchimp, AWeber), your privacy policy must cover:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        title: "Email platform used",
                        desc: "Name the email service you use (ClickFunnels Follow-up Funnels, ActiveCampaign, etc.) and explain they process subscriber data on your behalf.",
                      },
                      {
                        title: "Types of emails sent",
                        desc: "Specify whether you send transactional emails (receipts, confirmations), marketing emails (promotions, launches), or automated sequences.",
                      },
                      {
                        title: "Behavioral tracking",
                        desc: "Email platforms track opens, clicks, and conversions. Disclose this email-level behavioral tracking in your policy.",
                      },
                      {
                        title: "Unsubscribe mechanism",
                        desc: "CAN-SPAM and GDPR both require you to honor unsubscribe requests. State how quickly you process them (within 10 business days per CAN-SPAM).",
                      },
                      {
                        title: "International data transfers",
                        desc: "US-based email platforms (ClickFunnels, ActiveCampaign) may transfer EU subscriber data outside the EU. Disclose Standard Contractual Clauses or other transfer mechanisms.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200/80 p-4">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                          <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: GDPR and CCPA Compliance */}
              <section id="gdpr-ccpa-compliance" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GDPR and CCPA Compliance for ClickFunnels
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        GDPR Requirements for EU Lead Funnels
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      If your ClickFunnels funnels target or receive leads from EU or UK residents, GDPR applies regardless of where your business is based:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Add an unchecked consent checkbox to all opt-in forms (pre-checked boxes are not valid under GDPR)",
                        "State specifically what subscribers are consenting to (\"I agree to receive marketing emails...\")",
                        "Store consent records: timestamp, IP address, form version, and consent text",
                        "Provide a clear, prominent link to your privacy policy on every form page",
                        "Honor data subject access requests within 30 days",
                        "Honor deletion requests (\"right to be forgotten\") within 30 days",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 text-base leading-7">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
                      <div className="flex gap-3">
                        <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm leading-relaxed text-slate-700">
                          <strong className="text-slate-900">ClickFunnels and GDPR Compliance Tools:</strong>{" "}
                          ClickFunnels 2.0 includes GDPR-specific features including consent checkboxes and a cookie banner. However, you must configure these yourself -- they are not enabled by default. Always verify your funnel's GDPR settings before running traffic from the EU.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        CCPA Requirements
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      CCPA applies if you collect data from California residents and your business meets certain thresholds. For ClickFunnels funnel owners, key CCPA obligations include:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Disclose categories of personal information collected through your funnels",
                        "State the business purpose for each category",
                        "Disclose whether you sell or share customer data (e.g., to affiliate networks)",
                        "Provide a \"Do Not Sell My Personal Information\" link if you share data for advertising",
                        "Respond to consumer rights requests within 45 days",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 text-base leading-7">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: Where to Add Your Policy Link */}
              <section id="where-to-add-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Where to Add Your Privacy Policy Link in ClickFunnels
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-4">
                    Best practice is to link your privacy policy from multiple locations within your funnels:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Location</th>
                          <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Why</th>
                          <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Priority</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Footer of every funnel page", "Global visibility, legal standard", "Required"],
                          ["Near opt-in form submit button", "Transparency at point of collection", "Required"],
                          ["Order form page footer", "Payment data collection disclosure", "Required"],
                          ["Thank you page footer", "Post-conversion confirmation", "Recommended"],
                          ["Email footer (Follow-up Funnels)", "CAN-SPAM and CASL compliance", "Required"],
                          ["Webinar registration page", "Event registration data collection", "Required"],
                        ].map(([loc, why, priority], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            <td className="border border-slate-300 px-4 py-2 font-medium text-slate-700">{loc}</td>
                            <td className="border border-slate-300 px-4 py-2 text-slate-600">{why}</td>
                            <td className="border border-slate-300 px-4 py-2">
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priority === "Required" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
                                {priority}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-base leading-7 text-slate-700">
                    In ClickFunnels 2.0, you can add a footer to your page templates globally so every funnel page automatically includes the privacy policy link. Go to your page editor, add a footer section with navigation links, and include "Privacy Policy" linking to your hosted policy URL.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: What to Include */}
              <section id="what-to-include" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What to Include in Your ClickFunnels Privacy Policy
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-3">
                  {[
                    {
                      section: "1. Business Identity",
                      content: "Your name, business name, email address, and physical address for legal notices.",
                    },
                    {
                      section: "2. Data Collected",
                      content: "Name, email, phone (opt-in forms); billing address, transaction data (order forms); behavioral data (page views, email opens, link clicks).",
                    },
                    {
                      section: "3. Legal Basis for Processing",
                      content: "Consent (marketing emails), contract performance (order fulfillment), legitimate interest (funnel analytics, fraud prevention).",
                    },
                    {
                      section: "4. How Data Is Used",
                      content: "Sending ordered products or digital access, sending marketing emails, running retargeting ads, improving funnel performance.",
                    },
                    {
                      section: "5. Third-Party Processors",
                      content: "ClickFunnels (platform), Stripe/PayPal (payments), your email platform, ad networks (Facebook, Google), analytics tools. Link to each provider's policy.",
                    },
                    {
                      section: "6. Affiliate Data Sharing",
                      content: "If you use ClickFunnels' affiliate program or share leads with JV partners, disclose what data is shared and under what circumstances.",
                    },
                    {
                      section: "7. Data Retention",
                      content: "How long you retain lead records, order history, and email subscriber data. Account for legal retention requirements for financial records (typically 7 years).",
                    },
                    {
                      section: "8. User Rights",
                      content: "Right to access, correct, delete, or port personal data. Provide a contact email for requests. State your response timeframe.",
                    },
                    {
                      section: "9. Cookie Disclosure",
                      content: "ClickFunnels uses session cookies and tracking cookies. Disclose any ad tracking pixels (Meta, Google, TikTok) you add to your funnel pages.",
                    },
                    {
                      section: "10. Policy Updates",
                      content: "State how you will notify subscribers of material changes to the policy.",
                    },
                  ].map((item) => (
                    <div key={item.section} className="flex items-start gap-3 rounded-xl border border-slate-200/80 p-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{item.section}</p>
                        <p className="text-slate-600 text-sm mt-0.5">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      5 Common ClickFunnels Privacy Policy Mistakes
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      title: "Pre-checking the GDPR consent checkbox",
                      desc: "GDPR requires explicit, freely given consent. Pre-checked opt-in boxes are invalid under GDPR and can result in fines up to EUR 20 million or 4% of global turnover.",
                    },
                    {
                      title: "Not disclosing all ad tracking pixels",
                      desc: "Meta Pixel, Google Ads, TikTok Pixel -- each tracks visitor behavior for ad retargeting. Each must be named in your privacy policy and covered by a cookie consent mechanism.",
                    },
                    {
                      title: "Forgetting to link the policy from email sequences",
                      desc: "Every marketing email sent through Follow-up Funnels or your email platform must include an unsubscribe link and your privacy policy link in the footer. This is required by CAN-SPAM and CASL.",
                    },
                    {
                      title: "Not updating when adding new integrations",
                      desc: "Adding a new payment processor, email platform, or analytics tool means updating your privacy policy. Many funnel owners add ActiveCampaign or Stripe without updating their policy.",
                    },
                    {
                      title: "Using a generic template that doesn't mention ClickFunnels",
                      desc: "Generic privacy policy templates do not cover ClickFunnels-specific data practices like Follow-up Funnel behavioral tracking, one-click upsell data reuse, and ClickFunnels' own data collection.",
                    },
                  ].map((mistake, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-red-200/80 bg-red-50/50 p-4">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-800 text-sm">{mistake.title}</p>
                        <p className="text-red-700 text-sm mt-0.5">{mistake.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      q: "Does ClickFunnels require a privacy policy?",
                      a: "Yes. ClickFunnels requires a visible privacy policy link on any funnel page that collects personal data, including opt-in pages, order forms, and contact forms. ClickFunnels can suspend accounts that violate this policy. Applicable privacy laws also independently require a privacy policy for any funnel that collects personal information.",
                    },
                    {
                      q: "Where do I add a privacy policy link in ClickFunnels?",
                      a: "In ClickFunnels 2.0, add a footer section to your page templates with a 'Privacy Policy' text link pointing to your hosted policy URL. This ensures all funnel pages include the link. Also add it near any opt-in or order form submit button for maximum visibility and compliance.",
                    },
                    {
                      q: "What data does ClickFunnels collect?",
                      a: "ClickFunnels collects lead information submitted through your opt-in forms (name, email, phone), order data processed via Stripe/PayPal (billing details handled by the processor), funnel analytics (page views, conversions, traffic sources), and session cookies. As the funnel owner, you receive the lead and order data; ClickFunnels retains platform analytics.",
                    },
                    {
                      q: "Do I need GDPR consent for ClickFunnels opt-in forms?",
                      a: "Yes, if you collect email addresses from EU or UK residents. GDPR requires an explicit, unchecked opt-in checkbox near your form stating exactly what subscribers are signing up for. Store consent records (timestamp, IP, form version) and honor access and deletion requests within 30 days. ClickFunnels 2.0 has built-in GDPR consent checkbox features you should configure.",
                    },
                    {
                      q: "Does ClickFunnels share my customers' data?",
                      a: "ClickFunnels shares data with third-party service providers necessary to operate the platform (Stripe, PayPal, infrastructure providers). ClickFunnels' own policy governs these. As the funnel owner, you control your leads' data and must disclose any sharing you do -- such as with joint venture partners, affiliate programs, or ad retargeting platforms.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border border-slate-200/80 p-5">
                      <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* CTA Section */}
              <section className="scroll-mt-24">
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
                      Generate Your ClickFunnels Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy covering your ClickFunnels funnels, opt-in forms, payment processors, Follow-up Funnels email sequences, and ad pixels -- in under 2 minutes.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy Free
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>ClickFunnels-ready disclosures</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Related Resources */}
              <section className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { href: "/privacy-policy-for-kajabi", title: "Privacy Policy for Kajabi", desc: "Kajabi compliance guide" },
                    { href: "/privacy-policy-for-affiliate-marketing", title: "Privacy Policy for Affiliate Marketing", desc: "Affiliate compliance guide" },
                    { href: "/privacy-policy-for-dropshipping", title: "Privacy Policy for Dropshipping", desc: "Dropshipping compliance guide" },
                    { href: "/ecommerce-privacy-policy-template", title: "Ecommerce Privacy Policy Template", desc: "Ecommerce template guide" },
                    { href: "/privacy-policy-fines-and-penalties", title: "Privacy Policy Fines and Penalties", desc: "Fines and penalties overview" },
                    { href: "/gdpr-privacy-policy-requirements", title: "GDPR Privacy Policy Requirements", desc: "GDPR compliance requirements" },
                    { href: "/privacy-policy-for-membership-site", title: "Privacy Policy for Membership Sites", desc: "Membership site compliance" },
                    { href: "/how-to-write-a-privacy-policy", title: "How to Write a Privacy Policy", desc: "Step-by-step writing guide" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="group">
                      <div className="h-full rounded-xl border border-slate-200/80 p-4 hover:border-blue-200 hover:shadow-sm transition-all bg-white/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors">
                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
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
