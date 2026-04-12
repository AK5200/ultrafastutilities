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
    "Do I Need a Privacy Policy for My WordPress Site? Yes (2026) | ultrafastutilities",
  description:
    "Yes, WordPress sites need a privacy policy. WordPress itself collects cookies, comments store personal data, and most plugins track users. Learn exactly why and how to add one.",
  keywords:
    "do i need a privacy policy for wordpress, wordpress privacy policy required, wordpress site privacy policy, does wordpress need privacy policy, wordpress blog privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-wordpress-site",
  },
  openGraph: {
    title:
      "Do I Need a Privacy Policy for My WordPress Site? Yes (2026) | ultrafastutilities",
    description:
      "Yes, WordPress sites need a privacy policy. WordPress itself collects cookies, comments store personal data, and most plugins track users. Learn exactly why and how to add one.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-wordpress-site",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Do I Need a Privacy Policy for My WordPress Site? | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do I Need a Privacy Policy for My WordPress Site? Yes (2026)",
    description:
      "Yes, WordPress sites need a privacy policy. WordPress itself collects cookies, comments store personal data, and most plugins track users.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a privacy policy for my WordPress site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WordPress sites collect personal data by default through comments (name, email, IP address), cookies for logged-in users and commenters, and Gravatar requests. Most WordPress plugins like contact forms, analytics, and WooCommerce collect additional personal data. Privacy laws like GDPR and CCPA require a privacy policy for any website that processes personal data, which includes virtually every WordPress site.",
      },
    },
    {
      "@type": "Question",
      name: "Does WordPress collect personal data by default?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A fresh WordPress installation collects personal data in several ways: comments store the commenter's name, email address, website URL, and IP address. WordPress sets cookies for logged-in users and for commenters who opt in. WordPress pings Gravatar.com with commenter email hashes to fetch avatars. The login system stores session data. Even without any plugins, WordPress handles personal data that must be disclosed in a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for a personal WordPress blog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, even personal blogs need a privacy policy if they collect any personal data, which almost all WordPress blogs do. If your blog has comments enabled, uses any analytics, has a contact form, or uses cookies, you are processing personal data. GDPR does not exempt personal blogs that are publicly accessible. The only exception under GDPR is purely personal or household activity, which does not cover a public blog that anyone can visit.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my WordPress site does not have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without a privacy policy, your WordPress site may face GDPR fines up to 20 million euros or 4% of annual revenue, CCPA penalties up to $7,500 per intentional violation, removal from ad networks like Google AdSense that require a privacy policy, and loss of user trust. Many hosting providers and payment processors also require websites to have a privacy policy as part of their terms of service.",
      },
    },
    {
      "@type": "Question",
      name: "Does WordPress have a built-in privacy policy tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Since version 4.9.6, WordPress includes a built-in Privacy Policy page generator under Settings > Privacy. It creates a starter template with suggested text covering comments, cookies, analytics, and embedded content. However, this template is intentionally generic and must be customized to reflect your specific site's data practices, plugins, and third-party services. It is a starting point, not a finished policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do WordPress plugins require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many WordPress plugins collect or process personal data, which means you need to disclose their data practices in your privacy policy. Common examples include contact form plugins (WPForms, Contact Form 7), analytics plugins (Google Analytics, Jetpack), ecommerce plugins (WooCommerce), email marketing plugins (Mailchimp), and security plugins that log IP addresses. Any plugin that handles user data adds to your privacy policy obligations.",
      },
    },
    {
      "@type": "Question",
      name: "Is a privacy policy legally required for all websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A privacy policy is legally required for any website that collects or processes personal data from users in jurisdictions with privacy laws. This includes the EU (GDPR), California (CCPA), Brazil (LGPD), Canada (PIPEDA), and many other regions. Since WordPress sites inherently collect personal data through comments, cookies, and login systems, and since website visitors come from all over the world, virtually every WordPress site needs a privacy policy to comply with applicable laws.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Add a Privacy Policy to Your WordPress Site",
  description:
    "Follow these five steps to create and publish a privacy policy on your WordPress site that covers all your data collection practices.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your WordPress data collection",
      text: "Review every way your WordPress site collects personal data. Check if comments are enabled, which plugins you use, whether you have analytics, contact forms, ecommerce, or email opt-ins. List every plugin and third-party service that handles user data. This audit determines what your privacy policy must cover.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Use the WordPress Privacy Policy generator",
      text: "Go to Settings > Privacy in your WordPress dashboard. Click 'Create New Page' or select an existing page. WordPress will generate a starter template with default sections covering comments, cookies, embedded content, and analytics. Review each section carefully.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Customize for your specific plugins and services",
      text: "Edit the generated template to include disclosures for every plugin and third-party service you use. Add sections for your contact form plugin, analytics service, ad networks, email marketing tools, ecommerce platform, and any other service that processes visitor data. Remove sections that do not apply to your site.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add GDPR and CCPA required disclosures",
      text: "Ensure your privacy policy includes all legally required information: what data you collect, why you collect it, how long you retain it, who you share it with, what rights users have (access, deletion, portability), and how users can exercise those rights. Include your contact information for privacy inquiries.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Publish and link from your site footer",
      text: "Publish the privacy policy page and add it to your site footer menu so it is accessible from every page. In WordPress, go to Appearance > Menus and add the privacy policy page to your footer menu. Also set it as your designated Privacy Policy Page under Settings > Privacy so WordPress can link to it automatically.",
    },
  ],
};

const tocSections = [
  { id: "short-answer", title: "The Short Answer" },
  { id: "why-wordpress-needs-one", title: "Why WordPress Sites Need One" },
  { id: "plugin-data", title: "Plugin Data Collection" },
  { id: "gdpr-ccpa", title: "GDPR/CCPA Requirements" },
  { id: "wordpress-privacy-tools", title: "WordPress Privacy Tools Built-in" },
  { id: "myths-debunked", title: "Common Myths Debunked" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function DoINeedAPrivacyPolicyForWordPressSitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do I Need a Privacy Policy for My WordPress Site? Yes, Even for Personal Blogs",
            description:
              "Yes, WordPress sites need a privacy policy. WordPress itself collects cookies, comments store personal data, and most plugins track users. Learn exactly why and how to add one.",
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
                name: "Do I Need a Privacy Policy for My WordPress Site?",
                item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-wordpress-site",
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
                Do I Need a Privacy Policy for My WordPress Site?
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                WordPress Privacy Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for My{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  WordPress Site?
                </span>{" "}
                Yes, Even for Personal Blogs
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes, WordPress sites need a privacy policy. WordPress itself
                collects cookies, comments store personal data, and most
                plugins track users. Privacy laws like GDPR and CCPA require
                disclosure of all data collection on your site.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For WordPress site owners, bloggers, freelancers, and small
                businesses running WordPress websites.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA &amp;
                WordPress 6.x compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-wordpress"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                WordPress Privacy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/wordpress-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                WordPress Policy Template
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
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
                  <strong>Yes, WordPress sites need a privacy policy.</strong>{" "}
                  A default WordPress installation collects personal data
                  through comments (name, email, IP address), cookies for
                  logged-in users and commenters, and Gravatar requests that
                  transmit email hashes to a third party. Most WordPress
                  plugins collect additional personal data through contact
                  forms, analytics, and ecommerce features. GDPR, CCPA, and
                  other privacy laws require you to disclose all of this in a
                  privacy policy.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                The question &quot;do I need a privacy policy for my WordPress
                site?&quot; is one of the most common questions WordPress site
                owners ask. The answer is almost always yes, regardless of
                whether you run a personal blog, a business site, or an
                online store.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                WordPress is the most popular content management system in
                the world, powering over 40% of all websites. But many site
                owners do not realize that WordPress collects personal data
                right out of the box. Comments, cookies, login sessions, and
                Gravatar integrations all involve personal data processing
                before you even install a single plugin.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly why your WordPress site needs a
                privacy policy, what data WordPress collects by default, how
                plugins expand your data collection, what GDPR and CCPA
                require, and how to use the built-in WordPress privacy tools
                to get compliant.
              </p>

              {/* Section 1: The Short Answer */}
              <section id="short-answer" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Short Answer: Yes, Your WordPress Site Needs One
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Every WordPress site that collects any form of personal
                  data needs a privacy policy. Since WordPress collects
                  personal data by default through its comment system, cookie
                  handling, and user login features, this means virtually
                  every WordPress site needs one.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The requirement comes from multiple sources. Privacy laws
                  like GDPR (for EU visitors) and CCPA (for California
                  visitors) require any website that processes personal data
                  to have a privacy policy. Ad networks like Google AdSense
                  require it. Payment processors require it. Even your
                  hosting provider likely requires one in their terms of
                  service.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  WordPress itself recognized this need and added a built-in
                  Privacy Policy page generator starting with version 4.9.6.
                  The WordPress core team would not have built this feature
                  if privacy policies were optional for WordPress sites.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Yes</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Even for personal blogs
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Default</p>
                    <p className="text-xs text-slate-500 mt-1">
                      WordPress collects data out of the box
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Scale className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Legal</p>
                    <p className="text-xs text-slate-500 mt-1">
                      GDPR and CCPA require it
                    </p>
                  </div>
                </div>

                {/* Mini FAQ 1 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: My WordPress site is just a hobby blog. Do I still need one?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. If your blog is publicly accessible and collects any
                      personal data (which it does if comments are enabled or you
                      use analytics), you need a privacy policy. GDPR does not
                      have an exemption for hobby sites. The &quot;household
                      exemption&quot; only applies to purely private activities,
                      not public websites that anyone can visit.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if I disabled comments on my WordPress site?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Disabling comments removes one source of data collection,
                      but WordPress still sets cookies for logged-in users, and
                      you likely have other plugins or services that collect data.
                      If you use any analytics, have a contact form, run ads, or
                      use any plugin that interacts with user data, you still
                      need a privacy policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Why WordPress Sites Need One */}
              <section id="why-wordpress-needs-one" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why WordPress Sites Need a Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  A fresh WordPress installation, with no plugins and no
                  customization, already collects personal data in four
                  distinct ways. Understanding these default data collection
                  points is the first step to building a compliant privacy
                  policy.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  1. Comments
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  When someone leaves a comment on your WordPress site,
                  WordPress stores their name, email address, website URL (if
                  provided), the comment content, and their IP address. The IP
                  address is stored to help with spam detection. This data is
                  kept in your WordPress database indefinitely by default.
                  Names, email addresses, and IP addresses are all personal
                  data under GDPR.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  2. Cookies
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  WordPress sets several cookies by default. For logged-in
                  users, it sets authentication cookies (wordpress_logged_in,
                  wordpress_sec) that persist across sessions. For commenters
                  who check the &quot;save my name and email&quot; box,
                  WordPress sets cookies that store their name, email, and
                  website URL for 347 days. These cookies contain personal
                  data and must be disclosed in your privacy policy.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  3. Gravatar
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  WordPress sends commenter email addresses (as MD5 hashes)
                  to Gravatar.com (owned by Automattic) to fetch avatar
                  images. This is a third-party data transfer that happens
                  automatically unless you disable it. Under GDPR, sending
                  hashed email addresses to a third-party service constitutes
                  personal data processing that requires disclosure and
                  potentially user consent.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  4. Login and User Accounts
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  If your WordPress site has user registration enabled,
                  WordPress stores usernames, email addresses, passwords
                  (hashed), display names, and session tokens. The login
                  system sets authentication cookies and tracks session data.
                  Even if only you log in as the admin, WordPress still
                  processes personal data through the login system.
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
                        WordPress stores commenter IP addresses in the
                        wp_comments table by default. Under GDPR, IP addresses
                        are considered personal data because they can identify or
                        help identify an individual. Many WordPress site owners
                        do not realize their database contains years of stored IP
                        addresses from every comment ever posted on their site.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Plugin Data Collection */}
              <section id="plugin-data" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Plugin Data Collection
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Most WordPress sites use plugins, and most plugins collect
                  or process personal data in some way. The following table
                  covers the most common WordPress plugin categories and what
                  personal data they typically handle.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Plugin Category
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Data Collected
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Examples
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contact Forms
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name, email, message content, IP address, submission timestamp
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WPForms, Contact Form 7, Gravity Forms
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Page views, IP address, device info, location, browsing behavior
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Google Analytics, Jetpack Stats, Matomo
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Ecommerce
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name, address, email, payment details, order history, account data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          WooCommerce, Easy Digital Downloads
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Email Marketing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email address, name, subscription preferences, open/click tracking
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Mailchimp, ConvertKit, MailPoet
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Security
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          IP addresses, login attempts, blocked requests, user agent strings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Wordfence, Sucuri, iThemes Security
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          SEO
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Search queries, page performance data, social sharing data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yoast SEO, Rank Math, All in One SEO
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Caching / CDN
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          IP addresses, request headers, geographic location data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Cloudflare, WP Rocket, W3 Total Cache
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Social Sharing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Social profiles, sharing activity, cookies from social networks
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Social Warfare, AddToAny, ShareThis
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The key takeaway: every plugin you install potentially adds
                  to your privacy policy obligations. When you add a new
                  plugin, check whether it collects, stores, or transmits
                  personal data. If it does, your privacy policy must be
                  updated to reflect this.
                </p>

                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 my-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">
                        Important
                      </p>
                      <p className="text-sm text-slate-700">
                        Many WordPress plugins now include privacy policy
                        suggestions through the WordPress Privacy Policy Guide
                        system. When you visit Settings &gt; Privacy in your
                        dashboard, plugins that support this feature will add
                        their suggested text automatically. Always check this
                        page after installing new plugins.
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
                        The average WordPress site has between 20 and 30
                        active plugins installed. Even if each plugin only
                        collects a small amount of data, the cumulative effect
                        means your site could be processing dozens of different
                        personal data points. A thorough plugin audit is
                        essential before writing your privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: GDPR/CCPA Requirements */}
              <section id="gdpr-ccpa" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  GDPR and CCPA Requirements for WordPress Sites
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Two major privacy laws affect most WordPress sites: the
                  European Union&apos;s General Data Protection Regulation
                  (GDPR) and the California Consumer Privacy Act (CCPA).
                  Since WordPress sites are accessible globally, you likely
                  have visitors from both jurisdictions.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  GDPR Requirements
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Applies to:</strong> Any WordPress site that has
                      visitors from the EU, regardless of where the site owner
                      is located.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy must include:</strong> What data
                      you collect, the legal basis for processing, how long you
                      retain data, who you share it with, and user rights
                      (access, rectification, erasure, portability).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cookie consent:</strong> You must obtain consent
                      before setting non-essential cookies. WordPress comment
                      cookies and analytics cookies require consent under GDPR.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Penalties:</strong> Up to 20 million euros or 4%
                      of annual global revenue, whichever is higher.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  CCPA Requirements
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Applies to:</strong> Businesses with California
                      visitors that meet revenue or data-volume thresholds
                      ($25M+ revenue, 100K+ consumers/households, or 50%+
                      revenue from selling personal information).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy must include:</strong> Categories
                      of personal information collected, purposes of
                      collection, categories of third parties data is shared
                      with, and consumer rights (know, delete, opt-out).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>&quot;Do Not Sell&quot; link:</strong> If you
                      sell personal information (including sharing data with ad
                      networks), you must provide a &quot;Do Not Sell My
                      Personal Information&quot; link.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Penalties:</strong> Up to $7,500 per intentional
                      violation and $2,500 per unintentional violation.
                    </span>
                  </li>
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      GDPR Fine
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Up to 20M euros
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Or 4% of annual global revenue
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      CCPA Fine
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Up to $7,500/violation
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Per intentional violation, no cap on total
                    </p>
                  </div>
                </div>

                {/* Mini FAQ 2 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does GDPR apply to my small WordPress blog?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      GDPR applies based on where your visitors are from, not
                      the size of your website or business. If even one visitor
                      from the EU reads your blog and leaves a comment, you are
                      processing personal data of an EU resident. There is no
                      small business exemption under GDPR. The practical
                      approach is to assume you have EU visitors and comply
                      from the start.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: I am based in the US. Do I still need to comply with GDPR?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes, if your WordPress site is accessible to EU visitors,
                      which it almost certainly is. GDPR applies to any
                      organization that processes personal data of individuals
                      in the EU, regardless of where the organization is
                      located. Since WordPress sites are publicly accessible
                      worldwide, compliance is the safest approach.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: WordPress Privacy Tools Built-in */}
              <section id="wordpress-privacy-tools" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  WordPress Privacy Tools Built-in
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  WordPress recognized the importance of privacy compliance
                  and added several built-in privacy tools starting with
                  version 4.9.6. These tools help site owners create privacy
                  policies and manage user data requests.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Privacy Policy Page Generator
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Found under Settings &gt; Privacy, this tool creates a
                        starter privacy policy page with suggested text covering
                        comments, media, cookies, embedded content, and
                        analytics. Plugins can add their own suggested text
                        sections. You must customize the template to match your
                        specific site.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Personal Data Export Tool
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Found under Tools &gt; Export Personal Data, this tool
                        lets you export all personal data WordPress holds about
                        a specific user or email address. This helps you comply
                        with GDPR&apos;s right of access (Article 15) and right
                        to data portability (Article 20). The export includes
                        comments, user account data, and data from compatible
                        plugins.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Personal Data Erasure Tool
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Found under Tools &gt; Erase Personal Data, this tool
                        lets you delete or anonymize personal data for a
                        specific user. This helps comply with GDPR&apos;s right
                        to erasure (Article 17). WordPress anonymizes comments
                        (replacing the author name and email) and removes user
                        account data. Compatible plugins integrate with this
                        tool to erase their stored data as well.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Comment Cookie Consent Checkbox
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        WordPress added a checkbox to the comment form that asks
                        commenters if they want to save their name, email, and
                        website in cookies for the next time they comment. This
                        opt-in mechanism helps with GDPR cookie consent
                        requirements. The checkbox is enabled by default in
                        newer WordPress installations.
                      </p>
                    </div>
                  </div>
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
                        The WordPress Privacy Policy generator was added in
                        WordPress 4.9.6, which was released specifically as a
                        &quot;privacy-focused&quot; update just days before GDPR
                        took effect on May 25, 2018. The WordPress core team
                        worked closely with privacy experts to ensure the
                        built-in tools met the requirements of the new
                        regulation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Common Myths Debunked */}
              <section id="myths-debunked" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Myths Debunked
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These five myths are the most common misconceptions that
                  lead WordPress site owners to skip the privacy policy.
                  Every one of them is wrong.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My WordPress site does not collect any
                        data&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Every WordPress site collects data by default. If
                        comments are enabled, WordPress stores names, emails,
                        and IP addresses. WordPress sets cookies for logged-in
                        users. Gravatar requests send email hashes to a third
                        party. Your web server logs visitor IP addresses. Even
                        a completely default WordPress installation with no
                        plugins handles personal data.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My hosting provider&apos;s privacy policy
                        covers my site&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your hosting provider&apos;s privacy policy covers
                        their infrastructure and the hosting service they
                        provide to you. It does not cover how your WordPress
                        site collects and uses visitor data. You are the data
                        controller for your website&apos;s data processing.
                        Your hosting provider is a data processor acting on
                        your behalf. You need your own privacy policy that
                        describes your site&apos;s specific data practices.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Privacy policies are only for ecommerce
                        sites&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        While ecommerce sites like{" "}
                        <Link
                          href="/privacy-policy-for-woocommerce"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          WooCommerce stores
                        </Link>{" "}
                        collect more data (payment details, shipping addresses),
                        privacy policies are required for any website that
                        processes personal data. A simple blog with comments
                        and analytics collects personal data. An informational
                        site with a contact form collects personal data. The
                        requirement is based on data processing, not the type
                        of website.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I am too small for anyone to notice or
                        care&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        GDPR regulators have fined small businesses and
                        individuals, not just large corporations. A single
                        complaint from a visitor can trigger an investigation.
                        Beyond legal risk, not having a privacy policy reduces
                        user trust, can disqualify you from ad networks like
                        Google AdSense, and may violate your hosting
                        provider&apos;s terms of service. The cost of creating
                        a privacy policy is far less than the risk of not
                        having one.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I can just copy someone else&apos;s privacy
                        policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Copying another site&apos;s privacy policy is both
                        ineffective and potentially illegal. Their policy
                        describes their data practices, not yours. If your
                        policy does not accurately reflect how your site
                        handles data, it fails to meet GDPR requirements and
                        could be considered misleading. A privacy policy must
                        be specific to your WordPress site, covering your
                        exact plugins, services, and data practices.
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
                      Do I need a privacy policy for my WordPress site?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. WordPress collects personal data by default through
                      comments, cookies, Gravatar, and login sessions. Add in
                      plugins like analytics and contact forms, and your site
                      handles significant amounts of personal data. GDPR and
                      CCPA require a privacy policy for any site processing
                      personal data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does WordPress collect personal data by default?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. A default WordPress installation stores commenter
                      names, emails, and IP addresses. It sets authentication
                      cookies for logged-in users and commenter cookies. It
                      sends email hashes to Gravatar.com for avatar images.
                      All of this constitutes personal data processing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy for a personal WordPress blog?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, even personal{" "}
                      <Link
                        href="/do-i-need-a-privacy-policy-for-a-blog"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        blogs need a privacy policy
                      </Link>{" "}
                      if they collect personal data. If comments are enabled,
                      if you use analytics, or if you have a contact form,
                      your blog processes personal data. GDPR does not exempt
                      public-facing personal blogs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if my WordPress site lacks a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      You risk GDPR fines up to 20 million euros, CCPA
                      penalties up to $7,500 per violation, removal from ad
                      networks, and loss of user trust. Many hosting providers
                      and payment processors also require a privacy policy in
                      their terms of service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does WordPress have a built-in privacy policy tool?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Since WordPress 4.9.6, there is a Privacy Policy
                      page generator under Settings &gt; Privacy. It provides
                      a starter template, but you must customize it for your
                      specific site. WordPress also includes Personal Data
                      Export and Erasure tools for handling user data requests.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do WordPress plugins require a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Many WordPress{" "}
                      <Link
                        href="/privacy-policy-for-wordpress-plugin"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        plugins collect personal data
                      </Link>{" "}
                      and add to your privacy policy obligations. Contact
                      forms, analytics, ecommerce, email marketing, and
                      security plugins all typically process personal data
                      that must be disclosed in your privacy policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Is a privacy policy legally required for all websites?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A privacy policy is{" "}
                      <Link
                        href="/is-a-privacy-policy-legally-required"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        legally required
                      </Link>{" "}
                      for any website that processes personal data from users
                      in jurisdictions with privacy laws, which includes the
                      EU, California, Brazil, Canada, and many others. Since
                      WordPress sites are publicly accessible worldwide and
                      inherently collect personal data, virtually every
                      WordPress site needs one.
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
                      desc: "Complete guide to WordPress privacy compliance",
                    },
                    {
                      href: "/wordpress-privacy-policy-template",
                      title: "WordPress Privacy Policy Template",
                      desc: "Ready-to-use template for your WordPress site",
                    },
                    {
                      href: "/privacy-policy-for-wordpress-plugin",
                      title: "Privacy Policy for WordPress Plugins",
                      desc: "How plugins affect your privacy obligations",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-a-blog",
                      title: "Do I Need a Privacy Policy for a Blog?",
                      desc: "Privacy requirements for bloggers",
                    },
                    {
                      href: "/privacy-policy-for-woocommerce",
                      title: "Privacy Policy for WooCommerce",
                      desc: "Ecommerce-specific privacy requirements",
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
                  Your WordPress Site Needs a Privacy Policy. Get One Now.
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a missing privacy policy put your WordPress site
                  at legal risk. Generate a compliant policy tailored to your
                  site in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and WordPress-specific requirements &middot;
                  Customized for your site &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
