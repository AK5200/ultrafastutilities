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
  title: "Firefox Extension Privacy Policy: Mozilla AMO Rules (2026)",
  description: "Mozilla addons.mozilla.org requires a privacy policy for extensions that collect user data. See the AMO review process, what to disclose, and how to pass.",
  keywords: "firefox extension privacy policy, mozilla addons privacy, AMO privacy policy, firefox addon privacy requirements",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/firefox-extension-privacy-policy",
  },
  openGraph: {
    title: "Firefox Extension Privacy Policy: Mozilla AMO Rules (2026)",
    description: "Mozilla addons.mozilla.org requires a privacy policy for extensions that collect user data. See the AMO review process, what to disclose, and how to pass.",
    url: "https://ultrafastutilities.com/firefox-extension-privacy-policy",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Firefox Extension Privacy Policy: Mozilla AMO Rules (2026)" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firefox Extension Privacy Policy: Mozilla AMO Rules (2026)",
    description: "Mozilla addons.mozilla.org requires a privacy policy for extensions that collect user data. See the AMO review process, what to disclose, and how to pass.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "amo-process", title: "How the Mozilla AMO Review Works" },
  { id: "amo-listing-data-collection", title: "The AMO Listing Data Collection Field" },
  { id: "what-to-include", title: "What a Firefox Extension Privacy Policy Must Include" },
  { id: "common-issues", title: "Common Issues Mozilla Reviewers Flag" }
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does every Firefox extension need a privacy policy?","acceptedAnswer":{"@type":"Answer","text":"Mozilla requires a privacy policy for any extension that collects or transmits user data. Extensions that genuinely process nothing personal can submit without one, but reviewers still recommend a brief policy that clearly states no data is collected, to avoid confusion at install time."}},{"@type":"Question","name":"Can I reuse my Chrome extension privacy policy for Firefox?","acceptedAnswer":{"@type":"Answer","text":"Yes, with care. The legal substance carries over because both browsers use the WebExtensions API. Update the policy to reference both Chrome and Firefox by name, and double check that any browser specific behaviour you describe matches the Firefox build of the extension."}},{"@type":"Question","name":"How long does Mozilla AMO review take with a privacy policy in place?","acceptedAnswer":{"@type":"Answer","text":"Automated review can complete in minutes. Human review usually takes a few business days for routine extensions, longer for those with sensitive permissions. A clear, accurate privacy policy speeds up review because it removes the most common reason for back and forth with reviewers."}},{"@type":"Question","name":"Does Firefox have a data handling certification like Chrome?","acceptedAnswer":{"@type":"Answer","text":"Mozilla uses the data collection field on the AMO listing instead of a separate certification page. The field captures the same information at a higher level. Be sure your data collection field, your privacy policy, and your manifest all agree."}}]};

const articleSchema = {"@context":"https://schema.org","@type":"Article","headline":"Firefox Extension Privacy Policy: Mozilla AMO Rules (2026)","description":"Mozilla addons.mozilla.org requires a privacy policy for extensions that collect user data. See the AMO review process, what to disclose, and how to pass.","datePublished":"2026-04-11","dateModified":"2026-04-11","author":{"@type":"Person","name":"Anupam Kumar"},"publisher":{"@type":"Organization","name":"ultrafastutilities","url":"https://ultrafastutilities.com"}};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ultrafastutilities.com"},{"@type":"ListItem","position":2,"name":"Firefox Extension Privacy Policy","item":"https://ultrafastutilities.com/firefox-extension-privacy-policy"}]};

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
              <span className="text-slate-600">Firefox Extension Privacy Policy</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Mozilla Firefox
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Firefox Extension{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Privacy Policy</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Mozilla addons.mozilla.org has historically been one of the strictest extension stores when it comes to privacy review. Here is what your Firefox extension privacy policy must cover in 2026.
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
                  <span className="text-slate-400">Mozilla AMO 2026 rules</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>Mozilla requires Firefox extensions that collect any user data to publish a clear privacy policy and to declare data collection through the addons.mozilla.org listing.</strong>{" "}Mozilla&apos;s review process is human led for many extensions and reviewers actively compare policy text against extension behaviour. Vague or boilerplate policies that do not match the extension&apos;s actual data flows are rejected or sent back with detailed feedback.
                </p>
              </div>

            <section id="amo-process">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How the Mozilla AMO Review Works</h2>
              <p className="text-slate-700 mb-4">Firefox extensions are distributed through addons.mozilla.org, often called AMO. AMO has both automated and human review tracks, depending on what your extension does. Extensions that request sensitive permissions, request all sites access, or use remote scripts typically get human review.</p>
              <p className="text-slate-700 mb-4">During human review, a Mozilla volunteer or staff reviewer reads your privacy policy and compares it against your extension&apos;s behaviour. They check whether your manifest permissions match what the policy describes, whether the extension contacts any servers the policy does not name, and whether the data collection statement on your AMO listing is accurate.</p>
              <p className="text-slate-700 mb-4">Mozilla rejects extensions whose policies are generic boilerplate, do not name the extension, or contradict the extension&apos;s actual behaviour. Specificity is the single most important quality of a Firefox extension privacy policy.</p>

            </section>

            <section id="amo-listing-data-collection">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The AMO Listing Data Collection Field</h2>
              <p className="text-slate-700 mb-4">When you create or update an AMO listing, you fill in a data collection field that tells users at install time what your extension collects. This is separate from the privacy policy URL but must be consistent with it.</p>
              <p className="text-slate-700 mb-4">Be honest in this field. Users see it before they install. Mozilla penalises listings whose data collection field understates what the extension actually does, and reviewers will ask you to correct it.</p>
              <p className="text-slate-700 mb-4">If your data collection list and your privacy policy disagree, Mozilla treats it as a misleading listing. Always update both at the same time when something changes.</p>

            </section>

            <section id="what-to-include">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What a Firefox Extension Privacy Policy Must Include</h2>
              <p className="text-slate-700 mb-4">Name your extension, your company or developer name, and a contact email at the top. Reviewers check that the document clearly belongs to the extension being submitted.</p>
              <p className="text-slate-700 mb-4">List every category of personal data the extension collects, accesses, or transmits. Be specific. Include any data sent to your own servers, any data sent to third party services, and any data stored locally that could be considered personal.</p>
              <p className="text-slate-700 mb-4">Describe how the data is used, who has access, how it is secured, and how long it is retained. Add a section explaining how users can request access, correction, or deletion. If your extension users are in the EU or UK, include the GDPR legal basis for processing.</p>
              <p className="text-slate-700 mb-4">End with a last updated date and a note about how users will be notified of material changes to the policy.</p>

            </section>

            <section id="common-issues">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Common Issues Mozilla Reviewers Flag</h2>
              <p className="text-slate-700 mb-4">Boilerplate policies that look like they were generated for a generic website. Mozilla flags these regularly. Customize the template to your specific extension before submission.</p>
              <p className="text-slate-700 mb-4">Missing third party disclosures. If your extension contacts Google Analytics, an error reporting service, an ad network, or any other third party, name them. Reviewers see the network traffic during testing.</p>
              <p className="text-slate-700 mb-4">Policies that contradict the manifest. If your manifest requests the history permission but the policy says we do not access browsing history, reviewers reject the listing. Make sure the policy reflects what the manifest enables.</p>

            </section>


              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Does every Firefox extension need a privacy policy?</h3>
                <p className="text-slate-700">Mozilla requires a privacy policy for any extension that collects or transmits user data. Extensions that genuinely process nothing personal can submit without one, but reviewers still recommend a brief policy that clearly states no data is collected, to avoid confusion at install time.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I reuse my Chrome extension privacy policy for Firefox?</h3>
                <p className="text-slate-700">Yes, with care. The legal substance carries over because both browsers use the WebExtensions API. Update the policy to reference both Chrome and Firefox by name, and double check that any browser specific behaviour you describe matches the Firefox build of the extension.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How long does Mozilla AMO review take with a privacy policy in place?</h3>
                <p className="text-slate-700">Automated review can complete in minutes. Human review usually takes a few business days for routine extensions, longer for those with sensitive permissions. A clear, accurate privacy policy speeds up review because it removes the most common reason for back and forth with reviewers.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Does Firefox have a data handling certification like Chrome?</h3>
                <p className="text-slate-700">Mozilla uses the data collection field on the AMO listing instead of a separate certification page. The field captures the same information at a higher level. Be sure your data collection field, your privacy policy, and your manifest all agree.</p>
              </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">Generate a Mozilla AMO ready privacy policy</h2>
                <p className="text-blue-100 mb-4">Specific, reviewer friendly, GDPR ready, and updated for 2026 Firefox extension review.</p>
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
                  <p className="text-sm text-slate-500 mt-1">Companion guide for the Chrome Web Store.</p>
                </Link>
                <Link href="/chrome-extension-privacy-policy-template" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension Privacy Policy Template</p>
                  <p className="text-sm text-slate-500 mt-1">Template that works for Firefox after small edits.</p>
                </Link>
                <Link href="/chrome-extension-gdpr-compliance" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension GDPR Compliance</p>
                  <p className="text-sm text-slate-500 mt-1">EU and UK user rights for browser extensions.</p>
                </Link>
                <Link href="/edge-extension-privacy-policy-requirements" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Edge Extension Privacy Policy Requirements</p>
                  <p className="text-sm text-slate-500 mt-1">The Microsoft Edge sister rules.</p>
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
