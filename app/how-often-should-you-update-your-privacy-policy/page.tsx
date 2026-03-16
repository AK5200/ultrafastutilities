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
  Clock,
  RefreshCw,
  Calendar,
  Scale,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "How Often Should You Update Your Privacy Policy? (2026) | ultrafastutilities",
  description:
    "GDPR and CCPA require your privacy policy to stay accurate. Learn how often to update it, the 10 triggers that require immediate changes, and what happens if your policy is outdated.",
  keywords:
    "how often should you update your privacy policy, privacy policy update frequency, when to update privacy policy, privacy policy annual review, GDPR privacy policy update, CCPA privacy policy update requirement, how often to review privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/how-often-should-you-update-your-privacy-policy",
  },
  openGraph: {
    title:
      "How Often Should You Update Your Privacy Policy? (2026) | ultrafastutilities",
    description:
      "GDPR and CCPA require your privacy policy to stay accurate. Learn how often to update it, the 10 triggers that require immediate changes, and what happens if your policy is outdated.",
    url: "https://ultrafastutilities.com/how-often-should-you-update-your-privacy-policy",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How Often Should You Update Your Privacy Policy | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Often Should You Update Your Privacy Policy? (2026)",
    description:
      "GDPR and CCPA require your privacy policy to stay accurate. Learn how often to update, the triggers that require immediate changes, and what happens if it is outdated.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should I update my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At minimum, review your privacy policy once per year. CCPA explicitly requires at least an annual update. Beyond that, you must update immediately whenever your data practices change: adding a new analytics tool, switching payment processors, collecting new data categories, or starting to share data with new third parties. An outdated privacy policy that does not reflect your actual practices is a GDPR transparency violation.",
      },
    },
    {
      "@type": "Question",
      name: "Does GDPR require me to update my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR does not specify a fixed update frequency, but Article 5 requires your privacy policy to accurately reflect your actual data processing at all times. This means any change to how you collect, use, store, or share personal data triggers a mandatory update. Failing to keep your policy accurate is a transparency violation under Article 5(1)(a), carrying fines of up to 20 million euros or 4% of global annual revenue.",
      },
    },
    {
      "@type": "Question",
      name: "Does CCPA require annual privacy policy updates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The California Consumer Privacy Act explicitly requires businesses to update their privacy policy at least once every 12 months. The policy must include the date it was last updated. Failing to update annually is itself a CCPA violation, separate from any accuracy issues with the content.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to notify users when I update my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For material changes, yes. GDPR requires you to inform users of significant changes to how their data is processed. Best practice is to send an email notification for major changes, display an in-app or on-site banner, and update the last modified date on the policy itself. For minor wording changes that do not affect how data is handled, updating the date is sufficient.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my privacy policy is outdated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An outdated privacy policy that does not accurately describe your current data practices is treated as a transparency violation under GDPR. This carries the same maximum fine as any other GDPR violation: 20 million euros or 4% of global annual revenue. Under CCPA, an outdated policy can result in penalties of $2,500 per unintentional violation or $7,500 per intentional violation. Beyond fines, an inaccurate policy undermines user trust and can void consent obtained under the old terms.",
      },
    },
    {
      "@type": "Question",
      name: "Can I just change the date on my privacy policy without updating the content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Changing only the date without reviewing and updating the actual content is both deceptive and non-compliant. If your data practices have changed since the policy was written but the content has not been updated to reflect those changes, the policy remains inaccurate regardless of the date shown. Regulators evaluate the accuracy of the content, not the freshness of the date stamp.",
      },
    },
    {
      "@type": "Question",
      name: "What is the easiest way to update my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest and most reliable method is to use a privacy policy generator. Instead of manually editing an old document and risking missing new requirements, you answer current questions about your actual data practices and the generator produces a fresh, accurate policy. This takes under five minutes and ensures every required section reflects your current situation, including any new tools, processors, or compliance requirements.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Update Your Privacy Policy",
  description:
    "Follow these seven steps to properly review and update your privacy policy so it accurately reflects your current data practices.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your current data practices against your policy",
      text: "Compare what your privacy policy says you collect, use, and share against what you actually do today. Check every analytics tool, payment processor, email service, and third-party integration currently active on your site or app.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify new tools and processors added since the last update",
      text: "List any new services you have added since your policy was last updated: new analytics platforms, marketing tools, customer support software, payment gateways, or advertising networks. Each one must be disclosed.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Check for new applicable privacy laws",
      text: "Review whether any new privacy regulations have taken effect since your last update. New state privacy laws in the US, updates to GDPR guidance, or expanded CCPA requirements may require additional disclosures in your policy.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Update all affected sections with accurate information",
      text: "Revise every section that no longer reflects your actual practices. Update data categories, processing purposes, third-party disclosures, retention periods, and user rights information as needed.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Update the last modified date",
      text: "Change the last updated date to reflect when the review was completed. This date should be visible to users, typically in the header or footer of the policy document.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Notify users of material changes",
      text: "For significant changes to how data is collected or used, notify users via email, in-app banner, or a prominent notice on your website. GDPR requires users to be informed of material changes to data processing.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Republish and schedule your next review",
      text: "Publish the updated policy, verify all links work correctly, and set a calendar reminder for your next annual review. Keep a copy of the previous version for your records.",
    },
  ],
};

const tocSections = [
  { id: "short-answer", title: "The Short Answer" },
  { id: "gdpr-requirements", title: "When GDPR Requires an Update" },
  { id: "ccpa-requirements", title: "When CCPA Requires an Update" },
  { id: "ten-triggers", title: "10 Triggers for Immediate Updates" },
  { id: "outdated-consequences", title: "What Happens If You Don't Update" },
  { id: "common-mistakes", title: "Common Update Mistakes" },
  { id: "how-to-update", title: "How to Update (7 Steps)" },
  { id: "easiest-way", title: "The Easiest Way to Update" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function HowOftenUpdatePrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How Often Should You Update Your Privacy Policy? (2026)",
            description:
              "GDPR and CCPA require your privacy policy to stay accurate. Learn how often to update it, the triggers that require immediate changes, and what happens if your policy is outdated.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-09",
            dateModified: "2026-03-16",
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
                name: "How Often Should You Update Your Privacy Policy?",
                item: "https://ultrafastutilities.com/how-often-should-you-update-your-privacy-policy",
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
                How Often to Update Your Privacy Policy
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <RefreshCw className="w-3.5 h-3.5" />
                Compliance Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                How Often Should You Update Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Privacy Policy?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                At minimum, once per year. CCPA explicitly requires annual
                updates. GDPR requires accuracy at all times. If your data
                practices have changed since you last updated, your policy is
                already non-compliant.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For website owners, app developers, and small business
                operators who already have a privacy policy.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/what-happens-without-a-privacy-policy"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <AlertTriangle className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                What Happens Without One
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                GDPR Template
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Regenerate My Policy
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
                    Policy outdated?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Regenerate a fresh one in 60 seconds
                  </p>
                  <Link href="/generate">
                    <Button
                      size="sm"
                      className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg"
                    >
                      Regenerate Policy
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
                  <strong>You should update your privacy policy at least once per year</strong>{" "}
                  and immediately whenever your data practices change. CCPA
                  explicitly requires annual updates. GDPR requires your policy
                  to be accurate at all times under Article 5. If you have added
                  a new analytics tool, changed payment processors, or started
                  collecting new data since your last update, your policy is
                  already non-compliant.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Most website owners create a privacy policy once and never look
                at it again. That is a compliance risk hiding in plain sight.
                Privacy laws do not just require you to have a policy. They
                require that policy to accurately describe what you are actually
                doing with personal data right now, not what you were doing when
                you first wrote it.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                Think about how much has changed since you last updated yours.
                Have you added Google Analytics 4? Switched email platforms?
                Started accepting payments through a new processor? Added a
                cookie consent banner? Each of these changes affects what your
                privacy policy should say, and if it does not say it, you are
                technically non-compliant.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly how often you should update, what
                triggers require immediate action, the specific GDPR and CCPA
                requirements, and the fastest way to bring an outdated policy
                back into compliance.
              </p>

              {/* Section 1: The Short Answer */}
              <section id="short-answer" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Short Answer: At Least Once Per Year
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The baseline standard across all major privacy frameworks is
                  an annual review. CCPA makes this explicit: your privacy
                  policy must be updated at least once every 12 months and must
                  display the date it was last updated.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  GDPR does not specify a calendar frequency, but its accuracy
                  requirements effectively demand more frequent updates. Under
                  GDPR Article 5, your policy must reflect your actual data
                  processing activities at all times. Any change to your
                  practices triggers a mandatory update, regardless of when
                  your last annual review happened.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  In practice, this means most active websites should be
                  updating their privacy policy more than once per year.
                  Technology stacks change, new tools get added, marketing
                  strategies evolve, and each change can affect what personal
                  data you collect and how you use it.
                </p>

                {/* Quick summary card */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">1x/year</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Minimum review frequency
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <RefreshCw className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">
                      Immediately
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      When practices change
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">CCPA</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Requires annual by law
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: GDPR Requirements */}
              <section id="gdpr-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  When GDPR Requires You to Update
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  GDPR takes an accuracy-first approach rather than a
                  calendar-based one. Article 5(1)(a) requires that personal
                  data be processed lawfully, fairly, and in a transparent
                  manner. Your privacy policy is the primary transparency
                  mechanism. If it is inaccurate, you are in violation.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Under Articles 13 and 14, you must disclose specific
                  information about your data processing: what you collect, why,
                  your legal basis, who receives it, how long you keep it, and
                  what rights users have. Any change to these details requires
                  an update to your policy.
                </p>

                {/* Did you know box 1 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        GDPR Article 13(3) specifically states: &quot;Where the
                        controller intends to further process the personal data
                        for a purpose other than that for which the personal data
                        were collected, the controller shall provide the data
                        subject prior to that further processing with information
                        on that other purpose.&quot; This means you must update
                        your policy before you start using data in a new way, not
                        after.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Specific GDPR Update Triggers
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>You start collecting a new category of personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>You add or change a third-party data processor (analytics, payments, email)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>You change your legal basis for processing (consent to legitimate interest or vice versa)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>You start transferring data internationally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>You change data retention periods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>You appoint or change your Data Protection Officer</span>
                  </li>
                </ul>
              </section>

              {/* Section 3: CCPA Requirements */}
              <section id="ccpa-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  When CCPA Requires You to Update
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  CCPA is more prescriptive than GDPR about timing. California
                  Civil Code Section 1798.130(a)(5) requires businesses to
                  update their privacy policy at least once every 12 months.
                  The policy must include the date it was last updated.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  This is not a suggestion. It is a statutory requirement. If
                  your privacy policy shows a &quot;last updated&quot; date that
                  is more than 12 months old, you are in violation of CCPA
                  regardless of whether your data practices have changed.
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
                        The CPRA (California Privacy Rights Act), which amended
                        and expanded CCPA, added new disclosure requirements
                        that took effect January 1, 2023. If your privacy policy
                        was written before that date and has not been updated to
                        include CPRA requirements (such as disclosing the use
                        of sensitive personal information), it is non-compliant
                        even if the content was otherwise accurate.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if nothing has changed in my data practices?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      You still need to review the policy annually and update
                      the &quot;last updated&quot; date to confirm the review
                      was completed. This demonstrates ongoing compliance even
                      if no substantive changes were needed.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does CCPA apply to my small business?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      CCPA applies to businesses that meet certain thresholds:
                      annual gross revenue over $25 million, buying/selling data
                      of 100,000+ California residents, or deriving 50%+ of
                      revenue from selling personal information. Even if you do
                      not meet these thresholds, CalOPPA still requires a
                      privacy policy for any commercial site with California
                      users.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: 10 Triggers */}
              <section id="ten-triggers" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  10 Triggers That Require an Immediate Update
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Beyond the annual review, these specific changes to your
                  website or business require you to update your privacy policy
                  right away.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[5%]">
                          #
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Trigger
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Why It Matters
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Laws Affected
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">1</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Added a new analytics tool
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          New third-party processor receiving user data must be
                          disclosed
                        </td>
                        <td className="px-4 py-3 text-slate-600">GDPR, CCPA</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">2</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Changed payment processor
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Financial data handling and processor details must be
                          updated
                        </td>
                        <td className="px-4 py-3 text-slate-600">GDPR, CCPA, PCI</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">3</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          New email marketing platform
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Email data processor and marketing consent details
                          changed
                        </td>
                        <td className="px-4 py-3 text-slate-600">GDPR, CAN-SPAM</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">4</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Started selling or sharing data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          CCPA requires &quot;Do Not Sell&quot; opt-out link and
                          disclosure
                        </td>
                        <td className="px-4 py-3 text-slate-600">CCPA, GDPR</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">5</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Changed data retention periods
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          GDPR requires specific retention disclosures per data
                          category
                        </td>
                        <td className="px-4 py-3 text-slate-600">GDPR</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">6</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Added new cookie types
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Cookie categories and consent mechanism must reflect
                          actual cookies
                        </td>
                        <td className="px-4 py-3 text-slate-600">GDPR, ePrivacy</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">7</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Expanded to international users
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          New privacy laws may now apply (GDPR, PIPEDA, LGPD)
                        </td>
                        <td className="px-4 py-3 text-slate-600">Multiple</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">8</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Added user account registration
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          New personal data categories (credentials, profile
                          data) now collected
                        </td>
                        <td className="px-4 py-3 text-slate-600">GDPR, CCPA</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">9</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Added features for children under 13
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          COPPA requirements apply, parental consent mechanisms
                          required
                        </td>
                        <td className="px-4 py-3 text-slate-600">COPPA, GDPR</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">10</td>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Changed hosting provider
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Data storage location and processor details must be
                          updated
                        </td>
                        <td className="px-4 py-3 text-slate-600">GDPR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-600 text-sm mt-4">
                  If any of these apply to you and your privacy policy has not
                  been updated to reflect the change, you are currently
                  non-compliant. The good news: bringing your policy up to date
                  is straightforward and can be done in minutes with a{" "}
                  <Link
                    href="/generate"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    privacy policy generator
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  .
                </p>
              </section>

              {/* Section 5: Consequences */}
              <section id="outdated-consequences" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Happens If You Don&apos;t Update
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  An outdated privacy policy is not a minor technicality. Under
                  GDPR, it is classified the same way as having an inaccurate
                  policy: a transparency violation under Article 5(1)(a). The
                  penalties are identical to any other GDPR breach.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      GDPR Maximum Fine
                    </p>
                    <p className="text-2xl font-bold text-red-700">
                      20 million euros
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      or 4% of global annual revenue, whichever is higher
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      CCPA Per-Violation Penalty
                    </p>
                    <p className="text-2xl font-bold text-red-700">$7,500</p>
                    <p className="text-xs text-red-600 mt-1">
                      per intentional violation, $2,500 per unintentional
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Beyond financial penalties, an outdated policy creates several
                  practical risks. Consent obtained under an outdated policy may
                  be invalid if your actual practices have changed since users
                  agreed to the terms. App stores and advertising partners may
                  reject or suspend your account if your policy does not match
                  your actual data handling. And users who discover the
                  discrepancy may file complaints with data protection
                  authorities.
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
                        EU data protection authorities issued more than 2.1
                        billion euros in GDPR fines in 2023 alone. A growing
                        portion of enforcement actions target transparency
                        violations, including policies that do not accurately
                        describe data processing activities. Enforcement is
                        expanding beyond large tech companies to include small
                        and medium businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Update Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Even when website owners do update their privacy policy, these
                  mistakes undermine the effort and leave compliance gaps.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Only changing the &quot;last updated&quot; date
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        This is the most common mistake. Updating the date
                        without reviewing and revising the content is cosmetic
                        and does nothing for compliance. Regulators evaluate the
                        accuracy of the substance, not the date shown. If your
                        policy says you use Stripe for payments but you switched
                        to PayPal six months ago, the date change does not fix
                        the inaccuracy.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Not notifying users of material changes
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        GDPR requires you to inform data subjects when you
                        change how their data is processed. Silently updating
                        your policy without notification can invalidate the
                        consent you previously obtained. For significant
                        changes, send an email or display a banner.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Forgetting third-party tool disclosures
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        This is the gap that catches most websites. You add
                        Hotjar for heatmaps, switch to ConvertKit for emails,
                        or add a live chat widget, each of these is a new data
                        processor. If your policy does not name them and
                        describe what data they receive, you are non-compliant.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Not keeping previous versions
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        If a user dispute or regulatory inquiry arises, you may
                        need to show what your policy said at the time of a
                        specific data processing event. Overwriting your old
                        policy without saving a copy eliminates your ability to
                        prove what users were informed of at that time.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Using vague language to avoid frequent updates
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Some businesses use deliberately vague language like
                        &quot;we may share data with partners&quot; to avoid
                        updating when they add new processors. GDPR Article 13
                        requires specific information about recipients, not
                        vague catch-all language. Regulators see through this
                        approach.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: How to Update */}
              <section id="how-to-update" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Update Your Privacy Policy (7 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Whether this is your annual review or a triggered update,
                  follow this process to ensure your policy is accurate and
                  complete.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit your current data practices against your policy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Open your current privacy policy side by side with your
                        actual website and tools. Compare what the policy says
                        you collect against what you actually collect. Check
                        every form, analytics tool, payment flow, and marketing
                        integration. Note every discrepancy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Identify new tools and processors since the last update
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        List every new service you have added: analytics
                        platforms, email marketing tools, CRM systems, customer
                        support chat, payment gateways, advertising pixels, or
                        hosting providers. Each one receives user data and must
                        be disclosed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Check for new applicable privacy laws
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Privacy law is evolving rapidly. Multiple US states have
                        enacted new privacy legislation since 2023. GDPR
                        enforcement guidance updates regularly. Check whether
                        any new requirements have taken effect that your policy
                        needs to address.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Update all affected sections with accurate information
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Revise every section where you found discrepancies.
                        Update data categories, processing purposes, third-party
                        disclosures, legal basis references, retention periods,
                        and user rights information. Make sure the language
                        describes what you do today, not what you did when the
                        policy was first written.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Update the &quot;last modified&quot; date
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Change the last updated date to reflect when the review
                        was completed. This date should be visible in the header
                        or footer of the policy document. CCPA specifically
                        requires this date to be displayed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Notify users of material changes
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        For significant changes to how data is collected or
                        used, inform your users. Send an email to your user
                        base, display a banner on your site, or use an in-app
                        notification. GDPR requires this for changes that affect
                        the legal basis or purpose of processing.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      7
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Republish and schedule the next review
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Publish the updated policy, verify all links work
                        correctly, and set a calendar reminder for your next
                        annual review. Save a copy of the previous version in
                        your records for future reference.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Easiest Way */}
              <section id="easiest-way" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Easiest Way to Update Your Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Manually editing an old privacy policy is tedious and
                  error-prone. You have to re-read the entire document, identify
                  what is outdated, figure out the correct replacement language,
                  and hope you did not miss anything. There is a faster way.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Instead of patching an old document, regenerate a fresh one.
                  A privacy policy generator asks you structured questions about
                  your current data practices and produces a completely new,
                  accurate policy based on your answers today. Every section
                  reflects your current tools, processors, data categories, and
                  compliance obligations.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  This approach is faster than manual editing, less likely to
                  miss changes, and produces a policy that is verified against
                  current GDPR, CCPA, and CalOPPA requirements. It takes under
                  five minutes.
                </p>

                {/* CTA */}
                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <RefreshCw className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Time to Update? Regenerate Instead.
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Answer a few questions about your current data practices
                        and get a fresh, accurate privacy policy in under 60
                        seconds. Every section reflects what you actually do
                        today.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Regenerate My Privacy Policy
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
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
                      How often should I update my privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      At minimum, once per year. CCPA requires annual updates
                      by law. Beyond the annual review, update immediately
                      whenever your data practices change: new tools, new data
                      categories, new processors, or new compliance
                      requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does GDPR require a specific update frequency?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      GDPR does not set a calendar frequency. Instead, it
                      requires your policy to be accurate at all times. This
                      effectively means you must update whenever anything
                      changes in your data collection, processing, sharing, or
                      retention practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need to notify users when my policy changes?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      For material changes (new data categories, new processors,
                      changed purposes), yes. GDPR requires notification. Best
                      practice is email for major changes and an on-site banner
                      for moderate ones. Minor wording changes only require
                      updating the date.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can I just update the date without changing content?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Only if you have actually reviewed the entire policy and
                      confirmed every section is still accurate. Updating the
                      date without reviewing content is cosmetic and does not
                      satisfy compliance requirements. Regulators evaluate
                      substance, not timestamps.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if my policy is more than a year old?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Under CCPA, you are already in violation. Under GDPR, you
                      may be in violation if your data practices have changed
                      in that time. Either way, an outdated policy signals to
                      both regulators and users that compliance is not a
                      priority. Update immediately.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is the fastest way to update my privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Use a privacy policy generator to regenerate a fresh
                      policy based on your current practices. Instead of
                      manually editing an old document section by section, you
                      answer structured questions and receive a complete,
                      current policy in minutes. This eliminates the risk of
                      missing outdated sections.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Should I keep old versions of my privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. If a regulatory inquiry or user dispute arises, you
                      may need to demonstrate what your policy said at a
                      specific point in time. Save a dated copy of each version
                      before publishing an update. A simple PDF or archived
                      HTML file is sufficient.
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
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      title: "Can I Copy Someone Else's Privacy Policy?",
                      desc: "Why copying creates both copyright and compliance risk",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      title: "CCPA Privacy Policy Example",
                      desc: "What a compliant California privacy disclosure looks like",
                    },
                    {
                      href: "/privacy-policy-vs-terms-and-conditions",
                      title: "Privacy Policy vs Terms and Conditions",
                      desc: "How these two documents differ and which you need",
                    },
                    {
                      href: "/free-vs-paid-privacy-policy-generator",
                      title: "Free vs Paid Privacy Policy Generators",
                      desc: "What free tools miss and what paid ones include",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-a-blog",
                      title: "Do I Need a Privacy Policy for a Blog?",
                      desc: "The rules for bloggers and content creators",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      title: "Cookie Policy for Websites",
                      desc: "GDPR cookie requirements and consent rules",
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
                  Is Your Policy Up to Date?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  If your privacy policy is more than 12 months old or your
                  data practices have changed, it is time for a fresh start.
                  Generate an accurate, current policy in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Regenerate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and CalOPPA &middot; Customized to your
                  current practices &middot; Updated for 2026
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
