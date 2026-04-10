import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  Mail,
  BarChart3,
  Clock,
  AlertTriangle,
  MessageSquare,
  Rss,
  Users,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Substack: Newsletter Writer Guide (2026) | ultrafastutilities",
  description: "Publishing on Substack? Your privacy policy must cover subscriber data, payment info, email analytics, and Notes engagement. Complete guide for Substack newsletter writers.",
  keywords: "privacy policy for substack, substack privacy policy, substack newsletter privacy, substack subscriber data, substack writer privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-substack",
  },
  openGraph: {
    title: "Privacy Policy for Substack: Newsletter Writer Guide (2026) | ultrafastutilities",
    description: "Publishing on Substack? Your privacy policy must cover subscriber data, payment info, email analytics, and Notes engagement. Complete guide for Substack newsletter writers.",
    url: "https://ultrafastutilities.com/privacy-policy-for-substack",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Substack | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Substack: Newsletter Writer Guide (2026) | ultrafastutilities",
    description: "Publishing on Substack? Your privacy policy must cover subscriber data, payment info, email analytics, and Notes engagement. Complete guide for Substack newsletter writers.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-needed", title: "Why Writers Need One" },
  { id: "data-shared", title: "What Substack Shares" },
  { id: "free-vs-paid", title: "Free vs Paid Data" },
  { id: "responsibility", title: "Writer Responsibility" },
  { id: "email-analytics", title: "Email Analytics" },
  { id: "notes-social", title: "Notes & Social" },
  { id: "paid-subscriptions", title: "Paid Subscriptions" },
  { id: "api-rss", title: "API & RSS" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to", title: "How to Create" },
  { id: "faqs", title: "FAQs" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForSubstackPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Substack: Newsletter Writer Guide (2026) | ultrafastutilities",
            description: "Publishing on Substack? Your privacy policy must cover subscriber data, payment info, email analytics, and Notes engagement. Complete guide for Substack newsletter writers.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-04-11",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Substack", item: "https://ultrafastutilities.com/privacy-policy-for-substack" },
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
            name: "How to Create a Privacy Policy for Substack",
            description: "Step-by-step guide to writing a compliant privacy policy for your Substack newsletter.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Audit your data collection", text: "Review your Substack dashboard to identify all subscriber data you can access, including emails, names, subscription status, and analytics." },
              { "@type": "HowToStep", position: 2, name: "List third-party services", text: "Document any external tools connected to your newsletter such as payment processors, analytics platforms, or social media integrations." },
              { "@type": "HowToStep", position: 3, name: "Draft your disclosure sections", text: "Write clear sections covering what data you collect, why you collect it, how you use it, and who you share it with." },
              { "@type": "HowToStep", position: 4, name: "Address paid subscription data", text: "If you offer paid subscriptions, explain how payment information is handled by Stripe through Substack and what billing data you can access." },
              { "@type": "HowToStep", position: 5, name: "Include subscriber rights", text: "Explain how subscribers can unsubscribe, request data deletion, or exercise their GDPR and CCPA rights." },
              { "@type": "HowToStep", position: 6, name: "Publish and link your policy", text: "Add your privacy policy to your Substack About page and include a link in your welcome email to new subscribers." },
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
                name: "Do I need a privacy policy for my Substack newsletter?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. If you collect subscriber email addresses, offer paid subscriptions, or use analytics to track opens and clicks, you need a privacy policy. GDPR, CCPA, and CAN-SPAM all require transparency about data collection." },
              },
              {
                "@type": "Question",
                name: "Does Substack provide a privacy policy for writers?",
                acceptedAnswer: { "@type": "Answer", text: "Substack has its own platform privacy policy, but it only covers Substack's data practices. As a writer, you are responsible for disclosing how you personally use subscriber data, especially if you export emails or use third-party tools." },
              },
              {
                "@type": "Question",
                name: "What subscriber data can Substack writers access?",
                acceptedAnswer: { "@type": "Answer", text: "Writers can access subscriber email addresses, names, subscription status (free or paid), email open rates, click rates, geographic data (approximate location), and for paid subscribers, payment information processed through Stripe." },
              },
              {
                "@type": "Question",
                name: "Can I use Substack subscriber emails for other purposes?",
                acceptedAnswer: { "@type": "Answer", text: "You should only use subscriber emails for the purpose they were provided. Using them for unrelated marketing, selling them to third parties, or importing them into other platforms without consent may violate privacy laws and Substack's terms of service." },
              },
              {
                "@type": "Question",
                name: "Do I need a separate privacy policy if I have a free Substack?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Even free Substack newsletters collect email addresses and track engagement metrics. Under GDPR, collecting any personal data requires a privacy disclosure regardless of whether money changes hands." },
              },
              {
                "@type": "Question",
                name: "How do Substack Notes affect my privacy obligations?",
                acceptedAnswer: { "@type": "Answer", text: "Substack Notes creates additional public interactions including likes, reposts, and comments. Your privacy policy should mention that Notes activity is publicly visible and that engagement data from Notes may be tracked." },
              },
              {
                "@type": "Question",
                name: "Where should I put my Substack privacy policy?",
                acceptedAnswer: { "@type": "Answer", text: "Link your privacy policy on your Substack About page, in your welcome email, and optionally in your newsletter footer. You can host the full policy on a separate page or link to it from your Substack settings." },
              },
            ],
          }),
        }}
      />
      <ReadingProgress />
      <main className="min-h-screen">
        {/* Hero Section */}
        <header className="relative overflow-hidden border-b border-slate-200/60">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-white to-white" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-orange-50/60 blur-3xl" />
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
              <span className="text-slate-600">Privacy Policy for Substack</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-medium mb-6">
                <Mail className="w-3.5 h-3.5" />
                Newsletter Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                  Substack
                </span>
                : What Newsletter Writers Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Publishing on Substack means you collect subscriber emails,
                track open rates, and may process payment data. Here is
                everything you need to disclose in your privacy policy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for newsletter writers and Substack publishers.
              </p>
            </div>

            {/* Featured Snippet */}
            <div className="mt-8 max-w-2xl rounded-xl border border-orange-200/80 bg-orange-50/50 p-5">
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed text-slate-700">
                  <strong className="text-slate-900">Quick answer:</strong>{" "}
                  Yes, Substack newsletter writers need a privacy policy. You
                  collect subscriber emails, track engagement analytics, and
                  may process payments through Stripe. GDPR, CCPA, and
                  CAN-SPAM all require you to disclose how you handle this
                  data, even on a free newsletter.
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/do-i-need-a-privacy-policy-for-a-newsletter"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Newsletter Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                GDPR Template
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-600 text-sm font-medium text-white hover:bg-orange-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Policy Generator
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
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-orange-50 to-slate-50 border border-orange-100/80">
                  <p className="text-sm font-semibold text-slate-800">
                    Need your own policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate in under 60 seconds
                  </p>
                  <Link href="/generate">
                    <Button
                      size="sm"
                      className="mt-3 w-full bg-orange-600 hover:bg-orange-700 text-white text-xs rounded-lg"
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
                <span>Last updated: April 2026</span>
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

              {/* Section 1: Why Substack Writers Need a Privacy Policy */}
              <section id="why-needed" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Substack Writers Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    When someone subscribes to your Substack newsletter, you
                    collect their email address at a minimum. If you offer paid
                    subscriptions, you also gain access to payment-related
                    data. Substack provides writers with analytics on open
                    rates, click rates, and subscriber locations. All of this
                    triggers privacy law obligations under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    ,{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-collecting-emails"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      email collection laws
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , and CAN-SPAM.
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <Mail className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Even if your Substack is completely free, you still
                        collect personal data (email addresses) and track
                        engagement metrics. Under GDPR, this alone requires a
                        privacy disclosure, regardless of whether you monetize
                        your newsletter.
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-7 text-slate-700">
                    Substack has its own platform-level privacy policy, but it
                    does not cover how individual writers use subscriber data.
                    If you export your email list, share analytics with
                    sponsors, or use subscriber data for any purpose beyond
                    sending your newsletter, you need your own privacy policy.
                    This is similar to the requirements for{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-a-newsletter"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      newsletter privacy policies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    in general.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What Substack Shares with Writers */}
              <section id="data-shared" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Substack Shares with Writers
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Substack gives writers access to more subscriber data
                      than most people realize.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-200/80 bg-slate-50/80">
                          <th className="text-left px-4 py-3 font-semibold text-slate-900">Data Type</th>
                          <th className="text-left px-4 py-3 font-semibold text-slate-900">Details</th>
                          <th className="text-center px-4 py-3 font-semibold text-slate-900">Free Subs</th>
                          <th className="text-center px-4 py-3 font-semibold text-slate-900">Paid Subs</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/60">
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-medium text-slate-800">Subscriber email</td>
                          <td className="px-4 py-3 text-slate-600">Full email address, exportable</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-medium text-slate-800">Subscriber name</td>
                          <td className="px-4 py-3 text-slate-600">Display name if provided</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-medium text-slate-800">Subscription status</td>
                          <td className="px-4 py-3 text-slate-600">Free, paid, or gift subscription</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-medium text-slate-800">Open rates</td>
                          <td className="px-4 py-3 text-slate-600">Per-post and per-subscriber opens</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-medium text-slate-800">Click rates</td>
                          <td className="px-4 py-3 text-slate-600">Link clicks within emails</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-medium text-slate-800">Payment info</td>
                          <td className="px-4 py-3 text-slate-600">Stripe-processed billing details</td>
                          <td className="px-4 py-3 text-center text-slate-400">No</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-medium text-slate-800">Geographic data</td>
                          <td className="px-4 py-3 text-slate-600">Approximate subscriber location</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                          <td className="px-4 py-3 font-medium text-slate-800">Notes engagement</td>
                          <td className="px-4 py-3 text-slate-600">Likes, reposts, and comments on Notes</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                          <td className="px-4 py-3 text-center text-green-600 font-medium">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Substack lets writers export their full subscriber list
                        as a CSV file at any time. This means subscriber data
                        leaves the Substack platform and enters your personal
                        devices, making you directly responsible for its
                        protection under privacy laws.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Free vs Paid Subscriber Data */}
              <section id="free-vs-paid" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Free vs Paid Subscriber Data
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-6">
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-orange-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Users className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Free Subscribers
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11">
                      For free subscribers, you collect email addresses, names
                      (if provided), and engagement data such as open rates
                      and click rates. You also see approximate geographic
                      locations and subscription dates. While no payment data
                      is involved, you still hold personal data that requires
                      disclosure under GDPR and CCPA.
                    </p>
                  </div>

                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-orange-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Paid Subscribers
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 ml-11">
                      Paid subscribers generate additional data including
                      payment method details (processed by Stripe), billing
                      cycles, subscription amounts, and transaction history.
                      Substack handles payment processing, but you can see
                      revenue data and subscriber payment status. Your privacy
                      policy must explain this financial data processing.
                    </p>
                  </div>

                  {/* Mini FAQ 1 */}
                  <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
                    <p className="font-semibold text-slate-900 text-sm">Do free Substack newsletters need a privacy policy?</p>
                    <p className="text-sm leading-relaxed text-slate-700 mt-2">
                      Yes. Collecting email addresses alone is enough to
                      trigger GDPR requirements. Add open rate tracking and
                      geographic data on top of that, and you have a clear
                      obligation to disclose your data practices regardless
                      of whether your newsletter is monetized.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Substack vs Writer Responsibility */}
              <section id="responsibility" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Substack vs Writer Responsibility
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    There is an important distinction between what Substack
                    is responsible for and what falls on you as the writer.
                    Understanding this split is essential for drafting your
                    privacy policy correctly.
                  </p>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Substack (Platform) Handles
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        Payment processing through Stripe, platform-level
                        cookies, account authentication, infrastructure
                        security, and their own privacy policy disclosures
                        for site visitors.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Writers (You) Must Disclose
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        How you use subscriber emails, whether you export
                        subscriber lists, what analytics you review, how you
                        handle paid subscriber data, whether you share data
                        with sponsors or advertisers, and how subscribers
                        can exercise their privacy rights.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Shared Responsibility
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        Data retention practices, responding to subscriber
                        deletion requests, and ensuring compliance with
                        international privacy laws like GDPR when you have
                        subscribers in the EU. This is similar to the shared
                        model on platforms like{" "}
                        <Link
                          href="/privacy-policy-for-patreon"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          Patreon
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Email Analytics and Tracking */}
              <section id="email-analytics" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Email Analytics and Tracking
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Substack automatically tracks email engagement for every
                    newsletter you send. This includes open rates (via
                    tracking pixels), link click tracking, and per-subscriber
                    activity history. Your privacy policy needs to disclose
                    this tracking even though Substack handles it at the
                    platform level, because you benefit from and access the
                    resulting data.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Open tracking",
                        text: "Substack embeds invisible tracking pixels to detect when subscribers open your emails",
                      },
                      {
                        label: "Click tracking",
                        text: "All links in your newsletter are routed through Substack's tracking system before redirecting to the destination",
                      },
                      {
                        label: "Subscriber activity",
                        text: "You can see which subscribers are most engaged, who has not opened recent emails, and individual reading patterns",
                      },
                      {
                        label: "Aggregate analytics",
                        text: "Total views, subscriber growth trends, and geographic distribution of your audience",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <BarChart3 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    This is comparable to the tracking used by platforms like{" "}
                    <Link
                      href="/privacy-policy-for-mailchimp"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Mailchimp
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , but with a key difference: on Substack, the tracking is
                    built into the platform and cannot be disabled by writers.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Substack Notes and Social Features */}
              <section id="notes-social" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Substack Notes and Social Features
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Substack Notes functions as a social feed where writers
                    and readers interact publicly. This creates additional
                    privacy considerations that your policy should address.
                  </p>

                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-orange-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Notes Data You Should Disclose
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Comments and replies on your posts are publicly visible
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Likes and reposts create a public engagement trail
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        You can see engagement metrics on your Notes content
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Subscriber profiles linked to Notes activity are visible to you
                      </li>
                    </ul>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    If you reference Notes interactions in your newsletter
                    content or use Notes engagement data to make editorial
                    decisions, your privacy policy should mention this. The
                    same principle applies to comment sections on your posts,
                    similar to privacy requirements for{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-a-blog"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      blog comment sections
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Paid Subscriptions and Payment Data */}
              <section id="paid-subscriptions" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Paid Subscriptions and Payment Data
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    If you offer paid subscriptions on Substack, payment
                    processing is handled entirely by Stripe. You never see
                    full credit card numbers, but you do have access to
                    subscriber payment status, subscription amounts, billing
                    frequency, and revenue reports. Your privacy policy must
                    explain this arrangement.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Stripe as processor",
                        text: "Disclose that Stripe handles payment processing on behalf of Substack and link to Stripe's privacy policy",
                      },
                      {
                        label: "Revenue data access",
                        text: "Explain that you can see who pays, how much, and when their subscription renews or cancels",
                      },
                      {
                        label: "Refund handling",
                        text: "Note that refund requests go through Substack/Stripe and what data is retained during that process",
                      },
                      {
                        label: "Tax reporting",
                        text: "For US-based writers earning above the threshold, Substack may share tax-related information as required by law",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <CreditCard className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Mini FAQ 2 */}
                  <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
                    <p className="font-semibold text-slate-900 text-sm">Can subscribers see what payment data I have access to?</p>
                    <p className="text-sm leading-relaxed text-slate-700 mt-2">
                      Your subscribers cannot see your Substack dashboard.
                      This is exactly why a privacy policy matters: it tells
                      subscribers what information you can view about them,
                      creating the transparency that privacy laws require.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: Substack API and RSS */}
              <section id="api-rss" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Substack API and RSS
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Substack provides an RSS feed for every publication and
                    offers API-like functionality for data exports. If you
                    use these features, they may affect your privacy
                    obligations.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "RSS feeds",
                        text: "Your public content is available via RSS, which means third-party services can aggregate and redistribute it. Disclose this if reader interactions flow through RSS readers.",
                      },
                      {
                        label: "CSV exports",
                        text: "Substack allows full subscriber list exports. Once exported, this data lives outside the platform and your privacy policy must cover how you store and protect it.",
                      },
                      {
                        label: "Third-party integrations",
                        text: "If you connect your Substack data to tools like Zapier, Google Sheets, or CRM platforms, each integration point needs disclosure.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <Rss className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        If you export your Substack subscriber list and import
                        it into another email platform, you become the sole
                        data controller for that copy of the data. Substack
                        is no longer involved, and your privacy policy must
                        cover the new platform as well.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 9: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Mistakes to Avoid
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      title: "Relying on Substack's privacy policy alone",
                      desc: "Substack's policy covers the platform, not your individual data practices. You need your own disclosure.",
                    },
                    {
                      title: "Not disclosing email tracking",
                      desc: "Open rate and click tracking happen automatically on every email you send. Subscribers deserve to know about this.",
                    },
                    {
                      title: "Ignoring paid subscriber payment data",
                      desc: "Even though Stripe processes payments, you access revenue and billing data that must be disclosed.",
                    },
                    {
                      title: "Forgetting about data exports",
                      desc: "If you ever export your subscriber list, your privacy policy must cover how you store and protect that exported data.",
                    },
                    {
                      title: "Missing Notes and comment disclosures",
                      desc: "Public interactions on Notes and in comment sections create data that your privacy policy should address.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/30 p-4"
                    >
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">
                          {item.title}
                        </p>
                        <p className="text-sm leading-relaxed text-slate-600 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 10: How to Create Your Substack Privacy Policy */}
              <section id="how-to" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create Your Substack Privacy Policy
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      step: "Step 1",
                      title: "Audit your data collection",
                      text: "Review your Substack dashboard to identify all subscriber data you can access, including emails, names, subscription status, and analytics.",
                    },
                    {
                      step: "Step 2",
                      title: "List third-party services",
                      text: "Document any external tools connected to your newsletter such as payment processors, analytics platforms, or social media integrations.",
                    },
                    {
                      step: "Step 3",
                      title: "Draft your disclosure sections",
                      text: "Write clear sections covering what data you collect, why you collect it, how you use it, and who you share it with.",
                    },
                    {
                      step: "Step 4",
                      title: "Address paid subscription data",
                      text: "If you offer paid subscriptions, explain how payment information is handled by Stripe through Substack and what billing data you can access.",
                    },
                    {
                      step: "Step 5",
                      title: "Include subscriber rights",
                      text: "Explain how subscribers can unsubscribe, request data deletion, or exercise their GDPR and CCPA rights.",
                    },
                    {
                      step: "Step 6",
                      title: "Publish and link your policy",
                      text: "Add your privacy policy to your Substack About page and include a link in your welcome email to new subscribers.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-base leading-7"
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-orange-100 text-orange-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900">
                          {item.title}
                        </p>
                        <p className="text-slate-600 mt-1">{item.text}</p>
                      </div>
                    </div>
                  ))}

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Want to skip the manual work? You can{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      generate a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    tailored to newsletter publishers in under 60 seconds.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 11: FAQs */}
              <section id="faqs" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    11
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      q: "Do I need a privacy policy for my Substack newsletter?",
                      a: "Yes. If you collect subscriber email addresses, offer paid subscriptions, or use analytics to track opens and clicks, you need a privacy policy. GDPR, CCPA, and CAN-SPAM all require transparency about data collection.",
                    },
                    {
                      q: "Does Substack provide a privacy policy for writers?",
                      a: "Substack has its own platform privacy policy, but it only covers Substack's data practices. As a writer, you are responsible for disclosing how you personally use subscriber data, especially if you export emails or use third-party tools.",
                    },
                    {
                      q: "What subscriber data can Substack writers access?",
                      a: "Writers can access subscriber email addresses, names, subscription status (free or paid), email open rates, click rates, geographic data (approximate location), and for paid subscribers, payment information processed through Stripe.",
                    },
                    {
                      q: "Can I use Substack subscriber emails for other purposes?",
                      a: "You should only use subscriber emails for the purpose they were provided. Using them for unrelated marketing, selling them to third parties, or importing them into other platforms without consent may violate privacy laws and Substack's terms of service.",
                    },
                    {
                      q: "Do I need a separate privacy policy if I have a free Substack?",
                      a: "Yes. Even free Substack newsletters collect email addresses and track engagement metrics. Under GDPR, collecting any personal data requires a privacy disclosure regardless of whether money changes hands.",
                    },
                    {
                      q: "How do Substack Notes affect my privacy obligations?",
                      a: "Substack Notes creates additional public interactions including likes, reposts, and comments. Your privacy policy should mention that Notes activity is publicly visible and that engagement data from Notes may be tracked.",
                    },
                    {
                      q: "Where should I put my Substack privacy policy?",
                      a: "Link your privacy policy on your Substack About page, in your welcome email, and optionally in your newsletter footer. You can host the full policy on a separate page or link to it from your Substack settings.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border border-slate-200/80 p-5">
                      <p className="font-semibold text-slate-900 text-base">
                        {item.q}
                      </p>
                      <p className="text-base leading-7 text-slate-600 mt-2">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* CTA Section */}
              <section id="generate" className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-orange-600 to-orange-800 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
                  </div>

                  <div className="relative">
                    <Mail className="w-10 h-10 text-orange-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate My Substack Privacy Policy
                    </h2>
                    <p className="mt-3 text-orange-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your Substack newsletter in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-orange-700 hover:bg-orange-50 font-semibold rounded-xl shadow-lg shadow-orange-900/20"
                      >
                        Generate My Substack Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-orange-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-orange-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-orange-300/50" />
                      <span>Newsletter-ready structure</span>
                    </div>

                    <p className="text-xs text-orange-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Related Resources */}
              <section id="resources" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/privacy-policy-for-patreon",
                      icon: FileText,
                      title: "Privacy Policy for Patreon",
                      desc: "Creator platform compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-mailchimp",
                      icon: Mail,
                      title: "Privacy Policy for Mailchimp",
                      desc: "Email marketing privacy requirements",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-a-newsletter",
                      icon: FileText,
                      title: "Newsletter Privacy Policy",
                      desc: "General newsletter compliance guide",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                      icon: Mail,
                      title: "Email Collection Privacy",
                      desc: "When collecting emails triggers obligations",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-a-blog",
                      icon: FileText,
                      title: "Blog Privacy Policy",
                      desc: "Privacy requirements for blog publishers",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template structure",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "No Privacy Policy Risks",
                      desc: "Consequences of missing a privacy policy",
                    },
                    {
                      href: "/generate",
                      icon: ShieldCheck,
                      title: "Policy Generator",
                      desc: "Create your compliant privacy policy",
                    },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="group">
                      <div className="h-full rounded-xl border border-slate-200/80 p-4 hover:border-orange-200 hover:shadow-sm transition-all bg-white/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-orange-50 flex items-center justify-center flex-shrink-0 transition-colors">
                            <item.icon className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-slate-800 group-hover:text-orange-700 transition-colors text-sm">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
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
