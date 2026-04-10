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
  Clock,
  Ban,
  Info,
  Users,
  Globe,
  Target,
  Eye,
  BarChart,
  Lock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Facebook Ads: Meta Requirements [2026]",
  description:
    "Meta requires a privacy policy for all advertisers using Pixel, Custom Audiences, or retargeting. See exactly what to include and generate yours free.",
  keywords:
    "do i need a privacy policy for facebook ads, facebook ads privacy policy, meta ads privacy policy, facebook pixel privacy policy, custom audiences privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-facebook-ads",
  },
  openGraph: {
    title:
      "Privacy Policy for Facebook Ads: Meta Requirements [2026]",
    description:
      "Meta requires a privacy policy for all advertisers using Pixel, Custom Audiences, or retargeting. See exactly what to include and generate yours free.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-facebook-ads",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Facebook Ads: Meta Requirements [2026]",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Facebook Ads: Meta Requirements [2026]",
    description:
      "Meta requires a privacy policy for all advertisers using Pixel, Custom Audiences, or retargeting. See exactly what to include and generate yours free.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "meta-requirement", title: "Meta's Requirement" },
  { id: "facebook-pixel", title: "Facebook Pixel" },
  { id: "custom-audiences", title: "Custom Audiences" },
  { id: "lead-ads", title: "Lead Ads" },
  { id: "retargeting", title: "Retargeting Campaigns" },
  { id: "what-to-include", title: "What to Include" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a privacy policy to run Facebook ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Meta's advertising policies require all advertisers to have a privacy policy on any website or app linked in their ads. This is a hard requirement - without a privacy policy, your ad account can be restricted or banned. This applies to Facebook Ads, Instagram Ads, and all Meta advertising products.",
      },
    },
    {
      "@type": "Question",
      name: "What must a privacy policy for Facebook ads include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy must disclose: that you use the Facebook Pixel to collect data, what data the Pixel collects (page views, purchases, events), how that data is used (advertising, retargeting, Custom Audiences), your use of Meta's advertising tools, user opt-out options, and compliance with applicable privacy laws like GDPR and CCPA.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Facebook Pixel require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When you install the Facebook Pixel on your website, you must disclose this in your privacy policy. The Pixel tracks user behavior (page views, add-to-cart, purchases), and this data collection must be disclosed under GDPR, CCPA, and Meta's own advertising policies.",
      },
    },
    {
      "@type": "Question",
      name: "Can Facebook disable my ad account without a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Meta actively reviews landing pages and websites linked in ads. Missing a privacy policy, or having an inadequate one, can result in ad disapprovals, account restrictions, or permanent bans. This is especially common for advertisers targeting EU users where GDPR compliance is scrutinized.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy for Facebook Lead Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes - and Meta explicitly requires it for Lead Ads. When you create a Lead Ad campaign, Meta requires you to link to your privacy policy directly in the lead form. Without this link, you cannot publish your Lead Ad. The policy must accurately describe how you will use the submitted contact information.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Facebook Ads",
  description:
    "Step-by-step guide to creating a privacy policy that meets Meta's advertising requirements",
  step: [
    {
      "@type": "HowToStep",
      name: "Disclose Facebook Pixel usage",
      text: "Add a section to your privacy policy that discloses you use the Facebook Pixel, what data it collects, and how that data is used for advertising and analytics.",
    },
    {
      "@type": "HowToStep",
      name: "Document Custom Audiences usage",
      text: "If you upload customer lists or use website Custom Audiences, disclose this in your privacy policy including what data is hashed and shared with Meta.",
    },
    {
      "@type": "HowToStep",
      name: "Add retargeting disclosure",
      text: "Disclose that you run retargeting campaigns based on website visitor behavior, and provide information about how users can opt out.",
    },
    {
      "@type": "HowToStep",
      name: "Include opt-out instructions",
      text: "Link to Meta's ad settings page and explain how users can manage their ad preferences and opt out of interest-based advertising.",
    },
    {
      "@type": "HowToStep",
      name: "Link policy in all ads",
      text: "Ensure every Facebook ad links to a page that has your privacy policy accessible. Lead Ads require a direct privacy policy link in the form.",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Do I Need a Privacy Policy for Facebook Ads? (2026)",
  description:
    "Complete guide to privacy policy requirements for Facebook and Instagram advertisers, covering Pixel tracking, Custom Audiences, Lead Ads, and retargeting.",
  datePublished: "2026-01-01",
  dateModified: "2026-04-11",
  author: {
    "@type": "Organization",
    name: "ultrafastutilities",
    url: "https://ultrafastutilities.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ultrafastutilities",
    url: "https://ultrafastutilities.com",
  },
};

const breadcrumbSchema = {
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
      name: "Do I Need a Privacy Policy for Facebook Ads?",
      item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-facebook-ads",
    },
  ],
};

export default function PrivacyPolicyFacebookAds() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">Privacy Policy for Facebook Ads</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Target className="w-3.5 h-3.5" />
                Meta Advertising Requirements
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Facebook Ads?
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes - Meta requires a privacy policy for all advertisers. Running
                ads without one risks account suspension. Here is exactly what you
                need to include.
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />
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
                  <span>11 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>
              {/* Featured Snippet Box */}
              <div id="quick-answer" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Quick Answer: Do You Need a Privacy Policy for Facebook Ads?
                </h2>
                <p className="text-blue-800">
                  <strong>Yes, absolutely.</strong> Meta's advertising policies require
                  all advertisers to have a publicly accessible privacy policy on any
                  website linked in their ads. This is a hard requirement - not a
                  suggestion. Running ads with the Facebook Pixel, Custom Audiences, Lead
                  Ads, or retargeting requires explicit privacy disclosures. Without a
                  proper privacy policy, your ads can be disapproved and your account
                  restricted or permanently banned.
                </p>
              </div>

              {/* Meta's Requirement */}
              <section id="meta-requirement">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Meta's Official Privacy Policy Requirement for Advertisers
                </h2>
                <p className="text-slate-700 mb-4">
                  Meta's Advertising Standards require that any website or app you
                  advertise must have a clearly accessible privacy policy that discloses
                  how you collect, use, and share user data. This is not optional.
                </p>
                <p className="text-slate-700 mb-4">
                  Meta reviews landing pages before approving ads. Reviewers - and
                  automated systems - check for:
                </p>
                <ul className="space-y-2 text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    A working privacy policy link on your website
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Disclosure of pixel and tracking technologies
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Information about how user data is used for advertising
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    An opt-out mechanism for data collection
                  </li>
                </ul>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        Meta can restrict your entire ad account - not just individual
                        ads - if your landing page lacks a proper privacy policy. Account
                        restrictions can be difficult to appeal and may permanently impact
                        your ability to advertise on Facebook and Instagram.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Facebook Pixel */}
              <section id="facebook-pixel">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Facebook Pixel Privacy Requirements
                </h2>
                <p className="text-slate-700 mb-4">
                  The Facebook Pixel is a JavaScript tracking code that collects detailed
                  data about visitors to your website. Its use triggers specific privacy
                  disclosure requirements under multiple laws and Meta's own policies.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Pixel Data Collected</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Why It's Sensitive</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Disclosure Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Page views</td>
                        <td className="p-3 text-slate-600">Tracks browsing behavior</td>
                        <td className="p-3 text-slate-600">Yes - GDPR, CCPA, Meta policy</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Purchase events</td>
                        <td className="p-3 text-slate-600">Revenue and product data</td>
                        <td className="p-3 text-slate-600">Yes - disclose event tracking</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Add-to-cart</td>
                        <td className="p-3 text-slate-600">Shopping intent signals</td>
                        <td className="p-3 text-slate-600">Yes - retargeting disclosure</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Lead form submissions</td>
                        <td className="p-3 text-slate-600">Contact information events</td>
                        <td className="p-3 text-slate-600">Yes - form data handling</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">IP address</td>
                        <td className="p-3 text-slate-600">Location and identity data</td>
                        <td className="p-3 text-slate-600">Yes - PII under GDPR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 mt-6">
                  Under GDPR, the Facebook Pixel is considered a third-party cookie that
                  requires explicit user consent before firing. Your privacy policy must
                  disclose the Pixel, and your cookie banner must obtain consent for
                  it before it activates for EU users.
                </p>
              </section>

              {/* Custom Audiences */}
              <section id="custom-audiences">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Custom Audiences: Privacy Requirements
                </h2>
                <p className="text-slate-700 mb-4">
                  Facebook Custom Audiences allow you to target ads to your existing
                  customers by uploading a list of email addresses, phone numbers, or
                  other identifiers. This practice has strict privacy requirements.
                </p>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-600" />
                      Customer List Custom Audiences
                    </h3>
                    <p className="text-slate-700 text-sm">
                      When you upload customer emails to Meta, those addresses are hashed
                      before matching. But you still need to disclose in your privacy
                      policy that you may share hashed customer data with Meta for
                      advertising purposes, and that customers have the right to opt out.
                    </p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-slate-600" />
                      Website Custom Audiences
                    </h3>
                    <p className="text-slate-700 text-sm">
                      Website Custom Audiences are built from Pixel data - visitors who
                      viewed specific pages, added products to cart, or abandoned checkout.
                      This retargeting must be disclosed in your privacy policy as
                      interest-based advertising.
                    </p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <BarChart className="w-4 h-4 text-slate-600" />
                      Lookalike Audiences
                    </h3>
                    <p className="text-slate-700 text-sm">
                      When Meta creates Lookalike Audiences from your customer data, it
                      uses that data to find similar users. Your policy should note that
                      aggregated, anonymized customer data may be used to find new
                      potential customers through Meta's tools.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        Meta's Custom Audiences Terms of Service explicitly require you
                        to represent that you have obtained any necessary consents and
                        that uploading the list complies with all applicable laws. If your
                        privacy policy doesn't disclose this data sharing, you may be
                        violating both Meta's terms and applicable law.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Lead Ads */}
              <section id="lead-ads">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Facebook Lead Ads: Privacy Policy is Mandatory
                </h2>
                <p className="text-slate-700 mb-4">
                  Facebook Lead Ads let users submit contact information directly within
                  Facebook without leaving the platform. Meta requires a privacy policy
                  link directly in the lead form - you cannot publish a Lead Ad without it.
                </p>
                <p className="text-slate-700 mb-6">
                  When someone submits a Lead Ad form, your privacy policy must cover:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    How you will use their name and email address
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    Whether you will add them to an email marketing list
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    Who else might receive their information (CRM, sales team)
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    How long you will retain their data
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    How they can request deletion or opt out of communications
                  </li>
                </ul>
              </section>

              {/* Retargeting */}
              <section id="retargeting">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Retargeting Campaigns and Privacy Disclosures
                </h2>
                <p className="text-slate-700 mb-4">
                  Retargeting - showing ads to people who have already visited your
                  website - is one of the most effective Facebook advertising strategies.
                  It is also one of the most legally sensitive from a privacy standpoint.
                </p>
                <p className="text-slate-700 mb-4">
                  Your privacy policy must disclose:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <h3 className="font-semibold text-slate-800 text-sm mb-2">What to Disclose</h3>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        You use retargeting advertising
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        Which platform (Meta/Facebook)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        What behavior triggers retargeting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        How long retargeting audiences last
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h3 className="font-semibold text-blue-800 text-sm mb-2">Opt-Out Options</h3>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        Link to Meta Ad Preferences
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        Link to DAA opt-out tool
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        Cookie banner with consent option
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        CCPA "Do Not Sell" for California users
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* What to Include */}
              <section id="what-to-include">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What to Include in Your Facebook Ads Privacy Policy
                </h2>
                <p className="text-slate-700 mb-6">
                  A privacy policy for Facebook advertisers needs to cover both your
                  general data practices and specific disclosures for Meta's ad tools.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Section</th>
                        <th className="text-left p-3 font-semibold text-slate-700">What to Cover</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Why It Matters</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Facebook Pixel</td>
                        <td className="p-3 text-slate-600">What it collects, how it's used</td>
                        <td className="p-3 text-slate-600">Required by Meta and GDPR/CCPA</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Custom Audiences</td>
                        <td className="p-3 text-slate-600">Data sharing with Meta, hashing</td>
                        <td className="p-3 text-slate-600">Meta Custom Audiences ToS</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Retargeting</td>
                        <td className="p-3 text-slate-600">Interest-based advertising disclosure</td>
                        <td className="p-3 text-slate-600">GDPR, CCPA, FTC guidelines</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Lead Data</td>
                        <td className="p-3 text-slate-600">How lead form data is used</td>
                        <td className="p-3 text-slate-600">Lead Ad policy requirement</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Opt-Out Rights</td>
                        <td className="p-3 text-slate-600">Links to ad preference tools</td>
                        <td className="p-3 text-slate-600">GDPR right to object, CCPA rights</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5 Common Privacy Policy Mistakes Facebook Advertisers Make
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Not mentioning the Facebook Pixel at all",
                      desc: "Many advertisers install the Pixel but never add it to their privacy policy. GDPR, CCPA, and Meta's own policies require explicit disclosure of third-party tracking technologies.",
                    },
                    {
                      title: "Missing the opt-out link for ad tracking",
                      desc: "Your policy must tell users how to opt out of interest-based advertising. Without a link to Meta's ad settings or the DAA opt-out tool, your policy is incomplete.",
                    },
                    {
                      title: "Using a generic template without Meta-specific disclosures",
                      desc: "Generic privacy policy templates often lack the specific disclosures required for Facebook advertising - Pixel tracking, Custom Audiences, retargeting, and Lead Ad data handling.",
                    },
                    {
                      title: "Forgetting to update after installing new Meta tools",
                      desc: "Adding Meta Conversions API, Advantage+ Shopping, or new Pixel events without updating your privacy policy leaves you exposed - both legally and under Meta's policies.",
                    },
                    {
                      title: "No cookie consent for EU audiences",
                      desc: "Under GDPR, the Facebook Pixel cannot fire until a user consents. Advertising to EU users without a cookie consent banner and Pixel integration violates GDPR and can trigger significant fines.",
                    },
                  ].map((mistake, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl"
                    >
                      <Ban className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-800">{mistake.title}</p>
                        <p className="text-red-700 text-sm mt-1">{mistake.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* How to Create */}
              <section id="how-to-create">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for Facebook Ads
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "List all Meta tools you use",
                      desc: "Facebook Pixel, Meta Conversions API, Custom Audiences, Lead Ads, Instagram Shopping - document every Meta product that touches your data.",
                    },
                    {
                      step: "2",
                      title: "Add Pixel disclosure to your privacy policy",
                      desc: "Create a dedicated section explaining that you use the Facebook Pixel, what data it collects (page views, events, IP), and how that data is used for advertising optimization.",
                    },
                    {
                      step: "3",
                      title: "Disclose Custom Audience data sharing",
                      desc: "If you upload customer lists, disclose that you may share hashed customer data with Meta for ad matching, and explain the opt-out process.",
                    },
                    {
                      step: "4",
                      title: "Add retargeting and interest-based advertising section",
                      desc: "Explain that you use retargeting, link to Meta's ad preference center, and include the DAA opt-out tool for US users.",
                    },
                    {
                      step: "5",
                      title: "Link policy everywhere",
                      desc: "Put the privacy policy link in your website footer, on landing pages linked in ads, and directly in Lead Ad forms. Make it easy to find.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 border border-slate-200 rounded-xl">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{item.title}</p>
                        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Do I need a privacy policy to run Facebook ads?",
                      a: "Yes. Meta's advertising policies require all advertisers to have a publicly accessible privacy policy on any website linked in their ads. Running ads without one risks ad disapprovals and account restriction.",
                    },
                    {
                      q: "What must a privacy policy for Facebook ads include?",
                      a: "You must disclose: Facebook Pixel usage and what it collects, Custom Audience data sharing, retargeting practices, Lead Ad data handling, user opt-out options, and compliance with GDPR and CCPA where applicable.",
                    },
                    {
                      q: "Does the Facebook Pixel require a privacy policy?",
                      a: "Yes. Installing the Facebook Pixel requires disclosure in your privacy policy under GDPR, CCPA, and Meta's own terms. Under GDPR, you also need user consent before the Pixel can fire.",
                    },
                    {
                      q: "Can Facebook disable my ad account without a privacy policy?",
                      a: "Yes. Meta can restrict or permanently disable ad accounts whose landing pages lack adequate privacy policies. This is especially enforced for advertisers targeting EU users.",
                    },
                    {
                      q: "Do I need a privacy policy for Facebook Lead Ads?",
                      a: "Yes - and it's mandatory. Meta requires you to include a direct link to your privacy policy in every Lead Ad form before you can publish it. The policy must accurately describe how you use the collected contact information.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-800 flex items-start gap-2">
                        <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        {item.q}
                      </h3>
                      <p className="text-slate-600 mt-2 ml-7 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Generate CTA */}
              <section
                id="generate"
                className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Generate Your Facebook Ads Privacy Policy
                </h2>
                <p className="text-slate-300 mb-6">
                  Create a complete privacy policy that meets Meta's advertising
                  requirements in under 2 minutes. Covers Facebook Pixel, Custom
                  Audiences, Lead Ads, retargeting, GDPR, and CCPA.
                </p>
                <ul className="space-y-2 text-slate-300 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Facebook Pixel and tracking disclosures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Custom Audiences and retargeting sections
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    GDPR and CCPA compliant
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Lead Ad-ready with privacy link support
                  </li>
                </ul>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 text-lg">
                    Generate Free Privacy Policy
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </section>

              {/* Related Resources */}
              <section id="resources">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Do I Need a Privacy Policy for Google AdSense?",
                      desc: "Google advertising privacy requirements",
                      href: "/do-i-need-a-privacy-policy-for-google-adsense",
                    },
                    {
                      title: "Privacy Policy for Google Analytics",
                      desc: "GA4 tracking disclosure requirements",
                      href: "/privacy-policy-for-google-analytics",
                    },
                    {
                      title: "GDPR Privacy Policy Template",
                      desc: "EU-compliant privacy policy for advertisers",
                      href: "/gdpr-privacy-policy-template",
                    },
                    {
                      title: "CCPA Privacy Policy Example",
                      desc: "California consumer privacy compliance",
                      href: "/ccpa-privacy-policy-example",
                    },
                    {
                      title: "Privacy Policy for Facebook Page",
                      desc: "Facebook business page privacy guide",
                      href: "/privacy-policy-for-facebook-page",
                    },
                    {
                      title: "Privacy Policy for Instagram",
                      desc: "Instagram advertising and data practices",
                      href: "/privacy-policy-for-instagram",
                    },
                    {
                      title: "Privacy Policy for eCommerce",
                      desc: "Online store privacy requirements",
                      href: "/privacy-policy-for-ecommerce",
                    },
                    {
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "When and why privacy policies are mandatory",
                      href: "/is-a-privacy-policy-legally-required",
                    },
                  ].map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                    >
                      <ArrowUpRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <div>
                        <p className="font-medium text-slate-800 group-hover:text-blue-700">
                          {resource.title}
                        </p>
                        <p className="text-slate-500 text-sm">{resource.desc}</p>
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
