import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Ban,
  Info,
  Scale,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do I Need a Privacy Policy for Google Ads? Yes (2026) | ultrafastutilities",
  description:
    "Yes, running Google Ads requires a privacy policy on your landing page. Google's advertising policies mandate it. Learn what to include for remarketing, conversion tracking, and customer match.",
  keywords:
    "do i need a privacy policy for google ads, google ads privacy policy, google ads landing page privacy policy, google ads requirements, google advertising privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-google-ads",
  },
  openGraph: {
    title:
      "Do I Need a Privacy Policy for Google Ads? Yes (2026) | ultrafastutilities",
    description:
      "Yes, running Google Ads requires a privacy policy on your landing page. Google's advertising policies mandate it. Learn what to include for remarketing, conversion tracking, and customer match.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-google-ads",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Do I Need a Privacy Policy for Google Ads | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do I Need a Privacy Policy for Google Ads? Yes (2026)",
    description:
      "Yes, running Google Ads requires a privacy policy on your landing page. Google's advertising policies mandate it.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Google Ads require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google Ads policies require advertisers to have a privacy policy on their landing pages. This applies to all campaign types including Search, Display, Shopping, Video, and Performance Max. Your policy must disclose data collection practices, cookie usage for remarketing, and how conversion tracking works. Without a compliant privacy policy, your ads may be disapproved or your account suspended.",
      },
    },
    {
      "@type": "Question",
      name: "What privacy policy do I need for Google Ads remarketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Google Ads remarketing, your privacy policy must disclose that you use remarketing cookies to show ads to users who have previously visited your website. You must explain that third-party vendors, including Google, use cookies to serve ads based on past visits. You must also provide a link to Google Ad Settings so users can opt out of personalized advertising, and reference the Network Advertising Initiative opt-out page.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for Google Ads conversion tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you use Google Ads conversion tracking, your privacy policy must disclose that you use tracking technologies to measure ad performance. You must explain that a cookie is placed when a user clicks on your ad and visits your website, and that this cookie is used to track conversions such as purchases or form submissions. Users must be informed about how this data is collected and used.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I run Google Ads without a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Running Google Ads without a privacy policy can result in ad disapprovals, account warnings, or account suspension. Google reviews landing pages for policy compliance, and a missing or inadequate privacy policy is a common reason for disapproval. Beyond Google's policies, you also face legal risks under GDPR, CCPA, and other privacy laws that require disclosure of data collection practices associated with advertising.",
      },
    },
    {
      "@type": "Question",
      name: "Does Google Ads Customer Match require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Customer Match requires you to have collected customer data (email addresses, phone numbers, or mailing addresses) with proper consent. Your privacy policy must disclose that you share customer data with Google for targeted advertising purposes. You must also comply with Google's Customer Match policy, which requires that data was collected directly from customers who consented to receiving marketing communications.",
      },
    },
    {
      "@type": "Question",
      name: "Is a generic privacy policy sufficient for Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A generic privacy policy that does not mention Google Ads, remarketing cookies, conversion tracking, or user opt-out options will not satisfy Google's advertising policies. Google requires specific disclosures about how advertising data is collected and used. Your policy must name Google as a third-party vendor, describe cookie usage for ad serving, and provide opt-out mechanisms for personalized advertising.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a privacy policy for Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest approach is to use a privacy policy generator that includes Google Ads-specific disclosures. Indicate that your site uses Google Ads with remarketing, conversion tracking, and any other features you use. The generator will produce a policy that includes required cookie disclosures, opt-out links, data collection explanations, and GDPR/CCPA compliance sections. This typically takes under five minutes.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Google Ads-Compliant Privacy Policy",
  description:
    "Follow these five steps to create a privacy policy that meets Google Ads requirements and complies with GDPR and CCPA.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your advertising data collection",
      text: "Document every type of data your Google Ads campaigns collect. This includes conversion tracking data from clicks and form submissions, remarketing cookies that track site visitors, Customer Match data from email lists, and any enhanced conversions data. Also list other advertising platforms and analytics tools you use alongside Google Ads.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Add Google Ads cookie and tracking disclosures",
      text: "Your privacy policy must explicitly state that you use Google Ads and related tracking technologies. Disclose that Google uses cookies for remarketing and conversion tracking. Mention that third-party vendors, including Google, show your ads on sites across the internet based on past visits. Explain that advertising cookies enable personalized ad delivery.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Include opt-out information and links",
      text: "Provide users with clear instructions on how to opt out of personalized advertising. Link to Google Ad Settings where users can control ad personalization. Also link to the Network Advertising Initiative opt-out page for broader third-party cookie control. Explain that opting out means users will still see ads, but they will not be personalized.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add GDPR and CCPA compliance sections",
      text: "If you have visitors from the EU, UK, or California, add required legal disclosures. GDPR requires consent before setting advertising cookies, disclosure of data processing purposes, and user rights information. CCPA requires disclosure of data categories collected and the right to opt out of data sales. These sections are required by law regardless of Google Ads.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Publish on your landing pages and website",
      text: "Place a link to your privacy policy in the footer of every landing page used in Google Ads campaigns. Google reviews landing pages for policy compliance, so the link must be visible and the page must load correctly. Also link it from your main website footer, cookie consent banner, and any data collection forms.",
    },
  ],
};

const tocSections = [
  { id: "short-answer", title: "The Short Answer" },
  { id: "google-ads-policy", title: "Google Ads Policy Requirements" },
  { id: "landing-page-requirements", title: "Landing Page Requirements" },
  { id: "conversion-tracking", title: "Conversion Tracking" },
  { id: "remarketing", title: "Remarketing" },
  { id: "customer-match", title: "Customer Match" },
  { id: "performance-max", title: "Performance Max" },
  { id: "common-myths", title: "Common Myths" },
  { id: "how-to-create", title: "How to Create a Compliant Policy" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function DoINeedAPrivacyPolicyForGoogleAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do I Need a Privacy Policy for Google Ads? Yes (2026)",
            description:
              "Yes, running Google Ads requires a privacy policy on your landing page. Google's advertising policies mandate it. Learn what to include for remarketing, conversion tracking, and customer match.",
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
                name: "Do I Need a Privacy Policy for Google Ads?",
                item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-google-ads",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
                Privacy Policy for Google Ads
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-700 text-xs font-medium mb-6">
                <AlertTriangle className="w-3.5 h-3.5" />
                Google Ads Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Google Ads?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes. Google Ads policies require every advertiser to have a
                privacy policy on their landing pages. This applies to all
                campaign types, including Search, Display, Shopping, Video,
                and Performance Max. Without a compliant policy, your ads
                will be disapproved and your account may be suspended.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For advertisers, marketers, and business owners running
                Google Ads campaigns who need to stay compliant with
                Google requirements, GDPR, and CCPA.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA &amp;
                CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/do-i-need-a-privacy-policy-for-google-adsense"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Google AdSense Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/do-i-need-a-privacy-policy-for-a-landing-page"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Landing Page Guide
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
                    Need an Ads-compliant policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Includes all Google-required disclosures
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
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>12 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, Google Ads requires a privacy policy.</strong>{" "}
                  Google&apos;s advertising policies mandate that all
                  advertisers have a privacy policy on their landing pages
                  that discloses data collection practices, cookie usage for
                  remarketing and conversion tracking, and how user data is
                  shared with third parties. Without a compliant policy, your
                  ads will be disapproved and your account may face
                  suspension.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Google Ads is the largest digital advertising platform in the
                world, used by millions of businesses to drive traffic, leads,
                and sales. Whether you are running Search campaigns, Display
                ads, Shopping listings, YouTube video ads, or Performance Max
                campaigns, Google requires you to comply with its advertising
                policies. One of the most fundamental requirements is having
                a privacy policy on your landing pages.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                This is not a recommendation. Google explicitly states in its
                advertising policies that landing pages must include a
                privacy policy when you collect personal information or use
                tracking technologies like remarketing pixels and conversion
                tags. Failing to comply can result in ad disapprovals,
                limited ad serving, or full account suspension.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly what Google Ads requires in your
                privacy policy, how different features like remarketing,
                conversion tracking, Customer Match, and Performance Max
                each add specific requirements, and how to create a fully
                compliant policy in minutes. We also cover the additional
                legal requirements from GDPR and CCPA that apply to most
                advertisers.
              </p>

              {/* Section 1: The Short Answer */}
              <section id="short-answer" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Short Answer: Yes, You Need a Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Google Ads requires a privacy policy on your landing pages
                  whenever you collect personal information from users or use
                  tracking technologies. Since virtually every Google Ads
                  advertiser uses at least conversion tracking, this
                  requirement applies to nearly everyone running ads on the
                  platform.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Google&apos;s advertising policies page states: &quot;If you
                  collect, use, or disclose personal information through your
                  site or app, you must disclose how you do so.&quot; This
                  means any landing page that collects form submissions,
                  tracks conversions, uses remarketing pixels, or employs
                  Customer Match audiences must have a visible privacy
                  policy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The requirement applies regardless of business size. A
                  local plumber running a $500/month Search campaign faces
                  the same policy requirements as an enterprise brand spending
                  millions per month. Google does not differentiate based on
                  ad spend or company size.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Happens Without a Privacy Policy
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Google reviews landing pages for policy compliance both
                  automatically and through manual reviews. If your landing
                  page lacks a privacy policy, several things can happen. Your
                  individual ads may be disapproved with a policy violation
                  notice. Your remarketing lists may be disabled. Your
                  Customer Match audiences may be rejected. In severe cases,
                  your entire Google Ads account can be suspended for
                  repeated policy violations.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  The ad disapproval process can be frustrating because it
                  halts your campaigns while you fix the issue and wait for
                  Google to re-review your landing page. Advertisers who set
                  up a compliant privacy policy before launching their first
                  campaign avoid this disruption entirely.
                </p>

                {/* Inline mini-FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need a privacy policy even if I only run Search ads?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Even basic Search campaigns typically use
                      conversion tracking, which places cookies on your
                      landing page visitors. Google requires disclosure of
                      this tracking in a privacy policy. Additionally, if
                      your landing page collects any form data (contact
                      forms, email sign-ups), a privacy policy is mandatory.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does the privacy policy need to be on the landing
                      page itself?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      The privacy policy does not need to be displayed in
                      full on the landing page, but there must be a visible
                      link to it. Most advertisers place a privacy policy
                      link in the footer of their landing page. Google
                      expects the link to be accessible without requiring
                      users to scroll excessively or navigate away from the
                      page.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Google Ads Policy Requirements */}
              <section id="google-ads-policy" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Google Ads Policy Requirements for Privacy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Google Ads has several overlapping policies that require
                  privacy disclosures. Understanding each one helps you
                  build a policy that covers all scenarios. Here are the
                  key policy areas that affect your privacy requirements.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  1. Data Collection and Use Policy
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Google requires that advertisers who collect personal
                  information through their landing pages disclose what
                  data is collected, how it is used, and who it is shared
                  with. This applies to form submissions, email sign-ups,
                  purchase data, and any other personally identifiable
                  information gathered from ad clicks.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  2. Personalized Advertising Policy
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  If you use any form of personalized advertising (which
                  includes remarketing, similar audiences, and Customer
                  Match), Google requires additional disclosures. Your
                  privacy policy must explain that you use cookies and
                  tracking technologies for personalized ad delivery,
                  that third-party vendors including Google serve ads
                  based on past website visits, and that users can opt
                  out of personalized ads through Google Ad Settings.
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
                        Google Ads processes over 8.5 billion searches per
                        day, and remarketing reaches over 90% of internet
                        users through the Google Display Network. Every
                        remarketing impression requires that the original
                        landing page had a compliant privacy policy
                        disclosing the use of tracking cookies. A single
                        missing privacy policy can affect the compliance of
                        millions of ad impressions.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  3. Consent Requirements
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Google requires advertisers to obtain appropriate consent
                  from users before collecting their data, particularly in
                  regions with strict privacy laws. In the European Economic
                  Area and the UK, Google requires the use of a
                  Google-certified Consent Management Platform (CMP) to
                  obtain consent for advertising cookies. Without proper
                  consent mechanisms, Google may limit your ad serving in
                  those regions.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  4. Restricted Data Processing
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  For users in California and other US states with privacy
                  laws, Google offers restricted data processing mode. When
                  enabled, Google limits how it uses data from those users.
                  Your privacy policy should explain how you handle data
                  from users in these jurisdictions and disclose your use of
                  restricted data processing where applicable.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  5. Enhanced Conversions
                </h3>
                <p className="text-slate-700 leading-7 mb-6">
                  If you use enhanced conversions, you are sending hashed
                  first-party data (like email addresses or phone numbers)
                  to Google to improve conversion measurement accuracy. Your
                  privacy policy must disclose this data sharing. Google
                  requires that you have a legal basis for sharing this
                  data and that users are informed about it in your privacy
                  policy.
                </p>

                {/* Summary table of requirements */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Google Ads Feature
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Privacy Policy Requirement
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Risk If Missing
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Conversion Tracking
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose cookie use for measuring ad performance
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Ad disapproval
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Remarketing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose remarketing cookies and opt-out options
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Lists disabled, ads disapproved
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Customer Match
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose data sharing with Google for targeting
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Audiences rejected
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Enhanced Conversions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose hashed data sharing for conversion tracking
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Feature disabled
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Performance Max
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          All of the above, plus cross-channel tracking disclosure
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Campaign limited or suspended
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Landing Page Requirements */}
              <section id="landing-page-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Landing Page Privacy Policy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Google reviews your landing pages as part of its ad
                  approval process. A landing page that does not meet
                  Google&apos;s policy requirements will result in ad
                  disapprovals. Here is what Google looks for on your
                  landing pages regarding privacy.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  First, Google expects a visible link to your privacy
                  policy on the landing page. This is typically placed in
                  the footer. The link must lead to a page that loads
                  correctly and contains your actual privacy policy, not a
                  placeholder or an error page.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Second, if your landing page includes a form that collects
                  personal information (name, email, phone number, address),
                  you must have a privacy policy that explains how that data
                  will be used. Google considers this a hard requirement for
                  any lead generation landing page.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Third, the privacy policy must be hosted on the same
                  domain as your landing page. If your ads point to
                  example.com/offer, your privacy policy should be at
                  example.com/privacy-policy, not on a completely different
                  domain.
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
                        Google&apos;s landing page review process is
                        increasingly automated. Google uses machine learning
                        to scan landing pages for policy compliance,
                        including checking for the presence of a privacy
                        policy link. Pages that lack a visible privacy
                        policy link are flagged automatically, which means
                        you can receive ad disapprovals within hours of
                        launching a campaign rather than waiting for a
                        manual review.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Beyond these basics, Google also checks that your landing
                  page is functional, loads quickly, and provides a good
                  user experience. A broken privacy policy link or a page
                  that takes too long to load can trigger the same
                  disapproval as having no policy at all. Make sure your
                  privacy policy page is fast, mobile-friendly, and
                  accessible.
                </p>
              </section>

              {/* Section 4: Conversion Tracking */}
              <section id="conversion-tracking" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Conversion Tracking and Privacy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Google Ads conversion tracking is one of the most widely
                  used features on the platform. It works by placing a
                  cookie on a user&apos;s device when they click your ad.
                  When that user later completes a conversion action (like
                  making a purchase or filling out a form), the cookie
                  allows Google to attribute that conversion to your ad
                  click.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Because conversion tracking involves placing cookies and
                  collecting data about user behavior on your website, your
                  privacy policy must disclose this practice. Specifically,
                  you need to explain that you use Google Ads conversion
                  tracking, that a cookie is set when a user clicks on an
                  ad and visits your site, that this cookie is used to track
                  whether the user completes a specific action, and that
                  conversion data is shared with Google to measure ad
                  performance.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  If you use the Google tag (gtag.js) or Google Tag Manager
                  to implement conversion tracking, your privacy policy
                  should mention these technologies as well. Users should
                  understand that JavaScript tags on your pages collect
                  data about their interactions and send it to Google for
                  reporting purposes.
                </p>
              </section>

              {/* Section 5: Remarketing */}
              <section id="remarketing" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Remarketing Privacy Policy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Remarketing (also called retargeting) is one of the most
                  powerful Google Ads features. It lets you show ads to
                  people who have previously visited your website or
                  interacted with your app. However, remarketing has some
                  of the strictest privacy policy requirements in the
                  Google Ads ecosystem.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Google&apos;s personalized advertising policies require
                  that your privacy policy clearly disclose that you use
                  remarketing to advertise across the internet, that
                  third-party vendors including Google use cookies to serve
                  ads based on past visits to your website, that users can
                  opt out of Google&apos;s use of cookies by visiting Google
                  Ad Settings, and that users can opt out of third-party
                  vendor cookies through the Network Advertising Initiative
                  opt-out page.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  These are not optional recommendations. If you enable
                  remarketing in your Google Ads account and your landing
                  pages do not have a privacy policy with these disclosures,
                  Google can disable your remarketing lists and disapprove
                  your remarketing campaigns. Some advertisers have had
                  their remarketing capabilities permanently revoked for
                  repeated violations.
                </p>

                {/* Did you know box 3 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Google requires that remarketing lists used for
                        sensitive categories (health, finance, relationships)
                        meet even stricter privacy requirements. If your
                        website relates to sensitive topics, Google may
                        restrict your ability to use remarketing entirely
                        unless your privacy practices meet heightened
                        standards. These restrictions exist to protect user
                        privacy in areas where ad targeting could reveal
                        sensitive personal information.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Customer Match */}
              <section id="customer-match" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Customer Match Privacy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Customer Match allows you to upload customer data (email
                  addresses, phone numbers, or mailing addresses) to Google
                  Ads to create targeted audience segments. This feature
                  has some of the most specific privacy policy requirements
                  because it involves sharing personally identifiable
                  information with Google.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  To use Customer Match, your privacy policy must disclose
                  that you collect customer data and may share it with
                  third-party advertising platforms for targeted advertising
                  purposes. You must also confirm that the data was collected
                  directly from customers (not purchased from third parties)
                  and that customers consented to receiving marketing
                  communications from you.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Google also requires that you have a compliant privacy
                  policy and a good account history before it will grant
                  access to Customer Match. Accounts with a history of
                  policy violations or accounts that are too new may not
                  qualify. Your privacy policy is one of the qualification
                  criteria Google evaluates.
                </p>

                {/* Data comparison table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Data Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Customer Match Use
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Privacy Policy Must Disclose
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Consent Required
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Email addresses
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Match to Google accounts for ad targeting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Data sharing with Google for advertising
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes, marketing consent
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Phone numbers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Match to Google accounts for ad targeting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Data sharing with Google for advertising
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes, marketing consent
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Mailing addresses
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Match to Google accounts for ad targeting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Data sharing with Google for advertising
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes, marketing consent
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Performance Max */}
              <section id="performance-max" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Performance Max and Privacy Considerations
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Performance Max campaigns combine all Google Ads channels
                  (Search, Display, YouTube, Discover, Gmail, and Maps) into
                  a single campaign. Because Performance Max uses machine
                  learning to optimize across all channels, it combines data
                  from multiple tracking sources, which creates broader
                  privacy disclosure requirements.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  When running Performance Max, your privacy policy needs to
                  cover the combined data practices of all channels. This
                  includes search query tracking, display remarketing
                  cookies, YouTube video view tracking, Gmail interaction
                  data, and location-based targeting through Maps. Your
                  policy should explain that your advertising may appear
                  across multiple Google properties and that data is
                  collected across these channels to optimize ad delivery.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Performance Max also heavily relies on first-party data
                  signals, including audience signals you provide to Google.
                  If you upload customer lists or provide website visitor
                  data as audience signals, your privacy policy must
                  disclose this data sharing just as it would for Customer
                  Match or remarketing independently.
                </p>
              </section>

              {/* Section 8: Common Myths */}
              <section id="common-myths" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Myths About Google Ads and Privacy Policies
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are the five most common myths advertisers believe
                  about privacy policies and Google Ads, and why each one
                  puts your campaigns and your account at risk.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I only run Search ads, so I don&apos;t
                        need a privacy policy.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Search campaigns still use conversion
                        tracking cookies, which requires privacy disclosure.
                        If your landing page collects any personal
                        information through forms, Google requires a privacy
                        policy regardless of campaign type. Even basic
                        Search ads with no remarketing still need a policy
                        if you track conversions or collect lead data.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Google only cares about big
                        advertisers.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Google applies the same advertising
                        policies to every account regardless of spend level.
                        Small advertisers spending $10/day face the same
                        privacy policy requirements as enterprise advertisers
                        spending $10,000/day. In fact, smaller accounts are
                        sometimes more vulnerable to suspensions because they
                        have less account history to offset policy
                        violations.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My website&apos;s existing privacy policy
                        covers Google Ads.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Most generic website privacy policies do
                        not include the specific disclosures Google Ads
                        requires. They may mention &quot;cookies&quot; in
                        general terms but fail to disclose remarketing,
                        conversion tracking, Customer Match data sharing, or
                        opt-out mechanisms for personalized advertising.
                        Your policy must specifically address the Google Ads
                        features you use.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Google will warn me before taking
                        action.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Google may disapprove individual ads
                        without advance warning. While Google typically
                        sends email notifications for ad disapprovals, you
                        may not notice them immediately. Repeated policy
                        violations can escalate to account-level warnings
                        and ultimately suspension. By the time you realize
                        there is a problem, your campaigns may have been
                        paused for days or weeks.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;A privacy policy is only needed for
                        remarketing.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: While remarketing has the most explicit
                        privacy policy requirements, the requirement extends
                        to all Google Ads features that collect or process
                        user data. Conversion tracking, Customer Match,
                        enhanced conversions, and even basic form
                        submissions on landing pages all trigger the
                        privacy policy requirement. Remarketing is just
                        the most commonly cited example.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Google Ads-Compliant Privacy Policy (5 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these steps to create a privacy policy that will
                  satisfy Google&apos;s advertising policy requirements and
                  comply with GDPR and CCPA at the same time.
                </p>

                <div className="space-y-5">
                  {/* Step 1 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit your advertising data collection
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Document every type of data your Google Ads campaigns
                        collect. This includes conversion tracking data from
                        clicks and form submissions, remarketing cookies
                        that track site visitors, Customer Match data from
                        email lists, enhanced conversions data, and any
                        audience signals you provide to Performance Max
                        campaigns. Also list other advertising platforms
                        (Facebook Ads, Microsoft Ads) and analytics tools
                        (Google Analytics) you use alongside Google Ads.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add Google Ads tracking disclosures
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Include a dedicated section about advertising
                        tracking. State that you use Google Ads conversion
                        tracking and remarketing cookies. Explain that
                        third-party vendors, including Google, use cookies
                        to serve ads based on past website visits. Disclose
                        that advertising cookies enable personalized ad
                        delivery across the Google Display Network, YouTube,
                        and other Google properties.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Include opt-out information and links
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Provide clear instructions for users who want to opt
                        out of personalized advertising. Link to Google Ad
                        Settings where users can control ad personalization.
                        Also link to the Network Advertising Initiative
                        opt-out page for broader third-party cookie control.
                        Explain what happens when users opt out: they will
                        still see ads, but the ads will not be personalized
                        based on their browsing history.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add GDPR and CCPA compliance sections
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add sections addressing the rights of EU, UK, and
                        California users. For GDPR, include your legal basis
                        for processing data, data retention periods, user
                        rights (access, rectification, erasure, portability,
                        objection), and consent mechanisms for advertising
                        cookies. For CCPA, disclose the categories of
                        personal information collected, whether you sell
                        data, and how users can exercise their opt-out
                        rights.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Publish on all landing pages and your website
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Place a link to your privacy policy in the footer
                        of every landing page used in Google Ads campaigns.
                        Google reviews landing pages for policy compliance,
                        so the link must be visible and the page must load
                        correctly. Also link it from your main website
                        footer, cookie consent banner, and any forms that
                        collect personal data. Ensure the policy is hosted
                        on the same domain as your landing pages.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-700">
                    <strong>Shortcut:</strong> A privacy policy generator
                    handles all five steps automatically. You answer
                    questions about your advertising setup (including
                    Google Ads features you use), and it generates a
                    complete policy with all required disclosures, cookie
                    information, opt-out links, and legal compliance
                    sections. The whole process takes under five minutes.{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      Generate your Google Ads-compliant policy
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    .
                  </p>
                </div>

                {/* Inline CTA */}
                <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Stop Losing Ad Spend to Policy Violations
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Every day your ads are disapproved is money wasted.
                        Generate a privacy policy that includes every
                        disclosure Google Ads requires, plus full GDPR and
                        CCPA compliance, in under 60 seconds.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My Google Ads Policy
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Google Ads require a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Google Ads policies require all advertisers to
                      have a privacy policy on their landing pages. This
                      applies whenever you collect personal information,
                      use conversion tracking, run remarketing campaigns,
                      or use Customer Match. Your policy must disclose
                      data collection practices, cookie usage, and
                      opt-out options for personalized advertising.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What privacy policy do I need for remarketing?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      For remarketing, your privacy policy must disclose
                      that you use cookies to show ads to past website
                      visitors, that third-party vendors including Google
                      serve ads based on past visits, and that users can
                      opt out through Google Ad Settings and the Network
                      Advertising Initiative. Without these disclosures,
                      Google can disable your remarketing lists.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy for conversion tracking?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Conversion tracking places cookies on user
                      devices to measure ad performance. Your privacy
                      policy must explain that you use tracking
                      technologies to measure conversions, that a cookie
                      is set when users click your ads, and that
                      conversion data is shared with Google. This applies
                      to all conversion tracking methods including
                      standard tags and enhanced conversions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if I run Google Ads without a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your ads may be disapproved, your remarketing lists
                      disabled, your Customer Match audiences rejected, or
                      your account suspended. Google reviews landing pages
                      for policy compliance and a missing privacy policy
                      is a common reason for disapproval. Beyond Google,
                      you also face legal liability under GDPR, CCPA, and
                      other privacy laws.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Customer Match require a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Customer Match involves uploading customer data
                      (emails, phone numbers, addresses) to Google for
                      ad targeting. Your privacy policy must disclose
                      that you share customer data with Google for
                      advertising purposes and that the data was collected
                      with appropriate consent. Google evaluates your
                      privacy policy before granting Customer Match access.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Is a generic privacy policy sufficient for Google Ads?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      No. Generic policies lack the specific disclosures
                      Google requires: remarketing cookie mentions,
                      conversion tracking disclosure, Customer Match data
                      sharing, and opt-out links for personalized
                      advertising. Google&apos;s automated and manual
                      reviews look for these specific items. Use a
                      generator that supports Google Ads-specific
                      disclosures.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I create a privacy policy for Google Ads?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The fastest method is using a privacy policy
                      generator that includes Google Ads-specific
                      disclosures. Indicate which Google Ads features you
                      use (conversion tracking, remarketing, Customer
                      Match), and the generator will produce a policy with
                      required tracking disclosures, opt-out links, and
                      GDPR/CCPA compliance sections. This typically takes
                      under five minutes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section id="resources" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/do-i-need-a-privacy-policy-for-google-adsense",
                      title: "Privacy Policy for Google AdSense",
                      desc: "Complete guide for AdSense publishers and bloggers",
                    },
                    {
                      href: "/privacy-policy-for-google-analytics",
                      title: "Privacy Policy for Google Analytics",
                      desc: "What to disclose when using Google Analytics tracking",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-facebook-ads",
                      title: "Privacy Policy for Facebook Ads",
                      desc: "Meta advertising privacy requirements explained",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-a-landing-page",
                      title: "Privacy Policy for Landing Pages",
                      desc: "Why every landing page needs a privacy policy",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "A comprehensive guide for standard website operators",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "Compliant GDPR template with all required disclosures",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/generate",
                      title: "Privacy Policy Generator",
                      desc: "Generate a compliant policy for your Google Ads campaigns",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all bg-white"
                    >
                      <FileText className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                      <div>
                        <p className="font-medium text-slate-800 text-sm group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Final CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center">
                <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">
                  Keep Your Google Ads Running
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a missing privacy policy cost you ad spend
                  and conversions. Generate a Google Ads-compliant privacy
                  policy with all required tracking disclosures, cookie
                  information, and opt-out links in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Google Ads Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers Google Ads, GDPR, CCPA &amp; CalOPPA &middot;
                  Customized to your campaigns &middot; Ready in 60 seconds
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
