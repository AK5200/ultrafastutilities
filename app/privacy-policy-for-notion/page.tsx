import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Globe,
  Puzzle,
  LayoutTemplate,
  Code,
  Database,
  Clock,
  HelpCircle,
  Lightbulb,
  Ban,
  BookOpen,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Notion: Templates, Integrations & API (2026) | ultrafastutilities",
  description: "Do you need a privacy policy for Notion? Yes, if you sell templates, build integrations, or use Notion as a public website. Learn what to include for Notion API apps, template stores, and Super.so sites.",
  keywords: "privacy policy for notion, notion privacy policy, notion template privacy policy, notion integration privacy policy, notion api privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-notion",
  },
  openGraph: {
    title: "Privacy Policy for Notion: Templates, Integrations & API (2026) | ultrafastutilities",
    description: "Do you need a privacy policy for Notion? Yes, if you sell templates, build integrations, or use Notion as a public website. Learn what to include for Notion API apps, template stores, and Super.so sites.",
    url: "https://ultrafastutilities.com/privacy-policy-for-notion",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Notion | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Notion: Templates, Integrations & API (2026) | ultrafastutilities",
    description: "Do you need a privacy policy for Notion? Yes, if you sell templates, build integrations, or use Notion as a public website. Learn what to include for Notion API apps, template stores, and Super.so sites.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "when-needed", title: "When You Need One" },
  { id: "api-requirements", title: "API Integration Requirements" },
  { id: "template-marketplaces", title: "Template Marketplaces" },
  { id: "public-website", title: "Notion as Public Website" },
  { id: "data-collected", title: "Data Collected" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to", title: "How to Create One" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForNotionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Notion: Templates, Integrations & API (2026) | ultrafastutilities",
            description: "Do you need a privacy policy for Notion? Yes, if you sell templates, build integrations, or use Notion as a public website. Learn what to include for Notion API apps, template stores, and Super.so sites.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-04-11",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Notion", item: "https://ultrafastutilities.com/privacy-policy-for-notion" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Create a Privacy Policy for Notion",
            description: "Step-by-step guide to creating a privacy policy for your Notion templates, integrations, or public pages.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Identify your Notion use case", text: "Determine whether you are selling templates, building integrations, or using Notion as a public-facing website." },
              { "@type": "HowToStep", position: 2, name: "Audit data collection points", text: "List all personal data you collect through Notion pages, forms, API calls, and third-party tools like Gumroad or Super.so." },
              { "@type": "HowToStep", position: 3, name: "Document third-party services", text: "Record every external service that receives user data, including payment processors, analytics tools, and hosting platforms." },
              { "@type": "HowToStep", position: 4, name: "Draft your privacy policy sections", text: "Write sections covering data collected, purpose of collection, third-party sharing, user rights, and contact information." },
              { "@type": "HowToStep", position: 5, name: "Add platform-specific disclosures", text: "Include details about Notion API scopes, template duplication data, or Super.so/Potion analytics depending on your setup." },
              { "@type": "HowToStep", position: 6, name: "Publish and link your policy", text: "Host the policy on your website and link to it from your Notion pages, template listings, and integration authorization screens." },
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
                name: "Do I need a privacy policy for selling Notion templates?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. If you sell Notion templates through Gumroad, Lemonsqueezy, or Notion Marketplace, you collect buyer email addresses and payment information through your payment processor. Privacy laws like GDPR and CCPA require you to disclose this data collection in a privacy policy." },
              },
              {
                "@type": "Question",
                name: "Does the Notion API require a privacy policy?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Notion requires all public integrations to have a privacy policy. When users authorize your integration, they share workspace data with your application. You must disclose what data you access, how you store it, and who you share it with." },
              },
              {
                "@type": "Question",
                name: "Do I need a privacy policy for a Notion website built with Super.so?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Super.so, Potion, and Notaku sites function as public websites. They use analytics, cookies, and custom domains. Any public website that collects visitor data needs a privacy policy to comply with GDPR, CCPA, and other privacy regulations." },
              },
              {
                "@type": "Question",
                name: "What data does Notion collect from visitors on public pages?",
                acceptedAnswer: { "@type": "Answer", text: "Notion collects basic analytics data on public pages including page views and visitor counts. When you add tools like Super.so Analytics, Google Analytics, or embedded forms, additional data is collected such as IP addresses, browser information, and form submissions." },
              },
              {
                "@type": "Question",
                name: "Can I host my privacy policy on a Notion page?",
                acceptedAnswer: { "@type": "Answer", text: "You can, but it is not ideal. Notion public pages lack custom domains and professional formatting. A better approach is hosting your privacy policy on your own website and linking to it from your Notion pages, template listings, and integration settings." },
              },
              {
                "@type": "Question",
                name: "What should a Notion integration privacy policy include?",
                acceptedAnswer: { "@type": "Answer", text: "Your policy should include the API scopes you request, what workspace data you access, how you store and secure the data, third-party services that receive the data, data retention periods, and how users can revoke access and request deletion." },
              },
              {
                "@type": "Question",
                name: "Is a free Notion template exempt from privacy policy requirements?",
                acceptedAnswer: { "@type": "Answer", text: "Not necessarily. If you collect email addresses before sharing the template, use analytics to track downloads, or embed forms in the template, you are collecting personal data and need a privacy policy regardless of whether the template is free or paid." },
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
              <span className="text-slate-600">Privacy Policy for Notion</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <LayoutTemplate className="w-3.5 h-3.5" />
                Notion Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Notion
                </span>
                : When You Need One for Templates, Integrations, and Public Pages
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Selling Notion templates, building API integrations, or using
                Notion as a public website? Here is everything you need to know
                about privacy policy requirements for each scenario.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for Notion creators, developers, and template sellers.
              </p>
            </div>

            {/* Featured Snippet Box */}
            <div className="mt-8 max-w-2xl rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed text-slate-700">
                  <strong className="text-slate-900">Quick answer:</strong>{" "}
                  You need a privacy policy for Notion if you sell templates
                  (collecting emails and payments), build integrations (accessing
                  workspace data via the API), or publish public Notion pages as
                  a website (collecting visitor analytics). Any scenario where
                  personal data is collected requires a policy.
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-saas"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for SaaS
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Apps
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Policy Generator
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
                  <span>10 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: When You Need a Privacy Policy for Notion */}
              <section id="when-needed" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      When You Need a Privacy Policy for Notion
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Three common scenarios that require privacy compliance.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* Scenario 1: Selling Templates */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <LayoutTemplate className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Scenario 1: Selling Notion Templates
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-3">
                      When you sell templates through platforms like{" "}
                      <Link
                        href="/privacy-policy-for-gumroad"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        Gumroad
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , Lemonsqueezy, or Notion Marketplace, you collect buyer
                      emails, names, and payment data through your processor.
                      Privacy laws require you to disclose this collection.
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Buyer email addresses and names
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Payment information (via Stripe, PayPal, etc.)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Download tracking and license keys
                      </li>
                    </ul>
                  </div>

                  {/* Scenario 2: Building Integrations */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Puzzle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Scenario 2: Building Notion Integrations
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-3">
                      Notion requires all public integrations to include a
                      privacy policy. When users authorize your integration,
                      they grant access to workspace data through the Notion API.
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Workspace names and user information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Page content, databases, and comments
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        OAuth tokens and API access credentials
                      </li>
                    </ul>
                  </div>

                  {/* Scenario 3: Public Pages */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Scenario 3: Notion as a Public Website
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-3">
                      Using Notion with tools like Super.so, Potion, or Notaku
                      turns your pages into a{" "}
                      <Link
                        href="/privacy-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        public website
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      . Any public website collecting visitor data needs a
                      privacy policy.
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Visitor analytics and page view tracking
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Custom domain cookies and session data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Embedded form submissions and contact data
                      </li>
                    </ul>
                  </div>

                  {/* Did you know? #1 */}
                  <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Notion themselves updated their privacy policy in 2024 to
                        address AI features and third-party integrations. If
                        Notion needs a detailed policy for how they handle data,
                        so do you when building on top of their platform.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Notion API Integration Requirements */}
              <section id="api-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Notion API Integration Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What Notion expects from developers building public integrations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    When you submit a public integration to Notion, you must
                    provide a privacy policy URL. This is not optional. Notion
                    reviews your integration before approving it, and a missing
                    or inadequate privacy policy will result in rejection.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "API scopes disclosure",
                        text: "List every permission scope your integration requests (read content, update content, insert content, read users) and explain why each is needed",
                      },
                      {
                        label: "Data storage practices",
                        text: "Explain where and how you store workspace data retrieved through the API, including encryption and retention periods",
                      },
                      {
                        label: "Third-party sharing",
                        text: "Disclose if any workspace data is shared with analytics services, AI providers, or other third parties",
                      },
                      {
                        label: "Access revocation",
                        text: "Explain how users can disconnect your integration and what happens to their data after revocation",
                      },
                      {
                        label: "Security measures",
                        text: "Describe how you protect OAuth tokens, API keys, and any cached workspace data",
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

                  {/* Mini FAQ #1 */}
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <div className="flex gap-3">
                      <HelpCircle className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Do internal integrations need a privacy policy?</strong>{" "}
                        Internal (private) Notion integrations used only within
                        your own workspace do not require a public privacy
                        policy. However, if your organization processes employee
                        data through the integration, your company privacy
                        policy should cover it.
                      </div>
                    </div>
                  </div>

                  {/* Did you know? #2 */}
                  <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        The Notion API provides access to page content, database
                        properties, comments, and user information. Even a
                        simple read-only integration that syncs tasks to a
                        calendar is processing personal data that requires
                        privacy disclosures.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Template Marketplaces */}
              <section id="template-marketplaces" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Template Marketplaces: Gumroad, Lemonsqueezy, and Notion Marketplace
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  <p className="text-base leading-7 text-slate-700">
                    Selling Notion templates means you are running an{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-an-online-store"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      online store
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , even if it feels informal. Each marketplace has its own
                    data practices, but you are still responsible for your own
                    privacy disclosures.
                  </p>

                  {/* Gumroad */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center">
                        <LayoutTemplate className="w-4 h-4 text-pink-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        <Link
                          href="/privacy-policy-for-gumroad"
                          className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          Gumroad
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11">
                      Gumroad collects buyer emails, names, and payment data on
                      your behalf. You receive customer data and are responsible
                      for disclosing how you use it for support, updates, and
                      marketing.
                    </p>
                  </div>

                  {/* Lemonsqueezy */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center">
                        <LayoutTemplate className="w-4 h-4 text-yellow-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Lemonsqueezy
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11">
                      Lemonsqueezy acts as Merchant of Record, handling tax and
                      payments. You still access customer data through your
                      dashboard and need to disclose email collection for
                      license delivery and post-purchase communication.
                    </p>
                  </div>

                  {/* Notion Marketplace */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <LayoutTemplate className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Notion Marketplace
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11">
                      The official Notion template gallery has its own terms,
                      but if you link to external payment pages or collect data
                      outside the marketplace, you need your own privacy policy
                      covering those interactions.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Notion as Public Website */}
              <section id="public-website" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Notion as a Public Website: Super.so, Potion, and Notaku
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Tools like Super.so, Potion, and Notaku turn Notion pages
                    into fully functional{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      websites
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    with custom domains, SEO, and analytics. The moment you add
                    a custom domain and analytics tracking, your Notion pages
                    become a website that needs a privacy policy.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Super.so",
                        text: "Adds custom domains, Google Analytics, Fathom, and custom scripts. All of these collect visitor data requiring disclosure.",
                      },
                      {
                        label: "Potion",
                        text: "Provides custom domains, analytics, and contact forms. Form submissions collect personal data directly from visitors.",
                      },
                      {
                        label: "Notaku",
                        text: "Offers documentation sites with search analytics, feedback forms, and custom tracking. Each feature has data collection implications.",
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

                  {/* Mini FAQ #2 */}
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <div className="flex gap-3">
                      <HelpCircle className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">What about plain Notion public pages without Super.so?</strong>{" "}
                        Even without third-party tools, Notion collects basic
                        analytics on public pages. If you embed forms, Typeform
                        widgets, or Calendly links, each of those services
                        collects data that should be covered by your policy.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Data Collected Through Notion */}
              <section id="data-collected" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Data Collected Through Notion
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A comprehensive look at what personal data flows through
                      Notion-based projects.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* API Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Code className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Via the Notion API
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        User names, email addresses, and profile photos
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Page content including text, files, and database entries
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Workspace metadata and access permissions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        OAuth tokens and authorization data
                      </li>
                    </ul>
                  </div>

                  {/* Template Sales Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <LayoutTemplate className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Via Template Sales
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Buyer email addresses and names
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Payment and billing information (via processor)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Download history and license records
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Email list subscriptions for updates
                      </li>
                    </ul>
                  </div>

                  {/* Public Page Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <Database className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Via Public Notion Pages
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        IP addresses and browser information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Page view analytics and referral sources
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Form submissions and embedded widget data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Cookies from analytics and custom scripts
                      </li>
                    </ul>
                  </div>

                  {/* Did you know? #3 */}
                  <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        When someone duplicates your Notion template, Notion
                        does not share the duplicator&apos;s identity with you.
                        However, if you gate the template behind an email form
                        or payment page, you are collecting that data yourself
                        and must disclose it.
                      </div>
                    </div>
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
                    <p className="mt-2 text-base text-slate-500">
                      Five errors that Notion creators frequently make with
                      privacy policies.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      title: "Using Notion's privacy policy as your own",
                      text: "Notion's policy covers their platform. It does not cover your template store, integration, or the data you collect independently. You need a separate policy for your business.",
                    },
                    {
                      title: "Ignoring third-party payment processors",
                      text: "If you use Stripe, Gumroad, or Lemonsqueezy, your policy must name these processors and explain what data they collect on your behalf.",
                    },
                    {
                      title: "Forgetting about email marketing tools",
                      text: "Many template sellers add buyers to Mailchimp, ConvertKit, or Beehiiv. Sending marketing emails without disclosing this in your policy violates GDPR consent requirements.",
                    },
                    {
                      title: "Not disclosing API data access scopes",
                      text: "Integration developers must list exactly what data their app accesses. Requesting broad permissions without justification will get your integration rejected by Notion.",
                    },
                    {
                      title: "Skipping the privacy policy link in integration settings",
                      text: "Notion provides a dedicated field for your privacy policy URL in integration settings. Leaving it blank or linking to a generic page signals poor compliance practices.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: How to Create a Privacy Policy for Notion */}
              <section id="how-to" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Notion (6 Steps)
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {[
                    {
                      step: "Step 1",
                      title: "Identify your Notion use case",
                      text: "Determine whether you are selling templates, building integrations, or using Notion as a public-facing website. Each scenario has different data collection points and requirements.",
                    },
                    {
                      step: "Step 2",
                      title: "Audit data collection points",
                      text: "List all personal data you collect through Notion pages, forms, API calls, and third-party tools like Gumroad or Super.so. Include data collected by payment processors and email services.",
                    },
                    {
                      step: "Step 3",
                      title: "Document third-party services",
                      text: "Record every external service that receives user data, including payment processors (Stripe, PayPal), analytics tools (Google Analytics, Fathom), and hosting platforms (Super.so, Vercel).",
                    },
                    {
                      step: "Step 4",
                      title: "Draft your privacy policy sections",
                      text: "Write sections covering data collected, purpose of collection, third-party sharing, user rights under GDPR and CCPA, data retention periods, and contact information.",
                    },
                    {
                      step: "Step 5",
                      title: "Add platform-specific disclosures",
                      text: "Include details about Notion API scopes you request, template duplication data flows, or Super.so/Potion analytics depending on your specific setup.",
                    },
                    {
                      step: "Step 6",
                      title: "Publish and link your policy",
                      text: "Host the policy on your website and link to it from your Notion pages, template listings, integration authorization screens, and marketplace profiles.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {item.step}: {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
                    <div className="flex gap-3">
                      <ShieldCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Pro tip:</strong>{" "}
                        Use a{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          GDPR-compliant template
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        as your starting point and customize it for your Notion
                        use case. This ensures you cover all required legal
                        bases while adding platform-specific details.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      q: "Do I need a privacy policy for selling Notion templates?",
                      a: "Yes. If you sell Notion templates through Gumroad, Lemonsqueezy, or Notion Marketplace, you collect buyer email addresses and payment information through your payment processor. Privacy laws like GDPR and CCPA require you to disclose this data collection in a privacy policy.",
                    },
                    {
                      q: "Does the Notion API require a privacy policy?",
                      a: "Yes. Notion requires all public integrations to have a privacy policy. When users authorize your integration, they share workspace data with your application. You must disclose what data you access, how you store it, and who you share it with.",
                    },
                    {
                      q: "Do I need a privacy policy for a Notion website built with Super.so?",
                      a: "Yes. Super.so, Potion, and Notaku sites function as public websites. They use analytics, cookies, and custom domains. Any public website that collects visitor data needs a privacy policy to comply with GDPR, CCPA, and other privacy regulations.",
                    },
                    {
                      q: "What data does Notion collect from visitors on public pages?",
                      a: "Notion collects basic analytics data on public pages including page views and visitor counts. When you add tools like Super.so Analytics, Google Analytics, or embedded forms, additional data is collected such as IP addresses, browser information, and form submissions.",
                    },
                    {
                      q: "Can I host my privacy policy on a Notion page?",
                      a: "You can, but it is not ideal. Notion public pages lack custom domains and professional formatting. A better approach is hosting your privacy policy on your own website and linking to it from your Notion pages, template listings, and integration settings.",
                    },
                    {
                      q: "What should a Notion integration privacy policy include?",
                      a: "Your policy should include the API scopes you request, what workspace data you access, how you store and secure the data, third-party services that receive the data, data retention periods, and how users can revoke access and request deletion.",
                    },
                    {
                      q: "Is a free Notion template exempt from privacy policy requirements?",
                      a: "Not necessarily. If you collect email addresses before sharing the template, use analytics to track downloads, or embed forms in the template, you are collecting personal data and need a privacy policy regardless of whether the template is free or paid.",
                    },
                  ].map((item) => (
                    <div
                      key={item.q}
                      className="rounded-xl border border-slate-200/80 p-5"
                    >
                      <h3 className="font-semibold text-slate-900 mb-2">
                        {item.q}
                      </h3>
                      <p className="text-base leading-7 text-slate-600">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* CTA Section */}
              <section className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <ShieldCheck className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your Notion Privacy Policy
                    </h2>
                    <p className="mt-3 text-slate-300 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your Notion templates, integrations, or public pages in
                      under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-xl shadow-lg shadow-slate-900/20"
                      >
                        Generate My Notion Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-slate-400">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500/50" />
                      <span>Notion-ready structure</span>
                    </div>

                    <p className="text-xs text-slate-500 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
                      requirements. Not legal advice. Learn more about{" "}
                      <Link
                        href="/what-happens-without-a-privacy-policy"
                        className="text-slate-400 hover:text-white transition-colors underline"
                      >
                        what happens without a privacy policy
                      </Link>
                      .
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
                      href: "/privacy-policy-for-saas",
                      icon: FileText,
                      title: "Privacy Policy for SaaS",
                      desc: "SaaS compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      icon: ShieldCheck,
                      title: "Privacy Policy for Apps",
                      desc: "Mobile and web app privacy guide",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "Website compliance essentials",
                    },
                    {
                      href: "/privacy-policy-for-gumroad",
                      icon: LayoutTemplate,
                      title: "Privacy Policy for Gumroad",
                      desc: "Gumroad seller privacy guide",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-an-online-store",
                      icon: AlertTriangle,
                      title: "Online Store Privacy Policy",
                      desc: "E-commerce privacy requirements",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: BookOpen,
                      title: "What Happens Without a Policy",
                      desc: "Risks of missing privacy policies",
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
