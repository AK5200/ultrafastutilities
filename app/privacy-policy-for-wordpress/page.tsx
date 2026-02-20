import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  Globe,
  Code,
  Settings,
  Puzzle,
  Clock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for WordPress (GDPR & CCPA) Free Preview | ultrafastutilities",
  description:
    "Create a compliant privacy policy for your WordPress site. Covers GDPR, CCPA, WooCommerce, plugins, cookies, and user data. Free preview. One-time $4.99.",
  keywords:
    "privacy policy for wordpress, wordpress privacy policy, wordpress GDPR, wordpress cookie policy, WooCommerce privacy policy, wordpress privacy policy generator",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-wordpress",
  },
  openGraph: {
    title:
      "Privacy Policy for WordPress (GDPR & CCPA) Free Preview | ultrafastutilities",
    description:
      "Create a compliant privacy policy for your WordPress site. Covers GDPR, CCPA, WooCommerce, plugins, cookies, and user data. Free preview. One-time $4.99.",
    url: "https://ultrafastutilities.com/privacy-policy-for-wordpress",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for WordPress | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for WordPress (GDPR & CCPA) Free Preview | ultrafastutilities",
    description:
      "Create a compliant privacy policy for your WordPress site. Covers GDPR, CCPA, WooCommerce, plugins, cookies, and user data. Free preview. One-time $4.99.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-wordpress", title: "Why WordPress Sites Need One" },
  { id: "wordpress-risks", title: "WordPress-Specific Risks" },
  { id: "plugins-data", title: "Plugins & Data Collection" },
  { id: "gdpr-ccpa", title: "GDPR & CCPA Requirements" },
  { id: "sections", title: "Required Sections" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForWordPressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for WordPress (GDPR & CCPA) Free Preview | ultrafastutilities",
            description:
              "Create a compliant privacy policy for your WordPress site. Covers GDPR, CCPA, WooCommerce, plugins, cookies, and user data. Free preview. One-time $4.99.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2025-01-01",
            dateModified: "2026-02-20",
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
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Doesn't WordPress already generate a privacy policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "WordPress includes a suggested privacy policy template since version 4.9.6, but it's only a generic starting point. It doesn't customize content for your specific plugins, services, or jurisdictional requirements. You need a policy tailored to what your site actually does.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a privacy policy for a personal WordPress blog?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Even a basic blog with comments enabled collects names, emails, and IP addresses. If you use Google Analytics, social sharing buttons, or any advertising, you're collecting additional data that must be disclosed under GDPR and CCPA.",
                },
              },
              {
                "@type": "Question",
                name: "What about WooCommerce stores - do they need a different policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "WooCommerce stores need more comprehensive coverage because they process payment information, billing addresses, and order data. Your policy should address e-commerce-specific requirements including payment processor disclosures, order data retention, and abandoned cart tracking.",
                },
              },
              {
                "@type": "Question",
                name: "How do I handle cookies on WordPress?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "WordPress sets several cookies by default (session, comment, and login cookies), and plugins add many more. You need a cookie policy that classifies all cookies (necessary, analytics, marketing, functional) and a consent mechanism that blocks non-essential cookies until the user opts in.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use a privacy policy plugin instead?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Privacy policy plugins can help display and manage your policy, but most generate generic text that doesn't properly cover all your plugins, services, and regulatory requirements. It's better to generate a proper policy tailored to your setup, then use a plugin simply to display it.",
                },
              },
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
              <span className="text-slate-600">
                Privacy Policy for WordPress
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Code className="w-3.5 h-3.5" />
                WordPress Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  WordPress
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                WordPress powers over 40% of the web. Every WordPress site
                collects user data through themes, plugins, comments, and forms.
                Here&apos;s how to build a privacy policy that actually covers
                it all.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For bloggers, business owners, and WooCommerce stores.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                General Website Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/cookie-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Cookie Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                E-commerce Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
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
                <span>Last updated: February 2026</span>
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
              {/* Section 1: Why WordPress Sites Need a Privacy Policy */}
              <section id="why-wordpress" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why WordPress Sites Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    WordPress is the most popular content management system in
                    the world, powering everything from personal blogs to
                    enterprise-level{" "}
                    <Link
                      href="/privacy-policy-for-ecommerce"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      e-commerce stores
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . Even a basic WordPress installation collects personal data
                    in ways many site owners don&apos;t realize.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If your WordPress site does any of the following, you need a
                    privacy policy:
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {[
                      "Allows comments (WordPress stores commenter names, emails, and IP addresses)",
                      "Uses contact forms or newsletter signups (e.g., Contact Form 7, WPForms, Mailchimp)",
                      "Runs Google Analytics, Jetpack Stats, or any tracking scripts",
                      "Operates a WooCommerce store collecting payment and shipping information",
                      "Uses caching, CDN, or security plugins that process visitor data",
                      "Embeds third-party content like YouTube videos, social media feeds, or maps",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-base leading-7 text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    WordPress itself added a built-in Privacy Policy page tool in
                    version 4.9.6, but it only provides a starter template.
                    It&apos;s not customized to your site, your plugins, or the
                    regulations that apply to your audience.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: WordPress-Specific Privacy Risks */}
              <section id="wordpress-risks" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      WordPress-Specific Privacy Risks
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="rounded-xl border border-red-200/60 bg-red-50/30 p-5">
                    <div className="flex gap-3 mb-4">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-base leading-7 text-slate-700">
                        <strong className="text-slate-900">Caution:</strong>{" "}
                        WordPress sites have unique privacy risks that generic
                        policies fail to address. Most{" "}
                        <Link
                          href="/chatgpt-privacy-policy-risks"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          AI-generated policies
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/free-vs-paid-privacy-policy-generator"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          free generators
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        don&apos;t account for the WordPress ecosystem.
                      </p>
                    </div>

                    <div className="space-y-5 mt-5">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Hidden Plugin Data Collection
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Many WordPress plugins collect and transmit user data
                          without obvious disclosure. SEO plugins, form builders,
                          analytics tools, and even performance plugins may send
                          data to third-party servers. Your privacy policy must
                          account for each one.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          WordPress Comment System
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          The default comment system stores names, email
                          addresses, website URLs, IP addresses, and browser user
                          agent strings. If you use Gravatar (enabled by
                          default), commenter email hashes are sent to
                          Automattic&apos;s servers to retrieve avatars.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          WooCommerce & Payment Data
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          WooCommerce stores collect extensive personal data:
                          billing addresses, shipping details, order history, and
                          payment tokens. If you run an online store, your policy
                          needs to cover{" "}
                          <Link
                            href="/privacy-policy-for-ecommerce"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            e-commerce-specific requirements
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                          .
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Theme & Embed Tracking
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          WordPress themes often include Google Fonts (which
                          sends visitor IP addresses to Google), social media
                          embeds, and external resource loading, all of which
                          constitute data sharing with third parties under{" "}
                          <Link
                            href="/gdpr-privacy-policy-template"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            GDPR
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Common Plugins & What Data They Collect */}
              <section id="plugins-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Plugins and What Data They Collect
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-6">
                  <p className="text-base leading-7 text-slate-700">
                    Your privacy policy should disclose every plugin and service
                    that processes visitor data. Here are the most common ones on
                    WordPress sites:
                  </p>

                  {[
                    {
                      icon: Settings,
                      title: "Analytics & Tracking",
                      items: [
                        "Google Analytics / GA4: page views, demographics, device data, IP addresses",
                        "Jetpack Stats: page views, referrers, search terms (via Automattic servers)",
                        "Facebook Pixel / Meta: browsing behavior, conversion tracking",
                        "Hotjar / Clarity: session recordings, heatmaps, user interactions",
                      ],
                    },
                    {
                      icon: Puzzle,
                      title: "Forms & Communication",
                      items: [
                        "Contact Form 7 / WPForms / Gravity Forms: names, emails, message content",
                        "Mailchimp / ConvertKit: email addresses, subscription preferences",
                        "Akismet: commenter names, emails, IPs, and user agent strings (sent to Automattic for spam detection)",
                        "LiveChat / Tidio: visitor conversations, email, browsing history",
                      ],
                    },
                    {
                      icon: Globe,
                      title: "Performance & Security",
                      items: [
                        "Cloudflare: IP addresses, request headers, geographic data",
                        "Wordfence / Sucuri: IP logging, login attempt tracking, security scans",
                        "WP Super Cache / W3 Total Cache: may store visitor-specific cached content",
                        "Google Fonts: visitor IP addresses sent to Google servers",
                      ],
                    },
                    {
                      icon: FileText,
                      title: "E-commerce (WooCommerce)",
                      items: [
                        "WooCommerce: billing/shipping addresses, order history, account data",
                        "Stripe / PayPal: payment card details, transaction records",
                        "WooCommerce Subscriptions: recurring billing data, subscription status",
                        "Abandoned Cart plugins: email, cart contents, browsing behavior",
                      ],
                    },
                  ].map((group) => (
                    <div key={group.title}>
                      <div className="flex items-center gap-2 mb-3">
                        <group.icon className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold text-slate-900">
                          {group.title}
                        </h3>
                      </div>
                      <div className="space-y-2.5">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-base leading-7"
                          >
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                            <p className="text-slate-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: GDPR & CCPA Requirements for WordPress */}
              <section id="gdpr-ccpa" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GDPR and CCPA Requirements for WordPress
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  {/* GDPR */}
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
                        for WordPress Sites
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      If any of your visitors are in the EU or UK, GDPR applies
                      regardless of where your site is hosted. WordPress sites
                      must specifically address:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Lawful basis for each type of data processing (comments, forms, analytics, cookies)",
                        "Disclosure of all third-party services receiving data (Automattic, Google, payment processors)",
                        "Cookie consent before loading non-essential cookies and tracking scripts",
                        "Data export and erasure tools (WordPress has built-in GDPR export/erase since 4.9.6)",
                        "Data retention periods for comments, form submissions, analytics data, and order records",
                        "International transfer safeguards for plugins sending data outside the EU",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CCPA */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        <Link
                          href="/ccpa-privacy-policy-example"
                          className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          CCPA/CPRA
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>{" "}
                        for WordPress Sites
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      If you have California visitors (most US-facing sites do),
                      CCPA/CPRA adds these requirements:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Right to know what personal information is collected by your WordPress site and plugins",
                        "Right to delete personal information (including comment data, form submissions, and account data)",
                        "Right to opt out of the sale or sharing of personal data (relevant if using retargeting or ad plugins)",
                        "Categories of data collected in the prior 12 months",
                        "A \"Do Not Sell or Share My Personal Information\" link if you use advertising or behavioral tracking plugins",
                        "Non-discrimination clause for users who exercise their rights",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Required Sections */}
              <section id="sections" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Your WordPress Privacy Policy Must Include
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  {[
                    {
                      title: "Data Controller Identity",
                      desc: "Your name or business name, address, and contact details as the entity responsible for processing data",
                    },
                    {
                      title: "Types of Data Collected",
                      desc: "Comment data (name, email, IP), form submissions, account data, payment details (WooCommerce), analytics data, and cookie identifiers",
                    },
                    {
                      title: "How Data Is Collected",
                      desc: "WordPress comments, contact forms, WooCommerce checkout, user registration, analytics scripts, embedded content, and plugin telemetry",
                    },
                    {
                      title: "Purpose of Data Collection",
                      desc: "Service delivery, spam prevention (Akismet), site analytics, marketing communications, order fulfillment, and security monitoring",
                    },
                    {
                      title: "Third-Party Services",
                      desc: "Every plugin and external service that receives data. Name the specific services (Google Analytics, Automattic, Stripe, Cloudflare, etc.)",
                    },
                    {
                      title: "Data Retention Periods",
                      desc: "How long you keep comments, form submissions, analytics data, order records, and security logs, with specific timeframes",
                    },
                    {
                      title: "User Rights & How to Exercise Them",
                      desc: "GDPR and CCPA rights with procedures, including WordPress's built-in data export and erasure tools",
                    },
                    {
                      title: "International Data Transfers",
                      desc: "Many WordPress plugins (Jetpack, Akismet, Google services) transfer data to US servers. Disclose safeguards like Standard Contractual Clauses",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Cookie Policy item with link */}
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-0.5">
                        <Link
                          href="/cookie-policy-for-websites"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          Cookie Policy
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        WordPress sets session cookies, comment cookies, and
                        login cookies by default. Plugins add analytics,
                        marketing, and functional cookies. All must be classified
                        and disclosed.
                      </p>
                    </div>
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
                      Generate Your WordPress Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, GDPR &amp; CCPA-ready privacy policy
                      for your WordPress site in under 60 seconds. Covers
                      plugins, WooCommerce, and more.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy for $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>No subscription</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-8">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <HelpCircle className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Doesn&apos;t WordPress already generate a privacy policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      WordPress includes a suggested privacy policy template
                      since version 4.9.6, but it&apos;s only a generic
                      starting point. It doesn&apos;t customize content for your
                      specific plugins, services, or jurisdictional
                      requirements. You need a policy tailored to what your site
                      actually does.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Do I need a privacy policy for a personal WordPress blog?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes. Even a basic blog with comments enabled collects
                      names, emails, and IP addresses. If you use Google
                      Analytics, social sharing buttons, or any advertising,
                      you&apos;re collecting additional data that must be
                      disclosed under{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        CCPA
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      What about WooCommerce stores: do they need a different
                      policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      WooCommerce stores need more comprehensive coverage
                      because they process payment information, billing
                      addresses, and order data. Your policy should address{" "}
                      <Link
                        href="/privacy-policy-for-ecommerce"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        e-commerce-specific requirements
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      including payment processor disclosures, order data
                      retention, and abandoned cart tracking.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      How do I handle cookies on WordPress?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      WordPress sets several cookies by default (session,
                      comment, and login cookies), and plugins add many more.
                      You need a{" "}
                      <Link
                        href="/cookie-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        cookie policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      that classifies all cookies (necessary, analytics,
                      marketing, functional) and a consent mechanism that blocks
                      non-essential cookies until the user opts in.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Can I use a privacy policy plugin instead?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Privacy policy plugins can help display and manage your
                      policy, but most generate generic text that doesn&apos;t
                      properly cover all your plugins, services, and regulatory
                      requirements. It&apos;s better to generate a proper policy
                      tailored to your setup, then use a plugin simply to
                      display it.
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
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "General website privacy policy guide",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      icon: FileText,
                      title: "Privacy Policy for E-commerce",
                      desc: "WooCommerce and online store requirements",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: FileText,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie compliance and classification",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template structure",
                    },
                    {
                      href: "/chatgpt-privacy-policy-risks",
                      icon: AlertTriangle,
                      title: "ChatGPT Privacy Policy Risks",
                      desc: "Why generic AI-generated policies fail",
                    },
                    {
                      href: "/free-vs-paid-privacy-policy-generator",
                      icon: FileText,
                      title: "Free vs Paid Generator",
                      desc: "Compare free tools vs structured solutions",
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
