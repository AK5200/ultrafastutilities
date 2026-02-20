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
  Scale,
  Ban,
  CreditCard,
  Users,
  Clock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Terms of Service for Online Business - What to Include | ultrafastutilities",
  description:
    "Learn what your online business Terms of Service must cover: liability limits, refund policies, user conduct, IP protection, and dispute resolution. Generate yours in 60 seconds.",
  keywords:
    "terms of service for online business, terms and conditions for small business website, do i need terms of service for my website, terms of service generator, online business terms and conditions",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/terms-of-service-for-online-business",
  },
  openGraph: {
    title:
      "Terms of Service for Online Business - What to Include | ultrafastutilities",
    description:
      "Learn what your online business Terms of Service must cover: liability limits, refund policies, user conduct, IP protection, and dispute resolution. Generate yours in 60 seconds.",
    url: "https://ultrafastutilities.com/terms-of-service-for-online-business",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Terms of Service for Online Business | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Terms of Service for Online Business - What to Include | ultrafastutilities",
    description:
      "Learn what your online business Terms of Service must cover: liability limits, refund policies, user conduct, IP protection, and dispute resolution. Generate yours in 60 seconds.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-tos", title: "Why Your Business Needs One" },
  { id: "tos-vs-privacy", title: "ToS vs Privacy Policy" },
  { id: "risks", title: "Risks Without a ToS" },
  { id: "sections", title: "What to Include" },
  { id: "business-types", title: "By Business Type" },
  { id: "generate", title: "Generate Your ToS" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function TermsOfServiceForOnlineBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Terms of Service for Online Business - What to Include | ultrafastutilities",
            description:
              "Learn what your online business Terms of Service must cover: liability limits, refund policies, user conduct, IP protection, and dispute resolution. Generate yours in 60 seconds.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2025-01-01",
            dateModified: "2026-02-20",
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
                name: "Terms of Service for Online Business",
                item: "https://ultrafastutilities.com/terms-of-service-for-online-business",
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
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is a Terms of Service legally required?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Unlike a privacy policy, a Terms of Service is not legally mandated in most jurisdictions. However, it is strongly recommended because it's your primary tool for limiting liability, protecting intellectual property, and establishing the rules of your platform. Payment processors and app stores often require one.",
                },
              },
              {
                "@type": "Question",
                name: "Can I copy another company's Terms of Service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Another company's ToS is their copyrighted document and won't reflect your specific business model, jurisdiction, or services. Using ChatGPT or generic AI tools also produces generic text that misses critical clauses. A properly structured generator tailored to your business type is a more reliable starting point.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need Terms of Service for a small business website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Small businesses are often more vulnerable to legal disputes because they lack in-house legal teams. A ToS protects you from frivolous claims, defines refund policies, and gives you the right to manage how people use your site. It's one of the lowest-cost forms of legal protection available.",
                },
              },
              {
                "@type": "Question",
                name: "How do I make my Terms of Service enforceable?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Display it prominently with a link in your website footer. For stronger enforceability, use a clickwrap approach: require users to check a box agreeing to your terms before completing a purchase or creating an account. Keep a record of when users accepted.",
                },
              },
              {
                "@type": "Question",
                name: "What's included in the generated Terms of Service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our generator creates a complete Terms of Service covering acceptance of terms, user responsibilities, payment and refund policies, intellectual property, limitation of liability, termination rights, and governing law, all customized to your business type. It's bundled with a Privacy Policy and Cookie Policy for $4.99.",
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
                Terms of Service for Online Business
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Scale className="w-3.5 h-3.5" />
                Business Legal Protection
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Terms of Service for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Online Business
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A Terms of Service protects your online business from liability,
                sets the rules for how users interact with your site, and
                establishes your legal rights. Here&apos;s exactly what yours
                needs to include.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For e-commerce stores, SaaS products, freelancers, and service
                businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-ecommerce"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <CreditCard className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                E-commerce Compliance
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/what-happens-without-a-privacy-policy"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <AlertTriangle className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Risks of No Legal Pages
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
                    Need Terms of Service?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate in under 60 seconds
                  </p>
                  <Link href="/generate">
                    <Button
                      size="sm"
                      className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg"
                    >
                      Generate ToS
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
              {/* Section 1 */}
              <section id="why-tos" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Your Online Business Needs Terms of Service
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    A Terms of Service (also called Terms and Conditions or Terms
                    of Use) is a legally binding agreement between you and anyone
                    who uses your website or service. While a{" "}
                    <Link
                      href="/privacy-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    explains how you handle data, a Terms of Service defines the
                    rules of engagement for your business.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Without a ToS, your online business is exposed to:
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {[
                      "Unlimited liability for damages: users can claim without agreed-upon limits",
                      "No legal basis to terminate abusive users or fraudulent accounts",
                      "Unprotected intellectual property: your content, brand, and code have no stated ownership",
                      "Chargebacks and refund disputes with no documented policy to reference",
                      "No defined process for handling disputes or choosing jurisdiction",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-base leading-7 text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: ToS vs Privacy Policy */}
              <section id="tos-vs-privacy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Terms of Service vs Privacy Policy: You Need Both
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Many business owners think one legal page is enough. These
                    two documents serve entirely different purposes:
                  </p>

                  <div className="mt-6 space-y-6">
                    <div className="rounded-xl border border-blue-200/60 bg-blue-50/30 p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Scale className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold text-slate-900">
                          Terms of Service
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-700">
                        Protects <strong>your business</strong>. Sets rules for
                        using your site, limits your liability, defines payment
                        terms, establishes intellectual property rights, and
                        gives you the right to terminate accounts.
                      </p>
                    </div>

                    <div className="rounded-xl border border-blue-200/60 bg-blue-50/30 p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                        <h3 className="font-semibold text-slate-900">
                          <Link
                            href="/privacy-policy-for-websites"
                            className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                          >
                            Privacy Policy
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                          </Link>
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-700">
                        Protects <strong>your users</strong>. Explains what data
                        you collect, why, how you store it, and what rights
                        users have under{" "}
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
                        .
                      </p>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Together, they form the legal foundation of any online
                    business. Our generator creates both documents as part of a
                    complete suite: Privacy Policy, Terms of Service, and{" "}
                    <Link
                      href="/cookie-policy-for-websites"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Cookie Policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Risks */}
              <section id="risks" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Happens Without Terms of Service
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="rounded-xl border border-red-200/60 bg-red-50/30 p-5">
                    <div className="flex gap-3 mb-4">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-base leading-7 text-slate-700">
                        <strong className="text-slate-900">Warning:</strong>{" "}
                        Operating an online business without Terms of Service
                        leaves you exposed to legal, financial, and operational
                        risks.
                      </p>
                    </div>

                    <div className="space-y-5 mt-5">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Unlimited Liability Exposure
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Without a liability limitation clause, your business
                          could be held responsible for any damages a user claims
                          to have experienced. A proper ToS caps your liability
                          to a defined amount, typically the fees paid by the
                          user.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          No Refund or Cancellation Framework
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Payment disputes and chargeback claims are much harder
                          to defend without documented refund and cancellation
                          policies. Payment processors like Stripe and PayPal
                          often side with the customer when no ToS exists.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Inability to Remove Bad Actors
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Without a termination clause, you have no documented
                          right to suspend or remove users who abuse your
                          service, post harmful content, or violate your
                          community standards.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1.5">
                          Intellectual Property Theft
                        </h3>
                        <p className="text-base leading-7 text-slate-700">
                          Without IP clauses, there&apos;s no clear statement
                          that your website content, branding, and code belong to
                          you. This makes it harder to pursue legal action if
                          someone copies your work.
                        </p>
                      </div>
                    </div>
                  </div>
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
                      What Your Terms of Service Must Include
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  {[
                    {
                      title: "Acceptance of Terms",
                      desc: 'How users agree to your terms: by using the site, creating an account, or making a purchase. This is the foundation that makes your ToS legally binding ("by accessing this site, you agree to these terms").',
                    },
                    {
                      title: "User Eligibility & Accounts",
                      desc: "Minimum age requirements, account responsibilities, and the obligation to provide accurate information. If you require accounts, specify that users are responsible for their login credentials.",
                    },
                    {
                      title: "Acceptable Use Policy",
                      desc: "What users can and cannot do on your platform. Prohibited activities include scraping, spamming, harassment, or using your service for illegal purposes.",
                    },
                    {
                      title: "Payment Terms & Refund Policy",
                      desc: "Pricing, billing cycles, accepted payment methods, automatic renewals, cancellation procedures, and your refund policy with specific conditions and timeframes.",
                    },
                    {
                      title: "Intellectual Property Rights",
                      desc: "A clear statement that your website content, logos, code, and brand are your property. Also covers how users can (and cannot) use your content.",
                    },
                    {
                      title: "User-Generated Content",
                      desc: "If users can post content (reviews, comments, uploads), define who owns it, what license you have to use it, and your right to remove content that violates your policies.",
                    },
                    {
                      title: "Limitation of Liability",
                      desc: 'Caps your financial exposure. Typically states your service is provided "as is" and limits liability to the amount paid by the user in the preceding 12 months.',
                    },
                    {
                      title: "Termination Clause",
                      desc: "Your right to suspend or terminate accounts for policy violations, and what happens to user data and paid subscriptions when termination occurs.",
                    },
                    {
                      title: "Dispute Resolution & Governing Law",
                      desc: "Which jurisdiction's laws apply, whether disputes go through arbitration or courts, and where legal proceedings would take place.",
                    },
                    {
                      title: "Modification of Terms",
                      desc: "How you will notify users of changes to the ToS (email, website notice) and when updated terms take effect.",
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

              {/* Section 5: By Business Type */}
              <section id="business-types" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      ToS Considerations by Business Type
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      icon: CreditCard,
                      title: "E-commerce & Online Stores",
                      items: [
                        "Detailed refund and return policy with specific timeframes",
                        "Shipping terms, delivery disclaimers, and risk of loss transfer",
                        "Product description accuracy disclaimers",
                        "Payment processing and chargeback handling procedures",
                      ],
                    },
                    {
                      icon: Users,
                      title: "SaaS & Digital Services",
                      items: [
                        "Service level expectations and uptime disclaimers",
                        "Subscription billing, auto-renewal, and cancellation terms",
                        "Data ownership: who owns content created using your service",
                        "API usage limits and fair use policies",
                      ],
                    },
                    {
                      icon: FileText,
                      title: "Content & Membership Sites",
                      items: [
                        "Content licensing and usage restrictions",
                        "Membership access levels and what's included at each tier",
                        "Community guidelines and moderation policies",
                        "User-generated content rights and takedown procedures",
                      ],
                    },
                    {
                      icon: Ban,
                      title: "Freelancers & Service Providers",
                      items: [
                        "Scope of services and deliverable expectations",
                        "Payment terms, invoicing, and late payment handling",
                        "Project cancellation and kill-fee policies",
                        "Ownership transfer of deliverables upon payment",
                      ],
                    },
                  ].map((group) => (
                    <div key={group.title}>
                      <div className="flex items-center gap-2 mb-3">
                        <group.icon className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold text-slate-900">
                          {group.title}
                        </h3>
                      </div>
                      <div className="space-y-2.5">
                        {group.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-base leading-7"
                          >
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                            <p className="text-slate-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
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
                    <Scale className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your Terms of Service
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Get a complete Terms of Service, Privacy Policy, and
                      Cookie Policy for your online business, customized in
                      under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Legal Documents for $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>ToS + Privacy + Cookie Policy</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured templates based on widely accepted legal
                      standards. Not legal advice.
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
                      Is a Terms of Service legally required?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Unlike a{" "}
                      <Link
                        href="/what-happens-without-a-privacy-policy"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        privacy policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , a Terms of Service is not legally mandated in most
                      jurisdictions. However, it is strongly recommended because
                      it&apos;s your primary tool for limiting liability,
                      protecting intellectual property, and establishing the
                      rules of your platform. Payment processors and app stores
                      often require one.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Can I copy another company&apos;s Terms of Service?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      No. Another company&apos;s ToS is their copyrighted
                      document and won&apos;t reflect your specific business
                      model, jurisdiction, or services. Using{" "}
                      <Link
                        href="/chatgpt-privacy-policy-risks"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        ChatGPT or generic AI tools
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      also produces generic text that misses critical clauses. A
                      properly structured generator tailored to your business
                      type is a more reliable starting point.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Do I need Terms of Service for a small business website?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes. Small businesses are often more vulnerable to legal
                      disputes because they lack in-house legal teams. A ToS
                      protects you from frivolous claims, defines refund
                      policies, and gives you the right to manage how people use
                      your site. It&apos;s one of the lowest-cost forms of legal
                      protection available.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      How do I make my Terms of Service enforceable?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Display it prominently with a link in your website footer.
                      For stronger enforceability, use a &ldquo;clickwrap&rdquo;
                      approach: require users to check a box agreeing to your
                      terms before completing a purchase or creating an account.
                      Keep a record of when users accepted.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      What&apos;s included in the generated Terms of Service?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Our generator creates a complete Terms of Service covering
                      acceptance of terms, user responsibilities, payment and
                      refund policies, intellectual property, limitation of
                      liability, termination rights, and governing law, all
                      customized to your business type. It&apos;s bundled with a{" "}
                      <Link
                        href="/privacy-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        Privacy Policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/cookie-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        Cookie Policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      for $4.99.
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
                      icon: ShieldCheck,
                      title: "Privacy Policy for Websites",
                      desc: "Complete website privacy policy guide",
                    },
                    {
                      href: "/privacy-policy-for-ecommerce",
                      icon: CreditCard,
                      title: "Privacy Policy for E-commerce",
                      desc: "Online store compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      icon: FileText,
                      title: "Privacy Policy for SaaS",
                      desc: "Software service privacy requirements",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      icon: FileText,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie compliance and consent guide",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "No Legal Pages? The Risks",
                      desc: "Consequences of missing legal documents",
                    },
                    {
                      href: "/free-vs-paid-privacy-policy-generator",
                      icon: FileText,
                      title: "Free vs Paid Generator",
                      desc: "Why free legal templates fall short",
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
