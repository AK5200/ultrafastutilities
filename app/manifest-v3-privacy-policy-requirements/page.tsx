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
  title: "Manifest V3 Privacy Policy Requirements (Chrome 2026 Rules)",
  description: "Manifest V3 changes how Chrome extensions handle data through service workers. See the new privacy policy requirements, certification rules, and what to update.",
  keywords: "manifest v3 privacy policy, mv3 privacy requirements, chrome manifest v3 rules, chrome extension service worker privacy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/manifest-v3-privacy-policy-requirements",
  },
  openGraph: {
    title: "Manifest V3 Privacy Policy Requirements (Chrome 2026 Rules)",
    description: "Manifest V3 changes how Chrome extensions handle data through service workers. See the new privacy policy requirements, certification rules, and what to update.",
    url: "https://ultrafastutilities.com/manifest-v3-privacy-policy-requirements",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Manifest V3 Privacy Policy Requirements (Chrome 2026 Rules)" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifest V3 Privacy Policy Requirements (Chrome 2026 Rules)",
    description: "Manifest V3 changes how Chrome extensions handle data through service workers. See the new privacy policy requirements, certification rules, and what to update.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-mv3-changes", title: "What Manifest V3 Changes for Privacy" },
  { id: "what-policy-must-say", title: "What Your Privacy Policy Must Say Under MV3" },
  { id: "data-handling-cert", title: "The Data Handling Certification You Must Match" },
  { id: "mv2-migration", title: "Migrating From MV2 to MV3 Without Privacy Issues" }
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Manifest V3 itself require a new privacy policy?","acceptedAnswer":{"@type":"Answer","text":"Not legally. The privacy policy requirement comes from data protection laws and Chrome Web Store rules, not from MV3 directly. But because MV3 changes how your extension handles data internally, your existing policy almost certainly needs an update to remain accurate."}},{"@type":"Question","name":"Can a Manifest V3 extension still load remote code?","acceptedAnswer":{"@type":"Answer","text":"No. MV3 prohibits running remotely hosted code. All executable code must be bundled in the extension package. You can still call remote APIs and process responses, but you cannot fetch and execute JavaScript at runtime. Your privacy policy should reflect this."}},{"@type":"Question","name":"What if my service worker only uses chrome.storage.local and never sends data anywhere?","acceptedAnswer":{"@type":"Answer","text":"Your privacy policy can clearly state that all data is stored locally on the user device and never transmitted. This is a strong privacy statement and reviewers accept it. Keep the certification matching: tick the boxes for any data type the local storage actually contains."}},{"@type":"Question","name":"Do MV3 host permissions need a separate disclosure?","acceptedAnswer":{"@type":"Answer","text":"Yes. Your privacy policy should describe the categories of websites your extension accesses and what it does with the page content. For example: this extension reads the URL of the active tab to show suggestions, and the URL is never transmitted off your device."}}]};

const articleSchema = {"@context":"https://schema.org","@type":"Article","headline":"Manifest V3 Privacy Policy Requirements (Chrome 2026 Rules)","description":"Manifest V3 changes how Chrome extensions handle data through service workers. See the new privacy policy requirements, certification rules, and what to update.","datePublished":"2026-04-11","dateModified":"2026-04-11","author":{"@type":"Person","name":"Anupam Kumar"},"publisher":{"@type":"Organization","name":"ultrafastutilities","url":"https://ultrafastutilities.com"}};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ultrafastutilities.com"},{"@type":"ListItem","position":2,"name":"Manifest V3 Privacy Policy","item":"https://ultrafastutilities.com/manifest-v3-privacy-policy-requirements"}]};

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
              <span className="text-slate-600">Manifest V3 Privacy Policy</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Manifest V3
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Manifest V3 Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Requirements</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Manifest V3 replaced background pages with service workers, restricted remote code, and tightened the Chrome Web Store certification. Here is what your privacy policy must say in 2026.
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
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>8 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-xs font-medium text-slate-500 mb-2">
                  <time dateTime="2026-04-11">April 11, 2026</time> &mdash;{" "}
                  <span className="text-slate-400">MV3 2026 enforcement</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>Manifest V3 extensions must publish a privacy policy URL that accurately reflects their service worker data flows, host permissions, and remote code restrictions.</strong>{" "}While MV3 does not change the legal requirement to have a privacy policy, it changes what that policy must describe. Service workers behave differently from background pages, host permissions are more granular, and remote code is restricted, all of which must be reflected in your disclosures.
                </p>
              </div>

            <section id="what-mv3-changes">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Manifest V3 Changes for Privacy</h2>
              <p className="text-slate-700 mb-4">Manifest V3 replaced persistent background pages with event driven service workers. A background page in MV2 ran continuously and could hold data in memory across the user session. A service worker terminates when idle and reloads on the next event, which changes how and where extensions cache or persist user data.</p>
              <p className="text-slate-700 mb-4">MV3 also restricts remote code execution. Extensions can no longer load and run JavaScript fetched from a remote server at runtime. All executable code must be bundled with the extension. This removes a privacy concern around hidden third party code but still requires disclosure of any data sent to remote endpoints.</p>
              <p className="text-slate-700 mb-4">Host permissions in MV3 are also more granular. Users can grant access to specific sites at install time, on click, or for the current site only. Your privacy policy must describe what data is read from those sites and whether it is sent off device.</p>

            </section>

            <section id="what-policy-must-say">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Your Privacy Policy Must Say Under MV3</h2>
              <p className="text-slate-700 mb-4">Describe how your service worker handles data. If your worker writes anything to chrome.storage, IndexedDB, or any other persistent location, list what is stored, why, and how long. If it sends data to a remote API, name the endpoint and what is sent.</p>
              <p className="text-slate-700 mb-4">Describe how host permissions are used. If your extension reads page content on websites the user visits, say so explicitly, including whether the content is sent off device or processed locally. The phrase only stored locally is acceptable if true and is taken seriously by reviewers.</p>
              <p className="text-slate-700 mb-4">If your extension uses the offscreen API or any other MV3 specific feature that processes user data, describe it in plain language. Reviewers know what these APIs do and will check your policy reflects them.</p>

            </section>

            <section id="data-handling-cert">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The Data Handling Certification You Must Match</h2>
              <p className="text-slate-700 mb-4">When you submit an MV3 extension, you complete a certification in the Chrome Web Store Developer Dashboard. You declare which categories of data your extension touches: personally identifiable information, health, financial, authentication, personal communications, location, web history, or user activity.</p>
              <p className="text-slate-700 mb-4">Your privacy policy at the URL you submit must match this certification exactly. A mismatch is the single most common cause of rejection. Read both side by side before submitting and adjust whichever is wrong.</p>
              <p className="text-slate-700 mb-4">If your extension collects nothing in any of those categories, you still need to publish a short privacy policy that says so and explains what your service worker does. Empty cert plus no policy is a flag for reviewers.</p>

            </section>

            <section id="mv2-migration">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Migrating From MV2 to MV3 Without Privacy Issues</h2>
              <p className="text-slate-700 mb-4">Many extensions migrating from MV2 to MV3 carry over a privacy policy that was written for the old architecture. If your policy mentions persistent background pages, runtime code injection, or remote scripts, update it before migrating. Reviewers will compare against the new manifest.</p>
              <p className="text-slate-700 mb-4">Audit what your service worker actually persists. The migration often introduces new chrome.storage usage to replace in memory state, which is now visible to users in their browser data. List anything new in the policy.</p>
              <p className="text-slate-700 mb-4">Update the last modified date so it reflects the migration. Reviewers tend to scrutinise policies that are older than the most recent extension version.</p>

            </section>


              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Does Manifest V3 itself require a new privacy policy?</h3>
                <p className="text-slate-700">Not legally. The privacy policy requirement comes from data protection laws and Chrome Web Store rules, not from MV3 directly. But because MV3 changes how your extension handles data internally, your existing policy almost certainly needs an update to remain accurate.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can a Manifest V3 extension still load remote code?</h3>
                <p className="text-slate-700">No. MV3 prohibits running remotely hosted code. All executable code must be bundled in the extension package. You can still call remote APIs and process responses, but you cannot fetch and execute JavaScript at runtime. Your privacy policy should reflect this.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What if my service worker only uses chrome.storage.local and never sends data anywhere?</h3>
                <p className="text-slate-700">Your privacy policy can clearly state that all data is stored locally on the user device and never transmitted. This is a strong privacy statement and reviewers accept it. Keep the certification matching: tick the boxes for any data type the local storage actually contains.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do MV3 host permissions need a separate disclosure?</h3>
                <p className="text-slate-700">Yes. Your privacy policy should describe the categories of websites your extension accesses and what it does with the page content. For example: this extension reads the URL of the active tab to show suggestions, and the URL is never transmitted off your device.</p>
              </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">Build a Manifest V3 ready privacy policy in 60 seconds</h2>
                <p className="text-blue-100 mb-4">Service worker disclosures, host permission language, and Chrome Web Store certification, all covered.</p>
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
                  <p className="text-sm text-slate-500 mt-1">Web Store policy guide for any extension.</p>
                </Link>
                <Link href="/chrome-extension-user-data-policy" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension User Data Policy</p>
                  <p className="text-sm text-slate-500 mt-1">Full breakdown of Google&apos;s user data rules.</p>
                </Link>
                <Link href="/chrome-extension-privacy-best-practices" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension Privacy Best Practices</p>
                  <p className="text-sm text-slate-500 mt-1">Patterns that pass review on the first try.</p>
                </Link>
                <Link href="/chrome-extension-single-purpose-policy" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension Single Purpose Policy</p>
                  <p className="text-sm text-slate-500 mt-1">How the single purpose rule interacts with privacy.</p>
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
