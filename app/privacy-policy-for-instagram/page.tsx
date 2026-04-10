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
  Cookie,
  Ban,
  Users,
  Scale,
  Info,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Instagram Business Accounts & Creators (2026) | ultrafastutilities",
  description:
    "Instagram business accounts that run ads, collect leads, or link to external sites need a privacy policy. Learn what Meta requires, what data you handle, and how to stay compliant.",
  keywords:
    "privacy policy for instagram, instagram privacy policy business, instagram business account privacy policy, instagram creator privacy policy, instagram lead ads privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-instagram",
  },
  openGraph: {
    title:
      "Privacy Policy for Instagram Business Accounts & Creators (2026) | ultrafastutilities",
    description:
      "Instagram business accounts that run ads, collect leads, or link to external sites need a privacy policy. Learn what Meta requires, what data you handle, and how to stay compliant.",
    url: "https://ultrafastutilities.com/privacy-policy-for-instagram",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Instagram Business Accounts | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Instagram Business Accounts & Creators (2026)",
    description:
      "Instagram business accounts that run ads, collect leads, or link to external sites need a privacy policy. Learn what Meta requires.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Instagram business accounts need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you run Instagram or Meta ads, use lead generation forms, link to external websites, use Instagram Shopping, or collect DM inquiries for business purposes, you are collecting or facilitating the collection of personal data. Privacy laws and Meta's own advertising policies require you to have a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does Meta require a privacy policy for Instagram ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Meta's advertising policies require that advertisers provide a privacy policy URL when running ads. For lead generation ads specifically, Meta requires a privacy policy link directly on the lead form because you are collecting personal data (names, emails, phone numbers) from users within the Instagram app.",
      },
    },
    {
      "@type": "Question",
      name: "What data do Instagram business accounts collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through Lead Ads you collect names, emails, and phone numbers. Through Instagram Shopping you handle product interactions and checkout data. Link in bio clicks generate analytics data. DM inquiries contain conversation data. The Meta Pixel on your website tracks browsing behaviour and conversions. Each of these must be disclosed in your privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for Instagram Shopping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Instagram Shopping involves product interactions, checkout data, and customer information. Whether you use Instagram Checkout (where purchases happen within the app) or link to an external shop like Shopify, customer data is being collected and processed. Your privacy policy must cover how you handle this commerce data.",
      },
    },
    {
      "@type": "Question",
      name: "Does Instagram's privacy policy cover my business account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Instagram's (Meta's) privacy policy covers data that Meta collects through the Instagram platform. It does not cover data you collect through Lead Ads, external websites, email lists, DM-based business inquiries, or third-party tools. You need your own privacy policy to disclose your specific data handling practices.",
      },
    },
    {
      "@type": "Question",
      name: "Do Instagram influencers need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if they engage in any commercial data collection activities. This includes using affiliate links, directing followers to external websites, collecting email addresses, running sponsored content with tracking links, or operating any form of online shop. Privacy laws are triggered by data collection, not by job title.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I put my Instagram privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link to it from your Instagram bio (directly or through your link-in-bio page), your Meta Ads Manager account, your Lead Ad forms, your external website footer, your email newsletter footer, and your Instagram Shopping storefront if applicable. The privacy policy should be hosted on a dedicated URL that you control.",
      },
    },
  ],
};

const tocSections = [
  { id: "do-accounts-need-one", title: "Do You Need One?" },
  { id: "what-data-collected", title: "What Data You Handle" },
  { id: "meta-advertising", title: "Meta Advertising Requirements" },
  { id: "instagram-shopping", title: "Instagram Shopping & Commerce" },
  { id: "link-in-bio", title: "Link in Bio & External Sites" },
  { id: "common-myths", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create One" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForInstagramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Instagram Business Accounts & Creators (2026)",
            description:
              "Instagram business accounts that run ads, collect leads, or link to external sites need a privacy policy. Learn what Meta requires, what data you handle, and how to stay compliant.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-09",
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
                name: "Privacy Policy for Instagram",
                item: "https://ultrafastutilities.com/privacy-policy-for-instagram",
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
                Privacy Policy for Instagram
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
                  Instagram Business
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                If your Instagram business account runs ads, uses lead
                generation forms, links to external websites, or sells products
                through Instagram Shopping, you are collecting personal data
                and need a privacy policy. Here is what Meta requires, what
                data you handle, and how to create a compliant policy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Instagram business accounts, creators, and influencers.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: April 2026 &middot; Reviewed for GDPR, CCPA &amp; CalOPPA compliance
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
                href="/do-i-need-a-privacy-policy-for-collecting-emails"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Email Collection Guide
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
                    Need an Instagram privacy policy?
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
                <span>Last updated: April 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>10 min read</span>
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
                  <strong>Yes, Instagram business accounts need a privacy policy.</strong>{" "}
                  If you run Meta ads, use lead generation forms, link to
                  external websites, use Instagram Shopping, or collect
                  customer inquiries through DMs, you are collecting personal
                  data. Privacy laws and Meta&apos;s own advertising policies
                  require you to disclose these practices in a published
                  privacy policy.
                </p>
              </div>

              {/* ── Section 1: Do Instagram Accounts Need a Privacy Policy? ── */}
              <section id="do-accounts-need-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Do Instagram Accounts Need a Privacy Policy?
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Instagram (owned by Meta) has its own privacy policy that
                    covers the data Meta collects through the Instagram
                    platform. However, Meta&apos;s policy does not cover data
                    that you, as a business or creator, collect from your
                    audience through your own tools and activities. If you
                    engage in any of the following, you need your own privacy
                    policy:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Running Instagram or Meta ads",
                        desc: "Meta's advertising platform requires advertisers to provide a privacy policy. When you run ads, Meta collects data on your behalf including click-through behaviour, conversion tracking (via Meta Pixel), and audience targeting data. You are responsible for disclosing how this advertising data is used.",
                      },
                      {
                        title: "Using lead generation forms",
                        desc: "Instagram Lead Ads collect personal data (names, email addresses, phone numbers) directly from users within the Instagram app. This data flows to your CRM, email marketing platform, or ad account. Because you are the party collecting and using this data, you must have a privacy policy disclosing the collection and its purposes.",
                      },
                      {
                        title: "Linking to external websites or shops",
                        desc: "Your bio link, swipe-up links (for Stories), and link stickers direct followers to external destinations. If those destinations use analytics, cookies, contact forms, or e-commerce checkout, personal data is collected when your followers arrive. Your privacy policy must cover this external data collection.",
                      },
                      {
                        title: "Collecting DM inquiries for business",
                        desc: "If you receive and respond to customer inquiries through Instagram Direct Messages for business purposes, you are processing personal data (names, account information, message content, and potentially order details or complaints). This is especially relevant for service-based businesses that book clients through DMs.",
                      },
                      {
                        title: "Using Instagram Shopping",
                        desc: "Whether you use Instagram Checkout (in-app purchases) or link products to an external Shopify, WooCommerce, or BigCommerce store, commerce data including customer names, shipping addresses, payment details, and order history is being collected. Your privacy policy must disclose how this commerce data is handled.",
                      },
                      {
                        title: "Operating as a creator with brand partnerships",
                        desc: "Creators who receive products, run sponsored content with tracking links, use affiliate programs, or operate their own product lines are engaged in commercial activities that collect data. Branded content with UTM parameters, affiliate tracking pixels, and discount code tracking all involve personal data collection.",
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
                        Meta Ads account suspension, rejection of lead
                        generation ad campaigns, GDPR fines up to &euro;20
                        million, CCPA penalties of $7,500 per violation, and
                        loss of customer trust. Meta actively reviews advertiser
                        compliance and can restrict your ad account without
                        warning. Learn the full breakdown of{" "}
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
                      q: "Does this apply to personal Instagram accounts?",
                      a: "Personal accounts that are used purely for personal sharing (no ads, no commerce, no lead generation) generally do not need their own privacy policy because Meta's policy covers platform-level data collection. However, the moment you switch to a business or creator account and engage in commercial activities, the requirement applies.",
                    },
                    {
                      q: "What about Instagram accounts for freelancers?",
                      a: "Freelancers who use Instagram to acquire clients, showcase portfolios, and direct potential clients to external booking or contact forms are engaged in commercial data collection. If you link to a website, collect emails, or receive business inquiries through DMs, you need a privacy policy.",
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

              {/* ── Section 2: What Data Instagram Business Accounts Handle ── */}
              <section id="what-data-collected" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Data Do Instagram Business Accounts Handle?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every data type your account might collect or facilitate.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    The data your Instagram business account handles depends on
                    which features and external tools you use. Here is a
                    comprehensive breakdown by source:
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
                            "Instagram Lead Ads",
                            "Names, email addresses, phone numbers, custom form fields (job title, company, etc.)",
                            "You (controller), Meta (processor)",
                          ],
                          [
                            "Instagram Shopping",
                            "Product page views, add-to-cart events, checkout data, customer names, shipping and payment info",
                            "You (controller), commerce platform (processor)",
                          ],
                          [
                            "Meta Pixel (on your website)",
                            "Page views, button clicks, purchase events, cart activity, IP addresses, browser data, device IDs",
                            "Joint controller (you and Meta)",
                          ],
                          [
                            "Link in bio clicks",
                            "Click analytics, referring source, geographic data, device type, timestamp",
                            "Link platform (controller), you (recipient)",
                          ],
                          [
                            "DM business inquiries",
                            "Usernames, message content, contact details shared in conversation, order information",
                            "Meta (platform), you (business use)",
                          ],
                          [
                            "Instagram Insights",
                            "Follower demographics, reach data, engagement metrics, audience geography",
                            "Meta (controller, aggregated data)",
                          ],
                          [
                            "User-generated content / tagged photos",
                            "Usernames, content, location tags, hashtag associations",
                            "Meta (platform), you (if you repost/collect)",
                          ],
                          [
                            "Custom Audiences (ad targeting)",
                            "Hashed email lists, phone number lists, website visitor data from Pixel",
                            "Joint controller (you and Meta)",
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
                    The critical distinction: Instagram Insights provides
                    aggregated demographic data that Meta controls. But Lead
                    Ads, Shopping data, Pixel tracking, and Custom Audiences
                    involve personal data that you collect, control, or jointly
                    control with Meta. These are what your privacy policy must
                    cover.
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
                          When you upload a customer email list to Meta for
                          Custom Audience targeting, Meta hashes the data and
                          matches it against its user database. Under GDPR, the
                          European Court of Justice has ruled that this creates a
                          joint controller relationship between you and Meta.
                          This means both parties are responsible for data
                          protection compliance, and your privacy policy must
                          disclose that you share customer data with Meta for
                          advertising purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 3: Meta's Advertising Requirements ── */}
              <section id="meta-advertising" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Meta&apos;s Advertising Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Platform-level requirements for running Instagram ads.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Meta has specific requirements for advertisers that go
                    beyond what privacy laws mandate. These are contractual
                    requirements enforced through Meta&apos;s advertising
                    platform. Violating them can result in ad account
                    restrictions, campaign rejections, or permanent account
                    suspension.
                  </p>

                  {[
                    {
                      title: "Privacy policy requirement for all advertisers",
                      desc: "Meta's Advertising Policies state that advertisers must have a privacy policy. This is required when you create an ad account and is checked during the ad review process. Your privacy policy must be accessible via a working URL and must disclose your data collection and use practices. Meta can reject ad campaigns or restrict your account if your privacy policy is missing, inaccessible, or inadequate.",
                    },
                    {
                      title: "Lead Ads require a privacy policy link on the form",
                      desc: "Instagram Lead Ads collect personal data (names, emails, phone numbers) directly within the Instagram app. Meta requires you to include a privacy policy link on the lead form itself, visible to users before they submit their information. The form cannot be published without this link. Your privacy policy must specifically describe how you will use the lead data you collect.",
                    },
                    {
                      title: "Custom Audiences and data matching",
                      desc: "When you upload customer lists (email addresses, phone numbers) to Meta for Custom Audience targeting, you are certifying that you have the right to use that data and that you collected it in compliance with applicable laws. Meta's Custom Audience Terms require you to have proper consent from individuals on your list and to disclose this practice in your privacy policy.",
                    },
                    {
                      title: "Meta Pixel and Conversions API tracking",
                      desc: "Installing the Meta Pixel on your website or using the Conversions API sends visitor behaviour data (page views, add-to-cart events, purchases, button clicks) to Meta. Under GDPR, this requires cookie consent because the Pixel sets tracking cookies. Your privacy policy must disclose that you use the Meta Pixel, what data it collects, and that this data is shared with Meta for advertising purposes.",
                    },
                    {
                      title: "Lookalike Audiences",
                      desc: "Creating Lookalike Audiences from your customer data or Pixel data involves Meta analyzing the personal data you provide to find similar users. Your privacy policy should disclose that customer data may be used for advertising audience targeting through Meta's platform.",
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
                        q: "Can Meta actually suspend my ad account for not having a privacy policy?",
                        a: "Yes. Meta regularly restricts and suspends ad accounts for policy violations, including missing or inadequate privacy policies. This is especially enforced for Lead Ads, where the privacy policy link is a required field on the form. Account restrictions can take weeks or months to resolve through Meta's appeals process.",
                      },
                      {
                        q: "Does boosting a post count as running ads?",
                        a: "Yes. Boosting a post through Instagram creates an ad campaign in Meta Ads Manager. The same advertising policies apply, including the privacy policy requirement. Even a $5 boosted post triggers Meta's advertiser obligations.",
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

              {/* ── Section 4: Instagram Shopping and Commerce ── */}
              <section id="instagram-shopping" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Instagram Shopping and Commerce
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Selling products through Instagram creates significant
                      data obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Instagram Shopping allows businesses to tag products in
                    posts, Stories, and Reels, creating a seamless path from
                    content discovery to purchase. Whether you use Instagram
                    Checkout (in-app purchases) or link to an external online
                    store, commerce activities involve substantial personal data
                    collection that must be disclosed in your privacy policy.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Instagram Checkout (in-app purchases)",
                        desc: "When customers buy directly within Instagram, Meta processes the payment and collects customer names, shipping addresses, email addresses, and payment card details. As the merchant, you receive order details, customer contact information, and shipping addresses. Your privacy policy must explain how you handle this order data, how long you retain it, and whether you use it for marketing.",
                      },
                      {
                        title: "External shop links (Shopify, WooCommerce, BigCommerce)",
                        desc: "If product tags link to your external online store, the full e-commerce data collection happens on your platform. This includes customer accounts, order history, payment processing through Stripe or PayPal, shipping carrier integrations, and analytics tracking. Your privacy policy must cover all of these data flows. See the detailed e-commerce guide for more.",
                      },
                      {
                        title: "Product catalog data",
                        desc: "Your Instagram product catalog syncs with your e-commerce platform. While the catalog itself contains product information (not personal data), the interaction data generated when users browse, save, or share your products is collected by Meta and used for ad targeting. If you use this interaction data for remarketing, your privacy policy should disclose it.",
                      },
                      {
                        title: "Customer communications after purchase",
                        desc: "Post-purchase emails, shipping notifications, review requests, and marketing follow-ups all involve using customer data you collected during the transaction. If you add purchasers to an email marketing list, send them discount codes, or target them with ads, each of these uses must be disclosed in your privacy policy with the appropriate lawful basis.",
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
                    . If you use Shopify specifically, the{" "}
                    <Link
                      href="/privacy-policy-for-shopify"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Shopify privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    covers platform-specific requirements.
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
                          When a customer purchases through Instagram Checkout
                          and you then add their email address to your Mailchimp
                          marketing list, you have changed the purpose of the
                          data processing. The original purpose was order
                          fulfillment (contract performance under GDPR). Using
                          it for marketing requires a separate lawful basis,
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

              {/* ── Section 5: Link in Bio and External Sites ── */}
              <section id="link-in-bio" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Link in Bio and External Sites
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Your bio link is where most off-platform data collection
                      begins.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Instagram allows one clickable link in your profile bio,
                    and most business accounts use it to drive traffic to an
                    external destination. Whether you link directly to your
                    website or use a link-in-bio service like Linktree, Beacons,
                    or Stan Store, this is where your followers transition from
                    the Instagram platform to your data collection ecosystem.
                  </p>

                  <p>
                    The privacy implications depend on what happens when
                    followers click your bio link:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Link-in-bio platforms (Linktree, Beacons, Later Link)",
                        desc: "These platforms collect click analytics (which links are clicked, when, from what device, and from what location) from every visitor. If you add email capture forms, product embeds, or payment integrations to your link page, additional personal data is collected. The link platform itself acts as a data processor, and your privacy policy must name it.",
                      },
                      {
                        title: "Personal or business website",
                        desc: "Your website likely uses Google Analytics or another analytics tool, has contact forms, sets cookies, and may have e-commerce functionality. Each of these collects personal data from the Instagram followers you send there. Your privacy policy must cover the full data collection chain from Instagram click to website interaction.",
                      },
                      {
                        title: "Email capture and lead magnets",
                        desc: "Many Instagram accounts direct followers to download a free resource, sign up for a webinar, or join an email list. The sign-up form collects names and email addresses, which are then stored in your email marketing platform (Mailchimp, ConvertKit, ActiveCampaign, etc.). Your privacy policy must disclose the email service provider and how subscriber data is used.",
                      },
                      {
                        title: "Booking and scheduling pages",
                        desc: "Service providers often link to Calendly, Acuity, or similar scheduling tools. These collect client names, email addresses, phone numbers, and appointment details. Some also collect payment information for paid consultations. Each booking platform acts as a data processor that must be disclosed.",
                      },
                      {
                        title: "Digital product and course pages",
                        desc: "If you sell digital products through Gumroad, Teachable, Kajabi, or Podia, the purchase process collects customer names, email addresses, payment details, and product access data. Course platforms also track learning progress and completion rates, which constitute personal data under GDPR.",
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
                    For a complete guide on website privacy policies, see the{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy for websites guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . If you collect emails from your Instagram audience, the{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-collecting-emails"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      email collection privacy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    covers the detailed requirements.
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
                          A single Instagram bio link to a Linktree page with
                          an email sign-up form can involve four separate data
                          processors: Instagram (Meta) tracks the outbound
                          click, Linktree collects visit analytics, your email
                          provider (like Mailchimp) stores the subscriber data,
                          and Mailchimp&apos;s sub-processors (such as AWS for
                          hosting and Twilio for email delivery) handle the data
                          infrastructure. Under GDPR, your privacy policy must
                          acknowledge this chain of processing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 6: Common Instagram Privacy Mistakes ── */}
              <section id="common-myths" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Scale className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Instagram Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These assumptions are widespread among Instagram business
                      owners. All of them are wrong.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Myth 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Instagram&apos;s privacy policy covers my business&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Instagram&apos;s (Meta&apos;s) privacy policy covers data
                      that Meta collects through the Instagram platform, such as
                      likes, follows, comments, and browsing behaviour within
                      the app. It does not cover data you collect through Lead
                      Ads, external websites, email lists, merch stores, or
                      booking systems. When you run a Lead Ad and collect
                      someone&apos;s email address, that data flows to your CRM
                      or email platform. Meta&apos;s privacy policy says nothing
                      about how your Mailchimp list handles that email. You need
                      your own policy for that.
                    </p>
                  </div>

                  {/* Myth 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I only post photos, I don&apos;t collect data&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      If &quot;only posting photos&quot; is truly all you do (no
                      ads, no links, no commerce, no DM-based business), then
                      Meta&apos;s policy does cover the platform-level data. But
                      most business accounts do far more. Your bio link sends
                      followers to a website with analytics. Your Stories link
                      stickers direct traffic to product pages. Your branded
                      hashtag campaigns generate user data. Even reposting
                      user-generated content raises data handling questions.
                      Posting photos is rarely the only thing a business account
                      does on Instagram.
                    </p>
                  </div>

                  {/* Myth 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;DMs are private and don&apos;t count&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      When customers contact your business through Instagram
                      DMs to inquire about services, place orders, share
                      complaints, or provide personal information like
                      addresses or phone numbers, you are receiving and
                      processing personal data for business purposes. Under
                      GDPR, this constitutes data processing even if the
                      conversation happens within the Instagram platform. If you
                      transfer DM information to a CRM, spreadsheet, or booking
                      system, you are creating a separate copy of personal data
                      that requires its own disclosure and retention policies.
                    </p>
                  </div>

                  {/* Myth 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I&apos;m just an influencer, not a business&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Privacy laws do not distinguish between &quot;influencers&quot;
                      and &quot;businesses.&quot; If you earn money through
                      brand partnerships, affiliate links, product sales, or
                      sponsored content, you are engaged in commercial activity.
                      When you post a sponsored Story with a tracking link, the
                      brand&apos;s tracking pixel collects data from every
                      follower who clicks. When you use affiliate links,
                      tracking cookies are set on your followers&apos; devices.
                      Under GDPR, you are a data controller for the processing
                      you initiate, regardless of whether you call yourself an
                      influencer, creator, or business owner.
                    </p>
                  </div>

                  {/* Myth 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Lead forms are Meta&apos;s responsibility&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      While Meta provides the technical infrastructure for Lead
                      Ads, the data collected belongs to you. You design the
                      form, you choose what fields to include, you receive the
                      data, and you decide how to use it. Under GDPR, you are
                      the data controller for lead form submissions. Meta acts
                      as a data processor handling the technical delivery. This
                      means the responsibility for having a privacy policy,
                      obtaining proper consent, and managing the data securely
                      falls on you, not on Meta. That is precisely why Meta
                      requires you to link your privacy policy on the lead form
                      itself.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 7: How to Create a Privacy Policy for Your Instagram Business ── */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your Instagram Business
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Six steps from audit to publication.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Creating a privacy policy for your Instagram business
                    account is straightforward once you map out your data
                    collection points. Follow these steps:
                  </p>

                  {[
                    {
                      step: "1",
                      title: "Audit every data collection point in your Instagram ecosystem",
                      desc: "List every tool and platform connected to your Instagram business: Meta Ads Manager, Lead Ad forms, Meta Pixel, external website, link-in-bio service, email marketing platform, e-commerce platform, booking tools, CRM, and any analytics tools. For each, note what personal data it collects from your followers or customers.",
                    },
                    {
                      step: "2",
                      title: "Determine which privacy laws apply to your audience",
                      desc: "Check your Instagram Insights for audience geography. If any followers are in the EU or UK, GDPR applies. Followers in California trigger CCPA and CalOPPA. Most Instagram business accounts with more than a few hundred followers have a geographically diverse audience, meaning GDPR, CCPA, and CalOPPA apply at minimum.",
                    },
                    {
                      step: "3",
                      title: "Map data types to purposes and lawful bases",
                      desc: "For each type of personal data, document the purpose and GDPR lawful basis. Lead Ad data for marketing = consent. Customer purchase data for order fulfillment = contract performance. Meta Pixel tracking for ad optimization = legitimate interests (with cookie consent required). Email marketing = consent. Map every data flow.",
                    },
                    {
                      step: "4",
                      title: "Name every third-party service and processor",
                      desc: "GDPR requires naming specific services. Write 'Meta Platforms, Inc. (for advertising and lead generation)' not 'social media advertising partners'. Write 'Shopify Inc. (for order processing)' not 'e-commerce platform'. Name your email provider, payment processor, analytics tools, booking platform, and link-in-bio service.",
                    },
                    {
                      step: "5",
                      title: "Generate your privacy policy",
                      desc: "Use a structured privacy policy generator that asks about your specific Instagram business setup and produces a customized document. This covers Meta advertising, lead generation, e-commerce, email marketing, and cookie consent in a single, coherent policy. Our generator handles this in under 60 seconds for $4.99.",
                    },
                    {
                      step: "6",
                      title: "Publish and link from every touchpoint",
                      desc: "Host your privacy policy on a dedicated URL. Link to it from your Instagram bio (or include it on your link-in-bio page), Meta Ads Manager account, every Lead Ad form, external website footer, email newsletter footer, and any e-commerce checkout pages. Set a reminder to review and update it every 6 months.",
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
                    . Learn about{" "}
                    <Link
                      href="/how-often-should-you-update-your-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      how often to update your policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    as your business grows. And see why{" "}
                    <Link
                      href="/can-i-copy-someone-elses-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      copying another business&apos;s policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    creates more problems than it solves.
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
                      Generate Your Instagram Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your Instagram business
                      setup and get a customized, compliant privacy policy
                      covering Meta ads, lead generation, shopping, and email
                      collection in under 60 seconds.
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
                      Do Instagram business accounts need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. If you run Instagram or Meta ads, use lead generation
                      forms, link to external websites, use Instagram Shopping,
                      or collect DM inquiries for business purposes, you are
                      collecting or facilitating the collection of personal
                      data. Privacy laws (
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
                      , CalOPPA) and Meta&apos;s own advertising policies
                      require you to have a privacy policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does Meta require a privacy policy for Instagram ads?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. Meta&apos;s advertising policies require that
                      advertisers provide a privacy policy. For Lead Ads
                      specifically, Meta requires a privacy policy link directly
                      on the lead form because you are collecting personal data
                      (names, emails, phone numbers) from users within the
                      Instagram app. The form cannot be submitted for review
                      without this link.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What data do Instagram business accounts collect?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Through Lead Ads you collect names, emails, and phone
                      numbers. Through Instagram Shopping you handle product
                      interactions and checkout data. Link in bio clicks
                      generate analytics data. DM inquiries contain conversation
                      data. The Meta Pixel on your website tracks browsing
                      behaviour and conversions. Custom Audiences involve
                      matching your customer lists against Meta&apos;s user
                      database. Each of these must be disclosed.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do I need a privacy policy for Instagram Shopping?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. Instagram Shopping involves product interactions,
                      checkout data, and customer information. Whether you use
                      Instagram Checkout or link to an external shop like{" "}
                      <Link
                        href="/privacy-policy-for-shopify"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        Shopify
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , customer data is being collected and processed. Your
                      privacy policy must cover how you handle this commerce
                      data, including order information, payment processing,
                      and post-purchase communications.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does Instagram&apos;s privacy policy cover my business
                      account?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      No. Instagram&apos;s (Meta&apos;s) privacy policy covers
                      data that Meta collects through the Instagram platform. It
                      does not cover data you collect through Lead Ads, external
                      websites, email lists, DM-based business inquiries, or
                      third-party tools. You need your own privacy policy to
                      disclose your specific data handling practices outside the
                      platform.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do Instagram influencers need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes, if they engage in any commercial data collection
                      activities. This includes using affiliate links, directing
                      followers to external websites, collecting email
                      addresses, running sponsored content with tracking links,
                      or operating any form of online shop. Privacy laws are
                      triggered by data collection, not by job title or
                      follower count. A creator with 1,000 followers using
                      affiliate links has the same obligations as one with
                      1 million.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Where should I put my Instagram privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Link to it from your Instagram bio (directly or through
                      your link-in-bio page), your Meta Ads Manager account,
                      your Lead Ad forms, your external website footer, your
                      email newsletter footer, and your Instagram Shopping
                      storefront if applicable. The privacy policy should be
                      hosted on a dedicated URL that you control, not as a
                      social media post or highlight.
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
                      href: "/privacy-policy-for-small-business",
                      icon: FileText,
                      title: "Small Business Privacy Policy",
                      desc: "Compliance guide for small businesses",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                      icon: Users,
                      title: "Privacy Policy for Email Collection",
                      desc: "Newsletter and email opt-in compliance",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      icon: Globe,
                      title: "E-Commerce Privacy Policy",
                      desc: "Online store compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "Complete website compliance guide",
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
                      href: "/cookie-policy-for-websites",
                      icon: Cookie,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie categories and GDPR rules",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      icon: BookOpen,
                      title: "How Often to Update Your Policy",
                      desc: "When and why to review your policy",
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
