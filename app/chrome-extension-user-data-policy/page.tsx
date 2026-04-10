import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck, AlertTriangle, CheckCircle, FileText, ArrowRight,
  ArrowUpRight, HelpCircle, Clock, Ban, Info, Users, Globe, Lock, Code, Eye,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Chrome Extension User Data Policy: Complete Requirements (2026) | ultrafastutilities",
  description: "Chrome Web Store requires a privacy policy when your extension handles user data. Learn exact requirements for user data policy, limited use disclosure, and data minimization.",
  keywords: "chrome extension user data policy, chrome web store user data policy, chrome extension privacy requirements, chrome web store privacy policy user data, extension user data handling",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ultrafastutilities.com/chrome-extension-user-data-policy" },
  openGraph: {
    title: "Chrome Extension User Data Policy: Complete Requirements (2026) | ultrafastutilities",
    description: "Chrome Web Store requires a privacy policy when your extension handles user data. Learn exact requirements for user data policy, limited use disclosure, and data minimization.",
    url: "https://ultrafastutilities.com/chrome-extension-user-data-policy",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Chrome Extension User Data Policy" }],
    locale: "en_US", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chrome Extension User Data Policy: Complete Requirements (2026) | ultrafastutilities",
    description: "Chrome Web Store requires a privacy policy when your extension handles user data.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-is-user-data", title: "What Counts as User Data?" },
  { id: "when-required", title: "When a Policy Is Required" },
  { id: "limited-use", title: "Limited Use Disclosure" },
  { id: "data-categories", title: "Sensitive Data Categories" },
  { id: "what-to-include", title: "What to Include" },
  { id: "prominent-disclosure", title: "Prominent Disclosure" },
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
      name: "When does a Chrome extension need a user data policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google requires a privacy policy for any Chrome extension that collects, uses, or transmits user data. This includes: reading browsing history, accessing tab information, reading clipboard contents, collecting form data, storing user preferences beyond local extension storage, or transmitting any data to external servers. If your extension requests any permission that gives access to user data, you need a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Chrome Web Store limited use disclosure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Chrome Web Store Limited Use Policy requires that user data collected by Chrome extensions be used only to provide or improve the user-facing features of the extension. You must not use, transfer, or sell user data for advertising purposes, data brokers, or creditworthiness purposes. Your privacy policy must explicitly state that you comply with these limited use requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What personal and sensitive data requires additional disclosure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chrome Web Store requires prominent disclosure and explicit user consent for: web history, financial information, authentication information, personal communications, location data, health information, and system activity. For these categories, you must have a prominent in-product disclosure before data collection begins, not just a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Where does my Chrome extension privacy policy need to be linked?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy must be linked in: your Chrome Web Store listing page in the Privacy practices tab, your extension's Chrome Web Store detail page, and if you have a companion website, in the website footer. The policy URL must be an active, publicly accessible link - not a PDF or Google Doc that requires login.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Chrome Extension User Data Policy: Complete Requirements (2026)",
  description: "Complete guide to Chrome Web Store user data policy requirements for extension developers.",
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
    { "@type": "ListItem", position: 2, name: "Chrome Extension User Data Policy", item: "https://ultrafastutilities.com/chrome-extension-user-data-policy" },
  ],
};

export default function ChromeExtensionUserDataPolicy() {
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
              <span className="text-slate-600">Chrome Extension User Data Policy</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Code className="w-3.5 h-3.5" />
                Chrome Web Store Requirements
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Chrome Extension{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">User Data Policy</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Google's Chrome Web Store requires a user data policy for any extension that accesses, collects, or transmits user data. Here is exactly what you need and how to comply.
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
                <span>Last updated: April 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>11 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              <div id="what-is-user-data" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />What Counts as User Data in Chrome Extensions?
                </h2>
                <p className="text-blue-800 mb-3">Under Chrome Web Store policy, "user data" means any information about a user's identity, browsing activity, or system that your extension can access. You need a privacy policy if your extension does any of the following:</p>
                <ul className="space-y-1 text-blue-800 text-sm">
                  {["Reads browsing history, tabs, or URLs visited","Accesses clipboard contents","Reads cookies from any domain","Captures keystrokes or form inputs","Accesses geolocation","Communicates with external servers","Stores data in any cloud or remote system","Reads bookmarks, downloads, or browser history"].map(i => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />{i}</li>
                  ))}
                </ul>
              </div>

              <section id="when-required">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">When Is a User Data Policy Required?</h2>
                <p className="text-slate-700 mb-4">Google's Chrome Web Store Developer Program Policies require a privacy policy in two situations:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Situation</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Policy Required?</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Extra Steps?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Extension collects or transmits any user data","Yes - mandatory","Limited use disclosure required"],
                        ["Extension uses sensitive user data (web history, comms)","Yes - mandatory","Prominent in-product disclosure + consent"],
                        ["Extension stores data locally only, no transmission","Recommended","Good practice even if not mandatory"],
                        ["Extension has no data access at all","No","Still good practice"],
                      ].map(([s,r,e]) => (
                        <tr key={s}><td className="p-3 font-medium text-slate-800">{s}</td><td className="p-3 text-slate-600">{r}</td><td className="p-3 text-slate-600">{e}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">Google can remove your extension from the Chrome Web Store without warning if you collect user data without a valid privacy policy link. Extensions are regularly reviewed and policy violations can result in immediate takedown, affecting all your users.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="limited-use">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">The Limited Use Disclosure Requirement</h2>
                <p className="text-slate-700 mb-4">The Chrome Web Store Limited Use Policy is one of the strictest requirements. Your privacy policy must explicitly state that you comply with it. The limited use requirements are:</p>
                <div className="space-y-3">
                  {[
                    { rule: "Only use data to provide or improve user-facing features", detail: "You cannot use extension user data for purposes unrelated to the core function of the extension." },
                    { rule: "Do not use for advertising purposes", detail: "User data collected by your extension cannot be used to serve or target advertisements, even if anonymized." },
                    { rule: "Do not sell to data brokers", detail: "You cannot transfer or sell user data to data brokers, information resellers, or similar entities." },
                    { rule: "Do not use for creditworthiness assessment", detail: "User data cannot be used to determine credit eligibility, insurance rates, or similar financial assessments." },
                  ].map((item) => (
                    <div key={item.rule} className="border border-slate-200 rounded-xl p-4">
                      <p className="font-semibold text-slate-800 text-sm flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{item.rule}</p>
                      <p className="text-slate-600 text-sm mt-1 ml-6">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-4">
                  <p className="font-semibold text-blue-900 text-sm mb-2">Required statement in your privacy policy:</p>
                  <p className="text-blue-800 text-sm italic">"The use of information received from Google APIs will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements."</p>
                </div>
              </section>

              <section id="data-categories">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Sensitive Data Categories Requiring Extra Disclosure</h2>
                <p className="text-slate-700 mb-6">For certain sensitive data categories, a privacy policy alone is not enough. Google requires a prominent in-product disclosure before collecting this data:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Data Category</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Policy Required</th>
                        <th className="text-left p-3 font-semibold text-slate-700">In-Product Disclosure</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Web browsing history","Yes","Yes - before collection"],
                        ["Financial information","Yes","Yes - before collection"],
                        ["Authentication credentials","Yes","Yes - before collection"],
                        ["Personal communications (email, messages)","Yes","Yes - before collection"],
                        ["Location data","Yes","Yes - before collection"],
                        ["Health information","Yes","Yes - before collection"],
                        ["System activity monitoring","Yes","Yes - before collection"],
                      ].map(([cat, pol, disc]) => (
                        <tr key={cat}><td className="p-3 font-medium text-slate-800">{cat}</td><td className="p-3 text-green-600 font-medium">{pol}</td><td className="p-3 text-amber-600 font-medium">{disc}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="what-to-include">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Include in Your Extension User Data Policy</h2>
                <div className="space-y-3">
                  {[
                    { title: "What data your extension collects", detail: "List every type of data your extension can access: URLs, browsing history, clipboard, cookies, form inputs, etc." },
                    { title: "Why you collect each type of data", detail: "Describe the specific extension feature that requires each data type. Be specific - 'to enable tab synchronization' not 'to improve user experience'." },
                    { title: "Where data is sent or stored", detail: "If any data leaves the user's device, specify where it goes: your own servers, third-party services, cloud storage." },
                    { title: "Limited use compliance statement", detail: "Explicitly state that your data use complies with Chrome Web Store User Data Policy and Limited Use requirements." },
                    { title: "How users can request deletion", detail: "Provide a process for users to request deletion of any data you hold about them." },
                    { title: "Data retention period", detail: "Specify how long you retain user data and your deletion process." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div><p className="font-semibold text-slate-800 text-sm">{item.title}</p><p className="text-slate-600 text-sm mt-1">{item.detail}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="prominent-disclosure">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Prominent Disclosure: What It Means</h2>
                <p className="text-slate-700 mb-4">For sensitive data, Google requires "prominent disclosure" - meaning the disclosure must be presented clearly before any data collection, not buried in a settings page or privacy policy.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="font-semibold text-green-800 mb-2 text-sm">Acceptable Prominent Disclosure</p>
                    <ul className="space-y-1 text-green-700 text-sm">
                      {["Pop-up dialog before first use","Onboarding screen explaining data collection","In-extension permission request with clear explanation","Dedicated settings page shown on first install"].map(i => (
                        <li key={i} className="flex items-start gap-2"><CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />{i}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4">
                    <p className="font-semibold text-red-800 mb-2 text-sm">NOT Sufficient</p>
                    <ul className="space-y-1 text-red-700 text-sm">
                      {["Privacy policy link only","Small text in extension description","Disclosure buried in Chrome Web Store listing","Disclosure only in terms of service"].map(i => (
                        <li key={i} className="flex items-start gap-2"><Ban className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">Google reviews extensions for prominent disclosure compliance using automated tools and manual review. Extensions that collect web history or communications without a visible in-product disclosure are among the most commonly removed from the Chrome Web Store.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5 Common Chrome Extension User Data Policy Mistakes</h2>
                <div className="space-y-4">
                  {[
                    { title: "Using a generic website privacy policy for your extension", desc: "A standard website privacy policy doesn't cover extension-specific requirements like limited use disclosure, permission-specific data use, or Chrome Web Store compliance. You need an extension-specific policy." },
                    { title: "Not adding the limited use compliance statement", desc: "Google specifically requires you to state in your privacy policy that you comply with the Chrome Web Store User Data Policy and Limited Use requirements. A generic policy that omits this can trigger policy violations." },
                    { title: "Linking to a Google Doc or PDF that requires login", desc: "Your privacy policy must be on a publicly accessible URL. Google's review system cannot access documents behind authentication, and users cannot read policies they need to log in to view." },
                    { title: "Collecting more data than required for your extension's stated purpose", desc: "The data minimization principle requires you to only collect what is necessary for the extension's core function. Requesting excessive permissions or collecting data beyond what features require violates the Developer Program Policies." },
                    { title: "Not updating the policy when adding new permissions", desc: "Every new permission you add to your extension that accesses user data requires an update to your privacy policy. Submitting an update that adds data-accessing permissions without updating the policy can cause rejection." },
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
                    { q: "When does a Chrome extension need a user data policy?", a: "Any extension that collects, uses, or transmits user data needs a privacy policy. This includes reading tabs, browsing history, clipboard, cookies, or communicating with external servers." },
                    { q: "What is the Chrome Web Store limited use disclosure?", a: "It requires that user data be used only to provide or improve the extension's user-facing features. Data cannot be used for advertising, sold to data brokers, or used for creditworthiness assessments. Your policy must explicitly state compliance." },
                    { q: "What personal and sensitive data requires additional disclosure?", a: "Web history, financial information, authentication credentials, personal communications, location, health information, and system activity all require prominent in-product disclosure before collection." },
                    { q: "Where does my Chrome extension privacy policy need to be linked?", a: "In your Chrome Web Store listing's Privacy practices tab, on your extension's store page, and on your companion website if you have one. Must be a publicly accessible URL, not behind a login." },
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
                <p className="text-slate-300 mb-6">Create a privacy policy that meets all Chrome Web Store user data requirements in under 2 minutes. Includes limited use disclosure, sensitive data sections, and permission-specific language.</p>
                <ul className="space-y-2 text-slate-300 mb-6 text-sm">
                  {["Limited use compliance statement included","Sensitive data categories covered","Permission-specific data disclosures","Chrome Web Store policy compliant"].map(i => (
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
                    { title: "Chrome Extension Privacy Policy Template", desc: "Complete template for Chrome extensions", href: "/chrome-extension-privacy-policy-template" },
                    { title: "Do Chrome Extensions Need a Privacy Policy?", desc: "When Chrome extensions require a policy", href: "/do-chrome-extensions-need-a-privacy-policy" },
                    { title: "Chrome Web Store Privacy Policy Requirements", desc: "Full Chrome Web Store policy requirements", href: "/chrome-web-store-privacy-policy-requirements" },
                    { title: "Chrome Extension GDPR Compliance", desc: "GDPR requirements for Chrome extensions", href: "/chrome-extension-gdpr-compliance" },
                    { title: "Chrome Extension Single Purpose Policy", desc: "Single purpose policy requirements explained", href: "/chrome-extension-single-purpose-policy" },
                    { title: "Privacy Policy for Chrome Extension", desc: "Chrome extension privacy policy guide", href: "/privacy-policy-for-chrome-extension" },
                    { title: "Privacy Policy for Firefox Add-on", desc: "Mozilla Firefox extension requirements", href: "/privacy-policy-for-apps" },
                    { title: "GDPR Privacy Policy Template", desc: "EU-compliant privacy policy template", href: "/gdpr-privacy-policy-template" },
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
