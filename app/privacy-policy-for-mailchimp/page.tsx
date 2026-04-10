import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Users,
  Globe,
  AlertTriangle,
  Clock,
  Ban,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Mailchimp: Email Marketing Guide (2026) | ultrafastutilities",
  description: "Using Mailchimp for email marketing? Your privacy policy must disclose subscriber data collection. Learn about Mailchimp tracking, audience data, landing pages, automations, and GDPR forms.",
  keywords: "privacy policy for mailchimp, mailchimp privacy policy, mailchimp email marketing privacy, mailchimp data collection, mailchimp gdpr",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-mailchimp",
  },
  openGraph: {
    title: "Privacy Policy for Mailchimp: Email Marketing Guide (2026) | ultrafastutilities",
    description: "Using Mailchimp for email marketing? Your privacy policy must disclose subscriber data collection. Learn about Mailchimp tracking, audience data, landing pages, automations, and GDPR forms.",
    url: "https://ultrafastutilities.com/privacy-policy-for-mailchimp",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Mailchimp | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Mailchimp: Email Marketing Guide (2026) | ultrafastutilities",
    description: "Using Mailchimp for email marketing? Your privacy policy must disclose subscriber data collection. Learn about Mailchimp tracking, audience data, landing pages, automations, and GDPR forms.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-mailchimp-needs-policy", title: "Why You Need a Policy" },
  { id: "data-collection", title: "What Mailchimp Collects" },
  { id: "features-data", title: "Features & Data" },
  { id: "gdpr-consent", title: "GDPR Consent Forms" },
  { id: "can-spam", title: "CAN-SPAM Compliance" },
  { id: "data-processing", title: "Data Processing Addendum" },
  { id: "intuit-acquisition", title: "Intuit Acquisition Impact" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "howto", title: "How to Write Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForMailchimpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Mailchimp: What Email Marketers Must Disclose",
            description: "Using Mailchimp for email marketing? Your privacy policy must disclose subscriber data collection. Learn about Mailchimp tracking, audience data, landing pages, automations, and GDPR forms.",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Mailchimp", item: "https://ultrafastutilities.com/privacy-policy-for-mailchimp" },
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
            name: "How to Write a Privacy Policy for Mailchimp",
            description: "Step-by-step guide to creating a privacy policy that covers your Mailchimp email marketing activities.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Audit your Mailchimp data collection", text: "List every type of data Mailchimp collects on your behalf: subscriber emails, names, IP addresses, open tracking, click tracking, location data, and purchase history." },
              { "@type": "HowToStep", position: 2, name: "Document all Mailchimp features you use", text: "Identify which features you actively use: email campaigns, automations, landing pages, signup forms, customer journeys, audience dashboard, transactional email, or websites." },
              { "@type": "HowToStep", position: 3, name: "Disclose tracking and analytics", text: "Explain that Mailchimp tracks email opens, link clicks, subscriber location, device type, and engagement metrics. Specify how this data is used for campaign optimization." },
              { "@type": "HowToStep", position: 4, name: "Add GDPR consent mechanisms", text: "If you have EU subscribers, enable Mailchimp GDPR consent fields in your signup forms and document consent collection in your privacy policy." },
              { "@type": "HowToStep", position: 5, name: "Include CAN-SPAM compliance details", text: "Document your unsubscribe process, physical mailing address, and how you honor opt-out requests within the required 10-business-day window." },
              { "@type": "HowToStep", position: 6, name: "Reference Mailchimp as a data processor", text: "Name Intuit Mailchimp as a third-party data processor, link to their privacy policy, and reference the Data Processing Addendum (DPA) for legal basis." },
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
                name: "Do I need a privacy policy if I use Mailchimp?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Mailchimp's Terms of Use require all users to have a privacy policy. Additionally, laws like GDPR and CAN-SPAM require you to disclose how you collect, use, and store subscriber data." },
              },
              {
                "@type": "Question",
                name: "What data does Mailchimp collect from my subscribers?",
                acceptedAnswer: { "@type": "Answer", text: "Mailchimp collects subscriber email addresses, names, IP addresses at signup, email open tracking data, click tracking data, approximate location, device and browser information, purchase history (if connected), and any custom tags or segments you create." },
              },
              {
                "@type": "Question",
                name: "Does Mailchimp comply with GDPR?",
                acceptedAnswer: { "@type": "Answer", text: "Mailchimp offers GDPR-compliant features including consent checkboxes for signup forms, a Data Processing Addendum (DPA), data export and deletion tools, and lawful basis tracking. However, you as the data controller are responsible for implementing these features correctly." },
              },
              {
                "@type": "Question",
                name: "How do I enable GDPR fields in Mailchimp?",
                acceptedAnswer: { "@type": "Answer", text: "In Mailchimp, go to your audience settings and enable GDPR fields. This adds consent checkboxes to your signup forms that let subscribers opt in to specific types of communication. You must document this consent mechanism in your privacy policy." },
              },
              {
                "@type": "Question",
                name: "Is Mailchimp a data processor or data controller?",
                acceptedAnswer: { "@type": "Answer", text: "Mailchimp acts as a data processor on your behalf. You are the data controller responsible for determining how and why subscriber data is processed. Mailchimp provides a Data Processing Addendum (DPA) that formalizes this relationship." },
              },
              {
                "@type": "Question",
                name: "What changed after Intuit acquired Mailchimp?",
                acceptedAnswer: { "@type": "Answer", text: "After Intuit acquired Mailchimp in 2021, the privacy landscape expanded. Subscriber data may now be subject to Intuit's broader privacy practices. Your privacy policy should reference Intuit Mailchimp and note that data may be shared within the Intuit family of companies." },
              },
              {
                "@type": "Question",
                name: "Can I use Mailchimp without tracking email opens?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Mailchimp allows you to disable open tracking and click tracking for individual campaigns. However, if you keep tracking enabled (the default), you must disclose this in your privacy policy as it involves collecting personal data like IP addresses and device information." },
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
              <span className="text-slate-600">Privacy Policy for Mailchimp</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Mail className="w-3.5 h-3.5" />
                Email Marketing Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Mailchimp
                </span>
                : What Email Marketers Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Using Mailchimp for email marketing? Your privacy policy must
                disclose subscriber data collection, email tracking, audience
                segmentation, and GDPR consent mechanisms.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for email marketers, newsletter creators, and small business owners.
              </p>
            </div>

            {/* Featured Snippet */}
            <div className="mt-8 max-w-2xl rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed text-slate-700">
                  <strong className="text-slate-900">Quick answer:</strong>{" "}
                  Yes, you need a privacy policy if you use Mailchimp. Mailchimp
                  collects subscriber emails, tracks opens and clicks, logs IP
                  addresses, and stores audience data on your behalf. GDPR, CAN-SPAM,
                  and Mailchimp's own Terms of Use all require you to disclose these
                  data practices to your subscribers.
                </div>
              </div>
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
                href="/do-i-need-a-privacy-policy-for-collecting-emails"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Collecting Emails Guide
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
                  <span>12 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: Why Mailchimp Users Need a Privacy Policy */}
              <section id="why-mailchimp-needs-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Mailchimp Users Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Mailchimp is one of the most popular email marketing platforms,
                    used by millions of businesses to manage subscriber lists, send
                    campaigns, and track engagement. Every time a subscriber joins
                    your list, Mailchimp collects personal data on your behalf. This
                    makes you the{" "}
                    <strong className="text-slate-900">data controller</strong>,
                    and you are legally required to disclose what data is collected
                    and how it is used.
                  </p>

                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Three separate requirements mandate a privacy policy for
                    Mailchimp users:
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      {
                        label: "Mailchimp's Terms of Use",
                        text: "Mailchimp requires all users to maintain a privacy policy that discloses the use of their platform",
                      },
                      {
                        label: "GDPR (EU subscribers)",
                        text: "You must disclose the legal basis for processing, data retention, and subscriber rights",
                      },
                      {
                        label: "CAN-SPAM Act (US)",
                        text: "Requires a physical address, clear unsubscribe mechanism, and honest subject lines",
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

                  {/* Did you know? #1 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Mailchimp can suspend your account if you do not have a
                        privacy policy. Their Standard Terms of Use explicitly
                        require compliance with applicable privacy laws, and
                        accounts found in violation may be permanently terminated.
                      </div>
                    </div>
                  </div>

                  {/* Mini-FAQ #1 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <p className="font-semibold text-slate-900 text-sm">
                      Can I just link to Mailchimp's privacy policy instead of writing my own?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      No. Mailchimp's privacy policy covers how they handle data as
                      a company. As the data controller, you need your own policy
                      explaining what data you collect from subscribers, why you
                      collect it, and how you use Mailchimp to process it. Linking
                      to Mailchimp's policy does not fulfill your legal obligation.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What Mailchimp Collects */}
              <section id="data-collection" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Mailchimp Collects From Your Subscribers
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every data point Mailchimp gathers on your behalf must be
                      disclosed in your privacy policy.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200/60">
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Data Type</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">When Collected</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/60">
                        {[
                          { data: "Subscriber email", when: "Signup", purpose: "Deliver email campaigns" },
                          { data: "Name (first/last)", when: "Signup form", purpose: "Personalize emails" },
                          { data: "IP address", when: "Form submission", purpose: "Record consent proof, geolocation" },
                          { data: "Open tracking", when: "Email opens", purpose: "Measure engagement rates" },
                          { data: "Click tracking", when: "Link clicks", purpose: "Track content performance" },
                          { data: "Location (approximate)", when: "Email opens", purpose: "Geographic segmentation" },
                          { data: "Device and browser", when: "Email opens", purpose: "Optimize email rendering" },
                          { data: "Purchase history", when: "E-commerce sync", purpose: "Product recommendations, segmentation" },
                          { data: "Tags", when: "Manual or automated", purpose: "Audience organization" },
                          { data: "Segments", when: "Rule-based filtering", purpose: "Targeted campaign delivery" },
                        ].map((row) => (
                          <tr key={row.data} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-800">{row.data}</td>
                            <td className="px-4 py-3 text-slate-600">{row.when}</td>
                            <td className="px-4 py-3 text-slate-600">{row.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Did you know? #2 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Mailchimp's open tracking works by embedding a tiny invisible
                        image (tracking pixel) in each email. When the image loads,
                        Mailchimp records the subscriber's IP address, approximate
                        location, device type, and the exact time of the open. This
                        counts as personal data collection under GDPR.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Mailchimp Features and Data */}
              <section id="features-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Mailchimp Features and Their Data Implications
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Each Mailchimp feature you use creates additional privacy
                      disclosure requirements.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200/60">
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Feature</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Data Collected</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Disclosure Required</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/60">
                        {[
                          { feature: "Email Campaigns", data: "Opens, clicks, bounces, unsubscribes", disclosure: "Tracking methods, data retention" },
                          { feature: "Automations", data: "Trigger events, behavioral data, timestamps", disclosure: "Automated decision-making, profiling" },
                          { feature: "Landing Pages", data: "Form submissions, page views, conversions", disclosure: "Cookie usage, data collection forms" },
                          { feature: "Signup Forms", data: "Email, name, consent records, IP address", disclosure: "Consent mechanism, data storage" },
                          { feature: "Customer Journey", data: "Multi-step behavioral tracking", disclosure: "Profiling, automated processing" },
                          { feature: "Audience Dashboard", data: "Demographics, engagement scores, predicted data", disclosure: "Data analysis, profiling practices" },
                          { feature: "Transactional Email", data: "Order details, shipping info, purchase data", disclosure: "E-commerce data processing" },
                          { feature: "Websites", data: "Page views, visitor tracking, form data", disclosure: "Website cookies, analytics tracking" },
                        ].map((row) => (
                          <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-800">{row.feature}</td>
                            <td className="px-4 py-3 text-slate-600">{row.data}</td>
                            <td className="px-4 py-3 text-slate-600">{row.disclosure}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-700">
                    If you use Mailchimp's{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-a-newsletter"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      newsletter features
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , landing pages, or website builder, each feature adds distinct
                    data collection points that require separate disclosures in your
                    privacy policy.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: GDPR Consent Forms in Mailchimp */}
              <section id="gdpr-consent" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                      >
                        GDPR
                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                      </Link>{" "}
                      Consent Forms in Mailchimp
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Mailchimp provides built-in GDPR consent fields that you can
                    enable on your signup forms. These fields allow subscribers to
                    explicitly opt in to different types of communication. Your
                    privacy policy must explain how these consent mechanisms work.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Enable GDPR fields",
                        text: "Activate GDPR-compliant consent checkboxes in your audience settings to let subscribers choose their communication preferences",
                      },
                      {
                        label: "Document consent collection",
                        text: "Your privacy policy must describe what consent is collected, when it is collected, and how subscribers can withdraw consent",
                      },
                      {
                        label: "Record-keeping",
                        text: "Mailchimp automatically logs consent timestamps and IP addresses, providing proof of consent for regulatory inquiries",
                      },
                      {
                        label: "Right to withdraw",
                        text: "Subscribers must be able to withdraw consent as easily as they gave it, and your policy must explain the withdrawal process",
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

                  {/* Mini-FAQ #2 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <p className="font-semibold text-slate-900 text-sm">
                      What if I only have US subscribers? Do I still need GDPR fields?
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      If you can guarantee that no EU residents will ever subscribe
                      to your list, GDPR technically does not apply. However, in
                      practice, it is very difficult to prevent EU residents from
                      signing up. Enabling GDPR fields is a best practice regardless
                      of your primary audience location.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: CAN-SPAM Compliance */}
              <section id="can-spam" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      CAN-SPAM Compliance With Mailchimp
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    The CAN-SPAM Act applies to all commercial emails sent to US
                    recipients. Mailchimp helps with compliance, but your privacy
                    policy must still document these practices.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Physical mailing address",
                        text: "Mailchimp requires you to add a physical address to every email. Your privacy policy should reference this address",
                      },
                      {
                        label: "Unsubscribe mechanism",
                        text: "Every Mailchimp email includes an unsubscribe link. You must honor opt-out requests within 10 business days",
                      },
                      {
                        label: "Accurate header information",
                        text: "Your 'From' name, reply-to address, and subject lines must be truthful and not misleading",
                      },
                      {
                        label: "Commercial content identification",
                        text: "If your email is primarily an advertisement, it must be clearly identified as such",
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

                  {/* Did you know? #3 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        CAN-SPAM violations can result in penalties of up to $51,744
                        per email. Even if Mailchimp provides the unsubscribe
                        mechanism, you as the sender are ultimately responsible for
                        compliance. Your privacy policy is a key part of
                        demonstrating that compliance.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Mailchimp's Data Processing Addendum */}
              <section id="data-processing" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Mailchimp's Data Processing Addendum
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Mailchimp offers a Data Processing Addendum (DPA) that
                    formalizes the relationship between you (the data controller)
                    and Mailchimp (the data processor). This document is essential
                    for GDPR compliance and should be referenced in your privacy
                    policy.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Automatic inclusion",
                        text: "Mailchimp's DPA is automatically included in their Standard Terms of Use for all accounts",
                      },
                      {
                        label: "Sub-processors",
                        text: "The DPA lists Mailchimp's sub-processors (AWS, Google Cloud, etc.) and commits to notifying you of changes",
                      },
                      {
                        label: "International transfers",
                        text: "The DPA includes Standard Contractual Clauses (SCCs) for transferring data outside the EU/EEA",
                      },
                      {
                        label: "Security measures",
                        text: "Mailchimp commits to technical and organizational security measures including encryption, access controls, and regular audits",
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

                  <p className="text-base leading-7 text-slate-700">
                    Your privacy policy should mention that Mailchimp processes
                    subscriber data under a DPA and that appropriate safeguards
                    are in place for international data transfers. For more on
                    GDPR requirements, see our{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR privacy policy template
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Intuit Acquisition Impact */}
              <section id="intuit-acquisition" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Intuit Acquisition: What Changed for Privacy
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Intuit acquired Mailchimp in November 2021 for approximately
                    $12 billion. This acquisition has privacy implications that
                    Mailchimp users should address in their privacy policies.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Expanded data ecosystem",
                        text: "Subscriber data may now be subject to Intuit's broader privacy framework, which also covers TurboTax, QuickBooks, and Credit Karma",
                      },
                      {
                        label: "Updated entity name",
                        text: "Mailchimp is now officially 'The Rocket Science Group LLC d/b/a Mailchimp, an Intuit company.' Your policy should reference the current entity",
                      },
                      {
                        label: "Cross-product data sharing",
                        text: "Intuit's privacy statement allows data sharing across their product family for purposes like product improvement and personalization",
                      },
                      {
                        label: "Updated DPA",
                        text: "The Data Processing Addendum has been updated to reflect Intuit's corporate structure and sub-processor list",
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

                  <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Important:</strong>{" "}
                        If your privacy policy still references "Mailchimp" without
                        mentioning Intuit, it may be outdated. Update your policy
                        to reference "Intuit Mailchimp" and note that data may be
                        processed within the Intuit corporate family.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Mistakes in Mailchimp Privacy Policies
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      title: "Not disclosing email tracking",
                      desc: "Many Mailchimp users fail to mention that open tracking and click tracking collect personal data like IP addresses and device information. This is a GDPR violation.",
                    },
                    {
                      title: "Missing Mailchimp as a third-party processor",
                      desc: "Your privacy policy must name Mailchimp (Intuit) as a third-party data processor. Simply saying 'email marketing service' is insufficient under GDPR.",
                    },
                    {
                      title: "No mention of international data transfers",
                      desc: "Mailchimp stores data on US servers. If you have EU subscribers, you must disclose this cross-border transfer and reference the legal mechanisms (SCCs) that authorize it.",
                    },
                    {
                      title: "Ignoring landing page and website data",
                      desc: "If you use Mailchimp's landing pages or website builder, these collect additional data (cookies, page views) that require separate disclosure beyond email-related data.",
                    },
                    {
                      title: "Outdated entity references",
                      desc: "Policies that reference 'The Rocket Science Group' without mentioning Intuit are outdated. After the 2021 acquisition, your policy should reflect the current corporate structure.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      <Ban className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 text-base">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Wondering what happens if your privacy policy is missing or
                    incomplete? See our guide on{" "}
                    <Link
                      href="/what-happens-without-a-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      what happens without a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 9: HowTo - 6 Steps */}
              <section id="howto" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Write a Privacy Policy for Mailchimp
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Follow these six steps to create a compliant privacy policy
                      for your Mailchimp email marketing.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Audit your Mailchimp data collection",
                      desc: "List every type of data Mailchimp collects on your behalf: subscriber emails, names, IP addresses, open tracking, click tracking, location data, and purchase history. Check your audience fields and merge tags for custom data points.",
                    },
                    {
                      step: 2,
                      title: "Document all Mailchimp features you use",
                      desc: "Identify which features you actively use: email campaigns, automations, landing pages, signup forms, customer journeys, audience dashboard, transactional email, or websites. Each feature has different data implications.",
                    },
                    {
                      step: 3,
                      title: "Disclose tracking and analytics",
                      desc: "Explain that Mailchimp tracks email opens, link clicks, subscriber location, device type, and engagement metrics. Specify how this data is used for campaign optimization and whether subscribers can opt out of tracking.",
                    },
                    {
                      step: 4,
                      title: "Add GDPR consent mechanisms",
                      desc: "If you have EU subscribers, enable Mailchimp GDPR consent fields in your signup forms and document consent collection in your privacy policy. Include details on how subscribers can withdraw consent at any time.",
                    },
                    {
                      step: 5,
                      title: "Include CAN-SPAM compliance details",
                      desc: "Document your unsubscribe process, physical mailing address, and how you honor opt-out requests within the required 10-business-day window. Reference the automatic unsubscribe links Mailchimp includes in every email.",
                    },
                    {
                      step: 6,
                      title: "Reference Mailchimp as a data processor",
                      desc: "Name Intuit Mailchimp as a third-party data processor, link to their privacy policy, and reference the Data Processing Addendum (DPA) for legal basis. Note that data is stored on US servers with appropriate safeguards.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-700">{item.step}</span>
                        </div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600 ml-11">
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  <p className="text-base leading-7 text-slate-700">
                    For a comparison with other email marketing platforms, see our
                    guide on{" "}
                    <Link
                      href="/privacy-policy-for-hubspot"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy for HubSpot
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . If you run a small business, our{" "}
                    <Link
                      href="/privacy-policy-for-small-business"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      small business privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    covers additional requirements.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 10: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      q: "Do I need a privacy policy if I use Mailchimp?",
                      a: "Yes. Mailchimp's Terms of Use require all users to have a privacy policy. Additionally, laws like GDPR and CAN-SPAM require you to disclose how you collect, use, and store subscriber data. Without a privacy policy, Mailchimp can suspend your account.",
                    },
                    {
                      q: "What data does Mailchimp collect from my subscribers?",
                      a: "Mailchimp collects subscriber email addresses, names, IP addresses at signup, email open tracking data, click tracking data, approximate location, device and browser information, purchase history (if connected), and any custom tags or segments you create.",
                    },
                    {
                      q: "Does Mailchimp comply with GDPR?",
                      a: "Mailchimp offers GDPR-compliant features including consent checkboxes for signup forms, a Data Processing Addendum (DPA), data export and deletion tools, and lawful basis tracking. However, you as the data controller are responsible for implementing these features correctly and disclosing them in your privacy policy.",
                    },
                    {
                      q: "How do I enable GDPR fields in Mailchimp?",
                      a: "In Mailchimp, go to your audience settings and enable GDPR fields. This adds consent checkboxes to your signup forms that let subscribers opt in to specific types of communication. You must document this consent mechanism in your privacy policy.",
                    },
                    {
                      q: "Is Mailchimp a data processor or data controller?",
                      a: "Mailchimp acts as a data processor on your behalf. You are the data controller responsible for determining how and why subscriber data is processed. Mailchimp provides a Data Processing Addendum (DPA) that formalizes this relationship under GDPR.",
                    },
                    {
                      q: "What changed after Intuit acquired Mailchimp?",
                      a: "After Intuit acquired Mailchimp in 2021, the privacy landscape expanded. Subscriber data may now be subject to Intuit's broader privacy practices. Your privacy policy should reference Intuit Mailchimp and note that data may be shared within the Intuit family of companies for product improvement and analytics.",
                    },
                    {
                      q: "Can I use Mailchimp without tracking email opens?",
                      a: "Yes. Mailchimp allows you to disable open tracking and click tracking for individual campaigns. However, if you keep tracking enabled (the default), you must disclose this in your privacy policy as it involves collecting personal data like IP addresses and device information.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="rounded-xl border border-slate-200/80 p-5">
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.q}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Dark CTA Section */}
              <section className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <Mail className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate My Mailchimp Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy that
                      covers your Mailchimp email marketing in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Mailchimp Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Mailchimp-ready</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CAN-SPAM
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
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Website compliance guide",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                      icon: Mail,
                      title: "Privacy Policy for Collecting Emails",
                      desc: "Email collection disclosure requirements",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-a-newsletter",
                      icon: FileText,
                      title: "Privacy Policy for Newsletters",
                      desc: "Newsletter-specific compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-hubspot",
                      icon: Globe,
                      title: "Privacy Policy for HubSpot",
                      desc: "HubSpot email marketing comparison",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: Users,
                      title: "Privacy Policy for Small Business",
                      desc: "Small business compliance essentials",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template structure",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks and consequences of non-compliance",
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
