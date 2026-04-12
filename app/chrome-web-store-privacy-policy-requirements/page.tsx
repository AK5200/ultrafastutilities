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
  ClipboardCheck,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Chrome Web Store Privacy Policy Requirements: Full Checklist (2026) | ultrafastutilities",
  description:
    "Complete breakdown of Chrome Web Store privacy policy requirements. Learn what Google checks during review, which permissions trigger mandatory disclosure, and how to avoid rejection.",
  keywords:
    "chrome web store privacy policy requirements, chrome web store privacy policy, chrome extension store requirements, chrome extension review process, chrome web store developer program policies",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/chrome-web-store-privacy-policy-requirements",
  },
  openGraph: {
    title:
      "Chrome Web Store Privacy Policy Requirements: Full Checklist (2026) | ultrafastutilities",
    description:
      "Complete breakdown of Chrome Web Store privacy policy requirements. Learn what Google checks during review, which permissions trigger mandatory disclosure, and how to avoid rejection.",
    url: "https://ultrafastutilities.com/chrome-web-store-privacy-policy-requirements",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chrome Web Store Privacy Policy Requirements | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chrome Web Store Privacy Policy Requirements: Full Checklist (2026)",
    description:
      "Complete breakdown of Chrome Web Store privacy policy requirements. Learn what Google checks during review and which permissions trigger mandatory disclosure.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the Chrome Web Store privacy policy requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Chrome Web Store requires any extension that handles personal or sensitive user data to provide a publicly accessible privacy policy URL. The policy must disclose what data the extension collects, how it uses that data, whether it shares data with third parties, how data is stored, and how users can request deletion. You must also complete the data handling certification in the Developer Dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Which Chrome extension permissions require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Permissions that access user data require a privacy policy. This includes tabs, cookies, history, bookmarks, identity, webRequest, downloads, and broad host permissions like <all_urls>. The storage permission requires a policy if you store personal data. Even activeTab is recommended to have a policy since most extensions using it read page content or URLs.",
      },
    },
    {
      "@type": "Question",
      name: "What does Google check during the Chrome Web Store review?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google reviewers verify that your privacy policy URL is publicly accessible, that the policy accurately describes your data handling, that your data handling certification matches your policy, that you only request permissions your extension actually needs, and that your extension does not collect or transmit data not disclosed in your policy. Automated tools also scan for common violations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Chrome Web Store data handling certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The data handling certification is a required section in the Developer Dashboard where you declare what types of data your extension collects and how it uses that data. Categories include personally identifiable information, health data, financial data, authentication information, personal communications, location data, web history, and user activity. Your declarations must match your privacy policy exactly.",
      },
    },
    {
      "@type": "Question",
      name: "Can my Chrome extension be rejected for privacy policy issues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Missing privacy policies, inaccurate disclosures, mismatches between your certification and policy, requesting unnecessary permissions, and failing to disclose remote data transmission are all common rejection reasons. Existing extensions can also be removed for non-compliance, and developer accounts with repeated violations can be permanently suspended.",
      },
    },
    {
      "@type": "Question",
      name: "Does Manifest V3 change Chrome Web Store privacy requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manifest V3 does not change the privacy policy requirements directly, but it affects what you need to disclose. Service workers replace background pages, meaning data that was previously ephemeral in memory may now need persistent storage. declarativeNetRequest replaces webRequest blocking, changing network access patterns. Your privacy policy must accurately reflect how data flows under the MV3 architecture.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a privacy policy to my Chrome Web Store listing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Chrome Web Store Developer Dashboard, navigate to your extension listing and find the Privacy tab or Store Listing section. There is a dedicated field for your privacy policy URL. Enter a publicly accessible URL that does not require a login to view. This URL will be displayed on your store listing so users can review it before installing your extension.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Meet Chrome Web Store Privacy Policy Requirements",
  description:
    "Follow these seven steps to create a privacy policy that satisfies all Chrome Web Store requirements, passes the review process, and keeps your extension compliant.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Review the Chrome Web Store Developer Program Policies",
      text: "Read the official Chrome Web Store Developer Program Policies and the User Data Policy in full. Understand the difference between Limited Use and Restricted Use requirements. Identify which rules apply to your extension based on the data it handles and the permissions it requests.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Audit your manifest.json permissions",
      text: "Open your manifest.json and list every entry under permissions, optional_permissions, and host_permissions. For each permission, document what data it gives your extension access to and whether your extension actually reads, stores, or transmits that data. Remove any permissions you are not actively using.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Map every data flow in your extension",
      text: "Trace how data moves through your extension. Identify what data is read from the browser or web pages, what is processed in your service worker or content scripts, what is stored via chrome.storage, what is sent to remote servers, and what is shared with third-party services or APIs.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Draft or generate your privacy policy",
      text: "Use a privacy policy generator to create a policy tailored to your Chrome extension. Include specific details about each permission, data storage methods, any remote server communication, third-party services, and user rights. The policy must match your data handling certification exactly.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Host the policy at a permanent public URL",
      text: "Publish your privacy policy at a URL that is publicly accessible without requiring a login. Options include a page on your website, a GitHub Pages site, or a simple hosted HTML page. The URL must remain accessible for as long as your extension is published on the Chrome Web Store.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Complete the data handling certification",
      text: "In the Developer Dashboard, fill out the data handling certification. Declare every type of data your extension collects and how it is used. Ensure these declarations match your privacy policy exactly. Mismatches between your certification and your policy will cause your extension to be flagged or rejected.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Submit and verify your listing",
      text: "Add your privacy policy URL to the designated field in the Developer Dashboard. Double-check that your policy, certification, and manifest permissions are all consistent. Submit your extension for review. Monitor the review status and address any feedback from Google promptly.",
    },
  ],
};

const tocSections = [
  { id: "what-web-store-requires", title: "What the Web Store Requires" },
  { id: "permissions-trigger", title: "Permissions That Trigger a Policy" },
  { id: "data-handling-certification", title: "Data Handling Certification" },
  { id: "what-reviewers-check", title: "What Google Reviewers Check" },
  { id: "manifest-v3-privacy", title: "Manifest V3 Privacy Requirements" },
  { id: "common-rejections", title: "Common Rejection Reasons" },
  { id: "how-to-comply", title: "How to Comply (7 Steps)" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function ChromeWebStorePrivacyPolicyRequirementsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Chrome Web Store Privacy Policy Requirements: Full Checklist (2026)",
            description:
              "Complete breakdown of Chrome Web Store privacy policy requirements. Learn what Google checks during review, which permissions trigger mandatory disclosure, and how to avoid rejection.",
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
                name: "Chrome Web Store Privacy Policy Requirements",
                item: "https://ultrafastutilities.com/chrome-web-store-privacy-policy-requirements",
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
                Chrome Web Store Privacy Policy Requirements
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ClipboardCheck className="w-3.5 h-3.5" />
                Full Checklist
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Chrome Web Store{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Privacy Policy Requirements
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Every Chrome extension that handles user data must meet
                Google&apos;s privacy policy requirements to pass review.
                This checklist covers exactly what Google checks, which
                permissions trigger mandatory disclosure, and how to avoid
                rejection.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Chrome extension developers, indie makers, and teams
                publishing to the Chrome Web Store.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA &amp;
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
                href="/chrome-extension-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Policy Template
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>13 min read</span>
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
                  Your policy must be hosted at a publicly accessible URL,
                  linked in your Developer Dashboard, and accurately
                  describe what data your extension collects, how it uses
                  that data, and whether it shares data with third parties.
                  You must also complete the data handling certification.
                  Extensions that fail these requirements will be rejected
                  during review or removed from the store.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Publishing a Chrome extension means meeting Google&apos;s
                privacy standards. The Chrome Web Store Developer Program
                Policies include detailed rules about how extensions must
                handle user data, what must be disclosed, and how
                developers must certify their data practices. These are
                not optional guidelines. They are enforced through both
                automated checks and human review.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                Google has tightened its enforcement significantly in
                recent years. Extensions are reviewed more carefully,
                rejections for privacy violations have increased, and
                developer accounts with repeated violations are
                suspended. Understanding exactly what the Chrome Web
                Store requires is essential for any developer who wants
                to publish and maintain an extension.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide breaks down every requirement: what the
                Chrome Web Store demands, which permissions trigger
                mandatory disclosures, how the data handling
                certification works, what Google reviewers actually
                check, how Manifest V3 affects your privacy obligations,
                the most common reasons extensions get rejected, and a
                step-by-step process for meeting every requirement.
              </p>

              {/* Section 1: What the Chrome Web Store Requires */}
              <section id="what-web-store-requires" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What the Chrome Web Store Requires
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The Chrome Web Store Developer Program Policies lay out
                  clear privacy requirements for every extension that
                  handles user data. These requirements apply at the time
                  of initial submission and on an ongoing basis for
                  published extensions.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Core Privacy Requirements
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy URL:</strong> A publicly
                      accessible URL entered in the Developer Dashboard
                      that links to your extension&apos;s privacy policy.
                      This URL is displayed on your store listing for
                      users to review before installation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Accurate data disclosures:</strong> Your
                      policy must describe what data your extension
                      collects, how it uses that data, whether it shares
                      data with third parties, how data is stored, and
                      how users can request deletion of their data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data handling certification:</strong> You
                      must complete the data handling section in the
                      Developer Dashboard, certifying what types of data
                      your extension collects and how it handles that
                      data. This must match your privacy policy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Limited Use compliance:</strong> If your
                      extension accesses sensitive categories of data,
                      you must comply with Google&apos;s Limited Use
                      requirements and state this compliance explicitly
                      in your privacy policy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Minimum necessary permissions:</strong>{" "}
                      Your extension must only request permissions it
                      actively needs. Requesting broad permissions
                      without justification triggers additional review
                      scrutiny and requires more detailed disclosures.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>No undisclosed data transmission:</strong>{" "}
                      If your extension sends data to any remote server,
                      this must be disclosed in your privacy policy and
                      data handling certification. Undisclosed remote
                      data transmission is one of the top reasons for
                      extension removal.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  These requirements apply to all extensions that handle
                  user data, regardless of whether the extension is free,
                  paid, open source, or used by one person or millions.
                  The requirement is based on data handling, not
                  distribution scale.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Mandatory</p>
                    <p className="text-xs text-slate-500 mt-1">
                      For data-handling extensions
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Public</p>
                    <p className="text-xs text-slate-500 mt-1">
                      No login required to view
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <AlertTriangle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Enforced</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Automated + human review
                    </p>
                  </div>
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
                        Google removed over 500 Chrome extensions from the
                        Web Store in a single enforcement sweep in 2023 for
                        violating data handling policies. The most common
                        violations were collecting data not disclosed in the
                        privacy policy, transmitting data to undisclosed
                        servers, and requesting permissions beyond what was
                        necessary for the extension&apos;s stated functionality.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do these requirements apply to unlisted extensions?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Even extensions that are unlisted (not
                      discoverable via search) on the Chrome Web Store must
                      meet the same privacy policy requirements. If your
                      extension handles user data and is hosted on the
                      Chrome Web Store in any form, the requirements apply.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if my extension does not handle any user data?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      If your extension truly does not handle any personal
                      or sensitive user data and requests no data-related
                      permissions, a privacy policy is not strictly
                      required. However, Google strongly recommends
                      providing one for all extensions. Having a policy
                      builds user trust and prevents issues if you add
                      data-related features later.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Permissions That Trigger a Privacy Policy */}
              <section id="permissions-trigger" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Permissions That Trigger a Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Not all Chrome extension permissions carry the same
                  privacy implications. Some permissions clearly access
                  personal or sensitive user data and require a privacy
                  policy. Others are lower risk but still recommended.
                  The following table covers the most common permissions
                  and their privacy policy implications.
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
                          Disclosure Level
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
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
                          activeTab
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Current tab URL and page content on user click
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Recommended
                        </td>
                        <td className="px-4 py-3 text-slate-600">Low</td>
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
                  Host permissions also count. If your extension uses
                  specific domains in the host_permissions field of your
                  manifest, it can inject content scripts into those
                  sites and read page content. This constitutes user data
                  access and must be disclosed in your privacy policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The general rule: if your extension can access, read,
                  modify, or store any information that relates to a user
                  or their browsing activity, you need a privacy policy.
                  When in doubt, provide one. The cost of rejection or
                  removal far outweighs the effort to create a policy.
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
                        of review scrutiny from Google. Extensions using
                        these must justify why they need access to every
                        website and provide especially detailed privacy
                        policies. Google recommends using activeTab or
                        specific host permissions instead whenever possible.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Data Handling Certification */}
              <section id="data-handling-certification" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Handling Certification
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Beyond the privacy policy URL, the Chrome Web Store
                  requires you to complete a data handling certification
                  in the Developer Dashboard. This is a structured
                  declaration of what data your extension collects and
                  how it handles that data.
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
                  is used. The usage options include: core extension
                  functionality, analytics, developer communications,
                  advertising or marketing, credit fraud detection, and
                  personalization. Your selections must match what your
                  privacy policy states. Any mismatch will cause your
                  extension to be flagged during review.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Limited Use Policy
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Google&apos;s Limited Use policy restricts how
                  extensions can use collected data. Under Limited Use,
                  your extension may only use data for the purposes
                  described in your listing and privacy policy. You
                  cannot sell user data. You cannot use data for
                  advertising unrelated to the extension&apos;s
                  functionality. You cannot transfer data to third
                  parties unless necessary for the extension&apos;s
                  stated purpose.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Restricted Use Policy
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Some data categories trigger even stricter Restricted
                  Use requirements. If your extension reads email content,
                  accesses Drive files, or handles other sensitive Google
                  Workspace data, Restricted Use applies. Under Restricted
                  Use, data can only be used to provide the extension&apos;s
                  core functionality. No secondary uses are permitted. Your
                  privacy policy must explicitly state compliance with
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
                      Google checks for consistency between your data
                      handling certification, your privacy policy, and your
                      extension&apos;s actual behavior. If your certification
                      says you do not collect location data but your privacy
                      policy mentions geolocation, your extension will be
                      flagged. All three must be consistent.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need to update my certification when I update
                      my extension?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. If you add new permissions or change how your
                      extension handles data, you must update both your data
                      handling certification and your privacy policy before
                      submitting the update. Changed permissions with
                      unchanged certifications will trigger review issues.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: What Google Reviewers Check */}
              <section id="what-reviewers-check" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Google Reviewers Check
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The Chrome Web Store review process combines automated
                  scanning with human review. Understanding what
                  reviewers look for helps you avoid common pitfalls
                  that lead to rejection or removal.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Automated Checks
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy URL accessibility:</strong>{" "}
                      Google verifies that your privacy policy URL returns
                      a 200 status code and is publicly accessible without
                      authentication.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Permission-to-policy matching:</strong>{" "}
                      Automated tools flag extensions that request
                      data-related permissions without providing a privacy
                      policy URL.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Remote code detection:</strong> Google scans
                      for extensions that load and execute remote code,
                      which is prohibited under MV3 and triggers additional
                      privacy scrutiny.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data transmission scanning:</strong>{" "}
                      Automated tools detect network calls to external
                      servers. If your extension sends data to a remote
                      endpoint, this must be disclosed.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Human Review Items
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Policy content accuracy:</strong> Reviewers
                      check whether your privacy policy actually describes
                      the data handling observed in your extension&apos;s
                      code. Generic or boilerplate policies that do not
                      match your extension&apos;s behavior are flagged.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Certification consistency:</strong> Reviewers
                      verify that your data handling certification matches
                      both your privacy policy and your extension&apos;s
                      actual behavior.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Permission justification:</strong> If your
                      extension requests broad permissions, reviewers
                      evaluate whether the permissions are necessary for
                      the stated functionality.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Third-party data sharing:</strong> Reviewers
                      check for undisclosed data sharing with analytics
                      services, advertising networks, or other third
                      parties.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Google reviews extensions both at submission and on an
                  ongoing basis. Published extensions can be re-reviewed
                  at any time. If a compliance issue is found, your
                  extension can be removed without warning. Developer
                  accounts with repeated violations face permanent
                  suspension.
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
                        Google uses both static analysis and dynamic analysis
                        during the review process. Static analysis scans your
                        extension&apos;s code for suspicious patterns, while
                        dynamic analysis runs your extension in a sandboxed
                        environment to observe its actual behavior. If your
                        extension makes network calls not reflected in your
                        privacy policy, dynamic analysis will catch it.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Manifest V3 Privacy Requirements */}
              <section id="manifest-v3-privacy" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Manifest V3 Privacy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Manifest V3 is Chrome&apos;s current extension platform.
                  While MV3 does not directly change privacy policy
                  requirements, it introduces architectural changes that
                  affect how your extension handles data, and your privacy
                  policy must reflect these new data flows.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Service Workers Replace Background Pages
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  MV3 replaces persistent background pages with
                  event-driven service workers that terminate when idle.
                  Data that was previously held in memory is now lost when
                  the service worker stops. If your extension needs to
                  persist data across service worker restarts, it must use
                  chrome.storage.local, chrome.storage.session, or
                  chrome.storage.sync. Your privacy policy must disclose
                  this persistent storage, especially if you use
                  chrome.storage.sync, which syncs data to the user&apos;s
                  Google account.
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
                  fewer data handling disclosures.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  However, MV3 still permits webRequest in observational
                  (non-blocking) mode. If your extension observes network
                  requests without blocking them, your privacy policy must
                  still disclose this data access.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  No Remote Code Execution
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  MV3 prohibits extensions from loading and executing
                  remotely hosted code. All code must be bundled in the
                  extension package. This is a privacy-relevant change
                  because it prevents extensions from silently changing
                  their behavior after installation. Your privacy policy
                  should reflect that your extension only runs code
                  included in the published package.
                </p>

                {/* MV2 vs MV3 comparison table */}
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
                          Remote code
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Allowed to load remote scripts
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Prohibited, all code must be bundled
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

              {/* Section 6: Common Rejection Reasons */}
              <section id="common-rejections" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Rejection Reasons
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the five most common privacy-related reasons
                  Chrome extensions get rejected or removed from the Web
                  Store. Each one is preventable if you understand what
                  Google expects.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Rejection: Missing or inaccessible privacy policy URL
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The most straightforward rejection reason. Your
                        extension requests data-related permissions but you
                        have not provided a privacy policy URL in the
                        Developer Dashboard, or the URL you provided returns
                        an error, requires a login, or redirects to an
                        unrelated page. Google&apos;s automated checks catch
                        this immediately. The fix is simple: host your
                        privacy policy at a permanent, publicly accessible
                        URL and enter it in the Dashboard.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Rejection: Privacy policy does not match actual data
                        handling
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your extension collects or transmits data that your
                        privacy policy does not mention. This often happens
                        when developers use a generic template without
                        customizing it for their extension, or when they add
                        new features without updating their policy. Google
                        compares your extension&apos;s observed behavior
                        against your policy&apos;s disclosures. Every data
                        flow must be accurately documented.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Rejection: Data handling certification mismatch
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your data handling certification in the Developer
                        Dashboard does not align with your privacy policy or
                        your extension&apos;s actual behavior. For example,
                        your certification says you do not collect web
                        history, but your extension uses the history
                        permission. Or your certification says data is used
                        only for core functionality, but your privacy policy
                        mentions analytics. All three sources of truth must
                        be consistent.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Rejection: Requesting unnecessary permissions
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your extension requests permissions it does not
                        actually use. A common example is requesting
                        &lt;all_urls&gt; when the extension only needs
                        access to a few specific websites. Google requires
                        that your extension follow the principle of minimum
                        necessary permissions. Requesting broad permissions
                        without justification triggers rejection and
                        requires you to narrow your permission scope.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Rejection: Undisclosed remote data transmission
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your extension sends data to a remote server that
                        is not disclosed in your privacy policy or data
                        handling certification. This includes analytics
                        services, error tracking, API calls that send user
                        data, and any other network communication that
                        transmits information about the user or their
                        browsing. Google&apos;s dynamic analysis catches
                        network calls, and any undisclosed transmission
                        results in rejection or removal.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: How to Comply (7 Steps) */}
              <section id="how-to-comply" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Meet Chrome Web Store Privacy Requirements
                  (7 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow this step-by-step process to meet every Chrome
                  Web Store privacy requirement and get your extension
                  through the review process on the first submission.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Review the Chrome Web Store Developer Program Policies
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Read the official Developer Program Policies and the
                        User Data Policy in full. Understand the difference
                        between Limited Use and Restricted Use requirements.
                        Identify which rules apply to your extension based
                        on the data it handles and the permissions it
                        requests.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit every permission in your manifest.json
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Open your manifest.json and list every entry under
                        &quot;permissions&quot;, &quot;optional_permissions&quot;,
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
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Map every data flow in your extension
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Trace how data moves through your extension. What
                        data is read from the browser or web pages? What is
                        processed in your service worker or content scripts?
                        What is stored in chrome.storage? What is sent to
                        any remote server or API? What is shared with any
                        third-party service? Document each flow so your
                        privacy policy can accurately describe them.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Draft or generate your privacy policy
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
                        extension. Include specific details about each
                        permission, data storage methods, any remote server
                        communication, third-party services, and user
                        rights. The policy must match your data handling
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
                        Host the policy at a permanent public URL
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Publish your privacy policy at a URL that is publicly
                        accessible without requiring a login. Options include
                        a page on your website, a GitHub Pages site, or any
                        publicly hosted webpage. The URL must remain
                        accessible for as long as your extension is published.
                        If the URL goes down, your extension can be removed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Complete the data handling certification
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        In the Developer Dashboard, fill out the data
                        handling certification. Declare every type of data
                        your extension collects and how it is used. Ensure
                        these declarations match your privacy policy exactly.
                        Any mismatch between your certification and your
                        policy will cause your extension to be flagged or
                        rejected during review.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      7
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Submit and verify your listing
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add your privacy policy URL to the designated field
                        in the Developer Dashboard. Double-check that your
                        policy, certification, and manifest permissions are
                        all consistent. Submit your extension for review.
                        Monitor the review status and address any feedback
                        from Google promptly to avoid delays.
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
                        Generate a Compliant Privacy Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Answer a few questions about your Chrome extension
                        and get a privacy policy that meets every Chrome Web
                        Store requirement. Covers permissions, data handling
                        certification, third-party services, and user rights.
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
                      What are the Chrome Web Store privacy policy requirements?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Any extension that handles personal or sensitive user
                      data must provide a publicly accessible privacy policy
                      URL. The policy must disclose what data the extension
                      collects, how it uses that data, whether it shares
                      data with third parties, how data is stored, and how
                      users can request deletion. You must also complete the
                      data handling certification in the Developer Dashboard.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Which permissions require a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Permissions that access user data require a privacy
                      policy. This includes tabs, cookies, history,
                      bookmarks, identity, webRequest, downloads, and broad
                      host permissions like &lt;all_urls&gt;. The storage
                      permission requires a policy if you store personal
                      data. Even activeTab is recommended to have a policy
                      since most extensions using it read page content.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What does Google check during the review process?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Google checks that your privacy policy URL is
                      accessible, that the policy accurately describes your
                      data handling, that your certification matches your
                      policy, that you only request necessary permissions,
                      and that your extension does not transmit data to
                      undisclosed servers. Both automated tools and human
                      reviewers are involved in this process.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is the data handling certification?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The data handling certification is a required section
                      in the Developer Dashboard where you declare what
                      types of data your extension collects and how it uses
                      that data. Categories include personally identifiable
                      information, health data, financial data,
                      authentication data, communications, location data,
                      web history, and user activity. Your declarations must
                      match your privacy policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can my extension be rejected for privacy policy issues?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Missing privacy policies, inaccurate disclosures,
                      certification mismatches, unnecessary permissions, and
                      undisclosed remote data transmission are all common
                      rejection reasons. Existing extensions can also be
                      removed for non-compliance, and developer accounts
                      with repeated violations can be permanently suspended.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Manifest V3 change privacy requirements?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Manifest V3 does not change the requirements directly,
                      but it affects what you need to disclose. Service
                      workers replace background pages, changing how data
                      persistence works. declarativeNetRequest replaces
                      webRequest blocking, changing network access patterns.
                      Remote code execution is now prohibited. Your policy
                      must reflect these architectural changes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I add a privacy policy to my Chrome Web Store listing?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      In the Developer Dashboard, go to your extension
                      listing and find the Privacy tab or Store Listing
                      section. There is a dedicated field for your privacy
                      policy URL. Enter a publicly accessible URL that does
                      not require a login. This URL will be displayed on
                      your store listing so users can review it before
                      installing.
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
                      desc: "Complete guide to Chrome extension privacy policies",
                    },
                    {
                      href: "/chrome-extension-privacy-policy-template",
                      title: "Chrome Extension Privacy Policy Template",
                      desc: "Copy-and-customize template for extension developers",
                    },
                    {
                      href: "/do-chrome-extensions-need-a-privacy-policy",
                      title: "Do Chrome Extensions Need a Privacy Policy?",
                      desc: "When a privacy policy is required vs recommended",
                    },
                    {
                      href: "/chrome-extension-gdpr-compliance",
                      title: "Chrome Extension GDPR Compliance",
                      desc: "GDPR requirements for Chrome extension developers",
                    },
                    {
                      href: "/privacy-policy-for-google-play",
                      title: "Privacy Policy for Google Play",
                      desc: "Google Play Store privacy policy requirements",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      title: "Privacy Policy for Apps",
                      desc: "App store requirements for mobile and desktop apps",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "Real consequences of operating without one",
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
                  Ready to Meet Every Requirement?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a missing or non-compliant privacy policy
                  block your Chrome Web Store submission. Generate a
                  policy that covers permissions, data handling
                  certification, and user rights. Takes under 60 seconds.
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
