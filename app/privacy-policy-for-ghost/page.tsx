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
  Lock,
  Ban,
  Clock,
  CreditCard,
  Server,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Ghost CMS Bloggers and Newsletter Publishers (2026) | ultrafastutilities",
  description:
    "Ghost CMS bloggers and newsletter publishers need a tailored privacy policy. Learn how self-hosted vs Ghost Pro affects your obligations, plus GDPR, Stripe, and member data requirements.",
  keywords:
    "privacy policy for ghost, ghost cms privacy policy, ghost newsletter privacy policy, ghost blog privacy policy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-ghost",
  },
  openGraph: {
    title: "Privacy Policy for Ghost CMS Bloggers and Newsletter Publishers (2026) | ultrafastutilities",
    description:
      "Ghost CMS bloggers and newsletter publishers need a tailored privacy policy. Learn how self-hosted vs Ghost Pro affects your obligations, plus GDPR, Stripe, and member data requirements.",
    url: "https://ultrafastutilities.com/privacy-policy-for-ghost",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Ghost CMS | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Ghost CMS Bloggers and Newsletter Publishers (2026) | ultrafastutilities",
    description:
      "Ghost CMS bloggers and newsletter publishers need a tailored privacy policy. Learn how self-hosted vs Ghost Pro affects your obligations, plus GDPR, Stripe, and member data requirements.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "self-hosted-vs-pro", title: "Self-Hosted vs Ghost Pro" },
  { id: "member-data", title: "Member Subscription Data" },
  { id: "paid-membership", title: "Paid Membership and Stripe" },
  { id: "newsletter-subscribers", title: "Newsletter Subscriber Data" },
  { id: "analytics", title: "Ghost Analytics vs Google Analytics" },
  { id: "commenting", title: "Commenting Systems" },
  { id: "gdpr-eu", title: "GDPR for EU Readers" },
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
      name: "Does a Ghost blog need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your Ghost blog collects any personal data (email addresses for newsletter subscriptions, member signups, comments, or contact forms), you need a privacy policy. GDPR requires it if any of your readers are in the EU. Ghost Pro requires publishers to comply with applicable laws. Self-hosted Ghost users are entirely responsible for their own compliance since Ghost Foundation does not act as a data processor for self-hosted installations.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Ghost Pro and self-hosted Ghost for privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ghost Pro (managed hosting by Ghost Foundation) means Ghost processes your member and subscriber data on your behalf as a data processor. You still need your own privacy policy, but Ghost Pro has infrastructure safeguards and GDPR-compliant data handling in place. Self-hosted Ghost means you control the server and all data. You are solely responsible for server security, data backups, GDPR compliance, and all data processing. Your privacy policy must reflect whichever setup you use.",
      },
    },
    {
      "@type": "Question",
      name: "Does Ghost use Stripe for paid memberships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ghost's native paid membership feature uses Stripe Connect for payment processing. When members pay for a subscription, their payment data is handled by Stripe. You need to disclose Stripe as a payment processor in your privacy policy, link to Stripe's privacy policy, and explain what billing data you retain (subscription status, billing country, last four card digits) versus what Stripe retains (full card details).",
      },
    },
    {
      "@type": "Question",
      name: "Does Ghost have built-in analytics and do I need to disclose them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ghost Pro includes built-in analytics that track page views, referrers, and device types without using cookies or personal identifiers, making it more privacy-friendly than Google Analytics. However, if you add Google Analytics, Facebook Pixel, or other third-party trackers to your Ghost theme, you must disclose these in your privacy policy and provide a cookie consent mechanism for EU visitors.",
      },
    },
    {
      "@type": "Question",
      name: "What commenting systems does Ghost support and how do they affect my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ghost has a native commenting system (available on Ghost Pro) that stores comments linked to member accounts. If you use third-party commenting systems like Disqus or Commento, each has its own data practices that must be disclosed in your privacy policy. Disqus in particular collects significant tracking data and serves targeted ads, which requires explicit disclosure and likely cookie consent for EU readers.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy for Ghost CMS Bloggers and Newsletter Publishers (2026)",
  description:
    "Complete guide to privacy policy requirements for Ghost CMS users, covering self-hosted vs Ghost Pro, member data, Stripe payments, analytics, commenting systems, and GDPR.",
  datePublished: "2026-01-01",
  dateModified: "2026-03-31",
  author: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
  publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy for Ghost", item: "https://ultrafastutilities.com/privacy-policy-for-ghost" },
  ],
};

export default function PrivacyPolicyGhost() {
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
              <span className="text-slate-600">Privacy Policy for Ghost</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Server className="w-3.5 h-3.5" />
                Ghost Privacy Requirements 2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Ghost CMS
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Ghost CMS is a powerful platform for bloggers and newsletter publishers. Whether you use Ghost Pro
                or self-host, your privacy policy obligations differ significantly. Here is what you need to know.
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
                <span>Last updated: March 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>13 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>
              <div id="quick-answer" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Quick Answer: Does a Ghost Blog Need a Privacy Policy?
                </h2>
                <p className="text-blue-800">
                  <strong>Yes.</strong> Any Ghost blog that collects email addresses for newsletters, accepts member signups,
                  processes paid subscriptions, or allows comments is collecting personal data. GDPR applies if any of your
                  readers are in the EU. Ghost Pro requires publishers to comply with applicable privacy laws. Self-hosted Ghost
                  users bear full responsibility because Ghost Foundation has no data processing relationship with self-hosted installations.
                  Your privacy policy must specifically address whether you use Ghost Pro or self-hosted Ghost, as each creates
                  different data flows.
                </p>
              </div>

              <section id="self-hosted-vs-pro">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Self-Hosted Ghost vs Ghost Pro: Privacy Policy Differences</h2>
                <p className="text-slate-700 mb-4">
                  The biggest variable in a Ghost privacy policy is your hosting arrangement. Ghost is an open-source platform,
                  meaning you can either run it yourself on your own server or pay Ghost Foundation for managed hosting via Ghost Pro.
                  These two setups create fundamentally different data responsibility structures.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Aspect</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Ghost Pro (Managed)</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Self-Hosted Ghost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Data processor</td>
                        <td className="border border-slate-200 px-4 py-3">Ghost Foundation processes data on your behalf</td>
                        <td className="border border-slate-200 px-4 py-3">You (or your hosting provider)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Server security</td>
                        <td className="border border-slate-200 px-4 py-3">Ghost Foundation responsible</td>
                        <td className="border border-slate-200 px-4 py-3">Your responsibility entirely</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Email sending</td>
                        <td className="border border-slate-200 px-4 py-3">Mailgun (included) or custom SMTP</td>
                        <td className="border border-slate-200 px-4 py-3">Must configure own email provider</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Analytics</td>
                        <td className="border border-slate-200 px-4 py-3">Ghost Analytics built-in (privacy-friendly)</td>
                        <td className="border border-slate-200 px-4 py-3">Must add own analytics</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">GDPR DPA</td>
                        <td className="border border-slate-200 px-4 py-3">Ghost Foundation offers data processing agreement</td>
                        <td className="border border-slate-200 px-4 py-3">No DPA with Ghost Foundation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    If you self-host Ghost on a provider like DigitalOcean, AWS, or Vultr, you may need separate data processing
                    agreements with your hosting provider, your email service provider (Mailgun, Postmark, SendGrid), and any
                    CDN you use. Your privacy policy should name each of these subprocessors.
                  </p>
                </div>
              </section>

              <section id="member-data">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Member Subscription Data</h2>
                <p className="text-slate-700 mb-4">
                  Ghost has a built-in members system that lets readers create accounts, manage newsletter preferences, and access
                  gated content. When a reader becomes a member, Ghost collects and stores a meaningful set of personal data that
                  your privacy policy must address.
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Email address:</strong> The primary identifier for Ghost members. Used for authentication, newsletter delivery, and account management.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Name:</strong> Optional, collected if the member provides it during signup.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Newsletter preferences:</strong> Which newsletters the member has opted into and their frequency preferences.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Login activity:</strong> Ghost logs member login dates and magic link usage for security purposes.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Notes and labels:</strong> Admins can add internal notes and labels to member records. These are internal data but still constitute personal data under GDPR.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Subscription tier:</strong> Whether the member is on a free or paid plan, and which content access tier they belong to.</span></li>
                </ul>
              </section>

              <section id="paid-membership">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Paid Membership and Stripe</h2>
                <p className="text-slate-700 mb-4">
                  Ghost's native paid membership feature uses Stripe Connect to process subscription payments. This creates a three-party
                  data flow: your Ghost site collects subscription intent, Stripe processes the payment and stores billing data, and Ghost
                  receives confirmation and stores subscription status.
                </p>
                <p className="text-slate-700 mb-4">
                  Your privacy policy must clearly explain this data flow to members. The key points to cover:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Stripe payment disclosures for Ghost membership sites:</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Payment processing is handled by Stripe Connect. Members should review Stripe's privacy policy at stripe.com/privacy.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Ghost stores subscription status (active, cancelled, trialing), billing interval (monthly/annual), and the Stripe customer ID. Raw card data is never stored on Ghost.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Subscription payments create Stripe payment records that may be retained for up to 7 years for accounting and tax compliance.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>If you offer trials, the trial start date and conversion status are stored in Ghost member records.</span></li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    Ghost uses Stripe Connect rather than a standard Stripe integration. This means Stripe may share some data
                    about your publication with members during checkout. You should note in your privacy policy that the Stripe
                    Connect platform is operated by Ghost Foundation and that payments may appear on billing statements under
                    Ghost's merchant account.
                  </p>
                </div>
              </section>

              <section id="newsletter-subscribers">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Newsletter Subscriber Data</h2>
                <p className="text-slate-700 mb-4">
                  Ghost treats newsletter subscriptions as a subset of membership. Every newsletter subscriber is also a Ghost member
                  (at the free tier), even if they never log in. This means the member data section above applies to newsletter subscribers too.
                </p>
                <p className="text-slate-700 mb-4">
                  Ghost sends newsletters via its email infrastructure (Mailgun on Ghost Pro, or your configured SMTP provider on
                  self-hosted). Your privacy policy must disclose:
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Email delivery provider:</strong> Ghost Pro uses Mailgun. Self-hosted Ghost requires you to configure your own provider (Mailgun, Postmark, SendGrid, AWS SES). Name your provider in your privacy policy.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Email tracking:</strong> Ghost tracks newsletter open rates and click rates using tracking pixels and link redirects. This must be disclosed under GDPR.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Unsubscribe handling:</strong> Ghost includes a one-click unsubscribe link in all newsletters. Your privacy policy should confirm that unsubscribe requests are honored immediately and that email data is retained on a suppression list to prevent accidental re-subscription.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Multiple newsletters:</strong> If your Ghost publication has multiple newsletter segments, explain how subscriber preferences for each are stored and managed.</span></li>
                </ul>
              </section>

              <section id="analytics">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Ghost Analytics vs Google Analytics</h2>
                <p className="text-slate-700 mb-4">
                  Ghost Pro includes built-in Ghost Analytics. Unlike Google Analytics, Ghost Analytics does not use cookies, does not
                  track individual users across sessions, and does not send data to third parties. It collects aggregated page view counts,
                  referrer domains, and device types, making it one of the more privacy-friendly analytics options available.
                </p>
                <p className="text-slate-700 mb-4">
                  However, many Ghost users add additional tracking to their themes. Here is how different analytics choices affect
                  your privacy policy requirements:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Analytics Tool</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Privacy Impact</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Cookie Consent Required?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Ghost Analytics (built-in)</td>
                        <td className="border border-slate-200 px-4 py-3">Cookie-free, aggregate only, no third-party sharing</td>
                        <td className="border border-slate-200 px-4 py-3 text-green-700">No (EU-compliant without consent)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Google Analytics 4</td>
                        <td className="border border-slate-200 px-4 py-3">Cookies, cross-site tracking, sends data to Google</td>
                        <td className="border border-slate-200 px-4 py-3 text-red-700">Yes, required for EU visitors</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Plausible / Fathom</td>
                        <td className="border border-slate-200 px-4 py-3">Cookie-free, aggregate, EU-hosted options</td>
                        <td className="border border-slate-200 px-4 py-3 text-green-700">Generally no</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Facebook Pixel</td>
                        <td className="border border-slate-200 px-4 py-3">Tracks individuals, sends data to Meta</td>
                        <td className="border border-slate-200 px-4 py-3 text-red-700">Yes, required; high privacy risk</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="commenting">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Commenting Systems</h2>
                <p className="text-slate-700 mb-4">
                  Ghost has evolved its approach to commenting. Ghost Pro now includes a native commenting system that ties comments
                  to member accounts, meaning commenters must be logged-in members. This is a privacy-friendly design because
                  comments are linked to existing member records rather than creating new third-party data flows.
                </p>
                <p className="text-slate-700 mb-4">
                  Many Ghost users, particularly on self-hosted installations, add third-party commenting systems. Each requires
                  separate privacy policy disclosure:
                </p>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Ghost Native Comments</h3>
                    <p className="text-green-800 text-sm">Comments are stored in your Ghost database as part of member records. No third-party data sharing. Disclose in your privacy policy that comments are linked to member accounts and visible to publication staff.</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <h3 className="font-semibold text-yellow-900 mb-2">Disqus</h3>
                    <p className="text-yellow-800 text-sm">Disqus collects significant behavioral data and serves targeted advertising. Requires explicit disclosure and cookie consent for EU readers. Many privacy-conscious bloggers avoid Disqus for this reason.</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Commento / Remark42</h3>
                    <p className="text-blue-800 text-sm">Privacy-focused alternatives. Commento collects email and name but does not track users across sites. Self-hostable options mean data stays on your server. Disclose the provider and what commenter data is stored.</p>
                  </div>
                </div>
              </section>

              <section id="gdpr-eu">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">GDPR for EU Readers on Ghost</h2>
                <p className="text-slate-700 mb-4">
                  GDPR applies to any Ghost publication with EU readers, regardless of where the publication is based. Ghost Pro
                  publishers can sign a Data Processing Agreement (DPA) with Ghost Foundation, which covers the processing
                  relationship between you (controller) and Ghost Foundation (processor). Self-hosted Ghost users do not have
                  this DPA option and must negotiate their own agreements with their hosting provider.
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Legal basis for newsletter emails:</strong> Consent (Article 6(1)(a)) is the appropriate basis. Ghost's double opt-in confirmation email helps document this consent.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Member access requests:</strong> EU members can request a copy of all personal data stored about them. Ghost provides member data export via Admin API. You must fulfill these requests within 30 days.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Right to erasure:</strong> EU members can request deletion of their account and data. Ghost allows admin deletion of member records. Your policy must state how to make this request and that backup copies may persist for up to 90 days.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Data transfers:</strong> Ghost Pro servers are in the EU by default for EU customers, which helps with GDPR transfer compliance. Self-hosted Ghost may require Standard Contractual Clauses with non-EU hosting providers.</span></li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    Ghost's magic link authentication (where members receive a one-time login link instead of setting a password)
                    means Ghost stores email addresses as the primary authentication credential. Under GDPR, you must disclose
                    that authentication magic links are sent via email and that login activity is logged for security purposes.
                  </p>
                </div>
              </section>

              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">5 Common Privacy Policy Mistakes by Ghost Publishers</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Not distinguishing between Ghost Pro and self-hosted in the policy",
                      description: "A Ghost Pro publisher and a self-hosted Ghost publisher have entirely different data flows and responsible parties. A one-size-fits-all Ghost privacy policy that does not specify your hosting setup will be inaccurate and potentially misleading to readers.",
                    },
                    {
                      title: "Forgetting to name the email delivery provider",
                      description: "Ghost Pro uses Mailgun by default. Self-hosted Ghost can use any SMTP provider. Many publishers write 'we send newsletters' without naming who actually transmits the emails and stores delivery logs. This is a disclosure gap under GDPR.",
                    },
                    {
                      title: "Using a cookie consent banner but not updating the privacy policy to match",
                      description: "Publishers who add Google Analytics or Facebook Pixel to their Ghost theme often configure a cookie banner but fail to update their privacy policy with the specific tracking technologies used and the third parties receiving data.",
                    },
                    {
                      title: "Not disclosing admin notes and labels on member records",
                      description: "Ghost admin allows staff to add notes, labels, and custom data to member records. These constitute personal data processing. If you use these features, your privacy policy should mention that staff may add internal annotations to member accounts.",
                    },
                    {
                      title: "Ignoring the commenting system's privacy implications",
                      description: "Bloggers who add Disqus comments to their Ghost theme often do not realize how much data Disqus collects or that it serves targeted ads to commenters. Failing to disclose this is a significant compliance gap, particularly for EU readers.",
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Create a Privacy Policy for Your Ghost Publication</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Identify your hosting setup", description: "Determine whether you are on Ghost Pro or self-hosted. If self-hosted, list your hosting provider, email delivery provider, and CDN. Each is a data subprocessor that should be named in your policy." },
                    { step: "2", title: "Document your member and subscriber data", description: "List all data fields you collect during member signup: email, name, newsletter preferences, and any custom fields. Note that Ghost automatically collects login timestamps and magic link usage." },
                    { step: "3", title: "Address paid membership and Stripe", description: "If you use Ghost's paid membership feature, include a section on Stripe Connect payment processing, what billing data Ghost retains versus what Stripe retains, and how subscription data is used." },
                    { step: "4", title: "Declare your analytics and tracking tools", description: "List every analytics or tracking tool you have added to your Ghost theme. Specify whether each uses cookies, whether it transfers data outside the EU, and whether it requires cookie consent." },
                    { step: "5", title: "Link the policy from your signup forms and footer", description: "Ghost's member signup portal should include a link to your privacy policy. Add the policy link to your site footer and to any email subscription forms or pop-ups." },
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
                    { q: "Does a Ghost blog need a privacy policy?", a: "Yes. Any Ghost blog that collects email addresses for newsletters, accepts member signups, processes paid subscriptions, or allows comments is collecting personal data and needs a privacy policy. GDPR applies if any of your readers are in the EU." },
                    { q: "What is the difference between Ghost Pro and self-hosted Ghost for privacy?", a: "Ghost Pro means Ghost Foundation processes member data on your behalf as a data processor, and you can sign a DPA with them. Self-hosted Ghost means you control the server and all data, making you solely responsible for all data processing, security, and compliance." },
                    { q: "Does Ghost use Stripe for paid memberships?", a: "Yes. Ghost native paid membership uses Stripe Connect for payment processing. Your privacy policy must disclose Stripe as a payment processor, link to Stripe's privacy policy, and explain what billing data is retained in Ghost versus what Stripe retains." },
                    { q: "Does Ghost have built-in analytics and do I need to disclose them?", a: "Ghost Pro includes Ghost Analytics, which is cookie-free and does not send data to third parties. If you add Google Analytics, Facebook Pixel, or similar tools to your Ghost theme, you must disclose these and provide cookie consent for EU visitors." },
                    { q: "What commenting systems does Ghost support and how do they affect my privacy policy?", a: "Ghost Pro has a native commenting system linked to member accounts with no third-party data sharing. Third-party systems like Disqus collect significant tracking data and serve targeted ads, requiring explicit disclosure and cookie consent for EU readers." },
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
                <h2 className="text-2xl font-bold mb-3">Generate Your Ghost Privacy Policy</h2>
                <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                  Create a privacy policy tailored for Ghost CMS publishers in minutes. Covers member data, Stripe payments,
                  Ghost Analytics, commenting systems, and GDPR compliance.
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
                    { title: "Privacy Policy for Beehiiv", href: "/privacy-policy-for-beehiiv" },
                    { title: "GDPR Privacy Policy Template", href: "/gdpr-privacy-policy-template" },
                    { title: "Do I Need a Privacy Policy for a Blog?", href: "/do-i-need-a-privacy-policy-for-a-blog" },
                    { title: "Privacy Policy for WordPress Site", href: "/do-i-need-a-privacy-policy-for-wordpress-site" },
                    { title: "Cookie Policy for Websites", href: "/cookie-policy-for-websites" },
                    { title: "Privacy Policy for Membership Site", href: "/privacy-policy-for-membership-site" },
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
