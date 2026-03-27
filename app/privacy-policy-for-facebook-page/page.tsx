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
    "Privacy Policy for Facebook Page: Business Page Guide (2026) | ultrafastutilities",
  description:
    "Create a privacy policy for your Facebook Business Page. Covers Meta Pixel, Custom Audiences, Lead Ads, Facebook Shop, Messenger bots, Groups, and Meta Business Suite requirements.",
  keywords:
    "privacy policy for facebook page, facebook business page privacy policy, facebook privacy policy, facebook page privacy, facebook business privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-facebook-page",
  },
  openGraph: {
    title:
      "Privacy Policy for Facebook Page: Business Page Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for your Facebook Business Page. Covers Meta Pixel, Custom Audiences, Lead Ads, Facebook Shop, Messenger bots, Groups, and Meta Business Suite requirements.",
    url: "https://ultrafastutilities.com/privacy-policy-for-facebook-page",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Facebook Page | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Facebook Page: Business Page Guide (2026)",
    description:
      "Create a privacy policy for your Facebook Business Page. Covers Meta Pixel, Custom Audiences, Lead Ads, Facebook Shop, Messenger bots, and Groups.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Facebook Business Pages need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your Facebook Page runs Meta ads, uses Lead Ads, operates a Facebook Shop, collects data through Messenger bots, manages a Facebook Group for business, or uses Meta Pixel on your website, you are collecting or facilitating the collection of personal data. Privacy laws and Meta's advertising policies require you to have a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does Meta require a privacy policy for Facebook ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Meta's advertising policies require all advertisers to provide a privacy policy URL. For Lead Ads, Meta requires a privacy policy link directly on the lead form because you are collecting personal data (names, emails, phone numbers) from users within Facebook. The form cannot be published without this link.",
      },
    },
    {
      "@type": "Question",
      name: "What is the joint controller ruling for Facebook Pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2018, the Court of Justice of the European Union (CJEU) ruled in the Wirtschaftsakademie case (C-210/16) that Facebook Page administrators are joint controllers with Meta for the processing of visitor data through Page Insights. This means both you and Meta share responsibility for GDPR compliance regarding the data collected when users visit your Facebook Page.",
      },
    },
    {
      "@type": "Question",
      name: "What data does a Facebook Page collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Facebook Pages collect data through multiple channels: Page Insights provides visitor demographics and behaviour analytics, Meta Pixel tracks website visitor activity, Custom Audiences match your customer lists against Facebook users, Lead Ads collect names and emails directly, Facebook Shop handles commerce data, Messenger collects conversation data, Groups collect member information, and Events gather attendee details.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for a Facebook Group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if the Group is operated for business purposes. Business Groups collect member data including profile information, answers to membership questions, post content, and engagement data. If you use Group membership data for marketing, lead generation, or audience building, your privacy policy must disclose these practices.",
      },
    },
    {
      "@type": "Question",
      name: "Does Facebook's privacy policy cover my Business Page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Facebook's (Meta's) privacy policy covers data that Meta collects through the Facebook platform. It does not cover data you collect through Lead Ads, your external website, email lists, Messenger bot conversations, or third-party integrations. You need your own privacy policy to disclose your specific data handling practices.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I put my Facebook Page privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link to it from your Facebook Page's About section, your Meta Ads Manager account, every Lead Ad form, your Messenger bot welcome message, your Facebook Shop terms, your Group description, your external website footer, and your email newsletter footer. The privacy policy should be hosted on a dedicated URL that you control.",
      },
    },
  ],
};

const tocSections = [
  { id: "when-pages-need-one", title: "When You Need One" },
  { id: "data-sources", title: "Data Sources" },
  { id: "meta-pixel", title: "Meta Pixel Requirements" },
  { id: "custom-audiences", title: "Custom Audiences" },
  { id: "lead-ads", title: "Lead Ads Data" },
  { id: "facebook-shop", title: "Facebook Shop" },
  { id: "messenger-bots", title: "Messenger Bots" },
  { id: "joint-controller", title: "Joint Controller Status" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create One" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForFacebookPagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Facebook Page: What Business Pages Must Disclose",
            description:
              "Create a privacy policy for your Facebook Business Page. Covers Meta Pixel, Custom Audiences, Lead Ads, Facebook Shop, Messenger bots, Groups, and Meta Business Suite requirements.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-27",
            dateModified: "2026-03-27",
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
                name: "Privacy Policy for Facebook Page",
                item: "https://ultrafastutilities.com/privacy-policy-for-facebook-page",
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
            name: "How to Create a Privacy Policy for Your Facebook Business Page",
            description:
              "Six steps to create a compliant privacy policy for your Facebook Business Page covering Meta Pixel, Custom Audiences, Lead Ads, and Messenger.",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Audit every data collection point connected to your Facebook Page",
                text: "List every tool and platform connected to your Facebook Page: Meta Ads Manager, Lead Ad forms, Meta Pixel, Conversions API, Facebook Shop, Messenger bots, Groups, Events, external website, email marketing platform, CRM, and any third-party integrations. For each, note what personal data it collects.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Identify which privacy laws apply based on your audience",
                text: "Check your Page Insights for audience geography. If any followers are in the EU or UK, GDPR applies and the joint controller ruling is relevant. Followers in California trigger CCPA and CalOPPA. Most Facebook Pages with business audiences span multiple jurisdictions.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Map data types to purposes and lawful bases",
                text: "For each type of personal data, document the purpose and GDPR lawful basis. Page Insights data falls under joint controller agreement with Meta. Lead Ad data for marketing requires consent. Messenger bot data for customer service is legitimate interests. Map every data flow.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Name every third-party service and processor",
                text: "GDPR requires naming specific services. Write 'Meta Platforms, Inc. (for advertising and Page Insights)' not 'social media partners'. Name your email provider, CRM, payment processor, Messenger bot platform, and any analytics tools beyond what Meta provides.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Generate your privacy policy",
                text: "Use a structured privacy policy generator that asks about your specific Facebook Page setup and produces a customized document covering Meta advertising, lead generation, Messenger, commerce, and cookie consent in a single policy.",
              },
              {
                "@type": "HowToStep",
                position: 6,
                name: "Publish and link from every touchpoint",
                text: "Host your privacy policy on a dedicated URL. Link to it from your Facebook Page About section, Meta Ads Manager, every Lead Ad form, Messenger bot welcome message, Facebook Shop, Group description, external website footer, and email newsletter footer.",
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
                Privacy Policy for Facebook Page
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
                  Facebook Page
                </span>
                : What Business Pages Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                If your Facebook Business Page runs Meta ads, uses Lead Ads,
                operates a Facebook Shop, collects inquiries through Messenger,
                or manages a Group, you are collecting personal data and need
                a privacy policy. Here is what Meta requires, what data you
                handle, and how to create a compliant policy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Facebook Business Pages, community managers, and page
                administrators.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp; CalOPPA compliance
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
                href="/do-i-need-a-privacy-policy-for-facebook-ads"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Facebook Ads Guide
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
                    Need a Facebook Page privacy policy?
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
                <span>Last updated: March 2026</span>
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
                  <strong>Yes, Facebook Business Pages need a privacy policy.</strong>{" "}
                  If your Page runs Meta ads, uses Lead Ads, operates a Facebook
                  Shop, collects customer inquiries through Messenger, manages a
                  Group, hosts Events, or has the Meta Pixel installed on your
                  website, you are collecting personal data. Privacy laws and
                  Meta&apos;s own advertising policies require you to disclose
                  these practices in a published privacy policy. Under EU law,
                  Facebook Page administrators are joint controllers with Meta
                  for Page Insights data.
                </p>
              </div>

              {/* Section 1: When Facebook Pages Need a Privacy Policy */}
              <section id="when-pages-need-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      When Facebook Pages Need a Privacy Policy
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Facebook (owned by Meta) has its own privacy policy that
                    covers the data Meta collects through the Facebook platform.
                    However, Meta&apos;s policy does not cover data that you, as
                    a Page administrator or business, collect from your audience
                    through your own tools and activities. If you engage in any
                    of the following, you need your own privacy policy:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Running Meta ads from your Page",
                        desc: "Meta's advertising platform requires advertisers to provide a privacy policy. When you run ads, Meta collects data on your behalf including click-through behaviour, conversion tracking (via Meta Pixel), and audience targeting data. You are responsible for disclosing how this advertising data is used.",
                      },
                      {
                        title: "Using Lead Ads to collect contact information",
                        desc: "Facebook Lead Ads collect personal data (names, email addresses, phone numbers, custom fields) directly from users within Facebook. This data flows to your CRM, email marketing platform, or ad account. Because you are the party collecting and using this data, you must have a privacy policy disclosing the collection and its purposes.",
                      },
                      {
                        title: "Operating a Facebook Shop",
                        desc: "Whether you use Facebook Checkout (in-app purchases) or link products to an external Shopify, WooCommerce, or BigCommerce store, commerce data including customer names, shipping addresses, payment details, and order history is being collected. Your privacy policy must disclose how this commerce data is handled.",
                      },
                      {
                        title: "Collecting inquiries through Messenger",
                        desc: "If you receive customer inquiries, process orders, or handle support through Facebook Messenger, you are processing personal data. Messenger bots and automated responses collect user names, message content, and potentially payment information, email addresses, and phone numbers shared in conversation.",
                      },
                      {
                        title: "Managing a Facebook Group for business",
                        desc: "Business Groups collect member data including profile information, answers to membership screening questions, post content, and engagement data. If you use Group membership data for marketing, lead generation, or audience building, these data practices must be disclosed.",
                      },
                      {
                        title: "Hosting Facebook Events",
                        desc: "Events collect attendee information including names, RSVP status, and any details shared through event discussions. If you use event attendance data for follow-up marketing or lead nurturing, your privacy policy must cover this.",
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
                        Meta Ads account suspension, rejection of Lead Ad
                        campaigns, GDPR fines up to &euro;20 million
                        (especially given the joint controller ruling), CCPA
                        penalties of $7,500 per violation, Facebook Shop
                        restrictions, and loss of customer trust. Meta actively
                        reviews advertiser compliance and can restrict your ad
                        account without warning. Learn the full breakdown of{" "}
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
                      q: "Does this apply to personal Facebook profiles?",
                      a: "Personal profiles that are used purely for personal sharing (no ads, no commerce, no lead generation) generally do not need their own privacy policy because Meta's policy covers platform-level data collection. However, the moment you create a Facebook Business Page and engage in commercial activities, the requirement applies to that Page.",
                    },
                    {
                      q: "What about nonprofit Facebook Pages?",
                      a: "Nonprofits that use Facebook Pages to collect donations, run fundraising ads, gather volunteer sign-ups through Lead Ads, or manage supporter Groups are engaged in data collection. If your nonprofit Page collects personal data through any of these activities, you need a privacy policy that discloses these practices.",
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

              {/* Section 2: Data Sources Table */}
              <section id="data-sources" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Data Sources for Facebook Business Pages
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every data type your Page might collect or facilitate.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    The data your Facebook Business Page handles depends on
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
                            "Page Insights",
                            "Visitor demographics, reach data, engagement metrics, audience geography, page view sources",
                            "Joint controller (you and Meta, per CJEU ruling)",
                          ],
                          [
                            "Meta Pixel",
                            "Page views, button clicks, purchase events, cart activity, IP addresses, browser data, device IDs",
                            "Joint controller (you and Meta)",
                          ],
                          [
                            "Custom Audiences",
                            "Hashed email lists, phone number lists, website visitor data from Pixel, app activity data",
                            "Joint controller (you and Meta)",
                          ],
                          [
                            "Lead Ads",
                            "Names, email addresses, phone numbers, custom form fields (job title, company, location, etc.)",
                            "You (controller), Meta (processor)",
                          ],
                          [
                            "Facebook Shop",
                            "Product page views, add-to-cart events, checkout data, customer names, shipping and payment info",
                            "You (controller), commerce platform (processor)",
                          ],
                          [
                            "Messenger",
                            "Usernames, message content, contact details shared in conversation, order information, bot interaction data",
                            "Meta (platform), you (business use)",
                          ],
                          [
                            "Groups",
                            "Member names, profile data, membership question answers, post content, engagement data",
                            "Meta (platform), you (administrator)",
                          ],
                          [
                            "Events",
                            "Attendee names, RSVP status, event discussion content, ticket purchase data (if applicable)",
                            "Meta (platform), you (organizer)",
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
                    The critical distinction: Page Insights creates a joint
                    controller relationship with Meta under EU law. But Lead
                    Ads, Shop data, Pixel tracking, Custom Audiences, and
                    Messenger conversations involve personal data that you
                    collect, control, or jointly control with Meta. These are
                    what your privacy policy must cover in detail.
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
                          The 2018 CJEU ruling (Wirtschaftsakademie, C-210/16)
                          established that simply operating a Facebook Page
                          makes you a joint controller with Meta for visitor
                          data processed through Page Insights. This applies
                          even if you never look at your Insights dashboard.
                          The act of creating a Page that enables Meta to
                          collect visitor data is enough to trigger joint
                          controller responsibility under GDPR.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 3: Meta Pixel Requirements */}
              <section id="meta-pixel" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Meta Pixel Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What the Pixel collects and what your policy must
                      disclose.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    The Meta Pixel is a JavaScript snippet installed on your
                    external website that sends visitor behaviour data back to
                    Meta for ad targeting, conversion tracking, and audience
                    building. If you run any Facebook ads and have the Pixel on
                    your website, your privacy policy must address this
                    tracking in detail.
                  </p>

                  {[
                    {
                      title: "What the Meta Pixel collects",
                      desc: "The Pixel tracks page views, button clicks, form submissions, purchase events, add-to-cart actions, search queries, content views, and registration events. It also collects IP addresses, browser and device information, referring URLs, and Facebook cookie data. All of this is sent to Meta's servers for ad optimization and audience building.",
                    },
                    {
                      title: "Cookie consent requirements under GDPR",
                      desc: "The Meta Pixel sets tracking cookies on visitor devices. Under GDPR and the ePrivacy Directive, this requires explicit cookie consent before the Pixel fires. Your website must have a cookie consent banner that blocks the Pixel until the visitor accepts marketing or advertising cookies. Firing the Pixel before consent is a GDPR violation.",
                    },
                    {
                      title: "Conversions API as a server-side complement",
                      desc: "The Conversions API (CAPI) sends event data from your server directly to Meta, bypassing browser-based cookie restrictions. While CAPI does not set cookies on user devices, it still transmits personal data (hashed emails, phone numbers, IP addresses) to Meta. Your privacy policy must disclose CAPI data sharing regardless of whether cookies are involved.",
                    },
                    {
                      title: "Privacy policy disclosures for the Pixel",
                      desc: "Your privacy policy must state that you use the Meta Pixel, describe what data it collects, explain that this data is shared with Meta Platforms, Inc. for advertising purposes, identify the lawful basis (typically consent for EU visitors, legitimate interests for others), and explain how visitors can opt out of tracking.",
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

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For a deeper look at Facebook advertising compliance,
                    see the{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-facebook-ads"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Facebook ads privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 4: Custom Audiences and Lookalikes */}
              <section id="custom-audiences" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Custom Audiences and Lookalike Audiences
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How customer list targeting creates privacy obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Custom Audiences allow you to target ads at specific people
                    by uploading customer lists (email addresses, phone
                    numbers) or using Meta Pixel website visitor data. Lookalike
                    Audiences extend this by finding new users who resemble
                    your existing customers. Both features involve significant
                    personal data processing that must be disclosed.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Customer list uploads",
                        desc: "When you upload a customer email or phone list to Meta, the data is hashed and matched against Meta's user database. Under GDPR, the CJEU has confirmed that this creates a joint controller relationship. Your privacy policy must disclose that you share customer data with Meta for advertising purposes, and you must have the right to use that data for targeting.",
                      },
                      {
                        title: "Website Custom Audiences (Pixel-based)",
                        desc: "These audiences are built from Meta Pixel data collected on your website. Every visitor who triggers a Pixel event (page view, purchase, add-to-cart) can be added to a retargeting audience. Your privacy policy must explain this retargeting practice and provide an opt-out mechanism.",
                      },
                      {
                        title: "Lookalike Audience creation",
                        desc: "Creating Lookalike Audiences from your customer data or Pixel data involves Meta analyzing the personal data you provide to find similar users. While Meta performs the matching, the process is initiated by your data. Your privacy policy should disclose that customer data may be used for advertising audience expansion through Meta's platform.",
                      },
                      {
                        title: "Meta's Custom Audience Terms",
                        desc: "When you create Custom Audiences, you agree to Meta's Custom Audience Terms, which require you to have proper consent or lawful basis for the data you upload, to have disclosed this practice in your privacy policy, and to remove individuals who opt out of your marketing. Violating these terms can result in ad account restrictions.",
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

                  {/* Did you know box 2 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          When you upload a customer email list to Meta for
                          Custom Audience targeting, Meta hashes the data
                          locally in your browser before transmission. However,
                          the hashing does not anonymize the data under GDPR
                          because Meta can re-identify individuals by matching
                          hashes against its user database. This means the data
                          remains personal data throughout the process, and
                          your privacy policy must treat it as such.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 5: Lead Ads Data Handling */}
              <section id="lead-ads" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Lead Ads Data Handling
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How to handle personal data collected through Facebook
                      Lead Ads.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Facebook Lead Ads collect personal data directly within
                    the Facebook app. Users tap on your ad, a pre-filled form
                    appears with their Facebook profile data (name, email,
                    phone), and they submit it without leaving the platform.
                    This creates specific privacy obligations because you are
                    the data controller for the information collected.
                  </p>

                  {[
                    {
                      title: "Privacy policy link is mandatory on the form",
                      desc: "Meta requires a privacy policy link on every Lead Ad form. The form cannot be published without it. Users see this link before they submit their data. Your privacy policy must specifically describe how you will use the lead data, what happens to it after collection, how long you retain it, and who has access to it.",
                    },
                    {
                      title: "Data flows to your systems",
                      desc: "Lead data can flow to your CRM (HubSpot, Salesforce), email marketing platform (Mailchimp, ActiveCampaign), or be downloaded manually from Ads Manager. Each integration creates a data processing chain. Your privacy policy must name these downstream processors and explain the transfer.",
                    },
                    {
                      title: "GDPR consent requirements for Lead Ads",
                      desc: "Under GDPR, the legal basis for Lead Ad data depends on how you use it. If the form collects data for a specific service inquiry, legitimate interests may apply. If you add leads to a marketing email list, you need explicit consent. Consider adding a consent checkbox to your Lead Ad form for marketing purposes.",
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
                        q: "Can I add Lead Ad contacts to my email newsletter?",
                        a: "Only if you have explicit consent for marketing communications. A Lead Ad submission for a specific inquiry (e.g., requesting a quote) does not constitute consent for general marketing emails. Add a clear opt-in checkbox to your Lead Ad form if you intend to send marketing emails, and document the consent in your privacy policy.",
                      },
                      {
                        q: "How long should I keep Lead Ad data?",
                        a: "Under GDPR, you should only retain data for as long as necessary for its stated purpose. If a lead does not convert into a customer, keeping their data indefinitely is not justified. Define a retention period in your privacy policy (e.g., 12 months for unconverted leads) and delete data when the period expires.",
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

              {/* Section 6: Facebook Shop and Commerce */}
              <section id="facebook-shop" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Facebook Shop and Commerce
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Selling products through Facebook creates significant
                      data obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Facebook Shops allow businesses to create a storefront
                    directly on their Facebook Page. Whether customers purchase
                    through Facebook Checkout or are redirected to your
                    external website, commerce activities involve substantial
                    personal data collection that must be disclosed.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Facebook Checkout (in-app purchases)",
                        desc: "When customers buy directly within Facebook, Meta processes the payment and collects customer names, shipping addresses, email addresses, and payment card details. As the merchant, you receive order details, customer contact information, and shipping addresses. Your privacy policy must explain how you handle this order data, how long you retain it, and whether you use it for marketing.",
                      },
                      {
                        title: "External shop links (Shopify, WooCommerce, BigCommerce)",
                        desc: "If your Facebook Shop links products to your external online store, the full e-commerce data collection happens on your platform. This includes customer accounts, order history, payment processing through Stripe or PayPal, shipping carrier integrations, and analytics tracking. Your privacy policy must cover all of these data flows.",
                      },
                      {
                        title: "Product catalog and interaction data",
                        desc: "Your Facebook product catalog syncs with your e-commerce platform. While the catalog itself contains product information, the interaction data generated when users browse, save, or share your products is collected by Meta and used for ad targeting. If you use this interaction data for remarketing, your privacy policy should disclose it.",
                      },
                      {
                        title: "Post-purchase communications",
                        desc: "Order confirmation emails, shipping notifications, review requests, and marketing follow-ups all involve using customer data you collected during the transaction. If you add purchasers to an email marketing list, send them discount codes, or target them with ads, each of these uses must be disclosed with the appropriate lawful basis.",
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

              {/* Section 7: Messenger Bots and Automated Responses */}
              <section id="messenger-bots" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Messenger Bots and Automated Responses
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How automated Messenger interactions create data
                      obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Facebook Messenger is a primary customer communication
                    channel for many business Pages. Whether you use automated
                    responses, chatbot platforms (ManyChat, Chatfuel, MobileMonkey),
                    or manual replies, Messenger conversations involve personal
                    data processing that must be disclosed in your privacy
                    policy.
                  </p>

                  {[
                    {
                      title: "What Messenger collects",
                      desc: "Messenger conversations contain user names, profile information, message content, timestamps, read receipts, and any personal data shared during the conversation (email addresses, phone numbers, order details, addresses, payment information). If you use Messenger for customer support, you may also receive complaint details, account information, and sensitive personal circumstances.",
                    },
                    {
                      title: "Chatbot platforms as data processors",
                      desc: "If you use ManyChat, Chatfuel, or another bot platform, that service processes the Messenger data on your behalf. Under GDPR, these platforms are data processors and must be named in your privacy policy. You should also have a data processing agreement (DPA) with each chatbot provider.",
                    },
                    {
                      title: "Automated data collection through bots",
                      desc: "Messenger bots can be configured to collect email addresses, phone numbers, preferences, quiz answers, and purchase intent data through interactive conversations. This automated collection requires the same disclosures as any other form of data collection. Your privacy policy must explain what data your bot collects, why, and how it is used.",
                    },
                    {
                      title: "Messenger marketing and sponsored messages",
                      desc: "Sending promotional messages through Messenger (including sponsored messages and subscription messaging) requires user opt-in. Your privacy policy must disclose that you use Messenger for marketing purposes and explain how users can opt out of receiving promotional messages.",
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

                  {/* Did you know box 3 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          A single ManyChat bot flow that collects an email
                          address and adds the user to a Mailchimp list
                          involves three separate data processors: Meta
                          (Messenger platform), ManyChat (bot automation), and
                          Mailchimp (email storage and delivery). Under GDPR,
                          your privacy policy must acknowledge each processor
                          in this chain, and you need a data processing
                          agreement with each one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 8: Joint Controller Status */}
              <section id="joint-controller" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Scale className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Joint Controller Status (EU Ruling)
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What the CJEU ruling means for your Facebook Page.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    In June 2018, the Court of Justice of the European Union
                    (CJEU) issued a landmark ruling in the Wirtschaftsakademie
                    case (C-210/16) that fundamentally changed the privacy
                    obligations of Facebook Page administrators. The court
                    ruled that Page admins are joint controllers with Facebook
                    (now Meta) for the processing of personal data collected
                    through Page Insights.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "What the ruling established",
                        desc: "The CJEU found that by creating a Facebook Page, the administrator enables Meta to place cookies on visitors' devices and collect data about their interactions with the Page. Because the admin benefits from this data through Page Insights (visitor demographics, engagement metrics, reach data), the admin is a joint controller alongside Meta for this processing, even though the admin does not directly access the raw data.",
                      },
                      {
                        title: "Meta's Page Insights Controller Addendum",
                        desc: "In response to the ruling, Meta created the Page Insights Controller Addendum, which is automatically accepted when you create or administer a Facebook Page. This addendum establishes the joint controller arrangement and defines responsibilities. However, it places most practical compliance obligations on the Page administrator, including providing information to data subjects about the joint processing.",
                      },
                      {
                        title: "What your privacy policy must include",
                        desc: "Your privacy policy must acknowledge the joint controller relationship with Meta for Page Insights, explain what data is processed through Page Insights (visitor demographics, interaction data, reach metrics), link to Meta's Page Insights Controller Addendum, identify Meta as the primary contact for data subject access requests related to Page Insights data, and explain your own use of the aggregated Insights data.",
                      },
                      {
                        title: "Practical implications for Page administrators",
                        desc: "If a German, French, or other EU data protection authority investigates your Facebook Page's data practices, they can hold you jointly liable with Meta. Several EU DPAs have already taken enforcement action against Facebook Page administrators. Having a clear privacy policy that acknowledges the joint controller arrangement is essential for demonstrating compliance.",
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
                    For detailed GDPR compliance guidance, see the{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR privacy policy template
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 9: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Facebook Page Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These assumptions are widespread among Facebook Page
                      administrators. All of them are wrong.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Mistake 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Facebook&apos;s privacy policy covers my Page&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Facebook&apos;s (Meta&apos;s) privacy policy covers data
                      that Meta collects through the Facebook platform, such as
                      likes, follows, comments, and browsing behaviour within
                      the app. It does not cover data you collect through Lead
                      Ads, your external website, email lists, Messenger bot
                      conversations, Facebook Shop orders, or booking systems.
                      When you run a Lead Ad and collect someone&apos;s email
                      address, that data flows to your CRM or email platform.
                      Meta&apos;s privacy policy says nothing about how your
                      HubSpot or Mailchimp list handles that email. You need
                      your own policy for that.
                    </p>
                  </div>

                  {/* Mistake 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I just post content, I don&apos;t collect data&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Even if you only post content on your Facebook Page, the
                      CJEU ruling makes you a joint controller for Page
                      Insights data. Every visitor to your Page generates data
                      that Meta processes and presents to you as demographics,
                      reach, and engagement metrics. Beyond Insights, most
                      business Pages also link to external websites, run
                      occasional ads, or receive Messenger inquiries. The
                      moment any of these activities occur, additional data
                      collection obligations apply.
                    </p>
                  </div>

                  {/* Mistake 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Messenger conversations are Meta&apos;s responsibility&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      While Meta provides the Messenger infrastructure, you
                      are the business receiving and using the conversation
                      data. When customers share personal information through
                      Messenger (email addresses, phone numbers, order
                      details, complaints), you are processing that data for
                      your business purposes. If you use a chatbot platform
                      like ManyChat, you are directing the automated data
                      collection. Under GDPR, you are the data controller for
                      the business use of Messenger data, and you must
                      disclose this in your privacy policy.
                    </p>
                  </div>

                  {/* Mistake 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;My Group is separate from my business&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      If you run a Facebook Group that is linked to your
                      business, used for lead generation, or serves as a
                      community for your customers, the data collected through
                      that Group is part of your business data processing.
                      Membership screening questions, member profile data,
                      post content, and engagement patterns all constitute
                      personal data. Using Group membership lists for email
                      marketing, ad targeting, or customer segmentation must
                      be disclosed in your privacy policy.
                    </p>
                  </div>

                  {/* Mistake 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Boosting a post is not the same as running ads&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Boosting a post from your Facebook Page creates an ad
                      campaign in Meta Ads Manager. The same advertising
                      policies apply, including the privacy policy requirement.
                      Even a $5 boosted post triggers Meta&apos;s advertiser
                      obligations. The Pixel fires, audience targeting data is
                      processed, and conversion tracking is enabled. There is
                      no distinction between a &quot;boosted post&quot; and a
                      &quot;real ad&quot; when it comes to privacy compliance.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 10: How to Create */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your Facebook Page
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Six steps from audit to publication.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Creating a privacy policy for your Facebook Business Page
                    is straightforward once you map out your data collection
                    points. Follow these steps:
                  </p>

                  {[
                    {
                      step: "1",
                      title: "Audit every data collection point connected to your Facebook Page",
                      desc: "List every tool and platform connected to your Page: Meta Ads Manager, Lead Ad forms, Meta Pixel, Conversions API, Facebook Shop, Messenger bots, Groups, Events, external website, email marketing platform, CRM, and any third-party integrations. For each, note what personal data it collects from your audience or customers.",
                    },
                    {
                      step: "2",
                      title: "Identify which privacy laws apply based on your audience",
                      desc: "Check your Page Insights for audience geography. If any followers are in the EU or UK, GDPR applies and the joint controller ruling is relevant. Followers in California trigger CCPA and CalOPPA. Most Facebook Pages with business audiences span multiple jurisdictions, meaning GDPR, CCPA, and CalOPPA apply at minimum.",
                    },
                    {
                      step: "3",
                      title: "Map data types to purposes and lawful bases",
                      desc: "For each type of personal data, document the purpose and GDPR lawful basis. Page Insights data falls under the joint controller agreement with Meta. Lead Ad data for marketing requires consent. Customer purchase data for order fulfillment is contract performance. Messenger bot data for customer service is legitimate interests. Map every data flow.",
                    },
                    {
                      step: "4",
                      title: "Name every third-party service and processor",
                      desc: "GDPR requires naming specific services. Write 'Meta Platforms, Inc. (for advertising, Page Insights, and Messenger)' not 'social media partners'. Name your email provider, CRM, payment processor, Messenger bot platform (ManyChat, Chatfuel), e-commerce platform, and any analytics tools.",
                    },
                    {
                      step: "5",
                      title: "Generate your privacy policy",
                      desc: "Use a structured privacy policy generator that asks about your specific Facebook Page setup and produces a customized document. This covers Meta advertising, lead generation, Messenger, commerce, joint controller status, and cookie consent in a single, coherent policy. Our generator handles this in under 60 seconds for $4.99.",
                    },
                    {
                      step: "6",
                      title: "Publish and link from every touchpoint",
                      desc: "Host your privacy policy on a dedicated URL. Link to it from your Facebook Page About section, Meta Ads Manager account, every Lead Ad form, Messenger bot welcome message, Facebook Shop, Group description, external website footer, and email newsletter footer. Set a reminder to review and update it every 6 months.",
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
                    . For Instagram-specific guidance, see the{" "}
                    <Link
                      href="/privacy-policy-for-instagram"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Instagram privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . For WhatsApp Business, see the{" "}
                    <Link
                      href="/privacy-policy-for-whatsapp-business"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      WhatsApp Business privacy guide
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
                      Generate Your Facebook Page Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your Facebook Page setup
                      and get a customized, compliant privacy policy covering
                      Meta ads, Lead Ads, Messenger, Facebook Shop, and joint
                      controller requirements in under 60 seconds.
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
                      Do Facebook Business Pages need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. If your Page runs Meta ads, uses Lead Ads, operates
                      a Facebook Shop, collects inquiries through Messenger,
                      manages a Group, or has the Meta Pixel on your website,
                      you are collecting personal data. Privacy laws (
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , CCPA, CalOPPA) and Meta&apos;s advertising policies
                      require you to have a privacy policy. Under EU law, even
                      Page Insights data makes you a joint controller with Meta.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does Meta require a privacy policy for Facebook ads?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. Meta&apos;s advertising policies require that
                      advertisers provide a privacy policy. For Lead Ads
                      specifically, Meta requires a privacy policy link directly
                      on the lead form because you are collecting personal data
                      (names, emails, phone numbers) from users within
                      Facebook. The form cannot be submitted for review
                      without this link. See the detailed{" "}
                      <Link
                        href="/do-i-need-a-privacy-policy-for-facebook-ads"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        Facebook ads guide
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What is the joint controller ruling for Facebook Pages?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      In 2018, the CJEU ruled (Wirtschaftsakademie, C-210/16)
                      that Facebook Page administrators are joint controllers
                      with Meta for the processing of visitor data through Page
                      Insights. This means both you and Meta share
                      responsibility for GDPR compliance regarding the data
                      collected when users visit your Facebook Page. Your
                      privacy policy must acknowledge this joint controller
                      arrangement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What data does a Facebook Page collect?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Through Page Insights you receive visitor demographics
                      and engagement data. Through Lead Ads you collect names,
                      emails, and phone numbers. Facebook Shop handles
                      commerce data. Messenger collects conversation data.
                      The Meta Pixel on your website tracks browsing behaviour
                      and conversions. Custom Audiences involve matching your
                      customer lists against Meta&apos;s user database. Groups
                      collect member data, and Events collect attendee
                      information. Each of these must be disclosed.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do I need a privacy policy for a Facebook Group?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes, if the Group is operated for business purposes.
                      Business Groups collect member data including profile
                      information, answers to membership questions, post
                      content, and engagement data. If you use Group
                      membership data for marketing, lead generation, or
                      audience building, your privacy policy must disclose
                      these practices. Include the Group privacy notice in
                      your Group description.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does Facebook&apos;s privacy policy cover my Business
                      Page?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      No. Facebook&apos;s (Meta&apos;s) privacy policy covers
                      data that Meta collects through the Facebook platform. It
                      does not cover data you collect through Lead Ads, your
                      external website, email lists, Messenger bot
                      conversations, or third-party integrations. You need
                      your own privacy policy to disclose your specific data
                      handling practices.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Where should I put my Facebook Page privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Link to it from your Facebook Page&apos;s About section,
                      your Meta Ads Manager account, every Lead Ad form, your
                      Messenger bot welcome message, your Facebook Shop terms,
                      your Group description, your external website footer, and
                      your email newsletter footer. The privacy policy should
                      be hosted on a dedicated URL that you control, not as a
                      Facebook post or note.
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
                      href: "/privacy-policy-for-whatsapp-business",
                      icon: Globe,
                      title: "WhatsApp Business Privacy Policy",
                      desc: "WhatsApp Business API compliance",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-facebook-ads",
                      icon: Users,
                      title: "Facebook Ads Privacy Policy",
                      desc: "Meta advertising compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-tiktok",
                      icon: Globe,
                      title: "Privacy Policy for TikTok",
                      desc: "TikTok business account compliance",
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
                      desc: "Create a compliant policy in 60 seconds",
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
