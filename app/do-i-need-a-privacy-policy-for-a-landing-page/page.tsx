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
  XCircle,
  Scale,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do I Need a Privacy Policy for a Landing Page? Yes, Here's Why (2026) | ultrafastutilities",
  description:
    "If your landing page collects emails, uses analytics, or runs ads, you need a privacy policy. Learn which laws apply, what to include, and how to add one to any landing page builder.",
  keywords:
    "do i need a privacy policy for a landing page, landing page privacy policy, privacy policy for lead generation, landing page gdpr, unbounce privacy policy, leadpages privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-landing-page",
  },
  openGraph: {
    title:
      "Do I Need a Privacy Policy for a Landing Page? Yes, Here's Why (2026) | ultrafastutilities",
    description:
      "If your landing page collects emails, uses analytics, or runs ads, you need a privacy policy. Learn which laws apply, what to include, and how to add one to any landing page builder.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-landing-page",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Do I Need a Privacy Policy for a Landing Page | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do I Need a Privacy Policy for a Landing Page? Yes, Here's Why (2026)",
    description:
      "If your landing page collects emails, uses analytics, or runs ads, you need a privacy policy. Learn which laws apply and what to include.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does a landing page need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your landing page collects any personal data, such as email addresses, names, phone numbers, or payment information, you need a privacy policy. Even if your landing page has no form, analytics tools like Google Analytics and advertising pixels like Meta Pixel collect personal data automatically through cookies and IP addresses. GDPR, CCPA, and CalOPPA all require a privacy policy for any page that collects personal information.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for a lead generation page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lead generation pages collect personal information by definition, typically names, email addresses, and sometimes phone numbers or company information. This data collection triggers privacy policy requirements under GDPR, CCPA, CalOPPA, and CAN-SPAM. Your privacy policy must disclose what data you collect through the form, how you will use it (including email marketing), and what rights users have regarding their data.",
      },
    },
    {
      "@type": "Question",
      name: "Does Google Ads require a privacy policy on my landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google Ads policies require that landing pages comply with applicable privacy laws and provide adequate privacy disclosures. If your landing page collects personal information, Google expects a visible privacy policy link, typically in the footer. Landing pages without a privacy policy may have their ads disapproved, and repeated violations can result in account suspension. This applies to Google Search Ads, Display Ads, and Performance Max campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I put a privacy policy on a single-page landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard approach is to add a privacy policy link in the footer of your landing page. This link can open a separate page hosted on the same domain, a modal or popup overlay on the same page, or link to your main website's privacy policy if the landing page is a subdomain or subdirectory. Google Ads specifically looks for a footer link. Some landing page builders like Unbounce, Leadpages, and Carrd support adding footer links or popup modals for this purpose.",
      },
    },
    {
      "@type": "Question",
      name: "Can I link to my main website's privacy policy from my landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, provided that your main website's privacy policy accurately covers the data collection practices on your landing page. If your landing page uses different tools or collects different types of data than your main site, the main site's policy may not be adequate. The safest approach is to ensure your main site's policy explicitly covers landing page data collection, or to create a dedicated landing page privacy policy that addresses the specific tools and forms used.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if my landing page only collects emails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Email addresses are personal data under GDPR, CCPA, and virtually every other privacy law. Collecting even a single email address triggers the requirement for a privacy policy. Your policy must disclose that you collect email addresses, explain the purpose (such as marketing or newsletters), identify the email service provider you use (Mailchimp, ConvertKit, etc.), and explain how users can unsubscribe or request deletion of their data.",
      },
    },
    {
      "@type": "Question",
      name: "What analytics tools on my landing page require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any analytics or tracking tool that collects user data requires disclosure in your privacy policy. Common tools on landing pages include Google Analytics (GA4), Meta Pixel (Facebook Pixel), Google Ads conversion tracking, LinkedIn Insight Tag, TikTok Pixel, Hotjar or Microsoft Clarity for heatmaps, and UTM parameter tracking. Each of these tools collects personal data such as IP addresses, device identifiers, and browsing behavior, all of which must be disclosed.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Add a Privacy Policy to Your Landing Page",
  description:
    "Follow these six steps to add a compliant privacy policy to any landing page, regardless of which builder you use.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit all data collection on your landing page",
      text: "Document every piece of data your landing page collects. Include form fields (name, email, phone, company), analytics tools (Google Analytics, Meta Pixel), advertising pixels (Google Ads, LinkedIn), cookies set by your landing page builder, and any payment processing. Many landing page builders set their own cookies automatically, so check your builder's documentation.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Generate a privacy policy that covers your landing page practices",
      text: "Use a privacy policy generator to create a policy that accurately reflects your landing page's data collection. Specify each analytics tool, each form field type, each third-party service that receives data, and whether you use the collected data for email marketing. The generator will produce a policy with all required disclosures for GDPR, CCPA, and CalOPPA.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Host the privacy policy on an accessible URL",
      text: "Publish your privacy policy on a URL that is accessible to all visitors. Options include a separate page on the same domain, a page on your main website's domain, or a dedicated privacy policy page on your landing page builder. Ensure the page loads quickly and is not behind any login or paywall.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add a footer link on your landing page",
      text: "Add a clearly visible privacy policy link in the footer of your landing page. This is the standard placement that both Google Ads and privacy regulators expect. Most landing page builders have a footer section or allow custom HTML where you can add this link. The link text should say 'Privacy Policy' and be easy to find.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add a consent checkbox to your lead capture form",
      text: "If you serve visitors from the EU or UK, add an unchecked consent checkbox to your lead capture form that says something like 'I agree to the Privacy Policy' with a link to the policy. GDPR requires affirmative consent, so the checkbox must not be pre-checked. This protects you legally and demonstrates that users actively consented to your data collection.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Implement a cookie consent banner for EU visitors",
      text: "If your landing page uses analytics or advertising cookies and serves EU or UK visitors, add a cookie consent banner. This banner should appear before any non-essential cookies are set. It must give users the option to accept or reject cookies, and it should link to your privacy policy. Many landing page builders integrate with consent management platforms like CookieYes or Termly.",
    },
  ],
};

const tocSections = [
  { id: "does-it-need-one", title: "Does a Landing Page Need a Privacy Policy?" },
  { id: "what-they-collect", title: "What Landing Pages Typically Collect" },
  { id: "builder-comparison", title: "Landing Page Builders and Data Collection" },
  { id: "google-ads-requirement", title: "Google Ads Privacy Requirements" },
  { id: "where-to-put-it", title: "Where to Put It on a Landing Page" },
  { id: "common-mistakes", title: "Common Landing Page Privacy Mistakes" },
  { id: "how-to-add", title: "How to Add a Privacy Policy (6 Steps)" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function DoINeedAPrivacyPolicyForALandingPagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do I Need a Privacy Policy for a Landing Page? Yes, Here's Why (2026)",
            description:
              "If your landing page collects emails, uses analytics, or runs ads, you need a privacy policy. Learn which laws apply, what to include, and how to add one to any landing page builder.",
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
                name: "Do I Need a Privacy Policy for a Landing Page?",
                item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-landing-page",
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
                Privacy Policy for a Landing Page
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-700 text-xs font-medium mb-6">
                <AlertTriangle className="w-3.5 h-3.5" />
                Landing Page Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Landing Page?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes. If your landing page collects email addresses, runs
                analytics, uses advertising pixels, or processes payments,
                you are collecting personal data and you need a privacy
                policy. This applies even if your page is a single URL with
                just one form.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For marketers, business owners, and developers running lead
                generation pages, sales funnels, and campaign landing pages.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: April 2026 &middot; Reviewed for GDPR, CCPA &amp;
                CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/do-i-need-a-privacy-policy-for-collecting-emails"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Email Collection Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-carrd"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Carrd
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
                    Need a landing page policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Covers forms, analytics, and ad pixels
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
                  <strong>Yes, landing pages need a privacy policy if they collect any personal data.</strong>{" "}
                  Most landing pages collect email addresses through forms, track
                  visitors with analytics tools like Google Analytics, and run
                  advertising pixels like Meta Pixel. All of this constitutes
                  personal data collection under GDPR, CCPA, and CalOPPA,
                  requiring a privacy policy even for a single-page site.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Landing pages are designed to do one thing: convert visitors
                into leads or customers. They collect email addresses, phone
                numbers, payment information, and more. They run analytics
                to measure performance. They fire advertising pixels to track
                conversions. Every one of these activities involves collecting
                personal data from your visitors.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                Many marketers and business owners assume that because a
                landing page is &quot;just one page,&quot; privacy laws do
                not apply. This is incorrect. Privacy laws like GDPR, CCPA,
                and CalOPPA apply based on what data you collect, not how
                many pages your site has. A single landing page with an
                email capture form and Google Analytics is collecting
                personal data from every visitor, and that collection
                triggers legal requirements.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide explains exactly when a landing page requires a
                privacy policy, what specific data collection activities
                trigger the requirement, how different landing page builders
                handle data collection behind the scenes, and how to add a
                compliant privacy policy to any landing page in minutes.
              </p>

              {/* Section 1: Does a Landing Page Need One? */}
              <section id="does-it-need-one" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Does a Landing Page Need a Privacy Policy?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Yes, if it collects any personal data. And in practice,
                  almost every landing page does. Here are the most common
                  ways landing pages collect personal data, many of which
                  happen automatically without the page owner realizing it.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Form Submissions
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  The most obvious data collection on a landing page is the
                  lead capture form. When a visitor enters their name, email
                  address, phone number, or any other personal information,
                  that data is personal data under every major privacy law.
                  GDPR defines personal data as any information relating to
                  an identified or identifiable person. An email address is
                  one of the clearest examples.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Analytics and Tracking
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Even if your landing page has no form at all, analytics
                  tools collect personal data. Google Analytics (GA4)
                  collects IP addresses, device information, browser type,
                  screen resolution, geographic location, and behavioral
                  data about how visitors interact with your page. Under
                  GDPR, IP addresses are explicitly classified as personal
                  data. The Meta Pixel, Google Ads conversion tag, and
                  other advertising scripts collect similar information.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Advertising Pixels
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Landing pages that run paid advertising almost always
                  include conversion tracking pixels. The Meta Pixel tracks
                  visitor actions and matches them to Facebook user profiles.
                  The Google Ads conversion tag tracks whether ad clicks
                  result in form submissions or purchases. LinkedIn Insight
                  Tag, TikTok Pixel, and Twitter Pixel all do similar
                  things. Each of these scripts collects personal data from
                  your visitors and sends it to a third party.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Cookies and Session Data
                </h3>
                <p className="text-slate-700 leading-7 mb-6">
                  Landing page builders themselves set cookies for session
                  management, A/B testing, and performance tracking. Your
                  hosting provider logs IP addresses. Even without any
                  deliberate data collection on your part, your landing page
                  infrastructure is collecting personal data from visitors
                  the moment the page loads.
                </p>

                {/* Inline mini-FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if my landing page has no form?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      If your landing page uses any analytics tool,
                      advertising pixel, or sets cookies, it is still
                      collecting personal data. IP addresses and device
                      identifiers are personal data under GDPR. Even a
                      form-free landing page with Google Analytics needs a
                      privacy policy.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does a landing page with only a &quot;Buy Now&quot;
                      button need a privacy policy?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. If the button redirects to a payment processor
                      like Stripe or PayPal, those services collect personal
                      data. If you track clicks with analytics, that
                      collects data too. The payment processor&apos;s data
                      collection on your behalf still requires disclosure in
                      your privacy policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: What Landing Pages Collect */}
              <section id="what-they-collect" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Landing Pages Typically Collect
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Most landing pages collect far more data than their
                  owners realize. Here is a comprehensive breakdown of the
                  personal data commonly collected on landing pages, both
                  actively through forms and passively through scripts and
                  infrastructure.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Data Source
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Data Collected
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Collection Method
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Privacy Impact
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Lead capture forms
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Names, email addresses, phone numbers, company
                          names, job titles
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Active (user submits)
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          High
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Google Analytics (GA4)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          IP addresses, device info, location, page views,
                          session duration, referral source
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Passive (automatic)
                        </td>
                        <td className="px-4 py-3 text-orange-700 font-medium">
                          Medium
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Meta Pixel (Facebook)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Browsing behavior, conversion events, device
                          identifiers, matched to Facebook profiles
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Passive (automatic)
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          High
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Google Ads conversion
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Click IDs, conversion actions, device data,
                          geographic location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Passive (automatic)
                        </td>
                        <td className="px-4 py-3 text-orange-700 font-medium">
                          Medium
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Payment processing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Credit card numbers, billing addresses, transaction
                          details
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Active (user submits)
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Very High
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Cookies (builder + tools)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Session IDs, A/B test variants, user preferences,
                          return visitor tracking
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Passive (automatic)
                        </td>
                        <td className="px-4 py-3 text-orange-700 font-medium">
                          Medium
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          IP addresses via hosting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          IP addresses, access timestamps, user agent strings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Passive (server logs)
                        </td>
                        <td className="px-4 py-3 text-orange-700 font-medium">
                          Medium
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
                        The Meta Pixel alone can match visitor behavior on
                        your landing page to specific Facebook user profiles,
                        even if the visitor never interacts with your form.
                        This creates a direct link between a visitor&apos;s
                        identity and their behavior on your page. Under GDPR,
                        this constitutes processing of personal data and
                        requires explicit consent in the EU, plus full
                        disclosure in your privacy policy.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The key takeaway is that data collection on a landing page
                  goes far beyond the visible form fields. The scripts
                  running in the background, the cookies being set, and the
                  server logs being generated all constitute personal data
                  collection. Your privacy policy must account for all of
                  this, not just the data visitors consciously provide.
                </p>
              </section>

              {/* Section 3: Builder Comparison */}
              <section id="builder-comparison" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Landing Page Builders and Their Data Collection
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Different landing page builders collect different types of
                  data automatically, beyond whatever you explicitly add to
                  your forms. Understanding what your builder collects is
                  essential for writing an accurate privacy policy.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Builder
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Built-in Data Collection
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Privacy Policy Support
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Unbounce
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Session cookies, A/B test tracking, Smart Traffic
                          AI optimization, visitor analytics, form
                          submission data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Footer section supports privacy policy links. Does
                          not generate a policy for you.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Leadpages
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Analytics tracking, conversion tracking, session
                          cookies, Leadmeter performance data, form
                          submission data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Built-in footer link option. Templates include
                          privacy policy link placeholder.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Instapage
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Heatmaps, A/B testing data, session recordings (on
                          some plans), analytics, form submission data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Footer customization available. Custom HTML for
                          policy links.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Carrd
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Minimal built-in tracking. Form submission data
                          sent to connected services (Mailchimp, Google
                          Sheets, etc.)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Footer container supports links. Pro plan allows
                          custom code for consent banners.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          ClickFunnels
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Funnel analytics, page view tracking, order
                          tracking, affiliate cookies, session data, payment
                          processing data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Footer section in page editor. Templates often
                          include policy link placeholders.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Webflow
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Hosting analytics, form submission data, session
                          cookies, CMS data if applicable
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Full design control. Can create a dedicated privacy
                          policy page or modal.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The important point is that every landing page builder
                  collects some data automatically, independent of what you
                  add to your forms. Unbounce&apos;s Smart Traffic feature,
                  for example, uses machine learning to route visitors to
                  the best-performing page variant, which requires collecting
                  and processing visitor data. Instapage&apos;s heatmap
                  feature records mouse movements and click patterns. All
                  of this must be disclosed in your privacy policy.
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
                        Many landing page builders integrate with dozens of
                        third-party services through native integrations or
                        Zapier connections. Each integration that receives
                        visitor data (email service providers, CRM systems,
                        SMS platforms) is a data processor that must be
                        disclosed in your privacy policy. A landing page
                        connected to Mailchimp, Salesforce, and Twilio has
                        three separate third-party processors to disclose,
                        even if the visitor only sees one form field.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  When creating your privacy policy, do not just consider
                  what your form collects. Map out every integration, every
                  analytics tool, and every script running on your landing
                  page. Each one represents a data flow that needs to be
                  disclosed. If you use a privacy policy generator, make
                  sure to include all of these services when answering the
                  questionnaire.
                </p>
              </section>

              {/* Section 4: Google Ads Requirement */}
              <section id="google-ads-requirement" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Google Ads and Privacy Policy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If you are driving traffic to your landing page through
                  Google Ads (formerly Google AdWords), there is an
                  additional layer of privacy requirements. Google Ads
                  policies require that landing pages comply with applicable
                  privacy laws and provide adequate privacy disclosures.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  This is separate from AdSense. AdSense is for publishers
                  who display ads on their site. Google Ads is for
                  advertisers who run ads that send traffic to their landing
                  pages. Both have privacy policy requirements, but they
                  apply in different contexts. If you are running Google Ads
                  campaigns that point to a landing page, Google expects
                  that landing page to have a visible privacy policy.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Google Ads Checks
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Google Ads reviews landing pages as part of its ad
                  approval process. Ads can be disapproved if the landing
                  page does not meet Google&apos;s requirements. While
                  Google does not publish an exhaustive checklist, their
                  policies state that landing pages must provide &quot;a
                  clear and accurate privacy policy&quot; when collecting
                  personal information. In practice, this means having a
                  visible privacy policy link, typically in the footer,
                  that leads to a page explaining your data practices.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Consequences of Non-Compliance
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  If Google Ads disapproves your ad for a landing page policy
                  violation, the ad stops running until you fix the issue.
                  Repeated violations can escalate to warnings and
                  eventually account suspension. For businesses that depend
                  on Google Ads for lead generation, losing ad access even
                  temporarily can be very costly. Adding a privacy policy to
                  your landing page before launching your campaign prevents
                  this entirely.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Meta Ads (Facebook and Instagram) Requirements
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Meta&apos;s advertising platform also has privacy
                  requirements. If you use the Meta Pixel on your landing
                  page, Meta&apos;s terms require you to disclose this in
                  your privacy policy. If you use Custom Audiences or
                  Conversions API, you must inform users that their data may
                  be shared with Meta for advertising purposes. Landing
                  pages running Meta ads without proper privacy disclosures
                  risk ad account restrictions.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  The bottom line: if you are spending money on ads to drive
                  traffic to your landing page, the ad platforms themselves
                  require you to have a privacy policy on that landing page.
                  This is true for Google Ads, Meta Ads, LinkedIn Ads,
                  TikTok Ads, and most other major advertising platforms. A
                  privacy policy is not just a legal requirement. It is an
                  operational necessity for running paid campaigns.
                </p>
              </section>

              {/* Section 5: Where to Put It */}
              <section id="where-to-put-it" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Where to Put a Privacy Policy on a Landing Page
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Landing pages present a unique challenge for privacy
                  policies. Unlike a full website with multiple pages and a
                  consistent footer navigation, a landing page is often a
                  single page designed to minimize distractions and maximize
                  conversions. Adding a privacy policy link without
                  disrupting the user experience requires some thought.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Option 1: Footer Link (Recommended)
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  The most common and most recommended approach is to add a
                  small privacy policy link in the footer of your landing
                  page. This is the standard placement that Google Ads
                  reviewers look for, that privacy regulators expect, and
                  that users are accustomed to finding. The link should say
                  &quot;Privacy Policy&quot; and lead to your full privacy
                  policy document. Footer links do not typically impact
                  conversion rates because they are below the fold and
                  visible only to users who scroll to the bottom.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Option 2: Separate Hosted Page
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Create a dedicated privacy policy page on the same domain
                  as your landing page. For example, if your landing page is
                  at example.com/offer, host your privacy policy at
                  example.com/privacy-policy. This is clean, professional,
                  and gives you full control over the policy content. Most
                  landing page builders allow you to create additional pages
                  that are not part of your main funnel.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Option 3: Modal or Popup
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Some marketers prefer to display the privacy policy in a
                  modal or popup overlay. The footer link says &quot;Privacy
                  Policy,&quot; and clicking it opens a popup with the full
                  text instead of navigating away from the landing page.
                  This keeps the visitor on the page and avoids any risk of
                  losing them during the conversion process. However, make
                  sure the popup is easily scrollable and the full text is
                  accessible.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Option 4: Link to Main Website Policy
                </h3>
                <p className="text-slate-700 leading-7 mb-6">
                  If your landing page is a subdomain or subdirectory of
                  your main website, you can link to the privacy policy on
                  your main site. For example, if your landing page is at
                  offers.example.com and your main site has a policy at
                  example.com/privacy, you can link to it. However, make
                  sure the main site&apos;s policy accurately covers the
                  data collection happening on the landing page, including
                  any tools or integrations specific to that page.
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
                        Google Ads specifically checks for a privacy policy
                        link in the footer of landing pages that collect
                        personal information. If Google&apos;s automated
                        review system cannot find a privacy policy link on
                        your landing page, your ad may be disapproved for
                        &quot;Destination requirements&quot; violations.
                        Adding a visible footer link before launching your
                        campaign prevents this common rejection reason.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Will adding a privacy policy link hurt my conversion
                      rate?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No. Studies consistently show that footer links to
                      privacy policies have no measurable impact on
                      conversion rates. In fact, having a privacy policy
                      link can increase trust and conversions for users who
                      are privacy-conscious. The link is small, unobtrusive,
                      and expected by modern internet users.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Should I add a consent checkbox to my form?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      If you serve visitors from the EU or UK, yes. GDPR
                      requires affirmative consent for data processing. An
                      unchecked checkbox that says &quot;I agree to the
                      Privacy Policy&quot; with a link to your policy
                      satisfies this requirement. For non-EU visitors, it is
                      still a best practice but not always legally required.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Landing Page Privacy Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are the five most common misconceptions about privacy
                  policies and landing pages, and why each one can lead to
                  legal problems, ad disapprovals, or both.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;It&apos;s just one page, not a real
                        website.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Privacy laws do not distinguish between
                        single-page sites and multi-page websites. GDPR
                        applies to any entity that processes personal data
                        of EU residents. CCPA applies to any business that
                        collects personal information from California
                        residents. CalOPPA applies to any commercial website
                        or app that collects personal information. The
                        number of pages on your site is irrelevant. What
                        matters is what data you collect.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I only collect emails, that&apos;s not
                        personal data.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Email addresses are one of the clearest
                        examples of personal data under every major privacy
                        law. GDPR defines personal data as any information
                        relating to an identified or identifiable natural
                        person. An email address directly identifies an
                        individual. Collecting even a single email address
                        triggers the requirement for a privacy policy that
                        discloses how you collect, use, store, and protect
                        that data.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My ad platform handles compliance.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Ad platforms like Google Ads and Meta Ads
                        have their own privacy practices and compliance
                        programs, but these do not extend to your landing
                        page. You are the data controller for the personal
                        information collected on your landing page. The ad
                        platform is either a separate controller or a
                        processor, depending on the data flow. Either way,
                        you have your own independent obligation to disclose
                        your data practices in a privacy policy.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Landing pages are temporary so policies
                        don&apos;t apply.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: The duration a page is online has no bearing
                        on privacy law obligations. A landing page that is
                        live for one day collects the same types of personal
                        data as a page that runs for a year. GDPR applies
                        from the moment you process personal data, not after
                        a certain time period. Furthermore, your obligations
                        regarding the data you collected continue even after
                        you take the landing page down. You must still
                        honor data subject access requests and deletion
                        requests for the data collected during the
                        campaign.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I&apos;ll add one when I get more
                        traffic.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Privacy laws do not have traffic thresholds.
                        GDPR applies if you process personal data of even
                        one EU resident. CalOPPA applies to any commercial
                        website with any California visitors. If your landing
                        page is live and collecting data from a single
                        visitor, you need a privacy policy. Waiting until
                        you have more traffic means you are collecting data
                        without proper disclosure from day one, which is
                        non-compliant from the start and also risks Google
                        Ads disapprovals that delay your campaign launch.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: How to Add */}
              <section id="how-to-add" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Add a Privacy Policy to Your Landing Page (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these steps to create and add a compliant privacy
                  policy to any landing page, regardless of which builder
                  you use.
                </p>

                <div className="space-y-5">
                  {/* Step 1 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit all data collection on your landing page
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        List every piece of data your landing page collects.
                        Start with your form fields (name, email, phone,
                        company). Then list every analytics tool (Google
                        Analytics, Hotjar, Microsoft Clarity). Then list
                        every advertising pixel (Meta Pixel, Google Ads
                        conversion, LinkedIn Insight Tag). Finally, check
                        what cookies your landing page builder sets
                        automatically. This complete inventory is the
                        foundation of your privacy policy.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Generate a privacy policy covering your practices
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Use a privacy policy generator that allows you to
                        specify each analytics tool, form type, and
                        third-party service. Indicate that you collect data
                        through forms, use specific analytics tools, and
                        employ advertising pixels. The generator will produce
                        a policy that includes all required disclosures for
                        GDPR, CCPA, CalOPPA, and platform-specific
                        requirements. This takes under five minutes and
                        costs a fraction of a lawyer.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Host the policy on an accessible URL
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Publish your privacy policy so it is accessible to
                        anyone. Options: create a new page in your landing
                        page builder (e.g., example.com/privacy), add it to
                        your main website (example.com/privacy-policy), or
                        use a privacy policy hosting service. The page must
                        load for all visitors, must not be behind a login,
                        and must be on an HTTPS URL.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add a footer link on your landing page
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add a &quot;Privacy Policy&quot; link to the footer
                        of your landing page. In Unbounce, use the footer
                        section of the page builder. In Leadpages, add a text
                        element with a hyperlink in the footer area. In
                        Carrd, use a container at the bottom of your page.
                        In ClickFunnels, add an element to the footer row.
                        In Webflow, add a link in your footer component. The
                        link should be small but clearly visible.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add a consent checkbox for EU visitors
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If you serve visitors from the EU or UK, add an
                        unchecked consent checkbox to your lead capture form.
                        The label should read something like &quot;I agree to
                        the Privacy Policy&quot; with &quot;Privacy
                        Policy&quot; linked to your policy page. GDPR
                        requires this checkbox to be unchecked by default.
                        Pre-checked consent boxes are not valid under GDPR.
                        This checkbox also serves as evidence that the user
                        actively consented to your data collection.
                      </p>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Implement a cookie consent banner for EU visitors
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If your landing page sets non-essential cookies
                        (analytics, advertising) and serves EU or UK
                        visitors, add a cookie consent banner. The banner
                        should appear before any non-essential cookies are
                        loaded. It must provide accept and reject options.
                        Many tools integrate with landing page builders:
                        CookieYes, Termly, and CookieBot all offer
                        embeddable consent banners that work with Unbounce,
                        Leadpages, and other builders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-700">
                    <strong>Shortcut:</strong> A privacy policy generator
                    walks you through steps 1 and 2 automatically. You
                    answer questions about your landing page&apos;s data
                    collection, and it generates a complete policy. Then you
                    just need to host it (step 3) and add the links (steps
                    4-6). The entire process takes under ten minutes.{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      Generate your landing page privacy policy
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    .
                  </p>
                </div>

                {/* Inline CTA */}
                <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Launch Your Campaign with Confidence
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Do not risk ad disapprovals or legal issues. Generate
                        a privacy policy tailored to your landing page&apos;s
                        specific tools, forms, and integrations in under
                        60 seconds.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My Landing Page Policy
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
                      Does a landing page need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. If your landing page collects any personal data,
                      including email addresses, names, phone numbers, or
                      even IP addresses through analytics tools, you need a
                      privacy policy. GDPR, CCPA, and CalOPPA all require
                      it. Even a single-page site with one form and Google
                      Analytics is collecting enough personal data to
                      trigger the requirement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy for a lead generation page?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Lead generation pages collect personal
                      information by definition. Names, email addresses, and
                      phone numbers are all personal data. Your privacy
                      policy must disclose what data you collect through the
                      form, how you will use it (including email marketing),
                      which third-party services receive the data, and what
                      rights users have regarding their information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Google Ads require a privacy policy on my landing
                      page?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Google Ads policies require landing pages that
                      collect personal information to have a visible privacy
                      policy link, typically in the footer. Ads pointing to
                      landing pages without adequate privacy disclosures
                      may be disapproved. Repeated violations can result in
                      account suspension. Adding a privacy policy before
                      launching your campaign prevents these issues.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Where should I put a privacy policy on a landing page?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The standard placement is a link in the footer of your
                      landing page. This can open a separate page on the
                      same domain, a popup or modal overlay, or link to your
                      main website&apos;s privacy policy. Google Ads
                      specifically looks for footer links during ad review.
                      Most landing page builders (Unbounce, Leadpages, Carrd,
                      ClickFunnels, Webflow) support adding footer links.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can I link to my main website&apos;s privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, provided that your main site&apos;s privacy
                      policy accurately covers the data collection on your
                      landing page. If your landing page uses different
                      tools or collects different data than your main site,
                      the main policy may not be adequate. The safest
                      approach is to ensure the main policy explicitly
                      covers landing page data collection, or to create a
                      separate policy for the landing page.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy if I only collect emails?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Email addresses are personal data under GDPR,
                      CCPA, and every other major privacy law. Collecting a
                      single email address triggers the requirement. Your
                      policy must disclose that you collect emails, explain
                      why (marketing, newsletters), identify your email
                      service provider (Mailchimp, ConvertKit, etc.), and
                      explain how users can unsubscribe or request data
                      deletion.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What analytics tools on my landing page require
                      disclosure?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Any analytics or tracking tool that collects user data
                      must be disclosed. This includes Google Analytics
                      (GA4), Meta Pixel, Google Ads conversion tracking,
                      LinkedIn Insight Tag, TikTok Pixel, Hotjar, Microsoft
                      Clarity, and UTM parameter tracking. Each of these
                      tools collects personal data such as IP addresses,
                      device identifiers, and browsing behavior.
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
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                      title: "Privacy Policy for Email Collection",
                      desc: "What you must disclose when building an email list",
                    },
                    {
                      href: "/privacy-policy-for-carrd",
                      title: "Privacy Policy for Carrd",
                      desc: "How to add a privacy policy to Carrd sites",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-a-blog",
                      title: "Privacy Policy for a Blog",
                      desc: "Complete guide for bloggers and content publishers",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "A comprehensive guide for standard website operators",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "Compliant GDPR template with all required disclosures",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      title: "Cookie Policy for Websites",
                      desc: "Everything you need to know about cookie disclosures",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      title: "Can I Copy Someone Else's Privacy Policy?",
                      desc: "Why copying is both illegal and non-compliant",
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
                  Launch Compliant. Convert More.
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a missing privacy policy delay your campaign or
                  get your ads disapproved. Generate a policy tailored to
                  your landing page&apos;s specific tools, forms, and
                  integrations in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Landing Page Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA &amp; CalOPPA &middot; Works with any
                  landing page builder &middot; Ready in 60 seconds
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
