import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  Ban,
  Info,
  Lock,
  Eye,
  Smartphone,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Apple App Store Privacy Policy Requirements: Complete Guide (2026) | ultrafastutilities",
  description:
    "Apple requires every App Store app to have a privacy policy. Learn about App Tracking Transparency, nutrition labels, privacy manifests, and what causes App Review rejection.",
  keywords:
    "apple app store privacy policy requirements, app store privacy policy, ios app privacy policy, apple app review privacy, app tracking transparency privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/apple-app-store-privacy-policy-requirements",
  },
  openGraph: {
    title:
      "Apple App Store Privacy Policy Requirements: Complete Guide (2026) | ultrafastutilities",
    description:
      "Apple requires every App Store app to have a privacy policy. Learn about App Tracking Transparency, nutrition labels, privacy manifests, and what causes App Review rejection.",
    url: "https://ultrafastutilities.com/apple-app-store-privacy-policy-requirements",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apple App Store Privacy Policy Requirements | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Apple App Store Privacy Policy Requirements: Complete Guide (2026)",
    description:
      "Apple requires every App Store app to have a privacy policy. Learn about App Tracking Transparency, nutrition labels, privacy manifests, and what causes App Review rejection.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does every iOS app need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Apple requires every app submitted to the App Store to have a privacy policy, regardless of whether the app collects user data. This requirement applies to all apps, including free apps, paid apps, and apps that do not collect any personal information. The privacy policy URL must be provided in App Store Connect before your app can be submitted for review.",
      },
    },
    {
      "@type": "Question",
      name: "What are Apple's privacy nutrition labels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Privacy nutrition labels are Apple's system for displaying an app's data collection practices on its App Store listing. Developers must declare what data their app collects across categories like Contact Info, Health and Fitness, Financial Info, Location, Contacts, User Content, Browsing History, Search History, Identifiers, Usage Data, Diagnostics, and other data types. For each data type, you must specify whether it is linked to the user's identity and whether it is used for tracking.",
      },
    },
    {
      "@type": "Question",
      name: "When is the App Tracking Transparency prompt required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The App Tracking Transparency (ATT) prompt is required whenever your app tracks users across apps and websites owned by other companies. This includes using the IDFA (Identifier for Advertisers), sharing user data with data brokers, linking user data collected from your app with data from other companies' apps or websites for advertising purposes, and sharing device-level data like device fingerprints with data brokers.",
      },
    },
    {
      "@type": "Question",
      name: "What are Apple privacy manifests?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Privacy manifests are a newer Apple requirement where apps and third-party SDKs must declare the APIs they use and the reasons for using them. Starting in 2024, apps that use certain required reason APIs must include a PrivacyInfo.xcprivacy file that documents each API call and its purpose. Third-party SDKs must also provide their own privacy manifests, and the information is aggregated into a single privacy report for your app.",
      },
    },
    {
      "@type": "Question",
      name: "What causes App Review rejection for privacy issues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common App Review rejection reasons include an incomplete or missing privacy policy, nutrition labels that do not match actual data collection, ATT prompt inconsistencies where the app tracks without requesting permission, third-party SDK data collection not disclosed in the privacy policy or nutrition labels, and no account or data deletion mechanism when the app creates user accounts. Apple has become increasingly strict about privacy compliance during App Review.",
      },
    },
    {
      "@type": "Question",
      name: "Does my privacy policy need to mention App Tracking Transparency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your app uses tracking as defined by Apple, your privacy policy should explain what tracking occurs, what data is shared with third parties for tracking, and how users can opt out through the ATT prompt. Even if your app does not track users, it is good practice to state that your app does not track users across other apps and websites. This helps avoid confusion during App Review.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add a privacy policy URL in App Store Connect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In App Store Connect, navigate to your app, then go to App Information under the General section. There is a dedicated Privacy Policy URL field where you must enter a publicly accessible URL. This URL is displayed on your app's App Store listing and must be accessible without requiring a login. The URL must remain active for as long as your app is available on the App Store.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Meet Apple App Store Privacy Policy Requirements",
  description:
    "Follow these six steps to create a compliant privacy policy and meet all of Apple's App Store privacy requirements, including nutrition labels, ATT, and privacy manifests.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit all data your app collects",
      text: "Review every piece of data your app collects, processes, or shares. Include data from third-party SDKs, analytics tools, ad networks, and any APIs your app calls. Document whether each data type is linked to the user's identity and whether it is used for tracking across other apps or websites.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Complete your privacy nutrition labels in App Store Connect",
      text: "In App Store Connect, go to your app's privacy section and declare every data type your app collects. For each type, specify whether it is used for tracking, linked to the user's identity, or used for app functionality, analytics, or advertising. These labels must match your actual data practices exactly.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Implement App Tracking Transparency if needed",
      text: "If your app tracks users across other companies' apps or websites, implement the ATT framework and present the tracking permission prompt. Your app must not track users who decline. Update your privacy policy to explain what tracking occurs and how users can control it through the ATT prompt.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Create and include privacy manifests",
      text: "Add a PrivacyInfo.xcprivacy file to your app if it uses any required reason APIs. Ensure all third-party SDKs you use include their own privacy manifests. The privacy manifest must declare each API used and the specific reason for using it from Apple's approved list of reasons.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Generate your privacy policy with Apple-specific details",
      text: "Use a privacy policy generator to create a policy that covers all data types declared in your nutrition labels, your ATT practices, third-party SDK data collection, and user rights including data deletion. The policy must be consistent with your App Store Connect declarations.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Add your privacy policy URL in App Store Connect and submit",
      text: "Enter your publicly accessible privacy policy URL in the App Information section of App Store Connect. Verify that the URL loads correctly, does not require a login, and displays your complete privacy policy. Submit your app for review with confidence that your privacy disclosures are complete and consistent.",
    },
  ],
};

const tocSections = [
  { id: "what-apple-requires", title: "What Apple Requires" },
  { id: "privacy-nutrition-labels", title: "Privacy Nutrition Labels" },
  { id: "app-tracking-transparency", title: "App Tracking Transparency" },
  { id: "privacy-manifests", title: "Privacy Manifests" },
  { id: "common-rejections", title: "Common Rejection Reasons" },
  { id: "app-review-process", title: "App Review Process" },
  { id: "how-to-comply", title: "How to Comply (6 Steps)" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function AppleAppStorePrivacyPolicyRequirementsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Apple App Store Privacy Policy Requirements: Complete Guide (2026)",
            description:
              "Apple requires every App Store app to have a privacy policy. Learn about App Tracking Transparency, nutrition labels, privacy manifests, and what causes App Review rejection.",
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
                name: "Apple App Store Privacy Policy Requirements",
                item: "https://ultrafastutilities.com/apple-app-store-privacy-policy-requirements",
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
                Apple App Store Privacy Policy Requirements
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Developer Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Apple App Store Privacy Policy Requirements:{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  What Apple Reviews Before Approving Your App
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Apple requires every app on the App Store to have a privacy
                policy. Without one, your app will not pass App Review.
                Getting it wrong means rejection, delays, and lost revenue.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For iOS developers, indie app makers, and teams publishing
                to the Apple App Store.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA &amp;
                App Store compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Smartphone className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                App Privacy Policies
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-google-play"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Google Play Requirements
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
                    Publishing an iOS app?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Get your privacy policy in 60 seconds
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
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
                  <strong>Apple requires every app submitted to the App Store to have a privacy policy accessible via a public URL.</strong>{" "}
                  Key requirements include privacy nutrition labels that
                  disclose all data collection categories, App Tracking
                  Transparency (ATT) compliance for cross-app tracking,
                  privacy manifests (introduced in 2024) that declare API
                  usage and third-party SDK data practices, and accurate
                  disclosure of all data collection in your App Store
                  Connect listing.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Apple has built one of the strictest privacy compliance
                frameworks in the app ecosystem. Every app on the App Store,
                whether free or paid, whether it collects data or not, must
                provide a privacy policy URL. But the privacy policy itself
                is only the beginning. Apple also requires privacy nutrition
                labels, App Tracking Transparency compliance, and privacy
                manifests.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                The App Review team checks privacy disclosures carefully.
                Inconsistencies between your privacy policy, your nutrition
                labels, and your app&apos;s actual behavior are one of the
                most common reasons for rejection. Apple has rejected apps
                for something as simple as declaring &quot;no data
                collected&quot; while using an analytics SDK that collects
                usage data in the background.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers everything you need to know: what Apple
                requires in your privacy policy, how to fill out nutrition
                labels correctly, when the ATT prompt is required, what
                privacy manifests are, the most common rejection reasons,
                and how to get through App Review smoothly.
              </p>

              {/* Section 1: What Apple Requires */}
              <section id="what-apple-requires" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Apple Requires for App Store Privacy Compliance
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Apple&apos;s App Store Review Guidelines Section 5.1 covers
                  privacy requirements in detail. The requirements apply to
                  all apps submitted to the App Store, including apps for
                  iPhone, iPad, Apple Watch, Apple TV, and Mac (via the Mac
                  App Store). These are not optional guidelines. They are
                  enforced requirements that your app must meet to be
                  approved.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Core Requirements
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy URL:</strong> A publicly accessible
                      URL entered in the App Information section of App Store
                      Connect. This URL is displayed on your app&apos;s App
                      Store listing and must be accessible without a login.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy nutrition labels:</strong> You must declare
                      every type of data your app collects in App Store Connect.
                      Apple displays these as &quot;App Privacy&quot; labels on
                      your listing so users can see your data practices before
                      downloading.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>App Tracking Transparency:</strong> If your app
                      tracks users across apps and websites owned by other
                      companies, you must use the ATT framework to request
                      permission before tracking begins.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy manifests:</strong> Apps using required
                      reason APIs must include a PrivacyInfo.xcprivacy file
                      declaring each API and the reason for its use.
                      Third-party SDKs must also provide their own privacy
                      manifests.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data deletion mechanism:</strong> Apps that create
                      user accounts must offer a way for users to delete their
                      account and associated data from within the app and on
                      your website.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Apple reviews apps both during the initial submission and
                  during updates. The App Review team can also re-review
                  existing apps at any time. Apps found to be non-compliant
                  can be removed from the App Store. Developers with
                  repeated privacy violations risk having their Apple
                  Developer account terminated.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Required</p>
                    <p className="text-xs text-slate-500 mt-1">
                      For every App Store app
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Public</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Visible on your App Store listing
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <AlertTriangle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Enforced</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Rejection or removal from store
                    </p>
                  </div>
                </div>

                {/* Did you know box 1 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Apple&apos;s App Tracking Transparency framework has
                        had a massive impact on the advertising industry.
                        Since its introduction, only about 25% of iOS users
                        opt in to tracking when prompted. This has cost
                        major ad platforms billions of dollars in revenue
                        and forced a fundamental shift in how mobile
                        advertising works. Your privacy policy should
                        reflect whether your app uses tracking and how you
                        handle users who opt out.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does my app need a privacy policy even if it collects
                      no data?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Apple requires a privacy policy URL for every app
                      submitted to the App Store, regardless of data collection.
                      Even if your app collects zero user data, you still need
                      a privacy policy that states this clearly. The privacy
                      policy URL field in App Store Connect is mandatory.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Does this apply to apps distributed through TestFlight?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      TestFlight apps do not require a privacy policy URL in
                      the same way App Store apps do. However, if your app
                      collects user data during beta testing, privacy laws
                      like GDPR and CCPA still apply. It is a good practice
                      to have your privacy policy ready before beta testing
                      so it is in place when you submit to the App Store.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Privacy Nutrition Labels */}
              <section id="privacy-nutrition-labels" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Privacy Nutrition Labels
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Apple&apos;s privacy nutrition labels are displayed on every
                  app&apos;s App Store listing page. They give users a clear
                  summary of what data the app collects before they download
                  it. You must fill out these labels accurately in App Store
                  Connect. Apple checks them during App Review, and
                  inaccurate labels are a common rejection reason.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For each data type your app collects, you must declare
                  whether the data is &quot;Linked to Your Identity&quot;
                  (associated with the user&apos;s account or identity),
                  &quot;Not Linked to Your Identity&quot; (collected
                  anonymously), or &quot;Used to Track You&quot; (shared with
                  third parties for tracking across apps and websites). Your
                  privacy policy must match these declarations exactly.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Data Category
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          What It Includes
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Common Sources
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contact Info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name, email address, phone number, physical address
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Registration forms, account creation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Health &amp; Fitness
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Health data, fitness data, clinical health records
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          HealthKit, fitness trackers, manual input
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Financial Info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Payment info, credit score, salary, debts, assets
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Payment processors, banking APIs, user input
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Precise location, coarse location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          GPS, Wi-Fi, IP address geolocation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contacts
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contacts list from user&apos;s device
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Address book access, social features
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          User Content
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Emails, texts, photos, videos, audio, gameplay content
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User uploads, camera, microphone, messaging
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Browsing History
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Websites visited, in-app browsing activity
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          In-app browsers, WebView, link tracking
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Search History
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Search queries within the app
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          In-app search, search analytics
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Identifiers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User ID, device ID, IDFA, IDFV
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Authentication, analytics, advertising SDKs
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Usage Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product interaction, advertising data, app launches, taps
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Analytics SDKs, event tracking, Firebase
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Diagnostics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crash data, performance data, diagnostic logs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crashlytics, Sentry, built-in crash reporting
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Other Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Any data type not covered by the categories above
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Custom data collection, third-party SDKs
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The most common mistake developers make with nutrition
                  labels is forgetting to account for third-party SDKs.
                  If you use Firebase Analytics, it collects usage data and
                  diagnostics. If you use Facebook SDK, it may collect
                  identifiers. If you use AdMob, it collects advertising
                  data. You are responsible for declaring all data collected
                  by your app, including data collected by SDKs you
                  integrate.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy must cover every data type you declare
                  in your nutrition labels. If your labels say you collect
                  &quot;Usage Data&quot; and &quot;Diagnostics,&quot; your
                  privacy policy must explain what usage data and diagnostics
                  you collect, why you collect them, and how they are used.
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
                        Apple&apos;s nutrition labels are self-reported by
                        developers, but Apple does verify them during App
                        Review. If a reviewer finds that your app collects
                        data not declared in your nutrition labels, your app
                        will be rejected. Apple also accepts reports from
                        users and researchers about inaccurate nutrition
                        labels, which can trigger a re-review of your app.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: App Tracking Transparency */}
              <section id="app-tracking-transparency" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  App Tracking Transparency (ATT)
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  App Tracking Transparency is Apple&apos;s framework that
                  requires apps to get explicit user permission before
                  tracking them across apps and websites owned by other
                  companies. If your app tracks users as defined by Apple,
                  you must present the ATT permission prompt before any
                  tracking occurs. Your privacy policy must explain your
                  tracking practices clearly.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Counts as Tracking
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Using the IDFA:</strong> Accessing the Identifier
                      for Advertisers to serve targeted ads or measure ad
                      effectiveness across apps.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Sharing data with data brokers:</strong> Sending
                      any user data or device data to companies that aggregate
                      and sell data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cross-company data linking:</strong> Combining
                      user data from your app with user data from other
                      companies&apos; apps or websites for advertising or
                      ad measurement.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Device fingerprinting:</strong> Using device
                      characteristics to identify a device across apps,
                      even without the IDFA.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Does Not Count as Tracking
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  First-party analytics (tracking user behavior within your
                  own app only) is not considered tracking under ATT.
                  Linking user data with data from your own other apps or
                  websites on the same device is also not tracking, as long
                  as you are not sharing that data with third parties.
                  Sending data to a third party that acts as a service
                  provider (processing data only on your behalf) is also
                  not tracking, provided the service provider does not use
                  the data for its own purposes.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  How to Disclose ATT in Your Privacy Policy
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy should explain whether your app tracks
                  users, what data is involved in tracking, which third
                  parties receive tracking data, and how users can opt out
                  via the ATT prompt. If your app does not track users,
                  state this clearly. If a user denies the ATT prompt, your
                  app must not track them, and your policy should confirm
                  this behavior.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What happens if my app tracks without showing the
                      ATT prompt?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Apple will reject your app during App Review. If the
                      tracking is discovered after approval (through user
                      reports or Apple&apos;s own analysis), your app can
                      be removed from the App Store. Apple takes ATT
                      compliance very seriously. There is no grace period
                      or warning system. Your app must request permission
                      before any tracking begins.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need ATT if I only use first-party analytics?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No. First-party analytics that stay within your app
                      and are not shared with third parties for tracking
                      purposes do not require the ATT prompt. However,
                      if your analytics SDK sends data to a third-party
                      server that uses the data for its own purposes
                      (like improving its own products), that could
                      constitute tracking. Check your SDK documentation
                      carefully.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Privacy Manifests */}
              <section id="privacy-manifests" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Privacy Manifests
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Privacy manifests are a newer Apple requirement introduced
                  to improve transparency around API usage and third-party
                  SDK data practices. Starting in 2024, apps that use
                  certain APIs must include a PrivacyInfo.xcprivacy file
                  that declares each API and the reason for using it.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Required Reason APIs
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Apple has identified specific APIs that can be used for
                  fingerprinting or accessing sensitive data. These are
                  called &quot;required reason APIs.&quot; If your app or
                  any SDK it includes calls these APIs, you must declare
                  the reason in your privacy manifest. The required reason
                  APIs include file timestamp APIs (like
                  NSFileCreationDate), system boot time APIs, disk space
                  APIs, active keyboard APIs, and user defaults APIs when
                  accessed from outside your app group.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  For each API call, you must select from Apple&apos;s
                  approved list of reasons. You cannot provide a custom
                  reason. If your use case does not match any approved
                  reason, you should not be calling that API. Using a
                  required reason API without declaring it in your privacy
                  manifest will cause your app to be rejected.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Third-Party SDK Privacy Manifests
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Apple also requires popular third-party SDKs to provide
                  their own privacy manifests. When you build your app,
                  Xcode aggregates the privacy manifests from your app and
                  all included SDKs into a single privacy report. This
                  report shows all API usage and data collection across
                  your entire app, including third-party code.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  If you use a third-party SDK that does not include a
                  privacy manifest when one is required, your app submission
                  may be flagged. Apple maintains a list of commonly used
                  SDKs that must include privacy manifests. Make sure all
                  SDKs you use are up to date and include the required
                  privacy manifest files.
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
                        You can generate a privacy report in Xcode by
                        archiving your app and then selecting &quot;Generate
                        Privacy Report&quot; from the Organizer. This report
                        shows all required reason API usage and data
                        collection declarations from your app and every
                        third-party SDK it includes. Reviewing this report
                        before submission helps you catch missing
                        declarations that would cause a rejection.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Common App Review Rejection Reasons */}
              <section id="common-rejections" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common App Review Rejection Reasons for Privacy
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These are the most common privacy-related reasons apps
                  get rejected during App Review. Each one represents a
                  mismatch between what your app does and what your
                  privacy disclosures say.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Incomplete or missing privacy policy
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The privacy policy URL is missing from App Store
                        Connect, the URL leads to a broken page, or the
                        policy does not cover all data types the app
                        collects. Apple requires the policy to be accessible
                        without a login and to clearly describe all data
                        practices. A generic, template privacy policy that
                        does not mention your specific app or its data
                        handling will also be flagged.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Nutrition labels do not match actual data collection
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your nutrition labels declare &quot;no data
                        collected&quot; but your app includes analytics SDKs
                        that collect usage data. Or your labels omit a data
                        category that your app clearly collects. Apple
                        reviewers test your app and compare its behavior to
                        your declared nutrition labels. Any mismatch results
                        in rejection with a specific explanation of which
                        data types are missing.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        ATT prompt inconsistency
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your app tracks users (uses IDFA, shares data with
                        ad networks, or performs cross-app tracking) without
                        presenting the ATT prompt first. Or your app shows
                        the ATT prompt but continues tracking even when the
                        user declines. Apple tests for both of these
                        scenarios. Your app must respect the user&apos;s
                        choice completely.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Third-party SDK data collection not disclosed
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your app includes third-party SDKs (ad networks,
                        analytics, social login, crash reporting) that
                        collect data, but your privacy policy and nutrition
                        labels do not account for this data collection. You
                        are responsible for all data collected by your app,
                        including data collected by SDKs. Review every SDK
                        in your project and declare its data collection in
                        your nutrition labels and privacy policy.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        No account or data deletion mechanism
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your app allows users to create accounts but does
                        not provide a way to delete their account and
                        associated data. Since 2022, Apple requires all apps
                        that offer account creation to also offer account
                        deletion. The deletion option must be available
                        within the app itself, not just through a support
                        email. Your privacy policy must explain how users
                        can request and complete data deletion.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: App Review Process */}
              <section id="app-review-process" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The App Review Process for Privacy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Understanding how Apple reviews privacy during App Review
                  helps you prepare your submission and avoid common
                  pitfalls. The review team checks several specific areas
                  related to privacy compliance.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  What Reviewers Check
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy URL:</strong> The reviewer verifies
                      that the URL in App Store Connect is accessible, loads
                      correctly, and contains a substantive privacy policy
                      that covers the app&apos;s data practices.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Nutrition label accuracy:</strong> The reviewer
                      tests the app and compares observed data collection
                      (network requests, permissions requested, SDK behavior)
                      against the declared nutrition labels.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>ATT compliance:</strong> If the app uses tracking,
                      the reviewer checks that the ATT prompt appears before
                      any tracking occurs and that the app respects the
                      user&apos;s choice.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy manifest:</strong> The reviewer checks
                      that required reason APIs are declared with valid
                      reasons in the PrivacyInfo.xcprivacy file.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Account deletion:</strong> If the app supports
                      account creation, the reviewer verifies that account
                      deletion is available and functional.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Review Timeline
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  Most App Review decisions are returned within 24 to 48
                  hours. However, apps that trigger privacy concerns may
                  take longer as they require more thorough review. If your
                  app is rejected for a privacy issue, you will receive a
                  specific explanation of what needs to be fixed. You can
                  then update your app, privacy policy, or nutrition labels
                  and resubmit.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Responding to Rejections
                </h3>
                <p className="text-slate-700 leading-7 mb-4">
                  When your app is rejected for a privacy issue, read the
                  rejection message carefully. Apple usually specifies
                  exactly which guideline was violated and what needs to
                  change. Fix the specific issue mentioned, update your
                  privacy policy if needed, update your nutrition labels if
                  they were inaccurate, and resubmit. If you believe the
                  rejection was a mistake, you can use the Resolution Center
                  in App Store Connect to respond and explain your position.
                </p>

                {/* Enforcement cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      New Apps
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Rejected
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Will not pass App Review without complete privacy compliance
                    </p>
                  </div>
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      Existing Apps
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Removed
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Can be pulled from the App Store during re-review
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: How to Comply */}
              <section id="how-to-comply" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Meet Apple App Store Privacy Requirements
                  (6 Steps)
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow this process to ensure your app meets all of
                  Apple&apos;s privacy requirements and passes App Review
                  without privacy-related rejections.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit all data your app collects
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Review every piece of data your app collects,
                        processes, or shares. Include data from third-party
                        SDKs like Firebase, Facebook SDK, AdMob, Crashlytics,
                        and any analytics tools. For each data type, note
                        whether it is linked to the user&apos;s identity and
                        whether it is used for tracking across other apps.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Complete privacy nutrition labels in App Store Connect
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        In App Store Connect, navigate to your app&apos;s
                        privacy section and declare every data type your app
                        collects. For each type, specify whether it is used
                        for tracking, linked to the user&apos;s identity, or
                        collected for app functionality, analytics, or
                        advertising. These must match your actual practices.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Implement App Tracking Transparency if needed
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If your app tracks users across other companies&apos;
                        apps or websites, implement the ATT framework. Present
                        the tracking permission prompt before any tracking
                        begins. Respect the user&apos;s choice completely. If
                        your app does not track, you do not need the ATT
                        prompt, but document this in your privacy policy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Create and include privacy manifests
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Add a PrivacyInfo.xcprivacy file to your Xcode
                        project if your app uses any required reason APIs.
                        Verify that all third-party SDKs include their own
                        privacy manifests. Use Xcode&apos;s privacy report
                        feature to review the aggregated privacy declarations
                        before submitting.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Generate your privacy policy
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Use a{" "}
                        <Link
                          href="/generate"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          privacy policy generator
                        </Link>{" "}
                        to create a policy that covers all data types from
                        your nutrition labels, your ATT practices, third-party
                        SDK data collection, and user rights including account
                        and data deletion. The policy must be consistent with
                        your App Store Connect declarations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add your privacy policy URL and submit
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        In App Store Connect, go to App Information and enter
                        your publicly accessible privacy policy URL. Verify
                        the URL loads correctly and does not require a login.
                        Double-check that your privacy policy, nutrition
                        labels, and ATT implementation are all consistent.
                        Then submit your app for review.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-blue-200 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Generate Your App Store Privacy Policy
                      </h3>
                      <p className="text-blue-100 text-sm mb-4">
                        Answer a few questions about your iOS app and get a
                        privacy policy that meets Apple&apos;s requirements.
                        Covers nutrition labels, ATT, data deletion, and
                        user rights under GDPR and CCPA.
                      </p>
                      <Link href="/generate">
                        <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm px-5 py-2 h-auto">
                          Generate My Privacy Policy
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
                      Does every iOS app need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Apple requires a privacy policy for every app
                      submitted to the App Store, regardless of whether the
                      app collects user data. The privacy policy URL must be
                      provided in App Store Connect before submission. Even
                      apps that collect no data need a policy stating that
                      fact.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are Apple&apos;s privacy nutrition labels?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Privacy nutrition labels are Apple&apos;s system for
                      displaying an app&apos;s data practices on its App
                      Store listing. You must declare what data your app
                      collects across categories like Contact Info, Health,
                      Financial Info, Location, and more. For each type, you
                      specify whether it is linked to the user&apos;s
                      identity and whether it is used for tracking.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      When is the ATT prompt required?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The App Tracking Transparency prompt is required
                      whenever your app tracks users across apps and websites
                      owned by other companies. This includes using the IDFA,
                      sharing data with data brokers, linking user data with
                      other companies&apos; data for advertising, and device
                      fingerprinting. First-party analytics do not require
                      ATT.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What are privacy manifests?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Privacy manifests (PrivacyInfo.xcprivacy files) are
                      Apple&apos;s requirement for declaring API usage and
                      reasons. Apps that use required reason APIs must
                      include a privacy manifest documenting each API call
                      and its purpose. Third-party SDKs must also include
                      their own privacy manifests, which Xcode aggregates
                      into a unified report.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What causes privacy-related App Review rejection?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Common causes include a missing or incomplete privacy
                      policy, nutrition labels that do not match actual data
                      collection, tracking without the ATT prompt,
                      undisclosed third-party SDK data collection, and
                      missing account deletion functionality. Apple
                      provides specific rejection reasons so you can fix
                      the issue and resubmit.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my privacy policy need to mention ATT?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      If your app uses tracking as defined by Apple, your
                      privacy policy should explain what tracking occurs,
                      what data is shared, and how users can opt out via
                      the ATT prompt. Even if your app does not track, it
                      is good practice to state that clearly in your policy
                      to avoid confusion during App Review.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I add a privacy policy URL in App Store Connect?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      In App Store Connect, navigate to your app and go to
                      App Information under the General section. Enter your
                      publicly accessible privacy policy URL in the
                      dedicated field. This URL is displayed on your
                      app&apos;s App Store listing and must remain
                      accessible without a login for as long as your app
                      is on the store.
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
                      desc: "General app store privacy policy requirements",
                    },
                    {
                      href: "/privacy-policy-for-google-play",
                      title: "Privacy Policy for Google Play",
                      desc: "Google Play Store privacy policy requirements",
                    },
                    {
                      href: "/privacy-policy-for-mobile-apps",
                      title: "Privacy Policy for Mobile Apps",
                      desc: "Complete guide for iOS and Android privacy policies",
                    },
                    {
                      href: "/do-mobile-apps-need-a-privacy-policy",
                      title: "Do Mobile Apps Need a Privacy Policy?",
                      desc: "When a mobile app privacy policy is required",
                    },
                    {
                      href: "/mobile-app-privacy-policy-template",
                      title: "Mobile App Privacy Policy Template",
                      desc: "Free template for iOS and Android apps",
                    },
                    {
                      href: "/ios-app-privacy-policy-template",
                      title: "iOS App Privacy Policy Template",
                      desc: "Apple-specific privacy policy template",
                    },
                    {
                      href: "/generate",
                      title: "Generate Your Privacy Policy",
                      desc: "Create a compliant policy in under 60 seconds",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "Real consequences of operating without one",
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
                  Ready to Submit Your App to the App Store?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a privacy policy issue delay your launch.
                  Generate a compliant policy that covers nutrition labels,
                  ATT, data deletion, and user rights. Takes under 60
                  seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and Apple App Store requirements &middot;
                  Customized for iOS apps &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
