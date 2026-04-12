import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck, AlertTriangle, CheckCircle, FileText, ArrowRight,
  ArrowUpRight, HelpCircle, Clock, Ban, Info, Users, Globe, Code, Target,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Chrome Extension Single Purpose Policy: Developer Guide (2026) | ultrafastutilities",
  description: "Chrome Web Store requires every extension to have a single purpose. Learn what single purpose means, how it affects permissions, and what to include in your extension's privacy policy.",
  keywords: "chrome extension single purpose policy, chrome web store single purpose, chrome extension single purpose requirement, chrome web store developer program policies single purpose",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ultrafastutilities.com/chrome-extension-single-purpose-policy" },
  openGraph: {
    title: "Chrome Extension Single Purpose Policy: Developer Guide (2026) | ultrafastutilities",
    description: "Chrome Web Store requires every extension to have a single purpose. Learn what it means and how it affects your privacy policy and permissions.",
    url: "https://ultrafastutilities.com/chrome-extension-single-purpose-policy",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Chrome Extension Single Purpose Policy" }],
    locale: "en_US", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chrome Extension Single Purpose Policy: Developer Guide (2026) | ultrafastutilities",
    description: "Chrome Web Store requires every extension to have a single purpose. Learn requirements and privacy policy implications.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-is-single-purpose", title: "What Is Single Purpose?" },
  { id: "why-it-matters", title: "Why It Matters for Privacy" },
  { id: "permissions-and-purpose", title: "Permissions and Purpose" },
  { id: "policy-implications", title: "Privacy Policy Implications" },
  { id: "examples", title: "Examples: Pass vs Fail" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "faq", title: "FAQ" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Chrome Web Store single purpose policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Chrome Web Store single purpose policy requires that each extension have a single purpose that is narrow and easy to understand. An extension's functionality must be clearly described by its title and description, and all features must serve that single stated purpose. Extensions cannot bundle multiple unrelated features just to collect broader user permissions.",
      },
    },
    {
      "@type": "Question",
      name: "How does single purpose affect my extension's privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single purpose directly shapes your privacy policy because every permission you request must be justified by your single stated purpose. Your privacy policy should clearly describe your extension's purpose, then explain why each permission is necessary for that specific purpose. Data collection beyond what is needed for your single purpose violates both the single purpose policy and data minimization requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can my extension have multiple features?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, an extension can have multiple features as long as they all serve a single, coherent purpose. For example, a productivity extension can have multiple features (timers, notes, reminders) as long as they all serve the purpose of 'productivity.' The problem arises when features are unrelated - like combining a weather tool with a tab manager.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my extension violates the single purpose policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google can remove your extension from the Chrome Web Store for single purpose violations. This is one of the most common reasons for extension rejection and removal. Google may also flag extensions that request permissions inconsistent with their stated single purpose, as this is often used to collect data beyond what users expect.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Chrome Extension Single Purpose Policy: Developer Guide (2026)",
  description: "Complete guide to Chrome Web Store single purpose policy requirements and their impact on your extension's privacy policy.",
  datePublished: "2026-01-01",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
  publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
    { "@type": "ListItem", position: 2, name: "Chrome Extension Single Purpose Policy", item: "https://ultrafastutilities.com/chrome-extension-single-purpose-policy" },
  ],
};

export default function ChromeExtensionSinglePurposePolicy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
              <span className="text-slate-600">Chrome Extension Single Purpose Policy</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Target className="w-3.5 h-3.5" />
                Chrome Web Store Developer Guide 2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Chrome Extension{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Single Purpose Policy
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Every Chrome extension must have a single, clear purpose. This policy affects your permissions, data collection, and privacy policy. Here is what you need to know.
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
                  <p className="text-sm font-semibold text-slate-800">Need your own policy?</p>
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>10 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              <div id="what-is-single-purpose" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />What Is the Chrome Web Store Single Purpose Policy?
                </h2>
                <p className="text-blue-800">Google's Chrome Web Store Developer Program Policies require that every Chrome extension have a <strong>single purpose that is narrow and easy for users to understand.</strong> The extension's title, description, and functionality must all reflect this single purpose. Features that do not serve the stated purpose are not permitted. This policy exists to prevent extensions from masquerading as one thing while collecting data or performing unrelated functions.</p>
              </div>

              <section id="why-it-matters">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Single Purpose Matters for Privacy</h2>
                <p className="text-slate-700 mb-4">The single purpose policy is fundamentally a privacy protection measure. Its core logic: if an extension only does one thing, users can understand what data it needs and why.</p>
                <p className="text-slate-700 mb-6">Before the single purpose policy was enforced, many extensions bundled multiple functions - including hidden data collection - behind seemingly simple tools. A "weather extension" might also read all tabs, inject scripts into every page, and collect browsing history.</p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">Google's enforcement of the single purpose policy has become significantly stricter since 2023. Extensions that request permissions not clearly justified by their stated purpose are flagged for manual review and are among the most common rejections during new extension submissions.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="permissions-and-purpose">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Permissions Must Match Your Single Purpose</h2>
                <p className="text-slate-700 mb-6">Every permission in your manifest.json must be clearly justified by your extension's single stated purpose. Requesting permissions beyond what your purpose requires is a violation.</p>
                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Extension Purpose</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Justified Permissions</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Not Justified</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Password manager","storage, tabs (for auto-fill)","browsing history, all URLs"],
                        ["Ad blocker","webRequest, declarativeNetRequest","reading clipboard, geolocation"],
                        ["Grammar checker","activeTab, contextMenus","cookies, all tabs history"],
                        ["Dark mode","activeTab, storage","reading form inputs, identity"],
                        ["Tab organizer","tabs, windows, bookmarks","webRequest, clipboard"],
                      ].map(([p,j,n]) => (
                        <tr key={p}><td className="p-3 font-medium text-slate-800">{p}</td><td className="p-3 text-green-700">{j}</td><td className="p-3 text-red-600">{n}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="policy-implications">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How Single Purpose Shapes Your Privacy Policy</h2>
                <p className="text-slate-700 mb-4">Your privacy policy should directly mirror your single purpose claim. Here is how to structure it:</p>
                <div className="space-y-3">
                  {[
                    { step: "1", title: "State your single purpose clearly", detail: "Open your privacy policy with a clear statement of your extension's single purpose. This anchors every subsequent data disclosure." },
                    { step: "2", title: "Connect each permission to the purpose", detail: "For every permission in your manifest, explain in the policy why it is necessary for the stated purpose. If you cannot explain it, you probably should not have it." },
                    { step: "3", title: "Disclose that you do not use data beyond the purpose", detail: "Explicitly state that data collected is used only for the extension's single purpose and that you comply with the Chrome Web Store Limited Use Policy." },
                    { step: "4", title: "List what data the extension does NOT collect", detail: "Proactively stating what you do not collect (browsing history, personal communications, etc.) builds user trust and demonstrates good faith compliance." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 border border-slate-200 rounded-xl">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">{item.step}</div>
                      <div><p className="font-semibold text-slate-800">{item.title}</p><p className="text-slate-600 text-sm mt-1">{item.detail}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="examples">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Examples: Single Purpose Pass vs Fail</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <p className="font-semibold text-green-800 mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" />PASS: Clear Single Purpose</p>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li><strong>"Save to Pocket"</strong> - Single purpose: save web pages to read later. All features (save button, keyboard shortcut, tag input) serve this one purpose.</li>
                      <li><strong>"Dark Reader"</strong> - Single purpose: dark mode for all websites. All features (brightness, contrast, font settings) serve appearance customization.</li>
                      <li><strong>"uBlock Origin"</strong> - Single purpose: content filtering. All features serve blocking ads and trackers.</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <p className="font-semibold text-red-800 mb-3 flex items-center gap-2"><Ban className="w-4 h-4" />FAIL: Multiple Unrelated Purposes</p>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li><strong>"Weather + Tab Manager + Coupon Finder"</strong> - Three unrelated purposes bundled in one extension to justify broad permissions.</li>
                      <li><strong>"Calculator that also tracks your browsing"</strong> - Core function (calculator) does not justify browsing history permission.</li>
                      <li><strong>"New Tab page that includes VPN, email, and social feed"</strong> - Multiple distinct services bundled under "new tab" purpose.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5 Common Single Purpose Policy Mistakes</h2>
                <div className="space-y-4">
                  {[
                    { title: "Requesting permissions not needed for your stated purpose", desc: "If your extension is a to-do list, you do not need 'tabs', 'history', or 'cookies' permissions. Each unnecessary permission is a red flag during review." },
                    { title: "Bundling multiple unrelated features to justify broad permissions", desc: "Adding unrelated features (like a weather widget to a grammar checker) to justify requesting broad permissions is a direct policy violation. Google detects this pattern." },
                    { title: "A privacy policy that is vaguer than your Chrome Web Store description", desc: "If your store listing claims the extension only reads the active tab, but your privacy policy mentions 'browsing history,' you have created a contradiction that triggers review." },
                    { title: "Not updating your privacy policy when adding new features", desc: "Adding a feature that requires new data access without updating your privacy policy is a policy violation. Every new capability must be documented." },
                    { title: "Using optional_permissions to bypass single purpose scrutiny", desc: "Some developers use optional_permissions to request sensitive permissions without immediate review. Google still enforces single purpose requirements for optional permissions - they must still relate to your core stated purpose." },
                  ].map((mistake, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div><p className="font-semibold text-red-800">{mistake.title}</p><p className="text-red-700 text-sm mt-1">{mistake.desc}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "What is the Chrome Web Store single purpose policy?", a: "It requires every Chrome extension to have a single purpose that is narrow and easy to understand. All features, permissions, and data collection must serve this one stated purpose." },
                    { q: "How does single purpose affect my extension's privacy policy?", a: "Every permission and data collection practice in your privacy policy must be justified by your single stated purpose. If you cannot explain why a permission is needed for your purpose, remove it from both your manifest and policy." },
                    { q: "Can my extension have multiple features?", a: "Yes - multiple features are fine as long as they all serve a single coherent purpose. A productivity extension can have timers, notes, and reminders. The violation is features that serve completely unrelated purposes." },
                    { q: "What happens if my extension violates the single purpose policy?", a: "Google can reject your submission or remove your extension from the Chrome Web Store. This is one of the most common reasons for extension removal." },
                  ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-800 flex items-start gap-2"><HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />{item.q}</h3>
                      <p className="text-slate-600 mt-2 ml-7 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="generate" className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Generate Your Chrome Extension Privacy Policy</h2>
                <p className="text-slate-300 mb-6">Create a privacy policy that aligns with your extension's single purpose and meets all Chrome Web Store requirements in under 2 minutes.</p>
                <ul className="space-y-2 text-slate-300 mb-6 text-sm">
                  {["Single purpose alignment included","Permission-specific disclosures","Limited use compliance statement","Chrome Web Store policy compliant"].map(i => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />{i}</li>
                  ))}
                </ul>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 text-lg">Generate Free Privacy Policy<ArrowRight className="ml-2 w-5 h-5" /></Button>
                </Link>
              </section>

              <section id="resources">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Chrome Extension User Data Policy", desc: "Full user data policy requirements", href: "/chrome-extension-user-data-policy" },
                    { title: "Chrome Extension Privacy Policy Template", desc: "Complete Chrome extension template", href: "/chrome-extension-privacy-policy-template" },
                    { title: "Do Chrome Extensions Need a Privacy Policy?", desc: "When Chrome extensions require a policy", href: "/do-chrome-extensions-need-a-privacy-policy" },
                    { title: "Chrome Web Store Privacy Policy Requirements", desc: "All Chrome Web Store requirements", href: "/chrome-web-store-privacy-policy-requirements" },
                    { title: "Chrome Extension GDPR Compliance", desc: "GDPR for Chrome extensions", href: "/chrome-extension-gdpr-compliance" },
                    { title: "Chrome Web Store Privacy Policy Requirements", desc: "Privacy requirements for extension listings", href: "/chrome-web-store-privacy-policy-requirements" },
                    { title: "Privacy Policy for Chrome Extension", desc: "Chrome extension privacy policy guide", href: "/privacy-policy-for-chrome-extension" },
                    { title: "What Should a Privacy Policy Include?", desc: "Complete privacy policy sections checklist", href: "/what-should-a-privacy-policy-include" },
                  ].map((resource) => (
                    <Link key={resource.href} href={resource.href} className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                      <ArrowUpRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <div><p className="font-medium text-slate-800 group-hover:text-blue-700">{resource.title}</p><p className="text-slate-500 text-sm">{resource.desc}</p></div>
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
