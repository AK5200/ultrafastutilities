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
  Scale,
  Globe,
  Lock,
  Users,
  BookOpen,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "UK GDPR Privacy Policy Template (Free, ICO Compliant) (2026) | ultrafastutilities",
  description:
    "Free UK GDPR privacy policy template compliant with the Information Commissioner's Office requirements. Covers UK-specific data protection rules, ICO registration, international transfers post-Brexit.",
  keywords:
    "uk gdpr privacy policy template, uk privacy policy template, ico privacy policy, uk data protection privacy policy, uk gdpr template",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/uk-gdpr-privacy-policy-template",
  },
  openGraph: {
    title:
      "UK GDPR Privacy Policy Template (Free, ICO Compliant) (2026) | ultrafastutilities",
    description:
      "Free UK GDPR privacy policy template compliant with ICO requirements. Covers UK-specific data protection rules, international transfers post-Brexit, and all required disclosures.",
    url: "https://ultrafastutilities.com/uk-gdpr-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UK GDPR Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "UK GDPR Privacy Policy Template (Free, ICO Compliant) (2026)",
    description:
      "Free UK GDPR privacy policy template compliant with ICO requirements. Covers UK-specific data protection rules and international transfers post-Brexit.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is UK GDPR and how is it different from EU GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UK GDPR is the United Kingdom's version of the General Data Protection Regulation, retained in domestic law after Brexit alongside the Data Protection Act 2018. While closely aligned with EU GDPR, key differences include the supervisory authority (ICO vs national DPAs), currency for fines (GBP vs EUR), transfer mechanisms (IDTA vs SCCs), and the UK's independent adequacy decisions for international data transfers.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to register with the ICO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most organisations that process personal data in the UK must pay a data protection fee to the ICO. There are limited exemptions for some not-for-profits and individuals processing data for personal, family, or household purposes. The fee depends on your organisation's size and turnover, ranging from 40 GBP to 2,900 GBP per year. Failure to pay the fee when required is a criminal offence.",
      },
    },
    {
      "@type": "Question",
      name: "What are the fines for non-compliance with UK GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ICO can issue fines up to 17.5 million GBP or 4% of annual global turnover, whichever is higher, for the most serious infringements. For less serious breaches, fines can reach 8.7 million GBP or 2% of global turnover. The ICO also has the power to issue enforcement notices, reprimands, and orders to stop processing data entirely.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the same privacy policy for UK and EU users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most cases a single well-drafted privacy policy can cover both UK and EU users. The two frameworks are closely aligned. Your policy should reference both UK GDPR and EU GDPR, name the ICO as the UK supervisory authority, explain that EU users can contact their national data protection authority, and include your EU Representative details if your business is outside the EU but targets EU users.",
      },
    },
    {
      "@type": "Question",
      name: "What is the UK International Data Transfer Agreement (IDTA)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IDTA is the UK's mechanism for lawful international data transfers, replacing EU Standard Contractual Clauses for UK transfers after Brexit. Approved by the ICO in March 2022, the IDTA provides a contractual framework ensuring that personal data transferred outside the UK receives equivalent protection. The UK also recognises adequacy decisions and Binding Corporate Rules as transfer mechanisms.",
      },
    },
    {
      "@type": "Question",
      name: "What is the age of consent for children's data under UK GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under UK GDPR (via the Data Protection Act 2018), the age of consent for processing children's personal data in relation to information society services is 13 years old. This is lower than the EU GDPR default of 16 years (though EU member states can set it as low as 13). If your website or app is likely to be accessed by children under 13, you must obtain verifiable parental consent before processing their data.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my UK GDPR privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Review your UK GDPR privacy policy whenever you start collecting new categories of personal data, add new third-party tools or processors, ICO guidance changes, or the law is amended. At minimum, review it annually. The ICO has stated that privacy policies should be living documents that accurately reflect your current data practices at all times. Material changes should be communicated to users proactively.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a UK GDPR-Compliant Privacy Policy",
  description:
    "Follow these six steps to create a privacy policy that complies with UK GDPR and meets ICO requirements.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Identify your lawful basis for each processing activity",
      text: "UK GDPR requires you to determine which of the six lawful bases applies to each type of data processing: consent, contract, legal obligation, vital interests, public task, or legitimate interests. Document this in a lawful basis record and reflect it in your privacy policy. If you rely on legitimate interests, complete a Legitimate Interests Assessment (LIA).",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Audit your data practices and third-party processors",
      text: "List every category of personal data you collect, every third-party tool that processes data on your behalf, and every international transfer. This includes analytics tools, payment processors, email marketing platforms, hosting providers, and advertising networks. Each must be disclosed in your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Check whether you need to register with the ICO",
      text: "Most UK organisations that process personal data must pay the ICO data protection fee. Check the ICO's self-assessment tool to determine your fee tier and register if required. Include your ICO registration number in your privacy policy for transparency.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Map international transfers and apply the correct safeguard",
      text: "If you transfer personal data outside the UK, identify the legal mechanism for each transfer: UK adequacy regulations, the IDTA (International Data Transfer Agreement), or Binding Corporate Rules. The UK has its own adequacy decisions separate from the EU. Document each transfer and safeguard in your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Draft your policy in plain English covering all required sections",
      text: "UK GDPR requires your privacy policy to be written in clear, plain language. Cover all mandatory disclosures: data controller identity, purposes and lawful bases, data categories, third-party sharing, international transfers, retention periods, individual rights, security measures, breach notification, and how to complain to the ICO.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Publish, link from every page, and set a review schedule",
      text: "Make your privacy policy accessible from every page of your website via a footer link. Add the last-updated date. Set a calendar reminder to review it at least annually and update it whenever your data practices or the tools you use change materially. Notify users of significant changes.",
    },
  ],
};

const tocSections = [
  { id: "uk-gdpr-overview", title: "UK GDPR Overview" },
  { id: "uk-vs-eu-gdpr", title: "UK GDPR vs EU GDPR Differences" },
  { id: "what-ico-requires", title: "What the ICO Requires" },
  { id: "template-preview", title: "Template Preview" },
  { id: "lawful-bases", title: "Lawful Bases Under UK GDPR" },
  { id: "international-transfers", title: "International Transfers Post-Brexit" },
  { id: "ico-registration", title: "ICO Registration" },
  { id: "uk-specific-rights", title: "UK-Specific Rights" },
  { id: "age-of-consent", title: "Age of Consent" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function UKGDPRPrivacyPolicyTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "UK GDPR Privacy Policy Template (Free, ICO Compliant) (2026)",
            description:
              "Free UK GDPR privacy policy template compliant with ICO requirements. Covers UK-specific data protection rules, international transfers post-Brexit, and all required disclosures.",
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
                name: "UK GDPR Privacy Policy Template",
                item: "https://ultrafastutilities.com/uk-gdpr-privacy-policy-template",
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
                UK GDPR Privacy Policy Template
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Scale className="w-3.5 h-3.5" />
                ICO Compliant
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                UK GDPR Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                UK GDPR (the Data Protection Act 2018) requires every
                organisation processing personal data of UK residents to
                provide a clear, transparent privacy policy. This guide
                covers exactly what the ICO requires, how UK GDPR differs
                from EU GDPR after Brexit, and how to handle international
                data transfers under the new UK framework.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For UK businesses, international companies serving UK users,
                and website operators who need ICO-compliant privacy policies.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for UK GDPR &amp;
                ICO compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                EU GDPR Template
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/pipeda-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                PIPEDA Template
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
                    Need an ICO-compliant policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Covers all UK GDPR requirements
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
                <span>12 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ICO &amp; UK GDPR reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>A UK GDPR privacy policy</strong> must comply with the
                  Data Protection Act 2018 and UK GDPR, regulated by the
                  Information Commissioner&apos;s Office (ICO). Your policy must
                  disclose the lawful basis for each processing activity, your
                  ICO registration details, how you handle international data
                  transfers post-Brexit using the IDTA, all individual rights
                  available to UK residents, and your data breach notification
                  procedures. Non-compliance can result in ICO fines up to
                  17.5 million GBP or 4% of global annual turnover.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Since Brexit, the UK has operated its own data protection
                framework separate from the EU. While UK GDPR is closely
                aligned with its EU counterpart, there are important
                differences that affect your privacy policy. The ICO is the
                UK&apos;s independent supervisory authority, and it sets its
                own guidance, enforcement priorities, and transfer mechanisms.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                If your website collects personal data from UK residents,
                whether you are based in the UK or abroad, UK GDPR applies
                to you. This means you need a privacy policy that
                specifically addresses UK requirements, not just a generic
                GDPR template designed for the EU.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide provides a detailed breakdown of UK GDPR
                requirements, explains how they differ from EU GDPR,
                covers ICO registration, and gives you a template you can
                use to create your own compliant policy.
              </p>

              {/* Section 1: UK GDPR Overview */}
              <section id="uk-gdpr-overview" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Is UK GDPR?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  UK GDPR is the United Kingdom&apos;s version of the General
                  Data Protection Regulation. When the UK left the EU on 31
                  January 2020, EU GDPR was retained in domestic law through
                  the European Union (Withdrawal) Act 2018 and amended by
                  the Data Protection, Privacy and Electronic Communications
                  (Amendments etc) (EU Exit) Regulations 2019. This retained
                  version is commonly referred to as UK GDPR.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  UK GDPR works alongside the Data Protection Act 2018 (DPA
                  2018), which supplements it with UK-specific provisions
                  including exemptions, special category data rules, and law
                  enforcement processing. Together, these two pieces of
                  legislation form the UK&apos;s complete data protection
                  framework.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  The Information Commissioner&apos;s Office (ICO) is the
                  UK&apos;s independent authority for enforcing UK GDPR. The
                  ICO investigates complaints, conducts audits, publishes
                  guidance, and has the power to issue fines up to 17.5
                  million GBP or 4% of global annual turnover for serious
                  infringements.
                </p>

                {/* Inline mini-FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does UK GDPR apply to organisations outside the UK?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. UK GDPR has extraterritorial reach. If you offer
                      goods or services to people in the UK, or monitor the
                      behaviour of UK residents, UK GDPR applies regardless
                      of where your organisation is based. This is identical
                      to how EU GDPR applies to non-EU organisations.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need to comply with both UK GDPR and EU GDPR?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      If you serve users in both the UK and the EU/EEA, you
                      need to comply with both frameworks. In practice, the
                      two are closely aligned and a single well-drafted
                      privacy policy can cover both. You should reference
                      both the ICO and the relevant EU data protection
                      authority, and use both the IDTA and SCCs for
                      international transfers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: UK GDPR vs EU GDPR Differences Table */}
              <section id="uk-vs-eu-gdpr" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  UK GDPR vs EU GDPR: Key Differences
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  While the two frameworks share the same foundation, there
                  are practical differences that affect what your privacy
                  policy must include and how you operate.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Area
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[37.5%]">
                          UK GDPR
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[37.5%]">
                          EU GDPR
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Supervisory authority
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          ICO (Information Commissioner&apos;s Office)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          National DPAs (e.g. CNIL in France, BfDI in Germany)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Maximum fine
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          17.5 million GBP or 4% of global turnover
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          20 million EUR or 4% of global turnover
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Transfer mechanism
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          UK IDTA (International Data Transfer Agreement)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Standard Contractual Clauses (SCCs)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Adequacy decisions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          UK makes its own adequacy assessments independently
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          European Commission issues adequacy decisions
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Age of consent (children)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          13 years old (set by DPA 2018)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          16 years old (member states can lower to 13)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Representative requirement
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Must appoint UK representative if no UK establishment
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Must appoint EU representative if no EU establishment
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Registration fee
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          ICO data protection fee required (40 to 2,900 GBP/year)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No equivalent registration fee in most EU states
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          EU adequacy status
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          EU has granted UK adequacy (subject to review in 2025)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          EEA transfers need no safeguard within the EEA
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
                        The EU granted the UK an adequacy decision in June
                        2021, allowing personal data to flow freely from the
                        EU to the UK without additional safeguards. However,
                        this adequacy decision includes a sunset clause and is
                        subject to review. If the UK diverges significantly
                        from EU data protection standards, the adequacy
                        decision could be revoked, which would require UK
                        organisations to implement SCCs or other transfer
                        mechanisms for receiving EU data.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: What ICO Requires */}
              <section id="what-ico-requires" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What the ICO Requires in Your Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  The ICO provides detailed guidance on what your privacy
                  policy (which it refers to as a privacy notice) must
                  contain. Under Articles 13 and 14 of UK GDPR, you must
                  provide the following information to individuals.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "The identity and contact details of the data controller (and DPO if applicable)",
                    "The purposes of processing and the lawful basis for each purpose",
                    "The categories of personal data you collect",
                    "Recipients or categories of recipients of the data",
                    "Details of international transfers and the safeguards used",
                    "Data retention periods or the criteria used to determine them",
                    "Individual rights: access, rectification, erasure, restriction, portability, objection",
                    "The right to withdraw consent at any time (where consent is the lawful basis)",
                    "The right to lodge a complaint with the ICO",
                    "Whether providing data is a statutory or contractual requirement",
                    "Details of automated decision-making or profiling, if used",
                    "The source of the data if not collected directly from the individual",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-base"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-amber-900 text-sm">
                        ICO enforcement in practice
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-amber-800">
                        The ICO has issued fines to organisations of all
                        sizes for privacy notice failures. Common triggers
                        include failing to disclose third-party data sharing,
                        relying on the wrong lawful basis, not explaining
                        individual rights clearly, and using vague retention
                        periods. The ICO treats transparency failures
                        seriously because they undermine the entire data
                        protection framework. Learn more about{" "}
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

              {/* Section 4: Template Preview */}
              <section id="template-preview" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  UK GDPR Privacy Policy Template Preview
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Below is a structured template showing what a UK
                  GDPR-compliant privacy policy should contain. Replace
                  bracketed placeholders with your specific details. A fully
                  customised version can be{" "}
                  <Link
                    href="/generate"
                    className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                  >
                    generated in under 60 seconds
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                  .
                </p>

                <div className="space-y-4">
                  {/* Template Box 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        1. Data Controller Identity
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      [Your Company Name] (&quot;we&quot;, &quot;us&quot;,
                      &quot;our&quot;) is the data controller responsible for
                      your personal data under UK GDPR. We are registered in
                      England and Wales (or [your jurisdiction]) and operate
                      the website [yourwebsite.com].
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 mt-2">
                      ICO registration number: [ZA######]
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 mt-2">
                      For privacy-related enquiries, contact us at:{" "}
                      <span className="font-medium text-slate-800">
                        [privacy@yourcompany.com]
                      </span>
                    </p>
                  </div>

                  {/* Template Box 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Scale className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        2. Lawful Basis for Processing
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 mb-3">
                      We process your personal data on the following lawful
                      bases under UK GDPR:
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                      {[
                        [
                          "Consent:",
                          "You have given clear consent for a specific purpose (e.g., marketing emails, optional analytics cookies).",
                        ],
                        [
                          "Contractual necessity:",
                          "Processing is necessary to perform a contract with you (e.g., account creation, order fulfilment).",
                        ],
                        [
                          "Legal obligation:",
                          "Processing is necessary for compliance with UK law (e.g., tax reporting under HMRC requirements).",
                        ],
                        [
                          "Legitimate interests:",
                          "Processing is necessary for our legitimate interests (e.g., fraud prevention, security monitoring), provided your rights do not override those interests.",
                        ],
                      ].map(([label, text]) => (
                        <li key={label} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                          <span>
                            <strong className="text-slate-800">{label}</strong>{" "}
                            {text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Template Box 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        3. Your Rights Under UK GDPR
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 mb-3">
                      Under UK GDPR, you have the following rights:
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                      {[
                        [
                          "Right of access:",
                          "Request a copy of your personal data (Subject Access Request).",
                        ],
                        [
                          "Right to rectification:",
                          "Request correction of inaccurate or incomplete data.",
                        ],
                        [
                          "Right to erasure:",
                          "Request deletion of your data where there is no compelling reason to continue processing.",
                        ],
                        [
                          "Right to restrict processing:",
                          "Request that we limit how we process your data in certain circumstances.",
                        ],
                        [
                          "Right to data portability:",
                          "Receive your data in a structured, machine-readable format.",
                        ],
                        [
                          "Right to object:",
                          "Object to processing based on legitimate interests or for direct marketing.",
                        ],
                        [
                          "Rights re automated decisions:",
                          "Not be subject to solely automated decisions that produce legal or significant effects.",
                        ],
                        [
                          "Right to withdraw consent:",
                          "Withdraw consent at any time where consent is the lawful basis.",
                        ],
                      ].map(([label, text]) => (
                        <li key={label} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                          <span>
                            <strong className="text-slate-800">{label}</strong>{" "}
                            {text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm leading-relaxed text-slate-600 mt-3">
                      To exercise any right, contact us at
                      [privacy@yourcompany.com]. We will respond within one
                      calendar month. You also have the right to lodge a
                      complaint with the ICO at ico.org.uk.
                    </p>
                  </div>

                  {/* Template Box 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        4. International Data Transfers
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Some of our service providers are based outside the UK,
                      including in the United States and the EEA. Where we
                      transfer personal data internationally, we ensure
                      appropriate safeguards are in place under UK GDPR:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-600">
                      {[
                        "UK adequacy regulations for countries with adequate protection",
                        "The UK International Data Transfer Agreement (IDTA) approved by the ICO",
                        "Binding Corporate Rules (BCRs) for intra-group transfers",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[9px]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm leading-relaxed text-slate-600 mt-2">
                      A copy of the relevant safeguard is available on request
                      by contacting [privacy@yourcompany.com].
                    </p>
                  </div>

                  {/* Template Box 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        5. Data Breach Notification
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      We have procedures in place to detect, investigate, and
                      report personal data breaches. Where a breach is likely
                      to result in a risk to your rights and freedoms, we
                      will notify the ICO within 72 hours of becoming aware.
                      Where the breach is likely to result in a high risk to
                      your rights and freedoms, we will also notify you
                      directly without undue delay.
                    </p>
                  </div>

                  {/* Template Box 6 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Lock className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        6. Complaints
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      If you are unhappy with how we have handled your
                      personal data, you have the right to complain to the
                      ICO:
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 mt-2">
                      Information Commissioner&apos;s Office, Wycliffe House,
                      Water Lane, Wilmslow, Cheshire, SK9 5AF.
                      Website: ico.org.uk. Helpline: 0303 123 1113.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm text-slate-500 leading-relaxed">
                  This is an educational preview. A complete, customised UK
                  GDPR privacy policy requires tailoring every section to your
                  specific data practices, ICO registration status, and
                  international transfers. Not legal advice.
                </p>
              </section>

              {/* Section 5: Lawful Bases */}
              <section id="lawful-bases" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Six Lawful Bases Under UK GDPR
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  UK GDPR requires you to identify a lawful basis before you
                  process any personal data. There are six available bases,
                  and you must determine which one applies to each processing
                  activity. Your privacy policy must disclose which basis you
                  rely on for each purpose.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      num: "1",
                      title: "Consent",
                      desc: "The individual has given clear, affirmative consent for you to process their personal data for a specific purpose. Consent must be freely given, specific, informed, and unambiguous. Pre-ticked boxes are not valid consent. The individual must be able to withdraw consent as easily as they gave it.",
                    },
                    {
                      num: "2",
                      title: "Contract",
                      desc: "Processing is necessary to perform a contract with the individual, or to take steps at their request before entering a contract. This covers activities like processing an order, creating a user account, or delivering a service the individual has signed up for.",
                    },
                    {
                      num: "3",
                      title: "Legal obligation",
                      desc: "Processing is necessary to comply with a legal obligation under UK law. Common examples include tax reporting to HMRC, complying with court orders, employment law obligations, and anti-money laundering requirements.",
                    },
                    {
                      num: "4",
                      title: "Vital interests",
                      desc: "Processing is necessary to protect someone's life. This basis is rarely applicable for website operators and is typically used in emergency medical situations or disaster response scenarios.",
                    },
                    {
                      num: "5",
                      title: "Public task",
                      desc: "Processing is necessary to perform a task in the public interest or in the exercise of official authority. This basis is mainly relevant for public authorities and bodies carrying out public functions.",
                    },
                    {
                      num: "6",
                      title: "Legitimate interests",
                      desc: "Processing is necessary for your legitimate interests (or a third party's), unless the individual's rights and interests override yours. You must complete a Legitimate Interests Assessment (LIA) to document why your interests outweigh the individual's. Common examples include fraud prevention, network security, and direct marketing to existing customers.",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
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
                        The ICO has stated that legitimate interests is the
                        most flexible lawful basis but requires the most
                        preparation. You cannot simply claim legitimate
                        interests without documenting why. The ICO recommends
                        a three-part test: (1) identify the legitimate
                        interest, (2) show the processing is necessary to
                        achieve it, and (3) balance it against the
                        individual&apos;s interests and rights. If you cannot
                        demonstrate all three steps, you should use a
                        different lawful basis.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: International Transfers Post-Brexit */}
              <section id="international-transfers" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  International Transfers Post-Brexit
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  After Brexit, the UK established its own framework for
                  international data transfers, separate from the EU system.
                  If your organisation transfers personal data outside the
                  UK (including to the EU/EEA), you must use one of the
                  approved transfer mechanisms.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The UK has issued its own adequacy regulations for
                  countries it considers to provide adequate data protection.
                  For transfers to countries without adequacy status, you
                  must use either the UK International Data Transfer
                  Agreement (IDTA), the UK Addendum to the EU SCCs, or
                  Binding Corporate Rules approved by the ICO.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  The IDTA was approved by the UK Parliament in March 2022
                  and is available on the ICO website. It is a standalone
                  agreement designed specifically for UK transfers and
                  replaces the EU SCCs for UK data. You can also use the
                  &quot;UK Addendum&quot; which supplements EU SCCs with
                  UK-specific terms, which may be more practical if you
                  already use EU SCCs for EU data transfers.
                </p>

                <div className="rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        The UK has granted adequacy to the EEA, meaning data
                        can flow freely from the UK to EEA countries. The EU
                        has also granted the UK adequacy, but this decision
                        was set to expire in June 2025 and must be renewed.
                        If you transfer data between the UK and EU, you
                        should monitor whether the mutual adequacy decisions
                        are extended. If either lapses, you would need to
                        implement SCCs (for EU transfers to UK) or the IDTA
                        (for UK transfers to EU) as a fallback.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: ICO Registration */}
              <section id="ico-registration" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  ICO Registration
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Under the DPA 2018, most organisations that process
                  personal data must pay an annual data protection fee to the
                  ICO. This is separate from compliance with UK GDPR and is
                  a legal requirement in its own right. Failure to pay the
                  fee when required is a criminal offence that can result in
                  a fine of up to 4,350 GBP.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The fee is based on your organisation&apos;s size and
                  turnover. There are three tiers: Tier 1 (40 GBP) for
                  micro-organisations with fewer than 10 staff and turnover
                  under 632,000 GBP, Tier 2 (60 GBP) for small and medium
                  organisations, and Tier 3 (2,900 GBP) for large
                  organisations with over 250 staff or turnover above 36
                  million GBP.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  You can check whether you need to register and pay the fee
                  using the ICO&apos;s online self-assessment tool. Once
                  registered, including your ICO registration number in your
                  privacy policy is a good practice that demonstrates
                  transparency and accountability.
                </p>
              </section>

              {/* Section 8: UK-Specific Rights */}
              <section id="uk-specific-rights" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  UK-Specific Rights and Provisions
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  While UK GDPR grants the same eight individual rights as
                  EU GDPR, there are some UK-specific provisions that affect
                  how you implement them in your privacy policy.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      title: "ICO as the complaint authority",
                      desc: "Your privacy policy must specifically name the ICO as the supervisory authority and provide its contact details, including the postal address (Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF) and website (ico.org.uk).",
                    },
                    {
                      title: "Subject Access Requests (SARs)",
                      desc: "Under UK GDPR, you must respond to SARs within one calendar month (not 30 days). You cannot charge a fee for most SARs, but you can charge a reasonable fee or refuse the request if it is manifestly unfounded or excessive.",
                    },
                    {
                      title: "National security exemptions",
                      desc: "The DPA 2018 includes broader exemptions for national security purposes than EU GDPR. If your organisation processes data for national security purposes, these exemptions may apply to certain rights and obligations.",
                    },
                    {
                      title: "Immigration exemption",
                      desc: "The DPA 2018 includes an immigration exemption allowing the Home Office to restrict certain data subject rights when processing data for immigration control. This is a UK-specific provision not found in EU GDPR.",
                    },
                    {
                      title: "Children's Code (Age Appropriate Design Code)",
                      desc: "The ICO's Age Appropriate Design Code sets out 15 standards that online services likely to be accessed by children must meet. Your privacy policy should reference compliance with this code if your service is accessible to children under 18.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 rounded-xl border border-slate-200 bg-white"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">
                          {item.title}
                        </p>
                        <p className="text-slate-600 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Age of Consent */}
              <section id="age-of-consent" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Age of Consent for Children&apos;s Data
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Under UK GDPR, the age at which a child can give their own
                  consent for the processing of personal data in relation to
                  information society services (websites, apps, social media)
                  is 13 years old. This is set by the DPA 2018 and is lower
                  than the EU GDPR default of 16 years.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  If your website or app is likely to be accessed by children
                  under 13, you must obtain verifiable parental consent
                  before processing their data. You should also consider the
                  ICO&apos;s Age Appropriate Design Code, which applies to
                  online services likely to be accessed by anyone under 18.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy should clearly state your approach to
                  children&apos;s data: whether you knowingly collect data
                  from children, how you verify age, and how parents or
                  guardians can exercise rights on behalf of their children.
                  If your service is not intended for children, state this
                  explicitly and describe what happens if you discover a
                  child has provided data without parental consent.
                </p>
              </section>

              {/* Section 10: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common UK GDPR Privacy Policy Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are five common mistakes organisations make with their
                  UK GDPR privacy policies, and why each one creates a
                  compliance risk with the ICO.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Using an EU GDPR template without UK
                        adaptations.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: While UK GDPR and EU GDPR are closely
                        aligned, a template written purely for EU compliance
                        will reference the wrong supervisory authority, the
                        wrong transfer mechanisms, and the wrong currency for
                        fines. Your UK privacy policy must specifically
                        reference the ICO, the IDTA (not just SCCs), and GBP
                        amounts where applicable. It should also reflect the
                        UK&apos;s age of consent (13, not 16) and any
                        UK-specific exemptions under the DPA 2018.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Not registering with the ICO.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Most organisations that process personal data
                        must pay the ICO data protection fee. This is a legal
                        requirement separate from UK GDPR compliance.
                        Failure to pay is a criminal offence punishable by a
                        fine of up to 4,350 GBP. Many small businesses are
                        unaware of this requirement. Check the ICO&apos;s
                        self-assessment tool to determine whether you need to
                        register and which fee tier applies.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Claiming legitimate interests without
                        a Legitimate Interests Assessment.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: If you rely on legitimate interests as your
                        lawful basis, the ICO expects you to have completed
                        and documented a Legitimate Interests Assessment
                        (LIA) for each processing activity. This is a
                        three-part test: identify the interest, show the
                        processing is necessary, and balance it against the
                        individual&apos;s rights. Simply stating
                        &quot;legitimate interests&quot; in your privacy
                        policy without a documented LIA is a common ICO
                        enforcement trigger.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Not disclosing international
                        transfers.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: If you use any US-based service (Google
                        Analytics, AWS, Mailchimp, Stripe, Cloudflare),
                        you are transferring personal data outside the UK.
                        Your privacy policy must disclose each international
                        transfer and the safeguard used (IDTA, UK Addendum,
                        adequacy regulations). Many UK businesses use
                        US-based tools without realising they need to
                        disclose and safeguard these transfers in their
                        privacy policy.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Ignoring the Children&apos;s Code.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: The ICO&apos;s Age Appropriate Design Code
                        applies to any online service likely to be accessed
                        by children under 18. This is a broad scope that
                        covers most consumer-facing websites and apps. The
                        Code sets out 15 standards including data
                        minimisation, high privacy default settings, and
                        restrictions on nudge techniques. If your service
                        could be accessed by children, your privacy policy
                        should address how you comply with these standards.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a UK GDPR-Compliant Privacy Policy (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these steps to create a privacy policy that meets
                  ICO requirements and complies with UK GDPR.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      step: "1",
                      title: "Identify your lawful basis for each processing activity",
                      desc: "Before writing your policy, determine which of the six lawful bases applies to each type of data processing. Document this in a lawful basis record. If you rely on legitimate interests, complete a Legitimate Interests Assessment for each activity. If you rely on consent, ensure your consent mechanism meets ICO standards (clear, specific, freely given, withdrawable).",
                    },
                    {
                      step: "2",
                      title: "Audit your data practices and third-party processors",
                      desc: "List every category of personal data you collect, every third-party tool that processes data on your behalf, and every international transfer. This includes analytics, payment processors, email marketing, hosting, and advertising tools. Each must be disclosed in your privacy policy with the specific data shared and the lawful basis.",
                    },
                    {
                      step: "3",
                      title: "Check your ICO registration status",
                      desc: "Use the ICO's self-assessment tool to determine whether you need to pay the data protection fee and which tier applies. Register if required and include your registration number in your privacy policy. Remember, failure to register when required is a criminal offence.",
                    },
                    {
                      step: "4",
                      title: "Map international transfers and apply the correct safeguard",
                      desc: "Identify every transfer of personal data outside the UK. For each transfer, determine whether the destination country has UK adequacy status. If not, implement the IDTA or UK Addendum to EU SCCs. Document each transfer and safeguard in your privacy policy.",
                    },
                    {
                      step: "5",
                      title: "Draft your policy in plain English covering all ICO-required sections",
                      desc: "Write each section covering: data controller identity, purposes and lawful bases, data categories, third-party sharing, international transfers, retention periods, all eight individual rights, how to complain to the ICO, automated decision-making (if applicable), and data breach notification. Use clear, plain language that avoids legal jargon.",
                    },
                    {
                      step: "6",
                      title: "Publish, link from every page, and set a review schedule",
                      desc: "Link your privacy policy from the footer of every page. Add the last-updated date. Review at least annually and update whenever your data practices or tools change. Notify users of material changes. If you also serve EU users, add EU-specific sections referencing EU GDPR and the relevant national DPAs.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-700">
                    <strong>Shortcut:</strong> A privacy policy generator
                    automates the entire process. Answer questions about
                    your data practices, select UK GDPR compliance, and get
                    a complete ICO-compliant policy in under 60 seconds.{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      Generate your UK GDPR policy
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    .
                  </p>
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
                      What is UK GDPR and how is it different from EU GDPR?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      UK GDPR is the UK&apos;s version of the General Data
                      Protection Regulation, retained in domestic law after
                      Brexit. Key differences include the supervisory
                      authority (ICO vs national DPAs), transfer mechanisms
                      (IDTA vs SCCs), fine currency (GBP vs EUR), age of
                      consent for children (13 vs 16), and the UK&apos;s
                      independent adequacy decisions for international
                      transfers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need to register with the ICO?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Most organisations processing personal data in the UK
                      must pay the ICO data protection fee. Fees range from
                      40 GBP to 2,900 GBP per year depending on your size
                      and turnover. Limited exemptions exist for some
                      not-for-profits and individuals. Failure to register
                      when required is a criminal offence. Use the ICO&apos;s
                      self-assessment tool to check your obligation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are the fines for non-compliance with UK GDPR?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The ICO can issue fines up to 17.5 million GBP or 4%
                      of global turnover for serious infringements, and up
                      to 8.7 million GBP or 2% of global turnover for less
                      serious breaches. The ICO can also issue enforcement
                      notices, reprimands, and orders to stop processing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can I use the same privacy policy for UK and EU users?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, a single well-drafted policy can cover both. It
                      should reference both UK GDPR and EU GDPR, name the
                      ICO as the UK authority, explain EU users can contact
                      their national DPA, and cover both IDTA and SCCs for
                      international transfers. Include EU Representative
                      details if you target EU users from outside the EU.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is the UK IDTA and when do I need it?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The UK International Data Transfer Agreement (IDTA) is
                      the UK&apos;s mechanism for lawful data transfers
                      outside the UK where the destination country lacks
                      adequacy status. Approved by the ICO in March 2022,
                      it replaces EU SCCs for UK transfers. If you use
                      US-based services like Google Analytics, AWS, or
                      Stripe, you likely need either the IDTA or the UK
                      Addendum to EU SCCs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is the age of consent for children under UK GDPR?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The age of consent for children&apos;s data in
                      relation to online services is 13 under UK GDPR (set
                      by the DPA 2018). This is lower than the EU default
                      of 16. If your service is accessed by children under
                      13, you need verifiable parental consent. The ICO&apos;s
                      Age Appropriate Design Code also applies to services
                      accessed by anyone under 18.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How often should I update my UK GDPR privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Review your policy whenever your data practices change,
                      you add new tools or processors, ICO guidance is
                      updated, or UK law is amended. At minimum, review
                      annually. The ICO expects privacy policies to be
                      living documents that always accurately reflect your
                      current practices. Material changes should be
                      communicated to users proactively.
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
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "EU GDPR template with all required disclosures",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      title: "CCPA Privacy Policy Example",
                      desc: "What a compliant California privacy disclosure looks like",
                    },
                    {
                      href: "/pipeda-privacy-policy-template",
                      title: "PIPEDA Privacy Policy Template",
                      desc: "Canada-compliant privacy policy covering all 10 principles",
                    },
                    {
                      href: "/australia-privacy-policy-template",
                      title: "Australia Privacy Policy Template",
                      desc: "Privacy Act 1988 and APPs compliant template",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "A comprehensive guide for standard website operators",
                    },
                    {
                      href: "/how-to-write-a-privacy-policy",
                      title: "How to Write a Privacy Policy",
                      desc: "Step-by-step guide to drafting your own policy",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      title: "How Often to Update Your Privacy Policy",
                      desc: "When and why to review your privacy disclosures",
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
                  UK GDPR Compliance Made Simple
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Generate a privacy policy that meets all ICO requirements,
                  covers UK GDPR lawful bases, international transfers via
                  the IDTA, and all eight individual rights in under 60
                  seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My UK GDPR Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers UK GDPR, EU GDPR &amp; CCPA &middot; ICO compliant
                  &middot; Ready in 60 seconds
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
