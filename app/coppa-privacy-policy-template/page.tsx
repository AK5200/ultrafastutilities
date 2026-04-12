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
  UserCheck,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "COPPA Privacy Policy Template: Free, FTC Compliant (2026)",
  description:
    "Free COPPA compliant privacy policy template for sites and apps targeting children under 13. Parental consent, data minimization, FTC ready. Updated April 2026.",
  keywords:
    "COPPA privacy policy template, COPPA compliant privacy policy, children privacy policy, under 13 privacy policy, COPPA requirements privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/coppa-privacy-policy-template",
  },
  openGraph: {
    title:
      "COPPA Privacy Policy Template: Free, FTC Compliant (2026)",
    description:
      "Free COPPA compliant privacy policy template for sites and apps targeting children under 13. Parental consent, data minimization, FTC ready. Updated April 2026.",
    url: "https://ultrafastutilities.com/coppa-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "COPPA Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "COPPA Privacy Policy Template: Free, FTC Compliant (2026)",
    description:
      "Free COPPA compliant privacy policy template for sites and apps targeting children under 13. Parental consent, data minimization, FTC ready. Updated April 2026.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-is-coppa", title: "What Is COPPA?" },
  { id: "who-coppa-applies", title: "Who COPPA Applies To" },
  { id: "what-coppa-requires", title: "What COPPA Requires" },
  { id: "parental-consent", title: "Parental Consent" },
  { id: "policy-requirements", title: "Privacy Policy Requirements" },
  { id: "template-sections", title: "Template Sections" },
  { id: "third-party-services", title: "Third-Party Services" },
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
      name: "What is COPPA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "COPPA stands for the Children's Online Privacy Protection Act, a US federal law that restricts the collection of personal information from children under 13. Enforced by the FTC, COPPA requires verifiable parental consent before collecting any personal data from children, a prominent privacy policy, and specific data handling requirements. Violations can result in civil penalties up to $51,744 per violation.",
      },
    },
    {
      "@type": "Question",
      name: "Who does COPPA apply to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "COPPA applies to operators of websites and online services directed to children under 13, AND operators of general audience websites who have actual knowledge they are collecting personal information from children under 13. It applies regardless of where the business is located, as long as you collect data from US-based children.",
      },
    },
    {
      "@type": "Question",
      name: "What must a COPPA privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A COPPA privacy policy must include: what personal information is collected from children, how it is used, whether it is disclosed to third parties, that parental consent is required, how parents can review and delete their child's information, how parents can refuse further collection, contact information for the operator, and a description of parental consent procedures.",
      },
    },
    {
      "@type": "Question",
      name: "Does COPPA apply to my app or website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "COPPA applies if your site or app is directed to children under 13 OR if you have actual knowledge that children under 13 are using your service. Factors that make a site 'directed to children' include: subject matter appealing to children, visual content (cartoons, animations), age of models used, music or activities popular with children, and use of child-oriented celebrities.",
      },
    },
    {
      "@type": "Question",
      name: "What is verifiable parental consent under COPPA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verifiable parental consent means taking reasonable efforts to ensure that a parent actually provides consent before any personal information is collected from a child. Acceptable methods include: credit card verification, parent's signed consent form, video conference, phone call, or email with additional verification steps. A simple checkbox is not sufficient.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a COPPA-Compliant Privacy Policy",
  description:
    "Step-by-step guide to creating a privacy policy that meets COPPA requirements for websites and apps directed at children under 13",
  step: [
    {
      "@type": "HowToStep",
      name: "Determine if COPPA applies to you",
      text: "Assess whether your website or app is directed to children under 13 based on subject matter, design, content, and user base. If you have actual knowledge of under-13 users, COPPA applies regardless.",
    },
    {
      "@type": "HowToStep",
      name: "Identify all data collected from children",
      text: "List every piece of personal information collected: names, emails, birth dates, photos, videos, geolocation, persistent identifiers (cookies, device IDs), and any third-party data collection.",
    },
    {
      "@type": "HowToStep",
      name: "Implement parental consent mechanism",
      text: "Choose a verifiable parental consent method: credit card verification, signed form, video conference, or knowledge-based questions. Document the process in your privacy policy.",
    },
    {
      "@type": "HowToStep",
      name: "Write the COPPA-required privacy policy",
      text: "Include all COPPA-required disclosures: data collected, how it's used, third-party sharing, parental rights, and contact information. Use clear, plain language.",
    },
    {
      "@type": "HowToStep",
      name: "Publish prominently and notify parents",
      text: "Post the privacy policy on your homepage and at every point where data is collected. Send the notice directly to parents before collecting any data from children.",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "COPPA Privacy Policy Template: Children's Privacy Guide (2026)",
  description:
    "Complete guide to creating a COPPA-compliant privacy policy for websites and apps that collect data from children under 13.",
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
      name: "COPPA Privacy Policy Template",
      item: "https://ultrafastutilities.com/coppa-privacy-policy-template",
    },
  ],
};

export default function CoppaPrivacyPolicyTemplate() {
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
              <span className="text-slate-600">COPPA Privacy Policy Template</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Children's Privacy Compliance
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                COPPA Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                COPPA is one of the strictest privacy laws in the US. If your website
                or app is used by children under 13, you need a COPPA-compliant privacy
                policy and verifiable parental consent. Here is everything you need.
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>13 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>
              {/* Featured Snippet Box */}
              <div id="what-is-coppa" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-xs font-medium text-blue-700/70 mb-2">
                  <time dateTime="2026-04-11">April 11, 2026</time> &mdash;{" "}
                  <span className="text-blue-600/60">FTC COPPA 2026 rules</span>
                </p>
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  What Is COPPA?
                </h2>
                <p className="text-blue-800">
                  COPPA (Children's Online Privacy Protection Act) is a US federal law
                  that restricts the online collection of personal information from
                  children under 13. Enforced by the Federal Trade Commission (FTC),
                  COPPA requires operators to: obtain verifiable parental consent before
                  collecting any data from children, maintain a clear privacy policy,
                  give parents access to and control over their child's data, and delete
                  children's data upon request. Violations can result in civil penalties
                  up to $51,744 per violation.
                </p>
              </div>

              {/* Who COPPA Applies To */}
              <section id="who-coppa-applies">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Who Does COPPA Apply To?
                </h2>
                <p className="text-slate-700 mb-4">
                  COPPA applies to two categories of operators:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-slate-50 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-3">
                      1. Sites/Apps Directed to Children
                    </h3>
                    <p className="text-slate-700 text-sm mb-3">
                      Factors the FTC considers when determining if a site is
                      "directed to children":
                    </p>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      {[
                        "Subject matter primarily about children",
                        "Animated characters, cartoons, child-friendly graphics",
                        "Child-oriented activities (games, puzzles, coloring)",
                        "Music or celebrities popular with children",
                        "Use of child models or actors",
                        "Young adult content appealing to under-13s",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5">
                    <h3 className="font-semibold text-blue-800 mb-3">
                      2. General Audience Sites With Knowledge
                    </h3>
                    <p className="text-blue-800 text-sm mb-3">
                      Even general audience sites must comply when they have
                      "actual knowledge" of under-13 users:
                    </p>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      {[
                        "A user tells you they are under 13 during registration",
                        "Age verification shows a user is under 13",
                        "A parent or guardian contacts you about their child's account",
                        "User behavior patterns suggest child users",
                        "Your own employees report child users",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        Many app developers mistakenly believe that adding "You must be
                        13 or older to use this app" in their terms of service protects
                        them from COPPA. It does not. If the FTC determines your app is
                        directed to children based on content and design, COPPA applies
                        regardless of your age gate in the terms.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What COPPA Requires */}
              <section id="what-coppa-requires">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What COPPA Requires
                </h2>
                <p className="text-slate-700 mb-6">
                  COPPA has five core requirements for operators. Your privacy policy
                  must reflect compliance with all of them.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">COPPA Requirement</th>
                        <th className="text-left p-3 font-semibold text-slate-700">What You Must Do</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Clear privacy notice</td>
                        <td className="p-3 text-slate-600">Prominent, clearly written privacy policy on your homepage and every page where data is collected</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Direct notice to parents</td>
                        <td className="p-3 text-slate-600">Notify parents directly before collecting any personal information from their child</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Verifiable parental consent</td>
                        <td className="p-3 text-slate-600">Obtain verifiable consent from parents before collecting, using, or disclosing children's data</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Parent access and control</td>
                        <td className="p-3 text-slate-600">Allow parents to review, correct, and delete their child's data at any time</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Data security and retention</td>
                        <td className="p-3 text-slate-600">Keep children's data only as long as needed for the purpose collected, then delete securely</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Parental Consent */}
              <section id="parental-consent">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Verifiable Parental Consent Methods
                </h2>
                <p className="text-slate-700 mb-4">
                  One of COPPA's most challenging requirements is obtaining "verifiable
                  parental consent" - you must take reasonable steps to confirm that
                  the person providing consent is actually the child's parent.
                </p>
                <p className="text-slate-700 mb-6">
                  The FTC has approved several methods:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      method: "Credit or debit card transaction",
                      detail: "Requiring a small transaction to verify parent's payment method - refundable if desired.",
                      complexity: "Medium",
                    },
                    {
                      method: "Parent signs and returns a consent form",
                      detail: "Send form by postal mail, email, or fax and require return with signature.",
                      complexity: "Low",
                    },
                    {
                      method: "Video conference with the parent",
                      detail: "Real-time interaction with the parent to confirm identity and obtain consent.",
                      complexity: "High",
                    },
                    {
                      method: "Government-issued photo ID check",
                      detail: "Verify parent's identity using a government ID, then delete the ID immediately after verification.",
                      complexity: "High",
                    },
                    {
                      method: "Knowledge-based authentication",
                      detail: "Questions from a consumer report database that only a parent would likely know.",
                      complexity: "Medium",
                    },
                  ].map((item) => (
                    <div key={item.method} className="border border-slate-200 rounded-xl p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <UserCheck className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-slate-800 text-sm">{item.method}</p>
                            <p className="text-slate-600 text-sm mt-1">{item.detail}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded flex-shrink-0 ${
                          item.complexity === "Low" ? "bg-green-100 text-green-700" :
                          item.complexity === "Medium" ? "bg-yellow-100 text-yellow-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {item.complexity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        A simple email confirmation is NOT sufficient verifiable parental
                        consent under COPPA unless combined with additional verification
                        steps. The FTC's view is that email alone cannot verify that the
                        person consenting is actually an adult parent or guardian.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Policy Requirements */}
              <section id="policy-requirements">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  COPPA Privacy Policy Requirements
                </h2>
                <p className="text-slate-700 mb-4">
                  Under COPPA, your privacy policy must contain specific disclosures.
                  The FTC Rule specifies the required content in detail.
                </p>
                <div className="space-y-3">
                  {[
                    {
                      item: "Name, address, telephone number, and email address of all operators collecting or maintaining data",
                      required: true,
                    },
                    {
                      item: "Description of what personal information is collected from children and how it is used",
                      required: true,
                    },
                    {
                      item: "Description of all third parties who receive children's personal information",
                      required: true,
                    },
                    {
                      item: "That verifiable parental consent is required before collecting personal information",
                      required: true,
                    },
                    {
                      item: "How parents can review their child's personal information",
                      required: true,
                    },
                    {
                      item: "That parents may refuse to permit further collection of their child's information",
                      required: true,
                    },
                    {
                      item: "Procedures for deleting children's personal information",
                      required: true,
                    },
                    {
                      item: "That you do not condition participation on providing more information than is reasonably necessary",
                      required: true,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 border border-slate-200 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-700 text-sm">{item.item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Template Sections */}
              <section id="template-sections">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  COPPA Privacy Policy: Template Section Examples
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      heading: "Children's Privacy",
                      text: "Our [website/app] is directed to children under the age of 13. We are committed to protecting the privacy of children and complying with the Children's Online Privacy Protection Act (COPPA). We do not collect any personal information from children under 13 without verifiable parental consent.",
                    },
                    {
                      heading: "Parental Consent",
                      text: "Before we collect any personal information from your child, we will send a direct notice to the email address you provide. This notice will describe what information we collect, how it will be used, and how you can review, correct, or delete your child's information. We will not collect, use, or disclose your child's personal information until we have received your verifiable consent.",
                    },
                    {
                      heading: "Parent's Rights",
                      text: "As a parent or guardian, you have the right to: review personal information we have collected from your child, have that information deleted, refuse to permit further collection of your child's information, and consent to our collection of your child's information without consenting to disclosure to third parties. To exercise these rights, contact us at [privacy@yoursite.com] or [1-800-XXX-XXXX].",
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

              {/* Third-Party Services */}
              <section id="third-party-services">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Third-Party Services and COPPA Compliance
                </h2>
                <p className="text-slate-700 mb-4">
                  One of the most challenging aspects of COPPA is managing third-party
                  services. Many common analytics, advertising, and social features
                  collect data from users - and if those users are children, your
                  third-party service must also be COPPA-compliant.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Service Type</th>
                        <th className="text-left p-3 font-semibold text-slate-700">COPPA Consideration</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Action Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Google Analytics</td>
                        <td className="p-3 text-slate-600">Collects user behavior data</td>
                        <td className="p-3 text-slate-600">Must disable advertising features; use restricted data processing</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Facebook Pixel</td>
                        <td className="p-3 text-slate-600">Behavioral tracking and advertising</td>
                        <td className="p-3 text-slate-600">Generally not COPPA compliant - avoid or configure carefully</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">YouTube embeds</td>
                        <td className="p-3 text-slate-600">May collect viewing data</td>
                        <td className="p-3 text-slate-600">Use YouTube Privacy-Enhanced Mode (youtube-nocookie.com)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Comment systems</td>
                        <td className="p-3 text-slate-600">Collect personal information from commenters</td>
                        <td className="p-3 text-slate-600">Disable or require parental consent before posting</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Email newsletter tools</td>
                        <td className="p-3 text-slate-600">Collect email addresses</td>
                        <td className="p-3 text-slate-600">Must verify email belongs to a parent, not the child</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5 Common COPPA Privacy Policy Mistakes
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Relying on an age gate without COPPA compliance",
                      desc: "Asking users to click 'I am 13 or older' does not satisfy COPPA if your site is directed to children. The FTC can determine your site is directed to children regardless of your age gate if the content attracts under-13s.",
                    },
                    {
                      title: "Using advertising networks that are not COPPA compliant",
                      desc: "Standard advertising networks like Google AdSense are not COPPA compliant for child-directed content. You must use child-safe advertising programs or disable advertising entirely for child users.",
                    },
                    {
                      title: "Not notifying parents before collecting any data",
                      desc: "COPPA requires a direct notice to parents BEFORE you collect information. Burying the notice in your privacy policy or requiring parents to find it themselves does not meet the 'direct notice' requirement.",
                    },
                    {
                      title: "Retaining children's data longer than necessary",
                      desc: "COPPA requires you to retain children's personal information only as long as necessary for the purpose it was collected. You must have a deletion schedule and process documented in your policy.",
                    },
                    {
                      title: "Not listing all operators and third parties collecting data",
                      desc: "COPPA requires your privacy policy to list the name, address, telephone number, and email of all operators who collect data from children. Each must be specifically identified, not covered by a vague 'third-party service providers' reference.",
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
                      q: "What is COPPA?",
                      a: "COPPA (Children's Online Privacy Protection Act) is a US federal law restricting online collection of personal data from children under 13. It requires verifiable parental consent, clear privacy disclosures, and grants parents control over their child's data. Violations can result in fines up to $51,744 per violation.",
                    },
                    {
                      q: "Who does COPPA apply to?",
                      a: "COPPA applies to operators of websites and online services directed to children under 13, and general audience sites that have actual knowledge they are collecting data from children under 13. It applies regardless of business location, as long as data is collected from US-based children.",
                    },
                    {
                      q: "What must a COPPA privacy policy include?",
                      a: "A COPPA policy must include: what data is collected from children, how it's used, third-party recipients, that parental consent is required, how parents can review and delete data, that parents can refuse further collection, and operator contact information.",
                    },
                    {
                      q: "Does COPPA apply to my app or website?",
                      a: "COPPA applies if your app or site is directed to children under 13 (based on content, design, and subject matter) OR if you have actual knowledge that children under 13 are using it. Adding an age gate to your terms of service alone is not sufficient.",
                    },
                    {
                      q: "What is verifiable parental consent under COPPA?",
                      a: "Verifiable parental consent means confirming that an actual adult parent or guardian has consented. Acceptable methods include credit card verification, signed consent forms, video conference, government ID check, or knowledge-based authentication. A simple email confirmation or checkbox is not sufficient.",
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
                  Generate Your COPPA Privacy Policy
                </h2>
                <p className="text-slate-300 mb-6">
                  Create a complete COPPA-compliant privacy policy for your child-directed
                  website or app in under 2 minutes. Covers all FTC requirements, parental
                  consent, and third-party disclosures.
                </p>
                <ul className="space-y-2 text-slate-300 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    All FTC COPPA Rule required disclosures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Parental consent and rights section
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Third-party service disclosures
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
                      title: "Privacy Policy for Mobile Apps",
                      desc: "Mobile app privacy policy requirements",
                      href: "/privacy-policy-for-mobile-apps",
                    },
                    {
                      title: "Privacy Policy for Apps",
                      desc: "General app privacy policy guide",
                      href: "/privacy-policy-for-apps",
                    },
                    {
                      title: "Apple App Store Privacy Policy Requirements",
                      desc: "App Store child-safe requirements",
                      href: "/apple-app-store-privacy-policy-requirements",
                    },
                    {
                      title: "Do Mobile Apps Need a Privacy Policy?",
                      desc: "When mobile apps require a privacy policy",
                      href: "/do-mobile-apps-need-a-privacy-policy",
                    },
                    {
                      title: "GDPR Privacy Policy Template",
                      desc: "EU-compliant privacy policy including child data",
                      href: "/gdpr-privacy-policy-template",
                    },
                    {
                      title: "CCPA Privacy Policy Example",
                      desc: "California consumer privacy compliance",
                      href: "/ccpa-privacy-policy-example",
                    },
                    {
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "When privacy policies are mandatory by law",
                      href: "/is-a-privacy-policy-legally-required",
                    },
                    {
                      title: "What Should a Privacy Policy Include?",
                      desc: "Complete privacy policy sections checklist",
                      href: "/what-should-a-privacy-policy-include",
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
