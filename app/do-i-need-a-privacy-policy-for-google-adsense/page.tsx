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
  XCircle,
  Scale,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do I Need a Privacy Policy for Google AdSense? Yes, Here's Why (2026) | ultrafastutilities",
  description:
    "Google AdSense requires a privacy policy in its Terms of Service (Section 10). Without one, your application will be rejected. Learn exactly what Google requires and how to create one.",
  keywords:
    "do i need a privacy policy for google adsense, google adsense privacy policy, adsense privacy policy requirement, adsense application rejected privacy policy, google adsense privacy policy template",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-google-adsense",
  },
  openGraph: {
    title:
      "Do I Need a Privacy Policy for Google AdSense? Yes, Here's Why (2026) | ultrafastutilities",
    description:
      "Google AdSense requires a privacy policy in its Terms of Service (Section 10). Without one, your application will be rejected. Learn exactly what Google requires and how to create one.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-google-adsense",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Do I Need a Privacy Policy for Google AdSense | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do I Need a Privacy Policy for Google AdSense? Yes, Here's Why (2026)",
    description:
      "Google AdSense requires a privacy policy in its Terms of Service (Section 10). Without one, your application will be rejected.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Google AdSense require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google AdSense Terms of Service (Section 10) explicitly require publishers to have a privacy policy on their website. Your privacy policy must disclose the use of cookies for ad serving, the use of the DoubleClick cookie, third-party ad vendors, and provide a link to Google Ad Settings so users can opt out of personalized advertising. Without a compliant privacy policy, your AdSense application will be rejected.",
      },
    },
    {
      "@type": "Question",
      name: "Will my AdSense application be rejected without a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google reviews your website during the AdSense application process, and one of the checks is whether you have a privacy policy. If your site lacks a privacy policy, or if the policy does not meet Google's requirements for ad-related disclosures, your application will be rejected. Google will send you a notification citing 'site does not comply with Google AdSense Program policies' as the reason for rejection.",
      },
    },
    {
      "@type": "Question",
      name: "What must an AdSense privacy policy include about cookies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy must disclose that third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. You must specifically mention the DoubleClick cookie used by Google for ad serving. You must also inform users that they can opt out of personalized advertising by visiting Google Ad Settings at adssettings.google.com, and you should reference the Network Advertising Initiative opt-out page.",
      },
    },
    {
      "@type": "Question",
      name: "Can I add a privacy policy after my AdSense application is approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Google checks for a privacy policy during the application review. If you do not have one when you apply, your application will be rejected. Even if you somehow got approved without one, operating without a privacy policy violates the AdSense Terms of Service and can result in your account being suspended or terminated at any time. The privacy policy must be in place before you apply.",
      },
    },
    {
      "@type": "Question",
      name: "Is a generic privacy policy enough for Google AdSense?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A generic privacy policy that does not mention Google, cookies, ad serving, or user opt-out options will not satisfy AdSense requirements. Google specifically requires that your policy disclose the use of cookies for advertising purposes, name Google as a third-party vendor, mention the DoubleClick cookie, and provide opt-out links. A generic template without these specific disclosures will result in application rejection.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need GDPR compliance for AdSense if I have European visitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If any of your visitors are located in the European Union or United Kingdom, you must comply with GDPR in addition to AdSense requirements. This means implementing a cookie consent mechanism that obtains explicit consent before serving personalized ads, providing a clear way for users to withdraw consent, and disclosing Google as a data processor in your privacy policy. Google also requires EU consent compliance through its Consent Management Platform integration.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a privacy policy that meets AdSense requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest approach is to use a privacy policy generator that includes AdSense-specific disclosures. You need to indicate that your site uses Google AdSense, uses cookies for advertising, and employs third-party ad vendors. The generator will produce a policy that includes the required cookie disclosure, DoubleClick cookie mention, Google ad serving disclosure, opt-out links, and user rights sections required by GDPR and CCPA. This typically takes under five minutes.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create an AdSense-Compliant Privacy Policy",
  description:
    "Follow these six steps to create a privacy policy that meets Google AdSense requirements and complies with GDPR and CCPA.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your website's data collection practices",
      text: "Before writing your privacy policy, document every type of data your website collects. This includes data from contact forms, email subscriptions, comments, analytics tools like Google Analytics, and any e-commerce functionality. AdSense itself will add cookie-based data collection to your site, so include that in your audit.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Add required AdSense cookie disclosures",
      text: "Your privacy policy must explicitly state that third-party vendors, including Google, use cookies to serve ads based on users' prior visits. You must mention the DoubleClick cookie by name and explain that it is used by Google to serve ads on your site. Disclose that advertising cookies enable Google and its partners to serve ads based on browsing behavior.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Include opt-out information and links",
      text: "Provide users with clear instructions on how to opt out of personalized advertising. Link to Google Ad Settings (adssettings.google.com) where users can control ad personalization. Also link to the Network Advertising Initiative opt-out page (optout.networkadvertising.org) for opting out of third-party vendor cookies.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add GDPR and CCPA compliance sections",
      text: "If you have visitors from the EU, UK, or California, add the required legal disclosures for those jurisdictions. GDPR requires consent mechanisms for cookies, disclosure of data processing purposes, and user rights information. CCPA requires disclosure of data categories collected and the right to opt out. These sections are required by law regardless of AdSense.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Disclose all third-party services beyond AdSense",
      text: "List every third-party tool that processes user data on your site. This includes Google Analytics, social media plugins, email marketing platforms like Mailchimp, comment systems like Disqus, and any affiliate networks. Each service should be named, and its data processing purpose should be described.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Publish and link your privacy policy prominently",
      text: "Place a link to your privacy policy in your website footer on every page. Google specifically checks for this during AdSense application review. Also link it from your cookie consent banner if you serve EU visitors. Make sure the policy is hosted on the same domain as your AdSense site, not on a separate domain or third-party platform.",
    },
  ],
};

const tocSections = [
  { id: "adsense-requirement", title: "Does AdSense Require a Privacy Policy?" },
  { id: "what-google-requires", title: "What Google Specifically Requires" },
  { id: "rejection-reasons", title: "AdSense Application Rejection Reasons" },
  { id: "policy-checklist", title: "What Your Policy Must Include" },
  { id: "beyond-google", title: "Beyond Google: Other Laws That Apply" },
  { id: "common-mistakes", title: "Common AdSense Privacy Mistakes" },
  { id: "how-to-create", title: "How to Create an AdSense-Compliant Policy" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function DoINeedAPrivacyPolicyForGoogleAdSensePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do I Need a Privacy Policy for Google AdSense? Yes, Here's Why (2026)",
            description:
              "Google AdSense requires a privacy policy in its Terms of Service (Section 10). Without one, your application will be rejected. Learn exactly what Google requires and how to create one.",
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
                name: "Do I Need a Privacy Policy for Google AdSense?",
                item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-google-adsense",
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
                Privacy Policy for Google AdSense
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-700 text-xs font-medium mb-6">
                <AlertTriangle className="w-3.5 h-3.5" />
                AdSense Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Google AdSense?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes. Google AdSense Terms of Service (Section 10) explicitly
                require every publisher to have a privacy policy. Without
                one, your application will be rejected. Even after approval,
                operating without a compliant policy can result in account
                suspension.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For bloggers, website owners, and publishers who want to
                monetize with AdSense while staying compliant with Google
                requirements, GDPR, and CCPA.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                CalOPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/do-i-need-a-privacy-policy-for-a-blog"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Blog Privacy Policy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/cookie-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Scale className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Cookie Policy Guide
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
                    Need an AdSense-ready policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Includes all Google-required disclosures
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
                  <strong>Yes, Google AdSense requires a privacy policy.</strong>{" "}
                  Section 10 of the AdSense Terms of Service mandates that every
                  publisher disclose the use of cookies for ad serving, identify
                  Google as a third-party vendor, mention the DoubleClick cookie,
                  and provide opt-out links. Without a compliant policy, your
                  application will be rejected during review.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Google AdSense is one of the most popular ways to monetize a
                website or blog. Millions of publishers rely on it for ad
                revenue. But before Google will approve your AdSense
                application, your site must meet several requirements. One of
                the most critical, and most commonly overlooked, is having a
                privacy policy that meets Google&apos;s specific standards.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                This is not optional. Google explicitly states in its Terms
                of Service that publishers must have a privacy policy. It is
                not a suggestion or a best practice. It is a contractual
                requirement. If your site does not have one, or if your
                policy does not include the specific disclosures Google
                requires, your application will be rejected.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly what Google AdSense requires in
                your privacy policy, the most common reasons applications get
                rejected for privacy issues, and how to create a fully
                compliant policy in minutes. We also cover the additional
                legal requirements from GDPR, CCPA, and CalOPPA that apply
                to most AdSense publishers.
              </p>

              {/* Section 1: Does AdSense Require a Privacy Policy? */}
              <section id="adsense-requirement" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Does Google AdSense Require a Privacy Policy?
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Yes. The requirement is spelled out in Section 10 of the
                  Google AdSense Terms of Service, titled &quot;Privacy.&quot;
                  This section states that publishers must comply with
                  applicable privacy laws and regulations and must post a
                  privacy policy that discloses specific information about
                  their data collection practices, particularly regarding
                  advertising cookies.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Google is not vague about this. The AdSense program
                  policies page explicitly lists the following as a
                  requirement: &quot;You must have and abide by an appropriate
                  privacy policy that clearly discloses that third parties
                  may be placing and reading cookies on your users&apos;
                  browsers, or using web beacons to collect information as a
                  result of ad serving on your website.&quot;
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  This means that even if you believe your website is too
                  small to worry about privacy regulations, Google itself
                  will not approve you without a compliant privacy policy.
                  The requirement applies equally to a personal blog with 100
                  monthly visitors and a major news site with millions of
                  page views.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Happens If You Apply Without One
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  When you submit an AdSense application, Google reviews your
                  website before approving your account. This review process
                  checks several factors, including content quality, site
                  navigation, and policy compliance. If Google&apos;s reviewers
                  do not find a privacy policy on your site, or if the policy
                  does not meet their requirements, your application will be
                  rejected with a message stating that your site does not
                  comply with AdSense Program policies.
                </p>
                <p className="text-slate-700 leading-7 mb-6">
                  After rejection, you can reapply once you have fixed the
                  issues. However, each review cycle takes time, often
                  several days to several weeks. Publishers who apply without
                  a privacy policy end up delaying their monetization
                  unnecessarily when the fix takes less than five minutes
                  with a policy generator.
                </p>

                {/* Inline mini-FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I add a privacy policy after getting approved?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No. Google checks for a privacy policy during the
                      application review. You will not be approved without
                      one. Even if you were somehow approved, operating
                      without a policy violates the Terms of Service and can
                      lead to account suspension.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does the privacy policy need to be on the same
                      domain?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Google expects your privacy policy to be hosted on
                      the same domain as the site you are applying with. A
                      privacy policy hosted on a different domain or a
                      third-party platform may not be recognized during
                      the review process.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: What Google Specifically Requires */}
              <section id="what-google-requires" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Google AdSense Specifically Requires in Your Privacy
                  Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Google does not just require that you have a privacy policy.
                  The policy must contain specific disclosures about
                  advertising technology, cookies, and user opt-out options.
                  Here is exactly what Google mandates.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  1. Cookie Disclosure for Ad Serving
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy must state that third-party vendors,
                  including Google, use cookies to serve ads based on a
                  user&apos;s prior visits to your website or other websites.
                  This is required because AdSense uses cookies to track
                  user behavior across the web in order to serve relevant
                  advertisements. Without this disclosure, your policy is
                  incomplete from Google&apos;s perspective.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  2. DoubleClick Cookie Disclosure
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Google requires that your policy specifically mention the
                  DoubleClick cookie. This is the primary cookie that Google
                  uses for ad serving through AdSense. The DoubleClick cookie
                  enables Google to serve ads to users based on their visits
                  to your site and other sites across the internet. Your
                  policy must explain what this cookie does and that it is
                  used for advertising purposes.
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
                        The DoubleClick cookie has been a core part of
                        Google&apos;s advertising infrastructure since Google
                        acquired DoubleClick in 2007 for $3.1 billion.
                        Despite changes to how Google handles third-party
                        cookies, the DoubleClick cookie remains a required
                        disclosure in AdSense privacy policies. Google&apos;s
                        own documentation specifically calls out this
                        cookie as something publishers must disclose.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  3. Third-Party Ad Vendor Disclosure
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  AdSense allows third-party ad vendors and ad networks to
                  serve ads on your site. Your privacy policy must disclose
                  that these third-party vendors may use cookies, web beacons,
                  and similar technologies to collect information about your
                  users. This includes ad networks that participate in
                  Google&apos;s certified ad networks program.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  4. Google Ad Settings Opt-Out Link
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Your policy must inform users that they can opt out of
                  personalized advertising by visiting Google&apos;s Ad
                  Settings page. This gives users control over how Google
                  uses their data for ad personalization. Google specifically
                  requires this opt-out disclosure as part of its
                  transparency commitment.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  5. Network Advertising Initiative Opt-Out
                </h3>
                <p className="text-slate-700 leading-7 mb-6">
                  In addition to Google&apos;s own opt-out, your policy
                  should reference the Network Advertising Initiative (NAI)
                  opt-out page. This allows users to opt out of interest-based
                  advertising from NAI member companies. While not always
                  strictly required by Google, including this link
                  strengthens your policy and demonstrates thorough
                  compliance.
                </p>

                {/* Summary table of requirements */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Required Disclosure
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          What to Include
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Source
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Cookie use for ad serving
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          State that third-party vendors use cookies to serve
                          ads based on prior visits
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          AdSense ToS Section 10
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          DoubleClick cookie
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name the DoubleClick cookie and explain its
                          advertising purpose
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          AdSense Program Policies
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Third-party ad vendors
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose that third-party vendors and ad networks
                          may collect data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          AdSense Program Policies
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Google Ad Settings link
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Provide a link to adssettings.google.com for
                          opt-out
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          AdSense Required Content
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          NAI opt-out page
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Link to optout.networkadvertising.org for
                          third-party opt-out
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Google Best Practice
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Rejection Reasons */}
              <section id="rejection-reasons" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  AdSense Application Rejection: Common Privacy-Related
                  Reasons
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Google does not always give detailed explanations when
                  rejecting an AdSense application. The rejection email
                  typically cites a general policy violation. However, based
                  on Google&apos;s published guidelines and publisher
                  community reports, these are the most common
                  privacy-related reasons for rejection.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Rejection Reason
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          What Went Wrong
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          How to Fix It
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          No privacy policy found
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          The site has no privacy policy page at all, or it
                          is not linked from the navigation or footer
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Create a privacy policy and link it in your site
                          footer
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Policy does not mention Google
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          A generic policy that lacks any reference to Google
                          as a third-party ad vendor
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Add specific Google AdSense and DoubleClick cookie
                          disclosures
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Policy does not mention cookies
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          The policy describes data collection but omits any
                          mention of advertising cookies
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Add detailed cookie disclosure including ad serving
                          cookies
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Policy is not accessible
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          The privacy policy page returns a 404 error, is
                          behind a login wall, or is not indexable
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Ensure the page loads correctly and is publicly
                          accessible
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Policy on a different domain
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          The privacy policy links to a page hosted on a
                          different domain than the AdSense site
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Host your privacy policy on the same domain as your
                          website
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The most frustrating part of an AdSense rejection is the
                  waiting. Each review cycle can take anywhere from a few
                  days to several weeks, depending on Google&apos;s backlog.
                  Publishers who get rejected for privacy policy issues lose
                  weeks of potential ad revenue while waiting for a re-review.
                  The simplest way to avoid this delay is to have a
                  compliant privacy policy in place before you ever submit
                  your application.
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
                        According to Google&apos;s own AdSense help
                        documentation, one of the top three reasons for
                        application rejection is &quot;site does not comply
                        with Google AdSense Program policies.&quot; Privacy
                        policy issues fall under this category. Many
                        publishers report being rejected multiple times
                        before realizing their privacy policy was the
                        problem, not their content quality.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  It is worth noting that Google may also reject your
                  application for non-privacy reasons, such as insufficient
                  content, navigational issues, or prohibited content. However,
                  the privacy policy requirement is one of the easiest to fix
                  and one of the most common reasons new publishers get
                  stuck in a rejection cycle.
                </p>
              </section>

              {/* Section 4: What Your Policy Must Include */}
              <section id="policy-checklist" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Your AdSense Privacy Policy Must Include
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Here is a comprehensive checklist of everything your
                  privacy policy needs to include when you are running
                  Google AdSense. This covers both Google&apos;s specific
                  requirements and the broader legal obligations that apply
                  to most publishers.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    {
                      title: "Cookie disclosure for advertising",
                      desc: "State that your site uses cookies for ad serving purposes. Explain that third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website and other websites on the internet.",
                    },
                    {
                      title: "DoubleClick cookie identification",
                      desc: "Specifically name the DoubleClick cookie (also known as the DART cookie) and explain that Google uses it to serve ads to visitors based on their visit to your site and other sites on the internet.",
                    },
                    {
                      title: "Ad personalization disclosure",
                      desc: "Explain that Google and other third-party ad vendors use data collected through cookies to serve personalized advertisements. Users should understand that the ads they see are based on their browsing history.",
                    },
                    {
                      title: "Third-party vendor cookies",
                      desc: "Disclose that third-party ad servers or ad networks use their own cookies, web beacons, and similar technologies to measure the effectiveness of their advertising and to personalize ad content shown on your site.",
                    },
                    {
                      title: "Google Ad Settings opt-out link",
                      desc: "Provide users with a way to opt out of personalized advertising. Include a link to Google Ad Settings (adssettings.google.com) where users can manage their ad preferences and opt out of personalized ads.",
                    },
                    {
                      title: "Google Analytics disclosure (if used)",
                      desc: "If you use Google Analytics alongside AdSense (which most publishers do), you must also disclose this. Google Analytics Terms of Service (Section 7) independently require a privacy policy disclosure about Analytics data collection.",
                    },
                    {
                      title: "User rights under GDPR (if EU/UK visitors)",
                      desc: "If any of your visitors are in the EU or UK, you must disclose their rights: access, rectification, erasure, restriction, portability, and objection. You must also explain your legal basis for processing their data.",
                    },
                    {
                      title: "CCPA opt-out rights (if California visitors)",
                      desc: "California users have the right to know what personal information is collected, request deletion, and opt out of the sale of personal information. If AdSense or any third-party vendor shares data in a way that constitutes a sale under CCPA, you must disclose this.",
                    },
                    {
                      title: "GDPR consent mechanism for EU visitors",
                      desc: "GDPR requires explicit consent before setting non-essential cookies, including advertising cookies. If you serve EU visitors, implement a cookie consent banner that blocks AdSense cookies until the user consents. Google supports this through its Consent Management Platform (CMP) integration.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 rounded-xl border border-slate-200 bg-white"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">
                          {item.title}
                        </p>
                        <p className="text-slate-600 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-700">
                    <strong>Quick shortcut:</strong> A privacy policy
                    generator that supports AdSense will include all of
                    these disclosures automatically. You simply indicate
                    that your site uses Google AdSense, and the generator
                    produces the required cookie disclosures, opt-out links,
                    and third-party vendor sections.{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      Generate your AdSense-compliant policy
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 5: Beyond Google */}
              <section id="beyond-google" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Beyond Google: Other Laws That Require a Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Even if Google AdSense did not require a privacy policy,
                  you would almost certainly need one under existing privacy
                  laws. AdSense just adds specific requirements on top of
                  what the law already mandates. Understanding these
                  additional requirements is important because they affect
                  what your policy must contain.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  GDPR (European Union and United Kingdom)
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  If any of your website visitors are located in the EU or
                  UK, GDPR applies to you regardless of where your business
                  is located. GDPR requires a privacy policy that discloses
                  what personal data you collect, your legal basis for
                  processing it, how long you retain it, who you share it
                  with (including Google), and what rights users have.
                  Advertising cookies like those used by AdSense require
                  explicit consent under GDPR before they can be set.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  CCPA (California, United States)
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  If you have California visitors and meet certain thresholds
                  (annual revenue above $25 million, data on 100,000+
                  consumers, or 50%+ revenue from selling personal
                  information), CCPA applies. Your privacy policy must
                  disclose the categories of personal information collected,
                  the purpose of collection, and whether you sell personal
                  information. Because AdSense involves data sharing with
                  Google and other ad vendors, you may need to provide a
                  &quot;Do Not Sell My Personal Information&quot; link.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  CalOPPA (California Online Privacy Protection Act)
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  CalOPPA applies to any commercial website or app that
                  collects personal information from California residents.
                  There is no revenue threshold. It requires a
                  conspicuously posted privacy policy that identifies the
                  categories of personal information collected, the
                  categories of third parties with whom you share it, and
                  the process by which users can review and change their
                  information. Running AdSense means you are collecting
                  personal information through advertising cookies, which
                  triggers CalOPPA requirements.
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
                        Google itself requires AdSense publishers in the
                        European Economic Area (EEA) and UK to use a
                        Google-certified Consent Management Platform (CMP)
                        to collect user consent for personalized ads. If you
                        serve ads to EU users without proper consent, Google
                        will automatically switch to serving only
                        non-personalized ads, significantly reducing your
                        AdSense revenue. Proper GDPR compliance is not just
                        a legal requirement but a revenue optimization
                        strategy.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  The Combined Requirement
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  In practice, most AdSense publishers need a privacy policy
                  that satisfies all four requirements simultaneously:
                  Google&apos;s specific AdSense disclosures, GDPR
                  transparency obligations, CCPA disclosure requirements,
                  and CalOPPA posting requirements. A well-structured
                  privacy policy covers all of these in a single document.
                  The key is making sure your policy includes the specific
                  AdSense disclosures that generic policies often miss.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Law / Requirement
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Applies If
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Key Privacy Policy Requirement
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Penalty for Non-Compliance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Google AdSense ToS
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          You use AdSense on your site
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Cookie and ad serving disclosures, opt-out links
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Application rejection or account suspension
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          GDPR
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Any EU or UK visitors
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Full transparency, consent, user rights
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          Up to 20M euros or 4% of revenue
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          CCPA
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          California visitors + revenue thresholds
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Data categories, sale disclosure, opt-out
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          $7,500 per intentional violation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          CalOPPA
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Any California visitors (no threshold)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Conspicuous policy, data categories, third parties
                        </td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          $2,500 per violation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common AdSense Privacy Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Here are the five most common mistakes publishers make
                  regarding privacy policies and AdSense, and why each one
                  puts your account and your revenue at risk.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I&apos;ll add a privacy policy after
                        approval.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Google checks for a privacy policy during
                        the application review process. There is no
                        &quot;after approval&quot; option because you will not
                        get approved without one. Every day you delay
                        creating a privacy policy is another day you cannot
                        start earning ad revenue. The policy must be live on
                        your site before you submit your application.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;A generic template is enough for
                        Google.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Generic privacy policy templates typically
                        do not include the specific disclosures Google
                        requires. They may mention &quot;cookies&quot; in
                        general terms but fail to name the DoubleClick
                        cookie, fail to identify Google as a third-party ad
                        vendor, and fail to include the required opt-out
                        links. Google&apos;s reviewers look for specific
                        language, and generic templates rarely contain it.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;I only need to mention Google.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: While Google requires you to mention its
                        own ad serving, your privacy policy must also
                        disclose all other third-party services that collect
                        user data on your site. This includes Google
                        Analytics (which has its own separate privacy policy
                        requirement), social media plugins, comment systems,
                        email subscription tools, and any other service that
                        processes visitor data. Mentioning only Google while
                        ignoring other services creates a compliance gap
                        under GDPR and CCPA.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;My blog platform&apos;s default policy
                        covers AdSense.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Platforms like WordPress, Blogger, and Wix
                        may provide a basic privacy policy template or
                        generate one for you. However, these default
                        policies describe the platform&apos;s own data
                        practices, not yours. They do not know that you have
                        added AdSense, what other plugins you use, or what
                        analytics tools you run. Your privacy policy must
                        describe your site&apos;s specific data practices,
                        including all the tools and services you have
                        installed.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: &quot;Small blogs don&apos;t need this.&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Reality: Google applies the same privacy policy
                        requirement to every AdSense publisher regardless
                        of site size. A blog with 100 monthly visitors and a
                        site with millions of page views face the same
                        requirement. Beyond Google, GDPR applies based on
                        where your users are located, not your traffic
                        volume. CalOPPA has no traffic threshold at all. The
                        moment you add AdSense to your site, you are
                        collecting personal data through advertising cookies,
                        which triggers these requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: How to Create */}
              <section id="how-to-create" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create an AdSense-Compliant Privacy Policy (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these steps to create a privacy policy that will
                  satisfy Google&apos;s AdSense requirements and comply with
                  GDPR, CCPA, and CalOPPA at the same time.
                </p>

                <div className="space-y-5">
                  {/* Step 1 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit your website&apos;s data collection practices
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Before creating your policy, list every type of data
                        your website collects. Include data from contact
                        forms, email subscriptions, comments, user accounts,
                        and any e-commerce functionality. Also include
                        passive data collection: Google Analytics tracking,
                        AdSense advertising cookies, social media share
                        buttons, embedded videos, and any other third-party
                        scripts running on your pages.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add required AdSense cookie disclosures
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Include a dedicated section about advertising
                        cookies. State that third-party vendors, including
                        Google, use cookies to serve ads based on users&apos;
                        prior visits. Mention the DoubleClick cookie by name
                        and explain its purpose. Disclose that advertising
                        cookies enable Google and its partners to serve
                        personalized advertisements based on browsing
                        behavior across the internet.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Include opt-out information and links
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Provide clear instructions for users who want to opt
                        out of personalized advertising. Link to Google Ad
                        Settings (adssettings.google.com) where users can
                        control ad personalization. Also link to the Network
                        Advertising Initiative opt-out page
                        (optout.networkadvertising.org) for broader
                        third-party cookie opt-out. Explain what happens when
                        users opt out: they will still see ads, but the ads
                        will not be personalized.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add GDPR and CCPA compliance sections
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add sections addressing the rights of EU, UK, and
                        California users. For GDPR, include your legal basis
                        for processing data, data retention periods, user
                        rights (access, rectification, erasure, portability,
                        objection), and how to contact your data protection
                        officer or responsible person. For CCPA, disclose the
                        categories of personal information collected, whether
                        you sell data, and how users can exercise their
                        opt-out rights.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Disclose all third-party services beyond AdSense
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        List every third-party tool or service that processes
                        user data on your site. Common ones for AdSense
                        publishers include Google Analytics, Google Search
                        Console, social sharing plugins (Facebook, Twitter,
                        Pinterest), comment systems (Disqus, native
                        comments), email marketing tools (Mailchimp,
                        ConvertKit), and affiliate networks. Each service
                        should be named with its data processing purpose
                        described.
                      </p>
                    </div>
                  </div>

                  {/* Step 6 */}
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Publish and link prominently on every page
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Place a link to your privacy policy in the footer of
                        every page on your website. Google specifically
                        checks for this during the AdSense application
                        review. Also link your privacy policy from your
                        cookie consent banner (required for EU visitors),
                        any sign-up or contact forms, and your site&apos;s
                        navigation menu if possible. Make sure the policy is
                        hosted on the same domain as your AdSense site.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-sm text-slate-700">
                    <strong>Shortcut:</strong> A privacy policy generator
                    handles all six steps automatically. You answer questions
                    about your site (including whether you use AdSense), and
                    it generates a complete policy with all the required
                    disclosures, cookie information, opt-out links, and
                    legal compliance sections. The whole process takes under
                    five minutes.{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      Generate your AdSense-compliant policy
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    .
                  </p>
                </div>

                {/* Inline CTA */}
                <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Get Approved Faster with the Right Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Stop waiting on AdSense rejections. Generate a
                        privacy policy that includes every disclosure Google
                        requires, plus full GDPR and CCPA compliance, in
                        under 60 seconds.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My AdSense Policy
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
                      Does Google AdSense require a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Google AdSense Terms of Service (Section 10)
                      explicitly require every publisher to have a privacy
                      policy. The policy must disclose the use of cookies
                      for ad serving, identify Google as a third-party
                      vendor, mention the DoubleClick cookie, and provide
                      opt-out links. Without a compliant privacy policy,
                      your AdSense application will be rejected.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Will my AdSense application be rejected without a
                      privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Google reviews your site during the application
                      process, and the presence of a compliant privacy
                      policy is one of the items they check. If your site
                      lacks a privacy policy, or if the policy does not
                      include the required AdSense-specific disclosures,
                      your application will be rejected. You will need to
                      fix the issue and reapply, which can delay
                      monetization by weeks.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What must an AdSense privacy policy say about cookies?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your policy must state that third-party vendors,
                      including Google, use cookies to serve ads based on
                      prior visits. You must specifically name the
                      DoubleClick cookie and explain that it is used for
                      advertising. You must inform users they can opt out
                      of personalized advertising via Google Ad Settings,
                      and you should reference the Network Advertising
                      Initiative opt-out page for broader third-party
                      cookie control.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can I add a privacy policy after approval?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      No. Google checks for a privacy policy during the
                      application review. You cannot get approved without
                      one. Even if approval were somehow granted, operating
                      without a privacy policy violates the AdSense Terms
                      of Service and can result in account suspension or
                      termination at any time. The policy must be live on
                      your site before you submit your application.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Is a generic privacy policy enough for AdSense?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      No. Generic privacy policies typically lack the
                      specific disclosures Google requires: the DoubleClick
                      cookie mention, Google as a named third-party vendor,
                      opt-out links to Google Ad Settings, and detailed
                      advertising cookie descriptions. Google&apos;s
                      reviewers look for these specific items, and generic
                      templates almost never include them. Use a generator
                      that specifically supports AdSense disclosures.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need GDPR compliance for AdSense with EU visitors?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. If any visitors are in the EU or UK, you must
                      comply with GDPR in addition to AdSense requirements.
                      This means implementing a cookie consent mechanism
                      that obtains explicit consent before serving
                      personalized ads, disclosing Google as a data
                      processor, and providing full user rights information.
                      Google also requires EU consent compliance through its
                      Consent Management Platform integration.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I create a privacy policy that meets AdSense
                      requirements?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The fastest method is using a privacy policy generator
                      that includes AdSense-specific disclosures. Indicate
                      that your site uses Google AdSense, and the generator
                      will produce a policy with the required cookie
                      disclosures, DoubleClick cookie mention, Google ad
                      serving disclosure, opt-out links, and GDPR/CCPA
                      compliance sections. This typically takes under five
                      minutes and costs a fraction of hiring a lawyer.
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
                      href: "/do-i-need-a-privacy-policy-for-a-blog",
                      title: "Privacy Policy for a Blog",
                      desc: "Complete guide for bloggers and content publishers",
                    },
                    {
                      href: "/cookie-policy-for-websites",
                      title: "Cookie Policy for Websites",
                      desc: "Everything you need to know about cookie disclosures",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      title: "Privacy Policy for Websites",
                      desc: "A comprehensive guide for standard website operators",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "Compliant GDPR template with all required disclosures",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "The real consequences of operating without one",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      title: "Can I Copy Someone Else's Privacy Policy?",
                      desc: "Why copying is both illegal and non-compliant",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      title: "How Often to Update Your Privacy Policy",
                      desc: "When and why to review your privacy disclosures",
                    },
                    {
                      href: "/privacy-policy-for-wordpress",
                      title: "Privacy Policy for WordPress",
                      desc: "WordPress-specific privacy policy guidance and tools",
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
                  Get Your AdSense Application Approved
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Stop getting rejected for privacy policy issues. Generate
                  an AdSense-compliant privacy policy with all required
                  Google disclosures, cookie information, and opt-out links
                  in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My AdSense Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers Google AdSense, GDPR, CCPA &amp; CalOPPA &middot;
                  Customized to your site &middot; Ready in 60 seconds
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
