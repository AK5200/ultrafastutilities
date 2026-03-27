import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
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
  Globe,
  CreditCard,
  Server,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Telegram Bots: Complete Guide (2026) | ultrafastutilities",
  description:
    "Create a privacy policy for your Telegram bot. Covers Telegram Bot API data, user IDs, chat data, inline queries, payment processing, webhooks, and GDPR requirements for bot developers.",
  keywords:
    "privacy policy for telegram bot, telegram bot privacy policy, telegram bot privacy, telegram bot data collection, telegram bot gdpr",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-telegram-bot",
  },
  openGraph: {
    title:
      "Privacy Policy for Telegram Bots: Complete Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for your Telegram bot. Covers Telegram Bot API data, user IDs, chat data, inline queries, payment processing, webhooks, and GDPR requirements for bot developers.",
    url: "https://ultrafastutilities.com/privacy-policy-for-telegram-bot",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Telegram Bots | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Telegram Bots: Complete Guide (2026)",
    description:
      "Create a privacy policy for your Telegram bot. Covers Telegram Bot API data, user IDs, chat data, inline queries, payment processing, webhooks, and GDPR requirements.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Telegram bots need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Telegram bots process personal data including user IDs, usernames, first and last names, and language codes through the Bot API. Under GDPR, any processing of personal data requires transparency, which means a privacy policy. If your bot is listed in bot directories or catalogs, a privacy policy is expected. Telegram's Terms of Service also require developers to comply with applicable privacy laws when building on their platform.",
      },
    },
    {
      "@type": "Question",
      name: "What data does a Telegram bot collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Telegram bots receive data through the Bot API including user IDs, first names, last names (optional), usernames (optional), language codes, chat IDs, message text, photos, documents, location data (if shared), phone numbers (via contact sharing), inline query text, callback query data, and payment information if using Telegram Payments. The exact data depends on what interactions your bot supports and what users send to it.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Telegram Bot API share user phone numbers with bots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, not by default. Telegram bots only receive a user's phone number if the user explicitly shares it using the contact sharing feature or through a KeyboardButton with request_contact. Bots cannot access phone numbers without user consent. However, if your bot requests or receives phone numbers, this must be clearly disclosed in your privacy policy as phone numbers are sensitive personal data under GDPR.",
      },
    },
    {
      "@type": "Question",
      name: "How does Telegram Payments affect my bot's privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your bot uses Telegram's built-in Payments API, you must disclose this in your privacy policy. Telegram acts as an intermediary, routing payment data to providers like Stripe, Yookassa, or other supported payment processors. Your bot receives shipping addresses and order details but does not directly handle credit card numbers. Your privacy policy must name the payment provider, explain what transaction data your bot receives, and link to the payment provider's own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need GDPR compliance for my Telegram bot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your bot has users in the European Union or European Economic Area, GDPR applies to your bot's data processing. Telegram has a large user base in Europe, so most public bots will have EU users. GDPR requires you to have a lawful basis for processing personal data, provide transparent privacy information, respect user rights (access, deletion, portability), and implement appropriate security measures. A privacy policy is the primary way to satisfy the transparency requirement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between polling and webhooks for privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With polling (getUpdates), your bot actively requests new messages from Telegram's servers, and the data stays on Telegram's infrastructure until fetched. With webhooks, Telegram sends updates directly to your server via HTTPS POST requests. From a privacy perspective, webhooks mean your server receives and processes data immediately, and your server's IP address, SSL certificate, and hosting provider become part of your data processing infrastructure. Your privacy policy should describe which method you use and where your server is hosted.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a privacy policy for my Telegram bot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Document all data your bot receives through the Telegram Bot API, including user IDs, names, messages, and any special data like locations or payments. Note what data your bot stores in a database versus processes temporarily. Identify third-party services your bot uses. Then use a privacy policy generator to create a comprehensive policy covering GDPR requirements, data categories, retention periods, and user rights. Link the policy in your bot's description and /privacy command.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Telegram Bot",
  description:
    "Follow these six steps to create a privacy policy that complies with GDPR, CCPA, and Telegram platform requirements for bot developers.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit all data your bot receives from the Telegram Bot API",
      text: "Review every update type your bot handles: messages, inline queries, callback queries, shipping queries, pre-checkout queries, and chat member updates. Document the user fields each update contains (user ID, first name, last name, username, language code). Note any special data types like location, contact, photos, or documents that users can send to your bot.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map what data your bot stores and where",
      text: "Identify every piece of data your bot saves to a database, file system, or any persistent storage. This includes user preferences, conversation state, command history, or any user-submitted content. Note the database type (PostgreSQL, MongoDB, SQLite, Redis) and hosting provider (AWS, DigitalOcean, Hetzner). Record the geographic region of your servers, as this affects GDPR data transfer obligations.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Identify all third-party services and payment providers",
      text: "List every external service your bot integrates with beyond the Telegram Bot API. This includes database hosting, payment processors (Stripe, Yookassa via Telegram Payments), external APIs (weather, translation, AI services), analytics tools, error tracking services, and your hosting provider. Each service that receives user data must be disclosed as a sub-processor in your privacy policy.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a comprehensive policy. Input the data types you identified, storage methods, third-party services, payment processing details, and your contact information. The generator produces a complete policy covering all required GDPR, CCPA, and platform-specific sections relevant to Telegram bot development.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Host your privacy policy at a permanent URL",
      text: "Publish your privacy policy at a stable, publicly accessible URL. Use your bot's website, a GitHub Pages site, or a dedicated page on your domain. The URL must remain accessible long-term. Avoid platforms that might change URLs or remove content like pastebin or temporary hosting.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Link the policy in your bot's description and commands",
      text: "Update your bot's description in BotFather to mention the privacy policy URL. Add a /privacy command that returns a link to your policy. If your bot has an inline mode, consider including the policy link in your bot's about section. This makes your policy easily discoverable for users and reviewers.",
    },
  ],
};

const tocSections = [
  { id: "why-bots-need-policy", title: "Why Bots Need a Policy" },
  { id: "data-your-bot-accesses", title: "Data Your Bot Accesses" },
  { id: "bot-api-data-flow", title: "Bot API Data Flow" },
  { id: "payment-processing", title: "Payment Processing" },
  { id: "webhook-server-data", title: "Webhook & Server Data" },
  { id: "botfather-requirements", title: "BotFather Requirements" },
  { id: "gdpr-compliance", title: "GDPR Compliance" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "easiest-way", title: "The Easiest Way" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForTelegramBotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Telegram Bots: Complete Guide (2026)",
            description:
              "Create a privacy policy for your Telegram bot. Covers Telegram Bot API data, user IDs, chat data, inline queries, payment processing, webhooks, and GDPR requirements for bot developers.",
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
                name: "Privacy Policy for Telegram Bots",
                item: "https://ultrafastutilities.com/privacy-policy-for-telegram-bot",
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
                Privacy Policy for Telegram Bots
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Bot Developer Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Telegram Bots
                </span>
                : What Bot Developers Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Telegram bots process personal data every time a user
                sends a message, taps an inline button, or shares their
                location. Here is exactly what your bot&apos;s privacy
                policy needs to cover, from user IDs to payment data.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Telegram bot developers building with the Bot API,
                python-telegram-bot, Telegraf, grammY, or any other framework.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                Telegram platform compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-discord-bot"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Discord Bot Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-whatsapp-business"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                WhatsApp Business Policy
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
                    Generate one for your Telegram bot in 60 seconds
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
                  <strong>Yes, Telegram bots need a privacy policy.</strong>{" "}
                  Every Telegram bot processes personal data through the Bot
                  API, including user IDs, names, language codes, and message
                  content. Under GDPR and other privacy laws, bot developers
                  must disclose what data they collect, how they use it, and
                  whether they share it with third parties. If your bot handles
                  payments, inline queries, or location data, your disclosure
                  obligations are even greater.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Telegram has become one of the most popular messaging
                platforms in the world, with over 900 million monthly active
                users. The Telegram Bot API powers millions of bots that
                provide everything from news feeds and weather updates to
                payment processing and customer support automation.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                But most Telegram bot developers focus on building features,
                not on privacy compliance. That is a problem because every
                interaction with your bot involves personal data. When a user
                sends a message to your bot, the Bot API delivers their user
                ID, first name, and potentially their username, last name,
                and language code. If your bot supports inline queries,
                location sharing, or payments, even more sensitive data flows
                through your system.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly what data Telegram bots access,
                how the Bot API data flow works, what payment processing
                means for your privacy obligations, and the fastest way to
                create a compliant privacy policy for your Telegram bot.
              </p>

              {/* Section 1: Why Telegram Bots Need a Privacy Policy */}
              <section id="why-bots-need-policy" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why Telegram Bots Need a Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Unlike some platforms that explicitly mandate a privacy
                  policy for all bots, Telegram&apos;s requirement comes from
                  a combination of legal obligations and platform
                  expectations. Every Telegram bot processes personal data,
                  and under GDPR, CCPA, and other privacy regulations, that
                  processing must be transparent.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Required</p>
                    <p className="text-xs text-slate-500 mt-1">
                      By GDPR for EU users
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">900M+</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Telegram monthly active users
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Key className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Personal</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Data processed per interaction
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Telegram&apos;s Terms of Service require developers to
                  comply with all applicable laws when using the Bot API.
                  Since GDPR applies to any service processing EU
                  residents&apos; data, and Telegram has a massive European
                  user base, most public bots are subject to GDPR. The
                  regulation requires a clear and accessible privacy policy
                  that explains what data you process and why.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Beyond legal requirements, having a privacy policy builds
                  trust with your bot&apos;s users. Group administrators
                  increasingly review a bot&apos;s privacy practices before
                  adding it to their groups. Users who see a /privacy
                  command or a linked privacy policy are more likely to
                  trust your bot with their data and continue using it.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  If your bot is listed in third-party bot directories or
                  catalogs, most require or strongly recommend a privacy
                  policy. Bots without one may be deprioritized or removed
                  from listings entirely.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: My bot only works in private chats. Do I still need a privacy policy?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Whether your bot operates in private chats, group
                      chats, or channels does not change the fact that it
                      processes personal data. A bot in private chats still
                      receives user IDs, names, and message content through
                      the Bot API. GDPR obligations apply based on data
                      processing, not the chat context.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does Telegram review my bot&apos;s privacy policy?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Telegram does not currently conduct routine privacy
                      policy reviews for most bots. However, if your bot is
                      reported for privacy violations or if you apply for
                      Telegram&apos;s verified badge, your practices may be
                      scrutinized. Having a comprehensive privacy policy
                      from the start protects you in both scenarios.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Data Your Bot Accesses */}
              <section id="data-your-bot-accesses" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Your Telegram Bot Accesses
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Understanding what data your bot receives is essential for
                  writing an accurate privacy policy. The Telegram Bot API
                  delivers different data depending on the type of
                  interaction. Here is a comprehensive breakdown of the data
                  fields your bot can access.
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
                          User Action Required?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          User ID
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Every update from the Bot API
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (unique identifier)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No (automatic)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Username
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User object in updates (optional field)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (personally identifiable)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No (automatic if set)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          First / Last name
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User object in every update
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (personally identifiable)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No (automatic)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Language code
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User object (IETF language tag)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Potentially (reveals locale)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No (automatic)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Chat ID
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Every message and update
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes in private chats (equals user ID)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No (automatic)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Messages
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Text messages sent to the bot
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (user-generated content)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (user sends message)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Photos / Documents
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          File attachments in messages
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (may contain personal content)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (user sends file)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Location message or live location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (sensitive, reveals position)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (user shares location)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Phone number
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contact sharing (request_contact)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (sensitive personal data)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (explicit user consent)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Inline queries
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          InlineQuery updates (query text + user)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (reveals search intent)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (user types inline query)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The key distinction for your privacy policy is between data
                  that Telegram sends automatically with every update (user
                  ID, first name, chat ID) and data that requires explicit
                  user action (location, phone number, photos). Both types
                  must be disclosed, but data requiring user action can be
                  framed as voluntary sharing in your policy.
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
                        Telegram user IDs are permanent numeric identifiers
                        that never change, even if a user changes their
                        username or display name. Under GDPR, these are
                        classified as personal data because they can uniquely
                        identify an individual across interactions. This means
                        every Telegram bot that receives any update is
                        processing personal data, regardless of whether it
                        stores anything in a database.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Group Chat Privacy Mode
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Telegram has a privacy mode setting for bots in group chats.
                  When privacy mode is enabled (the default), your bot only
                  receives messages that are commands (starting with /) or
                  messages that mention the bot directly. When privacy mode is
                  disabled, your bot receives all messages in the group. Your
                  privacy policy should clearly state whether your bot uses
                  privacy mode and, if disabled, explain why your bot needs
                  access to all group messages.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  You can check and configure your bot&apos;s privacy mode
                  through BotFather using the /setprivacy command. Group
                  administrators can also see whether your bot has privacy
                  mode enabled or disabled when adding it to their group.
                </p>
              </section>

              {/* Section 3: Telegram Bot API Data Flow */}
              <section id="bot-api-data-flow" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Telegram Bot API Data Flow
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Understanding how data flows between Telegram and your bot
                  is essential for writing an accurate privacy policy. The
                  Bot API supports two methods for receiving updates, and
                  each has different privacy implications.
                </p>

                <div className="space-y-4 my-6">
                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          Polling (getUpdates)
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Your bot periodically calls the getUpdates endpoint
                          to fetch new messages from Telegram&apos;s servers.
                          Data temporarily resides on Telegram&apos;s
                          infrastructure until your bot fetches it. This
                          method is simpler to set up and does not require a
                          public-facing server, but introduces a delay
                          between when a user sends a message and when your
                          bot processes it. From a privacy perspective,
                          polling means data passes through Telegram&apos;s
                          servers before reaching yours.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <Server className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800">
                          Webhooks (setWebhook)
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          Telegram sends updates directly to your server via
                          HTTPS POST requests. This requires a publicly
                          accessible server with a valid SSL certificate.
                          Updates arrive in real-time, making webhooks the
                          preferred method for production bots. From a
                          privacy perspective, your server&apos;s IP address,
                          hosting provider, and geographic location become
                          part of the data processing chain. Your privacy
                          policy must disclose where your webhook server is
                          hosted and what happens to data once it arrives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Regardless of which method you use, Telegram retains
                  undelivered updates for up to 24 hours. After your bot
                  confirms receipt (either by fetching via getUpdates or by
                  responding with a 200 status to a webhook), Telegram
                  removes the update from its queue. Your privacy policy
                  should note this temporary Telegram-side retention.
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
                        When you set up a webhook, Telegram verifies your
                        SSL certificate and only sends data over encrypted
                        HTTPS connections. You can also provide a self-signed
                        certificate for additional security. However, your
                        webhook URL itself can reveal information about your
                        infrastructure. If your webhook URL contains your
                        bot token (a common pattern), anyone who discovers
                        the URL could potentially intercept updates. Always
                        use a secret path in your webhook URL and never
                        expose your bot token publicly.
                      </p>
                    </div>
                  </div>
                </div>

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

              {/* Section 4: Payment Processing */}
              <section id="payment-processing" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Payment Processing via Telegram Payments API
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If your bot accepts payments through Telegram&apos;s
                  built-in Payments API, your privacy obligations increase
                  significantly. Telegram supports payments through
                  third-party providers like Stripe, Yookassa, Sberbank,
                  and others. Your bot acts as a merchant, Telegram acts as
                  an intermediary, and the payment provider processes the
                  actual financial transaction.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Payment Data Your Bot Receives
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Shipping address:</strong> If your bot sells physical goods, users provide their shipping address through the Telegram payment flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Order details:</strong> Your bot receives the items ordered, quantities, and total amount through pre-checkout and successful payment updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Payment provider charge ID:</strong> A unique identifier for the transaction from the payment provider (e.g., Stripe charge ID)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Telegram payment charge ID:</strong> Telegram&apos;s own identifier for the payment transaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Email and phone (optional):</strong> If requested during checkout, users can provide their email and phone number</span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Critically, your bot does not receive credit card numbers
                  or sensitive payment credentials directly. Those are
                  handled by the payment provider. However, you must still
                  disclose in your privacy policy that payment data flows
                  through Telegram to the payment provider, name the
                  specific provider you use, and link to their privacy
                  policy.
                </p>

                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Payment privacy tip
                      </p>
                      <p className="text-sm text-slate-700">
                        If your bot uses Telegram Payments with Stripe, your
                        privacy policy must mention both Telegram (as the
                        intermediary) and Stripe (as the payment processor).
                        Include links to both Telegram&apos;s privacy policy
                        and Stripe&apos;s privacy policy. Users should
                        understand exactly who handles their financial data
                        at each step of the transaction.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Webhook and Server Data */}
              <section id="webhook-server-data" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Webhook and Server Data
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If your bot uses webhooks, your server infrastructure
                  becomes a critical part of your privacy disclosure. Unlike
                  polling, where your bot fetches data from Telegram&apos;s
                  servers, webhooks mean Telegram pushes data directly to
                  your server. This has several privacy implications.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Your Privacy Policy Must Disclose About Your Server
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Hosting provider:</strong> Name the cloud provider or hosting service where your bot runs (AWS, DigitalOcean, Hetzner, Railway, Vercel, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Server location:</strong> Specify the geographic region of your server, as this determines where user data is processed and stored</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Server logs:</strong> Disclose whether your server logs incoming requests, as webhook payloads contain personal data (user IDs, messages)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>SSL/TLS encryption:</strong> Confirm that data in transit is encrypted via HTTPS, which Telegram requires for webhooks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data retention on server:</strong> Explain how long webhook data persists in your server&apos;s memory or logs before being discarded</span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  If your server is hosted in the EU, data transfer is
                  straightforward for EU users. If your server is outside
                  the EU (e.g., in the US), you need to address GDPR
                  cross-border data transfer requirements in your privacy
                  policy. This typically involves relying on Standard
                  Contractual Clauses (SCCs) provided by your hosting
                  provider. For a{" "}
                  <Link
                    href="/privacy-policy-for-saas"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    SaaS privacy policy reference
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  , see our dedicated guide covering server-side data
                  processing obligations.
                </p>
              </section>

              {/* Section 6: BotFather Requirements */}
              <section id="botfather-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Bot Store and BotFather Requirements
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  BotFather is the official Telegram bot for creating and
                  managing your bots. While BotFather does not currently
                  enforce a mandatory privacy policy field the way some app
                  stores do, there are several places where you should make
                  your privacy policy visible and accessible.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Where to Link Your Privacy Policy
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Bot description:</strong> Use /setdescription in BotFather to include a mention of your privacy policy URL in your bot&apos;s description</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Bot about text:</strong> Use /setabouttext in BotFather to add your privacy policy link in the about section visible on your bot&apos;s profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>/privacy command:</strong> Implement a /privacy command in your bot that returns a link to your full privacy policy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>/start message:</strong> Include a brief privacy notice and link in the welcome message users see when they first interact with your bot</span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Telegram has been increasingly focused on user privacy as
                  a platform differentiator. Bot developers who proactively
                  demonstrate privacy compliance are better positioned if
                  Telegram introduces stricter bot review requirements in
                  the future, which many in the developer community
                  anticipate.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can BotFather&apos;s privacy mode replace a privacy policy?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No. BotFather&apos;s privacy mode controls what messages
                      your bot receives in group chats, but it does not
                      replace a privacy policy. Privacy mode is a technical
                      setting that limits data access. A privacy policy is a
                      legal document that explains your data practices. You
                      need both: privacy mode as a technical safeguard and a
                      privacy policy as a legal disclosure.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: GDPR Compliance for Bot Developers */}
              <section id="gdpr-compliance" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  GDPR Compliance for Telegram Bot Developers
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Telegram has a massive user base in Europe, particularly
                  in countries like Germany, Italy, Spain, and across
                  Eastern Europe. If your bot is publicly accessible, it
                  almost certainly has EU users, which means GDPR applies
                  to your data processing activities.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  GDPR Requirements for Bot Developers
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Lawful basis:</strong> Identify your legal basis for processing. For most bots, this is either consent (user initiates interaction) or legitimate interest (bot provides a service the user requested)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data minimization:</strong> Only collect and store data that is strictly necessary for your bot&apos;s functionality. Do not log everything &quot;just in case&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Transparency:</strong> Your privacy policy must clearly explain what data you process, why, how long you keep it, and who you share it with</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>User rights:</strong> You must provide mechanisms for users to access, correct, delete, and export their data. A /deletedata command is a practical implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Data protection:</strong> Implement appropriate technical measures to secure user data, including encryption at rest and in transit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span><strong>No selling data:</strong> GDPR strictly regulates data sharing. Selling Telegram user data without explicit consent would be a serious violation</span>
                  </li>
                </ul>

                {/* Did you know box 3 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Under GDPR, when a user blocks your Telegram bot or
                        deletes their Telegram account, you should treat
                        this as a withdrawal of consent (if consent is your
                        legal basis). This means you should delete or
                        anonymize any stored data for that user within a
                        reasonable timeframe. Implementing a periodic check
                        for inactive users and purging their data is a good
                        practice that demonstrates GDPR compliance.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  For a comprehensive{" "}
                  <Link
                    href="/gdpr-privacy-policy-template"
                    className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    GDPR privacy policy template
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  , including all 12 required sections, see our dedicated
                  guide. It covers everything from data categories and legal
                  bases to retention periods and cross-border transfers.
                </p>
              </section>

              {/* Section 8: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Mistakes Bot Developers Make
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the five most common privacy policy mistakes
                  Telegram bot developers make, along with why each one can
                  cause problems with privacy regulators or user trust.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My bot only reads messages, it does not collect data&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reading a message is processing personal data under
                        GDPR. When your bot receives an update from the Bot
                        API containing a user ID, first name, and message
                        text, it has processed personal data regardless of
                        whether it saves anything to a database. Your
                        privacy policy must account for this processing, not
                        just permanent storage.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Telegram handles privacy, not me&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Telegram&apos;s privacy policy covers
                        Telegram&apos;s relationship with its users. Your
                        bot is a separate service that receives data through
                        the Bot API. You are an independent data controller
                        under GDPR. Telegram provides the platform and the
                        API. You provide the service. Both need their own
                        privacy policies explaining their respective data
                        handling practices.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I disabled privacy mode, but I do not mention it&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        If your bot has privacy mode disabled, it receives
                        every message in every group it is in. This is a
                        significant data collection expansion that must be
                        disclosed. Group members may not realize your bot
                        can read all their messages, not just commands.
                        Your privacy policy must clearly state that privacy
                        mode is disabled and explain why your bot needs
                        access to all group messages.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I use payments but only mention Stripe, not Telegram&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Telegram Payments involve three parties: your bot,
                        Telegram as intermediary, and the payment provider.
                        All three must be disclosed. Telegram processes
                        payment data before routing it to the provider. If
                        you only mention Stripe in your privacy policy but
                        not Telegram&apos;s role, your disclosure is
                        incomplete. Users should understand the full payment
                        data chain.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I do not need to worry about data deletion&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Under GDPR, users have the right to request deletion
                        of their personal data (the &quot;right to be
                        forgotten&quot;). If your bot stores any user data,
                        you need a mechanism to delete it on request.
                        Implementing a /deletedata or /forgetme command is a
                        practical approach. Your privacy policy must explain
                        how users can exercise this right and the timeframe
                        for processing deletion requests.
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

              {/* Section 9: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for Your Telegram Bot (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these steps to create a privacy policy that
                  complies with GDPR, CCPA, and covers all Telegram-specific
                  data processing your bot performs.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit all data your bot receives from the Telegram Bot API
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review every update type your bot handles: messages,
                        inline queries, callback queries, shipping queries,
                        and pre-checkout queries. Document the user fields
                        each update contains (user ID, first name, last name,
                        username, language code). Note any special data types
                        like location, contact, photos, or documents.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Map what data your bot stores and where
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review your database schema and any persistent
                        storage. Document every table or collection that
                        contains user data: user preferences, conversation
                        state, command history, or user-submitted content.
                        Note the database type (PostgreSQL, MongoDB, SQLite,
                        Redis) and hosting provider. Record the geographic
                        region, as this affects GDPR data transfer
                        requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Identify all third-party services and payment providers
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        List every external service your bot integrates with
                        beyond the Telegram Bot API. This includes database
                        hosting (MongoDB Atlas, Supabase), payment processors
                        (Stripe, Yookassa via Telegram Payments), external
                        APIs (weather, translation, AI services), analytics,
                        error tracking (Sentry), and hosting providers. Each
                        service receiving user data is a sub-processor.
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
                        to create a comprehensive policy. Input the data
                        types, storage methods, third-party services, payment
                        processing details, and your contact information.
                        The generator produces a complete policy covering
                        GDPR, CCPA, and Telegram-specific requirements.
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
                        URL. Your bot&apos;s website or landing page is
                        ideal. A GitHub Pages site works well for open-source
                        bots. The URL must remain accessible long-term, so
                        avoid platforms that might change URLs or remove
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
                        Link the policy in your bot&apos;s description and commands
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Update your bot&apos;s description in BotFather to
                        mention the privacy policy URL. Add a /privacy
                        command that returns the link. Include a brief
                        privacy notice in your /start welcome message. This
                        ensures users can always find your policy, and{" "}
                        <Link
                          href="/privacy-policy-for-slack-app"
                          className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          similar to Slack app requirements
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        , accessibility is key to compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Easiest Way */}
              <section id="easiest-way" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Easiest Way to Get a Telegram Bot Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Most Telegram bot developers are programmers, not lawyers.
                  Writing a privacy policy from scratch requires
                  understanding GDPR, CCPA, and how they apply to the
                  Telegram Bot API specifically. Copying another bot&apos;s
                  privacy policy is a{" "}
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
                  A privacy policy generator lets you describe your
                  bot&apos;s specific data handling and produces a complete,
                  legally compliant policy in under 60 seconds. It covers
                  all the sections required by GDPR (data categories, legal
                  basis, user rights, retention periods), CCPA
                  (California-specific disclosures), and Telegram-specific
                  concerns (Bot API data, webhooks, payments, inline
                  queries).
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  The generated policy is ready to host on your bot&apos;s
                  website and link through BotFather. It includes all the
                  disclosures needed for GDPR compliance and can be updated
                  whenever your bot&apos;s data practices change.
                </p>

                {/* CTA */}
                <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <Database className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Get Your Telegram Bot&apos;s Privacy Policy in 60 Seconds
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Tell us about your bot&apos;s data handling, webhook
                        setup, and storage. We will generate a complete
                        privacy policy ready for GDPR compliance and
                        Telegram platform requirements.
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
                      Do Telegram bots need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Every Telegram bot processes personal data (user
                      IDs, names, messages) through the Bot API. Under GDPR
                      and other privacy laws, this processing must be
                      transparent. A privacy policy is the standard way to
                      meet this transparency requirement. It is also expected
                      by bot directories and builds trust with users.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What data does a Telegram bot collect?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      At minimum, every bot receives user IDs, first names,
                      and chat IDs through the Bot API. Depending on
                      interactions, bots may also receive usernames, last
                      names, language codes, message text, photos, location
                      data, phone numbers (via contact sharing), inline
                      query text, and payment information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does the Telegram Bot API share user phone numbers with bots?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      No, not by default. Bots only receive phone numbers if
                      a user explicitly shares their contact using the
                      request_contact keyboard button. This requires active
                      user consent. If your bot requests or receives phone
                      numbers, your privacy policy must disclose this
                      collection of sensitive personal data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How does Telegram Payments affect my bot&apos;s privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Telegram Payments involve three parties: your bot,
                      Telegram (intermediary), and the payment provider
                      (Stripe, Yookassa, etc.). Your privacy policy must
                      name all parties, explain what transaction data your
                      bot receives, and link to the payment provider&apos;s
                      privacy policy. Credit card numbers are handled by the
                      provider, not your bot.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need GDPR compliance for my Telegram bot?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      If your bot has any users in the EU or EEA, GDPR
                      applies. Given Telegram&apos;s large European user
                      base, most public bots will have EU users. GDPR
                      requires a lawful basis for processing, transparent
                      privacy information, user rights mechanisms, and
                      appropriate security measures.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is the difference between polling and webhooks for privacy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      With polling, your bot fetches updates from
                      Telegram&apos;s servers. With webhooks, Telegram pushes
                      updates to your server. Webhooks mean your server
                      infrastructure (hosting provider, location, SSL
                      certificate) becomes part of the data processing chain
                      and should be disclosed in your privacy policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I create a privacy policy for my Telegram bot?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Document your bot&apos;s data handling (what it
                      receives, stores, and shares), then use a{" "}
                      <Link
                        href="/generate"
                        className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        privacy policy generator
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>{" "}
                      to produce a complete, compliant policy. Host it at a
                      permanent URL and link it through BotFather and a
                      /privacy command.
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
                      href: "/privacy-policy-for-discord-bot",
                      title: "Privacy Policy for Discord Bots",
                      desc: "Discord Developer Policy requirements for bot developers",
                    },
                    {
                      href: "/privacy-policy-for-slack-app",
                      title: "Privacy Policy for Slack Apps",
                      desc: "Slack App Directory requirements for developers",
                    },
                    {
                      href: "/privacy-policy-for-whatsapp-business",
                      title: "Privacy Policy for WhatsApp Business",
                      desc: "WhatsApp Business API privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      title: "Privacy Policy for Apps",
                      desc: "General app privacy policy requirements for all platforms",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      title: "Privacy Policy for SaaS",
                      desc: "Server-side data processing obligations for SaaS products",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/generate",
                      title: "Privacy Policy Generator",
                      desc: "Generate a complete privacy policy for your bot in 60 seconds",
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
                  Your Telegram Bot Needs a Privacy Policy
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  GDPR requires it. Your users expect it. Bot directories
                  demand it. Generate a complete, compliant privacy policy
                  for your Telegram bot in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Bot Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and Telegram Bot API requirements &middot;
                  Ready for bot directories &middot; Updated for 2026
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
