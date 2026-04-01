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
  Building2,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "HIPAA Privacy Policy Template for Healthcare Providers and Health Apps (2026) | ultrafastutilities",
  description:
    "HIPAA compliance requires both a Notice of Privacy Practices and a website privacy policy. Learn the difference, who must comply, what PHI is, and how health apps are treated differently.",
  keywords:
    "hipaa privacy policy template, hipaa compliant privacy policy, hipaa notice of privacy practices, healthcare privacy policy template, health app privacy policy hipaa",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/hipaa-privacy-policy-template",
  },
  openGraph: {
    title: "HIPAA Privacy Policy Template for Healthcare Providers and Health Apps (2026) | ultrafastutilities",
    description:
      "HIPAA compliance requires both a Notice of Privacy Practices and a website privacy policy. Learn the difference, who must comply, what PHI is, and how health apps are treated differently.",
    url: "https://ultrafastutilities.com/hipaa-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HIPAA Privacy Policy Template | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIPAA Privacy Policy Template for Healthcare Providers and Health Apps (2026) | ultrafastutilities",
    description:
      "HIPAA compliance requires both a Notice of Privacy Practices and a website privacy policy. Learn the difference, who must comply, what PHI is, and how health apps are treated differently.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "what-is-hipaa", title: "What Is HIPAA?" },
  { id: "npp-vs-website-policy", title: "Notice of Privacy Practices vs Website Policy" },
  { id: "who-must-comply", title: "Who Must Comply" },
  { id: "phi-definition", title: "PHI: Definition and Examples" },
  { id: "safe-harbor", title: "HIPAA Safe Harbor De-Identification" },
  { id: "state-health-laws", title: "State Health Privacy Laws" },
  { id: "health-app-exemptions", title: "Health App Exemptions" },
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
      name: "What is the difference between a HIPAA Notice of Privacy Practices and a website privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These are two completely different documents. A HIPAA Notice of Privacy Practices (NPP) is a federally mandated document that covered entities must provide to patients. It explains how Protected Health Information (PHI) may be used and disclosed for treatment, payment, and healthcare operations. A website privacy policy is a general document that explains how a website collects and uses visitor data (cookies, contact forms, appointment requests). Healthcare providers need both. The NPP covers clinical health records; the website privacy policy covers website visitor data. They should be clearly separate documents.",
      },
    },
    {
      "@type": "Question",
      name: "Who must comply with HIPAA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HIPAA applies to covered entities and their business associates. Covered entities include healthcare providers (doctors, hospitals, dentists, therapists, pharmacies) that transmit health information electronically, health plans (insurance companies, HMOs, employer health plans), and healthcare clearinghouses. Business associates are vendors that handle PHI on behalf of covered entities, such as billing companies, EHR vendors, cloud storage providers used for health records, and transcription services. Business associates must sign a Business Associate Agreement (BAA) and are directly liable under HIPAA.",
      },
    },
    {
      "@type": "Question",
      name: "Does my health app need to comply with HIPAA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically. HIPAA applies to covered entities and business associates. A health app that operates independently (not on behalf of a covered entity) is generally not subject to HIPAA, even if it collects health information. However, if your app is used by healthcare providers to manage patient data, if your app receives PHI from a covered entity, or if your company contracts with a healthcare provider to provide the app as a service, HIPAA likely applies. The FTC has also signaled it will pursue health apps that mishandle sensitive health data under Section 5 of the FTC Act even when HIPAA does not apply.",
      },
    },
    {
      "@type": "Question",
      name: "What is HIPAA Safe Harbor de-identification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HIPAA Safe Harbor de-identification is a method for removing 18 specific identifiers from health information so that it no longer qualifies as Protected Health Information (PHI) and is therefore not subject to HIPAA restrictions. The 18 identifiers include names, geographic data smaller than state, dates (other than year), phone numbers, email addresses, Social Security numbers, medical record numbers, and other elements that could identify an individual. De-identified data can be used for research, analytics, and product development without HIPAA restrictions.",
      },
    },
    {
      "@type": "Question",
      name: "What is California's Confidentiality of Medical Information Act (CMIA)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "California's Confidentiality of Medical Information Act (CMIA) provides stronger privacy protections than HIPAA for California residents. CMIA applies to providers of health care, health care service plans, contractors, and employers. Significantly, California courts have interpreted CMIA to apply to some health apps and digital health companies that are not covered by HIPAA. Under CMIA, businesses cannot disclose medical information without explicit authorization, and violations can result in civil penalties of up to $250,000 per violation plus actual damages.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HIPAA Privacy Policy Template for Healthcare Providers and Health Apps (2026)",
  description:
    "Complete guide to HIPAA privacy requirements for healthcare providers and health apps, covering Notice of Privacy Practices, PHI, covered entities, business associates, Safe Harbor de-identification, and state health privacy laws.",
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
    { "@type": "ListItem", position: 2, name: "HIPAA Privacy Policy Template", item: "https://ultrafastutilities.com/hipaa-privacy-policy-template" },
  ],
};

export default function HipaaPrivacyPolicyTemplate() {
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
              <span className="text-slate-600">HIPAA Privacy Policy Template</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Heart className="w-3.5 h-3.5" />
                HIPAA Compliance Guide 2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                HIPAA Privacy Policy Template for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Healthcare Providers
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                HIPAA compliance requires more than a standard privacy policy. Healthcare providers need a Notice of Privacy
                Practices. Health apps face a different set of rules. This guide clarifies exactly what you need and why
                these two documents are not the same thing.
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
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>15 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>
              <div id="quick-answer" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Quick Answer: What Does HIPAA Require for Privacy Policies?
                </h2>
                <p className="text-blue-800 mb-3">
                  HIPAA does not require a standard "website privacy policy." Instead, it requires covered healthcare entities to
                  provide patients with a <strong>Notice of Privacy Practices (NPP)</strong>, which is a specific federally
                  mandated document explaining how Protected Health Information (PHI) will be used.
                </p>
                <p className="text-blue-800">
                  Healthcare providers and health organizations also need a <strong>separate website privacy policy</strong> for
                  their website data (cookies, contact forms, appointment scheduling). These are two distinct documents with
                  different legal purposes. Health apps that operate independently of a covered entity are often not subject
                  to HIPAA at all, but may be subject to FTC enforcement and state health privacy laws like California's CMIA.
                </p>
              </div>

              <section id="what-is-hipaa">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Is HIPAA?</h2>
                <p className="text-slate-700 mb-4">
                  The Health Insurance Portability and Accountability Act (HIPAA) was enacted by the US Congress in 1996.
                  Its privacy provisions, contained in the HIPAA Privacy Rule, set national standards for the protection of
                  Protected Health Information (PHI). The HIPAA Security Rule sets standards for electronic PHI (ePHI).
                  The HIPAA Breach Notification Rule requires covered entities to notify patients and HHS in the event of
                  a PHI breach.
                </p>
                <p className="text-slate-700 mb-4">
                  HIPAA is enforced by the Office for Civil Rights (OCR) within the US Department of Health and Human Services
                  (HHS). Penalties for HIPAA violations range from $100 to $50,000 per violation, with an annual maximum of
                  $1.9 million per violation category. Criminal violations can result in fines of up to $250,000 and
                  imprisonment for up to 10 years.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    In 2022, HHS issued guidance clarifying that tracking technologies (like Google Analytics and Meta Pixel)
                    on healthcare provider websites may violate HIPAA if they transmit PHI to third parties without patient
                    authorization. Several major hospital systems faced enforcement actions for using standard website analytics
                    tools. Healthcare websites must carefully evaluate any third-party tracking technology.
                  </p>
                </div>
              </section>

              <section id="npp-vs-website-policy">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Notice of Privacy Practices vs. Website Privacy Policy: These Are Different Documents</h2>
                <p className="text-slate-700 mb-4">
                  This is the most common source of confusion for healthcare providers. Many organizations believe their
                  HIPAA Notice of Privacy Practices satisfies their website privacy policy obligation. It does not. These
                  are two completely different documents with different purposes, different legal bases, and different content.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Aspect</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Notice of Privacy Practices (NPP)</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Website Privacy Policy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Legal requirement</td>
                        <td className="border border-slate-200 px-4 py-3">Mandated by HIPAA Privacy Rule 45 CFR 164.520</td>
                        <td className="border border-slate-200 px-4 py-3">Required by CalOPPA, GDPR, FTC Act, and others</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Data covered</td>
                        <td className="border border-slate-200 px-4 py-3">Protected Health Information (PHI) in clinical records</td>
                        <td className="border border-slate-200 px-4 py-3">Website visitor data, cookies, online forms, analytics</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Who receives it</td>
                        <td className="border border-slate-200 px-4 py-3">Patients at first point of service</td>
                        <td className="border border-slate-200 px-4 py-3">Website visitors</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Required content</td>
                        <td className="border border-slate-200 px-4 py-3">Uses of PHI, patient rights, complaint procedures, effective date</td>
                        <td className="border border-slate-200 px-4 py-3">Data collected, cookies, third-party sharing, user rights</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Acknowledgment required</td>
                        <td className="border border-slate-200 px-4 py-3">Yes, patients must acknowledge receipt</td>
                        <td className="border border-slate-200 px-4 py-3">Generally no (except EU cookie consent)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-700 mb-4">
                  Healthcare providers need <em>both</em> documents. The NPP is provided to patients and governs clinical data.
                  The website privacy policy is published on the website and governs online visitor data. They should be
                  clearly labeled and kept separate to avoid confusion.
                </p>
              </section>

              <section id="who-must-comply">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Who Must Comply with HIPAA?</h2>
                <p className="text-slate-700 mb-4">
                  HIPAA compliance obligations fall on two categories: covered entities and business associates. Understanding
                  which category applies to you determines your specific obligations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2"><Building2 className="w-5 h-5" />Covered Entities</h3>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Healthcare providers (doctors, hospitals, dentists, therapists, chiropractors)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Pharmacies and pharmacy benefit managers</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Health plans and insurance companies</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />HMOs and employer-sponsored health plans</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Healthcare clearinghouses</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Covered entity requirement: must transmit health information electronically</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2"><Users className="w-5 h-5" />Business Associates</h3>
                    <ul className="space-y-2 text-green-800 text-sm">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Medical billing and coding companies</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Electronic Health Record (EHR) vendors</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Cloud storage providers used for health records</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Medical transcription services</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Healthcare IT consultants with PHI access</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Must sign a Business Associate Agreement (BAA)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    Subcontractors of business associates are also subject to HIPAA. If your company is a business associate
                    and you share PHI with a subcontractor (such as a cloud hosting provider or an analytics firm), that
                    subcontractor becomes a downstream business associate and must also sign a BAA. The chain of accountability
                    extends throughout the data processing ecosystem.
                  </p>
                </div>
              </section>

              <section id="phi-definition">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">PHI: Definition and Examples</h2>
                <p className="text-slate-700 mb-4">
                  Protected Health Information (PHI) is health information that is created, received, maintained, or transmitted
                  by a covered entity or business associate and that identifies or could be used to identify an individual.
                  PHI includes information about the past, present, or future physical or mental health of an individual,
                  the provision of healthcare to an individual, or payment for healthcare.
                </p>
                <p className="text-slate-700 mb-4">
                  The following are common examples of PHI:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h3 className="font-semibold text-red-900 mb-2">Clearly PHI</h3>
                    <ul className="space-y-1 text-red-800 text-sm">
                      <li>Medical records and clinical notes</li>
                      <li>Lab results and diagnostic images</li>
                      <li>Prescription records</li>
                      <li>Mental health treatment records</li>
                      <li>Health insurance claim records</li>
                      <li>Appointment scheduling with health context</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">May Be PHI (Context-Dependent)</h3>
                    <ul className="space-y-1 text-yellow-800 text-sm">
                      <li>IP addresses on healthcare provider websites</li>
                      <li>Appointment request form submissions</li>
                      <li>Health questionnaire responses</li>
                      <li>Patient portal login activity</li>
                      <li>Wearable device data shared with a provider</li>
                      <li>Contact form messages mentioning health conditions</li>
                    </ul>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">
                  The context matters significantly. An email address alone is not PHI. But an email address combined with
                  information indicating the person is a patient of a specific healthcare provider, or that they are seeking
                  treatment for a specific condition, becomes PHI.
                </p>
              </section>

              <section id="safe-harbor">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">HIPAA Safe Harbor De-Identification</h2>
                <p className="text-slate-700 mb-4">
                  De-identified health information is not subject to HIPAA restrictions and can be used freely for research,
                  analytics, product development, and publication. HIPAA provides two methods for de-identifying PHI: the
                  Safe Harbor method and the Expert Determination method.
                </p>
                <p className="text-slate-700 mb-4">
                  The Safe Harbor method requires the removal of 18 specific identifiers from health data. Once all 18
                  identifiers are removed and the covered entity has no actual knowledge that the information could be used
                  to identify the individual, the data is considered de-identified.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-slate-900 mb-3">The 18 HIPAA Safe Harbor identifiers to remove:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-slate-700 text-sm">
                    <span>1. Names</span>
                    <span>2. Geographic data smaller than state</span>
                    <span>3. Dates (except year) including birth, death, admission</span>
                    <span>4. Phone numbers</span>
                    <span>5. Fax numbers</span>
                    <span>6. Email addresses</span>
                    <span>7. Social Security numbers</span>
                    <span>8. Medical record numbers</span>
                    <span>9. Health plan beneficiary numbers</span>
                    <span>10. Account numbers</span>
                    <span>11. Certificate and license numbers</span>
                    <span>12. Vehicle identifiers and serial numbers</span>
                    <span>13. Device identifiers and serial numbers</span>
                    <span>14. Web URLs</span>
                    <span>15. IP addresses</span>
                    <span>16. Biometric identifiers (finger and voice prints)</span>
                    <span>17. Full-face photographs</span>
                    <span>18. Any other unique identifying numbers</span>
                  </div>
                </div>
              </section>

              <section id="state-health-laws">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">State Health Privacy Laws: Often Stricter Than HIPAA</h2>
                <p className="text-slate-700 mb-4">
                  HIPAA sets a federal floor for health privacy. Many states have enacted health privacy laws that are
                  significantly stricter. When state law provides stronger protections than HIPAA, the state law prevails.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">State Law</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Scope</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Key Distinction from HIPAA</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">California CMIA</td>
                        <td className="border border-slate-200 px-4 py-3">Providers, health plans, contractors, and potentially health apps</td>
                        <td className="border border-slate-200 px-4 py-3">Broader entity coverage; penalties up to $250,000 per violation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Washington My Health MY Data Act</td>
                        <td className="border border-slate-200 px-4 py-3">Any entity collecting health data from WA residents</td>
                        <td className="border border-slate-200 px-4 py-3">Applies beyond covered entities; includes consumer health data not in HIPAA</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Nevada Senate Bill 370</td>
                        <td className="border border-slate-200 px-4 py-3">Operators of websites and online services</td>
                        <td className="border border-slate-200 px-4 py-3">Requires consent before selling covered information including health data</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">New York SHIELD Act</td>
                        <td className="border border-slate-200 px-4 py-3">Businesses that own or license New York resident data</td>
                        <td className="border border-slate-200 px-4 py-3">Health data is a "special category" with enhanced breach notification requirements</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="health-app-exemptions">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Health App Exemptions: Most Apps Are Not Covered by HIPAA</h2>
                <p className="text-slate-700 mb-4">
                  This surprises many health app founders: most consumer health apps are not subject to HIPAA. HIPAA applies
                  to covered entities (healthcare providers, health plans, clearinghouses) and their business associates.
                  A fitness app, mental wellness app, or symptom tracker that collects health data directly from consumers
                  and has no relationship with a covered entity is generally not a HIPAA covered entity or business associate.
                </p>
                <p className="text-slate-700 mb-4">
                  However, not being subject to HIPAA does not mean health app companies have no privacy obligations. Several
                  other frameworks apply:
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>FTC Act Section 5:</strong> The FTC has authority to act against health apps that engage in unfair or deceptive practices related to health data. This includes sharing health data with advertisers without disclosure and making misleading security claims.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>FTC Health Breach Notification Rule:</strong> Consumer health apps that experience breaches of unsecured personally identifiable health information must notify affected users and the FTC.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>California CMIA:</strong> California has interpreted CMIA broadly to potentially cover some health apps. Apps that "provide health care" as broadly defined may fall under CMIA even if not under HIPAA.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Washington My Health MY Data Act:</strong> Applies to any entity that collects consumer health data from Washington State residents, regardless of HIPAA status.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>GDPR:</strong> Health data is special category data under GDPR Article 9. If your app has EU users, you need explicit consent to process health data and a comprehensive privacy policy.</span></li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    In 2023, the FTC took action against several mental health apps including BetterHelp for sharing user
                    health information with advertising platforms like Facebook and Snapchat without adequate disclosure.
                    BetterHelp agreed to pay $7.8 million in refunds to consumers. Health app companies must be extremely
                    careful about how they use health data for advertising purposes, regardless of HIPAA status.
                  </p>
                </div>
              </section>

              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">5 Common HIPAA Privacy Policy Mistakes</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Confusing the Notice of Privacy Practices with a website privacy policy",
                      description: "Healthcare providers frequently publish only their HIPAA Notice of Privacy Practices and believe this satisfies their website privacy policy obligation. The NPP covers clinical PHI only. A separate website privacy policy is needed for cookies, analytics, online appointment forms, contact forms, and website visitor data. Both documents are required.",
                    },
                    {
                      title: "Health apps incorrectly claiming HIPAA compliance",
                      description: "Many consumer health apps claim to be HIPAA compliant as a marketing tactic even when HIPAA does not legally apply to them. Making false HIPAA compliance claims can trigger FTC enforcement for deceptive practices. Only say you are HIPAA compliant if you are actually a covered entity or business associate with documented compliance programs.",
                    },
                    {
                      title: "Using Google Analytics on a healthcare provider website without assessment",
                      description: "Following HHS 2022 guidance, using standard Google Analytics or Meta Pixel on healthcare provider websites may transmit PHI (IP addresses combined with health-seeking behavior) to third parties in violation of HIPAA. Healthcare websites must audit their tracking technologies and either remove them, implement server-side proxying, or obtain specific patient authorization.",
                    },
                    {
                      title: "Not signing Business Associate Agreements with technology vendors",
                      description: "Healthcare providers who use cloud services, email providers, EHR systems, or analytics platforms that may come into contact with PHI must have Business Associate Agreements with those vendors. Many providers use Google Workspace or Microsoft 365 for patient communications without executing the required BAA with those providers.",
                    },
                    {
                      title: "Failing to keep the Notice of Privacy Practices current",
                      description: "HIPAA requires covered entities to update their NPP whenever there is a material change to their privacy practices and to make the revised NPP available to patients. Many providers have NPPs that are years out of date, particularly if they have added telehealth services, changed EHR systems, or begun sharing data with health information exchanges.",
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Create a HIPAA-Compliant Privacy Policy</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Determine your HIPAA status", description: "Confirm whether you are a covered entity (healthcare provider, health plan, clearinghouse) or a business associate. If you are a health app operating independently, identify which non-HIPAA laws apply to you (FTC, CMIA, state laws)." },
                    { step: "2", title: "Draft your Notice of Privacy Practices (covered entities only)", description: "If you are a covered entity, create a HIPAA-compliant NPP that covers permitted uses and disclosures of PHI, patient rights (access, amendment, restriction, accounting), how to file a complaint, and the effective date. Have a healthcare attorney review it." },
                    { step: "3", title: "Create a separate website privacy policy", description: "Write a standard website privacy policy covering cookies, analytics tools, contact forms, appointment scheduling data, and any online health questionnaires. This is separate from the NPP and covers website visitor data only." },
                    { step: "4", title: "Audit your tracking technologies", description: "Review every third-party script, pixel, and analytics tool on your website. Assess whether any of them might transmit data that could constitute PHI given the HHS 2022 tracking guidance. Remove or replace tools that present HIPAA risk." },
                    { step: "5", title: "Execute Business Associate Agreements", description: "Identify every vendor that processes or could access PHI on your behalf. Execute BAAs with each. This includes cloud storage providers, email services used for patient communication, telehealth platforms, and EHR vendors." },
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
                    { q: "What is the difference between a HIPAA Notice of Privacy Practices and a website privacy policy?", a: "A HIPAA Notice of Privacy Practices (NPP) is a federally mandated document for covered entities that explains how PHI in clinical records may be used. A website privacy policy covers website visitor data (cookies, analytics, forms). Healthcare providers need both documents, and they should be clearly separate." },
                    { q: "Who must comply with HIPAA?", a: "HIPAA applies to covered entities (healthcare providers, health plans, clearinghouses that transmit health data electronically) and their business associates (billing companies, EHR vendors, cloud providers that handle PHI). Business associates must sign Business Associate Agreements and are directly liable under HIPAA." },
                    { q: "Does my health app need to comply with HIPAA?", a: "Not automatically. Consumer health apps that operate independently of a covered entity are generally not subject to HIPAA. However, they remain subject to FTC enforcement, the FTC Health Breach Notification Rule, California CMIA, Washington's My Health MY Data Act, and GDPR for EU users." },
                    { q: "What is HIPAA Safe Harbor de-identification?", a: "HIPAA Safe Harbor de-identification requires removing 18 specific identifiers from health data (names, dates, phone numbers, email addresses, IP addresses, and others). Once removed, the data is no longer PHI and can be used freely for research and analytics without HIPAA restrictions." },
                    { q: "What is California's Confidentiality of Medical Information Act (CMIA)?", a: "California's CMIA provides stronger health privacy protections than HIPAA and may apply to some health apps and digital health companies that are not covered by HIPAA. CMIA violations can result in civil penalties of up to $250,000 per violation plus actual damages." },
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
                <h2 className="text-2xl font-bold mb-3">Generate Your Healthcare Privacy Policy</h2>
                <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                  Create a website privacy policy for your healthcare organization or health app in minutes.
                  Our generator covers HIPAA-relevant disclosures, health data categories, and state law requirements.
                  Note: always have a healthcare attorney review your HIPAA Notice of Privacy Practices.
                </p>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/">Generate Free Privacy Policy</Link>
                </Button>
              </section>

              <section id="resources">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Privacy Policy for Nonprofit", href: "/privacy-policy-for-nonprofit" },
                    { title: "GDPR Privacy Policy Template", href: "/gdpr-privacy-policy-template" },
                    { title: "CCPA Privacy Policy Example", href: "/ccpa-privacy-policy-example" },
                    { title: "Privacy Policy for Mobile App", href: "/android-app-privacy-policy-template" },
                    { title: "Cookie Policy for Websites", href: "/cookie-policy-for-websites" },
                    { title: "Privacy Policy Fines and Penalties", href: "/privacy-policy-fines-and-penalties" },
                    { title: "CalOPPA Privacy Policy Template", href: "/caloppa-privacy-policy-template" },
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
