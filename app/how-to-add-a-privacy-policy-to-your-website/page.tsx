import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Globe,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Code,
  Layout,
  Link2,
  Eye,
  Clock,
  Settings,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "How to Add a Privacy Policy to Your Website [2026]",
  description:
    "Step-by-step guide to adding a privacy policy to any website. Covers WordPress, Shopify, Wix, Squarespace, legal placement, and linking requirements.",
  keywords:
    "how to add privacy policy to website, add privacy policy, privacy policy placement, website privacy policy page, privacy policy link footer",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/how-to-add-a-privacy-policy-to-your-website",
  },
  openGraph: {
    title: "How to Add a Privacy Policy to Your Website [2026]",
    description:
      "Step-by-step guide to adding a privacy policy to any website. Covers WordPress, Shopify, Wix, Squarespace, legal placement, and linking requirements.",
    url: "https://ultrafastutilities.com/how-to-add-a-privacy-policy-to-your-website",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How to Add a Privacy Policy to Your Website | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Add a Privacy Policy to Your Website [2026]",
    description:
      "Step-by-step guide to adding a privacy policy to any website. Covers WordPress, Shopify, Wix, Squarespace, legal placement, and linking requirements.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "where-to-host", title: "Where to Host Your Policy" },
  { id: "platform-guides", title: "Platform-Specific Guides" },
  { id: "linking-requirements", title: "Where to Link It" },
  { id: "legal-placement", title: "Legal Placement Rules" },
  { id: "what-to-include", title: "What the Policy Should Contain" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function HowToAddPrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Add a Privacy Policy to Your Website [2026]",
            description:
              "Step-by-step guide to adding a privacy policy to any website. Covers WordPress, Shopify, Wix, Squarespace, legal placement, and linking requirements.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2025-01-01",
            dateModified: "2026-04-11",
            publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
              { "@type": "ListItem", position: 2, name: "How to Add a Privacy Policy to Your Website", item: "https://ultrafastutilities.com/how-to-add-a-privacy-policy-to-your-website" },
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
              <span className="text-slate-600">How to Add a Privacy Policy</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Layout className="w-3.5 h-3.5" />
                Step-by-Step Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                How to Add a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Privacy Policy
                </span>{" "}
                to Your Website
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A complete walkthrough for adding a privacy policy to any
                website. Covers hosting, linking, platform instructions, and
                legal placement requirements for GDPR and CalOPPA.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For website owners, developers, and business operators.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Website Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-shopify"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Code className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Shopify Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Generate Policy
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
                <span>Last updated: April 2026</span>
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

              {/* Section 1: Where to Host Your Policy */}
              <section id="where-to-host" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Where to Host Your Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Your privacy policy should live on a dedicated page on your own
                    website -- not buried in a PDF, not hosted on a third-party site,
                    and not hidden inside a pop-up. The standard is a standalone page
                    at a URL like <code className="text-sm bg-slate-100 px-1.5 py-0.5 rounded">/privacy-policy</code> or{" "}
                    <code className="text-sm bg-slate-100 px-1.5 py-0.5 rounded">/privacy</code>. This is the approach
                    recommended by{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    regulators and required by most app stores and ad networks.
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Key point:</strong>{" "}
                        Never host your privacy policy as a downloadable PDF only.
                        Google, Apple, and GDPR regulators all require the policy
                        to be accessible via a direct URL without requiring a download
                        or login.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        label: "Dedicated page",
                        text: "Create a standalone page at /privacy-policy or /privacy. This is the universally accepted standard across all platforms and regulators.",
                      },
                      {
                        label: "Indexable by search engines",
                        text: "Do not block your privacy policy page with noindex or robots.txt. Google Ads and many ad networks verify it by crawling the URL.",
                      },
                      {
                        label: "No login required",
                        text: "Your policy must be publicly accessible. Putting it behind authentication violates GDPR transparency requirements and most platform policies.",
                      },
                      {
                        label: "Mobile-friendly",
                        text: "CalOPPA and GDPR both require the policy to be readable on the device it is accessed from. Ensure responsive formatting.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Platform-Specific Guides */}
              <section id="platform-guides" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Platform-Specific Instructions
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How to add a privacy policy page on the most popular
                      website platforms.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* WordPress */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Code className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        WordPress
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Go to Settings &gt; Privacy and select or create your privacy policy page
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        WordPress auto-generates a starter template -- replace it with your actual policy
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Add the page to your footer menu via Appearance &gt; Menus
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        The designated privacy page gets a special link in the login and registration forms
                      </li>
                    </ul>
                  </div>

                  {/* Shopify */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Settings className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Shopify
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Go to Settings &gt; Legal and paste your policy into the Privacy Policy section
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Shopify automatically creates a /policies/privacy-policy page
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Add the link to your footer navigation under Online Store &gt; Navigation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        The checkout page automatically shows a link to your policy when configured
                      </li>
                    </ul>
                  </div>

                  {/* Wix */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Layout className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Wix
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Add a new page via the Pages panel and name it &quot;Privacy Policy&quot;
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Use a text element to paste your full privacy policy content
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Hide the page from the main navigation menu if you prefer footer-only placement
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Add a link in the footer by editing the footer section in the Wix Editor
                      </li>
                    </ul>
                  </div>

                  {/* Squarespace */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Squarespace
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Create a new page under Pages &gt; Not Linked section to keep it out of main nav
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Add a Text Block with your privacy policy content
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Link it in the footer via the Footer section editor or a Navigation Block
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Set the URL slug to /privacy-policy for clean linking
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Where to Link Your Privacy Policy */}
              <section id="linking-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Where to Link Your Privacy Policy
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Having a privacy policy page is not enough -- you need to link
                    to it from every location where you collect personal data.
                    Most privacy laws require the link to be &quot;conspicuous&quot; and
                    accessible before data collection occurs.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Layout,
                        iconBg: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "Website Footer (Required)",
                        desc: "Every page on your site should have a privacy policy link in the footer. This is the single most important placement and is specifically required by CalOPPA and expected by GDPR.",
                      },
                      {
                        icon: FileText,
                        iconBg: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Signup and Registration Forms",
                        desc: "Any form that collects email addresses, names, or other personal data should include a link to your policy near the submit button, ideally with a consent checkbox for GDPR.",
                      },
                      {
                        icon: Settings,
                        iconBg: "bg-orange-50",
                        iconColor: "text-orange-600",
                        title: "Checkout and Payment Pages",
                        desc: "E-commerce checkouts collect names, addresses, and payment details. Link your policy before the customer completes their purchase.",
                      },
                      {
                        icon: Link2,
                        iconBg: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "Cookie Consent Banners",
                        desc: "Your cookie banner should link to both your privacy policy and cookie policy. Under GDPR, users need to understand data collection before giving consent.",
                      },
                      {
                        icon: Eye,
                        iconBg: "bg-rose-50",
                        iconColor: "text-rose-600",
                        title: "Contact and Support Forms",
                        desc: "Even simple contact forms collect personal data. Add a privacy policy link near these forms, especially if you store submissions in a CRM or helpdesk tool.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}
                        >
                          <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 text-[15px]">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-500 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Legal Placement Rules */}
              <section id="legal-placement" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Legal Placement Requirements
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Different laws have specific requirements for how your privacy
                    policy link must be presented. Here is what each major
                    regulation expects.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Law</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Placement Requirement</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Key Detail</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { law: "GDPR (EU)", placement: "Visible link before data collection", detail: "Must be accessible before consent is given -- link in cookie banners, forms, and footer" },
                          { law: "CalOPPA (California)", placement: "Conspicuous link on homepage", detail: "Must use the word 'Privacy' in the link text and be visually distinct from surrounding text" },
                          { law: "CCPA/CPRA", placement: "'Do Not Sell' link + privacy policy", detail: "Requires a separate 'Do Not Sell My Personal Information' link in addition to privacy policy" },
                          { law: "Google Ads", placement: "Accessible URL in ad account", detail: "Policy must be on a crawlable page -- no PDFs, login walls, or redirects" },
                          { law: "Apple App Store", placement: "App listing + in-app settings", detail: "Privacy policy URL required before app review -- must also be accessible within the app" },
                        ].map((row, i) => (
                          <tr key={row.law} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="py-3 px-4 font-medium text-slate-800">{row.law}</td>
                            <td className="py-3 px-4 text-slate-600">{row.placement}</td>
                            <td className="py-3 px-4 text-slate-600">{row.detail}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Important:</strong>{" "}
                        CalOPPA specifically requires the link text to include the
                        word &quot;Privacy.&quot; Using labels like &quot;Legal&quot; or &quot;Terms&quot; alone
                        does not satisfy this requirement. Use &quot;Privacy Policy&quot; as
                        your link text to be safe.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: What the Policy Should Contain */}
              <section id="what-to-include" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Your Privacy Policy Should Contain
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Before you add the page, make sure your privacy policy
                    actually covers the required topics. A blank or generic policy
                    is worse than none -- it creates a false sense of compliance.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "What data you collect",
                        text: "List every type of personal data -- names, emails, IP addresses, cookies, payment information, device data, and any analytics you run.",
                      },
                      {
                        label: "How you use the data",
                        text: "Explain each purpose: account creation, order fulfillment, marketing emails, analytics, fraud prevention, and personalization.",
                      },
                      {
                        label: "Who you share data with",
                        text: "Name categories of third parties: payment processors, analytics providers, email services, hosting companies, and advertising networks.",
                      },
                      {
                        label: "How long you keep it",
                        text: "Specify retention periods or the criteria used to determine them. GDPR requires you to not keep data longer than necessary.",
                      },
                      {
                        label: "User rights",
                        text: "Describe how users can access, correct, delete, or export their data. Include a contact email and expected response time.",
                      },
                      {
                        label: "Contact information",
                        text: "Provide a way for users to reach you about privacy concerns -- an email address at minimum, a physical address if required by your jurisdiction.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Mistakes to Avoid
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Mistake</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Why It Matters</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Fix</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { mistake: "Copying another site's policy", why: "It won't reflect your actual data practices", fix: "Generate a policy specific to your site's tools and data flows" },
                          { mistake: "Hosting as PDF only", why: "Not crawlable, not mobile-friendly, blocks ad approvals", fix: "Create a dedicated HTML page on your domain" },
                          { mistake: "No footer link", why: "Violates CalOPPA and makes the policy effectively invisible", fix: "Add a 'Privacy Policy' link to every page footer" },
                          { mistake: "Outdated policy", why: "Listing tools you no longer use or missing new ones", fix: "Review and update at least every 6 months" },
                          { mistake: "No cookie consent mechanism", why: "GDPR requires consent before non-essential cookies", fix: "Add a cookie banner that links to your privacy policy" },
                        ].map((row, i) => (
                          <tr key={row.mistake} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="py-3 px-4 font-medium text-slate-800">{row.mistake}</td>
                            <td className="py-3 px-4 text-slate-600">{row.why}</td>
                            <td className="py-3 px-4 text-slate-600">{row.fix}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                      Generate Your Website Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy ready to add to your
                      website. Covers your specific platforms, tools, and
                      compliance needs.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Platform-specific disclosures</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
                      requirements. Not legal advice.
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
                      desc: "General website compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-shopify",
                      icon: Settings,
                      title: "Privacy Policy for Shopify",
                      desc: "E-commerce store compliance",
                    },
                    {
                      href: "/privacy-policy-for-wordpress",
                      icon: Code,
                      title: "Privacy Policy for WordPress",
                      desc: "WordPress-specific guide",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance requirements",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance requirements",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: FileText,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-mobile-apps",
                      icon: Layout,
                      title: "Privacy Policy for Mobile Apps",
                      desc: "App store compliance guide",
                    },
                    {
                      href: "/generate",
                      icon: ShieldCheck,
                      title: "Policy Generator",
                      desc: "Create your compliant privacy policy",
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
