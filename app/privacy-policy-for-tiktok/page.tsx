import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  Globe,
  Clock,
  BookOpen,
  Ban,
  Users,
  Scale,
  Info,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for TikTok: Creator & Business Guide (2026) | ultrafastutilities",
  description:
    "Do you need a privacy policy for TikTok? Yes, if you run TikTok Shop, collect leads, use TikTok Pixel, or link to external sites. Learn what's required for creators and businesses.",
  keywords:
    "privacy policy for tiktok, tiktok privacy policy, tiktok business privacy policy, tiktok shop privacy policy, tiktok creator privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-tiktok",
  },
  openGraph: {
    title:
      "Privacy Policy for TikTok: Creator & Business Guide (2026) | ultrafastutilities",
    description:
      "Do you need a privacy policy for TikTok? Yes, if you run TikTok Shop, collect leads, use TikTok Pixel, or link to external sites. Learn what's required for creators and businesses.",
    url: "https://ultrafastutilities.com/privacy-policy-for-tiktok",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for TikTok Creators & Businesses | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for TikTok: Creator & Business Guide (2026)",
    description:
      "Do you need a privacy policy for TikTok? Yes, if you run TikTok Shop, collect leads, use TikTok Pixel, or link to external sites.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do TikTok creators need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you engage in any commercial data collection activities. This includes running TikTok Shop, using affiliate links, directing followers to external websites, collecting email addresses through your bio link, participating in the Creator Marketplace, or receiving Live Gifts. Privacy laws are triggered by data collection, not by follower count or job title.",
      },
    },
    {
      "@type": "Question",
      name: "Does TikTok require a privacy policy for TikTok Shop sellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. TikTok Shop sellers collect customer names, shipping addresses, email addresses, and payment information through the checkout process. TikTok's Seller Center policies require sellers to comply with applicable privacy laws. Because you are the merchant receiving and using customer data for order fulfillment and marketing, you need your own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "What data does TikTok Pixel collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TikTok Pixel tracks page views, button clicks, purchase events, add-to-cart actions, form submissions, IP addresses, browser data, and device identifiers on your website. This data is sent to TikTok for ad optimization and conversion tracking. Under GDPR, installing TikTok Pixel requires cookie consent, and your privacy policy must disclose the tracking and data sharing with TikTok.",
      },
    },
    {
      "@type": "Question",
      name: "Does TikTok's privacy policy cover my business account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. TikTok's privacy policy covers data that TikTok collects through the platform, such as video views, likes, comments, and in-app behaviour. It does not cover data you collect through TikTok Shop orders, external websites, email lists, affiliate tracking, or third-party tools. You need your own privacy policy to disclose your specific data handling practices.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for TikTok Ads Manager?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. TikTok Ads Manager requires advertisers to comply with applicable data protection laws. When you run TikTok ads, the platform collects data on your behalf including click-through behaviour, conversion tracking via TikTok Pixel, and audience targeting data. TikTok can restrict or suspend ad accounts that violate its advertising policies, including missing privacy policies.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for TikTok affiliate links?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Affiliate links set tracking cookies on your followers' devices to attribute purchases back to you. These cookies collect browsing data, purchase information, and device identifiers. Under GDPR and CCPA, this constitutes personal data collection that must be disclosed in a privacy policy, regardless of whether you are the merchant or the affiliate.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I put my TikTok privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link to it from your TikTok bio (directly or through your link-in-bio page), your TikTok Ads Manager account, your TikTok Shop Seller Center, your external website footer, your email newsletter footer, and any landing pages you drive TikTok traffic to. The privacy policy should be hosted on a dedicated URL that you control.",
      },
    },
  ],
};

const tocSections = [
  { id: "when-you-need-one", title: "When You Need One" },
  { id: "data-sources", title: "TikTok Data Sources" },
  { id: "tiktok-shop", title: "TikTok Shop Requirements" },
  { id: "tiktok-pixel", title: "TikTok Pixel & Analytics" },
  { id: "tiktok-ads", title: "TikTok for Business Ads" },
  { id: "creator-marketplace", title: "Creator Fund & Marketplace" },
  { id: "link-in-bio", title: "Link-in-Bio Collection" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create One" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForTikTokPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for TikTok: What Creators and Businesses Need to Disclose",
            description:
              "Do you need a privacy policy for TikTok? Yes, if you run TikTok Shop, collect leads, use TikTok Pixel, or link to external sites. Learn what's required for creators and businesses.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-04-11",
            dateModified: "2026-04-11",
            publisher: {
              "@type": "Organization",
              name: "ultrafastutilities",
              url: "https://ultrafastutilities.com",
            },
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://ultrafastutilities.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Privacy Policy for TikTok",
                item: "https://ultrafastutilities.com/privacy-policy-for-tiktok",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Create a Privacy Policy for Your TikTok Business",
            description:
              "Six steps to create a compliant privacy policy for your TikTok business account, TikTok Shop, or creator profile.",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Audit every data collection point in your TikTok ecosystem",
                text: "List every tool and platform connected to your TikTok business: TikTok Ads Manager, TikTok Pixel, TikTok Shop Seller Center, external website, link-in-bio service, email marketing platform, affiliate networks, and analytics tools. For each, note what personal data it collects from your followers or customers.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Determine which privacy laws apply to your audience",
                text: "Check your TikTok Analytics for audience geography. If any followers are in the EU or UK, GDPR applies. Followers in California trigger CCPA and CalOPPA. TikTok's global reach means most business accounts have a geographically diverse audience, so GDPR, CCPA, and CalOPPA apply at minimum.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Map data types to purposes and lawful bases",
                text: "For each type of personal data, document the purpose and GDPR lawful basis. TikTok Shop order data for fulfillment = contract performance. TikTok Pixel tracking for ad optimization = legitimate interests (with cookie consent). Email marketing = consent. Affiliate tracking = legitimate interests. Map every data flow.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Name every third-party service and processor",
                text: "GDPR requires naming specific services. Write 'TikTok Inc. (for advertising and analytics)' not 'social media advertising partners'. Name your payment processor, email provider, affiliate networks, link-in-bio platform, and any other tools that handle personal data from your TikTok audience.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Generate your privacy policy",
                text: "Use a structured privacy policy generator that asks about your specific TikTok business setup and produces a customized document. This covers TikTok advertising, Shop orders, Pixel tracking, email marketing, and cookie consent in a single, coherent policy.",
              },
              {
                "@type": "HowToStep",
                position: 6,
                name: "Publish and link from every touchpoint",
                text: "Host your privacy policy on a dedicated URL. Link to it from your TikTok bio, TikTok Shop Seller Center, TikTok Ads Manager, external website footer, email newsletter footer, and any landing pages you drive TikTok traffic to. Set a reminder to review and update it every 6 months.",
              },
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
              <span className="text-slate-600">
                Privacy Policy for TikTok
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Globe className="w-3.5 h-3.5" />
                Social Media Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  TikTok
                </span>
                : What Creators and Businesses Need to Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                If you run TikTok Shop, use TikTok Pixel, collect leads,
                link to external websites, or participate in the Creator
                Marketplace, you are collecting personal data and need a
                privacy policy. Here is what TikTok requires, what data you
                handle, and how to create a compliant policy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For TikTok creators, TikTok Shop sellers, and businesses.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA &amp; CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-small-business"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Small Business Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                E-Commerce Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Generate My Policy
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </header>

        {/* Content Area with Sidebar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/80">
                  <p className="text-sm font-semibold text-slate-800">
                    Need a TikTok privacy policy?
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>12 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, TikTok creators and businesses need a privacy policy.</strong>{" "}
                  If you run TikTok Shop, use TikTok Pixel on your website,
                  collect leads, use TikTok Ads Manager, participate in the
                  Creator Marketplace, link to external sites from your bio,
                  or use affiliate links, you are collecting personal data.
                  Privacy laws and TikTok&apos;s own platform policies require
                  you to disclose these practices in a published privacy
                  policy.
                </p>
              </div>

              {/* ── Section 1: When You Need a Privacy Policy for TikTok ── */}
              <section id="when-you-need-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      When You Need a Privacy Policy for TikTok
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    TikTok has its own privacy policy that covers the data
                    TikTok collects through the platform. However,
                    TikTok&apos;s policy does not cover data that you, as a
                    creator or business, collect from your audience through
                    your own tools and activities. If you engage in any of
                    the following, you need your own privacy policy:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Running TikTok Shop",
                        desc: "TikTok Shop lets you sell products directly through the app. When customers purchase from your shop, you receive their names, email addresses, shipping addresses, and payment information. You are the merchant responsible for this customer data, and TikTok's Seller Center policies require compliance with applicable privacy laws.",
                      },
                      {
                        title: "Using TikTok Pixel on your website",
                        desc: "TikTok Pixel is a tracking code you install on your external website. It collects page views, button clicks, purchase events, add-to-cart actions, IP addresses, browser data, and device identifiers. This data is sent to TikTok for ad optimization and conversion tracking. Under GDPR, this requires cookie consent and disclosure in your privacy policy.",
                      },
                      {
                        title: "Collecting leads through TikTok Lead Generation",
                        desc: "TikTok Lead Generation ads collect personal data (names, email addresses, phone numbers) directly from users within the TikTok app. This data flows to your CRM or email marketing platform. Because you are the party collecting and using this data, you must have a privacy policy disclosing the collection and its purposes.",
                      },
                      {
                        title: "Linking to external websites from your bio",
                        desc: "Your TikTok bio link directs followers to external destinations. If those destinations use analytics, cookies, contact forms, or e-commerce checkout, personal data is collected when your followers arrive. Your privacy policy must cover this external data collection chain.",
                      },
                      {
                        title: "Participating in the Creator Marketplace",
                        desc: "The TikTok Creator Marketplace connects brands with creators for paid collaborations. Brands access your audience demographics and performance metrics. When you run sponsored content with tracking links, UTM parameters, or brand-specific discount codes, personal data collection occurs through those tracking mechanisms.",
                      },
                      {
                        title: "Using TikTok Ads Manager for advertising",
                        desc: "TikTok Ads Manager requires advertisers to comply with data protection laws. When you run ads, TikTok collects data on your behalf including click-through behaviour, conversion tracking, and audience targeting data. You are responsible for disclosing how this advertising data is used in your privacy policy.",
                      },
                      {
                        title: "Receiving Live Gifts or using affiliate links",
                        desc: "Live Gifts involve financial transactions where TikTok processes payment data. Affiliate links set tracking cookies on your followers' devices to attribute purchases back to you. Both activities involve personal data processing that privacy laws require you to disclose, regardless of whether you consider yourself a business or a casual creator.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 text-sm">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warning Box */}
                <div className="mt-6 pl-0 sm:pl-[52px] rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-amber-900 text-sm">
                        Without a privacy policy, you risk
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-amber-800">
                        TikTok Shop suspension, TikTok Ads account
                        restrictions, GDPR fines up to &euro;20 million,
                        CCPA penalties of $7,500 per violation, and loss of
                        customer trust. TikTok actively reviews seller and
                        advertiser compliance and can restrict your account
                        without warning. Learn the full breakdown of{" "}
                        <Link
                          href="/what-happens-without-a-privacy-policy"
                          className="font-medium text-amber-900 underline underline-offset-2 hover:text-amber-700 transition-colors"
                        >
                          what happens without a privacy policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="mt-6 pl-0 sm:pl-[52px] space-y-3">
                  {[
                    {
                      q: "Does this apply to personal TikTok accounts?",
                      a: "Personal accounts used purely for entertainment (no ads, no commerce, no lead generation, no affiliate links) generally do not need their own privacy policy because TikTok's policy covers platform-level data collection. However, the moment you engage in any commercial activity, such as selling through TikTok Shop, using affiliate links, or directing followers to an external site that collects data, the requirement applies.",
                    },
                    {
                      q: "What about TikTok accounts with a small following?",
                      a: "Privacy laws do not have a follower threshold. A TikTok creator with 500 followers who uses affiliate links has the same legal obligations as one with 5 million. If you collect, process, or facilitate the collection of personal data through any commercial activity on TikTok, you need a privacy policy regardless of your audience size.",
                    },
                  ].map((item) => (
                    <div
                      key={item.q}
                      className="rounded-lg bg-slate-50 border border-slate-200/70 px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-slate-900">
                        {item.q}
                      </p>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 2: TikTok Data Sources ── */}
              <section id="data-sources" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      TikTok Data Sources You Must Disclose
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every data type your TikTok presence might collect or facilitate.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    The data your TikTok business or creator account handles
                    depends on which features and external tools you use. Here
                    is a comprehensive breakdown by source:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Data Source
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Data Collected
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Who Controls It
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                          [
                            "TikTok Shop",
                            "Customer names, email addresses, shipping addresses, phone numbers, payment details, order history",
                            "You (controller), TikTok (processor)",
                          ],
                          [
                            "TikTok Pixel",
                            "Page views, button clicks, purchase events, cart activity, IP addresses, browser data, device IDs",
                            "Joint controller (you and TikTok)",
                          ],
                          [
                            "Lead Generation",
                            "Names, email addresses, phone numbers, custom form fields",
                            "You (controller), TikTok (processor)",
                          ],
                          [
                            "Link in bio clicks",
                            "Click analytics, referring source, geographic data, device type, timestamp",
                            "Link platform (controller), you (recipient)",
                          ],
                          [
                            "Creator Marketplace",
                            "Audience demographics, engagement metrics, performance data shared with brands",
                            "TikTok (platform), brands (recipients)",
                          ],
                          [
                            "TikTok Ads Manager",
                            "Impression data, click-through rates, conversion events, audience targeting data, Custom Audience matches",
                            "Joint controller (you and TikTok)",
                          ],
                          [
                            "Live Gifts",
                            "Transaction data, sender usernames, gift values, payment processing information",
                            "TikTok (processor), you (recipient)",
                          ],
                          [
                            "Affiliate links",
                            "Click tracking, cookie data, purchase attribution, browsing behaviour on merchant sites, commission data",
                            "Affiliate network (controller), you (affiliate), merchant (controller)",
                          ],
                        ].map(([source, data, controller]) => (
                          <tr key={source} className="hover:bg-slate-50/50">
                            <td className="px-5 py-3 font-medium text-slate-800">
                              {source}
                            </td>
                            <td className="px-5 py-3 text-slate-600">{data}</td>
                            <td className="px-5 py-3 text-slate-600">{controller}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    The critical distinction: TikTok Analytics provides
                    aggregated demographic data that TikTok controls. But
                    TikTok Shop orders, Pixel tracking, Lead Generation,
                    affiliate links, and Custom Audiences involve personal data
                    that you collect, control, or jointly control with TikTok.
                    These are what your privacy policy must cover.
                  </p>

                  {/* Did you know box 1 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          TikTok Pixel creates a joint controller relationship
                          between you and TikTok, similar to Meta Pixel. Under
                          GDPR, this means both parties are responsible for data
                          protection compliance. Your privacy policy must disclose
                          that you share website visitor data with TikTok for
                          advertising purposes, and you must obtain cookie consent
                          before the Pixel fires on your website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 3: TikTok Shop Requirements ── */}
              <section id="tiktok-shop" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      TikTok Shop Privacy Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Selling through TikTok Shop creates significant data
                      obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    TikTok Shop allows creators and businesses to sell products
                    directly through the TikTok app, in videos, live streams,
                    and through a dedicated shop tab on your profile. Whether
                    you are a direct seller or use TikTok Shop affiliates to
                    promote your products, commerce activities involve
                    substantial personal data collection that must be disclosed
                    in your privacy policy.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Order data and customer information",
                        desc: "When customers purchase from your TikTok Shop, you receive their names, email addresses, shipping addresses, phone numbers, and order details. TikTok processes the payment, but you are the merchant who fulfills the order and manages the customer relationship. Your privacy policy must explain how you handle this order data, how long you retain it, and whether you use it for marketing.",
                      },
                      {
                        title: "TikTok Shop affiliate program",
                        desc: "If you use TikTok Shop affiliates (creators who promote your products for a commission), affiliate tracking data connects creator content to customer purchases. This tracking involves cookies, click attribution, and purchase data shared between you, the affiliate creator, and TikTok. Your privacy policy must disclose this three-way data sharing arrangement.",
                      },
                      {
                        title: "Live shopping events",
                        desc: "Selling products during TikTok Live sessions generates real-time purchase data linked to viewer accounts. Viewers who purchase during a live stream share their personal and payment information with you as the merchant. If you combine live shopping data with your email marketing or CRM, your privacy policy must cover this data flow.",
                      },
                      {
                        title: "Post-purchase communications",
                        desc: "Shipping notifications, order confirmations, review requests, and marketing follow-ups all involve using customer data collected during the transaction. If you add TikTok Shop customers to an email marketing list or target them with ads, each of these uses must be disclosed in your privacy policy with the appropriate lawful basis.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 text-sm">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For comprehensive e-commerce privacy guidance, see the{" "}
                    <Link
                      href="/privacy-policy-for-ecommerce"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      e-commerce privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . If you also sell on Instagram, the{" "}
                    <Link
                      href="/privacy-policy-for-instagram"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Instagram privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    covers Meta-specific requirements.
                  </p>

                  {/* Did you know box 2 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          When a customer purchases through TikTok Shop and you
                          then add their email address to your Mailchimp or
                          Klaviyo marketing list, you have changed the purpose of
                          the data processing. The original purpose was order
                          fulfillment (contract performance under GDPR). Using it
                          for marketing requires a separate lawful basis,
                          typically consent. Your privacy policy must clearly
                          distinguish between transactional communications and
                          marketing communications, and explain the legal basis
                          for each.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 4: TikTok Pixel and Analytics ── */}
              <section id="tiktok-pixel" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      TikTok Pixel and Analytics
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Tracking website visitors for TikTok ad optimization.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    TikTok Pixel is a piece of JavaScript code you install on
                    your website to track visitor actions and send that data
                    back to TikTok for ad measurement and optimization.
                    Similar to Meta Pixel, it creates significant privacy
                    obligations that must be addressed in your privacy policy.
                  </p>

                  {[
                    {
                      title: "What TikTok Pixel tracks",
                      desc: "TikTok Pixel collects page view events, click events, form submission events, add-to-cart events, purchase events, IP addresses, user agent strings, browser cookies, and device identifiers. TikTok uses this data to measure ad performance, optimize ad delivery, build retargeting audiences, and create lookalike audiences. All of this must be disclosed.",
                    },
                    {
                      title: "Cookie consent requirements",
                      desc: "Under GDPR, TikTok Pixel sets tracking cookies that require prior consent from EU and UK visitors. Your website must have a cookie consent banner that allows visitors to accept or reject TikTok tracking before the Pixel fires. If you use TikTok Pixel without cookie consent, you are violating GDPR regardless of what your privacy policy says.",
                    },
                    {
                      title: "TikTok Events API",
                      desc: "TikTok Events API is a server-side tracking method that sends conversion data directly from your server to TikTok, bypassing browser-based cookie restrictions. While it avoids some cookie issues, it still involves sharing personal data (like hashed email addresses and phone numbers) with TikTok. Your privacy policy must disclose this server-side data sharing.",
                    },
                    {
                      title: "Custom Audiences and retargeting",
                      desc: "TikTok allows you to create Custom Audiences from your customer data (email lists, phone numbers) or from Pixel data (website visitors). When you upload customer lists, TikTok hashes the data and matches it against its user database. Your privacy policy must disclose that you share customer data with TikTok for advertising purposes.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200/80 bg-white/60 p-5"
                    >
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  {/* Mini FAQ */}
                  <div className="space-y-3">
                    {[
                      {
                        q: "Is TikTok Pixel the same as Meta Pixel?",
                        a: "They serve the same purpose (tracking website visitors for ad optimization) but are separate tools from different platforms. If you run ads on both TikTok and Meta, you need both Pixels installed, and your privacy policy must disclose both. Each creates its own joint controller relationship and cookie consent requirement.",
                      },
                      {
                        q: "Do I need TikTok Pixel if I only use TikTok Shop?",
                        a: "TikTok Pixel is for tracking visitors on your external website, not for TikTok Shop transactions. If you only sell through TikTok Shop and do not drive traffic to an external website, you do not need TikTok Pixel. However, if you also have a website where you run TikTok ads, the Pixel is essential for conversion tracking.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="rounded-lg bg-slate-50 border border-slate-200/70 px-4 py-3"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {item.q}
                        </p>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 5: TikTok for Business Advertising ── */}
              <section id="tiktok-ads" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      TikTok for Business Advertising
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Platform-level requirements for running TikTok ads.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    TikTok for Business (TikTok Ads Manager) has specific
                    requirements for advertisers that go beyond what privacy
                    laws mandate. These are contractual requirements enforced
                    through TikTok&apos;s advertising platform. Violating them
                    can result in ad account restrictions, campaign rejections,
                    or permanent account suspension.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Privacy policy requirement for advertisers",
                        desc: "TikTok's Advertising Policies require advertisers to comply with all applicable privacy laws and to have a privacy policy that discloses data collection and use practices. TikTok can reject ad campaigns or restrict your account if your privacy practices are inadequate. This applies to all ad formats including In-Feed Ads, Spark Ads, and TopView Ads.",
                      },
                      {
                        title: "Lead Generation Ads require disclosure",
                        desc: "TikTok Lead Generation ads collect personal data (names, emails, phone numbers) directly within the TikTok app. The data flows to your CRM or marketing platform. Your privacy policy must specifically describe how you will use the lead data you collect, who you share it with, and how long you retain it.",
                      },
                      {
                        title: "Spark Ads and organic content boosting",
                        desc: "Spark Ads let you boost organic TikTok posts (your own or a creator's) as paid advertisements. Once a post becomes a Spark Ad, TikTok's advertising data collection applies, including impression tracking, click tracking, and conversion measurement. Your privacy policy must cover how you use advertising data generated from boosted content.",
                      },
                      {
                        title: "Lookalike Audiences and audience targeting",
                        desc: "Creating Lookalike Audiences from your customer data or Pixel data involves TikTok analyzing the personal data you provide to find similar users. Your privacy policy should disclose that customer data may be used for advertising audience targeting through TikTok's platform.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 text-sm">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 6: Creator Fund and Marketplace ── */}
              <section id="creator-marketplace" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Creator Fund and Marketplace
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Monetization features that trigger privacy obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    TikTok offers several monetization paths for creators,
                    including the Creativity Program (formerly Creator Fund),
                    the Creator Marketplace, Live Gifts, and TikTok Shop
                    affiliates. Each of these involves data processing that
                    may require disclosure in a privacy policy.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "TikTok Creator Marketplace",
                        desc: "The Creator Marketplace is TikTok's official platform connecting brands with creators. When you join, brands can access your audience demographics, engagement rates, and content performance metrics. If you accept brand deals with tracking links, UTM parameters, or promo codes, personal data collection occurs through those tracking mechanisms. Your privacy policy should disclose that you participate in sponsored content that involves tracking.",
                      },
                      {
                        title: "TikTok Creativity Program",
                        desc: "The Creativity Program (which replaced the Creator Fund) pays creators based on video performance metrics. While TikTok handles the payment processing, participating in the program means you are engaged in commercial activity on the platform. If you also collect data through bio links, affiliate programs, or merch sales, the commercial nature of your account strengthens the argument that you need a privacy policy.",
                      },
                      {
                        title: "Live Gifts and virtual items",
                        desc: "When viewers send you Gifts during TikTok Live sessions, TikTok processes the financial transaction. You see sender usernames, gift types, and gift values. If you track your top gifters, maintain supporter lists, or offer rewards to frequent gifters, you are processing personal data linked to financial transactions. This is especially relevant if you export this data to external spreadsheets or CRM tools.",
                      },
                      {
                        title: "TikTok Shop affiliate creators",
                        desc: "As a TikTok Shop affiliate, you promote other sellers' products and earn commissions on sales. The affiliate tracking system collects click data, purchase attribution, and commission information. While the seller handles customer data directly, you are part of the tracking chain. If you also collect data through your bio link or email list, your privacy policy must cover the full scope of your data collection activities.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 text-sm">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For guidance on privacy policies for other social platforms
                    with similar creator programs, see the{" "}
                    <Link
                      href="/privacy-policy-for-youtube-channel"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      YouTube channel privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and the{" "}
                    <Link
                      href="/privacy-policy-for-facebook-page"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Facebook page privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 7: Link-in-Bio Data Collection ── */}
              <section id="link-in-bio" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Link-in-Bio Data Collection
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Your bio link is where most off-platform data collection
                      begins.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    TikTok allows one clickable link in your profile bio, and
                    most creators and businesses use it to drive traffic to
                    external destinations. Whether you link directly to your
                    website or use a link-in-bio service like Linktree, Beacons,
                    or Stan Store, this is where your followers transition from
                    the TikTok platform to your data collection ecosystem.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Link-in-bio platforms (Linktree, Beacons, Stan Store)",
                        desc: "These platforms collect click analytics (which links are clicked, when, from what device, and from what location) from every visitor. If you add email capture forms, product embeds, or payment integrations to your link page, additional personal data is collected. The link platform itself acts as a data processor, and your privacy policy must name it.",
                      },
                      {
                        title: "Personal or business website",
                        desc: "Your website likely uses Google Analytics or another analytics tool, has contact forms, sets cookies, and may have e-commerce functionality. Each of these collects personal data from the TikTok followers you send there. Your privacy policy must cover the full data collection chain from TikTok click to website interaction.",
                      },
                      {
                        title: "Email capture and lead magnets",
                        desc: "Many TikTok creators direct followers to download a free resource, sign up for a webinar, or join an email list. The sign-up form collects names and email addresses, which are then stored in your email marketing platform (Mailchimp, ConvertKit, Beehiiv, etc.). Your privacy policy must disclose the email service provider and how subscriber data is used.",
                      },
                      {
                        title: "Digital product and course pages",
                        desc: "If you sell digital products through Gumroad, Teachable, Kajabi, or Stan Store, the purchase process collects customer names, email addresses, payment details, and product access data. Course platforms also track learning progress and completion rates, which constitute personal data under GDPR.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900 text-sm">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Did you know box 3 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          A single TikTok bio link to a Stan Store page with
                          an email sign-up form and digital product checkout
                          can involve five separate data processors: TikTok
                          tracks the outbound click, Stan Store collects visit
                          analytics and processes the payment, your email
                          provider (like ConvertKit) stores the subscriber
                          data, the payment processor (like Stripe) handles
                          card details, and Stripe&apos;s sub-processors handle
                          the payment infrastructure. Under GDPR, your privacy
                          policy must acknowledge this chain of processing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 8: Common TikTok Privacy Mistakes ── */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Scale className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common TikTok Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These assumptions are widespread among TikTok creators
                      and sellers. All of them are wrong.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Mistake 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;TikTok&apos;s privacy policy covers my business&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      TikTok&apos;s privacy policy covers data that TikTok
                      collects through the platform, such as video views,
                      likes, comments, and in-app behaviour. It does not cover
                      data you collect through TikTok Shop orders, external
                      websites, email lists, affiliate tracking, or booking
                      systems. When a customer buys from your TikTok Shop and
                      you add their email to your Klaviyo list, TikTok&apos;s
                      privacy policy says nothing about how your email platform
                      handles that data. You need your own policy for that.
                    </p>
                  </div>

                  {/* Mistake 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I just make videos, I don&apos;t collect data&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      If &quot;just making videos&quot; is truly all you do (no
                      bio link, no commerce, no affiliate links, no email list),
                      then TikTok&apos;s policy does cover the platform-level
                      data. But most creators and businesses do far more. Your
                      bio link sends followers to a website with analytics. Your
                      affiliate links set tracking cookies. Your TikTok Shop
                      collects customer data. Even participating in the Creator
                      Marketplace involves sharing audience data with brands.
                      Making videos is rarely the only thing a monetized TikTok
                      account does.
                    </p>
                  </div>

                  {/* Mistake 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;TikTok Shop handles all the customer data&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      While TikTok provides the technical infrastructure for
                      TikTok Shop, you are the merchant. You receive customer
                      names, shipping addresses, email addresses, and order
                      details. You fulfill orders, handle returns, and manage
                      customer service. Under GDPR, you are the data controller
                      for this customer data. TikTok acts as a processor for
                      payment handling. The responsibility for having a privacy
                      policy and managing customer data securely falls on you,
                      not on TikTok.
                    </p>
                  </div>

                  {/* Mistake 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I&apos;m just a creator, not a business&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Privacy laws do not distinguish between
                      &quot;creators&quot; and &quot;businesses.&quot; If you
                      earn money through the Creativity Program, brand
                      partnerships, affiliate links, TikTok Shop, Live Gifts,
                      or product sales, you are engaged in commercial activity.
                      When you post a sponsored video with a tracking link, the
                      brand&apos;s tracking pixel collects data from every
                      follower who clicks. Under GDPR, you are a data
                      controller for the processing you initiate, regardless of
                      whether you call yourself a creator, influencer, or
                      business owner.
                    </p>
                  </div>

                  {/* Mistake 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Affiliate links are the brand&apos;s responsibility&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      When you share an affiliate link in your TikTok bio or
                      video description, you are the one initiating the data
                      collection. The affiliate tracking cookie is set because
                      your follower clicked your link. Under GDPR, the person
                      who initiates the processing shares responsibility. While
                      the merchant handles the purchase data and the affiliate
                      network manages the tracking infrastructure, you are the
                      party that directed your followers to the tracking
                      mechanism. Your privacy policy must disclose that you use
                      affiliate links and that tracking cookies may be set.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 9: How to Create a Privacy Policy for Your TikTok Business ── */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your TikTok Business
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Six steps from audit to publication.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Creating a privacy policy for your TikTok business or
                    creator account is straightforward once you map out your
                    data collection points. Follow these steps:
                  </p>

                  {[
                    {
                      step: "1",
                      title: "Audit every data collection point in your TikTok ecosystem",
                      desc: "List every tool and platform connected to your TikTok business: TikTok Ads Manager, TikTok Pixel, TikTok Shop Seller Center, external website, link-in-bio service, email marketing platform, affiliate networks, CRM, and any analytics tools. For each, note what personal data it collects from your followers or customers.",
                    },
                    {
                      step: "2",
                      title: "Determine which privacy laws apply to your audience",
                      desc: "Check your TikTok Analytics for audience geography. If any followers are in the EU or UK, GDPR applies. Followers in California trigger CCPA and CalOPPA. TikTok's global reach means most business accounts have a geographically diverse audience, so GDPR, CCPA, and CalOPPA apply at minimum.",
                    },
                    {
                      step: "3",
                      title: "Map data types to purposes and lawful bases",
                      desc: "For each type of personal data, document the purpose and GDPR lawful basis. TikTok Shop order data for fulfillment = contract performance. TikTok Pixel tracking for ad optimization = legitimate interests (with cookie consent required). Email marketing = consent. Affiliate tracking = legitimate interests. Map every data flow.",
                    },
                    {
                      step: "4",
                      title: "Name every third-party service and processor",
                      desc: "GDPR requires naming specific services. Write 'TikTok Inc. (for advertising and analytics)' not 'social media advertising partners'. Write 'Stripe (for payment processing)' not 'payment processor'. Name your email provider, affiliate networks, link-in-bio platform, and any other tools that handle personal data from your TikTok audience.",
                    },
                    {
                      step: "5",
                      title: "Generate your privacy policy",
                      desc: "Use a structured privacy policy generator that asks about your specific TikTok business setup and produces a customized document. This covers TikTok advertising, Shop orders, Pixel tracking, email marketing, and cookie consent in a single, coherent policy. Our generator handles this in under 60 seconds for $4.99.",
                    },
                    {
                      step: "6",
                      title: "Publish and link from every touchpoint",
                      desc: "Host your privacy policy on a dedicated URL. Link to it from your TikTok bio (or include it on your link-in-bio page), TikTok Shop Seller Center, TikTok Ads Manager, external website footer, email newsletter footer, and any landing pages you drive TikTok traffic to. Set a reminder to review and update it every 6 months.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For guidance on GDPR-specific sections, see the{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR privacy policy template
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . For small business compliance, see the{" "}
                    <Link
                      href="/privacy-policy-for-small-business"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      small business privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── CTA Section ── */}
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
                      Generate Your TikTok Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your TikTok business
                      setup and get a customized, compliant privacy policy
                      covering TikTok Shop, Pixel tracking, advertising, and
                      email collection in under 60 seconds.
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
                      <span>GDPR &amp; CCPA compliant</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        GDPR
                      </Link>{" "}
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── FAQ Section ── */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-8">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <HelpCircle className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="pl-0 sm:pl-[52px] space-y-6">
                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do TikTok creators need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes, if you engage in any commercial data collection
                      activities. This includes running TikTok Shop, using
                      affiliate links, directing followers to external websites,
                      collecting email addresses, participating in the Creator
                      Marketplace, or receiving Live Gifts. Privacy laws (
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , CCPA, CalOPPA) are triggered by data collection, not by
                      job title or follower count.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does TikTok require a privacy policy for TikTok Shop sellers?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. TikTok Shop sellers collect customer names, shipping
                      addresses, email addresses, and payment information through
                      the checkout process. TikTok&apos;s Seller Center policies
                      require sellers to comply with applicable privacy laws.
                      Because you are the merchant receiving and using customer
                      data, you need your own privacy policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What data does TikTok Pixel collect?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      TikTok Pixel tracks page views, button clicks, purchase
                      events, add-to-cart actions, form submissions, IP
                      addresses, browser data, and device identifiers on your
                      website. This data is sent to TikTok for ad optimization
                      and conversion tracking. Under GDPR, this requires cookie
                      consent, and your privacy policy must disclose the
                      tracking and data sharing with TikTok.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does TikTok&apos;s privacy policy cover my business account?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      No. TikTok&apos;s privacy policy covers data that TikTok
                      collects through the platform. It does not cover data you
                      collect through TikTok Shop orders, external websites,
                      email lists, affiliate tracking, or third-party tools. You
                      need your own privacy policy to disclose your specific data
                      handling practices outside the platform.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do I need a privacy policy for TikTok Ads Manager?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. TikTok Ads Manager requires advertisers to comply
                      with applicable data protection laws. When you run TikTok
                      ads, the platform collects data on your behalf including
                      click-through behaviour, conversion tracking via TikTok
                      Pixel, and audience targeting data. TikTok can restrict
                      your ad account for policy violations including inadequate
                      privacy practices.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do I need a privacy policy for TikTok affiliate links?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. Affiliate links set tracking cookies on your
                      followers&apos; devices to attribute purchases back to you.
                      These cookies collect browsing data, purchase information,
                      and device identifiers. Under{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      and CCPA, this constitutes personal data collection that
                      must be disclosed in a privacy policy, regardless of
                      whether you are the merchant or the affiliate.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Where should I put my TikTok privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Link to it from your TikTok bio (directly or through
                      your link-in-bio page), your TikTok Ads Manager account,
                      your TikTok Shop Seller Center, your external website
                      footer, your email newsletter footer, and any landing
                      pages you drive TikTok traffic to. The privacy policy
                      should be hosted on a dedicated URL that you control, not
                      as a social media post or pinned video.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Related Resources ── */}
              <section id="resources" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/privacy-policy-for-instagram",
                      icon: Globe,
                      title: "Privacy Policy for Instagram",
                      desc: "Instagram business account compliance",
                    },
                    {
                      href: "/privacy-policy-for-youtube-channel",
                      icon: Globe,
                      title: "Privacy Policy for YouTube",
                      desc: "YouTube channel compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-facebook-page",
                      icon: Globe,
                      title: "Privacy Policy for Facebook",
                      desc: "Facebook page compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      icon: Globe,
                      title: "E-Commerce Privacy Policy",
                      desc: "Online store compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: FileText,
                      title: "Small Business Privacy Policy",
                      desc: "Compliance guide for small businesses",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU and UK compliance template",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without One",
                      desc: "Fines, platform bans, and legal risks",
                    },
                    {
                      href: "/generate",
                      icon: BookOpen,
                      title: "Generate Your Privacy Policy",
                      desc: "Customized policy in under 60 seconds",
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
