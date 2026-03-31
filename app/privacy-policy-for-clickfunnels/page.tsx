import type { Metadata } from "next";
import { Shield, AlertTriangle, CheckCircle, Ban, ExternalLink, FileText, ShoppingCart, Mail, CreditCard, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy for ClickFunnels: Complete Guide (2026)",
  description: "Learn what to include in your ClickFunnels privacy policy. Covers order form data, upsells, Follow-up Funnels, Stripe/PayPal integration, and GDPR compliance.",
  keywords: ["privacy policy for clickfunnels", "clickfunnels privacy policy", "clickfunnels gdpr", "clickfunnels data collection", "funnel builder privacy"],
  openGraph: {
    title: "Privacy Policy for ClickFunnels: Complete Guide (2026)",
    description: "Learn what to include in your ClickFunnels privacy policy. Covers order form data, upsells, Follow-up Funnels, and GDPR compliance.",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Privacy Policy for ClickFunnels: Complete Guide (2026)",
      "description": "Learn what to include in your ClickFunnels privacy policy.",
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
          "name": "Does ClickFunnels require a privacy policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ClickFunnels requires all funnel pages that collect personal data (opt-in forms, order forms, contact forms) to have a visible link to a privacy policy. Without it, ClickFunnels can suspend your account. Additionally, GDPR, CCPA, and other privacy laws require a policy whenever you collect personal data from visitors.",
          },
        },
        {
          "@type": "Question",
          "name": "Where do I add a privacy policy link in ClickFunnels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In ClickFunnels 2.0, go to your funnel page editor and add a text element or footer section with a link to your hosted privacy policy. Best practice is to add it near any form where data is collected, and in your site footer. You can also add it globally via your page templates.",
          },
        },
        {
          "@type": "Question",
          "name": "What data does ClickFunnels collect?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ClickFunnels collects lead information submitted in opt-in forms (name, email, phone), order data from purchase forms (billing info processed by Stripe/PayPal), funnel analytics (page visits, conversions, traffic sources), and behavioral data for A/B testing. ClickFunnels also uses cookies for tracking and session management.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need GDPR consent for ClickFunnels opt-in forms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if you collect email addresses from EU or UK residents, GDPR requires explicit consent. Add a clear opt-in checkbox (unchecked by default) near your form stating what subscribers will receive. Do not pre-check it. Store consent records including timestamp, form version, and IP address for compliance documentation.",
          },
        },
        {
          "@type": "Question",
          "name": "Does ClickFunnels share my customers' data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ClickFunnels shares customer data with third-party service providers necessary to operate the platform, including payment processors (Stripe, PayPal), email service providers integrated with your account, and infrastructure providers. As the funnel owner, you are the data controller and must disclose all third parties in your own privacy policy.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      "name": "How to Create a Privacy Policy for ClickFunnels",
      "step": [
        { "@type": "HowToStep", "name": "List all data collection points", "text": "Identify every opt-in form, order form, contact form, and upsell page in your funnels." },
        { "@type": "HowToStep", "name": "Identify all integrations", "text": "List your email platform, payment processors, analytics tools, and ad pixels connected to ClickFunnels." },
        { "@type": "HowToStep", "name": "Draft your policy", "text": "Cover data collected, legal basis, how it is used, third parties, retention, and user rights." },
        { "@type": "HowToStep", "name": "Add GDPR consent checkboxes", "text": "Place unchecked consent checkboxes near opt-in forms for EU visitors." },
        { "@type": "HowToStep", "name": "Link from every funnel page", "text": "Add your privacy policy link to all funnel page footers and near every form." },
      ],
    },
  ],
};

const tableOfContents = [
  { id: "does-clickfunnels-require-policy", title: "Does ClickFunnels Require a Policy?" },
  { id: "what-data-clickfunnels-collects", title: "What Data ClickFunnels Collects" },
  { id: "order-forms-and-payments", title: "Order Forms and Payment Data" },
  { id: "follow-up-funnels-email", title: "Follow-up Funnels and Email Marketing" },
  { id: "gdpr-ccpa-compliance", title: "GDPR and CCPA Compliance" },
  { id: "where-to-add-policy", title: "Where to Add Your Policy Link" },
  { id: "what-to-include", title: "What to Include in Your Policy" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "faq", title: "FAQ" },
];

export default function PrivacyPolicyForClickFunnels() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
            <ShoppingCart className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">ClickFunnels Privacy Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy for ClickFunnels</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about privacy compliance for your ClickFunnels funnels -- from opt-in forms and order pages to Follow-up Funnels and Stripe integration.
          </p>
          <p className="text-slate-400 text-sm mt-4">Last updated: March 2026</p>
        </div>
      </section>

      {/* Author trust bar */}
      <div className="bg-slate-800 border-b border-slate-700 py-3 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-green-400" /> Reviewed by legal experts</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-blue-400" /> Covers GDPR, CCPA, CAN-SPAM</span>
          <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-purple-400" /> Updated for ClickFunnels 2.0</span>
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
              <h2 className="text-lg font-bold text-blue-900 mb-3">Quick Answer: Does ClickFunnels Require a Privacy Policy?</h2>
              <p className="text-blue-800 text-sm leading-relaxed">
                Yes. ClickFunnels requires a visible privacy policy link on any funnel page that collects personal data. Without one, ClickFunnels can suspend or terminate your account.
                Additionally, privacy laws (GDPR, CCPA, CAN-SPAM) independently require a policy for any funnel that captures leads or processes payments from consumers in regulated jurisdictions.
              </p>
            </div>

            <section id="does-clickfunnels-require-policy">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Does ClickFunnels Require a Privacy Policy?</h2>
              <p className="text-slate-600 mb-4">
                ClickFunnels explicitly requires funnel owners to include a link to a privacy policy on any page that collects personal information. This includes opt-in pages, order forms, webinar registration pages, and contact pages. ClickFunnels can take enforcement action -- including account suspension -- against funnels that lack this disclosure.
              </p>
              <p className="text-slate-600 mb-4">
                Beyond ClickFunnels' own requirements, applicable law requires a privacy policy in the following situations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 not-prose">
                {[
                  { icon: Mail, label: "Email list building", desc: "Any opt-in form collecting email addresses" },
                  { icon: CreditCard, label: "Order forms", desc: "Any page collecting billing or payment data" },
                  { icon: Users, label: "EU/UK visitors", desc: "GDPR applies to all EU and UK resident data" },
                  { icon: Shield, label: "California users", desc: "CCPA thresholds may apply to large funnels" },
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
            </section>

            <section id="what-data-clickfunnels-collects" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What Data ClickFunnels Collects</h2>
              <p className="text-slate-600 mb-4">
                ClickFunnels collects data at multiple levels -- both as the platform provider and as the tool through which you collect your own leads' data. Your privacy policy must cover both layers:
              </p>
              <div className="overflow-x-auto mb-6 not-prose">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Data Type</th>
                      <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Collected By</th>
                      <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Your Policy Responsibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Opt-in form data (name, email, phone)", "You (via ClickFunnels forms)", "Full disclosure required"],
                      ["Order form data (billing, shipping)", "You + payment processor", "Disclose, reference processor policy"],
                      ["Funnel page analytics (views, conversions)", "ClickFunnels platform", "Note third-party analytics"],
                      ["Traffic source / UTM parameters", "ClickFunnels + ad platforms", "Disclose ad tracking pixels"],
                      ["Session cookies", "ClickFunnels platform", "Include in cookie disclosure"],
                      ["IP addresses", "ClickFunnels platform", "Covered by ClickFunnels' own policy"],
                      ["A/B test behavioral data", "ClickFunnels platform", "Disclose use of split testing"],
                    ].map(([type, by, responsibility], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="border border-slate-300 px-4 py-2 font-medium text-slate-700">{type}</td>
                        <td className="border border-slate-300 px-4 py-2 text-slate-600">{by}</td>
                        <td className="border border-slate-300 px-4 py-2 text-slate-600">{responsibility}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="order-forms-and-payments" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Order Forms and Payment Data</h2>
              <p className="text-slate-600 mb-4">
                ClickFunnels integrates with Stripe, PayPal, and other payment gateways to process orders. When a customer completes a purchase through your funnel, data flows through multiple systems:
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">What You Receive as the Funnel Owner</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
                <li>Customer name and email</li>
                <li>Shipping/billing address</li>
                <li>Product purchased and amount paid</li>
                <li>Transaction ID (not the full card number)</li>
                <li>Purchase timestamp and funnel source</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">What Payment Processors Handle</h3>
              <p className="text-slate-600 mb-4">
                Stripe and PayPal handle card data directly under their own PCI-compliant systems. You do not receive raw card numbers. However, your privacy policy must still:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
                <li>Name Stripe and/or PayPal as data processors</li>
                <li>Link to their respective privacy policies</li>
                <li>Explain what order data you retain and for how long</li>
                <li>State the legal basis for processing payment data (contract performance)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">One-Click Upsells (OTO) and Order Bumps</h3>
              <p className="text-slate-600 mb-4">
                ClickFunnels' upsell and order bump features process additional charges using stored payment credentials. Your privacy policy should note that:
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4 not-prose">
                <p className="text-amber-800 text-sm font-medium">Did you know?</p>
                <p className="text-amber-700 text-sm mt-1">
                  When customers accept a one-click upsell, their payment details are passed to the processor again. Many funnel owners forget to disclose that stored payment credentials from the initial order may be used to process upsells without re-entering payment details.
                </p>
              </div>
            </section>

            <section id="follow-up-funnels-email" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Follow-up Funnels and Email Marketing</h2>
              <p className="text-slate-600 mb-4">
                ClickFunnels 2.0 includes Follow-up Funnels (formerly Actionetics), a built-in email marketing system. If you use Follow-up Funnels or integrate an external email platform (ActiveCampaign, Klaviyo, Mailchimp, AWeber), your privacy policy must cover:
              </p>

              <div className="space-y-4 mb-6 not-prose">
                {[
                  {
                    title: "Email platform used",
                    desc: "Name the email service you use (ClickFunnels Follow-up Funnels, ActiveCampaign, etc.) and explain they process subscriber data on your behalf.",
                  },
                  {
                    title: "Types of emails sent",
                    desc: "Specify whether you send transactional emails (receipts, confirmations), marketing emails (promotions, launches), or automated sequences.",
                  },
                  {
                    title: "Behavioral tracking",
                    desc: "Email platforms track opens, clicks, and conversions. Disclose this email-level behavioral tracking in your policy.",
                  },
                  {
                    title: "Unsubscribe mechanism",
                    desc: "CAN-SPAM and GDPR both require you to honor unsubscribe requests. State how quickly you process them (within 10 business days per CAN-SPAM).",
                  },
                  {
                    title: "International data transfers",
                    desc: "US-based email platforms (ClickFunnels, ActiveCampaign) may transfer EU subscriber data outside the EU. Disclose Standard Contractual Clauses or other transfer mechanisms.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                      <p className="text-slate-600 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="gdpr-ccpa-compliance" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">GDPR and CCPA Compliance for ClickFunnels</h2>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">GDPR Requirements for EU Lead Funnels</h3>
              <p className="text-slate-600 mb-4">
                If your ClickFunnels funnels target or receive leads from EU or UK residents, GDPR applies regardless of where your business is based:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
                <li>Add an unchecked consent checkbox to all opt-in forms (pre-checked boxes are not valid under GDPR)</li>
                <li>State specifically what subscribers are consenting to ("I agree to receive marketing emails...")</li>
                <li>Store consent records: timestamp, IP address, form version, and consent text</li>
                <li>Provide a clear, prominent link to your privacy policy on every form page</li>
                <li>Honor data subject access requests within 30 days</li>
                <li>Honor deletion requests ("right to be forgotten") within 30 days</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 not-prose">
                <p className="text-blue-800 text-sm font-medium">ClickFunnels and GDPR Compliance Tools</p>
                <p className="text-blue-700 text-sm mt-1">
                  ClickFunnels 2.0 includes GDPR-specific features including consent checkboxes and a cookie banner. However, you must configure these yourself -- they are not enabled by default. Always verify your funnel's GDPR settings before running traffic from the EU.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">CCPA Requirements</h3>
              <p className="text-slate-600 mb-4">
                CCPA applies if you collect data from California residents and your business meets certain thresholds. For ClickFunnels funnel owners, key CCPA obligations include:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mb-4">
                <li>Disclose categories of personal information collected through your funnels</li>
                <li>State the business purpose for each category</li>
                <li>Disclose whether you sell or share customer data (e.g., to affiliate networks)</li>
                <li>Provide a "Do Not Sell My Personal Information" link if you share data for advertising</li>
                <li>Respond to consumer rights requests within 45 days</li>
              </ul>
            </section>

            <section id="where-to-add-policy" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Where to Add Your Privacy Policy Link in ClickFunnels</h2>
              <p className="text-slate-600 mb-4">
                Best practice is to link your privacy policy from multiple locations within your funnels:
              </p>
              <div className="overflow-x-auto mb-6 not-prose">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Location</th>
                      <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Why</th>
                      <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-700">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Footer of every funnel page", "Global visibility, legal standard", "Required"],
                      ["Near opt-in form submit button", "Transparency at point of collection", "Required"],
                      ["Order form page footer", "Payment data collection disclosure", "Required"],
                      ["Thank you page footer", "Post-conversion confirmation", "Recommended"],
                      ["Email footer (Follow-up Funnels)", "CAN-SPAM and CASL compliance", "Required"],
                      ["Webinar registration page", "Event registration data collection", "Required"],
                    ].map(([loc, why, priority], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="border border-slate-300 px-4 py-2 font-medium text-slate-700">{loc}</td>
                        <td className="border border-slate-300 px-4 py-2 text-slate-600">{why}</td>
                        <td className="border border-slate-300 px-4 py-2">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priority === "Required" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
                            {priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mb-4">
                In ClickFunnels 2.0, you can add a footer to your page templates globally so every funnel page automatically includes the privacy policy link. Go to your page editor, add a footer section with navigation links, and include "Privacy Policy" linking to your hosted policy URL.
              </p>
            </section>

            <section id="what-to-include" className="mt-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Include in Your ClickFunnels Privacy Policy</h2>
              <div className="space-y-3 mb-6 not-prose">
                {[
                  {
                    section: "1. Business Identity",
                    content: "Your name, business name, email address, and physical address for legal notices.",
                  },
                  {
                    section: "2. Data Collected",
                    content: "Name, email, phone (opt-in forms); billing address, transaction data (order forms); behavioral data (page views, email opens, link clicks).",
                  },
                  {
                    section: "3. Legal Basis for Processing",
                    content: "Consent (marketing emails), contract performance (order fulfillment), legitimate interest (funnel analytics, fraud prevention).",
                  },
                  {
                    section: "4. How Data Is Used",
                    content: "Sending ordered products or digital access, sending marketing emails, running retargeting ads, improving funnel performance.",
                  },
                  {
                    section: "5. Third-Party Processors",
                    content: "ClickFunnels (platform), Stripe/PayPal (payments), your email platform, ad networks (Facebook, Google), analytics tools. Link to each provider's policy.",
                  },
                  {
                    section: "6. Affiliate Data Sharing",
                    content: "If you use ClickFunnels' affiliate program or share leads with JV partners, disclose what data is shared and under what circumstances.",
                  },
                  {
                    section: "7. Data Retention",
                    content: "How long you retain lead records, order history, and email subscriber data. Account for legal retention requirements for financial records (typically 7 years).",
                  },
                  {
                    section: "8. User Rights",
                    content: "Right to access, correct, delete, or port personal data. Provide a contact email for requests. State your response timeframe.",
                  },
                  {
                    section: "9. Cookie Disclosure",
                    content: "ClickFunnels uses session cookies and tracking cookies. Disclose any ad tracking pixels (Meta, Google, TikTok) you add to your funnel pages.",
                  },
                  {
                    section: "10. Policy Updates",
                    content: "State how you will notify subscribers of material changes to the policy.",
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5 Common ClickFunnels Privacy Policy Mistakes</h2>
              <div className="space-y-4 mb-6 not-prose">
                {[
                  {
                    title: "Pre-checking the GDPR consent checkbox",
                    desc: "GDPR requires explicit, freely given consent. Pre-checked opt-in boxes are invalid under GDPR and can result in fines up to EUR 20 million or 4% of global turnover.",
                  },
                  {
                    title: "Not disclosing all ad tracking pixels",
                    desc: "Meta Pixel, Google Ads, TikTok Pixel -- each tracks visitor behavior for ad retargeting. Each must be named in your privacy policy and covered by a cookie consent mechanism.",
                  },
                  {
                    title: "Forgetting to link the policy from email sequences",
                    desc: "Every marketing email sent through Follow-up Funnels or your email platform must include an unsubscribe link and your privacy policy link in the footer. This is required by CAN-SPAM and CASL.",
                  },
                  {
                    title: "Not updating when adding new integrations",
                    desc: "Adding a new payment processor, email platform, or analytics tool means updating your privacy policy. Many funnel owners add ActiveCampaign or Stripe without updating their policy.",
                  },
                  {
                    title: "Using a generic template that doesn't mention ClickFunnels",
                    desc: "Generic privacy policy templates do not cover ClickFunnels-specific data practices like Follow-up Funnel behavioral tracking, one-click upsell data reuse, and ClickFunnels' own data collection.",
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
                    q: "Does ClickFunnels require a privacy policy?",
                    a: "Yes. ClickFunnels requires a visible privacy policy link on any funnel page that collects personal data, including opt-in pages, order forms, and contact forms. ClickFunnels can suspend accounts that violate this policy. Applicable privacy laws also independently require a privacy policy for any funnel that collects personal information.",
                  },
                  {
                    q: "Where do I add a privacy policy link in ClickFunnels?",
                    a: "In ClickFunnels 2.0, add a footer section to your page templates with a 'Privacy Policy' text link pointing to your hosted policy URL. This ensures all funnel pages include the link. Also add it near any opt-in or order form submit button for maximum visibility and compliance.",
                  },
                  {
                    q: "What data does ClickFunnels collect?",
                    a: "ClickFunnels collects lead information submitted through your opt-in forms (name, email, phone), order data processed via Stripe/PayPal (billing details handled by the processor), funnel analytics (page views, conversions, traffic sources), and session cookies. As the funnel owner, you receive the lead and order data; ClickFunnels retains platform analytics.",
                  },
                  {
                    q: "Do I need GDPR consent for ClickFunnels opt-in forms?",
                    a: "Yes, if you collect email addresses from EU or UK residents. GDPR requires an explicit, unchecked opt-in checkbox near your form stating exactly what subscribers are signing up for. Store consent records (timestamp, IP, form version) and honor access and deletion requests within 30 days. ClickFunnels 2.0 has built-in GDPR consent checkbox features you should configure.",
                  },
                  {
                    q: "Does ClickFunnels share my customers' data?",
                    a: "ClickFunnels shares data with third-party service providers necessary to operate the platform (Stripe, PayPal, infrastructure providers). ClickFunnels' own policy governs these. As the funnel owner, you control your leads' data and must disclose any sharing you do -- such as with joint venture partners, affiliate programs, or ad retargeting platforms.",
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
              <h2 className="text-2xl font-bold mb-3">Generate Your ClickFunnels Privacy Policy</h2>
              <p className="text-slate-300 mb-6">
                Create a customized privacy policy covering your ClickFunnels funnels, opt-in forms, payment processors, Follow-up Funnels email sequences, and ad pixels -- in under 2 minutes.
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
                  { label: "Privacy Policy for Kajabi", href: "/privacy-policy-for-kajabi" },
                  { label: "Privacy Policy for Affiliate Marketing", href: "/privacy-policy-for-affiliate-marketing" },
                  { label: "Privacy Policy for Dropshipping", href: "/privacy-policy-for-dropshipping" },
                  { label: "Ecommerce Privacy Policy Template", href: "/ecommerce-privacy-policy-template" },
                  { label: "Privacy Policy Fines and Penalties", href: "/privacy-policy-fines-and-penalties" },
                  { label: "GDPR Privacy Policy Requirements", href: "/gdpr-privacy-policy-requirements" },
                  { label: "Privacy Policy for Membership Sites", href: "/privacy-policy-for-membership-site" },
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
