import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  Scale,
  BookOpen,
  Globe,
  Lock,
  AlertTriangle,
  Cookie,
  Users,
  Database,
  Mail,
  Clock,
  Layers,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Free GDPR Privacy Policy Template — UK & EU Compliant (2025) | ultrafastutilities",
  description:
    "Free GDPR privacy policy template for UK and EU websites. Covers all 12 required sections: lawful basis, user rights, data retention, cookies, and international transfers. Generate your customised policy for $4.99.",
  keywords:
    "GDPR privacy policy template, free GDPR privacy policy, privacy policy template UK, GDPR compliant privacy policy, GDPR compliant privacy policy template, free website privacy policy template UK, privacy policy GDPR template, gdpr privacy policy template free",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/gdpr-privacy-policy-template",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a GDPR privacy policy template free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this page provides a free GDPR privacy policy template preview covering all required sections. You can use it as a structural guide for your own policy. For a fully customised, ready-to-publish version tailored to your specific website or app, our generator produces a complete document for $4.99.",
      },
    },
    {
      "@type": "Question",
      name: "Does my small business need a GDPR-compliant privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GDPR applies to any organisation that processes personal data of EU or UK residents — regardless of business size, your location, or whether you charge for your product. If you collect email addresses, use Google Analytics, or have a contact form on your website, GDPR applies to you.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I don't have a GDPR privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operating without a GDPR-compliant privacy policy exposes you to enforcement action from supervisory authorities. In the UK, the ICO can issue fines up to £17.5 million or 4% of global annual turnover. In the EU, fines can reach €20 million or 4% of global turnover — whichever is higher. Beyond fines, you risk reputational damage and loss of user trust.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the same privacy policy for UK and EU users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most cases. UK GDPR and EU GDPR are closely aligned. A well-drafted policy that references both frameworks — naming the ICO as the UK supervisory authority and noting the right to complain to the relevant EU data protection authority — typically satisfies both regimes. Ensure your EU Representative details are included if your business is outside the EU but targets EU users.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my GDPR privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Review your privacy policy whenever you start collecting new types of personal data, introduce new third-party tools or processors, relevant laws or ICO guidance changes, or at minimum once per year as best practice. When changes are material, notify existing users by email or via a prominent notice on your site.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a separate cookie policy under GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Cookie information can be included within your main privacy policy. However, many sites publish a dedicated cookie policy for clarity, especially if cookie usage is extensive. Either way, your cookie consent banner must link clearly to where this information is published.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a privacy policy and a privacy notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR uses the term 'privacy notice' to describe the transparency document you provide to individuals whose data you collect. 'Privacy policy' is the widely used commercial term for the same document. They refer to the same thing: a statement explaining what personal data you collect, why you collect it, and how you use it.",
      },
    },
  ],
};

const tocSections = [
  {
    id: "what-is-gdpr-privacy-policy",
    title: "What Is a GDPR Privacy Policy?",
  },
  { id: "does-gdpr-apply", title: "Does GDPR Apply to You?" },
  { id: "12-required-sections", title: "12 Required Sections" },
  { id: "uk-gdpr-vs-eu", title: "UK GDPR vs EU GDPR" },
  { id: "free-template-preview", title: "Free Template Preview" },
  { id: "where-to-display", title: "Where to Display It" },
  { id: "how-to-customize", title: "How to Customise" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function GDPRPrivacyPolicyTemplatePage() {
  return (
    <>
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
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">GDPR Privacy Policy Template</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Free — UK &amp; EU GDPR Compliant
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                GDPR Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A complete guide to every section your GDPR-compliant privacy
                policy must include — covering lawful basis, user rights, data
                retention, cookies, UK vs EU differences, and a free template
                preview you can use right now.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For website owners, app developers, and small businesses serving
                UK or EU users.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Websites
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-saas"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for SaaS
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

              {/* ── Section 1: What Is a GDPR Privacy Policy ── */}
              <section id="what-is-gdpr-privacy-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Is a GDPR Privacy Policy?
                    </h2>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    A GDPR privacy policy — formally called a{" "}
                    <strong className="text-slate-900">privacy notice</strong>{" "}
                    under the regulation — is a legally required document that
                    explains to individuals how your organisation collects, uses,
                    stores, and shares their personal data. Unlike a generic
                    privacy policy, a GDPR-compliant version must satisfy
                    specific transparency obligations set out in Articles 13 and
                    14 of the General Data Protection Regulation.
                  </p>
                  <p>
                    Under GDPR, a privacy policy is not optional. If you collect
                    any personal data from users in the EU or UK — including
                    names, email addresses, IP addresses, or cookie identifiers —
                    you are legally required to provide this information before
                    or at the point of collection. A vague, copy-pasted policy
                    does not satisfy GDPR. The regulation demands specific
                    disclosures written in plain, clear language.
                  </p>
                </div>

                {/* Fine Warning Box */}
                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-amber-900 text-sm">
                        The cost of non-compliance
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-amber-800">
                        Supervisory authorities can issue fines of up to{" "}
                        <strong>€20 million</strong> (or{" "}
                        <strong>£17.5 million</strong> under UK GDPR) or{" "}
                        <strong>4% of global annual turnover</strong> —
                        whichever is higher — for serious GDPR infringements.
                        Even small businesses receive five and six-figure fines
                        for avoidable transparency failures.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 2: Does GDPR Apply to You ── */}
              <section id="does-gdpr-apply" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Users className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Does GDPR Apply to You?
                    </h2>
                  </div>
                </div>

                <div className="mt-6 text-base leading-7 text-slate-700">
                  <p>
                    GDPR has <strong className="text-slate-900">extraterritorial reach</strong>.
                    It doesn&apos;t matter where your business is based — GDPR
                    applies if any of the following are true:
                  </p>
                  <div className="mt-5 space-y-3">
                    {[
                      "You offer goods or services to individuals in the EU or UK (even if free)",
                      "You monitor the behaviour of individuals in the EU or UK (analytics, cookies, tracking pixels)",
                      "You process personal data on behalf of an organisation that falls under GDPR",
                      "You collect email addresses, run contact forms, or use live chat on your website",
                      "You operate a mobile app downloaded by users in the EU or UK",
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
                  <p className="mt-5 text-slate-600">
                    In practice, if your website is accessible to people in the
                    UK or Europe and you use Google Analytics, Mailchimp, a
                    contact form, or even a cookie consent banner — GDPR applies
                    to you and you need a free GDPR-compliant privacy policy
                    template structured around its requirements.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 3: 12 Required Sections ── */}
              <section id="12-required-sections" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Layers className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      12 Required Sections of a GDPR-Compliant Privacy Policy
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  A generic or outdated privacy policy template won&apos;t meet
                  GDPR standards. The regulation mandates specific disclosures
                  in each of these areas. Every section below is required —
                  missing any one of them creates a compliance gap.
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      num: "01",
                      icon: Users,
                      title: "Identity and Contact Details of the Data Controller",
                      body: "Your privacy policy must clearly name who you are — the data controller making decisions about how data is processed. Include your full legal or trading name, registered address or country of operation, a dedicated privacy contact email address, and (if applicable) the name and contact details of your Data Protection Officer (DPO). A DPO is required if you process data at large scale or handle sensitive categories of data.",
                    },
                    {
                      num: "02",
                      icon: Scale,
                      title: "Purpose and Legal Basis for Processing",
                      body: "For every category of personal data you collect, you must state the specific purpose and which of the six GDPR lawful bases applies: Consent, Contract performance, Legal obligation, Vital interests, Public task, or Legitimate interests. You cannot simply state 'legitimate interests' without identifying what those interests are — vagueness here is one of the most common reasons regulators issue enforcement notices.",
                    },
                    {
                      num: "03",
                      icon: Database,
                      title: "What Personal Data You Collect",
                      body: "Be specific about the categories of data you collect. Common categories include: identity data (name, date of birth), contact data (email, phone, address), technical data (IP address, browser type, device ID, cookie data), usage data (pages visited, time on site, referring URLs), transaction data (purchase history, payment information), and communications data (messages from contact forms, support tickets).",
                    },
                    {
                      num: "04",
                      icon: FileText,
                      title: "How You Use Personal Data",
                      body: "Map each data category to its specific use case and lawful basis. For example: 'We use your email address (a) to send order confirmations [contract performance], (b) to send marketing emails where you have opted in [consent], and (c) to detect fraudulent activity [legitimate interests].' This mapping is what separates a GDPR-compliant privacy policy from a generic template.",
                    },
                    {
                      num: "05",
                      icon: ArrowRight,
                      title: "Third-Party Data Sharing and Processors",
                      body: "List all third parties that receive personal data, grouped by category: service providers (hosting, payment processors, email platforms), analytics tools (Google Analytics, Hotjar, Clarity), advertising platforms (Meta Pixel, Google Ads), and professional advisers. For each category, describe what data is shared and under what legal framework. Where you use data processors, you must have a Data Processing Agreement (DPA) in place with each one.",
                    },
                    {
                      num: "06",
                      icon: Globe,
                      title: "International Data Transfers",
                      body: "If data is transferred outside the UK or EU — including to US-based services like Google Analytics, AWS, Mailchimp, or Stripe — you must disclose this and the safeguard used: UK adequacy regulations, EU adequacy decisions, Standard Contractual Clauses (SCCs), or Binding Corporate Rules (BCRs). In the UK, the International Data Transfer Agreement (IDTA) is the standard mechanism replacing EU SCCs.",
                    },
                    {
                      num: "07",
                      icon: Clock,
                      title: "Data Retention Periods",
                      body: "State how long you keep each category of data. 'As long as necessary' is not GDPR-compliant on its own — you must specify timeframes and the reason for each. Retention should be limited to what is genuinely necessary for the stated purpose. See the retention table in the template preview section below for concrete examples.",
                    },
                    {
                      num: "08",
                      icon: ShieldCheck,
                      title: "User Rights under GDPR (All 8 Rights)",
                      body: "Detail all eight rights and explain how individuals can exercise each one, including your response timeframe (typically 30 days from request): Right of access (Subject Access Request), right to rectification, right to erasure ('right to be forgotten'), right to restriction of processing, right to data portability, right to object, rights related to automated decision-making and profiling, and right to withdraw consent at any time.",
                    },
                    {
                      num: "09",
                      icon: Cookie,
                      title: "Cookies and Tracking Technologies",
                      body: "A separate cookie policy is often advisable, but your privacy policy must at minimum reference your use of cookies, categorise them (essential, functional, analytics, marketing), explain what they do, and direct users to your cookie consent mechanism. If you use advertising cookies or tracking pixels, these require explicit opt-in consent under GDPR — pre-ticked boxes are not valid consent.",
                    },
                    {
                      num: "10",
                      icon: Lock,
                      title: "Data Security Measures",
                      body: "Describe the technical and organisational measures protecting personal data: encryption of data in transit (SSL/TLS) and at rest, access controls and role-based authentication, regular security assessments and penetration testing, staff training on data protection, and incident response procedures. You do not need to expose implementation details — a high-level description is both sufficient and safer.",
                    },
                    {
                      num: "11",
                      icon: AlertTriangle,
                      title: "Data Breach Notification",
                      body: "Under GDPR, you must notify the relevant supervisory authority of certain personal data breaches within 72 hours of becoming aware. Where a breach is likely to cause high risk to individuals, you must also notify those individuals without undue delay. Your privacy policy should acknowledge this obligation and reference your internal breach response procedure.",
                    },
                    {
                      num: "12",
                      icon: Mail,
                      title: "Contact Details and Right to Lodge a Complaint",
                      body: "Include a clear privacy contact email address and inform users of their right to lodge a complaint with the supervisory authority. In the UK, that is the Information Commissioner's Office (ICO) at ico.org.uk. In the EU, individuals should be directed to their national data protection authority. Providing this information is not optional — it is an explicit Article 13/14 requirement.",
                    },
                  ].map((section) => (
                    <div
                      key={section.num}
                      className="flex items-start gap-4 rounded-xl border border-slate-200/80 bg-white/60 p-5 hover:border-blue-200/80 hover:bg-blue-50/20 transition-colors"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <section.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-slate-400">
                            {section.num}
                          </span>
                          <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">
                          {section.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 4: UK GDPR vs EU GDPR ── */}
              <section id="uk-gdpr-vs-eu" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Globe className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      UK GDPR vs EU GDPR — Key Differences for Your Privacy
                      Policy Template
                    </h2>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Following Brexit, the UK enacted its own version of GDPR
                    (&quot;UK GDPR&quot;) retained in domestic law alongside the
                    Data Protection Act 2018. If you serve both UK and EU/EEA
                    residents, you technically operate under two parallel
                    frameworks — but in practice they are closely aligned and a
                    single well-drafted privacy policy template can cover both.
                  </p>
                </div>

                <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200/80">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="text-left px-5 py-3 font-semibold text-slate-700">
                          Area
                        </th>
                        <th className="text-left px-5 py-3 font-semibold text-slate-700">
                          UK GDPR
                        </th>
                        <th className="text-left px-5 py-3 font-semibold text-slate-700">
                          EU GDPR
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {[
                        [
                          "Regulator",
                          "ICO (ico.org.uk)",
                          "National DPAs (e.g. CNIL, BfDI)",
                        ],
                        [
                          "Maximum fine",
                          "£17.5m or 4% turnover",
                          "€20m or 4% turnover",
                        ],
                        [
                          "Transfer mechanism",
                          "IDTA (International Data Transfer Agreement)",
                          "Standard Contractual Clauses (SCCs)",
                        ],
                        [
                          "Adequacy status",
                          "UK has EU adequacy (subject to review)",
                          "EEA — no transfer safeguard needed within EEA",
                        ],
                        [
                          "EU Representative",
                          "Required if targeting EU users from outside EU",
                          "Required if no EU establishment but targeting EU users",
                        ],
                        [
                          "Language requirement",
                          "Clear, plain English",
                          "Plain language for each member state audience",
                        ],
                      ].map(([area, uk, eu]) => (
                        <tr key={area} className="hover:bg-slate-50/50">
                          <td className="px-5 py-3 font-medium text-slate-800">
                            {area}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{uk}</td>
                          <td className="px-5 py-3 text-slate-600">{eu}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-5 text-sm text-slate-500 leading-relaxed">
                  For most small websites targeting UK users, referencing UK
                  GDPR and the ICO is sufficient. If you actively target EU
                  users, reference both frameworks and ensure you have an EU
                  Representative if your business is not established in the EU.
                </p>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 5: Free Template Preview ── */}
              <section id="free-template-preview" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Free GDPR Privacy Policy Template (Preview)
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Below is a free GDPR privacy policy template covering the
                  most critical sections. Replace bracketed placeholders with
                  your specific details. A fully customised version — including
                  all 12 sections, UK/EU-specific language, and your data
                  practices — can be generated in under 60 seconds.
                </p>

                <div className="mt-6 space-y-4">
                  {/* Template Box 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        1. Who We Are (Data Controller)
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      [Your Company Name] (&quot;we&quot;, &quot;us&quot;,
                      &quot;our&quot;) is the data controller responsible for
                      your personal data. We are registered in [Country/State]
                      and operate the website [yourwebsite.com].
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 mt-2">
                      For privacy-related enquiries, please contact us at:{" "}
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
                        2. Legal Basis for Processing Personal Data
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 mb-3">
                      We process your personal data based on the following
                      lawful bases:
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                      {[
                        [
                          "Consent:",
                          "You have given clear consent for a specific purpose (e.g., marketing emails, optional analytics).",
                        ],
                        [
                          "Contractual necessity:",
                          "Processing is necessary to perform a contract with you (e.g., account creation, order processing).",
                        ],
                        [
                          "Legal obligation:",
                          "Processing is necessary for compliance with a legal obligation (e.g., tax reporting, court orders).",
                        ],
                        [
                          "Legitimate interests:",
                          "Processing is necessary for our legitimate interests (e.g., fraud prevention, security monitoring, service improvement), provided your rights do not override those interests.",
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
                      <Database className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        3. Data Retention Periods
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 mb-3">
                      We retain personal data only for as long as necessary for
                      its stated purpose:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left pb-2 font-semibold text-slate-700">
                              Data Category
                            </th>
                            <th className="text-left pb-2 font-semibold text-slate-700">
                              Retention Period
                            </th>
                            <th className="text-left pb-2 font-semibold text-slate-700">
                              Reason
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {[
                            [
                              "Account data",
                              "Until deletion + 30 days",
                              "Service delivery",
                            ],
                            [
                              "Transaction records",
                              "7 years",
                              "Legal / tax obligation",
                            ],
                            [
                              "Marketing opt-ins",
                              "Until consent withdrawn",
                              "Consent-based",
                            ],
                            [
                              "Server / access logs",
                              "90 days",
                              "Security monitoring",
                            ],
                            [
                              "Support tickets",
                              "3 years",
                              "Legitimate interests",
                            ],
                            [
                              "Cookie data",
                              "Varies (see cookie policy)",
                              "Analytics / functionality",
                            ],
                          ].map(([cat, period, reason]) => (
                            <tr key={cat} className="hover:bg-white/60">
                              <td className="py-2 pr-3 text-slate-700 font-medium">
                                {cat}
                              </td>
                              <td className="py-2 pr-3 text-slate-600">
                                {period}
                              </td>
                              <td className="py-2 text-slate-500">{reason}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Template Box 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        4. Your Rights under GDPR
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 mb-3">
                      Under UK and EU GDPR, you have the following rights:
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
                          "Request deletion of your data, subject to legal grounds for retention.",
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
                          "Not be subject to solely automated decisions that produce significant effects.",
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
                      To exercise any right, contact us at [privacy@yourcompany.com].
                      We will respond within 30 days of receiving your request.
                      You also have the right to lodge a complaint with the ICO
                      (ico.org.uk) in the UK, or your national data protection
                      authority in the EU.
                    </p>
                  </div>

                  {/* Template Box 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        5. International Data Transfers
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Some of our service providers are based outside the UK
                      and EU/EEA, including the United States. Where we transfer
                      personal data internationally, we ensure appropriate
                      safeguards are in place, such as Standard Contractual
                      Clauses (SCCs) approved by the European Commission, or the
                      International Data Transfer Agreement (IDTA) approved by
                      the UK ICO. Transfers to countries with an adequacy
                      decision are also permissible without additional
                      safeguards.
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 mt-2">
                      A copy of the relevant safeguard is available on request
                      by contacting [privacy@yourcompany.com].
                    </p>
                  </div>

                  {/* Template Box 6 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-4 h-4 text-slate-500" />
                      <h3 className="font-semibold text-slate-900">
                        6. Data Breach Notification
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      We have procedures in place to detect, investigate, and
                      report personal data breaches. Where a breach is likely to
                      result in a risk to your rights and freedoms, we will
                      notify the relevant supervisory authority within 72 hours
                      of becoming aware of the breach. Where the breach is
                      likely to result in a high risk to your rights and
                      freedoms, we will also notify you directly without undue
                      delay.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm text-slate-500 leading-relaxed">
                  This is an educational preview. A complete, customised GDPR
                  privacy policy requires tailoring every section to your
                  specific data practices, jurisdiction, and business type. Not
                  legal advice.
                </p>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 6: Where to Display ── */}
              <section id="where-to-display" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Layers className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Where to Display Your GDPR Privacy Policy
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  GDPR requires that your privacy policy is easily accessible —
                  not buried in a Terms &amp; Conditions page or available only
                  upon request. Here is where it must appear:
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Website footer (all pages)",
                      desc: "The most common placement. A persistent link in the footer ensures it is discoverable from every page on your site — a basic GDPR expectation.",
                    },
                    {
                      title: "Sign-up and registration forms",
                      desc: "Wherever you collect an email address or personal information, include a link to your privacy policy and a clear disclosure such as 'By signing up, you agree to our Privacy Policy.'",
                    },
                    {
                      title: "Checkout and payment screens",
                      desc: "At the point of purchase, users must be informed how their transaction and payment data is processed. Your privacy policy link must be prominently visible.",
                    },
                    {
                      title: "Cookie consent banner",
                      desc: "Your cookie banner or Consent Management Platform (CMP) must link directly to your privacy policy or cookie policy. This is an ICO requirement — not optional.",
                    },
                    {
                      title: "Email footers and marketing communications",
                      desc: "Every marketing email must include a link to your privacy policy, an unsubscribe mechanism, and your registered address or contact details.",
                    },
                    {
                      title: "Mobile app settings screen",
                      desc: "If you operate a mobile app, your privacy policy must be accessible within the app itself — typically in the Settings or About section — as well as on your app store listing.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 7: How to Customise ── */}
              <section id="how-to-customize" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Customise Your GDPR Privacy Policy Template
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  A template is a starting point, not a finished document.
                  Follow these steps to turn the template into a compliant
                  privacy policy tailored to your business:
                </p>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      step: "1",
                      title: "Conduct a data mapping exercise",
                      desc: "Before writing anything, list every type of personal data you collect, where it comes from, how you use it, where it is stored, and who has access. This is the foundation your policy must accurately reflect.",
                    },
                    {
                      step: "2",
                      title: "Identify your lawful basis for each data type",
                      desc: "For every processing activity you identified, choose the appropriate GDPR lawful basis. If you rely on consent, make sure you have a proper consent mechanism. If you rely on legitimate interests, document a Legitimate Interests Assessment (LIA).",
                    },
                    {
                      step: "3",
                      title: "List all third-party tools and processors",
                      desc: "Audit your tech stack — hosting, analytics, CRM, email marketing, payment processing, live chat, advertising. Every tool that touches personal data is a data processor that must be disclosed.",
                    },
                    {
                      step: "4",
                      title: "Set specific retention periods",
                      desc: "Replace vague language like 'as long as necessary' with concrete timeframes for each data category. Ground each period in a legitimate business or legal reason.",
                    },
                    {
                      step: "5",
                      title: "Write in plain, simple language",
                      desc: "GDPR requires your policy to be written in clear, plain language — not legalese. If your average user cannot understand it, it does not meet the transparency standard. Shorter sentences, active voice, and no unexplained jargon.",
                    },
                    {
                      step: "6",
                      title: "Add a last-updated date and review schedule",
                      desc: "Include the date the policy was last updated. Set a calendar reminder to review it annually, and update it immediately whenever your data practices or the tools you use materially change.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
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
                      Generate a Complete GDPR Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your website or app and get a
                      fully customised, GDPR-compliant privacy policy covering
                      all 12 required sections — in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate Full GDPR Privacy Policy — $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>UK &amp; EU GDPR compliant</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and UK GDPR
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── FAQ Section ── */}
              <section id="faq" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      q: "Is a GDPR privacy policy template free?",
                      a: "Yes — this page provides a free GDPR privacy policy template preview covering the most critical sections. You can use it as a structural guide and starting point for your own policy. For a fully customised, ready-to-publish version tailored to your specific website or app, our generator produces a complete document for $4.99 — covering all 12 required sections in plain, compliant language.",
                    },
                    {
                      q: "Does my small business need a GDPR-compliant privacy policy?",
                      a: "Yes, without exception. GDPR applies to any organisation that processes personal data of EU or UK residents — regardless of business size, your location, or whether you charge for your product or service. If you collect email addresses, use Google Analytics, have a contact form, or run a cookie-based website, GDPR applies. There is no 'small business exemption' under GDPR.",
                    },
                    {
                      q: "What happens if I don't have a GDPR privacy policy?",
                      a: "Operating without a GDPR-compliant privacy policy exposes you to enforcement action. In the UK, the ICO can issue fines up to £17.5 million or 4% of global annual turnover — whichever is higher — for serious transparency violations. Beyond financial penalties, you risk reputational damage, user complaints, and being reported to the ICO by users who cannot find out how their data is used.",
                    },
                    {
                      q: "Can I use the same privacy policy for UK and EU users?",
                      a: "Yes, in most cases. UK GDPR and EU GDPR are substantively aligned. A well-drafted policy that references both frameworks, names the ICO as the UK supervisory authority, and notes the right to complain to the relevant EU data protection authority will typically satisfy both regimes. If your business is outside the EU but targets EU users, you may also need to name an EU Representative.",
                    },
                    {
                      q: "How often should I update my GDPR privacy policy?",
                      a: "Review your privacy policy whenever you start collecting new types of personal data, introduce new third-party tools or processors, relevant laws or ICO guidance change, or at minimum annually. When changes are material, notify existing users — a site notice or email to subscribers is typically sufficient. Always update the 'last updated' date at the top of your policy.",
                    },
                    {
                      q: "Do I need a separate cookie policy under GDPR?",
                      a: "Not necessarily. Cookie information can be included within your main privacy policy. However, many sites publish a dedicated cookie policy for clarity — especially where cookie usage is extensive or involves advertising trackers. Either way, your cookie consent banner must link clearly to where this information is published, and marketing or tracking cookies require explicit opt-in consent.",
                    },
                    {
                      q: "What is the difference between a privacy policy and a privacy notice?",
                      a: "GDPR uses the term 'privacy notice' to describe the transparency document provided to individuals whose data you collect. 'Privacy policy' is the widely used commercial and colloquial term for the same document. They refer to the same thing: a statement explaining what personal data you collect, why you collect it, how long you keep it, who you share it with, and what rights individuals have over it.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-slate-200/80 bg-white/60 p-5"
                    >
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
                      href: "/privacy-policy-for-saas",
                      icon: FileText,
                      title: "Privacy Policy for SaaS",
                      desc: "SaaS platform GDPR compliance",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California privacy rights and disclosures",
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
