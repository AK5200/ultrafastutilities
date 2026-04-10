import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  ClipboardList,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Users,
  Globe,
  Lock,
  HelpCircle,
  Clock,
  BarChart,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Surveys: Do You Need One? [2026]",
  description:
    "Find out if your survey needs a privacy policy. Covers Google Forms, Typeform, SurveyMonkey, GDPR consent, anonymous surveys, and research compliance.",
  keywords:
    "privacy policy for survey, survey privacy policy, do I need a privacy policy for a survey, Google Forms privacy, survey GDPR compliance",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-survey",
  },
  openGraph: {
    title: "Privacy Policy for Surveys: Do You Need One? [2026]",
    description:
      "Find out if your survey needs a privacy policy. Covers Google Forms, Typeform, SurveyMonkey, GDPR consent, anonymous surveys, and research compliance.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-survey",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Surveys | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Surveys: Do You Need One? [2026]",
    description:
      "Find out if your survey needs a privacy policy. Covers Google Forms, Typeform, SurveyMonkey, GDPR consent, anonymous surveys, and research compliance.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "do-you-need-one", title: "Do You Need One?" },
  { id: "survey-platforms", title: "Platform Requirements" },
  { id: "gdpr-consent", title: "GDPR Consent for Surveys" },
  { id: "anonymous-vs-identified", title: "Anonymous vs Identified" },
  { id: "survey-types", title: "Survey Types and Rules" },
  { id: "what-to-include", title: "What to Include" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForSurveyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Surveys: Do You Need One? [2026]",
            description:
              "Find out if your survey needs a privacy policy. Covers Google Forms, Typeform, SurveyMonkey, GDPR consent, anonymous surveys, and research compliance.",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Surveys", item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-survey" },
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
              <span className="text-slate-600">Privacy Policy for Surveys</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ClipboardList className="w-3.5 h-3.5" />
                Survey Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Surveys
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Surveys collect personal data -- from opinions and demographics
                to contact information. Here is when you need a privacy policy,
                what it should cover, and how each platform handles it.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For businesses, researchers, HR teams, and marketers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-google-forms"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Google Forms Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-typeform"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ClipboardList className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Typeform Policy
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
                  <span>8 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: Do You Need One? */}
              <section id="do-you-need-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Do You Need a Privacy Policy for a Survey?
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    The short answer: yes, if your survey collects any personally
                    identifiable information (PII). This includes names, email
                    addresses, IP addresses, demographic details, or even opinions
                    that could identify someone when combined with other data. Under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , personal data includes any information that can directly or
                    indirectly identify a natural person.
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Key point:</strong>{" "}
                        Even &quot;anonymous&quot; surveys often collect IP addresses and
                        browser metadata through the survey platform. Google Forms,
                        for example, collects the respondent&apos;s Google account
                        email if they are signed in -- unless you explicitly
                        disable this.
                      </div>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Most survey platforms also collect data on their own -- cookies,
                    device information, and usage analytics. Even if your questions
                    are anonymous, the platform itself may be processing personal
                    data, which means you need to disclose this to respondents.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Platform Requirements */}
              <section id="survey-platforms" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Survey Platform Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What the major survey platforms require and how they
                      handle respondent data.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* Google Forms */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Google Forms
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Collects respondent email by default if &quot;Collect email addresses&quot; is enabled
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Responses stored in Google Sheets -- subject to Google&apos;s data processing terms
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        No built-in privacy policy link field -- you must add it manually in the form description
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Google Workspace users can restrict forms to organization-only access
                      </li>
                    </ul>
                  </div>

                  {/* Typeform */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <ClipboardList className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Typeform
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Uses cookies and tracks respondent interactions (time spent, drop-off points)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Supports adding a consent checkbox and privacy policy link to forms
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Data stored on AWS servers -- Typeform acts as your data processor under GDPR
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Hidden fields can capture UTM parameters and referrer data automatically
                      </li>
                    </ul>
                  </div>

                  {/* SurveyMonkey */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <BarChart className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        SurveyMonkey
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Collects IP addresses and response metadata by default
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Offers anonymous response mode that strips identifiers -- but still uses cookies
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        HIPAA-compliant plan available for health-related surveys
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Enterprise plans include custom data processing agreements for GDPR
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: GDPR Consent for Surveys */}
              <section id="gdpr-consent" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
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
                      Consent for Survey Data
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Under GDPR, you need a lawful basis to process survey
                    responses from EU residents. For most surveys, consent is the
                    appropriate basis -- but it must be freely given, specific,
                    informed, and unambiguous.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Inform before collection",
                        text: "Respondents must know what data you collect, why, and how long you keep it before they submit the survey. Add a privacy notice at the start of the form.",
                      },
                      {
                        label: "Consent must be voluntary",
                        text: "Do not make survey completion mandatory for accessing a service or employment benefit. Forced participation undermines consent validity.",
                      },
                      {
                        label: "Right to withdraw",
                        text: "Respondents must be able to withdraw consent and request deletion of their responses. Provide clear instructions for how to do this.",
                      },
                      {
                        label: "Special category data",
                        text: "Questions about health, ethnicity, political opinions, or sexual orientation require explicit consent and additional safeguards under GDPR Article 9.",
                      },
                      {
                        label: "Cross-border transfers",
                        text: "If your survey platform stores data outside the EU (most do -- US-based servers), disclose this and reference the transfer mechanism (SCCs, adequacy decisions).",
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

              {/* Section 4: Anonymous vs Identified Surveys */}
              <section id="anonymous-vs-identified" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Anonymous vs Identified Surveys
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    The distinction between anonymous and identified surveys
                    affects your privacy obligations significantly. True
                    anonymity is harder to achieve than most people think.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Factor</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Anonymous Survey</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Identified Survey</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { factor: "Email collection", anonymous: "Disabled -- no email field", identified: "Email required or optional" },
                          { factor: "IP logging", anonymous: "Must be disabled in platform settings", identified: "Typically logged by default" },
                          { factor: "Privacy policy needed", anonymous: "Still recommended -- platform collects metadata", identified: "Required -- you are collecting PII" },
                          { factor: "GDPR applies", anonymous: "Only if data can indirectly identify someone", identified: "Yes -- full GDPR obligations apply" },
                          { factor: "Respondent can request deletion", anonymous: "Difficult -- cannot identify their response", identified: "Yes -- must be able to locate and delete" },
                        ].map((row, i) => (
                          <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="py-3 px-4 font-medium text-slate-800">{row.factor}</td>
                            <td className="py-3 px-4 text-slate-600">{row.anonymous}</td>
                            <td className="py-3 px-4 text-slate-600">{row.identified}</td>
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
                        A survey is not truly anonymous if you combine responses
                        with demographic data that could identify someone. A
                        response from &quot;female, age 34, marketing department&quot;
                        may be enough to identify a specific employee in a small
                        company.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Survey Types and Specific Rules */}
              <section id="survey-types" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Survey Types and Their Privacy Rules
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="space-y-4">
                    {[
                      {
                        icon: BarChart,
                        iconBg: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "Customer Feedback Surveys",
                        desc: "Linked to purchase or account data. Must disclose if responses are tied to customer profiles, used for product decisions, or shared with third-party analytics tools.",
                      },
                      {
                        icon: Users,
                        iconBg: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Employee Surveys",
                        desc: "Extra sensitivity required. Employees may feel coerced. Make participation voluntary, explain who sees results, and clarify whether responses are truly anonymous or linked to employee IDs.",
                      },
                      {
                        icon: HelpCircle,
                        iconBg: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "Academic Research Surveys",
                        desc: "Subject to Institutional Review Board (IRB) requirements. Must include informed consent, data security plan, and clear retention and destruction timelines. Often requires ethics approval.",
                      },
                      {
                        icon: Globe,
                        iconBg: "bg-orange-50",
                        iconColor: "text-orange-600",
                        title: "Market Research Surveys",
                        desc: "Often distributed via email lists or social media. Must disclose how contact information was obtained, what happens to responses, and whether data is sold or shared with clients.",
                      },
                      {
                        icon: Lock,
                        iconBg: "bg-rose-50",
                        iconColor: "text-rose-600",
                        title: "Health and Sensitive Topic Surveys",
                        desc: "Surveys about health conditions, mental health, financial status, or similar topics collect special category data under GDPR. Requires explicit consent and heightened security measures.",
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

              {/* Section 6: What to Include */}
              <section id="what-to-include" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Your Survey Privacy Policy Must Include
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="space-y-3">
                    {[
                      {
                        label: "Purpose of the survey",
                        text: "Explain why you are conducting the survey and how the responses will be used -- product improvement, research publication, HR decisions, or marketing.",
                      },
                      {
                        label: "Data collected",
                        text: "List all data points: form responses, email addresses, IP addresses, cookies set by the platform, timestamps, and any hidden fields or UTM parameters.",
                      },
                      {
                        label: "Survey platform disclosure",
                        text: "Name the platform (Google Forms, Typeform, SurveyMonkey) and link to their privacy policy. They are your data processor.",
                      },
                      {
                        label: "Anonymity status",
                        text: "Clearly state whether the survey is anonymous or identified. If anonymous, explain what steps you have taken to ensure anonymity.",
                      },
                      {
                        label: "Data retention",
                        text: "Specify how long you will keep survey responses and when they will be deleted. For research, this might be until publication plus a defined period.",
                      },
                      {
                        label: "Contact information",
                        text: "Provide an email address or contact form where respondents can ask questions, withdraw consent, or request deletion of their data.",
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
                      Generate Your Survey Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy for your surveys that
                      covers platform disclosures, respondent rights, and
                      compliance requirements.
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
                      <span>Survey-specific disclosures</span>
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
                      href: "/privacy-policy-for-google-forms",
                      icon: FileText,
                      title: "Privacy Policy for Google Forms",
                      desc: "Google Forms compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-typeform",
                      icon: ClipboardList,
                      title: "Privacy Policy for Typeform",
                      desc: "Typeform data compliance",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "General website compliance guide",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-airtable",
                      icon: BarChart,
                      title: "Privacy Policy for Airtable",
                      desc: "Database compliance guide",
                    },
                    {
                      href: "/how-to-add-a-privacy-policy-to-your-website",
                      icon: Globe,
                      title: "Add a Privacy Policy to Your Site",
                      desc: "Step-by-step placement guide",
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
