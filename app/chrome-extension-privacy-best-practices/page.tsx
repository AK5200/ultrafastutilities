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
  Chrome,
  Lock,
  Eye,
  Database,
  Code,
  Users,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Chrome Extension Privacy Best Practices: Developer Guide (2026) | ultrafastutilities",
  description:
    "Build privacy-compliant Chrome extensions from day one. Covers Manifest V3 permissions, limited use policy, user data handling, Chrome Web Store review, and GDPR compliance for extension developers.",
  keywords:
    "chrome extension privacy best practices, chrome extension data handling, manifest v3 privacy, chrome web store privacy requirements, chrome extension developer privacy guide",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/chrome-extension-privacy-best-practices",
  },
  openGraph: {
    title: "Chrome Extension Privacy Best Practices: Developer Guide (2026) | ultrafastutilities",
    description: "Build privacy-compliant Chrome extensions from day one. Covers Manifest V3 permissions, limited use policy, user data handling, and Chrome Web Store review.",
    url: "https://ultrafastutilities.com/chrome-extension-privacy-best-practices",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Chrome Extension Privacy Best Practices | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chrome Extension Privacy Best Practices: Developer Guide (2026) | ultrafastutilities",
    description: "Build privacy-compliant Chrome extensions from day one. Manifest V3, limited use, user data handling, and Chrome Web Store review.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-privacy-matters", title: "Why Privacy Matters" },
  { id: "permission-minimization", title: "Permission Minimization" },
  { id: "data-handling", title: "Data Handling Rules" },
  { id: "limited-use", title: "Limited Use Compliance" },
  { id: "manifest-v3", title: "Manifest V3 Privacy" },
  { id: "web-store-review", title: "Web Store Review Tips" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function ChromeExtensionPrivacyBestPracticesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Chrome Extension Privacy Best Practices: Developer Guide (2026)",
            description: "Build privacy-compliant Chrome extensions from day one. Covers Manifest V3, limited use, user data handling, and Chrome Web Store review.",
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
              { "@type": "ListItem", position: 2, name: "Chrome Extension Privacy Best Practices", item: "https://ultrafastutilities.com/chrome-extension-privacy-best-practices" },
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
              <span className="text-slate-600">Chrome Extension Privacy Best Practices</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Chrome className="w-3.5 h-3.5" />
                Developer Privacy Guide
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Chrome Extension Privacy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Best Practices
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Build privacy into your Chrome extension from day one. This guide
                covers permission minimization, data handling, limited use
                compliance, and how to pass Chrome Web Store review.
              </p>
              <p className="mt-3 text-sm text-slate-400">For Chrome extension developers and publishers.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/do-chrome-extensions-need-a-privacy-policy" className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all">
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Do Extensions Need a Policy?
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link href="/chrome-extension-privacy-policy-template" className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all">
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Extension Policy Template
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
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>14 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              {/* Section 1 */}
              <section id="why-privacy-matters" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">1</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Why Privacy Is Critical for Chrome Extensions</h2>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Chrome extensions have deeper access to user data than most
                    websites or apps. They can read browsing history, modify page
                    content, access clipboard data, and intercept network requests.
                    This access makes privacy compliance both more important and
                    more scrutinized by Google's review team.
                  </p>
                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Google removes extensions that violate privacy policies.</strong>{" "}
                        In 2024 alone, Google removed over 10,000 extensions for
                        privacy policy violations, misleading permission requests,
                        or data handling issues. Getting privacy right from the start
                        is not optional -- it determines whether your extension stays
                        published.
                      </div>
                    </div>
                  </div>
                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Privacy best practices for Chrome extensions serve three goals:
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      "Pass Chrome Web Store review on the first submission",
                      "Comply with GDPR, CCPA, and other privacy laws for your users worldwide",
                      "Build user trust that drives installs, reviews, and retention",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-base leading-7 text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2 */}
              <section id="permission-minimization" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">2</span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Permission Minimization</h2>
                    <p className="mt-2 text-base text-slate-500">Request only the permissions your extension actually needs.</p>
                  </div>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    The single most impactful privacy practice is requesting the
                    minimum permissions necessary for your extension to function.
                    Every unnecessary permission increases your review risk,
                    privacy policy burden, and user friction.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Permission</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Risk Level</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Best Practice</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["tabs", "Medium", "Use activeTab instead when you only need the current tab"],
                          ["<all_urls>", "High", "Use specific host_permissions for only the domains you need"],
                          ["webRequest", "High", "Use declarativeNetRequest (MV3) instead where possible"],
                          ["history", "High", "Only request if core to your extension's purpose"],
                          ["cookies", "High", "Scope to specific domains, never request for <all_urls>"],
                          ["storage", "Low", "Prefer storage.local over storage.sync for sensitive data"],
                          ["activeTab", "Low", "Preferred over tabs -- only activates on user click"],
                          ["clipboardRead", "Medium", "Only request when clipboard access is essential"],
                        ].map(([perm, risk, practice], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="px-4 py-3 font-mono text-xs text-slate-800 border-b border-slate-100">{perm}</td>
                            <td className="px-4 py-3 border-b border-slate-100">
                              <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${risk === "High" ? "bg-red-100 text-red-700" : risk === "Medium" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                                {risk}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{practice}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3 */}
              <section id="data-handling" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">3</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Data Handling Rules</h2>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    { icon: Database, color: "bg-blue-50", iconColor: "text-blue-600", title: "Minimize data collection", items: ["Only collect data essential to your extension's single purpose", "Do not collect browsing data unless your extension is specifically a browsing tool", "Strip personally identifiable information from analytics events", "Never collect data 'for future use' -- collect only what you need today"] },
                    { icon: Lock, color: "bg-emerald-50", iconColor: "text-emerald-600", title: "Secure data in transit and at rest", items: ["Use HTTPS for all external API calls -- never HTTP", "Encrypt sensitive data stored in chrome.storage", "Never store user credentials or tokens in plaintext", "Use Content Security Policy headers to prevent injection attacks"] },
                    { icon: Eye, color: "bg-violet-50", iconColor: "text-violet-600", title: "Be transparent about data use", items: ["Your privacy policy must list every type of data your extension accesses", "Explain why each permission is needed in your Web Store listing", "Show users what data is collected in your extension's settings or about page", "Never collect data silently -- inform users at the point of collection"] },
                    { icon: Users, color: "bg-orange-50", iconColor: "text-orange-600", title: "Respect user choices", items: ["Provide opt-out controls for non-essential data collection", "Honor deletion requests within 30 days (GDPR requirement)", "Allow users to export their data in a portable format", "Never change data collection practices without updating your policy and notifying users"] },
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

              {/* Section 4 */}
              <section id="limited-use" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">4</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Limited Use Compliance</h2>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Chrome Web Store's{" "}
                    <Link href="/chrome-extension-user-data-policy" className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5">
                      Limited Use policy <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    restricts how you can use data accessed through Chrome APIs.
                    These four requirements apply to every extension:
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "Single purpose", text: "Your extension must have one clearly defined purpose. Data collection must directly serve that purpose and nothing else." },
                      { label: "No selling user data", text: "You cannot sell, license, or transfer user data to third parties. This includes advertising networks and data brokers." },
                      { label: "No using data for advertising", text: "User data obtained through Chrome APIs cannot be used to serve targeted ads or build advertising profiles." },
                      { label: "No using data for creditworthiness", text: "You cannot use browsing or user data for credit, insurance, employment, or housing eligibility determinations." },
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
              <section id="manifest-v3" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">5</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Manifest V3 Privacy Improvements</h2>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Manifest V3 (MV3) was designed with privacy in mind. If you are
                    still on MV2, migrating to MV3 improves your privacy posture
                    and is required for all new submissions since January 2024.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Feature</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">MV2 (Old)</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">MV3 (Current)</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 border-b border-slate-200/60">Privacy Impact</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Network requests", "webRequest (can intercept)", "declarativeNetRequest (rules-based)", "Extensions can no longer silently read network data"],
                          ["Background scripts", "Persistent background page", "Service workers (ephemeral)", "Less opportunity for persistent data monitoring"],
                          ["Remote code", "Allowed (eval, remote scripts)", "Blocked", "Prevents dynamic code injection and data exfiltration"],
                          ["Host permissions", "Granted at install", "Can be optional / runtime-granted", "Users grant access to specific sites on demand"],
                          ["Content scripts", "Broad injection allowed", "More restricted CSP", "Reduced cross-site data access"],
                        ].map(([feature, mv2, mv3, impact], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="px-4 py-3 font-medium text-slate-800 border-b border-slate-100">{feature}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{mv2}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{mv3}</td>
                            <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{impact}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6 */}
              <section id="web-store-review" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">6</span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Passing Chrome Web Store Review</h2>
                </div>
                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Google's review team checks privacy compliance as part of every
                    extension submission. Here is a pre-submission checklist:
                  </p>
                  <div className="space-y-4">
                    {[
                      { check: "Privacy policy URL is set in the developer dashboard", detail: "Your policy must be hosted at a live, publicly accessible URL. Google's bot verifies the link works." },
                      { check: "Privacy policy matches your actual data practices", detail: "Reviewers compare your policy against your manifest.json permissions. Mismatches trigger rejection." },
                      { check: "Every permission is justified in the listing description", detail: "Explain why each permission is needed in plain language. 'This extension needs tabs permission to...' " },
                      { check: "Data use disclosures are complete in the dashboard", detail: "Fill out the 'Privacy practices' tab accurately. Select every data type your extension handles." },
                      { check: "No unnecessary permissions in manifest.json", detail: "Remove any permissions your extension does not actively use. Leftover permissions from development trigger reviews." },
                      { check: "Limited use disclosure is included in your policy", detail: "If you access user data via Chrome APIs, your policy must state compliance with Chrome Web Store's limited use requirements." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200/80 hover:border-blue-200 hover:shadow-sm transition-all">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{item.check}</p>
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
                  <h2 className="text-2xl font-bold mb-3">Generate Your Chrome Extension Privacy Policy</h2>
                  <p className="text-slate-300 max-w-lg mx-auto mb-6">
                    Get a customized privacy policy that covers your extension's
                    permissions, data handling, limited use compliance, and
                    Chrome Web Store requirements -- in under 2 minutes.
                  </p>
                  <Link href="/generate">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">Generate Extension Policy</Button>
                  </Link>
                  <p className="text-slate-400 text-xs mt-3">Covers Manifest V3, limited use, and GDPR requirements</p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Resources */}
              <section id="resources" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Code className="w-4 h-4" />
                  </span>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Related Resources</h2>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px] grid sm:grid-cols-2 gap-3">
                  {[
                    { title: "Do Chrome Extensions Need a Privacy Policy?", desc: "When and why a policy is required", href: "/do-chrome-extensions-need-a-privacy-policy" },
                    { title: "Chrome Extension Privacy Policy Template", desc: "Ready-to-customize extension policy", href: "/chrome-extension-privacy-policy-template" },
                    { title: "Chrome Web Store Privacy Requirements", desc: "Official store compliance guide", href: "/chrome-web-store-privacy-policy-requirements" },
                    { title: "Chrome Extension User Data Policy", desc: "User data handling requirements", href: "/chrome-extension-user-data-policy" },
                    { title: "Chrome Extension Single Purpose Policy", desc: "Single purpose enforcement guide", href: "/chrome-extension-single-purpose-policy" },
                    { title: "Chrome Extension GDPR Compliance", desc: "EU compliance for extensions", href: "/chrome-extension-gdpr-compliance" },
                    { title: "Privacy Policy for Chrome Extension", desc: "Complete extension privacy guide", href: "/privacy-policy-for-chrome-extension" },
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
