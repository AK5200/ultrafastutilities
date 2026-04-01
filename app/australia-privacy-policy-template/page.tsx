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
  Scale,
  Lock,
  Building,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Australia Privacy Policy Template: Privacy Act 1988 Guide (2026) | ultrafastutilities",
  description:
    "Free Australia privacy policy template compliant with the Privacy Act 1988 and Australian Privacy Principles. Covers APPs, notifiable data breaches, and consumer rights.",
  keywords:
    "australia privacy policy template, australian privacy act privacy policy, privacy act 1988 privacy policy, australian privacy principles, APP privacy policy template",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/australia-privacy-policy-template",
  },
  openGraph: {
    title:
      "Australia Privacy Policy Template: Privacy Act 1988 Guide (2026) | ultrafastutilities",
    description:
      "Free Australia privacy policy template compliant with the Privacy Act 1988 and Australian Privacy Principles. Covers APPs, notifiable data breaches, and consumer rights.",
    url: "https://ultrafastutilities.com/australia-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Australia Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Australia Privacy Policy Template: Privacy Act 1988 Guide (2026) | ultrafastutilities",
    description:
      "Free Australia privacy policy template compliant with the Privacy Act 1988 and Australian Privacy Principles. Covers APPs, notifiable data breaches, and consumer rights.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-is-required", title: "Who Needs a Policy?" },
  { id: "privacy-act-1988", title: "Privacy Act 1988" },
  { id: "thirteen-apps", title: "13 Australian Privacy Principles" },
  { id: "notifiable-breaches", title: "Notifiable Data Breaches" },
  { id: "what-to-include", title: "What to Include" },
  { id: "template-sections", title: "Template Sections" },
  { id: "overseas-transfers", title: "Overseas Data Transfers" },
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
      name: "Who needs a privacy policy in Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the Privacy Act 1988, Australian Privacy Principle 1 (APP 1) requires any 'APP entity' to have a clearly expressed and up-to-date privacy policy. APP entities include businesses with an annual turnover over AUD $3 million, all private sector health service providers, credit reporting bodies, and businesses that trade in personal information. Businesses below the $3 million threshold may still need a policy under other regulations or if they handle health information.",
      },
    },
    {
      "@type": "Question",
      name: "What must an Australian privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under APP 1.4, an Australian privacy policy must include: the kinds of personal information you collect, how you collect and hold personal information, the purposes for which you collect it, how individuals can access and correct their information, how to make a complaint, whether you are likely to disclose personal information to overseas recipients, and which countries those recipients are located in.",
      },
    },
    {
      "@type": "Question",
      name: "What is a notifiable data breach in Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Australia's Notifiable Data Breaches (NDB) scheme, APP entities must notify the OAIC (Office of the Australian Information Commissioner) and affected individuals when a data breach is likely to result in serious harm. Notification must occur as soon as practicable. Your privacy policy should reference your obligations under the NDB scheme.",
      },
    },
    {
      "@type": "Question",
      name: "Do small Australian businesses need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Privacy Act 1988 generally applies to businesses with annual turnover over AUD $3 million. Small businesses below this threshold are usually exempt unless they: are health service providers, trade in personal information, are related to a large business, or handle certain types of sensitive information. However, even exempt businesses benefit from having a privacy policy to build customer trust.",
      },
    },
    {
      "@type": "Question",
      name: "Does GDPR apply to Australian businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR applies to Australian businesses that offer goods or services to EU residents or monitor their behavior, regardless of where the business is located. If your Australian business has EU customers, you may need to comply with both the Australian Privacy Act and GDPR. Your privacy policy should address both if applicable.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create an Australia-Compliant Privacy Policy",
  description:
    "Step-by-step guide to creating a privacy policy that meets Australia's Privacy Act 1988 requirements",
  step: [
    {
      "@type": "HowToStep",
      name: "Determine if the Privacy Act applies to you",
      text: "Check if your business falls under the Privacy Act 1988 - either through the $3M turnover threshold, as a health service provider, or through handling specific types of personal information.",
    },
    {
      "@type": "HowToStep",
      name: "Map all personal information you collect",
      text: "List every category of personal information you collect: names, contact details, government identifiers, financial information, health information, and sensitive information.",
    },
    {
      "@type": "HowToStep",
      name: "Document collection, use, and disclosure",
      text: "For each information category, document how you collect it, why you use it, and who you disclose it to - including any overseas recipients.",
    },
    {
      "@type": "HowToStep",
      name: "Include all APP 1.4 required disclosures",
      text: "Ensure your policy covers all mandatory items under APP 1.4: collection purposes, access and correction rights, complaint process, overseas disclosures, and contact information.",
    },
    {
      "@type": "HowToStep",
      name: "Publish and maintain the policy",
      text: "Publish your policy on your website and review it annually or when your data practices change. APP 1 requires the policy to be 'up-to-date'.",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Australia Privacy Policy Template: Privacy Act 1988 Guide (2026)",
  description:
    "Complete guide to creating an Australian privacy policy compliant with the Privacy Act 1988, Australian Privacy Principles, and the Notifiable Data Breaches scheme.",
  datePublished: "2026-01-01",
  dateModified: "2026-03-27",
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
      name: "Australia Privacy Policy Template",
      item: "https://ultrafastutilities.com/australia-privacy-policy-template",
    },
  ],
};

export default function AustraliaPrivacyPolicyTemplate() {
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
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-blue-50/60 blur-3xl" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">Australia Privacy Policy Template</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Scale className="w-3.5 h-3.5" />
                Privacy Act 1988 Compliance
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Australia Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Create a privacy policy that complies with Australia's Privacy Act 1988,
                the 13 Australian Privacy Principles, and the Notifiable Data Breaches
                scheme.
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
                  <p className="text-sm font-semibold text-slate-800">Need your own policy?</p>
                  <p className="text-xs text-slate-500 mt-1">Generate in under 60 seconds</p>
                  <Link href="/generate">
                    <Button size="sm" className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg">Generate Policy</Button>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="max-w-[720px]">
              {/* Author + Trust Signals */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">AK</div>
                  <span>Written by{" "}<span className="font-semibold text-slate-800">Anupam Kumar</span></span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <span>Last updated: March 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>13 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>
              {/* Featured Snippet Box */}
              <div id="what-is-required" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Who Needs a Privacy Policy in Australia?
                </h2>
                <p className="text-blue-800 mb-3">
                  Australia's Privacy Act 1988 requires APP entities to have a privacy
                  policy. You are likely an APP entity if any of the following apply:
                </p>
                <ul className="space-y-1 text-blue-800 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    Annual turnover over AUD $3 million
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    You are a private sector health service provider
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    You trade in personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    You are related to a body corporate that is an APP entity
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    You are a credit reporting body or credit provider
                  </li>
                </ul>
              </div>

              {/* Privacy Act 1988 */}
              <section id="privacy-act-1988">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Australia's Privacy Act 1988 Overview
                </h2>
                <p className="text-slate-700 mb-4">
                  The Privacy Act 1988 is the primary federal privacy legislation in
                  Australia. It was substantially updated in 2014 with the Australian
                  Privacy Principles (APPs) replacing the previous National Privacy
                  Principles and Information Privacy Principles.
                </p>
                <p className="text-slate-700 mb-4">
                  The Privacy Act regulates how personal information is handled by
                  Australian Government agencies and certain private sector organisations.
                  The Office of the Australian Information Commissioner (OAIC) enforces
                  the Act and can investigate complaints and impose civil penalties.
                </p>
                <p className="text-slate-700 mb-6">
                  The Privacy Act may be amended with broader scope - the Australian
                  Government has consulted on reforms that could extend the Act's reach
                  to smaller businesses. Check the OAIC website for the latest updates.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        The Australian Government is actively reviewing the Privacy Act
                        with proposed reforms that could significantly expand its coverage,
                        including removing the small business exemption entirely. Even if
                        your business is currently exempt, implementing a privacy policy
                        now prepares you for upcoming changes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 13 APPs */}
              <section id="thirteen-apps">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The 13 Australian Privacy Principles (APPs)
                </h2>
                <p className="text-slate-700 mb-6">
                  The APPs are the foundation of privacy compliance in Australia. Your
                  privacy policy must reflect compliance with the relevant principles.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">APP</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Principle</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Policy Implication</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">APP 1</td>
                        <td className="p-3 text-slate-600">Open and transparent management</td>
                        <td className="p-3 text-slate-600">Must have a privacy policy</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">APP 2</td>
                        <td className="p-3 text-slate-600">Anonymity and pseudonymity</td>
                        <td className="p-3 text-slate-600">Offer anonymous options where practicable</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">APP 3</td>
                        <td className="p-3 text-slate-600">Collection of solicited information</td>
                        <td className="p-3 text-slate-600">Only collect reasonably necessary data</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">APP 5</td>
                        <td className="p-3 text-slate-600">Notification of collection</td>
                        <td className="p-3 text-slate-600">Notify at point of collection</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">APP 6</td>
                        <td className="p-3 text-slate-600">Use or disclosure of personal information</td>
                        <td className="p-3 text-slate-600">Use only for collection purpose</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">APP 8</td>
                        <td className="p-3 text-slate-600">Cross-border disclosure</td>
                        <td className="p-3 text-slate-600">Disclose overseas transfers</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">APP 11</td>
                        <td className="p-3 text-slate-600">Security of personal information</td>
                        <td className="p-3 text-slate-600">Describe security measures</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">APP 12</td>
                        <td className="p-3 text-slate-600">Access to personal information</td>
                        <td className="p-3 text-slate-600">Explain access request process</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">APP 13</td>
                        <td className="p-3 text-slate-600">Correction of personal information</td>
                        <td className="p-3 text-slate-600">Explain correction process</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Notifiable Breaches */}
              <section id="notifiable-breaches">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Notifiable Data Breaches (NDB) Scheme
                </h2>
                <p className="text-slate-700 mb-4">
                  The Notifiable Data Breaches (NDB) scheme requires APP entities to
                  notify affected individuals and the OAIC when a data breach is likely
                  to result in serious harm.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      When Does a Breach Require Notification?
                    </h3>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
                        Unauthorized access to personal information
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
                        Unauthorized disclosure of personal information
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
                        Loss of personal information where access or disclosure is likely
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
                        The breach is likely to result in serious harm to individuals
                      </li>
                    </ul>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      Notification Timeline
                    </h3>
                    <p className="text-slate-700 text-sm">
                      Once you become aware of an eligible data breach, you must notify
                      the OAIC and affected individuals as soon as practicable. There is
                      no fixed statutory period, but the OAIC expects prompt action.
                      Your privacy policy should reference your NDB obligations.
                    </p>
                  </div>
                </div>
              </section>

              {/* What to Include */}
              <section id="what-to-include">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What to Include in an Australian Privacy Policy
                </h2>
                <p className="text-slate-700 mb-4">
                  APP 1.4 sets out the minimum content required in your privacy policy.
                  Your policy must include:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      item: "Kinds of personal information collected and held",
                      detail: "Describe categories: contact details, financial information, health information, government identifiers, sensitive information, etc.",
                    },
                    {
                      item: "How personal information is collected and held",
                      detail: "Forms, cookies, third parties, analytics, referrals. Describe storage: servers, cloud services, paper records.",
                    },
                    {
                      item: "The purposes for collection, holding, use, and disclosure",
                      detail: "Be specific about why you collect each type of information and how you use it.",
                    },
                    {
                      item: "How individuals can access and correct their information",
                      detail: "Describe the process: submit a written request to privacy@yourcompany.com.au, response within 30 days.",
                    },
                    {
                      item: "How to make a privacy complaint",
                      detail: "Internal complaint process and that unresolved complaints can be referred to the OAIC.",
                    },
                    {
                      item: "Whether personal information is disclosed overseas",
                      detail: "If you use cloud services, analytics tools, or payment processors based overseas, you must disclose the countries involved.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{item.item}</p>
                        <p className="text-slate-600 text-sm mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Template Sections */}
              <section id="template-sections">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Australian Privacy Policy: Template Section Examples
                </h2>
                <p className="text-slate-700 mb-6">
                  Here are example sections written in plain language for an Australian
                  business privacy policy.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      heading: "Personal Information We Collect",
                      text: "We collect personal information including your name, email address, postal address, phone number, and payment details when you purchase from us or contact us. We may also collect information about how you use our website through analytics tools.",
                    },
                    {
                      heading: "How We Use Your Information",
                      text: "We use your personal information to process orders, provide customer support, send transactional emails, and (with your consent) marketing communications. We do not use your information for purposes other than those described in this policy without your consent.",
                    },
                    {
                      heading: "Overseas Disclosure",
                      text: "We use third-party service providers that may store or process your personal information outside Australia. These include: Stripe (United States) for payment processing, Google Analytics (United States) for website analytics, and Mailchimp (United States) for email marketing. We take reasonable steps to ensure overseas recipients handle your information in accordance with the Australian Privacy Principles.",
                    },
                    {
                      heading: "How to Make a Complaint",
                      text: "If you believe your privacy has been compromised, contact our Privacy Officer at privacy@yourcompany.com.au. We will respond within 30 days. If you are not satisfied with our response, you may complain to the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.",
                    },
                  ].map((section) => (
                    <div key={section.heading} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-100 px-4 py-2">
                        <p className="font-semibold text-slate-700 text-sm">{section.heading}</p>
                      </div>
                      <div className="p-4">
                        <p className="text-slate-700 text-sm leading-relaxed">{section.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Overseas Transfers */}
              <section id="overseas-transfers">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Disclosing Overseas Data Transfers (APP 8)
                </h2>
                <p className="text-slate-700 mb-4">
                  APP 8 requires you to take reasonable steps to ensure that overseas
                  recipients handle personal information in accordance with the APPs.
                  Under APP 8.2(a), the disclosing entity remains accountable for the
                  overseas recipient's handling of the information.
                </p>
                <p className="text-slate-700 mb-6">
                  Your privacy policy must disclose:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Common Overseas Recipient</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Country</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Data Shared</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Stripe</td>
                        <td className="p-3 text-slate-600">United States</td>
                        <td className="p-3 text-slate-600">Payment and billing data</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Google Analytics</td>
                        <td className="p-3 text-slate-600">United States</td>
                        <td className="p-3 text-slate-600">Website usage data, IP addresses</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Mailchimp</td>
                        <td className="p-3 text-slate-600">United States</td>
                        <td className="p-3 text-slate-600">Email addresses, email engagement</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">AWS / Cloudflare</td>
                        <td className="p-3 text-slate-600">US, EU, various</td>
                        <td className="p-3 text-slate-600">Hosted application and user data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        Under APP 8, if you disclose personal information to an overseas
                        recipient and that recipient breaches the APPs, your Australian
                        business can be held liable as if you committed the breach yourself.
                        List every overseas service provider in your privacy policy and
                        include contractual terms requiring APP compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5 Common Australian Privacy Policy Mistakes
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Not disclosing overseas service providers",
                      desc: "Most Australian businesses use US-based cloud services (Google, Stripe, Mailchimp). Failing to disclose these overseas disclosures in your privacy policy violates APP 8 and APP 1.4.",
                    },
                    {
                      title: "Missing the complaint process",
                      desc: "APP 1.4(f) requires your privacy policy to describe how to make a complaint about a breach of the APPs, including how the entity will deal with such a complaint. Many policies omit this entirely.",
                    },
                    {
                      title: "Not referencing the OAIC",
                      desc: "Your complaint process should mention that unresolved complaints can be referred to the Office of the Australian Information Commissioner (OAIC). This is a standard APP compliance requirement.",
                    },
                    {
                      title: "Using a US or EU template without adapting it",
                      desc: "Privacy policies written for GDPR or CCPA compliance use different terminology and cover different rights than Australian law requires. Using an unadapted foreign template leaves you non-compliant with the APPs.",
                    },
                    {
                      title: "Assuming the small business exemption will always apply",
                      desc: "The Australian Government has proposed removing the small business exemption entirely. Businesses relying on the $3M threshold exemption should prepare a privacy policy now rather than scrambling if reforms pass.",
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
                      q: "Who needs a privacy policy in Australia?",
                      a: "Under the Privacy Act 1988, APP entities need a privacy policy. You are likely an APP entity if your annual turnover exceeds AUD $3 million, you are a health service provider, you trade in personal information, or you handle credit reporting information.",
                    },
                    {
                      q: "What must an Australian privacy policy include?",
                      a: "Under APP 1.4: kinds of personal information collected and held, how it is collected and held, purposes for collection and use, access and correction procedures, complaint process (including OAIC referral), and whether information is disclosed overseas and to which countries.",
                    },
                    {
                      q: "What is a notifiable data breach in Australia?",
                      a: "Under the NDB scheme, a notifiable data breach involves unauthorized access to, disclosure of, or loss of personal information that is likely to result in serious harm to individuals. You must notify the OAIC and affected individuals as soon as practicable.",
                    },
                    {
                      q: "Do small Australian businesses need a privacy policy?",
                      a: "The Privacy Act generally exempts businesses with turnover under AUD $3 million, with exceptions for health providers and those trading in personal information. However, proposed reforms may remove this exemption. Good practice is to have a privacy policy regardless of size.",
                    },
                    {
                      q: "Does GDPR apply to Australian businesses?",
                      a: "GDPR applies to Australian businesses that offer goods or services to EU residents or monitor their behavior. If your business has EU customers or EU website visitors you analyze, you may need to comply with both the Privacy Act and GDPR.",
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
                  Generate Your Australian Privacy Policy
                </h2>
                <p className="text-slate-300 mb-6">
                  Create a complete privacy policy compliant with Australia's Privacy Act
                  1988 and the Australian Privacy Principles in under 2 minutes.
                </p>
                <ul className="space-y-2 text-slate-300 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    APP 1.4 compliant with all required disclosures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Overseas disclosure section included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    NDB scheme reference included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Free to generate, no account required
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
                      title: "GDPR Privacy Policy Template",
                      desc: "EU-compliant privacy policy template",
                      href: "/gdpr-privacy-policy-template",
                    },
                    {
                      title: "PIPEDA Privacy Policy Template",
                      desc: "Canada's privacy law template",
                      href: "/pipeda-privacy-policy-template",
                    },
                    {
                      title: "UK GDPR Privacy Policy Template",
                      desc: "Post-Brexit UK privacy requirements",
                      href: "/uk-gdpr-privacy-policy-template",
                    },
                    {
                      title: "LGPD Privacy Policy Template",
                      desc: "Brazil's privacy law template",
                      href: "/lgpd-privacy-policy-template",
                    },
                    {
                      title: "CCPA Privacy Policy Example",
                      desc: "California consumer privacy compliance",
                      href: "/ccpa-privacy-policy-example",
                    },
                    {
                      title: "CalOPPA Privacy Policy Template",
                      desc: "California Online Privacy Protection Act",
                      href: "/caloppa-privacy-policy-template",
                    },
                    {
                      title: "Privacy Policy for Small Business",
                      desc: "Small business privacy requirements",
                      href: "/privacy-policy-for-small-business",
                    },
                    {
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "When privacy policies are mandatory by law",
                      href: "/is-a-privacy-policy-legally-required",
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
