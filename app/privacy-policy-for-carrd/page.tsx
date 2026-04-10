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
  Globe,
  Layout,
  Mail,
  CreditCard,
  BarChart3,
  Eye,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Carrd: Do You Need One? (2026) | ultrafastutilities",
  description:
    "Yes, your Carrd site needs a privacy policy if it collects any data. Learn what Carrd collects, how to add a policy to a single-page site, and which laws apply to your Carrd website.",
  keywords:
    "privacy policy for carrd, carrd privacy policy, do i need a privacy policy for carrd, carrd website privacy policy, carrd gdpr",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-carrd",
  },
  openGraph: {
    title:
      "Privacy Policy for Carrd: Do You Need One? (2026) | ultrafastutilities",
    description:
      "Yes, your Carrd site needs a privacy policy if it collects any data. Learn what Carrd collects, how to add a policy to a single-page site, and which laws apply to your Carrd website.",
    url: "https://ultrafastutilities.com/privacy-policy-for-carrd",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Carrd | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Carrd: Do You Need One? (2026)",
    description:
      "Yes, your Carrd site needs a privacy policy if it collects any data. Learn what Carrd collects, how to add a policy to a single-page site, and which laws apply.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a privacy policy for my Carrd site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if your Carrd site collects any personal data at all. This includes contact forms, email signup forms, Stripe payment integrations, embedded Google Analytics, Facebook Pixel tracking, YouTube video embeds, or any third-party widget that sets cookies. Even a simple link-in-bio page with an email signup form is collecting personal data and needs a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does Carrd itself collect data from my visitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Carrd's hosting infrastructure automatically collects certain data from visitors to your site, including IP addresses, browser type, and basic access logs. If you use Carrd's built-in analytics feature, additional behavioral data is collected. This means even a completely static Carrd page without any forms or integrations has some data collection happening at the hosting level.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I put a privacy policy on a single-page Carrd site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You have four options for adding a privacy policy to a Carrd site. First, add a footer link that opens your policy in a new tab on a separate hosted page. Second, create a second Carrd page dedicated to your privacy policy and link to it. Third, use a Carrd modal or lightbox element to display the policy without leaving the page. Fourth, link to an externally hosted privacy policy on your own domain or a third-party host.",
      },
    },
    {
      "@type": "Question",
      name: "Does Carrd's own privacy policy cover my site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Carrd's privacy policy covers how Carrd itself handles data as a platform provider. It does not cover how you, as the site owner, handle the data you collect through your Carrd site. You are the data controller for any personal data collected through your forms, analytics, and third-party integrations. You need your own separate privacy policy that describes your specific data practices.",
      },
    },
    {
      "@type": "Question",
      name: "What laws require a privacy policy for Carrd sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several laws may apply depending on where your visitors are located, not where you are located. GDPR applies if any visitors are in the EU or UK. CCPA applies if you have California visitors and meet certain business thresholds. CalOPPA applies to any commercial website accessible by California residents. These laws apply regardless of how simple your site is or whether you consider yourself a business.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for a Carrd link-in-bio page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your link-in-bio page only contains outbound links with no forms, no analytics, and no embedded content, you may not need one. However, most link-in-bio pages include at least one email signup form, a contact form, or embedded social media content that sets cookies. If yours includes any of these elements, you need a privacy policy. When in doubt, having one protects you and builds trust with visitors.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a privacy policy for my Carrd site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest method is to use a privacy policy generator. List all the integrations on your Carrd site (forms, payments, analytics, email marketing, embedded content), answer a few questions about how you use the collected data, and the generator produces a complete, legally compliant policy. You can then add it to your Carrd site as a linked page or modal. The entire process takes under five minutes.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Carrd Site",
  description:
    "Follow these six steps to create and add a privacy policy to your Carrd website that covers all your integrations and complies with GDPR, CCPA, and CalOPPA.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "List every integration on your Carrd site",
      text: "Go through your Carrd site and document every element that collects or transmits data. This includes contact forms, email signup forms, Stripe or PayPal payment buttons, Google Analytics tracking codes, Facebook Pixel, embedded YouTube videos, and any other third-party widgets or scripts.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify what data each integration collects",
      text: "For each integration, determine exactly what personal data it receives. Email forms collect email addresses. Payment processors collect names, email addresses, and payment details. Analytics tools collect IP addresses, device information, and browsing behavior. Document each data type for each integration.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a policy that covers all the data collection you identified. Answer the questions about your specific integrations, data uses, and business details. The generator will produce a complete policy with all required legal sections.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Choose where to host your privacy policy",
      text: "Decide how to make your policy accessible. Options include creating a separate Carrd page for the policy, using a modal or lightbox element on your existing page, or hosting the policy on an external page and linking to it from your Carrd site.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add the privacy policy link to your Carrd site",
      text: "Add a clearly visible link to your privacy policy in the footer of your Carrd site. If you use forms that collect personal data, also add a brief notice near each form indicating that submissions are subject to your privacy policy, with a link to the full document.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Review and update regularly",
      text: "Set a reminder to review your privacy policy whenever you add or change an integration on your Carrd site. At minimum, review it once per year. CCPA requires annual updates, and GDPR requires your policy to be accurate at all times.",
    },
  ],
};

const tocSections = [
  { id: "does-carrd-need-policy", title: "Does Your Carrd Site Need One?" },
  { id: "what-carrd-collects", title: "What Carrd Collects Automatically" },
  { id: "integrations-table", title: "Integrations That Collect Data" },
  { id: "single-page-challenge", title: "Where to Put Your Policy" },
  { id: "which-laws-apply", title: "Which Laws Apply" },
  { id: "common-myths", title: "Common Myths Debunked" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "easiest-way", title: "The Easiest Way" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForCarrdPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Carrd: Do You Need One? (2026)",
            description:
              "Yes, your Carrd site needs a privacy policy if it collects any data. Learn what Carrd collects, how to add a policy to a single-page site, and which laws apply to your Carrd website.",
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
                name: "Privacy Policy for Carrd",
                item: "https://ultrafastutilities.com/privacy-policy-for-carrd",
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
                Privacy Policy for Carrd
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Globe className="w-3.5 h-3.5" />
                Single-Page Sites
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Carrd
                </span>
                : Do You Need One?
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes, if your Carrd site collects any personal data. That
                includes contact forms, email signups, payment buttons,
                analytics, and embedded third-party content. Here is exactly
                what you need and how to add it to a single-page site.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Carrd site owners, freelancers, creators, and anyone
                using Carrd for a landing page, portfolio, or link-in-bio.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: April 2026 &middot; Reviewed for GDPR, CCPA &amp;
                CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/do-i-need-a-privacy-policy-for-a-blog"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Blog Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Website Privacy Policy Guide
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
                    Generate one for your Carrd site in 60 seconds
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
                <span>9 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, your Carrd site needs a privacy policy if it collects any personal data.</strong>{" "}
                  Contact forms, email signups, Stripe payments, Google
                  Analytics, embedded videos, and third-party widgets all
                  collect visitor data. GDPR, CCPA, and CalOPPA require you
                  to disclose this collection regardless of how simple your
                  site is or whether you consider yourself a business.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Carrd has become the go-to platform for creators, freelancers,
                and small businesses who need a clean, single-page website
                without the complexity of traditional site builders. With
                millions of Carrd sites live today, it is one of the most
                popular tools for link-in-bio pages, portfolio sites, landing
                pages, and product launches.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                But the simplicity of Carrd creates a false sense of security
                around data privacy. Because the platform is so lightweight,
                many site owners assume their Carrd page does not collect
                enough data to need a privacy policy. That assumption is
                almost always wrong.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly when a Carrd site needs a privacy
                policy, what data Carrd and its common integrations collect,
                where to place a privacy policy on a single-page site, and
                the fastest way to generate one that covers your specific
                setup.
              </p>

              {/* Section 1: Does Your Carrd Site Need a Privacy Policy? */}
              <section id="does-carrd-need-policy" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Does Your Carrd Site Need a Privacy Policy?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The short answer is yes, for nearly every Carrd site that
                  does more than display static text and outbound links. If
                  your site includes any of the following, you are collecting
                  personal data and a privacy policy is legally required.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <Mail className="w-6 h-6 text-blue-600 mb-2" />
                    <p className="font-semibold text-slate-800 text-sm">Contact forms</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Collects names, email addresses, and message content
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <Mail className="w-6 h-6 text-blue-600 mb-2" />
                    <p className="font-semibold text-slate-800 text-sm">Email signup forms</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Sends email addresses to Mailchimp, ConvertKit, or similar
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <CreditCard className="w-6 h-6 text-blue-600 mb-2" />
                    <p className="font-semibold text-slate-800 text-sm">Stripe payments</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Processes names, email, billing addresses, and card details
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <BarChart3 className="w-6 h-6 text-blue-600 mb-2" />
                    <p className="font-semibold text-slate-800 text-sm">Google Analytics</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Tracks IP addresses, device info, and browsing behavior
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <Eye className="w-6 h-6 text-blue-600 mb-2" />
                    <p className="font-semibold text-slate-800 text-sm">Facebook Pixel</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Tracks visitor behavior for ad targeting and retargeting
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <Layout className="w-6 h-6 text-blue-600 mb-2" />
                    <p className="font-semibold text-slate-800 text-sm">Embedded content</p>
                    <p className="text-xs text-slate-500 mt-1">
                      YouTube, Vimeo, and social embeds set tracking cookies
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  If your Carrd site includes even one of these elements, you
                  are processing personal data. Privacy laws like GDPR and
                  CCPA do not have a minimum threshold for site size or
                  traffic volume. A Carrd site with 10 visitors per day has
                  the same legal obligations as one with 10,000.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  The only Carrd site that might not need a privacy policy is
                  one that is purely static: text, images, and outbound links
                  only, with no forms, no analytics, no embedded third-party
                  content, and no cookies of any kind. In practice, very few
                  Carrd sites meet this standard.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if my Carrd site is just a personal project?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Privacy laws apply based on whether you collect personal
                      data from visitors, not on whether the site is commercial.
                      GDPR applies to any entity processing personal data of
                      EU residents, regardless of profit motive. If your
                      personal Carrd site has a contact form, it needs a policy.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does a Carrd Pro account change anything?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Carrd Pro gives you access to more integrations (forms,
                      payments, custom code), which typically means more data
                      collection. A Pro account is more likely to need a privacy
                      policy because Pro features are the ones that collect data.
                      But even a free Carrd site with an embedded form widget
                      needs one.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: What Carrd Collects Automatically */}
              <section id="what-carrd-collects" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Carrd Collects Automatically
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Before you even consider your own integrations, it is
                  important to understand what Carrd itself collects from
                  visitors to your site. As a hosting platform, Carrd
                  processes certain data automatically as part of serving
                  your web pages.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Carrd Platform Data Collection
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Server access logs:</strong> IP addresses, timestamps, URLs visited, HTTP status codes, and referrer URLs are logged by Carrd&apos;s servers when a visitor loads your page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Browser information:</strong> User agent strings that identify browser type, version, operating system, and device type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Carrd analytics:</strong> If you enable Carrd&apos;s built-in site stats (Pro feature), page views, unique visitors, and traffic sources are tracked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Cookies:</strong> Carrd may set functional cookies for site operation, and additional cookies if you use Carrd&apos;s analytics or A/B testing features</span>
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
                        Under GDPR, you are considered a &quot;joint
                        controller&quot; with Carrd for the data that Carrd&apos;s
                        hosting infrastructure processes on your behalf. This
                        means your privacy policy should acknowledge that your
                        hosting provider collects certain technical data, even
                        if you have no direct access to those server logs
                        yourself.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Your Integrations vs. Carrd Platform Data
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  There is an important distinction between what Carrd
                  collects at the platform level and what your integrations
                  collect. Carrd&apos;s platform data collection is relatively
                  minimal and standard for any web host. The bigger privacy
                  concern for most Carrd site owners is the data collected by
                  the third-party services they integrate.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  When you add a Mailchimp form, a Stripe payment button, or
                  a Google Analytics tracking code to your Carrd site, those
                  services collect data directly from your visitors. You are
                  responsible for disclosing this collection in your privacy
                  policy because you chose to add these integrations. Carrd&apos;s
                  own privacy policy does not cover your third-party services.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  This is the point that catches most Carrd site owners off
                  guard. They assume that because they are using a hosted
                  platform, the platform handles all the privacy obligations.
                  It does not. Your{" "}
                  <Link
                    href="/privacy-policy-for-websites"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    website privacy policy
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>{" "}
                  must cover both the platform-level data and your own
                  integrations.
                </p>
              </section>

              {/* Section 3: Common Carrd Integrations That Collect Data */}
              <section id="integrations-table" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Carrd Integrations That Collect Data
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Every third-party service you add to your Carrd site is a
                  data processor that your privacy policy needs to disclose.
                  Here is what the most common Carrd integrations collect.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Integration
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Data Collected
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Data Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Sets Cookies?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Stripe
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name, email, billing address, card details, transaction history
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Financial
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Mailchimp
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email address, name (if collected), signup source, engagement data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contact
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          ConvertKit
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email address, name, subscriber tags, engagement metrics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contact
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Google Analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          IP address, device info, pages viewed, session duration, traffic source
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Behavioral
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Meta Pixel
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Page views, button clicks, conversions, device data, Facebook user ID
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Advertising
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Formspree / Typeform
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          All form field data (name, email, message), IP address, submission time
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contact
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Varies
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          YouTube Embeds
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          IP address, viewing history, device info, Google account data if signed in
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Behavioral
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          PayPal
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name, email, shipping address, payment details, PayPal account info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Financial
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-600 text-sm mt-4">
                  Every integration in this table must be disclosed in your
                  privacy policy. If you are using any of these on your Carrd
                  site, you can{" "}
                  <Link
                    href="/generate"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    generate a privacy policy
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>{" "}
                  that covers them in under 60 seconds.
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
                        YouTube embeds set cookies even if the visitor does not
                        click play. Google&apos;s DoubleClick advertising cookies
                        are loaded the moment the embed appears on the page.
                        You can mitigate this by using YouTube&apos;s
                        privacy-enhanced mode (youtube-nocookie.com), but you
                        still need to disclose the embed in your privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: The Single-Page Challenge */}
              <section id="single-page-challenge" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Single-Page Challenge: Where to Put Your Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Carrd sites are designed to be single-page experiences.
                  This creates a unique challenge: where do you put a privacy
                  policy that could be several pages long without disrupting
                  the clean, focused layout that makes Carrd effective?
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  There are four practical approaches, each with different
                  trade-offs.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Create a separate Carrd page for your privacy policy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        With Carrd Pro, you can create multiple sites. Build a
                        second Carrd site dedicated to your privacy policy (for
                        example, yoursite.carrd.co/privacy or a custom domain
                        like privacy.yoursite.com). Link to it from the footer
                        of your main page. This is the cleanest approach and
                        gives your policy its own dedicated URL, which is
                        helpful if third-party services require a privacy
                        policy URL during setup.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Use a Carrd modal or lightbox
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Carrd supports modal elements that open as overlays on
                        your page. You can place your entire privacy policy
                        inside a modal that opens when visitors click a
                        &quot;Privacy Policy&quot; link in your footer. This
                        keeps visitors on your page while still providing
                        access to the full policy. The downside is that
                        modals can be awkward for long documents on mobile
                        devices.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add a footer section with a link to an external page
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Host your privacy policy elsewhere (your own website,
                        a Google Doc, or a dedicated privacy policy page) and
                        add a simple text link in the footer of your Carrd
                        site that opens it in a new tab. This is the simplest
                        option and works with both free and Pro Carrd accounts.
                        The key requirement is that the link must be clearly
                        visible and accessible from every section of your page.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Embed the policy directly on your page
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        For Carrd Pro users, you can use a custom code embed
                        with an iframe that loads your privacy policy within
                        a scrollable container. This keeps everything on one
                        page but can look cluttered. This approach works best
                        if your Carrd site already has multiple sections and
                        the policy section blends naturally into the layout.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Which option is best for most Carrd users?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      For most users, option 1 (separate Carrd page) or option
                      3 (external link) is the best choice. Both give your
                      privacy policy its own URL, which is required by many
                      third-party services and makes it easy to reference in
                      email footers, form notices, and terms of service.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does my privacy policy link need to be visible without scrolling?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      It does not need to be above the fold, but it must be
                      easily accessible. A footer link is standard practice
                      and is accepted by regulators. If your Carrd site has
                      forms that collect data, consider adding a brief notice
                      near each form that links to the privacy policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Which Laws Apply */}
              <section id="which-laws-apply" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Which Laws Apply to Your Carrd Site
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  A common misconception is that privacy laws only apply
                  based on where you, the site owner, are located. In
                  reality, most privacy laws apply based on where your
                  visitors are located. Since Carrd sites are accessible
                  globally, multiple laws likely apply to your site.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Law
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Applies When
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Key Requirements
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Penalties
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          GDPR
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Any visitor from the EU or UK
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Legal basis, data categories, processor disclosure, user rights, retention periods
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Up to 20M euros or 4% of revenue
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          CCPA/CPRA
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          California visitors (if thresholds met)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Data categories, opt-out rights, annual updates, &quot;Do Not Sell&quot; link
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          $2,500 to $7,500 per violation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          CalOPPA
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Any commercial site with California visitors
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Conspicuous privacy policy, data types, third-party sharing, effective date
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          $2,500 per violation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  CalOPPA deserves special attention for Carrd site owners.
                  Unlike CCPA, CalOPPA has no revenue or data volume
                  thresholds. It applies to any commercial website or online
                  service that collects personally identifiable information
                  from California residents. Since nearly every website has
                  California visitors, CalOPPA effectively requires a privacy
                  policy for almost every commercial Carrd site.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The definition of &quot;commercial&quot; is broad. If you
                  sell anything, accept donations, promote a business, or
                  monetize your site in any way, CalOPPA applies. Even a
                  freelancer&apos;s portfolio site on Carrd that includes a
                  contact form qualifies.
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
                        CalOPPA was the first state law in the United States to
                        require commercial websites to post a privacy policy.
                        Because California is such a large market, it
                        effectively sets a national standard. If your Carrd
                        site is accessible from the internet, it almost
                        certainly has California visitors, and CalOPPA applies.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Beyond these three major laws, additional regulations may
                  apply depending on your industry and audience. If your Carrd
                  site targets children, COPPA applies. If you operate in
                  Canada, PIPEDA applies. If you collect health data, HIPAA
                  may apply. Your privacy policy needs to account for all
                  applicable laws, not just the one you are most familiar with.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  For a deeper look at the legal requirements, see our guide on{" "}
                  <Link
                    href="/what-happens-without-a-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    what happens without a privacy policy
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  .
                </p>
              </section>

              {/* Section 6: Common Myths */}
              <section id="common-myths" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Myths About Carrd and Privacy Policies
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Carrd&apos;s simplicity leads to several persistent
                  misconceptions about privacy requirements. Here are the
                  five most common myths and why they are wrong.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My Carrd is just a link-in-bio, so I do not need a privacy policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Link-in-bio pages are one of the most common uses for
                        Carrd, and most of them collect data. If your
                        link-in-bio includes an email signup form (extremely
                        common), an embedded social media feed, analytics
                        tracking, or a tip jar with Stripe, it is processing
                        personal data. The purpose of the site does not
                        determine whether privacy laws apply. Data collection
                        does.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I do not collect any data on my Carrd site&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        This is almost never true. If you have any form, any
                        analytics, any payment integration, or any embedded
                        third-party content, data is being collected. Even
                        without these, Carrd&apos;s hosting servers log IP
                        addresses and browser information for every visitor.
                        Under GDPR, IP addresses are personal data. You are
                        collecting data whether you realize it or not.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Carrd&apos;s own privacy policy covers my site&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Carrd&apos;s privacy policy describes how Carrd, the
                        company, handles data for its platform and its own
                        customers (site builders). It does not describe how
                        you handle data that visitors submit through your
                        site&apos;s forms, or what happens with the analytics
                        data you collect, or how long you store email
                        addresses from signups. You need your own policy that
                        describes your specific practices.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My site is too small to worry about privacy laws&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Privacy laws do not have a minimum traffic threshold.
                        GDPR applies to any organization processing personal
                        data of EU residents, regardless of size. CalOPPA
                        applies to any commercial site accessible by
                        California residents with no traffic minimum. The fact
                        that your Carrd site gets 50 visitors per month does
                        not exempt you from these laws. Each visitor whose data
                        you collect without proper disclosure is a potential
                        violation.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I am not a business, so this does not apply to me&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        GDPR applies to any &quot;controller&quot; or
                        &quot;processor&quot; of personal data, regardless of
                        whether the activity is commercial. If you run a
                        personal portfolio, a hobby project, or a nonprofit
                        page on Carrd and collect personal data through forms
                        or analytics, GDPR still applies. CalOPPA is narrower
                        (commercial sites only), but the definition of
                        commercial is broad enough to include freelancers,
                        creators selling digital products, and anyone
                        promoting services.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mt-4">
                  For more on what happens when you operate without a privacy
                  policy, see our guide on{" "}
                  <Link
                    href="/what-happens-without-a-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    consequences of not having a privacy policy
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  . And if you are considering copying another site&apos;s
                  policy, read{" "}
                  <Link
                    href="/can-i-copy-someone-elses-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    why that creates legal risk
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for Your Carrd Site (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these steps to create a privacy policy that covers
                  your specific Carrd site setup and complies with applicable
                  privacy laws.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        List every integration on your Carrd site
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Open your Carrd site editor and go through every
                        element. Document every form (contact, email signup,
                        survey), every payment button (Stripe, PayPal, Gumroad),
                        every analytics code (Google Analytics, Plausible,
                        Fathom), every tracking pixel (Facebook, TikTok,
                        Google Ads), and every embedded element (YouTube,
                        Vimeo, Spotify, Instagram, Twitter). Each of these is
                        a data collection point that your policy needs to cover.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Identify what data each integration collects
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        For each integration, determine exactly what personal
                        data it receives. Check the integration&apos;s own
                        documentation or privacy policy. Email forms collect
                        email addresses. Payment processors collect names,
                        emails, and financial data. Analytics tools collect
                        IP addresses, device information, and behavioral data.
                        Write down each data type for each integration.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
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
                        to create a policy that covers all the data collection
                        you identified. Answer the questions about your specific
                        integrations, how you use the data, whether you share
                        it with third parties, and your contact information.
                        The generator will produce a complete, legally compliant
                        policy with all required sections.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Choose where to host your privacy policy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Decide on the best approach for your Carrd site. For
                        most users, creating a separate Carrd page or linking
                        to an externally hosted policy works best. If you have
                        Carrd Pro, the separate page approach gives you a clean
                        URL. If you are on a free plan, an external link
                        (Google Doc, Notion page, or your own domain) works
                        fine.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add the privacy policy link to your Carrd site
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add a clearly visible link to your privacy policy in
                        the footer section of your Carrd site. Use descriptive
                        anchor text like &quot;Privacy Policy&quot; rather than
                        generic &quot;click here&quot; text. If you have forms
                        that collect personal data, add a brief disclosure near
                        each form: &quot;By submitting this form, you agree to
                        our Privacy Policy&quot; with a link to the full
                        document.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Review and update whenever you change integrations
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Every time you add, remove, or change an integration on
                        your Carrd site, review your privacy policy. If you
                        switch from Mailchimp to ConvertKit, add a new
                        analytics tool, or start accepting payments, your
                        policy needs to reflect those changes. At minimum,
                        review your policy{" "}
                        <Link
                          href="/how-often-should-you-update-your-privacy-policy"
                          className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          once per year
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Easiest Way */}
              <section id="easiest-way" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Easiest Way to Get a Carrd Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Writing a privacy policy from scratch requires legal
                  knowledge of GDPR, CCPA, CalOPPA, and potentially other
                  regulations. Copying another Carrd site&apos;s policy is
                  both a{" "}
                  <Link
                    href="/can-i-copy-someone-elses-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    copyright risk and a compliance risk
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  . Hiring a lawyer costs hundreds of dollars for a document
                  that still needs regular updates.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  A privacy policy generator gives you a complete, legally
                  compliant policy customized to your exact Carrd setup in
                  under 60 seconds. You answer a few questions about your
                  integrations and data practices, and the generator produces
                  a policy that covers every required section for GDPR, CCPA,
                  and CalOPPA.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  The generated policy includes all the specific disclosures
                  your Carrd site needs: which third-party services receive
                  data, what cookies are set, what user rights exist, how
                  long data is retained, and how visitors can contact you
                  about their data. It covers everything a{" "}
                  <Link
                    href="/gdpr-privacy-policy-template"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    GDPR-compliant template
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>{" "}
                  requires.
                </p>

                {/* CTA */}
                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <Globe className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Get Your Carrd Privacy Policy in 60 Seconds
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Tell us about your Carrd integrations and we will
                        generate a complete, legally compliant privacy policy
                        ready to add to your site. Covers GDPR, CCPA, and
                        CalOPPA.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My Carrd Privacy Policy
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
                      Do I need a privacy policy for my Carrd site?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, if your Carrd site collects any personal data. This
                      includes contact forms, email signup forms, Stripe
                      payments, analytics tracking, Facebook Pixel, YouTube
                      embeds, or any other third-party widget that processes
                      visitor information. Privacy laws apply based on data
                      collection, not site complexity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Carrd itself collect data from my visitors?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Carrd&apos;s hosting servers automatically log IP
                      addresses, browser type, and access timestamps for every
                      visitor. If you enable Carrd&apos;s built-in analytics,
                      additional behavioral data is collected. Your privacy
                      policy should acknowledge this platform-level data
                      collection in addition to your own integrations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Where do I put a privacy policy on a single-page Carrd site?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      You have several options: create a separate Carrd page
                      for your policy and link to it, use a modal or lightbox
                      overlay, link to an externally hosted policy, or embed
                      it directly on your page with custom code. A footer link
                      to a separate page is the most common and recommended
                      approach.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Carrd&apos;s privacy policy cover my site?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      No. Carrd&apos;s privacy policy covers Carrd as a platform
                      and its relationship with site builders (you). It does
                      not cover how you handle the personal data collected
                      through your site&apos;s forms, analytics, and
                      integrations. You need your own separate privacy policy
                      that describes your specific data practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What laws require a privacy policy for Carrd sites?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      GDPR applies if you have EU or UK visitors. CCPA applies
                      to California visitors if you meet business thresholds.
                      CalOPPA applies to any commercial site accessible by
                      California residents with no thresholds at all. These
                      laws are based on visitor location, not yours. Since
                      Carrd sites are publicly accessible, multiple laws
                      likely apply.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy for a Carrd link-in-bio page?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      If your link-in-bio page includes an email signup form,
                      analytics, embedded social content, or payment buttons,
                      yes. A purely static page with only outbound links and
                      no data collection might not need one. But most
                      link-in-bio pages include at least one data-collecting
                      element, so it is safer to have a policy in place.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I create a privacy policy for my Carrd site?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The fastest method is using a{" "}
                      <Link
                        href="/generate"
                        className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        privacy policy generator
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      . List your Carrd integrations, answer a few questions
                      about your data practices, and receive a complete,
                      compliant policy in under 60 seconds. Then add it to
                      your Carrd site as a linked page or modal.
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
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "Complete guide for any website, including single-page sites",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-a-blog",
                      title: "Do I Need a Privacy Policy for a Blog?",
                      desc: "Similar question, similar answer: yes if you collect any data",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                      title: "Privacy Policy for Collecting Emails",
                      desc: "What to disclose when you collect email addresses",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      title: "Can I Copy Someone Else's Privacy Policy?",
                      desc: "Why copying creates both copyright and compliance risk",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      title: "How Often to Update Your Privacy Policy",
                      desc: "Annual reviews, triggers, and CCPA requirements",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      title: "Cookie Policy for Websites",
                      desc: "GDPR cookie requirements and consent rules",
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
                  Your Carrd Site Needs a Privacy Policy
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let the simplicity of Carrd fool you. If your site
                  collects any data, you need a privacy policy. Generate one
                  customized for your exact integrations in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and CalOPPA &middot; Customized to your
                  Carrd integrations &middot; Updated for 2026
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
