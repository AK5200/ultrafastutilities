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
    "Privacy Policy for YouTube Channels: Do Creators Need One? (2026) | ultrafastutilities",
  description:
    "YouTube creators who collect viewer data, run ads, or link to external sites need a privacy policy. Learn what YouTube and Google require, what data your channel collects, and how to create one.",
  keywords:
    "privacy policy for youtube channel, youtube privacy policy, do youtubers need a privacy policy, youtube creator privacy policy, youtube channel terms and conditions",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-youtube-channel",
  },
  openGraph: {
    title:
      "Privacy Policy for YouTube Channels: Do Creators Need One? (2026) | ultrafastutilities",
    description:
      "YouTube creators who collect viewer data, run ads, or link to external sites need a privacy policy. Learn what YouTube and Google require, what data your channel collects, and how to create one.",
    url: "https://ultrafastutilities.com/privacy-policy-for-youtube-channel",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for YouTube Channels | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for YouTube Channels: Do Creators Need One? (2026)",
    description:
      "YouTube creators who collect viewer data, run ads, or link to external sites need a privacy policy. Learn what YouTube and Google require.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do YouTube creators need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you run ads through AdSense, collect emails, use affiliate links, have a merch store, accept Super Chat or channel memberships, or link to any external website. These activities involve collecting or facilitating the collection of personal data, which triggers privacy law requirements under GDPR, CCPA, and CalOPPA.",
      },
    },
    {
      "@type": "Question",
      name: "Does the YouTube Partner Program require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The YouTube Partner Program runs through Google AdSense, and AdSense terms of service require publishers to have a privacy policy that discloses the use of cookies for ad personalization. If you monetize your channel, you need a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "What data does a YouTube channel collect from viewers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through YouTube itself, Google collects viewer demographics, watch time, and interaction data. But if you link to external sites, collect emails, use affiliate links, run a merch store, or accept Super Chat payments, you or your third-party services collect names, email addresses, payment information, IP addresses, and browsing behaviour.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if I only post videos and nothing else?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you strictly post videos with no monetization, no external links, no email list, no merch store, and no affiliate links, YouTube and Google handle all data collection under their own privacy policies. However, most active creators use at least one of these features, which creates the need for their own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Where should YouTubers put their privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link to it in your YouTube channel description, your video descriptions (especially if they contain affiliate links), your link-in-bio page, any external website you operate, and any email newsletter footers. If you use Google AdSense, your privacy policy URL must be set in your AdSense account settings.",
      },
    },
    {
      "@type": "Question",
      name: "Does COPPA affect YouTube creators who make content for kids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your content is marked as 'made for kids', COPPA restricts what data can be collected from viewers under 13. YouTube disables personalized ads, comments, and notification bells on these videos. Creators who collect data from children through external websites or email lists face additional COPPA requirements and potential FTC fines of up to $50,349 per violation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a free privacy policy for my YouTube channel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free privacy policy templates are typically too generic to cover a YouTube creator's specific setup. They often miss AdSense disclosures, affiliate link tracking, merch store data handling, and Super Chat payment processing. A structured generator that asks about your specific data practices produces a far more accurate and compliant document.",
      },
    },
  ],
};

const tocSections = [
  { id: "do-creators-need-one", title: "Do Creators Need One?" },
  { id: "what-data-channels-handle", title: "What Data Channels Handle" },
  { id: "youtube-requirements", title: "YouTube Requirements" },
  { id: "creator-websites", title: "Creator Websites & Link-in-Bio" },
  { id: "coppa-kids", title: "YouTube Kids & COPPA" },
  { id: "common-myths", title: "Common Creator Mistakes" },
  { id: "how-to-create", title: "How to Create One" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForYouTubeChannelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for YouTube Channels: Do Creators Need One? (2026)",
            description:
              "YouTube creators who collect viewer data, run ads, or link to external sites need a privacy policy. Learn what YouTube and Google require, what data your channel collects, and how to create one.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-09",
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
                name: "Privacy Policy for YouTube Channel",
                item: "https://ultrafastutilities.com/privacy-policy-for-youtube-channel",
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
                Privacy Policy for YouTube Channel
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Globe className="w-3.5 h-3.5" />
                Creator Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  YouTube Channels
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                If you run ads, use affiliate links, collect emails, or link
                to an external website from your YouTube channel, you are
                handling personal data and need a privacy policy. Here is
                exactly what YouTube and Google require, what data your channel
                touches, and how to create a compliant policy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For YouTube creators, vloggers, and channel operators.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp; CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/do-i-need-a-privacy-policy-for-a-blog"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Blog Privacy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Website Policy Guide
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
                    Need a creator privacy policy?
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
                  <strong>Yes, most YouTube creators need a privacy policy.</strong>{" "}
                  If you run ads through Google AdSense, use affiliate links,
                  collect emails from viewers, operate a merch store, accept
                  Super Chat payments, or link to any external website, you are
                  collecting or facilitating the collection of personal data.
                  Privacy laws require you to disclose these practices in a
                  published privacy policy.
                </p>
              </div>

              {/* ── Section 1: Do YouTube Creators Need a Privacy Policy? ── */}
              <section id="do-creators-need-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Do YouTube Creators Need a Privacy Policy?
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    The short answer is yes, in most cases. YouTube itself is
                    operated by Google, and Google has its own privacy policy
                    covering the YouTube platform. However, Google&apos;s policy
                    only covers data that Google collects through its services.
                    The moment you, as a creator, collect data outside the
                    YouTube platform, or use tools that collect data on your
                    behalf, you need your own privacy policy.
                  </p>
                  <p>
                    Here are the specific activities that trigger the requirement.
                    If you do any of these, you need a privacy policy:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Running ads through Google AdSense",
                        desc: "The YouTube Partner Program monetizes channels through AdSense. AdSense uses cookies and tracking technologies to serve personalized advertisements to viewers. Google AdSense terms of service explicitly require publishers to maintain a privacy policy disclosing the use of cookies for ad personalization, including a link to Google's advertising policies.",
                      },
                      {
                        title: "Using affiliate links in video descriptions",
                        desc: "Amazon Associates, ShareASale, Impact, and other affiliate networks place tracking cookies on viewers who click your links. These cookies follow users across websites to attribute purchases back to you. Your privacy policy must disclose that you use affiliate tracking and that third-party cookies are set when viewers click your links.",
                      },
                      {
                        title: "Collecting email addresses from viewers",
                        desc: "If you direct viewers to sign up for a newsletter, download a free resource, or join an email list through services like Mailchimp, ConvertKit, or Beehiiv, you are collecting personal data directly. This requires explicit disclosure of what you collect, how you use it, and which email service provider stores the data.",
                      },
                      {
                        title: "Operating a merch store",
                        desc: "Whether you use Shopify, Spring (formerly Teespring), Fourthwall, or another platform, your merchandise store collects customer names, shipping addresses, email addresses, and payment information. Even if the platform handles checkout, you are the merchant directing customers to share their data.",
                      },
                      {
                        title: "Accepting Super Chat, Super Thanks, or Channel Memberships",
                        desc: "These features involve financial transactions processed through Google. While Google handles the payment processing, you receive supporter information and are part of the transaction chain. Channel memberships create an ongoing relationship where you have access to member data.",
                      },
                      {
                        title: "Linking to external websites from your channel or videos",
                        desc: "If your video descriptions, channel about page, or community posts link to a personal website, Linktree, Carrd, or any external page, and that page uses analytics, contact forms, or cookies, you are directing viewers to a destination that collects their data. Your privacy policy should cover the full chain.",
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
                        Google AdSense account suspension (which means losing
                        your YouTube monetization), GDPR fines up to &euro;20
                        million, CCPA penalties of $7,500 per violation,
                        affiliate program termination, and loss of viewer trust.
                        Learn the full breakdown of{" "}
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
                      q: "What if I only post videos and do nothing else?",
                      a: "If you have zero monetization, no external links, no email list, no merch, and no affiliate links, YouTube's own privacy policy covers the data collection happening on the platform. However, the moment you add any of these features, you need your own policy.",
                    },
                    {
                      q: "Does channel size matter?",
                      a: "No. Privacy laws have no subscriber threshold. A creator with 100 subscribers running AdSense has the same legal obligations as a creator with 10 million subscribers. The trigger is data collection, not audience size.",
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

              {/* ── Section 2: What Data YouTube Channels Handle ── */}
              <section id="what-data-channels-handle" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Data Do YouTube Channels Handle?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A breakdown of every data type your channel might touch.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    The data your YouTube channel handles depends on which
                    features and external tools you use. Here is a comprehensive
                    breakdown of data types by source:
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
                            "Google AdSense",
                            "Cookies, ad personalization signals, browsing behaviour, device identifiers, demographic inferences",
                            "Google (you must disclose)",
                          ],
                          [
                            "YouTube Analytics",
                            "Viewer demographics, watch time, traffic sources, geographic data, device types",
                            "Google (aggregated data)",
                          ],
                          [
                            "External website",
                            "IP addresses, browser data, page views, form submissions, cookie identifiers",
                            "You (direct controller)",
                          ],
                          [
                            "Email list (Mailchimp, ConvertKit)",
                            "Email addresses, names, open rates, click tracking, subscriber location",
                            "You (controller), email service (processor)",
                          ],
                          [
                            "Merch store (Shopify, Spring)",
                            "Customer names, shipping addresses, email addresses, payment info, order history",
                            "You (controller), platform (processor)",
                          ],
                          [
                            "Affiliate links",
                            "Click tracking cookies, purchase attribution data, browsing behaviour across sites",
                            "Affiliate network (controller), you (facilitator)",
                          ],
                          [
                            "Super Chat / Memberships",
                            "Supporter names, payment data, membership tier, transaction history",
                            "Google (processor), you (recipient)",
                          ],
                          [
                            "Community tab interactions",
                            "Poll responses, comment content, reaction data",
                            "Google (controller)",
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
                    The key distinction is between data Google controls on
                    YouTube (which Google&apos;s own privacy policy covers) and
                    data you collect through external tools and services (which
                    your privacy policy must cover). Most active creators fall
                    into the second category because they use at least one
                    external tool or service.
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
                          When a viewer clicks an affiliate link in your video
                          description, the affiliate network (such as Amazon
                          Associates) sets a tracking cookie that follows the
                          viewer across the web for up to 24 hours or longer.
                          Under GDPR, you are considered a joint controller of
                          this data because you initiated the tracking by placing
                          the link. This means your privacy policy must disclose
                          which affiliate networks you use and what cookies they
                          set.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 3: When YouTube Specifically Requires It ── */}
              <section id="youtube-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      When YouTube and Google Specifically Require a Privacy Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Platform requirements beyond just privacy laws.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Beyond the legal requirements from GDPR, CCPA, and other
                    privacy laws, Google and YouTube have their own terms of
                    service that mandate a privacy policy in specific situations.
                    These are contractual requirements, meaning violating them
                    can result in account suspension or termination even if no
                    government regulator gets involved.
                  </p>

                  {[
                    {
                      title: "YouTube Partner Program and AdSense",
                      desc: "The YouTube Partner Program (YPP) monetizes channels through Google AdSense. Section 4 of the AdSense Terms of Service requires publishers to maintain a privacy policy that clearly discloses: (1) the use of cookies for ad serving, (2) that third-party vendors including Google use cookies to serve ads based on prior visits, and (3) how users can opt out of personalized advertising through Google's Ad Settings or the Digital Advertising Alliance's opt-out page. Failure to maintain this policy is grounds for AdSense account suspension, which directly kills your YouTube monetization.",
                    },
                    {
                      title: "Channel Memberships",
                      desc: "Channel memberships involve recurring payments from viewers. While Google Payments handles the transaction processing, you are offering the membership and receiving the funds. You have access to member information including their channel names and membership tiers. If you offer member-only content, exclusive Discord access, or email communications to members, you are collecting and processing personal data that must be disclosed.",
                    },
                    {
                      title: "Super Chat, Super Thanks, and Super Stickers",
                      desc: "These features involve financial transactions where viewers pay to have their messages highlighted during live streams or on videos. Google processes the payments, but you receive viewer names, payment amounts, and message content. If you interact with these supporters outside YouTube (for example, sending thank-you emails or adding them to a supporter list), additional data handling occurs that requires disclosure.",
                    },
                    {
                      title: "YouTube API Services",
                      desc: "If you use third-party tools that access the YouTube API (such as TubeBuddy, vidIQ, or Social Blade), the YouTube API Services Terms of Service require that your application or service has a privacy policy. This applies to creators who authorize third-party tools to access their channel data and analytics.",
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
                        q: "Can YouTube actually suspend my channel for not having a privacy policy?",
                        a: "YouTube itself does not directly enforce privacy policy requirements on channels. However, Google AdSense can and does suspend accounts for missing or inadequate privacy policies. Since YPP monetization runs through AdSense, losing your AdSense account means losing channel monetization. Additionally, regulators can fine you independently of YouTube's enforcement.",
                      },
                      {
                        q: "Does YouTube Studio show any privacy policy warnings?",
                        a: "YouTube Studio does not currently display privacy policy warnings. The AdSense dashboard is where you will find privacy-related compliance notices. You should set your privacy policy URL in your AdSense account settings under 'Site Authorization' to stay compliant.",
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

              {/* ── Section 4: Creator Websites and Link-in-Bio Pages ── */}
              <section id="creator-websites" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Creator Websites and Link-in-Bio Pages
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Your external presence extends your privacy obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Most YouTube creators have some form of external web
                    presence beyond their channel. This could be a personal
                    website, a Linktree page, a Carrd page, a Stan Store, or a
                    dedicated landing page for courses or digital products.
                    Every one of these collects data from the viewers you send
                    there.
                  </p>

                  <p>
                    When you include a link in your YouTube video description,
                    channel about section, or community post, you are directing
                    your audience to a destination that will collect their data.
                    Your privacy policy needs to cover the full chain of data
                    collection, from the YouTube click through to whatever
                    happens on the external site.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Personal website or portfolio",
                        desc: "If you run a website with Google Analytics, contact forms, or any analytics tool, it collects IP addresses, browser data, geographic location, and page view history from every visitor. Your hosting provider also logs IP addresses automatically. All of this must be disclosed in your privacy policy.",
                      },
                      {
                        title: "Linktree, Carrd, or Stan Store",
                        desc: "These link-in-bio platforms collect click analytics, geographic data, and device information from visitors. If you add email collection forms or product sales to these pages, additional personal data is collected. Linktree's own analytics track which links visitors click, when they visit, and what device they use.",
                      },
                      {
                        title: "Course platforms (Teachable, Kajabi, Gumroad)",
                        desc: "Selling courses or digital products means collecting customer names, email addresses, payment information, and course progress data. These platforms act as data processors on your behalf. Your privacy policy must name the platform and describe what customer data is collected during the purchase and learning process.",
                      },
                      {
                        title: "Discord server or community platform",
                        desc: "Many creators run Discord servers for their community. While Discord has its own privacy policy, if you collect data through Discord bots, run surveys, or gather member information for any purpose, you need to disclose this. If you require members to share their email address or other information to join, that is direct data collection.",
                      },
                      {
                        title: "Patreon or Ko-fi",
                        desc: "Crowdfunding platforms collect supporter names, email addresses, payment details, and tier information. As the creator receiving these funds, you have access to supporter data and may use it for communications, exclusive content delivery, or community management. Your privacy policy should cover how you handle this supporter data.",
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
                    For a detailed guide on website privacy policies, see the{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy for websites guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . If you collect emails from viewers, the{" "}
                    <Link
                      href="/do-i-need-a-privacy-policy-for-collecting-emails"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      email collection privacy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    covers the specific requirements.
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
                          Linktree alone collects IP addresses, browser user
                          agent data, referring URLs, click timestamps, and
                          geographic location from every visitor to your link
                          page. If you add a Mailchimp email form to your
                          Linktree, the data chain extends further: Linktree
                          collects the visit data, Mailchimp collects the email
                          and subscriber metadata, and both share data with
                          sub-processors. A single link-in-bio page can involve
                          three or more data processors that must be disclosed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 5: YouTube Kids and COPPA Requirements ── */}
              <section id="coppa-kids" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      YouTube Kids and COPPA Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Special rules apply when your audience includes children.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    The Children&apos;s Online Privacy Protection Act (COPPA)
                    adds a significant layer of requirements for YouTube
                    creators whose content is aimed at children under 13. In
                    2019, the FTC fined Google $170 million for collecting
                    personal data from children on YouTube without parental
                    consent. As a result, YouTube now requires all creators to
                    classify their content as either &quot;made for kids&quot;
                    or &quot;not made for kids.&quot;
                  </p>

                  <p>
                    If your content is classified as &quot;made for kids,&quot;
                    YouTube automatically restricts several features:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Personalized ads are disabled",
                        desc: "YouTube serves only contextual ads (based on video content, not viewer behaviour) on made-for-kids content. This typically reduces ad revenue because contextual ads pay less than personalized ads. However, it also reduces the data collection footprint because behavioural tracking cookies are not set.",
                      },
                      {
                        title: "Comments are turned off",
                        desc: "YouTube disables comments on made-for-kids content to prevent children from sharing personal information in comment sections. This eliminates one data collection point, but if your privacy policy references comment data, you should update it accordingly.",
                      },
                      {
                        title: "Notification bell and subscriptions behave differently",
                        desc: "YouTube limits notification features on made-for-kids content to comply with COPPA restrictions on persistent identifiers used to contact children. Subscription feeds still work, but personalized notifications are restricted.",
                      },
                      {
                        title: "End screens and info cards are limited",
                        desc: "Some interactive features are restricted on made-for-kids videos to prevent data collection through engagement tracking. This limits your ability to direct young viewers to external links, which actually reduces your privacy obligations for those specific videos.",
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

                  <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-amber-900 text-sm">
                          COPPA fines are severe
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-amber-800">
                          The FTC can impose fines of up to $50,349 per violation
                          of COPPA. If you create content aimed at children and
                          collect data from them through external websites, email
                          lists, or apps without verifiable parental consent, you
                          face significant financial liability. The FTC has
                          actively pursued individual operators, not just large
                          companies. If your channel targets children, consult
                          with a lawyer who specializes in COPPA compliance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    Even if your YouTube videos are properly classified as
                    made-for-kids, COPPA obligations extend beyond the YouTube
                    platform. If you direct young viewers to external websites,
                    apps, or email lists, and those destinations collect data
                    from children, you must obtain verifiable parental consent
                    before collecting any personal information. This includes
                    email addresses, names, and even persistent identifiers
                    like cookies.
                  </p>

                  {/* Mini FAQ */}
                  <div className="space-y-3">
                    {[
                      {
                        q: "What if my content appeals to both kids and adults?",
                        a: "YouTube determines the 'made for kids' classification based on the primary audience. If children are a significant portion of your viewers (based on content subject matter, animation style, or age targeting), you should classify it as made for kids. Misclassification can result in FTC enforcement action.",
                      },
                      {
                        q: "Does COPPA apply outside the United States?",
                        a: "COPPA is a US federal law, but similar children's privacy laws exist in other jurisdictions. The UK's Age Appropriate Design Code, the EU's GDPR (which sets the age of consent for data processing at 13 to 16 depending on the member state), and Australia's Online Safety Act all impose additional requirements for content directed at children.",
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

              {/* ── Section 6: Common Creator Privacy Mistakes ── */}
              <section id="common-myths" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Scale className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Creator Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These assumptions are widespread among YouTubers. All of
                      them are wrong.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Myth 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;YouTube handles all the privacy stuff&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      YouTube and Google handle privacy for the YouTube platform
                      itself, meaning video playback, comments on YouTube,
                      search, and recommendations. But the moment you direct
                      viewers to your website, email list, merch store, or
                      affiliate links, the data collected through those channels
                      is your responsibility. Google&apos;s privacy policy does
                      not cover your Shopify store, your Mailchimp list, or your
                      Amazon Associates cookies. You need your own policy to
                      cover everything outside the YouTube platform.
                    </p>
                  </div>

                  {/* Myth 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I&apos;m just a small creator, nobody cares&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Privacy laws do not have a subscriber threshold. A creator
                      with 500 subscribers running AdSense, using affiliate
                      links, and collecting emails has the exact same legal
                      obligations as MrBeast. GDPR applies based on whether you
                      process personal data of EU residents, not based on your
                      channel size. Google AdSense requires a privacy policy
                      regardless of your earnings level. Small creators are
                      rarely targeted by regulators, but affiliate networks and
                      ad platforms can and do terminate accounts for
                      non-compliance at any size.
                    </p>
                  </div>

                  {/* Myth 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;My videos don&apos;t collect data&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Your videos themselves may not collect data directly, but
                      the ecosystem around them does. AdSense sets cookies on
                      every viewer who watches a monetized video. Affiliate links
                      in your description set tracking cookies when clicked.
                      Your Linktree page collects click analytics. Your merch
                      store collects purchase data. The &quot;videos don&apos;t
                      collect data&quot; framing misses the point: it is all the
                      surrounding infrastructure that triggers privacy
                      requirements, not the video file itself.
                    </p>
                  </div>

                  {/* Myth 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Affiliate links don&apos;t trigger privacy requirements&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Affiliate links are one of the most common privacy triggers
                      for YouTube creators. When a viewer clicks your Amazon
                      Associates link, Amazon sets a 24-hour tracking cookie that
                      monitors the viewer&apos;s shopping activity across Amazon.
                      Impact, ShareASale, and other networks do the same with
                      their own tracking mechanisms. Under GDPR, placing these
                      links makes you a joint controller of the resulting data
                      collection. Your privacy policy must disclose each
                      affiliate network you use and explain the tracking
                      involved. Many affiliate programs also require this
                      disclosure in their own terms of service.
                    </p>
                  </div>

                  {/* Myth 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Only businesses need privacy policies&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Privacy laws are triggered by data collection, not by
                      business registration status. An individual creator
                      operating as a sole proprietor, or even as a hobbyist, who
                      collects email addresses, runs AdSense, or uses affiliate
                      links is subject to the same privacy requirements as a
                      corporation. GDPR makes no distinction between business
                      entities and individuals when it comes to data controller
                      obligations. If you process personal data, you must comply.
                      Learn about why{" "}
                      <Link
                        href="/can-i-copy-someone-elses-privacy-policy"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        copying someone else&apos;s policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      is not a shortcut that works.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 7: How to Create a Privacy Policy for Your YouTube Channel ── */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your YouTube Channel
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Six steps from audit to publication.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Creating a privacy policy for your YouTube channel is
                    straightforward once you understand what data you handle.
                    Follow these steps to build a compliant policy that covers
                    your specific creator setup:
                  </p>

                  {[
                    {
                      step: "1",
                      title: "Audit every data collection point in your creator ecosystem",
                      desc: "List every tool and platform connected to your channel: AdSense, affiliate networks (name each one), email marketing service, merch store platform, link-in-bio service, external website, course platform, community platforms (Discord, Patreon), and any analytics tools. For each, note what personal data it collects from your viewers or customers.",
                    },
                    {
                      step: "2",
                      title: "Determine which privacy laws apply to your audience",
                      desc: "Check your YouTube Analytics for viewer geography. If you have viewers in the EU or UK, GDPR applies. Viewers in California trigger CCPA and CalOPPA. Viewers in Canada trigger PIPEDA. Most English-language channels have a global audience, which means GDPR, CCPA, and CalOPPA apply at minimum.",
                    },
                    {
                      step: "3",
                      title: "Map data types to purposes and lawful bases",
                      desc: "For each type of personal data you collect, document why you collect it and (for GDPR) the lawful basis. For example: email addresses for newsletter = consent, AdSense cookies for monetization = legitimate interests, merch store customer data for order fulfillment = contract performance. This mapping forms the foundation of your policy.",
                    },
                    {
                      step: "4",
                      title: "Name every third-party service",
                      desc: "GDPR requires you to name specific services, not just categories. Write 'Google AdSense (operated by Google LLC, USA)' instead of 'advertising partners'. Write 'Mailchimp (operated by Intuit Inc., USA)' instead of 'email service providers'. List every affiliate network, analytics tool, payment processor, and hosting provider by name.",
                    },
                    {
                      step: "5",
                      title: "Generate your privacy policy",
                      desc: "Use a structured privacy policy generator that asks about your specific setup and produces a customized document covering all required sections. This is significantly faster and more accurate than writing from scratch or modifying a generic template. Our generator covers AdSense, affiliate links, email collection, and merch store data in under 60 seconds.",
                    },
                    {
                      step: "6",
                      title: "Publish and link from every touchpoint",
                      desc: "Host your privacy policy on your external website or a dedicated page. Then link to it from: your YouTube channel description, your AdSense account settings, your video descriptions (especially those with affiliate links), your Linktree or link-in-bio page, your email newsletter footer, and your merch store footer. Set a reminder to review and update it every 6 months.",
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

                  {/* Did you know box 3 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          Google AdSense requires you to enter your privacy
                          policy URL directly in your AdSense account settings.
                          This is not optional. Under AdSense &gt; Account &gt;
                          Privacy &amp; messaging, you can set your privacy
                          policy URL. If this field is empty and Google reviews
                          your account, it can result in an ad serving
                          limitation or full account suspension. Many creators
                          discover this requirement only after receiving a
                          compliance warning.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    For guidance on what to include in your policy, see the{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR privacy policy template
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/cookie-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      cookie policy guide
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
                    as your channel grows and adds new tools.
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
                      Generate Your Creator Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your YouTube channel setup
                      and get a customized, compliant privacy policy covering
                      AdSense, affiliate links, email collection, and merch
                      store data in under 60 seconds.
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
                      Do YouTube creators need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes, if you run ads through AdSense, collect emails, use
                      affiliate links, have a merch store, accept Super Chat or
                      channel memberships, or link to any external website.
                      These activities involve collecting or facilitating the
                      collection of personal data, which triggers privacy law
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
                      , and CalOPPA.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does the YouTube Partner Program require a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. The YouTube Partner Program runs through Google
                      AdSense, and AdSense terms of service require publishers
                      to have a privacy policy that discloses the use of cookies
                      for ad personalization. If you monetize your channel
                      through YPP, you need a privacy policy. Your privacy
                      policy URL should be entered in your AdSense account
                      settings.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What data does a YouTube channel collect from viewers?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Through YouTube itself, Google collects viewer
                      demographics, watch time, and interaction data. But if you
                      link to external sites, collect emails, use affiliate
                      links, run a merch store, or accept Super Chat payments,
                      you or your third-party services collect names, email
                      addresses, payment information, IP addresses, and browsing
                      behaviour. Your privacy policy must cover the data you
                      and your services collect outside the YouTube platform.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do I need a privacy policy if I only post videos and
                      nothing else?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      If you strictly post videos with no monetization, no
                      external links, no email list, no merch store, and no
                      affiliate links, YouTube and Google handle all data
                      collection under their own privacy policies. However,
                      most active creators use at least one of these features.
                      Even enabling AdSense monetization creates the
                      requirement for your own privacy policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Where should YouTubers put their privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Link to it in your YouTube channel description, your
                      video descriptions (especially if they contain affiliate
                      links), your link-in-bio page, any external website you
                      operate, and any email newsletter footers. If you use
                      Google AdSense, your privacy policy URL must be set in
                      your AdSense account settings under the Privacy &amp;
                      messaging section.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does COPPA affect YouTube creators who make content for
                      kids?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. If your content is marked as &quot;made for kids,&quot;
                      COPPA restricts what data can be collected from viewers
                      under 13. YouTube disables personalized ads, comments,
                      and notification bells on these videos. Creators who
                      collect data from children through external websites or
                      email lists face additional COPPA requirements and
                      potential FTC fines of up to $50,349 per violation.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Can I use a free privacy policy for my YouTube channel?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Free privacy policy templates are typically too generic to
                      cover a YouTube creator&apos;s specific setup. They often
                      miss AdSense disclosures, affiliate link tracking, merch
                      store data handling, and Super Chat payment processing. A
                      structured{" "}
                      <Link
                        href="/generate"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        privacy policy generator
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      that asks about your specific data practices produces a
                      far more accurate and compliant document. See how{" "}
                      <Link
                        href="/free-vs-paid-privacy-policy-generator"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        free vs paid generators
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      compare.
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
                      href: "/do-i-need-a-privacy-policy-for-a-blog",
                      icon: BookOpen,
                      title: "Privacy Policy for a Blog",
                      desc: "Blog compliance and data collection guide",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "Complete website compliance guide",
                    },
                    {
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                      icon: Users,
                      title: "Privacy Policy for Email Collection",
                      desc: "Newsletter and email opt-in compliance",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: Cookie,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie categories and GDPR rules",
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
                      href: "/privacy-policy-for-small-business",
                      icon: FileText,
                      title: "Small Business Privacy Policy",
                      desc: "Compliance guide for small businesses",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      icon: FileText,
                      title: "Can I Copy a Privacy Policy?",
                      desc: "Why copying policies creates liability",
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
