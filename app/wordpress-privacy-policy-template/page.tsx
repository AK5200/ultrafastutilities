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
    "WordPress Privacy Policy Template (Free, Ready to Use) (2026) | ultrafastutilities",
  description:
    "Free WordPress privacy policy template covering plugins, themes, comments, contact forms, analytics, and WooCommerce. Copy, customize, and publish on your WordPress site today.",
  keywords:
    "wordpress privacy policy template, wordpress privacy policy, wordpress privacy policy page, wordpress privacy policy example, free wordpress privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/wordpress-privacy-policy-template",
  },
  openGraph: {
    title:
      "WordPress Privacy Policy Template (Free, Ready to Use) (2026) | ultrafastutilities",
    description:
      "Free WordPress privacy policy template covering plugins, themes, comments, contact forms, analytics, and WooCommerce. Copy, customize, and publish on your WordPress site today.",
    url: "https://ultrafastutilities.com/wordpress-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WordPress Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WordPress Privacy Policy Template (Free, Ready to Use) (2026)",
    description:
      "Free WordPress privacy policy template covering plugins, themes, comments, contact forms, analytics, and WooCommerce. Copy, customize, and publish on your WordPress site today.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a free WordPress privacy policy template legally valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A free template can be legally valid if you customize it to accurately describe your WordPress site's actual data practices. The legal strength of a privacy policy depends on its accuracy, not its price. A properly customized free template that truthfully describes your plugins, forms, analytics, and data handling is far better than no policy at all. Sites handling sensitive data like health records or financial transactions should have their policy reviewed by a legal professional.",
      },
    },
    {
      "@type": "Question",
      name: "What must a WordPress privacy policy template cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A WordPress privacy policy template must cover: what personal data your site collects (comments, form submissions, cookies, analytics), how that data is used, what plugins and third-party services process visitor data, how data is stored and secured, cookie and tracking disclosures, user rights including data access and deletion, your contact information, and the effective date. If your site serves EU visitors, add GDPR sections. If you run WooCommerce, add e-commerce data disclosures.",
      },
    },
    {
      "@type": "Question",
      name: "Does WordPress have a built-in privacy policy feature?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WordPress includes a privacy policy page generator under Settings > Privacy. It creates a draft page with suggested text covering WordPress core data collection like comments, cookies, and embedded content. However, the built-in template only covers WordPress core. It does not cover your specific plugins, theme data collection, analytics, contact forms, or WooCommerce. You need to add those sections yourself, which is what this template helps you do.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if my WordPress site has no contact form?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Even without a contact form, WordPress collects data through comments, cookies, user accounts, embedded content from third parties like YouTube or Twitter, and any analytics or advertising scripts you use. If your site has any visitors from the EU, GDPR requires a privacy policy regardless of whether you have forms. Most WordPress sites collect more data than their owners realize through plugins, themes, and default WordPress behavior.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a privacy policy page in WordPress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to Settings > Privacy in your WordPress dashboard and click Create or select your privacy policy page. WordPress will generate a draft with suggested text. Customize this draft with your specific plugin disclosures, contact form details, analytics information, and any WooCommerce or membership data. Publish the page, then go to Settings > Privacy and set it as your designated privacy policy page. Add a link to your footer menu so visitors can find it from any page on your site.",
      },
    },
    {
      "@type": "Question",
      name: "Should my WordPress privacy policy mention each plugin by name?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do not need to name every plugin, but you must disclose the data practices of plugins that collect, process, or transmit visitor data. For example, if you use Jetpack for analytics, Contact Form 7 for forms, or Akismet for spam filtering, your policy should describe what data those plugins collect, how it is processed, and whether it is sent to third-party servers. Focus on what data is collected and why, not on listing plugin names for their own sake.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my WordPress privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Update your privacy policy whenever you install a new plugin that collects data, switch themes, add analytics or tracking scripts, enable WooCommerce, change hosting providers, or modify how you handle contact form submissions. Also review your policy when privacy laws change. At minimum, audit your privacy policy every time you make a significant change to your WordPress site. If your site is static and unchanged, an annual review is a reasonable baseline.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your WordPress Site",
  description:
    "Follow these six steps to create and publish a privacy policy on your WordPress site that covers plugins, themes, forms, analytics, and compliance requirements.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your installed plugins for data collection",
      text: "Go to Plugins > Installed Plugins in your WordPress dashboard and review each active plugin. For every plugin, check whether it collects visitor data, sends data to external servers, sets cookies, or processes personal information. Common data-collecting plugins include contact form plugins, analytics plugins, SEO plugins, security plugins, and caching plugins.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Check your theme for tracking and analytics",
      text: "Some WordPress themes include built-in analytics, Google Fonts loading, social media scripts, or tracking pixels. Review your theme settings and documentation to identify any data collection that happens through the theme itself rather than through plugins. Custom themes may include hardcoded tracking scripts.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Use the WordPress built-in privacy policy generator",
      text: "Navigate to Settings > Privacy in your WordPress dashboard. Click Create to generate a new privacy policy page. WordPress will provide suggested text covering core data collection. Use this as your starting point and add the plugin-specific and theme-specific disclosures you identified in steps 1 and 2.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Customize the template with your specific disclosures",
      text: "Replace all placeholder text with details specific to your site. Add sections for each plugin that collects data, your analytics setup, contact form data handling, comment policies, and any e-commerce functionality. Remove sections that do not apply to your site. Be specific about what data is collected, why, and where it goes.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add GDPR and cookie consent sections if applicable",
      text: "If your site has EU visitors, add GDPR-required sections: legal basis for processing, data retention periods, and user rights including access, rectification, and erasure. Add a cookie disclosure section listing all cookies your site sets, their purposes, and their expiration periods. Reference your cookie consent mechanism if you use one.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Publish and link the page in your site footer",
      text: "Publish the privacy policy page. Go to Settings > Privacy and designate it as your privacy policy page. Then add it to your footer navigation menu under Appearance > Menus so it is accessible from every page on your site. If you use WooCommerce, also link it in your checkout flow. Test that the page is publicly accessible without requiring a login.",
    },
  ],
};

const tocSections = [
  { id: "what-template-must-include", title: "What Your Template Must Include" },
  { id: "full-template-preview", title: "Full Template Preview" },
  { id: "wordpress-built-in-privacy-tools", title: "WordPress Built-in Privacy Tools" },
  { id: "common-plugin-disclosures", title: "Common Plugin Disclosures" },
  { id: "theme-data-collection", title: "Theme Data Collection" },
  { id: "how-to-add-privacy-policy", title: "How to Add Privacy Policy in WordPress" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function WordPressPrivacyPolicyTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "WordPress Privacy Policy Template (Free, Ready to Use) (2026)",
            description:
              "Free WordPress privacy policy template covering plugins, themes, comments, contact forms, analytics, and WooCommerce. Copy, customize, and publish on your WordPress site today.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-04-11",
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
                name: "Privacy Policy for WordPress",
                item: "https://ultrafastutilities.com/privacy-policy-for-wordpress",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "WordPress Privacy Policy Template",
                item: "https://ultrafastutilities.com/wordpress-privacy-policy-template",
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
                href="/privacy-policy-for-wordpress"
                className="hover:text-blue-600 transition-colors"
              >
                WordPress Privacy Policy
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
                WordPress Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
                : Free Template for WordPress Site Owners
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A free, ready-to-use privacy policy template built
                specifically for WordPress sites. Covers plugins, themes,
                comments, contact forms, analytics, WooCommerce, and
                GDPR compliance out of the box.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For WordPress site owners who need a compliant
                privacy policy without starting from scratch.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: April 2026 &middot; Reviewed for GDPR, CCPA &amp;
                WordPress compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-wordpress"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Full WordPress Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/do-i-need-a-privacy-policy-for-wordpress-site"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ClipboardList className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Do I Need One?
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
                    Generate one tailored to your WordPress site
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
                <span>16 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>A WordPress privacy policy template should cover seven core areas: what personal data your site collects (comments, forms, cookies, analytics), how that data is used, which plugins and third-party services process visitor data, how data is stored and secured, cookie disclosures, user rights including data access and deletion, and your contact information.</strong>{" "}
                  WordPress sites running WooCommerce need additional
                  e-commerce data disclosures. Sites with EU visitors
                  must include GDPR-specific sections covering legal
                  basis for processing and data subject rights.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Building a privacy policy for a WordPress site from
                scratch is tedious. You need to account for WordPress
                core data collection, every plugin that touches visitor
                data, your theme&apos;s behavior, contact forms, analytics,
                comments, and potentially WooCommerce or membership
                functionality. Missing any of these can expose you to
                GDPR fines or compliance complaints.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                This page provides a complete, free template you can
                copy, customize for your specific WordPress setup, and
                publish today. The template covers every section that
                privacy regulations expect, follows WordPress-specific
                best practices, and includes sections for the most
                popular{" "}
                <Link
                  href="/privacy-policy-for-wordpress-plugin"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  WordPress plugin privacy disclosures
                </Link>
                .
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                If you want to understand whether your WordPress site
                actually requires a privacy policy and what triggers
                the requirement, read the{" "}
                <Link
                  href="/do-i-need-a-privacy-policy-for-wordpress-site"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  do I need a privacy policy for my WordPress site
                </Link>{" "}
                guide first. This page focuses specifically on giving
                you a ready-to-use template and showing you how to
                customize it for your site.
              </p>

              {/* Section 1: What Your Template Must Include */}
              <section id="what-template-must-include" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Your Template Must Include
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Every WordPress privacy policy needs to cover specific
                  areas. GDPR, CCPA, and other privacy laws require
                  transparency about data collection. WordPress sites
                  collect more data than most owners realize, so your
                  template must address each of these categories.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Required Sections
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data collection statement:</strong> What personal
                      data your WordPress site collects, including comment
                      data, form submissions, user account information,
                      cookies, analytics data, and any data collected by
                      plugins.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Purpose of data use:</strong> Why your site
                      collects each type of data. Every data point must
                      have a clear purpose tied to your site&apos;s
                      functionality, like spam prevention, analytics,
                      or order processing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Plugin and third-party disclosures:</strong> Which
                      plugins send data to external servers and what
                      third-party services process your visitors&apos; data.
                      This includes analytics providers, spam filters,
                      CDN services, and payment processors.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cookie disclosures:</strong> What cookies your
                      WordPress site sets, their purposes, and their
                      expiration periods. This includes WordPress session
                      cookies, plugin cookies, and third-party cookies
                      from analytics or advertising.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data storage and security:</strong> Where data
                      is stored (your hosting server, third-party services)
                      and what security measures protect it, including
                      SSL/TLS encryption and database security.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>User rights and data deletion:</strong> How
                      visitors can request access to or deletion of their
                      data. WordPress includes a built-in data export and
                      erasure tool under Tools that you should reference.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Contact information:</strong> A way for visitors
                      to reach you with privacy questions. An email address
                      is the minimum requirement.
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
                      <strong>WooCommerce data handling:</strong> If you run
                      an online store, disclose what customer data is
                      collected during checkout, how payment data is
                      processed, and how order records are retained.
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
                      of data sales, required for California visitors.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Embedded content disclosures:</strong> If your
                      posts embed YouTube videos, tweets, or other external
                      content, disclose that these embeds can collect
                      visitor data as if the visitor visited those sites
                      directly.
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
                        WordPress itself sets multiple cookies even on a
                        default installation with no plugins. The
                        wordpress_logged_in cookie identifies logged-in
                        users, wp-settings cookies store dashboard
                        preferences, and comment cookies remember visitor
                        names and emails. If you use any caching plugin,
                        analytics tool, or social sharing button, your
                        cookie count increases significantly. Your privacy
                        policy must disclose all of these.
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
                  Below is the complete privacy policy template designed
                  for WordPress sites. Bracketed text like [Your Site Name]
                  indicates placeholders you need to replace with your
                  specific details. Remove any sections that do not apply
                  to your WordPress setup.
                </p>

                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                  {/* Template Header */}
                  <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      WordPress Privacy Policy Template
                    </span>
                  </div>

                  <div className="p-5 space-y-6 text-sm text-slate-700 leading-relaxed">
                    {/* Section: Title */}
                    <div>
                      <p className="font-bold text-slate-900 text-base mb-2">
                        Privacy Policy for [Your Site Name]
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
                        This privacy policy describes how [Your Site Name]
                        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                        collects, uses, stores, and shares personal data
                        when you visit [yoursite.com]. Our website is built
                        on WordPress and uses various plugins and
                        third-party services described in this policy. By
                        using our site, you agree to the data practices
                        described here.
                      </p>
                    </div>

                    {/* Section: Data Collection */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        2. Data We Collect
                      </p>
                      <p className="mb-2">
                        We collect the following types of personal data:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>Comments:</strong> When you leave a comment, we collect your name, email address, website URL (if provided), comment content, and your IP address.</li>
                        <li><strong>Contact forms:</strong> [Describe form data, e.g., &quot;name, email, and message content submitted through our contact form&quot;]</li>
                        <li><strong>Cookies:</strong> WordPress session cookies, comment cookies, and [list additional cookies from plugins and analytics].</li>
                        <li><strong>Analytics data:</strong> [e.g., &quot;Pages visited, time on site, referral source, browser type, and general geographic location via Google Analytics&quot;]</li>
                        <li><strong>Account data:</strong> [If applicable: &quot;Username, email, and profile information for registered users&quot;]</li>
                        <li><strong>WooCommerce data:</strong> [If applicable: &quot;Billing name, address, email, phone number, and payment information during checkout&quot;]</li>
                      </ul>
                      <p className="mt-2">
                        We do NOT collect: [list data types you do not collect,
                        e.g., &quot;health information, biometric data, or
                        data from minors under 13&quot;].
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
                        <li>To display your comments on our posts</li>
                        <li>To respond to contact form submissions</li>
                        <li>To detect and prevent spam (via [Akismet / your spam plugin])</li>
                        <li>To analyze site traffic and improve our content (via [Google Analytics / your analytics tool])</li>
                        <li>[If WooCommerce: &quot;To process orders, manage shipping, and handle refunds&quot;]</li>
                        <li>To maintain site security and prevent abuse</li>
                      </ul>
                      <p className="mt-2">
                        We do NOT use your data for advertising or sell it
                        to third parties.
                      </p>
                    </div>

                    {/* Section: Plugins and Third-Party Services */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        4. Plugins and Third-Party Services
                      </p>
                      <p className="mb-2">
                        Our WordPress site uses the following plugins and
                        services that may process your data:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>[Plugin/Service Name] for [purpose]. Data sent: [what data]. Their privacy policy: [link]</li>
                        <li>[Plugin/Service Name] for [purpose]. Data sent: [what data]. Their privacy policy: [link]</li>
                      </ul>
                      <p className="mt-2">
                        Each third-party service has its own privacy policy
                        governing how they handle data they receive from
                        our site.
                      </p>
                    </div>

                    {/* Section: Cookies */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        5. Cookies
                      </p>
                      <p className="mb-2">
                        Our site uses the following cookies:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li><strong>wordpress_logged_in_[hash]:</strong> Identifies logged-in users. Expires at end of session.</li>
                        <li><strong>wp-settings-[UID]:</strong> Stores dashboard preferences. Expires in 1 year.</li>
                        <li><strong>comment_author, comment_author_email:</strong> Remembers commenter details. Expires in 347 days.</li>
                        <li>[Additional cookies from your plugins and analytics]</li>
                      </ul>
                      <p className="mt-2">
                        You can control cookies through your browser
                        settings. Disabling cookies may affect site
                        functionality.
                      </p>
                    </div>

                    {/* Section: Data Storage */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        6. Data Storage and Security
                      </p>
                      <p>
                        Your data is stored in our WordPress database
                        hosted by [your hosting provider] at [server
                        location]. We protect your data using SSL/TLS
                        encryption for all data in transit, regular
                        security updates for WordPress core and plugins,
                        [additional security measures like Wordfence or
                        Sucuri]. We retain comment data indefinitely
                        unless you request deletion. Contact form data
                        is retained for [period]. [WooCommerce order data
                        is retained for [period] for tax and legal
                        compliance.]
                      </p>
                    </div>

                    {/* Section: User Rights */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        7. Your Rights and Data Deletion
                      </p>
                      <p>
                        You can request access to or deletion of your
                        personal data at any time by contacting us at
                        [your email]. If you have a user account, you can
                        also request a data export or erasure through our
                        site. WordPress provides built-in tools for data
                        export and erasure that we use to process these
                        requests. For comments, we can edit or delete
                        your comment data upon request.
                      </p>
                    </div>

                    {/* Section: GDPR */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        8. GDPR Compliance (EU Visitors)
                      </p>
                      <p>
                        If you are located in the European Union, we
                        process your data under the legal basis of
                        [legitimate interest / consent / contract
                        performance]. You have the right to access,
                        rectify, erase, restrict processing, and port
                        your data. To exercise these rights, contact us
                        at [your email]. We will respond within 30 days.
                      </p>
                    </div>

                    {/* Section: Changes */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        9. Changes to This Policy
                      </p>
                      <p>
                        We may update this privacy policy when we install
                        new plugins, change our data handling practices,
                        or when privacy laws change. Updates will be
                        posted on this page with an updated effective
                        date. Continued use of our site after changes
                        constitutes acceptance of the updated policy.
                      </p>
                    </div>

                    {/* Section: Contact */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        10. Contact Us
                      </p>
                      <p>
                        If you have questions about this privacy policy
                        or our data practices, contact us at: [your email
                        address].
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mt-6 mb-4">
                  This template gives you the foundation. The sections
                  below walk you through WordPress-specific tools,
                  common plugin disclosures, and how to publish this
                  policy on your site.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I remove sections from the template that
                      do not apply to my site?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. If you do not use WooCommerce, remove the
                      e-commerce sections. If you do not allow comments,
                      remove the comment data section. However, keep the
                      cookie and analytics sections even if you think you
                      do not use them, because WordPress core and most
                      themes set cookies by default. When in doubt, keep
                      a section rather than removing it.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Should I include sections for plugins I might
                      add in the future?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No. Your privacy policy should describe your
                      current data practices, not hypothetical future
                      ones. When you install a new plugin that collects
                      data, update your privacy policy at that time.
                      Including disclosures for plugins you do not use
                      creates inaccurate statements about your site&apos;s
                      data collection.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: WordPress Built-in Privacy Tools */}
              <section id="wordpress-built-in-privacy-tools" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  WordPress Built-in Privacy Tools
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  WordPress includes several built-in privacy features
                  under Settings &gt; Privacy that many site owners
                  overlook. Understanding these tools helps you build a
                  more complete privacy policy and handle data requests
                  from visitors.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      num: "1",
                      text: "Privacy Policy Page Generator: WordPress creates a draft privacy policy page with suggested text covering core data collection (comments, cookies, embedded content). Access it under Settings > Privacy. This is your starting point, but it only covers WordPress core, not your plugins.",
                    },
                    {
                      num: "2",
                      text: "Personal Data Export Tool: Under Tools > Export Personal Data, you can process data access requests. Enter a user's email, and WordPress compiles all data associated with that email including comments, account info, and data from compatible plugins.",
                    },
                    {
                      num: "3",
                      text: "Personal Data Erasure Tool: Under Tools > Erase Personal Data, you can process deletion requests. This removes or anonymizes personal data associated with an email address. Compatible plugins hook into this tool to erase their data too.",
                    },
                    {
                      num: "4",
                      text: "Comment Cookie Consent Checkbox: WordPress can show a checkbox under the comment form letting visitors opt in to having their name, email, and website saved in a cookie. Enable this under Settings > Discussion to meet GDPR cookie consent requirements for comments.",
                    },
                    {
                      num: "5",
                      text: "Plugin Privacy Policy Suggestions: Well-coded plugins add their own suggested privacy policy text to the Settings > Privacy page. When you install a new plugin, check this page to see if the plugin has provided privacy text you should include in your policy.",
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

                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy should mention these tools. Tell
                  visitors they can request a data export or erasure by
                  contacting you, and that you use WordPress built-in
                  tools to process these requests. This demonstrates
                  compliance with GDPR data subject rights. For full
                  details on WordPress privacy requirements, see the{" "}
                  <Link
                    href="/privacy-policy-for-wordpress"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    complete WordPress privacy policy guide
                  </Link>
                  .
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
                        The WordPress Personal Data Erasure tool does not
                        delete data by default for all plugins. Each plugin
                        must register its own data eraser function. If a
                        plugin does not support this hook, its data will
                        not be included in erasure requests. Check each of
                        your data-collecting plugins to confirm they
                        support WordPress privacy tools. If they do not,
                        you need a manual process for handling data
                        deletion from those plugins.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Common Plugin Disclosures */}
              <section id="common-plugin-disclosures" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Plugin Disclosures
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The following table shows the most popular WordPress
                  plugins that collect or process visitor data. If you
                  use any of these plugins, your privacy policy must
                  include appropriate disclosures. Use this as a
                  reference when customizing section 4 of the template.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[18%]">
                          Plugin
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[27%]">
                          Data Collected
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Where Data Goes
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Privacy Policy Disclosure Needed
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Yoast SEO
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Site usage data, configuration settings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yoast servers (if usage tracking is enabled)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose if usage tracking is enabled; minimal visitor data impact if disabled
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Jetpack
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Page views, IP addresses, browser info, referrers, comment data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WordPress.com / Automattic servers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose analytics data collection, Automattic as data processor, and which Jetpack modules are active
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contact Form 7
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Form field data (name, email, message, custom fields)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Your WordPress database; email server for notifications
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose what form data is collected, how long it is stored, and that submissions are emailed to you
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          WPForms
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Form submissions, IP addresses, browser data, file uploads
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Your WordPress database; optional third-party integrations
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose all form data collected, IP logging, and any connected services like Mailchimp or Stripe
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Akismet
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Commenter IP, user agent, referrer, comment content, name, email
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Automattic servers for spam analysis
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose that comment data is sent to Automattic for spam checking and link to Akismet privacy policy
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Wordfence
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          IP addresses, login attempts, traffic patterns, blocked requests
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Wordfence / Defiant servers for threat analysis
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose IP logging for security, traffic monitoring, and data sharing with Defiant for threat intelligence
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          MonsterInsights
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Page views, sessions, demographics, device info, e-commerce tracking
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Google Analytics servers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose Google Analytics usage, what visitor data is tracked, and whether IP anonymization is enabled
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          WP Mail SMTP
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email addresses, email content, delivery logs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Third-party SMTP provider (SendGrid, Mailgun, etc.)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose which email service processes your site&apos;s emails and that notification emails pass through their servers
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Only include disclosures for plugins you actually use.
                  If you use other plugins that collect visitor data (like
                  membership plugins, LMS plugins, or booking plugins),
                  add disclosures for those as well. The key is to identify
                  every plugin that either collects personal data from
                  visitors or sends data to an external server. For more
                  on plugin-specific privacy requirements, see our guide
                  on{" "}
                  <Link
                    href="/privacy-policy-for-wordpress-plugin"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    privacy policies for WordPress plugins
                  </Link>
                  .
                </p>
              </section>

              {/* Section 5: Theme Data Collection */}
              <section id="theme-data-collection" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Theme Data Collection
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  WordPress themes can collect visitor data in ways that
                  are not immediately obvious. Many site owners overlook
                  theme-level data collection when writing their privacy
                  policy. Here are the most common ways themes affect
                  your data practices.
                </p>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Google Fonts:</strong> Many themes load Google
                      Fonts from Google servers. When a visitor loads your
                      page, their browser sends a request to Google,
                      transmitting their IP address. This is a GDPR concern
                      because visitor IPs are sent to Google without consent.
                      Check your theme settings for a &quot;local fonts&quot;
                      option, or host fonts locally.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Built-in analytics:</strong> Some premium themes
                      include their own analytics dashboards or integrate
                      with analytics services. Check your theme settings
                      panel for any tracking or analytics options that may
                      be enabled by default.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Social media scripts:</strong> Themes with
                      social sharing buttons or social feeds often load
                      scripts from Facebook, Twitter, Pinterest, or other
                      platforms. These scripts set third-party cookies and
                      can track visitors across sites.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>CDN and external resources:</strong> Themes
                      that load JavaScript libraries, icon fonts, or CSS
                      frameworks from external CDNs (like cdnjs, jsDelivr,
                      or Font Awesome) send visitor IP addresses to those
                      CDN providers on every page load.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Theme usage tracking:</strong> Some themes
                      phone home to their developer&apos;s server to check
                      for updates or report usage data. This does not
                      typically involve visitor data, but review your
                      theme&apos;s documentation to confirm.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  If your theme loads any external resources, your privacy
                  policy should disclose this under the third-party
                  services section. For themes loading Google Fonts
                  externally, either switch to local font hosting or
                  disclose the data transfer to Google in your policy.
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
                        A German court ruled in January 2022 that loading
                        Google Fonts from Google servers without user consent
                        violates GDPR, because visitor IP addresses are
                        transmitted to Google in the United States. This
                        ruling led many WordPress site owners to switch to
                        locally hosted fonts. If your theme still loads fonts
                        from Google, you should either host them locally or
                        add a clear disclosure and consent mechanism in your
                        privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: How to Add Privacy Policy Page in WordPress */}
              <section id="how-to-add-privacy-policy" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Add a Privacy Policy Page in WordPress
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these six steps to create, customize, and
                  publish your privacy policy page in WordPress. Each
                  step tells you exactly where to go in your dashboard
                  and what to do.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit your plugins for data collection
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go to Plugins &gt; Installed Plugins in your WordPress
                        dashboard. For each active plugin, determine whether
                        it collects visitor data, sends data to external
                        servers, or sets cookies. Check the plugin&apos;s
                        documentation or settings page. Make a list of every
                        plugin that touches personal data. This list drives
                        the content of sections 2 and 4 in the template.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Check your theme for external data requests
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review your theme settings for Google Fonts loading,
                        built-in analytics, social media scripts, or external
                        CDN resources. Open your site in a browser, open
                        Developer Tools, and check the Network tab for
                        requests to external domains. Any external request
                        means visitor data (at minimum, IP addresses) is
                        being sent to that domain.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Use Settings &gt; Privacy to create the page
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Navigate to Settings &gt; Privacy in your WordPress
                        dashboard. Click &quot;Create&quot; to generate a new
                        privacy policy page. WordPress will populate it with
                        suggested text covering core features like comments
                        and cookies. This gives you a starting structure,
                        but you will need to replace and expand the
                        content significantly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Customize the template with your specific details
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Replace all placeholder text with your site&apos;s
                        actual details. Add sections for each plugin from
                        step 1, your theme data from step 2, your analytics
                        setup, contact form handling, and any e-commerce
                        functionality. Remove sections that do not apply.
                        Use our template above as your guide, filling in
                        the bracketed placeholders with your specifics.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add GDPR and cookie consent sections
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If your site has EU visitors, add GDPR-required
                        sections: legal basis for processing, data retention
                        periods, and user rights. Add a cookie disclosure
                        listing all cookies your site sets. If you use a
                        cookie consent plugin, reference it in your policy.
                        See our{" "}
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
                        Publish and link in your footer navigation
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Publish the page, then go to Settings &gt; Privacy
                        and designate it as your privacy policy page. Add
                        the page to your footer menu under Appearance &gt;
                        Menus so it is accessible from every page. If you
                        use WooCommerce, also link it in your checkout
                        flow. Test that the page is publicly accessible
                        without requiring a login.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the most common mistakes WordPress site
                  owners make when creating their privacy policy. Avoid
                  these to stay compliant and protect your site.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Relying only on the WordPress built-in
                        privacy policy text
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The suggested text under Settings &gt; Privacy only
                        covers WordPress core behavior. It says nothing
                        about your contact forms, analytics, security
                        plugins, WooCommerce, or any other plugin that
                        collects data. Publishing the built-in text without
                        adding your plugin-specific disclosures leaves major
                        gaps in your privacy policy. You must customize it
                        with your actual data practices.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Not disclosing plugin data sharing with
                        third parties
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Plugins like Akismet, Jetpack, MonsterInsights,
                        and WP Mail SMTP send visitor data to external
                        servers. If your privacy policy says &quot;we do
                        not share data with third parties&quot; but you use
                        these plugins, your policy is inaccurate. Audit
                        every active plugin and disclose which ones send
                        data externally, what data they send, and link to
                        their privacy policies.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Ignoring cookie disclosures entirely
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        WordPress sets multiple cookies by default, and
                        every analytics or advertising plugin adds more.
                        GDPR requires informed consent for non-essential
                        cookies, and your privacy policy must list all
                        cookies your site sets. Many WordPress site owners
                        skip this section entirely, creating a compliance
                        gap. List every cookie, its purpose, and its
                        expiration period.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Copying another site&apos;s privacy policy
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Every WordPress site has a different combination
                        of plugins, themes, and data practices. Copying
                        another site&apos;s privacy policy means you are
                        describing their data handling, not yours. The
                        plugins they use, the analytics they run, and the
                        forms they collect may be completely different from
                        yours. This also carries copyright risks. Use a
                        template instead and customize it for your specific
                        setup.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Not updating the policy when plugins change
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        WordPress sites change frequently. You install new
                        plugins, deactivate old ones, switch themes, and
                        add new functionality. Each change can alter your
                        data collection practices. If you install a new
                        analytics plugin or add WooCommerce but do not
                        update your privacy policy, it becomes inaccurate.
                        Treat your privacy policy as a living document that
                        must be updated alongside your site.
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
                      Is a free WordPress privacy policy template legally
                      valid?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A free template can be legally valid if you customize
                      it to accurately describe your WordPress site&apos;s
                      actual data practices. The legal strength of a
                      privacy policy depends on accuracy, not price. A
                      properly customized free template that truthfully
                      describes your plugins, forms, and analytics is far
                      better than no policy at all. Sites handling
                      sensitive data should have their policy reviewed
                      by a legal professional.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What must a WordPress privacy policy template cover?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your template must cover: what personal data your
                      site collects (comments, forms, cookies, analytics),
                      how that data is used, what plugins and third-party
                      services process visitor data, how data is stored and
                      secured, cookie disclosures, user rights including
                      data access and deletion, and your contact
                      information. GDPR-subject sites also need a legal
                      basis, retention periods, and EU user rights.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does WordPress have a built-in privacy policy
                      feature?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. WordPress includes a privacy policy page
                      generator under Settings &gt; Privacy. It creates
                      a draft with suggested text covering core data
                      collection like comments, cookies, and embedded
                      content. However, it only covers WordPress core
                      and does not address your plugins, theme data
                      collection, analytics, or WooCommerce. You need to
                      add those sections yourself.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy if my WordPress site
                      has no contact form?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Even without a contact form, WordPress collects
                      data through comments, cookies, user accounts,
                      embedded content, and any analytics or advertising
                      scripts. If your site has any EU visitors, GDPR
                      requires a privacy policy regardless. Most WordPress
                      sites collect more data than their owners realize
                      through plugins, themes, and default behavior.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I add a privacy policy page in WordPress?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Go to Settings &gt; Privacy, click Create to
                      generate a draft page. Customize it with your
                      plugin disclosures, form details, and analytics
                      information. Publish the page, designate it under
                      Settings &gt; Privacy, and add it to your footer
                      menu under Appearance &gt; Menus so visitors can
                      find it from any page.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Should my WordPress privacy policy mention each
                      plugin by name?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      You do not need to name every plugin, but you must
                      disclose the data practices of plugins that collect
                      or transmit visitor data. If you use Jetpack for
                      analytics, Contact Form 7 for forms, or Akismet for
                      spam filtering, describe what data those plugins
                      collect and where it goes. Focus on what data is
                      collected and why, not on listing plugin names for
                      their own sake.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How often should I update my WordPress privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Update it whenever you install a new data-collecting
                      plugin, switch themes, add analytics or tracking,
                      enable WooCommerce, change hosting, or modify how
                      you handle form submissions. Also review when
                      privacy laws change. At minimum, audit your policy
                      every time you make a significant change to your
                      WordPress site.
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
                      title: "Privacy Policy for WordPress",
                      desc: "Complete guide to WordPress privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-wordpress-plugin",
                      title: "Privacy Policy for WordPress Plugins",
                      desc: "Plugin-specific privacy disclosures and requirements",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-wordpress-site",
                      title: "Do I Need a Privacy Policy for WordPress?",
                      desc: "What triggers the requirement for WordPress sites",
                    },
                    {
                      href: "/privacy-policy-for-woocommerce",
                      title: "Privacy Policy for WooCommerce",
                      desc: "E-commerce data handling and checkout disclosures",
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
                      desc: "App store requirements for mobile and desktop apps",
                    },
                    {
                      href: "/generate",
                      title: "Generate Your Privacy Policy",
                      desc: "Answer a few questions and get a custom policy in seconds",
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
                  Want a Policy Customized for Your WordPress Site?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Skip the manual customization. Answer a few questions
                  about your WordPress setup and get a privacy policy
                  tailored to your specific plugins, theme, analytics,
                  and compliance needs. Takes under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and WordPress requirements &middot;
                  Plugin-aware &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
