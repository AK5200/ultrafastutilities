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
  Briefcase,
  Globe,
  Users,
  Clock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Small Business: What You Need & Why | ultrafastutilities",
  description:
    "Small businesses that collect customer data need a privacy policy. Learn what to include, which laws apply to you, and how to create one without hiring a lawyer.",
  keywords:
    "privacy policy for small business, do small businesses need a privacy policy, small business privacy policy template, privacy policy for llc, small business data protection",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-small-business",
  },
  openGraph: {
    title: "Privacy Policy for Small Business: What You Need & Why | ultrafastutilities",
    description: "Small businesses that collect customer data need a privacy policy. Learn what to include, which laws apply to you, and how to create one without hiring a lawyer.",
    url: "https://ultrafastutilities.com/privacy-policy-for-small-business",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Small Business | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Small Business: What You Need & Why | ultrafastutilities",
    description: "Small businesses that collect customer data need a privacy policy. Learn what to include, which laws apply to you, and how to create one without hiring a lawyer.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-small-business", title: "Why Small Businesses Need One" },
  { id: "laws-that-apply", title: "Laws That Apply to You" },
  { id: "what-counts-as-data", title: "What Counts as Personal Data" },
  { id: "sections", title: "What to Include" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForSmallBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Small Business: What You Need & Why | ultrafastutilities",
            description: "Small businesses that collect customer data need a privacy policy. Learn what to include, which laws apply to you, and how to create one without hiring a lawyer.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2025-01-01",
            dateModified: "2026-02-20",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Small Business", item: "https://ultrafastutilities.com/privacy-policy-for-small-business" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need a privacy policy if I only have a small website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. If your website uses Google Analytics, has a contact form, collects email addresses, or uses cookies of any kind, you need a privacy policy. California's CalOPPA law requires it for any website that collects personal information from California residents — and since you can't control who visits your site, this effectively means every website.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if my small business doesn't have a privacy policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Consequences range from regulatory fines (GDPR fines can reach 4% of annual revenue) to customer complaints and loss of trust. Some platforms like Shopify, Apple's App Store, and Google Play require one before you can list products or apps.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a lawyer to write my privacy policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not necessarily. Many small businesses use privacy policy generators that ask about your specific data practices and produce a policy tailored to your answers. This is significantly more affordable than hiring a lawyer (who may charge $500-$2,000+) while still covering the key requirements. For businesses with complex data practices or those in regulated industries (healthcare, finance), legal review is recommended.",
                },
              },
              {
                "@type": "Question",
                name: "Is a privacy policy the same as Terms of Service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. A privacy policy covers how you handle personal data. Terms of Service cover the rules for using your website or service — liability limits, refund policies, intellectual property, and dispute resolution. Most businesses need both.",
                },
              },
              {
                "@type": "Question",
                name: "How often should I update my privacy policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Review your privacy policy at least once a year, and update it whenever you add new tools (a new email service, analytics platform, or payment processor), change how you collect or use data, or expand to new markets. Privacy laws are also evolving, so staying current is important.",
                },
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
                Privacy Policy for Small Business
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Briefcase className="w-3.5 h-3.5" />
                Small Business Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Small Business
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                If your business collects customer names, emails, or payment
                info — online or offline — you likely need a privacy policy.
                Here&apos;s what to include and which laws apply to you.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For sole proprietors, LLCs, freelancers, and small business
                owners.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Website Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                E-commerce Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/terms-of-service-for-online-business"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Terms of Service
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
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
                    Generate one in under 60 seconds
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
                <span>Last updated: February 2026</span>
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
              {/* Section 1: Why Small Businesses Need a Privacy Policy */}
              <section id="why-small-business" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Small Businesses Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Many small business owners assume privacy policies are only
                    for large corporations or tech companies. In reality, if your
                    business collects any personal information — customer names,
                    email addresses, phone numbers, payment details, or even
                    website analytics — you&apos;re legally required to disclose
                    how you handle that data.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    This applies whether you run a local service business, an
                    online store, a consulting practice, or a freelance
                    operation. The moment a customer fills out a contact form,
                    signs up for your newsletter, or makes a purchase, you&apos;re
                    collecting personal data.
                  </p>

                  <div className="mt-6 rounded-xl border border-blue-100/80 bg-blue-50/30 p-5">
                    <p className="text-sm font-semibold text-slate-800 mb-3">
                      Common ways small businesses collect data:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Contact forms on your website",
                        "Email newsletter signups",
                        "Online checkout and payments",
                        "Appointment booking systems",
                        "Customer accounts and profiles",
                        "Google Analytics or similar tools",
                        "Social media integrations",
                        "CRM and email marketing tools",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Beyond legal requirements, a privacy policy builds trust
                    with customers. Studies show that consumers are more likely
                    to share personal information with businesses that are
                    transparent about their data practices.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Laws That Apply */}
              <section id="laws-that-apply" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Which Privacy Laws Apply to Your Small Business
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-6">
                  <p className="text-base leading-7 text-slate-700">
                    Privacy laws are based on where your customers are
                    located — not where your business is registered. If you have
                    a website, your customers could be anywhere in the world,
                    which means multiple laws may apply to you.
                  </p>

                  {[
                    {
                      title: "GDPR (European Union / UK)",
                      desc: "Applies if any of your customers or website visitors are in the EU or UK. It doesn't matter that your business is based elsewhere. The GDPR requires explicit consent for data collection, clear disclosure of how data is used, and gives individuals the right to access, correct, and delete their data.",
                      link: "/gdpr-privacy-policy-template",
                      linkText: "GDPR guide",
                    },
                    {
                      title: "CCPA / CPRA (California)",
                      desc: "Applies to businesses that collect data from California residents and meet certain thresholds (annual revenue over $25 million, data on 100,000+ consumers, or 50%+ revenue from selling data). Even if you're below these thresholds, complying is a best practice — and other states are adopting similar laws.",
                      link: "/ccpa-privacy-policy-example",
                      linkText: "CCPA guide",
                    },
                    {
                      title: "CalOPPA (California Online Privacy Protection Act)",
                      desc: "Unlike CCPA, CalOPPA has no revenue threshold. Any website or online service that collects personal information from California residents must post a privacy policy. Since almost every website has California visitors, this effectively means every business website needs one.",
                      link: null,
                      linkText: null,
                    },
                    {
                      title: "State-Level Laws (Virginia, Colorado, Connecticut, etc.)",
                      desc: "Multiple US states have enacted their own privacy laws. Virginia's VCDPA, Colorado's CPA, and Connecticut's CTDPA all require businesses to disclose data practices. More states are following. A comprehensive privacy policy covers you across all of these.",
                      link: null,
                      linkText: null,
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          {item.desc}
                          {item.link && (
                            <>
                              {" "}
                              <Link
                                href={item.link}
                                className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                              >
                                Read our {item.linkText}
                                <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="rounded-xl border border-amber-200/60 bg-amber-50/30 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          The bottom line for small businesses
                        </p>
                        <p className="text-sm text-slate-600 mt-1">
                          If you have a website and collect any customer
                          information, you need a privacy policy. The question
                          isn&apos;t whether you need one — it&apos;s how
                          comprehensive it needs to be.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: What Counts as Personal Data */}
              <section id="what-counts-as-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Counts as Personal Data for Your Business
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Personal data isn&apos;t limited to names and email
                    addresses. Under modern privacy laws, it includes any
                    information that can identify a person — directly or
                    indirectly. Many small business owners don&apos;t realize
                    how much data they&apos;re actually collecting.
                  </p>

                  <div className="mt-6 space-y-5">
                    {[
                      {
                        title: "Direct identifiers",
                        items:
                          "Full name, email address, phone number, mailing address, date of birth, government ID numbers",
                      },
                      {
                        title: "Financial information",
                        items:
                          "Credit card numbers, bank account details, billing addresses, purchase history, invoice records",
                      },
                      {
                        title: "Digital identifiers",
                        items:
                          "IP addresses, browser cookies, device IDs, location data, browsing history on your site",
                      },
                      {
                        title: "Business relationship data",
                        items:
                          "Customer account details, order history, support tickets, communication records, preferences",
                      },
                      {
                        title: "Employee and contractor data",
                        items:
                          "If you have employees or hire contractors, their personal information is also covered by privacy laws",
                      },
                    ].map((item) => (
                      <div key={item.title}>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-600">
                          {item.items}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    If you use tools like Google Analytics, Mailchimp, Stripe,
                    or any CRM, these services also collect data on your
                    behalf. Your privacy policy needs to disclose this
                    third-party data processing.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: What to Include */}
              <section id="sections" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Your Small Business Privacy Policy Must Include
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  {[
                    {
                      title: "What data you collect",
                      desc: "List every type of personal information your business collects — from contact forms, purchases, account signups, newsletter subscriptions, and analytics tools. Be specific rather than vague.",
                    },
                    {
                      title: "How you collect it",
                      desc: "Explain each collection method: forms on your website, in-person interactions, phone calls, third-party tools (analytics, payment processors, email services), and cookies.",
                    },
                    {
                      title: "Why you collect it",
                      desc: "State the purpose for each type of data: fulfilling orders, providing customer support, sending marketing emails (with opt-out), improving your website, legal compliance, etc.",
                    },
                    {
                      title: "Who you share it with",
                      desc: "Disclose all third parties that receive customer data — payment processors (Stripe, PayPal), email services (Mailchimp), analytics (Google Analytics), hosting providers, and any other tools you use.",
                    },
                    {
                      title: "How you protect it",
                      desc: "Describe your security measures in general terms: encryption, secure servers, limited access to customer data, regular backups. Don't over-promise — be honest about what you do.",
                    },
                    {
                      title: "How long you keep it",
                      desc: "State your data retention periods. How long do you keep customer records, order history, email lists, and analytics data? Include when and how data is deleted.",
                    },
                    {
                      title: "Customer rights",
                      desc: "Explain what rights customers have over their data — the right to access, correct, delete, or export their information. Include how they can exercise these rights (email, contact form, etc.).",
                    },
                    {
                      title: "Cookie usage",
                      desc: "If your website uses cookies (most do — analytics, session management, marketing), explain what types you use and how visitors can manage their cookie preferences.",
                    },
                    {
                      title: "Contact information",
                      desc: "Provide a way for customers to reach you with privacy-related questions or requests. Include your business name, email address, and optionally a physical address.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Privacy Policy Mistakes Small Businesses Make
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="rounded-xl border border-red-200/60 bg-red-50/30 p-5">
                    <div className="flex gap-3 mb-4">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-base leading-7 text-slate-700">
                        <strong className="text-slate-900">
                          Avoid these pitfalls
                        </strong>{" "}
                        that leave small businesses exposed to complaints, fines,
                        and lost customer trust.
                      </p>
                    </div>

                    <div className="space-y-5 mt-5">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Copying another business&apos;s policy
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          A restaurant&apos;s privacy policy won&apos;t cover
                          an e-commerce store&apos;s data practices. Every
                          business collects different data, uses different
                          tools, and has different obligations. Your policy
                          needs to reflect what your business actually does.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Using a{" "}
                          <Link
                            href="/chatgpt-privacy-policy-risks"
                            className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                          >
                            ChatGPT-generated policy
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          AI-generated policies often contain generic language,
                          reference laws that don&apos;t apply to you, or miss
                          critical disclosures about your specific tools and
                          data practices. They also tend to go out of date
                          quickly as laws change.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Not listing third-party services
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          If you use Stripe for payments, Mailchimp for emails,
                          Google Analytics for tracking, and Calendly for
                          bookings — each one processes customer data. Your
                          privacy policy must disclose these third-party
                          services.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Hiding it or making it hard to find
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Your privacy policy should be linked from your
                          website footer on every page. Burying it behind
                          multiple clicks, putting it only on your About page,
                          or hosting it as a PDF makes it effectively invisible
                          to customers and regulators.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Never updating it
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Your data practices change as your business grows.
                          New tools, new services, new marketing channels — each
                          one may require an update to your privacy policy.
                          Review it at least once a year.
                        </p>
                      </div>
                    </div>
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
                    <Briefcase className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your Small Business Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your business, and get a
                      privacy policy tailored to your data practices — plus a
                      Cookie Policy and Terms of Service included.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy — $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Privacy + Cookie + ToS</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

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

                <div className="pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Do I need a privacy policy if I only have a small website?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes. If your website uses Google Analytics, has a contact
                      form, collects email addresses, or uses cookies of any
                      kind, you need a privacy policy. California&apos;s
                      CalOPPA law requires it for any website that collects
                      personal information from California residents — and
                      since you can&apos;t control who visits your site, this
                      effectively means every website.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      What happens if my small business doesn&apos;t have a
                      privacy policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Consequences range from regulatory fines (GDPR fines can
                      reach 4% of annual revenue) to customer complaints and
                      loss of trust. Some platforms like{" "}
                      <Link
                        href="/privacy-policy-for-shopify"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        Shopify
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , Apple&apos;s App Store, and Google Play require one
                      before you can list products or apps. Read more about the{" "}
                      <Link
                        href="/what-happens-without-a-privacy-policy"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        risks of not having a privacy policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Do I need a lawyer to write my privacy policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Not necessarily. Many small businesses use privacy policy
                      generators that ask about your specific data practices
                      and produce a policy tailored to your answers. This is
                      significantly{" "}
                      <Link
                        href="/free-vs-paid-privacy-policy-generator"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        more affordable than hiring a lawyer
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      (who may charge $500–$2,000+) while still covering the
                      key requirements. For businesses with complex data
                      practices or those in regulated industries (healthcare,
                      finance), legal review is recommended.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Is a privacy policy the same as Terms of Service?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      No. A privacy policy covers how you handle personal data.{" "}
                      <Link
                        href="/terms-of-service-for-online-business"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        Terms of Service
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      cover the rules for using your website or service —
                      liability limits, refund policies, intellectual property,
                      and dispute resolution. Most businesses need both. Our
                      generator creates all three documents (Privacy Policy,
                      Cookie Policy, and Terms of Service) together.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      How often should I update my privacy policy?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Review your privacy policy at least once a year, and
                      update it whenever you add new tools (a new email
                      service, analytics platform, or payment processor),
                      change how you collect or use data, or expand to new
                      markets. Privacy laws are also evolving, so staying
                      current is important.
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
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "General website privacy policy guide",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      icon: FileText,
                      title: "Privacy Policy for E-commerce",
                      desc: "Online store compliance guide",
                    },
                    {
                      href: "/terms-of-service-for-online-business",
                      icon: ShieldCheck,
                      title: "Terms of Service for Business",
                      desc: "ToS requirements by business type",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "Risks Without a Privacy Policy",
                      desc: "Legal and business consequences",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance requirements",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: Users,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance guide",
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
