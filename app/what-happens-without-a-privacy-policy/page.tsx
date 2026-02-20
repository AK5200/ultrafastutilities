import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  Ban,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Gavel,
  DollarSign,
  Store,
  Globe,
  Clock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "What Happens Without a Privacy Policy? Fines, Lawsuits & Risks | ultrafastutilities",
  description:
    "No privacy policy on your website or app? Learn the real consequences: GDPR fines up to €20M, CCPA lawsuits, app store removal, and lost customer trust. Fix it in 60 seconds.",
  keywords:
    "no privacy policy consequences, privacy policy required by law, website without privacy policy, privacy policy fines, GDPR penalty no privacy policy, do I need a privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/what-happens-without-a-privacy-policy",
  },
  openGraph: {
    title: "What Happens Without a Privacy Policy? Fines, Lawsuits & Risks | ultrafastutilities",
    description: "No privacy policy on your website or app? Learn the real consequences: GDPR fines up to €20M, CCPA lawsuits, app store removal, and lost customer trust. Fix it in 60 seconds.",
    url: "https://ultrafastutilities.com/what-happens-without-a-privacy-policy",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "What Happens Without a Privacy Policy? Fines, Lawsuits & Risks | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Happens Without a Privacy Policy? Fines, Lawsuits & Risks | ultrafastutilities",
    description: "No privacy policy on your website or app? Learn the real consequences: GDPR fines up to €20M, CCPA lawsuits, app store removal, and lost customer trust. Fix it in 60 seconds.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "legal-penalties", title: "Legal Penalties & Fines" },
  { id: "platform-consequences", title: "Platform Consequences" },
  { id: "business-damage", title: "Business Damage" },
  { id: "who-needs-one", title: "Who Needs a Privacy Policy" },
  { id: "common-excuses", title: "Common Excuses Debunked" },
  { id: "generate", title: "Fix It Now" },
  { id: "resources", title: "Related Resources" },
];

export default function WhatHappensWithoutPrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What Happens Without a Privacy Policy? Fines, Lawsuits & Risks | ultrafastutilities",
            description: "No privacy policy on your website or app? Learn the real consequences: GDPR fines up to €20M, CCPA lawsuits, app store removal, and lost customer trust. Fix it in 60 seconds.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2025-01-01",
            dateModified: "2026-02-20",
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
              { "@type": "ListItem", position: 2, name: "What Happens Without a Privacy Policy", item: "https://ultrafastutilities.com/what-happens-without-a-privacy-policy" },
            ],
          }),
        }}
      />
      <ReadingProgress />
      <main className="min-h-screen">
        {/* Hero Section */}
        <header className="relative overflow-hidden border-b border-slate-200/60">
          <div className="absolute inset-0 bg-gradient-to-b from-red-50/60 via-white to-white" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-red-100/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-orange-50/40 blur-3xl" />
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
              <span className="text-slate-600">
                What Happens Without a Privacy Policy
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/80 text-red-700 text-xs font-medium mb-6">
                <AlertTriangle className="w-3.5 h-3.5" />
                Legal Risk
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                What Happens Without a{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  Privacy Policy?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Running a website or app without a privacy policy isn&apos;t just
                careless: it&apos;s a legal liability. Here&apos;s what you&apos;re
                actually risking, and how to fix it in under 60 seconds.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                8 min read &middot; Updated February 2026
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                GDPR Template
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/ccpa-privacy-policy-example"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                CCPA Example
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Generate Policy Now
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
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-red-50 to-slate-50 border border-red-100/80">
                  <p className="text-sm font-semibold text-slate-800">
                    Don&apos;t risk it
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Get protected in 60 seconds
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
                <span>Last updated: February 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>8 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>
              {/* Section 1: Legal Penalties & Fines */}
              <section id="legal-penalties" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-100 text-red-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Legal Penalties &amp; Fines
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Privacy regulations aren&apos;t suggestions. They carry
                      real financial teeth.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-[52px] space-y-6">
                  <p className="text-base leading-7 text-slate-700">
                    Every major privacy law in the world requires businesses
                    that collect personal data to publish a privacy policy. If
                    you collect names, emails, IP addresses, cookies, or payment
                    info, and if you don&apos;t disclose how you handle that data,
                    you&apos;re already in violation.
                  </p>

                  {/* GDPR */}
                  <div className="rounded-xl border border-red-200/60 p-5">
                    <div className="flex items-start gap-3">
                      <Gavel className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          <Link
                            href="/gdpr-privacy-policy-template"
                            className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                          >
                            GDPR
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                          </Link>{" "}
                          : Up to &euro;20 Million or 4% of Global Revenue
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          The EU General Data Protection Regulation is the most
                          aggressively enforced privacy law on the planet. If
                          your website is accessible to EU visitors (which
                          means virtually every website), you&apos;re subject to
                          it. Without a privacy policy that includes lawful
                          basis disclosures, data retention periods, and user
                          rights procedures, you face fines of up to &euro;20
                          million or 4% of your annual global revenue, whichever
                          is higher. In 2023 alone, GDPR enforcement actions
                          exceeded &euro;2 billion across the EU.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CCPA */}
                  <div className="rounded-xl border border-red-200/60 p-5">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          <Link
                            href="/ccpa-privacy-policy-example"
                            className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                          >
                            CCPA/CPRA
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                          </Link>{" "}
                          : $7,500 Per Intentional Violation
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          California&apos;s privacy laws apply to any business
                          that handles data from California residents. Failing
                          to disclose data collection practices carries fines of
                          $2,500 per unintentional violation and $7,500 per
                          intentional one. With millions of page views, that
                          adds up fast. On top of that, consumers can sue
                          directly for data breaches, ranging from $100 to $750 per
                          incident, per consumer.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CalOPPA & Other Laws */}
                  <div className="rounded-xl border border-red-200/60 p-5">
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          CalOPPA, PIPEDA, LGPD &amp; More
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          California&apos;s CalOPPA was one of the first laws to
                          require a privacy policy for any site collecting data
                          from California users, meaning almost every website.
                          Canada&apos;s PIPEDA, Brazil&apos;s LGPD,
                          Australia&apos;s Privacy Act, and the UK&apos;s Data
                          Protection Act all impose similar requirements. If you
                          operate online, at least one of these laws applies to
                          you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Platform Consequences */}
              <section id="platform-consequences" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-100 text-red-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Platform Consequences
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Even if regulators don&apos;t come knocking, the
                      platforms you depend on will.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-[52px] space-y-4">
                  {/* App Store Removal */}
                  <div className="rounded-xl border border-orange-200/60 p-5">
                    <div className="flex items-start gap-3">
                      <Store className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          App Store &amp; Google Play Removal
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Both Apple and Google require a{" "}
                          <Link
                            href="/privacy-policy-for-mobile-apps"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            privacy policy for mobile apps
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>{" "}
                          before listing. Apple&apos;s App Store Review
                          Guidelines and Google Play&apos;s Developer Policy
                          both mandate a valid privacy policy URL. Submit
                          without one, and your app gets rejected. Already
                          listed without one? It can be pulled at any time.
                          No warning.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ad Account Suspension */}
                  <div className="rounded-xl border border-orange-200/60 p-5">
                    <div className="flex items-start gap-3">
                      <Ban className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Google Ads &amp; Meta Ads Suspension
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Running ads without a privacy policy? Google Ads
                          requires advertisers to comply with its{" "}
                          <Link
                            href="/cookie-policy-for-websites"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            consent and cookie
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>{" "}
                          policies, which means having a published privacy
                          policy on your landing pages. Meta (Facebook &amp;
                          Instagram) enforces the same requirement. Violations
                          lead to ad disapprovals, account restrictions, or
                          permanent bans.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Third-Party Integrations */}
                  <div className="rounded-xl border border-orange-200/60 p-5">
                    <div className="flex items-start gap-3">
                      <Ban className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Payment Processors &amp; SaaS Tools
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Stripe, PayPal, and most payment gateways require
                          merchants to have a published privacy policy. So do{" "}
                          <Link
                            href="/privacy-policy-for-saas"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            SaaS platforms
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>{" "}
                          and tools like Mailchimp, HubSpot, and Google
                          Analytics. Without one, you risk account suspension or
                          termination of service, cutting off revenue and
                          customer communication overnight.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Shopify / E-commerce */}
                  <div className="rounded-xl border border-orange-200/60 p-5">
                    <div className="flex items-start gap-3">
                      <Store className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          E-commerce Platform Requirements
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          <Link
                            href="/privacy-policy-for-shopify"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            Shopify
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                          ,{" "}
                          <Link
                            href="/privacy-policy-for-ecommerce"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            WooCommerce, and other e-commerce platforms
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>{" "}
                          strongly recommend, and in some cases require, a
                          privacy policy before processing customer orders.
                          Missing one can also disqualify you from marketplace
                          features, trust badges, and partner integrations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Business Damage */}
              <section id="business-damage" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-100 text-red-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Business Damage
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Beyond fines and platform bans, the softer costs hit
                      just as hard.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-[52px] space-y-6">
                  <p className="text-base leading-7 text-slate-700">
                    Privacy-aware consumers are no longer a niche. Surveys
                    consistently show that over 80% of users are more likely to
                    trust and buy from a business that clearly explains how
                    their data is handled. No privacy policy sends a clear
                    message: &quot;We don&apos;t take your data seriously.&quot;
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-base leading-7">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-slate-700">
                        <strong className="text-slate-900 font-medium">
                          Lost customer trust:
                        </strong>{" "}
                        Users who can&apos;t find a privacy policy will abandon
                        sign-up forms, checkout flows, and contact pages.
                        They&apos;ve been trained to look for it, and its
                        absence is a red flag.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 text-base leading-7">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-slate-700">
                        <strong className="text-slate-900 font-medium">
                          Failed partnerships &amp; contracts:
                        </strong>{" "}
                        B2B partners, enterprise clients, and investors run
                        compliance checks. No privacy policy? That&apos;s a
                        dealbreaker during due diligence. You won&apos;t even
                        make it to the proposal stage.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 text-base leading-7">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-slate-700">
                        <strong className="text-slate-900 font-medium">
                          SEO and credibility impact:
                        </strong>{" "}
                        Google&apos;s E-E-A-T guidelines (Experience, Expertise,
                        Authoritativeness, Trust) factor into rankings. A
                        missing privacy policy undermines the trust signal.
                        Sites that demonstrate transparency with proper legal
                        pages tend to rank more favorably for commercial queries.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 text-base leading-7">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-slate-700">
                        <strong className="text-slate-900 font-medium">
                          No defense in a data breach:
                        </strong>{" "}
                        If a breach happens and you have no published privacy
                        policy, you lose any argument that users were informed
                        about data handling practices. Courts and regulators
                        treat this as negligence.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Who Needs a Privacy Policy */}
              <section id="who-needs-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Who Actually Needs a Privacy Policy?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Short answer: if you have a website or app, you need one.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    If your site or app does any of the following, you are
                    legally required to have a privacy policy:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        text: "Uses Google Analytics, Facebook Pixel, or any analytics tool",
                        link: "/cookie-policy-for-websites",
                        linkText: "cookies",
                      },
                      {
                        text: "Has a contact form, sign-up form, or newsletter subscription",
                        link: "/privacy-policy-for-websites",
                        linkText: "website privacy policy",
                      },
                      {
                        text: "Processes payments or collects billing information",
                        link: "/privacy-policy-for-ecommerce",
                        linkText: "e-commerce policy",
                      },
                      {
                        text: "Runs on Shopify, WooCommerce, or any e-commerce platform",
                        link: "/privacy-policy-for-shopify",
                        linkText: "Shopify policy",
                      },
                      {
                        text: "Is available as a mobile app on any app store",
                        link: "/privacy-policy-for-mobile-apps",
                        linkText: "mobile app policy",
                      },
                      {
                        text: "Offers a SaaS product or handles user accounts",
                        link: "/privacy-policy-for-saas",
                        linkText: "SaaS policy",
                      },
                      {
                        text: "Is accessible to visitors from the EU, UK, California, Canada, or Brazil",
                        link: "/gdpr-privacy-policy-template",
                        linkText: "GDPR template",
                      },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-700">
                          {item.text}{" "}
                          <span className="text-slate-400">-</span>{" "}
                          <Link
                            href={item.link}
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            {item.linkText}
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <p className="text-base leading-7 text-slate-700">
                      <strong className="text-slate-900 font-medium">
                        The bottom line:
                      </strong>{" "}
                      Even a simple blog with Google Analytics and a contact
                      form collects personal data (IP addresses, cookies, email
                      addresses). That&apos;s enough to trigger privacy policy
                      requirements under{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      ,{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        CCPA
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , and CalOPPA. The cost of not having one is
                      significantly higher than the 60 seconds it takes to
                      generate one.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Common Excuses Debunked */}
              <section id="common-excuses" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-red-100 text-red-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Excuses That Don&apos;t Hold Up
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      We hear these all the time. None of them protect you.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-[52px] space-y-6">
                  {/* Excuse 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;My site is too small to need one&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Size doesn&apos;t matter; data collection does. A
                      personal blog with Google Analytics and a contact form
                      collects IP addresses, browser data, and email addresses.
                      That triggers{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      and CalOPPA requirements regardless of traffic. A site
                      with 10 visitors a month and a site with 10 million are
                      held to the same standard.
                    </p>
                  </div>

                  {/* Excuse 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I don&apos;t collect any data&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      You almost certainly do. You just might not realize it.
                      Your hosting provider logs IP addresses. Your analytics
                      tool sets{" "}
                      <Link
                        href="/cookie-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        cookies
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      . Embedded YouTube videos, social share buttons, and fonts
                      loaded from Google all transmit user data to third
                      parties. If any of these exist on your site, you&apos;re
                      collecting data.
                    </p>
                  </div>

                  {/* Excuse 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I&apos;ll add one later when I get bigger&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      The legal obligation starts the moment you collect data,
                      not when you hit a growth milestone. Every day without a{" "}
                      <Link
                        href="/privacy-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        privacy policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      is a day of accumulated liability. If a complaint is filed
                      or a breach occurs during that gap period, &quot;I was
                      planning to add one&quot; is not a defense.
                    </p>
                  </div>

                  {/* Excuse 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I only target users in one country&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      The internet doesn&apos;t have borders. If someone from
                      the EU, California, or Brazil visits your site, and
                      they will, their local privacy laws apply to you.{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      applies to any website that processes data of EU
                      residents, regardless of where the business is based.{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        CCPA
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      works the same way for California residents.
                    </p>
                  </div>

                  {/* Excuse 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I&apos;ll just copy one from another site&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      A copied privacy policy is often worse than none at all.
                      It will describe data practices that don&apos;t match
                      yours, reference services you don&apos;t use, and omit
                      disclosures specific to your actual setup. This creates
                      legal exposure because you&apos;re actively
                      misrepresenting your data practices. Learn more about{" "}
                      <Link
                        href="/chatgpt-privacy-policy-risks"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        risks of generic policies
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      and why a{" "}
                      <Link
                        href="/free-vs-paid-privacy-policy-generator"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        structured generator
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      produces a more accurate document.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* CTA Section */}
              <section id="generate" className="scroll-mt-24">
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
                      Fix It Right Now
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Generate a professionally structured privacy policy
                      tailored to your business. No legal jargon guesswork.
                      60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Structured for GDPR &amp; CCPA</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        GDPR
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        CCPA
                      </Link>{" "}
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
                      href: "/gdpr-privacy-policy-template",
                      icon: FileText,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template structure",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: FileText,
                      title: "CCPA Privacy Policy Example",
                      desc: "California privacy rights and disclosures",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Complete website compliance guide",
                    },
                    {
                      href: "/chatgpt-privacy-policy-risks",
                      icon: AlertTriangle,
                      title: "ChatGPT Privacy Policy Risks",
                      desc: "Why generic AI policies fall short",
                    },
                    {
                      href: "/free-vs-paid-privacy-policy-generator",
                      icon: FileText,
                      title: "Free vs Paid Generators",
                      desc: "Compare tools and choose the right one",
                    },
                    {
                      href: "/generate",
                      icon: ShieldCheck,
                      title: "Policy Generator",
                      desc: "Create your compliant privacy policy",
                    },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="group">
                      <div className="h-full rounded-xl border border-slate-200/80 p-4 hover:border-blue-200 hover:shadow-sm transition-all bg-white/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors">
                            <item.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
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
