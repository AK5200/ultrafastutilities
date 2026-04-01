import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Globe,
  AlertTriangle,
  CheckCircle,
  Ban,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Mail,
  CreditCard,
  BarChart3,
  Clock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Linktree: Complete Guide (2026) | ultrafastutilities",
  description:
    "Learn exactly what to include in your Linktree privacy policy. Covers click analytics, payment links, email signups, and GDPR compliance for bio link pages.",
  keywords:
    "privacy policy for linktree, linktree privacy policy, linktree bio link privacy, linktree gdpr, linktree data collection",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-linktree",
  },
  openGraph: {
    title: "Privacy Policy for Linktree: Complete Guide (2026) | ultrafastutilities",
    description: "Learn exactly what to include in your Linktree privacy policy. Covers click analytics, payment links, email signups, and GDPR compliance for bio link pages.",
    url: "https://ultrafastutilities.com/privacy-policy-for-linktree",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Linktree | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Linktree: Complete Guide (2026) | ultrafastutilities",
    description: "Learn exactly what to include in your Linktree privacy policy. Covers click analytics, payment links, email signups, and GDPR compliance for bio link pages.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "does-linktree-need-privacy-policy", title: "Does Linktree Need a Privacy Policy?" },
  { id: "what-data-linktree-collects", title: "What Data Linktree Collects" },
  { id: "data-you-collect-through-linktree", title: "Data You Collect Through Linktree" },
  { id: "where-to-link-policy", title: "Where to Link Your Policy" },
  { id: "gdpr-ccpa-compliance", title: "GDPR and CCPA Compliance" },
  { id: "what-to-include", title: "What to Include in Your Policy" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "faq", title: "FAQ" },
];

export default function PrivacyPolicyForLinktree() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Linktree: Complete Guide (2026)",
            description: "Learn exactly what to include in your Linktree privacy policy.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-01-01",
            dateModified: "2026-03-27",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Linktree", item: "https://ultrafastutilities.com/privacy-policy-for-linktree" },
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
                name: "Does Linktree require a privacy policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Linktree's own Terms of Service do not explicitly require you to have a privacy policy for your profile. However, if you collect any data through your Linktree (email signups, payment forms, or analytics from embedded tools), applicable privacy laws like GDPR or CCPA require you to provide one.",
                },
              },
              {
                "@type": "Question",
                name: "Where do I link my privacy policy on Linktree?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Add it as a link button at the bottom of your Linktree page. Label it clearly as 'Privacy Policy'. On Linktree Pro, you can also add it in the footer settings. The link should point to your own hosted privacy policy page, not Linktree's policy.",
                },
              },
              {
                "@type": "Question",
                name: "What data does Linktree collect from my visitors?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Linktree collects click analytics, page views, referrer data, device type, and approximate location for each link click. This data is covered by Linktree's own privacy policy. However, any third-party tools you embed (email forms, payment links, custom analytics) collect additional data governed by their own policies.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need GDPR consent banners on Linktree?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Linktree handles their own cookie consent banner for EU visitors. However, if you link to a website or embed tools that drop cookies, your own site needs to comply with GDPR cookie requirements. Your privacy policy should disclose what data is collected through any integrated services.",
                },
              },
              {
                "@type": "Question",
                name: "Does Linktree sell my followers' data?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Linktree's privacy policy states they do not sell personal data. However, they may share aggregated analytics with partners and use data for platform improvement. As a creator, you are responsible for disclosing your own data practices to visitors who interact with your tools and links.",
                },
              },
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
            name: "How to Create a Privacy Policy for Your Linktree",
            step: [
              { "@type": "HowToStep", name: "Audit your data touchpoints", text: "List every link, form, and integration on your Linktree that collects visitor data." },
              { "@type": "HowToStep", name: "Identify applicable laws", text: "Determine which privacy laws apply based on your audience location (GDPR for EU, CCPA for California, etc.)." },
              { "@type": "HowToStep", name: "Draft your policy", text: "Cover data collected, how it is used, third parties, retention periods, and user rights." },
              { "@type": "HowToStep", name: "Host your policy", text: "Publish the policy on your own website or use a hosted policy URL." },
              { "@type": "HowToStep", name: "Link from Linktree", text: "Add a Privacy Policy button at the bottom of your Linktree page linking to your hosted policy." },
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
              <span className="text-slate-600">Privacy Policy for Linktree</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Globe className="w-3.5 h-3.5" />
                Linktree Privacy Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Linktree
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about privacy compliance for your Linktree bio link page -- from click analytics to payment links and email signups.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for creators and influencers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/do-i-need-a-privacy-policy-for-a-newsletter"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Newsletter Privacy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-affiliate-marketing"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Affiliate Marketing
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Generate Policy
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
                <span>Last updated: March 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>10 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Featured snippet */}
              <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-6 mb-10">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-lg font-bold text-blue-900 mb-2">Quick Answer: Do You Need a Privacy Policy for Linktree?</h2>
                    <p className="text-sm leading-relaxed text-slate-700">
                      You need your own privacy policy if your Linktree profile collects any personal data -- through email signup forms, payment links (Stripe, Square), embedded analytics, or links to your own website.
                      Linktree's own policy covers their platform data, but you are responsible for disclosing data collected through your integrated tools and linked sites.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: Does Linktree Need a Privacy Policy? */}
              <section id="does-linktree-need-privacy-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Does Linktree Need a Privacy Policy?
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-4">
                    Linktree's Terms of Service do not explicitly mandate that creators post their own privacy policy. However, privacy laws in most countries do require one whenever you collect personal data -- and Linktree makes it easy to collect data in several ways.
                  </p>
                  <p className="text-base leading-7 text-slate-700 mb-4">
                    You need your own privacy policy if any of the following apply to your Linktree profile:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: Mail, label: "Email signup forms", desc: "Mailchimp, ConvertKit, Klaviyo links or embeds" },
                      { icon: CreditCard, label: "Payment links", desc: "Stripe, Square, PayPal, Gumroad checkout links" },
                      { icon: BarChart3, label: "Custom analytics", desc: "UTM tracking, Bitly, Google Analytics" },
                      { icon: Globe, label: "Links to your website", desc: "Any site you own that has its own tracking" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 rounded-xl border border-slate-200/80 p-4 hover:border-blue-200 hover:shadow-sm transition-all">
                        <item.icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                          <p className="text-slate-500 text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-base leading-7 text-slate-700">
                    Even if you use none of these integrations, having a privacy policy builds trust with followers and protects you as your Linktree grows.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: What Data Linktree Collects */}
              <section id="what-data-linktree-collects" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Data Linktree Collects (on Your Behalf)
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Linktree's analytics system tracks the following data automatically. This is covered by Linktree's privacy policy, but your own policy should acknowledge it.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Data Type</th>
                          <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">What Linktree Tracks</th>
                          <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Visible in Dashboard?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Click analytics", "Which links were clicked and when", "Yes"],
                          ["Page views", "Total visits to your Linktree URL", "Yes"],
                          ["Referrer source", "Where traffic came from (Instagram, TikTok, etc.)", "Yes"],
                          ["Device type", "Mobile vs desktop breakdown", "Yes"],
                          ["Geographic location", "Country/region level only", "Yes (Pro)"],
                          ["Time on page", "Engagement metrics", "Yes (Pro)"],
                          ["IP address", "Used for spam/fraud detection", "No (internal only)"],
                        ].map(([type, what, visible], i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                            <td className="border border-slate-300 px-4 py-2 font-medium text-slate-700">{type}</td>
                            <td className="border border-slate-300 px-4 py-2 text-slate-600">{what}</td>
                            <td className="border border-slate-300 px-4 py-2 text-slate-600">{visible}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-base leading-7 text-slate-700">
                    Linktree states it does not sell personal data, uses industry-standard encryption, and complies with GDPR and CCPA. Linktree also displays a cookie consent banner to EU visitors automatically.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: Data You Collect Through Your Linktree */}
              <section id="data-you-collect-through-linktree" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Data You Collect Through Your Linktree
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Beyond Linktree's platform analytics, you may collect additional data through tools linked or embedded in your profile.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Email List Signups</h3>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      If you link to or embed an email signup form (ConvertKit, Mailchimp, Klaviyo, Beehiiv), your privacy policy must state:
                    </p>
                    <div className="space-y-3">
                      {[
                        "What data is collected (name, email, signup source)",
                        "How subscribers will be contacted",
                        "How to unsubscribe",
                        "Whether the email platform processes data outside your country",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 text-base leading-7">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Payment Links</h3>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      Linktree supports payment links via Stripe and Square. When a visitor clicks a payment link and completes a purchase, the payment processor collects billing and card data under their own privacy policy. Your policy should:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Name the payment processors you use",
                        "Link to their respective privacy policies",
                        "State what order data you receive (name, email, amount, product)",
                        "Explain how long you retain order records",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 text-base leading-7">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Linktree Pro: Custom Analytics</h3>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      Linktree Pro allows you to add your own Google Analytics tracking ID or Meta Pixel to your Linktree profile. If you enable these:
                    </p>
                    <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5 mb-4">
                      <div className="flex gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm leading-relaxed text-slate-700">
                          <strong className="text-slate-900">Did you know?</strong>{" "}
                          Adding a Meta Pixel to your Linktree Pro profile allows Meta to track visitors who view your bio link page, even if they never click a link. This must be disclosed in your privacy policy and requires GDPR consent for EU visitors.
                        </div>
                      </div>
                    </div>
                    <p className="text-base leading-7 text-slate-700">
                      Disclose each third-party analytics tool by name, what data it collects, and provide a link to opt out.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: Where to Link Your Policy */}
              <section id="where-to-link-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Where to Link Your Privacy Policy on Linktree
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-4">
                    You have several options for linking your privacy policy from your Linktree profile:
                  </p>

                  <div className="space-y-4 mb-6">
                    {[
                      {
                        method: "Option 1: Add as a link button",
                        desc: "Add a new link at the bottom of your Linktree labeled 'Privacy Policy'. This is the simplest option available on all Linktree plans.",
                        recommended: true,
                      },
                      {
                        method: "Option 2: Linktree Pro footer link",
                        desc: "Linktree Pro allows you to add custom footer text with links. Add your privacy policy and terms of use URLs here for a cleaner look.",
                        recommended: false,
                      },
                      {
                        method: "Option 3: Link within your bio description",
                        desc: "Add a brief mention and link in your bio text section. Less visible but better than nothing if you want to keep your link list clean.",
                        recommended: false,
                      },
                    ].map((opt) => (
                      <div key={opt.method} className={`rounded-xl border p-4 ${opt.recommended ? "border-green-300 bg-green-50/50" : "border-slate-200/80 bg-white"}`}>
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-semibold text-slate-800 text-sm">{opt.method}</p>
                          {opt.recommended && <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full flex-shrink-0">Recommended</span>}
                        </div>
                        <p className="text-slate-600 text-sm mt-1">{opt.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Your privacy policy must be hosted at a stable URL. Options include your own website (/privacy-policy), a Google Doc (published to web), or a hosted policy generator URL.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: GDPR and CCPA Compliance */}
              <section id="gdpr-ccpa-compliance" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      GDPR and CCPA Compliance for Linktree Creators
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        GDPR (European Union)
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      If any of your Linktree visitors are in the EU or UK, GDPR applies to personal data you collect through your profile:
                    </p>
                    <div className="space-y-3">
                      {[
                        "State your legal basis for processing (consent, legitimate interest, contract)",
                        "Disclose all third-party data processors (Mailchimp, Stripe, Google Analytics)",
                        "Provide data subject rights (access, deletion, portability)",
                        "Include a Data Protection Officer contact if you are a large operation",
                        "Note any international data transfers (e.g., US-based email platforms serving EU subscribers)",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 text-base leading-7">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        CCPA (California)
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-700 mb-4">
                      If you collect data from California residents and meet certain thresholds (generally 100,000+ consumers or significant revenue), CCPA requires:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Categories of personal information collected",
                        "Business purpose for collection",
                        "Whether personal information is sold or shared",
                        "A \"Do Not Sell My Personal Information\" link if applicable",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 text-base leading-7">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Linktree's GDPR Compliance:</strong>{" "}
                        Linktree automatically shows a cookie consent banner to EU visitors. This covers Linktree's own cookies. If you add a Meta Pixel or Google Analytics via Linktree Pro, those tools may drop additional cookies that require their own consent -- Linktree's banner may or may not cover these depending on your configuration.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: What to Include */}
              <section id="what-to-include" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What to Include in Your Linktree Privacy Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A Linktree privacy policy should cover all the data touchpoints your profile creates. Use this checklist:
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-3">
                  {[
                    {
                      section: "1. Who You Are",
                      content: "Your name or business name, contact email, and physical address if required by law.",
                    },
                    {
                      section: "2. What Data You Collect",
                      content: "List all data collected through your Linktree: email addresses from signup forms, purchase data from payment links, analytics events from custom pixels.",
                    },
                    {
                      section: "3. How You Use the Data",
                      content: "Sending newsletters, fulfilling orders, improving content strategy, retargeting ads.",
                    },
                    {
                      section: "4. Third-Party Services",
                      content: "Name every platform that processes your visitors' data: Linktree, your email platform, payment processors, analytics tools. Link to their privacy policies.",
                    },
                    {
                      section: "5. Data Retention",
                      content: "How long you keep subscriber emails, order records, and analytics data.",
                    },
                    {
                      section: "6. User Rights",
                      content: "How visitors can request data access, deletion, or correction. Provide a contact email for these requests.",
                    },
                    {
                      section: "7. Cookie Disclosure",
                      content: "Disclose any cookies set by your linked site or embedded tools. Linktree handles their own cookies.",
                    },
                    {
                      section: "8. Policy Updates",
                      content: "State that the policy may change and how visitors will be notified (email to subscribers, updated date on the policy page).",
                    },
                  ].map((item) => (
                    <div key={item.section} className="flex items-start gap-3 rounded-xl border border-slate-200/80 p-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{item.section}</p>
                        <p className="text-slate-600 text-sm mt-0.5">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      5 Common Mistakes Linktree Creators Make
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      title: "Pointing visitors to Linktree's own privacy policy",
                      desc: "Linktree's policy covers Linktree as a company, not your data practices. You need your own separate policy.",
                    },
                    {
                      title: "Not disclosing third-party payment processors",
                      desc: "If you have Stripe or Gumroad payment links, those processors collect billing data that must be disclosed in your policy.",
                    },
                    {
                      title: "Forgetting about Meta Pixel on Linktree Pro",
                      desc: "Adding a Meta Pixel to your Linktree tracks visitors for ad retargeting. This is a significant data collection that requires clear disclosure and consent.",
                    },
                    {
                      title: "Using a policy that only covers your website",
                      desc: "If your Linktree links to multiple platforms (YouTube, Patreon, your shop), your policy should address data collected across all these touchpoints.",
                    },
                    {
                      title: "Never updating the policy as tools change",
                      desc: "When you add a new email platform or payment processor, update your privacy policy within 30 days to reflect the new data processing activity.",
                    },
                  ].map((mistake, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-red-200/80 bg-red-50/50 p-4">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-800 text-sm">{mistake.title}</p>
                        <p className="text-red-700 text-sm mt-0.5">{mistake.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      q: "Does Linktree require a privacy policy?",
                      a: "Linktree's Terms of Service do not explicitly require creators to post their own privacy policy. However, if you collect any personal data through your Linktree profile -- via email signups, payment links, or custom analytics -- applicable privacy laws like GDPR or CCPA require you to have and link to a privacy policy.",
                    },
                    {
                      q: "Where do I link my privacy policy on Linktree?",
                      a: "The simplest method is to add it as a link button at the bottom of your Linktree, labeled 'Privacy Policy'. On Linktree Pro, you can also add it in the footer settings. The URL should point to your own hosted policy page, not Linktree's policy.",
                    },
                    {
                      q: "What data does Linktree collect from my visitors?",
                      a: "Linktree automatically collects click analytics, page views, referrer data, device type, and approximate location for each visitor. This is covered by Linktree's own privacy policy. Any additional tools you embed or link to may collect their own data, which you need to disclose.",
                    },
                    {
                      q: "Do I need GDPR consent banners on Linktree?",
                      a: "Linktree shows its own cookie consent banner to EU visitors. However, if you add your own Meta Pixel or Google Analytics tracking via Linktree Pro, those tools may require additional consent disclosures. Your own hosted website definitely needs a GDPR-compliant cookie banner.",
                    },
                    {
                      q: "Does Linktree sell my followers' data?",
                      a: "Linktree's privacy policy states they do not sell personal data. They may share aggregated analytics with partners and use data for platform improvements. As a creator, you control whether you sell your own subscribers' data -- and must disclose this in your privacy policy if applicable.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border border-slate-200/80 p-5">
                      <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* CTA Section */}
              <section className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <ShieldCheck className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your Linktree Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy that covers your Linktree profile, email signups, payment links, and all connected tools -- in under 2 minutes.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy Free
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Linktree-ready disclosures</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Related Resources */}
              <section className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { href: "/do-i-need-a-privacy-policy-for-a-newsletter", title: "Privacy Policy for Email Newsletters", desc: "Newsletter compliance guide" },
                    { href: "/privacy-policy-for-affiliate-marketing", title: "Privacy Policy for Affiliate Marketing", desc: "Affiliate compliance guide" },
                    { href: "/privacy-policy-for-convertkit", title: "Privacy Policy for ConvertKit", desc: "ConvertKit compliance guide" },
                    { href: "/privacy-policy-for-beehiiv", title: "Privacy Policy for Beehiiv", desc: "Beehiiv compliance guide" },
                    { href: "/privacy-policy-for-patreon", title: "Privacy Policy for Patreon", desc: "Patreon compliance guide" },
                    { href: "/gdpr-privacy-policy-requirements", title: "GDPR Privacy Policy Requirements", desc: "GDPR compliance requirements" },
                    { href: "/privacy-policy-fines-and-penalties", title: "Privacy Policy Fines and Penalties", desc: "Fines and penalties overview" },
                    { href: "/how-to-write-a-privacy-policy", title: "How to Write a Privacy Policy", desc: "Step-by-step writing guide" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="group">
                      <div className="h-full rounded-xl border border-slate-200/80 p-4 hover:border-blue-200 hover:shadow-sm transition-all bg-white/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors">
                            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
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
