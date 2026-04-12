import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  Users,
  Link2,
  Globe,
  ClipboardList,
  Clock,
  AlertTriangle,
  Sparkles,
  Eye,
  Code,
  XCircle,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Typeform Surveys (Hidden Fields + GDPR 2026)",
  description: "Typeform collects respondent data, hidden fields, and payment info. See what your privacy policy must disclose and generate yours free in 60 seconds.",
  keywords: "privacy policy for typeform, typeform privacy policy, typeform data collection, survey privacy policy, typeform gdpr",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-typeform",
  },
  openGraph: {
    title: "Privacy Policy for Typeform Surveys (Hidden Fields + GDPR 2026)",
    description: "Typeform collects respondent data, hidden fields, and payment info. See what your privacy policy must disclose and generate yours free in 60 seconds.",
    url: "https://ultrafastutilities.com/privacy-policy-for-typeform",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Typeform Surveys (Hidden Fields + GDPR 2026)" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Typeform Surveys (Hidden Fields + GDPR 2026)",
    description: "Typeform collects respondent data, hidden fields, and payment info. See what your privacy policy must disclose and generate yours free in 60 seconds.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-needed", title: "Why You Need a Policy" },
  { id: "data-collection", title: "What Typeform Collects" },
  { id: "form-tools-comparison", title: "Form Tools Comparison" },
  { id: "hidden-fields", title: "Hidden Fields" },
  { id: "payment-forms", title: "Payment Forms" },
  { id: "embedded-typeforms", title: "Embedded Typeforms" },
  { id: "integrations", title: "Integrations" },
  { id: "gdpr-consent", title: "GDPR Consent" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to", title: "How to Write Your Policy" },
  { id: "faq", title: "FAQs" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForTypeformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Typeform Surveys (Hidden Fields + GDPR 2026)",
            description: "Typeform collects respondent data, hidden fields, and payment info. See what your privacy policy must disclose and generate yours free in 60 seconds.",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Typeform", item: "https://ultrafastutilities.com/privacy-policy-for-typeform" },
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
            name: "How to Write a Privacy Policy for Typeform",
            description: "Step-by-step guide to creating a privacy policy that covers Typeform surveys, form responses, and data integrations.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Audit all your Typeform forms", text: "Review every form, survey, and quiz you have published and identify what personal data each one collects from respondents, including standard fields and any hidden fields." },
              { "@type": "HowToStep", position: 2, name: "Document hidden fields and tracking", text: "List all hidden fields that pass data into Typeform from URLs, email campaigns, or embedded contexts. Disclose that you collect data respondents may not directly see." },
              { "@type": "HowToStep", position: 3, name: "List all connected integrations", text: "Document every service connected to your Typeform account, such as Zapier, HubSpot, Google Sheets, Mailchimp, Slack, or Airtable, and note what data flows to each." },
              { "@type": "HowToStep", position: 4, name: "Address payment form data", text: "If you collect payments through Typeform via Stripe, explain what payment data you can access, who processes payments, and how financial information is protected." },
              { "@type": "HowToStep", position: 5, name: "Add GDPR consent mechanisms", text: "If you have EU respondents, include consent checkboxes in your forms, provide a link to your privacy policy, and ensure you have a lawful basis for processing each data type." },
              { "@type": "HowToStep", position: 6, name: "Include data rights and contact details", text: "Provide clear instructions for how respondents can request access to, correction of, or deletion of their form responses, and include your contact details for privacy inquiries." },
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
                name: "Do I need a privacy policy if I use Typeform?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Typeform collects respondent names, emails, and any other data you ask for in your forms. As the data controller, you need your own privacy policy disclosing what data you collect through Typeform and how you use it." },
              },
              {
                "@type": "Question",
                name: "Does Typeform's privacy policy cover my forms?",
                acceptedAnswer: { "@type": "Answer", text: "No. Typeform's privacy policy explains how Typeform handles data as a company. You need your own policy explaining how you use the respondent data collected through your Typeform forms for your business purposes." },
              },
              {
                "@type": "Question",
                name: "Do I need to disclose Typeform hidden fields?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Hidden fields collect data that respondents cannot see, such as email addresses, user IDs, or campaign parameters passed through URLs. Under GDPR and most privacy laws, you must disclose all data collection, including data collected without the respondent's direct input." },
              },
              {
                "@type": "Question",
                name: "How does GDPR apply to Typeform surveys?",
                acceptedAnswer: { "@type": "Answer", text: "If any of your respondents are in the EU or EEA, GDPR applies. You must have a lawful basis for processing, provide a privacy notice before or at the time of data collection, include consent mechanisms where required, and honor data subject rights including access and erasure requests." },
              },
              {
                "@type": "Question",
                name: "What about payment data collected through Typeform?",
                acceptedAnswer: { "@type": "Answer", text: "Typeform processes payments through Stripe. Your privacy policy should explain that payment processing is handled by Stripe, what financial data you can access (such as transaction confirmations and last four digits), and link to Stripe's privacy policy." },
              },
              {
                "@type": "Question",
                name: "Do embedded Typeforms require privacy disclosures?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Embedded Typeforms load scripts from Typeform's servers that can set cookies and collect IP addresses, browser data, and interaction metrics from your website visitors. Your privacy and cookie policies must disclose this." },
              },
              {
                "@type": "Question",
                name: "What Typeform integrations should I disclose?",
                acceptedAnswer: { "@type": "Answer", text: "You must disclose every integration that receives respondent data, including Zapier, HubSpot, Google Sheets, Mailchimp, Slack, and Airtable. Explain what data each integration receives and why it is shared." },
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
              <span className="text-slate-600">Privacy Policy for Typeform</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ClipboardList className="w-3.5 h-3.5" />
                Form Builder Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Typeform
                </span>
                : What Form Builders Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Using Typeform for surveys and forms? Your privacy policy must
                disclose respondent data collection, hidden fields, tracking
                pixels, payment forms, and GDPR consent.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for marketers, researchers, product teams, and any business using Typeform.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-calendly"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Calendly
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-saas"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for SaaS
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
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

              {/* Featured Snippet */}
              <div className="rounded-xl border border-blue-200/80 bg-blue-50/40 p-6 mb-10">
                <p className="text-xs font-medium text-slate-500 mb-2">
                  <time dateTime="2026-04-11">April 11, 2026</time> &mdash;{" "}
                  <span className="text-slate-400">Typeform 2026 GDPR rules</span>
                </p>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">
                  Quick Answer: Do You Need a Privacy Policy for Typeform?
                </h2>
                <p className="text-base leading-7 text-slate-700">
                  <strong>Yes.</strong> If you use Typeform to collect survey
                  responses, form submissions, or quiz answers, you are
                  collecting personal data from respondents. Your privacy policy
                  must explain what data you collect through Typeform, including
                  hidden fields and tracking data, which integrations receive
                  that data, and how respondents can exercise their privacy
                  rights. Typeform&apos;s own privacy policy does not cover your
                  use of respondent data.
                </p>
              </div>

              {/* Section 1: Why Typeform Users Need a Privacy Policy */}
              <section id="why-needed" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Typeform Users Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Typeform collects personal data from every respondent who
                    fills out your forms. Even a simple feedback form captures
                    at minimum an IP address and browser information. Most
                    business forms go far beyond that, creating significant
                    privacy obligations.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      { label: "Marketers and lead generation teams", text: "Contact forms and lead capture surveys collect names, emails, phone numbers, and company details that flow into marketing automation systems" },
                      { label: "Researchers and product teams", text: "Survey responses may contain personal opinions, demographic data, and behavioral insights that constitute personal data under GDPR" },
                      { label: "HR and recruiting teams", text: "Application forms and employee surveys collect sensitive personal data including employment history, salary expectations, and demographic information" },
                      { label: "Educators and course creators", text: "Quiz and assessment forms collect student performance data, which may require additional protections for minors under COPPA and similar laws" },
                      { label: "E-commerce businesses", text: "Order forms and customer feedback surveys collect purchase data, shipping addresses, and payment information through Typeform's Stripe integration" },
                      { label: "Healthcare and wellness providers", text: "Intake forms and health questionnaires may collect sensitive health data requiring special handling under HIPAA and GDPR's special categories" },
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
                      <Sparkles className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Typeform processes over 500 million form responses per
                        year across millions of active forms. If you collect
                        even a handful of responses per week, you are likely
                        processing enough personal data to trigger privacy law
                        obligations under GDPR, CCPA, and similar regulations.
                      </div>
                    </div>
                  </div>

                  {/* Mini-FAQ #1 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <h3 className="font-semibold text-slate-900 text-sm mb-2">
                      What if my Typeform only collects anonymous feedback?
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Even anonymous forms collect IP addresses and browser
                      data, which are considered personal data under GDPR. If
                      there is any possibility of identifying a respondent
                      through their answers or metadata, you need a privacy
                      policy. Truly anonymous data that cannot be linked to any
                      individual is rare in practice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What Typeform Collects */}
              <section id="data-collection" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Typeform Collects: Data Types You Must Disclose
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Typeform captures a wide range of respondent data that
                      your privacy policy needs to address.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  {/* Data Collection Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200/80">
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Data Type</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Examples</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">When Collected</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/60">
                        {[
                          { type: "Contact information", examples: "Names, email addresses, phone numbers from form fields", when: "When respondents fill in contact fields" },
                          { type: "Form responses", examples: "Text answers, multiple choice selections, ratings, file uploads", when: "Every form submission" },
                          { type: "Hidden fields", examples: "Email, user ID, UTM parameters passed via URL", when: "When hidden fields are configured" },
                          { type: "Payment information", examples: "Transaction amount, payment status, billing name", when: "When Stripe payment is enabled" },
                          { type: "File uploads", examples: "Documents, images, PDFs uploaded through form fields", when: "When file upload fields are used" },
                          { type: "Partial responses", examples: "Incomplete form data from abandoned submissions", when: "When respondents start but do not finish" },
                          { type: "Browser and device data", examples: "IP address, browser type, device, operating system, referral URL", when: "Every form view and submission" },
                          { type: "Interaction metrics", examples: "Time spent per question, drop-off points, completion rates", when: "Every form interaction" },
                          { type: "Geolocation data", examples: "Approximate location derived from IP address", when: "Every form view" },
                          { type: "Tracking pixel data", examples: "Facebook Pixel, Google Analytics events triggered by form actions", when: "When tracking pixels are configured" },
                        ].map((row) => (
                          <tr key={row.type} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                            <td className="px-4 py-3 text-slate-600">{row.examples}</td>
                            <td className="px-4 py-3 text-slate-600">{row.when}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-700">
                    Your{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    should list each data type you actually collect, explain why
                    you collect it, and specify how long you retain it. Avoid
                    vague language like &quot;we may collect certain
                    information.&quot;
                  </p>

                  {/* Did you know? #2 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <Sparkles className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Typeform automatically records partial responses by
                        default. This means you may be collecting personal data
                        from respondents who never clicked submit. Under GDPR,
                        you must disclose this collection and have a lawful
                        basis for retaining incomplete form data.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Form Tools Comparison */}
              <section id="form-tools-comparison" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Form Tools Comparison: Privacy Implications
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Different form tools have different privacy implications.
                    Understanding how Typeform compares helps you write a more
                    accurate privacy policy.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200/80">
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Feature</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Typeform</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Google Forms</th>
                          <th className="text-left font-semibold text-slate-900 px-4 py-3">Jotform</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/60">
                        {[
                          { feature: "Hidden fields", typeform: "Yes, URL-based", google: "No", jotform: "Yes, limited" },
                          { feature: "Partial responses", typeform: "Collected by default", google: "Not collected", jotform: "Optional" },
                          { feature: "Payment collection", typeform: "Stripe integration", google: "No native support", jotform: "Multiple processors" },
                          { feature: "Tracking pixels", typeform: "Facebook, Google, GTM", google: "No native support", jotform: "Limited" },
                          { feature: "GDPR consent fields", typeform: "Built-in legal field", google: "Manual checkbox", jotform: "Built-in widget" },
                          { feature: "Data residency", typeform: "EU and US options", google: "Google Cloud regions", jotform: "EU option available" },
                        ].map((row) => (
                          <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-800">{row.feature}</td>
                            <td className="px-4 py-3 text-slate-600">{row.typeform}</td>
                            <td className="px-4 py-3 text-slate-600">{row.google}</td>
                            <td className="px-4 py-3 text-slate-600">{row.jotform}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Typeform&apos;s hidden fields, partial response collection,
                    and tracking pixel support mean your privacy policy needs
                    more detailed disclosures than you might need with simpler
                    form tools. Each of these features collects data that
                    respondents may not be aware of.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Hidden Fields */}
              <section id="hidden-fields" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Hidden Fields: The Data Respondents Cannot See
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Typeform hidden fields allow you to pass data into a form
                    through the URL without the respondent seeing or entering
                    it. This is a powerful feature for personalization and
                    tracking, but it creates significant privacy obligations.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Eye,
                        color: "bg-red-50",
                        iconColor: "text-red-600",
                        title: "Pre-populated personal data",
                        text: "Hidden fields often carry email addresses, user IDs, or customer names from email campaigns or CRM links. Respondents may not realize this data is being captured alongside their form answers.",
                      },
                      {
                        icon: Globe,
                        color: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "UTM and campaign tracking",
                        text: "Marketing teams frequently pass UTM source, medium, and campaign values through hidden fields to attribute form submissions to specific campaigns. This links marketing data to personal responses.",
                      },
                      {
                        icon: Code,
                        color: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Session and context data",
                        text: "Hidden fields can capture page URLs, referral sources, A/B test variants, or session identifiers that help you understand the context of each submission but constitute additional data collection.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center`}>
                            <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                          </div>
                          <h3 className="font-semibold text-slate-900">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-base leading-7 text-slate-600 ml-11">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Transparency requirement:</strong>{" "}
                        Under GDPR Article 13, you must inform data subjects
                        about all personal data you collect, including data
                        collected through hidden fields. Failing to disclose
                        hidden field collection in your privacy policy can be
                        treated as a transparency violation.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Payment Forms */}
              <section id="payment-forms" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Payment Forms
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Typeform integrates with Stripe to collect payments directly
                    within forms. When you enable payment collection, additional
                    privacy disclosures are required because financial data is
                    involved.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: CreditCard,
                        color: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "What payment data you can access",
                        text: "You do not receive full credit card numbers through Typeform. However, you can access transaction amounts, payment status, last four digits of the card, and billing names. Your policy must disclose what financial information you can see.",
                      },
                      {
                        icon: ShieldCheck,
                        color: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Stripe as payment processor",
                        text: "Stripe handles the actual payment processing and is PCI DSS compliant. Your privacy policy should name Stripe as the processor, explain that you do not store full card details, and link to Stripe's privacy policy.",
                      },
                      {
                        icon: ClipboardList,
                        color: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "Combined form and payment data",
                        text: "Payment forms combine personal data from form fields with financial data from the payment step. Your policy must address both data types and explain how they are linked and stored together.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center`}>
                            <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                          </div>
                          <h3 className="font-semibold text-slate-900">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-base leading-7 text-slate-600 ml-11">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Mini-FAQ #2 */}
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <h3 className="font-semibold text-slate-900 text-sm mb-2">
                      Do I need PCI compliance for Typeform payment forms?
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Since Stripe handles the actual card processing within
                      Typeform, your PCI compliance burden is significantly
                      reduced. However, your privacy policy must still disclose
                      that payments are collected, name Stripe as the processor,
                      and explain what transaction data you retain in your
                      Typeform results.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Embedded Typeforms */}
              <section id="embedded-typeforms" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Embedded Typeforms
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Typeform offers multiple embedding options including
                    standard embeds, popup embeds, slider embeds, and popover
                    embeds. Each method loads third-party scripts on your{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      website
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and introduces tracking considerations.
                  </p>

                  <div className="space-y-3">
                    {[
                      { label: "Third-party scripts and cookies", text: "Embedding a Typeform loads JavaScript from Typeform's servers that may set cookies and collect visitor data before the form is even interacted with" },
                      { label: "IP address and browser fingerprinting", text: "Typeform collects IP addresses and browser information from every visitor who sees the embedded form, not just those who submit responses" },
                      { label: "Tracking pixel execution", text: "If you have configured Facebook Pixel, Google Analytics, or Google Tag Manager in Typeform, these scripts execute within the embed on your website" },
                      { label: "Popup trigger tracking", text: "Popup and slider embeds can be triggered by scroll depth, time on page, or exit intent, meaning Typeform tracks visitor behavior to determine when to display the form" },
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
                  <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <Sparkles className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Under the ePrivacy Directive, you may need cookie
                        consent before loading embedded Typeform scripts if
                        they set non-essential cookies. Many consent management
                        platforms allow you to conditionally load the Typeform
                        embed only after consent is granted.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Integrations */}
              <section id="integrations" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Integrations You Must Disclose
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Typeform connects to many third-party services, and each
                    integration creates a data flow that your privacy policy
                    must address. If you collect{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-collecting-emails"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      emails through forms
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , every downstream service that receives those emails must
                    be disclosed.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Link2,
                        color: "bg-orange-50",
                        iconColor: "text-orange-600",
                        title: "Zapier",
                        text: "Zapier workflows can send Typeform responses to hundreds of downstream services. Your policy must account for every service that ultimately receives respondent data through Zapier automations.",
                      },
                      {
                        icon: Users,
                        color: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "HubSpot",
                        text: "The HubSpot integration pushes respondent data directly into your CRM for contact management, lead scoring, and marketing automation. Disclose that form responses feed into your sales and marketing workflows.",
                      },
                      {
                        icon: FileText,
                        color: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Google Sheets",
                        text: "Form responses synced to Google Sheets are stored on Google's servers. Disclose that respondent data is transferred to Google and stored according to Google's data handling practices.",
                      },
                      {
                        icon: Globe,
                        color: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "Mailchimp, Slack, and Airtable",
                        text: "Email marketing tools receive contact data for campaigns, Slack channels receive form notifications with respondent details, and Airtable stores structured response data. Each service must be named in your policy.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center`}>
                            <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                          </div>
                          <h3 className="font-semibold text-slate-900">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-base leading-7 text-slate-600 ml-11">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: GDPR Consent */}
              <section id="gdpr-consent" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GDPR Consent in Typeform
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Typeform provides built-in tools for GDPR compliance, but
                    using them correctly requires understanding when consent is
                    needed and how to configure your forms properly. If you
                    need a comprehensive{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR-compliant policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , your Typeform data collection should be a key component.
                  </p>

                  <div className="space-y-3">
                    {[
                      { label: "Legal field type", text: "Typeform offers a dedicated Legal field that displays your privacy policy text with a required acceptance checkbox. Use this for consent collection where consent is your lawful basis" },
                      { label: "Privacy policy links", text: "Include a direct link to your privacy policy in every form, either in the welcome screen, a Legal field, or the thank-you screen. Respondents must be able to read your policy before submitting data" },
                      { label: "Lawful basis selection", text: "Not every form requires consent. If you process data under legitimate interest or contractual necessity, document this in your privacy policy instead of adding unnecessary consent checkboxes" },
                      { label: "Right to erasure", text: "You must be able to find and delete a specific respondent's data across Typeform and all connected integrations when they exercise their right to erasure" },
                      { label: "Data retention limits", text: "Set and disclose retention periods for form responses. Typeform allows you to delete responses, but you must also ensure downstream integrations respect your retention policy" },
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

              {/* Section 9: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
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
                      mistake: "Not disclosing hidden field data collection",
                      fix: "Hidden fields collect data respondents cannot see. Your privacy policy must disclose all data collection methods, including data passed through URLs and pre-populated fields.",
                    },
                    {
                      mistake: "Ignoring partial response collection",
                      fix: "Typeform collects partial responses by default. If you retain incomplete submission data, your policy must disclose this and explain your retention practices for abandoned forms.",
                    },
                    {
                      mistake: "Forgetting to list downstream integrations",
                      fix: "If form data flows to Zapier, HubSpot, Mailchimp, or Google Sheets, your policy must name each service and explain what data is shared and why.",
                    },
                    {
                      mistake: "Using consent checkboxes when they are not needed",
                      fix: "Not every form requires consent as the lawful basis. Overusing consent checkboxes can create compliance problems if you cannot honor withdrawal requests across all systems.",
                    },
                    {
                      mistake: "Not addressing tracking pixels in your privacy policy",
                      fix: "If you use Facebook Pixel, Google Analytics, or GTM with Typeform, these tracking tools collect additional data that must be disclosed in both your privacy policy and cookie policy.",
                    },
                  ].map((item) => (
                    <div
                      key={item.mistake}
                      className="rounded-xl border border-red-200/60 bg-red-50/30 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">
                            {item.mistake}
                          </p>
                          <p className="text-sm leading-relaxed text-slate-600 mt-1">
                            <strong className="text-emerald-700">Fix:</strong>{" "}
                            {item.fix}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 10: How to Write Your Policy */}
              <section id="how-to" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Write Your Typeform Privacy Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Follow these six steps to create a complete privacy policy
                      for your Typeform usage.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Audit all your Typeform forms",
                      desc: "Review every form, survey, and quiz you have published and identify what personal data each one collects from respondents, including standard fields and any hidden fields.",
                    },
                    {
                      step: "2",
                      title: "Document hidden fields and tracking",
                      desc: "List all hidden fields that pass data into Typeform from URLs, email campaigns, or embedded contexts. Disclose that you collect data respondents may not directly see.",
                    },
                    {
                      step: "3",
                      title: "List all connected integrations",
                      desc: "Document every service connected to your Typeform account, such as Zapier, HubSpot, Google Sheets, Mailchimp, Slack, or Airtable, and note what data flows to each.",
                    },
                    {
                      step: "4",
                      title: "Address payment form data",
                      desc: "If you collect payments through Typeform via Stripe, explain what payment data you can access, who processes payments, and how financial information is protected.",
                    },
                    {
                      step: "5",
                      title: "Add GDPR consent mechanisms",
                      desc: "If you have EU respondents, include consent checkboxes in your forms, provide a link to your privacy policy, and ensure you have a lawful basis for processing each data type.",
                    },
                    {
                      step: "6",
                      title: "Include data rights and contact details",
                      desc: "Provide clear instructions for how respondents can request access to, correction of, or deletion of their form responses, and include your contact details for privacy inquiries.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-semibold flex items-center justify-center mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-600 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  <p className="text-base leading-7 text-slate-700">
                    If you also use scheduling tools, check our guide on{" "}
                    <Link
                      href="/privacy-policy-for-calendly"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policies for Calendly
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    to ensure your scheduling data collection is also covered.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    11
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
                      q: "Do I need a privacy policy if I use Typeform?",
                      a: "Yes. Typeform collects respondent names, emails, and any other data you ask for in your forms. As the data controller, you need your own privacy policy disclosing what data you collect through Typeform and how you use it.",
                    },
                    {
                      q: "Does Typeform's privacy policy cover my forms?",
                      a: "No. Typeform's privacy policy explains how Typeform handles data as a company. You need your own policy explaining how you use the respondent data collected through your Typeform forms for your business purposes.",
                    },
                    {
                      q: "Do I need to disclose Typeform hidden fields?",
                      a: "Yes. Hidden fields collect data that respondents cannot see, such as email addresses, user IDs, or campaign parameters passed through URLs. Under GDPR and most privacy laws, you must disclose all data collection, including data collected without the respondent's direct input.",
                    },
                    {
                      q: "How does GDPR apply to Typeform surveys?",
                      a: "If any of your respondents are in the EU or EEA, GDPR applies. You must have a lawful basis for processing, provide a privacy notice before or at the time of data collection, include consent mechanisms where required, and honor data subject rights including access and erasure requests.",
                    },
                    {
                      q: "What about payment data collected through Typeform?",
                      a: "Typeform processes payments through Stripe. Your privacy policy should explain that payment processing is handled by Stripe, what financial data you can access (such as transaction confirmations and last four digits), and link to Stripe's privacy policy.",
                    },
                    {
                      q: "Do embedded Typeforms require privacy disclosures?",
                      a: "Yes. Embedded Typeforms load scripts from Typeform's servers that can set cookies and collect IP addresses, browser data, and interaction metrics from your website visitors. Your privacy and cookie policies must disclose this.",
                    },
                    {
                      q: "What Typeform integrations should I disclose?",
                      a: "You must disclose every integration that receives respondent data, including Zapier, HubSpot, Google Sheets, Mailchimp, Slack, and Airtable. Explain what data each integration receives and why it is shared.",
                    },
                  ].map((item) => (
                    <div
                      key={item.q}
                      className="rounded-xl border border-slate-200/80 p-5 bg-white/50"
                    >
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.q}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-slate-600">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Dark CTA Section */}
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
                    <ClipboardList className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate My Typeform Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy covering Typeform
                      surveys, hidden fields, integrations, and payment forms
                      in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Typeform Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Typeform-ready structure</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
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
                      href: "/privacy-policy-for-calendly",
                      icon: FileText,
                      title: "Privacy Policy for Calendly",
                      desc: "Scheduling tool privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      icon: FileText,
                      title: "Privacy Policy for SaaS",
                      desc: "SaaS platform compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Website compliance guide",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                      icon: ShieldCheck,
                      title: "Privacy Policy for Collecting Emails",
                      desc: "Email collection compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: ShieldCheck,
                      title: "Privacy Policy for Small Business",
                      desc: "Small business privacy essentials",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks and penalties explained",
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
