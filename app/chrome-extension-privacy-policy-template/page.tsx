import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  Ban,
  Info,
  Copy,
  ClipboardList,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Chrome Extension Privacy Policy Template [Free 2026]",
  description:
    "Free copy-paste Chrome extension privacy policy template. Covers Web Store requirements, permissions, data handling, and GDPR. Generate in 60 seconds.",
  keywords:
    "chrome extension privacy policy template, chrome extension privacy policy example, chrome extension privacy policy sample, free chrome extension privacy policy, browser extension privacy policy template",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/chrome-extension-privacy-policy-template",
  },
  openGraph: {
    title:
      "Chrome Extension Privacy Policy Template [Free 2026]",
    description:
      "Free copy-paste Chrome extension privacy policy template. Covers Web Store requirements, permissions, data handling, and GDPR. Generate in 60 seconds.",
    url: "https://ultrafastutilities.com/chrome-extension-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chrome Extension Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chrome Extension Privacy Policy Template (Free, Copy-Paste Ready) (2026)",
    description:
      "Free Chrome extension privacy policy template you can copy, customize, and publish today. Covers Web Store requirements, permissions disclosures, and GDPR compliance.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a free Chrome extension privacy policy template legally valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A free template can be legally valid if you customize it to accurately reflect your extension's actual data handling practices. The key is accuracy, not where the template came from. A template that you fill in with truthful, specific details about your extension's data collection, storage, and sharing is far better than no policy at all. However, extensions handling sensitive data categories like health or financial information should have their policy reviewed by a legal professional.",
      },
    },
    {
      "@type": "Question",
      name: "What sections must a Chrome extension privacy policy template include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Chrome extension privacy policy template must include: what data your extension collects, how it uses that data, whether it shares data with third parties, how data is stored and secured, how users can delete their data, your contact information, and the effective date. If your extension is subject to GDPR, you also need a legal basis for processing, data retention periods, and information about user rights under GDPR. The policy must match your Chrome Web Store data handling certification exactly.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use one privacy policy template for multiple Chrome extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use the same template structure for multiple extensions, but each extension needs its own customized version. Every extension requests different permissions, handles different data, and may use different third-party services. Your privacy policy must accurately describe that specific extension's data practices. Using an identical, generic policy across extensions that behave differently will cause issues during the Chrome Web Store review process.",
      },
    },
    {
      "@type": "Question",
      name: "How do I customize a privacy policy template for my specific extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start by auditing your manifest.json to identify every permission your extension requests. Then trace your data flows: what data is read, what is stored locally, what is sent to remote servers, and what third-party services receive data. Replace every placeholder in the template with specific details about your extension. Remove sections that do not apply and add details for anything your extension does that the template does not cover. Test that your final policy matches your data handling certification in the Developer Dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Does my Chrome extension privacy policy need to mention GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If any of your extension's users are in the European Union or European Economic Area, yes. GDPR applies based on where your users are located, not where you are based. Since Chrome extensions are available globally through the Web Store, most extensions will have EU users. Your policy should include a legal basis for data processing, data retention information, and a section explaining EU users' rights including the right to access, rectify, and delete their data.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I host my Chrome extension privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy must be hosted at a publicly accessible URL that does not require a login to view. Common options include a dedicated page on your personal or company website, a GitHub Pages site, a Google Sites page, or any static hosting service. The URL must remain accessible for as long as your extension is published. You enter this URL in the Chrome Web Store Developer Dashboard, and it is displayed on your extension's store listing page.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my Chrome extension privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Update your privacy policy whenever your extension's data handling changes. This includes adding new permissions, integrating new third-party services, changing how data is stored, or starting to collect new types of data. You should also review your policy when privacy laws change or when Google updates its Chrome Web Store policies. At minimum, review your policy every time you submit an extension update that modifies permissions or data flows.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Customize a Chrome Extension Privacy Policy Template",
  description:
    "Follow these six steps to customize a privacy policy template for your Chrome extension so it meets Chrome Web Store requirements and passes the review process.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your manifest.json permissions",
      text: "Open your manifest.json and list every permission under permissions, optional_permissions, and host_permissions. For each permission, write down what user data it gives your extension access to. This list determines which sections of the template you need to fill in.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map your data flows from collection to storage",
      text: "Trace every piece of data your extension touches. Document what is read from the browser or web pages, what is processed in content scripts or the service worker, what is stored in chrome.storage.local or chrome.storage.sync, and what is transmitted to any remote server or third-party API.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Replace all placeholders with your extension specifics",
      text: "Go through the template and replace every bracketed placeholder with specific details about your extension. Replace [Extension Name] with your actual extension name. Replace generic data descriptions with the exact data types your extension collects. Remove any sections that do not apply to your extension.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add your permissions disclosure table",
      text: "Create a section that maps each Chrome permission your extension requests to what data it accesses and why your extension needs it. This is not strictly required by the Chrome Web Store, but it demonstrates transparency and helps pass the review process faster.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add GDPR and CCPA sections if applicable",
      text: "If your extension has users in the EU or California, add the required legal sections. For GDPR, include your legal basis for processing, data retention periods, and EU user rights. For CCPA, include the categories of personal information collected and the right to opt out of data sales.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Verify your policy matches your data handling certification",
      text: "Compare your finished privacy policy against the data handling certification you will complete in the Chrome Web Store Developer Dashboard. Every data type you declare in the certification must be mentioned in your policy, and vice versa. Mismatches will cause your extension to be rejected.",
    },
  ],
};

const tocSections = [
  { id: "what-template-must-include", title: "What Your Template Must Include" },
  { id: "full-template-preview", title: "Full Template Preview" },
  { id: "how-to-customize", title: "How to Customize the Template" },
  { id: "permissions-disclosure-table", title: "Permissions Disclosure Table" },
  { id: "web-store-compliance-checklist", title: "Web Store Compliance Checklist" },
  { id: "common-template-mistakes", title: "Common Template Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function ChromeExtensionPrivacyPolicyTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Chrome Extension Privacy Policy Template (Free, Copy-Paste Ready) (2026)",
            description:
              "Free copy-paste Chrome extension privacy policy template. Covers Web Store requirements, permissions, data handling, and GDPR. Generate in 60 seconds.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-16",
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
                name: "Privacy Policy for Chrome Extensions",
                item: "https://ultrafastutilities.com/privacy-policy-for-chrome-extension",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Chrome Extension Privacy Policy Template",
                item: "https://ultrafastutilities.com/chrome-extension-privacy-policy-template",
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
              <Link
                href="/privacy-policy-for-chrome-extension"
                className="hover:text-blue-600 transition-colors"
              >
                Chrome Extension Privacy Policy
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">
                Template
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Copy className="w-3.5 h-3.5" />
                Free Template
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Chrome Extension Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A free, copy-paste ready privacy policy template built
                specifically for Chrome extensions. Covers Web Store
                requirements, permissions disclosures, data handling,
                and GDPR compliance out of the box.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Chrome extension developers who need a compliant
                privacy policy without starting from scratch.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: April 2026 &middot; Reviewed for GDPR, CCPA &amp;
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
                Full Chrome Extension Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/chrome-web-store-privacy-policy-requirements"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ClipboardList className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Web Store Requirements
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
                    Need a custom policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate one tailored to your extension
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
                  <strong>A Chrome extension privacy policy template should include seven core sections: what data your extension collects, how it uses that data, whether it shares data with third parties, how data is stored and secured, how users can request deletion, your contact information, and the effective date.</strong>{" "}
                  For extensions subject to GDPR, add your legal basis for
                  processing and EU user rights. For Chrome Web Store
                  compliance, your policy must match your data handling
                  certification in the Developer Dashboard exactly.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Writing a privacy policy from scratch for your Chrome extension
                is tedious. You need to cover Chrome Web Store requirements,
                permissions disclosures, data handling specifics, and
                potentially GDPR and CCPA compliance. Missing any of these
                can get your extension rejected during review or removed from
                the store after publication.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                This page provides a complete, free template that you can
                copy, customize for your specific extension, and publish
                today. The template covers every section the Chrome Web Store
                expects, follows{" "}
                <Link
                  href="/chrome-web-store-privacy-policy-requirements"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Web Store privacy requirements
                </Link>
                , and includes optional GDPR and CCPA sections for
                extensions with users in regulated regions.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                If you want to understand the full context of why Chrome
                extensions need privacy policies and what triggers the
                requirement, read the{" "}
                <Link
                  href="/privacy-policy-for-chrome-extension"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  complete Chrome extension privacy policy guide
                </Link>{" "}
                first. This page focuses specifically on giving you a
                ready-to-use template and showing you how to customize it.
              </p>

              {/* Section 1: What Your Template Must Include */}
              <section id="what-template-must-include" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Your Template Must Include
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Every Chrome extension privacy policy needs to cover
                  specific areas. The Chrome Web Store review team checks for
                  these sections, and missing any of them is one of the most
                  common reasons extensions get rejected. Here is the
                  complete checklist of required and recommended sections.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Required Sections
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data collection statement:</strong> What personal
                      or sensitive data your extension collects, including data
                      accessed through Chrome permissions, content scripts,
                      and any APIs your extension calls.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Purpose of data use:</strong> Why your extension
                      collects each type of data. Every data point must have
                      a clear purpose tied to your extension&apos;s
                      functionality.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Third-party sharing:</strong> Whether your
                      extension shares data with any third parties, who those
                      parties are, and why data is shared. If you use
                      analytics, advertising, or external APIs, this must be
                      disclosed.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data storage and security:</strong> How and where
                      data is stored (chrome.storage.local, chrome.storage.sync,
                      remote servers) and what security measures are in place.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data deletion and user rights:</strong> How users
                      can request deletion of their data. For extensions
                      using chrome.storage, explain how to clear extension
                      data. For server-side data, provide a deletion process.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Contact information:</strong> A way for users to
                      reach you with privacy questions. An email address is
                      the minimum requirement.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Effective date:</strong> When the policy was last
                      updated. This helps users and reviewers verify the policy
                      is current.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Recommended Additional Sections
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Permissions disclosure:</strong> A table or list
                      mapping each Chrome permission your extension requests
                      to what data it accesses and why.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>GDPR compliance section:</strong> Legal basis for
                      processing, data retention periods, and EU user rights
                      including access, rectification, and erasure.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>CCPA compliance section:</strong> Categories of
                      personal information collected and the right to opt out
                      of data sales.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Limited Use compliance statement:</strong> If your
                      extension is subject to Google&apos;s Limited Use
                      requirements, an explicit statement of compliance.
                    </span>
                  </li>
                </ul>

                {/* Did you know box 1 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        The Chrome Web Store review team uses automated checks
                        to compare your privacy policy content against your
                        data handling certification. If your certification
                        declares that you collect web history but your privacy
                        policy does not mention browsing data, the mismatch
                        will flag your extension for manual review and likely
                        rejection. Your template must cover every data type
                        you declare in the Dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Full Template Preview */}
              <section id="full-template-preview" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Full Template Preview
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Below is the complete privacy policy template with each
                  section shown. Bracketed text like [Your Extension Name]
                  indicates placeholders you need to replace with your
                  specific details. Remove any sections that do not apply
                  to your extension.
                </p>

                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                  {/* Template Header */}
                  <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      Privacy Policy Template
                    </span>
                  </div>

                  <div className="p-5 space-y-6 text-sm text-slate-700 leading-relaxed">
                    {/* Section: Title */}
                    <div>
                      <p className="font-bold text-slate-900 text-base mb-2">
                        Privacy Policy for [Your Extension Name]
                      </p>
                      <p className="text-slate-500 text-xs">
                        Effective Date: [Date]
                      </p>
                    </div>

                    {/* Section: Introduction */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        1. Introduction
                      </p>
                      <p>
                        This privacy policy describes how [Your Extension Name]
                        (&quot;the Extension&quot;) collects, uses, stores, and
                        shares data. The Extension is a Chrome browser extension
                        available through the Chrome Web Store. By installing
                        and using the Extension, you agree to the data
                        practices described in this policy.
                      </p>
                    </div>

                    {/* Section: Data Collection */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        2. Data We Collect
                      </p>
                      <p className="mb-2">
                        The Extension collects the following types of data:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>[Data type 1, e.g., &quot;URLs of pages you visit when you activate the Extension&quot;]</li>
                        <li>[Data type 2, e.g., &quot;User preferences and settings stored locally&quot;]</li>
                        <li>[Data type 3, e.g., &quot;Anonymous usage statistics&quot;]</li>
                      </ul>
                      <p className="mt-2">
                        The Extension does NOT collect: [list data types you
                        do not collect, e.g., &quot;passwords, financial
                        information, personal communications, or health data&quot;].
                      </p>
                    </div>

                    {/* Section: How We Use Data */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        3. How We Use Your Data
                      </p>
                      <p className="mb-2">
                        We use the collected data for the following purposes:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>[Purpose 1, e.g., &quot;To provide the Extension&apos;s core functionality&quot;]</li>
                        <li>[Purpose 2, e.g., &quot;To save your preferences across sessions&quot;]</li>
                        <li>[Purpose 3, e.g., &quot;To improve the Extension based on usage patterns&quot;]</li>
                      </ul>
                      <p className="mt-2">
                        We do NOT use your data for advertising, marketing
                        unrelated to the Extension, or any purpose not listed
                        above.
                      </p>
                    </div>

                    {/* Section: Third-Party Sharing */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        4. Third-Party Data Sharing
                      </p>
                      <p>
                        [Option A: &quot;The Extension does not share your data
                        with any third parties.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;The Extension shares data with the
                        following third-party services: [Service Name] for
                        [purpose]. These services have their own privacy
                        policies governing how they handle data.&quot;]
                      </p>
                    </div>

                    {/* Section: Data Storage */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        5. Data Storage and Security
                      </p>
                      <p>
                        [Option A: &quot;All data is stored locally on your
                        device using chrome.storage.local. No data is
                        transmitted to external servers.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;Data is stored using
                        chrome.storage.sync, which syncs data across your
                        signed-in Chrome browsers via your Google account.
                        Additionally, [describe any server-side storage].&quot;]
                      </p>
                      <p className="mt-2">
                        We implement [describe security measures, e.g.,
                        &quot;encryption in transit via HTTPS for any
                        server communication&quot;] to protect your data.
                      </p>
                    </div>

                    {/* Section: User Rights */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        6. Your Rights and Data Deletion
                      </p>
                      <p>
                        You can delete all Extension data at any time by
                        [describe deletion method, e.g., &quot;uninstalling the
                        Extension, which removes all locally stored data&quot;
                        or &quot;using the clear data button in the Extension
                        settings&quot;]. To request deletion of any
                        server-side data, contact us at [your email].
                      </p>
                    </div>

                    {/* Section: GDPR */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        7. GDPR Compliance (EU Users)
                      </p>
                      <p>
                        If you are located in the European Union, we process
                        your data under the legal basis of [legitimate
                        interest / consent / contract performance]. You have
                        the right to access, rectify, erase, restrict
                        processing, and port your data. To exercise these
                        rights, contact us at [your email].
                      </p>
                    </div>

                    {/* Section: Changes */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        8. Changes to This Policy
                      </p>
                      <p>
                        We may update this privacy policy from time to time.
                        Changes will be posted at this URL with an updated
                        effective date. Continued use of the Extension after
                        changes constitutes acceptance of the updated policy.
                      </p>
                    </div>

                    {/* Section: Contact */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        9. Contact Us
                      </p>
                      <p>
                        If you have questions about this privacy policy or
                        the Extension&apos;s data practices, contact us at:
                        [your email address].
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mt-6 mb-4">
                  This template gives you the foundation. The next section
                  walks you through exactly how to customize each section
                  for different types of Chrome extensions.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I remove sections from the template that do not
                      apply to my extension?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. If your extension does not share data with third
                      parties, you should still include section 4 but state
                      clearly that no data is shared. If your extension has
                      no EU users, the GDPR section is optional but
                      recommended since Chrome extensions are available
                      globally. Remove sections only if they are truly
                      irrelevant. When in doubt, keep them.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Should I add sections not covered in this template?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      If your extension does something unusual, like
                      processing biometric data, handling payments, or
                      collecting data from children, you need additional
                      sections. This template covers the standard Chrome
                      extension use cases. Extensions with specialized data
                      handling should add sections specific to their needs
                      and consider legal review.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: How to Customize the Template */}
              <section id="how-to-customize" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Customize the Template
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  The template above is a starting point. To make it
                  compliant and accurate for your specific Chrome extension,
                  follow these six steps. Each step tells you what to look
                  for in your extension and what to change in the template.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit your manifest.json permissions
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Open your manifest.json and list every permission under
                        &quot;permissions&quot;, &quot;optional_permissions&quot;,
                        and &quot;host_permissions&quot;. Each permission
                        determines what data your extension can access.
                        This list drives the content of sections 2, 3, and
                        5 in the template. If you request the &quot;tabs&quot;
                        permission, for example, section 2 must mention
                        access to tab URLs and titles.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Map your data flows from collection to storage
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Trace every piece of data your extension touches.
                        What does the content script read from pages? What
                        does the service worker process? What goes into
                        chrome.storage? What is sent to any server or API?
                        For each data flow, note the data type, where it
                        originates, where it ends up, and whether it leaves
                        the user&apos;s device. This information fills in
                        every placeholder in the template.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Replace all placeholders with your specifics
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go through the template and replace every bracketed
                        placeholder. Replace [Your Extension Name] with your
                        actual extension name. Replace the example data types
                        with the real data your extension collects. Replace
                        example purposes with your actual purposes. If a
                        section offers Option A and Option B, choose the one
                        that matches your extension and delete the other.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add your permissions disclosure table
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Use the permissions disclosure table format from the
                        section below to add a clear mapping of each Chrome
                        permission to what data it accesses. This is not
                        strictly required by the Web Store, but it
                        demonstrates transparency and helps reviewers
                        understand your extension faster. See the{" "}
                        <Link
                          href="#permissions-disclosure-table"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          permissions disclosure table section
                        </Link>{" "}
                        for the format.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add GDPR and CCPA sections if applicable
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If your extension has users in the EU, keep and
                        customize the GDPR section. Add your specific legal
                        basis for processing (consent, legitimate interest,
                        or contract performance), your data retention period,
                        and detail user rights. If you have California users,
                        add a CCPA section covering categories of personal
                        information and the right to opt out. See our{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          GDPR privacy policy template
                        </Link>{" "}
                        for the full GDPR section format.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Verify against your data handling certification
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Before publishing, compare your finished privacy
                        policy against the data handling certification you
                        will fill out in the Chrome Web Store Developer
                        Dashboard. Every data type you declare in the
                        certification must appear in your policy. Every
                        data type in your policy should match what you
                        certify. Mismatches between the two are one of the
                        top reasons extensions get flagged during review.
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
                        Extensions that include a permissions disclosure
                        table in their privacy policy tend to pass the
                        Chrome Web Store review process faster. Google
                        reviewers check that your declared permissions
                        match your policy disclosures. A clear table
                        mapping each permission to its data access makes
                        this verification straightforward, reducing the
                        chances of your extension being held for additional
                        manual review.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Permissions Disclosure Table */}
              <section id="permissions-disclosure-table" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Permissions Disclosure Table
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Include a table like this in your privacy policy to map
                  each Chrome permission your extension requests to the
                  data it accesses, why your extension needs it, and
                  whether that data leaves the user&apos;s device. Replace
                  the example entries with your actual permissions.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[18%]">
                          Permission
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[27%]">
                          Data Accessed
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Why We Need It
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Data Leaves Device?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          activeTab
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Current page URL and content when you click the
                          extension
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To extract the article text for
                          summarization&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          storage
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Extension settings and saved preferences
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To save your settings between
                          browser sessions&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [No (local) / Yes (sync)]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          tabs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          URLs and titles of open tabs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To identify duplicate tabs for
                          cleanup&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          cookies
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Browser cookies for specified domains
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To manage login sessions across
                          sites&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Browsing history and visit frequency
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To show your most visited sites on
                          the new tab page&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          identity
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Google account email and profile info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To authenticate you with our
                          backend service&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          webRequest
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Network request URLs, headers, and content
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To block tracking scripts on
                          web pages&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          &lt;all_urls&gt;
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Page content on all websites
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To apply dark mode styling to every
                          page you visit&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Only include the permissions your extension actually
                  requests. Delete rows for permissions your extension
                  does not use. If your extension uses host permissions
                  for specific domains instead of &lt;all_urls&gt;,
                  replace the last row with those specific domains and
                  explain what your content scripts do on those sites.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  The &quot;Data Leaves Device?&quot; column is particularly
                  important. If any data is transmitted to a remote server,
                  you must disclose the server, its purpose, and what
                  security measures protect the data in transit. This is
                  a common point of failure in Chrome Web Store reviews.
                  For a deeper understanding of which permissions trigger
                  the privacy policy requirement, see the{" "}
                  <Link
                    href="/do-chrome-extensions-need-a-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    do Chrome extensions need a privacy policy
                  </Link>{" "}
                  guide.
                </p>
              </section>

              {/* Section 5: Web Store Compliance Checklist */}
              <section id="web-store-compliance-checklist" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Web Store Compliance Checklist
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Before submitting your extension, run through this
                  checklist to confirm your privacy policy meets all
                  Chrome Web Store requirements. Every item must be
                  addressed for your extension to pass review.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      num: "1",
                      text: "Privacy policy is hosted at a publicly accessible URL that does not require a login to view",
                    },
                    {
                      num: "2",
                      text: "Privacy policy URL is entered in the Developer Dashboard under the Privacy tab or Store Listing section",
                    },
                    {
                      num: "3",
                      text: "Policy lists every type of data your extension collects, including data accessed through permissions",
                    },
                    {
                      num: "4",
                      text: "Policy explains the purpose for collecting each data type, tied to extension functionality",
                    },
                    {
                      num: "5",
                      text: "Policy discloses all third-party services that receive user data, or states that no data is shared",
                    },
                    {
                      num: "6",
                      text: "Policy describes how data is stored (locally, synced, server-side) and what security measures protect it",
                    },
                    {
                      num: "7",
                      text: "Policy explains how users can delete their data, including both local and server-side data",
                    },
                    {
                      num: "8",
                      text: "Policy includes your contact information (at minimum, an email address) for privacy inquiries",
                    },
                    {
                      num: "9",
                      text: "Data handling certification in the Developer Dashboard matches your privacy policy exactly",
                    },
                    {
                      num: "10",
                      text: "Extension only requests permissions it actively uses; no unused permissions remain in manifest.json",
                    },
                    {
                      num: "11",
                      text: "If subject to Limited Use or Restricted Use, policy includes an explicit compliance statement",
                    },
                    {
                      num: "12",
                      text: "Policy includes an effective date and is written in clear, understandable language",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                        {item.num}
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed pt-0.5">
                        {item.text}
                      </p>
                    </div>
                  ))}
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
                        Google has increased the frequency of compliance
                        re-reviews for published extensions. Even if your
                        extension passed review initially, it can be flagged
                        and removed later if your privacy policy becomes
                        outdated or inaccurate. Keeping your policy current
                        with every extension update is not optional. Treat
                        your privacy policy as part of your release checklist,
                        just like testing your code before publishing.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  If your extension handles data covered by{" "}
                  <Link
                    href="/chrome-extension-gdpr-compliance"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    GDPR requirements for Chrome extensions
                  </Link>
                  , add the GDPR-specific items to this checklist: legal
                  basis for processing, data retention period, and a section
                  on EU user rights.
                </p>
              </section>

              {/* Section 6: Common Template Mistakes */}
              <section id="common-template-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Template Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Using a template saves time, but only if you avoid
                  these common mistakes that cause extensions to get
                  rejected during Chrome Web Store review.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Leaving placeholder text in the published
                        policy
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The most common mistake. Developers copy a template,
                        replace some placeholders, and miss others. Your
                        published policy ends up with text like &quot;[Your
                        Extension Name]&quot; or &quot;[describe your data
                        types]&quot; still visible. Chrome Web Store reviewers
                        check for this. Search your final policy for every
                        bracket character before publishing. If any
                        placeholder text remains, your extension will be
                        rejected.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Using a generic website privacy policy
                        template
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        A{" "}
                        <Link
                          href="/privacy-policy-for-websites"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          website privacy policy
                        </Link>{" "}
                        template covers cookies, analytics, and web forms.
                        It does not cover Chrome permissions, manifest.json
                        declarations, chrome.storage, content scripts,
                        service workers, or the data handling certification.
                        Chrome extensions have fundamentally different data
                        access patterns than websites. Your policy must be
                        written for an extension, not adapted from a website
                        template.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Claiming &quot;we do not collect any data&quot;
                        when you do
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Some developers add a one-line policy saying their
                        extension collects no data, even when it clearly
                        does. If your extension requests permissions that
                        access user data, stating that you collect nothing
                        is a direct contradiction. Google compares your
                        policy text against your declared permissions. This
                        mismatch will get your extension rejected or removed.
                        Be honest about what your extension accesses, even
                        if the data never leaves the user&apos;s device.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Copying another extension&apos;s privacy policy
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Copying another developer&apos;s policy creates two
                        problems. First, their policy describes their
                        extension&apos;s data handling, not yours. The
                        specific data types, permissions, third-party
                        services, and storage methods will be different.
                        Second, copying a privacy policy can be copyright
                        infringement. Learn more about{" "}
                        <Link
                          href="/can-i-copy-someone-elses-privacy-policy"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          why copying privacy policies is risky
                        </Link>
                        . Use a template instead, and customize it for
                        your specific extension.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Not updating the policy when the extension
                        changes
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your privacy policy is not a one-time document. Every
                        time you add permissions, integrate a new third-party
                        service, change how data is stored, or modify data
                        flows, your policy must be updated to reflect those
                        changes. Submitting an extension update with new
                        permissions but an unchanged privacy policy will
                        trigger review issues. Your policy and your data
                        handling certification must stay in sync with your
                        extension&apos;s actual behavior at all times.
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
                      Is a free Chrome extension privacy policy template
                      legally valid?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A free template can be legally valid if you customize
                      it to accurately reflect your extension&apos;s actual
                      data handling. The key is accuracy, not where the
                      template came from. A template filled in with truthful,
                      specific details is far better than no policy at all.
                      Extensions handling sensitive data like health or
                      financial information should have their policy reviewed
                      by a legal professional.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What sections must a Chrome extension privacy policy
                      template include?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your template must include: what data your extension
                      collects, how it uses that data, whether it shares data
                      with third parties, how data is stored and secured,
                      how users can delete their data, your contact
                      information, and the effective date. GDPR-subject
                      extensions also need a legal basis, data retention
                      periods, and EU user rights. The policy must match
                      your Chrome Web Store data handling certification.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can I use one template for multiple Chrome extensions?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      You can use the same template structure, but each
                      extension needs its own customized version. Every
                      extension requests different permissions, handles
                      different data, and may use different third-party
                      services. Using an identical generic policy across
                      extensions that behave differently will cause issues
                      during Chrome Web Store review.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I customize a template for my specific
                      extension?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Start by auditing your manifest.json to identify every
                      permission. Then trace your data flows: what is read,
                      stored, sent to servers, or shared with third parties.
                      Replace every placeholder in the template with your
                      specific details. Remove sections that do not apply.
                      Verify that your final policy matches your data
                      handling certification in the Developer Dashboard.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my Chrome extension privacy policy need to
                      mention GDPR?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      If any of your users are in the EU or EEA, yes. GDPR
                      applies based on where users are located, not where
                      you are based. Since Chrome extensions are globally
                      available, most will have EU users. Your policy should
                      include a legal basis for processing, retention info,
                      and EU user rights including access, rectification,
                      and erasure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Where should I host my Chrome extension privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Host it at a publicly accessible URL that requires no
                      login. Common options include your personal or company
                      website, a GitHub Pages site, a Google Sites page, or
                      any static hosting service. The URL must remain live
                      for as long as your extension is published. You enter
                      this URL in the Developer Dashboard, and it appears on
                      your extension&apos;s store listing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How often should I update my Chrome extension privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Update it whenever your extension&apos;s data handling
                      changes: new permissions, new third-party services,
                      different storage methods, or new data types collected.
                      Also review when privacy laws change or Google updates
                      Web Store policies. At minimum, review your policy
                      with every extension update that modifies permissions
                      or data flows.
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
                      desc: "Complete guide to Chrome extension privacy requirements",
                    },
                    {
                      href: "/chrome-web-store-privacy-policy-requirements",
                      title: "Chrome Web Store Privacy Requirements",
                      desc: "Everything the Web Store requires for compliance",
                    },
                    {
                      href: "/do-chrome-extensions-need-a-privacy-policy",
                      title: "Do Chrome Extensions Need a Privacy Policy?",
                      desc: "Which permissions trigger the requirement",
                    },
                    {
                      href: "/chrome-extension-gdpr-compliance",
                      title: "Chrome Extension GDPR Compliance",
                      desc: "GDPR requirements specific to browser extensions",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "Complete guide to website privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      title: "Privacy Policy for Apps",
                      desc: "App store requirements for mobile and desktop applications",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "Real consequences of operating without one",
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
                  Want a Policy Customized for Your Extension?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Skip the manual customization. Answer a few questions
                  about your Chrome extension and get a privacy policy
                  tailored to your specific permissions, data handling,
                  and compliance needs. Takes under 60 seconds.
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
