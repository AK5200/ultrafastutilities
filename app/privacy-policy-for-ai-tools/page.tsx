import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Brain,
  Server,
  Lock,
  Eye,
  Database,
  Globe,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for AI Tools: What You Must Disclose (2026) | ultrafastutilities",
  description:
    "Building an AI-powered app or tool? Your privacy policy must cover model training data, API data processing, AI decision-making, and user prompts. Complete guide for AI developers.",
  keywords:
    "privacy policy for ai tools, ai privacy policy, chatgpt app privacy policy, ai tool privacy requirements, llm privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-ai-tools",
  },
  openGraph: {
    title: "Privacy Policy for AI Tools: What You Must Disclose (2026) | ultrafastutilities",
    description: "Building an AI-powered app or tool? Your privacy policy must cover model training data, API data processing, AI decision-making, and user prompts. Complete guide for AI developers.",
    url: "https://ultrafastutilities.com/privacy-policy-for-ai-tools",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for AI Tools | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for AI Tools: What You Must Disclose (2026) | ultrafastutilities",
    description: "Building an AI-powered app or tool? Your privacy policy must cover model training data, API data processing, AI decision-making, and user prompts.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-ai-different", title: "Why AI Tools Are Different" },
  { id: "data-flows", title: "AI-Specific Data Flows" },
  { id: "api-providers", title: "API Provider Requirements" },
  { id: "gdpr-ai-act", title: "GDPR and the EU AI Act" },
  { id: "what-to-include", title: "What to Include" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForAiToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for AI Tools: What You Must Disclose (2026)",
            description: "Building an AI-powered app or tool? Your privacy policy must cover model training data, API data processing, AI decision-making, and user prompts.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-01-01",
            dateModified: "2026-03-27",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for AI Tools", item: "https://ultrafastutilities.com/privacy-policy-for-ai-tools" },
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
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">Privacy Policy for AI Tools</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Brain className="w-3.5 h-3.5" />
                AI Compliance 2026
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  AI Tools
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Building with OpenAI, Claude, Gemini, or any LLM? Your privacy
                policy needs AI-specific disclosures that most generators miss.
                Here is exactly what to include.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For AI SaaS builders, chatbot developers, and AI-powered apps.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-saas"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Server className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                SaaS Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                App Privacy Policy
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
                <span>Last updated: March 2026</span>
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

              {/* Section 1: Why AI Different */}
              <section id="why-ai-different" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why AI Tools Need a Different Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Standard privacy policies cover data collection and storage.
                    AI tools introduce an entirely new dimension: your users'
                    data may be processed by third-party AI models, potentially
                    used for model training, and subject to AI-specific
                    regulations like the{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      EU AI Act
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Key difference:</strong>{" "}
                        When a user types a prompt into your AI tool, that text
                        is sent to a third-party API (OpenAI, Anthropic, Google)
                        for processing. This is a data transfer that must be
                        disclosed -- even if you do not store the prompts yourself.
                      </div>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    AI tools also raise questions that traditional privacy policies
                    never had to address:
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      "Are user prompts sent to a third-party AI provider?",
                      "Does the AI provider use prompts to train future models?",
                      "Are AI-generated outputs stored, and who owns them?",
                      "Does the AI make automated decisions that affect users?",
                      "Can users opt out of AI processing for their data?",
                      "Where are AI model servers located (data residency)?",
                    ].map((question) => (
                      <div
                        key={question}
                        className="flex items-start gap-3 text-base leading-7 text-slate-700"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1.5" />
                        {question}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: AI Data Flows */}
              <section id="data-flows" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      AI-Specific Data Flows
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every AI tool creates data flows that traditional apps do not.
                      Your privacy policy must disclose each one.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* User Prompts */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        User Prompts and Inputs
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      {[
                        "Text prompts, questions, and instructions sent to the AI",
                        "Files, images, or documents uploaded for AI processing",
                        "Conversation history and chat context",
                        "Voice inputs transcribed and sent to the model",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AI Processing */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Server className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Third-Party AI Processing
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      {[
                        "Data transmitted to OpenAI, Anthropic, Google, or other AI APIs",
                        "API provider data retention policies (e.g., OpenAI retains API data for 30 days)",
                        "Whether the provider uses your data for model training (opt-out status)",
                        "Server locations where AI processing occurs (US, EU, etc.)",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AI Outputs */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        AI-Generated Outputs
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      {[
                        "Text responses, summaries, and generated content",
                        "Images, code, or other creative outputs",
                        "Whether outputs are stored and for how long",
                        "Who owns the intellectual property of AI outputs",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Automated Decisions */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <Eye className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Automated Decision-Making
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      {[
                        "Content moderation or filtering decisions",
                        "Recommendation or scoring algorithms",
                        "Risk assessments or eligibility determinations",
                        "Any AI output that directly affects a user's experience or access",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-slate-500 mt-3 ml-11">
                      Under{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR Article 22
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , users have the right not to be subject to purely automated
                      decisions with legal or significant effects.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: API Provider Requirements */}
              <section id="api-providers" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      API Provider Privacy Requirements
                    </h2>
                  </div>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Every major AI API provider requires you to have a privacy
                    policy that discloses your use of their services. Here is what
                    each provider requires:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Provider</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">API Data Retention</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Training Opt-Out</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Privacy Policy Required?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["OpenAI (GPT-4, DALL-E)", "30 days (API), longer for abuse monitoring", "Yes, API data not used for training by default", "Yes"],
                          ["Anthropic (Claude)", "As specified in usage policy", "API inputs not used for training", "Yes"],
                          ["Google (Gemini)", "Varies by endpoint and plan", "Configurable per project", "Yes"],
                          ["Meta (Llama via API)", "Depends on hosting provider", "Open-source model, self-hosted option", "Yes, if collecting user data"],
                          ["Mistral AI", "Per enterprise agreement", "Not used for training on API tier", "Yes"],
                        ].map(([provider, retention, training, required], i) => (
                          <tr
                            key={i}
                            className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}
                          >
                            <td className="px-4 py-3 font-medium text-slate-800 border-b border-slate-100">{provider}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{retention}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{training}</td>
                            <td className="px-4 py-3 border-b border-slate-100">
                              <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                                <CheckCircle className="w-3.5 h-3.5" />
                                {required}
                              </span>
                            </td>
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
                        Even if you self-host an open-source model like Llama or
                        Mistral, you still need a privacy policy if you collect
                        any user data. The model being open-source does not exempt
                        you from privacy law.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: GDPR and EU AI Act */}
              <section id="gdpr-ai-act" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GDPR and the EU AI Act
                    </h2>
                  </div>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          GDPR
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>{" "}
                        Requirements for AI Tools
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Lawful basis",
                          text: "Consent or legitimate interest for AI processing. Consent must be specific to AI use, not bundled with general terms.",
                        },
                        {
                          label: "Right to explanation",
                          text: "Article 22 gives users the right to obtain meaningful information about the logic involved in automated decisions.",
                        },
                        {
                          label: "Data minimization",
                          text: "Only send data to AI APIs that is necessary for the specific task. Do not send entire user profiles when a name suffices.",
                        },
                        {
                          label: "International transfers",
                          text: "Most AI APIs process data in the US. Disclose this transfer and ensure adequate safeguards (Standard Contractual Clauses).",
                        },
                        {
                          label: "Data subject rights",
                          text: "Users can request deletion of prompts and outputs. Explain how deletion works when data has been sent to a third-party API.",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50"
                        >
                          <Lock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                          <div>
                            <span className="font-semibold text-slate-900 text-sm">{item.label}:</span>{" "}
                            <span className="text-sm text-slate-600">{item.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="w-5 h-5 text-violet-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        EU AI Act (Effective August 2026)
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      The EU AI Act introduces the first comprehensive AI-specific
                      regulation. While it primarily targets high-risk AI systems,
                      it creates transparency obligations for all AI tools:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Clearly disclose that users are interacting with an AI system, not a human",
                        "Label AI-generated content as such (especially images, audio, and deepfakes)",
                        "Provide technical documentation about the AI system's capabilities and limitations",
                        "High-risk AI systems (hiring, credit, healthcare) face additional requirements including conformity assessments",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7 text-slate-700"
                        >
                          <CheckCircle className="w-4 h-4 text-violet-500 flex-shrink-0 mt-1.5" />
                          {item}
                        </div>
                      ))}
                    </div>
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
                      What to Include in Your AI Privacy Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A complete AI privacy policy checklist.
                    </p>
                  </div>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="space-y-4">
                    {[
                      {
                        section: "AI disclosure statement",
                        detail: "State clearly that your product uses artificial intelligence. Name the specific AI providers (e.g., 'We use OpenAI's GPT-4 API to power our chat feature').",
                      },
                      {
                        section: "Data sent to AI providers",
                        detail: "List exactly what data is transmitted to the AI API: user prompts, uploaded files, conversation context, metadata.",
                      },
                      {
                        section: "AI provider data practices",
                        detail: "Disclose each AI provider's retention policy, training data usage, and link to their privacy policy.",
                      },
                      {
                        section: "Model training opt-out",
                        detail: "State whether user data is used for model training. If it is, provide a clear opt-out mechanism.",
                      },
                      {
                        section: "AI output storage",
                        detail: "Explain whether AI-generated responses are stored, for how long, and whether they can be deleted.",
                      },
                      {
                        section: "Automated decision-making",
                        detail: "If your AI makes decisions affecting users (content filtering, recommendations, scoring), disclose this and explain how users can request human review.",
                      },
                      {
                        section: "Data residency",
                        detail: "Disclose where AI processing occurs. Most major AI APIs process in the United States, which is a cross-border data transfer under GDPR.",
                      },
                      {
                        section: "Accuracy disclaimer",
                        detail: "AI outputs can be inaccurate. State that AI-generated content should not be relied upon as legal, medical, or financial advice.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-xl border border-slate-200/80 hover:border-blue-200 hover:shadow-sm transition-all"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">
                            {item.section}
                          </p>
                          <p className="text-sm text-slate-600 mt-1">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Generate CTA */}
              <section id="generate" className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center">
                  <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-3">
                    Generate Your AI Tool Privacy Policy
                  </h2>
                  <p className="text-slate-300 max-w-lg mx-auto mb-6">
                    Get a customized privacy policy that covers your AI API
                    integrations, data processing, model training disclosures,
                    and automated decision-making -- in under 2 minutes.
                  </p>
                  <Link href="/generate">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                      Generate My AI Privacy Policy
                    </Button>
                  </Link>
                  <p className="text-slate-400 text-xs mt-3">
                    Covers OpenAI, Anthropic, Google AI, and all major providers
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Resources */}
              <section id="resources" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Database className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Related Resources
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px] grid sm:grid-cols-2 gap-3">
                  {[
                    { title: "Privacy Policy for SaaS", desc: "Cloud software privacy requirements", href: "/privacy-policy-for-saas" },
                    { title: "Privacy Policy for Apps", desc: "Mobile and web application compliance", href: "/privacy-policy-for-apps" },
                    { title: "GDPR Privacy Policy Template", desc: "EU data protection requirements", href: "/gdpr-privacy-policy-template" },
                    { title: "Privacy Policy for Firebase", desc: "Google Firebase data handling", href: "/privacy-policy-for-firebase" },
                    { title: "ChatGPT Privacy Policy Risks", desc: "Risks of using ChatGPT in your business", href: "/chatgpt-privacy-policy-risks" },
                    { title: "Privacy Policy for Chrome Extension", desc: "Browser extension privacy guide", href: "/privacy-policy-for-chrome-extension" },
                    { title: "What Should a Privacy Policy Include", desc: "Complete privacy policy checklist", href: "/what-should-a-privacy-policy-include" },
                    { title: "How to Write a Privacy Policy", desc: "Step-by-step writing guide", href: "/how-to-write-a-privacy-policy" },
                  ].map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                    >
                      <ArrowUpRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <div>
                        <p className="font-medium text-slate-800 group-hover:text-blue-700">
                          {resource.title}
                        </p>
                        <p className="text-slate-500 text-sm">{resource.desc}</p>
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
