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
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do I Need a Privacy Policy for a Blog? Yes, Here's Why (2026) | ultrafastutilities",
  description:
    "Yes, your blog needs a privacy policy. Google Analytics, contact forms, cookies, and comment sections all collect personal data. Learn what laws apply and how to create one in 60 seconds.",
  keywords:
    "privacy policy for blog, do i need a privacy policy for a blog, blog privacy policy, privacy policy for personal blog, do blogs need privacy policies, blogger privacy policy, wordpress blog privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-blog",
  },
  openGraph: {
    title:
      "Do I Need a Privacy Policy for a Blog? Yes, Here's Why (2026) | ultrafastutilities",
    description:
      "Yes, your blog needs a privacy policy. Google Analytics, contact forms, cookies, and comment sections all collect personal data. Learn what laws apply and how to create one in 60 seconds.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-blog",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Do I Need a Privacy Policy for a Blog? | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do I Need a Privacy Policy for a Blog? Yes, Here's Why (2026)",
    description:
      "Yes, your blog needs a privacy policy. Google Analytics, contact forms, cookies, and comment sections all collect personal data. Learn what laws apply.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "short-answer", title: "The Short Answer" },
  { id: "what-data-blogs-collect", title: "What Data Blogs Collect" },
  { id: "which-laws-apply", title: "Which Laws Apply" },
  { id: "what-to-include", title: "What to Include" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function DoINeedAPrivacyPolicyForABlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do I Need a Privacy Policy for a Blog? Yes, Here's Why (2026)",
            description:
              "Yes, your blog needs a privacy policy. Google Analytics, contact forms, cookies, and comment sections all collect personal data. Learn what laws apply and how to create one.",
            author: {
              "@type": "Person",
              name: "Anupam Kumar",
            },
            datePublished: "2026-02-22",
            dateModified: "2026-02-22",
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
                name: "Privacy Policy for a Blog",
                item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-blog",
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
                name: "Do I need a privacy policy for a personal blog?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. If your personal blog uses Google Analytics, has a contact form, allows comments, or sets any cookies, it collects personal data and requires a privacy policy under GDPR, CCPA, and CalOPPA.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a privacy policy if my blog has no ads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Advertising is not the trigger. Any form of personal data collection, including analytics tracking, contact forms, newsletter sign-ups, or cookies, creates the legal requirement for a privacy policy.",
                },
              },
              {
                "@type": "Question",
                name: "Does a WordPress blog need a privacy policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. WordPress itself sets cookies for logged-in users and commenters. Most WordPress blogs also use plugins like Jetpack, WooCommerce, or Yoast that collect additional data. WordPress even includes a built-in privacy policy page template for this reason.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if my blog doesn't have a privacy policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You risk GDPR fines up to €20 million, CCPA penalties of $7,500 per violation, Google AdSense account suspension, and loss of reader trust. Many ad networks and affiliate programs also require a published privacy policy.",
                },
              },
              {
                "@type": "Question",
                name: "Can I just copy a privacy policy from another blog?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. A copied privacy policy describes another blog's data practices, not yours. It will reference services you don't use and omit ones you do, which actively misrepresents your data handling and creates legal liability rather than reducing it.",
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
                Privacy Policy for a Blog
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Blog Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Blog?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes. If your blog uses analytics, has a contact form, allows
                comments, or sets cookies, you are collecting personal data
                and need a privacy policy. Here is exactly why and what it
                must include.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For personal bloggers, WordPress sites, and content creators.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-wordpress"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                WordPress Guide
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
                    Need a blog privacy policy?
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
                <span>Last updated: February 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>7 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, blogs need a privacy policy.</strong> Any blog
                  that uses Google Analytics, has a contact form, allows
                  comments, displays ads, or sets cookies collects personal
                  data from visitors. Under GDPR, CCPA, and CalOPPA, you
                  are legally required to disclose this data collection in a
                  published privacy policy, regardless of blog size or
                  whether you earn revenue from it.
                </p>
              </div>

              {/* Section 1: The Short Answer */}
              <section id="short-answer" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      The Short Answer: Yes, You Need One
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    If your blog collects any personal data from visitors, and
                    it almost certainly does, you are legally required to have
                    a privacy policy. This is not limited to commercial blogs.
                    A personal blog, a hobby blog, or a portfolio blog with
                    Google Analytics and a contact form collects enough data
                    to trigger privacy law requirements in multiple
                    jurisdictions.
                  </p>
                  <p>
                    The obligation comes from the data you collect, not from
                    the revenue you earn or the size of your audience. A blog
                    with 50 monthly readers and a blog with 5 million are held
                    to the same legal standard under{" "}
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

                {/* Warning Box */}
                <div className="mt-6 pl-0 sm:pl-[52px] rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-amber-900 text-sm">
                        Without a privacy policy, you risk
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-amber-800">
                        GDPR fines up to &euro;20 million, CCPA penalties of
                        $7,500 per violation, Google AdSense suspension, and
                        loss of reader trust. Learn the full breakdown of{" "}
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
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 2: What Data Do Blogs Actually Collect */}
              <section id="what-data-blogs-collect" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Data Do Blogs Actually Collect?
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] text-base leading-7 text-slate-700">
                  <p>
                    Most bloggers are surprised by how much personal data their
                    blog collects without them realizing it. Here are the most
                    common sources:
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      {
                        title: "Google Analytics or any analytics tool",
                        desc: "Collects IP addresses, browser type, device info, geographic location, pages visited, time on site, and referring URLs. All of this is personal data under GDPR.",
                      },
                      {
                        title: "Contact forms",
                        desc: "Collects names, email addresses, and any message content visitors submit. This is direct personal data collection.",
                      },
                      {
                        title: "Comment sections",
                        desc: "WordPress comments collect the commenter's name, email, website URL, and IP address. This data is stored in your database.",
                      },
                      {
                        title: "Newsletter or email sign-up forms",
                        desc: "Collects email addresses and sometimes names. If you use Mailchimp, ConvertKit, or similar services, data is also shared with a third-party processor.",
                      },
                      {
                        title: "Cookies and tracking scripts",
                        desc: "Your hosting provider, analytics, ad networks, social share buttons, and embedded videos (YouTube, Vimeo) all set cookies that track user behaviour.",
                      },
                      {
                        title: "Advertising (AdSense, Mediavine, affiliate links)",
                        desc: "Ad networks collect extensive behavioural data to serve personalized ads. Affiliate tracking cookies also collect data on user activity.",
                      },
                      {
                        title: "Web hosting server logs",
                        desc: "Your hosting provider automatically logs every visitor's IP address, browser agent, and request timestamps.",
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

                  <div className="mt-6 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <p className="text-sm leading-relaxed text-slate-700">
                      <strong className="text-slate-900">Did you know?</strong>{" "}
                      A typical{" "}
                      <Link
                        href="/privacy-policy-for-wordpress"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        WordPress blog
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      with Jetpack analytics, a contact form plugin, and a
                      newsletter widget collects IP addresses, email addresses,
                      browser data, cookie identifiers, and page view history
                      from every single visitor. Under GDPR, each of these
                      qualifies as personal data that must be disclosed in a
                      privacy policy.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 3: Which Laws Apply */}
              <section id="which-laws-apply" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Which Privacy Laws Apply to Blogs?
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Privacy laws apply based on where your readers are located,
                    not where you are. Since blogs are accessible worldwide,
                    multiple laws likely apply to you:
                  </p>

                  {[
                    {
                      law: "GDPR (EU and UK)",
                      desc: "Applies if any visitor from Europe or the UK reads your blog. Requires disclosure of lawful basis, data retention periods, third-party processors, cookie usage, and user rights. Fines reach up to €20 million.",
                      link: "/gdpr-privacy-policy-template",
                      linkText: "GDPR privacy policy template",
                    },
                    {
                      law: "CCPA/CPRA (California)",
                      desc: "Applies if California residents visit your blog. Requires disclosure of data collection categories, sale or sharing of data, and consumer rights. Fines of $7,500 per intentional violation.",
                      link: "/ccpa-privacy-policy-example",
                      linkText: "CCPA privacy policy example",
                    },
                    {
                      law: "CalOPPA (California)",
                      desc: "One of the oldest online privacy laws. Requires any website that collects data from California residents to post a conspicuous privacy policy. Since California has 39 million residents, this applies to virtually every English-language blog.",
                      link: null,
                      linkText: null,
                    },
                    {
                      law: "PIPEDA (Canada), LGPD (Brazil), Privacy Act (Australia)",
                      desc: "If readers from these countries visit your blog, their national privacy laws apply. All require transparent data collection disclosures.",
                      link: null,
                      linkText: null,
                    },
                  ].map((item) => (
                    <div
                      key={item.law}
                      className="rounded-xl border border-slate-200/80 bg-white/60 p-5"
                    >
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.law}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                      {item.link && (
                        <Link
                          href={item.link}
                          className="mt-2 font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5 text-sm"
                        >
                          {item.linkText}
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* Section 4: What Should a Blog Privacy Policy Include */}
              <section id="what-to-include" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Should a Blog Privacy Policy Include?
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    A blog privacy policy does not need to be 20 pages long, but
                    it must cover these essentials. A vague or copied template
                    will not satisfy{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR requirements
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        title: "Your identity and contact details",
                        desc: "Who runs the blog and how readers can contact you about privacy matters.",
                      },
                      {
                        title: "What personal data you collect",
                        desc: "List every type: names, emails, IP addresses, cookies, browser data, comment content.",
                      },
                      {
                        title: "How and why you collect it",
                        desc: "Analytics for understanding traffic, contact forms for reader enquiries, cookies for site functionality.",
                      },
                      {
                        title: "Third-party services that receive data",
                        desc: "Name each one: Google Analytics, Mailchimp, AdSense, Cloudflare, your hosting provider, any affiliate networks.",
                      },
                      {
                        title: "Cookie categories and consent",
                        desc: "Classify cookies as essential, analytics, or advertising. Explain how visitors can manage or reject them.",
                      },
                      {
                        title: "Data retention periods",
                        desc: "How long you keep comment data, analytics data, email subscriber data, and server logs.",
                      },
                      {
                        title: "User rights",
                        desc: "Under GDPR: access, rectification, erasure, restriction, portability, and objection. Under CCPA: know, delete, opt out.",
                      },
                      {
                        title: "International data transfers",
                        desc: "If you use US-based services (Google, Mailchimp, etc.) and have EU/UK readers, disclose the transfer safeguards.",
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

                  <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                    Learn why{" "}
                    <Link
                      href="/chatgpt-privacy-policy-risks"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      generic or AI-generated privacy policies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    miss critical sections and create legal exposure, and see
                    how{" "}
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
                      Generate Your Blog Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your blog and get a
                      customised, compliant privacy policy covering analytics,
                      cookies, comments, and subscriber data in under 60
                      seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Blog Privacy Policy - $4.99
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
                      Structured around widely accepted GDPR and CCPA
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
                      Do I need a privacy policy for a personal blog?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. If your personal blog uses Google Analytics, has a
                      contact form, allows comments, or sets any cookies, it
                      collects personal data and requires a privacy policy under
                      GDPR, CCPA, and CalOPPA. The requirement is triggered by
                      data collection, not by commercial activity.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do I need a privacy policy if my blog has no ads?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. Advertising is not the trigger. Any form of personal
                      data collection, including analytics tracking, contact
                      forms, newsletter sign-ups, or{" "}
                      <Link
                        href="/cookie-policy-for-websites"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        cookies
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      , creates the legal requirement for a privacy policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does a WordPress blog need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes.{" "}
                      <Link
                        href="/privacy-policy-for-wordpress"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        WordPress
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      itself sets cookies for logged-in users and commenters.
                      Most WordPress blogs also use plugins like Jetpack,
                      WooCommerce, or Yoast that collect additional data.
                      WordPress even includes a built-in privacy policy page
                      template for this reason.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What happens if my blog doesn&apos;t have a privacy
                      policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      You risk GDPR fines up to &euro;20 million, CCPA
                      penalties of $7,500 per violation, Google AdSense account
                      suspension, and loss of reader trust. Many ad networks
                      and affiliate programs also require a published privacy
                      policy. See the full{" "}
                      <Link
                        href="/what-happens-without-a-privacy-policy"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        consequences breakdown
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Can I just copy a privacy policy from another blog?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      No. A copied privacy policy describes another blog&apos;s
                      data practices, not yours. It will reference services you
                      don&apos;t use and omit ones you do, which actively
                      misrepresents your data handling and creates legal
                      liability rather than reducing it. Learn more about{" "}
                      <Link
                        href="/chatgpt-privacy-policy-risks"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        risks of generic policies
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      .
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
                      href: "/privacy-policy-for-wordpress",
                      icon: FileText,
                      title: "Privacy Policy for WordPress",
                      desc: "WordPress-specific compliance guide",
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
                      href: "/cookie-policy-for-websites",
                      icon: Cookie,
                      title: "Cookie Policy for Websites",
                      desc: "Cookie categories and GDPR rules",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without One",
                      desc: "Fines, platform bans, and legal risks",
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
