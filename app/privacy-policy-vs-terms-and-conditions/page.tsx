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
  Scale,
  Ban,
  Lock,
  Users,
  Layers,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy vs Terms and Conditions: What's the Difference? (2026) | ultrafastutilities",
  description:
    "Privacy policy vs terms and conditions: one is legally required, the other protects your business. Learn the key differences, what each must include, and whether you need both for your website.",
  keywords:
    "privacy policy vs terms and conditions, privacy policy vs terms of service, difference between privacy policy and terms and conditions, do i need both privacy policy and terms of service, terms and conditions vs privacy policy, privacy policy or terms of service",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-vs-terms-and-conditions",
  },
  openGraph: {
    title:
      "Privacy Policy vs Terms and Conditions: What's the Difference? (2026) | ultrafastutilities",
    description:
      "Privacy policy vs terms and conditions: one is legally required, the other protects your business. Learn the key differences, what each must include, and whether you need both.",
    url: "https://ultrafastutilities.com/privacy-policy-vs-terms-and-conditions",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy vs Terms and Conditions | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy vs Terms and Conditions: What's the Difference? (2026)",
    description:
      "Privacy policy vs terms and conditions: one is legally required, the other protects your business. Learn the key differences and whether you need both.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a privacy policy and terms and conditions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A privacy policy explains how you collect, use, store, and share personal data. It protects users and is required by law (GDPR, CCPA, CalOPPA). Terms and conditions set the rules for using your website or service, including liability limits, refund policies, and user conduct. They protect your business and are generally not required by law but strongly recommended.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need both a privacy policy and terms and conditions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your website collects any personal data (analytics, contact forms, cookies, user accounts), you legally need a privacy policy under GDPR, CCPA, and CalOPPA. Terms and conditions are not legally required in most jurisdictions, but they are strongly recommended because they limit your liability, set user conduct rules, and protect your intellectual property. Most websites should have both.",
      },
    },
    {
      "@type": "Question",
      name: "Is a privacy policy legally required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your website collects any personal data from visitors, including through analytics, cookies, contact forms, or user accounts, a privacy policy is legally required under GDPR (EU/UK), CCPA (California), CalOPPA, PIPEDA (Canada), and similar laws worldwide. Fines for non-compliance can reach €20 million under GDPR or $7,500 per violation under CCPA.",
      },
    },
    {
      "@type": "Question",
      name: "Are terms and conditions legally required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, terms and conditions are not legally required in most jurisdictions. However, without them, you have no legal agreement governing how users interact with your site. This means you cannot enforce user conduct rules, limit your liability for user-generated content, set refund or cancellation policies, or protect your intellectual property. Most legal professionals strongly recommend having terms and conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Can I combine my privacy policy and terms and conditions into one document?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technically yes, but it is not recommended. GDPR requires your privacy policy to be written in clear, concise language and presented separately from other agreements. Combining them makes it harder for users to find privacy-specific information, which can be seen as non-compliant with GDPR's transparency principle. Best practice is to keep them as two separate, clearly linked documents.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I display my privacy policy and terms and conditions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both should be linked from your website footer on every page. Your privacy policy must also be linked from cookie consent banners, sign-up forms, and checkout pages. Terms and conditions should be presented with a checkbox or 'I agree' mechanism during account creation or purchases. Both should be accessible in no more than two clicks from any page on your site.",
      },
    },
    {
      "@type": "Question",
      name: "Who protects whom: privacy policy vs terms and conditions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A privacy policy primarily protects your users by informing them how their personal data is handled. Terms and conditions primarily protect your business by limiting your liability, setting usage rules, and establishing legal ground rules. You need both because one protects users (legally required) and the other protects you (strongly recommended).",
      },
    },
  ],
};

const tocSections = [
  { id: "key-difference", title: "The Key Difference" },
  { id: "side-by-side", title: "Side-by-Side Comparison" },
  { id: "privacy-policy-explained", title: "Privacy Policy Explained" },
  { id: "terms-explained", title: "Terms & Conditions Explained" },
  { id: "do-you-need-both", title: "Do You Need Both?" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "where-to-display", title: "Where to Display Them" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyVsTermsAndConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy vs Terms and Conditions: What's the Difference? (2026)",
            description:
              "Privacy policy vs terms and conditions: one is legally required, the other protects your business. Learn the key differences, what each must include, and whether you need both.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-03",
            dateModified: "2026-03-03",
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
                name: "Privacy Policy vs Terms and Conditions",
                item: "https://ultrafastutilities.com/privacy-policy-vs-terms-and-conditions",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                Privacy Policy vs Terms and Conditions
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Scale className="w-3.5 h-3.5" />
                Comparison Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy vs Terms and{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Conditions
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                They are not the same thing. A privacy policy is legally
                required and protects your users. Terms and conditions are
                optional but protect your business. Here is exactly how they
                differ, what each must include, and whether you need both.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For website owners, app developers, and online business
                operators.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp; UK compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/terms-of-service-for-online-business"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Terms of Service Guide
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
                <span>Last updated: March 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>11 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>A privacy policy</strong> explains how you collect,
                  use, and protect personal data. It is legally required under
                  GDPR, CCPA, and CalOPPA. <strong>Terms and conditions</strong>{" "}
                  set the rules for using your website or service, including
                  liability limits and user conduct. They are not legally
                  required but protect your business from lawsuits. Most
                  websites need both, but only the privacy policy carries
                  legal penalties for non-compliance.
                </p>
              </div>

              {/* ── Section 1: The Key Difference ── */}
              <section id="key-difference" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      The Key Difference in One Sentence
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    A{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    tells your users how you handle their data. {" "}
                    <Link
                      href="/terms-of-service-for-online-business"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Terms and conditions
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    tell your users how they can use your website. One protects
                    users. The other protects you.
                  </p>
                  <p>
                    Despite being lumped together in footer links, these are
                    fundamentally different documents with different purposes,
                    different legal requirements, and different audiences. The
                    most common mistake website owners make is thinking they
                    are interchangeable, or that having one means they do not
                    need the other.
                  </p>
                  <p>
                    Under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    ,{" "}
                    <Link
                      href="/ccpa-privacy-policy-example"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      CCPA
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , and CalOPPA, a privacy policy is a legal requirement. You
                    face fines for not having one. Terms and conditions are not
                    legally mandated by any major privacy law, but operating
                    without them leaves your business exposed to disputes,
                    chargebacks, and liability claims with no legal framework
                    to fall back on.
                  </p>
                </div>

                {/* Quick Summary Box */}
                <div className="mt-6 pl-0 sm:pl-[52px] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-blue-200/80 bg-blue-50/30 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Lock className="w-5 h-5 text-blue-600" />
                      <h3 className="font-semibold text-slate-900 text-sm">Privacy Policy</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>Protects <strong className="text-slate-800">users</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-slate-800">Legally required</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>Covers data collection &amp; privacy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>Fines up to &euro;20M for non-compliance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/30 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Scale className="w-5 h-5 text-slate-600" />
                      <h3 className="font-semibold text-slate-900 text-sm">Terms &amp; Conditions</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>Protects <strong className="text-slate-800">your business</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span><strong className="text-slate-800">Not legally required</strong> (but recommended)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>Covers usage rules &amp; liability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>No fines, but lawsuits without one</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 2: Side-by-Side Comparison ── */}
              <section id="side-by-side" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Privacy Policy vs Terms and Conditions: Full Comparison
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Aspect
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-blue-700">
                            Privacy Policy
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Terms &amp; Conditions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                          [
                            "Primary purpose",
                            "Disclose how personal data is collected, used, stored, and shared",
                            "Set rules for using your website, app, or service",
                          ],
                          [
                            "Who it protects",
                            "Your users / visitors",
                            "Your business / you as the operator",
                          ],
                          [
                            "Legally required?",
                            "Yes, under GDPR, CCPA, CalOPPA, PIPEDA, LGPD",
                            "No (in most jurisdictions), but strongly recommended",
                          ],
                          [
                            "Penalty for not having one",
                            "Fines up to €20M (GDPR) or $7,500/violation (CCPA)",
                            "No direct fines, but no legal protection in disputes",
                          ],
                          [
                            "Key sections",
                            "Data types collected, lawful basis, third parties, retention, user rights, cookies, international transfers",
                            "User conduct, liability limits, IP ownership, refund policy, dispute resolution, termination",
                          ],
                          [
                            "User consent required?",
                            "Must be presented before or at point of data collection; cookie consent for non-essential cookies",
                            "Usually via 'I agree' checkbox or continued use constituting acceptance",
                          ],
                          [
                            "Update frequency",
                            "Whenever data practices change; CCPA requires at least annually",
                            "Whenever service terms change; no legal minimum",
                          ],
                          [
                            "Governed by",
                            "GDPR, CCPA, CalOPPA, PIPEDA, LGPD, and national data protection laws",
                            "Contract law; varies by jurisdiction",
                          ],
                          [
                            "Where to display",
                            "Footer, cookie banner, sign-up forms, checkout pages",
                            "Footer, account registration, checkout pages",
                          ],
                          [
                            "Can they be combined?",
                            "Technically yes, but GDPR requires privacy info to be separate and easy to find. Not recommended.",
                            "Same. Keep them as two separate documents for clarity and compliance.",
                          ],
                        ].map(([aspect, privacy, terms]) => (
                          <tr key={aspect} className="hover:bg-slate-50/50">
                            <td className="px-5 py-3 font-medium text-slate-800">
                              {aspect}
                            </td>
                            <td className="px-5 py-3 text-slate-600">{privacy}</td>
                            <td className="px-5 py-3 text-slate-600">{terms}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-5 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <p className="text-sm leading-relaxed text-slate-700">
                      <strong className="text-slate-900">Did you know?</strong>{" "}
                      Many website owners believe that having terms and
                      conditions is enough to cover their privacy obligations.
                      It is not. Even if your terms mention data handling, GDPR
                      Article 12 requires privacy information to be provided
                      &quot;in a concise, transparent, intelligible and easily
                      accessible form, using clear and plain language&quot; and
                      separately from other information. Burying privacy
                      disclosures inside your terms and conditions violates
                      this transparency requirement.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 3: Privacy Policy Explained ── */}
              <section id="privacy-policy-explained" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Is a Privacy Policy and Why Is It Required?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      The document that is legally required and carries fines.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    A privacy policy (called a &quot;privacy notice&quot; under
                    GDPR) is a legal document that tells your users what
                    personal data you collect, why you collect it, how you use
                    it, who you share it with, how long you keep it, and what
                    rights they have over it. It is mandated by law in virtually
                    every jurisdiction that has data protection legislation.
                  </p>
                  <p>
                    If your website uses Google Analytics, has a contact form,
                    allows user accounts, processes payments, sets{" "}
                    <Link
                      href="/cookie-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      cookies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , or collects{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-collecting-emails"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      email addresses
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , you need a privacy policy. This applies to every type of
                    website: e-commerce stores, SaaS apps,{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-a-blog"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      blogs
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , portfolios, and landing pages with a contact form.
                  </p>

                  <h3 className="font-semibold text-slate-900 text-lg mt-6">
                    What a privacy policy must include
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Your identity and contact details (data controller information)",
                      "What personal data you collect (names, emails, IPs, cookies, payment data)",
                      "Why you collect it and the lawful basis for each type (consent, legitimate interests, contract)",
                      "Who you share it with (third-party services named specifically: Google Analytics, Mailchimp, Stripe, etc.)",
                      "How long you keep it (specific retention periods for each data category)",
                      "User rights (GDPR: access, rectification, erasure, portability, objection; CCPA: know, delete, opt out)",
                      "Cookie usage and consent mechanisms",
                      "International data transfer safeguards (SCCs, IDTA, adequacy decisions)",
                      "How to lodge a complaint with the supervisory authority (ICO in UK, national DPAs in EU)",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-slate-500 mt-4">
                    For a complete walkthrough of every required section, see
                    our{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR privacy policy template
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    covering all 12 mandatory sections.
                  </p>
                </div>

                {/* Warning Box */}
                <div className="mt-6 pl-0 sm:pl-[52px] rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-amber-900 text-sm">
                        The cost of not having a privacy policy
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-amber-800">
                        GDPR fines can reach <strong>&euro;20 million</strong>{" "}
                        or <strong>4% of global annual turnover</strong>. CCPA
                        fines are <strong>$7,500 per intentional violation</strong>.
                        Enforcement exceeded <strong>&euro;2.1 billion in 2023</strong>{" "}
                        alone. Learn the full breakdown of{" "}
                        <Link
                          href="/what-happens-without-a-privacy-policy"
                          className="font-medium text-amber-900 underline underline-offset-2 hover:text-amber-700 transition-colors"
                        >
                          what happens without a privacy policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 4: Terms & Conditions Explained ── */}
              <section id="terms-explained" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Are Terms and Conditions and Why Do You Need Them?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      The document that is not required but protects your
                      business.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Terms and conditions (also called Terms of Service, Terms of
                    Use, or ToS) is a contract between you and your users. It
                    sets the rules for using your website or service. Unlike a
                    privacy policy, terms and conditions are not required by any
                    major privacy law. However, without them, you have no
                    legal agreement governing the relationship between you and
                    your users, which leaves your business vulnerable.
                  </p>
                  <p>
                    Think of it this way: if a user abuses your service, posts
                    defamatory content, files a fraudulent chargeback, or
                    scrapes your content, terms and conditions give you the
                    legal basis to take action. Without them, you are in a
                    much weaker position. For a detailed guide, see our{" "}
                    <Link
                      href="/terms-of-service-for-online-business"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      terms of service for online business
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    guide.
                  </p>

                  <h3 className="font-semibold text-slate-900 text-lg mt-6">
                    What terms and conditions typically include
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Acceptable use policy (what users can and cannot do on your site)",
                      "Limitation of liability (capping your financial exposure if something goes wrong)",
                      "Intellectual property rights (who owns the content, code, and branding)",
                      "User-generated content rules (who owns comments, reviews, or uploads, and your right to moderate)",
                      "Payment terms, refunds, and cancellation policies",
                      "Account termination conditions (when and why you can suspend or ban users)",
                      "Dispute resolution (jurisdiction, governing law, arbitration vs. court)",
                      "Disclaimer of warranties (limiting promises about uptime, accuracy, or fitness for purpose)",
                      "Indemnification clauses (users agree to cover your legal costs if their actions cause problems)",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <p className="text-sm leading-relaxed text-slate-700">
                    <strong className="text-slate-900">Did you know?</strong>{" "}
                    A{" "}
                    <Link
                      href="/privacy-policy-for-ecommerce"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      e-commerce store
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    without terms and conditions has no legal framework for
                    handling refund disputes, chargeback claims, or
                    intellectual property theft. If a customer disputes a
                    charge and you have no published refund policy in your
                    terms, the payment processor (Stripe, PayPal) will almost
                    always side with the customer. Terms and conditions turn
                    verbal expectations into enforceable agreements.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 5: Do You Need Both? ── */}
              <section id="do-you-need-both" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Do You Need Both a Privacy Policy and Terms and Conditions?
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    <strong className="text-slate-900">Short answer: yes, you should have both.</strong>{" "}
                    The privacy policy is legally required. Terms and conditions
                    are not legally required but are strongly recommended for
                    any website that involves user interaction, transactions,
                    accounts, or user-generated content.
                  </p>
                  <p>
                    Here is how to decide what you need based on your website
                    type:
                  </p>

                  <div className="space-y-4 mt-4">
                    {[
                      {
                        type: "Simple blog or portfolio",
                        privacy: "Required (if you use analytics, contact forms, or cookies)",
                        terms: "Optional (but useful if you allow comments or user submissions)",
                        link: "/do-i-need-a-privacy-policy-for-a-blog",
                        linkText: "Blog privacy policy guide",
                      },
                      {
                        type: "E-commerce store",
                        privacy: "Required (you process payment data, customer info, and cookies)",
                        terms: "Strongly recommended (refund policy, liability limits, shipping terms)",
                        link: "/privacy-policy-for-ecommerce",
                        linkText: "E-commerce privacy policy",
                      },
                      {
                        type: "SaaS application",
                        privacy: "Required (user accounts, usage data, payment data)",
                        terms: "Essential (SLA, subscription terms, data ownership, termination)",
                        link: "/privacy-policy-for-saas",
                        linkText: "SaaS privacy policy",
                      },
                      {
                        type: "Mobile app",
                        privacy: "Required (App Store and Google Play mandate it before listing)",
                        terms: "Strongly recommended (in-app purchases, user conduct, content licensing)",
                        link: "/privacy-policy-for-mobile-apps",
                        linkText: "Mobile app privacy policy",
                      },
                      {
                        type: "Freelancer or small business website",
                        privacy: "Required (contact forms, analytics, and email collection trigger it)",
                        terms: "Recommended (project scope, payment terms, liability limits)",
                        link: "/privacy-policy-for-small-business",
                        linkText: "Small business privacy policy",
                      },
                    ].map((item) => (
                      <div
                        key={item.type}
                        className="rounded-xl border border-slate-200/80 bg-white/60 p-5"
                      >
                        <h3 className="font-semibold text-slate-900 text-base mb-2">
                          {item.type}
                        </h3>
                        <div className="space-y-1 text-sm text-slate-600">
                          <p>
                            <strong className="text-blue-700">Privacy policy:</strong>{" "}
                            {item.privacy}
                          </p>
                          <p>
                            <strong className="text-slate-700">Terms &amp; conditions:</strong>{" "}
                            {item.terms}
                          </p>
                        </div>
                        <Link
                          href={item.link}
                          className="mt-2 font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5 text-sm"
                        >
                          {item.linkText}
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="mt-6 pl-0 sm:pl-[52px] space-y-3">
                  {[
                    {
                      q: "What if I only have a landing page with a contact form?",
                      a: "You need a privacy policy (the contact form collects personal data). Terms and conditions are optional unless the form triggers a service agreement.",
                    },
                    {
                      q: "Can I use one document for both?",
                      a: "Technically, but GDPR requires privacy information to be presented separately and in clear language. Combining them risks non-compliance and makes both harder for users to navigate. Keep them separate.",
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
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 6: Common Mistakes ── */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Mistakes People Make
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These errors create legal exposure rather than reducing
                      it.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      Thinking terms and conditions replace a privacy policy
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      This is the most dangerous mistake. Terms and conditions
                      govern usage rules and liability. They do not satisfy
                      GDPR, CCPA, or CalOPPA transparency requirements. Even
                      if your terms mention &quot;data collection,&quot; it
                      does not count as a compliant privacy policy. Regulators
                      require a separate, standalone privacy document.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      Combining both into one long document
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      While some websites merge their privacy policy and terms
                      into a single page, GDPR Article 12 requires privacy
                      information to be &quot;easily accessible&quot; and
                      presented &quot;separately from other information.&quot;
                      A combined document makes it harder for users to find
                      privacy-specific information, which undermines
                      transparency and increases regulatory risk.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      Copying either document from another website
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      A copied privacy policy describes another business&apos;s
                      data practices, not yours. A copied terms and conditions
                      references another company&apos;s products, services, and
                      jurisdiction. Both create legal exposure because they
                      misrepresent your actual operations. Learn about the{" "}
                      <Link
                        href="/chatgpt-privacy-policy-risks"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        risks of generic or AI-generated policies
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      Having a privacy policy but no cookie consent mechanism
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      A privacy policy that mentions cookies is not the same as
                      a proper{" "}
                      <Link
                        href="/cookie-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        cookie consent banner
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      . Under GDPR, non-essential cookies (analytics,
                      advertising, social media) require explicit opt-in
                      consent before they are set. Simply disclosing cookie
                      usage in your privacy policy without an actual consent
                      mechanism is non-compliant.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      Never updating either document
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Both documents must be kept current. CCPA explicitly
                      requires your privacy policy to be updated at least
                      once every 12 months. Your terms should be updated
                      whenever you change pricing, add features, or modify
                      refund policies. An outdated privacy policy that
                      references Google Analytics Universal Analytics (sunset
                      in July 2023) instead of GA4 signals negligence to both
                      users and regulators.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 7: Where to Display Them ── */}
              <section id="where-to-display" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Layers className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Where to Display Each Document
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    Both documents should be easy to find. CalOPPA requires
                    your privacy policy to be &quot;conspicuously posted.&quot;
                    Here is the best practice for placement:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Location
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-blue-700">
                            Privacy Policy
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Terms &amp; Conditions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                          ["Website footer (every page)", "Required", "Recommended"],
                          ["Cookie consent banner", "Required (link to full policy)", "Not applicable"],
                          ["Sign-up / registration forms", "Required (link near submit button)", "Required ('I agree to Terms' checkbox)"],
                          ["Checkout / payment pages", "Required", "Recommended (link to refund policy section)"],
                          ["Contact forms", "Required (brief disclosure + link)", "Optional"],
                          ["Email newsletter footer", "Required", "Optional"],
                          ["App store listings", "Required (Apple and Google mandate it)", "Recommended"],
                          ["Account settings page", "Recommended", "Recommended (link to full terms)"],
                        ].map(([location, privacy, terms]) => (
                          <tr key={location} className="hover:bg-slate-50/50">
                            <td className="px-5 py-3 font-medium text-slate-800">
                              {location}
                            </td>
                            <td className="px-5 py-3 text-slate-600">{privacy}</td>
                            <td className="px-5 py-3 text-slate-600">{terms}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── CTA Section ── */}
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
                      Answer a few questions about your website and get a
                      customised, compliant privacy policy covering all required
                      sections under GDPR, CCPA, and CalOPPA in under 60
                      seconds.
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
                      <span>GDPR &amp; CCPA compliant</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        GDPR
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
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

              {/* ── FAQ Section ── */}
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
                  {[
                    {
                      q: "What is the difference between a privacy policy and terms and conditions?",
                      a: "A privacy policy explains how you collect, use, store, and share personal data. It protects users and is required by law (GDPR, CCPA, CalOPPA). Terms and conditions set the rules for using your website or service, including liability limits, refund policies, and user conduct. They protect your business and are generally not required by law but strongly recommended.",
                    },
                    {
                      q: "Do I need both a privacy policy and terms and conditions?",
                      a: "If your website collects any personal data (analytics, contact forms, cookies, user accounts), you legally need a privacy policy. Terms and conditions are not legally required in most jurisdictions, but without them you cannot enforce usage rules, limit liability, or handle disputes. Most websites should have both.",
                    },
                    {
                      q: "Is a privacy policy legally required?",
                      a: "Yes. If your website collects any personal data, including through analytics, cookies, contact forms, or user accounts, a privacy policy is legally required under GDPR (EU/UK), CCPA (California), CalOPPA, PIPEDA (Canada), and similar laws worldwide. Fines for non-compliance can reach €20 million under GDPR or $7,500 per violation under CCPA.",
                    },
                    {
                      q: "Are terms and conditions legally required?",
                      a: "No, terms and conditions are not legally required in most jurisdictions. However, without them, you have no legal framework to enforce user conduct rules, limit your liability, set refund or cancellation policies, or protect your intellectual property. Most legal professionals strongly recommend having them.",
                    },
                    {
                      q: "Can I combine my privacy policy and terms and conditions into one document?",
                      a: "Technically yes, but it is not recommended. GDPR requires privacy information to be provided separately from other agreements and in clear, plain language. Combining them makes it harder for users to find privacy-specific information, which can be seen as non-compliant with GDPR's transparency principle. Best practice: two separate documents, each linked from your footer.",
                    },
                    {
                      q: "Where should I display my privacy policy and terms and conditions?",
                      a: "Both should be linked from your website footer on every page. Your privacy policy must also be linked from cookie consent banners, sign-up forms, and checkout pages. Terms and conditions should be presented with a checkbox or 'I agree' mechanism during account creation or purchases.",
                    },
                    {
                      q: "Who protects whom: privacy policy vs terms and conditions?",
                      a: "A privacy policy primarily protects your users by informing them how their personal data is handled. Terms and conditions primarily protect your business by limiting your liability, setting usage rules, and establishing legal ground rules. You need both because one protects users (legally required) and the other protects you (strongly recommended).",
                    },
                  ].map((item) => (
                    <div key={item.q} className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                      <h3 className="font-semibold text-slate-900 text-base leading-snug">
                        {item.q}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Related Resources ── */}
              <section id="resources" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Complete website compliance guide",
                    },
                    {
                      href: "/terms-of-service-for-online-business",
                      icon: Scale,
                      title: "Terms of Service Guide",
                      desc: "What your ToS must include",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU and UK compliance template",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: Globe,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie categories and GDPR rules",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without One",
                      desc: "Fines, platform bans, and legal risks",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-a-blog",
                      icon: BookOpen,
                      title: "Privacy Policy for a Blog",
                      desc: "Blog compliance requirements",
                    },
                    {
                      href: "/free-vs-paid-privacy-policy-generator",
                      icon: FileText,
                      title: "Free vs Paid Generators",
                      desc: "Compare tools and choose the right one",
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
