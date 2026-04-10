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
  Lock,
  Eye,
  Scale,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do Chrome Extensions Need a Privacy Policy? [2026 Rules]",
  description:
    "Yes -- Google requires a privacy policy for Chrome extensions that access user data. See the 7 permissions that trigger it and generate yours free.",
  keywords:
    "do chrome extensions need a privacy policy, chrome extension privacy policy required, does my chrome extension need a privacy policy, browser extension privacy requirements, chrome extension privacy law",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-chrome-extensions-need-a-privacy-policy",
  },
  openGraph: {
    title:
      "Do Chrome Extensions Need a Privacy Policy? [2026 Rules]",
    description:
      "Yes -- Google requires a privacy policy for Chrome extensions that access user data. See the 7 permissions that trigger it and generate yours free.",
    url: "https://ultrafastutilities.com/do-chrome-extensions-need-a-privacy-policy",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Do Chrome Extensions Need a Privacy Policy? | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do Chrome Extensions Need a Privacy Policy? Yes, Here's When (2026)",
    description:
      "Yes, Chrome extensions that handle user data need a privacy policy. Google requires it for Web Store listing, and GDPR/CCPA may apply.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Chrome extensions need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if your Chrome extension handles any personal or sensitive user data. Google requires a privacy policy URL in the Chrome Web Store Developer Dashboard for any extension that requests data-related permissions such as tabs, cookies, history, bookmarks, identity, or webRequest. Extensions that collect zero user data and request no data-related permissions may not strictly need one, but Google recommends it for all extensions.",
      },
    },
    {
      "@type": "Question",
      name: "What triggers the privacy policy requirement for Chrome extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three things can trigger the requirement: requesting data-related permissions in your manifest.json (such as tabs, cookies, history, identity, or host permissions), transmitting any user data to a remote server, or being subject to privacy laws like GDPR or CCPA because your users are in regulated jurisdictions. Any one of these triggers is enough to make a privacy policy mandatory.",
      },
    },
    {
      "@type": "Question",
      name: "Does my Chrome extension need a privacy policy if it only uses activeTab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The activeTab permission alone does not strictly require a privacy policy if your extension never reads, stores, or transmits any data from the active tab. However, most extensions using activeTab do read page URLs or content, which constitutes user data access. If your extension reads anything from the tab, even temporarily, you should have a privacy policy. Google recommends one for all extensions regardless of permissions.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I publish a Chrome extension without a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your extension handles user data and you submit it without a privacy policy, it will be rejected during the Chrome Web Store review process. Existing extensions found to be non-compliant can be removed from the store without warning. Repeated violations can lead to permanent suspension of your developer account. Beyond the Web Store, you may also face legal consequences under GDPR (fines up to 20 million euros) or CCPA (fines up to $7,500 per violation).",
      },
    },
    {
      "@type": "Question",
      name: "What counts as personal data in a Chrome extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google defines personal data broadly for Chrome extensions. It includes browsing history, URLs of pages visited, page content, form inputs, cookies, authentication tokens, bookmarks, download history, IP addresses, device identifiers, and any data stored in chrome.storage that relates to an identifiable person. Even reading a page URL counts as accessing personal data because URLs can contain search queries, user IDs, and other identifying information.",
      },
    },
    {
      "@type": "Question",
      name: "Is a privacy policy legally required for browser extensions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your users and jurisdiction. If any of your users are in the EU, GDPR requires a privacy policy for any software that processes personal data. If any users are in California, CCPA applies to businesses meeting certain thresholds. Many other jurisdictions have similar requirements. Beyond legal requirements, the Chrome Web Store itself requires a privacy policy as a platform policy for extensions that handle user data.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a generic privacy policy template for my Chrome extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A generic template is better than nothing, but it may not pass the Chrome Web Store review. Google expects your privacy policy to specifically describe your extension's data handling, including which permissions it uses, what data it collects, how data is stored, and whether data is transmitted to remote servers. A policy that is clearly generic and does not mention your extension's specific behavior may be flagged during review.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Determine If Your Chrome Extension Needs a Privacy Policy",
  description:
    "Follow these five steps to determine whether your Chrome extension requires a privacy policy and what you need to include.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check your manifest.json permissions",
      text: "Open your manifest.json and review every permission listed under permissions, optional_permissions, and host_permissions. If any permission grants access to user data such as tabs, cookies, history, bookmarks, identity, webRequest, or host permissions for specific domains, your extension needs a privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify all data your extension accesses",
      text: "Trace every piece of data your extension reads, processes, stores, or transmits. This includes page URLs, page content, form data, cookies, browsing history, and anything stored in chrome.storage. If your extension accesses any of this data, even temporarily, a privacy policy is required.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Check for remote data transmission",
      text: "Determine whether your extension sends any data to a remote server, API, or third-party service. This includes analytics, crash reporting, feature flags, authentication services, or any fetch or XMLHttpRequest calls. Remote data transmission always requires a privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Assess applicable privacy laws",
      text: "Consider where your users are located. If any users are in the EU, GDPR applies. If any users are in California, CCPA may apply. These laws require a privacy policy for any software processing personal data, regardless of what the Chrome Web Store requires.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Create your privacy policy if needed",
      text: "If any of the above steps indicate that your extension handles user data, create a privacy policy using a generator or template. Host it at a publicly accessible URL and add the URL to your Chrome Web Store Developer Dashboard before submitting your extension for review.",
    },
  ],
};

const tocSections = [
  { id: "short-answer", title: "The Short Answer" },
  { id: "when-required", title: "When a Privacy Policy Is Required" },
  { id: "when-not-needed", title: "When You Might NOT Need One" },
  { id: "three-triggers", title: "Three Triggers That Make It Mandatory" },
  { id: "personal-data", title: "What Counts as Personal Data" },
  { id: "consequences", title: "Real Consequences of Not Having One" },
  { id: "myths-debunked", title: "Common Myths Debunked" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function DoChromeExtensionsNeedAPrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do Chrome Extensions Need a Privacy Policy? Yes, Here's When (2026)",
            description:
              "Yes -- Google requires a privacy policy for Chrome extensions that access user data. See the 7 permissions that trigger it and generate yours free.",
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
                name: "Do Chrome Extensions Need a Privacy Policy?",
                item: "https://ultrafastutilities.com/do-chrome-extensions-need-a-privacy-policy",
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
                Do Chrome Extensions Need a Privacy Policy?
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Chrome Extension Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do Chrome Extensions Need a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Privacy Policy?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes, if your extension handles user data. Google requires a
                privacy policy for Chrome Web Store listing, and privacy laws
                like GDPR and CCPA may independently require one based on
                where your users are located.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Chrome extension developers, indie makers, and teams
                publishing to the Chrome Web Store.
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
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Extension Privacy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/chrome-extension-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Extension Policy Template
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
                    Need a privacy policy?
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
                <span>Last updated: April 2026</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>10 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, Chrome extensions that handle user data need a privacy policy.</strong>{" "}
                  Google requires a privacy policy URL in the Chrome Web Store
                  Developer Dashboard for any extension that requests
                  data-related permissions. Beyond the Web Store requirement,
                  GDPR applies if you have EU users, and CCPA applies if you
                  have California users. Extensions that collect zero user
                  data and request no data-related permissions are the only
                  exception, and even then Google recommends providing one.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                The question &quot;do Chrome extensions need a privacy
                policy?&quot; comes up constantly among extension developers.
                The answer depends on what your extension does, what
                permissions it requests, and where your users are located.
                But the short version is: almost certainly yes.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                Chrome extensions have a unique level of access to user data.
                Unlike websites that are sandboxed to their own domain,
                extensions can read browsing history, access page content
                across multiple sites, intercept network requests, and read
                stored cookies and authentication tokens. This is exactly why
                Google and privacy regulators treat extensions differently
                from regular web apps.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide walks through exactly when a privacy policy is
                required, the three specific triggers that make it mandatory,
                what counts as personal data in extensions, what happens if
                you skip it, and common myths that trip developers up.
              </p>

              {/* Section 1: The Short Answer */}
              <section id="short-answer" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Short Answer: Yes, Most Extensions Need One
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If your Chrome extension handles any personal or sensitive
                  user data, you need a privacy policy. Google defines
                  &quot;personal or sensitive user data&quot; broadly for
                  Chrome extensions. It covers browsing activity, page
                  content, form inputs, cookies, authentication tokens,
                  bookmarks, and any data stored in chrome.storage that
                  relates to an identifiable person.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  In practice, the vast majority of Chrome extensions need a
                  privacy policy. Even a simple extension that reads the
                  current page URL via activeTab is technically accessing
                  user browsing data. An extension that saves user
                  preferences using chrome.storage.sync is storing data in
                  the user&apos;s Google account. An extension that injects
                  CSS into web pages still needs content script access to
                  the page DOM.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The requirement comes from two separate sources. First,
                  the Chrome Web Store has a platform policy requiring a
                  privacy policy for data-handling extensions. Second,
                  privacy laws like GDPR and CCPA independently require one
                  if your users are in regulated jurisdictions, regardless of
                  what the Chrome Web Store requires.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Yes</p>
                    <p className="text-xs text-slate-500 mt-1">
                      If your extension handles user data
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Public</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Must be publicly accessible URL
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Scale className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Legal</p>
                    <p className="text-xs text-slate-500 mt-1">
                      GDPR and CCPA may also apply
                    </p>
                  </div>
                </div>

                {/* Mini FAQ 1 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: My extension is free and has no ads. Do I still need one?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. The privacy policy requirement is about data handling,
                      not monetization. Free extensions, ad-free extensions, and
                      open source extensions all need a privacy policy if they
                      access user data. Being free does not exempt you from Chrome
                      Web Store policies or privacy laws.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if I only have a few users?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      The number of users does not matter for the Chrome Web Store
                      requirement. Google requires a privacy policy for all
                      extensions that handle user data, whether you have 10 users
                      or 10 million. For GDPR, the law applies to any data
                      processing of EU residents regardless of your size. CCPA
                      has business-size thresholds, but the Web Store requirement
                      does not.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: When a Privacy Policy Is Required */}
              <section id="when-required" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  When a Privacy Policy Is Required
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The following table covers the most common scenarios and
                  whether they require a privacy policy. The answer depends
                  on what data your extension accesses, not on your intent or
                  business model.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[45%]">
                          Scenario
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Privacy Policy Required?
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Reason
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Extension requests tabs, cookies, history, or identity
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Direct access to personal user data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Extension uses content scripts on websites
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Can read page content, which is user data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Extension sends data to a remote server
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Data transmission always requires disclosure
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Extension uses chrome.storage.sync
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Data synced to user&apos;s Google account
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Extension uses activeTab and reads page data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Reading any page data is user data access
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Extension uses analytics or crash reporting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Third-party data sharing requires disclosure
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Extension has EU or California users
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          GDPR and CCPA apply regardless of Web Store rules
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Extension only modifies its own popup UI with no data access
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Recommended
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Google recommends it for all extensions
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Did you know box 1 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Google estimates that over 85% of Chrome extensions
                        request at least one data-related permission. This means
                        the vast majority of extensions published on the Chrome
                        Web Store are required to have a privacy policy. The most
                        commonly requested data-related permissions are storage,
                        activeTab, tabs, and host permissions for specific
                        domains.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: When You Might NOT Need One */}
              <section id="when-not-needed" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  When You Might NOT Need a Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  There is a narrow category of Chrome extensions that do not
                  strictly require a privacy policy under Chrome Web Store
                  rules. These are extensions that request zero data-related
                  permissions and never access, read, store, or transmit any
                  user data whatsoever.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Examples of extensions that might not need one include an
                  extension that only changes the browser&apos;s new tab page
                  with completely static content and no permissions, an
                  extension that modifies only its own popup UI without
                  reading any browser or page data, or a developer tool that
                  operates entirely within the extension&apos;s own sandbox
                  without any data access.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  However, even for these extensions, Google recommends
                  providing a privacy policy. And if any of your users are in
                  the EU or California, GDPR and CCPA may still require one
                  depending on whether any personal data processing occurs.
                  The safest approach is to always have a privacy policy.
                </p>

                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 my-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">
                        Important caveat
                      </p>
                      <p className="text-sm text-slate-700">
                        Even if your extension does not need a privacy policy
                        today, adding any data-related permission in a future
                        update will trigger the requirement. Many developers
                        find it easier to create a privacy policy from the
                        start rather than scrambling to add one when they need
                        to update their extension.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Three Triggers */}
              <section id="three-triggers" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Three Triggers That Make a Privacy Policy Mandatory
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  There are three independent triggers. Any one of them is
                  enough to make a privacy policy mandatory for your Chrome
                  extension.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Data-related permissions in your manifest.json
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If your extension requests any permission that grants
                        access to user data, the Chrome Web Store requires a
                        privacy policy. This includes tabs, cookies, history,
                        bookmarks, identity, webRequest, downloads, and host
                        permissions for specific domains. It also includes
                        broad permissions like &lt;all_urls&gt; and content
                        script matches. Even the storage permission triggers
                        the requirement if you store personal data.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Remote data transmission
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If your extension sends any data to a remote server,
                        API, or third-party service, you must have a privacy
                        policy. This includes analytics services, crash
                        reporting tools, authentication providers, feature flag
                        services, or any custom backend. Even if the data you
                        transmit is not personally identifiable, the act of
                        transmitting data from the user&apos;s browser to a
                        remote server requires disclosure.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Privacy law applicability (GDPR, CCPA, others)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If any of your users are in the EU, GDPR requires a
                        privacy policy for any software that processes personal
                        data. If any users are in California and your business
                        meets CCPA thresholds, CCPA requires one. Similar laws
                        exist in Brazil (LGPD), Canada (PIPEDA), and many other
                        jurisdictions. These laws apply independently of what
                        the Chrome Web Store requires. You can have a privacy
                        policy obligation under GDPR even if the Web Store
                        itself would not require one.
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
                        GDPR applies to your Chrome extension even if your
                        business is not based in the EU. If a single user in
                        Germany, France, or any other EU country installs your
                        extension, GDPR may apply to your processing of their
                        data. Since Chrome extensions are distributed globally
                        through the Web Store, it is nearly impossible to
                        guarantee you have zero EU users.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ 2 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I restrict my extension to certain countries to avoid
                      GDPR?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      The Chrome Web Store does not offer country-level
                      distribution restrictions for individual extensions. Your
                      extension is available globally once published. Even if
                      you could restrict distribution, GDPR applies based on the
                      user&apos;s location, not the developer&apos;s location or
                      the distribution channel. The practical approach is to
                      comply with GDPR from the start.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does sideloading an extension avoid these requirements?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Sideloaded extensions (installed outside the Chrome Web
                      Store) are not subject to Chrome Web Store policies.
                      However, GDPR, CCPA, and other privacy laws still apply
                      regardless of distribution method. If your sideloaded
                      extension processes personal data from users in regulated
                      jurisdictions, you still need a privacy policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: What Counts as Personal Data */}
              <section id="personal-data" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Counts as Personal Data in Chrome Extensions
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Many developers underestimate what qualifies as personal
                  data. Google and privacy regulators define it broadly. The
                  following table covers data types that Chrome extensions
                  commonly access and whether each counts as personal data
                  requiring disclosure.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Data Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Personal Data?
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[50%]">
                          Why It Counts
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Page URLs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          URLs can contain search queries, user IDs, session tokens, and other identifying info
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Page content (DOM)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Web pages contain personal information, messages, financial data, and more
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Cookies
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Cookies contain session tokens, authentication data, and tracking identifiers
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Browsing history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Reveals interests, habits, health conditions, and other sensitive patterns
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Form inputs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Users enter names, emails, passwords, addresses, and payment details in forms
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Bookmarks
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Bookmarks reveal interests and can contain URLs with personal information
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          IP address (via remote calls)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          IP addresses are personal data under GDPR and can identify location
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Extension settings (non-personal)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Usually no
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Generic settings like theme preference are not personal data unless linked to a user
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The key principle: if data can be used to identify a person
                  or relates to an identifiable person, it is personal data.
                  This includes data that can identify someone indirectly,
                  such as a combination of browser fingerprint, time zone,
                  and language preference. When in doubt, treat it as
                  personal data and disclose it in your privacy policy.
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
                        Under GDPR, even a page URL counts as personal data if
                        it contains identifying information. A URL like
                        example.com/profile/john-smith-12345 clearly identifies
                        a person. But even URLs with session tokens or tracking
                        parameters can be considered personal data because they
                        can be linked back to an individual. If your extension
                        reads page URLs, your privacy policy should disclose
                        this.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Real Consequences */}
              <section id="consequences" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Real Consequences of Not Having a Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Skipping the privacy policy is not just a formality issue.
                  There are concrete consequences at both the platform level
                  and the legal level.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Chrome Web Store Consequences
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      New Extensions
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Rejected
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Will not pass review if data permissions are used
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      Existing Extensions
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Removed
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Can be taken down at any time during compliance sweeps
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Submission rejection:</strong> New extensions or
                      updates that request data-related permissions without a
                      privacy policy URL will be rejected during the review
                      process.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Store removal:</strong> Existing extensions can be
                      removed from the Chrome Web Store without warning during
                      Google&apos;s compliance enforcement sweeps.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Account suspension:</strong> Repeated violations
                      can lead to permanent suspension of your Chrome Web Store
                      developer account.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Loss of users:</strong> If your extension is
                      removed, existing users lose access. Re-publishing under
                      a new listing means starting over with zero users and
                      reviews.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Legal Consequences
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>GDPR fines:</strong> Up to 20 million euros or 4%
                      of annual global revenue, whichever is higher. Even small
                      developers can be fined for clear GDPR violations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>CCPA penalties:</strong> Up to $7,500 per
                      intentional violation and $2,500 per unintentional
                      violation. California consumers can also bring private
                      lawsuits for certain data breaches.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>User lawsuits:</strong> In some jurisdictions,
                      users can sue directly if their data is mishandled or if
                      required disclosures are missing.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Section 7: Common Myths Debunked */}
              <section id="myths-debunked" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Myths Debunked
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These five myths are the most common misconceptions that
                  lead Chrome extension developers to skip the privacy
                  policy. Every one of them is wrong.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My extension does not collect data, so I
                        do not need a privacy policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        &quot;Collecting&quot; is not the only trigger. If your
                        extension reads, accesses, processes, stores, or
                        transmits user data, even temporarily, you need a
                        privacy policy. An extension that reads a page URL to
                        determine whether to activate is accessing user data.
                        An extension that uses chrome.storage to save settings
                        is storing data. The threshold is access, not
                        collection.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I only store data locally, so no policy
                        is needed&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Local storage still counts as data handling. Whether
                        you use chrome.storage.local, localStorage, or
                        IndexedDB, you are storing user data on the
                        user&apos;s device. Your privacy policy must disclose
                        what data is stored and for what purpose. And if you
                        use chrome.storage.sync, the data is synced to
                        Google&apos;s servers via the user&apos;s account,
                        which is an entirely different level of data handling.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Google&apos;s privacy policy covers my
                        extension&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Google&apos;s privacy policy covers the Chrome browser
                        and Google&apos;s own services. It does not cover your
                        extension. You are the data controller for your
                        extension&apos;s data handling. Google is the platform
                        provider. Your extension is your software, and you are
                        responsible for your own privacy disclosures. Pointing
                        to Google&apos;s policy will not satisfy the Chrome Web
                        Store requirement.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Privacy policies are only for big
                        companies&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Privacy policy requirements apply to every developer
                        publishing on the Chrome Web Store, from solo indie
                        developers to large corporations. Google does not
                        differentiate based on company size. GDPR applies to
                        all data controllers regardless of size. CCPA has
                        business-size thresholds, but the Chrome Web Store
                        policy does not. If your extension handles user data,
                        you need a privacy policy whether you are a student
                        project or a Fortune 500 company.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I can add a privacy policy later after
                        launch&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        If your extension handles user data, it will not pass
                        review without a privacy policy URL. You cannot publish
                        first and add one later. Even if an earlier version was
                        published without one, submitting an update that adds
                        data-related permissions without providing a privacy
                        policy will trigger rejection. Create your policy
                        before you submit for review.
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
                      Do Chrome extensions need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, if your extension handles any personal or sensitive
                      user data. Google requires a privacy policy URL in the
                      Chrome Web Store Developer Dashboard for extensions that
                      request data-related permissions. GDPR and CCPA may
                      also independently require one based on your users&apos;
                      locations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What triggers the privacy policy requirement?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Three triggers: data-related permissions in your
                      manifest.json, transmitting any user data to a remote
                      server, or being subject to privacy laws like GDPR or
                      CCPA. Any single trigger is enough to make a privacy
                      policy mandatory.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my extension need a privacy policy if it only uses activeTab?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The activeTab permission alone may not strictly require
                      one, but most extensions using activeTab do read page
                      content or URLs, which is user data access. Google
                      recommends a privacy policy for all extensions. If your
                      extension reads anything from the active tab, you should
                      have one.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if I publish without a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      New extensions that handle user data will be rejected
                      during review. Existing extensions can be removed from
                      the store during compliance sweeps. Your developer
                      account may face suspension for repeated violations.
                      Legal consequences under GDPR and CCPA are also
                      possible.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What counts as personal data in a Chrome extension?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Google defines it broadly: browsing history, page URLs,
                      page content, form inputs, cookies, authentication
                      tokens, bookmarks, download history, IP addresses,
                      device identifiers, and any stored data that relates to
                      an identifiable person. Even reading a page URL counts
                      because URLs can contain identifying information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Is a privacy policy legally required for browser extensions?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      It depends on your users and jurisdiction. GDPR requires
                      a privacy policy for any software processing personal
                      data of EU residents. CCPA applies to businesses meeting
                      certain thresholds with California users. Many other
                      jurisdictions have similar requirements. Beyond legal
                      requirements, the Chrome Web Store itself requires one
                      as a platform policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can I use a generic privacy policy template?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A generic template is better than nothing, but it may
                      not pass Chrome Web Store review. Google expects your
                      policy to describe your extension&apos;s specific data
                      handling, including which permissions it uses, what data
                      it accesses, and whether data is transmitted remotely.
                      A clearly generic policy may be flagged during review.
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
                      desc: "Complete guide to Chrome Web Store privacy requirements",
                    },
                    {
                      href: "/chrome-extension-privacy-policy-template",
                      title: "Chrome Extension Privacy Policy Template",
                      desc: "Ready-to-use template for your extension",
                    },
                    {
                      href: "/chrome-web-store-privacy-policy-requirements",
                      title: "Chrome Web Store Privacy Requirements",
                      desc: "Detailed breakdown of Google's policies",
                    },
                    {
                      href: "/chrome-extension-gdpr-compliance",
                      title: "Chrome Extension GDPR Compliance",
                      desc: "How GDPR applies to browser extensions",
                    },
                    {
                      href: "/is-a-privacy-policy-legally-required",
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "Legal requirements across jurisdictions",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "Real consequences of operating without one",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      title: "Privacy Policy for Apps",
                      desc: "App store requirements for mobile and desktop apps",
                    },
                    {
                      href: "/generate",
                      title: "Generate Your Privacy Policy",
                      desc: "Create a compliant policy in under 60 seconds",
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
                  Your Extension Needs a Privacy Policy. Get One Now.
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a missing privacy policy block your Chrome Web
                  Store submission or put you at legal risk. Generate a
                  compliant policy tailored to your extension in under 60
                  seconds.
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
