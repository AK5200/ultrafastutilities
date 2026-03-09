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
    "PIPEDA Privacy Policy Template: Canada Compliant (2026) | ultrafastutilities",
  description:
    "Free PIPEDA privacy policy template for Canadian websites. Covers all 10 fair information principles, consent requirements, and Bill C-27 updates. Generate your compliant policy for $4.99.",
  keywords:
    "pipeda privacy policy template, pipeda privacy policy, canada privacy policy template, pipeda compliance, canadian privacy policy requirements, pipeda privacy policy example",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/pipeda-privacy-policy-template",
  },
  openGraph: {
    title:
      "PIPEDA Privacy Policy Template: Canada Compliant (2026) | ultrafastutilities",
    description:
      "Free PIPEDA privacy policy template for Canadian websites. Covers all 10 fair information principles, consent requirements, and Bill C-27 updates. Generate your compliant policy for $4.99.",
    url: "https://ultrafastutilities.com/pipeda-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PIPEDA Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PIPEDA Privacy Policy Template: Canada Compliant (2026)",
    description:
      "Free PIPEDA privacy policy template for Canadian websites. Covers all 10 fair information principles and consent requirements.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is PIPEDA and who does it apply to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PIPEDA (Personal Information Protection and Electronic Documents Act) is Canada's federal privacy law governing the collection, use, and disclosure of personal information by private-sector organizations in the course of commercial activities. It applies to any organization that collects, uses, or discloses personal information of Canadian residents during commercial activity, regardless of whether the organization is based in Canada. It also applies to the transfer of personal information across provincial or national borders.",
      },
    },
    {
      "@type": "Question",
      name: "Does PIPEDA apply to my website if I am not based in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, PIPEDA can apply to organizations outside of Canada if they collect, use, or disclose personal information of Canadian residents in the course of commercial activities. If your website collects data from visitors located in Canada, such as through analytics, forms, or cookies, and you engage in commercial activities, PIPEDA may apply to you. This is similar to how GDPR applies extraterritorially to organizations that process data of EU residents.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 10 fair information principles under PIPEDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 10 fair information principles are: (1) Accountability - designate someone responsible for compliance, (2) Identifying Purposes - state why you collect data before or at collection, (3) Consent - obtain meaningful consent for collection and use, (4) Limiting Collection - collect only what is necessary, (5) Limiting Use, Disclosure, and Retention - use data only for stated purposes and retain only as long as needed, (6) Accuracy - keep data accurate and current, (7) Safeguards - protect data with appropriate security measures, (8) Openness - make your privacy practices publicly available, (9) Individual Access - give individuals access to their data on request, (10) Challenging Compliance - provide a process for complaints.",
      },
    },
    {
      "@type": "Question",
      name: "How is PIPEDA different from GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While both laws protect personal data, there are key differences. GDPR requires explicit consent for most data processing, while PIPEDA allows implied consent in certain commercial situations. GDPR fines can reach 20 million euros or 4% of global revenue, while current PIPEDA fines are lower (up to $100,000 CAD for certain offenses). GDPR requires a Data Protection Officer for certain organizations, while PIPEDA requires a designated privacy officer. GDPR includes a formal right to erasure, while PIPEDA has more limited deletion rights. Both laws have extraterritorial reach.",
      },
    },
    {
      "@type": "Question",
      name: "What is Bill C-27 and how will it affect PIPEDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bill C-27 (the Digital Charter Implementation Act) proposes to replace PIPEDA with the Consumer Privacy Protection Act (CPPA). The CPPA would significantly modernize Canadian privacy law with higher fines (up to 5% of global revenue or $25 million CAD, whichever is greater), new individual rights, algorithmic transparency requirements, and stronger consent provisions. While Bill C-27 has been introduced in Parliament, its final passage timeline remains uncertain. Organizations should prepare for the CPPA by strengthening their current PIPEDA compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Does my website need a privacy policy to comply with PIPEDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PIPEDA's Openness Principle (Principle 8) requires organizations to make their privacy policies and practices readily available. This means you need a publicly accessible privacy policy that describes what personal information you collect, the purposes for collection, how you use and disclose the data, your data retention practices, how individuals can access their information, and how to file a privacy complaint. The policy must be written in clear and understandable language.",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for non-compliance with PIPEDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under current PIPEDA, the Office of the Privacy Commissioner of Canada (OPC) can investigate complaints, make recommendations, and publish findings. For certain offenses, fines can reach up to $100,000 CAD. The OPC can also refer matters to the Federal Court, which can order organizations to change their practices and award damages. Under the proposed CPPA (Bill C-27), penalties would increase dramatically to up to 5% of global revenue or $25 million CAD, whichever is greater, for the most serious violations.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a PIPEDA-Compliant Privacy Policy",
  description:
    "Follow these six steps to create a privacy policy that complies with PIPEDA and Canada's privacy requirements.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Designate a privacy officer and document accountability",
      text: "PIPEDA Principle 1 (Accountability) requires you to designate an individual responsible for your organization's compliance with the law. Include this person's title and contact information in your privacy policy. This person is responsible for ensuring all data handling complies with your stated practices and with PIPEDA requirements.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Audit and document all personal information collection",
      text: "List every category of personal information your website or business collects: names, email addresses, phone numbers, payment information, IP addresses, device data, location information, and browsing behavior. For each category, document the purpose of collection, the legal basis (consent, contract, or legitimate interest), and how long you retain it.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Implement proper consent mechanisms",
      text: "PIPEDA requires meaningful consent for the collection, use, and disclosure of personal information. Determine whether express consent (opt-in) or implied consent is appropriate for each data type and purpose. Sensitive information such as health, financial, or children's data always requires express consent. Make sure consent language is clear and not buried in terms and conditions.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Draft sections covering all 10 fair information principles",
      text: "Your privacy policy should address each of the 10 PIPEDA principles: accountability, identifying purposes, consent, limiting collection, limiting use/disclosure/retention, accuracy, safeguards, openness, individual access, and challenging compliance. Each principle should be reflected in a specific section of your policy with concrete details about your practices.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Include data breach notification procedures",
      text: "Since 2018, PIPEDA requires mandatory breach notification. Your privacy policy should describe how you will notify affected individuals and the OPC in the event of a breach that poses a real risk of significant harm. Include your process for assessing breach severity and your commitment to maintaining breach records as required by law.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Publish the policy prominently and review annually",
      text: "Make your privacy policy easily accessible from every page of your website, typically through a footer link. PIPEDA's Openness Principle requires that your practices be readily available to the public. Review and update the policy at least annually, and whenever your data practices change. If you also serve EU users, ensure your policy addresses GDPR requirements alongside PIPEDA.",
    },
  ],
};

const tocSections = [
  { id: "what-is-pipeda", title: "What Is PIPEDA?" },
  { id: "does-it-apply", title: "Does PIPEDA Apply to You?" },
  { id: "ten-principles", title: "PIPEDA's 10 Fair Information Principles" },
  { id: "pipeda-vs-gdpr", title: "PIPEDA vs GDPR: Key Differences" },
  { id: "bill-c27", title: "Bill C-27 and the Future of Canadian Privacy" },
  { id: "template-preview", title: "Free PIPEDA Template Preview" },
  { id: "common-mistakes", title: "Common PIPEDA Mistakes" },
  { id: "how-to-create", title: "How to Create a PIPEDA-Compliant Policy" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PIPEDAPrivacyPolicyTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "PIPEDA Privacy Policy Template: Canada Compliant (2026)",
            description:
              "Free PIPEDA privacy policy template for Canadian websites. Covers all 10 fair information principles, consent requirements, and Bill C-27 updates.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-09",
            dateModified: "2026-03-09",
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
                name: "PIPEDA Privacy Policy Template",
                item: "https://ultrafastutilities.com/pipeda-privacy-policy-template",
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
                PIPEDA Privacy Policy Template
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Scale className="w-3.5 h-3.5" />
                Canada Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                PIPEDA Privacy Policy Template:{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Canada Compliant
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                PIPEDA requires every organization engaged in commercial
                activity in Canada to have a privacy policy that covers all
                10 fair information principles. This guide covers exactly
                what your policy must include, how PIPEDA compares to GDPR,
                and what Bill C-27 means for the future of Canadian privacy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Canadian businesses, international companies serving
                Canadian users, and website operators who need to comply with
                PIPEDA.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                GDPR Template
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/ccpa-privacy-policy-example"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                CCPA Example
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
                    Need a PIPEDA-compliant policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Covers all 10 principles automatically
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
                <span>Last updated: March 2026</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>11 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>PIPEDA requires Canadian businesses to have a privacy policy covering all 10 fair information principles.</strong>{" "}
                  Your policy must disclose what personal information you collect,
                  the purposes for collection, how you obtain consent, your data
                  security safeguards, and how individuals can access their data
                  or file complaints. Non-compliance can result in fines up to
                  $100,000 CAD under current law, with proposed increases to $25
                  million CAD under Bill C-27.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                If your business operates in Canada, collects data from
                Canadian residents, or transfers personal information across
                Canadian provincial borders, you need to comply with PIPEDA.
                Canada&apos;s federal privacy law has been in effect since
                2000, and it governs how private-sector organizations handle
                personal information during commercial activities.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                Unlike some privacy laws that focus primarily on digital
                data, PIPEDA covers all personal information collected in
                the course of commercial activity, whether digital or
                physical. For website operators, this means every form
                submission, every analytics cookie, and every email address
                you collect falls under PIPEDA&apos;s scope if the visitor
                is a Canadian resident.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide provides a detailed breakdown of PIPEDA&apos;s
                requirements, explains how they translate into specific
                privacy policy sections, compares PIPEDA with GDPR,
                addresses the upcoming Bill C-27 changes, and gives you a
                template outline for creating your own compliant policy.
              </p>

              {/* Section 1: What Is PIPEDA? */}
              <section id="what-is-pipeda" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Is PIPEDA?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  PIPEDA stands for the Personal Information Protection and
                  Electronic Documents Act. It is Canada&apos;s federal
                  privacy law that governs how private-sector organizations
                  collect, use, and disclose personal information in the
                  course of commercial activities. The law was enacted in
                  2000 and has been amended several times since, most
                  notably in 2015 with the Digital Privacy Act which
                  introduced mandatory data breach notification
                  requirements.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  PIPEDA is built around 10 fair information principles,
                  which are codified in Schedule 1 of the Act. These
                  principles form the foundation of Canadian privacy law
                  and dictate what your privacy policy must contain. Unlike
                  GDPR, which prescribes specific requirements in detailed
                  articles, PIPEDA takes a principles-based approach that
                  gives organizations some flexibility in how they
                  implement compliance.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Counts as Personal Information Under PIPEDA
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  PIPEDA defines personal information broadly as any
                  information about an identifiable individual. This
                  includes names, addresses, phone numbers, email addresses,
                  Social Insurance Numbers, age, income, credit records,
                  medical records, IP addresses, device identifiers, and
                  opinions or comments associated with an individual. For
                  websites, this means analytics data, form submissions,
                  cookie data, and any other information that can be linked
                  to a specific person.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  The Office of the Privacy Commissioner (OPC)
                </h3>
                <p className="text-slate-700 leading-7 mb-6">
                  PIPEDA is enforced by the Office of the Privacy
                  Commissioner of Canada (OPC). The OPC investigates
                  complaints from individuals, conducts audits, publishes
                  findings and recommendations, and can refer matters to the
                  Federal Court for binding orders. While the OPC&apos;s
                  current enforcement powers are more limited than those of
                  EU data protection authorities, the proposed Bill C-27
                  would significantly strengthen them.
                </p>

                {/* Inline mini-FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does PIPEDA apply to non-profit organizations?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Generally no. PIPEDA applies to private-sector
                      organizations engaged in commercial activities.
                      Non-profits, charities, and political parties are
                      typically exempt unless they engage in commercial
                      activities. However, if a non-profit operates a
                      commercial side (such as selling merchandise), that
                      commercial activity may fall under PIPEDA.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does PIPEDA apply to employee data?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Only for federally regulated employers (banks,
                      airlines, telecommunications companies). For most
                      private-sector employers, employee data is governed
                      by provincial privacy legislation rather than PIPEDA.
                      However, PIPEDA applies to employee data that crosses
                      provincial or national borders.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Does PIPEDA Apply to You? */}
              <section id="does-it-apply" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Does PIPEDA Apply to You?
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Determining whether PIPEDA applies to your organization
                  depends on several factors. Here is a breakdown of when
                  PIPEDA applies, when provincial laws apply instead, and
                  when you might need to comply with both.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Scenario
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          PIPEDA Applies?
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[45%]">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Canadian business, collects data from Canadian users
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-green-700 font-medium">Yes</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Applies in all provinces without equivalent
                          provincial legislation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          International business, collects data from Canadian
                          users
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-green-700 font-medium">Yes</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Extraterritorial application for commercial
                          activities involving Canadian data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Transfers data across provincial borders
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-green-700 font-medium">Yes</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          PIPEDA applies to interprovincial and international
                          data transfers
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Operates only in British Columbia
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-amber-500" />
                            <span className="text-amber-700 font-medium">Partially</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          BC&apos;s PIPA applies for intra-provincial
                          activities. PIPEDA for interprovincial transfers.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Operates only in Alberta
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-amber-500" />
                            <span className="text-amber-700 font-medium">Partially</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Alberta&apos;s PIPA applies for intra-provincial
                          activities. PIPEDA for interprovincial transfers.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Operates only in Quebec
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-amber-500" />
                            <span className="text-amber-700 font-medium">Partially</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Quebec&apos;s Law 25 (An Act Respecting the
                          Protection of Personal Information) applies. PIPEDA
                          for interprovincial transfers.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Non-profit with no commercial activity
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <XCircle className="w-4 h-4 text-red-500" />
                            <span className="text-red-700 font-medium">No</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Exempt from PIPEDA unless engaged in commercial
                          activities
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
                        Quebec&apos;s Law 25 (which took full effect in
                        September 2024) is one of the strictest privacy laws
                        in Canada, with fines up to $25 million CAD or 4% of
                        worldwide turnover. If you serve Quebec residents,
                        you may need to comply with Law 25 in addition to
                        PIPEDA. Law 25 requires privacy impact assessments,
                        explicit consent for sensitive data, and mandatory
                        breach notification, similar to GDPR.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The practical advice for most organizations is this: if
                  you do any business in Canada or collect data from
                  Canadian visitors, assume PIPEDA applies. Even if a
                  provincial law covers some of your activities, PIPEDA
                  will likely apply to any interprovincial or international
                  data transfers. Building a privacy policy that complies
                  with PIPEDA from the start is the safest approach.
                </p>
              </section>

              {/* Section 3: 10 Fair Information Principles */}
              <section id="ten-principles" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  PIPEDA&apos;s 10 Fair Information Principles
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These 10 principles are the foundation of PIPEDA. Each
                  one translates into specific requirements for your
                  privacy policy. Here is what each principle means and
                  what your policy must say about it.
                </p>

                <div className="space-y-5">
                  {/* Principle 1 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Accountability
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Your organization must designate an individual (a
                        privacy officer) who is responsible for ensuring
                        compliance with PIPEDA. This person is accountable
                        for all personal information under your
                        organization&apos;s control, including data
                        transferred to third parties for processing.
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        Your policy must: Name or describe the role of your
                        privacy officer and provide contact information for
                        privacy inquiries.
                      </p>
                    </div>
                  </div>

                  {/* Principle 2 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Identifying Purposes
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        You must identify the purposes for collecting
                        personal information before or at the time of
                        collection. You cannot collect data and decide what
                        to do with it later. Each purpose must be documented
                        and communicated to the individual.
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        Your policy must: List each category of data you
                        collect and the specific purpose for collecting it
                        (e.g., &quot;We collect email addresses to send our
                        weekly newsletter&quot;).
                      </p>
                    </div>
                  </div>

                  {/* Principle 3 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Consent
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        You must obtain meaningful consent for the
                        collection, use, and disclosure of personal
                        information. Consent can be express (opt-in) or
                        implied, depending on the sensitivity of the data
                        and the reasonable expectations of the individual.
                        Sensitive information always requires express
                        consent.
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        Your policy must: Explain how you obtain consent,
                        what types of consent apply to different data, and
                        how individuals can withdraw consent at any time.
                      </p>
                    </div>
                  </div>

                  {/* Principle 4 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Limiting Collection
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        You must limit collection to what is necessary for
                        the identified purposes. You cannot collect data
                        &quot;just in case&quot; or for speculative future
                        uses. This is similar to GDPR&apos;s data
                        minimization principle.
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        Your policy must: State that you collect only the
                        personal information necessary for the stated
                        purposes and describe what data is required vs.
                        optional.
                      </p>
                    </div>
                  </div>

                  {/* Principle 5 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Limiting Use, Disclosure, and Retention
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Personal information must be used only for the
                        purposes for which it was collected, unless the
                        individual consents to a new use or the use is
                        required by law. Data must be retained only as long
                        as necessary to fulfill those purposes and then
                        securely destroyed.
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        Your policy must: Describe your data retention
                        periods, explain when and how data is deleted or
                        anonymized, and state that data is not used for
                        purposes beyond those disclosed.
                      </p>
                    </div>
                  </div>

                  {/* Principle 6 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Accuracy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Personal information must be as accurate, complete,
                        and up-to-date as necessary for the purposes for
                        which it is used. You should not use outdated or
                        incorrect data to make decisions about individuals.
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        Your policy must: Describe how individuals can
                        update or correct their personal information, and
                        state your commitment to keeping data accurate.
                      </p>
                    </div>
                  </div>

                  {/* Principle 7 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      7
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Safeguards
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Personal information must be protected by security
                        safeguards appropriate to the sensitivity of the
                        data. This includes physical measures (locked
                        offices), organizational measures (access controls,
                        training), and technological measures (encryption,
                        firewalls, secure transmission).
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        Your policy must: Describe the security measures you
                        use to protect personal information, without
                        revealing specific technical details that could
                        compromise security.
                      </p>
                    </div>
                  </div>

                  {/* Principle 8 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      8
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Openness
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Your privacy policies and practices must be readily
                        available to the public. This is the principle that
                        directly requires you to have a published,
                        accessible privacy policy. The information must be
                        available in a form that is generally understandable.
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        Your policy must: Be published on your website
                        (typically linked from the footer), written in plain
                        language, and cover all aspects of your personal
                        information handling practices.
                      </p>
                    </div>
                  </div>

                  {/* Principle 9 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      9
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Individual Access
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Individuals have the right to access their personal
                        information held by your organization. Upon request,
                        you must inform them of the existence, use, and
                        disclosure of their data, and provide access to it.
                        You must respond to access requests within 30 days.
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        Your policy must: Explain how individuals can
                        request access to their data, the process for making
                        a request, and the typical response timeframe (within
                        30 days).
                      </p>
                    </div>
                  </div>

                  {/* Principle 10 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      10
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Challenging Compliance
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">
                        Individuals must be able to challenge your
                        organization&apos;s compliance with PIPEDA. You
                        must have a complaint process in place and
                        investigate all complaints. If a complaint is found
                        to be justified, you must take appropriate measures,
                        including amending your policies and practices.
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        Your policy must: Describe your complaint process,
                        provide contact information for submitting
                        complaints, and reference the OPC as an escalation
                        option.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: PIPEDA vs GDPR */}
              <section id="pipeda-vs-gdpr" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  PIPEDA vs GDPR: Key Differences
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Many organizations that serve both Canadian and European
                  users need to comply with both PIPEDA and GDPR. While
                  the two laws share similar goals, there are important
                  differences that affect what your privacy policy must
                  include.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Aspect
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[37.5%]">
                          PIPEDA (Canada)
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[37.5%]">
                          GDPR (EU/UK)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Consent model
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Meaningful consent; implied consent allowed for
                          non-sensitive data in certain commercial contexts
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Explicit consent required for most processing;
                          six legal bases available
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Data breach notification
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Mandatory since 2018; report to OPC and notify
                          affected individuals if real risk of significant
                          harm
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Mandatory; notify supervisory authority within 72
                          hours; notify individuals if high risk
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Privacy officer requirement
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Must designate a privacy officer (any title)
                          responsible for compliance
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Must appoint a DPO if processing sensitive data at
                          scale or monitoring individuals systematically
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Maximum fines
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Up to $100,000 CAD (current); up to $25M CAD or
                          5% of revenue (proposed under Bill C-27)
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Up to 20 million euros or 4% of global revenue,
                          whichever is higher
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Extraterritorial reach
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Applies to commercial activities involving
                          Canadian residents&apos; data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Applies to any organization processing EU
                          residents&apos; data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Right to erasure
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Limited; individuals can challenge accuracy and
                          request amendments, but no explicit right to
                          erasure like GDPR Article 17
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Explicit right to erasure (right to be forgotten)
                          under Article 17
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Data portability
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Not currently required under PIPEDA; proposed in
                          Bill C-27
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required under GDPR Article 20; data must be
                          provided in machine-readable format
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                        The European Commission has recognized PIPEDA as
                        providing an adequate level of data protection under
                        GDPR. This means personal data can flow from the EU
                        to Canada without additional safeguards, making
                        PIPEDA compliance particularly valuable for
                        organizations that handle data from both Canadian
                        and European users. However, this adequacy decision
                        is subject to periodic review and may be affected by
                        the transition to Bill C-27.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  If you serve both Canadian and EU users, the practical
                  approach is to build a privacy policy that meets the
                  stricter GDPR requirements while also addressing
                  PIPEDA-specific elements like the 10 principles and the
                  OPC complaint process. A well-structured policy can
                  satisfy both laws in a single document by including
                  region-specific sections.
                </p>
              </section>

              {/* Section 5: Bill C-27 */}
              <section id="bill-c27" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Bill C-27 and the Future of Canadian Privacy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Bill C-27, the Digital Charter Implementation Act, is the
                  Canadian government&apos;s proposal to modernize privacy
                  law. Its centerpiece is the Consumer Privacy Protection
                  Act (CPPA), which would replace the private-sector
                  provisions of PIPEDA with a significantly strengthened
                  framework. Understanding Bill C-27 is important for
                  organizations that want to be prepared for the future of
                  Canadian privacy law.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Key Changes Under the CPPA
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  The CPPA would introduce several major changes to Canadian
                  privacy law. First, penalties would increase dramatically.
                  The maximum fine under the CPPA would be the greater of
                  5% of global revenue or $25 million CAD. This is a
                  massive increase from the current $100,000 CAD maximum
                  under PIPEDA and would bring Canadian penalties in line
                  with GDPR.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Second, the CPPA would create a new Privacy Tribunal with
                  the power to impose administrative monetary penalties
                  directly, without needing to go through Federal Court.
                  This would make enforcement faster and more practical.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Third, the CPPA would introduce new individual rights,
                  including data portability (the right to transfer your
                  data to another organization in a machine-readable format)
                  and algorithmic transparency (the right to an explanation
                  when automated decisions significantly affect you).
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Strengthened Consent Requirements
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  The CPPA would require that consent be &quot;meaningful,&quot;
                  and it would define specific criteria for what constitutes
                  meaningful consent. Organizations would need to provide
                  information in plain language, present consent requests
                  prominently, and not bundle consent with other terms.
                  This means privacy policies would need to be clearer and
                  more specific than many current PIPEDA-compliant policies.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What This Means for You Now
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  While Bill C-27&apos;s final passage timeline remains
                  uncertain, organizations should start preparing now. The
                  CPPA&apos;s requirements are stricter than current PIPEDA
                  in every area. By building a privacy policy that meets
                  the higher CPPA standard today, you will not need a major
                  overhaul when the new law takes effect. At minimum, ensure
                  your current policy addresses all 10 PIPEDA principles
                  thoroughly, as these will remain the foundation under the
                  CPPA.
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
                        Bill C-27 also includes the Artificial Intelligence
                        and Data Act (AIDA), which would be Canada&apos;s
                        first standalone AI regulation. AIDA would require
                        organizations to conduct impact assessments for
                        high-impact AI systems and disclose when AI is used
                        to make decisions about individuals. If your website
                        or business uses AI-powered tools (chatbots,
                        recommendation engines, automated decision-making),
                        AIDA could impose additional transparency
                        requirements beyond privacy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Template Preview */}
              <section id="template-preview" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Free PIPEDA Privacy Policy Template Preview
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Below is a structured outline of what a PIPEDA-compliant
                  privacy policy should contain. Each section maps to one
                  or more of the 10 fair information principles. Use this as
                  a checklist when reviewing your existing policy or as a
                  starting point for creating a new one.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    {
                      title: "1. Introduction and Scope",
                      desc: "State who you are, what the policy covers, and that you comply with PIPEDA. Identify your organization by name and describe the types of personal information the policy addresses.",
                    },
                    {
                      title: "2. Privacy Officer Contact Information",
                      desc: "Name or describe the role of your designated privacy officer. Provide an email address, phone number, or mailing address for privacy inquiries. (Principle 1: Accountability)",
                    },
                    {
                      title: "3. Personal Information We Collect",
                      desc: "List every category of personal information you collect: names, emails, phone numbers, payment info, IP addresses, device data, cookies, analytics data. Be specific and comprehensive. (Principle 4: Limiting Collection)",
                    },
                    {
                      title: "4. Purposes for Collection",
                      desc: "For each category of data, explain why you collect it. Purposes might include providing services, processing payments, sending marketing communications, improving website performance, or complying with legal obligations. (Principle 2: Identifying Purposes)",
                    },
                    {
                      title: "5. Consent",
                      desc: "Explain how you obtain consent (express or implied) for each type of data collection. Describe how users can withdraw consent and what happens when they do. Address cookie consent separately if applicable. (Principle 3: Consent)",
                    },
                    {
                      title: "6. Use, Disclosure, and Retention",
                      desc: "Describe how you use personal information, who you share it with (third-party processors, service providers, legal authorities), and how long you retain data before deletion or anonymization. (Principle 5: Limiting Use, Disclosure, and Retention)",
                    },
                    {
                      title: "7. Data Accuracy",
                      desc: "Explain how individuals can update or correct their personal information. Describe your process for keeping data accurate and current. (Principle 6: Accuracy)",
                    },
                    {
                      title: "8. Security Safeguards",
                      desc: "Describe the security measures you use to protect personal information. Mention encryption, access controls, employee training, and secure data storage without revealing specific technical implementations. (Principle 7: Safeguards)",
                    },
                    {
                      title: "9. Individual Access Rights",
                      desc: "Explain how individuals can request access to their personal information, the process for submitting a request, and the 30-day response timeframe. Describe any exceptions to access rights under PIPEDA. (Principle 9: Individual Access)",
                    },
                    {
                      title: "10. Data Breach Notification",
                      desc: "Describe your process for handling data breaches, including when and how you will notify affected individuals and the OPC. Explain the criteria for determining whether a breach poses a real risk of significant harm.",
                    },
                    {
                      title: "11. Complaints and Challenging Compliance",
                      desc: "Provide a clear process for filing privacy complaints with your organization. Include the privacy officer's contact information and reference the OPC as an escalation option if the individual is not satisfied. (Principle 10: Challenging Compliance)",
                    },
                    {
                      title: "12. Changes to This Policy",
                      desc: "Explain how and when you will update the policy, how users will be notified of changes, and that continued use after notification constitutes acceptance of the updated policy. (Principle 8: Openness)",
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

                {/* Inline CTA */}
                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Generate Your PIPEDA-Compliant Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Skip the manual drafting. Answer a few questions
                        about your data practices and get a complete
                        PIPEDA-compliant privacy policy in under 60 seconds.
                        Covers all 10 principles automatically.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My PIPEDA Policy
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common PIPEDA Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are the five most common misconceptions about PIPEDA
                  compliance, and why each one can leave your organization
                  exposed to enforcement action.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;PIPEDA only applies to Canadian
                        companies.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: PIPEDA applies to any organization that
                        collects, uses, or discloses personal information
                        of Canadian residents in the course of commercial
                        activities. If you are a US-based or European
                        company with a website that collects data from
                        Canadian visitors (through analytics, forms, or
                        cookies), PIPEDA can apply to you. This
                        extraterritorial reach is similar to GDPR&apos;s
                        application to non-EU organizations.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;GDPR compliance means PIPEDA
                        compliance.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: While GDPR and PIPEDA share similar goals,
                        they have different structures and requirements.
                        GDPR compliance gets you most of the way to PIPEDA
                        compliance, but there are PIPEDA-specific elements
                        you may be missing. PIPEDA requires a designated
                        privacy officer (not the same as a DPO), a specific
                        complaint process referencing the OPC, and adherence
                        to the 10 fair information principles as a
                        framework. A GDPR-only policy may not address these
                        Canadian-specific requirements.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;There are no real fines under
                        PIPEDA.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: While current PIPEDA fines are lower than
                        GDPR (up to $100,000 CAD for certain offenses), the
                        OPC can refer cases to Federal Court, which can
                        order damages and require organizations to change
                        their practices. More importantly, the proposed CPPA
                        under Bill C-27 would increase maximum penalties to
                        $25 million CAD or 5% of global revenue. The
                        reputational damage from an OPC finding of
                        non-compliance can also be significant, as findings
                        are publicly published.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I only need English.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Canada is officially bilingual. While PIPEDA
                        does not explicitly require bilingual privacy
                        policies for private-sector organizations, federal
                        institutions must communicate in both English and
                        French. If you serve customers in Quebec, Law 25
                        (Quebec&apos;s provincial privacy law) and the
                        Charter of the French Language may require that your
                        privacy policy be available in French. Providing a
                        bilingual policy is a best practice for any
                        organization serving Canadian consumers nationwide.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My website is too small for
                        PIPEDA.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: PIPEDA has no revenue threshold, no
                        employee count threshold, and no website traffic
                        threshold. If you are a private-sector organization
                        engaged in commercial activity and you collect
                        personal information from Canadian residents, PIPEDA
                        applies to you regardless of size. A one-person
                        online business selling products to Canadian
                        customers is just as subject to PIPEDA as a large
                        corporation. The OPC has investigated and published
                        findings against small businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a PIPEDA-Compliant Privacy Policy (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these steps to create a privacy policy that meets
                  PIPEDA requirements and prepares you for the stricter
                  standards expected under Bill C-27.
                </p>

                <div className="space-y-5">
                  {/* Step 1 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Designate a privacy officer and document
                        accountability
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        PIPEDA Principle 1 requires you to designate someone
                        responsible for your organization&apos;s privacy
                        compliance. This can be you (if you are a sole
                        proprietor), a specific employee, or an external
                        consultant. Document this person&apos;s title and
                        contact information. They will be the point of
                        contact for privacy inquiries, access requests, and
                        complaints. Include their contact details in your
                        privacy policy.
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
                        Audit all personal information collection
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Document every type of personal information your
                        organization collects: form data (names, emails,
                        phone numbers), payment information, analytics data
                        (IP addresses, device info), cookie data, and any
                        information from third-party integrations. For each
                        data type, record the purpose of collection, the
                        method (active vs. passive), and the retention
                        period. This audit forms the basis of your privacy
                        policy disclosures.
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
                        Implement proper consent mechanisms
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Determine whether express or implied consent is
                        appropriate for each type of data collection.
                        Sensitive information (health, financial, children&apos;s
                        data) always requires express consent. For website
                        analytics and basic cookies, implied consent may be
                        sufficient in some contexts, but express consent is
                        safer and will be the standard under Bill C-27. Add
                        consent checkboxes to forms and implement a cookie
                        consent banner for analytics and advertising cookies.
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
                        Draft sections covering all 10 principles
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Using the template preview above as your guide,
                        write each section of your privacy policy to address
                        the corresponding PIPEDA principle. Be specific
                        about your actual practices. Name the third-party
                        services you use (Google Analytics, Stripe,
                        Mailchimp), describe your actual retention periods,
                        and explain your real security measures. Generic
                        language weakens your compliance position.
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
                        Include breach notification procedures
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Since 2018, PIPEDA requires mandatory data breach
                        notification. Your privacy policy should describe
                        your breach notification process: how you assess
                        whether a breach poses a real risk of significant
                        harm, how you notify the OPC and affected
                        individuals, and what information the notification
                        will contain. You are also required to maintain
                        records of all breaches (whether or not they
                        required notification) for at least two years.
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
                        Publish prominently and review annually
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Link your privacy policy from the footer of every
                        page on your website. PIPEDA&apos;s Openness
                        Principle requires that your practices be readily
                        available. Use plain language that an average person
                        can understand. Review your policy at least
                        annually, and update it whenever your data practices
                        change. If you also serve EU users, add GDPR-specific
                        sections. If you serve Quebec residents, ensure
                        compliance with Law 25 as well.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-700">
                    <strong>Shortcut:</strong> A privacy policy generator
                    automates the entire process. You answer questions about
                    your data practices, select that you need PIPEDA
                    compliance, and the generator produces a complete policy
                    covering all 10 principles, breach notification, consent
                    mechanisms, and individual rights. Takes under five
                    minutes.{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      Generate your PIPEDA-compliant policy
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
                      What is PIPEDA and who does it apply to?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      PIPEDA is Canada&apos;s federal privacy law governing
                      private-sector organizations that collect personal
                      information during commercial activities. It applies
                      to any organization, Canadian or foreign, that
                      collects data from Canadian residents in the course of
                      commercial activity. It also applies to
                      interprovincial and international data transfers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does PIPEDA apply if I am not based in Canada?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. If your website collects data from Canadian
                      visitors through analytics, forms, cookies, or any
                      other means, and you engage in commercial activities,
                      PIPEDA can apply. This extraterritorial reach is
                      similar to GDPR&apos;s application to non-EU
                      organizations. If you have Canadian users, it is
                      safest to assume PIPEDA applies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are the 10 fair information principles?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      They are: Accountability, Identifying Purposes,
                      Consent, Limiting Collection, Limiting Use/Disclosure/
                      Retention, Accuracy, Safeguards, Openness, Individual
                      Access, and Challenging Compliance. Each principle
                      requires specific disclosures and practices that must
                      be reflected in your privacy policy. Together, they
                      form the complete framework for handling personal
                      information under Canadian law.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How is PIPEDA different from GDPR?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Key differences include: PIPEDA allows implied consent
                      in some situations while GDPR generally requires
                      explicit consent; PIPEDA fines are currently lower
                      ($100K CAD vs. 20M euros); PIPEDA requires a privacy
                      officer while GDPR requires a DPO in certain cases;
                      GDPR includes a right to erasure that PIPEDA currently
                      lacks. Both have extraterritorial reach and require
                      transparency about data practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is Bill C-27 and how will it change things?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Bill C-27 proposes to replace PIPEDA&apos;s
                      private-sector provisions with the Consumer Privacy
                      Protection Act (CPPA). The CPPA would bring
                      dramatically higher fines (up to $25M CAD or 5% of
                      revenue), new individual rights like data portability,
                      algorithmic transparency requirements, and a new
                      Privacy Tribunal for direct enforcement. While the
                      timeline is uncertain, organizations should start
                      preparing by strengthening their current compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my website need a privacy policy under PIPEDA?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. PIPEDA&apos;s Openness Principle (Principle 8)
                      requires that your privacy policies and practices be
                      readily available. For a website, this means having a
                      publicly accessible privacy policy linked from your
                      site. The policy must describe what data you collect,
                      your purposes, consent mechanisms, security measures,
                      access rights, and complaint process.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are the penalties for non-compliance with PIPEDA?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Currently, the OPC can investigate complaints, publish
                      findings, and refer cases to Federal Court. Fines for
                      certain offenses reach up to $100,000 CAD. The Federal
                      Court can order damages and practice changes. Under
                      the proposed CPPA (Bill C-27), penalties would
                      increase to up to $25 million CAD or 5% of global
                      revenue. Published OPC findings also cause significant
                      reputational damage.
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
                      desc: "Compliant GDPR template with all required disclosures",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      title: "CCPA Privacy Policy Example",
                      desc: "What a compliant California privacy disclosure looks like",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "A comprehensive guide for standard website operators",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      title: "Privacy Policy for Small Business",
                      desc: "Tailored guidance for small business owners",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/privacy-policy-vs-terms-and-conditions",
                      title: "Privacy Policy vs Terms and Conditions",
                      desc: "How these two documents differ and which you need",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      title: "How Often to Update Your Privacy Policy",
                      desc: "When and why to review your privacy disclosures",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      title: "Cookie Policy for Websites",
                      desc: "Everything you need to know about cookie disclosures",
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
                  PIPEDA Compliance Made Simple
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Generate a privacy policy that covers all 10 PIPEDA fair
                  information principles, breach notification requirements,
                  and consent mechanisms in under 60 seconds. Prepared for
                  Bill C-27 changes.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My PIPEDA Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers PIPEDA, GDPR &amp; CCPA &middot; All 10 principles
                  included &middot; Ready in 60 seconds
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
