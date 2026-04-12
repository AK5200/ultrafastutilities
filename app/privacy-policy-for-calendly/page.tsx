import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  CheckCircle,
  FileText,
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
  XCircle,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Calendly: Scheduling Tool Guide (2026) | ultrafastutilities",
  description: "Using Calendly for appointment scheduling? Your privacy policy must disclose invitee data collection. Covers Calendly forms, integrations, payment collection, and embedded widgets.",
  keywords: "privacy policy for calendly, calendly privacy policy, calendly data collection, scheduling tool privacy policy, calendly booking privacy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-calendly",
  },
  openGraph: {
    title: "Privacy Policy for Calendly: Scheduling Tool Guide (2026) | ultrafastutilities",
    description: "Using Calendly for appointment scheduling? Your privacy policy must disclose invitee data collection. Covers Calendly forms, integrations, payment collection, and embedded widgets.",
    url: "https://ultrafastutilities.com/privacy-policy-for-calendly",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Calendly | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Calendly: Scheduling Tool Guide (2026) | ultrafastutilities",
    description: "Using Calendly for appointment scheduling? Your privacy policy must disclose invitee data collection. Covers Calendly forms, integrations, payment collection, and embedded widgets.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-needed", title: "Why You Need a Policy" },
  { id: "data-collection", title: "What Calendly Collects" },
  { id: "integrations", title: "Integrations" },
  { id: "embedded-widgets", title: "Embedded Widget Tracking" },
  { id: "payment-collection", title: "Payment Collection" },
  { id: "custom-forms", title: "Custom Form Fields" },
  { id: "routing-scheduling", title: "Routing & Team Scheduling" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to", title: "How to Write Your Policy" },
  { id: "faq", title: "FAQs" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForCalendlyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Calendly: Scheduling Tool Guide (2026) | ultrafastutilities",
            description: "Using Calendly for appointment scheduling? Your privacy policy must disclose invitee data collection. Covers Calendly forms, integrations, payment collection, and embedded widgets.",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Calendly", item: "https://ultrafastutilities.com/privacy-policy-for-calendly" },
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
            name: "How to Write a Privacy Policy for Calendly",
            description: "Step-by-step guide to creating a privacy policy that covers Calendly scheduling, invitee data, and integrations.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Audit your Calendly event types", text: "Review every event type you offer and identify what data each one collects from invitees, including default fields and any custom questions you have added." },
              { "@type": "HowToStep", position: 2, name: "List all connected integrations", text: "Document every service connected to Calendly, such as Google Calendar, Outlook, Zoom, Salesforce, HubSpot, Stripe, or PayPal, and note what data flows to each." },
              { "@type": "HowToStep", position: 3, name: "Document embedded widget usage", text: "If you embed Calendly on your website, disclose that the widget may set cookies and track visitor behavior before a booking is made." },
              { "@type": "HowToStep", position: 4, name: "Address payment data handling", text: "If you collect payments through Calendly via Stripe or PayPal, explain what payment data you can access, who processes payments, and how financial information is protected." },
              { "@type": "HowToStep", position: 5, name: "Cover routing and team scheduling", text: "If you use Calendly Routing or team scheduling features, disclose how invitee data is distributed among team members and what logic determines assignments." },
              { "@type": "HowToStep", position: 6, name: "Add data rights and contact information", text: "Provide clear instructions for how invitees can request access to, correction of, or deletion of their personal data, and include your contact details for privacy inquiries." },
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
                name: "Do I need a privacy policy if I use Calendly for scheduling?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Calendly collects invitee names, emails, and potentially phone numbers, payment details, and custom form responses on your behalf. As the data controller, you need your own privacy policy disclosing this collection." },
              },
              {
                "@type": "Question",
                name: "Does Calendly's privacy policy cover my data collection?",
                acceptedAnswer: { "@type": "Answer", text: "No. Calendly's privacy policy explains how Calendly handles data as a company. You need your own policy explaining how you use the invitee data you collect through Calendly for your business purposes." },
              },
              {
                "@type": "Question",
                name: "What should I disclose about Calendly integrations?",
                acceptedAnswer: { "@type": "Answer", text: "Your policy must list each integration that receives invitee data, such as Google Calendar, Zoom, Salesforce, or HubSpot. Explain what data is shared with each service and why." },
              },
              {
                "@type": "Question",
                name: "Do embedded Calendly widgets require privacy disclosures?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Embedded Calendly widgets can set cookies and track visitor behavior on your website. Your cookie policy and privacy policy should both disclose the presence of the Calendly embed and what data it collects." },
              },
              {
                "@type": "Question",
                name: "How do I handle payment data collected through Calendly?",
                acceptedAnswer: { "@type": "Answer", text: "Calendly processes payments through Stripe or PayPal. Your privacy policy should explain that payment processing is handled by these third parties, what financial data you can access (such as transaction confirmations), and link to the payment processor's privacy policy." },
              },
              {
                "@type": "Question",
                name: "Does GDPR apply to Calendly scheduling?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. If any of your invitees are located in the EU or EEA, GDPR applies to your use of Calendly. You must have a lawful basis for processing, provide privacy notices, and honor data subject rights including the right to erasure." },
              },
              {
                "@type": "Question",
                name: "What if I use Calendly custom form fields?",
                acceptedAnswer: { "@type": "Answer", text: "Any custom questions or fields you add to your Calendly booking pages collect additional personal data that must be disclosed in your privacy policy. This includes text responses, dropdown selections, phone numbers, and any other information you request." },
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
              <span className="text-slate-600">Privacy Policy for Calendly</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Calendar className="w-3.5 h-3.5" />
                Scheduling Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Calendly
                </span>
                : What Scheduling Tool Users Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Using Calendly for appointment scheduling? Your privacy policy
                must disclose invitee data collection, integrations, payment
                collection, and embedded widgets.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for consultants, sales teams, coaches, and any business using Calendly.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-zoom"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Zoom
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
                  <span>11 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Featured Snippet */}
              <div className="rounded-xl border border-blue-200/80 bg-blue-50/40 p-6 mb-10">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">
                  Quick Answer: Do You Need a Privacy Policy for Calendly?
                </h2>
                <p className="text-base leading-7 text-slate-700">
                  <strong>Yes.</strong> If you use Calendly for appointment
                  scheduling, you collect invitee names, email addresses, and
                  potentially phone numbers, payment details, and custom form
                  responses. As the data controller, your privacy policy must
                  explain what data you collect through Calendly, why you collect
                  it, which integrations receive that data, and how invitees can
                  exercise their privacy rights. Calendly&apos;s own privacy
                  policy does not cover your use of invitee data.
                </p>
              </div>

              {/* Section 1: Why Calendly Users Need a Privacy Policy */}
              <section id="why-needed" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Calendly Users Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Calendly collects personal data from every person who books
                    a meeting with you. Even the simplest booking page captures
                    names and email addresses. Most business uses go far beyond
                    that, triggering privacy law obligations you must address.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      { label: "Consultants and freelancers", text: "Client booking pages collect names, emails, and often phone numbers or project details through custom questions" },
                      { label: "Sales teams", text: "Calendly routes leads to sales reps and syncs invitee data to CRMs like Salesforce and HubSpot, creating multiple data flows to disclose" },
                      { label: "Coaches and therapists", text: "Booking forms may collect sensitive information about health conditions, goals, or personal circumstances" },
                      { label: "Recruiters and HR teams", text: "Candidate scheduling pages capture applicant data that flows into hiring workflows and applicant tracking systems" },
                      { label: "Educators and tutors", text: "Student scheduling involves collecting personal data from minors in some cases, triggering additional protections like COPPA" },
                      { label: "Service businesses", text: "Any business collecting payments through Calendly handles financial data alongside personal contact information" },
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
                        Calendly processes over 100 million meetings per year
                        across 50 million users. If you use Calendly for any
                        business purpose, you are likely processing enough
                        personal data to trigger privacy law obligations under
                        GDPR, CCPA, and similar regulations.
                      </div>
                    </div>
                  </div>

                  {/* Mini-FAQ #1 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <h3 className="font-semibold text-slate-900 text-sm mb-2">
                      What if I only use Calendly for personal scheduling?
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Personal, non-commercial use of Calendly typically does
                      not require a privacy policy. However, as soon as you use
                      Calendly for any business purpose, including freelance
                      consultations or client meetings, privacy obligations
                      apply because you are collecting personal data for
                      commercial activities.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What Calendly Collects */}
              <section id="data-collection" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Calendly Collects: Data Types You Must Disclose
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Calendly captures a range of invitee data that your
                      privacy policy needs to address.
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
                          { type: "Invitee name and email", examples: "Full name, email address provided at booking", when: "Every booking" },
                          { type: "Phone numbers", examples: "Mobile or landline numbers for call-based events", when: "Phone call event types" },
                          { type: "Custom form responses", examples: "Text answers, dropdown selections, textarea inputs", when: "When custom questions are configured" },
                          { type: "Payment information", examples: "Transaction amount, payment confirmation, billing details", when: "When payment collection is enabled" },
                          { type: "Calendar availability", examples: "Time zone, selected time slot, scheduling preferences", when: "Every booking" },
                          { type: "UTM and tracking parameters", examples: "UTM source, medium, campaign values from booking URLs", when: "When tracking parameters are appended" },
                          { type: "Browser and device data", examples: "IP address, browser type, device information from embedded widgets", when: "Embedded Calendly pages" },
                          { type: "Cancellation and rescheduling data", examples: "Reason for cancellation, rescheduled times, no-show records", when: "When invitees cancel or reschedule" },
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
                        Calendly automatically captures the invitee&apos;s time
                        zone and IP address with every booking. Under GDPR, IP
                        addresses are considered personal data, meaning your
                        privacy policy must disclose this collection even if you
                        never actively review it.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Integrations */}
              <section id="integrations" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Integrations You Must Disclose
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Calendly connects to many third-party services, and each
                    integration creates a data flow that your privacy policy
                    must address. Here are the most common integrations and what
                    they mean for your disclosures:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Calendar,
                        color: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "Google Calendar and Outlook",
                        text: "Calendar integrations sync invitee names, emails, event details, and meeting notes. Your policy must disclose that booking data is shared with your calendar provider and stored according to their retention policies.",
                      },
                      {
                        icon: Link2,
                        color: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "Zoom and Microsoft Teams",
                        text: "When Calendly auto-generates meeting links, invitee data flows to the video conferencing platform. Disclose that meeting links are created automatically and that the video provider receives participant information.",
                      },
                      {
                        icon: Users,
                        color: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Salesforce and HubSpot",
                        text: "CRM integrations push invitee names, emails, booking details, and custom form responses into your sales pipeline. Your policy must explain that invitee data is stored in your CRM for relationship management and marketing purposes.",
                      },
                      {
                        icon: CreditCard,
                        color: "bg-orange-50",
                        iconColor: "text-orange-600",
                        title: "Stripe and PayPal",
                        text: "Payment integrations process financial data through third-party payment processors. Disclose that payment information is handled by Stripe or PayPal, not stored by you directly, and link to the processor's privacy policy.",
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

                  <p className="text-base leading-7 text-slate-700">
                    If you also use Zoom for video meetings, check our guide on{" "}
                    <Link
                      href="/privacy-policy-for-zoom"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policies for Zoom
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    to ensure your video conferencing integration is also
                    covered.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Embedded Widget Tracking */}
              <section id="embedded-widgets" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Embedded Widget Tracking
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Many businesses embed Calendly directly on their{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      websites
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    using inline embeds, popup widgets, or popup text links.
                    Each embedding method introduces tracking considerations
                    that your privacy policy must address.
                  </p>

                  <div className="space-y-3">
                    {[
                      { label: "Cookies and local storage", text: "The Calendly embed sets cookies and uses local storage to remember visitor preferences, track conversions, and maintain session state" },
                      { label: "Third-party scripts", text: "Embedding Calendly loads JavaScript from Calendly's servers, which may collect IP addresses, browser information, and referral data from your visitors" },
                      { label: "UTM parameter tracking", text: "Calendly captures UTM parameters from the page URL, linking marketing campaign data to individual bookings and invitee records" },
                      { label: "Page interaction data", text: "The widget can track when visitors view the scheduling page, how long they spend selecting a time, and whether they complete or abandon the booking" },
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
                        <strong className="text-slate-900">Cookie consent required:</strong>{" "}
                        Under GDPR and the ePrivacy Directive, you must obtain
                        cookie consent before loading the Calendly embed if it
                        sets non-essential cookies. Many cookie consent platforms
                        allow you to block the Calendly script until consent is
                        given.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Payment Collection */}
              <section id="payment-collection" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Payment Collection
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Calendly allows you to collect payments at the time of
                    booking through Stripe or PayPal. When you enable payment
                    collection, additional privacy disclosures are required
                    because financial data is involved.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: CreditCard,
                        color: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "What payment data you can access",
                        text: "You do not receive full credit card numbers through Calendly. However, you can access transaction amounts, payment status, last four digits of the card, and billing names. Your policy must disclose what financial information you can see.",
                      },
                      {
                        icon: ShieldCheck,
                        color: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Third-party payment processing",
                        text: "Stripe and PayPal handle the actual payment processing. Your privacy policy should name the payment processor, explain that you do not store full card details, and link to the processor's own privacy policy.",
                      },
                      {
                        icon: ClipboardList,
                        color: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "Refund and cancellation records",
                        text: "Payment records tied to cancelled or rescheduled bookings create additional data points. Disclose how long you retain payment records and how refund requests are handled.",
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
                      Do I need PCI compliance if I collect payments through Calendly?
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Since Stripe and PayPal handle the actual card processing,
                      your PCI compliance burden is significantly reduced.
                      However, your privacy policy still must disclose that
                      payments are collected, name the processor, and explain
                      what transaction data you retain.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Custom Form Fields */}
              <section id="custom-forms" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Custom Form Fields
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Calendly lets you add custom questions to booking pages,
                    which means the data you collect can vary widely depending
                    on your use case. Your privacy policy must account for every
                    custom field you use across all event types.
                  </p>

                  <div className="space-y-3">
                    {[
                      { label: "Single-line text fields", text: "Common for collecting phone numbers, company names, or reference numbers that invitees enter manually" },
                      { label: "Multi-line text areas", text: "Used for collecting detailed information like project descriptions, health conditions, or meeting agendas" },
                      { label: "Dropdown selections", text: "Pre-defined options for categorizing invitees, such as service type, department, or inquiry reason" },
                      { label: "Radio buttons and checkboxes", text: "Used for consent checkboxes, preference selections, or qualifying questions that filter invitees" },
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
                    If your custom fields collect sensitive data such as health
                    information, financial details, or information about minors,
                    your{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR-compliant policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    must include specific lawful bases and additional safeguards
                    for processing special category data.
                  </p>

                  {/* Did you know? #3 */}
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <Sparkles className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Calendly allows you to mark custom questions as required
                        or optional. Under data minimization principles in GDPR,
                        you should only require fields that are strictly
                        necessary for the booking purpose. Making too many
                        fields required can create compliance issues.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Routing and Team Scheduling */}
              <section id="routing-scheduling" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Routing and Team Scheduling
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Calendly Routing and team scheduling features introduce
                    additional data flows that your privacy policy should
                    address, especially for{" "}
                    <Link
                      href="/privacy-policy-for-small-business"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      small businesses
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    with multiple team members.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Users,
                        color: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "Round-robin assignment",
                        text: "When using round-robin scheduling, invitee data is distributed among team members based on availability or priority rules. Disclose that multiple team members may access booking information.",
                      },
                      {
                        icon: Globe,
                        color: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Routing forms",
                        text: "Calendly Routing asks invitees qualifying questions before showing available times. The answers to routing questions are additional data points that must be disclosed in your privacy policy.",
                      },
                      {
                        icon: ClipboardList,
                        color: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "Collective and group events",
                        text: "Collective events share invitee data with all required hosts. Group events may reveal one invitee's booking to other invitees if the event name or details are visible on the calendar invite.",
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

              {/* Section 8: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
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
                      mistake: "Relying on Calendly's privacy policy instead of your own",
                      fix: "Calendly's policy covers Calendly as a company. You need your own policy explaining how you use invitee data obtained through Calendly for your business purposes.",
                    },
                    {
                      mistake: "Not disclosing CRM and marketing integrations",
                      fix: "If invitee data flows to Salesforce, HubSpot, or email marketing tools, your policy must list these services and explain why data is shared with them.",
                    },
                    {
                      mistake: "Ignoring embedded widget cookies and tracking",
                      fix: "The Calendly embed sets cookies on your website. Your cookie policy must disclose this, and under GDPR you may need consent before loading the widget.",
                    },
                    {
                      mistake: "Forgetting to update your policy when adding custom fields",
                      fix: "Each new custom question collects additional personal data. Review and update your privacy policy whenever you add or change custom form fields on your booking pages.",
                    },
                    {
                      mistake: "Not addressing payment data in your privacy policy",
                      fix: "If you collect payments through Calendly, your policy must name the payment processor, explain what financial data you can access, and describe your retention practices.",
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

              {/* Section 9: How to Write Your Policy */}
              <section id="how-to" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Write Your Calendly Privacy Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Follow these six steps to create a complete privacy policy
                      for your Calendly usage.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Audit your Calendly event types",
                      desc: "Review every event type you offer and identify what data each one collects from invitees, including default fields and any custom questions you have added.",
                    },
                    {
                      step: "2",
                      title: "List all connected integrations",
                      desc: "Document every service connected to Calendly, such as Google Calendar, Outlook, Zoom, Salesforce, HubSpot, Stripe, or PayPal, and note what data flows to each.",
                    },
                    {
                      step: "3",
                      title: "Document embedded widget usage",
                      desc: "If you embed Calendly on your website, disclose that the widget may set cookies and track visitor behavior before a booking is made.",
                    },
                    {
                      step: "4",
                      title: "Address payment data handling",
                      desc: "If you collect payments through Calendly via Stripe or PayPal, explain what payment data you can access, who processes payments, and how financial information is protected.",
                    },
                    {
                      step: "5",
                      title: "Cover routing and team scheduling",
                      desc: "If you use Calendly Routing or team scheduling features, disclose how invitee data is distributed among team members and what logic determines assignments.",
                    },
                    {
                      step: "6",
                      title: "Add data rights and contact information",
                      desc: "Provide clear instructions for how invitees can request access to, correction of, or deletion of their personal data, and include your contact details for privacy inquiries.",
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
                    If you also use form builders alongside Calendly, check our
                    guide on{" "}
                    <Link
                      href="/privacy-policy-for-typeform"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policies for Typeform
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    to ensure your form data collection is also covered.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQ Section */}
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
                      q: "Do I need a privacy policy if I use Calendly for scheduling?",
                      a: "Yes. Calendly collects invitee names, emails, and potentially phone numbers, payment details, and custom form responses on your behalf. As the data controller, you need your own privacy policy disclosing this collection.",
                    },
                    {
                      q: "Does Calendly's privacy policy cover my data collection?",
                      a: "No. Calendly's privacy policy explains how Calendly handles data as a company. You need your own policy explaining how you use the invitee data you collect through Calendly for your business purposes.",
                    },
                    {
                      q: "What should I disclose about Calendly integrations?",
                      a: "Your policy must list each integration that receives invitee data, such as Google Calendar, Zoom, Salesforce, or HubSpot. Explain what data is shared with each service and why.",
                    },
                    {
                      q: "Do embedded Calendly widgets require privacy disclosures?",
                      a: "Yes. Embedded Calendly widgets can set cookies and track visitor behavior on your website. Your cookie policy and privacy policy should both disclose the presence of the Calendly embed and what data it collects.",
                    },
                    {
                      q: "How do I handle payment data collected through Calendly?",
                      a: "Calendly processes payments through Stripe or PayPal. Your privacy policy should explain that payment processing is handled by these third parties, what financial data you can access (such as transaction confirmations), and link to the payment processor's privacy policy.",
                    },
                    {
                      q: "Does GDPR apply to Calendly scheduling?",
                      a: "Yes. If any of your invitees are located in the EU or EEA, GDPR applies to your use of Calendly. You must have a lawful basis for processing, provide privacy notices, and honor data subject rights including the right to erasure.",
                    },
                    {
                      q: "What if I use Calendly custom form fields?",
                      a: "Any custom questions or fields you add to your Calendly booking pages collect additional personal data that must be disclosed in your privacy policy. This includes text responses, dropdown selections, phone numbers, and any other information you request.",
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
                    <Calendar className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate My Calendly Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy covering Calendly
                      bookings, integrations, payment collection, and embedded
                      widgets in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Calendly Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Calendly-ready structure</span>
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
                      href: "/privacy-policy-for-zoom",
                      icon: FileText,
                      title: "Privacy Policy for Zoom",
                      desc: "Video conferencing privacy guide",
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
                      href: "/privacy-policy-for-small-business",
                      icon: ShieldCheck,
                      title: "Privacy Policy for Small Business",
                      desc: "Small business privacy essentials",
                    },
                    {
                      href: "/privacy-policy-for-typeform",
                      icon: FileText,
                      title: "Privacy Policy for Typeform",
                      desc: "Form builder privacy requirements",
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
