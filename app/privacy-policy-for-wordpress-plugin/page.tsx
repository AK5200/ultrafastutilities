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
    "Privacy Policy for WordPress Plugins: Plugin Directory Requirements (2026) | ultrafastutilities",
  description:
    "WordPress Plugin Directory requires plugins that collect user data to have a privacy policy. Learn what WordPress.org reviews, how to use the privacy API, and how to create a compliant policy.",
  keywords:
    "privacy policy for wordpress plugin, wordpress plugin privacy policy, wordpress plugin directory requirements, wordpress plugin data handling, wordpress plugin developer privacy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-wordpress-plugin",
  },
  openGraph: {
    title:
      "Privacy Policy for WordPress Plugins: Plugin Directory Requirements (2026) | ultrafastutilities",
    description:
      "WordPress Plugin Directory requires plugins that collect user data to have a privacy policy. Learn what WordPress.org reviews, how to use the privacy API, and how to create a compliant policy.",
    url: "https://ultrafastutilities.com/privacy-policy-for-wordpress-plugin",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for WordPress Plugins | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for WordPress Plugins: Plugin Directory Requirements (2026)",
    description:
      "WordPress Plugin Directory requires plugins that collect user data to have a privacy policy. Learn what WordPress.org reviews and how to use the privacy API.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does my WordPress plugin need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your WordPress plugin collects, stores, or processes any user data, yes. The WordPress Plugin Directory guidelines require plugins that handle personal data to include privacy-related documentation. This includes plugins that store form submissions, track user behavior, connect to external services, set cookies, or log user actions. Even plugins that store data only in the local WordPress database are handling user data.",
      },
    },
    {
      "@type": "Question",
      name: "What is wp_add_privacy_policy_content and how do I use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "wp_add_privacy_policy_content is a WordPress core function that lets plugin developers suggest privacy policy text to site administrators. When you call this function, your suggested text appears on the Privacy Policy Guide page in the WordPress admin under Settings > Privacy. Site administrators can then copy your suggested text into their privacy policy. You should call this function during the admin_init hook.",
      },
    },
    {
      "@type": "Question",
      name: "What are the WordPress privacy exporter and eraser hooks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WordPress provides two filter hooks for GDPR compliance: wp_privacy_personal_data_exporters lets your plugin register a callback that exports all personal data your plugin stores for a given email address. wp_privacy_personal_data_erasers lets your plugin register a callback that deletes or anonymizes all personal data your plugin stores for a given email address. These hooks power the built-in Export Personal Data and Erase Personal Data tools in WordPress admin.",
      },
    },
    {
      "@type": "Question",
      name: "Will my plugin be rejected from the WordPress Plugin Directory without a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The WordPress Plugin Directory review team checks whether plugins that handle user data properly disclose their data practices. Plugins that collect data without disclosure, or that send data to external servers without informing users, can be rejected or removed. The review team also checks that plugins using the WordPress Privacy API do so correctly. While not every plugin needs a standalone privacy policy, all plugins that handle personal data must use wp_add_privacy_policy_content to suggest policy text.",
      },
    },
    {
      "@type": "Question",
      name: "Does my plugin need a privacy policy if it only stores data in the WordPress database?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Storing personal data in the WordPress database is still data collection and storage. If your plugin creates custom tables or stores user-related data in post meta, user meta, or options, you are handling personal data. Your plugin should use wp_add_privacy_policy_content to disclose what data is stored, implement the personal data exporter hook so site owners can fulfill data access requests, and implement the personal data eraser hook so site owners can fulfill deletion requests.",
      },
    },
    {
      "@type": "Question",
      name: "How do I handle external API connections in my plugin's privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any time your plugin sends data to an external server or API, you must disclose this clearly. This includes analytics services, license verification servers, update check endpoints, CDN resources, payment processors, and any other remote connection. Your privacy policy text should specify what data is sent, why it is sent, and the privacy policy of the receiving service. The WordPress Plugin Directory team specifically reviews plugins for undisclosed external connections.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a plugin privacy policy and a site privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A plugin privacy policy documents how your specific plugin handles data. It is written by the plugin developer and typically lives in the plugin's readme.txt file and on the plugin's website. A site privacy policy is the overall privacy policy for a WordPress website, written by the site owner. Plugin developers use wp_add_privacy_policy_content to suggest text that site owners should add to their site privacy policy. Both are important but serve different audiences.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your WordPress Plugin",
  description:
    "Follow these six steps to create a compliant privacy policy for your WordPress plugin that satisfies Plugin Directory requirements and helps site owners stay GDPR compliant.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit all data your plugin collects and stores",
      text: "Review every database table, option, user meta field, post meta field, and transient your plugin creates. Document what personal data is stored, why it is stored, and how long it is retained. Include data stored in custom tables, the options table, and any file-based storage.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map all external connections your plugin makes",
      text: "Identify every external API call, remote request, or third-party service your plugin connects to. This includes license servers, analytics endpoints, CDN resources, update checks, payment gateways, and any wp_remote_get or wp_remote_post calls. Document what data is transmitted in each request.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Implement wp_add_privacy_policy_content",
      text: "Use the wp_add_privacy_policy_content function to register suggested privacy policy text that site administrators can add to their site privacy policy. Call this function on the admin_init hook. Write clear, specific text that describes what data your plugin collects and how it is used.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Implement the personal data exporter hook",
      text: "Register a callback with the wp_privacy_personal_data_exporters filter that exports all personal data your plugin stores for a given email address. This powers the Export Personal Data tool in WordPress admin and is required for GDPR compliance.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Implement the personal data eraser hook",
      text: "Register a callback with the wp_privacy_personal_data_erasers filter that deletes or anonymizes all personal data your plugin stores for a given email address. This powers the Erase Personal Data tool in WordPress admin and is required for the right to erasure under GDPR.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Document your privacy practices in readme.txt and your plugin website",
      text: "Add a Privacy Policy section to your plugin's readme.txt file describing what data your plugin handles. Also publish a full privacy policy on your plugin's website or documentation site. Link to it from your plugin's WordPress.org listing page. Keep both documents updated when you release new versions that change data handling.",
    },
  ],
};

const tocSections = [
  { id: "plugin-directory-requirements", title: "Plugin Directory Requirements" },
  { id: "types-of-data", title: "Types of Data Plugins Collect" },
  { id: "wordpress-privacy-api", title: "WordPress Privacy API" },
  { id: "plugin-review-process", title: "Plugin Review Process" },
  { id: "gdpr-compliance", title: "GDPR Compliance for Developers" },
  { id: "external-service-connections", title: "External Service Connections" },
  { id: "where-to-document", title: "Where to Document Your Policy" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create One (6 Steps)" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForWordPressPluginPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for WordPress Plugins: Plugin Directory Requirements (2026)",
            description:
              "WordPress Plugin Directory requires plugins that collect user data to have a privacy policy. Learn what WordPress.org reviews, how to use the privacy API, and how to create a compliant policy.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-16",
            dateModified: "2026-03-27",
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
                name: "Privacy Policy for WordPress Plugins",
                item: "https://ultrafastutilities.com/privacy-policy-for-wordpress-plugin",
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
                Privacy Policy for WordPress Plugins
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Plugin Developer Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  WordPress Plugins
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                The WordPress Plugin Directory requires plugins that collect
                user data to have a privacy policy. Without one, your plugin
                can be rejected during review or removed from the directory.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For WordPress plugin developers, agencies building plugins,
                and teams publishing to the WordPress Plugin Directory.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                WordPress Plugin Directory compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-wordpress"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Puzzle className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                WordPress Site Policies
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-woocommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Code className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                WooCommerce Policies
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
                    Publishing a plugin?
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
                <span>Last updated: March 2026</span>
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
                  <strong>The WordPress Plugin Directory requires plugins that collect user data to include privacy documentation.</strong>{" "}
                  If your plugin stores form submissions, tracks user activity,
                  connects to external services, sets cookies, or logs personal
                  information, you must use the WordPress Privacy API to suggest
                  policy text and implement data export and erasure hooks. Plugins
                  that handle data without disclosure can be rejected or removed
                  from the directory.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                WordPress plugins run on millions of websites and often handle
                sensitive user data. Unlike standalone applications, plugins
                operate within the WordPress ecosystem where site owners are
                responsible for their site&apos;s overall privacy compliance.
                This creates a shared responsibility: plugin developers must
                clearly document what data their plugins handle, and site
                owners must incorporate that information into their site
                privacy policies.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                The WordPress Plugin Directory review team actively checks
                plugins for undisclosed data collection, external connections
                that transmit user data, and missing privacy API
                implementations. Since WordPress 4.9.6 introduced the Privacy
                API, plugin developers have had standardized tools to help
                site owners comply with GDPR and other privacy regulations.
                Using these tools is not optional for plugins that handle
                personal data.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers the Plugin Directory requirements, what
                types of data plugins commonly collect, how to use the
                WordPress Privacy API, what the review process checks, GDPR
                compliance for plugin developers, how to handle external
                service connections, and where to document your privacy
                practices.
              </p>

              {/* Section 1: Plugin Directory Privacy Requirements */}
              <section id="plugin-directory-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  WordPress Plugin Directory Privacy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The WordPress Plugin Directory has specific guidelines about
                  how plugins must handle user data. These guidelines are
                  enforced during the plugin review process and through ongoing
                  monitoring of published plugins. Violations can result in
                  plugin removal and developer account restrictions.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What the Directory Requires
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy text via the Privacy API:</strong> Plugins
                      that collect personal data must use wp_add_privacy_policy_content
                      to suggest privacy policy text that site administrators can add
                      to their site policy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data export implementation:</strong> Plugins that
                      store personal data must register a personal data exporter
                      using the wp_privacy_personal_data_exporters filter so site
                      owners can fulfill data access requests.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data erasure implementation:</strong> Plugins that
                      store personal data must register a personal data eraser
                      using the wp_privacy_personal_data_erasers filter so site
                      owners can fulfill deletion requests.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Disclosure of external connections:</strong> Any
                      plugin that connects to external servers, APIs, or
                      third-party services must clearly disclose these
                      connections in its readme.txt and through the Privacy API.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>No hidden data collection:</strong> Plugins must
                      not collect or transmit data without the site
                      administrator&apos;s knowledge. All data collection must
                      be documented and, where appropriate, require explicit
                      opt-in from the site administrator.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  The WordPress Plugin Directory team reviews thousands of
                  plugin submissions every month. Plugins that fail to meet
                  these requirements receive feedback during the review
                  process and must address all issues before being approved.
                  Published plugins that are found to violate these guidelines
                  can be closed without prior warning.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Required</p>
                    <p className="text-xs text-slate-500 mt-1">
                      For plugins handling personal data
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Transparent</p>
                    <p className="text-xs text-slate-500 mt-1">
                      All data flows must be disclosed
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <AlertTriangle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Enforced</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Rejection or removal from directory
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
                        The WordPress Plugin Directory has closed hundreds of
                        plugins for guideline violations related to undisclosed
                        data collection. The most common violations involve
                        plugins that send usage data or telemetry to external
                        servers without informing site administrators, plugins
                        that load external resources like fonts or scripts from
                        third-party CDNs without disclosure, and plugins that
                        store personal data without implementing the Privacy
                        API hooks.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Types of Data Plugins Collect */}
              <section id="types-of-data" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Types of Data WordPress Plugins Collect
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  WordPress plugins collect a wide range of data depending on
                  their functionality. Understanding what data your plugin
                  handles is the first step toward proper privacy
                  documentation. The following table covers the most common
                  data types and their privacy implications.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                          Data Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Common Sources
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Storage Location
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[23%]">
                          Privacy Impact
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Form submissions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contact forms, registration forms, checkout forms
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Custom tables, post meta, email
                        </td>
                        <td className="px-4 py-3 text-slate-600">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          User activity logs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Login tracking, page views, admin actions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Custom tables, log files
                        </td>
                        <td className="px-4 py-3 text-slate-600">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          IP addresses
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Security plugins, comment forms, analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Custom tables, WordPress comments table
                        </td>
                        <td className="px-4 py-3 text-slate-600">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Cookies
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Session management, preferences, tracking
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Browser (client-side)
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium-High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          User meta data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Profile fields, preferences, settings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          wp_usermeta table
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Analytics data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Page views, referrers, device info, geolocation
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          External service or custom tables
                        </td>
                        <td className="px-4 py-3 text-slate-600">High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Payment data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          E-commerce, donations, subscriptions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          External gateway, order tables
                        </td>
                        <td className="px-4 py-3 text-slate-600">Very High</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          File uploads
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Media library, form attachments, user avatars
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          wp-content/uploads directory
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Telemetry / usage stats
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Plugin settings, PHP version, active plugins
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          External server
                        </td>
                        <td className="px-4 py-3 text-slate-600">Medium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Many plugin developers underestimate how much personal data
                  their plugins handle. Even a simple contact form plugin
                  stores names, email addresses, and message content. A
                  security plugin may log IP addresses, user agents, and login
                  attempts. An analytics plugin may track page views tied to
                  user sessions. All of this is personal data under GDPR and
                  most other privacy laws.
                </p>

                {/* Mini FAQ 1 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does storing data in WordPress options count as
                      collecting personal data?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      It depends on what you store. If your plugin stores
                      site-level settings like color preferences or layout
                      options, that is not personal data. But if your plugin
                      stores API keys tied to a user account, email addresses
                      for notifications, or any information that can identify a
                      person, then yes, it is personal data and must be
                      disclosed in your privacy documentation.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What about transient data that expires automatically?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Transient data stored via the WordPress Transients API
                      still counts as data storage, even though it expires.
                      If a transient contains personal data such as cached
                      user information or session tokens, it must be disclosed.
                      The fact that it expires does not change the privacy
                      obligation during the time it exists.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: WordPress Privacy API */}
              <section id="wordpress-privacy-api" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The WordPress Privacy API
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  WordPress introduced the Privacy API in version 4.9.6 to
                  give plugin developers standardized tools for privacy
                  compliance. The API has three main components: privacy
                  policy content suggestions, personal data exporters, and
                  personal data erasers. Every plugin that handles personal
                  data should implement all three.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  wp_add_privacy_policy_content
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  This function lets you suggest privacy policy text that
                  site administrators should add to their site privacy policy.
                  When called, your suggested text appears on the Privacy
                  Policy Guide page in WordPress admin under Settings &gt;
                  Privacy. Site administrators can review your text and copy
                  it into their privacy policy page.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  You should call this function on the admin_init hook. The
                  first parameter is your plugin name, and the second is the
                  HTML content of your suggested policy text. Write clear,
                  specific text that describes exactly what data your plugin
                  collects, why it collects it, where it is stored, who it
                  is shared with, and how long it is retained.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Personal Data Exporter Hook
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  The wp_privacy_personal_data_exporters filter lets your
                  plugin register a callback function that exports all
                  personal data your plugin stores for a given email address.
                  When a site administrator processes a data export request
                  through Tools &gt; Export Personal Data, WordPress calls
                  each registered exporter. Your callback receives an email
                  address and a page number (for pagination) and must return
                  an array of data items associated with that email address.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Personal Data Eraser Hook
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  The wp_privacy_personal_data_erasers filter works the same
                  way but for data deletion. Your callback receives an email
                  address and must delete or anonymize all personal data your
                  plugin stores for that person. This powers the Erase
                  Personal Data tool in WordPress admin under Tools &gt;
                  Erase Personal Data. You can choose to fully delete the
                  data or anonymize it depending on your plugin&apos;s needs.
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
                        WordPress core itself implements all three Privacy API
                        components for its own data handling. The comments
                        system registers a privacy policy suggestion, a data
                        exporter for comment author data, and a data eraser
                        that anonymizes comments. You can look at the WordPress
                        core source code in wp-includes/comment.php for a
                        reference implementation of how to properly implement
                        these hooks in your own plugin.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Plugin Review Process */}
              <section id="plugin-review-process" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Plugin Review Process
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  When you submit a plugin to the WordPress Plugin Directory,
                  it goes through a manual review by the WordPress Plugin
                  Review team. This team checks for security issues, guideline
                  compliance, and privacy-related concerns. Understanding what
                  they look for helps you prepare your plugin for a smooth
                  review.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Reviewers Check
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>External HTTP requests:</strong> Reviewers scan
                      your code for wp_remote_get, wp_remote_post, file_get_contents,
                      cURL calls, and any other outbound HTTP requests. Every
                      external connection must be documented and justified.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data storage patterns:</strong> Reviewers look at
                      database queries, custom table creation, use of user meta,
                      post meta, and the options table to understand what data
                      your plugin stores and whether it includes personal data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy API usage:</strong> If your plugin handles
                      personal data, reviewers check whether you have implemented
                      wp_add_privacy_policy_content, registered a data exporter,
                      and registered a data eraser.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Tracking and telemetry:</strong> Any usage
                      tracking, analytics collection, or telemetry data
                      transmission is closely scrutinized. Opt-in tracking
                      is acceptable if properly disclosed. Opt-out or
                      undisclosed tracking will result in rejection.
                    </span>
                  </li>
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      New Plugins
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Rejected
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Must fix all issues before resubmission
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      Published Plugins
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Closed
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Can be removed from directory at any time
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: GDPR Compliance for Plugin Developers */}
              <section id="gdpr-compliance" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  GDPR Compliance for Plugin Developers
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  GDPR applies to any software that processes personal data of
                  EU residents, including WordPress plugins. As a plugin
                  developer, you are not the data controller (the site owner
                  is), but you are creating the tool that processes data. Your
                  role is to make it possible for site owners to comply with
                  GDPR when using your plugin.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  This means your plugin must provide the mechanisms for site
                  owners to fulfill their GDPR obligations. Specifically, your
                  plugin must allow site owners to inform users about data
                  collection (through the privacy policy content hook), respond
                  to data access requests (through the data exporter hook),
                  respond to data deletion requests (through the data eraser
                  hook), and limit data collection to what is necessary for
                  the plugin&apos;s functionality.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  If your plugin sends data outside the EU (for example, to
                  a US-based API), site owners need to know this so they can
                  include appropriate data transfer disclosures in their
                  privacy policies. Your suggested privacy policy text should
                  mention any cross-border data transfers.
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
                        Under GDPR, site owners can be held liable for privacy
                        violations caused by the plugins they use. This is why
                        many enterprise WordPress users now audit plugin privacy
                        practices before installation. Plugins that properly
                        implement the WordPress Privacy API and provide clear
                        documentation are increasingly preferred over those that
                        do not. Good privacy practices can be a competitive
                        advantage for your plugin.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Beyond GDPR, your plugin should also consider CCPA (for
                  California users), PIPEDA (for Canadian users), LGPD (for
                  Brazilian users), and other regional privacy laws. While the
                  specific requirements differ, the core principle is the
                  same: be transparent about data handling, give users control
                  over their data, and minimize data collection to what is
                  necessary. If your{" "}
                  <Link
                    href="/gdpr-privacy-policy-template"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    GDPR privacy policy template
                  </Link>{" "}
                  covers these fundamentals, it will satisfy most regulations.
                </p>
              </section>

              {/* Section 6: External Service Connections */}
              <section id="external-service-connections" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  External Service Connections
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  One of the most scrutinized aspects of WordPress plugins is
                  external connections. Every time your plugin communicates
                  with a server outside the WordPress installation, you are
                  potentially transmitting user data. The Plugin Directory
                  team takes undisclosed external connections very seriously.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Common External Connections That Require Disclosure
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>License verification servers:</strong> Many
                      premium plugins check a remote server to validate license
                      keys. These requests typically send the site URL, the
                      license key, and sometimes the WordPress version and PHP
                      version. All of this must be disclosed.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Update check endpoints:</strong> Plugins that
                      manage their own updates outside of WordPress.org check
                      a remote server for new versions. These requests
                      typically include the current version, site URL, and
                      sometimes PHP and WordPress version information.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Third-party API services:</strong> Plugins that
                      integrate with services like payment gateways, email
                      providers, social media platforms, or analytics services
                      transmit data to those services. Your policy must specify
                      what data is sent and link to the third party&apos;s
                      privacy policy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>CDN and external resource loading:</strong> Loading
                      fonts, scripts, stylesheets, or images from external CDNs
                      exposes the user&apos;s IP address and browser information
                      to those CDN providers. Even loading Google Fonts from
                      Google&apos;s servers requires disclosure.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Telemetry and usage statistics:</strong> If your
                      plugin collects any usage data, active plugin lists, PHP
                      version information, or error logs and sends them to your
                      server, this must be explicitly opt-in and fully disclosed.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  For each external connection, your privacy documentation
                  should specify exactly what data is transmitted, why it is
                  necessary, the URL or domain of the receiving server, the
                  privacy policy of the third-party service, and whether the
                  connection can be disabled by the site administrator. This
                  level of detail protects both you and the site owners who
                  use your plugin. If you are unsure about{" "}
                  <Link
                    href="/what-happens-without-a-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    what happens without a privacy policy
                  </Link>
                  , the consequences can be significant for both developers
                  and site owners.
                </p>
              </section>

              {/* Section 7: Where to Document Your Privacy Policy */}
              <section id="where-to-document" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Where to Document Your Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  As a WordPress plugin developer, you need to document your
                  privacy practices in multiple locations. Each location
                  serves a different audience and purpose. Covering all of
                  them ensures that site administrators, end users, and the
                  Plugin Directory review team can all find the information
                  they need.
                </p>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>readme.txt file:</strong> Add a &quot;Privacy Policy&quot;
                      section to your plugin&apos;s readme.txt. This is visible on
                      your WordPress.org plugin page and is the first place many
                      site administrators look. Describe what data your plugin
                      collects, any external connections, and link to your full
                      privacy policy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>WordPress Privacy API:</strong> Use
                      wp_add_privacy_policy_content to suggest policy text that
                      appears on the Privacy Policy Guide page in WordPress
                      admin. This is where site administrators go to build
                      their site privacy policy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Plugin website or documentation:</strong> Publish a
                      full, detailed privacy policy on your plugin&apos;s website
                      or documentation site. This should be the most comprehensive
                      version of your privacy documentation, covering every data
                      flow, retention period, and third-party service.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Plugin admin settings page:</strong> Consider
                      adding a privacy or data handling section to your
                      plugin&apos;s settings page in WordPress admin. This
                      gives site administrators quick access to information
                      about what data the plugin handles without leaving
                      the admin dashboard.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  If your plugin connects to external services, the
                  documentation approach is similar to what you would use for
                  a{" "}
                  <Link
                    href="/privacy-policy-for-saas"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    SaaS privacy policy
                  </Link>
                  . Disclose every service, what data is shared, and provide
                  links to each service&apos;s privacy policy. Site owners
                  running{" "}
                  <Link
                    href="/privacy-policy-for-wordpress"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    WordPress sites
                  </Link>{" "}
                  depend on this information to keep their own privacy
                  policies accurate.
                </p>
              </section>

              {/* Section 8: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common WordPress Plugin Privacy Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These mistakes are the most common reasons WordPress plugins
                  face review issues, directory closure, or complaints from
                  site administrators. Each one represents a misunderstanding
                  of the Plugin Directory guidelines or privacy regulations.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My plugin only stores data locally so
                        no privacy policy is needed&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Storing personal data in the WordPress database is
                        still data collection. Custom tables, user meta, post
                        meta, and even the options table can contain personal
                        data. If your plugin stores any information that can
                        identify a person, you need privacy documentation,
                        data exporter hooks, and data eraser hooks. The
                        storage location does not change the privacy
                        obligation.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Loading Google Fonts from Google&apos;s
                        CDN does not need disclosure&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Every external resource your plugin loads exposes the
                        site visitor&apos;s IP address and browser information
                        to the external server. A German court ruled in 2022
                        that loading Google Fonts from Google&apos;s servers
                        without consent violates GDPR. If your plugin loads
                        any external resources, you must disclose this. Many
                        plugin developers now bundle fonts locally to avoid
                        this issue entirely.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Telemetry is fine as long as it is
                        opt-out&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The WordPress Plugin Directory requires that any
                        telemetry or usage tracking must be opt-in, not
                        opt-out. Your plugin must not send any data to
                        external servers by default. Site administrators must
                        actively choose to enable telemetry. This is a common
                        reason for plugin rejection. If you collect usage
                        statistics, present a clear opt-in prompt during
                        plugin activation or in the settings page.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;The site owner is responsible for privacy,
                        not the plugin developer&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        While site owners are the data controllers under GDPR,
                        plugin developers have a responsibility to make privacy
                        compliance possible. If your plugin collects data but
                        does not implement the Privacy API hooks, site owners
                        cannot fulfill data access or deletion requests for
                        your plugin&apos;s data. You are creating the tool, and
                        the Plugin Directory requires that tool to support
                        privacy compliance.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I do not need to update my privacy docs
                        when I add features&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Every time you add a feature that changes how your
                        plugin handles data, you must update your privacy
                        documentation. New external connections, additional
                        data storage, changed data retention periods, and new
                        third-party integrations all require updates to your
                        readme.txt, your Privacy API suggested text, and your
                        website privacy policy. Failing to update creates
                        inaccurate disclosures, which is a guideline violation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for Your WordPress Plugin
                  (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow this process to create privacy documentation that
                  satisfies the WordPress Plugin Directory requirements,
                  passes the review process, and helps site owners comply
                  with GDPR and CCPA.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit all data your plugin collects and stores
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review every database table, option, user meta field,
                        post meta field, and transient your plugin creates.
                        Document what personal data is stored, why it is stored,
                        and how long it is retained. Check for data in custom
                        tables, the wp_options table, wp_usermeta, wp_postmeta,
                        and any file-based storage in wp-content.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Map all external connections your plugin makes
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Search your code for wp_remote_get, wp_remote_post,
                        wp_safe_remote_get, wp_safe_remote_post,
                        file_get_contents with URLs, cURL calls, and any
                        other outbound HTTP requests. For each connection,
                        document the destination URL, what data is sent, why
                        it is necessary, and the privacy policy of the
                        receiving service.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Implement wp_add_privacy_policy_content
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Register your suggested privacy policy text using the
                        wp_add_privacy_policy_content function on the
                        admin_init hook. Write clear, specific text that
                        describes what data your plugin collects, where it is
                        stored, whether it is shared with external services,
                        and how long it is retained. Site administrators will
                        see this text on Settings &gt; Privacy in their
                        WordPress admin.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Implement the personal data exporter
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Register a callback with wp_privacy_personal_data_exporters
                        that exports all personal data your plugin stores for a
                        given email address. Use a{" "}
                        <Link
                          href="/generate"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          privacy policy generator
                        </Link>{" "}
                        to create the policy text, then implement the exporter
                        to match. This powers the Export Personal Data tool in
                        WordPress admin and is required for GDPR compliance.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Implement the personal data eraser
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Register a callback with wp_privacy_personal_data_erasers
                        that deletes or anonymizes all personal data your plugin
                        stores for a given email address. Decide whether to
                        fully delete the data or anonymize it based on your
                        plugin&apos;s functionality. This powers the Erase
                        Personal Data tool and fulfills the right to erasure
                        under GDPR.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Document your practices in readme.txt and your website
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add a Privacy Policy section to your plugin&apos;s
                        readme.txt describing what data your plugin handles,
                        any external connections, and a link to your full
                        privacy policy. Publish the full privacy policy on
                        your plugin&apos;s website. Keep both documents
                        updated whenever you release a version that changes
                        data handling. The{" "}
                        <Link
                          href="/is-a-privacy-policy-legally-required"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          legal requirement for a privacy policy
                        </Link>{" "}
                        applies to plugins just as it does to websites and
                        apps.
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
                        Generate Your Plugin Privacy Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Answer a few questions about your WordPress plugin
                        and get a privacy policy that satisfies Plugin
                        Directory requirements. Covers data storage, external
                        connections, third-party services, and user rights.
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
                      Does my WordPress plugin need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      If your plugin collects, stores, or processes any
                      personal data, yes. This includes storing form
                      submissions, logging user activity, tracking IP
                      addresses, setting cookies, connecting to external
                      services, or storing any information that can identify
                      a person. The WordPress Plugin Directory requires
                      privacy documentation for all plugins that handle
                      personal data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is wp_add_privacy_policy_content and how do I use it?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      It is a WordPress core function that lets plugin
                      developers suggest privacy policy text to site
                      administrators. Call it on the admin_init hook with
                      your plugin name and the suggested HTML text. Your
                      text then appears on the Privacy Policy Guide page
                      in WordPress admin under Settings &gt; Privacy, where
                      site administrators can copy it into their site
                      privacy policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are the WordPress privacy exporter and eraser hooks?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      WordPress provides wp_privacy_personal_data_exporters
                      and wp_privacy_personal_data_erasers filter hooks. The
                      exporter lets your plugin provide all personal data
                      stored for a given email address when a site owner
                      processes a data export request. The eraser lets your
                      plugin delete or anonymize personal data for a given
                      email address when a site owner processes a deletion
                      request. Both power the built-in tools under Tools in
                      WordPress admin.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Will my plugin be rejected without a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Plugins that handle user data without proper disclosure
                      can be rejected during the review process. The review
                      team checks for undisclosed external connections,
                      missing Privacy API implementations, and hidden data
                      collection. Plugins already in the directory can be
                      closed for guideline violations. While not every
                      plugin needs a standalone privacy policy, all plugins
                      handling personal data must implement the Privacy API.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my plugin need a privacy policy if it only stores
                      data in the WordPress database?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Storing personal data in the WordPress database
                      is still data collection and storage under privacy
                      laws. Whether your plugin uses custom tables, post
                      meta, user meta, or the options table, if it stores
                      information that can identify a person, you need
                      privacy documentation and must implement the data
                      exporter and eraser hooks.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I handle external API connections in my privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      For each external connection, disclose what data is
                      sent, why it is sent, the receiving server or service,
                      and link to that service&apos;s privacy policy. This
                      applies to license servers, update endpoints, analytics
                      services, payment gateways, CDN resources, and any
                      other remote connection. The Plugin Directory team
                      specifically checks for undisclosed external
                      connections.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is the difference between a plugin privacy policy
                      and a site privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A plugin privacy policy documents how your specific
                      plugin handles data and is written by the plugin
                      developer. A site privacy policy is the overall privacy
                      policy for the WordPress website, written by the site
                      owner. Plugin developers use wp_add_privacy_policy_content
                      to suggest text that site owners should incorporate into
                      their site policy. Both serve different audiences but
                      work together for full compliance.
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
                      href: "/privacy-policy-for-wordpress",
                      title: "Privacy Policy for WordPress Sites",
                      desc: "Complete guide for WordPress site owners",
                    },
                    {
                      href: "/privacy-policy-for-woocommerce",
                      title: "Privacy Policy for WooCommerce",
                      desc: "WooCommerce-specific privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      title: "Privacy Policy for SaaS",
                      desc: "Privacy requirements for software services",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/generate",
                      title: "Privacy Policy Generator",
                      desc: "Generate a customized privacy policy in 60 seconds",
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
                      href: "/is-a-privacy-policy-legally-required",
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "Legal requirements across jurisdictions",
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
                  Ready to Publish Your WordPress Plugin?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let missing privacy documentation block your Plugin
                  Directory submission. Generate a compliant policy that
                  covers data handling, external connections, and user rights.
                  Takes under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and WordPress Plugin Directory requirements &middot;
                  Customized for plugins &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
