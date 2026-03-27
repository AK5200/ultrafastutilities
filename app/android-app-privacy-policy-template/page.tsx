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
    "Android App Privacy Policy Template (Google Play Ready) (2026) | ultrafastutilities",
  description:
    "Free Android app privacy policy template that passes Google Play review. Covers Data Safety section, permissions disclosures, Firebase analytics, AdMob, and Play Console requirements.",
  keywords:
    "android app privacy policy template, google play privacy policy template, android privacy policy example, play store privacy policy, android app data safety",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/android-app-privacy-policy-template",
  },
  openGraph: {
    title:
      "Android App Privacy Policy Template (Google Play Ready) (2026) | ultrafastutilities",
    description:
      "Free Android app privacy policy template that passes Google Play review. Covers Data Safety section, permissions disclosures, Firebase analytics, AdMob, and Play Console requirements.",
    url: "https://ultrafastutilities.com/android-app-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Android App Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Android App Privacy Policy Template (Google Play Ready) (2026)",
    description:
      "Free Android app privacy policy template that passes Google Play review. Covers Data Safety section, permissions disclosures, Firebase analytics, AdMob, and Play Console requirements.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a free Android app privacy policy template legally valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A free template can be legally valid if you customize it to accurately reflect your app's actual data handling practices. The key is accuracy and completeness, not where the template came from. A template filled in with truthful, specific details about your app's data collection, storage, and sharing is far better than no policy at all. However, apps handling sensitive data categories like health, financial, or children's information should have their policy reviewed by a legal professional.",
      },
    },
    {
      "@type": "Question",
      name: "What sections does Google Play require in a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Play requires your privacy policy to cover: what personal and sensitive user data your app collects, how your app uses that data, how data is shared with third parties, how users can request deletion of their data, your data retention practices, and your contact information. Your privacy policy must also be consistent with your Data Safety section declarations in the Play Console. If your app targets children, additional COPPA and Families Policy disclosures are required.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Data Safety section relate to my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Data Safety section in the Google Play Console is a structured summary of your data practices that appears on your app's store listing. It must be consistent with your full privacy policy. When you fill out the Data Safety form, you declare which data types your app collects, whether data is shared with third parties, and your security practices. Google reviews both your Data Safety declarations and your privacy policy, and any discrepancies can result in enforcement action or app removal.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if my Android app collects no data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your app truly collects no user data and uses no third-party SDKs that collect data, you may not be strictly required to have a privacy policy by Google Play. However, Google strongly recommends all apps have one. If your app uses any analytics SDK like Firebase Analytics, any advertising SDK like AdMob, or any crash reporting tool like Crashlytics, those SDKs collect data on your behalf and you must have a privacy policy. Most Android apps use at least one such SDK.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the same privacy policy for my Android and iOS app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use a single privacy policy that covers both platforms, but it must address the specific requirements of both Google Play and the Apple App Store. Google Play requires Data Safety section consistency, while Apple requires App Tracking Transparency and App Privacy Label accuracy. Your policy should mention platform-specific permissions, SDKs, and data handling differences. Many developers maintain one policy that covers both, with platform-specific sections where needed.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my privacy policy does not match my Data Safety section?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Play reviews both your Data Safety declarations and your privacy policy for consistency. If they find discrepancies, your app can face enforcement actions including warning notices, removal of your app from the Play Store, or account suspension for repeated violations. Google has automated and manual review processes that compare your Data Safety form entries against your privacy policy content. Always update both your Data Safety section and privacy policy simultaneously when your data practices change.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my Android app privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Update your privacy policy whenever your app's data handling changes. This includes adding new permissions, integrating new third-party SDKs, changing how data is stored or shared, or modifying data retention periods. You should also review your policy when privacy laws change or when Google updates its Play Store policies. At minimum, review your policy with every app update that modifies data collection or permissions. Remember to update your Data Safety section in the Play Console at the same time.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create an Android App Privacy Policy for Google Play",
  description:
    "Follow these six steps to create a privacy policy for your Android app that meets Google Play requirements and passes the review process.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your AndroidManifest.xml permissions",
      text: "Open your AndroidManifest.xml and list every permission your app declares with uses-permission tags. For each permission, document what user data it gives your app access to. This list determines which sections of your privacy policy need to address specific data types.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Inventory all third-party SDKs in your app",
      text: "Check your build.gradle dependencies for every third-party SDK your app includes. Firebase Analytics, AdMob, Crashlytics, Google Maps, and similar SDKs collect data on your behalf. For each SDK, document what data it collects, where it sends that data, and what its own privacy policy says. Your privacy policy must disclose every SDK that handles user data.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Map your data flows from collection to storage",
      text: "Trace every piece of user data your app touches. Document what data is collected through the UI, what is collected automatically by SDKs, what is stored locally on the device, what is sent to your servers, and what is shared with third-party services. For each data flow, note the data type, its source, its destination, and whether it leaves the device.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Replace all placeholders with your app specifics",
      text: "Go through the template and replace every bracketed placeholder with specific details about your app. Replace [Your App Name] with your actual app name. Replace generic data descriptions with the exact data types your app collects. Remove sections that do not apply and add details for anything your app does that the template does not cover.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Fill out the Data Safety section in Play Console",
      text: "Use your completed privacy policy as a guide to fill out the Data Safety form in the Google Play Console. For each data type category, declare whether your app collects it, whether it is shared with third parties, whether it is optional or required, and your data retention practices. Every declaration must match what your privacy policy states.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Verify consistency between your policy and Data Safety form",
      text: "Compare your finished privacy policy line by line against your Data Safety section declarations. Every data type in the Data Safety form must appear in your policy, and every data practice in your policy should be reflected in the form. Test your privacy policy URL to ensure it loads without requiring a login. Mismatches between the two are the top reason for Play Store enforcement actions.",
    },
  ],
};

const tocSections = [
  { id: "what-google-play-requires", title: "What Google Play Requires" },
  { id: "full-template-preview", title: "Full Template Preview" },
  { id: "data-safety-section-guide", title: "Data Safety Section Guide" },
  { id: "android-permissions-disclosure", title: "Android Permissions Disclosure" },
  { id: "common-android-sdks", title: "Common Android SDKs" },
  { id: "families-policy", title: "Families Policy" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function AndroidAppPrivacyPolicyTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Android App Privacy Policy Template (Google Play Ready) (2026)",
            description:
              "Free Android app privacy policy template that passes Google Play review. Covers Data Safety section, permissions disclosures, Firebase analytics, AdMob, and Play Console requirements.",
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
                name: "Privacy Policy for Apps",
                item: "https://ultrafastutilities.com/privacy-policy-for-apps",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Android App Privacy Policy Template",
                item: "https://ultrafastutilities.com/android-app-privacy-policy-template",
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
                Android Template
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Copy className="w-3.5 h-3.5" />
                Free Template
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Android App Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
                : Meets Google Play Data Safety Requirements
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A free, Google Play ready privacy policy template built
                specifically for Android apps. Covers Data Safety section
                requirements, permissions disclosures, Firebase analytics,
                AdMob, and Play Console compliance out of the box.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Android developers who need a compliant privacy policy
                that passes Google Play review without starting from scratch.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                Google Play compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-google-play"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Google Play Guide
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
                    Generate one tailored to your Android app
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
                  <strong>Google Play requires every Android app that collects personal or sensitive user data to have a privacy policy. Your policy must disclose what data your app collects, how it is used, how it is shared with third parties, and how users can request deletion.</strong>{" "}
                  Your privacy policy must also be consistent with your Data
                  Safety section declarations in the Play Console. Apps that
                  target children must additionally comply with the Families
                  Policy and COPPA requirements.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Building an Android app privacy policy from scratch is
                time-consuming. You need to account for Google Play Data Safety
                requirements, Android permissions disclosures, third-party SDK
                data collection, and potentially GDPR and CCPA compliance.
                Missing any of these can result in your app being rejected
                during review or removed from the Play Store after publication.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                This page provides a complete, free template that you can
                copy, customize for your specific Android app, and publish
                today. The template covers every section Google Play expects,
                follows{" "}
                <Link
                  href="/privacy-policy-for-google-play"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Google Play privacy requirements
                </Link>
                , and includes optional GDPR and CCPA sections for apps
                with users in regulated regions.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                If you want to understand the broader context of why mobile
                apps need privacy policies and what triggers the requirement,
                read the{" "}
                <Link
                  href="/do-mobile-apps-need-a-privacy-policy"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  do mobile apps need a privacy policy
                </Link>{" "}
                guide first. This page focuses specifically on giving you a
                ready-to-use template for Android apps on Google Play.
              </p>

              {/* Section 1: What Google Play Requires */}
              <section id="what-google-play-requires" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Google Play Requires
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Google Play requires a privacy policy for any app that
                  accesses personal or sensitive user data. This includes
                  data collected through Android permissions, third-party
                  SDKs, and your own server-side collection. Your privacy
                  policy must map directly to your Data Safety section
                  declarations in the Play Console. Here is what Google
                  expects.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Required Data Safety Disclosures
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data collection:</strong> Declare every data type
                      your app collects, including data collected automatically
                      by third-party SDKs like Firebase Analytics, AdMob, and
                      Crashlytics. Your policy must list each data type and
                      explain why it is collected.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data sharing:</strong> Disclose whether your app
                      transfers data to third parties. This includes analytics
                      providers, advertising networks, crash reporting services,
                      and any external APIs your app communicates with.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data handling practices:</strong> Describe whether
                      data is encrypted in transit, whether users can request
                      deletion, and your data retention periods. Google requires
                      you to declare these in the Data Safety form and your
                      policy must match.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Purpose of data use:</strong> For each data type,
                      explain the specific purpose. Google expects purposes to
                      be tied to app functionality, analytics, advertising,
                      fraud prevention, security, or account management.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>User data deletion:</strong> Provide a mechanism
                      for users to request deletion of their data. Google Play
                      now requires apps to offer a data deletion option, either
                      in-app or through a web form linked from your store listing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Contact information:</strong> Include a way for
                      users to reach you with privacy questions. An email
                      address is the minimum requirement.
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
                      <strong>Android permissions disclosure:</strong> A table
                      mapping each Android permission your app requests to what
                      data it accesses and why your app needs it.
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
                      <strong>CCPA compliance section:</strong> Categories of
                      personal information collected and the right to opt out
                      of data sales.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Families Policy compliance:</strong> If your app
                      targets children under 13, include COPPA disclosures,
                      parental consent mechanisms, and a statement of compliance
                      with Google&apos;s Families Policy.
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
                        Google Play uses both automated and manual review
                        processes to compare your Data Safety section
                        declarations against your privacy policy content. If
                        your Data Safety form declares that you collect location
                        data but your privacy policy does not mention location
                        access, the mismatch will flag your app for review and
                        potential enforcement action. Your privacy policy and
                        Data Safety section must be consistent at all times.
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
                      Android App Privacy Policy Template
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
                        shares data. The App is an Android application
                        available through the Google Play Store. By installing
                        and using the App, you agree to the data practices
                        described in this policy.
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
                        <li>[Data type 1, e.g., &quot;Device identifiers and advertising ID&quot;]</li>
                        <li>[Data type 2, e.g., &quot;Approximate location data for localized content&quot;]</li>
                        <li>[Data type 3, e.g., &quot;App interaction data and usage statistics&quot;]</li>
                        <li>[Data type 4, e.g., &quot;Crash logs and performance diagnostics&quot;]</li>
                      </ul>
                      <p className="mt-2">
                        The App does NOT collect: [list data types you do not
                        collect, e.g., &quot;financial information, health data,
                        emails, or text message contents&quot;].
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
                        <li>[Purpose 2, e.g., &quot;To improve app performance and fix bugs&quot;]</li>
                        <li>[Purpose 3, e.g., &quot;To display relevant advertisements&quot;]</li>
                        <li>[Purpose 4, e.g., &quot;To analyze usage patterns and improve the user experience&quot;]</li>
                      </ul>
                    </div>

                    {/* Section: Third-Party Sharing */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        4. Third-Party Data Sharing
                      </p>
                      <p>
                        [Option A: &quot;The App does not share your personal
                        data with any third parties.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;The App shares data with the
                        following third-party services:&quot;]
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                        <li>[e.g., &quot;Firebase Analytics for usage analytics&quot;]</li>
                        <li>[e.g., &quot;AdMob for serving advertisements&quot;]</li>
                        <li>[e.g., &quot;Firebase Crashlytics for crash reporting&quot;]</li>
                      </ul>
                      <p className="mt-2">
                        Each third-party service has its own privacy policy
                        governing how it handles data received from our App.
                      </p>
                    </div>

                    {/* Section: Data Storage */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        5. Data Storage and Security
                      </p>
                      <p>
                        [Option A: &quot;All data is stored locally on your
                        device using SharedPreferences or a local Room
                        database. No data is transmitted to external
                        servers.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;Data is stored on secure servers
                        provided by [hosting provider]. Data in transit is
                        encrypted using HTTPS/TLS. Data at rest is encrypted
                        using [encryption method].&quot;]
                      </p>
                      <p className="mt-2">
                        We implement [describe security measures, e.g.,
                        &quot;encryption in transit via HTTPS, Android
                        Keystore for sensitive credentials, and server-side
                        encryption at rest&quot;] to protect your data.
                      </p>
                    </div>

                    {/* Section: Data Retention and Deletion */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        6. Data Retention and Deletion
                      </p>
                      <p>
                        We retain your data for [retention period, e.g.,
                        &quot;as long as you have the App installed&quot; or
                        &quot;90 days after account deletion&quot;].
                      </p>
                      <p className="mt-2">
                        You can delete your data by [describe deletion method,
                        e.g., &quot;uninstalling the App, which removes all
                        locally stored data&quot; or &quot;using the delete
                        account option in the App settings&quot;]. To request
                        deletion of server-side data, contact us at [your
                        email] or visit [data deletion URL].
                      </p>
                    </div>

                    {/* Section: GDPR */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        7. GDPR Compliance (EU Users)
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

                    {/* Section: Children */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        8. Children&apos;s Privacy
                      </p>
                      <p>
                        [Option A: &quot;This App is not directed at children
                        under 13. We do not knowingly collect personal
                        information from children. If you believe a child has
                        provided us with personal data, contact us and we will
                        delete it.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;This App is designed for use by
                        children and complies with COPPA and Google&apos;s
                        Families Policy. We collect only [specify minimal data]
                        and require verifiable parental consent before
                        collecting any personal information from children
                        under 13.&quot;]
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
                        effective date. Continued use of the App after changes
                        constitutes acceptance of the updated policy.
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
                  walk you through the Data Safety form, Android permissions,
                  and common SDKs to help you customize every detail.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I remove sections from the template that do not
                      apply to my app?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. If your app does not share data with third parties,
                      you should still include section 4 but state clearly
                      that no data is shared. If your app does not target
                      children, the children&apos;s privacy section can be
                      simplified to a statement that your app is not directed
                      at children under 13. When in doubt, keep sections and
                      adjust the wording rather than removing them entirely.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Should I include SDK-specific disclosures in my
                      privacy policy?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. Every third-party SDK in your app that collects
                      user data must be disclosed. Firebase Analytics, AdMob,
                      Crashlytics, Google Maps SDK, and similar libraries all
                      collect data on your behalf. Your privacy policy should
                      name each SDK, describe what data it collects, and link
                      to its own privacy policy. This is also required for
                      accurate Data Safety section declarations.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Data Safety Section Guide */}
              <section id="data-safety-section-guide" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Safety Section Guide
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The Data Safety section in the Google Play Console requires
                  you to declare your data practices across specific data type
                  categories. For each category, you must indicate whether your
                  app collects that data type, whether it is shared with third
                  parties, whether collection is required or optional, and the
                  purpose. Here is how to fill out each category.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Data Category
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Data Types Included
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Common Collection Triggers
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Policy Must Mention
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Approximate location, precise location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION, Google Maps SDK, IP-based location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          What location data is collected, precision level, and why
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Personal Info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name, email, address, phone number, user IDs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Account creation, sign-in flows, contact forms, Firebase Auth
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Which personal fields are collected and the purpose for each
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Financial Info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Purchase history, credit info, payment info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Play Billing, in-app purchases, subscription management
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          What financial data is processed and how it is secured
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Photos and Videos
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Photos, videos
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          CAMERA permission, READ_EXTERNAL_STORAGE, photo upload features
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Whether media is stored locally, uploaded, or shared
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App Activity
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          App interactions, search history, in-app actions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Firebase Analytics, custom event logging, screen tracking
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          What interactions are tracked and how analytics data is used
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Device or Other IDs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Device ID, advertising ID, Android ID
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          AdMob, Firebase Analytics, crash reporting, attribution SDKs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Which identifiers are collected, by which SDKs, and the purpose
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App Info and Performance
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crash logs, diagnostics, performance data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Firebase Crashlytics, Firebase Performance, ANR reporting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          What diagnostic data is collected and whether it includes device info
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  When filling out the Data Safety form, remember that data
                  collected by third-party SDKs counts as data collected by
                  your app. If Firebase Analytics collects device identifiers,
                  you must declare device ID collection in your Data Safety
                  section even if your own code never reads that data directly.
                  Check each SDK&apos;s documentation for its data collection
                  details.
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
                        Google provides a Data Safety form helper tool in the
                        Play Console that shows you which data types are
                        commonly collected by popular SDKs. Firebase, AdMob,
                        and other Google SDKs now include pre-built Data Safety
                        section guidance in their documentation. Check each
                        SDK&apos;s documentation page for a &quot;Data Safety
                        section information&quot; section that tells you
                        exactly what to declare.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Android Permissions Disclosure */}
              <section id="android-permissions-disclosure" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Android Permissions Disclosure
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Include a permissions disclosure in your privacy policy to
                  explain each Android permission your app requests, what data
                  it accesses, and why your app needs it. This builds user
                  trust and helps during Google Play review. Replace the
                  example entries with your actual permissions.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[22%]">
                          Permission
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[28%]">
                          Data Accessed
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Why We Need It
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Data Leaves Device?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          INTERNET
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Network communication data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To fetch content from our servers and
                          send analytics data&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (to app servers)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          ACCESS_FINE_LOCATION
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Precise GPS location coordinates
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To show nearby points of interest on
                          the map&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          CAMERA
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Photos and video from the device camera
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To let users take profile photos or
                          scan QR codes&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          READ_CONTACTS
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contact names, phone numbers, email addresses
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To help you invite friends to the
                          app&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          READ_PHONE_STATE
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Device ID, phone number, call state
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To pause media playback during incoming
                          calls&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          RECORD_AUDIO
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Audio recordings from the device microphone
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To enable voice search or voice
                          messages&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          READ_EXTERNAL_STORAGE
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Files, photos, and media on device storage
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To let users select files or images to
                          upload&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [Yes/No, and where]
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          RECEIVE_BOOT_COMPLETED
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Device boot event notification
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          [e.g., &quot;To restart scheduled background tasks
                          after device reboot&quot;]
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Only include the permissions your app actually requests.
                  Delete rows for permissions your app does not use. If your
                  app uses runtime permissions (requested at the time of use
                  rather than at install), note that in your policy. Users
                  should understand when and why each permission prompt
                  appears. For a complete guide on app privacy requirements,
                  see the{" "}
                  <Link
                    href="/privacy-policy-for-apps"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    privacy policy for apps
                  </Link>{" "}
                  guide.
                </p>
              </section>

              {/* Section 5: Common Android SDKs */}
              <section id="common-android-sdks" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Android SDKs
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Most Android apps include third-party SDKs that collect data
                  on your behalf. Your privacy policy must disclose each SDK,
                  what data it collects, and its purpose. Here are the most
                  common Android SDKs and what you need to declare for each.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[18%]">
                          SDK
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Data Collected
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Purpose
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[27%]">
                          Data Safety Declaration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Firebase Analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          App interactions, device info, advertising ID, screen views, session data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Usage analytics, audience insights, event tracking
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          App activity (collected, shared), Device IDs (collected)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          AdMob
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Advertising ID, device info, IP address, interaction data, approximate location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Ad serving, ad personalization, ad performance measurement
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Device IDs (collected, shared), Location (collected), App activity (collected)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Crashlytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crash logs, stack traces, device model, OS version, app state at crash time
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crash reporting, stability monitoring, bug fixing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          App info and performance (collected), Device IDs (collected)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Google Maps
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Location data, map interaction data, device info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Map display, geocoding, directions, location-based features
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Location (collected, shared), App activity (collected)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          ML Kit
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Images, text, or other input data processed by ML models
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          On-device machine learning (text recognition, face detection, barcode scanning)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Varies by API used; on-device processing may not require data sharing declaration
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Play Billing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Purchase history, subscription status, transaction IDs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          In-app purchases, subscription management, purchase verification
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Financial info (collected), Purchase history (collected)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          WorkManager
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No user data collected directly; schedules background tasks
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Background task scheduling, deferred work execution
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No additional Data Safety declaration needed for WorkManager itself
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Room
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No user data sent externally; local SQLite database wrapper
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Local data persistence, offline storage, structured data caching
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          No additional Data Safety declaration needed; data stays on device
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Check your build.gradle file for all SDK dependencies. Even
                  if you did not add a data-collecting SDK directly, transitive
                  dependencies from other libraries can include them. Run a
                  dependency tree analysis to identify every SDK in your final
                  APK. For{" "}
                  <Link
                    href="/privacy-policy-for-firebase"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    Firebase-specific privacy policy guidance
                  </Link>
                  , see our dedicated guide.
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
                        Google now requires SDK developers to publish their own
                        Data Safety guidance. Firebase, AdMob, and other major
                        SDKs include a &quot;Data disclosed by this SDK&quot;
                        section in their documentation that tells you exactly
                        what data types to declare in your Data Safety form.
                        Using this documentation as a checklist when writing
                        your privacy policy ensures you do not miss any data
                        collection by third-party code running inside your app.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Families Policy */}
              <section id="families-policy" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Families Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If your Android app targets children under 13 or is listed
                  in the &quot;Family&quot; section of the Play Store, you must
                  comply with Google&apos;s Families Policy and the
                  Children&apos;s Online Privacy Protection Act (COPPA). Your
                  privacy policy needs additional sections to address these
                  requirements.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  COPPA and Families Policy Requirements
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>No behavioral advertising:</strong> Apps in the
                      Families program must not display behaviorally targeted
                      ads to children. If you use AdMob, you must configure
                      it to serve only child-directed ads using the tag for
                      child-directed treatment.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Minimal data collection:</strong> Collect only
                      data that is strictly necessary for the app to function.
                      Do not collect persistent identifiers like advertising
                      IDs from children unless needed for the app&apos;s core
                      purpose. Your privacy policy must state exactly what
                      minimal data is collected and why.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Verifiable parental consent:</strong> If your app
                      collects personal information from children, you must
                      obtain verifiable parental consent before collection.
                      Your privacy policy must describe your consent mechanism
                      and explain how parents can review, modify, or delete
                      their child&apos;s data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Approved SDKs only:</strong> Apps in the Families
                      program can only use SDKs that are self-certified as
                      compliant with the Families Policy. Check Google&apos;s
                      list of Families self-certified ads SDKs before including
                      any advertising library.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy policy language:</strong> Your privacy
                      policy must clearly state that the app is directed at
                      children, what data is collected from children, how that
                      data is used, and that parental consent is required.
                      The policy should be written in plain language that
                      parents can easily understand.
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 leading-7 mb-4">
                  If your app has a mixed audience (both children and adults),
                  you must still comply with the Families Policy for the
                  portion of your audience that is under 13. Implement an
                  age gate and apply child-safe data handling when the user
                  is identified as a child.
                </p>
              </section>

              {/* Section 7: Common Mistakes */}
              <section id="common-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Using a template saves time, but only if you avoid these
                  common mistakes that cause Android apps to get flagged or
                  removed from Google Play.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Data Safety section does not match the
                        privacy policy
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The most common issue. Your Data Safety form in the
                        Play Console declares one set of data practices, but
                        your privacy policy describes something different.
                        Google compares both and flags discrepancies. If your
                        Data Safety section says you collect location data but
                        your privacy policy does not mention location, your app
                        will face enforcement action. Always update both
                        simultaneously.
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
                        Many developers forget that Firebase Analytics, AdMob,
                        Crashlytics, and other SDKs collect data on their
                        behalf. Your privacy policy must disclose every SDK
                        that handles user data, what it collects, and why.
                        Claiming &quot;we do not collect data&quot; when your
                        app includes Firebase Analytics is inaccurate and will
                        cause issues during review.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Privacy policy URL is broken or requires login
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Google Play requires your privacy policy to be
                        accessible at a public URL without any authentication.
                        If your privacy policy link returns a 404 error, is
                        behind a login wall, or redirects to a generic
                        homepage, your app will be flagged. Test your privacy
                        policy URL in an incognito browser window before
                        submitting your app. The link must remain active for
                        as long as your app is published.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: No data deletion mechanism provided
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Google Play now requires apps that collect user data to
                        offer a way for users to request data deletion. Your
                        privacy policy must describe the deletion process. This
                        can be an in-app deletion option, a web form, or an
                        email address where users can send deletion requests.
                        Apps without a data deletion mechanism face removal
                        from the Play Store.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Using a generic website privacy policy for
                        an Android app
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        A website privacy policy covers cookies, web analytics,
                        and contact forms. It does not cover Android
                        permissions, Data Safety section declarations,
                        third-party SDK disclosures, or Google Play-specific
                        requirements. Your Android app privacy policy must
                        address mobile-specific data collection patterns. Use
                        a template built for Android apps, like the one on
                        this page, or check our{" "}
                        <Link
                          href="/mobile-app-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800"
                        >
                          mobile app privacy policy template
                        </Link>{" "}
                        for a cross-platform option.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* HowTo Section */}
              <section className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create Your Android App Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Follow these six steps to customize the template above for
                  your specific Android app. Each step tells you what to look
                  for in your app and what to change in the template.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Audit your AndroidManifest.xml permissions
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Open your AndroidManifest.xml and list every permission
                        declared with uses-permission tags. Each permission
                        determines what user data your app can access. This
                        list drives the content of your data collection and
                        permissions disclosure sections. If you request
                        ACCESS_FINE_LOCATION, your policy must explain why
                        your app needs precise location data.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Inventory all third-party SDKs
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Check your build.gradle dependencies for every
                        third-party SDK. Firebase Analytics, AdMob,
                        Crashlytics, Google Maps, and similar libraries all
                        collect data on your behalf. For each SDK, document
                        what data it collects, where it sends data, and check
                        its documentation for Data Safety section guidance.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Map your data flows from collection to storage
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Trace every piece of user data your app touches. What
                        does the app collect through the UI? What is collected
                        automatically by SDKs? What is stored locally on the
                        device? What is sent to your servers or third-party
                        services? For each data flow, note the data type, its
                        origin, its destination, and whether it leaves the
                        device.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Replace all placeholders with your app specifics
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Go through the template and replace every bracketed
                        placeholder. Replace [Your App Name] with your actual
                        app name. Replace example data types with the real
                        data your app collects. If a section offers Option A
                        and Option B, choose the one that matches your app
                        and delete the other. Search for every bracket
                        character before publishing to ensure no placeholders
                        remain.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Fill out the Data Safety section in Play Console
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Use your completed privacy policy as a guide to fill
                        out the Data Safety form in the Google Play Console.
                        For each data type category, declare whether your app
                        collects it, whether it is shared, whether collection
                        is required or optional, and your retention practices.
                        Every declaration must match your privacy policy.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Verify consistency between policy and Data Safety form
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Compare your finished privacy policy line by line
                        against your Data Safety section declarations. Every
                        data type in the Data Safety form must appear in your
                        policy. Test your privacy policy URL in an incognito
                        browser to confirm it loads without login. Mismatches
                        between the two are the top reason for Play Store
                        enforcement actions related to privacy.
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
                      Is a free Android app privacy policy template legally
                      valid?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A free template can be legally valid if you customize
                      it to accurately reflect your app&apos;s actual data
                      handling. The key is accuracy, not where the template
                      came from. A template filled in with truthful, specific
                      details is far better than no policy at all. Apps
                      handling sensitive data like health, financial, or
                      children&apos;s information should have their policy
                      reviewed by a legal professional.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What sections does Google Play require in a privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Google Play requires your privacy policy to cover what
                      personal and sensitive data your app collects, how data
                      is used, how data is shared with third parties, how
                      users can request deletion, your data retention
                      practices, and your contact information. The policy
                      must be consistent with your Data Safety section
                      declarations. Apps targeting children need additional
                      COPPA and Families Policy disclosures.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How does the Data Safety section relate to my privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      The Data Safety section in the Play Console is a
                      structured summary of your data practices that appears
                      on your store listing. It must be consistent with your
                      full privacy policy. Google reviews both and flags
                      discrepancies. Always update your Data Safety form and
                      your privacy policy at the same time when your data
                      practices change.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a privacy policy if my Android app collects
                      no data?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      If your app truly collects no user data and uses no
                      third-party SDKs that collect data, you may not be
                      strictly required to have one. However, Google strongly
                      recommends all apps have a privacy policy. If your app
                      uses Firebase Analytics, AdMob, Crashlytics, or any
                      similar SDK, those collect data on your behalf and you
                      must have a policy. Most Android apps use at least one
                      data-collecting SDK.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can I use the same privacy policy for my Android and
                      iOS app?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      You can use a single policy that covers both platforms,
                      but it must address the requirements of both Google Play
                      and the{" "}
                      <Link
                        href="/apple-app-store-privacy-policy-requirements"
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        Apple App Store
                      </Link>
                      . Google requires Data Safety section consistency, while
                      Apple requires App Privacy Label accuracy. Your policy
                      should mention platform-specific permissions and SDKs.
                      Many developers maintain one policy with platform-specific
                      sections. See the{" "}
                      <Link
                        href="/ios-app-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        iOS app privacy policy template
                      </Link>{" "}
                      for Apple-specific guidance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if my privacy policy does not match my
                      Data Safety section?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Google reviews both for consistency. Discrepancies can
                      result in warning notices, app removal from the Play
                      Store, or account suspension for repeated violations.
                      Google uses both automated and manual review processes
                      to compare your Data Safety form against your privacy
                      policy content. Always update both simultaneously when
                      your data practices change.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How often should I update my Android app privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Update it whenever your app&apos;s data handling changes:
                      new permissions, new SDKs, different storage methods,
                      or new data types. Also review when privacy laws change
                      or Google updates Play Store policies. At minimum,
                      review with every app update that modifies data
                      collection. Remember to update your Data Safety section
                      at the same time.
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
                      href: "/privacy-policy-for-google-play",
                      title: "Privacy Policy for Google Play",
                      desc: "Complete guide to Google Play privacy requirements",
                    },
                    {
                      href: "/mobile-app-privacy-policy-template",
                      title: "Mobile App Privacy Policy Template",
                      desc: "Cross-platform template for iOS and Android apps",
                    },
                    {
                      href: "/privacy-policy-for-apps",
                      title: "Privacy Policy for Apps",
                      desc: "App store requirements for mobile applications",
                    },
                    {
                      href: "/do-mobile-apps-need-a-privacy-policy",
                      title: "Do Mobile Apps Need a Privacy Policy?",
                      desc: "When and why your mobile app requires one",
                    },
                    {
                      href: "/ios-app-privacy-policy-template",
                      title: "iOS App Privacy Policy Template",
                      desc: "Apple App Store ready template for iOS apps",
                    },
                    {
                      href: "/apple-app-store-privacy-policy-requirements",
                      title: "Apple App Store Privacy Requirements",
                      desc: "Everything Apple requires for App Store compliance",
                    },
                    {
                      href: "/privacy-policy-for-firebase",
                      title: "Privacy Policy for Firebase",
                      desc: "Firebase-specific privacy policy guidance and disclosures",
                    },
                    {
                      href: "/generate",
                      title: "Generate Your Privacy Policy",
                      desc: "Create a customized policy in under 60 seconds",
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
                  Want a Policy Customized for Your Android App?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Skip the manual customization. Answer a few questions
                  about your Android app and get a privacy policy tailored
                  to your specific permissions, SDKs, and Data Safety
                  requirements. Takes under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, and Google Play requirements &middot;
                  Customized for Android apps &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
