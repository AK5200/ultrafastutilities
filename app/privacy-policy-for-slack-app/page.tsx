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
  Shield,
  Lock,
  Building2,
  Key,
  Users,
  MessageSquare,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Slack Apps: App Directory Requirements (2026) | ultrafastutilities",
  description:
    "Slack's App Directory requires a privacy policy for all listed apps. Learn what to disclose about workspace data, OAuth scopes, and user information. Generate a compliant policy in 60 seconds.",
  keywords:
    "privacy policy for slack app, slack app privacy policy, slack app directory requirements, slack developer policy privacy, slack app gdpr",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-slack-app",
  },
  openGraph: {
    title:
      "Privacy Policy for Slack Apps: App Directory Requirements (2026) | ultrafastutilities",
    description:
      "Slack's App Directory requires a privacy policy for all listed apps. Learn what to disclose about workspace data, OAuth scopes, and user information. Generate a compliant policy in 60 seconds.",
    url: "https://ultrafastutilities.com/privacy-policy-for-slack-app",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Slack Apps | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Slack Apps: App Directory Requirements (2026)",
    description:
      "Slack's App Directory requires a privacy policy for all listed apps. Learn what to disclose about workspace data, OAuth scopes, and user information.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Slack require a privacy policy for apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slack's App Directory Guidelines require all listed apps to have a publicly accessible privacy policy. The policy must be linked from your app's landing page and included in your App Directory listing. Even apps distributed privately outside the App Directory should have a privacy policy because they still process workspace data through Slack's API.",
      },
    },
    {
      "@type": "Question",
      name: "What data do Slack apps receive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slack apps receive data based on the OAuth scopes they request. This can include workspace information (team name, team ID), user profiles (names, email addresses, profile photos), channel messages (if subscribed to message events), file uploads shared in channels, slash command payloads (user ID, channel ID, command text), and OAuth tokens. Even apps that only respond to slash commands receive user IDs, workspace IDs, and the command input text.",
      },
    },
    {
      "@type": "Question",
      name: "What are OAuth scopes and how do they affect my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OAuth scopes define what data your Slack app can access. Common scopes include channels:read (channel list and details), chat:write (post messages), users:read (user profiles), files:read (file metadata), and commands (slash commands). Your privacy policy must accurately reflect the data accessible through your requested scopes. If you request users:read.email, your policy must disclose that you access email addresses. Each scope expands your data processing and requires corresponding privacy disclosures.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for a Slack app not listed in the App Directory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you should have one. While the App Directory listing requirement is the most visible enforcement mechanism, Slack's API Terms of Service apply to all apps regardless of distribution method. Additionally, GDPR and CCPA apply based on the data you process, not where your app is listed. If your app processes personal data from Slack users, you need a privacy policy to comply with applicable privacy laws.",
      },
    },
    {
      "@type": "Question",
      name: "How do enterprise customers affect my Slack app's privacy requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enterprise Grid customers (large organizations using Slack) often have strict compliance requirements. Many enterprise customers will not approve an app without reviewing its privacy policy, data handling practices, and security measures. Some require a Data Processing Agreement (DPA) in addition to a privacy policy. Having a comprehensive, professional privacy policy can be the difference between winning and losing enterprise customers.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my Slack app does not have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without a privacy policy, your app cannot be listed in the Slack App Directory, which is the primary distribution channel for Slack apps. Even for privately distributed apps, lacking a privacy policy exposes you to GDPR fines of up to 20 million euros or 4% of annual revenue, and CCPA penalties of up to $7,500 per intentional violation. Enterprise customers will also refuse to install apps without a privacy policy, limiting your potential market.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a privacy policy for my Slack app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest approach is to use a privacy policy generator. Document your app's OAuth scopes, the data types each scope accesses, how your app stores and uses that data, and any third-party services that receive the data. Then use a generator to produce a complete, legally compliant policy. Host the policy on your app's website and link to it from your App Directory listing and your app's landing page.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Slack App",
  description:
    "Follow these six steps to create a privacy policy that meets Slack's App Directory requirements and complies with GDPR, CCPA, and other applicable privacy laws.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your OAuth scopes and data access",
      text: "Review every OAuth scope your Slack app requests. For each scope, document what data it gives your app access to. Check both bot token scopes and user token scopes. List all event subscriptions and the data payloads they deliver. This audit forms the foundation of your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Document what data your app stores and processes",
      text: "Identify what data your app saves to a database versus what it processes in real-time and discards. Note where data is stored (cloud provider, region), how long it is retained, and who has access to it within your organization. Include any logging that captures user data, even temporarily.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "List all third-party services that receive data",
      text: "Document every external service your app integrates with beyond Slack. This includes database hosting, analytics platforms, AI or ML services, email delivery, error tracking, and any other service that receives data originating from Slack workspaces. Each service is a sub-processor that must be disclosed.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a comprehensive policy based on your audit. Input the data types, storage methods, third-party services, and retention periods you identified. The generator produces a complete policy covering GDPR, CCPA, and Slack App Directory requirements.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Host your privacy policy on your app's website",
      text: "Publish your privacy policy at a permanent, publicly accessible URL on your app's website or landing page. The URL should be stable and professional. Slack requires the privacy policy to be accessible from your app's landing page.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Add the privacy policy to your App Directory listing",
      text: "Include the privacy policy URL in your Slack App Directory submission. Also link to it from your app's landing page, installation flow, and help documentation. Review and update the policy whenever you change your app's scopes, data handling, or third-party integrations.",
    },
  ],
};

const tocSections = [
  { id: "slack-requires-policy", title: "Does Slack Require One?" },
  { id: "what-apps-receive", title: "What Data Apps Receive" },
  { id: "directory-guidelines", title: "App Directory Guidelines" },
  { id: "oauth-scopes", title: "OAuth Scopes and Data Access" },
  { id: "enterprise-grid", title: "Enterprise Grid Considerations" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "easiest-way", title: "The Easiest Way" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForSlackAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Slack Apps: App Directory Requirements (2026)",
            description:
              "Slack's App Directory requires a privacy policy for all listed apps. Learn what to disclose about workspace data, OAuth scopes, and user information.",
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
                name: "Privacy Policy for Slack Apps",
                item: "https://ultrafastutilities.com/privacy-policy-for-slack-app",
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
                Privacy Policy for Slack Apps
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
                  Slack Apps
                </span>
                : App Directory Requirements
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Slack&apos;s App Directory requires a privacy policy for all
                listed apps. Your policy must cover workspace data, OAuth
                scopes, user information, and third-party data sharing.
                Here is exactly what to include and how to get it right.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Slack app developers building integrations, bots,
                workflows, and tools for Slack workspaces.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: April 2026 &middot; Reviewed for GDPR, CCPA &amp;
                Slack App Directory compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                App Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-discord-bot"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Discord Bot Policy
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
                    Generate one for your Slack app in 60 seconds
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
                  <strong>Yes, Slack requires a privacy policy for all App Directory apps.</strong>{" "}
                  Slack&apos;s App Directory Guidelines mandate that every
                  listed app have a publicly accessible privacy policy on its
                  landing page. Your policy must disclose what workspace data
                  your app accesses through OAuth scopes, how user information
                  is stored and processed, and whether data is shared with
                  third parties.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Slack is the workplace communication platform of choice for
                millions of organizations, from startups to Fortune 500
                companies. The Slack App Directory hosts thousands of
                integrations that extend Slack&apos;s functionality, from
                project management tools to AI assistants to custom workflow
                automations.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                If you are building a Slack app, you are building something
                that handles workplace data. Messages, user profiles, file
                shares, channel memberships, and organizational structures
                all flow through Slack&apos;s API. This data is often
                sensitive, sometimes confidential, and always personal. That
                is why Slack requires a privacy policy and why getting it
                right matters for your app&apos;s success.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly what Slack requires in your
                privacy policy, how OAuth scopes determine your data
                obligations, why enterprise customers care deeply about your
                privacy practices, and the fastest way to create a compliant
                privacy policy for your Slack app.
              </p>

              {/* Section 1: Does Slack Require a Privacy Policy? */}
              <section id="slack-requires-policy" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Does Slack Require a Privacy Policy?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Yes. Slack&apos;s App Directory Guidelines explicitly
                  require all listed apps to have a privacy policy. This
                  requirement applies at the point of submission. Your app
                  cannot be listed in the App Directory without a privacy
                  policy URL. Slack&apos;s review team checks for this during
                  the app review process.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Required</p>
                    <p className="text-xs text-slate-500 mt-1">
                      For all App Directory apps
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Building2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Landing Page</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Must be accessible there
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Key className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Reviewed</p>
                    <p className="text-xs text-slate-500 mt-1">
                      During app submission
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The requirement goes beyond just having a document. Slack
                  expects your privacy policy to be accessible from your
                  app&apos;s landing page, the page users visit when they
                  learn about your app before installing it. This means
                  users should be able to review your data practices before
                  they decide to authorize your app in their workspace.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For apps distributed outside the App Directory (internal
                  apps, custom integrations, or apps shared directly via
                  install link), the App Directory listing requirement does
                  not technically apply. However, Slack&apos;s API Terms of
                  Service still govern your use of the Slack API, and GDPR,
                  CCPA, and other privacy laws apply based on the data you
                  process. In practice, every Slack app that handles user data
                  should have a privacy policy regardless of its distribution
                  method.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if my Slack app is only for internal use?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Internal apps that process employee data still need a
                      privacy disclosure under GDPR. Even within your own
                      organization, employees have data rights. An internal
                      privacy notice describing what the app does with
                      employee data is good practice and may be required by
                      your organization&apos;s own compliance policies.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does Slack review my privacy policy content?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Slack&apos;s app review team checks that a privacy
                      policy URL exists and is accessible. They may also
                      verify that it addresses the data types your app
                      accesses based on its requested scopes. A generic
                      policy that does not mention Slack or workspace data
                      may raise concerns during review.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: What Data Slack Apps Receive */}
              <section id="what-apps-receive" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Data Slack Apps Receive
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Slack apps receive data through several mechanisms: OAuth
                  token scopes, Event API subscriptions, slash commands,
                  interactive components, and direct API calls. The data your
                  app receives depends on which of these it uses and what
                  scopes it requests. Your privacy policy must cover all of
                  it.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Data Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          How App Receives It
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Personal Data?
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Sensitivity
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Workspace info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          OAuth token, team.info API
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No (organizational)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Low
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          User profiles
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          users:read scope, user events
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (names, photos, titles)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Medium
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          User emails
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          users:read.email scope
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (directly identifiable)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          High
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Channel messages
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Event subscriptions, channels:history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (user-generated content)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          High
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          File uploads
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          files:read scope, file events
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Potentially (file contents)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          High
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Slash command input
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Command payloads via HTTP POST
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Depends on user input
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Medium
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          OAuth tokens
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          OAuth flow during installation
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (access credentials)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Critical
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Channel membership
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          channels:read, conversations.members
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (who is in which channel)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Medium
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  A critical point that many developers overlook: even the
                  simplest Slack app receives personal data. A slash command
                  app with no database still receives the user ID, username,
                  workspace ID, channel ID, and command text with every
                  invocation. That is personal data being processed. Your
                  privacy policy must account for all of it.
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
                        Slack sends your app more data than most developers
                        realize. Every Event API payload includes the user
                        ID, workspace ID, and a complete event object. Even
                        events you do not explicitly listen to may be included
                        in the payload if they are part of a related event
                        chain. Your privacy policy should cover all data your
                        app receives, not just the data you intentionally use.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Incidental Data Collection
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  One of the unique challenges of Slack app privacy policies
                  is incidental data. When your app responds to a slash
                  command, it receives the user&apos;s ID, the channel ID,
                  and the team ID even if your app does not need this
                  information to function. When your app subscribes to
                  message events, it receives the full message object
                  including the author&apos;s user ID and profile information.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Under GDPR, receiving this data counts as processing it,
                  even if your app immediately discards it. Your privacy
                  policy should acknowledge this incidental data collection
                  and explain how your app handles it. For example: &quot;Our
                  app receives user IDs and workspace information as part of
                  Slack&apos;s standard API payloads. This data is processed
                  in memory to respond to your request and is not stored.&quot;
                </p>
              </section>

              {/* Section 3: Slack App Directory Guidelines */}
              <section id="directory-guidelines" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Slack App Directory Guidelines
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Slack&apos;s App Directory has specific guidelines that go
                  beyond general privacy law requirements. Understanding
                  these guidelines is essential for getting your app approved
                  and keeping it listed.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Minimum Privacy Policy Requirements
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>What data is collected:</strong> Clearly list all data types your app accesses through Slack&apos;s API, including data received incidentally through event payloads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>How data is used:</strong> Explain the purpose of each data collection. Why does your app need user profiles? What does it do with message content?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data sharing:</strong> Disclose whether data from Slack workspaces is shared with any third-party services, and if so, which ones and for what purpose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data retention:</strong> How long is workspace data stored? What happens to the data when a workspace uninstalls your app?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Security measures:</strong> What steps do you take to protect the workspace data your app handles?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Contact information:</strong> How can users or workspace administrators reach you with privacy questions or data deletion requests?</span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Slack also requires that your privacy policy be
                  consistent with your app&apos;s actual behavior. If your
                  privacy policy says you do not store messages but your app
                  logs message content to a database, that is a violation of
                  both the App Directory Guidelines and applicable privacy
                  laws.
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
                        Slack can remove apps from the App Directory for
                        privacy policy violations. If users report that your
                        app&apos;s data handling does not match what your
                        privacy policy describes, Slack may investigate and
                        remove your listing. Several high-profile apps have
                        been removed or suspended for privacy concerns. Your
                        privacy policy is not just a checkbox for listing. It
                        is an ongoing commitment that Slack enforces.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Beyond the App Directory requirements, your Slack app must
                  also comply with GDPR, CCPA, and any other applicable
                  privacy laws. Many Slack workspaces are in the EU, making
                  GDPR compliance essential. For comprehensive coverage of
                  general{" "}
                  <Link
                    href="/privacy-policy-for-apps"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    app privacy policy requirements
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  , see our dedicated guide.
                </p>
              </section>

              {/* Section 4: OAuth Scopes and Data Access */}
              <section id="oauth-scopes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  OAuth Scopes and Data Access
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  OAuth scopes are the mechanism through which your Slack app
                  requests access to workspace data. Each scope grants access
                  to specific data types, and your privacy policy must
                  accurately reflect the data accessible through your
                  requested scopes. Requesting scopes your app does not need
                  is both a Slack policy violation and a GDPR data
                  minimization violation.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          OAuth Scope
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Data Accessible
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Privacy Disclosure Needed
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          channels:read
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Channel names, topics, purposes, member counts
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Workspace structure access
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          channels:history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Full message history in public channels
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Message content processing
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          chat:write
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Ability to post messages as the app
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Content creation on behalf of app
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          users:read
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User names, display names, profile photos, status
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User profile data access
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          users:read.email
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User email addresses in addition to profile info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email address collection
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          files:read
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          File metadata, download URLs, file content access
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          File content processing
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          commands
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Slash command payloads (user ID, channel, input text)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Command input processing
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          im:history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Direct message history with the app
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Private message content
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy must match your scopes. If you request
                  the users:read.email scope, your privacy policy must
                  disclose that you access email addresses and explain why.
                  If you later add a new scope, your privacy policy must be
                  updated before you request that scope from users.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Slack also distinguishes between bot token scopes and user
                  token scopes. Bot token scopes grant your app access to
                  workspace data on behalf of the app itself. User token
                  scopes grant access on behalf of the individual user who
                  authorized the app. Both types must be covered in your
                  privacy policy because both involve processing personal
                  data.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Should I request the minimum scopes necessary?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. GDPR&apos;s data minimization principle (Article
                      5(1)(c)) requires you to collect only data that is
                      necessary for your stated purposes. Slack also
                      recommends requesting the minimum scopes needed. Over-
                      scoping raises red flags during app review and with
                      privacy-conscious workspace administrators.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if I need to add new scopes later?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      When you add new scopes, existing installations need to
                      re-authorize your app. Update your privacy policy before
                      requesting the new scopes so that users can review the
                      updated data practices when they re-authorize. This
                      aligns with GDPR&apos;s requirement for informed consent.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Enterprise Grid Considerations */}
              <section id="enterprise-grid" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Enterprise Grid Considerations
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Slack Enterprise Grid is used by large organizations with
                  strict compliance, security, and privacy requirements. If
                  your app targets enterprise customers, or if you want it to
                  be available to them, your privacy policy plays a critical
                  role in sales and adoption.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Why Enterprise Customers Scrutinize Privacy Policies
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Compliance obligations:</strong> Enterprise customers in regulated industries (finance, healthcare, government) must verify that every third-party tool meets their compliance requirements before approving it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Legal review:</strong> Enterprise procurement typically involves a legal team reviewing your privacy policy, terms of service, and data processing agreement before approving your app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data residency:</strong> Many enterprises require data to stay in specific geographic regions. Your privacy policy should disclose where data is stored and processed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Sub-processor transparency:</strong> Enterprises want to know every third-party service that touches their workspace data. Your privacy policy should list all sub-processors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data deletion guarantees:</strong> Enterprises need assurance that their data is completely deleted when they uninstall your app or terminate the relationship</span>
                  </li>
                </ul>

                {/* Did you know box 3 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Many enterprise Slack customers require a Data
                        Processing Agreement (DPA) in addition to a privacy
                        policy before they will install a third-party app.
                        A DPA is a legally binding contract that defines the
                        roles and responsibilities of data controllers and
                        processors. Having a comprehensive privacy policy
                        makes DPA negotiations much smoother because it
                        demonstrates you already understand your data
                        handling obligations.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  A well-written privacy policy can be a competitive advantage
                  when selling to enterprise customers. If your competitor&apos;s
                  app has a vague, one-paragraph privacy notice and yours has
                  a detailed, comprehensive policy with clear data handling
                  disclosures, enterprise procurement teams will favor yours.
                  Privacy is increasingly a buying criterion, not just a legal
                  requirement.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For enterprise readiness, your privacy policy should also
                  address SOC 2 compliance (if applicable), data encryption at
                  rest and in transit, access controls within your
                  organization, incident response procedures, and data breach
                  notification timelines. While not all of these are strictly
                  privacy policy requirements, including them demonstrates
                  maturity to enterprise buyers.
                </p>
              </section>

              {/* Section 6: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Mistakes Slack Developers Make
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the five most common privacy policy mistakes
                  Slack app developers make, and why each one can derail
                  your App Directory listing or enterprise sales.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My app only reads messages, it does not store them&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reading messages is data processing under GDPR,
                        regardless of whether you store them. When your app
                        receives a message event, it processes the message
                        content, user ID, and channel information. Even if
                        this data only exists in memory for milliseconds, it
                        has been processed. Your privacy policy must disclose
                        this processing and explain why your app needs access
                        to message content. Additionally, many apps that
                        &quot;do not store&quot; messages actually log them
                        through application logging or error tracking tools
                        like Sentry.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Slack&apos;s privacy policy covers my app&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Slack&apos;s privacy policy covers Slack&apos;s
                        platform and its relationship with users. It does not
                        cover what your app does with the data it receives
                        through the API. You are a separate data controller
                        (or processor, depending on your architecture). When
                        a workspace installs your app and your app stores
                        their data on your servers, Slack&apos;s policy says
                        nothing about how you handle that data. You need your
                        own policy.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I only need a privacy policy for the App Directory listing&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The App Directory is just one enforcement mechanism.
                        GDPR, CCPA, and other privacy laws require a privacy
                        policy based on the data you process, not where your
                        app is listed. Even if you distribute your app
                        privately, you still process workspace data and need
                        a privacy policy. Enterprise customers will also
                        demand one regardless of your distribution channel.
                        Your privacy policy is a legal and business
                        requirement, not just a listing checkbox.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;OAuth data is not personal data&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        OAuth tokens are credentials that grant access to
                        personal data. The token itself, while it looks like
                        a random string, is linked to a specific user or
                        workspace and can be used to access personal
                        information. Under GDPR, OAuth tokens are considered
                        personal data because they are unique identifiers
                        tied to identifiable individuals. Your privacy policy
                        must address how you store, protect, and handle OAuth
                        tokens.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;A simple one-liner is enough&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        A privacy policy that says &quot;We respect your
                        privacy&quot; or &quot;We do not sell your data&quot;
                        without further detail does not meet GDPR, CCPA, or
                        Slack&apos;s requirements. GDPR Article 13 requires
                        specific information: identity of the controller,
                        purposes of processing, categories of data, recipients,
                        retention periods, and user rights. A one-liner covers
                        none of these. Slack&apos;s review team will also
                        flag an inadequate privacy policy during app review.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mt-4">
                  To understand the full consequences of operating without a
                  proper privacy policy, see our guide on{" "}
                  <Link
                    href="/what-happens-without-a-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    what happens without a privacy policy
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  . And please do not copy another app&apos;s policy. Read{" "}
                  <Link
                    href="/can-i-copy-someone-elses-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    why that creates legal problems
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for Your Slack App (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these steps to create a privacy policy that meets
                  Slack&apos;s App Directory requirements and complies with
                  GDPR, CCPA, and other applicable privacy laws.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit your OAuth scopes and data access
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go to your app&apos;s configuration in the Slack API
                        dashboard and review every OAuth scope you have
                        requested, both bot token scopes and user token scopes.
                        For each scope, document what data it gives your app
                        access to. Check your Event API subscriptions and list
                        every event type your app receives. Review your slash
                        commands and interactive components. This audit is the
                        foundation of your privacy policy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Document what data your app stores and processes
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review your database schema and identify every table
                        or collection that contains data from Slack workspaces.
                        Note what you store (user IDs, team IDs, messages,
                        configurations), where it is stored (cloud provider,
                        region), how long it is retained, and who within your
                        organization has access. Include any application logs
                        that capture workspace data, even temporarily.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        List all third-party services that receive data
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Document every external service your app sends
                        workspace data to. Common sub-processors include
                        database hosting (AWS RDS, MongoDB Atlas, Supabase),
                        AI and ML services (OpenAI, Anthropic), analytics
                        (Mixpanel, Amplitude), error tracking (Sentry,
                        Datadog), email delivery (SendGrid, SES), and cloud
                        hosting (AWS, GCP, Azure). Each is a sub-processor
                        that must be disclosed in your privacy policy.
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
                          className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          privacy policy generator
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>{" "}
                        to create a comprehensive policy based on your audit.
                        Input the data types, storage methods, third-party
                        services, retention periods, and your contact
                        information. The generator produces a complete policy
                        covering GDPR, CCPA, and Slack App Directory
                        requirements in all required sections.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Host your privacy policy on your app&apos;s website
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Publish your privacy policy at a permanent, publicly
                        accessible URL on your app&apos;s website or landing
                        page. Slack requires the privacy policy to be
                        accessible from your app&apos;s landing page. Use a
                        clean, dedicated page (e.g., yourapp.com/privacy)
                        rather than embedding it in a PDF or document that
                        requires download.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add the privacy policy to your App Directory listing
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Include the privacy policy URL in your Slack App
                        Directory submission. Also link to it from your
                        app&apos;s landing page, installation flow, and help
                        documentation. Remember to{" "}
                        <Link
                          href="/how-often-should-you-update-your-privacy-policy"
                          className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          update your policy
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>{" "}
                        whenever you change scopes, add third-party services,
                        or modify your data handling practices.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Easiest Way */}
              <section id="easiest-way" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Easiest Way to Get a Slack App Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Writing a privacy policy for a Slack app is more complex
                  than for a simple website because you need to address OAuth
                  scopes, event subscriptions, workspace data handling, and
                  potentially enterprise compliance requirements. Doing this
                  from scratch requires deep knowledge of GDPR, CCPA, and
                  Slack&apos;s specific developer guidelines.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  A privacy policy generator handles this complexity for you.
                  You describe your app&apos;s data handling, and the
                  generator produces a complete, legally compliant policy that
                  covers all required sections. The result is a professional
                  privacy policy ready for your App Directory listing and
                  enterprise customer reviews.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  The generated policy includes everything your Slack app
                  needs: data categories mapped to your OAuth scopes, legal
                  basis for processing, third-party sub-processor disclosures,
                  user rights under GDPR and CCPA, data retention and
                  deletion practices, and contact information. It follows the
                  same standards used in our{" "}
                  <Link
                    href="/gdpr-privacy-policy-template"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    GDPR privacy policy template
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  .
                </p>

                {/* CTA */}
                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <Lock className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Get Your Slack App Privacy Policy in 60 Seconds
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Tell us about your app&apos;s OAuth scopes, data
                        handling, and third-party integrations. We will
                        generate a complete privacy policy ready for the
                        Slack App Directory and enterprise customers.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My Slack App Privacy Policy
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
                      Does Slack require a privacy policy for apps?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Slack&apos;s App Directory Guidelines require all
                      listed apps to have a publicly accessible privacy
                      policy. The policy must be linked from your app&apos;s
                      landing page and included in your App Directory
                      submission. Even apps distributed outside the Directory
                      should have one for GDPR and CCPA compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What data do Slack apps receive?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Slack apps receive data based on their OAuth scopes and
                      event subscriptions. This can include workspace
                      information, user profiles, email addresses, channel
                      messages, file uploads, slash command payloads, and
                      OAuth tokens. Even simple slash command apps receive
                      user IDs and workspace IDs with every invocation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are OAuth scopes and how do they affect my privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      OAuth scopes define what data your app can access in a
                      workspace. Each scope (channels:read, users:read.email,
                      files:read, etc.) grants access to specific data types.
                      Your privacy policy must accurately reflect the data
                      accessible through all your requested scopes. Adding
                      new scopes requires updating your privacy policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy if my app is not in the App Directory?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. The App Directory is just one reason to have a
                      privacy policy. GDPR and CCPA require a privacy policy
                      based on the data you process, not where your app is
                      distributed. If your app processes personal data from
                      Slack users (which virtually all apps do), you need a
                      privacy policy for legal compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do enterprise customers affect my privacy requirements?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Enterprise Grid customers have strict compliance
                      requirements and will review your privacy policy before
                      approving your app. Many require a Data Processing
                      Agreement (DPA). A comprehensive privacy policy that
                      addresses data residency, sub-processors, and deletion
                      practices can make the difference between winning and
                      losing enterprise deals.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if my Slack app does not have a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your app cannot be listed in the Slack App Directory
                      without a privacy policy. Beyond that, you face GDPR
                      fines of up to 20 million euros and CCPA penalties of
                      up to $7,500 per violation. Enterprise customers will
                      refuse to install your app, and Slack can take action
                      against apps that violate their API Terms of Service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I create a privacy policy for my Slack app?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Audit your OAuth scopes and data handling, then use a{" "}
                      <Link
                        href="/generate"
                        className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        privacy policy generator
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>{" "}
                      to produce a complete, compliant policy. Host it on your
                      app&apos;s website and add the URL to your App Directory
                      listing. The whole process takes under five minutes.
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
                      href: "/privacy-policy-for-apps",
                      title: "Privacy Policy for Apps",
                      desc: "General app privacy policy requirements for all platforms",
                    },
                    {
                      href: "/privacy-policy-for-discord-bot",
                      title: "Privacy Policy for Discord Bots",
                      desc: "Discord Developer Policy requirements for bot developers",
                    },
                    {
                      href: "/privacy-policy-for-chrome-extension",
                      title: "Privacy Policy for Chrome Extensions",
                      desc: "Chrome Web Store privacy requirements for extension developers",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      title: "Privacy Policy for SaaS",
                      desc: "Privacy requirements for software-as-a-service products",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "Complete guide for website privacy policy requirements",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      title: "Can I Copy Someone Else's Privacy Policy?",
                      desc: "Why copying creates both copyright and compliance risk",
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
                  Your Slack App Needs a Privacy Policy
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  The App Directory requires it. Enterprise customers demand
                  it. GDPR mandates it. Generate a complete, professional
                  privacy policy for your Slack app in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Slack App Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and Slack App Directory &middot;
                  Enterprise-ready &middot; Updated for 2026
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
