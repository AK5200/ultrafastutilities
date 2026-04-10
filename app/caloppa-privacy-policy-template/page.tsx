import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Scale,
  Users,
  Clock,
  AlertTriangle,
  Eye,
  RefreshCw,
  Ban,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "CalOPPA Privacy Policy Template (California Online Privacy) (2026) | ultrafastutilities",
  description: "Free CalOPPA-compliant privacy policy template. CalOPPA applies to any website collecting data from California residents. Covers Do Not Track signals, conspicuous posting, and update requirements.",
  keywords: "caloppa privacy policy template, caloppa compliance, california online privacy protection act, caloppa requirements, caloppa template",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/caloppa-privacy-policy-template",
  },
  openGraph: {
    title: "CalOPPA Privacy Policy Template (California Online Privacy) (2026) | ultrafastutilities",
    description: "Free CalOPPA-compliant privacy policy template. CalOPPA applies to any website collecting data from California residents. Covers Do Not Track signals, conspicuous posting, and update requirements.",
    url: "https://ultrafastutilities.com/caloppa-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CalOPPA Privacy Policy Template (California Online Privacy) (2026) | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalOPPA Privacy Policy Template (California Online Privacy) (2026) | ultrafastutilities",
    description: "Free CalOPPA-compliant privacy policy template. CalOPPA applies to any website collecting data from California residents. Covers Do Not Track signals, conspicuous posting, and update requirements.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "caloppa-overview", title: "CalOPPA Overview" },
  { id: "requirements-checklist", title: "Requirements Checklist" },
  { id: "template-preview", title: "Template Preview" },
  { id: "do-not-track", title: "Do Not Track Disclosure" },
  { id: "conspicuous-posting", title: "Conspicuous Posting" },
  { id: "caloppa-vs-ccpa-cpra", title: "CalOPPA vs CCPA vs CPRA" },
  { id: "who-must-comply", title: "Who Must Comply" },
  { id: "update-requirements", title: "Update Requirements" },
  { id: "third-party-disclosure", title: "Third-Party Disclosure" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to", title: "How to Create Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function CalOPPAPrivacyPolicyTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "CalOPPA Privacy Policy Template (California Online Privacy) (2026) | ultrafastutilities",
            description: "Free CalOPPA-compliant privacy policy template. CalOPPA applies to any website collecting data from California residents. Covers Do Not Track signals, conspicuous posting, and update requirements.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-04-11",
            dateModified: "2026-04-11",
            publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
              { "@type": "ListItem", position: 2, name: "CalOPPA Privacy Policy Template", item: "https://ultrafastutilities.com/caloppa-privacy-policy-template" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Create a CalOPPA-Compliant Privacy Policy",
            description: "Follow these steps to create a privacy policy that meets CalOPPA requirements for websites collecting data from California residents.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Identify all data you collect", text: "List every category of personally identifiable information (PII) your website or app collects from visitors, including names, emails, IP addresses, and browsing behavior." },
              { "@type": "HowToStep", position: 2, name: "Document third-party sharing", text: "Identify all third parties who receive user data, including analytics providers, advertising networks, and payment processors." },
              { "@type": "HowToStep", position: 3, name: "Draft your Do Not Track disclosure", text: "Clearly state how your website responds to Do Not Track (DNT) browser signals, whether you honor them or not." },
              { "@type": "HowToStep", position: 4, name: "Ensure conspicuous posting", text: "Place a visible link to your privacy policy on your homepage, using the word Privacy in the link text, and make it accessible from every page." },
              { "@type": "HowToStep", position: 5, name: "Add your update notification process", text: "Describe how you will notify users of material changes to the policy, including the effective date and method of notification." },
              { "@type": "HowToStep", position: 6, name: "Review and publish", text: "Review the policy for completeness against CalOPPA requirements, then publish and set a reminder to review it at least annually." },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is CalOPPA and who does it apply to?",
                acceptedAnswer: { "@type": "Answer", text: "CalOPPA (California Online Privacy Protection Act) is a California state law that requires any website or online service collecting personally identifiable information from California residents to post a conspicuous privacy policy. It applies to any commercial website or app, regardless of where the business is located, as long as it collects data from California users." },
              },
              {
                "@type": "Question",
                name: "How is CalOPPA different from CCPA?",
                acceptedAnswer: { "@type": "Answer", text: "CalOPPA focuses on transparency, requiring websites to post a privacy policy and disclose data practices. CCPA goes further by granting California consumers specific rights like the right to know, delete, and opt out of the sale of their personal information. CalOPPA applies to all websites collecting data from Californians, while CCPA has revenue and data volume thresholds." },
              },
              {
                "@type": "Question",
                name: "What must a CalOPPA privacy policy include?",
                acceptedAnswer: { "@type": "Answer", text: "A CalOPPA-compliant privacy policy must include: categories of PII collected, categories of third parties with whom data is shared, a description of the process for users to review and request changes to their data, the effective date and how users are notified of changes, and a disclosure about how the site responds to Do Not Track signals." },
              },
              {
                "@type": "Question",
                name: "What does conspicuous posting mean under CalOPPA?",
                acceptedAnswer: { "@type": "Answer", text: "Conspicuous posting means your privacy policy link must be prominently displayed on your homepage. The link must contain the word Privacy, use a larger font or contrasting color, or be otherwise distinguishable from surrounding text. It should be accessible within one click from any page on your website." },
              },
              {
                "@type": "Question",
                name: "Do I need to honor Do Not Track signals under CalOPPA?",
                acceptedAnswer: { "@type": "Answer", text: "CalOPPA does not require you to honor Do Not Track (DNT) browser signals. However, it does require you to disclose in your privacy policy how your website responds to DNT signals. You must state whether you honor them or not, and whether third parties on your site collect tracking data." },
              },
              {
                "@type": "Question",
                name: "What are the penalties for CalOPPA non-compliance?",
                acceptedAnswer: { "@type": "Answer", text: "CalOPPA is enforced by the California Attorney General. Non-compliant operators receive a 30-day notice to fix violations. If the violation is not corrected, fines can reach up to $2,500 per individual violation. Since each user visit can count as a separate violation, penalties can accumulate rapidly." },
              },
              {
                "@type": "Question",
                name: "How often should I update my CalOPPA privacy policy?",
                acceptedAnswer: { "@type": "Answer", text: "You should update your privacy policy whenever your data practices change, and review it at least annually. CalOPPA requires you to include the effective date and describe how users will be notified of material changes. Regular reviews ensure ongoing compliance as your website evolves." },
              },
            ],
          }),
        }}
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
              <span className="text-slate-600">CalOPPA Privacy Policy Template</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Scale className="w-3.5 h-3.5" />
                California Online Privacy
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                CalOPPA Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Create a CalOPPA-compliant privacy policy that meets California
                Online Privacy Protection Act requirements. Covers Do Not Track
                signals, conspicuous posting, and update notifications.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for site owners and developers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/ccpa-privacy-policy-example"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                CCPA Privacy Policy Example
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                GDPR Privacy Policy Template
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Policy Generator
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </header>

        {/* Content Area with Sidebar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Sticky Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />

                {/* Sidebar CTA */}
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
                  <span>10 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: CalOPPA Overview */}
              <section id="caloppa-overview" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      CalOPPA Overview
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    The California Online Privacy Protection Act (CalOPPA) was
                    the first state law in the United States to require commercial
                    websites and online services to post a privacy policy. Enacted
                    in 2003 and amended in 2013, CalOPPA applies to any operator
                    of a commercial website or online service that collects
                    personally identifiable information (PII) from California
                    residents, regardless of where the business is located.
                  </p>

                  <div className="mt-6 rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
                    <div className="flex gap-3">
                      <Scale className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        CalOPPA was the first privacy law of its kind in the
                        United States. Because California has the largest state
                        economy, CalOPPA effectively set a national baseline for
                        online privacy policy requirements before CCPA and CPRA
                        were introduced.
                      </div>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Unlike{" "}
                    <Link
                      href="/ccpa-privacy-policy-example"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      CCPA
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    which has revenue and data volume thresholds, CalOPPA applies
                    broadly to any website or app collecting data from
                    Californians. This makes it one of the most widely applicable
                    privacy laws for online businesses.
                  </p>

                  <div className="mt-6 rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
                    <div className="flex gap-3">
                      <Scale className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        CalOPPA was amended in 2013 specifically to address Do
                        Not Track (DNT) browser signals. The amendment requires
                        every covered website to disclose how it responds to DNT
                        requests, making California the first jurisdiction to
                        legislate around DNT technology.
                      </div>
                    </div>
                  </div>

                  {/* Mini-FAQ 1 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">
                      Is CalOPPA still relevant now that CCPA exists?
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Yes. CalOPPA and CCPA serve different purposes. CalOPPA
                      requires you to post a privacy policy and has no revenue
                      threshold, meaning it applies to far more businesses than
                      CCPA. Even if you are not subject to CCPA, you almost
                      certainly need to comply with CalOPPA if California
                      residents visit your website.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Requirements Checklist */}
              <section id="requirements-checklist" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Requirements Checklist
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every CalOPPA-compliant privacy policy must address these
                      items.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Categories of PII Collected
                      </h3>
                      <p className="text-slate-600">
                        List every type of personally identifiable information
                        you collect (names, email addresses, phone numbers, IP
                        addresses, browsing data, etc.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Third-Party Sharing Categories
                      </h3>
                      <p className="text-slate-600">
                        Disclose the categories of third parties with whom you
                        share PII (analytics providers, advertising networks,
                        payment processors, etc.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Review and Request Process
                      </h3>
                      <p className="text-slate-600">
                        Describe how users can review their PII and request
                        changes to inaccurate information
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Effective Date
                      </h3>
                      <p className="text-slate-600">
                        Include the date the privacy policy takes effect and how
                        you notify users of changes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Do Not Track Disclosure
                      </h3>
                      <p className="text-slate-600">
                        State how your website responds to Do Not Track browser
                        signals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-base leading-7">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Conspicuous Posting
                      </h3>
                      <p className="text-slate-600">
                        Place a visible &quot;Privacy&quot; link on your homepage that
                        links directly to your{" "}
                        <Link
                          href="/privacy-policy-for-websites"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          privacy policy
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Template Preview */}
              <section id="template-preview" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Template Preview
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Below is an example structure for a CalOPPA-compliant privacy
                    policy. This is for educational purposes and must be
                    customized to reflect your specific data practices. Use our{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      policy generator
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    to create a tailored version.
                  </p>

                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Privacy Policy (CalOPPA-Compliant Template)
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 mb-3">
                      Effective Date: [Date]
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">1. Information We Collect:</strong>{" "}
                          We collect the following categories of personally
                          identifiable information: [names, email addresses, IP
                          addresses, browsing data, payment information, etc.]
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">2. How We Use Your Information:</strong>{" "}
                          We use collected information for [service delivery,
                          communications, analytics, marketing, security, etc.]
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">3. Third-Party Sharing:</strong>{" "}
                          We share information with the following categories of
                          third parties: [analytics providers, advertising
                          networks, payment processors, hosting services, etc.]
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">4. Do Not Track:</strong>{" "}
                          [We honor / We do not currently honor] Do Not Track
                          browser signals. Third parties [may / do not] collect
                          tracking data on our website.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">5. Reviewing Your Information:</strong>{" "}
                          You may review the PII we hold about you and request
                          corrections by contacting us at [email/method].
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[7px]" />
                        <span>
                          <strong className="text-slate-800">6. Policy Changes:</strong>{" "}
                          We will notify you of material changes by [posting a
                          notice on our website / sending an email]. The updated
                          effective date will appear at the top of this policy.
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm text-slate-500 mt-4">
                      This preview covers the core structure. A complete policy
                      should also address data security, cookie use, and
                      children&apos;s privacy if applicable.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Do Not Track Disclosure */}
              <section id="do-not-track" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Do Not Track Disclosure
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    CalOPPA requires every covered website to disclose how it
                    responds to Do Not Track (DNT) browser signals. This was
                    added in the 2013 amendment and remains a unique requirement
                    among US privacy laws.
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-[15px]">
                          What DNT Signals Are
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-500 mt-1">
                          Do Not Track is a browser setting that sends a signal
                          to websites requesting they stop tracking the user.
                          Most modern browsers support DNT, though not all
                          websites honor it.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-[15px]">
                          Your Disclosure Options
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-500 mt-1">
                          You can state that you honor DNT signals, that you do
                          not honor DNT signals, or that you have no position on
                          DNT. The key is that you must disclose your stance
                          clearly in your privacy policy.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-[15px]">
                          Third-Party Tracking Disclosure
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-500 mt-1">
                          You must also disclose whether third parties (such as
                          analytics or ad networks) collect tracking information
                          about your users across other websites when they visit
                          your site.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
                    <div className="flex gap-3">
                      <Scale className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        While CalOPPA requires disclosure about DNT signals, it
                        does not require you to actually honor them. Many major
                        websites disclose that they do not respond to DNT signals,
                        which is compliant as long as the disclosure is present in
                        the privacy policy.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Conspicuous Posting */}
              <section id="conspicuous-posting" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Conspicuous Posting
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    CalOPPA does not just require you to have a privacy policy. It
                    requires that the policy be &quot;conspicuously posted.&quot; This
                    means the link must be easy to find and clearly labeled.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        label: "Use the word Privacy",
                        text: "The link text must contain the word \"Privacy\" (e.g., \"Privacy Policy\" or \"Your Privacy Rights\")",
                      },
                      {
                        label: "Homepage placement",
                        text: "The link must appear on your website's homepage, typically in the footer",
                      },
                      {
                        label: "One-click access",
                        text: "Users must be able to reach your full privacy policy within one click from any page on your site",
                      },
                      {
                        label: "Visual distinction",
                        text: "The link should use a different font size, color, or style to stand out from surrounding text",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Mini-FAQ 2 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">
                      Does a footer link count as conspicuous?
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Yes, a footer link is generally considered compliant as
                      long as it appears on the homepage and every page, contains
                      the word &quot;Privacy,&quot; and is reasonably visible. Most
                      websites use a footer link as their primary method of
                      conspicuous posting. The California Attorney General has
                      accepted this approach in enforcement actions.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: CalOPPA vs CCPA vs CPRA */}
              <section id="caloppa-vs-ccpa-cpra" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      CalOPPA vs CCPA vs CPRA
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Understanding how California&apos;s three major privacy laws
                      differ and overlap.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 pr-4 font-semibold text-slate-900">Feature</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">CalOPPA</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">
                            <Link
                              href="/ccpa-privacy-policy-example"
                              className="hover:text-blue-700 transition-colors inline-flex items-center gap-0.5"
                            >
                              CCPA
                              <ArrowUpRight className="w-3 h-3 text-slate-400" />
                            </Link>
                          </th>
                          <th className="text-left py-3 pl-4 font-semibold text-slate-900">CPRA</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-600">
                        <tr className="border-b border-slate-100">
                          <td className="py-3 pr-4 font-medium text-slate-800">Enacted</td>
                          <td className="py-3 px-4">2003</td>
                          <td className="py-3 px-4">2018</td>
                          <td className="py-3 pl-4">2020</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 pr-4 font-medium text-slate-800">Scope</td>
                          <td className="py-3 px-4">Any website collecting PII from CA residents</td>
                          <td className="py-3 px-4">Businesses meeting revenue/data thresholds</td>
                          <td className="py-3 pl-4">Amends and expands CCPA</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 pr-4 font-medium text-slate-800">Primary focus</td>
                          <td className="py-3 px-4">Transparency (post a policy)</td>
                          <td className="py-3 px-4">Consumer rights (know, delete, opt out)</td>
                          <td className="py-3 pl-4">Expanded rights + enforcement agency</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 pr-4 font-medium text-slate-800">DNT disclosure</td>
                          <td className="py-3 px-4">Required</td>
                          <td className="py-3 px-4">Not required</td>
                          <td className="py-3 pl-4">Not required</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 pr-4 font-medium text-slate-800">Revenue threshold</td>
                          <td className="py-3 px-4">None</td>
                          <td className="py-3 px-4">$25M+ annual revenue</td>
                          <td className="py-3 pl-4">$25M+ annual revenue</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-medium text-slate-800">Enforcement</td>
                          <td className="py-3 px-4">CA Attorney General</td>
                          <td className="py-3 px-4">CA Attorney General</td>
                          <td className="py-3 pl-4">CA Privacy Protection Agency</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-500 mt-4">
                    Most businesses subject to CCPA or CPRA are also subject to
                    CalOPPA. Compliance with one does not automatically satisfy
                    the others, so check each law&apos;s requirements independently.
                    See our{" "}
                    <Link
                      href="/is-a-privacy-policy-legally-required"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      legal requirements guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    for more detail.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Who Must Comply */}
              <section id="who-must-comply" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Who Must Comply
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-3">
                    CalOPPA applies to any person or entity that:
                  </p>
                  <ul className="space-y-2 text-base leading-7 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                      Operates a commercial website or online service
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                      Collects personally identifiable information from
                      California residents
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                      Is located anywhere in the world (CalOPPA has no
                      geographic restriction on the operator)
                    </li>
                  </ul>

                  <div className="mt-6 flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-base leading-7 text-slate-700">
                      This includes individual bloggers, small business owners,
                      SaaS providers, ecommerce stores, mobile app developers,
                      and large corporations. If your website has any California
                      visitors and collects any PII (including through cookies or
                      analytics), CalOPPA applies to you.
                    </p>
                  </div>

                  <p className="text-sm text-slate-500 mt-4">
                    Not sure if a privacy policy is{" "}
                    <Link
                      href="/is-a-privacy-policy-legally-required"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      legally required
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    for your situation? Our guide covers the key scenarios.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: Update Requirements */}
              <section id="update-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Update Requirements
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    CalOPPA requires your privacy policy to include an effective
                    date and a description of how you will notify users of
                    material changes. Learn more in our guide on{" "}
                    <Link
                      href="/how-often-should-you-update-your-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      how often to update your privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <RefreshCw className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-[15px]">
                          Effective Date Required
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-500 mt-1">
                          Every CalOPPA-compliant policy must display its
                          effective date. Update this date each time you make
                          material changes to the policy.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-[15px]">
                          Change Notification Process
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-500 mt-1">
                          Describe how users will be informed of changes. Common
                          methods include posting a notice on your website,
                          sending an email to registered users, or displaying an
                          in-app notification.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-[15px]">
                          Annual Review Recommended
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-500 mt-1">
                          While CalOPPA does not mandate a specific review
                          frequency, best practice is to review your policy at
                          least once per year and whenever you add new data
                          collection methods or third-party services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 9: Third-Party Disclosure */}
              <section id="third-party-disclosure" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Third-Party Disclosure
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    CalOPPA requires you to disclose the categories of third
                    parties with whom you share personally identifiable
                    information. You do not need to name specific companies, but
                    you must describe the types of entities involved.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        label: "Analytics providers",
                        text: "Google Analytics, Mixpanel, Hotjar, and similar tools that track user behavior on your site",
                      },
                      {
                        label: "Advertising networks",
                        text: "Google Ads, Facebook/Meta Ads, and other platforms used for retargeting or campaign tracking",
                      },
                      {
                        label: "Payment processors",
                        text: "Stripe, PayPal, and other services that handle financial transactions",
                      },
                      {
                        label: "Hosting and infrastructure",
                        text: "Cloud providers, CDNs, and hosting services that may have access to server logs containing PII",
                      },
                      {
                        label: "Email service providers",
                        text: "Mailchimp, SendGrid, and similar platforms used for newsletters or transactional emails",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 10: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Mistakes to Avoid
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      title: "Missing Do Not Track disclosure",
                      desc: "Many websites forget the DNT disclosure entirely. Even if you do not honor DNT signals, you must state this clearly in your policy.",
                    },
                    {
                      title: "Hidden privacy policy link",
                      desc: "Burying the link deep in your site or using vague link text like \"Legal\" instead of \"Privacy Policy\" violates the conspicuous posting requirement.",
                    },
                    {
                      title: "No effective date",
                      desc: "CalOPPA specifically requires an effective date on your privacy policy. Omitting it is a straightforward compliance failure.",
                    },
                    {
                      title: "Using a generic template without customization",
                      desc: "Copying a privacy policy that does not reflect your actual data practices can be worse than having no policy at all, as it creates misleading disclosures.",
                    },
                    {
                      title: "Failing to update after adding new services",
                      desc: "Adding Google Analytics, a new payment processor, or email marketing without updating your third-party disclosure creates a gap in compliance.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 p-4 rounded-xl border border-red-100 bg-red-50/30"
                    >
                      <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">
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

              <hr className="border-slate-200/60 my-14" />

              {/* Section 11: How To */}
              <section id="how-to" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    11
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create Your CalOPPA Policy
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Identify all data you collect",
                      desc: "Audit every form, cookie, analytics tool, and third-party integration on your site. List every category of PII you collect from visitors.",
                    },
                    {
                      step: "2",
                      title: "Document third-party sharing",
                      desc: "Map out every third party that receives user data, whether directly or through embedded scripts and pixels.",
                    },
                    {
                      step: "3",
                      title: "Draft your Do Not Track disclosure",
                      desc: "Decide your stance on DNT signals and write a clear statement about how your website responds to them.",
                    },
                    {
                      step: "4",
                      title: "Ensure conspicuous posting",
                      desc: "Add a clearly labeled \"Privacy Policy\" link to your homepage footer and ensure it is accessible from every page.",
                    },
                    {
                      step: "5",
                      title: "Add your update notification process",
                      desc: "Include the effective date and describe how you will inform users when the policy changes.",
                    },
                    {
                      step: "6",
                      title: "Review and publish",
                      desc: "Check the policy against CalOPPA requirements, then publish and set a calendar reminder for annual review.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/80 hover:border-blue-200 hover:shadow-sm transition-all"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-[15px]">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-500 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 12: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    12
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      q: "What is CalOPPA and who does it apply to?",
                      a: "CalOPPA (California Online Privacy Protection Act) requires any commercial website or online service collecting personally identifiable information from California residents to post a conspicuous privacy policy. It applies regardless of where the business is located.",
                    },
                    {
                      q: "How is CalOPPA different from CCPA?",
                      a: "CalOPPA focuses on transparency by requiring websites to post a privacy policy. CCPA goes further by granting consumers specific rights (know, delete, opt out). CalOPPA has no revenue threshold, while CCPA applies only to businesses meeting certain size criteria.",
                    },
                    {
                      q: "What must a CalOPPA privacy policy include?",
                      a: "Categories of PII collected, categories of third parties with whom data is shared, the process for users to review and request changes to their data, an effective date, change notification process, and a Do Not Track disclosure.",
                    },
                    {
                      q: "What does conspicuous posting mean under CalOPPA?",
                      a: "Your privacy policy link must be prominently displayed on your homepage with the word \"Privacy\" in the link text. It should be accessible within one click from any page and visually distinct from surrounding text.",
                    },
                    {
                      q: "Do I need to honor Do Not Track signals?",
                      a: "CalOPPA does not require you to honor DNT signals, but you must disclose in your privacy policy how your site responds to them. You must also disclose whether third parties collect tracking data on your site.",
                    },
                    {
                      q: "What are the penalties for non-compliance?",
                      a: "The California Attorney General enforces CalOPPA. After a 30-day notice to fix violations, fines can reach $2,500 per individual violation. Because each user visit can be a separate violation, penalties can accumulate rapidly.",
                    },
                    {
                      q: "How often should I update my CalOPPA policy?",
                      a: "Update your policy whenever your data practices change and review it at least annually. CalOPPA requires an effective date and a description of how users will be notified of material changes.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="rounded-xl border border-slate-200/80 p-5">
                      <h3 className="font-semibold text-slate-900 text-sm">
                        {item.q}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 mt-2">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* CTA Section */}
              <section id="generate" className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <ShieldCheck className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your CalOPPA Privacy Policy
                    </h2>
                    <p className="mt-3 text-slate-300 text-base max-w-md mx-auto">
                      Create a customized, CalOPPA-compliant privacy policy for
                      your website or app in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-xl shadow-lg shadow-slate-900/20"
                      >
                        Generate CalOPPA Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-slate-400">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500" />
                      <span>Customized for your business</span>
                    </div>

                    <p className="text-xs text-slate-500 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted CalOPPA,{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-slate-400 hover:text-white transition-colors inline-flex items-center gap-0.5 underline underline-offset-2"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , and{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="font-medium text-slate-400 hover:text-white transition-colors inline-flex items-center gap-0.5 underline underline-offset-2"
                      >
                        CCPA
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Related Resources */}
              <section id="resources" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: Scale,
                      title: "CCPA Privacy Policy Example",
                      desc: "California consumer rights guide",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template",
                    },
                    {
                      href: "/coppa-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "COPPA Privacy Policy Template",
                      desc: "Children's privacy compliance",
                    },
                    {
                      href: "/is-a-privacy-policy-legally-required",
                      icon: Scale,
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "Legal requirements explained",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Website compliance guide",
                    },
                    {
                      href: "/how-to-write-a-privacy-policy",
                      icon: FileText,
                      title: "How to Write a Privacy Policy",
                      desc: "Step-by-step writing guide",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks of non-compliance",
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
