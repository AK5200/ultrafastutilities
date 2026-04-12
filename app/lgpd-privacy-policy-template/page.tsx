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
    "LGPD Privacy Policy Template (Brazil Data Protection) (2026) | ultrafastutilities",
  description:
    "Free LGPD privacy policy template compliant with Brazil's Lei Geral de Protecao de Dados. Covers 10 legal bases, data subject rights, DPO requirements, and ANPD guidelines.",
  keywords:
    "lgpd privacy policy template, brazil privacy policy template, lgpd template, lei geral de protecao de dados template, lgpd compliance",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/lgpd-privacy-policy-template",
  },
  openGraph: {
    title:
      "LGPD Privacy Policy Template (Brazil Data Protection) (2026) | ultrafastutilities",
    description:
      "Free LGPD privacy policy template compliant with Brazil's Lei Geral de Protecao de Dados. Covers 10 legal bases, data subject rights, DPO requirements, and ANPD guidelines.",
    url: "https://ultrafastutilities.com/lgpd-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LGPD Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "LGPD Privacy Policy Template (Brazil Data Protection) (2026)",
    description:
      "Free LGPD privacy policy template compliant with Brazil's Lei Geral de Protecao de Dados. Covers 10 legal bases and data subject rights.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the LGPD and who does it apply to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LGPD (Lei Geral de Protecao de Dados) is Brazil's comprehensive data protection law, enacted in 2018 and fully enforceable since August 2021. It applies to any organization, regardless of location, that processes personal data of individuals located in Brazil, offers goods or services to individuals in Brazil, or collects and processes data within Brazilian territory. This means a company based in the United States or Europe must comply with the LGPD if it processes data from Brazilian residents.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 10 legal bases for data processing under the LGPD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LGPD provides 10 legal bases for processing personal data: (1) Consent of the data subject, (2) Compliance with a legal or regulatory obligation, (3) Execution of public policies by the public administration, (4) Research by research bodies (with anonymization when possible), (5) Execution of a contract or preliminary procedures related to a contract, (6) Exercise of rights in judicial, administrative, or arbitration proceedings, (7) Protection of life or physical safety, (8) Health protection in procedures carried out by health professionals or health entities, (9) Legitimate interests of the controller or third party, (10) Credit protection. Unlike GDPR which has 6 legal bases, the LGPD provides 10 distinct bases.",
      },
    },
    {
      "@type": "Question",
      name: "How does the LGPD compare to the GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LGPD was heavily influenced by the GDPR and shares many similarities, but there are key differences. The LGPD has 10 legal bases for processing (vs. GDPR's 6). The LGPD requires a DPO (called Encarregado) for all controllers, while GDPR only requires one in certain cases. LGPD fines reach up to 2% of revenue in Brazil, capped at 50 million BRL per violation, while GDPR fines can reach 4% of global revenue or 20 million euros. The LGPD applies to data of individuals in Brazil regardless of nationality, while GDPR applies to EU residents. Both laws have extraterritorial reach and grant similar data subject rights.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ANPD and what role does it play?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ANPD (Autoridade Nacional de Protecao de Dados) is Brazil's national data protection authority, established to oversee, implement, and enforce the LGPD. The ANPD is responsible for issuing guidelines and regulations, investigating complaints, conducting audits, imposing administrative sanctions, and promoting awareness of data protection. Since becoming fully operational, the ANPD has issued regulations on data breach reporting, international data transfers, the role of the DPO, and simplified compliance frameworks for small businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a DPO (Encarregado) under the LGPD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The LGPD originally required every data controller to appoint a Data Protection Officer, called an Encarregado in Portuguese. The Encarregado's identity and contact information must be publicly disclosed, typically in your privacy policy and on your website. The ANPD has issued guidance allowing small businesses and startups to appoint a simplified version of this role, but the requirement still applies. The Encarregado serves as the point of contact between the controller, data subjects, and the ANPD.",
      },
    },
    {
      "@type": "Question",
      name: "What are the penalties for non-compliance with the LGPD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LGPD penalties have been enforceable since August 2021. The ANPD can impose a range of sanctions including warnings with a deadline for corrective measures, simple fines of up to 2% of revenue in Brazil (capped at 50 million BRL per violation), daily fines to compel compliance, publicization of the infraction after investigation and confirmation, blocking of personal data involved in the violation, deletion of personal data involved in the violation, and partial or total suspension of data processing activities. The ANPD considers factors like the severity of the violation, good faith of the infractor, and economic advantage obtained.",
      },
    },
    {
      "@type": "Question",
      name: "How do I handle international data transfers under the LGPD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LGPD allows international data transfers under specific conditions: transfer to countries or organizations that provide an adequate level of data protection as recognized by the ANPD, through standard contractual clauses approved by the ANPD, through binding corporate rules, with the specific and prominent consent of the data subject, or when necessary for international legal cooperation, protection of life, or execution of public policy. The ANPD has been developing regulations on international transfers and has begun recognizing adequacy determinations for certain countries.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create an LGPD-Compliant Privacy Policy",
  description:
    "Follow these six steps to create a privacy policy that complies with Brazil's LGPD data protection requirements.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Appoint an Encarregado (DPO) and document accountability",
      text: "The LGPD requires every data controller to appoint an Encarregado (Data Protection Officer). This person serves as the communication channel between your organization, data subjects, and the ANPD. Include the Encarregado's name and contact information in your privacy policy. For small businesses, the ANPD allows simplified appointment procedures, but the role must still be filled.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map all personal data processing activities",
      text: "Create a comprehensive data inventory documenting every category of personal data you process: names, CPF numbers, email addresses, IP addresses, device data, location information, browsing behavior, and financial data. For each category, document the legal basis for processing (one of the 10 LGPD legal bases), the purpose, the retention period, and any third parties with whom the data is shared.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Identify the correct legal basis for each processing activity",
      text: "The LGPD provides 10 legal bases for processing personal data. For each data processing activity, identify which legal basis applies. Consent must be free, informed, and unambiguous. Legitimate interest requires a balancing test. Sensitive personal data (health, biometrics, race, religion, political opinion) can only be processed under specific bases outlined in Article 11. Document your legal basis analysis.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Draft the privacy policy covering all required disclosures",
      text: "Your LGPD privacy policy must include: the identity and contact details of the controller and Encarregado, the categories of personal data processed, the purposes and legal bases for processing, information about data sharing with third parties, details about international transfers, data subject rights and how to exercise them, data retention periods, and security measures. Use clear, plain language accessible to Brazilian consumers.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Implement data subject rights mechanisms",
      text: "The LGPD grants data subjects extensive rights including confirmation of processing, access to data, correction, anonymization, blocking or deletion of unnecessary data, data portability, information about shared data, information about consent denial consequences, and consent revocation. You must provide an accessible mechanism for data subjects to exercise these rights and respond within a reasonable timeframe as defined by the ANPD.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Publish the policy and establish a review cycle",
      text: "Publish your privacy policy prominently on your website with a link accessible from every page. Ensure the policy is available in Portuguese if you serve Brazilian users. Review and update the policy whenever your data practices change or when the ANPD issues new guidance. Maintain records of processing activities and be prepared to demonstrate compliance to the ANPD upon request.",
    },
  ],
};

const tocSections = [
  { id: "lgpd-overview", title: "What Is the LGPD?" },
  { id: "legal-bases", title: "10 Legal Bases for Processing" },
  { id: "template-preview", title: "Free LGPD Template Preview" },
  { id: "data-subject-rights", title: "Data Subject Rights" },
  { id: "dpo-requirements", title: "DPO (Encarregado) Requirements" },
  { id: "anpd-enforcement", title: "ANPD Enforcement" },
  { id: "lgpd-vs-gdpr", title: "LGPD vs GDPR Comparison" },
  { id: "international-transfers", title: "International Data Transfers" },
  { id: "consent", title: "Consent Under the LGPD" },
  { id: "common-mistakes", title: "Common LGPD Mistakes" },
  { id: "how-to-create", title: "How to Create an LGPD-Compliant Policy" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function LGPDPrivacyPolicyTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "LGPD Privacy Policy Template (Brazil Data Protection) (2026)",
            description:
              "Free LGPD privacy policy template compliant with Brazil's Lei Geral de Protecao de Dados. Covers 10 legal bases, data subject rights, DPO requirements, and ANPD guidelines.",
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
                name: "LGPD Privacy Policy Template",
                item: "https://ultrafastutilities.com/lgpd-privacy-policy-template",
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
                LGPD Privacy Policy Template
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Scale className="w-3.5 h-3.5" />
                Brazil Data Protection
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                LGPD Privacy Policy Template:{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Brazil Compliant
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Brazil&apos;s LGPD (Lei Geral de Protecao de Dados) requires
                every organization that processes personal data of individuals
                in Brazil to maintain a transparent privacy policy. This guide
                covers the 10 legal bases for processing, data subject rights,
                DPO requirements, ANPD enforcement, and how the LGPD compares
                to GDPR.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For businesses serving Brazilian users, international companies
                processing data from Brazil, and app developers targeting the
                Brazilian market.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA &amp;
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
                    Need an LGPD-compliant policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Covers all 10 legal bases automatically
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
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Brazil&apos;s LGPD requires any organization processing personal data of individuals in Brazil to have a transparent privacy policy.</strong>{" "}
                  Your policy must disclose the categories of personal data
                  collected, the legal basis for each processing activity,
                  data subject rights, the identity of your Encarregado (DPO),
                  international transfer mechanisms, and data retention periods.
                  Non-compliance can result in fines up to 2% of revenue in
                  Brazil, capped at 50 million BRL per violation.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                If your business processes personal data from individuals
                located in Brazil, whether you are a Brazilian company or an
                international organization, you need to comply with the LGPD.
                Brazil&apos;s comprehensive data protection law was enacted in
                2018 and has been fully enforceable since August 2021, with
                administrative sanctions now actively imposed by the ANPD
                (Autoridade Nacional de Protecao de Dados).
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                The LGPD was modeled closely on the European GDPR but includes
                unique provisions that reflect Brazil&apos;s legal traditions
                and regulatory approach. With 10 legal bases for processing
                (compared to GDPR&apos;s 6), a mandatory DPO requirement for
                all controllers, and an enforcement authority that has been
                increasingly active, the LGPD represents one of the most
                comprehensive data protection frameworks in Latin America.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide provides a detailed breakdown of the LGPD&apos;s
                requirements, explains each of the 10 legal bases, covers
                data subject rights, addresses DPO obligations, compares the
                LGPD with GDPR, and gives you a template outline for creating
                your own compliant privacy policy.
              </p>

              {/* Section 1: LGPD Overview */}
              <section id="lgpd-overview" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Is the LGPD?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The LGPD (Lei Geral de Protecao de Dados Pessoais, or
                  General Personal Data Protection Law) is Brazil&apos;s
                  federal data protection law. It was signed into law in
                  August 2018 (Law No. 13,709) and became fully enforceable
                  in August 2021 when the ANPD gained the authority to impose
                  administrative sanctions. The LGPD applies to all processing
                  of personal data carried out in Brazil, processing aimed at
                  offering goods or services to individuals in Brazil, or
                  processing of data collected in Brazilian territory.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The LGPD adopts a broad definition of personal data: any
                  information related to an identified or identifiable natural
                  person. This includes names, CPF numbers (Brazil&apos;s
                  individual taxpayer ID), email addresses, IP addresses,
                  device identifiers, location data, cookie data, and any
                  other information that can be linked to a specific
                  individual. The law also defines a special category of
                  &quot;sensitive personal data&quot; that receives heightened
                  protection.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Sensitive Personal Data Under the LGPD
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  The LGPD defines sensitive personal data as data related to
                  racial or ethnic origin, religious belief, political opinion,
                  trade union membership, religious, philosophical, or
                  political organization membership, health or sexual life
                  data, genetic data, and biometric data. Processing of
                  sensitive data is subject to stricter rules under Article 11
                  and can only be carried out with specific consent or under
                  limited legal bases.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Key Roles Under the LGPD
                </h3>
                <p className="text-slate-700 leading-7 mb-6">
                  The LGPD defines several key roles: the Controlador
                  (controller) decides the purposes and means of processing;
                  the Operador (processor) processes data on behalf of the
                  controller; the Encarregado (DPO) serves as the
                  communication channel between the controller, data subjects,
                  and the ANPD; and the Titular (data subject) is the
                  individual whose data is being processed. Understanding
                  these roles is essential for determining your obligations
                  under the law.
                </p>

                {/* Inline mini-FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does the LGPD apply to small businesses?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. The LGPD applies to organizations of all sizes that
                      process personal data. However, the ANPD has issued
                      Resolution CD/ANPD No. 2/2022, which provides simplified
                      compliance procedures for small businesses (micro and
                      small enterprises), startups, and individuals who process
                      data for economic purposes. These simplified rules
                      include relaxed requirements for the Encarregado role and
                      simplified record-keeping, but the core obligations
                      remain.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does the LGPD apply to data about companies (legal
                      entities)?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No. The LGPD only protects personal data of natural
                      persons (individuals). Data about legal entities (such
                      as company names, CNPJ numbers, or business addresses)
                      is not covered by the LGPD. However, if company data
                      includes information about identifiable individuals
                      (such as contact persons or employees), that individual
                      data is protected.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: 10 Legal Bases */}
              <section id="legal-bases" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The 10 Legal Bases for Data Processing Under the LGPD
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Unlike the GDPR, which provides 6 legal bases for
                  processing, the LGPD establishes 10 distinct legal bases
                  under Article 7. Your privacy policy must identify which
                  legal basis applies to each category of personal data you
                  process. Here is a breakdown of all 10 legal bases.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[5%]">
                          #
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Legal Basis
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Description
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Common Use Cases
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">1</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Consent
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Free, informed, and unambiguous consent of the data subject
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Marketing emails, cookies, newsletter signups
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">2</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Legal or Regulatory Obligation
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Compliance with a legal or regulatory obligation of the controller
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Tax records, employment law requirements
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">3</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Public Policy
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Execution of public policies by the public administration
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Government programs, public health initiatives
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">4</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Research
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Research by research bodies, with anonymization when possible
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Academic studies, statistical research
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">5</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contract Execution
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Execution of a contract or preliminary procedures at the data subject&apos;s request
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Order processing, service delivery, account creation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">6</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Exercise of Rights
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Exercise of rights in judicial, administrative, or arbitration proceedings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Legal disputes, regulatory proceedings
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">7</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Protection of Life
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Protection of the life or physical safety of the data subject or third party
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Emergency situations, health emergencies
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">8</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Health Protection
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Health protection by health professionals or health entities
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Medical records, health services, telemedicine
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">9</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Legitimate Interest
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Legitimate interests of the controller or third party, subject to balancing test
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Fraud prevention, security, analytics
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">10</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Credit Protection
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Credit protection, including credit scoring
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Credit checks, financial assessments
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
                        The LGPD&apos;s &quot;credit protection&quot; legal
                        basis (number 10) is unique to Brazil and has no
                        equivalent in the GDPR or any other major data
                        protection framework. This legal basis reflects
                        Brazil&apos;s established credit scoring system and
                        allows organizations to process personal data for
                        credit protection purposes without requiring consent.
                        It was one of the most debated provisions during the
                        law&apos;s legislative process.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  For most website operators and online businesses, the most
                  commonly used legal bases will be consent (for marketing and
                  cookies), contract execution (for delivering services),
                  legitimate interest (for analytics and security), and legal
                  obligation (for tax and regulatory compliance). Your privacy
                  policy must clearly state which legal basis applies to each
                  processing activity.
                </p>
              </section>

              {/* Section 3: Template Preview */}
              <section id="template-preview" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Free LGPD Privacy Policy Template Preview
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Below is a structured outline of what an LGPD-compliant
                  privacy policy should contain. Each section maps to specific
                  LGPD requirements. Use this as a checklist when reviewing
                  your existing policy or as a starting point for creating a
                  new one.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    {
                      title: "1. Controller Identification",
                      desc: "State the full legal name, CNPJ (if applicable), and contact details of the data controller. Include the name and contact information of the Encarregado (DPO). This is required under Article 23 and Article 41 of the LGPD.",
                    },
                    {
                      title: "2. Categories of Personal Data Collected",
                      desc: "List every category of personal data you process: names, CPF numbers, email addresses, phone numbers, IP addresses, device identifiers, cookie data, location data, financial data, and any other identifiable information. Distinguish between regular and sensitive personal data.",
                    },
                    {
                      title: "3. Purposes for Processing",
                      desc: "For each category of personal data, explain the specific purpose for processing. Purposes might include providing services, processing payments, sending marketing communications, improving website performance, complying with legal obligations, or fraud prevention.",
                    },
                    {
                      title: "4. Legal Bases for Processing",
                      desc: "Identify which of the 10 LGPD legal bases applies to each processing activity. Be specific: state that you process email addresses based on consent for marketing, based on contract execution for service delivery, and based on legal obligation for tax records.",
                    },
                    {
                      title: "5. Data Sharing and Third Parties",
                      desc: "Disclose all third parties with whom you share personal data, including payment processors, analytics providers, cloud hosting services, and advertising platforms. For each third party, explain what data is shared and the purpose.",
                    },
                    {
                      title: "6. International Data Transfers",
                      desc: "If you transfer personal data outside of Brazil, explain the legal mechanism for the transfer: adequacy decision by the ANPD, standard contractual clauses, binding corporate rules, or specific consent of the data subject.",
                    },
                    {
                      title: "7. Data Subject Rights",
                      desc: "List all rights granted to data subjects under Article 18 of the LGPD: confirmation of processing, access, correction, anonymization, blocking, deletion, portability, information about sharing, information about consent denial, and consent revocation. Explain how to exercise each right.",
                    },
                    {
                      title: "8. Data Retention",
                      desc: "Describe your data retention periods for each category of personal data. Explain the criteria used to determine retention periods and what happens to data when the retention period expires (deletion or anonymization).",
                    },
                    {
                      title: "9. Security Measures",
                      desc: "Describe the technical and organizational security measures you implement to protect personal data. Mention encryption, access controls, monitoring, employee training, and incident response procedures without revealing specific technical details.",
                    },
                    {
                      title: "10. Data Breach Procedures",
                      desc: "Describe your process for handling data breaches, including notification to the ANPD and affected data subjects when a breach may cause risk or significant harm. Include your commitment to maintaining breach records.",
                    },
                    {
                      title: "11. Cookies and Tracking Technologies",
                      desc: "Detail the types of cookies and tracking technologies used on your website, their purposes, and how users can manage cookie preferences. This section should cover essential cookies, analytics cookies, and advertising cookies.",
                    },
                    {
                      title: "12. Policy Updates",
                      desc: "Explain how and when you will update the privacy policy, how data subjects will be notified of material changes, and that continued use after notification constitutes awareness of the updated practices.",
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
                        Generate Your LGPD-Compliant Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Skip the manual drafting. Answer a few questions
                        about your data practices and get a complete
                        LGPD-compliant privacy policy in under 60 seconds.
                        Covers all 10 legal bases and data subject rights
                        automatically.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My LGPD Policy
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Data Subject Rights */}
              <section id="data-subject-rights" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Subject Rights Under the LGPD
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Article 18 of the LGPD grants data subjects (titulares)
                  extensive rights over their personal data. Your privacy
                  policy must inform data subjects of these rights and explain
                  how they can exercise them. Here are the rights your policy
                  must address.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      num: "1",
                      title: "Confirmation of Processing",
                      desc: "Data subjects have the right to obtain confirmation that their personal data is being processed. You must be able to confirm whether or not you hold any personal data about an individual upon request.",
                    },
                    {
                      num: "2",
                      title: "Access to Data",
                      desc: "Data subjects have the right to access their personal data that you hold. Upon request, you must provide a complete copy of the data in a clear, adequate format.",
                    },
                    {
                      num: "3",
                      title: "Correction of Incomplete or Inaccurate Data",
                      desc: "Data subjects can request the correction of any incomplete, inaccurate, or outdated personal data. You must implement processes to update records promptly upon receiving such requests.",
                    },
                    {
                      num: "4",
                      title: "Anonymization, Blocking, or Deletion",
                      desc: "Data subjects can request anonymization, blocking, or deletion of unnecessary or excessive data, or data processed in violation of the LGPD. This applies to data that is no longer needed for the original purpose.",
                    },
                    {
                      num: "5",
                      title: "Data Portability",
                      desc: "Data subjects have the right to transfer their personal data to another service provider. You must provide data in a structured, commonly used format as regulated by the ANPD.",
                    },
                    {
                      num: "6",
                      title: "Information About Sharing",
                      desc: "Data subjects have the right to know which public and private entities their personal data has been shared with. Your privacy policy should proactively disclose this information.",
                    },
                    {
                      num: "7",
                      title: "Consent Revocation",
                      desc: "Data subjects can revoke consent at any time through an express, free, and easy-to-use mechanism. You must stop processing data based on consent once it is revoked, and inform the data subject of the consequences of revocation.",
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
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
              </section>

              {/* Section 5: DPO Requirements */}
              <section id="dpo-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  DPO (Encarregado) Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Under Article 41 of the LGPD, every data controller must
                  appoint an Encarregado (Data Protection Officer). Unlike
                  the GDPR, which only requires a DPO in certain situations,
                  the LGPD applies this requirement to all controllers. The
                  Encarregado&apos;s identity and contact information must be
                  publicly disclosed, typically on your website and in your
                  privacy policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The Encarregado has four main responsibilities: accepting
                  complaints and communications from data subjects, receiving
                  communications from the ANPD and adopting corrective
                  measures, guiding the organization&apos;s employees on data
                  protection practices, and carrying out other duties
                  assigned by the controller or established by supplementary
                  regulations.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The ANPD&apos;s Resolution CD/ANPD No. 2/2022 provides
                  simplified requirements for small businesses and startups.
                  Under this resolution, small-scale data processing agents
                  are not required to appoint an Encarregado, but they must
                  provide a communication channel for data subjects. Even
                  with this exemption, appointing an Encarregado is
                  considered a best practice.
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
                        Unlike the GDPR, the LGPD does not require the
                        Encarregado to be an individual. The role can be
                        fulfilled by a committee, a department, or even an
                        outsourced service provider. This flexibility allows
                        organizations of all sizes to meet the requirement in a
                        way that suits their structure. However, the ANPD
                        recommends that regardless of the format, the
                        Encarregado should have adequate knowledge of data
                        protection law and practices.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: ANPD Enforcement */}
              <section id="anpd-enforcement" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  ANPD Enforcement and Penalties
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The ANPD (Autoridade Nacional de Protecao de Dados) is
                  Brazil&apos;s data protection authority, established to
                  oversee, implement, and enforce the LGPD. The ANPD began
                  applying administrative sanctions in August 2021 and has
                  been increasingly active in enforcement actions, issuing
                  guidelines, and developing the regulatory framework.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The ANPD can impose the following sanctions under Article 52
                  of the LGPD: warnings with a deadline for corrective
                  measures; simple fines of up to 2% of the organization&apos;s
                  revenue in Brazil (capped at 50 million BRL per violation);
                  daily fines to compel compliance; publicization of the
                  infraction after confirmation; blocking of personal data
                  involved in the violation; deletion of personal data
                  involved in the violation; and partial or total suspension
                  of data processing activities for up to 6 months.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  When determining sanctions, the ANPD considers the severity
                  of the violation, the good faith and cooperation of the
                  infractor, the economic advantage obtained, the scale and
                  duration of the violation, whether the infractor adopted
                  data protection policies and good practices, and the
                  promptness of corrective measures. Organizations that
                  demonstrate proactive compliance efforts receive more
                  favorable treatment.
                </p>
              </section>

              {/* Section 7: LGPD vs GDPR */}
              <section id="lgpd-vs-gdpr" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  LGPD vs GDPR: Key Differences
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  The LGPD was heavily influenced by the GDPR, and the two
                  laws share many similarities. However, there are important
                  differences that affect what your privacy policy must
                  include if you serve both Brazilian and European users.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Aspect
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[37.5%]">
                          LGPD (Brazil)
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[37.5%]">
                          GDPR (EU/UK)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Legal bases
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          10 legal bases for processing under Article 7
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          6 legal bases for processing under Article 6
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          DPO requirement
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required for all controllers (Encarregado); simplified rules for small businesses
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required only when processing sensitive data at scale or systematic monitoring
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Maximum fines
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          2% of revenue in Brazil, capped at 50 million BRL per violation
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Up to 20 million euros or 4% of global revenue, whichever is higher
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Scope
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Applies to processing of data of individuals in Brazil, regardless of nationality
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Applies to processing of data of individuals in the EU/EEA
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Data portability
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Included under Article 18; format regulated by the ANPD
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Included under Article 20; must be in machine-readable format
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Breach notification
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Notify ANPD and data subjects within a reasonable time (ANPD guidance suggests promptly)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Notify supervisory authority within 72 hours; notify individuals if high risk
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Credit protection
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Unique legal basis under Article 7(X) for credit scoring and protection
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No equivalent; credit scoring handled under legitimate interest or consent
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  If you serve both Brazilian and European users, the practical
                  approach is to build a privacy policy that meets both sets
                  of requirements. Since the GDPR is generally stricter on
                  fines and breach notification timelines, while the LGPD has
                  more legal bases and a broader DPO requirement, a
                  comprehensive policy should address the unique elements of
                  each law. Region-specific sections can clarify which rights
                  and mechanisms apply to users in each jurisdiction.
                </p>
              </section>

              {/* Section 8: International Transfers */}
              <section id="international-transfers" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  International Data Transfers Under the LGPD
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Chapter V of the LGPD (Articles 33-36) governs the transfer
                  of personal data to other countries. If your organization
                  transfers personal data collected in Brazil to servers or
                  partners in other countries, you must ensure one of the
                  following conditions is met and disclose it in your privacy
                  policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The LGPD permits international transfers when: the
                  receiving country or organization provides an adequate level
                  of data protection as recognized by the ANPD; the
                  controller can demonstrate compliance through standard
                  contractual clauses, binding corporate rules, or compliance
                  seals; the transfer is necessary for international legal
                  cooperation, protection of life, execution of public
                  policy, or when authorized by the ANPD; or the data subject
                  provides specific and prominent consent for the transfer.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The ANPD has been developing its framework for international
                  transfers, including adequacy assessments for various
                  countries and regions. Organizations that use cloud services
                  hosted outside Brazil (such as AWS, Google Cloud, or Azure)
                  should pay particular attention to this requirement and
                  ensure appropriate transfer mechanisms are in place.
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
                        The ANPD&apos;s approach to international data
                        transfers is still evolving. Unlike the GDPR, which
                        has well-established adequacy decisions and Standard
                        Contractual Clauses, the ANPD is still in the process
                        of issuing definitive regulations on transfer
                        mechanisms. In the interim, most organizations rely on
                        standard contractual clauses or explicit consent for
                        transfers. The ANPD has signaled that it will
                        recognize adequacy determinations for countries that
                        have robust data protection frameworks, including EU
                        member states.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Consent */}
              <section id="consent" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Consent Under the LGPD
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Consent is one of the 10 legal bases under the LGPD, but it
                  has specific requirements that go beyond simply checking a
                  box. Under Article 8 of the LGPD, consent must be free,
                  informed, and unambiguous. It must be provided in writing or
                  by another means that demonstrates the will of the data
                  subject. If consent is provided in writing, it must be in a
                  prominent clause, separate from other contractual terms.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The LGPD also requires that consent be specific to each
                  processing purpose. You cannot bundle multiple purposes into
                  a single consent request. If the purpose of processing
                  changes, you must obtain new consent. For sensitive personal
                  data, consent must be given in a specific and prominent
                  manner, for specific purposes.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Data subjects have the right to revoke consent at any time,
                  through a free and easy-to-use mechanism. Your privacy
                  policy must describe how users can withdraw consent, and
                  the consequences of doing so. When consent is revoked,
                  processing based on that consent must cease, although data
                  already processed under a valid legal basis before
                  revocation remains lawful.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Importantly, consent is not always the best legal basis.
                  The LGPD provides 9 other legal bases, and for many common
                  processing activities (such as fulfilling a contract or
                  complying with legal obligations), a different legal basis
                  may be more appropriate and more stable than consent.
                  Over-reliance on consent is a common mistake in LGPD
                  compliance.
                </p>
              </section>

              {/* Section 10: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common LGPD Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are the five most common misconceptions about LGPD
                  compliance, and why each one can leave your organization
                  exposed to enforcement action by the ANPD.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;The LGPD only applies to Brazilian
                        companies.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: The LGPD applies to any organization,
                        anywhere in the world, that processes personal data
                        of individuals located in Brazil, offers goods or
                        services to individuals in Brazil, or collects data
                        within Brazilian territory. If your website has
                        Brazilian visitors and you collect any data from them
                        (through analytics, forms, or cookies), the LGPD can
                        apply to you. This extraterritorial reach is similar
                        to the GDPR.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;GDPR compliance automatically means
                        LGPD compliance.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: While the LGPD was inspired by the GDPR and
                        shares many similarities, there are unique LGPD
                        requirements. The LGPD has 10 legal bases (vs. 6 for
                        GDPR), requires an Encarregado for all controllers
                        (not just certain ones), has a unique credit
                        protection legal basis, and follows different rules
                        for international transfers. A GDPR-compliant policy
                        is a strong starting point, but it needs
                        LGPD-specific additions to be fully compliant.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Consent is required for all data
                        processing under the LGPD.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Consent is just one of 10 legal bases under
                        the LGPD. For many processing activities, a different
                        legal basis is more appropriate. Contract execution
                        covers data needed to deliver services. Legal
                        obligation covers tax and regulatory requirements.
                        Legitimate interest covers analytics and fraud
                        prevention. Over-relying on consent creates
                        unnecessary friction and makes your processing
                        vulnerable to consent withdrawal. Choose the most
                        appropriate legal basis for each activity.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;The ANPD is not actively enforcing
                        the LGPD yet.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: The ANPD has been fully operational since
                        2021 and has been increasingly active in enforcement.
                        The authority has issued its first fines, conducted
                        investigations, published binding guidelines, and
                        established a complaints process. The ANPD has also
                        published a regulatory agenda outlining priority areas
                        for enforcement. Organizations should not assume that
                        the relative newness of the ANPD means a lack of
                        enforcement risk.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I do not need a privacy policy in
                        Portuguese.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: If you serve Brazilian users, providing your
                        privacy policy in Portuguese is essential for
                        compliance. The LGPD requires that information about
                        data processing be provided in a clear and accessible
                        manner. For Brazilian data subjects, this means
                        Portuguese. While the LGPD does not explicitly mandate
                        Portuguese, providing your policy only in English to
                        Portuguese-speaking users undermines the transparency
                        principle and could be viewed unfavorably by the ANPD
                        in an enforcement action.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create an LGPD-Compliant Privacy Policy (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these steps to create a privacy policy that meets
                  LGPD requirements and demonstrates compliance to the ANPD.
                </p>

                <div className="space-y-5">
                  {/* Step 1 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Appoint an Encarregado (DPO) and document
                        accountability
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        The LGPD requires every data controller to appoint an
                        Encarregado. This can be an individual, a committee,
                        or an outsourced service. Document this
                        person&apos;s name and contact information and include
                        it in your privacy policy. The Encarregado serves as
                        the communication channel between your organization,
                        data subjects, and the ANPD. For small businesses,
                        the ANPD allows simplified appointment procedures.
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
                        Map all personal data processing activities
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Create a comprehensive data inventory documenting
                        every category of personal data you process: form
                        data (names, CPF numbers, emails), payment
                        information, analytics data (IP addresses, device
                        identifiers), cookie data, and third-party
                        integrations. For each data type, record the purpose,
                        the legal basis, retention period, and any third
                        parties with whom data is shared. This mapping forms
                        the foundation of your privacy policy disclosures.
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
                        Identify the correct legal basis for each activity
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        For each processing activity, identify which of the
                        10 LGPD legal bases applies. Use consent for marketing
                        and optional cookies. Use contract execution for
                        service delivery and account management. Use legal
                        obligation for tax and regulatory requirements. Use
                        legitimate interest for analytics and fraud
                        prevention. Document your analysis and be prepared to
                        demonstrate it to the ANPD if requested.
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
                        Draft the policy covering all required disclosures
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Using the template preview above as your guide, write
                        each section of your privacy policy. Be specific
                        about your actual practices. Name the third-party
                        services you use (Google Analytics, Stripe, AWS),
                        describe your actual retention periods, explain your
                        real security measures, and list all data subject
                        rights with instructions for exercising them. Generic
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
                        Implement data subject rights mechanisms
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Set up accessible channels for data subjects to
                        exercise their LGPD rights: confirmation, access,
                        correction, anonymization, blocking, deletion,
                        portability, information about sharing, and consent
                        revocation. Provide an email address, web form, or
                        dedicated portal. Define internal procedures for
                        handling requests and establish response timeframes
                        in accordance with ANPD guidance.
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
                        Publish prominently and review regularly
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Link your privacy policy from the footer of every
                        page on your website. Ensure the policy is available
                        in Portuguese if you serve Brazilian users. Review
                        and update the policy whenever your data practices
                        change or when the ANPD issues new guidance. Maintain
                        records of processing activities (ROPA) and be
                        prepared to demonstrate compliance upon request. If
                        you also serve EU users, add GDPR-specific sections.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-700">
                    <strong>Shortcut:</strong> A privacy policy generator
                    automates the entire process. You answer questions about
                    your data practices, select that you need LGPD
                    compliance, and the generator produces a complete policy
                    covering all 10 legal bases, data subject rights,
                    Encarregado details, and international transfer
                    disclosures. Takes under five minutes.{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      Generate your LGPD-compliant policy
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
                      What is the LGPD and who does it apply to?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The LGPD (Lei Geral de Protecao de Dados) is
                      Brazil&apos;s comprehensive data protection law. It
                      applies to any organization that processes personal data
                      of individuals located in Brazil, offers goods or
                      services to individuals in Brazil, or collects data
                      within Brazilian territory. This includes organizations
                      based outside of Brazil.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are the 10 legal bases under the LGPD?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The 10 legal bases are: consent, legal/regulatory
                      obligation, public policy execution, research, contract
                      execution, exercise of rights in proceedings, protection
                      of life, health protection, legitimate interest, and
                      credit protection. Each processing activity must be
                      justified by at least one of these bases, and the chosen
                      basis must be documented and disclosed in your privacy
                      policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How does the LGPD compare to the GDPR?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The LGPD was modeled on the GDPR but has key
                      differences: 10 legal bases instead of 6, a mandatory
                      DPO for all controllers, a unique credit protection
                      legal basis, fines capped at 50 million BRL (vs.
                      GDPR&apos;s 20 million euros or 4% global revenue), and
                      an evolving international transfer framework. Both laws
                      grant similar data subject rights and have
                      extraterritorial reach.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is the ANPD and what does it do?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The ANPD (Autoridade Nacional de Protecao de Dados) is
                      Brazil&apos;s data protection authority. It oversees
                      LGPD compliance, investigates complaints, conducts
                      audits, imposes sanctions, issues guidelines and
                      regulations, and promotes data protection awareness. The
                      ANPD has been fully operational since 2021 and is
                      increasingly active in enforcement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a DPO (Encarregado) under the LGPD?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. The LGPD requires all data controllers to appoint
                      an Encarregado (DPO). The Encarregado&apos;s identity
                      and contact information must be publicly disclosed. The
                      ANPD has provided simplified rules for small businesses
                      and startups, but the core requirement remains. The role
                      can be filled by an individual, a committee, or an
                      outsourced service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are the penalties for non-compliance?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The ANPD can impose warnings, fines up to 2% of revenue
                      in Brazil (capped at 50 million BRL per violation),
                      daily fines, publicization of the infraction, blocking
                      or deletion of personal data, and suspension of data
                      processing activities. The ANPD considers the severity,
                      good faith, economic advantage, and corrective measures
                      when determining sanctions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I handle international data transfers?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The LGPD allows international transfers under specific
                      conditions: adequacy decisions by the ANPD, standard
                      contractual clauses, binding corporate rules, specific
                      consent of the data subject, or when necessary for legal
                      cooperation or protection of life. The ANPD is still
                      developing definitive regulations on transfer
                      mechanisms, so organizations should document their
                      chosen mechanism clearly.
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
                      href: "/pipeda-privacy-policy-template",
                      title: "PIPEDA Privacy Policy Template",
                      desc: "Canada-compliant template covering all 10 fair information principles",
                    },
                    {
                      href: "/uk-gdpr-privacy-policy-template",
                      title: "UK GDPR Privacy Policy Template",
                      desc: "Post-Brexit UK data protection compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "A comprehensive guide for standard website operators",
                    },
                    {
                      href: "/how-to-write-a-privacy-policy",
                      title: "How to Write a Privacy Policy",
                      desc: "Step-by-step guide to writing your own privacy policy",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/generate",
                      title: "Privacy Policy Generator",
                      desc: "Generate a compliant privacy policy in under 60 seconds",
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
                  LGPD Compliance Made Simple
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Generate a privacy policy that covers all 10 LGPD legal
                  bases, data subject rights, Encarregado details, and
                  international transfer disclosures in under 60 seconds.
                  Prepared for ANPD enforcement.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My LGPD Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers LGPD, GDPR &amp; CCPA &middot; All 10 legal bases
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
