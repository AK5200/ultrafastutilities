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
    "Privacy Policy for LinkedIn: Business Page & Ads Guide (2026) | ultrafastutilities",
  description:
    "Create a privacy policy for LinkedIn marketing. Covers LinkedIn Ads, Insight Tag, Lead Gen Forms, matched audiences, Company Pages, LinkedIn Learning, and Sales Navigator data requirements.",
  keywords:
    "privacy policy for linkedin, linkedin privacy policy, linkedin business privacy policy, linkedin ads privacy policy, linkedin insight tag privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-linkedin",
  },
  openGraph: {
    title:
      "Privacy Policy for LinkedIn: Business Page & Ads Guide (2026) | ultrafastutilities",
    description:
      "Create a privacy policy for LinkedIn marketing. Covers LinkedIn Ads, Insight Tag, Lead Gen Forms, matched audiences, Company Pages, LinkedIn Learning, and Sales Navigator data requirements.",
    url: "https://ultrafastutilities.com/privacy-policy-for-linkedin",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for LinkedIn Business Pages & Ads | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for LinkedIn: Business Page & Ads Guide (2026)",
    description:
      "Create a privacy policy for LinkedIn marketing. Covers LinkedIn Ads, Insight Tag, Lead Gen Forms, and matched audiences.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do LinkedIn Company Pages need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you run LinkedIn Ads, use Lead Gen Forms, install the Insight Tag on your website, upload matched audiences, or collect follower data through your Company Page, you are collecting or facilitating the collection of personal data. LinkedIn's advertising agreements and privacy laws require you to have a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does LinkedIn require a privacy policy for advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. LinkedIn's advertising policies require advertisers to provide a privacy policy URL. For Lead Gen Forms specifically, LinkedIn requires a privacy policy link on the form itself because you are collecting personal data (names, emails, job titles, company names) directly from LinkedIn members. The form cannot be published without this link.",
      },
    },
    {
      "@type": "Question",
      name: "What data does the LinkedIn Insight Tag collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LinkedIn Insight Tag is a JavaScript snippet placed on your website that collects page URL, referrer URL, IP address (truncated), device and browser characteristics, and timestamps. LinkedIn uses this data for conversion tracking, website audience retargeting, and demographic insights about your website visitors. Under GDPR, the Insight Tag requires cookie consent because it sets tracking cookies.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need consent for LinkedIn Lead Gen Forms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under GDPR, you need a lawful basis for processing lead data. LinkedIn pre-fills form fields with member profile data (name, email, job title, company), and the user submits it to you. Your privacy policy must explain what you do with this data. For marketing follow-ups beyond the initial request, consent is the most appropriate lawful basis. LinkedIn requires a privacy policy link on every Lead Gen Form.",
      },
    },
    {
      "@type": "Question",
      name: "Does LinkedIn's privacy policy cover my Company Page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. LinkedIn's privacy policy covers data that LinkedIn collects through its platform. It does not cover data you collect through Lead Gen Forms, your external website, email lists, CRM systems, or Sales Navigator exports. You need your own privacy policy to disclose your specific data handling practices outside the LinkedIn platform.",
      },
    },
    {
      "@type": "Question",
      name: "What are LinkedIn matched audiences and do they need disclosure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Matched audiences allow you to target LinkedIn ads to people on your contact lists, website visitors (via Insight Tag), or users who have engaged with your content. Uploading customer email lists or company names to LinkedIn for ad targeting creates a data sharing relationship that must be disclosed in your privacy policy. Under GDPR, this may constitute a joint controller arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I link my LinkedIn privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link to it from your LinkedIn Company Page (About section), every Lead Gen Form, your LinkedIn Ads account settings, your external website footer, email newsletter footers, and any landing pages you promote through LinkedIn Ads. The privacy policy should be hosted on a dedicated URL that you control.",
      },
    },
  ],
};

const tocSections = [
  { id: "when-you-need-one", title: "When You Need One" },
  { id: "data-sources", title: "Data Sources" },
  { id: "insight-tag", title: "Insight Tag Requirements" },
  { id: "lead-gen-forms", title: "Lead Gen Forms" },
  { id: "matched-audiences", title: "Matched Audiences" },
  { id: "api-requirements", title: "LinkedIn API Requirements" },
  { id: "b2b-compliance", title: "B2B Marketing Compliance" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create One" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForLinkedInPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for LinkedIn: What Business Pages and Advertisers Must Disclose",
            description:
              "Create a privacy policy for LinkedIn marketing. Covers LinkedIn Ads, Insight Tag, Lead Gen Forms, matched audiences, Company Pages, LinkedIn Learning, and Sales Navigator data requirements.",
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
                name: "Privacy Policy for LinkedIn",
                item: "https://ultrafastutilities.com/privacy-policy-for-linkedin",
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
            name: "How to Create a Privacy Policy for Your LinkedIn Business",
            description:
              "Six steps to create a compliant privacy policy for LinkedIn Company Pages, ads, and B2B marketing.",
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Audit your LinkedIn data collection points",
                text: "List every LinkedIn feature and tool you use: Company Page, LinkedIn Ads, Insight Tag, Lead Gen Forms, matched audiences, Sales Navigator, LinkedIn Learning, Events, and any LinkedIn API integrations. For each, document what personal data it collects or processes.",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Identify which privacy laws apply to your audience",
                text: "Check your LinkedIn Page analytics for audience geography. If any followers or ad targets are in the EU or UK, GDPR applies. Members in California trigger CCPA and CalOPPA. B2B companies targeting global audiences will typically need to comply with GDPR, CCPA, and CalOPPA at minimum.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Map data types to purposes and lawful bases",
                text: "For each type of personal data, document the purpose and GDPR lawful basis. Lead Gen Form data for sales outreach = legitimate interests or consent. Insight Tag tracking for ad optimization = consent (cookie consent required). Matched audience uploads = legitimate interests with disclosure. Map every data flow.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Name every third-party service and processor",
                text: "GDPR requires naming specific services. Write 'LinkedIn Corporation (for advertising and lead generation)' not 'professional networking partners'. Name your CRM, email marketing platform, analytics tools, and any Sales Navigator integrations or LinkedIn API connections.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Generate your privacy policy",
                text: "Use a structured privacy policy generator that asks about your specific LinkedIn business setup and produces a customized document. This covers LinkedIn advertising, Insight Tag, Lead Gen Forms, matched audiences, and B2B marketing in a single, coherent policy.",
              },
              {
                "@type": "HowToStep",
                position: 6,
                name: "Publish and link from every touchpoint",
                text: "Host your privacy policy on a dedicated URL. Link to it from your LinkedIn Company Page About section, every Lead Gen Form, LinkedIn Ads account settings, external website footer, email footers, and any landing pages promoted through LinkedIn. Review and update every 6 months.",
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
                Privacy Policy for LinkedIn
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Globe className="w-3.5 h-3.5" />
                B2B Marketing Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  LinkedIn
                </span>
                : What Business Pages and Advertisers Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                If your LinkedIn Company Page runs ads, uses Lead Gen Forms,
                installs the Insight Tag, uploads matched audiences, or
                collects lead data through Sales Navigator, you are
                collecting personal data and need a privacy policy. Here is
                what LinkedIn requires, what data you handle, and how to
                create a compliant policy.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For LinkedIn Company Pages, advertisers, and B2B marketers.
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
                href="/privacy-policy-for-saas"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Globe className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                SaaS Privacy Guide
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
                    Need a LinkedIn privacy policy?
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
                  <strong>Yes, LinkedIn business pages need a privacy policy.</strong>{" "}
                  If you run LinkedIn Ads, use Lead Gen Forms, install the
                  Insight Tag on your website, upload matched audiences for
                  ad targeting, or collect prospect data through Sales
                  Navigator, you are collecting personal data. Privacy laws
                  and LinkedIn&apos;s own advertising agreements require you
                  to disclose these practices in a published privacy policy.
                </p>
              </div>

              {/* ── Section 1: When LinkedIn Users Need a Privacy Policy ── */}
              <section id="when-you-need-one" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      When LinkedIn Users Need a Privacy Policy
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    LinkedIn has its own privacy policy that covers the data
                    LinkedIn (a Microsoft company) collects through the
                    platform. However, LinkedIn&apos;s policy does not cover
                    data that you, as a business or marketer, collect from
                    LinkedIn members through your own tools and advertising
                    activities. If you engage in any of the following, you
                    need your own privacy policy:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Running LinkedIn Ads (Sponsored Content, Message Ads, Dynamic Ads)",
                        desc: "LinkedIn's advertising platform requires advertisers to have a privacy policy. When you run ads, LinkedIn collects data on your behalf including click-through behaviour, conversion tracking (via the Insight Tag), and professional demographic targeting data. You are responsible for disclosing how this advertising data is used.",
                      },
                      {
                        title: "Using Lead Gen Forms",
                        desc: "LinkedIn Lead Gen Forms collect personal data (names, email addresses, job titles, company names, phone numbers) directly from LinkedIn members. The form auto-fills with the member's profile data, and submissions flow to your CRM or marketing automation platform. Because you are the party collecting and using this data, you must have a privacy policy disclosing the collection and its purposes.",
                      },
                      {
                        title: "Installing the Insight Tag on your website",
                        desc: "The LinkedIn Insight Tag is a JavaScript tracking snippet that sends visitor data from your website back to LinkedIn. It enables conversion tracking, website retargeting, and website demographics reporting. Because it sets cookies and collects personal data (IP addresses, browser data, page visits), your privacy policy must disclose its presence and purpose.",
                      },
                      {
                        title: "Uploading matched audiences (contact lists or account lists)",
                        desc: "When you upload email lists, company lists, or use website retargeting audiences for ad targeting, you are sharing personal data with LinkedIn. Your privacy policy must disclose that customer or prospect data may be shared with LinkedIn for advertising purposes. Under GDPR, this sharing creates data protection obligations for both parties.",
                      },
                      {
                        title: "Using Sales Navigator for prospecting",
                        desc: "Sales Navigator provides access to detailed professional profiles, company data, and relationship intelligence. If you export lead lists, sync data to your CRM, or use InMail for outreach, you are processing personal data for sales purposes. Your privacy policy must cover how you handle prospect data obtained through LinkedIn.",
                      },
                      {
                        title: "Hosting LinkedIn Events or collecting RSVPs",
                        desc: "LinkedIn Events collect attendee names, profile data, and RSVP information. If you use this data for follow-up marketing, add attendees to email lists, or share it with co-hosts or sponsors, each of these uses must be disclosed in your privacy policy.",
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
                        LinkedIn Ads account suspension, rejection of Lead Gen
                        Form campaigns, GDPR fines up to &euro;20 million,
                        CCPA penalties of $7,500 per violation, loss of
                        LinkedIn API access, and damaged professional
                        credibility. LinkedIn actively reviews advertiser
                        compliance and can restrict your Campaign Manager
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
                      q: "Does this apply to personal LinkedIn profiles?",
                      a: "Personal profiles used purely for job searching and networking generally do not need their own privacy policy because LinkedIn's policy covers platform-level data collection. However, the moment you use a personal profile for business development, sales prospecting with Sales Navigator, or run ads through Campaign Manager, the requirement applies.",
                    },
                    {
                      q: "What about LinkedIn for recruitment?",
                      a: "Recruiters who use LinkedIn Recruiter, collect candidate data, or build talent pipelines are processing personal data for business purposes. Under GDPR, candidate data is personal data regardless of whether it is publicly visible on a LinkedIn profile. If you store candidate information in an ATS or spreadsheet, you need a privacy policy covering recruitment data handling.",
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

              {/* ── Section 2: Data Sources ── */}
              <section id="data-sources" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      LinkedIn Data Sources Your Policy Must Cover
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Every data type your LinkedIn presence might collect or facilitate.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-base leading-7 text-slate-700">
                    The data your LinkedIn business presence handles depends
                    on which features, advertising tools, and integrations
                    you use. Here is a comprehensive breakdown by source:
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
                            "Company Page Insights",
                            "Follower demographics, visitor analytics, content engagement metrics, industry breakdowns",
                            "LinkedIn (controller, aggregated data)",
                          ],
                          [
                            "LinkedIn Ads (Campaign Manager)",
                            "Click-through data, impression metrics, conversion events, audience segment performance, cost data",
                            "Joint controller (you and LinkedIn)",
                          ],
                          [
                            "Insight Tag",
                            "Page URLs, referrer URLs, IP addresses (truncated), device and browser data, timestamps, conversion events",
                            "Joint controller (you and LinkedIn)",
                          ],
                          [
                            "Lead Gen Forms",
                            "Names, email addresses, job titles, company names, phone numbers, custom form fields",
                            "You (controller), LinkedIn (processor)",
                          ],
                          [
                            "Matched Audiences",
                            "Hashed email lists, company name lists, website visitor retargeting data, engagement retargeting data",
                            "Joint controller (you and LinkedIn)",
                          ],
                          [
                            "Sales Navigator",
                            "Professional profiles, contact details, company data, relationship history, InMail correspondence",
                            "LinkedIn (platform), you (business use)",
                          ],
                          [
                            "LinkedIn Learning (enterprise)",
                            "Employee learning activity, course completions, skill assessments, engagement time",
                            "You (controller for employee data), LinkedIn (processor)",
                          ],
                          [
                            "Events",
                            "Attendee names, profile data, RSVP status, event engagement, follow-up interactions",
                            "You (controller), LinkedIn (platform)",
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
                    The critical distinction: Company Page Insights provides
                    aggregated demographic data that LinkedIn controls. But
                    Lead Gen Forms, Insight Tag tracking, matched audience
                    uploads, and Sales Navigator data involve personal data
                    that you collect, control, or jointly control with
                    LinkedIn. These are what your privacy policy must cover.
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
                          When you upload a customer email list to LinkedIn
                          for matched audience targeting, LinkedIn hashes the
                          data and matches it against its member database.
                          Under GDPR, the European Court of Justice has
                          established that this type of data sharing for
                          advertising purposes creates a joint controller
                          relationship. This means both you and LinkedIn are
                          responsible for data protection compliance, and
                          your privacy policy must disclose that you share
                          customer data with LinkedIn for advertising
                          purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 3: LinkedIn Insight Tag Requirements ── */}
              <section id="insight-tag" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      LinkedIn Insight Tag Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What your privacy policy must say about the Insight Tag.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    The LinkedIn Insight Tag is a lightweight JavaScript
                    snippet placed on every page of your website. It is the
                    foundation of LinkedIn&apos;s conversion tracking,
                    website retargeting, and website demographics features.
                    Because it collects personal data and sets cookies, it
                    has specific privacy policy requirements.
                  </p>

                  {[
                    {
                      title: "What the Insight Tag collects",
                      desc: "The tag collects the page URL, referrer URL, IP address (which LinkedIn truncates for storage), device and browser characteristics, and a timestamp for each page visit. It also fires conversion events when visitors complete specific actions you define, such as form submissions, page views, or button clicks. This data flows to your LinkedIn Campaign Manager account.",
                    },
                    {
                      title: "Cookie consent is required under GDPR",
                      desc: "The Insight Tag sets a first-party cookie (li_fat_id) and relies on LinkedIn's third-party cookies for cross-site tracking. Under GDPR and the ePrivacy Directive, you must obtain cookie consent before the Insight Tag fires. This means implementing a cookie consent banner that blocks the tag until the visitor consents to marketing or analytics cookies.",
                    },
                    {
                      title: "Privacy policy disclosure requirements",
                      desc: "Your privacy policy must state that you use the LinkedIn Insight Tag, explain what data it collects (page visits, IP addresses, device data, conversion events), state that data is shared with LinkedIn for advertising purposes, and explain that visitors can opt out through LinkedIn's advertising settings or your cookie consent preferences.",
                    },
                    {
                      title: "Website demographics and the joint controller issue",
                      desc: "LinkedIn's Website Demographics feature uses Insight Tag data to show you aggregated professional characteristics (job titles, industries, company sizes) of your website visitors. Under GDPR, this creates a joint controller relationship between you and LinkedIn because both parties determine the purposes and means of processing visitor data for this feature.",
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

                  {/* Did you know box 2 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          The LinkedIn Insight Tag can track conversions
                          across multiple LinkedIn ad campaigns
                          simultaneously. A single website visit can trigger
                          conversion events for Sponsored Content, Message
                          Ads, and Dynamic Ads all at once. This means the
                          volume of data shared with LinkedIn from your
                          website may be significantly higher than most
                          businesses realize. Your privacy policy should
                          reflect the full scope of this tracking, not just
                          mention &quot;conversion tracking&quot; in passing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 4: Lead Gen Forms Data Handling ── */}
              <section id="lead-gen-forms" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Lead Gen Forms Data Handling
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How to handle personal data collected through LinkedIn
                      Lead Gen Forms.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    LinkedIn Lead Gen Forms are pre-filled forms that appear
                    within the LinkedIn app when a member interacts with your
                    Sponsored Content or Message Ad. The form auto-populates
                    with the member&apos;s LinkedIn profile data, making it
                    easy to submit. This convenience creates specific data
                    handling obligations that your privacy policy must
                    address.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Pre-filled data from LinkedIn profiles",
                        desc: "Lead Gen Forms can auto-fill fields including first name, last name, email address, phone number, job title, company name, company size, industry, and seniority level. LinkedIn pulls this directly from the member's profile. Even though LinkedIn provides the data, you become the data controller once the member submits the form to you.",
                      },
                      {
                        title: "Custom questions and hidden fields",
                        desc: "You can add custom questions to Lead Gen Forms, such as budget range, timeline, or specific product interest. Hidden fields can pass campaign data, ad creative IDs, or UTM parameters. All of this data flows to your download or CRM integration. Your privacy policy must disclose both the visible and hidden data points you collect.",
                      },
                      {
                        title: "CRM and marketing automation integration",
                        desc: "Most businesses connect Lead Gen Forms to their CRM (Salesforce, HubSpot, Pipedrive) or marketing automation platform (Marketo, Pardot, ActiveCampaign) through LinkedIn's native integrations or Zapier. Each system that receives lead data is a data processor that must be named in your privacy policy. You must also ensure each processor has appropriate data processing agreements in place.",
                      },
                      {
                        title: "Lead data retention and deletion",
                        desc: "LinkedIn retains Lead Gen Form submissions in Campaign Manager for 90 days, after which they are automatically deleted from LinkedIn's systems. However, any data you have downloaded or synced to your CRM persists indefinitely unless you implement retention policies. Your privacy policy must state your data retention period and how leads can request deletion.",
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

                  {/* Mini FAQ */}
                  <div className="space-y-3">
                    {[
                      {
                        q: "Does the member's form submission count as consent?",
                        a: "Not necessarily. Under GDPR, the act of submitting a Lead Gen Form can be considered consent for the specific purpose described on the form (such as receiving a whitepaper or booking a demo). However, it does not automatically grant consent for unrelated marketing. If you plan to add leads to a general email newsletter or share their data with partners, you need separate, specific consent for each additional purpose.",
                      },
                      {
                        q: "What if a lead requests deletion of their data?",
                        a: "Under GDPR's right to erasure, you must delete the lead's data from your CRM, marketing automation platform, email lists, and any other systems where it has been stored or synced. LinkedIn deletes the submission from Campaign Manager after 90 days automatically, but you are responsible for deleting data in your own systems within 30 days of the request.",
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

              {/* ── Section 5: Matched Audiences and Retargeting ── */}
              <section id="matched-audiences" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Matched Audiences and Retargeting
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Privacy requirements for LinkedIn audience targeting
                      features.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    LinkedIn matched audiences allow you to target ads to
                    specific groups of people based on data you provide or
                    data collected through the Insight Tag. There are several
                    types of matched audiences, each with different privacy
                    implications that your policy must address.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Contact targeting (email list uploads)",
                        desc: "You upload a list of email addresses (from your CRM, email platform, or customer database), and LinkedIn hashes and matches them against its member database. This is a direct transfer of personal data to LinkedIn for advertising purposes. Your privacy policy must disclose that you share customer contact information with LinkedIn, explain the purpose (ad targeting), and identify the lawful basis (typically legitimate interests with an opt-out mechanism).",
                      },
                      {
                        title: "Company targeting (account-based marketing)",
                        desc: "You upload a list of company names, and LinkedIn matches them to Company Pages. While company names are not personal data on their own, the targeting results in ads being shown to identifiable individuals at those companies. Under GDPR, this can be considered profiling because you are targeting individuals based on their employment relationship. Your privacy policy should disclose account-based marketing practices.",
                      },
                      {
                        title: "Website retargeting (Insight Tag audiences)",
                        desc: "The Insight Tag enables you to create audiences of people who visited specific pages on your website and then show them targeted ads on LinkedIn. This combines first-party website data with LinkedIn's member data. Cookie consent is required before the Insight Tag fires, and your privacy policy must explain that website visitors may see retargeted ads on LinkedIn.",
                      },
                      {
                        title: "Engagement retargeting",
                        desc: "LinkedIn allows you to retarget people who have interacted with your Company Page, Sponsored Content, Lead Gen Forms, or Events. While this uses LinkedIn's first-party data, you are the party determining the targeting criteria and ad content. Your privacy policy should mention that you use engagement data for retargeting purposes on LinkedIn.",
                      },
                      {
                        title: "Lookalike audiences",
                        desc: "LinkedIn can create lookalike audiences based on your matched audience segments. This means LinkedIn analyzes the characteristics of people on your contact list or website visitors to find similar members. Your privacy policy should disclose that customer data may be used to identify and target similar audiences on LinkedIn.",
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
                    For a broader look at social media advertising privacy,
                    see the{" "}
                    <Link
                      href="/privacy-policy-for-facebook-page"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Facebook Page privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and the{" "}
                    <Link
                      href="/privacy-policy-for-twitter"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Twitter privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , which cover similar audience targeting and retargeting
                    requirements on other platforms.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 6: LinkedIn API Requirements ── */}
              <section id="api-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      LinkedIn API Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Privacy obligations for apps and integrations using
                      LinkedIn&apos;s APIs.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    If you build applications, integrations, or tools that
                    access LinkedIn&apos;s APIs (including the Marketing API,
                    Compliance API, or Sign In with LinkedIn), LinkedIn
                    imposes strict privacy and data handling requirements
                    through its API Terms of Use and Developer Agreement.
                  </p>

                  {[
                    {
                      title: "Privacy policy requirement for all API applications",
                      desc: "LinkedIn requires every application that accesses its APIs to have a publicly accessible privacy policy. The privacy policy URL must be provided during the app registration process. LinkedIn reviews this policy as part of the API access approval process and can revoke access if the policy is missing, inaccessible, or non-compliant.",
                    },
                    {
                      title: "Data usage restrictions",
                      desc: "LinkedIn's API Terms restrict how you can use member data obtained through the API. You cannot use API data for surveillance, unauthorized profiling, or selling member data to third parties. Your privacy policy must accurately reflect how you use LinkedIn data, and any use beyond what is disclosed may result in API access revocation.",
                    },
                    {
                      title: "Sign In with LinkedIn (OpenID Connect)",
                      desc: "If your application uses LinkedIn for authentication, you receive the member's name, email address, profile picture, and potentially additional profile fields depending on your approved scopes. Your privacy policy must disclose that you use LinkedIn for authentication, what profile data you access, and how you store and use this data in your application.",
                    },
                    {
                      title: "Data retention and deletion obligations",
                      desc: "LinkedIn's API Terms require you to delete member data when a member revokes access to your application, when your API access is terminated, or when LinkedIn requests deletion. Your privacy policy must include a data retention section that addresses these scenarios and explains how users can request data deletion.",
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
                    If you are building a SaaS product that integrates with
                    LinkedIn, see the{" "}
                    <Link
                      href="/privacy-policy-for-saas"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      SaaS privacy policy guide
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    for additional requirements around user data, third-party
                    integrations, and data processing agreements.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 7: B2B Marketing Compliance ── */}
              <section id="b2b-compliance" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      B2B Marketing Compliance
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Why B2B does not mean you can skip privacy requirements.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4 text-base leading-7 text-slate-700">
                  <p>
                    A common misconception in LinkedIn marketing is that B2B
                    data handling is somehow exempt from privacy regulations.
                    The reasoning is that you are targeting businesses, not
                    individuals. This is incorrect. Under GDPR, any data
                    that can identify a natural person is personal data,
                    regardless of whether the context is B2B or B2C.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Business email addresses are personal data",
                        desc: "An email address like john.smith@acmecorp.com identifies a specific individual and is therefore personal data under GDPR. When you collect business email addresses through LinkedIn Lead Gen Forms, import them into your CRM, or use them for matched audience targeting, you are processing personal data. The B2B context does not change this classification.",
                      },
                      {
                        title: "Job titles and professional profiles are personal data",
                        desc: "A LinkedIn profile containing a person's name, photo, job title, employer, work history, and education is a rich set of personal data. When Sales Navigator provides you with this information for prospecting, you become a data controller for that data. Your privacy policy must explain how you handle professional profile data.",
                      },
                      {
                        title: "Legitimate interests as a lawful basis for B2B marketing",
                        desc: "GDPR allows 'legitimate interests' as a lawful basis for processing, which is commonly used for B2B marketing. However, this is not a blanket exemption. You must conduct a legitimate interests assessment (LIA), document the balancing test between your interests and the individual's rights, and provide an easy opt-out mechanism. Your privacy policy should reference legitimate interests where applicable and explain how individuals can object.",
                      },
                      {
                        title: "Account-based marketing (ABM) and profiling concerns",
                        desc: "ABM strategies that combine LinkedIn data with intent data from third-party providers, firmographic databases, and website analytics to target specific individuals at specific companies can constitute profiling under GDPR Article 22. If your ABM approach builds detailed profiles of decision-makers to personalize outreach, your privacy policy must disclose this profiling activity and explain how individuals can opt out.",
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
                          In 2024, the French data protection authority
                          (CNIL) fined a B2B marketing company for scraping
                          LinkedIn profiles and using the data for sales
                          prospecting without proper disclosure or consent.
                          The ruling confirmed that publicly visible LinkedIn
                          profile data is still personal data under GDPR, and
                          that collecting it for commercial purposes requires
                          a lawful basis, proper disclosure in a privacy
                          policy, and a mechanism for individuals to object.
                          Being &quot;B2B&quot; provided no protection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 8: Common LinkedIn Privacy Mistakes ── */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Scale className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common LinkedIn Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These assumptions are widespread among LinkedIn
                      marketers. All of them are wrong.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {/* Mistake 1 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;LinkedIn&apos;s privacy policy covers my Company Page&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      LinkedIn&apos;s privacy policy covers data that
                      LinkedIn collects through its platform, such as
                      profile views, connection activity, and content
                      engagement within the app. It does not cover data you
                      collect through Lead Gen Forms, your external website,
                      CRM systems, email marketing platforms, or Sales
                      Navigator exports. When you collect a lead&apos;s email
                      address through a Lead Gen Form and add it to your
                      HubSpot nurture sequence, LinkedIn&apos;s privacy
                      policy says nothing about how your HubSpot list
                      handles that email. You need your own policy for that.
                    </p>
                  </div>

                  {/* Mistake 2 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;B2B data is not personal data&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Under GDPR, any data that identifies or can identify a
                      natural person is personal data. A business email
                      address (john.smith@acmecorp.com), a LinkedIn profile
                      with a name and photo, a job title at a specific
                      company, and a direct phone number are all personal
                      data. The fact that you are marketing to businesses
                      does not change the classification of the data. B2B
                      marketers have the same obligations as B2C marketers
                      when it comes to handling personal data.
                    </p>
                  </div>

                  {/* Mistake 3 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;The Insight Tag is just analytics&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      The Insight Tag does far more than count page views. It
                      sets cookies, collects IP addresses, tracks conversion
                      events, enables website retargeting, and sends visitor
                      data to LinkedIn for demographic profiling and ad
                      optimization. Under GDPR, this is tracking that
                      requires cookie consent. Under CCPA, it may constitute
                      a &quot;sale&quot; of personal information if LinkedIn
                      uses the data for its own advertising optimization.
                      Treating it as simple analytics understates its privacy
                      impact significantly.
                    </p>
                  </div>

                  {/* Mistake 4 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Lead Gen Form submissions equal consent for everything&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      When someone submits a Lead Gen Form to download your
                      whitepaper, they are consenting to receive the
                      whitepaper. They are not consenting to be added to a
                      weekly newsletter, have their data shared with your
                      partner companies, or be targeted with retargeting ads
                      for six months. Under GDPR, consent must be specific,
                      informed, and freely given. Each distinct purpose
                      requires its own disclosure and, where consent is the
                      lawful basis, its own consent mechanism.
                    </p>
                  </div>

                  {/* Mistake 5 */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <Ban className="w-4 h-4 text-red-500" />
                      &quot;Sales Navigator data is public, so no policy needed&quot;
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      While LinkedIn profiles are visible to other LinkedIn
                      members, extracting profile data through Sales
                      Navigator and storing it in your CRM for sales
                      purposes constitutes data processing under GDPR. The
                      data is &quot;publicly accessible&quot; within the
                      LinkedIn platform, but that does not grant you
                      unlimited rights to collect, store, and use it for
                      commercial purposes. Your privacy policy must disclose
                      that you collect professional data from LinkedIn for
                      sales outreach and explain the individual&apos;s right
                      to object.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 9: How to Create a Privacy Policy for Your LinkedIn Business ── */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your LinkedIn Business
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Six steps from audit to publication.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Creating a privacy policy for your LinkedIn business
                    presence is straightforward once you map out your data
                    collection points. Follow these steps:
                  </p>

                  {[
                    {
                      step: "1",
                      title: "Audit your LinkedIn data collection points",
                      desc: "List every LinkedIn feature and tool you use: Company Page, LinkedIn Ads (Campaign Manager), Insight Tag, Lead Gen Forms, matched audiences, Sales Navigator, LinkedIn Learning (enterprise), Events, and any LinkedIn API integrations. For each, document what personal data it collects or processes.",
                    },
                    {
                      step: "2",
                      title: "Identify which privacy laws apply to your audience",
                      desc: "Check your LinkedIn Page analytics for audience geography. If any followers or ad targets are in the EU or UK, GDPR applies. Members in California trigger CCPA and CalOPPA. B2B companies targeting global audiences will typically need to comply with GDPR, CCPA, and CalOPPA at minimum.",
                    },
                    {
                      step: "3",
                      title: "Map data types to purposes and lawful bases",
                      desc: "For each type of personal data, document the purpose and GDPR lawful basis. Lead Gen Form data for sales outreach = legitimate interests or consent. Insight Tag tracking for ad optimization = consent (cookie consent required). Matched audience uploads = legitimate interests with disclosure. Email marketing follow-ups = consent. Map every data flow.",
                    },
                    {
                      step: "4",
                      title: "Name every third-party service and processor",
                      desc: "GDPR requires naming specific services. Write 'LinkedIn Corporation (for advertising and lead generation)' not 'professional networking partners'. Write 'Salesforce (for CRM and lead management)' not 'customer management platform'. Name your email provider, CRM, analytics tools, and any Sales Navigator or API integrations.",
                    },
                    {
                      step: "5",
                      title: "Generate your privacy policy",
                      desc: "Use a structured privacy policy generator that asks about your specific LinkedIn business setup and produces a customized document. This covers LinkedIn advertising, Insight Tag, Lead Gen Forms, matched audiences, and B2B marketing in a single, coherent policy. Our generator handles this in under 60 seconds for $4.99.",
                    },
                    {
                      step: "6",
                      title: "Publish and link from every touchpoint",
                      desc: "Host your privacy policy on a dedicated URL. Link to it from your LinkedIn Company Page (About section), every Lead Gen Form, LinkedIn Ads account settings, external website footer, email newsletter footer, and any landing pages you promote through LinkedIn. Set a reminder to review and update every 6 months.",
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
                      href="/privacy-policy-for-instagram"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Instagram privacy policy requirements
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    if you also market on Instagram. And see why{" "}
                    <Link
                      href="/what-happens-without-a-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      operating without a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    puts your LinkedIn ad account at risk.
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
                      Generate Your LinkedIn Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your LinkedIn business
                      setup and get a customized, compliant privacy policy
                      covering LinkedIn Ads, Insight Tag, Lead Gen Forms,
                      matched audiences, and B2B marketing in under 60
                      seconds.
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
                      Do LinkedIn Company Pages need a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. If you run LinkedIn Ads, use Lead Gen Forms,
                      install the Insight Tag, upload matched audiences, or
                      collect follower data through your Company Page, you
                      are collecting or facilitating the collection of
                      personal data. Privacy laws (
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
                      , CalOPPA) and LinkedIn&apos;s own advertising
                      agreements require you to have a privacy policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does LinkedIn require a privacy policy for advertising?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. LinkedIn&apos;s advertising policies require that
                      advertisers provide a privacy policy URL. For Lead Gen
                      Forms specifically, LinkedIn requires a privacy policy
                      link on the form itself because you are collecting
                      personal data (names, emails, job titles, company
                      names) directly from LinkedIn members. The form cannot
                      be published without this link.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What data does the LinkedIn Insight Tag collect?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      The Insight Tag collects page URLs, referrer URLs, IP
                      addresses (truncated), device and browser
                      characteristics, and timestamps. It enables conversion
                      tracking, website retargeting, and website demographics
                      reporting. Under GDPR, it requires cookie consent
                      because it sets tracking cookies and shares data with
                      LinkedIn for advertising purposes.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do I need consent for LinkedIn Lead Gen Forms?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Under GDPR, you need a lawful basis for processing lead
                      data. LinkedIn pre-fills form fields with member
                      profile data (name, email, job title, company), and
                      the user submits it to you. Your privacy policy must
                      explain what you do with this data. For marketing
                      follow-ups beyond the initial request, consent is the
                      most appropriate lawful basis. LinkedIn requires a
                      privacy policy link on every Lead Gen Form.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does LinkedIn&apos;s privacy policy cover my Company
                      Page?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      No. LinkedIn&apos;s privacy policy covers data that
                      LinkedIn collects through its platform. It does not
                      cover data you collect through Lead Gen Forms, your
                      external website, email lists, CRM systems, or Sales
                      Navigator exports. You need your own privacy policy to
                      disclose your specific data handling practices outside
                      the LinkedIn platform.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What are LinkedIn matched audiences and do they need
                      disclosure?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Matched audiences allow you to target LinkedIn ads to
                      people on your contact lists, website visitors (via
                      Insight Tag), or users who have engaged with your
                      content. Uploading customer email lists or company
                      names to LinkedIn for ad targeting creates a data
                      sharing relationship that must be disclosed in your
                      privacy policy. Under GDPR, this may constitute a
                      joint controller arrangement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Where should I link my LinkedIn privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Link to it from your LinkedIn Company Page (About
                      section), every Lead Gen Form, your LinkedIn Ads
                      account settings, your external website footer, email
                      newsletter footers, and any landing pages you promote
                      through LinkedIn Ads. The privacy policy should be
                      hosted on a dedicated URL that you control, not as a
                      LinkedIn article or post.
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
                      href: "/privacy-policy-for-facebook-page",
                      icon: Globe,
                      title: "Facebook Page Privacy Policy",
                      desc: "Meta advertising compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-twitter",
                      icon: Globe,
                      title: "Twitter Privacy Policy",
                      desc: "Twitter ads and analytics compliance",
                    },
                    {
                      href: "/privacy-policy-for-instagram",
                      icon: Globe,
                      title: "Instagram Privacy Policy",
                      desc: "Instagram business account guide",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: FileText,
                      title: "Small Business Privacy Policy",
                      desc: "Compliance guide for small businesses",
                    },
                    {
                      href: "/privacy-policy-for-saas",
                      icon: Globe,
                      title: "SaaS Privacy Policy",
                      desc: "Software and platform compliance guide",
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
                      desc: "Customized policy in under 60 seconds",
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
