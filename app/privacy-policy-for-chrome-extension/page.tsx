import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Ban,
  Info,
  Code,
  Lock,
  Eye,
  Puzzle,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Chrome Extensions: Complete Guide [2026]",
  description:
    "Chrome Web Store requires a privacy policy for extensions that access user data. See which 8 permissions trigger it and create yours in 60 seconds.",
  keywords:
    "privacy policy for chrome extension, chrome web store privacy policy, chrome extension privacy policy requirement, browser extension privacy policy, chrome extension data handling",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-chrome-extension",
  },
  openGraph: {
    title:
      "Privacy Policy for Chrome Extensions: Complete Guide [2026]",
    description:
      "Chrome Web Store requires a privacy policy for extensions that access user data. See which 8 permissions trigger it and create yours in 60 seconds.",
    url: "https://ultrafastutilities.com/privacy-policy-for-chrome-extension",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Chrome Extensions | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Chrome Extensions: Web Store Requirements (2026)",
    description:
      "Chrome Web Store requires a privacy policy for extensions that handle user data. Learn what Google requires and which permissions trigger it.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does my Chrome extension need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your Chrome extension handles any personal or sensitive user data, yes. The Chrome Web Store requires a privacy policy for any extension that requests permissions involving user data such as tabs, cookies, history, bookmarks, identity, or webRequest. Extensions that only modify their own UI with no data access may not strictly require one, but Google strongly recommends it for all extensions.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I publish a Chrome extension without a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New extensions that handle user data will be rejected during the Chrome Web Store review process. Existing extensions that are found to be non-compliant can be removed from the store, and your developer account may be suspended. Google has become significantly stricter about privacy policy enforcement since 2023, and automated checks flag extensions that request data-related permissions without providing a privacy policy URL.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I add my privacy policy URL in the Chrome Web Store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Chrome Web Store Developer Dashboard, go to your extension listing and find the Privacy tab or the Store Listing section. There is a dedicated field for your privacy policy URL. This URL must point to a publicly accessible page that does not require a login to view. The URL is displayed on your extension's Web Store listing page so users can review it before installing.",
      },
    },
    {
      "@type": "Question",
      name: "Does the activeTab permission require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The activeTab permission alone may not strictly require a privacy policy if your extension does not collect, transmit, or store any data from the active tab. However, most extensions that use activeTab do read page content or URLs, which constitutes handling user data. If your extension reads any information from the page, even temporarily, you should have a privacy policy. Google recommends one for all extensions regardless.",
      },
    },
    {
      "@type": "Question",
      name: "What must my Chrome extension privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy must disclose what data your extension collects, how it uses that data, whether it shares data with third parties, how it stores data, and how users can delete their data. For extensions subject to Google's Limited Use requirements, you must also state that you comply with the Chrome Web Store User Data Policy. If your extension transmits data to a remote server, you must disclose this specifically.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Chrome Web Store data handling certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The data handling certification is a section in the Developer Dashboard where you must declare what types of data your extension collects and how it uses that data. You certify whether your extension collects personally identifiable information, health information, financial data, authentication information, personal communications, location data, web history, or user activity. Your privacy policy must match these declarations exactly.",
      },
    },
    {
      "@type": "Question",
      name: "Does Manifest V3 change privacy policy requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manifest V3 does not directly change privacy policy requirements, but it affects what you need to disclose. The move from background pages to service workers changes how data persistence works. The switch from webRequest blocking to declarativeNetRequest changes how your extension interacts with network requests. If your extension migrated from Manifest V2, review whether your privacy policy still accurately describes how data is handled under the new architecture.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Chrome Extension",
  description:
    "Follow these seven steps to create a compliant privacy policy for your Chrome extension that satisfies Chrome Web Store requirements and passes the review process.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit every permission your extension requests",
      text: "Review your manifest.json file and list every permission. For each permission, document what data it gives your extension access to and whether your extension actually reads, stores, or transmits that data. Remove any permissions you do not actively use.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map all data flows in your extension",
      text: "Trace how data moves through your extension. Identify what data is read from the browser or web pages, what is stored locally via chrome.storage, what is transmitted to any remote server, and what is shared with any third-party service or API. Document each data flow.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Check Google's Limited Use and Restricted Use policies",
      text: "Determine whether your extension's data handling falls under Google's Limited Use requirements or the stricter Restricted Use requirements. Extensions that access user communications, health data, or financial data face additional restrictions that must be reflected in your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy with extension-specific details",
      text: "Use a privacy policy generator to create a policy that covers your Chrome extension's specific data handling. Include details about each permission, data storage methods, remote server communication, and third-party services. The policy must match your data handling certification exactly.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Host your privacy policy at a permanent, public URL",
      text: "Publish your privacy policy at a URL that is publicly accessible without requiring a login. Common options include a dedicated page on your website, a GitHub Pages site, or a simple hosted HTML page. The URL must remain accessible as long as your extension is published.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Add the privacy policy URL to your Developer Dashboard",
      text: "In the Chrome Web Store Developer Dashboard, navigate to your extension listing and add your privacy policy URL in the designated field. This URL will be displayed on your extension's store listing page for users to review before installation.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Complete the data handling certification accurately",
      text: "Fill out the data handling certification in the Developer Dashboard. Declare every type of data your extension collects and how it is used. Ensure these declarations match what your privacy policy states. Mismatches between your certification and your actual data handling will cause your extension to be rejected or removed.",
    },
  ],
};

const tocSections = [
  { id: "does-extension-need", title: "Does Your Extension Need One?" },
  { id: "web-store-requirements", title: "Chrome Web Store Requirements" },
  { id: "permissions-table", title: "Which Permissions Trigger It" },
  { id: "data-handling-certification", title: "Data Handling Certification" },
  { id: "manifest-v3", title: "Manifest V3 and Privacy" },
  { id: "common-mistakes", title: "Common Extension Mistakes" },
  { id: "how-to-create", title: "How to Create One (7 Steps)" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForChromeExtensionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Chrome Extensions: Web Store Requirements (2026)",
            description:
              "Chrome Web Store requires a privacy policy for extensions that access user data. See which 8 permissions trigger it and create yours in 60 seconds.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-09",
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
                Privacy Policy for Chrome Extensions
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Developer Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Chrome Extensions
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                The Chrome Web Store requires a privacy policy for any
                extension that handles personal or sensitive user data.
                Without one, your extension will be rejected during review
                or removed from the store.
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
                href="/privacy-policy-for-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Puzzle className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                App Privacy Policies
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-discord-bot"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Code className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Discord Bot Policies
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
                    Publishing an extension?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Get your privacy policy in 60 seconds
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
                <span>11 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>The Chrome Web Store requires a privacy policy for any extension that handles personal or sensitive user data.</strong>{" "}
                  If your extension requests permissions like tabs, cookies,
                  history, bookmarks, identity, or webRequest, you must
                  provide a privacy policy URL in your Developer Dashboard.
                  Extensions submitted without one will be rejected. Existing
                  extensions can be removed for non-compliance.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Chrome extensions operate with a unique level of access to
                user data. Unlike websites, which are sandboxed to their own
                domain, extensions can read browsing history, access page
                content across sites, intercept network requests, and access
                stored passwords or cookies. This level of access is exactly
                why Google requires transparency about how extensions handle
                data.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                The Chrome Web Store review process has become significantly
                stricter since Google tightened its extension policies. Every
                extension that requests data-related permissions must provide
                a privacy policy URL that is publicly accessible. The policy
                must accurately describe what data the extension collects,
                how it uses that data, and whether it shares data with any
                third parties.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly which permissions trigger the
                requirement, what Google expects in your policy, how the data
                handling certification works, how Manifest V3 affects your
                disclosures, and how to create a policy that passes the
                Chrome Web Store review process.
              </p>

              {/* Section 1: Does Your Extension Need One? */}
              <section id="does-extension-need" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Does Your Chrome Extension Need a Privacy Policy?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The short answer: if your extension handles any personal or
                  sensitive user data, yes. Google defines &quot;personal or
                  sensitive user data&quot; broadly. It includes browsing
                  activity, the content of web pages a user visits, form
                  inputs, cookies, authentication tokens, bookmarks, and even
                  data stored locally via chrome.storage if it contains
                  personal information.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  In practice, most Chrome extensions need a privacy policy.
                  Even a simple extension that uses the activeTab permission
                  to read the current page URL is technically accessing user
                  browsing data. An extension that saves user preferences
                  using chrome.storage.sync is storing data in the
                  user&apos;s Google account. An extension that changes
                  CSS on web pages still needs to access the page DOM.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The only extensions that definitively do not need a privacy
                  policy are those that use no data-related permissions at
                  all. An extension that only modifies the browser&apos;s new
                  tab page with static content and requests no permissions
                  might not strictly require one. But even in that case,
                  Google recommends providing a policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Beyond the Chrome Web Store requirement, your extension may
                  also be subject to GDPR if any users are in the EU, CCPA
                  if any users are in California, and other regional privacy
                  laws. These laws apply to any software that processes
                  personal data, including browser extensions.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Required</p>
                    <p className="text-xs text-slate-500 mt-1">
                      For data-related permissions
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Public</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Must be publicly accessible
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <AlertTriangle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Enforced</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Rejection or removal
                    </p>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: My extension is free and open source. Do I still need
                      a privacy policy?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. The privacy policy requirement is about data
                      handling, not monetization. Open source extensions that
                      access user data still need to disclose what they do
                      with that data. Being free does not exempt you from
                      Chrome Web Store policies or privacy laws.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if I distribute my extension outside the Chrome
                      Web Store?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Chrome Web Store policies only apply to extensions
                      published there. However, GDPR, CCPA, and other privacy
                      laws apply regardless of distribution method. If your
                      extension processes personal data from users in regulated
                      jurisdictions, you need a privacy policy even if you
                      distribute it through your own website.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Chrome Web Store Requirements */}
              <section id="web-store-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Chrome Web Store Privacy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Google has specific, documented requirements for how Chrome
                  extensions must handle user data and what must be disclosed.
                  These are not suggestions. They are enforced during the
                  review process and through ongoing compliance checks.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Google Requires
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy URL:</strong> A publicly accessible
                      URL entered in the Developer Dashboard that links to your
                      extension&apos;s privacy policy. This URL is displayed on
                      your store listing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Accurate data disclosures:</strong> Your policy
                      must accurately describe what data your extension
                      collects, how it uses that data, whether it shares data
                      with third parties, and how users can request data
                      deletion.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data handling certification:</strong> You must
                      complete the data handling section in the Developer
                      Dashboard, certifying what types of data your extension
                      collects and how it handles that data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Limited Use compliance:</strong> If your extension
                      accesses certain categories of sensitive data, you must
                      comply with the Chrome Web Store&apos;s Limited Use
                      requirements and state this compliance in your policy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Minimum necessary permissions:</strong> Your
                      extension must only request permissions it actually needs.
                      Requesting broad permissions &quot;just in case&quot;
                      will trigger additional scrutiny and require more
                      extensive privacy disclosures.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Google reviews extensions both when they are submitted and
                  on an ongoing basis. Extensions that violate these
                  requirements can be removed without warning. Developer
                  accounts with repeated violations can be permanently
                  suspended. Google has removed thousands of extensions for
                  privacy policy violations in recent years.
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
                        Google removed over 500 Chrome extensions from the Web
                        Store in a single enforcement sweep in 2023 for
                        violating its data handling policies. Many of these
                        extensions had millions of users. The most common
                        violations were collecting data not disclosed in the
                        privacy policy, transmitting data to undisclosed
                        servers, and requesting permissions beyond what was
                        necessary for the extension&apos;s functionality.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Enforcement Consequences
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
                      Will not pass review without a compliant privacy policy
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
                      Can be taken down at any time for non-compliance
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Permissions Table */}
              <section id="permissions-table" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Which Permissions Trigger the Privacy Policy Requirement?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Not all Chrome extension permissions are equal when it
                  comes to privacy policy requirements. Some permissions
                  grant access to personal or sensitive data and clearly
                  require a privacy policy. Others are ambiguous. The
                  following table covers the most common permissions and
                  whether they trigger the requirement.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                          Permission
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Data Access
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[18%]">
                          Policy Required?
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Risk Level
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          activeTab
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Current tab URL and page content when user clicks
                          the extension
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Recommended
                        </td>
                        <td className="px-4 py-3 text-slate-600">Low</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          tabs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          URLs and titles of all open tabs, tab events
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          storage
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Local or synced storage for extension data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          If storing personal data
                        </td>
                        <td className="px-4 py-3 text-slate-600">Low-Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          cookies
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Read and modify cookies for any domain
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          webRequest
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Observe and intercept all network requests
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Full browsing history, search history, visit counts
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          bookmarks
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Read and modify all bookmarks
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          identity
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User&apos;s Google account email and profile
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          downloads
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Download history, manage downloads
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          &lt;all_urls&gt;
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Content scripts on every website the user visits
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">Very High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          declarativeNetRequest
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Block or modify network requests via rules
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Recommended
                        </td>
                        <td className="px-4 py-3 text-slate-600">Low-Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          alarms / notifications
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Schedule events, show notifications
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Only if combined with data access
                        </td>
                        <td className="px-4 py-3 text-slate-600">Low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The general rule: if your extension can access, read,
                  modify, or store any information that relates to a user
                  or their browsing activity, you need a privacy policy.
                  When in doubt, provide one. The cost of not having one
                  (rejection or removal) far outweighs the effort to create
                  one.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  Also note that host permissions (specific domains your
                  extension can access via content scripts) count as data
                  access. If your extension injects content scripts into
                  specific websites, it can read page content from those
                  sites. This is user data access and should be disclosed.
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
                        The &lt;all_urls&gt; permission and broad host
                        permissions like *://*/* trigger the highest level
                        of review scrutiny from Google. Extensions requesting
                        these permissions must justify why they need access
                        to every website and provide especially detailed
                        privacy policies. Google recommends using activeTab
                        or specific host permissions instead whenever
                        possible.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Data Handling Certification */}
              <section id="data-handling-certification" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Data Handling Certification
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  In addition to providing a privacy policy URL, the Chrome
                  Web Store requires you to complete a data handling
                  certification in the Developer Dashboard. This
                  certification is a structured declaration of what data
                  your extension collects and how it handles that data.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The certification asks you to declare whether your
                  extension collects each of the following data types:
                  personally identifiable information, health information,
                  financial and payment information, authentication
                  information, personal communications, location data,
                  web history, user activity, and website content.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For each data type you declare, you must specify how it
                  is used. The options include: core extension functionality,
                  analytics, developer communications, advertising or
                  marketing, credit fraud detection, and personalization.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Limited Use Policy
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Google&apos;s Limited Use policy restricts how extensions
                  can use data they collect. Under Limited Use, your extension
                  may only use data for the purposes described in your listing
                  and privacy policy. You cannot sell user data. You cannot
                  use data for advertising purposes unrelated to the
                  extension&apos;s functionality. You cannot transfer data to
                  third parties unless necessary for the extension&apos;s
                  stated purpose.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Restricted Use Policy
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Some data categories trigger even stricter Restricted Use
                  requirements. If your extension reads email content,
                  accesses drive files, or handles other sensitive Google
                  Workspace data, Restricted Use applies. Under Restricted
                  Use, data can only be used to provide the extension&apos;s
                  core functionality. No secondary uses are permitted. Your
                  privacy policy must explicitly state your compliance with
                  these restrictions.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if my certification does not match my privacy
                      policy?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Google checks for consistency between your data handling
                      certification, your privacy policy, and your
                      extension&apos;s actual behavior. If your certification
                      says you do not collect location data but your privacy
                      policy mentions geolocation, or vice versa, your
                      extension will be flagged. All three must be consistent.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need to update my certification when I update my
                      extension?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. If you add new permissions or change how your
                      extension handles data, you must update both your data
                      handling certification and your privacy policy before
                      submitting the update. Submitting an update with
                      changed permissions but unchanged certifications will
                      trigger review issues.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Manifest V3 */}
              <section id="manifest-v3" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Manifest V3 and Privacy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Manifest V3 is Chrome&apos;s current extension platform,
                  replacing Manifest V2. While MV3 does not directly change
                  privacy policy requirements, it introduces architectural
                  changes that affect how your extension handles data, and
                  your privacy policy must reflect the new data flows.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Service Workers Replace Background Pages
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  In MV2, extensions could use persistent background pages
                  that ran continuously and held data in memory. MV3
                  replaces these with service workers that are event-driven
                  and terminate when idle. This means your extension can no
                  longer keep data in memory indefinitely. If your extension
                  previously held user data in a background page variable,
                  it now must store that data somewhere persistent, either
                  chrome.storage.local, chrome.storage.session, or
                  chrome.storage.sync.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  This change affects your privacy policy because data that
                  was previously ephemeral (held in memory and lost when the
                  browser closed) may now be persisted in storage. If your
                  MV3 extension uses chrome.storage.sync, the data is synced
                  across the user&apos;s devices via their Google account.
                  Your policy should disclose this.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  declarativeNetRequest Replaces webRequest Blocking
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  MV3 replaces the webRequest blocking API with
                  declarativeNetRequest for most use cases. This is a
                  privacy improvement because declarativeNetRequest uses
                  predefined rules rather than allowing extensions to
                  observe and modify every network request in real time.
                  If your extension migrated from webRequest to
                  declarativeNetRequest, your privacy policy may need
                  fewer data handling disclosures since the extension
                  no longer has direct access to request content.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  However, some extensions still use webRequest in
                  observational (non-blocking) mode, which MV3 permits.
                  If your extension observes network requests without
                  blocking them, your privacy policy must still disclose
                  this data access.
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
                        Chrome is phasing out Manifest V2 support entirely.
                        Starting in 2024, MV2 extensions can no longer be
                        published as new listings, and existing MV2 extensions
                        are losing functionality. If your extension still uses
                        MV2, you will need to migrate to MV3, and that
                        migration is the perfect time to review and update
                        your privacy policy to match the new architecture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comparison table: MV2 vs MV3 privacy implications */}
                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  MV2 vs MV3: Privacy Disclosure Comparison
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Feature
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Manifest V2
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Manifest V3
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Background data handling
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Persistent background page, data in memory
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Service worker, data must be stored persistently
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Network request access
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Full webRequest API (blocking + observing)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          declarativeNetRequest (rules-based) + observe only
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Data storage disclosure
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          May be less, if data was only in memory
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          More storage use, must disclose persistence
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Cross-device sync
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Optional via chrome.storage.sync
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          More likely due to service worker ephemerality
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Privacy review scrutiny
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Standard review
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Enhanced review for data-heavy extensions
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Chrome Extension Privacy Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These mistakes are the most common reasons Chrome
                  extensions get rejected or removed from the Web Store.
                  Each one reflects a misunderstanding of what Google
                  requires and what privacy laws demand.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My extension only changes CSS so no
                        policy is needed&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        CSS-modifying extensions still need content script
                        access to inject styles into web pages. This means
                        your extension has access to the DOM of whatever
                        pages it runs on. Even if your extension does not
                        read page content, the permission to do so means
                        you should have a privacy policy. Additionally, if
                        your extension uses host permissions or
                        &lt;all_urls&gt; to inject CSS broadly, Google
                        requires even more detailed disclosures.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;activeTab does not collect data&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The activeTab permission gives your extension
                        temporary access to the current tab when the user
                        clicks the extension icon. During that access, your
                        extension can read the page URL, title, and content.
                        Whether you read and store that data or not, the
                        capability exists. If your extension reads anything
                        from the active tab, even the URL, that is user data
                        access. Your privacy policy should disclose what you
                        access and whether you store or transmit it.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I use chrome.storage.local so data
                        stays local&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        While chrome.storage.local does keep data on the
                        user&apos;s device, it still constitutes data
                        collection and storage. Your privacy policy must
                        disclose what data is stored locally and for what
                        purpose. Additionally, if you use
                        chrome.storage.sync instead, the data is synced to
                        the user&apos;s Google account and stored on
                        Google&apos;s servers, which is a significantly
                        different data flow that requires explicit
                        disclosure.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Google&apos;s privacy policy covers
                        my extension&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Google&apos;s privacy policy covers the Chrome
                        browser and Google services. It does not cover your
                        extension. You are the data controller for your
                        extension&apos;s data handling. Google is the
                        platform provider. Your extension is your software,
                        and you are responsible for disclosing how it handles
                        user data. Pointing to Google&apos;s privacy policy
                        does not satisfy the Chrome Web Store requirement.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I will add one later after
                        publishing&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        If your extension handles user data, you cannot
                        publish without a privacy policy. The review process
                        will reject your submission. Even if an earlier
                        version was published without one, submitting an
                        update that adds data-related permissions without
                        providing a privacy policy URL will trigger a
                        rejection. Create your privacy policy before you
                        submit your extension for review, not after.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for Your Chrome Extension
                  (7 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow this process to create a privacy policy that
                  satisfies the Chrome Web Store requirements, passes the
                  review process, and complies with GDPR and CCPA.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit every permission in your manifest.json
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Open your manifest.json and list every permission
                        under &quot;permissions&quot;, &quot;optional_permissions&quot;,
                        and &quot;host_permissions&quot;. For each one,
                        document what data it gives your extension access to.
                        Remove any permissions you are not actively using.
                        Fewer permissions means fewer disclosure requirements
                        and a smoother review.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Map all data flows in your extension
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Trace how data moves through your extension from
                        start to finish. What data is read from the browser
                        or web pages? What is processed in your service
                        worker or content scripts? What is stored in
                        chrome.storage? What is sent to any remote server
                        or API? What is shared with any third-party service?
                        Document each flow.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Check Limited Use and Restricted Use requirements
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review Google&apos;s Chrome Web Store User Data Policy
                        to determine whether your data handling falls under
                        Limited Use or Restricted Use. If your extension
                        accesses sensitive data categories like email content
                        or financial information, additional restrictions
                        apply. Your privacy policy must explicitly address
                        these requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Generate your privacy policy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Use a{" "}
                        <Link
                          href="/generate"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          privacy policy generator
                        </Link>{" "}
                        to create a policy tailored to your Chrome
                        extension&apos;s data handling. Include details about
                        each permission, data storage methods, any remote
                        server communication, and all third-party services.
                        The policy must match your data handling
                        certification exactly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Host your privacy policy at a permanent public URL
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Publish your privacy policy at a URL that is publicly
                        accessible without requiring a login. Options include
                        a page on your personal or company website, a GitHub
                        Pages site, or any publicly hosted webpage. The URL
                        must remain accessible for as long as your extension
                        is published on the Chrome Web Store.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add the URL to your Developer Dashboard
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        In the Chrome Web Store Developer Dashboard, go to
                        your extension listing. Find the privacy policy URL
                        field (in the Privacy tab or Store Listing section)
                        and enter your publicly accessible URL. This link
                        will be displayed on your extension&apos;s store
                        listing page so users can review it before
                        installing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      7
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Complete the data handling certification
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Fill out the data handling certification in the
                        Developer Dashboard. Declare every type of data your
                        extension collects and how it is used. Make sure
                        these declarations match your privacy policy exactly.
                        Any mismatch between your certification, your policy,
                        and your extension&apos;s actual behavior will cause
                        rejection.
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
                        Generate Your Extension Privacy Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Answer a few questions about your Chrome extension
                        and get a privacy policy that passes the Web Store
                        review process. Covers permissions, data storage,
                        third-party services, and user rights.
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
                      Does my Chrome extension need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      If your extension handles any personal or sensitive
                      user data, yes. This includes accessing browsing data,
                      page content, cookies, history, bookmarks, or user
                      identity. The Chrome Web Store will reject extensions
                      that request data-related permissions without providing
                      a privacy policy URL.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if I publish without a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      New extensions that handle user data will be rejected
                      during the review process. Existing extensions found
                      to be non-compliant can be removed from the store at
                      any time. Your developer account may face suspension
                      for repeated violations. Google has become
                      significantly stricter about enforcement since 2023.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Where do I add my privacy policy URL?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      In the Chrome Web Store Developer Dashboard, go to
                      your extension listing and find the privacy policy URL
                      field in the Privacy tab or Store Listing section.
                      Enter a publicly accessible URL that does not require
                      a login to view. This URL will be displayed on your
                      extension&apos;s store listing page.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does activeTab require a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The activeTab permission alone may not strictly
                      require one, but most extensions using activeTab do
                      read page content or URLs, which constitutes data
                      access. Google recommends a privacy policy for all
                      extensions. If your extension reads anything from
                      the active tab, even temporarily, you should have one.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What must my extension privacy policy include?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your policy must disclose what data your extension
                      collects, how it uses that data, whether it shares
                      data with third parties, how it stores data, and how
                      users can delete their data. For extensions subject to
                      Limited Use requirements, you must also state your
                      compliance with the Chrome Web Store User Data Policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is the data handling certification?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The data handling certification is a required section
                      in the Developer Dashboard where you declare what data
                      your extension collects and how it uses that data. You
                      must certify whether you collect personally
                      identifiable information, health data, financial data,
                      authentication data, communications, location data,
                      web history, or user activity. Your privacy policy
                      must match these declarations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Manifest V3 change privacy policy requirements?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Manifest V3 does not change the requirements directly,
                      but it affects what you need to disclose. Service
                      workers replace background pages, changing how data
                      persistence works. declarativeNetRequest replaces
                      webRequest blocking, changing network access patterns.
                      If you migrated from MV2, review whether your policy
                      still accurately describes your data handling.
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
                      href: "/chrome-extension-privacy-policy-template",
                      title: "Chrome Extension Privacy Policy Template",
                      desc: "Free, copy-paste ready template for your extension",
                    },
                    {
                      href: "/chrome-web-store-privacy-policy-requirements",
                      title: "Chrome Web Store Requirements",
                      desc: "Full checklist of what Google checks during review",
                    },
                    {
                      href: "/do-chrome-extensions-need-a-privacy-policy",
                      title: "Do Chrome Extensions Need a Privacy Policy?",
                      desc: "When a privacy policy is required and when it is not",
                    },
                    {
                      href: "/chrome-extension-gdpr-compliance",
                      title: "Chrome Extension GDPR Compliance",
                      desc: "Complete GDPR guide for extension developers",
                    },
                    {
                      href: "/privacy-policy-for-google-play",
                      title: "Privacy Policy for Google Play",
                      desc: "Google Play Store privacy policy requirements",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
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
                  Ready to Publish Your Chrome Extension?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a missing privacy policy block your Web Store
                  submission. Generate a compliant policy that covers your
                  permissions, data handling, and user rights. Takes under
                  60 seconds.
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
