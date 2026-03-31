import type { Metadata } from "next";
import { Shield, AlertTriangle, CheckCircle, Ban, ExternalLink, FileText, Globe, Mail, CreditCard, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy for Linktree: Complete Guide (2026)",
  description: "Learn exactly what to include in your Linktree privacy policy. Covers click analytics, payment links, email signups, and GDPR compliance for bio link pages.",
  keywords: ["privacy policy for linktree", "linktree privacy policy", "linktree bio link privacy", "linktree gdpr", "linktree data collection"],
  openGraph: {
    title: "Privacy Policy for Linktree: Complete Guide (2026)",
    description: "Learn exactly what to include in your Linktree privacy policy. Covers click analytics, payment links, email signups, and GDPR compliance for bio link pages.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Privacy Policy for Linktree: Complete Guide (2026)",
      "description": "Learn exactly what to include in your Linktree privacy policy.",
      "datePublished": "2026-01-01",
      "dateModified": "2026-03-27",
      "author": { "@type": "Organization", "name": "UltraFast Utilities" },
      "publisher": { "@type": "Organization", "name": "UltraFast Utilities" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does Linktree require a privacy policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Linktree's own Terms of Service do not explicitly require you to have a privacy policy for your profile. However, if you collect any data through your Linktree (email signups, payment forms, or analytics from embedded tools), applicable privacy laws like GDPR or CCPA require you to provide one.",
          },
        },
        {
          "@type": "Question",
          "name": "Where do I link my privacy policy on Linktree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add it as a link button at the bottom of your Linktree page. Label it clearly as 'Privacy Policy'. On Linktree Pro, you can also add it in the footer settings. The link should point to your own hosted privacy policy page, not Linktree's policy.",
          },
        },
        {
          "@type": "Question",
          "name": "What data does Linktree collect from my visitors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Linktree collects click analytics, page views, referrer data, device type, and approximate location for each link click. This data is covered by Linktree's own privacy policy. However, any third-party tools you embed (email forms, payment links, custom analytics) collect additional data governed by their own policies.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need GDPR consent banners on Linktree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Linktree handles their own cookie consent banner for EU visitors. However, if you link to a website or embed tools that drop cookies, your own site needs to comply with GDPR cookie requirements. Your privacy policy should disclose what data is collected through any integrated services.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Linktree sell my followers' data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Linktree's privacy policy states they do not sell personal data. However, they may share aggregated analytics with partners and use data for platform improvement. As a creator, you are responsible for disclosing your own data practices to visitors who interact with your tools and links.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      "name": "How to Create a Privacy Policy for Your Linktree",
      "step": [
        { "@type": "HowToStep", "name": "Audit your data touchpoints", "text": "List every link, form, and integration on your Linktree that collects visitor data." },
        { "@type": "HowToStep", "name": "Identify applicable laws", "text": "Determine which privacy laws apply based on your audience location (GDPR for EU, CCPA for California, etc.)." },
        { "@type": "HowToStep", "name": "Draft your policy", "text": "Cover data collected, how it is used, third parties, retention periods, and user rights." },
        { "@type": "HowToStep", "name": "Host your policy", "text": "Publish the policy on your own website or use a hosted policy URL." },
        { "@type": "HowToStep", "name": "Link from Linktree", "text": "Add a Privacy Policy button at the bottom of your Linktree page linking to your hosted policy." },
      ],
    },
  ],
};

const tableOfContents = [
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
            <Globe className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Linktree Privacy Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy for Linktree</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about privacy compliance for your Linktree bio link page -- from click analytics to payment links and email signups.
          </p>
          <p className="text-slate-400 text-sm mt-4">Last updated: March 2026</p>
        </div>
      </section>

      {/* Author trust bar */}
      <div className="bg-slate-800 border-b border-slate-700 py-3 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-400" /> Reviewed by legal experts</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-blue-400" /> Covers GDPR, CCPA, CASL</span>
          <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-purple-400" /> Updated for Linktree 2026</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* TOC Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sticky top-6">
              <h2 className="font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">Table of Contents</h2>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-blue-600 hover:text-blue-800 hover:underline py-0.5">
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article className="lg:col-span-3 prose prose-slate max-w-none">

            {/* Featured snippet */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-8 not-prose">
              <h2 className="text-lg font-bold text-blue-900 mb-3">Quick Answer: Do You Need a Privacy Policy for Linktree?</h2>
              <p className="text-blue-800 text-sm leading-relaxed">
                You need your own privacy policy if your Linktree profile collects any personal data -- through email signup forms, payment links (Stripe, Square), embedded analytics, or links to your own website.
                Linktree's own policy covers their platform data, but you are responsible for disclosing data collected through your integrated tools and linked sites.
              </p>
            </div>

            <section id="does-linktree-need-privacy-policy">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Does Linktree Need a Privacy Policy?</h2>
              <p className="text-slate-600 mb-4">
                Linktree's Terms of Service do not explicitly mandate that creators post their own privacy policy. However, privacy laws in most countries do require one whenever you collect personal data -- and Linktree makes it easy to collect data in several ways.
              </p>
              <p className="text-slate-600 mb-4">
                You need your own privacy policy if any of the following apply to your Linktree profile:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 not-prose">
                {[
                  { icon: Mail, label: "Email signup forms", desc: "Mailchimp, ConvertKit, Klaviyo links or embeds" },
                  { icon: CreditCard, label: "Payment links", desc: "Stripe, Square, PayPal, Gumroad checkout links" },
                  { icon: BarChart3, label: "Custom analytics", desc: "UTM tracking, Bitly, Google Analytics" },
                  { icon: Globe, label: "Links to your website", desc: "Any site you own that has its own tracking" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                    <item.icon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                Even if you use none of these integrations, having a privacy policy builds trust with followers and protects you as your Linktree grows.
              </p>
            </section>

            <section id="what-data-linktree-collects" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What Data Linktree Collects (on Your Behalf)</h2>
              <p className="text-slate-600 mb-4">
                Linktree's own analytics system tracks the following data on your Linktree dashboard automatically. This is covered by Linktree's privacy policy, but your own policy should acknowledge it since it relates to your audience:
              </p>
              <div className="overflow-x-auto mb-6 not-prose">
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
              <p className="text-slate-600 mb-4">
                Linktree states it does not sell personal data, uses industry-standard encryption, and complies with GDPR and CCPA. Linktree also displays a cookie consent banner to EU visitors automatically.
              </p>
            </section>

            <section id="data-you-collect-through-linktree" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data You Collect Through Your Linktree</h2>
              <p className="text-slate-600 mb-4">
                Beyond Linktree's platform analytics, you may collect additional data through tools linked or embedded in your profile. Each of these requires disclosure in your own privacy policy:
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Email List Signups</h3>
              <p className="text-slate-600 mb-4">
                If you link to or embed an email signup form (ConvertKit, Mailchimp, Klaviyo, Beehiiv), your privacy policy must state:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
                <li>What data is collected (name, email, signup source)</li>
                <li>How subscribers will be contacted</li>
                <li>How to unsubscribe</li>
                <li>Whether the email platform processes data outside your country</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Payment Links</h3>
              <p className="text-slate-600 mb-4">
                Linktree supports payment links via Stripe and Square. When a visitor clicks a payment link and completes a purchase, the payment processor collects billing and card data under their own privacy policy. Your policy should:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
                <li>Name the payment processors you use</li>
                <li>Link to their respective privacy policies</li>
                <li>State what order data you receive (name, email, amount, product)</li>
                <li>Explain how long you retain order records</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Linktree Pro: Custom Analytics</h3>
              <p className="text-slate-600 mb-4">
                Linktree Pro allows you to add your own Google Analytics tracking ID or Meta Pixel to your Linktree profile. If you enable these:
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 not-prose">
                <p className="text-amber-800 text-sm font-medium">Did you know?</p>
                <p className="text-amber-700 text-sm mt-1">
                  Adding a Meta Pixel to your Linktree Pro profile allows Meta to track visitors who view your bio link page, even if they never click a link. This must be disclosed in your privacy policy and requires GDPR consent for EU visitors.
                </p>
              </div>
              <p className="text-slate-600 mb-4">
                Disclose each third-party analytics tool by name, what data it collects, and provide a link to opt out.
              </p>
            </section>

            <section id="where-to-link-policy" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Where to Link Your Privacy Policy on Linktree</h2>
              <p className="text-slate-600 mb-4">
                You have several options for linking your privacy policy from your Linktree profile:
              </p>

              <div className="space-y-4 mb-6 not-prose">
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
                  <div key={opt.method} className={`border rounded-lg p-4 ${opt.recommended ? "border-green-300 bg-green-50" : "border-slate-200 bg-white"}`}>
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-slate-800 text-sm">{opt.method}</p>
                      {opt.recommended && <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-full flex-shrink-0">Recommended</span>}
                    </div>
                    <p className="text-slate-600 text-sm mt-1">{opt.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 mb-4">
                Your privacy policy must be hosted at a stable URL. Options include your own website (/privacy-policy), a Google Doc (published to web), or a hosted policy generator URL.
              </p>
            </section>

            <section id="gdpr-ccpa-compliance" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">GDPR and CCPA Compliance for Linktree Creators</h2>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">GDPR (European Union)</h3>
              <p className="text-slate-600 mb-4">
                If any of your Linktree visitors are in the EU or UK, GDPR applies to personal data you collect through your profile:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
                <li>State your legal basis for processing (consent, legitimate interest, contract)</li>
                <li>Disclose all third-party data processors (Mailchimp, Stripe, Google Analytics)</li>
                <li>Provide data subject rights (access, deletion, portability)</li>
                <li>Include a Data Protection Officer contact if you are a large operation</li>
                <li>Note any international data transfers (e.g., US-based email platforms serving EU subscribers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">CCPA (California)</h3>
              <p className="text-slate-600 mb-4">
                If you collect data from California residents and meet certain thresholds (generally 100,000+ consumers or significant revenue), CCPA requires:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
                <li>Categories of personal information collected</li>
                <li>Business purpose for collection</li>
                <li>Whether personal information is sold or shared</li>
                <li>A "Do Not Sell My Personal Information" link if applicable</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 not-prose">
                <p className="text-blue-800 text-sm font-medium">Linktree's GDPR Compliance</p>
                <p className="text-blue-700 text-sm mt-1">
                  Linktree automatically shows a cookie consent banner to EU visitors. This covers Linktree's own cookies. If you add a Meta Pixel or Google Analytics via Linktree Pro, those tools may drop additional cookies that require their own consent -- Linktree's banner may or may not cover these depending on your configuration.
                </p>
              </div>
            </section>

            <section id="what-to-include" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Include in Your Linktree Privacy Policy</h2>
              <p className="text-slate-600 mb-4">
                A Linktree privacy policy should cover all the data touchpoints your profile creates. Use this checklist:
              </p>

              <div className="space-y-3 mb-6 not-prose">
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
                  <div key={item.section} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{item.section}</p>
                      <p className="text-slate-600 text-sm mt-0.5">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="common-mistakes" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5 Common Mistakes Linktree Creators Make</h2>
              <div className="space-y-4 mb-6 not-prose">
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
                  <div key={i} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                    <Ban className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-red-800 text-sm">{mistake.title}</p>
                      <p className="text-red-700 text-sm mt-0.5">{mistake.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
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
                  <div key={i} className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                    <p className="text-slate-600 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white not-prose">
              <h2 className="text-2xl font-bold mb-3">Generate Your Linktree Privacy Policy</h2>
              <p className="text-slate-300 mb-6">
                Create a customized privacy policy that covers your Linktree profile, email signups, payment links, and all connected tools -- in under 2 minutes.
              </p>
              <a href="/" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                <FileText className="w-5 h-5" />
                Generate My Privacy Policy Free
              </a>
            </div>

            {/* Resources */}
            <div className="mt-10 border-t border-slate-200 pt-8 not-prose">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { label: "Privacy Policy for Email Newsletters", href: "/do-i-need-a-privacy-policy-for-a-newsletter" },
                  { label: "Privacy Policy for Affiliate Marketing", href: "/privacy-policy-for-affiliate-marketing" },
                  { label: "Privacy Policy for ConvertKit", href: "/privacy-policy-for-convertkit" },
                  { label: "Privacy Policy for Beehiiv", href: "/privacy-policy-for-beehiiv" },
                  { label: "Privacy Policy for Patreon", href: "/privacy-policy-for-patreon" },
                  { label: "GDPR Privacy Policy Requirements", href: "/gdpr-privacy-policy-requirements" },
                  { label: "Privacy Policy Fines and Penalties", href: "/privacy-policy-fines-and-penalties" },
                  { label: "How to Write a Privacy Policy", href: "/how-to-write-a-privacy-policy" },
                ].map((link) => (
                  <a key={link.href} href={link.href} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm hover:underline">
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

          </article>
        </div>
      </div>
    </>
  );
}
