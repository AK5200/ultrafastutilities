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
  title: "How to Write a Chrome Extension Privacy Policy (2026 Guide)",
  description: "A practical guide to writing a Chrome extension privacy policy that passes Web Store review. Covers structure, language, certification matching, and common rejection reasons.",
  keywords: "how to write chrome extension privacy policy, write chrome extension policy, chrome extension privacy policy guide, chrome extension privacy policy steps",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/how-to-write-chrome-extension-privacy-policy",
  },
  openGraph: {
    title: "How to Write a Chrome Extension Privacy Policy (2026 Guide)",
    description: "A practical guide to writing a Chrome extension privacy policy that passes Web Store review. Covers structure, language, certification matching, and common rejection reasons.",
    url: "https://ultrafastutilities.com/how-to-write-chrome-extension-privacy-policy",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "How to Write a Chrome Extension Privacy Policy (2026 Guide)" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write a Chrome Extension Privacy Policy (2026 Guide)",
    description: "A practical guide to writing a Chrome extension privacy policy that passes Web Store review. Covers structure, language, certification matching, and common rejection reasons.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "structure", title: "The Seven Section Structure That Passes Review" },
  { id: "language", title: "Language and Tone That Works for Reviewers" },
  { id: "match-certification", title: "Matching the Data Handling Certification" },
  { id: "common-mistakes", title: "Common Writing Mistakes That Trigger Rejection" }
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long should a Chrome extension privacy policy be?","acceptedAnswer":{"@type":"Answer","text":"Two to four pages is typical. Long enough to cover the seven sections in detail, short enough that a reviewer can read it in two minutes. Shorter is better than padded, as long as nothing important is missing."}},{"@type":"Question","name":"Can I write the policy in a language other than English?","acceptedAnswer":{"@type":"Answer","text":"Yes, but the language should match the primary language of your extension's listing. If your extension is listed in English, the policy should be in English. You can offer translations, but the English version is the one reviewers will check."}},{"@type":"Question","name":"Should I have a lawyer review my Chrome extension privacy policy?","acceptedAnswer":{"@type":"Answer","text":"For high risk extensions (financial data, health data, sensitive user content), yes. For most consumer extensions, a generator that produces a structurally sound policy plus careful customisation is enough to pass Web Store review and meet baseline GDPR and CCPA requirements."}},{"@type":"Question","name":"What if my extension changes data handling in a future update?","acceptedAnswer":{"@type":"Answer","text":"Update the policy at the same time you submit the new version. Update the last modified date. If the change is material (new data types, new third parties), surface a notification inside the extension as well."}}]};

const articleSchema = {"@context":"https://schema.org","@type":"Article","headline":"How to Write a Chrome Extension Privacy Policy (2026 Guide)","description":"A practical guide to writing a Chrome extension privacy policy that passes Web Store review. Covers structure, language, certification matching, and common rejection reasons.","datePublished":"2026-04-11","dateModified":"2026-04-11","author":{"@type":"Person","name":"Anupam Kumar"},"publisher":{"@type":"Organization","name":"ultrafastutilities","url":"https://ultrafastutilities.com"}};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ultrafastutilities.com"},{"@type":"ListItem","position":2,"name":"Write Chrome Extension Privacy Policy","item":"https://ultrafastutilities.com/how-to-write-chrome-extension-privacy-policy"}]};

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
              <span className="text-slate-600">Write Chrome Extension Privacy Policy</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Chrome Extension Writing Guide
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                How to Write a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Chrome Extension Privacy Policy</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A Chrome extension privacy policy is short, specific, and structured. This guide shows you exactly what to write, in what order, and how to phrase it so Web Store reviewers approve on the first submission.
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
                  <span className="text-slate-400">Web Store reviewer perspective</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>A passing Chrome extension privacy policy is short, specific to your extension, and structured into seven sections: identity, data collected, data use, third party services, storage and security, user controls, and contact.</strong>{" "}Reviewers spend less than two minutes on most policies. They look for specific data types, named third parties, and consistency with the data handling certification you submit. Vague templates and generic boilerplate are the most common reasons for rejection.
                </p>
              </div>

            <section id="structure">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The Seven Section Structure That Passes Review</h2>
              <p className="text-slate-700 mb-4">Section one: identity. State the name of your extension, the developer or company name, and a contact email. Reviewers check this matches your Web Store listing.</p>
              <p className="text-slate-700 mb-4">Section two: what data you collect. List every category of data your extension touches. Be specific and use plain language. Examples: page URLs visited while the extension is active, text the user enters into the extension popup, the user&apos;s email address if they create an account.</p>
              <p className="text-slate-700 mb-4">Section three: how you use the data. Map each data type to a purpose. Page URLs are used to provide relevant suggestions. Email addresses are used for account login and product update notifications.</p>
              <p className="text-slate-700 mb-4">Section four: third party services. Name every external service: analytics, error reporting, model providers, payment processors, anything that receives any user data. Link to each one&apos;s privacy policy if possible.</p>
              <p className="text-slate-700 mb-4">Section five: storage and security. State where data is stored, how long it is kept, and what security measures protect it. Be honest about local versus remote storage.</p>
              <p className="text-slate-700 mb-4">Section six: user controls. Explain how users can see, change, export, or delete their data. Provide a clear path that does not require contacting you for routine cases.</p>
              <p className="text-slate-700 mb-4">Section seven: contact. Give a real email address for privacy questions. Add a last updated date.</p>

            </section>

            <section id="language">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Language and Tone That Works for Reviewers</h2>
              <p className="text-slate-700 mb-4">Use plain language. Reviewers are not lawyers; they are technical reviewers checking that your policy matches your extension&apos;s behaviour. Plain English (or your local language) reads faster and is easier to verify.</p>
              <p className="text-slate-700 mb-4">Avoid we may collect statements when you can say what you do collect. Vague language is a flag for reviewers. Specificity is the strongest signal that you understand what your extension does.</p>
              <p className="text-slate-700 mb-4">Name third party services explicitly. Google Analytics, Sentry, Mixpanel, Stripe, OpenAI, and so on. Reviewers see these in the network traffic during testing and a missing name in the policy is a quick rejection.</p>

            </section>

            <section id="match-certification">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Matching the Data Handling Certification</h2>
              <p className="text-slate-700 mb-4">When you submit your extension, you complete a data handling certification with checkboxes for personally identifiable information, health, financial, authentication, personal communications, location, web history, and user activity.</p>
              <p className="text-slate-700 mb-4">Your privacy policy must match this certification exactly. If the certification says no health data, the policy must not mention health data. If the certification says authentication data is collected, the policy must describe it.</p>
              <p className="text-slate-700 mb-4">Read both side by side before submitting. The single most common cause of rejection is a mismatch between certification and policy.</p>

            </section>

            <section id="common-mistakes">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Common Writing Mistakes That Trigger Rejection</h2>
              <p className="text-slate-700 mb-4">Copying a website privacy policy and pasting it under an extension. Website policies mention things extensions never do (advertising cookies, marketing automation) and miss things extensions always do (browser API access).</p>
              <p className="text-slate-700 mb-4">Listing data the extension does not collect. Reviewers test the extension and notice when the policy lists data the extension never touches. It is just as bad as missing data.</p>
              <p className="text-slate-700 mb-4">Stale policies. A policy with a 2021 last updated date for a 2026 extension reads as abandoned. Refresh the date with every meaningful change.</p>

            </section>


              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How long should a Chrome extension privacy policy be?</h3>
                <p className="text-slate-700">Two to four pages is typical. Long enough to cover the seven sections in detail, short enough that a reviewer can read it in two minutes. Shorter is better than padded, as long as nothing important is missing.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I write the policy in a language other than English?</h3>
                <p className="text-slate-700">Yes, but the language should match the primary language of your extension&apos;s listing. If your extension is listed in English, the policy should be in English. You can offer translations, but the English version is the one reviewers will check.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Should I have a lawyer review my Chrome extension privacy policy?</h3>
                <p className="text-slate-700">For high risk extensions (financial data, health data, sensitive user content), yes. For most consumer extensions, a generator that produces a structurally sound policy plus careful customisation is enough to pass Web Store review and meet baseline GDPR and CCPA requirements.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What if my extension changes data handling in a future update?</h3>
                <p className="text-slate-700">Update the policy at the same time you submit the new version. Update the last modified date. If the change is material (new data types, new third parties), surface a notification inside the extension as well.</p>
              </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">Write your Chrome extension privacy policy in 60 seconds</h2>
                <p className="text-blue-100 mb-4">Web Store approved structure, GDPR ready, all seven sections covered. Updated April 2026.</p>
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
                <Link href="/chrome-extension-privacy-policy-template" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension Privacy Policy Template</p>
                  <p className="text-sm text-slate-500 mt-1">Template you can copy and customize.</p>
                </Link>
                <Link href="/how-to-add-privacy-policy-to-chrome-extension" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">How to Add Privacy Policy to Chrome Extension</p>
                  <p className="text-sm text-slate-500 mt-1">Step by step dashboard walkthrough.</p>
                </Link>
                <Link href="/chrome-extension-user-data-policy" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension User Data Policy</p>
                  <p className="text-sm text-slate-500 mt-1">What Google&apos;s user data rules require.</p>
                </Link>
                <Link href="/manifest-v3-privacy-policy-requirements" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Manifest V3 Privacy Policy Requirements</p>
                  <p className="text-sm text-slate-500 mt-1">MV3 specific privacy considerations.</p>
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
