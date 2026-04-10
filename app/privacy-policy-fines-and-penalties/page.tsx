import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  AlertTriangle,
  Ban,
  ChevronRight,
  FileText,
  DollarSign,
  Globe,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy Fines and Penalties: What Regulators Can Charge You (2026)",
  description:
    "Learn exactly how much regulators can fine you for not having a privacy policy or violating one. GDPR up to EUR 20M, CCPA up to $7,988 per violation, FTC enforcement. Real examples included.",
  keywords:
    "privacy policy fines, privacy policy penalties, gdpr fines no privacy policy, ccpa fines privacy policy, privacy law penalties",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-fines-and-penalties",
  },
  openGraph: {
    title: "Privacy Policy Fines and Penalties: What Regulators Can Charge You (2026)",
    description:
      "GDPR fines reach EUR 20M. CCPA fines hit $7,988 per intentional violation. See exactly what you risk by not having a compliant privacy policy.",
    url: "https://ultrafastutilities.com/privacy-policy-fines-and-penalties",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy Fines and Penalties" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy Fines and Penalties: What Regulators Can Charge You (2026)",
    description:
      "GDPR fines reach EUR 20M. CCPA fines hit $7,988 per intentional violation. See exactly what you risk.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "overview", title: "Fine Amounts at a Glance" },
  { id: "gdpr-fines", title: "GDPR Fines and Penalties" },
  { id: "ccpa-fines", title: "CCPA Fines and Penalties" },
  { id: "ftc-enforcement", title: "FTC Enforcement Actions" },
  { id: "australia-privacy-act", title: "Australia Privacy Act Penalties" },
  { id: "how-violations-are-discovered", title: "How Violations Are Discovered" },
  { id: "how-to-avoid-fines", title: "How to Avoid Fines" },
  { id: "common-mistakes", title: "5 Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the maximum GDPR fine for not having a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under GDPR, fines can reach up to EUR 20 million or 4% of your total annual global revenue, whichever is higher. The fine tier depends on which GDPR articles were violated. Not having a privacy policy at all typically falls under the higher tier of violations because it directly breaches Articles 13 and 14 on transparency.",
      },
    },
    {
      "@type": "Question",
      name: "Can the CCPA fine small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The CCPA applies to businesses that meet at least one of these thresholds: annual gross revenue over $25 million, buying or selling data of 100,000 or more consumers annually, or earning 50% or more of revenue from selling personal data. Smaller businesses may not fall under CCPA, but California's CPRA expanded these rules and other state laws may apply.",
      },
    },
    {
      "@type": "Question",
      name: "How do privacy regulators find out about violations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regulators learn about violations through consumer complaints, third-party audits, data breach notifications, investigative journalism, and their own proactive sweeps of websites. The FTC, ICO, and California AG all accept consumer complaints online. Automated tools now scan websites for missing or inadequate privacy policies.",
      },
    },
    {
      "@type": "Question",
      name: "Is a free privacy policy generator enough to avoid fines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A well-structured privacy policy generator can cover the legal requirements if it accurately reflects your actual data practices. The key is that the policy must be accurate, accessible, and up to date. A generic policy that does not match your actual data collection will not protect you from enforcement action.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I get a warning before a fine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under GDPR, supervisory authorities can issue warnings and reprimands before imposing fines for first-time, lower-severity violations. However, for serious violations or repeat offenders, fines can be imposed without a prior warning. Any contact from a regulator should be treated as urgent and acted on immediately.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy Fines and Penalties: What Regulators Can Charge You",
  description:
    "A detailed guide to privacy policy fines under GDPR, CCPA, FTC, and Australian law with real enforcement examples.",
  dateModified: "2026-03-31",
  author: { "@type": "Organization", name: "Ultra Fast Utilities" },
  publisher: { "@type": "Organization", name: "Ultra Fast Utilities" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy Fines and Penalties",
      item: "https://ultrafastutilities.com/privacy-policy-fines-and-penalties",
    },
  ],
};

export default function PrivacyPolicyFinesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <span className="text-slate-600">Privacy Policy Fines and Penalties</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <DollarSign className="w-3.5 h-3.5" />
                Enforcement Guide
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy Fines and{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Penalties
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Not having a privacy policy - or having one that does not accurately reflect your practices - can cost you millions. Here is exactly what regulators can fine you, with real enforcement examples from GDPR, CCPA, and the FTC.
              </p>
            </div>
          </div>
        </header>

        {/* Two-column layout */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">

          {/* TOC Sidebar */}
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

          {/* Article */}
          <article className="max-w-[720px] prose prose-slate">
            {/* Author + Trust Signals */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500 not-prose">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">AK</div>
                <span>Written by{" "}<span className="font-semibold text-slate-800">Anupam Kumar</span></span>
              </div>
              <span className="text-slate-300 hidden sm:inline">&middot;</span>
              <span>Last updated: April 2026</span>
              <span className="text-slate-300 hidden sm:inline">&middot;</span>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
            </div>

            {/* Featured snippet */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-8 not-prose">
              <h2 className="text-blue-900 font-bold text-lg mb-3">Quick Answer: Privacy Policy Fine Amounts</h2>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li><strong>GDPR:</strong> Up to EUR 20 million or 4% of annual global revenue (whichever is higher)</li>
                <li><strong>CCPA:</strong> Up to $2,500 per unintentional violation, $7,988 per intentional violation</li>
                <li><strong>FTC:</strong> Up to $51,744 per violation per day (civil penalties for repeat offenders)</li>
                <li><strong>Australia Privacy Act:</strong> Up to AUD 50 million for serious or repeated interference with privacy</li>
                <li><strong>UK GDPR:</strong> Up to GBP 17.5 million or 4% of annual global revenue</li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="overview">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Fine Amounts at a Glance</h2>
              <p className="text-slate-700 mb-4">
                Privacy law enforcement has accelerated dramatically since 2018. Regulators across the US, EU, and beyond now have dedicated enforcement divisions, automated website scanning tools, and direct consumer complaint pipelines. The assumption that small businesses are safe from enforcement no longer holds true.
              </p>
              <p className="text-slate-700 mb-4">
                Fines scale with the severity of the violation and in many jurisdictions with company revenue. Even a business doing $500,000 a year faces meaningful financial exposure under GDPR or CCPA. And because fines are often assessed per consumer per violation, the totals accumulate fast.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Regulator</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Jurisdiction</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Maximum Fine</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Who It Covers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">EU Data Protection Authorities</td>
                      <td className="border border-slate-200 p-3">EU / EEA</td>
                      <td className="border border-slate-200 p-3 font-semibold text-red-700">EUR 20M or 4% global revenue</td>
                      <td className="border border-slate-200 p-3">Any organization processing EU personal data</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">California AG / CPPA</td>
                      <td className="border border-slate-200 p-3">California, USA</td>
                      <td className="border border-slate-200 p-3 font-semibold text-red-700">$7,988 per intentional violation</td>
                      <td className="border border-slate-200 p-3">Qualifying California businesses</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">FTC</td>
                      <td className="border border-slate-200 p-3">United States</td>
                      <td className="border border-slate-200 p-3 font-semibold text-red-700">$51,744 per day (repeat violations)</td>
                      <td className="border border-slate-200 p-3">US businesses engaged in commerce</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">OAIC</td>
                      <td className="border border-slate-200 p-3">Australia</td>
                      <td className="border border-slate-200 p-3 font-semibold text-red-700">AUD 50 million</td>
                      <td className="border border-slate-200 p-3">Australian businesses with turnover over AUD 3M</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">ICO</td>
                      <td className="border border-slate-200 p-3">United Kingdom</td>
                      <td className="border border-slate-200 p-3 font-semibold text-red-700">GBP 17.5M or 4% global revenue</td>
                      <td className="border border-slate-200 p-3">Any organization processing UK personal data</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2 */}
            <section id="gdpr-fines">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">GDPR Fines and Penalties</h2>
              <p className="text-slate-700 mb-4">
                The General Data Protection Regulation (GDPR) introduced a two-tier fine structure that applies to any organization processing the personal data of people in the European Union, regardless of where the organization is based. An ecommerce store in Texas that ships to Germany is subject to GDPR.
              </p>
              <p className="text-slate-700 mb-4">
                Lower-tier violations carry fines up to EUR 10 million or 2% of global annual revenue. Higher-tier violations - which include failing to provide transparent privacy information to data subjects under Articles 13 and 14 - carry fines up to EUR 20 million or 4% of global annual revenue.
              </p>
              <p className="text-slate-700 mb-4">
                Not having a privacy policy, or having one that does not meet GDPR's transparency requirements, typically triggers the higher tier because it directly violates data subjects' rights to know how their data is being used.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">What GDPR Requires in Your Privacy Policy</h3>
              <p className="text-slate-700 mb-3">Under GDPR Articles 13 and 14, your privacy policy must include all of the following:</p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
                <li>Identity and contact details of the data controller</li>
                <li>Contact details of the Data Protection Officer (if you have one)</li>
                <li>Purposes and legal basis for each type of data processing</li>
                <li>Legitimate interests pursued where that is your legal basis</li>
                <li>Recipients or categories of recipients of personal data</li>
                <li>Details of any international data transfers and the safeguards in place</li>
                <li>Retention periods for each category of data</li>
                <li>All eight data subject rights (access, erasure, portability, objection, restriction, rectification, not to be subject to automated decision-making, right to complain)</li>
                <li>Right to withdraw consent at any time (if consent is your legal basis)</li>
                <li>Right to lodge a complaint with a supervisory authority</li>
                <li>Whether providing personal data is a statutory or contractual requirement</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">The largest GDPR fine to date was EUR 1.2 billion imposed on Meta in 2023 for unlawful data transfers to the US. But smaller businesses have also been fined - a German court fined a small business EUR 4,000 for not having a compliant cookie notice, and an Austrian hotel received a EUR 3,500 fine for inadequate CCTV disclosure.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Notable GDPR Enforcement Examples</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Company</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Fine Amount</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Meta (Ireland)</td>
                      <td className="border border-slate-200 p-3 font-semibold">EUR 1.2 billion</td>
                      <td className="border border-slate-200 p-3">Unlawful EU-US personal data transfers without adequate safeguards</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Amazon (Luxembourg)</td>
                      <td className="border border-slate-200 p-3 font-semibold">EUR 746 million</td>
                      <td className="border border-slate-200 p-3">Non-compliant advertising data processing and cookie practices</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Google (France - CNIL)</td>
                      <td className="border border-slate-200 p-3 font-semibold">EUR 150 million</td>
                      <td className="border border-slate-200 p-3">Cookie opt-out mechanism more difficult than opt-in</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">H&amp;M (Germany)</td>
                      <td className="border border-slate-200 p-3 font-semibold">EUR 35 million</td>
                      <td className="border border-slate-200 p-3">Unlawful and extensive collection of employee personal data</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">British Airways (ICO)</td>
                      <td className="border border-slate-200 p-3 font-semibold">GBP 20 million</td>
                      <td className="border border-slate-200 p-3">Data breach affecting 400,000 customers; inadequate security measures</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Marriott International</td>
                      <td className="border border-slate-200 p-3 font-semibold">GBP 18.4 million</td>
                      <td className="border border-slate-200 p-3">Failure to protect personal data of 339 million guests</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">GDPR Fine Calculation Factors</h3>
              <p className="text-slate-700 mb-4">
                GDPR supervisory authorities consider multiple factors when determining the exact fine amount. Understanding these can help you prioritize where to invest in compliance:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                <li>Nature, gravity, and duration of the infringement</li>
                <li>Intentional versus negligent character of the violation</li>
                <li>Actions taken to mitigate damage to data subjects</li>
                <li>Degree of responsibility of the controller or processor</li>
                <li>Any relevant previous infringements</li>
                <li>Degree of cooperation with the supervisory authority</li>
                <li>Categories of personal data affected (health, financial data attract higher fines)</li>
                <li>How the supervisory authority became aware of the infringement</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="ccpa-fines">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">CCPA Fines and Penalties</h2>
              <p className="text-slate-700 mb-4">
                The California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), is enforced by the California Privacy Protection Agency (CPPA) and the California Attorney General. The fine structure distinguishes between unintentional and intentional violations, and gives special treatment to violations involving minors.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Violation Type</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Maximum Fine Per Violation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Unintentional violation</td>
                      <td className="border border-slate-200 p-3 font-semibold text-red-700">$2,500</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Intentional violation</td>
                      <td className="border border-slate-200 p-3 font-semibold text-red-700">$7,988</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Violation involving data of minors (under 16)</td>
                      <td className="border border-slate-200 p-3 font-semibold text-red-700">$7,988 even if unintentional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-700 mb-4">
                "Per violation" in CCPA context means per consumer affected. If 10,000 California consumers visited your site and you failed to provide a compliant privacy policy or honor their opt-out requests, that is potentially 10,000 separate violations. In practice, regulators negotiate settlements, but the theoretical exposure is enormous for any business with significant California traffic.
              </p>
              <p className="text-slate-700 mb-4">
                The CCPA requires your privacy policy to disclose: categories of personal information collected in the past 12 months, purposes for collection, categories of sources, categories of third parties to whom you disclose data, whether you sell personal information, and the consumer rights available under California law.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">Sephora was fined $1.2 million by the California AG in 2022 under the CCPA for failing to disclose it was selling consumer data and not honoring opt-out requests submitted via the Global Privacy Control. This was one of the first major CCPA enforcement actions and signaled that the state is actively monitoring compliance.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Which Businesses Must Comply with CCPA</h3>
              <p className="text-slate-700 mb-3">The CCPA applies to for-profit businesses doing business in California that meet at least one of these thresholds:</p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                <li>Annual gross revenue exceeding $25 million</li>
                <li>Annually buys, sells, or receives/shares for commercial purposes personal information of 100,000 or more California consumers or households</li>
                <li>Derives 50% or more of annual revenue from selling or sharing California consumers' personal information</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="ftc-enforcement">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">FTC Enforcement Actions</h2>
              <p className="text-slate-700 mb-4">
                The Federal Trade Commission does not enforce a single comprehensive federal privacy law in the US, but it does enforce privacy under Section 5 of the FTC Act, which prohibits unfair or deceptive trade practices. Publishing a privacy policy and then failing to honor it is a deceptive trade practice - and the FTC treats it seriously.
              </p>
              <p className="text-slate-700 mb-4">
                The FTC can seek injunctive relief, consent orders, and civil penalties of up to $51,744 per violation per day for violations of prior FTC orders. The FTC also enforces specific privacy statutes including COPPA (children's online privacy), GLBA (financial data), and its own Health Breach Notification Rule.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">FTC Deception Framework for Privacy Policies</h3>
              <p className="text-slate-700 mb-3">
                The FTC's approach is to evaluate whether a privacy policy is accurate relative to actual practices. Common deceptive claims the FTC has pursued include:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
                <li>Claiming data is not shared with third parties when it is</li>
                <li>Claiming data is anonymized when it can be re-identified</li>
                <li>Claiming users can opt out when the mechanism does not work</li>
                <li>Using vague language to obscure actual data collection practices</li>
                <li>Collecting more data than the policy discloses</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Recent FTC Privacy Enforcement Highlights</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
                <li><strong>Meta/Facebook (2019):</strong> $5 billion penalty for violations related to Cambridge Analytica and user data misuse</li>
                <li><strong>Google and YouTube (2019):</strong> $170 million for COPPA violations collecting children's data on YouTube</li>
                <li><strong>WW International (Weight Watchers, 2022):</strong> $1.5 million for collecting children's data via its Kurbo app without parental consent</li>
                <li><strong>Drizly (2023):</strong> 20-year security audit requirement plus executive personal liability after a data breach exposed 2.5 million consumers</li>
                <li><strong>BetterHelp (2023):</strong> $7.8 million for sharing sensitive mental health data with Facebook and Snapchat for advertising</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="australia-privacy-act">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Australia Privacy Act Penalties</h2>
              <p className="text-slate-700 mb-4">
                Australia's Privacy Act 1988 was significantly updated with the Privacy Legislation Amendment (Enhancing Online Privacy and Other Measures) Act 2022. The maximum civil penalty for serious or repeated interferences with privacy was increased to AUD 50 million, or three times the value of any benefit obtained, or 30% of adjusted turnover for the relevant period - whichever is greatest.
              </p>
              <p className="text-slate-700 mb-4">
                The Office of the Australian Information Commissioner (OAIC) enforces the Privacy Act. Australian Privacy Principle 1 (APP 1) requires organizations to have a clearly expressed and up-to-date privacy policy, and APP 5 requires notification to individuals about data collection.
              </p>
              <p className="text-slate-700 mb-4">
                The Privacy Act applies to Australian government agencies and private sector organizations with annual turnover over AUD 3 million, as well as all health service providers, credit reporting bodies, and certain other categories regardless of turnover.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">The Medibank data breach in 2022 exposed sensitive health data of 9.7 million Australians. The OAIC launched a formal investigation, and the breach prompted Australia to increase maximum privacy penalties to AUD 50 million - up from the previous maximum of AUD 2.2 million. The case is still ongoing as of 2026.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="how-violations-are-discovered">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How Privacy Violations Are Discovered</h2>
              <p className="text-slate-700 mb-4">
                Understanding how regulators discover violations helps you appreciate why compliance cannot be treated as optional, even for smaller businesses.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Discovery Method</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">How Common</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Consumer complaints</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Very common</td>
                      <td className="border border-slate-200 p-3">All major regulators have online complaint forms; unhappy customers use them</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Data breach notifications</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Common</td>
                      <td className="border border-slate-200 p-3">Breaches trigger regulatory review of all privacy practices, not just security</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Automated website sweeps</td>
                      <td className="border border-slate-200 p-3 text-yellow-700 font-medium">Increasing</td>
                      <td className="border border-slate-200 p-3">EU DPAs use automated tools to scan for missing or inadequate policies</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Investigative journalism</td>
                      <td className="border border-slate-200 p-3 text-yellow-700 font-medium">Occasional</td>
                      <td className="border border-slate-200 p-3">News reports about privacy issues often trigger formal enforcement action</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Competitor reports</td>
                      <td className="border border-slate-200 p-3 text-slate-600 font-medium">Less common</td>
                      <td className="border border-slate-200 p-3">Competitors occasionally file complaints about non-compliant rivals</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Privacy advocacy audits</td>
                      <td className="border border-slate-200 p-3 text-yellow-700 font-medium">Growing</td>
                      <td className="border border-slate-200 p-3">Groups like noyb (None of Your Business) file systematic GDPR complaints</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section id="how-to-avoid-fines">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How to Avoid Privacy Policy Fines</h2>
              <p className="text-slate-700 mb-4">
                Avoiding fines comes down to three pillars: having an accurate privacy policy that reflects your actual data practices, keeping it updated when those practices change, and making it genuinely accessible to users.
              </p>
              <div className="space-y-4 mb-6 not-prose">
                {[
                  {
                    step: "1",
                    title: "Audit what data you actually collect",
                    desc: "List every form, analytics tool, advertising pixel, third-party script, and integration on your site. Each one likely collects data that must be disclosed in your privacy policy.",
                  },
                  {
                    step: "2",
                    title: "Generate a policy that matches your real practices",
                    desc: "Use a generator that asks specific questions about your actual data practices. A generic template that does not reflect reality provides no legal protection - it creates additional exposure as a deceptive document.",
                  },
                  {
                    step: "3",
                    title: "Post it prominently in the right places",
                    desc: "Link your privacy policy in your website footer, in account registration forms, at checkout, in app onboarding flows, and anywhere you collect personal data. GDPR requires it to be 'easily accessible.'",
                  },
                  {
                    step: "4",
                    title: "Update it when your practices change",
                    desc: "Adding a new analytics tool, launching email marketing, integrating a new payment processor, or sharing data with a new partner all require privacy policy updates before the change goes live.",
                  },
                  {
                    step: "5",
                    title: "Build processes to honor the rights you disclose",
                    desc: "If your policy says users can request data deletion, access, or portability, you must have an actual process to handle those requests within the timeframes required by applicable law.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 Common Mistakes */}
            <section id="common-mistakes">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5 Common Mistakes That Lead to Privacy Fines</h2>
              <div className="space-y-3 mb-8 not-prose">
                {[
                  {
                    title: "Using a template that does not match your actual data practices",
                    desc: "Regulators compare what your policy says to what your site actually does. A mismatch between the two is treated as a deceptive practice under FTC rules and a transparency violation under GDPR.",
                  },
                  {
                    title: "Not updating the policy after adding new tools or integrations",
                    desc: "Installing Google Analytics 4, adding Facebook Pixel, or connecting Mailchimp after your policy was written creates immediate non-compliance. Your policy must reflect your current practices.",
                  },
                  {
                    title: "Burying the privacy policy link where users cannot find it",
                    desc: "GDPR requires privacy information to be 'easily accessible' and 'in an intelligible and easily accessible form.' A link hidden in a tertiary page menu or only in an app settings screen does not meet this standard.",
                  },
                  {
                    title: "Having a data rights section with no actual process to honor requests",
                    desc: "Stating that users can request data deletion or access their data is meaningless without a working process. Regulators will test whether your disclosed rights actually function when they investigate.",
                  },
                  {
                    title: "Assuming the business is too small to be a target",
                    desc: "While regulators tend to prioritize large violators for headline-generating enforcement, small businesses do get fined, particularly after data breaches, after consumer complaints, or when they operate in high-risk sectors like health or finance.",
                  },
                ].map((mistake, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <Ban className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900 text-sm">{mistake.title}</p>
                      <p className="text-red-700 text-sm mt-1">{mistake.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {faqSchema.mainEntity.map((item, i) => (
                  <details key={i} className="border border-slate-200 rounded-lg">
                    <summary className="p-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                      {item.name}
                      <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 text-slate-700 text-sm leading-relaxed">
                      {item.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white not-prose">
              <h2 className="text-2xl font-bold mb-3">Generate a Compliant Privacy Policy in Under 2 Minutes</h2>
              <p className="text-slate-300 mb-6">
                Do not risk fines. Create a privacy policy that accurately reflects your data practices and meets GDPR, CCPA, FTC, and other regulatory requirements automatically.
              </p>
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold">
                <Link href="/">Generate Your Privacy Policy Free</Link>
              </Button>
            </section>

            {/* Resource links */}
            <section className="mt-10 not-prose">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Related Resources</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { href: "/gdpr-privacy-policy", label: "GDPR Privacy Policy Requirements" },
                  { href: "/ccpa-privacy-policy", label: "CCPA Privacy Policy Requirements" },
                  { href: "/privacy-policy-for-website", label: "Privacy Policy for Websites" },
                  { href: "/privacy-policy-generator", label: "Free Privacy Policy Generator" },
                  { href: "/privacy-policy-for-ecommerce", label: "Ecommerce Privacy Policy" },
                  { href: "/do-i-need-a-privacy-policy", label: "Do I Need a Privacy Policy?" },
                  { href: "/privacy-policy-for-small-business", label: "Privacy Policy for Small Business" },
                  { href: "/how-to-write-a-privacy-policy", label: "How to Write a Privacy Policy" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    {link.label}
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
