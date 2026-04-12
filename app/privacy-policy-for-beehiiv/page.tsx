import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  Info,
  Users,
  Globe,
  Mail,
  Lock,
  Ban,
  Clock,
  CreditCard,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Beehiiv Newsletter Creators (2026) | ultrafastutilities",
  description:
    "Beehiiv newsletter creators need a privacy policy covering subscriber data, referral programs, Stripe payments, and GDPR. Learn exactly what to include.",
  keywords:
    "privacy policy for beehiiv, beehiiv newsletter privacy policy, beehiiv creator privacy policy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-beehiiv",
  },
  openGraph: {
    title: "Privacy Policy for Beehiiv Newsletter Creators (2026) | ultrafastutilities",
    description:
      "Beehiiv newsletter creators need a privacy policy covering subscriber data, referral programs, Stripe payments, and GDPR. Learn exactly what to include.",
    url: "https://ultrafastutilities.com/privacy-policy-for-beehiiv",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Beehiiv | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Beehiiv Newsletter Creators (2026) | ultrafastutilities",
    description:
      "Beehiiv newsletter creators need a privacy policy covering subscriber data, referral programs, Stripe payments, and GDPR. Learn exactly what to include.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "what-beehiiv-shares", title: "What Beehiiv Shares with Creators" },
  { id: "beehiiv-vs-creator", title: "Beehiiv vs. Creator Responsibility" },
  { id: "paid-subscriptions", title: "Paid Subscriptions and Stripe" },
  { id: "analytics-open-rates", title: "Analytics and Open Rates" },
  { id: "referral-boost", title: "Referral Program and Boost Network" },
  { id: "gdpr-eu", title: "GDPR for EU Subscribers" },
  { id: "can-spam", title: "CAN-SPAM Compliance" },
  { id: "common-mistakes", title: "5 Common Mistakes" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Beehiiv newsletter creators need their own privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Beehiiv has its own privacy policy covering the platform, but as a creator you are a separate data controller for your subscriber list. You need your own privacy policy disclosing how you collect subscriber emails, what you send them, whether you monetize through the Boost network, and how subscribers can unsubscribe or request data deletion.",
      },
    },
    {
      "@type": "Question",
      name: "What subscriber data does Beehiiv give creators access to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beehiiv provides creators with subscriber email addresses, subscription dates, engagement data (open rates, click rates, scroll depth), referral data, geographic location, device information, and for paid newsletters, subscription tier and payment status. Creators can export this data and are responsible for how they use and store it.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Beehiiv Boost network require special privacy disclosures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Beehiiv Boost network allows creators to earn money by recommending other newsletters. When a subscriber clicks a Boost recommendation and subscribes to another newsletter, their email is shared with that publisher. Your privacy policy must disclose that you participate in the Boost network and that subscriber emails may be shared with third-party newsletter publishers.",
      },
    },
    {
      "@type": "Question",
      name: "How does Beehiiv handle GDPR for EU newsletter subscribers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beehiiv provides infrastructure (consent checkboxes, unsubscribe links, data export) but GDPR compliance is the creator's responsibility. As a creator with EU subscribers, you must establish a legal basis for processing, provide a privacy policy in plain language, honor data subject access requests within 30 days, and ensure any data shared via Boost or exported to third-party tools is covered by appropriate data processing agreements.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Beehiiv privacy policy need to say about paid subscriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you offer paid subscriptions through Beehiiv, you must disclose that payments are processed by Stripe, that Stripe stores billing information including card details and billing address, that subscription status is stored and used to control content access, and how cancellations and refunds are handled.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy for Beehiiv Newsletter Creators (2026)",
  description:
    "Complete guide to privacy policy requirements for Beehiiv newsletter creators, covering subscriber data, Boost network, Stripe payments, GDPR, and CAN-SPAM.",
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
    { "@type": "ListItem", position: 2, name: "Privacy Policy for Beehiiv", item: "https://ultrafastutilities.com/privacy-policy-for-beehiiv" },
  ],
};

export default function PrivacyPolicyBeehiiv() {
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
              <span className="text-slate-600">Privacy Policy for Beehiiv</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Mail className="w-3.5 h-3.5" />
                Beehiiv Privacy Requirements 2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Beehiiv Newsletter Creators
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Beehiiv gives creators powerful subscriber data, referral tracking, and paid subscription tools.
                Each creates specific privacy policy obligations you must address to stay compliant with GDPR and CAN-SPAM.
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
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>12 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>
              <div id="quick-answer" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Quick Answer: Do Beehiiv Creators Need a Privacy Policy?
                </h2>
                <p className="text-blue-800">
                  <strong>Yes.</strong> Beehiiv has its own privacy policy, but it covers Beehiiv as a company, not you as a creator.
                  You are a separate data controller for your subscriber list. GDPR requires a privacy policy if any of your subscribers
                  are in the EU. CAN-SPAM requires it for commercial emails to US subscribers. Beehiiv terms of service also require
                  creators to have their own privacy policy. If you use paid subscriptions, the Boost network, or export subscriber data
                  to third-party tools, your policy must cover each of those data flows.
                </p>
              </div>

              <section id="what-beehiiv-shares">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Subscriber Data Does Beehiiv Share with Creators?</h2>
                <p className="text-slate-700 mb-4">
                  Beehiiv is unusually transparent compared to platforms like Substack. Creators have access to a rich set of subscriber
                  data in their Beehiiv dashboard, and much of it can be exported. This transparency is one of Beehiiv's selling points,
                  but it also means creators carry significant data controller responsibility.
                </p>
                <p className="text-slate-700 mb-4">
                  Understanding exactly what data flows to you is the first step in writing an accurate privacy policy.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Data Category</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">What It Includes</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Creator Access Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Identity Data</td>
                        <td className="border border-slate-200 px-4 py-3">Email address, name (if provided), custom form field answers</td>
                        <td className="border border-slate-200 px-4 py-3 text-green-700">Full export</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Engagement Data</td>
                        <td className="border border-slate-200 px-4 py-3">Open rates, click rates, scroll depth per issue</td>
                        <td className="border border-slate-200 px-4 py-3 text-green-700">Full dashboard access</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Geographic Data</td>
                        <td className="border border-slate-200 px-4 py-3">Country and region derived from IP address</td>
                        <td className="border border-slate-200 px-4 py-3 text-yellow-700">Aggregate and individual</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Referral Data</td>
                        <td className="border border-slate-200 px-4 py-3">Who referred whom, referral link clicks, reward status</td>
                        <td className="border border-slate-200 px-4 py-3 text-green-700">Full export</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Subscription Status</td>
                        <td className="border border-slate-200 px-4 py-3">Free vs. paid tier, subscription date, cancellation date</td>
                        <td className="border border-slate-200 px-4 py-3 text-green-700">Full access</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    Beehiiv scroll depth tracking means you know not just whether a subscriber opened your email, but how far down they read.
                    Under GDPR, this level of behavioral profiling requires explicit disclosure in your privacy policy, particularly for EU subscribers.
                  </p>
                </div>
              </section>

              <section id="beehiiv-vs-creator">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Beehiiv Responsibility vs. Your Responsibility</h2>
                <p className="text-slate-700 mb-4">
                  In data protection law, the distinction between a data controller and a data processor matters enormously. Beehiiv acts as
                  a data processor on your behalf. You, the creator, are the data controller. This means you decide the purposes for which
                  subscriber data is used, and you bear legal responsibility for compliance.
                </p>
                <p className="text-slate-700 mb-4">
                  Beehiiv's own privacy policy covers how Beehiiv uses data for its own business purposes. It does not protect you from
                  subscriber complaints, regulatory investigations, or GDPR enforcement actions directed at your newsletter operation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2"><ShieldCheck className="w-5 h-5" />Beehiiv Handles</h3>
                    <ul className="space-y-2 text-green-800 text-sm">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Platform security and infrastructure</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Email delivery and bounce management</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Unsubscribe link functionality</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />GDPR consent checkbox infrastructure</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Stripe payment processing integration</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2"><Lock className="w-5 h-5" />You Handle</h3>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Your own privacy policy document</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Responding to data subject access requests</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Disclosing Boost network participation</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Managing exported subscriber lists</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />Third-party integrations you add yourself</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="paid-subscriptions">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Paid Subscriptions and Stripe: What Your Policy Must Disclose</h2>
                <p className="text-slate-700 mb-4">
                  Beehiiv processes paid newsletter subscriptions through Stripe. When a subscriber signs up for a paid tier, payment
                  data flows through both Beehiiv and Stripe. You as the creator never see raw card numbers, but you do see billing status,
                  subscription tier, and renewal dates. Your privacy policy must address this payment data flow even though you do not
                  directly handle card processing.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Required disclosures for paid Beehiiv newsletters:</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Payments are processed by Stripe, Inc. Link to Stripe privacy policy at stripe.com/privacy.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Billing information (card type, last four digits, billing address) is stored by Stripe, not directly by you.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Subscription status (active, cancelled, past due) is visible to you via the Beehiiv dashboard.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Subscription data is used to control access to paid content tiers and may be used for subscriber segmentation.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Billing records may be retained for legal and accounting purposes after cancellation.</span></li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    If you offer paid newsletters to EU subscribers, you may need to issue VAT invoices under EU tax rules. Your privacy policy
                    should note that billing addresses collected via Stripe may be retained for tax compliance purposes, creating a legitimate
                    interest basis for retaining data even after cancellation.
                  </p>
                </div>
              </section>

              <section id="analytics-open-rates">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Analytics and Open Rate Tracking</h2>
                <p className="text-slate-700 mb-4">
                  Beehiiv analytics are among the most detailed in the newsletter industry. Open tracking works via a tiny invisible pixel
                  embedded in each email. Click tracking works by routing all links through Beehiiv servers before redirecting subscribers
                  to the destination URL. Both techniques involve processing personal data and must be disclosed in your privacy policy.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Tracking Method</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">How It Works</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">GDPR Consideration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Open pixel</td>
                        <td className="border border-slate-200 px-4 py-3">1x1 image loads from Beehiiv server when email is opened</td>
                        <td className="border border-slate-200 px-4 py-3 text-yellow-700">Must be disclosed; legitimate interest arguable</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Click tracking</td>
                        <td className="border border-slate-200 px-4 py-3">Links routed via Beehiiv redirect before reaching destination</td>
                        <td className="border border-slate-200 px-4 py-3 text-yellow-700">Must be disclosed; tracks individual behavior</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Scroll depth</td>
                        <td className="border border-slate-200 px-4 py-3">Web version tracks how far down readers scroll</td>
                        <td className="border border-slate-200 px-4 py-3 text-red-700">More intrusive; explicit disclosure recommended</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Web analytics</td>
                        <td className="border border-slate-200 px-4 py-3">Built-in analytics on your newsletter web page</td>
                        <td className="border border-slate-200 px-4 py-3 text-yellow-700">Disclose in website privacy policy section</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="referral-boost">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Referral Program and Boost Network</h2>
                <p className="text-slate-700 mb-4">
                  Beehiiv offers two subscriber growth mechanisms that involve sharing data in ways that must be specifically disclosed
                  in your privacy policy: the Referral Program and the Boost Network.
                </p>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">The Referral Program</h3>
                <p className="text-slate-700 mb-4">
                  Beehiiv referral program lets you reward subscribers who refer new readers. Beehiiv assigns each subscriber a unique
                  referral link and records who signed up through it. This creates a social graph of who referred whom within your subscriber
                  base. Your privacy policy must disclose that this referral tracking occurs and that referral data is stored alongside
                  subscriber records.
                </p>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">The Boost Network</h3>
                <p className="text-slate-700 mb-4">
                  Boost is Beehiiv paid cross-promotion network. As a Boost publisher, you earn money for each subscriber who clicks a
                  recommendation in your newsletter and subscribes to another publication. When your subscriber clicks a Boost
                  recommendation and subscribes, their email address is shared with the third-party newsletter they joined. This is a
                  data transfer to a third party that must be disclosed under GDPR.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    GDPR Article 13 requires you to inform data subjects at the time of collection about any intended transfers of their data
                    to third parties. If you plan to use Boost with EU subscribers, your signup form should disclose that you participate in
                    a newsletter recommendation network where subscribing to recommended newsletters will share their email with those publishers.
                  </p>
                </div>
              </section>

              <section id="gdpr-eu">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">GDPR Requirements for EU Newsletter Subscribers</h2>
                <p className="text-slate-700 mb-4">
                  If any of your Beehiiv subscribers are located in the European Union or the UK, GDPR applies to your newsletter
                  operation regardless of where you are based. The practical GDPR requirements for Beehiiv creators include:
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Legal basis:</strong> For newsletter emails to EU subscribers, your legal basis is typically consent (Article 6(1)(a)). Document when and how consent was obtained.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Privacy policy:</strong> Must be in plain language, easy to access, and cover all the data flows described in this guide.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Data subject rights:</strong> EU subscribers can request access to their data, correction, deletion, and portability. You have 30 days to respond.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Data transfers:</strong> Beehiiv is a US company. Using Beehiiv means EU subscriber data is transferred to the US. Reference Beehiiv Standard Contractual Clauses in your policy.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Retention policy:</strong> State how long you keep subscriber data after unsubscription. Common practice is 2 to 3 years for suppression list purposes.</span></li>
                </ul>
              </section>

              <section id="can-spam">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">CAN-SPAM Compliance for Beehiiv Newsletters</h2>
                <p className="text-slate-700 mb-4">
                  The US CAN-SPAM Act applies to commercial email messages, which includes most newsletter content that promotes products,
                  services, or sponsorships. Key requirements for Beehiiv creators:
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Physical address:</strong> Every commercial email must include your physical mailing address. Beehiiv footer supports adding this; your privacy policy should note that physical address is used for CAN-SPAM compliance.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Unsubscribe mechanism:</strong> Beehiiv provides a one-click unsubscribe link. Your privacy policy must confirm that unsubscribe requests are processed within 10 business days.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Sponsorships and ads:</strong> If your newsletter includes paid sponsorships or Boost placements, these must be clearly identified as advertising. Disclose how sponsor click data is shared.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Sender identification:</strong> Your From name and email address must accurately identify your newsletter and not be deceptive.</span></li>
                </ul>
              </section>

              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">5 Common Privacy Policy Mistakes by Beehiiv Creators</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Relying on Beehiiv privacy policy instead of writing your own",
                      description: "Beehiiv privacy policy covers Beehiiv as a platform company. It does not cover your newsletter operation. If a subscriber asks who controls their data or files a GDPR complaint, the answer needs to come from your privacy policy, not Beehiiv.",
                    },
                    {
                      title: "Failing to disclose Boost network data sharing",
                      description: "Many creators add Boost recommendations without updating their privacy policy. Boost involves sharing subscriber emails with third-party publishers, which is a material data sharing event that must be disclosed under GDPR and best practice standards.",
                    },
                    {
                      title: "Not mentioning Stripe in the paid subscription section",
                      description: "Subscribers who pay for your newsletter want to know who processes their card. Omitting Stripe from your privacy policy leaves a gap that could erode trust or create compliance issues, especially in EU jurisdictions.",
                    },
                    {
                      title: "Ignoring open pixel and click tracking disclosure",
                      description: "Engagement tracking via pixels and redirected links is personal data processing. Many creators focus only on data collection at signup and forget to disclose ongoing behavioral tracking within the newsletter itself.",
                    },
                    {
                      title: "Using a generic privacy policy not tailored to newsletters",
                      description: "Generic website privacy policies often omit email-specific language: referral tracking, subscriber segmentation, suppression lists, and sponsorship analytics. A policy written for a SaaS product will miss most of the categories Beehiiv creators actually use.",
                    },
                  ].map((mistake, index) => (
                    <div key={index} className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                      <Ban className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-900 mb-1">Mistake {index + 1}: {mistake.title}</p>
                        <p className="text-red-800 text-sm">{mistake.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="how-to-create">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Create a Privacy Policy for Your Beehiiv Newsletter</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "List every data source", description: "Document what subscriber data you collect: signup form fields, custom questions, referral tracking, paid subscription data, and any data you import from other tools." },
                    { step: "2", title: "Document third-party tools you connect", description: "List every integration: Beehiiv itself, Stripe, any webhooks you use, Zapier automations, CRMs like HubSpot or Notion databases you sync subscriber data to." },
                    { step: "3", title: "Decide on your Boost and referral disclosures", description: "If you use Boost, add a clear section explaining that clicking recommendations and subscribing to other newsletters may share your email with those publishers." },
                    { step: "4", title: "Set your data retention policy", description: "Decide how long you keep subscriber data after unsubscription. Many creators retain it on a suppression list for 2 to 3 years to avoid accidentally re-adding unsubscribed contacts." },
                    { step: "5", title: "Publish and link your policy", description: "Publish your privacy policy on your website or Beehiiv newsletter landing page. Add a link in your email footer and on your signup form. Update it whenever you add new tools or change how you use subscriber data." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                        <p className="text-slate-700 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "Do Beehiiv newsletter creators need their own privacy policy?", a: "Yes. Beehiiv privacy policy covers the platform company, not individual creators. You are a separate data controller for your subscriber list and must have your own privacy policy covering how you collect, use, and share subscriber data." },
                    { q: "What subscriber data does Beehiiv give creators access to?", a: "Beehiiv gives creators access to subscriber email addresses, engagement metrics (opens, clicks, scroll depth), geographic location (country and region), referral data, device information, and subscription status. Much of this can be exported as a CSV file." },
                    { q: "Does the Beehiiv Boost network require special privacy disclosures?", a: "Yes. The Boost network involves sharing subscriber emails with third-party newsletter publishers when subscribers click recommendations and subscribe. This data transfer must be disclosed in your privacy policy, and under GDPR you should obtain specific consent before showing Boost placements to EU subscribers." },
                    { q: "How does Beehiiv handle GDPR for EU newsletter subscribers?", a: "Beehiiv provides infrastructure tools (consent checkboxes, unsubscribe links, data export), but GDPR compliance responsibility rests with you as the creator. You must establish a legal basis for processing, maintain a privacy policy, and respond to data subject requests within 30 days." },
                    { q: "What does a Beehiiv privacy policy need to say about paid subscriptions?", a: "Your policy must disclose that payments are processed by Stripe, that Stripe stores billing information, that subscription status is used to control content access, and how subscribers can cancel. You should link to Stripe privacy policy for complete payment data disclosures." },
                  ].map((item, index) => (
                    <div key={index} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                      <p className="text-slate-700 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 text-center">
                <ShieldCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-3">Generate Your Beehiiv Privacy Policy</h2>
                <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                  Create a privacy policy tailored for Beehiiv newsletter creators in minutes. Covers subscriber data,
                  Boost network, Stripe payments, GDPR, and CAN-SPAM.
                </p>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/">Generate Free Privacy Policy</Link>
                </Button>
              </section>

              <section id="resources">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Privacy Policy for Newsletter", href: "/do-i-need-a-privacy-policy-for-a-newsletter" },
                    { title: "GDPR Privacy Policy Template", href: "/gdpr-privacy-policy-template" },
                    { title: "CAN-SPAM Compliance Guide", href: "/can-spam-privacy-policy" },
                    { title: "Privacy Policy for Ghost Newsletter", href: "/privacy-policy-for-ghost" },
                    { title: "Privacy Policy for Collecting Emails", href: "/do-i-need-a-privacy-policy-for-collecting-emails" },
                    { title: "Privacy Policy for Substack", href: "/privacy-policy-for-substack" },
                    { title: "Do I Need a Privacy Policy for a Blog?", href: "/do-i-need-a-privacy-policy-for-a-blog" },
                    { title: "Free Privacy Policy Generator", href: "/" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-2 p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 hover:text-blue-600 text-sm font-medium">
                      <FileText className="w-4 h-4 flex-shrink-0" />
                      {link.title}
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
