import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  Globe,
  Clock,
  Ban,
  Info,
  Settings,
  CreditCard,
  Users,
  Calendar,
  ShoppingBag,
  Mail,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for GoDaddy Website: Complete Guide (2026) | ultrafastutilities",
  description:
    "Create a privacy policy for your GoDaddy website. Covers GoDaddy Website Builder, hosting data, GoDaddy Online Store, email marketing, SSL, domain WHOIS privacy, and third-party integrations.",
  keywords:
    "privacy policy for godaddy website, godaddy privacy policy, godaddy website builder privacy policy, godaddy online store privacy policy, godaddy privacy policy template",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-godaddy-website",
  },
  openGraph: {
    title:
      "Privacy Policy for GoDaddy Website: Complete Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for your GoDaddy website. Covers GoDaddy Website Builder, hosting data, GoDaddy Online Store, email marketing, SSL, domain WHOIS privacy, and third-party integrations.",
    url: "https://ultrafastutilities.com/privacy-policy-for-godaddy-website",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for GoDaddy Website | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for GoDaddy Website: Complete Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for your GoDaddy website. Covers GoDaddy Website Builder, hosting data, GoDaddy Online Store, email marketing, SSL, domain WHOIS privacy, and third-party integrations.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-godaddy-collects", title: "What GoDaddy Collects" },
  { id: "godaddy-features-data", title: "GoDaddy Features That Collect Data" },
  { id: "domain-vs-site-privacy", title: "Domain Privacy vs Site Privacy" },
  { id: "hosting-data-collection", title: "Hosting Data Collection" },
  { id: "third-party-integrations", title: "Third-Party Integrations" },
  { id: "how-to-add", title: "How to Add Your Policy in GoDaddy" },
  { id: "common-mistakes", title: "Common GoDaddy Privacy Mistakes" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does GoDaddy provide a privacy policy for my website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. GoDaddy has its own privacy policy that covers the GoDaddy platform and services, but it does not cover your individual website. You are responsible for creating and maintaining a privacy policy that describes your own data collection practices, including any GoDaddy features, hosting data, and third-party integrations you use.",
      },
    },
    {
      "@type": "Question",
      name: "Is a privacy policy required for a GoDaddy website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your GoDaddy website collects any personal data, including through GoDaddy Website Builder analytics, contact forms, GoDaddy Online Store, email marketing, or payment processing, you are legally required to have a privacy policy under GDPR, CCPA, and most other privacy laws. Even a basic site hosted on GoDaddy collects visitor data through server logs.",
      },
    },
    {
      "@type": "Question",
      name: "Does GoDaddy domain privacy protect my website visitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. GoDaddy domain privacy (WHOIS privacy) only hides your personal registration details from the public WHOIS database. It does not protect your website visitors' data in any way. You still need a separate privacy policy that explains how your website collects, uses, and protects visitor information.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if I only use GoDaddy for hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GoDaddy hosting servers automatically collect visitor data including IP addresses, browser types, operating systems, and access timestamps through server logs. If your hosted site uses any forms, analytics, or third-party scripts, additional data collection occurs. All of this must be disclosed in a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does GoDaddy SSL make my site privacy compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SSL encrypts data in transit between your visitors and your server, which is a security measure. However, SSL does not address privacy compliance requirements. You still need a privacy policy explaining what data you collect, how you use it, who you share it with, and what rights visitors have under GDPR, CCPA, and other privacy laws.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my GoDaddy site does not have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operating a GoDaddy site without a privacy policy when you collect personal data can result in GDPR fines of up to 20 million euros or 4% of global annual revenue. CCPA violations carry penalties of $2,500 to $7,500 per violation. Beyond fines, you risk losing customer trust and may violate GoDaddy's own terms of service.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a free privacy policy template for my GoDaddy site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free templates are risky because they rarely cover GoDaddy-specific data collection such as GoDaddy Website Builder analytics, Online Store data, email marketing tracking, and hosting server logs. Each privacy policy must accurately reflect your specific data practices. A generic template will almost certainly be incomplete for your GoDaddy site.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your GoDaddy Website",
  description:
    "Follow these six steps to create a compliant privacy policy for your GoDaddy website that covers all GoDaddy-specific data collection, hosting, and third-party integrations.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your GoDaddy site's data collection",
      text: "Review every GoDaddy feature you have enabled: Website Builder analytics, contact forms, GoDaddy Online Store, GoDaddy Email Marketing, Appointments, and Payments. Document which ones are active and what data each collects from visitors.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Document hosting and domain data",
      text: "Identify what data GoDaddy hosting collects through server logs, including IP addresses, browser types, and access timestamps. Check whether you have WHOIS domain privacy enabled and note any SSL certificates in use.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "List all third-party integrations",
      text: "Review every third-party service connected to your GoDaddy site, including Google Analytics, Facebook Pixel, payment processors like Stripe or PayPal, email marketing tools, and any embedded widgets or scripts.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Determine which privacy laws apply",
      text: "Identify your legal obligations based on where you and your visitors are located. If you have any EU visitors, GDPR applies. If you have California visitors and meet CCPA thresholds, CCPA applies. Most GoDaddy sites serve a global audience, so both regulations typically apply.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a policy tailored to your GoDaddy site. Answer questions about your specific data practices, GoDaddy features, hosting setup, and third-party integrations. The generator produces a compliant document covering all required sections.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Add the privacy policy to your GoDaddy site",
      text: "Create a dedicated page in GoDaddy Website Builder or upload the policy to your hosted site. Add it to your footer navigation, link it from any forms that collect personal data, and include it in your checkout flow if you run an online store.",
    },
  ],
};

export default function PrivacyPolicyForGoDaddyWebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for GoDaddy Website: Complete Guide (2026) | ultrafastutilities",
            description:
              "Create a privacy policy for your GoDaddy website. Covers GoDaddy Website Builder, hosting data, GoDaddy Online Store, email marketing, SSL, domain WHOIS privacy, and third-party integrations.",
            author: { "@type": "Person", name: "Anupam Kumar" },
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
                name: "Privacy Policy for GoDaddy Website",
                item: "https://ultrafastutilities.com/privacy-policy-for-godaddy-website",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
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
                Privacy Policy for GoDaddy Website
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Globe className="w-3.5 h-3.5" />
                Website Builder Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  GoDaddy Website
                </span>
                : What GoDaddy Website Builder Users Must Include
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about privacy compliance for your
                GoDaddy website. Covering GoDaddy Website Builder, hosting
                data, Online Store, email marketing, SSL, WHOIS privacy, and
                third-party integrations.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For GoDaddy site owners, small businesses, and web designers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Websites
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-wix"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Wix Privacy Policy
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
                    Need a GoDaddy privacy policy?
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
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <span>Last updated: April 2026</span>
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>12 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>
                    Every GoDaddy website that collects personal data needs its
                    own privacy policy.
                  </strong>{" "}
                  GoDaddy&apos;s platform privacy policy only covers GoDaddy as
                  a company, not your individual site. If you use GoDaddy
                  Website Builder, GoDaddy Online Store, email marketing,
                  payment processing via Stripe or PayPal, or any third-party
                  integrations, you must disclose this data collection to your
                  visitors under GDPR and CCPA.
                </p>
              </div>

              {/* Section 1: What GoDaddy Collects */}
              <section id="what-godaddy-collects" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What GoDaddy Collects From Your Website Visitors
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Understanding the data GoDaddy automatically collects on
                      every site it hosts or powers.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Whether you use GoDaddy Website Builder, managed WordPress
                    hosting, or traditional shared hosting, GoDaddy collects
                    visitor data at the infrastructure level. This happens
                    automatically and requires disclosure in your{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    GoDaddy&apos;s hosting infrastructure logs every request
                    made to your website. This includes IP addresses, browser
                    user agents, referring URLs, pages visited, and timestamps.
                    GoDaddy uses this data for security monitoring, performance
                    optimization, and abuse prevention. As the site owner, you
                    are the data controller for this information under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    GoDaddy Website Builder includes built-in analytics that
                    track page views, unique visitors, traffic sources, and
                    visitor geography. Unlike raw server logs, these analytics
                    are presented in a dashboard specifically for your use. Both
                    the raw server data and the analytics dashboard data must be
                    disclosed in your privacy policy.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Many GoDaddy site owners assume that because they pay for
                    hosting, GoDaddy handles privacy compliance for them. This
                    is incorrect. GoDaddy is a data processor acting on your
                    behalf. You remain the data controller responsible for
                    informing visitors about all data collection on your site.
                    The consequences of operating without a privacy policy can
                    be severe. Learn more about the{" "}
                    <Link
                      href="/what-happens-without-a-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      risks of not having a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
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
                          GoDaddy hosts over 82 million domain names and powers
                          millions of websites worldwide. Despite this massive
                          scale, GoDaddy&apos;s Terms of Service place full
                          responsibility for privacy compliance on individual
                          site owners. Section 18 of GoDaddy&apos;s Universal
                          Terms explicitly states that customers must comply
                          with all applicable laws, including privacy
                          regulations, for their own websites and data
                          collection activities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: GoDaddy Features That Collect Data */}
              <section id="godaddy-features-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GoDaddy Features That Collect Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Each GoDaddy feature you enable creates additional data
                      collection that must be disclosed.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    GoDaddy offers a wide range of features that collect
                    different types of visitor data. Here is a breakdown of the
                    most common GoDaddy features and what they collect:
                  </p>

                  {/* GoDaddy Features Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            GoDaddy Feature
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                            Data Collected
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Category
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Disclosure Required
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Website Builder
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Page views, visitor count, traffic sources, device
                            info, geographic location
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Online Store
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Customer names, emails, shipping addresses, order
                            history, payment data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Ecommerce
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Email Marketing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Subscriber emails, open rates, click rates,
                            unsubscribes, campaign engagement
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Marketing
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Appointments
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Client names, contact info, appointment dates,
                            service types, intake responses
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Scheduling
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Payments (Stripe/PayPal)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Card details (via processor), billing names,
                            addresses, transaction amounts
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Financial
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Sessions, page views, referrers, device data,
                            bounce rates
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Tracking
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            SSL Certificate
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Encrypts data in transit; does not collect data but
                            must be disclosed as a security measure
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Security
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Recommended
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            WHOIS Privacy
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Shields domain registrant details from public
                            WHOIS; does not affect visitor data collection
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Domain
                          </td>
                          <td className="px-4 py-3 text-slate-600">No</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    The key takeaway is that nearly every GoDaddy feature you
                    activate adds another layer of data collection. Your privacy
                    policy must account for each active feature and clearly
                    explain what data it collects, why it is collected, and how
                    long it is retained.
                  </p>

                  {/* GoDaddy Online Store */}
                  <div className="mt-8 group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        GoDaddy Online Store
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                      GoDaddy Online Store collects extensive ecommerce data
                      that requires detailed privacy disclosures:
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Customer names, email addresses, and shipping addresses
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Order history, product preferences, and cart activity
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Payment and billing information processed through Stripe or PayPal
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Abandoned cart tracking data and recovery emails
                      </li>
                    </ul>
                  </div>

                  {/* GoDaddy Email Marketing */}
                  <div className="mt-6 group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        GoDaddy Email Marketing
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                      GoDaddy Email Marketing tracks subscriber engagement and
                      collects:
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Email addresses from signup forms and contact lists
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Email open rates, click-through rates, and engagement metrics
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Subscriber location data and device information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Unsubscribe and bounce records
                      </li>
                    </ul>
                  </div>

                  {/* GoDaddy Appointments */}
                  <div className="mt-6 group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        GoDaddy Appointments
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                      If you offer scheduling through GoDaddy Appointments,
                      the following data is collected:
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Client names and contact information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Appointment dates, times, and service types
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Payment information for paid appointments
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Custom intake form responses and notes
                      </li>
                    </ul>
                  </div>

                  {/* GoDaddy Payments */}
                  <div className="mt-6 group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Payments via Stripe and PayPal
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11 mb-2">
                      GoDaddy integrates with Stripe and PayPal for payment
                      processing. Your privacy policy must disclose:
                    </p>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Payment card details are processed by Stripe or PayPal, not stored by you
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Billing names, addresses, and email addresses
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Transaction amounts, order details, and refund records
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        The identity of the payment processor (Stripe, PayPal, or both)
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Domain Privacy vs Site Privacy */}
              <section id="domain-vs-site-privacy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Domain Privacy vs Site Privacy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Why GoDaddy WHOIS privacy and website privacy policies
                      are completely different things.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    One of the most common points of confusion for GoDaddy
                    users is the difference between domain privacy and website
                    privacy. These are two entirely separate concepts, and
                    having one does not eliminate the need for the other.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Aspect
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                            Domain Privacy (WHOIS)
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                            Website Privacy Policy
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Purpose
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Hides your personal registration details from the
                            public WHOIS database
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Informs visitors how their data is collected, used,
                            and protected on your website
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Protects
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            The domain registrant (you)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Your website visitors
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Legal requirement
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Optional (recommended)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Legally required if you collect any personal data
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Scope
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Domain registration records only
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            All data collected through your website
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    GoDaddy offers domain privacy protection (sometimes called
                    &quot;Domain Privacy + Protection&quot;) as an add-on
                    service. While this is valuable for keeping your personal
                    registration information private, it has absolutely no
                    effect on your website&apos;s data collection practices.
                    You still need a separate privacy policy that covers how
                    your website handles visitor data.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Similarly, GoDaddy SSL certificates encrypt data in
                    transit between your visitors and your server. SSL is a
                    critical security measure, but it is not a substitute for a
                    privacy policy. SSL protects data from interception during
                    transmission. A privacy policy explains what you do with
                    the data after it arrives at your server.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: If I have GoDaddy domain privacy, do I still need a website privacy policy?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Yes, absolutely. Domain privacy protects your personal
                        details as a domain registrant. A website privacy policy
                        protects your visitors by informing them about data
                        collection. These serve completely different purposes.
                        Domain privacy is about your data; a privacy policy is
                        about your visitors&apos; data.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Does GoDaddy SSL replace the need for a privacy policy?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        No. SSL encrypts data during transmission, which is a
                        security measure. A privacy policy is a legal document
                        that explains what data you collect, how you use it,
                        and what rights visitors have. GDPR and CCPA require a
                        privacy policy regardless of whether you use SSL.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Hosting Data Collection */}
              <section id="hosting-data-collection" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GoDaddy Hosting Data Collection
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What GoDaddy hosting servers collect from every visitor,
                      regardless of your site&apos;s features.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Every website hosted on GoDaddy servers automatically
                    collects baseline visitor data through server logs. This
                    data collection happens at the infrastructure level and
                    cannot be disabled. It is important to understand what is
                    collected and why it must be disclosed.
                  </p>

                  {/* Hosting Data Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            Data Type
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                            What Is Collected
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            Purpose
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            IP Addresses
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Full visitor IP address on every request
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Security, abuse prevention
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Browser Data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            User agent string, browser type, version
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Compatibility, analytics
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Access Logs
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Pages visited, timestamps, HTTP status codes
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Performance, troubleshooting
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Referrer Data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            The URL the visitor came from before landing on
                            your site
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Traffic analysis
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Operating System
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Visitor OS type and version
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Compatibility, analytics
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Even if your GoDaddy website is a simple one-page site with
                    no forms, no store, and no active features, hosting server
                    logs are still collecting this data on every visitor. Under
                    GDPR, IP addresses are considered personal data because
                    they can be used to identify individuals. This means even
                    the most basic GoDaddy-hosted website triggers the
                    requirement for a privacy policy.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you use GoDaddy&apos;s cPanel hosting or managed
                    WordPress hosting, you may also have access to tools like
                    AWStats or Webalizer that process these server logs into
                    analytics reports. These tools do not collect additional
                    data, but they make the server log data more accessible and
                    useful, further reinforcing the need for disclosure. For{" "}
                    <Link
                      href="/privacy-policy-for-small-business"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      small business owners
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , this is an often-overlooked compliance requirement.
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
                          GoDaddy operates data centers across multiple
                          countries, including the United States, Europe, and
                          Asia. When your website is hosted on GoDaddy, visitor
                          data may be processed in any of these locations.
                          Under GDPR, international data transfers require
                          specific legal safeguards. Your privacy policy should
                          mention that data may be processed in the country
                          where your GoDaddy server is located.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Third-Party Integrations */}
              <section id="third-party-integrations" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Third-Party Integrations on GoDaddy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      External services and scripts that add data collection
                      you must disclose.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    GoDaddy websites commonly use third-party services that
                    introduce additional data collection beyond what GoDaddy
                    itself provides. Each service that collects, processes, or
                    shares visitor data must be disclosed in your privacy
                    policy. Here are the most commonly used integrations:
                  </p>

                  {/* Third-Party Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Integration
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            Data Collected
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Purpose
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Privacy Impact
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Google Analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Page views, sessions, demographics, behavior flow,
                            device data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Website analytics
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (cross-site tracking)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Facebook Pixel
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Browsing behavior, conversions, device data, IP
                            address
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Advertising retargeting
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (cross-site tracking)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Stripe
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Payment card details, billing info, transaction
                            records, fraud signals
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Payment processing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (financial data)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            PayPal
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Payment info, buyer email, shipping address,
                            transaction details
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Payment processing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (financial data)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Mailchimp
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Email addresses, names, open/click rates
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Email marketing
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (consent required)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Google Maps
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            IP address, location data, Google cookies
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Location display
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (Google tracking)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            YouTube Embeds
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Viewing data, Google cookies, interaction tracking
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Video content
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium (Google cookies)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Each of these integrations operates independently of
                    GoDaddy&apos;s own data collection. When a visitor lands
                    on your GoDaddy site, they may be tracked by GoDaddy
                    analytics, Google Analytics, and Facebook Pixel
                    simultaneously, with each service sending data to
                    different servers in different countries. Your privacy
                    policy must explain all of this to be compliant.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    GoDaddy Website Builder makes it easy to add third-party
                    code through its &quot;Custom Code&quot; or
                    &quot;Header/Footer Code&quot; settings. Any script you
                    add there may introduce additional tracking. If you
                    connect your GoDaddy site to platforms like{" "}
                    <Link
                      href="/privacy-policy-for-squarespace"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Squarespace
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    ,{" "}
                    <Link
                      href="/privacy-policy-for-wix"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Wix
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , or{" "}
                    <Link
                      href="/privacy-policy-for-weebly"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Weebly
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    through domain forwarding, you must also account for those
                    platforms&apos; data collection.
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
                          The average GoDaddy website with Google Analytics, a
                          payment processor, and an email marketing tool sends
                          visitor data to at least 5 to 7 different third-party
                          companies. Each of these data transfers must be
                          individually disclosed in your privacy policy under
                          GDPR Article 13, including the identity of each
                          recipient, the purpose of each transfer, and any
                          international data transfers involved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: How to Add Your Privacy Policy in GoDaddy */}
              <section id="how-to-add" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Add a Privacy Policy in GoDaddy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Step-by-step instructions for placing your policy where
                      visitors and regulators can find it.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Having a privacy policy is only half the requirement. It
                    must also be easily accessible to your visitors. Here is
                    where and how to add your privacy policy to your GoDaddy
                    site:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Create a dedicated privacy policy page",
                        desc: "In GoDaddy Website Builder, click the Pages panel and add a new page titled 'Privacy Policy.' Paste your complete privacy policy content into this page. For hosted sites, create a new HTML page or WordPress page and upload it to your server.",
                      },
                      {
                        step: "2",
                        title: "Add a footer link",
                        desc: "Add a link to your privacy policy page in your site's footer. This is the most common and expected location for privacy policy links. In GoDaddy Website Builder, edit your footer section and add a text link or navigation menu item pointing to your privacy policy page.",
                      },
                      {
                        step: "3",
                        title: "Link from all contact forms",
                        desc: "Every form on your GoDaddy site that collects personal data (contact forms, newsletter signups, appointment booking forms) should include a link to your privacy policy. Add text like 'By submitting this form, you agree to our Privacy Policy' with a link to the policy page.",
                      },
                      {
                        step: "4",
                        title: "Include in your Online Store checkout",
                        desc: "If you use GoDaddy Online Store, make sure your privacy policy is linked from the checkout flow. Add it to the checkout page footer and reference it in your order confirmation emails so customers can review your data practices.",
                      },
                      {
                        step: "5",
                        title: "Add to cookie consent notices",
                        desc: "If your site uses cookies beyond essential functionality (and most GoDaddy sites do), add a cookie consent banner that links to your privacy policy. GoDaddy does not include a built-in cookie banner, so you may need a third-party solution.",
                      },
                      {
                        step: "6",
                        title: "Reference in email marketing",
                        desc: "If you use GoDaddy Email Marketing, include a link to your privacy policy in the footer of every marketing email. This is required under CAN-SPAM and GDPR for commercial communications.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800">
                            {item.title}
                          </p>
                          <p className="text-slate-600 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    GDPR requires that your privacy policy be accessible
                    &quot;at the time when personal data are obtained.&quot;
                    This means visitors must be able to read your policy before
                    submitting any data, not just from a buried footer link.
                    Make sure your policy is prominent and easy to find.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Can I add a privacy policy to GoDaddy Website
                        Builder for free?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Yes, you can create a new page in GoDaddy Website
                        Builder at no additional cost and paste your privacy
                        policy content there. GoDaddy does not charge extra for
                        adding legal pages to your site. However, you are
                        responsible for creating the actual privacy policy
                        content.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Where should the privacy policy link appear on my
                        GoDaddy site?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        At minimum, it should be in your footer, on every form
                        that collects data, and in your checkout flow if you
                        sell products. Best practice is to also include it in
                        your cookie consent notice and email marketing
                        footers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Common GoDaddy Privacy Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common GoDaddy Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Misconceptions that leave GoDaddy site owners exposed to
                      fines and compliance issues.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    These are the five most common privacy mistakes GoDaddy
                    site owners make. Each one creates a real compliance gap
                    that can lead to regulatory action.
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;GoDaddy domain privacy is my website privacy policy&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          GoDaddy domain privacy (WHOIS protection) only hides
                          your personal registration details from public
                          databases. It does nothing for your visitors. You
                          still need a separate privacy policy that explains
                          how your website collects, processes, and stores
                          visitor data. These are entirely different concepts.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;GoDaddy SSL means my site is privacy compliant&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          SSL encrypts data in transit, which is a security
                          measure, not a privacy compliance tool. Having SSL
                          does not tell visitors what data you collect, how you
                          use it, or what their rights are. GDPR and CCPA
                          require a comprehensive privacy policy regardless of
                          your SSL status. SSL is important but it is only one
                          piece of the compliance puzzle.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I only use GoDaddy for hosting, so GoDaddy handles compliance&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          GoDaddy is a data processor, not the data controller
                          for your website. Even if GoDaddy handles the server
                          infrastructure, you are legally responsible for all
                          data collected through your website. This includes
                          server logs, analytics, form submissions, and any
                          third-party scripts running on your site. You must
                          have your own privacy policy.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;My GoDaddy site is too small to need a privacy policy&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Privacy laws like GDPR do not have a minimum website
                          size threshold. Even a single-page business card
                          website hosted on GoDaddy collects IP addresses,
                          browser data, and access logs through server
                          infrastructure. If your site is accessible to EU
                          residents, you need a privacy policy regardless of
                          how small or simple your site is.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I do not need to mention Stripe or PayPal in my privacy policy&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          If your GoDaddy site accepts payments through Stripe
                          or PayPal, you must disclose these payment processors
                          in your privacy policy. Visitors have a right to know
                          who is processing their financial data. Under GDPR
                          Article 13, you must identify all third-party
                          recipients of personal data, including payment
                          processors, and explain what data is shared with
                          them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: How to Create a Privacy Policy for Your GoDaddy Site */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your GoDaddy Site
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A step-by-step process to generate a compliant privacy
                      policy tailored to your GoDaddy website.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Creating a privacy policy for your GoDaddy site does not
                    have to be complicated. Follow these six steps to create a
                    policy that covers all your GoDaddy-specific data
                    collection and meets GDPR and CCPA requirements.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1",
                        title: "Audit your GoDaddy site's data collection",
                        content:
                          "Go through your GoDaddy dashboard and document every feature you have enabled. Check which GoDaddy features are active: Website Builder analytics, contact forms, Online Store, Email Marketing, Appointments, and Payments. For each one, note what types of data it collects from visitors.",
                      },
                      {
                        step: "Step 2",
                        title: "Document hosting and domain data",
                        content:
                          "Identify what data GoDaddy hosting collects through server logs. Check your hosting plan type (shared, VPS, managed WordPress) and note any server-side analytics tools. Document whether you have WHOIS domain privacy and SSL certificates enabled.",
                      },
                      {
                        step: "Step 3",
                        title: "List all third-party integrations",
                        content:
                          "Review every third-party service connected to your GoDaddy site. This includes Google Analytics, Facebook Pixel, Stripe, PayPal, Mailchimp, embedded maps, video players, social media widgets, and any custom scripts in your header or footer code sections.",
                      },
                      {
                        step: "Step 4",
                        title: "Determine which privacy laws apply",
                        content:
                          "Based on where you are located and where your visitors come from, identify your legal obligations. If you have any EU visitors, GDPR applies. If you have California visitors and meet CCPA thresholds, CCPA applies. Most GoDaddy sites have a global audience, so both typically apply.",
                      },
                      {
                        step: "Step 5",
                        title: "Generate your privacy policy",
                        content:
                          "Use a privacy policy generator to create a document tailored to your GoDaddy site. Answer questions about your data practices, features, hosting setup, and integrations. A good generator will produce a policy covering all required sections including data collection, cookies, third-party sharing, user rights, and data retention.",
                      },
                      {
                        step: "Step 6",
                        title: "Add the policy to your GoDaddy site",
                        content:
                          "Create a dedicated page in GoDaddy Website Builder or your hosted site for your privacy policy. Add links from your footer, all forms, checkout flow, email marketing footers, and cookie consent notices. Make sure the policy is accessible before any data collection occurs.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="rounded-xl border border-slate-200/80 p-5"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                            {item.step}
                          </span>
                          <h3 className="font-semibold text-slate-900">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-base leading-7 text-slate-600 ml-[70px]">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    The entire process should take less than 30 minutes. The
                    most time-consuming part is the initial audit of your
                    GoDaddy features and third-party integrations. Once you
                    know what data you collect, the{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      policy generation
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    itself takes under 60 seconds.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 9: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {faqSchema.mainEntity.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200/80 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {faq.name}
                          </h3>
                          <p className="mt-2 text-base leading-7 text-slate-600">
                            {faq.acceptedAnswer.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                      Generate Your GoDaddy Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy
                      for your GoDaddy website in under 60 seconds. Covers
                      Website Builder, Online Store, hosting, and all
                      third-party integrations.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My GoDaddy Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>GoDaddy-ready disclosures</span>
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
                      href: "/privacy-policy-for-wix",
                      icon: FileText,
                      title: "Privacy Policy for Wix",
                      desc: "Wix-specific compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-squarespace",
                      icon: FileText,
                      title: "Privacy Policy for Squarespace",
                      desc: "Squarespace compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-weebly",
                      icon: FileText,
                      title: "Privacy Policy for Weebly",
                      desc: "Weebly compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: Users,
                      title: "Privacy Policy for Small Business",
                      desc: "Small business compliance essentials",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance template and guide",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks and penalties explained",
                    },
                    {
                      href: "/generate",
                      icon: Settings,
                      title: "Privacy Policy Generator",
                      desc: "Generate your policy in 60 seconds",
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
