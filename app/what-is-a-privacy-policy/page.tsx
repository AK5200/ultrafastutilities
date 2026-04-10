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
  Clock,
  BookOpen,
  Cookie,
  Ban,
  Scale,
  Info,
  Layers,
  History,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "What Is a Privacy Policy? Simple Explanation (2026) | ultrafastutilities",
  description:
    "A privacy policy is a legal document that explains how you collect, use, and protect personal data. Learn what it covers, who needs one, and how it differs from terms of service.",
  keywords:
    "what is a privacy policy, privacy policy definition, privacy policy meaning, privacy policy explained, what does a privacy policy do",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/what-is-a-privacy-policy",
  },
  openGraph: {
    title:
      "What Is a Privacy Policy? Simple Explanation (2026) | ultrafastutilities",
    description:
      "A privacy policy is a legal document that explains how you collect, use, and protect personal data. Learn what it covers, who needs one, and how it differs from terms of service.",
    url: "https://ultrafastutilities.com/what-is-a-privacy-policy",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "What Is a Privacy Policy? | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What Is a Privacy Policy? Simple Explanation (2026)",
    description:
      "A privacy policy is a legal document that explains how you collect, use, and protect personal data. Learn what it covers, who needs one, and how it differs from terms of service.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a privacy policy in simple terms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A privacy policy is a legal document on a website or app that tells visitors exactly what personal information you collect (like email addresses, IP addresses, or payment details), why you collect it, how you use it, who you share it with, and how people can control or delete their data. It is required by laws like GDPR, CCPA, and CalOPPA whenever you collect any personal data.",
      },
    },
    {
      "@type": "Question",
      name: "Is a privacy policy the same as terms and conditions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A privacy policy explains how you handle personal data. Terms and conditions (or terms of service) are a contract that governs how users may use your website or app, covering things like acceptable behaviour, intellectual property, liability limits, and dispute resolution. They are separate documents with different purposes, and most websites need both.",
      },
    },
    {
      "@type": "Question",
      name: "Does every website need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtually yes. If your website uses analytics, has a contact form, sets cookies, displays ads, collects email addresses, or uses any third-party service like Google Fonts, it collects personal data. Under GDPR, CCPA, and CalOPPA, collecting personal data triggers the legal requirement for a privacy policy. Even a simple blog with Google Analytics needs one.",
      },
    },
    {
      "@type": "Question",
      name: "What should a privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A privacy policy should include: what personal data you collect, how and why you collect it, the legal basis for processing (under GDPR), who you share data with (third-party services), how long you keep data, how users can access or delete their data, your cookie practices, how you protect data, and your contact information. Specific laws require specific disclosures, so the exact contents depend on which laws apply to you.",
      },
    },
    {
      "@type": "Question",
      name: "Can I write my own privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but it must be accurate and cover all legally required disclosures. Writing from scratch requires understanding GDPR, CCPA, CalOPPA, and other applicable laws. A privacy policy generator is a practical alternative: you answer questions about your data practices and receive a structured, compliant document. Avoid copying another website's policy, as it will not reflect your specific data practices.",
      },
    },
    {
      "@type": "Question",
      name: "How is a privacy policy different from a cookie policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A privacy policy covers all personal data collection and processing across your website or app. A cookie policy specifically addresses what cookies and tracking technologies your site uses, what data they collect, and how users can manage cookie preferences. Some websites combine them into one document, but GDPR and the ePrivacy Directive recommend a separate, detailed cookie policy.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I do not have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consequences include GDPR fines up to 20 million euros or 4% of global annual turnover, CCPA penalties of $7,500 per intentional violation, Google Analytics and AdSense account suspension, Apple App Store and Google Play Store app removal, and loss of user trust. The cost of creating a privacy policy is negligible compared to any of these risks.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Website",
  description:
    "Step-by-step guide to creating a privacy policy that covers your legal obligations.",
  step: [
    {
      "@type": "HowToStep",
      name: "Audit your data collection",
      text: "List every piece of personal data your website or app collects: email addresses, names, IP addresses, cookies, payment information, device data, and anything else. Check analytics tools, forms, embedded content, and third-party scripts.",
    },
    {
      "@type": "HowToStep",
      name: "Identify all third-party services",
      text: "Document every third-party service that processes your users' data: Google Analytics, email marketing tools (Mailchimp, ConvertKit), payment processors (Stripe, PayPal), ad networks, social media embeds, CDNs, and hosting providers.",
    },
    {
      "@type": "HowToStep",
      name: "Determine which laws apply",
      text: "Based on where your users are located, identify the applicable privacy laws. GDPR applies if you have EU visitors, CCPA applies for California residents, CalOPPA applies for any site collecting data from Californians, and platform-specific requirements apply for Google, Apple, and Meta.",
    },
    {
      "@type": "HowToStep",
      name: "Draft or generate your policy",
      text: "Write your privacy policy covering all required disclosures, or use a privacy policy generator that asks about your specific setup and produces a structured, compliant document. Avoid copying another site's policy or using vague, generic language.",
    },
    {
      "@type": "HowToStep",
      name: "Publish and link it properly",
      text: "Host your privacy policy on a dedicated, publicly accessible page (typically /privacy-policy). Link to it from your website footer, signup forms, checkout pages, app store listings, and anywhere you collect personal data.",
    },
    {
      "@type": "HowToStep",
      name: "Review and update regularly",
      text: "Review your privacy policy whenever you add new tools, change data practices, or when laws are updated. At minimum, review it every 6 to 12 months. Update the 'last updated' date each time you make changes.",
    },
  ],
};

const tocSections = [
  { id: "definition", title: "Simple Definition" },
  { id: "what-it-covers", title: "What It Covers" },
  { id: "who-needs-one", title: "Who Needs One" },
  { id: "comparison", title: "Privacy Policy vs Terms vs Cookie Policy" },
  { id: "legal-requirements", title: "Legal Requirements by Country" },
  { id: "history", title: "Brief History" },
  { id: "what-makes-good", title: "What Makes a Good One" },
  { id: "common-myths", title: "Common Myths" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function WhatIsAPrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "What Is a Privacy Policy? Simple Explanation (2026)",
            description:
              "A privacy policy is a legal document that explains how you collect, use, and protect personal data. Learn what it covers, who needs one, and how it differs from terms of service.",
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
                name: "What Is a Privacy Policy?",
                item: "https://ultrafastutilities.com/what-is-a-privacy-policy",
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
                What Is a Privacy Policy?
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Privacy Basics
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                What Is a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Privacy Policy?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A privacy policy is a legal document that tells your users what
                personal data you collect, why you collect it, how you use it,
                and what rights they have over it. Here is everything you need
                to know, explained simply.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For website owners, app developers, and anyone building online.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: April 2026 &middot; Reviewed for GDPR, CCPA &amp; CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/is-a-privacy-policy-legally-required"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Is It Legally Required?
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-vs-terms-and-conditions"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy vs Terms
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
                  <span>14 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>A privacy policy is a legal document that explains how a website, app, or business collects, uses, stores, shares, and protects personal data.</strong>{" "}
                  It tells users what information you gather (email addresses, IP
                  addresses, payment details, cookies), why you gather it, who has
                  access to it, how long you keep it, and what rights users have
                  over their data. Privacy laws including GDPR, CCPA, and CalOPPA
                  require one whenever you collect any personal data.
                </p>
              </div>

              {/* Section 1: Simple Definition */}
              <section id="definition" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      A Simple Definition of a Privacy Policy
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    A privacy policy is a written statement that discloses how
                    an organization handles the personal data of its users,
                    customers, or visitors. Think of it as a transparency
                    agreement: you are telling people exactly what happens to
                    their information when they interact with your website,
                    app, or service.
                  </p>
                  <p>
                    The purpose is straightforward. When someone visits your
                    website, fills out a form, makes a purchase, or downloads
                    your app, you collect information about them. A privacy
                    policy explains what that information is, why you need it,
                    what you do with it, and how people can control it. It
                    exists to protect users and to keep your business compliant
                    with data protection laws.
                  </p>
                  <p>
                    Privacy policies are not optional. Laws like the General
                    Data Protection Regulation (GDPR) in Europe, the California
                    Consumer Privacy Act (CCPA), and the California Online
                    Privacy Protection Act (CalOPPA) all{" "}
                    <Link
                      href="/is-a-privacy-policy-legally-required"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      legally require
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    websites and apps that collect personal data to have one.
                    Third-party platforms like Google, Apple, and Stripe also
                    require a privacy policy as a condition of using their
                    services.
                  </p>
                  <p>
                    A privacy policy is typically hosted on a dedicated page
                    (for example, yoursite.com/privacy-policy) and linked from
                    the website footer, signup forms, checkout pages, and app
                    store listings. It should be written in clear, plain
                    language that a regular person can understand, not buried in
                    legal jargon.
                  </p>

                  {/* Mini FAQ 1 */}
                  <div className="mt-6 space-y-3">
                    {[
                      {
                        q: "Is a privacy policy the same as a disclaimer?",
                        a: "No. A disclaimer limits your liability (for example, 'this is not legal advice'). A privacy policy discloses your data practices. They serve entirely different legal purposes and are separate documents.",
                      },
                      {
                        q: "Do I need a privacy policy if my website does not ask for any information?",
                        a: "Almost certainly yes. Even if you have no forms, your website likely uses analytics (Google Analytics), sets cookies, loads third-party fonts, or has a hosting provider that logs IP addresses. All of these count as personal data collection under GDPR.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="rounded-lg bg-slate-50 border border-slate-200/70 px-4 py-3"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {item.q}
                        </p>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 2: What a Privacy Policy Covers */}
              <section id="what-it-covers" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Does a Privacy Policy Cover?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      The 12 sections found in a complete privacy policy.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    A well-structured privacy policy addresses every aspect of
                    how personal data flows through your website or app. Here
                    are the sections a complete privacy policy should include,
                    and what each one covers.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Section
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            What It Explains
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Required By
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                          [
                            "Data types collected",
                            "Email addresses, names, IP addresses, device data, payment info, cookies",
                            "GDPR, CCPA, CalOPPA",
                          ],
                          [
                            "How data is collected",
                            "Forms, analytics scripts, cookies, embedded content, server logs",
                            "GDPR, CCPA",
                          ],
                          [
                            "Purpose of collection",
                            "Why you need the data: to provide services, send marketing, improve the product",
                            "GDPR (Article 13), CCPA",
                          ],
                          [
                            "Legal basis for processing",
                            "Consent, legitimate interest, contractual necessity, or legal obligation",
                            "GDPR (Article 6)",
                          ],
                          [
                            "Third-party sharing",
                            "Which services receive user data: analytics, email tools, payment processors, ad networks",
                            "GDPR, CCPA, CalOPPA",
                          ],
                          [
                            "Data retention",
                            "How long you store personal data and the criteria for deciding retention periods",
                            "GDPR (Article 13)",
                          ],
                          [
                            "User rights",
                            "Access, rectification, erasure, restriction, portability, objection (GDPR); know, delete, opt out (CCPA)",
                            "GDPR, CCPA, VCDPA",
                          ],
                          [
                            "Cookie practices",
                            "What cookies your site sets, their purpose, and how users can manage preferences",
                            "GDPR ePrivacy, CalOPPA",
                          ],
                          [
                            "Data security measures",
                            "Encryption, secure storage, access controls, and how you protect personal data",
                            "GDPR (Article 32)",
                          ],
                          [
                            "International transfers",
                            "Whether data is transferred outside the user's country and what safeguards are in place",
                            "GDPR (Chapter 5)",
                          ],
                          [
                            "Children's data",
                            "Whether you knowingly collect data from children and how you handle COPPA compliance",
                            "COPPA, GDPR (Article 8)",
                          ],
                          [
                            "Contact information",
                            "How users can reach you with privacy questions, including DPO details if applicable",
                            "GDPR, CCPA, CalOPPA",
                          ],
                        ].map(([section, explains, required]) => (
                          <tr key={section} className="hover:bg-slate-50/50">
                            <td className="px-5 py-3 font-medium text-slate-800">
                              {section}
                            </td>
                            <td className="px-5 py-3 text-slate-600">
                              {explains}
                            </td>
                            <td className="px-5 py-3 text-slate-600 font-medium">
                              {required}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Not every section applies to every website. A simple blog
                    with analytics and a contact form will have shorter sections
                    than an e-commerce store processing payments and running
                    retargeting ads. The key is accuracy: your privacy policy
                    should reflect exactly what you actually do with user data,
                    nothing more and nothing less.
                  </p>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For a detailed walkthrough of each section, see{" "}
                    <Link
                      href="/what-should-a-privacy-policy-include"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      what should a privacy policy include
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
                          A 2024 study by the Pew Research Center found that only
                          9% of adults say they always read a website&apos;s
                          privacy policy before agreeing to it. Despite low
                          readership, privacy policies remain legally required
                          and serve as the enforceable record of what you
                          promised users about their data. Regulators and courts
                          reference them when evaluating compliance, regardless
                          of whether individual users read them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 3: Who Needs a Privacy Policy */}
              <section id="who-needs-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Who Needs a Privacy Policy?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Short answer: virtually everyone with a website, app, or
                      online service.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    The test is simple: do you collect any personal data from
                    any person? If yes, you need a privacy policy. Personal data
                    includes email addresses, names, IP addresses, device
                    identifiers, cookie data, location information, payment
                    details, and any information that can directly or indirectly
                    identify a person.
                  </p>

                  <p>
                    Here are the most common situations that require a privacy
                    policy:
                  </p>

                  {[
                    {
                      title: "Websites with analytics",
                      desc: "Google Analytics, Plausible, Fathom, or any analytics tool collects IP addresses, browser data, device information, and page views. Under GDPR, an IP address alone is personal data. Google Analytics Terms of Service also contractually require a privacy policy.",
                    },
                    {
                      title: "Websites with contact or signup forms",
                      desc: "Any form that asks for a name, email, phone number, or message collects personal data. This applies to newsletter signups, contact forms, lead magnets, waitlists, and account registration.",
                    },
                    {
                      title: "E-commerce stores",
                      desc: "Online stores collect names, addresses, payment information, and purchase history. Payment processors like Stripe and PayPal are third-party services that must be disclosed.",
                    },
                    {
                      title: "Mobile apps",
                      desc: "Apps collect device IDs, location data, usage patterns, and often require account creation. Both the Apple App Store and Google Play Store require a privacy policy for all apps.",
                    },
                    {
                      title: "SaaS applications",
                      desc: "Software-as-a-service platforms collect user accounts, usage data, billing information, and API logs. If your users are businesses, you may also need a Data Processing Agreement (DPA).",
                    },
                    {
                      title: "Blogs and content sites",
                      desc: "Even a personal blog with analytics, a comment section, or embedded YouTube videos collects personal data. WordPress, Ghost, and other CMS platforms set cookies by default.",
                    },
                    {
                      title: "Chrome extensions and browser add-ons",
                      desc: "Browser extensions that access any user data, browsing history, or website content need a privacy policy. The Chrome Web Store requires one for all extensions.",
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

                  <p className="text-base leading-7 text-slate-700">
                    The only theoretical exception is a completely static HTML
                    page with zero JavaScript, no forms, no analytics, no
                    cookies, no embedded content, and self-hosted fonts. Even
                    then, your hosting provider logs IP addresses in server
                    access logs, which constitutes personal data processing
                    under GDPR. In practice, every modern website needs a
                    privacy policy.
                  </p>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For the full legal analysis, see{" "}
                    <Link
                      href="/is-a-privacy-policy-legally-required"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      is a privacy policy legally required
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 4: Privacy Policy vs Terms vs Cookie Policy */}
              <section id="comparison" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Privacy Policy vs Terms of Service vs Cookie Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Three different documents with three different purposes.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    People often confuse privacy policies with terms of service
                    or cookie policies. While all three are legal documents for
                    websites, they serve distinct purposes and cover different
                    areas. Most websites need all three.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Document
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Purpose
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Covers
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Legally Required?
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                          [
                            "Privacy Policy",
                            "Discloses data handling practices",
                            "Data collection, usage, sharing, retention, user rights, security",
                            "Yes (GDPR, CCPA, CalOPPA)",
                          ],
                          [
                            "Terms of Service",
                            "Governs use of your website or app",
                            "Acceptable use, intellectual property, liability, disputes, termination",
                            "Not required by law, but strongly recommended",
                          ],
                          [
                            "Cookie Policy",
                            "Explains cookie and tracking usage",
                            "Cookie types, purposes, third-party cookies, how to manage preferences",
                            "Yes (EU ePrivacy Directive, GDPR)",
                          ],
                        ].map(([doc, purpose, covers, required]) => (
                          <tr key={doc} className="hover:bg-slate-50/50">
                            <td className="px-5 py-3 font-medium text-slate-800">
                              {doc}
                            </td>
                            <td className="px-5 py-3 text-slate-600">
                              {purpose}
                            </td>
                            <td className="px-5 py-3 text-slate-600">
                              {covers}
                            </td>
                            <td className="px-5 py-3 text-slate-600 font-medium">
                              {required}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    A privacy policy is about your data practices. Terms of
                    service are about your rules for using the site. A cookie
                    policy is a focused subset of data disclosure that
                    specifically addresses cookies and tracking technologies.
                    Some websites include cookie disclosures within their
                    privacy policy, but the EU ePrivacy Directive recommends a
                    separate, detailed cookie policy.
                  </p>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For a detailed comparison, see{" "}
                    <Link
                      href="/privacy-policy-vs-terms-and-conditions"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy vs terms and conditions
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/cookie-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      cookie policy for websites
                      <ArrowUpRight className="w-3 h-3" />
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
                          Unlike terms of service, which are essentially a
                          contract you can design however you want, a privacy
                          policy has specific legal requirements dictated by
                          GDPR, CCPA, and other laws. You cannot simply write
                          &quot;we may collect some data&quot; and call it
                          compliant. Each law specifies exact disclosures you
                          must include, and failure to include them can result
                          in fines even if your actual data practices are
                          perfectly reasonable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 5: Legal Requirements by Country */}
              <section id="legal-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Legal Requirements by Country
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      137 out of 194 countries have data protection laws. Here
                      are the most prominent.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Privacy policy requirements are not limited to one country
                    or region. Multiple laws can apply to the same website
                    simultaneously, based on where your users are located. A
                    website operated from the United States with visitors from
                    Europe, California, Canada, and Brazil is subject to GDPR,
                    CCPA, CalOPPA, PIPEDA, and LGPD all at once.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Law
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Region
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Key Privacy Policy Requirements
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Maximum Penalty
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                          [
                            "GDPR",
                            "EU / UK",
                            "Disclose data types, purposes, legal basis, third parties, retention, all user rights, DPO contact",
                            "\u20AC20M or 4% of global turnover",
                          ],
                          [
                            "CCPA / CPRA",
                            "California, USA",
                            "Categories of data collected, purposes, third-party sharing, consumer rights (know, delete, opt out)",
                            "$7,500 per intentional violation",
                          ],
                          [
                            "CalOPPA",
                            "California, USA",
                            "Conspicuous privacy policy, PII categories, third parties, effective date, Do Not Track disclosure",
                            "$2,500 per violation",
                          ],
                          [
                            "PIPEDA",
                            "Canada",
                            "Purposes for collection, consent, limited collection, accuracy, safeguards, openness",
                            "CAD $100,000 per violation",
                          ],
                          [
                            "LGPD",
                            "Brazil",
                            "Data types, purposes, data controller identity, third-party sharing, user rights",
                            "2% of revenue, up to R$50M",
                          ],
                          [
                            "POPIA",
                            "South Africa",
                            "Purpose limitation, data minimization, data subject rights, security measures",
                            "R10 million or imprisonment",
                          ],
                          [
                            "Privacy Act 1988",
                            "Australia",
                            "APP privacy policy, data types, purposes, access and correction, overseas disclosures",
                            "AUD $50 million per violation",
                          ],
                          [
                            "DPDPA",
                            "India",
                            "Notice of collection, purpose limitation, data principal rights, consent management",
                            "Up to INR 250 crore (~$30M)",
                          ],
                        ].map(([law, region, requirements, penalty]) => (
                          <tr key={law} className="hover:bg-slate-50/50">
                            <td className="px-5 py-3 font-medium text-slate-800">
                              {law}
                            </td>
                            <td className="px-5 py-3 text-slate-600">
                              {region}
                            </td>
                            <td className="px-5 py-3 text-slate-600">
                              {requirements}
                            </td>
                            <td className="px-5 py-3 text-slate-600 font-medium">
                              {penalty}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Beyond these, at least 19 US states have passed their own
                    comprehensive privacy laws, including Virginia, Colorado,
                    Connecticut, Texas, and Oregon. The global trend is clear:
                    privacy legislation is expanding, not contracting. If you
                    have a public-facing website indexed by search engines, the
                    safe assumption is that multiple privacy laws apply to you.
                  </p>

                  {/* Mini FAQ 2 */}
                  <div className="mt-6 space-y-3">
                    {[
                      {
                        q: "What if my website only targets one country?",
                        a: "Laws like GDPR apply based on where your users are, not where you target. If a European visitor finds your site through Google, GDPR applies to that visit. Since you cannot control who visits a public website, you effectively need to comply with the broadest set of applicable laws.",
                      },
                      {
                        q: "Do US state privacy laws apply to all websites?",
                        a: "Most US state laws (except CalOPPA) have thresholds based on revenue, data volume, or number of consumers. CalOPPA has no threshold at all. GDPR also has no thresholds. So even if specific US state laws do not apply due to thresholds, CalOPPA and GDPR still require a privacy policy for virtually every website.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="rounded-lg bg-slate-50 border border-slate-200/70 px-4 py-3"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {item.q}
                        </p>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 6: Brief History of Privacy Policies */}
              <section id="history" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      A Brief History of Privacy Policies
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Privacy policies did not always exist on the internet. Their
                    history tracks the growth of online data collection and the
                    regulatory responses it triggered.
                  </p>

                  {[
                    {
                      title: "1970s: The beginning",
                      desc: "The concept of data privacy emerged with mainframe computing. Sweden passed the world's first national data protection law in 1973 (the Data Act). The US followed with the Privacy Act of 1974, which governed federal agency data practices.",
                    },
                    {
                      title: "1990s: The early web era",
                      desc: "As commercial websites emerged, data collection grew rapidly. In 1998, the US passed the Children's Online Privacy Protection Act (COPPA), requiring parental consent before collecting data from children under 13. The EU adopted its Data Protection Directive (95/46/EC) in 1995, establishing the first comprehensive framework.",
                    },
                    {
                      title: "2003-2004: CalOPPA",
                      desc: "California passed the Online Privacy Protection Act (CalOPPA), the first US state law requiring commercial websites to post a privacy policy. Because any website accessible to Californians is covered, CalOPPA effectively became a national requirement.",
                    },
                    {
                      title: "2018: The GDPR era",
                      desc: "The EU's General Data Protection Regulation took effect on May 25, 2018, replacing the 1995 Directive. GDPR introduced strict requirements for privacy notices, individual rights, data protection officers, and massive fines (up to 4% of global turnover). Its extraterritorial reach meant it applied to websites worldwide that have EU visitors.",
                    },
                    {
                      title: "2020: CCPA takes effect",
                      desc: "The California Consumer Privacy Act gave California residents the right to know what data businesses collect, request deletion, and opt out of data sales. CPRA later amended it in 2023, adding new rights and creating the California Privacy Protection Agency.",
                    },
                    {
                      title: "2023-2026: The state law wave",
                      desc: "At least 19 US states passed comprehensive privacy laws. India enacted the Digital Personal Data Protection Act. Brazil's LGPD matured. The global trend toward comprehensive privacy legislation accelerated, making privacy policies more important and more detailed than ever before.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <History className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
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

                  {/* Did you know box 3 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          In 2023, European data protection authorities issued
                          fines totaling over &euro;2.1 billion under GDPR. Meta
                          alone received a record &euro;1.2 billion fine from the
                          Irish Data Protection Commission for unlawful data
                          transfers. The scale of enforcement has grown
                          dramatically since GDPR took effect in 2018, when
                          total fines across all of Europe were under &euro;100
                          million. Privacy policies are no longer a formality.
                          They are the primary document regulators examine when
                          evaluating whether a business complies with data
                          protection law.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 7: What Makes a Good Privacy Policy */}
              <section id="what-makes-good" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Makes a Good Privacy Policy?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      The difference between a compliant policy and a generic one.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    A good privacy policy is not just about checking legal
                    boxes. It should be clear, specific, accurate, and easy to
                    find. Here is what separates a good privacy policy from a
                    bad one.
                  </p>

                  {[
                    {
                      title: "Plain language, not legal jargon",
                      desc: "GDPR Article 12 requires that privacy information be provided in 'concise, transparent, intelligible, and easily accessible form, using clear and plain language.' If a regular person cannot understand your privacy policy, it may not be compliant. Avoid phrases like 'we may share your information with our affiliates' when you can say 'we share your email address with Mailchimp to send newsletters.'",
                    },
                    {
                      title: "Specific, not generic",
                      desc: "Name your actual tools and services. Instead of 'we use third-party analytics,' say 'we use Google Analytics, which collects IP addresses, browser type, and pages viewed.' A generic privacy policy that does not reflect your actual data practices provides no legal protection and does not satisfy GDPR's specificity requirements.",
                    },
                    {
                      title: "Accurate and up to date",
                      desc: "Your privacy policy must reflect what you currently do, not what you might do in the future. If you added a new email marketing tool last month, your policy should already name it. Review your policy whenever you change tools, add features, or modify data practices. An outdated policy is worse than no policy because it creates a false record.",
                    },
                    {
                      title: "Easy to find",
                      desc: "CalOPPA requires that your privacy policy be 'conspicuously posted.' Link it from your website footer (visible on every page), near signup forms, at checkout, and in app store listings. Do not bury it in a submenu, hide it behind a login, or host it as a downloadable PDF.",
                    },
                    {
                      title: "Dated and versioned",
                      desc: "Include a 'last updated' date at the top. GDPR requires that users be notified of material changes. Good practice is to maintain a version history or changelog so users can see what has changed over time.",
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

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For step-by-step guidance, see{" "}
                    <Link
                      href="/how-to-write-a-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      how to write a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    or use our{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy generator
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 8: Common Myths */}
              <section id="common-myths" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Layers className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Myths About Privacy Policies
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These misconceptions lead people to skip or mishandle
                      their privacy policy.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Myth 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Nobody reads privacy policies, so they do not matter&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      While it is true that few users read privacy policies in
                      full, they are not written primarily for casual readers.
                      Privacy policies are the legally enforceable record of
                      your data practices. Regulators, courts, and data
                      protection authorities reference them when investigating
                      complaints or conducting audits. An inaccurate or missing
                      privacy policy exposes you to fines and enforcement
                      regardless of whether any user ever read it.
                    </p>
                  </div>

                  {/* Myth 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I can just copy another website&apos;s privacy policy&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      A privacy policy must accurately describe your specific
                      data practices. Copying another site&apos;s policy means
                      it will list their tools (not yours), their data
                      practices (not yours), and their third-party services
                      (not yours). An inaccurate privacy policy is arguably
                      worse than having none, because it creates a false record
                      that regulators can use against you. It may also
                      constitute copyright infringement. See why{" "}
                      <Link
                        href="/how-to-create-a-privacy-policy-for-free"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        creating your own policy for free
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      is a better approach.
                    </p>
                  </div>

                  {/* Myth 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;A privacy policy protects me from lawsuits&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      A privacy policy is not a liability shield. It is a
                      transparency document. Having a privacy policy does not
                      prevent users from suing you if you mishandle their data.
                      In fact, if your privacy policy says one thing and your
                      actual practices do something different, the policy
                      becomes evidence against you. The FTC has pursued
                      enforcement actions against companies specifically for
                      making promises in their privacy policy that they did not
                      keep.
                    </p>
                  </div>

                  {/* Myth 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I only need a privacy policy if I sell data&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Selling data is just one of many activities that require
                      a privacy policy. Collecting data, storing data, sharing
                      data with third-party tools (like sending emails through
                      Mailchimp or tracking visitors with Google Analytics),
                      and simply processing data all trigger privacy policy
                      requirements under GDPR. The requirement is about data
                      processing, not data selling. If you collect a single
                      email address or set a single cookie, you need a privacy
                      policy.
                    </p>
                  </div>

                  {/* Myth 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Once written, a privacy policy never needs updating&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      A privacy policy is a living document. It must be updated
                      whenever you change your data practices: adding a new
                      analytics tool, switching email providers, integrating a
                      new payment processor, or expanding into new markets. Laws
                      also change. CCPA was amended by CPRA. New US state laws
                      take effect regularly. At minimum, review your policy
                      every 6 to 12 months. See{" "}
                      <Link
                        href="/what-happens-without-a-privacy-policy"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        what happens without a privacy policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      for the consequences of neglecting updates.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

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
                      Generate Your Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your website or app and get
                      a customized privacy policy that covers GDPR, CCPA,
                      CalOPPA, and platform requirements in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Privacy + Cookie + ToS</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted{" "}
                      <Link
                        href="/how-to-write-a-privacy-policy"
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        GDPR
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/is-a-privacy-policy-legally-required"
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        CCPA
                      </Link>{" "}
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

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

                <div className="pl-0 sm:pl-[52px] space-y-6">
                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What is a privacy policy in simple terms?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      A privacy policy is a legal document on a website or app
                      that tells visitors exactly what personal information you
                      collect, why you collect it, how you use it, who you share
                      it with, and how people can control or delete their data.
                      It is required by laws like GDPR, CCPA, and CalOPPA
                      whenever you collect any personal data.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Is a privacy policy the same as terms and conditions?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      No. A privacy policy explains how you handle personal
                      data. Terms and conditions (or terms of service) are a
                      contract governing how users may use your website or app,
                      covering acceptable behaviour, intellectual property,
                      liability limits, and dispute resolution. They are
                      separate documents. For details, see{" "}
                      <Link
                        href="/privacy-policy-vs-terms-and-conditions"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        privacy policy vs terms and conditions
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does every website need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Virtually yes. If your website uses analytics, has a
                      contact form, sets cookies, displays ads, collects email
                      addresses, or uses any third-party service, it collects
                      personal data. Under GDPR, CCPA, and CalOPPA, collecting
                      personal data triggers the legal requirement. Even a
                      simple blog with Google Analytics needs one.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What should a privacy policy include?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      A privacy policy should include: what personal data you
                      collect, how and why you collect it, the legal basis for
                      processing (GDPR), who you share data with, how long you
                      keep data, how users can access or delete their data, your
                      cookie practices, security measures, and contact
                      information. See{" "}
                      <Link
                        href="/what-should-a-privacy-policy-include"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        what should a privacy policy include
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      for the full breakdown.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Can I write my own privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes, but it must be accurate and cover all legally
                      required disclosures for your specific situation. Writing
                      from scratch requires understanding GDPR, CCPA, CalOPPA,
                      and other applicable laws. A{" "}
                      <Link
                        href="/generate"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        privacy policy generator
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      is a practical alternative that produces a structured,
                      compliant document based on your answers.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      How is a privacy policy different from a cookie policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      A privacy policy covers all personal data collection and
                      processing. A cookie policy specifically addresses cookies
                      and tracking technologies: what cookies your site sets,
                      what data they collect, and how users can manage
                      preferences. Some websites combine them, but GDPR and the
                      ePrivacy Directive recommend a separate{" "}
                      <Link
                        href="/cookie-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        cookie policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What happens if I do not have a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Consequences include GDPR fines up to &euro;20 million or
                      4% of global annual turnover, CCPA penalties of $7,500 per
                      intentional violation, Google Analytics and AdSense
                      account suspension, Apple App Store and Google Play Store
                      app removal, and loss of user trust. See{" "}
                      <Link
                        href="/what-happens-without-a-privacy-policy"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        what happens without a privacy policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      for the full breakdown.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Related Resources */}
              <section id="resources" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/what-should-a-privacy-policy-include",
                      icon: FileText,
                      title: "What Should It Include?",
                      desc: "Detailed breakdown of required sections",
                    },
                    {
                      href: "/how-to-write-a-privacy-policy",
                      icon: BookOpen,
                      title: "How to Write a Privacy Policy",
                      desc: "Step-by-step writing guide",
                    },
                    {
                      href: "/is-a-privacy-policy-legally-required",
                      icon: Scale,
                      title: "Is It Legally Required?",
                      desc: "Full legal analysis by jurisdiction",
                    },
                    {
                      href: "/privacy-policy-vs-terms-and-conditions",
                      icon: Layers,
                      title: "Privacy Policy vs Terms",
                      desc: "Understanding the difference",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: Cookie,
                      title: "Cookie Policy Guide",
                      desc: "Cookie tracking and consent",
                    },
                    {
                      href: "/how-to-create-a-privacy-policy-for-free",
                      icon: Globe,
                      title: "Create a Policy for Free",
                      desc: "Free options and generators",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "Risks Without a Policy",
                      desc: "Fines, bans, and legal consequences",
                    },
                    {
                      href: "/generate",
                      icon: ShieldCheck,
                      title: "Generate Your Policy",
                      desc: "Customized policy in 60 seconds",
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
