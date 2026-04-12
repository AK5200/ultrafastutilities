import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  Ban,
  Info,
  Copy,
  ClipboardList,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "iOS App Privacy Policy Template (App Store Ready) (2026) | ultrafastutilities",
  description:
    "Free iOS app privacy policy template designed for Apple App Store approval. Covers privacy nutrition labels, App Tracking Transparency, HealthKit, Sign in with Apple, and privacy manifests.",
  keywords:
    "ios app privacy policy template, iphone app privacy policy, apple app privacy policy template, ios privacy policy example, swift app privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/ios-app-privacy-policy-template",
  },
  openGraph: {
    title:
      "iOS App Privacy Policy Template (App Store Ready) (2026) | ultrafastutilities",
    description:
      "Free iOS app privacy policy template designed for Apple App Store approval. Covers privacy nutrition labels, App Tracking Transparency, HealthKit, Sign in with Apple, and privacy manifests.",
    url: "https://ultrafastutilities.com/ios-app-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "iOS App Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "iOS App Privacy Policy Template (App Store Ready) (2026)",
    description:
      "Free iOS app privacy policy template designed for Apple App Store approval. Covers privacy nutrition labels, App Tracking Transparency, HealthKit, Sign in with Apple, and privacy manifests.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a free iOS app privacy policy template enough for App Store approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A free template can pass App Store review if you customize it to accurately describe your app's data practices. Apple reviewers check that your privacy policy matches the privacy nutrition labels you declare in App Store Connect. The template must cover every data type you collect, how you use it, and whether it is linked to the user's identity. Apps handling sensitive categories like HealthKit data should have their policy reviewed by a legal professional.",
      },
    },
    {
      "@type": "Question",
      name: "What must an iOS app privacy policy include to pass Apple review?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An iOS app privacy policy must include: what data your app collects, how it uses that data, whether data is shared with third parties, how data is stored and protected, how users can delete their data, your contact information, and the effective date. You must also disclose App Tracking Transparency status, explain any use of HealthKit or HomeKit data, describe Sign in with Apple data handling if applicable, and ensure everything matches your privacy nutrition labels in App Store Connect.",
      },
    },
    {
      "@type": "Question",
      name: "Do all iOS apps need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Apple requires every app submitted to the App Store to have a privacy policy, regardless of whether the app collects user data. This requirement applies to free apps, paid apps, apps with in-app purchases, and apps that collect no data at all. You must provide a privacy policy URL in App Store Connect before your app can be submitted for review. Apps without a privacy policy URL will be rejected during the submission process.",
      },
    },
    {
      "@type": "Question",
      name: "How do privacy nutrition labels relate to my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Privacy nutrition labels are the data disclosures you fill out in App Store Connect. They appear on your App Store listing and summarize what data your app collects, whether it is linked to the user, and whether it is used for tracking. Your privacy policy must be consistent with these labels. If your nutrition labels say you collect location data for analytics, your privacy policy must describe that same practice. Apple reviews both for consistency, and mismatches lead to rejection.",
      },
    },
    {
      "@type": "Question",
      name: "Does my iOS app privacy policy need to cover App Tracking Transparency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your app tracks users across other companies' apps or websites, yes. You must include language explaining what tracking your app performs, why it requests the ATT prompt, and what happens if the user denies tracking permission. Even if your app does not track users, it is good practice to state that explicitly in your privacy policy. Apple checks that apps displaying the ATT prompt have a corresponding disclosure in their privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "How do I handle HealthKit data in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HealthKit data has strict requirements. Your privacy policy must state that HealthKit data is not sold, not used for advertising, and not shared with third parties for advertising or data mining purposes. You must disclose exactly which HealthKit data types your app reads and writes, why your app needs access, and how the data is stored. Apple explicitly prohibits using HealthKit data for any purpose other than providing health or fitness services to the user.",
      },
    },
    {
      "@type": "Question",
      name: "What is a privacy manifest and does my app need one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A privacy manifest (PrivacyInfo.xcprivacy) is a file that declares why your app uses certain required reason APIs, such as UserDefaults, file timestamp APIs, system boot time APIs, and disk space APIs. Starting in 2024, Apple requires privacy manifests for apps that use these APIs and for all third-party SDKs. Your privacy policy should reference the API usage declared in your privacy manifest to maintain consistency across all privacy disclosures.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create an iOS App Privacy Policy from This Template",
  description:
    "Follow these six steps to customize an iOS app privacy policy template so it passes Apple App Store review on the first submission.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your app's data collection",
      text: "Go through every feature of your app and list every piece of data it collects, accesses, or processes. Include data from HealthKit, Core Location, Contacts, Photos, Camera, Microphone, and any other system frameworks. Also list data collected by third-party SDKs like analytics, crash reporting, and advertising frameworks.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map data to privacy nutrition label categories",
      text: "Apple organizes data into 14 categories for nutrition labels: Contact Info, Health and Fitness, Financial Info, Location, Sensitive Info, Contacts, User Content, Browsing History, Search History, Identifiers, Usage Data, Diagnostics, Purchases, and Other Data. Map every data point from step 1 into these categories. This mapping drives both your nutrition labels and your privacy policy content.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Replace all placeholders with your app specifics",
      text: "Go through the template and replace every bracketed placeholder with details specific to your app. Replace [Your App Name] with your actual app name. Replace generic data descriptions with the exact data types your app collects. Remove sections for frameworks you do not use, such as HealthKit or HomeKit sections if your app does not access those.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add App Tracking Transparency disclosure",
      text: "If your app displays the ATT prompt, add a section explaining what tracking your app performs and what happens when users opt out. If your app does not track users, add a statement confirming that. Your ATT disclosure must match the tracking declaration in your privacy nutrition labels.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add your privacy manifest declarations",
      text: "If your app includes a PrivacyInfo.xcprivacy file, make sure your privacy policy references the same required reason API categories declared in the manifest. This ensures consistency between your code-level declarations and your user-facing policy.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Verify your policy matches your App Store Connect nutrition labels",
      text: "Compare your finished privacy policy against the privacy nutrition labels you filled out in App Store Connect. Every data type and purpose declared in the nutrition labels must be reflected in your policy. Mismatches between the two are a top reason for App Store rejection.",
    },
  ],
};

const tocSections = [
  { id: "what-apple-requires", title: "What Apple Requires" },
  { id: "full-template-preview", title: "Full Template Preview" },
  { id: "privacy-nutrition-labels-guide", title: "Privacy Nutrition Labels Guide" },
  { id: "ios-specific-data-disclosures", title: "iOS-Specific Data Disclosures" },
  { id: "app-tracking-transparency-wording", title: "ATT Wording" },
  { id: "privacy-manifests", title: "Privacy Manifests" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function IosAppPrivacyPolicyTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "iOS App Privacy Policy Template (App Store Ready) (2026)",
            description:
              "Free iOS app privacy policy template designed for Apple App Store approval. Covers privacy nutrition labels, App Tracking Transparency, HealthKit, Sign in with Apple, and privacy manifests.",
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
                name: "Privacy Policy for Apps",
                item: "https://ultrafastutilities.com/privacy-policy-for-apps",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "iOS App Privacy Policy Template",
                item: "https://ultrafastutilities.com/ios-app-privacy-policy-template",
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
              <Link
                href="/privacy-policy-for-apps"
                className="hover:text-blue-600 transition-colors"
              >
                Privacy Policy for Apps
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">
                iOS Template
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Copy className="w-3.5 h-3.5" />
                Free Template
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                iOS App Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
                : Passes Apple App Review on First Submission
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A free, App Store ready privacy policy template built
                specifically for iOS apps. Covers privacy nutrition labels,
                App Tracking Transparency, HealthKit, Sign in with Apple,
                and privacy manifests out of the box.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For iOS developers who need a compliant privacy policy
                without starting from scratch.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA &amp;
                Apple App Store compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/apple-app-store-privacy-policy-requirements"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                App Store Requirements
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/mobile-app-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ClipboardList className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Mobile App Template
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
                    Need a custom policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate one tailored to your iOS app
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
                <span>16 min read</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>An iOS app privacy policy must cover six Apple-specific requirements: privacy nutrition labels that match your App Store Connect declarations, App Tracking Transparency disclosure, data handling for any Apple frameworks you use (HealthKit, HomeKit, Sign in with Apple, Core Location), a privacy manifest declaration for required reason APIs, user data deletion instructions, and your contact information with an effective date.</strong>{" "}
                  Your policy must be consistent with the privacy nutrition
                  labels displayed on your App Store listing. Mismatches
                  between your policy and your nutrition labels are one of
                  the most common reasons for App Store rejection.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Building a privacy policy for your iOS app from scratch is
                time-consuming. You need to satisfy Apple&apos;s App Store
                Review Guidelines, fill out privacy nutrition labels correctly,
                handle App Tracking Transparency disclosures, and potentially
                cover GDPR and CCPA requirements. Missing any of these can
                get your app rejected during review or removed from the
                App Store after publication.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                This page provides a complete, free template built
                specifically for iOS apps. The template covers every section
                Apple expects, follows{" "}
                <Link
                  href="/apple-app-store-privacy-policy-requirements"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  App Store privacy requirements
                </Link>
                , and includes sections for HealthKit, App Tracking
                Transparency, privacy manifests, and GDPR compliance.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                If you want to understand the broader context of why apps
                need privacy policies and what triggers the requirement, read
                the{" "}
                <Link
                  href="/privacy-policy-for-apps"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  complete app privacy policy guide
                </Link>{" "}
                first. For a template that covers both iOS and Android, see the{" "}
                <Link
                  href="/mobile-app-privacy-policy-template"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  mobile app privacy policy template
                </Link>
                . This page focuses specifically on Apple-specific requirements.
              </p>

              {/* Section 1: What Apple Requires */}
              <section id="what-apple-requires" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Apple Requires in Your Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Apple requires every iOS app to have a privacy policy,
                  regardless of whether the app collects user data. The App
                  Store Review team checks your policy against your privacy
                  nutrition labels and your actual app behavior. Here is the
                  complete checklist of required and recommended sections.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Required Sections
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data collection statement:</strong> What personal
                      data your app collects, including data accessed through
                      system frameworks like Core Location, Contacts, Photos,
                      HealthKit, and any third-party SDKs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Purpose of data use:</strong> Why your app
                      collects each type of data. Every data point must have
                      a clear purpose tied to your app&apos;s functionality
                      or a legitimate business need.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Third-party sharing:</strong> Whether your
                      app shares data with any third parties, who those
                      parties are, and why data is shared. This includes
                      analytics SDKs, advertising networks, and crash
                      reporting services.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data retention and deletion:</strong> How long
                      data is stored and how users can request deletion. Apple
                      requires apps that create accounts to offer account
                      deletion within the app itself.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy nutrition label consistency:</strong> Your
                      policy must match the privacy nutrition labels you declare
                      in App Store Connect. Every data type in the labels must
                      appear in your policy and vice versa.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Contact information:</strong> A way for users to
                      reach you with privacy questions. An email address is
                      the minimum requirement.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Effective date:</strong> When the policy was last
                      updated. This helps users and reviewers verify the policy
                      is current.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Recommended Additional Sections
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>App Tracking Transparency disclosure:</strong> If
                      your app uses the ATT framework, explain what tracking
                      occurs and what happens when users opt out.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>HealthKit and sensitive data handling:</strong> If
                      your app accesses HealthKit, HomeKit, or other sensitive
                      frameworks, specific disclosures about how that data is
                      handled.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>GDPR compliance section:</strong> Legal basis for
                      processing, data retention periods, and EU user rights
                      including access, rectification, and erasure.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy manifest reference:</strong> If your app
                      includes a PrivacyInfo.xcprivacy file, a reference to
                      the required reason API categories declared in it.
                    </span>
                  </li>
                </ul>

                {/* Did you know box 1 */}
                <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900 mb-1">
                        Did you know?
                      </p>
                      <p className="text-sm text-slate-700">
                        Apple compares your privacy policy content against your
                        privacy nutrition labels during App Store review. If
                        your nutrition labels declare that you collect precise
                        location data for analytics, but your privacy policy
                        does not mention location tracking, the inconsistency
                        will flag your app for manual review and likely
                        rejection. Your template must cover every data type
                        you declare in App Store Connect.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Full Template Preview */}
              <section id="full-template-preview" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Full Template Preview
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Below is the complete privacy policy template with each
                  section shown. Bracketed text like [Your App Name]
                  indicates placeholders you need to replace with your
                  specific details. Remove any sections that do not apply
                  to your app.
                </p>

                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                  {/* Template Header */}
                  <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      iOS App Privacy Policy Template
                    </span>
                  </div>

                  <div className="p-5 space-y-6 text-sm text-slate-700 leading-relaxed">
                    {/* Section: Title */}
                    <div>
                      <p className="font-bold text-slate-900 text-base mb-2">
                        Privacy Policy for [Your App Name]
                      </p>
                      <p className="text-slate-500 text-xs">
                        Effective Date: [Date]
                      </p>
                    </div>

                    {/* Section: Introduction */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        1. Introduction
                      </p>
                      <p>
                        This privacy policy describes how [Your App Name]
                        (&quot;the App&quot;) collects, uses, stores, and
                        shares data. The App is an iOS application available
                        through the Apple App Store. By downloading and using
                        the App, you agree to the data practices described in
                        this policy.
                      </p>
                    </div>

                    {/* Section: Data Collection */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        2. Data We Collect
                      </p>
                      <p className="mb-2">
                        The App collects the following types of data:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>[Data type 1, e.g., &quot;Precise location data when you use the map feature&quot;]</li>
                        <li>[Data type 2, e.g., &quot;Health data from HealthKit with your explicit permission&quot;]</li>
                        <li>[Data type 3, e.g., &quot;Email address and name when you create an account&quot;]</li>
                        <li>[Data type 4, e.g., &quot;Usage analytics and crash reports&quot;]</li>
                      </ul>
                      <p className="mt-2">
                        The App does NOT collect: [list data types you do not
                        collect, e.g., &quot;financial information, browsing
                        history, or contacts data&quot;].
                      </p>
                    </div>

                    {/* Section: How We Use Data */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        3. How We Use Your Data
                      </p>
                      <p className="mb-2">
                        We use the collected data for the following purposes:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>[Purpose 1, e.g., &quot;To provide the App&apos;s core functionality&quot;]</li>
                        <li>[Purpose 2, e.g., &quot;To personalize your experience based on preferences&quot;]</li>
                        <li>[Purpose 3, e.g., &quot;To improve the App based on usage patterns&quot;]</li>
                      </ul>
                      <p className="mt-2">
                        We do NOT use your data for purposes not listed above.
                        HealthKit data, if collected, is used solely to provide
                        health and fitness features within the App and is never
                        used for advertising or shared with data brokers.
                      </p>
                    </div>

                    {/* Section: Third-Party Sharing */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        4. Third-Party Data Sharing
                      </p>
                      <p>
                        [Option A: &quot;The App does not share your data
                        with any third parties.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;The App shares data with the
                        following third-party services: [Service Name] for
                        [purpose, e.g., analytics, crash reporting]. These
                        services have their own privacy policies.&quot;]
                      </p>
                    </div>

                    {/* Section: Data Storage */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        5. Data Storage and Security
                      </p>
                      <p>
                        [Option A: &quot;All data is stored locally on your
                        device. No data is transmitted to external servers.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;Data is stored on secure servers
                        using [provider, e.g., AWS, Firebase]. Data synced
                        via iCloud is governed by Apple&apos;s iCloud terms
                        and stored in your personal iCloud account.&quot;]
                      </p>
                      <p className="mt-2">
                        We implement [describe security measures, e.g.,
                        &quot;encryption at rest and in transit, App Transport
                        Security, and Keychain storage for sensitive
                        credentials&quot;] to protect your data.
                      </p>
                    </div>

                    {/* Section: App Tracking Transparency */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        6. Tracking and App Tracking Transparency
                      </p>
                      <p>
                        [Option A: &quot;The App does not track you across
                        other companies&apos; apps or websites. We do not
                        use advertising identifiers or participate in
                        cross-app tracking.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;The App requests your permission to
                        track your activity across other companies&apos; apps
                        and websites via the App Tracking Transparency prompt.
                        If you allow tracking, we use [describe what tracking
                        occurs]. If you deny tracking, we do not collect any
                        cross-app data and advertising shown to you will not
                        be personalized based on your activity across other
                        apps.&quot;]
                      </p>
                    </div>

                    {/* Section: User Rights */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        7. Your Rights and Data Deletion
                      </p>
                      <p>
                        You can delete all App data at any time by [describe
                        deletion method, e.g., &quot;deleting the App, which
                        removes all locally stored data&quot; or &quot;using
                        the Delete Account option in the App settings&quot;].
                        To request deletion of any server-side data, contact
                        us at [your email].
                      </p>
                    </div>

                    {/* Section: GDPR */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        8. GDPR Compliance (EU Users)
                      </p>
                      <p>
                        If you are located in the European Union, we process
                        your data under the legal basis of [legitimate
                        interest / consent / contract performance]. You have
                        the right to access, rectify, erase, restrict
                        processing, and port your data. To exercise these
                        rights, contact us at [your email].
                      </p>
                    </div>

                    {/* Section: Changes */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        9. Changes to This Policy
                      </p>
                      <p>
                        We may update this privacy policy from time to time.
                        Changes will be posted at this URL with an updated
                        effective date. Continued use of the App after
                        changes constitutes acceptance of the updated policy.
                      </p>
                    </div>

                    {/* Section: Contact */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        10. Contact Us
                      </p>
                      <p>
                        If you have questions about this privacy policy or
                        the App&apos;s data practices, contact us at:
                        [your email address].
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mt-6 mb-4">
                  This template gives you the foundation. The sections below
                  walk you through privacy nutrition labels, iOS-specific
                  data disclosures, App Tracking Transparency wording, and
                  privacy manifests so you can customize the template for
                  your specific app.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I remove sections from the template that do not
                      apply to my app?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. If your app does not use HealthKit, remove the
                      HealthKit-specific language. If your app does not track
                      users, keep section 6 but state clearly that no tracking
                      occurs. Remove sections only if they are truly irrelevant.
                      When in doubt, keep them and customize the wording.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Should I add sections not covered in this template?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      If your app does something unusual, like processing
                      biometric data, handling payments through custom
                      processors, collecting data from children, or using
                      CallKit or SiriKit, you need additional sections. This
                      template covers standard iOS app use cases. Apps with
                      specialized data handling should add custom sections and
                      consider legal review.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Privacy Nutrition Labels Guide */}
              <section id="privacy-nutrition-labels-guide" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Privacy Nutrition Labels Guide
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Privacy nutrition labels are the data disclosures you fill
                  out in App Store Connect. They appear on your App Store
                  listing and tell users what data your app collects before
                  they download it. Your privacy policy must be consistent
                  with these labels. Here is how to fill out each category.
                </p>

                <p className="text-slate-700 leading-7 mb-6">
                  Apple organizes data into 14 categories. For each category,
                  you must declare whether data is collected, whether it is
                  linked to the user&apos;s identity, and whether it is used
                  for tracking. Here is what each category covers and how to
                  reflect it in your privacy policy.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                          Category
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[38%]">
                          What It Covers
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Privacy Policy Language
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contact Info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name, email, phone number, physical address
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          &quot;We collect your [name/email] to [purpose].&quot;
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Health &amp; Fitness
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Health data, fitness data, clinical records
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Must include HealthKit-specific restrictions (no ads, no selling)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Financial Info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Payment info, credit score, salary
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          &quot;Financial data is processed by [provider] and not stored on our servers.&quot;
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
                          Specify precise vs. coarse and when/why it is collected
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Sensitive Info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Racial/ethnic data, sexual orientation, biometric data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Requires explicit consent language and strict purpose limitation
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contacts
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Address book contacts
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          &quot;We access your contacts only to [purpose] and do not store them on our servers.&quot;
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          User Content
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Photos, videos, audio, gameplay content
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Describe what content is stored and whether it leaves the device
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Usage Data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product interaction, advertising data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          &quot;We collect usage analytics to improve app performance.&quot;
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Diagnostics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crash data, performance data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          &quot;Crash reports and performance data are collected anonymously.&quot;
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Identifiers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User ID, device ID, IDFA
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose whether identifiers are linked to the user&apos;s identity
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  For each category you declare in App Store Connect, your
                  privacy policy must include a corresponding section that
                  describes the data collected, the purpose, and whether it
                  is linked to the user&apos;s identity. If you declare a
                  category as &quot;Data Not Linked to You,&quot; your policy
                  should explain that the data is collected anonymously or
                  not associated with your identity.
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
                        Apple audits privacy nutrition labels by comparing them
                        against your app&apos;s actual network traffic and SDK
                        usage. If your app includes the Facebook SDK but your
                        nutrition labels do not declare advertising data
                        collection, Apple may reject your app or request
                        corrections. Third-party SDKs must now include their
                        own privacy manifests, and the data they collect counts
                        toward your app&apos;s nutrition label requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: iOS-Specific Data Disclosures */}
              <section id="ios-specific-data-disclosures" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  iOS-Specific Data Disclosures
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  iOS apps often use Apple-specific frameworks that have their
                  own privacy requirements. If your app uses any of the
                  frameworks below, your privacy policy must include
                  specific disclosures. Here is what to include for each one.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[18%]">
                          Framework
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[32%]">
                          Data Accessed
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[50%]">
                          Required Privacy Policy Language
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          HealthKit
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Health data, fitness data, clinical records
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Must state data is not sold, not used for advertising, and not shared for advertising or data mining. List specific HealthKit data types read and written.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          HomeKit
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Smart home device data, automation data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Must state HomeKit data is used solely to provide home automation features. Cannot be shared with third parties for advertising.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Sign in with Apple
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Apple ID, email (real or relay), name
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose what data is received from Apple, whether the relay email is used, and how the Apple ID is stored.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Core Location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Precise or coarse GPS coordinates
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Specify whether precise or coarse location is used, when it is collected (always vs. while using), and whether coordinates are sent to servers.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Push Notifications
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Device token, notification preferences
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose that a device token is sent to your server for push delivery. Explain what notification data is stored.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App Clips
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Limited data scoped to the App Clip session
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Explain that App Clip data is ephemeral and what, if anything, transfers when the user installs the full app.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          iCloud Sync
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          App data synced via CloudKit or iCloud containers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Disclose what data is synced, note that iCloud storage is governed by Apple&apos;s terms, and explain that synced data is tied to the user&apos;s Apple ID.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          StoreKit
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Purchase history, subscription status
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Explain that purchase data is processed by Apple and what transaction information your app accesses via StoreKit receipts or Transaction API.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Only include disclosures for the frameworks your app actually
                  uses. Delete rows for frameworks that are not relevant to
                  your app. If your app uses frameworks not listed here, such
                  as ARKit, CallKit, or EventKit, add a corresponding
                  disclosure section following the same pattern: what data is
                  accessed, why your app needs it, and how it is handled.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  For a broader look at mobile app requirements across both
                  platforms, see the{" "}
                  <Link
                    href="/do-mobile-apps-need-a-privacy-policy"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    do mobile apps need a privacy policy
                  </Link>{" "}
                  guide. For Android-specific disclosures, see the{" "}
                  <Link
                    href="/android-app-privacy-policy-template"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    Android app privacy policy template
                  </Link>
                  .
                </p>
              </section>

              {/* Section 5: App Tracking Transparency Wording */}
              <section id="app-tracking-transparency-wording" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  App Tracking Transparency Wording
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If your app uses the App Tracking Transparency (ATT) framework
                  to request permission to track users across other companies&apos;
                  apps and websites, your privacy policy must include specific
                  language about this tracking. Here is the exact wording to
                  include.
                </p>

                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden mb-6">
                  <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      ATT Disclosure Template
                    </span>
                  </div>
                  <div className="p-5 space-y-4 text-sm text-slate-700 leading-relaxed">
                    <div>
                      <p className="font-semibold text-slate-800 mb-2">
                        If your app DOES track users:
                      </p>
                      <p>
                        &quot;[Your App Name] requests your permission to track
                        your activity across other companies&apos; apps and websites.
                        We use this data to [describe purpose, e.g., deliver
                        personalized advertising, measure ad effectiveness].
                        When you see the tracking permission prompt, you can
                        choose to Allow or Ask App Not to Track. If you choose
                        not to allow tracking, we will not collect cross-app
                        identifiers and any advertising shown will not be
                        personalized based on your activity in other apps. You
                        can change this setting at any time in Settings &gt;
                        Privacy &amp; Security &gt; Tracking.&quot;
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 mb-2">
                        If your app does NOT track users:
                      </p>
                      <p>
                        &quot;[Your App Name] does not track your activity across
                        other companies&apos; apps or websites. We do not use the
                        Identifier for Advertisers (IDFA) or any other cross-app
                        tracking mechanism. All analytics data collected is
                        first-party and not shared with advertising networks.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The ATT disclosure in your privacy policy must be consistent
                  with two other things: the purpose string you display in the
                  ATT prompt (the NSUserTrackingUsageDescription in your
                  Info.plist) and the tracking declaration in your privacy
                  nutrition labels. If your nutrition labels say &quot;Data
                  Used to Track You,&quot; your policy must explain that tracking.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  Apple defines &quot;tracking&quot; specifically as linking
                  data collected from your app with data from other
                  companies&apos; apps, websites, or offline properties for
                  targeted advertising or advertising measurement purposes,
                  or sharing data with data brokers. If your app does not
                  meet this definition, you do not need to show the ATT prompt,
                  but you should still include a no-tracking statement in your
                  privacy policy for clarity.
                </p>
              </section>

              {/* Section 6: Privacy Manifests */}
              <section id="privacy-manifests" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Privacy Manifests
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  A privacy manifest is a PrivacyInfo.xcprivacy file that
                  declares why your app or SDK uses certain APIs that Apple
                  classifies as &quot;required reason APIs.&quot; Apple
                  requires this file for apps that use specific system APIs
                  and for all third-party SDKs distributed as XCFrameworks
                  or Swift packages.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  The required reason API categories include:
                </p>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>File timestamp APIs:</strong> APIs that access
                      file creation or modification dates (e.g.,
                      NSFileCreationDate, NSFileModificationDate)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>System boot time APIs:</strong> APIs that read
                      the system boot time (e.g., systemUptime,
                      mach_absolute_time)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Disk space APIs:</strong> APIs that check
                      available disk space (e.g., volumeAvailableCapacity)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>UserDefaults APIs:</strong> APIs that access
                      shared UserDefaults containers across app groups
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  Your privacy policy should reference the API usage declared
                  in your privacy manifest. For example, if your manifest
                  declares that you use file timestamp APIs for the purpose
                  of displaying file modification dates to the user, your
                  privacy policy should mention that your app accesses file
                  metadata for display purposes. This consistency across your
                  privacy manifest, nutrition labels, and privacy policy
                  reduces the risk of rejection during App Store review.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  Third-party SDKs in your app must also include their own
                  privacy manifests. When Xcode builds your app, it
                  aggregates all privacy manifests into a single privacy
                  report. Review this report (Product &gt; Generate Privacy
                  Report in Xcode) to make sure your privacy policy covers
                  the data practices of every SDK in your app, not just your
                  own code.
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
                        Apple now blocks App Store submissions that use
                        required reason APIs without a valid privacy manifest.
                        If your app or any third-party SDK uses UserDefaults
                        across app groups, file timestamp APIs, system boot
                        time APIs, or disk space APIs without declaring the
                        reason in a PrivacyInfo.xcprivacy file, your build
                        will be rejected with an ITMS-91053 error. Check all
                        your dependencies, not just your own code.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Using a template saves time, but only if you avoid
                  these common mistakes that cause iOS apps to get
                  rejected during App Store review.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Privacy policy does not match nutrition labels
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The most common reason for rejection. Your nutrition
                        labels in App Store Connect say you collect location
                        data, but your privacy policy does not mention location.
                        Or your policy describes collecting health data, but
                        you did not declare it in the nutrition labels. Apple
                        reviewers compare the two directly. Before submitting,
                        place your policy and your nutrition labels side by
                        side and verify every data type matches.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Using HealthKit data for advertising or selling it
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Apple strictly prohibits using HealthKit data for
                        advertising, data mining, or selling to third parties.
                        If your app accesses HealthKit data and your privacy
                        policy does not explicitly state these restrictions,
                        your app will be rejected. Even if you have no
                        intention of misusing health data, the policy must
                        include the explicit prohibition. Apple looks for this
                        specific language during review.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Missing the account deletion requirement
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        If your app allows account creation, Apple requires
                        that users can also delete their account from within
                        the app. Your privacy policy must describe this
                        deletion process. Simply saying &quot;contact us to
                        delete your data&quot; is not sufficient if your app
                        has account creation. You need an in-app deletion
                        flow and your policy must reference it.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Not disclosing third-party SDK data collection
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Every third-party SDK in your app collects data on
                        your behalf. Firebase Analytics, Facebook SDK,
                        AdMob, Crashlytics, and similar SDKs all collect user
                        data. Your privacy policy must disclose what each SDK
                        collects and for what purpose. Saying &quot;we do not
                        collect data&quot; when your app includes analytics
                        or advertising SDKs is a contradiction that Apple
                        reviewers will catch.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Missing the privacy manifest for required reason APIs
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        If your app uses required reason APIs (UserDefaults
                        across app groups, file timestamps, boot time, or disk
                        space) without a PrivacyInfo.xcprivacy file, your
                        submission will fail. But beyond the technical
                        requirement, your privacy policy should also explain
                        why your app accesses these system resources. A
                        complete privacy story means your manifest, nutrition
                        labels, and policy all tell the same story about your
                        app&apos;s data practices.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How to Customize (HowTo steps) */}
              <section className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Customize This Template
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  The template above is a starting point. To make it accurate
                  and compliant for your specific iOS app, follow these six
                  steps. Each step tells you what to look for in your app
                  and what to change in the template.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit your app&apos;s data collection
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go through every feature and list every piece of data
                        your app collects, accesses, or processes. Include data
                        from system frameworks (HealthKit, Core Location,
                        Contacts, Photos, Camera, Microphone) and from
                        third-party SDKs (analytics, crash reporting,
                        advertising). This list drives the content of every
                        section in the template.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Map data to privacy nutrition label categories
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Apple organizes data into 14 categories for nutrition
                        labels. Map every data point from step 1 into these
                        categories: Contact Info, Health &amp; Fitness,
                        Financial Info, Location, Sensitive Info, Contacts,
                        User Content, Browsing History, Search History,
                        Identifiers, Usage Data, Diagnostics, Purchases, and
                        Other Data. This mapping drives both your nutrition
                        labels and your privacy policy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Replace all placeholders with your app specifics
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go through the template and replace every bracketed
                        placeholder. Replace [Your App Name] with your actual
                        app name. Replace example data types with the real data
                        your app collects. If a section offers Option A and
                        Option B, choose the one that matches your app and
                        delete the other. Remove entire sections for frameworks
                        you do not use.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add your App Tracking Transparency disclosure
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If your app displays the ATT prompt, add a section
                        explaining what tracking occurs and what happens when
                        users opt out. If your app does not track, add a clear
                        statement confirming that. Your ATT disclosure must
                        match the tracking declaration in your nutrition labels.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Add your privacy manifest declarations
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If your app uses required reason APIs, make sure your
                        PrivacyInfo.xcprivacy file is in place and your privacy
                        policy references the same API categories. Run
                        Xcode&apos;s Generate Privacy Report to see the
                        aggregated privacy manifest for your app and all its
                        SDKs. See our{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          GDPR privacy policy template
                        </Link>{" "}
                        for the full GDPR section format.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Verify against your App Store Connect nutrition labels
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Before submitting, compare your finished privacy policy
                        against the privacy nutrition labels in App Store
                        Connect. Every data type and purpose declared in the
                        nutrition labels must appear in your policy. Every
                        data practice in your policy should match what you
                        declared in the labels. Mismatches are the top reason
                        iOS apps get flagged during review.
                      </p>
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
                      Is a free iOS app privacy policy template enough for
                      App Store approval?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A free template can pass App Store review if you
                      customize it to accurately describe your app&apos;s
                      data practices. Apple reviewers check that your policy
                      matches your nutrition labels. The template must cover
                      every data type you collect, how you use it, and whether
                      it is linked to the user. Apps handling sensitive data
                      like HealthKit should have their policy reviewed by a
                      legal professional.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What must an iOS app privacy policy include to pass
                      Apple review?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your policy must include: what data your app collects,
                      how it uses that data, whether it shares data with
                      third parties, how data is stored, how users can delete
                      their data, your contact information, and the effective
                      date. You must also disclose ATT status, explain
                      HealthKit data handling if applicable, and ensure
                      everything matches your nutrition labels.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do all iOS apps need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Apple requires every app submitted to the App
                      Store to have a privacy policy, regardless of whether
                      the app collects user data. This applies to free apps,
                      paid apps, apps with in-app purchases, and apps that
                      collect no data at all. You must provide a privacy
                      policy URL in App Store Connect before submission.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do privacy nutrition labels relate to my privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Privacy nutrition labels are the data disclosures in
                      App Store Connect that appear on your listing. They
                      summarize what data your app collects, whether it is
                      linked to the user, and whether it is used for tracking.
                      Your privacy policy must be consistent with these labels.
                      Apple reviews both for consistency, and mismatches lead
                      to rejection.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my iOS app privacy policy need to cover App
                      Tracking Transparency?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      If your app tracks users across other companies&apos;
                      apps or websites, yes. You must explain what tracking
                      occurs, why the ATT prompt appears, and what happens
                      if the user denies permission. Even if your app does
                      not track, stating that explicitly in your policy is
                      good practice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I handle HealthKit data in my privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your policy must state that HealthKit data is not sold,
                      not used for advertising, and not shared for data mining.
                      List the specific HealthKit data types your app reads
                      and writes, why access is needed, and how the data is
                      stored. Apple explicitly prohibits using HealthKit data
                      for anything other than health or fitness services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What is a privacy manifest and does my app need one?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A privacy manifest (PrivacyInfo.xcprivacy) declares
                      why your app uses required reason APIs like UserDefaults,
                      file timestamps, boot time, and disk space APIs. Apple
                      requires it for apps using these APIs and for all
                      third-party SDKs. Your privacy policy should reference
                      the same API usage to maintain consistency.
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
                      href: "/apple-app-store-privacy-policy-requirements",
                      title: "Apple App Store Privacy Requirements",
                      desc: "Everything Apple requires for App Store compliance",
                    },
                    {
                      href: "/mobile-app-privacy-policy-template",
                      title: "Mobile App Privacy Policy Template",
                      desc: "Template covering both iOS and Android requirements",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      title: "Privacy Policy for Apps",
                      desc: "Complete guide to app privacy requirements",
                    },
                    {
                      href: "/do-mobile-apps-need-a-privacy-policy",
                      title: "Do Mobile Apps Need a Privacy Policy?",
                      desc: "What triggers the requirement for mobile apps",
                    },
                    {
                      href: "/android-app-privacy-policy-template",
                      title: "Android App Privacy Policy Template",
                      desc: "Google Play Store specific template and requirements",
                    },
                    {
                      href: "/privacy-policy-for-google-play",
                      title: "Privacy Policy for Google Play",
                      desc: "Google Play data safety section requirements",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      title: "GDPR Privacy Policy Template",
                      desc: "All 12 required GDPR sections with a compliant template",
                    },
                    {
                      href: "/generate",
                      title: "Generate Your Privacy Policy",
                      desc: "Answer a few questions and get a custom policy in seconds",
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
                  Want a Policy Customized for Your iOS App?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Skip the manual customization. Answer a few questions
                  about your iOS app and get a privacy policy tailored to
                  your specific frameworks, data handling, and compliance
                  needs. Takes under 60 seconds.
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
