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
  Clock,
  Ban,
  Info,
  Users,
  Globe,
  Edit,
  List,
  BookOpen,
  Lock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "How to Write a Privacy Policy: Step-by-Step Guide (2026) | ultrafastutilities",
  description:
    "Learn how to write a privacy policy from scratch. Covers every required section, plain-language writing tips, GDPR and CCPA requirements, and what to avoid. Free template included.",
  keywords:
    "how to write a privacy policy, write a privacy policy, privacy policy sections, privacy policy requirements, write privacy policy from scratch",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/how-to-write-a-privacy-policy",
  },
  openGraph: {
    title:
      "How to Write a Privacy Policy: Step-by-Step Guide (2026) | ultrafastutilities",
    description:
      "Learn how to write a privacy policy from scratch. Covers every required section, plain-language writing tips, GDPR and CCPA requirements, and what to avoid.",
    url: "https://ultrafastutilities.com/how-to-write-a-privacy-policy",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Write a Privacy Policy | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Write a Privacy Policy: Step-by-Step Guide (2026) | ultrafastutilities",
    description:
      "Learn how to write a privacy policy from scratch. Covers every required section, plain-language writing tips, GDPR and CCPA requirements, and what to avoid.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-is-a-privacy-policy", title: "What Is a Privacy Policy?" },
  { id: "required-sections", title: "Required Sections" },
  { id: "step-by-step", title: "Step-by-Step Guide" },
  { id: "gdpr-requirements", title: "GDPR Requirements" },
  { id: "ccpa-requirements", title: "CCPA Requirements" },
  { id: "writing-tips", title: "Plain Language Tips" },
  { id: "template-example", title: "Template Example" },
  { id: "common-mistakes", title: "Common Mistakes" },
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
      name: "What must a privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A privacy policy must include: what personal data you collect, how you collect it, why you collect it (purpose), who you share it with, how long you keep it, user rights (access, deletion, correction), your contact information, and how you protect the data. GDPR also requires your legal basis for processing, and CCPA requires a 'Do Not Sell' section for California users.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a privacy policy be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A privacy policy should be as long as it needs to be to accurately describe your data practices - no longer, no shorter. For a simple website or blog, 500-800 words may suffice. For an ecommerce site, SaaS product, or mobile app, 1,500-3,000 words is typical. Avoid unnecessary padding, but do not omit required disclosures to keep it short.",
      },
    },
    {
      "@type": "Question",
      name: "Can I write my own privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many small business owners and individual developers write their own privacy policies using a generator or template as a starting point. The key is accuracy - the policy must truthfully describe your actual data practices. For complex situations (medical data, financial services, children's apps), consulting a privacy attorney is advisable.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a lawyer to write a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. For most websites and apps, a well-crafted generator or customized template provides sufficient legal coverage. However, for businesses handling sensitive data (health, finance, children under 13), operating in highly regulated industries, or with complex international operations, a privacy attorney can ensure full compliance.",
      },
    },
    {
      "@type": "Question",
      name: "How do I write a GDPR-compliant privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A GDPR-compliant privacy policy must include: identity and contact details of the data controller, what data you collect and why, your legal basis for each processing activity (consent, legitimate interest, contract, legal obligation), who you share data with, international transfer safeguards, retention periods, and all eight GDPR data subject rights (access, rectification, erasure, restriction, portability, objection, automated decision-making rights, and the right to complain to a supervisory authority).",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Write a Privacy Policy",
  description:
    "Step-by-step guide to writing a complete privacy policy for your website or app",
  step: [
    {
      "@type": "HowToStep",
      name: "Audit your data collection",
      text: "List every type of personal data you collect: forms, cookies, analytics, payment processing, email subscriptions, user accounts, and any third-party services that collect data on your behalf.",
    },
    {
      "@type": "HowToStep",
      name: "Identify your legal basis",
      text: "For each category of data, determine your legal basis: consent, contract performance, legal obligation, legitimate interests, or vital interests. GDPR requires you to state this for each processing activity.",
    },
    {
      "@type": "HowToStep",
      name: "Write each required section",
      text: "Write sections for: data collected, how it's used, who it's shared with, cookies and tracking, user rights, data retention, security measures, and contact information.",
    },
    {
      "@type": "HowToStep",
      name: "Use plain language",
      text: "Write in clear, simple language that a non-lawyer can understand. Avoid legal jargon. Aim for a reading level equivalent to a newspaper article.",
    },
    {
      "@type": "HowToStep",
      name: "Publish and maintain your policy",
      text: "Publish at a permanent, publicly accessible URL. Link it from your website footer. Update it whenever your data practices change, and note the last updated date.",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Privacy Policy: Step-by-Step Guide (2026)",
  description:
    "Complete guide to writing a privacy policy from scratch, covering required sections, GDPR and CCPA requirements, and plain language writing tips.",
  datePublished: "2026-01-01",
  dateModified: "2026-04-11",
  author: {
    "@type": "Organization",
    name: "ultrafastutilities",
    url: "https://ultrafastutilities.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ultrafastutilities",
    url: "https://ultrafastutilities.com",
  },
};

const breadcrumbSchema = {
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
      name: "How to Write a Privacy Policy",
      item: "https://ultrafastutilities.com/how-to-write-a-privacy-policy",
    },
  ],
};

export default function HowToWritePrivacyPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">How to Write a Privacy Policy</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Edit className="w-3.5 h-3.5" />
                Step-by-Step Guide 2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                How to Write a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A complete guide to writing a privacy policy that is legally
                compliant, clearly written, and accurate to your actual data
                practices. No legal background required.
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />
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
                  <span>14 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>
              {/* Featured Snippet Box */}
              <div id="what-is-a-privacy-policy" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  What Is a Privacy Policy?
                </h2>
                <p className="text-blue-800">
                  A privacy policy is a legal document that discloses how a website, app, or
                  business collects, uses, stores, and protects personal information. It is
                  required by law in most jurisdictions when you collect any personal data
                  from users, including names, emails, IP addresses, cookies, or payment
                  information. A good privacy policy is accurate, clear, and written in
                  plain language that users can understand.
                </p>
              </div>

              {/* Required Sections */}
              <section id="required-sections">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Required Sections in a Privacy Policy
                </h2>
                <p className="text-slate-700 mb-6">
                  While privacy laws vary by jurisdiction, most require similar core
                  disclosures. Here are the sections every privacy policy should include:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Section</th>
                        <th className="text-left p-3 font-semibold text-slate-700">What to Cover</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Required By</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Data Collected</td>
                        <td className="p-3 text-slate-600">Types and categories of personal data</td>
                        <td className="p-3 text-slate-600">GDPR, CCPA, most laws</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">How We Collect It</td>
                        <td className="p-3 text-slate-600">Forms, cookies, analytics, third parties</td>
                        <td className="p-3 text-slate-600">GDPR, CCPA, FTC</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Why We Collect It</td>
                        <td className="p-3 text-slate-600">Purpose for each data category</td>
                        <td className="p-3 text-slate-600">GDPR (legal basis), all laws</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Data Sharing</td>
                        <td className="p-3 text-slate-600">Third parties, service providers, transfers</td>
                        <td className="p-3 text-slate-600">GDPR, CCPA, all laws</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Cookies &amp; Tracking</td>
                        <td className="p-3 text-slate-600">Cookie types, analytics, advertising pixels</td>
                        <td className="p-3 text-slate-600">EU Cookie Law, GDPR</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Data Retention</td>
                        <td className="p-3 text-slate-600">How long data is kept, deletion process</td>
                        <td className="p-3 text-slate-600">GDPR, CCPA</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">User Rights</td>
                        <td className="p-3 text-slate-600">Access, deletion, correction, portability</td>
                        <td className="p-3 text-slate-600">GDPR, CCPA, all laws</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Security</td>
                        <td className="p-3 text-slate-600">How data is protected</td>
                        <td className="p-3 text-slate-600">Most laws, FTC</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Contact Information</td>
                        <td className="p-3 text-slate-600">How to reach you with privacy questions</td>
                        <td className="p-3 text-slate-600">GDPR, CCPA, all laws</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Step-by-Step */}
              <section id="step-by-step">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Write a Privacy Policy: Step-by-Step
                </h2>
                <p className="text-slate-700 mb-6">
                  Follow these steps to write an accurate, compliant privacy policy for
                  your website, app, or business.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      step: "Step 1",
                      title: "Audit your data collection",
                      color: "bg-blue-600",
                      items: [
                        "List every form on your website (contact, signup, checkout)",
                        "Identify all analytics and tracking tools (Google Analytics, Facebook Pixel, etc.)",
                        "Note all payment processors (Stripe, PayPal, etc.)",
                        "List email marketing tools (Mailchimp, ConvertKit, etc.)",
                        "Document any user accounts, logins, or profiles",
                        "Identify cookies: session cookies, analytics cookies, advertising cookies",
                      ],
                    },
                    {
                      step: "Step 2",
                      title: "Define the purpose for each data type",
                      color: "bg-green-600",
                      items: [
                        "Contact form emails: respond to inquiries",
                        "Analytics data: understand how users use the site",
                        "Payment info: process purchases",
                        "Newsletter emails: send marketing communications",
                        "Server logs and IP addresses: security and fraud prevention",
                      ],
                    },
                    {
                      step: "Step 3",
                      title: "Write each section in plain language",
                      color: "bg-purple-600",
                      items: [
                        "Use 'we collect' not 'data is collected'",
                        "Use short sentences and active voice",
                        "Avoid legal jargon - write for a general audience",
                        "Use headers and bullet points for scannability",
                        "Be specific: 'We use Google Analytics' not 'We may use third-party analytics'",
                      ],
                    },
                    {
                      step: "Step 4",
                      title: "Add jurisdiction-specific sections",
                      color: "bg-orange-600",
                      items: [
                        "GDPR: add legal basis for each processing activity",
                        "GDPR: list all eight data subject rights",
                        "CCPA: add 'Do Not Sell or Share My Personal Information' section",
                        "CCPA: add California-specific rights (know, delete, correct, opt-out)",
                        "COPPA: add parental consent section if you collect data from under-13s",
                      ],
                    },
                    {
                      step: "Step 5",
                      title: "Publish and maintain your policy",
                      color: "bg-slate-600",
                      items: [
                        "Publish at a permanent URL (e.g., yoursite.com/privacy)",
                        "Link from your website footer on every page",
                        "Add 'Last Updated: [date]' at the top",
                        "Update whenever your data practices change",
                        "Email subscribers about material changes",
                      ],
                    },
                  ].map((section) => (
                    <div key={section.step} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className={`${section.color} text-white px-5 py-3`}>
                        <span className="text-sm font-medium opacity-75">{section.step}</span>
                        <h3 className="font-semibold text-lg">{section.title}</h3>
                      </div>
                      <div className="p-5">
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* GDPR Requirements */}
              <section id="gdpr-requirements">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Writing a GDPR-Compliant Privacy Policy
                </h2>
                <p className="text-slate-700 mb-4">
                  If you have users in the European Union or UK, GDPR applies to you
                  regardless of where your business is located. GDPR has specific,
                  detailed requirements for privacy policies.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <List className="w-4 h-4" />
                    GDPR Legal Bases for Processing
                  </h3>
                  <p className="text-blue-800 text-sm mb-3">
                    GDPR requires you to state a legal basis for every processing activity.
                    The six legal bases are:
                  </p>
                  <ul className="space-y-1 text-blue-800 text-sm">
                    <li><strong>Consent:</strong> User has given clear, specific consent</li>
                    <li><strong>Contract:</strong> Processing is necessary to perform a contract</li>
                    <li><strong>Legal obligation:</strong> Required by law</li>
                    <li><strong>Vital interests:</strong> To protect someone's life</li>
                    <li><strong>Public task:</strong> For official functions (government use)</li>
                    <li><strong>Legitimate interests:</strong> Necessary for your legitimate business interests</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        Under GDPR, your privacy policy must list all eight data subject
                        rights: right to access, rectification, erasure ("right to be
                        forgotten"), restriction of processing, data portability, object to
                        processing, rights related to automated decision-making, and the
                        right to lodge a complaint with a supervisory authority.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CCPA Requirements */}
              <section id="ccpa-requirements">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Writing a CCPA-Compliant Privacy Policy
                </h2>
                <p className="text-slate-700 mb-4">
                  The California Consumer Privacy Act (CCPA) applies to businesses that
                  collect personal data from California residents and meet certain
                  thresholds. Even many small businesses fall within scope.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">CCPA Requirement</th>
                        <th className="text-left p-3 font-semibold text-slate-700">What to Include</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Categories of data</td>
                        <td className="p-3 text-slate-600">List using CCPA's specific data categories</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Sources of data</td>
                        <td className="p-3 text-slate-600">Where you collect data from (users, third parties)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Business purposes</td>
                        <td className="p-3 text-slate-600">Why you collect and use each category</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Third-party sharing</td>
                        <td className="p-3 text-slate-600">Categories of third parties you share with</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Do Not Sell/Share</td>
                        <td className="p-3 text-slate-600">Opt-out right for selling or sharing data</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">California rights</td>
                        <td className="p-3 text-slate-600">Know, delete, correct, opt-out, non-discrimination</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Writing Tips */}
              <section id="writing-tips">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Plain Language Writing Tips
                </h2>
                <p className="text-slate-700 mb-6">
                  The best privacy policies are easy to read. Regulators - and users -
                  increasingly expect plain language. Here is how to write clearly.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { do: "Use 'we collect your email address'", avoid: "Personal data is collected" },
                    { do: "Use short sentences (under 20 words)", avoid: "Legal run-on sentences" },
                    { do: "Say exactly what you do", avoid: "Vague phrases like 'may use'" },
                    { do: "Use bullet points for lists", avoid: "Dense paragraphs of information" },
                    { do: "Name your third-party services", avoid: "Generic 'third-party service providers'" },
                    { do: "Give specific retention periods", avoid: "Vague 'reasonable period of time'" },
                  ].map((tip, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-800 text-sm font-medium">Do: {tip.do}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Ban className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-600 text-sm">Avoid: {tip.avoid}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Template Example */}
              <section id="template-example">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Privacy Policy Template: Section Examples
                </h2>
                <p className="text-slate-700 mb-6">
                  Here are examples of how to write common privacy policy sections in
                  plain, clear language.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      section: "Data We Collect",
                      example: "We collect your name and email address when you fill out our contact form. We also collect your IP address and browser type automatically through server logs when you visit our website. If you make a purchase, we collect your billing address and payment information (processed by Stripe - we do not store card details).",
                    },
                    {
                      section: "How We Use Your Data",
                      example: "We use your contact form information to respond to your inquiry. We use server log data to diagnose technical issues and prevent fraud. We use purchase data to fulfill your order and provide customer support. We use your email address to send you order confirmations and, if you opted in, our newsletter.",
                    },
                    {
                      section: "Your Rights",
                      example: "You have the right to request a copy of the personal data we hold about you, ask us to correct inaccurate data, request deletion of your data (subject to legal retention requirements), and opt out of marketing emails at any time by clicking 'unsubscribe' in any email. To exercise these rights, email us at privacy@yoursite.com.",
                    },
                  ].map((example) => (
                    <div key={example.section} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-100 px-4 py-2">
                        <p className="font-semibold text-slate-700 text-sm flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Example: {example.section}
                        </p>
                      </div>
                      <div className="p-4">
                        <p className="text-slate-700 text-sm leading-relaxed">{example.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5 Common Privacy Policy Writing Mistakes
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Writing about data you don't actually collect",
                      desc: "Copying a template without customization often results in disclosures about data you don't collect. This creates legal exposure because users may rely on false statements. Your policy must accurately reflect your actual practices.",
                    },
                    {
                      title: "Not disclosing third-party services",
                      desc: "Every analytics tool, payment processor, email marketing platform, and advertising pixel you use collects user data. Each must be named in your privacy policy - not hidden in vague 'third-party service providers' language.",
                    },
                    {
                      title: "Omitting cookies and tracking technologies",
                      desc: "Cookies are personal data under GDPR. A privacy policy that doesn't mention cookies, analytics, or tracking pixels is incomplete and likely non-compliant with EU regulations.",
                    },
                    {
                      title: "Missing user rights section",
                      desc: "Both GDPR and CCPA require you to explicitly inform users of their rights and explain how to exercise them. A policy that omits access requests, deletion rights, or opt-out procedures is legally deficient.",
                    },
                    {
                      title: "Never updating the policy",
                      desc: "Privacy policies must evolve as your data practices change. Adding a new tool, changing how you use data, or entering a new market may trigger update requirements. Stale policies with outdated dates or inaccurate practices create legal risk.",
                    },
                  ].map((mistake, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl"
                    >
                      <Ban className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-800">{mistake.title}</p>
                        <p className="text-red-700 text-sm mt-1">{mistake.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What must a privacy policy include?",
                      a: "A privacy policy must include: what personal data you collect, how you collect it, why you collect it, who you share it with, how long you keep it, how you protect it, user rights (access, deletion, correction), and your contact information. GDPR also requires your legal basis for processing.",
                    },
                    {
                      q: "How long should a privacy policy be?",
                      a: "As long as needed to accurately describe your data practices - no more, no less. For a simple website, 500-800 words may suffice. For a SaaS product or ecommerce store, 1,500-3,000 words is typical.",
                    },
                    {
                      q: "Can I write my own privacy policy?",
                      a: "Yes. Many small business owners write their own policies using a generator or template as a starting point. The key is that it must accurately describe your actual data practices. For complex situations, consider consulting a privacy attorney.",
                    },
                    {
                      q: "Do I need a lawyer to write a privacy policy?",
                      a: "Not necessarily. For most websites and apps, a well-crafted generator or customized template provides sufficient coverage. For businesses handling sensitive data (health, finance, children), a privacy attorney is advisable.",
                    },
                    {
                      q: "How do I write a GDPR-compliant privacy policy?",
                      a: "Include: your identity and contact details, what data you collect and why, your legal basis for each processing activity, who you share data with, international transfer safeguards, retention periods, and all eight GDPR data subject rights.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-800 flex items-start gap-2">
                        <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        {item.q}
                      </h3>
                      <p className="text-slate-600 mt-2 ml-7 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Generate CTA */}
              <section
                id="generate"
                className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Generate Your Privacy Policy Instantly
                </h2>
                <p className="text-slate-300 mb-6">
                  Skip the blank page. Answer a few questions about your website or app
                  and get a complete, GDPR and CCPA compliant privacy policy in under
                  2 minutes.
                </p>
                <ul className="space-y-2 text-slate-300 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    All required sections included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    GDPR, CCPA, CalOPPA compliant
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Plain language, no legal jargon
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Instant download, free to use
                  </li>
                </ul>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 text-lg">
                    Generate Free Privacy Policy
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </section>

              {/* Related Resources */}
              <section id="resources">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "What Should a Privacy Policy Include?",
                      desc: "Complete list of required privacy policy sections",
                      href: "/what-should-a-privacy-policy-include",
                    },
                    {
                      title: "What Is a Privacy Policy?",
                      desc: "Fundamentals of privacy policy explained",
                      href: "/what-is-a-privacy-policy",
                    },
                    {
                      title: "How to Create a Privacy Policy for Free",
                      desc: "Free tools and methods for creating a policy",
                      href: "/how-to-create-a-privacy-policy-for-free",
                    },
                    {
                      title: "GDPR Privacy Policy Template",
                      desc: "EU-compliant privacy policy template",
                      href: "/gdpr-privacy-policy-template",
                    },
                    {
                      title: "CCPA Privacy Policy Example",
                      desc: "California consumer privacy compliance example",
                      href: "/ccpa-privacy-policy-example",
                    },
                    {
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "When and why privacy policies are mandatory",
                      href: "/is-a-privacy-policy-legally-required",
                    },
                    {
                      title: "Privacy Policy vs Terms and Conditions",
                      desc: "Understanding the difference between the two",
                      href: "/privacy-policy-vs-terms-and-conditions",
                    },
                    {
                      title: "How Often Should You Update Your Privacy Policy?",
                      desc: "When and how to keep your policy current",
                      href: "/how-often-should-you-update-your-privacy-policy",
                    },
                  ].map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                    >
                      <ArrowUpRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <div>
                        <p className="font-medium text-slate-800 group-hover:text-blue-700">
                          {resource.title}
                        </p>
                        <p className="text-slate-500 text-sm">{resource.desc}</p>
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
