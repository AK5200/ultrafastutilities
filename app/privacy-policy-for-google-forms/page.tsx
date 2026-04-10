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
  ClipboardList,
  Globe,
  Lock,
  Database,
  Users,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Google Forms: What You Must Disclose (2026) | ultrafastutilities",
  description:
    "Using Google Forms to collect data? You need a privacy policy. Covers survey responses, file uploads, email collection, GDPR consent, and Google's data processing. Complete guide.",
  keywords:
    "privacy policy for google forms, google forms privacy policy, google forms gdpr, google forms data collection, survey privacy policy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-google-forms",
  },
  openGraph: {
    title: "Privacy Policy for Google Forms: What You Must Disclose (2026) | ultrafastutilities",
    description: "Using Google Forms to collect data? You need a privacy policy. Covers survey responses, file uploads, email collection, and GDPR consent.",
    url: "https://ultrafastutilities.com/privacy-policy-for-google-forms",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Google Forms | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Google Forms: What You Must Disclose (2026) | ultrafastutilities",
    description: "Using Google Forms to collect data? You need a privacy policy covering survey responses, file uploads, and GDPR consent.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "do-you-need", title: "Do You Need a Policy?" },
  { id: "what-google-collects", title: "What Google Collects" },
  { id: "your-data-collection", title: "Your Data Collection" },
  { id: "gdpr-consent", title: "GDPR Consent for Forms" },
  { id: "where-to-link", title: "Where to Link Your Policy" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForGoogleFormsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Google Forms: What You Must Disclose (2026)",
            description: "Using Google Forms to collect data? You need a privacy policy covering survey responses, file uploads, and GDPR consent.",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Google Forms", item: "https://ultrafastutilities.com/privacy-policy-for-google-forms" },
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
              <span className="text-slate-600">Privacy Policy for Google Forms</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ClipboardList className="w-3.5 h-3.5" />
                Google Forms Compliance
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Google Forms
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Using Google Forms to collect survey responses, signups, or
                applications? You are collecting personal data -- and you need a
                privacy policy that explains what happens to it.
              </p>
              <p className="mt-3 text-sm text-slate-400">For businesses, schools, nonprofits, and researchers.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/privacy-policy-for-google-analytics" className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all">
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Google Analytics Policy
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
                <span>Last updated: April 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>9 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              {/* Section 1 */}
              <section id="do-you-need" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">1</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Do You Need a Privacy Policy for Google Forms?</h2>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Yes. Any Google Form that collects personal information --
                    names, emails, phone numbers, opinions, or file uploads --
                    requires a privacy policy under GDPR, CCPA, and other privacy
                    laws. Google's own terms also recommend disclosure.
                  </p>
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Even anonymous surveys need disclosure.</strong>{" "}
                        If your Google Form collects email addresses (which is on by
                        default for Workspace accounts), records timestamps, or
                        accepts file uploads, you are collecting personal data.
                        Anonymous responses still record submission timestamps and
                        may include identifiable information in free-text fields.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2 */}
              <section id="what-google-collects" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">2</span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What Google Collects Through Forms</h2>
                    <p className="mt-2 text-base text-slate-500">Google processes data at the platform level, separate from your form responses.</p>
                  </div>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Data Type</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Collected By</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Your Disclosure Required?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Form responses (text, choices)", "You (stored in Google Sheets/Forms)", "Yes -- describe what you collect and why"],
                          ["Respondent email address", "Google (if 'collect emails' is enabled)", "Yes -- state whether emails are collected"],
                          ["File uploads", "You (stored in your Google Drive)", "Yes -- note file types, storage location, retention"],
                          ["Submission timestamp", "Google automatically", "Yes -- note that timestamps are recorded"],
                          ["Google account identity", "Google (if form requires sign-in)", "Yes -- disclose that Google authentication is used"],
                          ["IP address and cookies", "Google (platform-level tracking)", "Reference Google's own privacy policy"],
                          ["Browser and device data", "Google (analytics cookies)", "Reference Google's privacy policy"],
                        ].map(([type, by, required], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="px-4 py-3 font-medium text-slate-800 border-b border-slate-100">{type}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{by}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{required}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3 */}
              <section id="your-data-collection" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">3</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What Your Privacy Policy Must Cover</h2>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="space-y-4">
                    {[
                      { section: "What data is collected", detail: "List every field in your form: name, email, phone, company, file uploads, free-text responses. Be specific." },
                      { section: "Purpose of collection", detail: "Why are you collecting this data? Customer feedback, job applications, event registration, research survey. State the specific purpose." },
                      { section: "Where data is stored", detail: "Form responses go to Google's servers (US-based). If you export to Google Sheets, mention that. If you copy data to a CRM or database, disclose that too." },
                      { section: "Who has access", detail: "List who can see the responses: you, your team, specific departments. If you share a Google Sheet with collaborators, disclose this." },
                      { section: "How long data is retained", detail: "State your retention period. Google does not auto-delete form responses. If you keep them indefinitely, say so. If you delete after a specific period, state the timeframe." },
                      { section: "Third-party data sharing", detail: "If form data is sent to Zapier, Mailchimp, a CRM, or any other tool via automation, disclose each third party by name." },
                      { section: "Google as data processor", detail: "State that Google processes form data under their Cloud Data Processing Addendum. Link to Google's privacy policy." },
                      { section: "Respondent rights", detail: "Explain how respondents can request access to, correction of, or deletion of their data. Provide a contact email." },
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

              {/* Section 4 */}
              <section id="gdpr-consent" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">4</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">GDPR Consent for Google Forms</h2>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  <p className="text-base leading-7 text-slate-700">
                    If any of your respondents are in the EU or UK, GDPR requires
                    you to obtain valid consent before collecting their data through
                    a Google Form. Here is how to do it properly:
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Add a consent statement", text: "Include a required checkbox at the top or bottom of your form: 'I consent to [Your Name/Org] collecting and processing my data as described in the privacy policy.' Link to your policy." },
                      { label: "Link your privacy policy in the form description", text: "Use the form description field to include a direct link to your hosted privacy policy before respondents start filling in data." },
                      { label: "Do not pre-check consent boxes", text: "GDPR requires active, freely given consent. Pre-checked boxes are not valid consent." },
                      { label: "Record consent evidence", text: "Google Forms records the timestamp and email of each submission. Keep this as your consent record for GDPR compliance." },
                      { label: "Provide a way to withdraw consent", text: "Your privacy policy must explain how respondents can withdraw consent and request deletion of their data." },
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
              <section id="where-to-link" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">5</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Where to Link Your Privacy Policy</h2>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Google Forms does not have a built-in privacy policy footer.
                    You need to add the link manually in one or more of these locations:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Form description field (visible before respondents start)",
                      "First section of the form as a text block with the link",
                      "Required consent checkbox text that includes the link",
                      "Confirmation message shown after submission",
                      "Email invitation that includes the form link",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-base leading-7 text-slate-700">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1.5" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Pro tip:</strong>{" "}
                        Host your privacy policy at a stable URL (your website's
                        /privacy-policy page or a published Google Doc). Do not use
                        a Google Drive file link -- those can break or require
                        sign-in to view.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Generate CTA */}
              <section id="generate" className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center">
                  <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-3">Generate Your Google Forms Privacy Policy</h2>
                  <p className="text-slate-300 max-w-lg mx-auto mb-6">
                    Get a customized privacy policy covering your Google Forms
                    data collection, storage, GDPR consent, and respondent
                    rights -- in under 2 minutes.
                  </p>
                  <Link href="/generate">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">Generate My Privacy Policy</Button>
                  </Link>
                  <p className="text-slate-400 text-xs mt-3">Covers Google Forms, Sheets, and connected tools</p>
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
                    { title: "Privacy Policy for Google Analytics", desc: "Google Analytics privacy requirements", href: "/privacy-policy-for-google-analytics" },
                    { title: "Privacy Policy for Typeform", desc: "Typeform survey privacy guide", href: "/privacy-policy-for-typeform" },
                    { title: "GDPR Privacy Policy Template", desc: "EU data protection requirements", href: "/gdpr-privacy-policy-template" },
                    { title: "Privacy Policy for Collecting Emails", desc: "Email collection privacy requirements", href: "/do-i-need-a-privacy-policy-for-collecting-emails" },
                    { title: "Privacy Policy for Nonprofit", desc: "Nonprofit data collection guide", href: "/privacy-policy-for-nonprofit" },
                    { title: "How to Write a Privacy Policy", desc: "Step-by-step writing guide", href: "/how-to-write-a-privacy-policy" },
                    { title: "Privacy Policy for HubSpot", desc: "CRM and form data privacy", href: "/privacy-policy-for-hubspot" },
                    { title: "What Should a Privacy Policy Include", desc: "Complete privacy policy checklist", href: "/what-should-a-privacy-policy-include" },
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
