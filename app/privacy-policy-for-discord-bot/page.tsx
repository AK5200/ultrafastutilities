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
  Shield,
  Code,
  Database,
  Key,
  Users,
  MessageSquare,
  Eye,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Discord Bots: Developer Requirements (2026) | ultrafastutilities",
  description:
    "Discord's Developer Policy requires a privacy policy for all bots. Learn exactly what to include, how to handle server data, message content, and user IDs. Generate a compliant policy in 60 seconds.",
  keywords:
    "privacy policy for discord bot, discord bot privacy policy, discord developer policy privacy, discord bot data collection, discord bot gdpr",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-discord-bot",
  },
  openGraph: {
    title:
      "Privacy Policy for Discord Bots: Developer Requirements (2026) | ultrafastutilities",
    description:
      "Discord's Developer Policy requires a privacy policy for all bots. Learn exactly what to include, how to handle server data, message content, and user IDs. Generate a compliant policy in 60 seconds.",
    url: "https://ultrafastutilities.com/privacy-policy-for-discord-bot",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Discord Bots | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Discord Bots: Developer Requirements (2026)",
    description:
      "Discord's Developer Policy requires a privacy policy for all bots. Learn what to include, how to handle server data, and generate a compliant policy in 60 seconds.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Discord require a privacy policy for bots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Discord's Developer Policy explicitly requires all applications, including bots, to have a privacy policy. The policy must be publicly accessible and linked in your bot's application settings. For verified bots (those in 75 or more servers), Discord enforces this requirement during the verification process. Even unverified bots are expected to comply with the Developer Policy.",
      },
    },
    {
      "@type": "Question",
      name: "What data do Discord bots collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discord bots receive data through the Discord API and Gateway events. This typically includes user IDs, usernames, discriminators, avatar URLs, server (guild) IDs, server names, channel IDs, and channel names. If your bot uses the Message Content privileged intent, it also receives the full text of messages. Bots using the Guild Members intent receive the full member list of servers. The key distinction is between data your bot receives from Discord and data your bot actively stores in a database.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if my Discord bot does not store data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Discord's Developer Policy requires a privacy policy regardless of whether your bot stores data in a database. Your bot still receives and processes personal data (user IDs, usernames, server information) through the Discord API. Even if this data is only held in memory temporarily, it is still being processed. Your privacy policy should explain what data your bot receives, how it processes that data, and confirm that it is not permanently stored if that is the case.",
      },
    },
    {
      "@type": "Question",
      name: "What are Discord privileged intents and how do they affect my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Privileged intents are special permissions that give your bot access to sensitive data. There are three privileged intents: Message Content (access to the full text of messages), Guild Members (access to the complete member list and member update events), and Presence (access to user online status, activities, and custom statuses). If your bot uses any privileged intents, your privacy policy must include stronger disclosures about this sensitive data collection and explain why your bot needs access to it.",
      },
    },
    {
      "@type": "Question",
      name: "When does a Discord bot need to be verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Discord requires bot verification when your bot reaches 75 or more servers. The verification process requires a valid, publicly accessible privacy policy URL. Without a privacy policy, your bot cannot be verified and will be unable to join additional servers beyond the 75-server limit. This makes a privacy policy not just a legal requirement but a practical growth requirement for any Discord bot.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I host my Discord bot's privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy needs to be hosted at a publicly accessible URL that you control. Common options include your bot's website or landing page, a dedicated page on your personal website, or a GitHub Pages site. Avoid using GitHub Gists, Google Docs, or Pastebin, as these can appear unprofessional and may be removed or altered. Discord's application settings have a specific field for your privacy policy URL, so make sure the URL is stable and permanent.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a privacy policy for my Discord bot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest approach is to use a privacy policy generator. Document what data your bot receives from Discord (user IDs, server IDs, message content if applicable), what data it stores in a database, how that data is used, and whether it is shared with any third-party services. Then use a generator to produce a complete, legally compliant policy. Add the generated policy URL to your Discord application settings under the privacy policy URL field.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Discord Bot",
  description:
    "Follow these six steps to create a privacy policy that satisfies Discord's Developer Policy and complies with GDPR, CCPA, and other applicable privacy laws.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Document all data your bot receives from Discord",
      text: "List every type of data your bot receives through the Discord API and Gateway. This includes user IDs, usernames, server IDs, channel IDs, message content (if using the Message Content intent), member lists (if using Guild Members intent), and presence data (if using Presence intent). Distinguish between data received and data stored.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify what data your bot stores and where",
      text: "Document what data your bot saves to a database, file system, or any persistent storage. Note the database type and hosting location (cloud provider, region). Include any logging that captures user data, even if stored temporarily. If your bot uses a third-party database service like MongoDB Atlas or Firebase, note that as a sub-processor.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "List all third-party services your bot uses",
      text: "Identify every external service your bot integrates with beyond Discord itself. This includes database hosting providers, API services, analytics platforms, error tracking tools like Sentry, and any other services that receive user data from your bot.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a comprehensive policy. Input the data types you identified, the storage methods, third-party services, and your contact information. The generator will produce a policy covering all required legal sections including GDPR, CCPA, and Discord Developer Policy requirements.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Host your privacy policy at a permanent URL",
      text: "Publish your privacy policy at a stable, publicly accessible URL. Use your bot's website, a GitHub Pages site, or a dedicated page on your personal domain. Avoid temporary hosting solutions like pastebin or Google Docs.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Add the privacy policy URL to your Discord application settings",
      text: "Go to the Discord Developer Portal, select your application, and add your privacy policy URL in the designated field. This URL will be displayed to users when they authorize your bot. Also add a link to your privacy policy in your bot's help command or about section.",
    },
  ],
};

const tocSections = [
  { id: "discord-requires-policy", title: "Does Discord Require One?" },
  { id: "what-bots-collect", title: "What Data Bots Collect" },
  { id: "developer-policy", title: "Developer Policy Requirements" },
  { id: "privileged-intents", title: "The Privileged Intents Problem" },
  { id: "bot-verification", title: "Bot Verification" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "easiest-way", title: "The Easiest Way" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForDiscordBotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Discord Bots: Developer Requirements (2026)",
            description:
              "Discord's Developer Policy requires a privacy policy for all bots. Learn exactly what to include, how to handle server data, message content, and user IDs.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-03-09",
            dateModified: "2026-03-09",
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
                name: "Privacy Policy for Discord Bots",
                item: "https://ultrafastutilities.com/privacy-policy-for-discord-bot",
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
                Privacy Policy for Discord Bots
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Developer Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Discord Bots
                </span>
                : Developer Requirements
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Discord&apos;s Developer Policy requires a privacy policy for
                every bot. Verified bots must have one to pass review.
                Here is exactly what your bot&apos;s privacy policy needs to
                cover, from user IDs to message content intents.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Discord bot developers, both hobbyist and commercial,
                building bots with discord.js, discord.py, or any other library.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                Discord Developer Policy compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                App Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-slack-app"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Slack App Policy
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
                    Need a privacy policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate one for your Discord bot in 60 seconds
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
                <span>Last updated: March 2026</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>10 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, Discord requires a privacy policy for all bots.</strong>{" "}
                  The Discord Developer Policy mandates that every application
                  have a publicly accessible privacy policy. Bots in 75 or
                  more servers must be verified, and verification requires a
                  privacy policy URL. Your policy must disclose what user data
                  your bot receives, stores, and how it handles message
                  content, user IDs, and server information.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Discord has grown from a gaming chat platform into one of the
                largest communication platforms in the world, with over 200
                million monthly active users. The ecosystem of Discord bots
                has grown alongside it. Millions of bots serve communities
                with moderation, music, games, utilities, and custom
                functionality.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                But most bot developers focus on features and code, not
                privacy compliance. That is a problem because Discord bots
                inherently process personal data. Every time your bot receives
                an event from the Discord Gateway, it is handling user IDs,
                usernames, server information, and potentially message
                content. Discord&apos;s Developer Policy recognizes this and
                requires all bots to have a privacy policy.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly what Discord requires, what data
                your bot collects (even if you do not realize it), how
                privileged intents affect your obligations, and the fastest
                way to create a compliant privacy policy for your Discord bot.
              </p>

              {/* Section 1: Does Discord Require a Privacy Policy? */}
              <section id="discord-requires-policy" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Does Discord Require a Privacy Policy for Bots?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Yes. Discord&apos;s Developer Policy and Developer Terms of
                  Service explicitly require all applications (including bots)
                  to maintain a privacy policy. This is not optional guidance.
                  It is a binding requirement that you agree to when you
                  create an application in the Discord Developer Portal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Required</p>
                    <p className="text-xs text-slate-500 mt-1">
                      For all Discord bots
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">75+</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Servers triggers verification
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Key className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Enforced</p>
                    <p className="text-xs text-slate-500 mt-1">
                      During bot verification
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The Developer Policy states that developers must provide a
                  privacy policy that clearly and accurately describes how
                  their application collects, uses, and shares user data.
                  This policy must be publicly accessible and linked in your
                  application&apos;s settings in the Developer Portal.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For verified bots, this requirement is strictly enforced.
                  During the verification process, Discord&apos;s team reviews
                  your privacy policy URL and checks that it adequately
                  describes your bot&apos;s data handling. If your privacy
                  policy is missing, incomplete, or inaccurate, your
                  verification will be rejected.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Even for unverified bots with fewer than 75 servers, the
                  privacy policy requirement still applies. Discord can take
                  action against any bot that violates the Developer Policy,
                  including bots that lack a privacy policy. Enforcement for
                  small bots is less systematic, but the requirement exists
                  and violations can result in your bot being disabled.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if my bot is just for my own server?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Technically, the Developer Policy applies to all bots.
                      In practice, Discord is unlikely to enforce against a
                      bot used only in one private server. However, if you
                      ever plan to grow your bot or open it to other servers,
                      having a privacy policy from the start is much easier
                      than adding one retroactively.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Where do I add my privacy policy URL in Discord?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Go to the Discord Developer Portal, select your
                      application, navigate to General Information, and you
                      will find a &quot;Privacy Policy URL&quot; field. Enter
                      the full URL to your publicly accessible privacy policy.
                      This URL is displayed to users during the OAuth2
                      authorization flow when they add your bot to a server.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: What Data Discord Bots Collect */}
              <section id="what-bots-collect" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Data Discord Bots Collect
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Understanding what data your bot collects is the first step
                  to writing an accurate privacy policy. There is an important
                  distinction between data your bot receives from Discord
                  through the API and Gateway, and data your bot actively
                  stores in a database. Your privacy policy needs to address
                  both.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Data Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          How Bot Receives It
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Personal Data?
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Requires Intent?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          User IDs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Included in every event involving a user
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (unique identifier)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Usernames
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User objects in API responses and events
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (personally identifiable)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Avatar URLs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User objects in API responses
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Potentially (may contain photos)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Server/Guild IDs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          All guild-related events
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No (organizational data)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Message content
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          MESSAGE_CREATE events (if intent enabled)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (user-generated content)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (privileged)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Member list
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          GUILD_MEMBERS events and API endpoint
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (list of identifiable users)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (privileged)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Presence data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          PRESENCE_UPDATE events
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (activity and status)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (privileged)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Slash command inputs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          INTERACTION_CREATE events
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Depends on input content
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The critical point most bot developers miss is that
                  receiving data through the API is itself data processing
                  under GDPR, even if you never store it. When your bot
                  receives a message event containing a user ID, username, and
                  message content, it has processed personal data. Your
                  privacy policy must account for this processing, not just
                  what you save to a database.
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
                        Discord user IDs are classified as personal data under
                        GDPR because they are unique identifiers that can be
                        used to identify a specific individual. Even though a
                        user ID looks like a random number (e.g.,
                        123456789012345678), it maps directly to one person
                        and is therefore personally identifiable information.
                        This means every Discord bot that receives events is
                        processing personal data.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Data Received vs. Data Stored
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy should clearly distinguish between
                  data your bot receives from Discord (which it processes
                  temporarily) and data your bot actively stores in a database
                  or file system. Users want to know whether their messages
                  are being logged, whether their user IDs are saved in a
                  database, and how long any stored data is retained.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For example, a moderation bot might receive all message
                  events but only store data when a moderation action is
                  taken (warning, mute, ban). The privacy policy should
                  explain that the bot processes all messages to check for
                  rule violations but only permanently stores records of
                  moderation actions along with the relevant user ID and
                  reason.
                </p>
              </section>

              {/* Section 3: Developer Policy Requirements */}
              <section id="developer-policy" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Discord Developer Policy Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Discord&apos;s Developer Policy sets specific requirements
                  for how bots must handle user data and what developers must
                  disclose. These requirements exist in addition to any
                  applicable privacy laws like GDPR and CCPA.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Discord Specifically Mandates
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Public privacy policy URL:</strong> Your application must have a publicly accessible privacy policy linked in the Developer Portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data handling disclosure:</strong> You must clearly describe what data your bot collects, how it uses that data, and who it shares data with</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data minimization:</strong> You should only request access to data your bot actually needs. Do not request privileged intents unless your bot requires the data they provide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data deletion:</strong> You must delete stored user data when a user requests it or when your bot is removed from a server</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Security:</strong> You must implement reasonable security measures to protect user data from unauthorized access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>No selling data:</strong> You may not sell user data obtained through the Discord API under any circumstances</span>
                  </li>
                </ul>

                {/* Did you know box 2 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Discord&apos;s Developer Policy requires that when your
                        bot is removed from a server, you must delete any data
                        specific to that server within a reasonable timeframe.
                        This means your bot should listen for the GUILD_DELETE
                        event and have a process for purging server-specific
                        data from your database. Many bots fail to implement
                        this, which is a direct policy violation.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  These Discord-specific requirements overlap with but do not
                  replace GDPR, CCPA, and other privacy laws. If your bot has
                  users in the EU, GDPR applies in addition to Discord&apos;s
                  policies. If your bot has users in California, CCPA may also
                  apply. Your privacy policy needs to satisfy all applicable
                  requirements simultaneously.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For details on general{" "}
                  <Link
                    href="/privacy-policy-for-apps"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    app privacy policy requirements
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  , including what GDPR and CCPA require for software
                  applications, see our dedicated guide.
                </p>
              </section>

              {/* Section 4: Privileged Intents */}
              <section id="privileged-intents" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Privileged Intents Problem
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Discord introduced privileged intents to protect user
                  privacy by requiring explicit approval before bots can
                  access sensitive data categories. If your bot uses any
                  privileged intents, your privacy obligations are
                  significantly greater.
                </p>

                <div className="space-y-4 my-6">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          MESSAGE_CONTENT Intent
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Gives your bot access to the full text of messages
                          in servers. Without this intent, your bot only sees
                          message content when it is directly mentioned,
                          receives a DM, or processes a slash command. With
                          it, your bot receives every message in every channel
                          it has access to. This is the most privacy-sensitive
                          intent because message content can contain anything:
                          personal conversations, email addresses, phone
                          numbers, or other sensitive information shared
                          casually in chat.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          GUILD_MEMBERS Intent
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Gives your bot access to the complete member list of
                          every server it is in, including member join/leave
                          events and role changes. Without this intent, your
                          bot only has access to members it has interacted
                          with. With it, your bot receives the full membership
                          roster, which can include thousands of user profiles
                          per server. This data includes user IDs, usernames,
                          nicknames, roles, and join dates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          GUILD_PRESENCES Intent
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Gives your bot access to presence updates, which
                          include online/offline status, custom status
                          messages, and what game or application a user is
                          currently using. This is behavioral data that can
                          reveal patterns about when users are active and what
                          they do on their computer. Under GDPR, this type of
                          behavioral tracking requires clear disclosure and
                          typically a legitimate interest assessment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  If your bot uses any privileged intents, your privacy policy
                  must include stronger disclosures. You need to explain
                  exactly why your bot needs access to this sensitive data,
                  what it does with it, whether it stores it, and how users
                  can control or limit the data collection. Discord reviews
                  these justifications during the bot verification process.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: My bot uses MESSAGE_CONTENT to detect commands with a prefix. Is that justified?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Discord recommends migrating prefix commands to slash
                      commands, which do not require the MESSAGE_CONTENT
                      intent. If your bot&apos;s only use of message content
                      is prefix command detection, Discord may reject your
                      intent request during verification. Slash commands are
                      the preferred approach for new bots.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if I only use privileged intents in some features?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Your privacy policy should specify which features use
                      privileged data and allow server administrators to
                      understand what data access each feature requires. Some
                      bots offer granular feature toggles so server owners can
                      disable features they are not comfortable with.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Bot Verification */}
              <section id="bot-verification" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Bot Verification and Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Discord requires bot verification when your bot reaches 75
                  or more servers. Once you hit this threshold, your bot
                  cannot join additional servers until it passes verification.
                  A valid privacy policy is one of the core requirements for
                  passing this review.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Discord Reviews During Verification
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Your privacy policy URL is publicly accessible and working</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>The policy accurately describes what data your bot collects and stores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>If you request privileged intents, the policy explains why they are needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>The policy includes information about data deletion and user rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>The policy includes your contact information for privacy-related inquiries</span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Verification reviews can take several weeks. If your privacy
                  policy is rejected, you will need to revise it and
                  resubmit, adding more time. Getting your privacy policy
                  right before you approach the 75-server threshold saves
                  significant delay.
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
                        Discord&apos;s bot verification process has become
                        significantly stricter over time. In the early days
                        of Discord bots, verification was minimal. Today,
                        Discord&apos;s Trust and Safety team conducts
                        thorough reviews of privacy policies, data handling
                        practices, and privileged intent justifications. Bots
                        that previously would have passed verification with
                        a basic policy now face rejection. Having a
                        comprehensive, professionally written privacy policy
                        is more important than ever for bot developers.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Beyond verification, having a solid privacy policy builds
                  trust with server administrators who decide whether to add
                  your bot. Many large servers now review a bot&apos;s privacy
                  policy before inviting it, especially servers in regulated
                  industries or those with privacy-conscious communities.
                  A professional privacy policy can be a competitive advantage
                  in the crowded bot ecosystem.
                </p>
              </section>

              {/* Section 6: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Mistakes Bot Developers Make
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the five most common privacy policy mistakes
                  Discord bot developers make, along with why each one can
                  cause problems during verification or with privacy
                  regulators.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My bot does not store data, so I do not need a privacy policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Even if your bot has no database, it still processes
                        personal data through the Discord API. Every user ID,
                        username, and message it receives is data processing
                        under GDPR. Discord&apos;s Developer Policy requires a
                        privacy policy regardless of whether data is stored.
                        Your policy should explain that data is processed
                        in-memory but not persisted, if that is the case.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I just log to console, that is not data storage&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Console logs that contain user IDs, usernames, or
                        message content are data storage if those logs persist
                        on disk. Many hosting providers retain application logs
                        for days or weeks. If your bot logs user data to
                        stdout and your hosting provider stores those logs, you
                        are storing personal data. Your privacy policy must
                        account for this, or you should configure your logging
                        to exclude personal data.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Discord handles privacy for me&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Discord&apos;s privacy policy covers Discord&apos;s own
                        relationship with its users. It does not cover what
                        your bot does with the data it receives through the
                        API. You are a separate data controller (or processor,
                        depending on your bot&apos;s purpose). Discord provides
                        the platform. You provide the service. Both need their
                        own privacy policies.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Only big bots need a privacy policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Discord&apos;s Developer Policy applies to all
                        applications, not just popular ones. GDPR applies to
                        any entity processing EU residents&apos; personal data,
                        regardless of scale. A bot in 5 servers that stores
                        user data has the same privacy obligations as one in
                        5,000 servers. The only practical difference is that
                        enforcement becomes more visible at scale, but the
                        legal requirements are identical.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;A GitHub Gist or pastebin is good enough&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        While technically accessible, hosting your privacy
                        policy on a GitHub Gist, Pastebin, or similar platform
                        looks unprofessional and can undermine trust. These
                        platforms can also change their URLs, go down, or
                        remove content. For bot verification, Discord expects
                        a stable, professional privacy policy page. Use your
                        bot&apos;s website, a GitHub Pages site, or a
                        dedicated landing page instead.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mt-4">
                  Worried about what happens if you do not have a policy? See
                  our guide on the{" "}
                  <Link
                    href="/what-happens-without-a-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    consequences of missing a privacy policy
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  .
                </p>
              </section>

              {/* Section 7: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for Your Discord Bot (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these steps to create a privacy policy that satisfies
                  Discord&apos;s Developer Policy and complies with GDPR, CCPA,
                  and other applicable privacy laws.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Document all data your bot receives from Discord
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go through every event your bot listens to and
                        document what data fields it receives. Check your
                        Gateway intents to understand what data Discord sends
                        your bot. Note whether you use any privileged intents
                        (Message Content, Guild Members, Presence). List every
                        slash command and what user input it accepts.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Identify what data your bot stores and where
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review your database schema, configuration files, and
                        any persistent storage. Document every table or
                        collection that contains user data: user IDs, server
                        configurations, command usage logs, moderation records,
                        or custom user settings. Note where your database is
                        hosted (AWS, DigitalOcean, Railway, etc.) and in what
                        region, as this affects GDPR data transfer requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        List all third-party services your bot uses
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Beyond Discord itself, identify every external service
                        your bot sends data to. This includes database hosting
                        (MongoDB Atlas, Supabase, PlanetScale), error tracking
                        (Sentry, Bugsnag), analytics (any usage tracking),
                        external APIs (weather, translation, AI services), and
                        hosting providers (Heroku, Railway, VPS providers).
                        Each service that receives user data is a sub-processor
                        that must be disclosed.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Generate your privacy policy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Use a{" "}
                        <Link
                          href="/generate"
                          className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          privacy policy generator
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>{" "}
                        to create a comprehensive policy. Input the data types,
                        storage methods, third-party services, and your contact
                        details. The generator produces a complete policy with
                        all required GDPR, CCPA, and platform-specific
                        sections.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Host your privacy policy at a permanent URL
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Publish your policy at a stable, publicly accessible
                        URL. Your bot&apos;s website or landing page is ideal.
                        A GitHub Pages site works well for open-source bots. A
                        dedicated page on your personal domain is also
                        acceptable. The URL must remain accessible long-term,
                        so avoid platforms that might change URLs or remove
                        content.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add the URL to your Discord application settings
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go to the Discord Developer Portal, select your
                        application, and paste your privacy policy URL in the
                        Privacy Policy URL field under General Information.
                        Also consider adding a link in your bot&apos;s help
                        command, about command, or description so users can
                        easily find your policy. Update your policy whenever
                        you change your bot&apos;s data handling, and{" "}
                        <Link
                          href="/how-often-should-you-update-your-privacy-policy"
                          className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          review it at least annually
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Easiest Way */}
              <section id="easiest-way" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Easiest Way to Get a Discord Bot Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Most bot developers are programmers, not lawyers. Writing a
                  privacy policy from scratch requires understanding GDPR,
                  CCPA, CalOPPA, and Discord&apos;s Developer Policy
                  simultaneously. Copying another bot&apos;s privacy policy is
                  a{" "}
                  <Link
                    href="/can-i-copy-someone-elses-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    copyright and compliance risk
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>{" "}
                  because their data practices are different from yours.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  A privacy policy generator lets you describe your bot&apos;s
                  specific data handling and produces a complete, legally
                  compliant policy in under 60 seconds. It covers all the
                  sections required by GDPR (data categories, legal basis,
                  user rights, retention periods), CCPA (California-specific
                  disclosures), and Discord&apos;s Developer Policy (data
                  handling, deletion, security).
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  The generated policy is ready to host on your bot&apos;s
                  website and link in the Discord Developer Portal. It
                  includes all the disclosures needed for bot verification
                  and can be updated whenever your bot&apos;s data practices
                  change. For a{" "}
                  <Link
                    href="/gdpr-privacy-policy-template"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    GDPR-compliant template reference
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  , see our dedicated guide.
                </p>

                {/* CTA */}
                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <Database className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Get Your Bot&apos;s Privacy Policy in 60 Seconds
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Tell us about your bot&apos;s data handling, intents,
                        and storage. We will generate a complete privacy
                        policy ready for Discord verification and GDPR
                        compliance.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My Bot Privacy Policy
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
                      Does Discord require a privacy policy for bots?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Discord&apos;s Developer Policy requires all
                      applications to have a publicly accessible privacy
                      policy. This is enforced during bot verification (at 75+
                      servers) but applies to all bots regardless of size. The
                      policy URL must be entered in your application settings
                      in the Developer Portal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What data do Discord bots collect?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      At minimum, every bot receives user IDs, usernames,
                      server IDs, and channel IDs through the Discord API.
                      Bots with the Message Content intent also receive full
                      message text. Bots with Guild Members intent receive
                      complete member lists. The key distinction is between
                      data received (processed temporarily) and data stored
                      (saved to a database).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy if my bot does not store data?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Discord requires a privacy policy regardless of
                      storage. Your bot still processes personal data (user
                      IDs, usernames) through the API, even if only in memory.
                      Under GDPR, processing includes any operation performed
                      on personal data, not just storage. Your policy should
                      clarify that data is processed but not permanently stored.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are privileged intents and how do they affect my privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Privileged intents (Message Content, Guild Members,
                      Presence) give bots access to sensitive data that
                      requires explicit Discord approval. If your bot uses
                      privileged intents, your privacy policy must include
                      stronger disclosures about why the data is needed, how
                      it is used, and whether it is stored. Discord reviews
                      these disclosures during verification.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      When does a Discord bot need to be verified?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Verification is required when your bot reaches 75 or
                      more servers. Without verification, your bot cannot join
                      additional servers beyond this limit. The verification
                      process requires a working privacy policy URL, accurate
                      data handling descriptions, and valid justifications for
                      any privileged intents.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Where should I host my Discord bot&apos;s privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Use a stable, professional hosting solution. Your
                      bot&apos;s website, a GitHub Pages site, or a dedicated
                      page on your personal domain are all good options. Avoid
                      GitHub Gists, Google Docs, or Pastebin, which look
                      unprofessional and may not satisfy Discord&apos;s
                      verification requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I create a privacy policy for my Discord bot?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Document your bot&apos;s data handling (what it receives,
                      stores, and shares), then use a{" "}
                      <Link
                        href="/generate"
                        className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        privacy policy generator
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>{" "}
                      to produce a complete, compliant policy. Host it at a
                      permanent URL and add that URL to your Discord
                      application settings.
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
                      href: "/privacy-policy-for-apps",
                      title: "Privacy Policy for Apps",
                      desc: "General app privacy policy requirements for all platforms",
                    },
                    {
                      href: "/privacy-policy-for-slack-app",
                      title: "Privacy Policy for Slack Apps",
                      desc: "Slack App Directory requirements for developers",
                    },
                    {
                      href: "/privacy-policy-for-chrome-extension",
                      title: "Privacy Policy for Chrome Extensions",
                      desc: "Chrome Web Store privacy requirements for extension developers",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      title: "Can I Copy Someone Else's Privacy Policy?",
                      desc: "Why copying creates both copyright and compliance risk",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "Complete guide for website privacy policy requirements",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      title: "How Often to Update Your Privacy Policy",
                      desc: "Annual reviews, triggers, and CCPA requirements",
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
                  Your Discord Bot Needs a Privacy Policy
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Discord requires it. Bot verification demands it. GDPR
                  mandates it. Generate a complete, compliant privacy policy
                  for your Discord bot in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Bot Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and Discord Developer Policy &middot;
                  Ready for bot verification &middot; Updated for 2026
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
