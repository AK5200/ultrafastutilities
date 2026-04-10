import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Tv,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Users,
  Globe,
  Lock,
  Gift,
  MessageCircle,
  Clock,
  CreditCard,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Twitch Streamers [Complete Guide 2026]",
  description:
    "Create a privacy policy for your Twitch channel. Covers extensions, donations, subscriber data, Discord, merch stores, COPPA, and affiliate links.",
  keywords:
    "privacy policy for twitch, twitch streamer privacy policy, twitch GDPR, twitch extension privacy, twitch donation data",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-twitch",
  },
  openGraph: {
    title: "Privacy Policy for Twitch Streamers [Complete Guide 2026]",
    description:
      "Create a privacy policy for your Twitch channel. Covers extensions, donations, subscriber data, Discord, merch stores, COPPA, and affiliate links.",
    url: "https://ultrafastutilities.com/privacy-policy-for-twitch",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Twitch Streamers | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Twitch Streamers [Complete Guide 2026]",
    description:
      "Create a privacy policy for your Twitch channel. Covers extensions, donations, subscriber data, Discord, merch stores, COPPA, and affiliate links.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-streamers-need-policy", title: "Why Streamers Need a Policy" },
  { id: "streamer-data-flows", title: "Streamer Data Flows" },
  { id: "donation-platforms", title: "Donation Platform Data" },
  { id: "coppa-compliance", title: "COPPA and Children" },
  { id: "what-to-include", title: "What to Include" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForTwitchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Twitch Streamers [Complete Guide 2026]",
            description:
              "Create a privacy policy for your Twitch channel. Covers extensions, donations, subscriber data, Discord, merch stores, COPPA, and affiliate links.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2025-01-01",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Twitch Streamers", item: "https://ultrafastutilities.com/privacy-policy-for-twitch" },
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
              <span className="text-slate-600">Privacy Policy for Twitch Streamers</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Tv className="w-3.5 h-3.5" />
                Streamer Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Twitch Streamers
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Twitch streamers collect viewer data through extensions,
                donations, subscriptions, and community platforms. Here is what
                your privacy policy needs to cover.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For streamers, content creators, and Twitch affiliates/partners.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-youtube"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Tv className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                YouTube Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-discord"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Discord Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Generate Policy
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
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/80">
                  <p className="text-sm font-semibold text-slate-800">
                    Need your own policy?
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
                  <span>8 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: Why Streamers Need a Privacy Policy */}
              <section id="why-streamers-need-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Twitch Streamers Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Most Twitch streamers think privacy policies are only for
                    websites and apps. But the moment you collect viewer data --
                    through donations, Discord servers, mailing lists, merch stores,
                    or Twitch extensions -- you are a data controller under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/ccpa-privacy-policy-example"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      CCPA
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . Twitch itself has its own privacy policy, but it does not
                    cover how you, the streamer, handle data through your connected
                    services and platforms.
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Key point:</strong>{" "}
                        If you use Twitch extensions that collect viewer data, you
                        are required by Twitch&apos;s Extension Developer Policy to
                        have a privacy policy. Extensions must link to the
                        developer&apos;s privacy policy, and Twitch can remove
                        extensions that lack one.
                      </div>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Even streamers who do not build extensions still collect data
                    through multiple touchpoints: donation platforms reveal real
                    names and payment details, Discord servers collect usernames and
                    messages, and merchandise stores capture shipping addresses and
                    purchase history.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Streamer Data Flows */}
              <section id="streamer-data-flows" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Twitch Streamer Data Flows
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      The many ways streamers collect personal data from
                      viewers and community members.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* Twitch Extensions */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Tv className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Twitch Extensions
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Panel, overlay, and component extensions can access viewer usernames and Twitch IDs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Extensions with &quot;Identity Linking&quot; can correlate Twitch accounts with external identities
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Bits-in-Extensions transactions reveal viewer spending behavior
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Extension analytics track viewer interactions, clicks, and engagement time
                      </li>
                    </ul>
                  </div>

                  {/* Subscriber and Follower Data */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Subscriber and Follower Data
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Subscriber lists include usernames, subscription tiers, and renewal dates
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Follower data accessed via Twitch API reveals follow timestamps and user IDs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Gift subscription data links gifters to recipients
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Chat logs contain usernames, messages, and timestamps
                      </li>
                    </ul>
                  </div>

                  {/* Discord Server */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-indigo-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Discord Community Server
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Member usernames, discriminators, and join dates
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Messages, voice chat participation, and shared media
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Bots may collect additional data -- moderation logs, reaction tracking, level systems
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Linked accounts (Twitch, YouTube, Steam) expose cross-platform identities
                      </li>
                    </ul>
                  </div>

                  {/* Merch and Affiliate Links */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Gift className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Merchandise and Affiliate Links
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Merch stores (Spring, Fourthwall) collect names, emails, shipping addresses, and payment data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Affiliate links (Amazon Associates, other programs) track click-through and purchase behavior
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Sponsorship tracking pixels may collect viewer data without explicit interaction
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Donation Platform Data */}
              <section id="donation-platforms" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Donation Platform Data Collection
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Donation platforms are the biggest privacy concern for
                    streamers. They process financial transactions and expose
                    donor identities. Your privacy policy must disclose which
                    platforms you use and what data flows through them.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Platform</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Data Collected</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Privacy Note</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { platform: "StreamElements", data: "Donor name, email, amount, message", note: "Tips processed via PayPal or Stripe -- donor real name may be visible to streamer" },
                          { platform: "Streamlabs", data: "Donor name, email, payment details, alert preferences", note: "Integrates with OBS -- donation alerts may display donor names publicly on stream" },
                          { platform: "Ko-fi", data: "Supporter name, email, payment amount, messages", note: "Offers both one-time and recurring payments -- supporter data retained by Ko-fi" },
                          { platform: "Patreon", data: "Patron name, email, tier, payment history, shipping address", note: "Physical reward tiers collect shipping addresses -- significant personal data" },
                          { platform: "Twitch Bits", data: "Username, Bits amount, cheer message", note: "Processed by Twitch directly -- streamer sees username and message but not payment details" },
                        ].map((row, i) => (
                          <tr key={row.platform} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="py-3 px-4 font-medium text-slate-800">{row.platform}</td>
                            <td className="py-3 px-4 text-slate-600">{row.data}</td>
                            <td className="py-3 px-4 text-slate-600">{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Important:</strong>{" "}
                        When a viewer donates through PayPal-based platforms, the
                        streamer may see the donor&apos;s legal name, email address, and
                        sometimes physical address from the PayPal transaction. Your
                        privacy policy should address how you handle this data.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: COPPA Compliance */}
              <section id="coppa-compliance" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      COPPA Compliance for Twitch Content
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Twitch requires users to be at least 13 years old, but
                    younger viewers can still access streams. If your content
                    attracts or is accessible to children under 13, COPPA
                    obligations may apply to your data collection practices.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Twitch extensions and children",
                        text: "Extensions that collect data from viewers cannot knowingly collect data from children under 13 without parental consent. If your content is child-friendly, this is a real concern.",
                      },
                      {
                        label: "Discord servers",
                        text: "Discord requires users to be 13+, but enforcement is limited. If you run a community Discord, consider age verification for data-collecting bots and channels.",
                      },
                      {
                        label: "Merchandise sales",
                        text: "If a minor purchases merchandise, you may collect their personal information. Your policy should state that you do not knowingly collect data from children under 13.",
                      },
                      {
                        label: "Targeted advertising",
                        text: "If you run ads or sponsored segments that use tracking, COPPA prohibits behavioral targeting of children. Disclose your advertising practices clearly.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: What to Include */}
              <section id="what-to-include" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Your Twitch Privacy Policy Must Include
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="space-y-4">
                    {[
                      {
                        icon: Tv,
                        iconBg: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "Extension Data Disclosure",
                        desc: "List every Twitch extension you use and what viewer data each extension accesses -- usernames, Twitch IDs, interaction data, and Bits transactions.",
                      },
                      {
                        icon: CreditCard,
                        iconBg: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "Donation and Payment Data",
                        desc: "Name every donation platform (StreamElements, Streamlabs, Ko-fi, Patreon) and disclose what financial and personal data you receive from donors.",
                      },
                      {
                        icon: MessageCircle,
                        iconBg: "bg-indigo-50",
                        iconColor: "text-indigo-600",
                        title: "Community Platform Data",
                        desc: "Describe data collected through your Discord server, subreddit, or other community platforms. Include bot data collection, moderation logs, and linked accounts.",
                      },
                      {
                        icon: Gift,
                        iconBg: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Merchandise and Affiliate Data",
                        desc: "Disclose your merch platform (Spring, Fourthwall) and affiliate programs. Explain what purchase data you can access and how tracking works.",
                      },
                      {
                        icon: Lock,
                        iconBg: "bg-rose-50",
                        iconColor: "text-rose-600",
                        title: "Data Retention and Deletion",
                        desc: "Explain how long you keep chat logs, donation records, and subscriber data. Provide a way for viewers to request deletion of their information.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}
                        >
                          <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 text-[15px]">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-500 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
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
                      Generate Your Twitch Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy for your Twitch channel
                      that covers extensions, donations, community platforms,
                      and compliance needs.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Streamer-specific disclosures</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
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
                      href: "/privacy-policy-for-youtube",
                      icon: Tv,
                      title: "Privacy Policy for YouTube",
                      desc: "YouTube creator compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-discord",
                      icon: MessageCircle,
                      title: "Privacy Policy for Discord",
                      desc: "Discord server compliance",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "General website compliance guide",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      icon: CreditCard,
                      title: "E-commerce Privacy Policy",
                      desc: "Online store compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-whop",
                      icon: Gift,
                      title: "Privacy Policy for Whop",
                      desc: "Digital product seller compliance",
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
