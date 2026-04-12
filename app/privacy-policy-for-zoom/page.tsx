import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Video,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Mic,
  Users,
  MessageSquare,
  Monitor,
  ClipboardList,
  Clock,
  AlertTriangle,
  Heart,
  Sparkles,
  Phone,
  XCircle,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Zoom: Meeting Host & App Guide (2026) | ultrafastutilities",
  description: "Using Zoom for business meetings, webinars, or building Zoom apps? Your privacy policy must cover recording, participant data, chat logs, and Zoom Marketplace requirements.",
  keywords: "privacy policy for zoom, zoom privacy policy, zoom meeting privacy policy, zoom recording privacy policy, zoom app marketplace privacy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-zoom",
  },
  openGraph: {
    title: "Privacy Policy for Zoom: Meeting Host & App Guide (2026) | ultrafastutilities",
    description: "Using Zoom for business meetings, webinars, or building Zoom apps? Your privacy policy must cover recording, participant data, chat logs, and Zoom Marketplace requirements.",
    url: "https://ultrafastutilities.com/privacy-policy-for-zoom",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Zoom | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Zoom: Meeting Host & App Guide (2026) | ultrafastutilities",
    description: "Using Zoom for business meetings, webinars, or building Zoom apps? Your privacy policy must cover recording, participant data, chat logs, and Zoom Marketplace requirements.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "when-needed", title: "When You Need a Policy" },
  { id: "data-collection", title: "What Zoom Collects" },
  { id: "recording-requirements", title: "Recording Requirements" },
  { id: "webinar-data", title: "Webinar Data" },
  { id: "marketplace", title: "Zoom Apps Marketplace" },
  { id: "zoom-phone", title: "Zoom Phone" },
  { id: "ai-companion", title: "AI Companion" },
  { id: "hipaa", title: "HIPAA and Healthcare" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to", title: "How to Write Your Policy" },
  { id: "faq", title: "FAQs" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForZoomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Zoom: Meeting Host & App Guide (2026) | ultrafastutilities",
            description: "Using Zoom for business meetings, webinars, or building Zoom apps? Your privacy policy must cover recording, participant data, chat logs, and Zoom Marketplace requirements.",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Zoom", item: "https://ultrafastutilities.com/privacy-policy-for-zoom" },
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
            name: "How to Write a Privacy Policy for Zoom",
            description: "Step-by-step guide to creating a privacy policy that covers Zoom meetings, recordings, and integrations.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Identify your Zoom usage", text: "Determine whether you host meetings, webinars, use Zoom Phone, or build Zoom apps. Each use case triggers different privacy obligations." },
              { "@type": "HowToStep", position: 2, name: "Audit data collected through Zoom", text: "List every data type you receive: participant names, emails, recordings, chat logs, attendance reports, registration forms, and poll responses." },
              { "@type": "HowToStep", position: 3, name: "Document recording and storage practices", text: "Specify whether you record meetings locally or to the cloud, how long recordings are retained, who has access, and how participants are notified before recording begins." },
              { "@type": "HowToStep", position: 4, name: "Disclose third-party sharing and integrations", text: "List any services that receive Zoom data, such as CRM platforms, transcription tools, cloud storage providers, or marketing automation systems." },
              { "@type": "HowToStep", position: 5, name: "Address AI and smart features", text: "If you use Zoom AI Companion, meeting summaries, or smart recording features, disclose what data these tools process and how outputs are stored or shared." },
              { "@type": "HowToStep", position: 6, name: "Add consent and opt-out mechanisms", text: "Provide clear instructions for how participants can opt out of recordings, request deletion of their data, and exercise their rights under GDPR, CCPA, or other applicable laws." },
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
                name: "Do I need a privacy policy if I only host Zoom meetings?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. If you collect participant names, emails, or record meetings, you are processing personal data and need a privacy policy. This applies even to free Zoom accounts used for business purposes." },
              },
              {
                "@type": "Question",
                name: "Does Zoom's own privacy policy cover my business?",
                acceptedAnswer: { "@type": "Answer", text: "No. Zoom's privacy policy covers how Zoom itself handles data. As a meeting host or app developer, you need your own policy explaining how you collect, use, and share participant data obtained through Zoom." },
              },
              {
                "@type": "Question",
                name: "Do I need to tell participants before recording a Zoom meeting?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Most jurisdictions require prior notice and, in many cases, consent before recording. Zoom displays a notification to participants, but your privacy policy should also explain your recording practices, retention periods, and who has access." },
              },
              {
                "@type": "Question",
                name: "What should my privacy policy say about Zoom webinar registration data?",
                acceptedAnswer: { "@type": "Answer", text: "Your policy should disclose what registration fields you collect, how you use registrant data (such as follow-up emails or marketing), whether you share it with co-hosts or sponsors, and how long you retain it." },
              },
              {
                "@type": "Question",
                name: "Do Zoom app developers need a separate privacy policy?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Zoom requires every app published to the Zoom App Marketplace to have its own privacy policy URL. The policy must explain what user data the app accesses, how it is processed, and how users can request deletion." },
              },
              {
                "@type": "Question",
                name: "How does Zoom AI Companion affect my privacy policy?",
                acceptedAnswer: { "@type": "Answer", text: "If you enable AI Companion features like meeting summaries or smart recordings, your policy must disclose that AI processes meeting content, what data is used, how outputs are stored, and whether participants can opt out." },
              },
              {
                "@type": "Question",
                name: "Is Zoom HIPAA compliant for healthcare use?",
                acceptedAnswer: { "@type": "Answer", text: "Zoom offers a HIPAA-compliant version (Zoom for Healthcare) with a Business Associate Agreement. However, you still need your own privacy policy that addresses PHI handling, recording restrictions, and compliance with healthcare privacy regulations." },
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
              <span className="text-slate-600">Privacy Policy for Zoom</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Video className="w-3.5 h-3.5" />
                Zoom Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Zoom
                </span>
                : What Meeting Hosts and App Developers Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Using Zoom for business meetings, webinars, or building Zoom
                apps? Your privacy policy must cover recording, participant
                data, chat logs, and Zoom Marketplace requirements.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for meeting hosts, webinar organizers, and Zoom app developers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-saas"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for SaaS
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-calendly"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Calendly
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
                <h2 className="text-lg font-semibold text-slate-900 mb-3">
                  Quick Answer: Do You Need a Privacy Policy for Zoom?
                </h2>
                <p className="text-base leading-7 text-slate-700">
                  <strong>Yes.</strong> If you host Zoom meetings, webinars, or
                  build Zoom apps, you need your own privacy policy. Zoom
                  collects participant names, emails, recordings, chat messages,
                  and attendance data on your behalf. Your policy must explain
                  what you collect, why, who you share it with, and how
                  participants can exercise their rights. Zoom&apos;s own privacy
                  policy does not cover your use of participant data.
                </p>
              </div>

              {/* Section 1: When Zoom Users Need a Privacy Policy */}
              <section id="when-needed" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      When Zoom Users Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Not every Zoom user needs a privacy policy, but most
                    business and professional uses require one. You need a
                    privacy policy if you fall into any of these categories:
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      { label: "Business meeting hosts", text: "You collect participant names, emails, and may record conversations for internal use or client records" },
                      { label: "Webinar organizers", text: "Registration forms capture personal data, and attendee analytics track engagement throughout the session" },
                      { label: "Zoom app developers", text: "The Zoom App Marketplace requires a privacy policy URL before any app can be published" },
                      { label: "Online educators and trainers", text: "Student participation data, attendance records, and session recordings all constitute personal data" },
                      { label: "Healthcare providers", text: "Telehealth sessions via Zoom involve protected health information (PHI) with additional compliance requirements" },
                      { label: "Recruiters and HR teams", text: "Interview recordings, candidate data, and assessment notes collected through Zoom require privacy disclosures" },
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
                        Zoom processes over 300 million daily meeting participants.
                        If you host even a handful of business meetings per week,
                        you are likely processing enough personal data to trigger
                        privacy law obligations under GDPR, CCPA, and similar
                        regulations.
                      </div>
                    </div>
                  </div>

                  {/* Mini-FAQ #1 */}
                  <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <h3 className="font-semibold text-slate-900 text-sm mb-2">
                      What if I only use Zoom for personal calls?
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Personal, non-commercial use of Zoom typically does not
                      require a privacy policy. However, as soon as you use Zoom
                      for any business purpose, including freelance client calls
                      or consulting sessions, privacy obligations apply.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What Zoom Collects */}
              <section id="data-collection" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Zoom Collects: Data Types You Must Disclose
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Zoom captures a wide range of participant data that your
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
                          { type: "Participant names and emails", examples: "Display names, email addresses from Zoom accounts", when: "Every meeting" },
                          { type: "Meeting recordings", examples: "Video, audio, and transcript files", when: "When recording is enabled" },
                          { type: "Chat messages", examples: "In-meeting chat, direct messages during sessions", when: "Every meeting with chat enabled" },
                          { type: "Screen shares", examples: "Shared screens, presentations, and annotations", when: "When screen sharing is used" },
                          { type: "Attendance logs", examples: "Join/leave times, duration, IP addresses", when: "Every meeting (host reports)" },
                          { type: "Registration data", examples: "Custom form fields, company, job title, phone", when: "Webinars and registered meetings" },
                          { type: "Webinar Q&A", examples: "Questions submitted, upvotes, host answers", when: "Webinar sessions" },
                          { type: "Polls and surveys", examples: "Poll responses, post-meeting survey answers", when: "When polls are configured" },
                          { type: "Breakout rooms", examples: "Room assignments, participant groupings", when: "When breakout rooms are used" },
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
                      href="/privacy-policy-for-apps"
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
                        Zoom attendance reports include participant IP addresses
                        by default. Under GDPR, IP addresses are considered
                        personal data, meaning your privacy policy must disclose
                        this collection even if you never actively look at the
                        reports.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Meeting Recording Requirements */}
              <section id="recording-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Meeting Recording Requirements
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Recording Zoom meetings is one of the most privacy-sensitive
                    features. Many jurisdictions have specific consent and
                    notification requirements for audio and video recording.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Mic,
                        color: "bg-red-50",
                        iconColor: "text-red-600",
                        title: "Consent before recording",
                        text: "Zoom displays a notification when recording starts, but this alone may not satisfy all legal requirements. Your policy should explain that meetings may be recorded and how participants can object.",
                      },
                      {
                        icon: Monitor,
                        color: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "Local vs. cloud recording",
                        text: "Specify whether recordings are stored on the host's device (local) or on Zoom's servers (cloud). Cloud recordings involve additional third-party data processing that must be disclosed.",
                      },
                      {
                        icon: Clock,
                        color: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Retention and deletion",
                        text: "State how long recordings are kept, where they are stored, and when they are deleted. Zoom cloud recordings can be set to auto-delete after a specified period.",
                      },
                      {
                        icon: Users,
                        color: "bg-orange-50",
                        iconColor: "text-orange-600",
                        title: "Access controls",
                        text: "Disclose who within your organization can access recordings, whether recordings are shared with third parties, and what security measures protect them.",
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
                        <strong className="text-slate-900">Two-party consent states:</strong>{" "}
                        In states like California, Illinois, and Florida, all
                        parties must consent to being recorded. Simply starting a
                        Zoom recording without affirmative consent from every
                        participant can violate wiretapping laws, regardless of
                        what your privacy policy says.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Zoom Webinar Data */}
              <section id="webinar-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Zoom Webinar Data
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Zoom webinars collect significantly more data than regular
                    meetings. As a webinar host, your privacy policy needs
                    additional disclosures for the following:
                  </p>

                  <div className="space-y-3">
                    {[
                      { label: "Registration forms", text: "Custom fields like company name, job title, phone number, and industry that you define in the registration form" },
                      { label: "Attendee engagement data", text: "Zoom tracks attention indicators, poll responses, Q&A participation, and how long each attendee stayed" },
                      { label: "Follow-up communications", text: "If you use registrant emails for post-webinar marketing, drip campaigns, or sales outreach, this must be disclosed" },
                      { label: "Co-host and panelist data", text: "Panelists and co-hosts share additional data including video feeds, which may be recorded and distributed" },
                      { label: "On-demand recordings", text: "If you make webinar recordings available on-demand, anyone who registers to watch also provides personal data" },
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
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-5">
                    <h3 className="font-semibold text-slate-900 text-sm mb-2">
                      Can I share webinar registrant data with sponsors?
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Yes, but only if your privacy policy clearly discloses this
                      practice and you obtain appropriate consent. Under GDPR,
                      sharing registrant data with sponsors requires a lawful
                      basis, typically explicit consent at registration.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Zoom Apps Marketplace */}
              <section id="marketplace" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Zoom Apps Marketplace
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    If you build or publish apps on the{" "}
                    <Link
                      href="/privacy-policy-for-apps"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Zoom App Marketplace
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , Zoom requires a privacy policy URL as part of the
                    submission process. Your app will not be approved without one.
                  </p>

                  <div className="rounded-xl border border-slate-200/80 p-5 bg-white/50">
                    <h3 className="font-semibold text-slate-900 mb-4">
                      Marketplace Privacy Requirements
                    </h3>
                    <div className="space-y-3">
                      {[
                        "A public privacy policy URL accessible to all users",
                        "Clear description of what user data your app accesses via Zoom APIs",
                        "Explanation of how collected data is processed, stored, and protected",
                        "Data retention periods and deletion procedures",
                        "Instructions for users to request data access or deletion",
                        "Disclosure of any third-party services that receive Zoom user data",
                        "Compliance with Zoom's data handling requirements and API terms",
                      ].map((req) => (
                        <div
                          key={req}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Zoom reviews privacy policies during the app approval
                    process. Apps with vague or incomplete policies are
                    frequently rejected. If you are building a{" "}
                    <Link
                      href="/privacy-policy-for-saas"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      SaaS product
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    that integrates with Zoom, your policy must cover both your
                    platform and the Zoom integration specifically.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Zoom Phone */}
              <section id="zoom-phone" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Zoom Phone
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Zoom Phone adds VoIP calling capabilities that introduce
                    additional privacy considerations beyond standard video
                    meetings:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Phone,
                        color: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "Call recordings and voicemails",
                        text: "Zoom Phone can record calls and store voicemails containing personal data. Your policy must disclose recording practices, storage locations, and retention periods for phone data.",
                      },
                      {
                        icon: ClipboardList,
                        color: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Call logs and metadata",
                        text: "Phone numbers, call duration, timestamps, and caller ID information are all logged. These records constitute personal data under most privacy laws.",
                      },
                      {
                        icon: MessageSquare,
                        color: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "SMS and voicemail transcriptions",
                        text: "If you use Zoom Phone SMS or voicemail transcription features, the content of messages and transcriptions must be addressed in your privacy policy.",
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

              {/* Section 7: AI Companion and Smart Features */}
              <section id="ai-companion" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      AI Companion and Smart Features
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Zoom AI Companion and related smart features introduce new
                    privacy obligations that many organizations overlook. If you
                    have these features enabled, your privacy policy must address
                    them explicitly.
                  </p>

                  <div className="space-y-3">
                    {[
                      { label: "Meeting summaries", text: "AI-generated summaries process all spoken content in the meeting. Disclose that AI analyzes conversations and who receives the summaries" },
                      { label: "Smart recordings", text: "Chapters, highlights, and action items are extracted from recordings using AI. Explain how these AI-processed outputs are stored and shared" },
                      { label: "In-meeting questions", text: "AI Companion can answer questions about meeting content in real time. Clarify that meeting content is processed by AI systems during the session" },
                      { label: "Email and chat composition", text: "AI features that draft messages based on meeting context use participant data. Disclose this processing in your policy" },
                      { label: "Data usage for training", text: "Zoom has stated it does not use customer content to train AI models without consent. Your policy should confirm your own stance on AI data usage" },
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
                        Zoom AI Companion is enabled by default for many
                        account types. Even if you have not actively turned it
                        on, your meetings may already be processed by AI features.
                        Check your Zoom admin settings and update your privacy
                        policy accordingly.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: HIPAA and Zoom for Healthcare */}
              <section id="hipaa" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      HIPAA and Zoom for Healthcare
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Healthcare providers using Zoom for telehealth must meet
                    HIPAA requirements in addition to standard privacy
                    obligations. Zoom offers a HIPAA-compliant product, but your
                    own privacy policy must also reflect healthcare-specific
                    data handling.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Heart,
                        color: "bg-red-50",
                        iconColor: "text-red-600",
                        title: "Business Associate Agreement (BAA)",
                        text: "You must sign a BAA with Zoom before using it for telehealth. Your privacy policy should reference this agreement and explain that Zoom acts as a business associate for PHI processing.",
                      },
                      {
                        icon: ShieldCheck,
                        color: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "PHI in recordings and transcripts",
                        text: "If you record telehealth sessions, your policy must address how protected health information in recordings is stored, encrypted, accessed, and eventually destroyed.",
                      },
                      {
                        icon: Users,
                        color: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Patient rights and access",
                        text: "Patients have the right to access their health information. Your policy should explain how patients can request copies of session recordings or related data collected through Zoom.",
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
                      mistake: "Relying on Zoom's privacy policy instead of your own",
                      fix: "Zoom's policy covers Zoom as a company. You need your own policy explaining how you use participant data obtained through Zoom.",
                    },
                    {
                      mistake: "Not disclosing meeting recordings in your policy",
                      fix: "Recording is the single most sensitive Zoom feature. Your policy must explain what you record, why, how long you keep it, and who has access.",
                    },
                    {
                      mistake: "Ignoring AI Companion and smart features",
                      fix: "Many organizations enable AI features without updating their privacy policy. If AI processes meeting content, you must disclose it.",
                    },
                    {
                      mistake: "Using a generic website privacy policy for Zoom activities",
                      fix: "A standard website policy does not cover meeting-specific data like attendance logs, chat messages, or webinar registration. Use a policy tailored to your actual data practices.",
                    },
                    {
                      mistake: "Failing to address international participants",
                      fix: "Zoom meetings often include participants from multiple countries. Your policy must account for GDPR, CCPA, and other applicable privacy laws based on where your participants are located.",
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
                      How to Write Your Zoom Privacy Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Follow these six steps to create a complete privacy policy
                      for your Zoom usage.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Identify your Zoom usage",
                      desc: "Determine whether you host meetings, webinars, use Zoom Phone, or build Zoom apps. Each use case triggers different privacy obligations and requires specific disclosures.",
                    },
                    {
                      step: "2",
                      title: "Audit data collected through Zoom",
                      desc: "List every data type you receive: participant names, emails, recordings, chat logs, attendance reports, registration forms, and poll responses. Check your Zoom admin dashboard for a complete picture.",
                    },
                    {
                      step: "3",
                      title: "Document recording and storage practices",
                      desc: "Specify whether you record meetings locally or to the cloud, how long recordings are retained, who has access, and how participants are notified before recording begins.",
                    },
                    {
                      step: "4",
                      title: "Disclose third-party sharing and integrations",
                      desc: "List any services that receive Zoom data, such as CRM platforms, transcription tools, cloud storage providers, or marketing automation systems.",
                    },
                    {
                      step: "5",
                      title: "Address AI and smart features",
                      desc: "If you use Zoom AI Companion, meeting summaries, or smart recording features, disclose what data these tools process and how outputs are stored or shared.",
                    },
                    {
                      step: "6",
                      title: "Add consent and opt-out mechanisms",
                      desc: "Provide clear instructions for how participants can opt out of recordings, request deletion of their data, and exercise their rights under GDPR, CCPA, or other applicable laws.",
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
                    If you also use scheduling tools alongside Zoom, check our
                    guide on{" "}
                    <Link
                      href="/privacy-policy-for-calendly"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policies for Calendly
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    to ensure your scheduling integration is also covered.
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
                      q: "Do I need a privacy policy if I only host Zoom meetings?",
                      a: "Yes. If you collect participant names, emails, or record meetings, you are processing personal data and need a privacy policy. This applies even to free Zoom accounts used for business purposes.",
                    },
                    {
                      q: "Does Zoom's own privacy policy cover my business?",
                      a: "No. Zoom's privacy policy covers how Zoom itself handles data. As a meeting host or app developer, you need your own policy explaining how you collect, use, and share participant data obtained through Zoom.",
                    },
                    {
                      q: "Do I need to tell participants before recording a Zoom meeting?",
                      a: "Yes. Most jurisdictions require prior notice and, in many cases, consent before recording. Zoom displays a notification to participants, but your privacy policy should also explain your recording practices, retention periods, and who has access.",
                    },
                    {
                      q: "What should my privacy policy say about Zoom webinar registration data?",
                      a: "Your policy should disclose what registration fields you collect, how you use registrant data (such as follow-up emails or marketing), whether you share it with co-hosts or sponsors, and how long you retain it.",
                    },
                    {
                      q: "Do Zoom app developers need a separate privacy policy?",
                      a: "Yes. Zoom requires every app published to the Zoom App Marketplace to have its own privacy policy URL. The policy must explain what user data the app accesses, how it is processed, and how users can request deletion.",
                    },
                    {
                      q: "How does Zoom AI Companion affect my privacy policy?",
                      a: "If you enable AI Companion features like meeting summaries or smart recordings, your policy must disclose that AI processes meeting content, what data is used, how outputs are stored, and whether participants can opt out.",
                    },
                    {
                      q: "Is Zoom HIPAA compliant for healthcare use?",
                      a: "Zoom offers a HIPAA-compliant version (Zoom for Healthcare) with a Business Associate Agreement. However, you still need your own privacy policy that addresses PHI handling, recording restrictions, and compliance with healthcare privacy regulations.",
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
                    <Video className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate My Zoom Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy covering Zoom meetings,
                      recordings, webinars, and integrations in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Zoom Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Zoom-ready structure</span>
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
                      href: "/privacy-policy-for-saas",
                      icon: FileText,
                      title: "Privacy Policy for SaaS",
                      desc: "SaaS platform compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-calendly",
                      icon: FileText,
                      title: "Privacy Policy for Calendly",
                      desc: "Scheduling tool privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      icon: FileText,
                      title: "Privacy Policy for Apps",
                      desc: "Mobile and web app compliance",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: ShieldCheck,
                      title: "Privacy Policy for Small Business",
                      desc: "Small business privacy essentials",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Website compliance guide",
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
