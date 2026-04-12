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
    "Privacy Policy for Twitter (X): Business & Developer Guide (2026) | ultrafastutilities",
  description:
    "Create a privacy policy for your Twitter/X presence. Covers X API, Twitter Ads, conversion tracking, X Commerce, developer apps, and bot accounts. Updated for X rebrand.",
  keywords:
    "privacy policy for twitter, twitter privacy policy, x privacy policy, twitter business privacy policy, twitter api privacy policy, x.com privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-twitter",
  },
  openGraph: {
    title:
      "Privacy Policy for Twitter (X): Business & Developer Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for your Twitter/X presence. Covers X API, Twitter Ads, conversion tracking, X Commerce, developer apps, and bot accounts. Updated for X rebrand.",
    url: "https://ultrafastutilities.com/privacy-policy-for-twitter",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Twitter (X) | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Twitter (X): Business & Developer Guide (2026)",
    description:
      "Create a privacy policy for your Twitter/X presence. Covers X API, Twitter Ads, conversion tracking, X Commerce, developer apps, and bot accounts.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Twitter/X business accounts need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you run Twitter Ads, use the X API, operate bot accounts, use conversion tracking, or collect user data through X Commerce features, you are collecting or facilitating the collection of personal data. Privacy laws and X's own developer and advertising policies require you to have a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does X require a privacy policy for Twitter Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. X's advertising policies require advertisers to comply with all applicable privacy laws and to have a privacy policy that discloses data collection practices. When you run promoted tweets, use conversion tracking pixels, or create tailored audiences, you must disclose these practices in a published privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "What data does the X API collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The X API provides access to tweet content, user profiles, follower lists, engagement metrics, direct messages (with appropriate permissions), and real-time streaming data. Developers who access this data through the API are responsible for disclosing what data they collect, how they store it, and how long they retain it in their privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do Twitter bot accounts need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Bot accounts that interact with users, collect mentions or replies, process direct messages, or aggregate tweet data are collecting personal data. X's automation rules require bots to clearly identify themselves, and privacy laws require disclosure of any personal data processing. Your bot's privacy policy should explain what data the bot collects and how it is used.",
      },
    },
    {
      "@type": "Question",
      name: "Does X's privacy policy cover my business or developer app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. X's privacy policy covers data that X collects through its platform. It does not cover data you collect through the X API, your developer applications, Twitter Ads conversion tracking, or third-party integrations. You need your own privacy policy to disclose your specific data handling practices.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for X Commerce features?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. X Commerce features including product catalogs, shop spotlights, and in-app purchasing involve customer data collection. Whether transactions happen within X or on your external store, customer names, payment details, and order information are being processed. Your privacy policy must cover how you handle this commerce data.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I link my Twitter/X privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link to it from your X profile bio or website field, your X Ads Manager account, your developer app settings on the X Developer Portal, your bot account's bio, your external website footer, and any landing pages linked from your tweets. The privacy policy should be hosted on a dedicated URL that you control.",
      },
    },
  ],
};

const tocSections = [
  { id: "when-you-need-one", title: "When You Need One" },
  { id: "data-sources", title: "Data Sources on X" },
  { id: "x-api-developers", title: "X API & Developers" },
  { id: "twitter-ads", title: "Twitter Ads & Pixel" },
  { id: "x-commerce", title: "X Commerce Features" },
  { id: "bot-accounts", title: "Bot Account Requirements" },
  { id: "developer-agreement", title: "Developer Agreement" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create One" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForTwitterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Twitter (X): What Businesses and Developers Must Disclose",
            description:
              "Create a privacy policy for your Twitter/X presence. Covers X API, Twitter Ads, conversion tracking, X Commerce, developer apps, and bot accounts. Updated for X rebrand.",
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
                name: "Privacy Policy for Twitter",
                item: "https://ultrafastutilities.com/privacy-policy-for-twitter",
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
            name: "How to Create a Privacy Policy for Twitter/X",
            description:
              "Six steps to create a compliant privacy policy for your Twitter/X business account, developer app, or bot.",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Audit your X data collection points",
                text: "List every tool and integration connected to your X presence: X API access, Twitter Ads Manager, conversion tracking pixel, developer apps, bot accounts, X Commerce features, and any third-party tools that connect to X. For each, note what personal data it collects.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Identify which privacy laws apply to your users",
                text: "Check your Twitter Analytics for audience geography. If any users are in the EU or UK, GDPR applies. Users in California trigger CCPA and CalOPPA. X's global reach means most accounts have users across multiple jurisdictions.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Map data types to purposes and lawful bases",
                text: "For each type of personal data, document the purpose and GDPR lawful basis. API data access for analytics = legitimate interests. Conversion tracking for ad optimization = consent (cookie-based). Tailored Audiences from customer lists = consent. Map every data flow.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Name every third-party service and processor",
                text: "GDPR requires naming specific services. Write 'X Corp. (for advertising and API data)' not 'social media partners'. Name your analytics tools, hosting providers, database services, and any platforms that receive X data from your applications.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Generate your privacy policy",
                text: "Use a structured privacy policy generator that asks about your specific X business setup and produces a customized document covering API usage, advertising, commerce, and bot operations in a single policy.",
              },
              {
                "@type": "HowToStep",
                position: 6,
                name: "Publish and link from every touchpoint",
                text: "Host your privacy policy on a dedicated URL. Link to it from your X profile, X Developer Portal app settings, X Ads Manager, bot account bio, external website footer, and any landing pages linked from tweets. Review and update every 6 months.",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                Privacy Policy for Twitter
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
                  Twitter (X)
                </span>
                :{" "}
                <span className="text-3xl sm:text-4xl">
                  What Businesses and Developers Must Disclose
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                If your Twitter/X presence involves running ads, accessing
                the X API, operating bot accounts, using conversion tracking,
                or selling through X Commerce, you are collecting personal
                data and need a privacy policy. Here is what X requires,
                what data you handle, and how to stay compliant.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For X business accounts, developers, bot operators, and advertisers.
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
                href="/privacy-policy-for-instagram"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Instagram Guide
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
                    Need a Twitter/X privacy policy?
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
                  <strong>Yes, Twitter/X business accounts and developer apps need a privacy policy.</strong>{" "}
                  If you run Twitter Ads, access the X API, operate bot
                  accounts, use conversion tracking pixels, create tailored
                  audiences, or sell products through X Commerce features,
                  you are collecting personal data. Privacy laws and
                  X&apos;s own developer agreement and advertising policies
                  require you to disclose these practices in a published
                  privacy policy.
                </p>
              </div>

              {/* Section 1: When You Need a Privacy Policy for Twitter/X */}
              <section id="when-you-need-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      When You Need a Privacy Policy for Twitter/X
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    X (formerly Twitter) has its own privacy policy that
                    covers data X collects through the platform. However,
                    X&apos;s policy does not cover data that you, as a
                    business, developer, or advertiser, collect from users
                    through your own tools and activities. If you engage in
                    any of the following, you need your own privacy policy:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Running Twitter Ads (promoted tweets, followers, or trends)",
                        desc: "X's advertising platform requires advertisers to comply with applicable privacy laws. When you run promoted content, X collects engagement data on your behalf including click-through behaviour, conversion tracking, and audience targeting data. You are responsible for disclosing how this advertising data is used.",
                      },
                      {
                        title: "Using the X API to access user data",
                        desc: "The X API provides access to tweets, user profiles, follower relationships, engagement metrics, and (with elevated access) direct messages. X's Developer Agreement requires all API users to have a privacy policy that explains what data is collected, how it is used, and how users can contact you about their data.",
                      },
                      {
                        title: "Operating bot accounts or automated tools",
                        desc: "Bot accounts that reply to users, process mentions, aggregate tweet data, or send automated direct messages are collecting and processing personal data. X's automation rules require bots to identify themselves, and privacy laws require disclosure of data processing activities.",
                      },
                      {
                        title: "Using conversion tracking or website tags",
                        desc: "The X Pixel (formerly Twitter Website Tag) tracks visitor behaviour on your website after they interact with your tweets or ads. This includes page views, sign-ups, purchases, and other conversion events. Like all tracking pixels, this sets cookies and collects personal data that must be disclosed.",
                      },
                      {
                        title: "Selling through X Commerce features",
                        desc: "X Commerce features including product catalogs, shop spotlights, and in-app purchasing involve customer data collection. Product interactions, purchase data, and customer contact information are processed through these features and must be covered by your privacy policy.",
                      },
                      {
                        title: "Creating tailored audiences from customer lists",
                        desc: "When you upload email lists or device IDs to X for tailored audience targeting, you are sharing personal data with X for advertising purposes. X's tailored audience policies require that you have consent to use this data and that your privacy policy discloses this practice.",
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
                        X Ads account suspension, rejection of promoted
                        campaigns, X API access revocation, developer app
                        suspension, GDPR fines up to &euro;20 million, CCPA
                        penalties of $7,500 per violation, and loss of user
                        trust. X actively reviews developer compliance and
                        can revoke API access without warning. Learn the
                        full breakdown of{" "}
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
                      q: "Does this apply to personal Twitter/X accounts?",
                      a: "Personal accounts used purely for personal tweeting (no ads, no API access, no commerce, no automation) generally do not need their own privacy policy because X's policy covers platform-level data collection. However, the moment you start running ads, accessing the API, or engaging in commercial activities, the requirement applies.",
                    },
                    {
                      q: "What about X Premium subscribers who use advanced features?",
                      a: "X Premium (formerly Twitter Blue) subscribers who use advanced analytics, longer posts, or creator monetization features are engaging in activities that may involve additional data collection. If you monetize your account through subscriptions, tips, or Super Follows, you are collecting financial data from your subscribers and need a privacy policy.",
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

              {/* Section 2: Data Sources on X */}
              <section id="data-sources" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Data Sources on Twitter/X
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every data type your X presence might collect or facilitate.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    The data your Twitter/X presence handles depends on
                    which features, APIs, and external tools you use. Here
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
                            "X API",
                            "Tweet content, user profiles, follower lists, engagement metrics, media attachments, location data (if enabled)",
                            "You (controller for collected data), X (platform provider)",
                          ],
                          [
                            "Twitter Ads",
                            "Impression data, click-through rates, engagement metrics, audience demographics, promoted tweet interactions",
                            "Joint controller (you and X)",
                          ],
                          [
                            "Conversion Tracking",
                            "Page views, sign-ups, purchases, cart events, button clicks, IP addresses, browser data, device IDs",
                            "Joint controller (you and X)",
                          ],
                          [
                            "X Commerce",
                            "Product page views, purchase events, customer names, shipping addresses, payment details, order history",
                            "You (controller), X (processor)",
                          ],
                          [
                            "Website Cards",
                            "Click-through data, landing page visits, card engagement metrics, referring tweet data",
                            "Joint controller (you and X)",
                          ],
                          [
                            "Direct Messages",
                            "Usernames, message content, shared media, contact details, timestamps",
                            "X (platform), you (business use)",
                          ],
                          [
                            "Lists",
                            "Curated user profiles, list membership data, follower overlap analysis",
                            "X (platform), you (curator)",
                          ],
                          [
                            "Spaces",
                            "Speaker and listener identities, audio recordings (if saved), participation timestamps, engagement data",
                            "X (platform), you (host)",
                          ],
                          [
                            "Communities",
                            "Member profiles, post content, membership data, moderation logs, engagement metrics",
                            "X (platform), you (community admin)",
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
                    The critical distinction: X Analytics provides aggregated
                    engagement data that X controls. But API data access,
                    conversion tracking, tailored audiences, and commerce
                    data involve personal data that you collect, control, or
                    jointly control with X. These are what your privacy
                    policy must cover.
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
                          The X API v2 returns a unique user ID for every
                          account. Even if you only collect tweet text and
                          engagement counts, the user IDs attached to that
                          data are personal data under GDPR because they can
                          be used to identify specific individuals. This
                          means any X API usage that retrieves user-related
                          data triggers privacy policy requirements,
                          regardless of whether you store usernames or
                          display names.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 3: X API and Developer Requirements */}
              <section id="x-api-developers" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      X API and Developer Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What X requires from every developer who accesses its API.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    The X Developer Agreement and Policy impose specific
                    requirements on anyone who accesses the X API. These
                    are contractual obligations enforced through X&apos;s
                    developer platform. Violating them can result in API
                    access revocation, app suspension, or permanent ban
                    from the developer program.
                  </p>

                  {[
                    {
                      title: "Privacy policy requirement for all API users",
                      desc: "X's Developer Agreement requires every application that accesses the X API to have a privacy policy. This policy must be accessible via a working URL and must clearly describe what X data you collect, how you use it, how you store it, and how long you retain it. The privacy policy URL is a required field when registering a developer app on the X Developer Portal.",
                    },
                    {
                      title: "Data use restrictions and display requirements",
                      desc: "The X API Terms of Service restrict how you can use the data you access. You cannot sell raw X data, you must display tweets according to X's display requirements, and you must delete data when users delete their tweets or accounts. Your privacy policy must reflect these restrictions and explain your data retention practices honestly.",
                    },
                    {
                      title: "User consent for elevated API access",
                      desc: "Certain API endpoints (such as Direct Messages, email addresses, and offline access) require explicit user consent through OAuth. Your privacy policy must explain what permissions your app requests and why. Users must understand what data your app will access before they authorize it.",
                    },
                    {
                      title: "Rate limits and data storage obligations",
                      desc: "X imposes rate limits on API calls and requires developers to handle data responsibly. If you cache or store X data locally, your privacy policy must disclose this storage, the retention period, and how users can request deletion of their data from your systems.",
                    },
                    {
                      title: "Academic Research and Enterprise API tiers",
                      desc: "Higher API access tiers (Academic Research, Enterprise) come with additional obligations. Academic researchers must describe their research purpose and data handling in their privacy policy. Enterprise users must comply with stricter data governance requirements outlined in their enterprise agreement.",
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
                        q: "Can X actually revoke my API access for not having a privacy policy?",
                        a: "Yes. X regularly audits developer applications and can suspend or revoke API access for policy violations, including missing or inadequate privacy policies. The privacy policy URL is a required field during app registration, and X reviews it during the application approval process. Revocation can happen without advance notice.",
                      },
                      {
                        q: "Does using a third-party Twitter client count as API usage?",
                        a: "If you are building or operating a third-party client that accesses the X API, yes. The same developer requirements apply whether you are building a mobile app, web dashboard, analytics tool, or social media management platform. The privacy policy requirement applies to every application that authenticates with the X API.",
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

              {/* Section 4: Twitter Ads and Conversion Pixel */}
              <section id="twitter-ads" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Twitter Ads and Conversion Pixel
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Advertising on X creates significant data disclosure obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    X&apos;s advertising platform (Twitter Ads, now X Ads)
                    allows businesses to promote tweets, accounts, and
                    trends. The platform also provides conversion tracking
                    through the X Pixel and supports tailored audience
                    targeting from customer lists. Each of these features
                    involves personal data collection that must be disclosed
                    in your privacy policy.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Promoted tweets and account campaigns",
                        desc: "When you run promoted content on X, the platform collects engagement data including impressions, clicks, retweets, replies, follows, and profile visits. This data is tied to individual user accounts. X shares aggregated campaign analytics with you, but the underlying data involves personal data processing by both you and X as joint controllers.",
                      },
                      {
                        title: "X Pixel (conversion tracking)",
                        desc: "The X Pixel (formerly Twitter Website Tag) is a JavaScript snippet installed on your website that tracks visitor actions after they click on or view your X ads. It collects page URLs, conversion events (purchases, sign-ups, downloads), IP addresses, browser information, and device identifiers. Under GDPR, installing the X Pixel requires cookie consent because it sets tracking cookies on visitors' browsers.",
                      },
                      {
                        title: "Tailored Audiences from customer lists",
                        desc: "X allows you to upload email lists, phone numbers, or device advertising IDs to create tailored audiences for ad targeting. X hashes the data and matches it against its user database. Your privacy policy must disclose that you share customer data with X for advertising purposes and that you have consent to do so.",
                      },
                      {
                        title: "Tailored Audiences from web activity",
                        desc: "Beyond customer lists, you can create tailored audiences based on website visitors tracked through the X Pixel or mobile app users tracked through X's Mobile Measurement Partners. These audiences are built from tracking data that must be disclosed in your privacy policy with the appropriate cookie consent mechanisms.",
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
                    For a detailed comparison of social media advertising
                    requirements across platforms, see the{" "}
                    <Link
                      href="/privacy-policy-for-facebook-page"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Facebook page privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and the{" "}
                    <Link
                      href="/privacy-policy-for-linkedin"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      LinkedIn privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
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
                          The X Pixel fires on every page load where it is
                          installed, not only when a user arrives from an X
                          ad. This means it tracks all website visitors,
                          including those who arrive from Google, email
                          campaigns, or direct navigation. Under GDPR and
                          the ePrivacy Directive, this requires cookie
                          consent from every visitor, not just those who
                          clicked an X ad. Your privacy policy and cookie
                          banner must account for this broader tracking
                          scope.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 5: X Commerce Features */}
              <section id="x-commerce" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      X Commerce Features
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Selling products through X creates data obligations
                      for every transaction.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    X Commerce allows businesses to showcase and sell
                    products directly through their X profiles. Features
                    include product catalogs, shop spotlights, live
                    shopping events, and product drops. Whether transactions
                    complete within X or on your external store, commerce
                    activities involve personal data collection that your
                    privacy policy must address.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Shop spotlight and product catalogs",
                        desc: "Product catalogs synced with your X profile generate interaction data when users browse, save, or share products. While the catalog itself contains product information, user engagement data (which users viewed which products, how long they browsed, what they saved) is collected by X and can be used for remarketing. Your privacy policy should disclose this product interaction tracking.",
                      },
                      {
                        title: "In-app purchasing and checkout",
                        desc: "When customers purchase through X's in-app checkout, X processes the payment and collects customer names, shipping addresses, email addresses, and payment details. As the merchant, you receive order details and customer contact information. Your privacy policy must explain how you handle this order data, retention periods, and whether you use it for marketing.",
                      },
                      {
                        title: "External store links from product cards",
                        desc: "If product cards link to your external online store (Shopify, WooCommerce, BigCommerce), the full e-commerce data collection happens on your platform. This includes customer accounts, order history, payment processing, shipping integrations, and analytics. Your privacy policy must cover all of these data flows from the X referral through checkout.",
                      },
                      {
                        title: "Post-purchase communications and remarketing",
                        desc: "Order confirmation emails, shipping notifications, review requests, and marketing follow-ups all involve using customer data collected during the transaction. If you add X Commerce purchasers to an email list or retarget them with X Ads, each additional use of their data must be disclosed in your privacy policy with the appropriate lawful basis.",
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

              {/* Section 6: Bot Account Requirements */}
              <section id="bot-accounts" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Bot Account Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Automated accounts have unique privacy obligations on X.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    X allows automated accounts (bots) for legitimate
                    purposes such as customer service, content curation,
                    news updates, and utility functions. However, bot
                    accounts that interact with users or process user data
                    have specific privacy obligations under both X&apos;s
                    policies and privacy laws.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Bot identification and transparency",
                        desc: "X requires bot accounts to clearly identify themselves as automated. Your bot's bio should state that it is automated and link to a privacy policy. Users who interact with your bot should know they are communicating with an automated system, what data the interaction generates, and how that data is used.",
                      },
                      {
                        title: "Data collected through bot interactions",
                        desc: "When users mention, reply to, or DM your bot, the bot receives usernames, tweet content, timestamps, and potentially location data. If your bot processes these interactions (such as a customer service bot that logs support tickets), you are collecting personal data that must be disclosed in your privacy policy.",
                      },
                      {
                        title: "Automated data aggregation",
                        desc: "Bots that monitor hashtags, track mentions, aggregate sentiment data, or compile user statistics from public tweets are processing personal data at scale. Even though individual tweets may be public, systematic collection and analysis of user behaviour constitutes data processing under GDPR.",
                      },
                      {
                        title: "Automated DM responses",
                        desc: "Bots that send automated welcome DMs, process support requests through DMs, or engage in conversational commerce through direct messages are collecting conversation data. Under GDPR, automated decision-making that affects individuals (such as triaging support requests) has additional disclosure requirements.",
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
                          A bot that monitors a branded hashtag and collects
                          every tweet mentioning it is performing systematic
                          data collection under GDPR Article 4. Even though
                          tweets are public, the act of compiling them into a
                          database for analysis creates a processing activity
                          that requires a lawful basis (typically legitimate
                          interests) and must be disclosed in your privacy
                          policy. The GDPR does not have a blanket exemption
                          for publicly available data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 7: X Developer Agreement Terms */}
              <section id="developer-agreement" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      X Developer Agreement Terms
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Key contractual obligations from X&apos;s developer terms.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    The X Developer Agreement and Developer Policy contain
                    specific privacy-related obligations that go beyond
                    what general privacy laws require. These are contractual
                    terms that X enforces through its developer platform.
                    Your privacy policy must align with these requirements.
                  </p>

                  {[
                    {
                      title: "Data deletion obligations",
                      desc: "When a user deletes a tweet or deactivates their account, X requires you to delete that data from your systems within 24 hours (or as soon as reasonably possible). Your privacy policy must state that you honour user deletions from the X platform and explain your data retention and deletion practices.",
                    },
                    {
                      title: "Purpose limitation for X data",
                      desc: "X restricts what you can do with data obtained through the API. You cannot use X data for surveillance, profiling for eligibility decisions (credit, employment, housing), or building tools that are used to harm or discriminate against users. Your privacy policy must accurately reflect the purposes for which you use X data.",
                    },
                    {
                      title: "User consent and transparency requirements",
                      desc: "X requires that users of your application understand and consent to your data practices before you access their X data. This means your privacy policy must be presented to users before they authenticate your app through OAuth. Burying your privacy policy in a terms of service document is not sufficient.",
                    },
                    {
                      title: "Data security and breach notification",
                      desc: "X requires developers to implement reasonable security measures to protect X data. In the event of a data breach involving X data, you must notify X promptly. Your privacy policy should outline your security practices and breach notification procedures.",
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
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 8: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Scale className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Twitter/X Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These assumptions are widespread among X business
                      accounts and developers. All of them are wrong.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Mistake 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;X&apos;s privacy policy covers my app or business&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      X&apos;s privacy policy covers data that X collects
                      through its platform, such as tweets, likes, follows,
                      and browsing behaviour within the app. It does not
                      cover data you collect through the X API, your
                      developer applications, conversion tracking on your
                      website, or customer data from X Commerce. When your
                      app fetches user data through the API and stores it in
                      your database, X&apos;s privacy policy says nothing
                      about how your database handles that data. You need
                      your own policy for that.
                    </p>
                  </div>

                  {/* Mistake 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Tweets are public, so no privacy policy is needed&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      While most tweets are publicly visible, systematically
                      collecting, storing, and analyzing them constitutes
                      data processing under GDPR. Public availability does
                      not eliminate privacy obligations. When you scrape
                      tweets, build datasets from user profiles, or
                      aggregate engagement data for analytics, you are
                      processing personal data. The GDPR applies to any
                      systematic processing of personal data, regardless of
                      whether that data was publicly posted. Your privacy
                      policy must disclose this collection and its purposes.
                    </p>
                  </div>

                  {/* Mistake 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;My bot just retweets, it doesn&apos;t collect data&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      A bot that retweets content is accessing the X API,
                      receiving tweet data (including the author&apos;s
                      username, user ID, tweet content, and metadata), and
                      making decisions about which tweets to amplify. Even
                      if your bot does not store this data permanently, the
                      act of processing it through your application
                      constitutes data processing. If your bot uses
                      criteria to select tweets (such as monitoring specific
                      hashtags or users), you are systematically processing
                      personal data and need a privacy policy.
                    </p>
                  </div>

                  {/* Mistake 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I only use the free API tier, so requirements are lighter&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      X&apos;s Developer Agreement applies equally to all
                      API tiers: Free, Basic, Pro, and Enterprise. The
                      privacy policy requirement, data deletion obligations,
                      and purpose limitations are the same regardless of
                      which tier you use. A free-tier app that accesses user
                      data has identical privacy obligations to an
                      enterprise-tier application. The only differences
                      between tiers are rate limits and available endpoints,
                      not compliance requirements.
                    </p>
                  </div>

                  {/* Mistake 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Conversion tracking is X&apos;s responsibility&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      While X provides the technical infrastructure for the
                      X Pixel, you are the one who installs it on your
                      website and decides which conversion events to track.
                      Under GDPR, you and X are joint controllers for the
                      data collected through the pixel. This means you are
                      responsible for obtaining cookie consent from your
                      website visitors, disclosing the pixel in your privacy
                      policy, and providing opt-out mechanisms. X&apos;s
                      cookie consent does not extend to your website.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 9: How to Create */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Twitter/X
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Six steps from audit to publication.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Creating a privacy policy for your Twitter/X presence
                    is straightforward once you map out your data collection
                    points. Follow these steps:
                  </p>

                  {[
                    {
                      step: "1",
                      title: "Audit every data collection point in your X ecosystem",
                      desc: "List every tool and integration connected to your X presence: X API access level, Twitter Ads Manager, X Pixel installations, developer apps, bot accounts, X Commerce features, third-party social media management tools (Hootsuite, Buffer, Sprout Social), and any analytics platforms. For each, note what personal data it collects.",
                    },
                    {
                      step: "2",
                      title: "Identify which privacy laws apply to your users",
                      desc: "Check your Twitter Analytics for audience geography. If any users are in the EU or UK, GDPR applies. Users in California trigger CCPA and CalOPPA. X's global reach means most accounts have a geographically diverse user base, meaning GDPR, CCPA, and CalOPPA apply at minimum.",
                    },
                    {
                      step: "3",
                      title: "Map data types to purposes and lawful bases",
                      desc: "For each type of personal data, document the purpose and GDPR lawful basis. API data for analytics = legitimate interests. Conversion tracking for ad optimization = consent (cookie-based). Tailored Audiences from customer lists = consent. Bot interaction data for customer service = legitimate interests. Map every data flow.",
                    },
                    {
                      step: "4",
                      title: "Name every third-party service and processor",
                      desc: "GDPR requires naming specific services. Write 'X Corp. (for API data and advertising)' not 'social media partners'. Name your hosting provider, database service, analytics tools, email marketing platform, and any third-party tools that receive or process X data from your applications.",
                    },
                    {
                      step: "5",
                      title: "Generate your privacy policy",
                      desc: "Use a structured privacy policy generator that asks about your specific X business setup and produces a customized document. This covers API usage, advertising, conversion tracking, commerce, bot operations, and cookie consent in a single, coherent policy. Our generator handles this in under 60 seconds for $4.99.",
                    },
                    {
                      step: "6",
                      title: "Publish and link from every touchpoint",
                      desc: "Host your privacy policy on a dedicated URL. Link to it from your X profile bio or website field, X Developer Portal app settings, X Ads Manager, bot account bio, external website footer, and any landing pages linked from tweets. Set a reminder to review and update it every 6 months.",
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
                    . For other social media platforms, see the{" "}
                    <Link
                      href="/privacy-policy-for-tiktok"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      TikTok privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and the{" "}
                    <Link
                      href="/privacy-policy-for-instagram"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Instagram privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

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
                      Generate Your Twitter/X Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your X business setup
                      and get a customized, compliant privacy policy
                      covering API usage, advertising, conversion tracking,
                      commerce, and bot operations in under 60 seconds.
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

              {/* FAQ Section */}
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
                      Do Twitter/X business accounts need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. If you run Twitter Ads, use the X API, operate
                      bot accounts, use conversion tracking, or collect
                      user data through X Commerce features, you are
                      collecting or facilitating the collection of personal
                      data. Privacy laws (
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , CCPA, CalOPPA) and X&apos;s own developer and
                      advertising policies require you to have a privacy
                      policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does X require a privacy policy for Twitter Ads?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. X&apos;s advertising policies require advertisers
                      to comply with all applicable privacy laws and to
                      have a privacy policy that discloses data collection
                      practices. When you run promoted tweets, use
                      conversion tracking pixels, or create tailored
                      audiences, you must disclose these practices in a
                      published privacy policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What data does the X API collect?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      The X API provides access to tweet content, user
                      profiles, follower lists, engagement metrics, direct
                      messages (with appropriate permissions), and
                      real-time streaming data. Developers who access this
                      data are responsible for disclosing what they collect,
                      how they store it, and how long they retain it. Even
                      user IDs alone constitute personal data under GDPR.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do Twitter bot accounts need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. Bot accounts that interact with users, collect
                      mentions or replies, process direct messages, or
                      aggregate tweet data are collecting personal data.
                      X&apos;s automation rules require bots to clearly
                      identify themselves, and privacy laws require
                      disclosure of any personal data processing. Your
                      bot&apos;s bio should link to a privacy policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does X&apos;s privacy policy cover my business or
                      developer app?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      No. X&apos;s privacy policy covers data that X
                      collects through its platform. It does not cover
                      data you collect through the X API, your developer
                      applications, Twitter Ads conversion tracking, or
                      third-party integrations. You need your own privacy
                      policy to disclose your specific data handling
                      practices outside the X platform.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do I need a privacy policy for X Commerce features?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. X Commerce features including product catalogs,
                      shop spotlights, and in-app purchasing involve
                      customer data collection. Whether transactions happen
                      within X or on your external store, customer names,
                      payment details, and order information are being
                      processed. Your privacy policy must cover how you
                      handle this commerce data.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Where should I link my Twitter/X privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Link to it from your X profile bio or website field,
                      your X Ads Manager account, your developer app
                      settings on the X Developer Portal, your bot
                      account&apos;s bio, your external website footer, and
                      any landing pages linked from your tweets. The privacy
                      policy should be hosted on a dedicated URL that you
                      control, not as a tweet or thread.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Related Resources */}
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
                      href: "/privacy-policy-for-facebook-page",
                      icon: Globe,
                      title: "Privacy Policy for Facebook",
                      desc: "Facebook page compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-tiktok",
                      icon: Globe,
                      title: "Privacy Policy for TikTok",
                      desc: "TikTok business account guide",
                    },
                    {
                      href: "/privacy-policy-for-linkedin",
                      icon: Globe,
                      title: "Privacy Policy for LinkedIn",
                      desc: "LinkedIn company page compliance",
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
