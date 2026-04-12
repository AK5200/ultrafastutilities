import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Heart,
  CreditCard,
  Video,
  Calendar,
  Lock,
  Database,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Online Coaching: What Coaches Must Disclose (2026) | ultrafastutilities",
  description:
    "Online coaches collect sensitive client data -- health goals, finances, session recordings, and payments. Your privacy policy must cover all of it. Complete guide for life coaches, business coaches, and fitness coaches.",
  keywords:
    "privacy policy for online coaching, coaching privacy policy, life coach privacy policy, online coach data collection, coaching business privacy requirements",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-online-coaching",
  },
  openGraph: {
    title: "Privacy Policy for Online Coaching: What Coaches Must Disclose (2026) | ultrafastutilities",
    description: "Online coaches collect sensitive client data. Your privacy policy must cover health goals, session recordings, payments, and more.",
    url: "https://ultrafastutilities.com/privacy-policy-for-online-coaching",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Online Coaching | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Online Coaching: What Coaches Must Disclose (2026) | ultrafastutilities",
    description: "Online coaches collect sensitive client data. Your privacy policy must cover health goals, session recordings, payments, and more.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-coaches-need", title: "Why Coaches Need a Policy" },
  { id: "data-you-collect", title: "Data Coaches Collect" },
  { id: "tools-platforms", title: "Tools and Platforms" },
  { id: "sensitive-data", title: "Sensitive Data Handling" },
  { id: "what-to-include", title: "What to Include" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForOnlineCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Online Coaching: What Coaches Must Disclose (2026)",
            description: "Online coaches collect sensitive client data. Your privacy policy must cover health goals, session recordings, payments, and more.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-01-01",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Online Coaching", item: "https://ultrafastutilities.com/privacy-policy-for-online-coaching" },
            ],
          }),
        }}
      />
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
              <span className="text-slate-600">Privacy Policy for Online Coaching</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Heart className="w-3.5 h-3.5" />
                Coaching Compliance
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Online Coaching
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Life coaches, business coaches, and fitness coaches collect some
                of the most sensitive personal data online -- health goals,
                financial details, session recordings, and payment information.
                Here is what your privacy policy must cover.
              </p>
              <p className="mt-3 text-sm text-slate-400">For life coaches, business coaches, health coaches, and fitness coaches.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/privacy-policy-for-small-business" className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all">
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Small Business Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link href="/generate" className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all">
                <ShieldCheck className="w-4 h-4" />
                Generate Policy
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
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

            <article className="max-w-[720px]">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">AK</div>
                  <span>Written by{" "}<span className="font-semibold text-slate-800">Anupam Kumar</span></span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>10 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              {/* Section 1 */}
              <section id="why-coaches-need" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">1</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Why Online Coaches Need a Privacy Policy</h2>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Online coaching involves collecting data that goes far beyond
                    a typical website. Clients share personal goals, health
                    information, financial situations, and life challenges during
                    sessions. You also collect payment data, scheduling details,
                    and often record video calls. All of this requires disclosure.
                  </p>
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Coaching data can be highly sensitive.</strong>{" "}
                        Health coaching involves health data (a GDPR special category).
                        Financial coaching involves financial records. Life coaching
                        may involve mental health disclosures. Under GDPR, processing
                        special category data requires explicit consent and additional
                        safeguards.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2 */}
              <section id="data-you-collect" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">2</span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Data Online Coaches Collect</h2>
                    <p className="mt-2 text-base text-slate-500">Most coaches collect far more data than they realize.</p>
                  </div>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    { icon: Heart, color: "bg-rose-50", iconColor: "text-rose-600", title: "Client Intake Data", items: ["Name, email, phone number", "Goals, challenges, and personal background", "Health information (fitness coaches, wellness coaches)", "Financial situation (business coaches, career coaches)", "Intake questionnaire responses"] },
                    { icon: Video, color: "bg-violet-50", iconColor: "text-violet-600", title: "Session Data", items: ["Video call recordings (Zoom, Google Meet)", "Session notes and progress tracking", "Chat messages during or between sessions", "Action items and homework assignments", "Assessment results and scores"] },
                    { icon: CreditCard, color: "bg-emerald-50", iconColor: "text-emerald-600", title: "Payment Data", items: ["Billing name and email", "Payment method (processed by Stripe, PayPal, Square)", "Subscription plan and billing frequency", "Invoice history and refund records", "Package or program enrollment details"] },
                    { icon: Calendar, color: "bg-blue-50", iconColor: "text-blue-600", title: "Scheduling Data", items: ["Calendly, Acuity, or TidyCal booking details", "Timezone and availability preferences", "Appointment history and cancellations", "Reminder preferences (email, SMS)"] },
                  ].map((section) => (
                    <div key={section.title} className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-lg ${section.color} flex items-center justify-center`}>
                          <section.icon className={`w-4 h-4 ${section.iconColor}`} />
                        </div>
                        <h3 className="font-semibold text-slate-900">{section.title}</h3>
                      </div>
                      <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3 */}
              <section id="tools-platforms" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">3</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Common Coaching Tools and Their Data Practices</h2>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Each tool in your coaching stack processes client data under its
                    own privacy policy. Your policy must name each tool as a
                    third-party data processor:
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Tool</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Data It Processes</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Disclosure Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Zoom / Google Meet", "Video recordings, chat logs, participant names", "Name as video processor, disclose recording practices"],
                          ["Calendly / Acuity", "Name, email, timezone, appointment details", "Name as scheduling processor"],
                          ["Stripe / PayPal", "Billing info, card data (PCI-compliant)", "Name as payment processor, link their policy"],
                          ["Kajabi / Teachable", "Course progress, login data, payment info", "Name as course platform, disclose student data"],
                          ["Mailchimp / ConvertKit", "Email, name, engagement data", "Name as email processor, explain marketing use"],
                          ["Google Drive / Notion", "Session notes, client files, documents", "Disclose where client data is stored"],
                          ["Practice Better / CoachAccountable", "Client goals, progress, health data", "Name as coaching platform, note sensitive data"],
                        ].map(([tool, data, disclosure], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="px-4 py-3 font-medium text-slate-800 border-b border-slate-100">{tool}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{data}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{disclosure}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4 */}
              <section id="sensitive-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">4</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Handling Sensitive Client Data</h2>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Coaching often involves data that GDPR classifies as "special
                    category" data -- health information, racial or ethnic origin,
                    religious beliefs, or sexual orientation. Processing this data
                    requires additional safeguards:
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Explicit consent", text: "General terms of service are not enough. You need a separate, specific consent for processing sensitive data. 'I consent to [Coach Name] collecting and processing my health information for coaching purposes.'" },
                      { label: "Data minimization", text: "Only collect sensitive information that is directly relevant to the coaching engagement. Do not ask about health conditions if you are a business coach." },
                      { label: "Access controls", text: "Limit who can access sensitive client data. If you have a team, implement role-based access. Do not share client files in shared drives without restrictions." },
                      { label: "Secure storage", text: "Sensitive data should be stored in encrypted systems. Use password-protected files for session notes. Avoid storing sensitive information in plain-text emails or unencrypted notes." },
                      { label: "Retention limits", text: "Define how long you keep client data after the coaching relationship ends. Industry standard is 3-7 years for business records, but sensitive health data should be deleted sooner unless required by law." },
                      { label: "Recording consent", text: "If you record coaching sessions (video or audio), obtain explicit consent before recording. State in your policy how recordings are stored, who has access, and when they are deleted." },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50">
                        <Lock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-slate-900 text-sm">{item.label}:</span>{" "}
                          <span className="text-sm text-slate-600">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5 */}
              <section id="what-to-include" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">5</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What to Include in Your Coaching Privacy Policy</h2>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="space-y-4">
                    {[
                      { section: "Your identity and contact information", detail: "Your name or business name, email address, and physical address if required by law (GDPR requires this for EU data controllers)." },
                      { section: "Types of data collected", detail: "List every category: intake form data, session notes, recordings, payment data, scheduling data, email communications, website analytics." },
                      { section: "Purpose for each data type", detail: "Intake data: to understand client goals. Recordings: for session review. Payment data: to process coaching fees. Be specific per data type." },
                      { section: "Third-party tools and processors", detail: "Name every tool: Zoom (video), Stripe (payments), Calendly (scheduling), Mailchimp (email), Google Drive (file storage). Link to each tool's privacy policy." },
                      { section: "Data retention periods", detail: "State how long you keep each data type: session recordings (90 days), payment records (7 years for tax), client files (duration of engagement + X years)." },
                      { section: "Client rights", detail: "Right to access their data, correct it, request deletion, and withdraw consent. Provide a clear contact email for privacy requests." },
                      { section: "Session recording policy", detail: "State whether sessions are recorded, how clients consent, where recordings are stored, who has access, and when they are deleted." },
                      { section: "International data transfers", detail: "If you coach clients internationally, disclose where data is processed and stored (most tools are US-based, which is a GDPR cross-border transfer)." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200/80 hover:border-blue-200 hover:shadow-sm transition-all">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{item.section}</p>
                          <p className="text-sm text-slate-600 mt-1">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Generate CTA */}
              <section id="generate" className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center">
                  <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-3">Generate Your Coaching Privacy Policy</h2>
                  <p className="text-slate-300 max-w-lg mx-auto mb-6">
                    Get a customized privacy policy covering client intake data,
                    session recordings, payment processing, scheduling tools, and
                    sensitive data handling -- in under 2 minutes.
                  </p>
                  <Link href="/generate">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">Generate My Coaching Policy</Button>
                  </Link>
                  <p className="text-slate-400 text-xs mt-3">Covers Zoom, Calendly, Stripe, and all major coaching tools</p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Resources */}
              <section id="resources" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Database className="w-4 h-4" />
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Related Resources</h2>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px] grid sm:grid-cols-2 gap-3">
                  {[
                    { title: "Privacy Policy for Small Business", desc: "Small business privacy requirements", href: "/privacy-policy-for-small-business" },
                    { title: "Privacy Policy for Zoom", desc: "Video conferencing privacy guide", href: "/privacy-policy-for-zoom" },
                    { title: "Privacy Policy for Calendly", desc: "Scheduling tool privacy requirements", href: "/privacy-policy-for-calendly" },
                    { title: "Privacy Policy for Kajabi", desc: "Course platform privacy guide", href: "/privacy-policy-for-kajabi" },
                    { title: "Privacy Policy for Stripe", desc: "Payment processing privacy", href: "/privacy-policy-for-stripe" },
                    { title: "Privacy Policy for Membership Site", desc: "Membership data collection guide", href: "/privacy-policy-for-membership-site" },
                    { title: "GDPR Privacy Policy Template", desc: "EU data protection requirements", href: "/gdpr-privacy-policy-template" },
                    { title: "How to Write a Privacy Policy", desc: "Step-by-step writing guide", href: "/how-to-write-a-privacy-policy" },
                  ].map((resource) => (
                    <Link key={resource.href} href={resource.href} className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                      <ArrowUpRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <div>
                        <p className="font-medium text-slate-800 group-hover:text-blue-700">{resource.title}</p>
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
