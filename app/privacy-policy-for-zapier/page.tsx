import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Workflow,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Database,
  Globe,
  Lock,
  Clock,
  RefreshCw,
  Layers,
  Share2,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Zapier: Automation Data Guide [2026]",
  description:
    "Create a privacy policy for Zapier automations. Covers data flowing through Zaps, multi-app sharing, data retention, and GDPR compliance. Generate now.",
  keywords:
    "privacy policy for zapier, zapier privacy policy, zapier GDPR, zapier data processing, zapier automation privacy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-zapier",
  },
  openGraph: {
    title: "Privacy Policy for Zapier: Automation Data Guide [2026]",
    description:
      "Create a privacy policy for Zapier automations. Covers data flowing through Zaps, multi-app sharing, data retention, and GDPR compliance. Generate now.",
    url: "https://ultrafastutilities.com/privacy-policy-for-zapier",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Zapier | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Zapier: Automation Data Guide [2026]",
    description:
      "Create a privacy policy for Zapier automations. Covers data flowing through Zaps, multi-app sharing, data retention, and GDPR compliance. Generate now.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-zapier", title: "Why Zapier Needs a Policy" },
  { id: "data-flows", title: "Data Flowing Through Zaps" },
  { id: "zapier-processor", title: "Zapier as Data Processor" },
  { id: "gdpr-transfers", title: "GDPR Transfer Implications" },
  { id: "policy-sections", title: "What to Include" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForZapierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Zapier: Automation Data Guide [2026]",
            description:
              "Create a privacy policy for Zapier automations. Covers data flowing through Zaps, multi-app sharing, data retention, and GDPR compliance. Generate now.",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Zapier", item: "https://ultrafastutilities.com/privacy-policy-for-zapier" },
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
              <span className="text-slate-600">Privacy Policy for Zapier</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Workflow className="w-3.5 h-3.5" />
                Automation Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Zapier
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Zapier connects hundreds of apps and transfers personal data
                between them automatically. Your privacy policy must disclose
                every data flow your Zaps create.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Zapier users, automation builders, and developers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-airtable"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Database className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Airtable Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-trello"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Layers className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Trello Privacy Policy
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
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />

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
                  <span>8 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: Why Zapier Needs a Privacy Policy */}
              <section id="why-zapier" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Zapier Users Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Zapier is an automation platform that connects over 6,000 apps.
                    Every Zap you build creates a data pipeline -- personal information
                    flows from a trigger app through Zapier to one or more action
                    apps. Under{" "}
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
                    , you must disclose these automated data transfers to your users.
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Key point:</strong>{" "}
                        A single Zap can send a customer email from your form
                        tool to Google Sheets, Mailchimp, and Slack simultaneously.
                        Each destination is a separate data sharing disclosure you
                        must include in your privacy policy.
                      </div>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Beyond Zaps, Zapier now offers Tables (a database product) and
                    Interfaces (form and page builders) that collect data directly
                    from visitors. If you use these features, you are collecting
                    personal data through Zapier itself, not just routing it.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Data Flowing Through Zaps */}
              <section id="data-flows" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Data Flowing Through Zaps
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every Zap creates a data flow that your privacy policy
                      must account for.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* Trigger Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <RefreshCw className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Trigger Data (Incoming)
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Form submissions with names, emails, and custom fields
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        New customer records from CRMs or ecommerce platforms
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Payment events with transaction and billing data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Email and calendar events containing participant details
                      </li>
                    </ul>
                  </div>

                  {/* Action Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Share2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Action Data (Outgoing)
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Data written to spreadsheets, databases, or{" "}
                        <Link
                          href="/privacy-policy-for-airtable"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          Airtable
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Subscriber data sent to email marketing platforms
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Customer details posted to Slack or team messaging tools
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Records created in project management tools like{" "}
                        <Link
                          href="/privacy-policy-for-trello"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          Trello
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Zapier Tables and Interfaces */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Layers className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Zapier Tables and Interfaces
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Zapier Tables store structured data that persists between Zap runs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Interfaces collect form submissions and display data to visitors
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Chatbots built with Interfaces may collect conversation data
                      </li>
                    </ul>
                    <p className="text-sm text-slate-500 mt-3 ml-11">
                      Tables and Interfaces turn Zapier from a pass-through
                      automation tool into a data storage platform.
                    </p>
                  </div>

                  {/* Data Retention */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <Database className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        What Zapier Retains
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Task history logs that include input and output data (retained based on plan)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Free plans retain task history for 7 days, paid plans up to 1 year
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Authentication tokens and API keys for connected accounts
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Zapier as Data Processor */}
              <section id="zapier-processor" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Zapier as Data Processor
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Under GDPR, Zapier acts as a data processor that handles
                    personal data on your behalf. You remain the data controller
                    and are responsible for ensuring compliance across your entire
                    automation chain.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Aspect</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">You (Controller)</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Zapier (Processor)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { task: "Building Zaps", you: "You decide what data flows where", zapier: "Executes your instructions" },
                          { task: "Consent collection", you: "You obtain consent before data enters Zaps", zapier: "No direct role" },
                          { task: "Multi-app disclosure", you: "You list every connected app", zapier: "Provides sub-processor list" },
                          { task: "Data deletion", you: "You handle deletion requests across all apps", zapier: "Deletes task history on request" },
                          { task: "DPA", you: "Must sign Zapier DPA", zapier: "Provides DPA for all plans" },
                        ].map((row, i) => (
                          <tr key={row.task} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="py-3 px-4 font-medium text-slate-800">{row.task}</td>
                            <td className="py-3 px-4 text-slate-600">{row.you}</td>
                            <td className="py-3 px-4 text-slate-600">{row.zapier}</td>
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
                        Each app connected through Zapier is a separate
                        sub-processor. A Zap with 5 action steps means personal
                        data is shared with 5 different third-party services, and
                        each must be disclosed.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: GDPR Transfer Implications */}
              <section id="gdpr-transfers" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                      >
                        GDPR
                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                      </Link>{" "}
                      Transfer Implications
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <p className="text-base leading-7 text-slate-600 mb-4">
                      Zapier is a US-based company, and data processed through
                      Zaps passes through US servers. For EU personal data, you
                      must address international transfer mechanisms.
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Data location",
                          text: "Zapier processes data on US-based infrastructure (AWS). EU data transfers rely on Standard Contractual Clauses (SCCs) in Zapier's DPA.",
                        },
                        {
                          label: "Chain of transfers",
                          text: "Data may flow from an EU user to your trigger app, to Zapier in the US, then to each action app (potentially in different countries). Each hop is a transfer.",
                        },
                        {
                          label: "Lawful basis",
                          text: "Consent or legitimate interests for automation processing. Contractual necessity if automations are part of service delivery.",
                        },
                        {
                          label: "Data minimization",
                          text: "Only map the fields you actually need in each Zap step. Avoid passing entire records when you only need an email address.",
                        },
                        {
                          label: "Task history",
                          text: "Zapier's task history contains full input/output data. Configure your plan's retention settings and note this in your privacy policy.",
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
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: What to Include */}
              <section id="policy-sections" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Your Zapier Privacy Policy Must Include
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Your privacy policy should specifically address these Zapier-related areas:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Share2,
                        iconBg: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "Complete App List Disclosure",
                        desc: "List every third-party app connected through your Zaps that receives personal data. Group them by purpose -- email marketing, CRM, analytics, project management.",
                      },
                      {
                        icon: Workflow,
                        iconBg: "bg-purple-50",
                        iconColor: "text-purple-600",
                        title: "Automated Processing Description",
                        desc: "Explain that data is transferred automatically between services without manual review, and describe the purpose of each automation.",
                      },
                      {
                        icon: Database,
                        iconBg: "bg-orange-50",
                        iconColor: "text-orange-600",
                        title: "Zapier Data Retention",
                        desc: "Disclose that Zapier retains task history (including personal data) for up to 1 year depending on plan, and that Tables data persists indefinitely until deleted.",
                      },
                      {
                        icon: Globe,
                        iconBg: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "International Transfer Disclosure",
                        desc: "State that Zapier processes data in the US and explain the safeguards in place (SCCs, DPA) for international data transfers.",
                      },
                      {
                        icon: Lock,
                        iconBg: "bg-rose-50",
                        iconColor: "text-rose-600",
                        title: "Data Subject Rights Across Apps",
                        desc: "Explain how users can exercise deletion, access, and correction rights when their data exists across multiple connected apps.",
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
                      Generate Your Zapier Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy that covers your Zapier
                      automations, connected apps, and data transfer disclosures.
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
                      <span>Automation-specific disclosures</span>
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
                      href: "/privacy-policy-for-airtable",
                      icon: Database,
                      title: "Privacy Policy for Airtable",
                      desc: "Database compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-trello",
                      icon: Layers,
                      title: "Privacy Policy for Trello",
                      desc: "Project board data compliance",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-canva",
                      icon: FileText,
                      title: "Privacy Policy for Canva",
                      desc: "Design tool compliance guide",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "General website compliance guide",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: FileText,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie compliance requirements",
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
