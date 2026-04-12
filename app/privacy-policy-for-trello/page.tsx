import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Users,
  Globe,
  Lock,
  Clock,
  Puzzle,
  Settings,
  Eye,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Trello: Project Data Guide [2026]",
  description:
    "Create a privacy policy for Trello boards. Covers client data, Power-Up integrations, Atlassian privacy, workspace permissions, and GDPR. Generate now.",
  keywords:
    "privacy policy for trello, trello privacy policy, trello GDPR, trello data processing, trello atlassian privacy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-trello",
  },
  openGraph: {
    title: "Privacy Policy for Trello: Project Data Guide [2026]",
    description:
      "Create a privacy policy for Trello boards. Covers client data, Power-Up integrations, Atlassian privacy, workspace permissions, and GDPR. Generate now.",
    url: "https://ultrafastutilities.com/privacy-policy-for-trello",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Trello | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Trello: Project Data Guide [2026]",
    description:
      "Create a privacy policy for Trello boards. Covers client data, Power-Up integrations, Atlassian privacy, workspace permissions, and GDPR. Generate now.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-trello", title: "Why Trello Needs a Policy" },
  { id: "data-flows", title: "Trello Data Flows" },
  { id: "atlassian-privacy", title: "Trello and Atlassian" },
  { id: "gdpr-compliance", title: "GDPR Compliance" },
  { id: "policy-sections", title: "What to Include" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForTrelloPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Trello: Project Data Guide [2026]",
            description:
              "Create a privacy policy for Trello boards. Covers client data, Power-Up integrations, Atlassian privacy, workspace permissions, and GDPR. Generate now.",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Trello", item: "https://ultrafastutilities.com/privacy-policy-for-trello" },
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
              <span className="text-slate-600">Privacy Policy for Trello</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Layers className="w-3.5 h-3.5" />
                Project Management Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Trello
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Trello boards often contain client data, project details, and
                team member information. With Power-Up integrations and Butler
                automations, data flows beyond Trello itself.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For teams, agencies, and freelancers using Trello.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-zapier"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Settings className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Zapier Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-airtable"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Airtable Privacy Policy
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
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

              {/* Section 1: Why Trello Needs a Privacy Policy */}
              <section id="why-trello" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Trello Users Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Trello boards frequently contain personal data -- client
                    names, project details, contact information, file
                    attachments, and team member data. If you use Trello for
                    client work, manage external contributors, or connect
                    Power-Ups that access board data, you are processing
                    personal information that must be disclosed under{" "}
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
                    .
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Key point:</strong>{" "}
                        Trello is owned by Atlassian. When you use Trello, you
                        are subject to Atlassian's privacy policy and data
                        processing practices. Your own privacy policy should
                        reference this relationship and link to Atlassian's
                        privacy policy.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Trello Data Flows */}
              <section id="data-flows" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Trello Data Flows
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Trello boards collect and expose data at multiple levels --
                      workspace, board, list, and card.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* Board and Card Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Layers className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Board and Card Content
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Card titles, descriptions, and comments containing client or project data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Custom fields with contact information, deadlines, or budget details
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        File attachments (documents, images, contracts) stored on Trello or linked
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Checklist items that may reference individuals or personal details
                      </li>
                    </ul>
                  </div>

                  {/* Member and Workspace Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Member and Workspace Data
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Member names, email addresses, and Atlassian account profiles
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Activity logs showing who viewed, edited, or moved cards
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Board membership and permission levels (admin, member, observer)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        @mentions and card assignments linking users to specific tasks
                      </li>
                    </ul>
                  </div>

                  {/* Power-Up Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Puzzle className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Power-Up Integrations
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Power-Ups can read and write board data, card content, and member information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Calendar, time tracking, and reporting Power-Ups access task and member data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Slack, Google Drive, and Jira integrations sync data with external platforms
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Each Power-Up has its own privacy policy and data retention practices
                      </li>
                    </ul>
                  </div>

                  {/* Butler Automation Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <Settings className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Butler Automations
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Butler rules can automatically move, archive, or modify cards containing personal data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Email commands send board data to external email addresses
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        HTTP requests in Butler can send card data to external APIs and webhooks
                      </li>
                    </ul>
                    <p className="text-sm text-slate-500 mt-3 ml-11">
                      Butler automations connected to{" "}
                      <Link
                        href="/privacy-policy-for-zapier"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        Zapier
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      or other automation tools create additional data flows you
                      must disclose.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Trello as Atlassian Product */}
              <section id="atlassian-privacy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Trello as an Atlassian Product
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Trello was acquired by Atlassian in 2017 and is now fully
                    integrated into the Atlassian ecosystem. This means
                    Atlassian's privacy policy governs how Trello data is
                    handled at the infrastructure level.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Aspect</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Your Responsibility</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Atlassian's Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { aspect: "Board content", you: "You control what data is added to boards", atlassian: "Stores and processes per their DPA" },
                          { aspect: "Member access", you: "You manage who can access boards", atlassian: "Provides permission infrastructure" },
                          { aspect: "Data location", you: "Enterprise can choose data residency", atlassian: "Multi-region hosting (US, EU, AU)" },
                          { aspect: "Power-Up data", you: "You choose which Power-Ups to enable", atlassian: "Reviews Power-Ups in marketplace" },
                          { aspect: "Data deletion", you: "You delete boards and cards", atlassian: "Purges from backups within 90 days" },
                        ].map((row, i) => (
                          <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="py-3 px-4 font-medium text-slate-800">{row.aspect}</td>
                            <td className="py-3 px-4 text-slate-600">{row.you}</td>
                            <td className="py-3 px-4 text-slate-600">{row.atlassian}</td>
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
                        Atlassian offers data residency for Trello Enterprise
                        customers, allowing you to pin data to specific regions
                        (US, EU, Australia). Standard and Premium plans store data
                        in the US by default.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: GDPR Compliance */}
              <section id="gdpr-compliance" className="scroll-mt-24">
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
                      Compliance for Trello Users
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <p className="text-base leading-7 text-slate-600 mb-4">
                      If your Trello boards contain data about EU residents --
                      whether team members, clients, or project stakeholders --
                      you must address GDPR compliance.
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Workspace vs board access",
                          text: "Workspace members can see all workspace-visible boards. Board-level permissions control who sees specific content. Your policy should explain this access hierarchy.",
                        },
                        {
                          label: "Client data on boards",
                          text: "If you store client names, contacts, or project details on Trello cards, those clients have GDPR rights over that data even if they do not have Trello accounts.",
                        },
                        {
                          label: "Public boards",
                          text: "Public Trello boards are indexed by search engines. Never put personal data on public boards. If you have used public boards with personal data, switch them to private immediately.",
                        },
                        {
                          label: "Data portability",
                          text: "Trello allows JSON export of board data. You must be able to provide this data to individuals who request it under GDPR Article 20.",
                        },
                        {
                          label: "Atlassian DPA",
                          text: "Atlassian provides a Data Processing Addendum for Cloud products including Trello. Enterprise customers should have this DPA signed and referenced in their privacy policy.",
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
                      What Your Trello Privacy Policy Must Include
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Your privacy policy should cover these Trello-specific areas:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Layers,
                        iconBg: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "Atlassian Relationship Disclosure",
                        desc: "State that Trello is an Atlassian product and that Atlassian's privacy policy and DPA govern infrastructure-level data handling. Link to Atlassian's privacy policy.",
                      },
                      {
                        icon: Eye,
                        iconBg: "bg-purple-50",
                        iconColor: "text-purple-600",
                        title: "Board Access and Visibility",
                        desc: "Explain the different board visibility levels (private, workspace, public) and who can access data at each level. Describe your workspace access policies.",
                      },
                      {
                        icon: Puzzle,
                        iconBg: "bg-orange-50",
                        iconColor: "text-orange-600",
                        title: "Power-Up Data Sharing",
                        desc: "List all enabled Power-Ups and explain that they can access board data. Link to each Power-Up's privacy policy where available.",
                      },
                      {
                        icon: Settings,
                        iconBg: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Butler Automation Disclosure",
                        desc: "If Butler rules send data externally (email commands, HTTP requests, connected services), disclose these automated data transfers.",
                      },
                      {
                        icon: Lock,
                        iconBg: "bg-rose-50",
                        iconColor: "text-rose-600",
                        title: "Client Data Protection",
                        desc: "If you store client data on Trello boards, explain how you protect it -- board permissions, workspace access controls, and your data handling procedures.",
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
                      Generate Your Trello Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy that covers your Trello
                      boards, Power-Ups, automations, and team data.
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
                      <span>Trello-specific disclosures</span>
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
                      href: "/privacy-policy-for-zapier",
                      icon: Settings,
                      title: "Privacy Policy for Zapier",
                      desc: "Automation data compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-airtable",
                      icon: FileText,
                      title: "Privacy Policy for Airtable",
                      desc: "Database compliance guide",
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
