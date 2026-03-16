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
  Scale,
  Users,
  Lock,
  ClipboardCheck,
  Globe,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Chrome Extension GDPR Compliance: Complete Developer Guide (2026) | ultrafastutilities",
  description:
    "Make your Chrome extension GDPR compliant. Covers lawful basis for data processing, consent mechanisms, data minimization, user rights implementation, and DPA requirements for extension developers.",
  keywords:
    "chrome extension gdpr compliance, chrome extension gdpr, browser extension gdpr, chrome extension data protection, chrome extension privacy regulation europe",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/chrome-extension-gdpr-compliance",
  },
  openGraph: {
    title:
      "Chrome Extension GDPR Compliance: Complete Developer Guide (2026) | ultrafastutilities",
    description:
      "Make your Chrome extension GDPR compliant. Covers lawful basis for data processing, consent mechanisms, data minimization, user rights implementation, and DPA requirements for extension developers.",
    url: "https://ultrafastutilities.com/chrome-extension-gdpr-compliance",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chrome Extension GDPR Compliance | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chrome Extension GDPR Compliance: Complete Developer Guide (2026)",
    description:
      "Make your Chrome extension GDPR compliant. Covers lawful basis, consent, data minimization, user rights, and DPA requirements.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does GDPR apply to Chrome extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GDPR applies to any software that processes personal data of individuals in the European Economic Area, regardless of where the developer is located. Chrome extensions that collect browsing data, user preferences, cookies, or any other information that can identify a person are subject to GDPR. The regulation applies even if your extension is free and you do not monetize the data.",
      },
    },
    {
      "@type": "Question",
      name: "What is the lawful basis for processing data in a Chrome extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR requires one of six lawful bases for processing personal data: consent, contractual necessity, legal obligation, vital interests, public task, or legitimate interests. Most Chrome extensions rely on either consent (user explicitly agrees to data processing) or legitimate interests (processing is necessary for a purpose the user reasonably expects). You must identify and document your lawful basis before processing any data.",
      },
    },
    {
      "@type": "Question",
      name: "How do I implement GDPR consent in a Chrome extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR consent must be freely given, specific, informed, and unambiguous. In a Chrome extension, this typically means showing a consent dialog on first install or first use that clearly explains what data you collect and why. The consent must be opt-in, not pre-checked. Users must be able to withdraw consent at any time through your extension settings. You must keep records of when and how consent was given.",
      },
    },
    {
      "@type": "Question",
      name: "What user rights must my Chrome extension support under GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR grants users eight rights: the right to be informed, right of access, right to rectification, right to erasure, right to restrict processing, right to data portability, right to object, and rights related to automated decision-making. Your extension must provide mechanisms for users to exercise these rights, particularly access, erasure, and portability. You must respond to requests within 30 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Data Processing Agreement for my Chrome extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your Chrome extension shares personal data with third-party services such as analytics providers, cloud storage, or APIs that process user data on your behalf, you need a Data Processing Agreement with each of those services. The DPA must outline what data is shared, how it is processed, security measures, and data subject rights. Without DPAs, your data sharing is non-compliant.",
      },
    },
    {
      "@type": "Question",
      name: "What is data minimization and how does it apply to Chrome extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data minimization is a core GDPR principle requiring you to collect only the personal data that is strictly necessary for your stated purpose. For Chrome extensions, this means requesting only the permissions you actually need, collecting only the data required for your extension's functionality, and not retaining data longer than necessary. If your extension can function with less data, you must reduce what you collect.",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for GDPR non-compliance for Chrome extension developers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR penalties can reach up to 20 million euros or 4% of annual global turnover, whichever is higher. While large fines are typically reserved for major corporations, individual developers and small companies have received fines in the thousands to hundreds of thousands of euros. Beyond fines, non-compliance can result in enforcement orders requiring you to stop processing data, and your extension can be removed from the Chrome Web Store.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Make Your Chrome Extension GDPR Compliant",
  description:
    "Follow these seven steps to achieve full GDPR compliance for your Chrome extension, covering lawful basis, consent, data minimization, user rights, and documentation.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Identify your lawful basis for data processing",
      text: "Review the six lawful bases under GDPR and determine which one applies to each type of data your extension processes. Document your lawful basis for each processing activity. Most extensions rely on consent or legitimate interests.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Conduct a data mapping exercise",
      text: "Map every piece of personal data your extension collects, processes, stores, or transmits. Document the source of each data point, where it is stored, who has access, how long it is retained, and whether it is shared with third parties.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Implement a GDPR-compliant consent mechanism",
      text: "Build a consent dialog that appears on first use. The consent must be freely given, specific, informed, and unambiguous. Provide granular options so users can consent to different types of processing separately. Store consent records with timestamps.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Apply data minimization principles",
      text: "Review every permission your extension requests and remove any that are not strictly necessary. Reduce the amount of data collected to what is required for core functionality. Set retention periods and automatically delete data that is no longer needed.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Build user rights mechanisms into your extension",
      text: "Create interfaces or processes that allow users to access their data, request deletion, export their data in a portable format, and withdraw consent. Ensure you can respond to these requests within the 30-day GDPR deadline.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Establish Data Processing Agreements with third parties",
      text: "Identify every third-party service your extension shares data with. Execute a Data Processing Agreement with each one that covers the scope of processing, security measures, data subject rights, and breach notification procedures.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Create a GDPR-compliant privacy policy and maintain records",
      text: "Draft a privacy policy that covers all GDPR-required disclosures including your identity, lawful basis, data categories, retention periods, user rights, and international transfers. Maintain a Record of Processing Activities as required by Article 30.",
    },
  ],
};

const tocSections = [
  { id: "does-gdpr-apply", title: "Does GDPR Apply to Extensions?" },
  { id: "lawful-bases", title: "Six Lawful Bases for Processing" },
  { id: "consent-mechanisms", title: "Consent in Chrome Extensions" },
  { id: "data-minimization", title: "Data Minimization for Extensions" },
  { id: "user-rights", title: "User Rights Implementation" },
  { id: "data-processing-agreements", title: "Data Processing Agreements" },
  { id: "compliance-checklist", title: "GDPR Compliance Checklist" },
  { id: "common-mistakes", title: "Common GDPR Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function ChromeExtensionGdprCompliancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Chrome Extension GDPR Compliance: Complete Developer Guide (2026)",
            description:
              "Make your Chrome extension GDPR compliant. Covers lawful basis for data processing, consent mechanisms, data minimization, user rights implementation, and DPA requirements for extension developers.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-16",
            dateModified: "2026-03-16",
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
                name: "Chrome Extension GDPR Compliance",
                item: "https://ultrafastutilities.com/chrome-extension-gdpr-compliance",
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
                Chrome Extension GDPR Compliance
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Developer Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Chrome Extension{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  GDPR Compliance
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                GDPR applies to every Chrome extension that processes personal
                data of users in the European Economic Area. This guide covers
                everything you need to know to make your extension fully
                compliant.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Chrome extension developers, indie makers, and teams
                building for European users.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                Chrome Web Store compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-chrome-extension"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Extension Privacy Policies
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                GDPR Policy Template
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
                    Need a GDPR policy?
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
                <span>Last updated: March 2026</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>14 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>GDPR applies to any Chrome extension that processes personal data of individuals in the European Economic Area.</strong>{" "}
                  This includes collecting browsing data, storing user
                  preferences, reading page content, tracking user activity, or
                  sharing data with third-party services. You must establish a
                  lawful basis for processing, implement consent mechanisms,
                  minimize data collection, support user rights, and maintain
                  proper documentation regardless of where you are located as a
                  developer.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                The General Data Protection Regulation is the most comprehensive
                privacy law in the world, and it applies to Chrome extensions
                just as it applies to websites, mobile apps, and any other
                software that processes personal data. If even one user of your
                extension is in the EU, EEA, or UK, GDPR governs how you handle
                their data.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                Chrome extensions present unique GDPR challenges because they
                often operate across multiple websites, have deep access to
                browsing behavior, and can read or modify content on any page
                the user visits. The permissions model of Chrome extensions means
                that even a simple utility can have access to data that
                triggers significant GDPR obligations.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide walks through every aspect of GDPR compliance for
                Chrome extension developers. It covers the six lawful bases for
                processing, how to implement consent properly, data minimization
                principles, user rights you must support, Data Processing
                Agreements with third parties, and a complete compliance
                checklist.
              </p>

              {/* Section 1: Does GDPR Apply? */}
              <section id="does-gdpr-apply" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Does GDPR Apply to Chrome Extensions?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Yes. GDPR applies whenever you process personal data of
                  individuals who are in the European Economic Area. It does not
                  matter where you as a developer are located. If your extension
                  is available on the Chrome Web Store and users in the EU can
                  install it, you are subject to GDPR.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  &quot;Personal data&quot; under GDPR is defined broadly. It
                  includes any information that can directly or indirectly
                  identify a natural person. For Chrome extensions, this includes
                  IP addresses, browsing history, URLs visited, search queries,
                  cookies, device identifiers, user preferences stored in
                  chrome.storage, and any content the user enters on web pages
                  that your extension can access.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The regulation applies regardless of whether your extension is
                  free or paid, whether you monetize data or not, and whether you
                  are a solo developer or a large company. The obligations scale
                  with the volume and sensitivity of data you process, but the
                  core requirements apply to everyone.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  There are two ways GDPR can apply to your extension. First,
                  under Article 3(1), if you are established in the EU and
                  process personal data in the context of that establishment.
                  Second, under Article 3(2), if you are outside the EU but
                  offer your extension to individuals in the EU or monitor their
                  behavior. Since Chrome extensions are globally available by
                  default, most extension developers fall under Article 3(2).
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Globe className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Global</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Applies regardless of developer location
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">450M+</p>
                    <p className="text-xs text-slate-500 mt-1">
                      EU residents protected by GDPR
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <AlertTriangle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">4%</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Maximum fine as % of global turnover
                    </p>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: I am based in the US. Does GDPR still apply to my
                      Chrome extension?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. GDPR has extraterritorial reach. If your extension is
                      available to users in the EU through the Chrome Web Store,
                      and it processes their personal data, you are subject to
                      GDPR regardless of where your business is located. The
                      only way to avoid GDPR would be to geo-block EU users
                      entirely, which is impractical for most extensions.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does GDPR apply if my extension only stores data
                      locally?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. GDPR covers any processing of personal data, not just
                      data that leaves the user&apos;s device. Even storing data
                      in chrome.storage.local constitutes processing under GDPR.
                      The scope and obligations may be reduced if you only store
                      data locally, but the regulation still applies.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Six Lawful Bases */}
              <section id="lawful-bases" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Six Lawful Bases for Processing Data
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Under GDPR Article 6, you must have a valid lawful basis
                  before you process any personal data. There is no default
                  right to process data. You must actively choose and document
                  which basis applies to each type of processing your extension
                  performs.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For Chrome extensions, the two most relevant bases are consent
                  and legitimate interests. However, understanding all six helps
                  you choose the right one and avoid misapplying a basis that
                  does not actually fit your situation.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                          Lawful Basis
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Description
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[38%]">
                          Chrome Extension Example
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Consent
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User has given clear, affirmative agreement to
                          processing for a specific purpose
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User opts in to analytics tracking in your extension
                          settings
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contractual necessity
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Processing is necessary to fulfill a contract with the
                          user
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Paid extension that must verify license keys or manage
                          subscription status
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Legal obligation
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Processing is required to comply with the law
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Retaining transaction records for tax compliance
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Vital interests
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Processing is necessary to protect someone&apos;s life
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Rarely applicable to extensions; emergency health
                          monitoring tools
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Public task
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Processing is necessary for a task in the public
                          interest
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Government-developed accessibility extensions
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Legitimate interests
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Processing is necessary for your legitimate interests,
                          balanced against user rights
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Storing user preferences locally to deliver core
                          functionality
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  You cannot switch lawful bases after you start processing. If
                  you choose consent and the user withdraws it, you cannot
                  retroactively claim legitimate interests for the same data.
                  Choose carefully, document your reasoning, and make sure your
                  privacy policy clearly states which basis you rely on for each
                  type of processing.
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
                        The legitimate interests basis requires you to conduct a
                        Legitimate Interests Assessment (LIA) before relying on
                        it. This is a documented balancing test where you weigh
                        your interest in processing the data against the
                        individual&apos;s rights and freedoms. If the user&apos;s
                        rights outweigh your interests, you cannot use this
                        basis. Many extension developers skip the LIA and claim
                        legitimate interests without proper justification, which
                        is a compliance risk.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Consent in Chrome Extensions */}
              <section id="consent-mechanisms" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Implementing GDPR Consent in Chrome Extensions
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If you rely on consent as your lawful basis, GDPR sets a high
                  bar. Consent must be freely given, specific, informed, and
                  unambiguous. Pre-checked boxes, bundled consent, and implied
                  consent do not meet the GDPR standard. Users must take a clear
                  affirmative action to consent.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Requirements for Valid Consent
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Freely given:</strong> Users must have a genuine
                      choice. You cannot make the extension unusable if they
                      decline non-essential data processing. Core functionality
                      should work without analytics or tracking consent.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Specific:</strong> Consent must be given for each
                      distinct processing purpose. A single &quot;I agree to
                      everything&quot; checkbox is not sufficient. If you collect
                      data for functionality and analytics, those need separate
                      consent options.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Informed:</strong> Before consenting, users must
                      know who is collecting the data, what data is collected,
                      why it is collected, who it is shared with, and how long
                      it is kept. Use plain language, not legal jargon.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Unambiguous:</strong> Consent requires a clear
                      affirmative action such as clicking &quot;I agree&quot; or
                      toggling a switch. Silence, inactivity, or pre-ticked
                      boxes do not constitute consent.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Withdrawable:</strong> Users must be able to
                      withdraw consent at any time, and it must be as easy to
                      withdraw as it was to give. Provide a clear option in your
                      extension settings to revoke consent.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Practical Implementation
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  The most common approach for Chrome extensions is to show a
                  consent dialog when the extension is first installed or first
                  opened. This dialog should clearly explain what data the
                  extension collects and provide granular toggle options for
                  different types of processing. Store consent records in
                  chrome.storage.local with timestamps so you can prove when
                  and how consent was obtained.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For extensions that process data across websites (using
                  content scripts), consider showing a brief notification or
                  indicator when the extension is actively processing data on a
                  page. Transparency builds trust and aligns with the GDPR
                  principle of fair processing.
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
                        Under GDPR, the burden of proof for consent lies with
                        you, the data controller. If a user claims they never
                        consented, you must be able to demonstrate that they
                        did. This means storing consent records that include
                        what the user was told, what they agreed to, when they
                        agreed, and how they gave their consent. A simple
                        boolean flag in storage is not sufficient proof.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Data Minimization */}
              <section id="data-minimization" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Minimization for Chrome Extensions
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Data minimization is one of GDPR&apos;s core principles under
                  Article 5(1)(c). It requires that personal data be adequate,
                  relevant, and limited to what is necessary for the purposes
                  for which it is processed. For Chrome extension developers,
                  this has direct implications for how you design your extension
                  and which permissions you request.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Permissions and Data Minimization
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Every Chrome extension permission you request represents
                  potential access to personal data. GDPR requires you to only
                  request permissions that are strictly necessary for your
                  extension&apos;s stated functionality. If your extension is a
                  tab manager, it needs the tabs permission. It does not need
                  history, bookmarks, or cookies unless those are directly
                  relevant to its function.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Use the activeTab permission instead of broad host permissions
                  whenever possible. Use optional_permissions in your manifest to
                  request access only when needed, rather than upfront. This
                  approach aligns with both GDPR data minimization and
                  Google&apos;s minimum permissions policy.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Storage and Retention
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Do not store data you do not need. If your extension reads
                  page content to perform a calculation but does not need to
                  remember the result, do not persist it. If you store user
                  preferences, set retention periods and automatically clean up
                  data that is no longer needed. GDPR&apos;s storage limitation
                  principle (Article 5(1)(e)) requires that data is kept only
                  for as long as necessary.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Be especially careful with chrome.storage.sync, which syncs
                  data across the user&apos;s devices through their Google
                  account. Only use sync storage for data that genuinely needs
                  to follow the user across devices. Use chrome.storage.local
                  for everything else, and use chrome.storage.session for data
                  that should not persist between browser sessions.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: How long can I retain user data under GDPR?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      GDPR does not set specific retention periods. Instead, it
                      requires that you keep data only as long as necessary for
                      the purpose it was collected. You must define and document
                      your retention periods, communicate them in your privacy
                      policy, and implement automated deletion when the period
                      expires.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does anonymized data count under GDPR?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Truly anonymized data is outside the scope of GDPR.
                      However, the bar for anonymization is high. If there is
                      any reasonable possibility that the data could be
                      re-identified, it is pseudonymized, not anonymized, and
                      GDPR still applies. Aggregated analytics that cannot be
                      traced back to individuals may qualify as anonymized.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: User Rights */}
              <section id="user-rights" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  User Rights Implementation
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  GDPR grants individuals a set of rights over their personal
                  data. As a Chrome extension developer, you must provide
                  mechanisms for users to exercise these rights. You must respond
                  to valid requests within 30 days and cannot charge a fee
                  unless the request is manifestly unfounded or excessive.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Right
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          What It Means
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Extension Implementation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Right to be informed
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Users must know what data you collect and why
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Clear privacy policy linked from extension settings
                          and store listing
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Right of access
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Users can request a copy of their data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Export function in settings or email-based data request
                          process
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Right to rectification
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Users can correct inaccurate data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Editable settings or support contact for corrections
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Right to erasure
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Users can request deletion of their data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          &quot;Delete my data&quot; button in extension settings
                          that clears all stored data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Right to restrict processing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Users can limit how their data is used
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Granular toggles in settings to disable specific
                          processing activities
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Right to data portability
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Users can receive their data in a machine-readable
                          format
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          JSON or CSV export of all user data stored by the
                          extension
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Right to object
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Users can object to processing based on legitimate
                          interests
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Opt-out mechanism and contact information for
                          objections
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Automated decision-making
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Users can opt out of automated profiling decisions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclosure if extension uses algorithmic filtering or
                          categorization
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  For most Chrome extensions, the right to erasure and right of
                  access are the most commonly exercised. Build a &quot;Delete
                  all my data&quot; function into your extension settings. If
                  your extension sends data to a server, the deletion must also
                  remove server-side data. For access requests, provide a way
                  for users to export everything your extension stores about
                  them.
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
                        The right to erasure is not absolute. You can refuse a
                        deletion request if you have a legal obligation to
                        retain the data, if the data is needed for establishing
                        or defending legal claims, or if another lawful basis
                        overrides the request. However, you must respond to the
                        request within 30 days and explain your reasoning if
                        you decline.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Data Processing Agreements */}
              <section id="data-processing-agreements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Processing Agreements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If your Chrome extension shares personal data with any
                  third-party service, GDPR Article 28 requires you to have a
                  Data Processing Agreement (DPA) in place with that service.
                  This applies to analytics providers, cloud hosting, error
                  tracking services, APIs that process user data, and any other
                  service that handles personal data on your behalf.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Common third-party services that Chrome extensions use and
                  that require DPAs include: Google Analytics, Firebase,
                  Sentry for error tracking, Mixpanel, AWS or Google Cloud for
                  server-side processing, and any custom backend API you
                  operate. If you use any of these services and they process
                  personal data from your extension&apos;s EU users, you need a
                  DPA.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What a DPA Must Include
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Subject matter and duration:</strong> What data is
                      being processed, for what purpose, and for how long the
                      processing will occur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Nature and purpose:</strong> A clear description
                      of what the processor does with the data and why.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data categories and subjects:</strong> The types
                      of personal data shared and the categories of individuals
                      whose data is processed.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Security measures:</strong> Technical and
                      organizational measures the processor has in place to
                      protect the data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Breach notification:</strong> The processor must
                      notify you without undue delay if a data breach occurs, so
                      you can notify the supervisory authority within 72 hours.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Sub-processor controls:</strong> Rules about
                      whether the processor can engage sub-processors and what
                      approvals are required.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Most major service providers like Google, AWS, and Microsoft
                  offer standard DPAs that you can accept through their
                  dashboards or terms of service. For smaller or custom services,
                  you may need to negotiate and sign a DPA directly. Keep copies
                  of all DPAs as part of your GDPR documentation.
                </p>
              </section>

              {/* Section 7: GDPR Compliance Checklist */}
              <section id="compliance-checklist" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  GDPR Compliance Checklist for Chrome Extensions
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Use this checklist to verify that your Chrome extension meets
                  all core GDPR requirements. Each item represents a concrete
                  obligation that applies to extensions processing personal
                  data of EU users.
                </p>

                <div className="space-y-3">
                  {[
                    "Identified and documented a lawful basis for each type of data processing",
                    "Implemented a GDPR-compliant consent mechanism with granular options",
                    "Created a privacy policy that discloses all required GDPR information",
                    "Applied data minimization: only collecting data strictly necessary for functionality",
                    "Requested only the Chrome extension permissions your extension actually needs",
                    "Set data retention periods and implemented automatic deletion",
                    "Built a user data export function (right of access and portability)",
                    "Built a user data deletion function (right to erasure)",
                    "Provided opt-out mechanisms for non-essential processing",
                    "Executed Data Processing Agreements with all third-party services",
                    "Documented all processing activities in a Record of Processing Activities",
                    "Implemented appropriate security measures for stored data",
                    "Created a process for handling data subject requests within 30 days",
                    "Assessed whether a Data Protection Impact Assessment is required",
                    "Designated a point of contact for privacy inquiries",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 bg-white"
                    >
                      <ClipboardCheck className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: Common GDPR Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common GDPR Mistakes Chrome Extension Developers Make
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the most frequent GDPR compliance failures seen in
                  Chrome extensions. Each one represents a real risk of
                  enforcement action, fines, or extension removal.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Treating installation as consent
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Installing a Chrome extension is not GDPR consent. The
                        act of clicking &quot;Add to Chrome&quot; is consent to
                        install the extension, not consent to process personal
                        data. You must obtain separate, explicit consent for
                        data processing through your own consent mechanism. Many
                        developers assume that because the user chose to install
                        the extension, they have agreed to all data processing.
                        This is incorrect under GDPR.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: No mechanism for data deletion
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The right to erasure (Article 17) requires that users
                        can request deletion of their personal data. If your
                        extension stores data in chrome.storage, on a server,
                        or through a third-party service, and you have no way
                        for users to delete that data, you are non-compliant.
                        Build a &quot;Delete all my data&quot; function into
                        your extension or provide a clear process for users to
                        request deletion via email.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Using analytics without consent or a DPA
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Adding Google Analytics, Mixpanel, or any analytics
                        service to your Chrome extension without obtaining user
                        consent and having a Data Processing Agreement in place
                        is a double violation. Analytics services process
                        personal data (IP addresses, usage patterns, device
                        information) and are considered data processors under
                        GDPR. You need both user consent and a DPA before
                        sending any data to these services.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Requesting more permissions than needed
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Requesting broad permissions like &lt;all_urls&gt; or
                        permissions you do not actually use violates the data
                        minimization principle. Every unnecessary permission
                        represents potential access to personal data that you
                        have no lawful basis to process. Review your manifest.json
                        and remove any permission that is not directly required
                        for your extension&apos;s core functionality.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Generic privacy policy that does not mention
                        the extension
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Using a generic website privacy policy template without
                        customizing it for your Chrome extension is insufficient.
                        GDPR requires specific disclosures about the data your
                        extension collects, the permissions it uses, how data
                        flows through browser APIs, and what third-party
                        services receive data from the extension. A{" "}
                        <Link
                          href="/chrome-extension-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          Chrome extension privacy policy template
                        </Link>{" "}
                        is a better starting point.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How to Steps Section */}
              <section className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Make Your Chrome Extension GDPR Compliant (7 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow this process to achieve full GDPR compliance for your
                  Chrome extension. Each step addresses a specific GDPR
                  requirement.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Identify your lawful basis for each processing activity
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review every type of data your extension processes and
                        determine the appropriate lawful basis. For analytics
                        and tracking, consent is usually required. For core
                        functionality, legitimate interests may apply. Document
                        your reasoning and keep it on file.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Conduct a complete data mapping exercise
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Map every piece of personal data your extension touches.
                        Document what is collected, where it comes from, where
                        it is stored, who has access, how long it is kept, and
                        whether it is shared with any third party. This map
                        forms the basis of your Record of Processing Activities.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Build a GDPR-compliant consent mechanism
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Create an onboarding or first-use dialog that clearly
                        explains what data you collect and why. Provide granular
                        consent toggles for different processing activities.
                        Store consent records with timestamps. Provide an easy
                        way to withdraw consent in extension settings.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Apply data minimization across your extension
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Remove unnecessary permissions from your manifest.json.
                        Reduce data collection to the minimum required for
                        functionality. Set retention periods for all stored data.
                        Use chrome.storage.session for ephemeral data and
                        chrome.storage.local instead of sync when cross-device
                        persistence is not needed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Implement user rights mechanisms
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Build data export (JSON or CSV), data deletion, and
                        processing restriction controls into your extension
                        settings. Provide a contact email for data subject
                        requests. Set up a process to handle requests within the
                        30-day GDPR deadline.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Execute DPAs with all third-party services
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Identify every service that processes personal data from
                        your extension. Sign Data Processing Agreements with
                        each one. For major providers like Google, AWS, and
                        Firebase, accept their standard DPA through their admin
                        console. For custom services, negotiate directly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      7
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Create your GDPR-compliant privacy policy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Use a{" "}
                        <Link
                          href="/generate"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          privacy policy generator
                        </Link>{" "}
                        to create a policy that includes all GDPR-required
                        disclosures: your identity, lawful basis for each
                        processing activity, data categories, retention periods,
                        user rights, third-party recipients, and international
                        transfer safeguards. Link the policy from your extension
                        settings and your{" "}
                        <Link
                          href="/chrome-web-store-privacy-policy-requirements"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          Chrome Web Store listing
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Generate Your GDPR-Compliant Privacy Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Answer a few questions about your Chrome extension and
                        get a privacy policy that covers GDPR lawful basis,
                        user rights, data processing disclosures, and
                        international transfer safeguards. Customized for
                        extension developers.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My Privacy Policy
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
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
                      Does GDPR apply to Chrome extensions?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. GDPR applies to any software that processes personal
                      data of individuals in the EEA, regardless of where the
                      developer is located. Chrome extensions that collect
                      browsing data, user preferences, cookies, or any
                      identifying information are subject to GDPR. The
                      regulation applies even if your extension is free.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is the lawful basis for processing data in a Chrome
                      extension?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      GDPR provides six lawful bases: consent, contractual
                      necessity, legal obligation, vital interests, public task,
                      and legitimate interests. Most Chrome extensions use
                      consent for analytics and tracking, and legitimate
                      interests for core functionality data. You must identify
                      and document a lawful basis before processing begins.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I implement GDPR consent in a Chrome extension?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Show a consent dialog on first use that clearly explains
                      what data you collect and why. Consent must be opt-in (no
                      pre-checked boxes), specific to each purpose, and
                      withdrawable at any time through your extension settings.
                      Store consent records with timestamps as proof of
                      compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What user rights must my Chrome extension support?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      GDPR grants eight rights: the right to be informed,
                      access, rectification, erasure, restriction of
                      processing, data portability, objection, and rights
                      related to automated decision-making. Your extension must
                      provide mechanisms for users to exercise these rights,
                      and you must respond within 30 days.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a Data Processing Agreement for my Chrome
                      extension?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      If your extension shares personal data with third-party
                      services like analytics providers, cloud storage, or APIs,
                      you need a DPA with each service. The DPA must outline
                      what data is shared, security measures, breach
                      notification procedures, and data subject rights. Most
                      major providers offer standard DPAs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is data minimization and how does it apply to
                      extensions?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Data minimization requires collecting only the data
                      strictly necessary for your stated purpose. For Chrome
                      extensions, this means requesting only needed permissions,
                      collecting only required data, and not retaining data
                      longer than necessary. If your extension can work with
                      less data, you must reduce what you collect.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are the penalties for GDPR non-compliance?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      GDPR fines can reach up to 20 million euros or 4% of
                      annual global turnover, whichever is higher. Individual
                      developers and small companies have received fines in the
                      thousands to hundreds of thousands of euros. Beyond fines,
                      enforcement orders can require you to stop processing
                      data entirely, and your extension can be removed from the
                      Chrome Web Store.
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
                      href: "/privacy-policy-for-chrome-extension",
                      title: "Privacy Policy for Chrome Extensions",
                      desc: "Chrome Web Store requirements and how to create a compliant policy",
                    },
                    {
                      href: "/chrome-extension-privacy-policy-template",
                      title: "Chrome Extension Privacy Policy Template",
                      desc: "Ready-to-use template customized for extension developers",
                    },
                    {
                      href: "/chrome-web-store-privacy-policy-requirements",
                      title: "Chrome Web Store Privacy Requirements",
                      desc: "What Google requires for your store listing",
                    },
                    {
                      href: "/do-chrome-extensions-need-a-privacy-policy",
                      title: "Do Chrome Extensions Need a Privacy Policy?",
                      desc: "Which permissions trigger the requirement",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      title: "CCPA Privacy Policy Example",
                      desc: "California privacy law requirements and examples",
                    },
                    {
                      href: "/pipeda-privacy-policy-template",
                      title: "PIPEDA Privacy Policy Template",
                      desc: "Canadian privacy law requirements for extensions",
                    },
                    {
                      href: "/generate",
                      title: "Privacy Policy Generator",
                      desc: "Generate a compliant policy in under 60 seconds",
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
                  Make Your Chrome Extension GDPR Compliant
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Generate a GDPR-compliant privacy policy that covers lawful
                  basis, user rights, data processing disclosures, and
                  international transfers. Customized for Chrome extension
                  developers. Takes under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and Chrome Web Store requirements &middot;
                  Customized for extensions &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
