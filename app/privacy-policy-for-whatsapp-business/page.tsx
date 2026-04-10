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
  MessageSquare,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for WhatsApp Business: Complete Guide (2026) | ultrafastutilities",
  description:
    "Create a privacy policy for WhatsApp Business. Covers WhatsApp Business API, customer chat data, catalogs, payments, click-to-WhatsApp ads, and Meta Business Suite integration requirements.",
  keywords:
    "privacy policy for whatsapp business, whatsapp business privacy policy, whatsapp business api privacy, whatsapp business data collection, whatsapp business gdpr",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-whatsapp-business",
  },
  openGraph: {
    title:
      "Privacy Policy for WhatsApp Business: Complete Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for WhatsApp Business. Covers WhatsApp Business API, customer chat data, catalogs, payments, click-to-WhatsApp ads, and Meta Business Suite integration requirements.",
    url: "https://ultrafastutilities.com/privacy-policy-for-whatsapp-business",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for WhatsApp Business | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for WhatsApp Business: Complete Guide (2026)",
    description:
      "Create a privacy policy for WhatsApp Business. Covers WhatsApp Business API, customer chat data, catalogs, payments, and Meta Business Suite integration.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does WhatsApp Business need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WhatsApp Business accounts collect customer phone numbers, chat messages, transaction data, and catalog interaction data. If you use the WhatsApp Business API, run click-to-WhatsApp ads, accept payments, or integrate with Meta Business Suite, you are processing personal data that must be disclosed in a privacy policy under GDPR, CCPA, and WhatsApp's own Business Policy.",
      },
    },
    {
      "@type": "Question",
      name: "What data does WhatsApp Business collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp Business collects customer phone numbers, chat message content, delivery and read receipts, catalog browsing data, order and payment information, customer labels and notes you add, and metadata such as message timestamps and device information. The WhatsApp Business API adds webhook event data, template message analytics, and CRM integration data to this list.",
      },
    },
    {
      "@type": "Question",
      name: "Is WhatsApp Business GDPR compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp provides end-to-end encryption and has its own GDPR compliance measures, but this only covers the platform-level data processing. As a business using WhatsApp Business, you are a separate data controller for the customer data you collect, store, and process through the app. You need your own privacy policy, lawful basis for processing, and data protection measures to be GDPR compliant.",
      },
    },
    {
      "@type": "Question",
      name: "Does the WhatsApp Business API require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The WhatsApp Business API terms require businesses to have a privacy policy and to provide it to customers. API access involves processing customer data through third-party Business Solution Providers (BSPs) like Twilio, MessageBird, or 360dialog, which creates additional data processing relationships that must be disclosed.",
      },
    },
    {
      "@type": "Question",
      name: "Do click-to-WhatsApp ads need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Click-to-WhatsApp ads are run through Meta Ads Manager, which requires advertisers to have a privacy policy. These ads combine Meta advertising data (ad impressions, clicks, targeting data) with WhatsApp conversation data, creating a cross-platform data flow that must be disclosed. Your privacy policy must cover both the Meta advertising and WhatsApp messaging components.",
      },
    },
    {
      "@type": "Question",
      name: "Does WhatsApp's privacy policy cover my business account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. WhatsApp's privacy policy covers data that WhatsApp (Meta) collects through the platform. It does not cover how you use customer chat data, what you do with phone numbers collected through conversations, how your CRM stores WhatsApp contact information, or how third-party integrations process the data. You need your own privacy policy for your business-specific data handling.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I display my WhatsApp Business privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link to your privacy policy from your WhatsApp Business profile (in the business description or catalog), your website footer, your Meta Ads Manager account (for click-to-WhatsApp ads), any automated welcome messages or chatbot flows, and your WhatsApp Business API webhook responses. The policy should be hosted on a URL you control.",
      },
    },
  ],
};

const tocSections = [
  { id: "why-need-one", title: "Why You Need One" },
  { id: "business-vs-personal", title: "Business vs Personal" },
  { id: "api-data", title: "WhatsApp Business API Data" },
  { id: "customer-chat-data", title: "Customer Chat Data" },
  { id: "catalog-commerce", title: "Catalog & Commerce" },
  { id: "click-to-whatsapp-ads", title: "Click-to-WhatsApp Ads" },
  { id: "meta-business-suite", title: "Meta Business Suite" },
  { id: "payment-features", title: "Payment Features" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create One" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForWhatsAppBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for WhatsApp Business: What Business Accounts Must Disclose",
            description:
              "Create a privacy policy for WhatsApp Business. Covers WhatsApp Business API, customer chat data, catalogs, payments, click-to-WhatsApp ads, and Meta Business Suite integration requirements.",
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
                name: "Privacy Policy for WhatsApp Business",
                item: "https://ultrafastutilities.com/privacy-policy-for-whatsapp-business",
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
            name: "How to Create a Privacy Policy for WhatsApp Business",
            description:
              "Six steps to create a compliant privacy policy for your WhatsApp Business account.",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Audit your WhatsApp Business data collection points",
                text: "List every data touchpoint: customer chats, catalog interactions, payment transactions, WhatsApp Business API webhooks, click-to-WhatsApp ad conversions, Meta Business Suite integrations, CRM connections, and automated message flows. For each, note what personal data is collected.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Identify which privacy laws apply to your customers",
                text: "WhatsApp is used in over 180 countries. Check where your customers are located. EU and UK customers trigger GDPR. California customers trigger CCPA. Brazil customers trigger LGPD. India customers trigger the DPDP Act. Most WhatsApp Business accounts serve a global audience.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Map data types to purposes and lawful bases",
                text: "For each type of personal data, document the purpose and GDPR lawful basis. Customer chat data for support = legitimate interests. Phone numbers for marketing messages = consent. Payment data for transactions = contract performance. API webhook data for analytics = legitimate interests.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Name every third-party service and processor",
                text: "List your WhatsApp Business Solution Provider (Twilio, MessageBird, 360dialog), CRM platform, payment processor, chatbot platform, analytics tools, and Meta Business Suite. GDPR requires naming specific processors, not generic categories.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Generate your privacy policy",
                text: "Use a structured privacy policy generator that covers WhatsApp Business-specific data flows including API integrations, chat data retention, catalog commerce, and Meta advertising integration. Our generator handles this in under 60 seconds.",
              },
              {
                "@type": "HowToStep",
                position: 6,
                name: "Publish and link from every customer touchpoint",
                text: "Host your privacy policy on a dedicated URL. Link to it from your WhatsApp Business profile description, website footer, automated welcome messages, Meta Ads Manager account, and any chatbot or API-powered conversation flows.",
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
                Privacy Policy for WhatsApp Business
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <MessageSquare className="w-3.5 h-3.5" />
                Messaging Platform Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  WhatsApp Business
                </span>
                :{" "}
                <span className="text-slate-700">
                  What Business Accounts Must Disclose
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                If your WhatsApp Business account handles customer chats,
                uses the Business API, runs click-to-WhatsApp ads, sells
                through catalogs, or accepts payments, you are collecting
                personal data and need a privacy policy. Here is what Meta
                requires, what data you handle, and how to stay compliant.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For WhatsApp Business App and API users, customer support teams, and commerce accounts.
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
                href="/privacy-policy-for-telegram-bot"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Telegram Bot Guide
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
                    Need a WhatsApp Business privacy policy?
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
                  <strong>Yes, WhatsApp Business accounts need a privacy policy.</strong>{" "}
                  If you use the WhatsApp Business App or API to communicate
                  with customers, run click-to-WhatsApp ads, sell through
                  catalogs, accept payments, or integrate with Meta Business
                  Suite, you are collecting personal data. Privacy laws (GDPR,
                  CCPA), WhatsApp&apos;s Business Policy, and Meta&apos;s
                  advertising policies all require you to disclose these
                  practices in a published privacy policy.
                </p>
              </div>

              {/* Section 1: Why WhatsApp Business Needs a Privacy Policy */}
              <section id="why-need-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why WhatsApp Business Needs a Privacy Policy
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    WhatsApp (owned by Meta) has its own privacy policy that
                    covers data the platform collects, such as account
                    information, message metadata, and device data. However,
                    WhatsApp&apos;s policy does not cover the customer data
                    you collect, store, and use through your business
                    activities. If you engage in any of the following, you
                    need your own privacy policy:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Communicating with customers through WhatsApp Business",
                        desc: "Every customer conversation involves processing personal data: phone numbers, message content, shared media, and any personal details customers provide (names, addresses, order numbers). Whether you use the WhatsApp Business App or the API, you are a data controller for this information.",
                      },
                      {
                        title: "Using the WhatsApp Business API",
                        desc: "The API routes messages through a Business Solution Provider (BSP) such as Twilio, MessageBird, or 360dialog. This creates a data processing chain where customer messages pass through third-party infrastructure. API usage also generates webhook data, template message analytics, and conversation logs that constitute personal data processing.",
                      },
                      {
                        title: "Running click-to-WhatsApp ads on Facebook or Instagram",
                        desc: "Click-to-WhatsApp ads are created in Meta Ads Manager and combine advertising data (impressions, clicks, audience targeting) with WhatsApp conversation data. When a user clicks the ad and opens a WhatsApp chat, data flows between Meta's advertising platform and WhatsApp. Your privacy policy must cover both sides of this integration.",
                      },
                      {
                        title: "Selling products through WhatsApp catalogs",
                        desc: "WhatsApp Business catalogs display products that customers can browse and order. When customers interact with your catalog, place orders, or inquire about products, you collect product interaction data, order details, and customer contact information. This commerce data requires disclosure.",
                      },
                      {
                        title: "Accepting payments through WhatsApp",
                        desc: "WhatsApp Payments (available in select markets) and payment links shared through conversations involve processing financial data. Customer names, payment amounts, transaction IDs, and payment method details all constitute sensitive personal data that requires clear disclosure and strong data protection measures.",
                      },
                      {
                        title: "Integrating with Meta Business Suite or CRM platforms",
                        desc: "Connecting WhatsApp Business to Meta Business Suite, HubSpot, Salesforce, Zendesk, or other CRM tools means customer data flows between platforms. Each integration creates a separate data processing relationship that must be named in your privacy policy.",
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
                        WhatsApp Business account suspension, Meta Ads account
                        restrictions, rejection of click-to-WhatsApp ad
                        campaigns, GDPR fines up to &euro;20 million, CCPA
                        penalties of $7,500 per violation, and loss of customer
                        trust. WhatsApp actively enforces its Business Policy
                        and can restrict your account without warning. Learn the
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
                      q: "Does this apply to the free WhatsApp Business App?",
                      a: "Yes. The WhatsApp Business App (the free version for small businesses) collects and processes customer data just like the API version. Customer chat messages, phone numbers, catalog interactions, and business labels all constitute personal data processing. The privacy policy requirement applies regardless of whether you use the free app or the paid API.",
                    },
                    {
                      q: "What about businesses that only receive messages from customers?",
                      a: "Even if customers initiate every conversation, you are still processing their personal data when you receive, read, respond to, and store those messages. Under GDPR, receiving and acting on personal data constitutes data processing. If you use customer messages to fulfill orders, provide support, or build customer records, you need a privacy policy.",
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

              {/* Section 2: WhatsApp Business vs Personal */}
              <section id="business-vs-personal" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      WhatsApp Business vs Personal: Data Differences
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Business accounts handle significantly more data than
                      personal accounts.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    WhatsApp Business accounts collect and process data that
                    personal WhatsApp accounts do not. Understanding these
                    differences is critical for building an accurate privacy
                    policy:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Data Category
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Personal WhatsApp
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            WhatsApp Business
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                          [
                            "Customer phone numbers",
                            "Personal contacts only",
                            "Customer database, often exported to CRM",
                          ],
                          [
                            "Chat message content",
                            "Private conversations",
                            "Business records, support logs, order details",
                          ],
                          [
                            "Catalog and product data",
                            "Not available",
                            "Product browsing, order inquiries, purchase data",
                          ],
                          [
                            "Labels and customer notes",
                            "Not available",
                            "Customer categorization, internal notes, lead scoring",
                          ],
                          [
                            "Automated messages",
                            "Not available",
                            "Welcome messages, away messages, quick replies with tracking",
                          ],
                          [
                            "Payment data",
                            "Peer-to-peer only (select markets)",
                            "Business transactions, invoices, payment confirmations",
                          ],
                          [
                            "API and webhook data",
                            "Not available",
                            "Message delivery events, read receipts, conversation analytics",
                          ],
                          [
                            "Meta advertising data",
                            "Not applicable",
                            "Click-to-WhatsApp ad conversions, audience targeting, campaign analytics",
                          ],
                        ].map(([category, personal, business]) => (
                          <tr key={category} className="hover:bg-slate-50/50">
                            <td className="px-5 py-3 font-medium text-slate-800">
                              {category}
                            </td>
                            <td className="px-5 py-3 text-slate-600">{personal}</td>
                            <td className="px-5 py-3 text-slate-600">{business}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    The key takeaway: WhatsApp Business accounts create
                    structured business records from customer conversations.
                    Personal WhatsApp keeps messages as private conversations.
                    Business accounts transform those conversations into
                    customer data that is stored, categorized, exported, and
                    used for commercial purposes. Every item in the right
                    column must be disclosed in your privacy policy.
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
                          WhatsApp messages are end-to-end encrypted between
                          sender and receiver. However, once a message reaches
                          your WhatsApp Business account and you export it to
                          a CRM, save it in a spreadsheet, or forward it to a
                          team member via email, the end-to-end encryption no
                          longer applies. The data is now stored in your
                          business systems in unencrypted form. Your privacy
                          policy must address how you protect customer data
                          after it leaves the encrypted WhatsApp environment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 3: WhatsApp Business API Data */}
              <section id="api-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      WhatsApp Business API Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      API access creates additional data processing
                      relationships.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    The WhatsApp Business API (also called the WhatsApp
                    Business Platform) allows medium and large businesses to
                    send messages at scale, automate conversations, and
                    integrate WhatsApp into their existing business systems.
                    API usage creates data flows that go beyond the standard
                    WhatsApp Business App:
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            API Data Type
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            What Is Collected
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Who Processes It
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                          [
                            "Webhook events",
                            "Message delivered, read, and failed events with timestamps and phone numbers",
                            "Your server, BSP (Twilio, MessageBird, etc.)",
                          ],
                          [
                            "Template messages",
                            "Message content, recipient phone numbers, delivery status, opt-in records",
                            "You (controller), BSP (processor), Meta (platform)",
                          ],
                          [
                            "Conversation logs",
                            "Full message history, media attachments, customer phone numbers",
                            "Your CRM/database, BSP infrastructure",
                          ],
                          [
                            "Interactive messages",
                            "Button clicks, list selections, product inquiries, location sharing",
                            "You (controller), BSP (processor)",
                          ],
                          [
                            "Chatbot interaction data",
                            "Conversation flows, user inputs, intent classification, fallback triggers",
                            "Chatbot platform (Dialogflow, ManyChat, etc.)",
                          ],
                          [
                            "Phone number verification",
                            "Customer phone numbers, verification status, opt-in/opt-out records",
                            "You (controller), Meta (platform)",
                          ],
                        ].map(([type, collected, processor]) => (
                          <tr key={type} className="hover:bg-slate-50/50">
                            <td className="px-5 py-3 font-medium text-slate-800">
                              {type}
                            </td>
                            <td className="px-5 py-3 text-slate-600">{collected}</td>
                            <td className="px-5 py-3 text-slate-600">{processor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    The critical difference between the WhatsApp Business App
                    and the API is the involvement of Business Solution
                    Providers (BSPs). Your BSP acts as a data processor under
                    GDPR, handling message routing, storage, and delivery on
                    your behalf. Your privacy policy must name your BSP and
                    explain the data processing relationship. If you use
                    the{" "}
                    <Link
                      href="/privacy-policy-for-apps"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      WhatsApp Business API in a mobile app
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , additional app-level disclosures apply.
                  </p>

                  {/* Mini FAQ */}
                  <div className="space-y-3">
                    {[
                      {
                        q: "Do I need a Data Processing Agreement with my BSP?",
                        a: "Yes. Under GDPR Article 28, you must have a Data Processing Agreement (DPA) with every processor that handles personal data on your behalf. Most major BSPs (Twilio, MessageBird, 360dialog, Vonage) provide standard DPAs that you can sign through their platforms. Your privacy policy should reference that these agreements are in place.",
                      },
                      {
                        q: "Does the WhatsApp Cloud API change the data processing relationship?",
                        a: "Yes. With the Cloud API (hosted by Meta), Meta acts as both the platform provider and the infrastructure provider. This differs from the on-premises API where your BSP hosted the infrastructure. Your privacy policy should reflect which API hosting model you use, as it affects where customer data is stored and processed.",
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

              {/* Section 4: Customer Chat Data */}
              <section id="customer-chat-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Customer Chat Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every customer conversation is personal data processing.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    WhatsApp Business conversations contain some of the most
                    sensitive personal data your business handles. Unlike
                    website analytics or ad tracking data, chat messages often
                    include direct personal details that customers share
                    voluntarily: names, addresses, medical information, photos,
                    financial details, and complaints. Your privacy policy
                    must address how you handle this conversational data:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Message content and media",
                        desc: "Text messages, voice notes, images, videos, documents, and location shares sent by customers all constitute personal data. If a customer sends you a photo of a damaged product, a screenshot of an error, or a voice note explaining an issue, each of these is personal data that you must handle according to your stated retention and processing policies.",
                      },
                      {
                        title: "Contact information shared in chat",
                        desc: "Customers frequently share phone numbers, email addresses, physical addresses, and account numbers directly in WhatsApp messages. This data is often more detailed than what you would collect through a web form because customers share it in the flow of conversation without the constraints of structured form fields.",
                      },
                      {
                        title: "Chat exports and backups",
                        desc: "WhatsApp Business allows you to export chat histories and create backups. When you export a conversation to email, save it to Google Drive, or back it up to your cloud storage, the data leaves WhatsApp's encrypted environment. Your privacy policy must disclose where chat data is stored outside of WhatsApp and how those storage locations are secured.",
                      },
                      {
                        title: "Labels and internal notes",
                        desc: "WhatsApp Business lets you label conversations (e.g., 'New Customer,' 'Pending Payment,' 'VIP') and add internal notes. These labels create a customer profiling system. Under GDPR, automated profiling that produces legal or similarly significant effects requires additional safeguards. Even manual labeling constitutes data processing that should be disclosed.",
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
                          Under GDPR, customers have the right to request a
                          copy of all personal data you hold about them (a
                          Subject Access Request). For WhatsApp Business
                          accounts, this means you must be able to retrieve
                          and provide all chat messages, shared media, labels,
                          notes, and any data exported to CRM systems. If you
                          cannot locate and compile this data within 30 days,
                          you are in breach of GDPR Article 15. Your privacy
                          policy should explain how customers can exercise
                          this right.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 5: Catalog and Commerce Features */}
              <section id="catalog-commerce" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Catalog and Commerce Features
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Selling through WhatsApp creates commerce data
                      obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    WhatsApp Business catalogs allow you to showcase products
                    and services directly within the app. Customers can browse
                    your catalog, ask questions about products, and place
                    orders without leaving WhatsApp. This commerce
                    functionality generates data that your privacy policy
                    must cover:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Product browsing and interaction data",
                        desc: "When customers view your catalog, tap on products, and share product links, WhatsApp collects interaction data. If you use the API, you can track which products generate the most inquiries and which customers view specific items. This behavioral data helps you optimize your catalog but constitutes personal data processing.",
                      },
                      {
                        title: "Order details collected through chat",
                        desc: "Many WhatsApp Business accounts process orders directly through conversation. Customers send product selections, quantities, shipping addresses, and special instructions via messages. This order data is more unstructured than typical e-commerce data but carries the same privacy obligations. Your policy must cover how order data is collected, stored, and used.",
                      },
                      {
                        title: "Cart and checkout data",
                        desc: "WhatsApp's cart feature allows customers to select multiple items from your catalog and send the cart as a message. This creates a structured order request containing product IDs, quantities, and customer contact information. If you connect this to an external order management system, the data flows between WhatsApp and your business infrastructure.",
                      },
                      {
                        title: "Post-purchase communications",
                        desc: "Order confirmations, shipping updates, delivery notifications, and review requests sent through WhatsApp all involve processing customer data. If you use template messages through the API to send these updates, the message delivery data (sent, delivered, read) is also tracked and stored.",
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

              {/* Section 6: Click-to-WhatsApp Ads */}
              <section id="click-to-whatsapp-ads" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Click-to-WhatsApp Ads (Meta Ads Integration)
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Advertising that bridges Meta platforms and WhatsApp
                      conversations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Click-to-WhatsApp ads appear on Facebook and Instagram and
                    direct users to open a WhatsApp conversation with your
                    business. These ads create a unique cross-platform data
                    flow that combines Meta advertising data with WhatsApp
                    messaging data:
                  </p>

                  {[
                    {
                      title: "Ad impression and click data",
                      desc: "Meta collects standard advertising metrics: impressions, clicks, audience demographics, device types, and geographic data. When a user clicks the ad, Meta records the conversion event and connects it to the WhatsApp conversation that follows. This creates a data link between the user's Meta advertising profile and their WhatsApp phone number.",
                    },
                    {
                      title: "Conversation attribution",
                      desc: "Meta tracks which ad campaigns, ad sets, and individual ads generate WhatsApp conversations. This attribution data helps you measure ad performance but means that customer conversations are linked to advertising data. Your privacy policy must disclose that WhatsApp conversations initiated through ads are tracked for advertising measurement purposes.",
                    },
                    {
                      title: "Audience targeting and retargeting",
                      desc: "You can create Custom Audiences in Meta Ads Manager based on people who have messaged your WhatsApp Business account. This means WhatsApp conversation data is used for advertising targeting. Under GDPR, using communication data for advertising purposes requires a separate lawful basis (typically consent) from the original communication purpose.",
                    },
                    {
                      title: "Cross-platform data sharing",
                      desc: "Click-to-WhatsApp ads inherently involve data sharing between Facebook/Instagram and WhatsApp. While these are all Meta-owned platforms, GDPR treats each service as a distinct processing activity. Your privacy policy must explain that data flows between Meta's advertising platform and WhatsApp when you run these ads.",
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
                    For detailed guidance on Meta advertising privacy
                    requirements, see the{" "}
                    <Link
                      href="/privacy-policy-for-facebook-page"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Facebook page privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    {" "}and the{" "}
                    <Link
                      href="/privacy-policy-for-instagram"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Instagram privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , which cover Meta Ads Manager requirements in depth.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 7: Meta Business Suite Integration */}
              <section id="meta-business-suite" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Meta Business Suite Integration
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Unified inbox and cross-platform management create
                      combined data profiles.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    Meta Business Suite connects your WhatsApp Business
                    account with your Facebook Page and Instagram account
                    into a single management platform. This integration
                    creates combined customer profiles that merge data from
                    multiple Meta-owned platforms:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Unified inbox merges conversation data",
                        desc: "Meta Business Suite's unified inbox shows WhatsApp messages, Facebook Messenger conversations, and Instagram DMs in one view. When you respond to a customer who has contacted you through multiple channels, the platform combines their interaction history. This cross-platform profiling must be disclosed in your privacy policy.",
                      },
                      {
                        title: "Customer contact records span platforms",
                        desc: "Meta Business Suite creates contact records that link a customer's WhatsApp phone number, Facebook profile, and Instagram account. This means a single customer record may contain data from WhatsApp conversations, Facebook comments, Instagram DMs, and ad interactions. Your privacy policy must explain that customer data is aggregated across Meta platforms.",
                      },
                      {
                        title: "Automated responses and chatbot flows",
                        desc: "Meta Business Suite allows you to set up automated responses and conversation flows that work across WhatsApp, Messenger, and Instagram. These automations process customer messages, classify intent, and route conversations. The automation logic and the data it processes must be disclosed, especially if you use AI-powered classification.",
                      },
                      {
                        title: "Analytics and reporting across platforms",
                        desc: "Meta Business Suite provides analytics that combine WhatsApp message metrics, Facebook engagement data, and Instagram performance. While most analytics are aggregated, some reports connect individual customer interactions across platforms. Your privacy policy should address cross-platform analytics use.",
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
                          When Meta Business Suite links a customer&apos;s
                          WhatsApp phone number to their Facebook profile, it
                          creates a joint controller relationship between you
                          and Meta for that combined data. Under the GDPR
                          joint controller framework (Article 26), both
                          parties must determine their respective
                          responsibilities for data protection. Meta provides
                          a Controller Addendum for this purpose, but your
                          privacy policy must independently disclose the
                          cross-platform data linking to your customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 8: Payment Features */}
              <section id="payment-features" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Payment Features
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Financial data requires the highest level of privacy
                      disclosure.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    WhatsApp is expanding its payment capabilities across
                    multiple markets. Whether you use WhatsApp Payments
                    (available in India, Brazil, and other markets), share
                    payment links in conversations, or process orders through
                    integrated payment gateways, financial data handling
                    must be prominently disclosed in your privacy policy:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "WhatsApp Payments (in-app)",
                        desc: "In markets where WhatsApp Payments is available, customers can send payments directly within the chat. This involves processing UPI IDs (India), bank account references, transaction amounts, and payment confirmation data. Meta partners with local payment processors (such as NPCI in India) to handle the financial infrastructure. Your privacy policy must name these payment processors and explain how transaction data is handled.",
                      },
                      {
                        title: "Payment links shared in conversations",
                        desc: "Many businesses share Stripe, Razorpay, PayPal, or Square payment links through WhatsApp messages. When a customer clicks a payment link, they leave the WhatsApp environment and enter the payment processor's domain. Your privacy policy must disclose that payment data is processed by third-party providers and link to their respective privacy policies.",
                      },
                      {
                        title: "Invoice and receipt data",
                        desc: "Sending invoices, payment reminders, and receipts through WhatsApp involves processing customer names, amounts owed, payment due dates, and transaction histories. If you use accounting software that integrates with WhatsApp (such as QuickBooks or Xero), customer financial data flows between the messaging platform and your accounting system.",
                      },
                      {
                        title: "Transaction records and retention",
                        desc: "Financial regulations in most jurisdictions require you to retain transaction records for a minimum period (typically 5 to 7 years). This means WhatsApp payment data may be retained longer than other customer data. Your privacy policy must specify different retention periods for financial data versus general conversation data.",
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

              {/* Section 9: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Scale className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common WhatsApp Business Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These assumptions are widespread among WhatsApp Business
                      users. All of them are wrong.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Mistake 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;WhatsApp is encrypted, so I don&apos;t need a privacy policy&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      End-to-end encryption protects messages in transit
                      between sender and receiver. It does not protect data
                      after you receive it. Once a customer&apos;s message
                      arrives on your device, you can screenshot it, export
                      it, copy it to a CRM, forward it to team members, or
                      back it up to cloud storage. None of these actions are
                      covered by WhatsApp&apos;s encryption. Your privacy
                      policy must address what happens to customer data after
                      it reaches your business, not just during transmission.
                    </p>
                  </div>

                  {/* Mistake 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;WhatsApp&apos;s privacy policy covers my business&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      WhatsApp&apos;s privacy policy covers data that Meta
                      collects through the WhatsApp platform: account
                      information, usage data, device information, and
                      connection metadata. It does not cover how you use
                      customer phone numbers, what you do with chat data in
                      your CRM, how your payment processor handles
                      transaction data, or what your chatbot platform does
                      with conversation logs. You are a separate data
                      controller for all business-specific data processing.
                    </p>
                  </div>

                  {/* Mistake 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Customers messaged me first, so I have consent&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      A customer initiating a WhatsApp conversation is not
                      the same as giving consent for all data processing.
                      Under GDPR, consent must be specific, informed, and
                      freely given for each distinct purpose. A customer
                      asking about your product does not consent to being
                      added to a marketing list, having their phone number
                      uploaded to Meta for Custom Audience targeting, or
                      having their conversation data shared with a CRM
                      platform. Each of these uses requires separate
                      disclosure and, in many cases, separate consent.
                    </p>
                  </div>

                  {/* Mistake 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;I only use the free WhatsApp Business App, not the API&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      The free WhatsApp Business App still collects and
                      processes personal data. Customer phone numbers, chat
                      messages, catalog interactions, labels, quick replies,
                      and business profile views all constitute personal data.
                      The privacy policy requirement comes from privacy laws
                      (GDPR, CCPA) and WhatsApp&apos;s own Business Policy,
                      not from the technical complexity of your setup. A sole
                      trader using the free app to take orders via WhatsApp
                      has the same legal obligation as an enterprise using
                      the API with a team of 50 agents.
                    </p>
                  </div>

                  {/* Mistake 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Chat data is temporary and doesn&apos;t need a retention policy&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      WhatsApp messages persist on devices and in backups
                      indefinitely unless actively deleted. If you export
                      chats to a CRM, back up your phone to Google Drive or
                      iCloud, or use the API with conversation logging, chat
                      data is stored across multiple locations with no
                      automatic expiration. GDPR requires you to define and
                      enforce retention periods for personal data. Your
                      privacy policy must state how long you keep WhatsApp
                      conversation data and when it is deleted.
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
                      How to Create a Privacy Policy for WhatsApp Business
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Six steps from audit to publication.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Creating a privacy policy for your WhatsApp Business
                    account is straightforward once you map out your data
                    collection points. Follow these steps:
                  </p>

                  {[
                    {
                      step: "1",
                      title: "Audit your WhatsApp Business data collection points",
                      desc: "List every data touchpoint: customer chats, catalog interactions, payment transactions, WhatsApp Business API webhooks, click-to-WhatsApp ad conversions, Meta Business Suite integrations, CRM connections, and automated message flows. For each, note what personal data is collected.",
                    },
                    {
                      step: "2",
                      title: "Identify which privacy laws apply to your customers",
                      desc: "WhatsApp is used in over 180 countries. Check where your customers are located. EU and UK customers trigger GDPR. California customers trigger CCPA. Brazil customers trigger LGPD. India customers trigger the DPDP Act. Most WhatsApp Business accounts serve a global audience, meaning multiple privacy laws apply simultaneously.",
                    },
                    {
                      step: "3",
                      title: "Map data types to purposes and lawful bases",
                      desc: "For each type of personal data, document the purpose and GDPR lawful basis. Customer chat data for support = legitimate interests. Phone numbers for marketing messages = consent. Payment data for transactions = contract performance. API webhook data for analytics = legitimate interests. Map every data flow.",
                    },
                    {
                      step: "4",
                      title: "Name every third-party service and processor",
                      desc: "GDPR requires naming specific services. Write 'Twilio Inc. (WhatsApp Business Solution Provider)' not 'messaging infrastructure partners.' Write 'Razorpay (payment processing)' not 'payment service providers.' Name your BSP, CRM, payment processor, chatbot platform, and analytics tools explicitly.",
                    },
                    {
                      step: "5",
                      title: "Generate your privacy policy",
                      desc: "Use a structured privacy policy generator that covers WhatsApp Business-specific data flows including API integrations, chat data retention, catalog commerce, and Meta advertising integration. Our generator handles this in under 60 seconds for $4.99.",
                    },
                    {
                      step: "6",
                      title: "Publish and link from every customer touchpoint",
                      desc: "Host your privacy policy on a dedicated URL. Link to it from your WhatsApp Business profile description, website footer, automated welcome messages, Meta Ads Manager account, chatbot conversation flows, and any order confirmation templates. Set a reminder to review and update it every 6 months.",
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
                    . For small business-specific guidance, see the{" "}
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
                      Generate Your WhatsApp Business Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your WhatsApp Business
                      setup and get a customized, compliant privacy policy
                      covering API integrations, chat data, catalogs, payments,
                      and Meta advertising in under 60 seconds.
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
                      Does WhatsApp Business need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. WhatsApp Business accounts collect customer phone
                      numbers, chat messages, transaction data, and catalog
                      interaction data. Privacy laws (
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
                      ), WhatsApp&apos;s Business Policy, and Meta&apos;s
                      advertising policies all require you to have a privacy
                      policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What data does WhatsApp Business collect?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Customer phone numbers, chat message content, delivery
                      and read receipts, catalog browsing data, order and
                      payment information, customer labels and notes you add,
                      and metadata such as message timestamps and device
                      information. The WhatsApp Business API adds webhook
                      event data, template message analytics, and CRM
                      integration data to this list.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Is WhatsApp Business GDPR compliant?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      WhatsApp provides encryption and has its own GDPR
                      compliance measures, but this only covers platform-level
                      data processing. As a business, you are a separate data
                      controller for customer data you collect, store, and
                      process through the app. You need your own privacy
                      policy, lawful basis for processing, and data protection
                      measures to be fully GDPR compliant.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does the WhatsApp Business API require a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. The API terms require businesses to have a privacy
                      policy and to provide it to customers. API access
                      involves processing customer data through third-party
                      Business Solution Providers (BSPs) like Twilio,
                      MessageBird, or 360dialog, which creates additional data
                      processing relationships that must be disclosed in your
                      policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do click-to-WhatsApp ads need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. Click-to-WhatsApp ads are run through Meta Ads
                      Manager, which requires advertisers to have a privacy
                      policy. These ads combine Meta advertising data with
                      WhatsApp conversation data, creating a cross-platform
                      data flow. Your privacy policy must cover both the{" "}
                      <Link
                        href="/privacy-policy-for-facebook-page"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        Meta advertising
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      and WhatsApp messaging components.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does WhatsApp&apos;s privacy policy cover my business
                      account?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      No. WhatsApp&apos;s privacy policy covers data that
                      Meta collects through the WhatsApp platform. It does
                      not cover how you use customer chat data, what you do
                      with phone numbers, how your CRM stores contact
                      information, or how third-party integrations process
                      the data. You need your own privacy policy for your
                      business-specific data handling.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Where should I display my WhatsApp Business privacy
                      policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Link to your privacy policy from your WhatsApp Business
                      profile (in the business description or catalog), your
                      website footer, your Meta Ads Manager account, any
                      automated welcome messages or chatbot flows, and your
                      API webhook responses. Host the policy on a dedicated
                      URL you control, not as a WhatsApp message or status
                      update.
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
                      desc: "Meta ecosystem compliance for Instagram",
                    },
                    {
                      href: "/privacy-policy-for-facebook-page",
                      icon: Globe,
                      title: "Privacy Policy for Facebook Page",
                      desc: "Meta advertising and page compliance",
                    },
                    {
                      href: "/privacy-policy-for-telegram-bot",
                      icon: MessageSquare,
                      title: "Privacy Policy for Telegram Bot",
                      desc: "Messaging bot compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: FileText,
                      title: "Small Business Privacy Policy",
                      desc: "Compliance guide for small businesses",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      icon: Globe,
                      title: "Privacy Policy for Apps",
                      desc: "Mobile and web app compliance guide",
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
