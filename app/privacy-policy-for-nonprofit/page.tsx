import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  Info,
  Users,
  Globe,
  Lock,
  Ban,
  Clock,
  Heart,
  CreditCard,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Nonprofit Organizations (2026) | ultrafastutilities",
  description:
    "Nonprofits and charities need a privacy policy covering donor data, volunteer information, beneficiary records, and grant applications. Learn what to include and why it matters.",
  keywords:
    "privacy policy for nonprofit, nonprofit privacy policy, charity privacy policy, nonprofit organization privacy policy template",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-nonprofit",
  },
  openGraph: {
    title: "Privacy Policy for Nonprofit Organizations (2026) | ultrafastutilities",
    description:
      "Nonprofits and charities need a privacy policy covering donor data, volunteer information, beneficiary records, and grant applications. Learn what to include and why it matters.",
    url: "https://ultrafastutilities.com/privacy-policy-for-nonprofit",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Nonprofit Organizations | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Nonprofit Organizations (2026) | ultrafastutilities",
    description:
      "Nonprofits and charities need a privacy policy covering donor data, volunteer information, beneficiary records, and grant applications. Learn what to include and why it matters.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "why-nonprofits-need", title: "Why Nonprofits Need a Privacy Policy" },
  { id: "donor-data", title: "Donor Data" },
  { id: "volunteer-data", title: "Volunteer Data" },
  { id: "beneficiary-data", title: "Beneficiary Data (Sensitive)" },
  { id: "grant-applications", title: "Grant Applications" },
  { id: "email-marketing", title: "Email Marketing to Supporters" },
  { id: "gdpr-international", title: "GDPR for International Donations" },
  { id: "state-charity", title: "State Charity Registration Requirements" },
  { id: "common-mistakes", title: "5 Common Mistakes" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do nonprofit organizations need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Nonprofit organizations collect significant personal data from donors, volunteers, beneficiaries, and grant applicants. Federal laws like COPPA may apply if the nonprofit serves children. State charity registration laws in states like California, New York, and Illinois require nonprofits to disclose how donor data is used. GDPR applies if the nonprofit receives donations or volunteers from the EU. Many grant funders also require nonprofits to have a published privacy policy as a condition of funding.",
      },
    },
    {
      "@type": "Question",
      name: "What donor data does a nonprofit privacy policy need to cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A nonprofit privacy policy must cover: donor names and contact information, donation amounts and payment history, payment processing details (typically through Stripe, PayPal, or a donation platform), whether donor information is shared with third-party fundraising platforms, recurring donation data, whether donor names and gift amounts are published in annual reports or donor walls, and how donors can request to remain anonymous or have their data removed.",
      },
    },
    {
      "@type": "Question",
      name: "How should a nonprofit handle beneficiary privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beneficiary data is often the most sensitive data a nonprofit handles, potentially including health information, immigration status, mental health history, financial need documentation, and family circumstances. This data requires the highest level of protection. Your privacy policy must explain what beneficiary data is collected, who has access to it (case workers, program staff), how long it is retained, whether it is shared with government agencies or partner organizations, and how beneficiaries can request access or correction of their records.",
      },
    },
    {
      "@type": "Question",
      name: "Does GDPR apply to nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GDPR applies to any nonprofit that processes personal data of EU residents, regardless of where the nonprofit is based. If your nonprofit accepts donations from EU supporters, corresponds with EU volunteers, or provides services to EU beneficiaries, GDPR applies. Nonprofits are not automatically exempt from GDPR simply because they are charitable organizations. You need a compliant privacy policy, must establish legal bases for processing, and must honor data subject rights.",
      },
    },
    {
      "@type": "Question",
      name: "Do state charity registration laws require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several states have requirements that effectively mandate privacy disclosures for registered charities. California's Supervision of Trustees and Fundraisers for Charitable Purposes Act requires disclosures about donor data practices. New York's Nonprofit Revitalization Act includes data governance requirements. Some states require charities to disclose whether they rent, exchange, or sell donor lists. Even where not explicitly required by law, having a clear donor data privacy policy is considered best practice and is often required by major grant funders.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy for Nonprofit Organizations (2026)",
  description:
    "Complete guide to privacy policy requirements for nonprofit organizations, covering donor data, volunteer information, beneficiary records, GDPR, and state charity registration laws.",
  datePublished: "2026-01-01",
  dateModified: "2026-03-31",
  author: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
  publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy for Nonprofit", item: "https://ultrafastutilities.com/privacy-policy-for-nonprofit" },
  ],
};

export default function PrivacyPolicyNonprofit() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ReadingProgress />
      <main className="min-h-screen">
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
              <span className="text-slate-600">Privacy Policy for Nonprofit</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Heart className="w-3.5 h-3.5" />
                Nonprofit Privacy Requirements 2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Nonprofit Organizations
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Nonprofits collect some of the most sensitive personal data of any organization type: donor payment history,
                beneficiary health and circumstance data, and volunteer background check information. A proper privacy policy
                is both a legal requirement and a trust-building essential.
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
                  <Link href="/generate"><Button size="sm" className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg">Generate Policy</Button></Link>
                </div>
              </div>
            </aside>
            <article className="max-w-[720px]">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">AK</div>
                  <span>Written by{" "}<span className="font-semibold text-slate-800">Anupam Kumar</span></span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <span>Last updated: March 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>14 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>
              <div id="quick-answer" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Quick Answer: Do Nonprofits Need a Privacy Policy?
                </h2>
                <p className="text-blue-800">
                  <strong>Yes, and often more urgently than for-profit businesses.</strong> Nonprofits handle donor payment
                  data, beneficiary health and financial records, volunteer background checks, and grant application data.
                  Several federal laws (COPPA for child-serving nonprofits, HIPAA for health-focused nonprofits) may apply.
                  State charity registration laws in California, New York, and other states impose donor data disclosure
                  requirements. GDPR applies if you accept donations from EU supporters. And most major foundations require
                  a published privacy policy before awarding grants.
                </p>
              </div>

              <section id="why-nonprofits-need">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Nonprofits Need a Privacy Policy</h2>
                <p className="text-slate-700 mb-4">
                  Many nonprofit leaders assume privacy policies are only for technology companies or e-commerce businesses.
                  This is a costly misconception. Nonprofits are data-intensive organizations that collect personal information
                  from multiple stakeholder groups, often including highly sensitive categories of data.
                </p>
                <p className="text-slate-700 mb-4">
                  The reasons a nonprofit needs a formal privacy policy extend well beyond legal compliance:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2"><Lock className="w-4 h-4" />Legal Compliance</h3>
                    <p className="text-blue-800 text-sm">State charity laws, GDPR (for EU donors and beneficiaries), COPPA (if serving children), and HIPAA (if handling health data) all impose privacy obligations.</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2"><Heart className="w-4 h-4" />Donor Trust</h3>
                    <p className="text-green-800 text-sm">Donors want to know their payment information is secure and their personal details will not be sold to other charities or fundraising firms. A clear policy builds confidence and increases giving.</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2"><FileText className="w-4 h-4" />Grant Funding</h3>
                    <p className="text-purple-800 text-sm">Major foundations including Gates Foundation grantees and government grant programs often require a published privacy policy as a prerequisite for funding eligibility.</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2"><Users className="w-4 h-4" />Beneficiary Protection</h3>
                    <p className="text-amber-800 text-sm">Beneficiaries, particularly vulnerable populations, have a right to understand how their information is used and who can access it. A privacy policy formalizes these protections.</p>
                  </div>
                </div>
              </section>

              <section id="donor-data">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Donor Data: What Your Policy Must Cover</h2>
                <p className="text-slate-700 mb-4">
                  Donor data is the foundation of nonprofit fundraising. It is also a category of personal information that
                  donors have strong expectations about. Your privacy policy must be specific about what donor data you collect,
                  how you use it, and critically, what you do not do with it (such as selling or renting donor lists).
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Data Type</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Common Uses</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Sensitivity Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Name and address</td>
                        <td className="border border-slate-200 px-4 py-3">Gift acknowledgment letters, tax receipts, direct mail</td>
                        <td className="border border-slate-200 px-4 py-3 text-yellow-700">Moderate</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Email address</td>
                        <td className="border border-slate-200 px-4 py-3">Donation receipts, newsletters, campaign appeals</td>
                        <td className="border border-slate-200 px-4 py-3 text-yellow-700">Moderate</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Donation amount and date</td>
                        <td className="border border-slate-200 px-4 py-3">Tax receipts, donor wall recognition, major gift cultivation</td>
                        <td className="border border-slate-200 px-4 py-3 text-red-700">High (financial)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Payment card data</td>
                        <td className="border border-slate-200 px-4 py-3">Processed by payment processor; recurring donation setup</td>
                        <td className="border border-slate-200 px-4 py-3 text-red-700">Very high</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Employer and matching gift info</td>
                        <td className="border border-slate-200 px-4 py-3">Employer matching gift requests, cultivation research</td>
                        <td className="border border-slate-200 px-4 py-3 text-yellow-700">Moderate</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Donor notes and capacity ratings</td>
                        <td className="border border-slate-200 px-4 py-3">Major gift fundraising, internal prospect research</td>
                        <td className="border border-slate-200 px-4 py-3 text-red-700">High (internal)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-700 mb-4">
                  Many nonprofits engage in prospect research, using public records and wealth screening tools to estimate donor
                  giving capacity. If your organization does this, your privacy policy must disclose that you may collect or
                  infer financial and professional information from publicly available sources for fundraising purposes.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    The Association of Fundraising Professionals (AFP) Code of Ethics states that donor information should
                    not be sold or shared with other organizations without explicit donor consent. Your privacy policy should
                    explicitly state whether you rent, exchange, or sell donor lists, and whether you share data with
                    affiliated organizations or co-branded campaigns.
                  </p>
                </div>
              </section>

              <section id="volunteer-data">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Volunteer Data</h2>
                <p className="text-slate-700 mb-4">
                  Volunteer management creates a distinct category of personal data that your privacy policy should address
                  separately from donor data. Volunteers typically provide more detailed personal information than donors because
                  of the closer relationship they have with the organization.
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Application data:</strong> Skills, availability, work experience, references, and motivation statements collected during volunteer onboarding.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Background check data:</strong> For nonprofits working with vulnerable populations (children, elderly, people with disabilities), criminal background check results are collected. This is sensitive data requiring strict access controls and retention policies.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Health and accommodation data:</strong> Some volunteers disclose health conditions, disabilities, or dietary restrictions. This is special category data under GDPR and requires explicit consent.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Volunteer hours and activity records:</strong> Used for grant reporting, recognition programs, and IRS documentation for volunteer services valuation.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Emergency contact information:</strong> Name, relationship, and phone number of a contact to notify in emergencies. Requires specific disclosure since this involves data about a third party.</span></li>
                </ul>
              </section>

              <section id="beneficiary-data">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Beneficiary Data: The Most Sensitive Category</h2>
                <p className="text-slate-700 mb-4">
                  Beneficiary data is typically the most sensitive data a nonprofit handles. Depending on your mission, you may
                  collect health information, immigration status, mental health history, financial circumstances, family
                  composition, trauma history, housing status, or criminal justice involvement. This data demands the strictest
                  privacy protections and the most carefully written privacy policy language.
                </p>
                <p className="text-slate-700 mb-4">
                  Your privacy policy must address:
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span><strong>What data is collected:</strong> Be specific. If you serve immigrants, disclose that immigration status may be documented. If you provide mental health services, disclose that treatment records are kept.</span></li>
                  <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span><strong>Who can access it:</strong> Specify which staff roles have access to beneficiary files (case managers, program directors, board members) and whether partner organizations can access data.</span></li>
                  <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span><strong>Government reporting:</strong> Many nonprofits are required to report aggregated data to government funders. Clarify whether individual beneficiary data is reported and under what circumstances identifiable data is shared.</span></li>
                  <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span><strong>Beneficiary rights:</strong> Beneficiaries have the right to access their own records, request corrections, and understand how their data is used. Your policy should include a simple process for exercising these rights.</span></li>
                  <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span><strong>Photography and testimonials:</strong> If you use beneficiary photos or stories in fundraising materials, you need explicit consent. Your policy should reference your consent process for this use.</span></li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    If your nonprofit provides health-related services and receives federal funding, you may be subject to
                    HIPAA even if you are not a traditional healthcare provider. Federally Qualified Health Centers (FQHCs),
                    nonprofits that handle protected health information as part of federally funded programs, and organizations
                    that use electronic health records for service delivery are often covered entities or business associates
                    under HIPAA.
                  </p>
                </div>
              </section>

              <section id="grant-applications">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Grant Applications</h2>
                <p className="text-slate-700 mb-4">
                  Grant applications involve a two-way flow of sensitive information. Your organization provides detailed
                  financial, programmatic, and organizational data to funders. In some cases, grant applications require
                  data about the populations you serve, which may include individual beneficiary information.
                </p>
                <p className="text-slate-700 mb-4">
                  Your privacy policy should address grant-related data processing in these ways:
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Aggregate vs. identifiable data:</strong> Grant reports should use aggregated, de-identified statistics about program participants whenever possible. If identifiable data is required by a funder, this must be disclosed to beneficiaries and consented to.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Funder data access:</strong> Some grant funders require site visits or program audits that may involve reviewing beneficiary files. Your policy should note that anonymized data may be shared with funders for reporting and evaluation purposes.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Grant management platforms:</strong> If you use platforms like Fluxx, Submittable, or Foundant to manage grant applications, these platforms store your organizational data and must be listed as data subprocessors in your policy.</span></li>
                </ul>
              </section>

              <section id="email-marketing">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Email Marketing to Supporters</h2>
                <p className="text-slate-700 mb-4">
                  Most nonprofits use email to communicate with donors, volunteers, and supporters. This email marketing
                  activity is subject to CAN-SPAM for US-based senders and GDPR for EU recipients. Your privacy policy
                  must cover your email communications practices.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Required email disclosures for nonprofits:</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Name your email service provider (Mailchimp, Constant Contact, Salesforce Marketing Cloud, or similar).</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Explain the types of emails you send: newsletters, donation appeals, event invitations, program updates, tax receipt summaries.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Confirm that donors who request to stop receiving fundraising emails will be removed from appeal lists within a reasonable timeframe (10 business days is the CAN-SPAM standard).</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Disclose whether you segment email lists (e.g., sending different messages to major donors vs. first-time donors) and whether you use behavioral data to personalize appeals.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Note that transactional emails (donation receipts, event confirmations) may still be sent even to supporters who have opted out of marketing emails.</span></li>
                  </ul>
                </div>
              </section>

              <section id="gdpr-international">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">GDPR for International Donations and Volunteers</h2>
                <p className="text-slate-700 mb-4">
                  GDPR is not just a concern for European nonprofits. Any US-based or international nonprofit that accepts
                  donations from EU residents, corresponds with EU volunteers, or serves EU beneficiaries must comply with GDPR.
                  The regulation applies based on where the data subject is located, not where the organization is based.
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Legitimate interests vs. consent:</strong> For existing donors who have an ongoing relationship with your organization, legitimate interests may be a valid legal basis for sending fundraising communications under GDPR Article 6(1)(f). For new contacts, consent is typically required.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Special category data:</strong> Beneficiary health data, immigration status, and similar sensitive information is special category data under GDPR Article 9. Processing this data requires explicit consent or another specific exemption (such as substantial public interest).</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Data transfers:</strong> If your nonprofit is US-based and uses US-based CRM systems (Salesforce, Bloomerang, Little Green Light), EU donor data is being transferred to the US. Your policy must reference the transfer mechanism used.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Representation:</strong> EU nonprofits and US nonprofits with significant EU operations may need to appoint an EU Representative under GDPR Article 27 if they do not have a physical EU presence.</span></li>
                </ul>
              </section>

              <section id="state-charity">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">State Charity Registration Requirements</h2>
                <p className="text-slate-700 mb-4">
                  Forty states require nonprofits to register before soliciting donations from their residents. Several of these
                  states have specific provisions about donor data that go beyond general privacy law requirements.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">State</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Key Requirement</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Donor Data Provision</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">California</td>
                        <td className="border border-slate-200 px-4 py-3">AG registration + CCPA compliance for large nonprofits</td>
                        <td className="border border-slate-200 px-4 py-3">Must disclose if donor lists are rented or sold</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">New York</td>
                        <td className="border border-slate-200 px-4 py-3">Nonprofit Revitalization Act; CHAR500 annual filing</td>
                        <td className="border border-slate-200 px-4 py-3">Board data governance requirements</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Illinois</td>
                        <td className="border border-slate-200 px-4 py-3">Charitable Trust Act registration required</td>
                        <td className="border border-slate-200 px-4 py-3">Donor list practices must be disclosed on request</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Texas</td>
                        <td className="border border-slate-200 px-4 py-3">Registration required for solicitations over $25,000</td>
                        <td className="border border-slate-200 px-4 py-3">Transparency in how donations are used</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    California's Consumer Privacy Act (CCPA) includes an exemption for nonprofits from the main consumer
                    rights provisions, but California nonprofits are still subject to the California Online Privacy Protection
                    Act (CalOPPA), which requires a privacy policy disclosing what personal data is collected and how it is used.
                    Large nonprofits with for-profit activities may also lose the CCPA exemption for those activities.
                  </p>
                </div>
              </section>

              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">5 Common Privacy Policy Mistakes by Nonprofits</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Not addressing beneficiary data separately from donor data",
                      description: "Nonprofits often write a single privacy policy section about 'personal information we collect' without distinguishing between the very different data types and sensitivity levels of donor, volunteer, and beneficiary data. Beneficiary data deserves its own section with stronger protections.",
                    },
                    {
                      title: "Failing to disclose prospect research and wealth screening practices",
                      description: "Many nonprofits use DonorSearch, iWave, or similar prospect research tools that compile publicly available financial and professional information about donors. This constitutes personal data collection that must be disclosed, yet most nonprofit privacy policies do not mention it.",
                    },
                    {
                      title: "Not specifying whether donor lists are shared or sold",
                      description: "Donors frequently worry about their information being passed to other charities without consent. Your privacy policy must state explicitly whether you share donor lists with affiliated organizations, co-promotion partners, or list rental agencies, and provide an opt-out mechanism.",
                    },
                    {
                      title: "Using a for-profit business privacy policy template",
                      description: "Generic business privacy policy templates are written for commercial data processing purposes. They omit critical nonprofit-specific categories: beneficiary data, volunteer background checks, grant reporting, charitable solicitation disclosures, and the specific legal bases that apply to charitable organizations.",
                    },
                    {
                      title: "Not obtaining consent for using beneficiary photos in fundraising",
                      description: "Many nonprofits use photos and stories of beneficiaries in appeals and annual reports without documented consent. Your privacy policy should reference your consent process for this use, and internally you should have signed consent forms on file for every beneficiary whose image or story you use.",
                    },
                  ].map((mistake, index) => (
                    <div key={index} className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                      <Ban className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-900 mb-1">Mistake {index + 1}: {mistake.title}</p>
                        <p className="text-red-800 text-sm">{mistake.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="how-to-create">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Create a Privacy Policy for Your Nonprofit</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Map all stakeholder data types", description: "Create a data inventory for each stakeholder group: donors, volunteers, beneficiaries, staff, board members, grant funders. For each group, document what data is collected, why, who accesses it, and how long it is kept." },
                    { step: "2", title: "Identify applicable laws", description: "Determine which laws apply to your nonprofit based on the populations you serve (COPPA for children's programs, HIPAA for health services), your location (state charity laws), and your donor and beneficiary geography (GDPR for EU connections)." },
                    { step: "3", title: "Write separate sections for each stakeholder group", description: "Donor data, volunteer data, and beneficiary data have different sensitivity levels and legal requirements. Write a distinct policy section for each group rather than lumping all personal data together." },
                    { step: "4", title: "Address donor list practices explicitly", description: "State clearly whether you rent, sell, or exchange donor lists with other organizations. If you do not, say so plainly. This is one of the most frequent concerns donors have and a clear statement builds significant trust." },
                    { step: "5", title: "Have legal counsel review the policy", description: "Given the sensitive nature of beneficiary data and the multiple laws that may apply, nonprofit privacy policies benefit significantly from attorney review, particularly if you serve vulnerable populations or operate internationally." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                        <p className="text-slate-700 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "Do nonprofit organizations need a privacy policy?", a: "Yes. Nonprofits collect personal data from donors, volunteers, and beneficiaries. Several laws apply depending on the organization's activities: state charity registration laws, GDPR for EU connections, COPPA for child-serving programs, and HIPAA for health-related services. Most major grant funders also require a published privacy policy." },
                    { q: "What donor data does a nonprofit privacy policy need to cover?", a: "A nonprofit privacy policy must cover donor names and contact information, donation amounts and payment history, payment processing details, whether donor information is shared with third parties, recurring donation data, whether names and gift amounts appear in public recognition, and how donors can request anonymity or data removal." },
                    { q: "How should a nonprofit handle beneficiary privacy?", a: "Beneficiary data is typically the most sensitive data a nonprofit handles, potentially including health information, immigration status, and financial circumstances. Your policy must explain what data is collected, who has access, how long it is retained, whether it is shared with government agencies or partner organizations, and how beneficiaries can request access or correction of their records." },
                    { q: "Does GDPR apply to nonprofits?", a: "Yes. GDPR applies to any nonprofit that processes personal data of EU residents, regardless of where the nonprofit is based. Nonprofits are not automatically exempt from GDPR simply because they are charitable organizations." },
                    { q: "Do state charity registration laws require a privacy policy?", a: "Several states have requirements that effectively mandate privacy disclosures for registered charities. California and New York have the most rigorous requirements. Many states require charities to disclose whether they rent, exchange, or sell donor lists. Even where not explicitly required, a privacy policy is required by most major grant funders." },
                  ].map((item, index) => (
                    <div key={index} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                      <p className="text-slate-700 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 text-center">
                <ShieldCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-3">Generate Your Nonprofit Privacy Policy</h2>
                <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                  Create a privacy policy tailored for nonprofit organizations in minutes. Covers donor data, volunteer
                  information, beneficiary protections, GDPR, and state charity law requirements.
                </p>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/">Generate Free Privacy Policy</Link>
                </Button>
              </section>

              <section id="resources">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "GDPR Privacy Policy Template", href: "/gdpr-privacy-policy-template" },
                    { title: "HIPAA Privacy Policy Template", href: "/hipaa-privacy-policy-template" },
                    { title: "Privacy Policy for Collecting Emails", href: "/do-i-need-a-privacy-policy-for-collecting-emails" },
                    { title: "CAN-SPAM Compliance Guide", href: "/can-spam-privacy-policy" },
                    { title: "Privacy Policy for Membership Site", href: "/privacy-policy-for-membership-site" },
                    { title: "Cookie Policy for Websites", href: "/cookie-policy-for-websites" },
                    { title: "CCPA Privacy Policy Example", href: "/ccpa-privacy-policy-example" },
                    { title: "Free Privacy Policy Generator", href: "/" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-2 p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 hover:text-blue-600 text-sm font-medium">
                      <FileText className="w-4 h-4 flex-shrink-0" />
                      {link.title}
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
