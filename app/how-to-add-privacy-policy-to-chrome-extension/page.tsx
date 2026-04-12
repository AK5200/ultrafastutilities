import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  Clock,
  BookOpen,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "How to Add a Privacy Policy to a Chrome Extension (2026 Guide)",
  description: "Step by step guide to adding a privacy policy URL to your Chrome extension in the Web Store Developer Dashboard. Covers permissions, manifest, and review.",
  keywords: "how to add privacy policy chrome extension, chrome extension privacy policy URL, add privacy policy chrome web store, chrome developer dashboard privacy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/how-to-add-privacy-policy-to-chrome-extension",
  },
  openGraph: {
    title: "How to Add a Privacy Policy to a Chrome Extension (2026 Guide)",
    description: "Step by step guide to adding a privacy policy URL to your Chrome extension in the Web Store Developer Dashboard. Covers permissions, manifest, and review.",
    url: "https://ultrafastutilities.com/how-to-add-privacy-policy-to-chrome-extension",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How to Add a Privacy Policy to a Chrome Extension (2026 Guide)" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Add a Privacy Policy to a Chrome Extension (2026 Guide)",
    description: "Step by step guide to adding a privacy policy URL to your Chrome extension in the Web Store Developer Dashboard. Covers permissions, manifest, and review.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-required", title: "Why Chrome Extensions Need a Privacy Policy URL" },
  { id: "step-by-step", title: "Step by Step: Adding the Privacy Policy URL" },
  { id: "where-to-host", title: "Where to Host Your Privacy Policy" },
  { id: "what-to-include", title: "What the Policy Itself Must Include" },
  { id: "common-rejections", title: "Common Reasons Reviewers Reject the Privacy Policy" }
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I use the same privacy policy for multiple Chrome extensions?","acceptedAnswer":{"@type":"Answer","text":"Yes, if all the extensions actually share the same data handling practices. Many developers maintain a single policy that lists each extension by name and the specific data it collects. This keeps maintenance simple. If your extensions differ significantly, separate policies are clearer."}},{"@type":"Question","name":"Does my Chrome extension need a privacy policy if it does not collect any data?","acceptedAnswer":{"@type":"Answer","text":"Technically no, if your extension truly collects nothing and uses no data permissions. In practice, Google still recommends one because most extensions request at least one data related permission, and the Web Store team tends to flag listings without policies. A short policy that says no data is collected is the safest choice."}},{"@type":"Question","name":"How long does Chrome Web Store review take after I add a privacy policy?","acceptedAnswer":{"@type":"Answer","text":"Usually a few business days for routine updates. Adding or updating a privacy policy URL is a small change and is typically processed faster than first time submissions or changes that touch permissions."}},{"@type":"Question","name":"What happens if I update my privacy policy after the extension is approved?","acceptedAnswer":{"@type":"Answer","text":"You can update the policy text at the same URL without resubmitting the extension, as long as the URL still resolves and the new policy still matches your dashboard certification. If you change the URL itself, update the dashboard and submit a new version for review."}}]};

const articleSchema = {"@context":"https://schema.org","@type":"Article","headline":"How to Add a Privacy Policy to a Chrome Extension (2026 Guide)","description":"Step by step guide to adding a privacy policy URL to your Chrome extension in the Web Store Developer Dashboard. Covers permissions, manifest, and review.","datePublished":"2026-04-11","dateModified":"2026-04-11","author":{"@type":"Person","name":"Anupam Kumar"},"publisher":{"@type":"Organization","name":"ultrafastutilities","url":"https://ultrafastutilities.com"}};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ultrafastutilities.com"},{"@type":"ListItem","position":2,"name":"Add Privacy Policy to Chrome Extension","item":"https://ultrafastutilities.com/how-to-add-privacy-policy-to-chrome-extension"}]};

export default function Page() {
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
              <span className="text-slate-600">Add Privacy Policy to Chrome Extension</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Chrome Extension Setup
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                How to Add a Privacy Policy to a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Chrome Extension</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A complete walkthrough of adding a privacy policy URL to your Chrome extension listing, satisfying the Web Store data handling certification, and avoiding rejection during review.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for compliance
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
                  <p className="text-sm font-semibold text-slate-800">Need a privacy policy?</p>
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
                <span>Updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>9 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-xs font-medium text-slate-500 mb-2">
                  <time dateTime="2026-04-11">April 11, 2026</time> &mdash;{" "}
                  <span className="text-slate-400">2026 Chrome Web Store steps</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>To add a privacy policy to a Chrome extension, paste the policy URL into the Privacy tab of your Chrome Web Store Developer Dashboard, complete the data handling certification, and submit for review.</strong>{" "}The URL must be publicly accessible, must accurately describe what data your extension collects, and must match the certification you submit. Extensions that skip this step are rejected automatically.
                </p>
              </div>

            <section id="why-required">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Chrome Extensions Need a Privacy Policy URL</h2>
              <p className="text-slate-700 mb-4">Google requires a privacy policy URL for any Chrome extension that requests permissions involving user data. This includes tabs, cookies, history, identity, storage, host permissions, and many others. The requirement applies whether the data is stored locally or sent to your server.</p>
              <p className="text-slate-700 mb-4">Without a valid privacy policy URL on your listing, the Chrome Web Store review team will reject your submission. Existing extensions that fail to maintain a valid policy can be unpublished. The 2026 enforcement of Chrome Web Store policies has made this stricter than in previous years.</p>
              <p className="text-slate-700 mb-4">The URL itself is only one part of the requirement. Google also expects your policy to be specific to your extension, written in plain language, and to match the data handling certification you submit through the dashboard.</p>

            </section>

            <section id="step-by-step">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step by Step: Adding the Privacy Policy URL</h2>
              <p className="text-slate-700 mb-4">Open your Chrome Web Store Developer Dashboard and select the extension you want to update. In the left sidebar, click Privacy practices. Scroll to the section labelled Privacy policy.</p>
              <p className="text-slate-700 mb-4">Paste the public URL where your privacy policy is hosted. The URL must use HTTPS and must resolve to a page that anyone can read without logging in. A common mistake is to host the policy on a Google Doc behind sharing restrictions; that will fail review.</p>
              <p className="text-slate-700 mb-4">After pasting the URL, complete the data handling certification just below it. You will tick boxes describing what data your extension collects: personally identifiable information, health information, financial information, authentication data, personal communications, location, web history, or user activity.</p>
              <p className="text-slate-700 mb-4">Save your changes and submit the extension for review. Reviews typically take a few business days. If anything in your certification contradicts what is in the privacy policy at the URL, the reviewer will reject the submission and ask you to fix the inconsistency.</p>

            </section>

            <section id="where-to-host">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Where to Host Your Privacy Policy</h2>
              <p className="text-slate-700 mb-4">Your privacy policy needs a permanent, publicly accessible URL. The most common options are: a page on your own domain (best for trust and control), a free static hosting service like GitHub Pages or Netlify, or a hosted document on a service designed for legal pages.</p>
              <p className="text-slate-700 mb-4">Avoid using a shared Google Doc, a Notion page behind login, a Gist, or any URL that could change. The Chrome Web Store team has flagged these in the past, and changing your URL later requires resubmission.</p>
              <p className="text-slate-700 mb-4">If you do not have a website yet, the simplest path is to create a single static HTML page on a free host and link it. The page should include your extension name, the date it was last updated, and a contact email so reviewers and users can verify it belongs to you.</p>

            </section>

            <section id="what-to-include">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What the Policy Itself Must Include</h2>
              <p className="text-slate-700 mb-4">Your privacy policy must list every type of data your extension collects, accesses, or transmits. Be specific: list each category of data, the source, and what you do with it. Vague language like we may collect some user data is not enough and can fail review.</p>
              <p className="text-slate-700 mb-4">Cover how the data is stored, how long it is kept, who it is shared with (including any analytics or crash reporting services), how users can request deletion, and how to contact you with questions. Include a last updated date.</p>
              <p className="text-slate-700 mb-4">If your extension is subject to GDPR because users may be in the EU or UK, also include a legal basis for processing, a description of user rights, and information about international data transfers if any data leaves the EU.</p>

            </section>

            <section id="common-rejections">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Common Reasons Reviewers Reject the Privacy Policy</h2>
              <p className="text-slate-700 mb-4">The most common reason for rejection is a mismatch between the policy and the certification. For example, the certification says no PII is collected, but the policy mentions email addresses. Fix this by making sure the two match exactly before submission.</p>
              <p className="text-slate-700 mb-4">Another frequent issue is hosting the policy at a URL that is not publicly reachable, such as a private Google Doc or a page behind a login. Fix it by moving the document to a public URL.</p>
              <p className="text-slate-700 mb-4">Less common but still seen: copy and paste templates that reference the wrong company or extension name. Reviewers spot these immediately. Always customise the template to your specific extension before submitting.</p>

            </section>


              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I use the same privacy policy for multiple Chrome extensions?</h3>
                <p className="text-slate-700">Yes, if all the extensions actually share the same data handling practices. Many developers maintain a single policy that lists each extension by name and the specific data it collects. This keeps maintenance simple. If your extensions differ significantly, separate policies are clearer.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Does my Chrome extension need a privacy policy if it does not collect any data?</h3>
                <p className="text-slate-700">Technically no, if your extension truly collects nothing and uses no data permissions. In practice, Google still recommends one because most extensions request at least one data related permission, and the Web Store team tends to flag listings without policies. A short policy that says no data is collected is the safest choice.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How long does Chrome Web Store review take after I add a privacy policy?</h3>
                <p className="text-slate-700">Usually a few business days for routine updates. Adding or updating a privacy policy URL is a small change and is typically processed faster than first time submissions or changes that touch permissions.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What happens if I update my privacy policy after the extension is approved?</h3>
                <p className="text-slate-700">You can update the policy text at the same URL without resubmitting the extension, as long as the URL still resolves and the new policy still matches your dashboard certification. If you change the URL itself, update the dashboard and submit a new version for review.</p>
              </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">Generate a Chrome extension privacy policy in 60 seconds</h2>
                <p className="text-blue-100 mb-4">Web Store approved structure, GDPR ready, copy paste into your dashboard. Updated for 2026.</p>
                <Link href="/generate">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate My Policy
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Related */}
              <section className="mt-12">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Related Resources</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/privacy-policy-for-chrome-extension" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Privacy Policy for Chrome Extension</p>
                  <p className="text-sm text-slate-500 mt-1">Full guide to Chrome Web Store policy requirements.</p>
                </Link>
                <Link href="/chrome-extension-privacy-policy-template" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension Privacy Policy Template</p>
                  <p className="text-sm text-slate-500 mt-1">Free template you can copy and customize.</p>
                </Link>
                <Link href="/do-chrome-extensions-need-a-privacy-policy" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Do Chrome Extensions Need a Privacy Policy?</p>
                  <p className="text-sm text-slate-500 mt-1">When the requirement applies and which permissions trigger it.</p>
                </Link>
                <Link href="/chrome-extension-gdpr-compliance" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension GDPR Compliance</p>
                  <p className="text-sm text-slate-500 mt-1">Cover EU users with the right legal basis.</p>
                </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
