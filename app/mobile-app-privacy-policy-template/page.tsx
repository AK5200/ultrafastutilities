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
    "Mobile App Privacy Policy Template (Free, Copy-Paste Ready) (2026) | ultrafastutilities",
  description:
    "Free mobile app privacy policy template that meets Apple App Store and Google Play requirements. Covers data collection, third-party SDKs, push notifications, analytics, and in-app purchases.",
  keywords:
    "mobile app privacy policy template, app privacy policy template, free app privacy policy, mobile app privacy policy example, app privacy policy generator",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/mobile-app-privacy-policy-template",
  },
  openGraph: {
    title:
      "Mobile App Privacy Policy Template (Free, Copy-Paste Ready) (2026) | ultrafastutilities",
    description:
      "Free mobile app privacy policy template that meets Apple App Store and Google Play requirements. Covers data collection, third-party SDKs, push notifications, analytics, and in-app purchases.",
    url: "https://ultrafastutilities.com/mobile-app-privacy-policy-template",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Privacy Policy Template | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mobile App Privacy Policy Template (Free, Copy-Paste Ready) (2026)",
    description:
      "Free mobile app privacy policy template that meets Apple App Store and Google Play requirements. Covers data collection, third-party SDKs, push notifications, analytics, and in-app purchases.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a free mobile app privacy policy template legally valid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A free template can be legally valid if you customize it to accurately describe your app's actual data practices. The legal validity depends on accuracy and completeness, not on whether you paid for the template. A well-customized free template is better than no policy at all. However, apps handling sensitive data such as health, financial, or children's information should have their policy reviewed by a legal professional before publishing.",
      },
    },
    {
      "@type": "Question",
      name: "What must a mobile app privacy policy template include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mobile app privacy policy template must include: what personal data your app collects, how it uses that data, which third-party SDKs and services receive data, how data is stored and secured, how users can delete their data or account, whether children can use the app, your contact information, and the effective date. For Apple App Store compliance, you also need to disclose tracking and App Tracking Transparency details. For Google Play, you need a data safety section that matches your policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do both free and paid apps need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both Apple and Google require a privacy policy for all apps submitted to their stores, regardless of whether the app is free or paid. Apple requires a privacy policy URL for every app on the App Store. Google Play requires a privacy policy for any app that accesses sensitive user data or device permissions. In practice, every app should have one because even basic functionality like analytics or crash reporting involves data collection.",
      },
    },
    {
      "@type": "Question",
      name: "How do I customize this template for my specific app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start by listing every SDK and third-party service your app integrates. Then identify all data your app collects, including device identifiers, location, contacts, photos, or usage analytics. Replace every placeholder in the template with your specific details. Remove sections that do not apply. If your app includes in-app purchases, push notifications, or account creation, make sure those sections are filled in. Finally, verify that your policy matches both the Apple privacy nutrition label and the Google Play data safety form.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use one privacy policy for both my iOS and Android apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if both apps collect the same data and use the same SDKs. Most developers maintain a single privacy policy that covers both platforms. However, if your iOS and Android versions use different analytics services, different ad networks, or collect different data types, you should either create separate policies or clearly indicate which sections apply to which platform. The policy must accurately describe each platform's data practices.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my app is rejected for privacy policy issues?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If Apple rejects your app, you will receive a specific rejection reason under guideline 5.1.1 or 5.1.2 explaining what is missing from your privacy policy. You can fix the issue and resubmit. If Google Play flags your app, you may receive a policy violation notice with a deadline to fix it. Repeated violations on either platform can lead to app removal and developer account restrictions. The most common rejection reasons are missing SDK disclosures, no account deletion option, and policies that do not match the app's actual data collection.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my mobile app privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Update your privacy policy whenever your app's data handling changes. This includes adding new SDKs, changing analytics providers, adding new features that collect data, enabling push notifications, or adding in-app purchases. You should also update when Apple or Google change their privacy requirements, which happens several times per year. At minimum, review your policy with every app update that modifies permissions or data flows. Both stores may re-review your policy during app updates.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Customize a Mobile App Privacy Policy Template",
  description:
    "Follow these six steps to customize a privacy policy template for your mobile app so it meets Apple App Store and Google Play requirements.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your app permissions and SDKs",
      text: "Open your iOS Info.plist or Android AndroidManifest.xml and list every permission your app requests. Then list every third-party SDK integrated in your project, including analytics, crash reporting, advertising, and payment SDKs. Each permission and SDK determines what data you must disclose.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map your data flows from collection to storage",
      text: "Trace every piece of data your app collects. Document what comes from user input, what comes from device sensors or APIs, what is stored locally on the device, what is sent to your servers, and what is shared with third-party SDKs. For each data flow, note the data type, source, destination, and retention period.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Replace all placeholders with your app specifics",
      text: "Go through the template and replace every bracketed placeholder with details specific to your app. Replace [Your App Name] with your actual app name. Replace example data types with the real data your app collects. Remove any sections that do not apply, such as in-app purchases if your app is entirely free with no premium features.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Add your SDK disclosure table",
      text: "Create a section that maps each third-party SDK to what data it collects and why. This is critical for app store compliance because both Apple and Google require transparency about third-party data collection. Include SDKs for analytics, advertising, crash reporting, push notifications, and payments.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add platform-specific compliance sections",
      text: "For Apple, ensure your policy aligns with the App Tracking Transparency framework and the privacy nutrition labels you submit in App Store Connect. For Google Play, ensure your policy matches the data safety form. Add GDPR and CCPA sections if your app has users in the EU or California.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Verify your policy matches both store submissions",
      text: "Compare your finished privacy policy against the Apple privacy nutrition label and the Google Play data safety form. Every data type you declare in these forms must be mentioned in your policy, and vice versa. Mismatches between your policy and your store declarations are one of the top reasons apps get flagged during review.",
    },
  ],
};

const tocSections = [
  { id: "what-template-must-include", title: "What Your Template Must Include" },
  { id: "full-template-preview", title: "Full Template Preview" },
  { id: "how-to-customize", title: "How to Customize for Your App" },
  { id: "sdk-disclosure-table", title: "SDK Disclosure Table" },
  { id: "app-store-compliance-checklist", title: "App Store Compliance Checklist" },
  { id: "common-template-mistakes", title: "Common Template Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function MobileAppPrivacyPolicyTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mobile App Privacy Policy Template (Free, Copy-Paste Ready) (2026)",
            description:
              "Free mobile app privacy policy template that meets Apple App Store and Google Play requirements. Covers data collection, third-party SDKs, push notifications, analytics, and in-app purchases.",
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
                name: "Mobile App Privacy Policy Template",
                item: "https://ultrafastutilities.com/mobile-app-privacy-policy-template",
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
                Template
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Copy className="w-3.5 h-3.5" />
                Free Template
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Mobile App Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Template
                </span>
                : Free Template That Passes App Store Review
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A free, copy-paste ready privacy policy template built
                specifically for mobile apps. Covers Apple App Store and
                Google Play requirements, third-party SDK disclosures,
                push notifications, analytics, and in-app purchases.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For mobile app developers who need a compliant
                privacy policy without starting from scratch.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp;
                App Store compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-mobile-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Full Mobile App Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/apple-app-store-privacy-policy-requirements"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ClipboardList className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                App Store Requirements
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
                    Generate one tailored to your app
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
                  <strong>A mobile app privacy policy template must include eight core sections: what data your app collects, how it uses that data, which third-party SDKs receive data, how data is stored and secured, how users can delete their account and data, whether children can use the app, your contact information, and the effective date.</strong>{" "}
                  For Apple App Store compliance, your policy must align with
                  the privacy nutrition labels you submit in App Store Connect.
                  For Google Play, it must match the data safety form. Both
                  platforms will reject apps whose policies do not match their
                  actual data collection behavior.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                Writing a privacy policy from scratch for your mobile app
                is tedious. You need to cover Apple App Store requirements,
                Google Play data safety rules, third-party SDK disclosures,
                push notification practices, analytics tracking, in-app
                purchases, and potentially GDPR and CCPA compliance. Missing
                any of these can get your app rejected during review or
                removed from the store after publication.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                This page provides a complete, free template that you can
                copy, customize for your specific app, and publish today.
                The template covers every section both app stores expect,
                follows{" "}
                <Link
                  href="/apple-app-store-privacy-policy-requirements"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Apple App Store privacy requirements
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy-for-google-play"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Google Play privacy requirements
                </Link>
                , and includes optional GDPR and CCPA sections for
                apps with users in regulated regions.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                If you want to understand the full context of why mobile
                apps need privacy policies and what triggers the
                requirement, read the{" "}
                <Link
                  href="/do-mobile-apps-need-a-privacy-policy"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  do mobile apps need a privacy policy
                </Link>{" "}
                guide first. This page focuses specifically on giving you a
                ready-to-use template and showing you how to customize it.
              </p>

              {/* Section 1: What Your Template Must Include */}
              <section id="what-template-must-include" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Your Template Must Include
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Every mobile app privacy policy needs to cover specific
                  areas. Both Apple and Google review teams check for these
                  sections, and missing any of them is one of the most
                  common reasons apps get rejected. Here is the complete
                  checklist of required sections.
                </p>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data collection statement:</strong> What personal
                      data your app collects, including data from user input,
                      device sensors, contacts, photos, location, and any
                      other device APIs your app accesses.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Third-party SDKs:</strong> Every third-party SDK
                      integrated in your app and what data each SDK collects.
                      This includes analytics (Firebase, Amplitude), crash
                      reporting (Crashlytics, Sentry), advertising (AdMob,
                      Facebook SDK), push notifications (OneSignal), and
                      payments (RevenueCat).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Analytics and tracking:</strong> What analytics
                      tools your app uses, what events are tracked, and
                      whether any data is used for cross-app tracking or
                      advertising purposes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Push notifications:</strong> Whether your app
                      sends push notifications, what data is collected for
                      notification delivery (device tokens), and how users
                      can opt out.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>In-app purchases:</strong> Whether your app
                      offers in-app purchases or subscriptions, what payment
                      data is processed, and which payment provider handles
                      transactions (Apple, Google, or a third-party processor).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Account deletion:</strong> How users can delete
                      their account and all associated data. Apple requires
                      apps that offer account creation to also offer account
                      deletion. Google Play has similar requirements.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Children&apos;s data:</strong> Whether your app
                      is directed at children under 13, whether it complies
                      with COPPA, and what age restrictions apply. Both stores
                      have strict rules about apps that collect data from
                      children.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Contact information:</strong> A way for users to
                      reach you with privacy questions. An email address is
                      the minimum requirement on both platforms.
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
                        Apple requires every app to submit privacy nutrition
                        labels in App Store Connect that detail exactly what
                        data the app collects. If your privacy policy
                        contradicts these labels, Apple will reject your app
                        during review. Google Play has a similar data safety
                        section. Your template must cover every data type you
                        declare on both platforms, and your declarations must
                        match your policy exactly.
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
                      Privacy Policy Template
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
                        shares data. The App is available on [iOS / Android /
                        both platforms] through the [Apple App Store / Google
                        Play Store / both stores]. By downloading, installing,
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
                        <li>[Data type 1, e.g., &quot;Name and email address when you create an account&quot;]</li>
                        <li>[Data type 2, e.g., &quot;Device identifiers and operating system version&quot;]</li>
                        <li>[Data type 3, e.g., &quot;Usage data including screens viewed and features used&quot;]</li>
                        <li>[Data type 4, e.g., &quot;Push notification device token&quot;]</li>
                      </ul>
                      <p className="mt-2">
                        The App does NOT collect: [list data types you
                        do not collect, e.g., &quot;precise location,
                        contacts, photos, health data, or financial
                        information&quot;].
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
                        <li>[Purpose 2, e.g., &quot;To send push notifications about [specific content]&quot;]</li>
                        <li>[Purpose 3, e.g., &quot;To analyze usage patterns and improve the App&quot;]</li>
                        <li>[Purpose 4, e.g., &quot;To process in-app purchases and subscriptions&quot;]</li>
                      </ul>
                    </div>

                    {/* Section: Third-Party SDKs */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        4. Third-Party Services and SDKs
                      </p>
                      <p className="mb-2">
                        The App integrates the following third-party services:
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        <li>[SDK 1, e.g., &quot;Firebase Analytics for usage tracking&quot;]</li>
                        <li>[SDK 2, e.g., &quot;Crashlytics for crash reporting&quot;]</li>
                        <li>[SDK 3, e.g., &quot;OneSignal for push notification delivery&quot;]</li>
                        <li>[SDK 4, e.g., &quot;RevenueCat for subscription management&quot;]</li>
                      </ul>
                      <p className="mt-2">
                        Each of these services has its own privacy policy
                        governing how it handles data. We encourage you to
                        review their privacy policies. [Include links to each
                        third-party service&apos;s privacy policy.]
                      </p>
                    </div>

                    {/* Section: Data Storage */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        5. Data Storage and Security
                      </p>
                      <p>
                        [Option A: &quot;All data is stored locally on your
                        device. No personal data is transmitted to external
                        servers.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;Data is stored on secure servers
                        provided by [hosting provider, e.g., AWS, Google
                        Cloud, Firebase]. Data is encrypted in transit using
                        TLS and at rest using [encryption standard].&quot;]
                      </p>
                    </div>

                    {/* Section: Push Notifications */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        6. Push Notifications
                      </p>
                      <p>
                        The App may send push notifications to your device.
                        To deliver notifications, we collect your device
                        token through [Apple Push Notification service /
                        Firebase Cloud Messaging / OneSignal]. You can
                        disable push notifications at any time through your
                        device settings.
                      </p>
                    </div>

                    {/* Section: In-App Purchases */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        7. In-App Purchases
                      </p>
                      <p>
                        [Option A: &quot;The App does not offer in-app
                        purchases.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;The App offers [subscriptions /
                        one-time purchases]. Payments are processed by
                        [Apple / Google / RevenueCat]. We do not store
                        your payment card details. We receive confirmation
                        of your purchase status to unlock premium features.&quot;]
                      </p>
                    </div>

                    {/* Section: Account Deletion */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        8. Account Deletion
                      </p>
                      <p>
                        You can delete your account and all associated data
                        by [describe method, e.g., &quot;going to Settings
                        &gt; Account &gt; Delete Account within the App&quot;
                        or &quot;contacting us at [your email]&quot;]. Upon
                        deletion, all your personal data will be permanently
                        removed from our servers within [timeframe, e.g.,
                        30 days].
                      </p>
                    </div>

                    {/* Section: Children */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        9. Children&apos;s Privacy
                      </p>
                      <p>
                        [Option A: &quot;The App is not directed at children
                        under 13. We do not knowingly collect personal data
                        from children. If we learn that we have collected
                        data from a child under 13, we will delete it
                        promptly.&quot;]
                      </p>
                      <p className="mt-2">
                        [Option B: &quot;The App is designed for users of
                        all ages and complies with COPPA. We collect only
                        [describe limited data] from users under 13, with
                        verifiable parental consent.&quot;]
                      </p>
                    </div>

                    {/* Section: GDPR */}
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        10. GDPR Compliance (EU Users)
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
                        11. Changes to This Policy
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
                        12. Contact Us
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
                  This template gives you the foundation. The next section
                  walks you through exactly how to customize each section
                  for different types of mobile apps.
                </p>

                {/* Mini FAQ */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I remove sections from the template that do not
                      apply to my app?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. If your app does not offer in-app purchases, you
                      can remove section 7. If your app does not send push
                      notifications, remove section 6. However, keep the
                      third-party SDK section even if you think your app has
                      no third-party services. Most apps include at least
                      one analytics or crash reporting SDK. When in doubt,
                      keep the section and state what your app does or does
                      not do.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Should I add sections not covered in this template?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      If your app does something unusual, like processing
                      biometric data, accessing health records, handling
                      financial transactions directly, or collecting precise
                      location data continuously, you need additional
                      sections. This template covers the standard mobile app
                      use cases. Apps with specialized data handling should
                      add sections specific to their needs and consider
                      legal review.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: How to Customize for Your App */}
              <section id="how-to-customize" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Customize for Your App
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  The template above is a starting point. Different types
                  of apps collect different data and use different SDKs.
                  Here is how to customize the template based on your
                  app type.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Games
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Game apps typically integrate ad networks (AdMob,
                        Unity Ads, ironSource), analytics for player behavior,
                        and in-app purchase systems. Your policy needs to
                        disclose advertising identifiers (IDFA on iOS, GAID
                        on Android), ad personalization, and any data shared
                        with ad partners. If your game has social features,
                        disclose how player profiles and interactions are
                        stored. If it targets a younger audience, add
                        detailed COPPA compliance sections.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Social apps
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Social apps collect significant personal data: user
                        profiles, photos, messages, contacts, and location.
                        Your policy must clearly explain what content is
                        stored on your servers, who can see it, and how
                        messages are handled (end-to-end encrypted or not).
                        Disclose if you access the user&apos;s contact list
                        for friend suggestions. Detail your content
                        moderation practices and how reported content is
                        handled.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Health and fitness apps
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Health apps are subject to extra scrutiny from both
                        Apple and Google. If your app accesses HealthKit
                        (iOS) or Health Connect (Android), you must disclose
                        exactly what health data is read and written. Apple
                        prohibits using HealthKit data for advertising. Your
                        policy should state this explicitly. If your app
                        stores health data on servers, detail your encryption
                        and access controls. Consider whether HIPAA applies
                        to your app.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Finance apps
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Finance apps handle sensitive data including bank
                        account information, transaction history, and
                        identity documents. Your policy must detail how
                        financial data is encrypted, who has access to it,
                        and your data retention periods. If you use third-
                        party services like Plaid or Stripe, disclose them
                        and link to their privacy policies. Financial apps
                        may also need to comply with additional regulations
                        like PCI DSS for payment data.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Utility apps
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Utility apps (weather, calculator, file manager,
                        scanner) often collect less personal data, but many
                        still integrate analytics and advertising SDKs.
                        Your policy should be straightforward about what
                        the app accesses. If your utility app requests
                        permissions like camera, microphone, or file access,
                        explain exactly why each permission is needed and
                        what happens with the data. Many utility apps can
                        use a simpler version of this template.
                      </p>
                    </div>
                  </div>
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
                        Apple introduced the App Tracking Transparency (ATT)
                        framework in iOS 14.5, requiring apps to ask
                        permission before tracking users across other apps
                        and websites. If your app uses any form of cross-app
                        tracking, your privacy policy must explain this and
                        your ATT implementation. Apps that track without
                        implementing ATT will be rejected during Apple&apos;s
                        review process.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: SDK Disclosure Table */}
              <section id="sdk-disclosure-table" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  SDK Disclosure Table
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Include a table like this in your privacy policy to map
                  each third-party SDK your app uses to the data it collects
                  and why. This transparency is required by both Apple and
                  Google and helps your app pass review faster.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[18%]">
                          SDK
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[27%]">
                          Data Collected
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Purpose
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Data Shared With
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Firebase Analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Device ID, app usage events, screen views, session
                          duration, OS version
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Usage analytics and app performance monitoring
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Google (Firebase)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          AdMob
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Advertising ID (IDFA/GAID), device info, IP
                          address, interaction data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Serving personalized or contextual advertisements
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Google (AdMob) and ad partners
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Facebook SDK
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Device ID, app events, IP address, advertising ID
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Attribution, analytics, and ad targeting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Meta Platforms
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Crashlytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crash logs, device state, OS version, app version,
                          stack traces
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crash reporting and stability monitoring
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Google (Firebase)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          OneSignal
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Device token, device type, OS version, app usage
                          data, notification interactions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Push notification delivery and engagement tracking
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          OneSignal Inc.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          RevenueCat
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Purchase history, subscription status, device ID,
                          app user ID
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Subscription and in-app purchase management
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          RevenueCat Inc.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Amplitude
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          User events, device properties, session data,
                          user ID, IP address
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Product analytics and user behavior tracking
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Amplitude Inc.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Sentry
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Error logs, stack traces, device info, OS version,
                          app state at time of error
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Error tracking and performance monitoring
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Functional Software Inc. (Sentry)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  Only include the SDKs your app actually uses. Delete rows
                  for SDKs not in your project. If you use SDKs not listed
                  here, add them with the same level of detail. Check each
                  SDK&apos;s documentation for the most current list of data
                  it collects, as this can change between SDK versions.
                </p>

                <p className="text-slate-700 leading-7 mb-4">
                  For a deeper understanding of app privacy requirements
                  across platforms, see the{" "}
                  <Link
                    href="/privacy-policy-for-apps"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    privacy policy for apps
                  </Link>{" "}
                  guide.
                </p>
              </section>

              {/* Section 5: App Store Compliance Checklist */}
              <section id="app-store-compliance-checklist" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  App Store Compliance Checklist
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Before submitting your app, run through this checklist
                  to confirm your privacy policy meets requirements for
                  both platforms.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Apple App Store Requirements
                </h3>

                <div className="space-y-3 mb-8">
                  {[
                    {
                      num: "1",
                      text: "Privacy policy URL is entered in App Store Connect under App Information",
                    },
                    {
                      num: "2",
                      text: "Privacy nutrition labels in App Store Connect match your policy disclosures exactly",
                    },
                    {
                      num: "3",
                      text: "App Tracking Transparency (ATT) is implemented if your app tracks users across other apps or websites",
                    },
                    {
                      num: "4",
                      text: "Policy discloses all data types listed in the privacy nutrition label categories",
                    },
                    {
                      num: "5",
                      text: "If your app offers account creation, it also provides an account deletion mechanism",
                    },
                    {
                      num: "6",
                      text: "HealthKit data (if used) is disclosed and your policy states it is not used for advertising",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                        {item.num}
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed pt-0.5">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Google Play Requirements
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      num: "1",
                      text: "Privacy policy URL is entered in Google Play Console under App content > Privacy policy",
                    },
                    {
                      num: "2",
                      text: "Data safety form in Google Play Console matches your privacy policy disclosures",
                    },
                    {
                      num: "3",
                      text: "Policy lists every type of personal and sensitive user data your app collects",
                    },
                    {
                      num: "4",
                      text: "Policy discloses all third-party libraries and SDKs that collect user data",
                    },
                    {
                      num: "5",
                      text: "If your app targets children, it complies with Google Play Families Policy requirements",
                    },
                    {
                      num: "6",
                      text: "Account deletion is available if your app allows account creation, with clear instructions in your policy",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                        {item.num}
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed pt-0.5">
                        {item.text}
                      </p>
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
                        Both Apple and Google now re-review existing apps
                        for privacy compliance, not just new submissions.
                        Google Play sends data safety form reminders and can
                        restrict app visibility if the form is incomplete or
                        inaccurate. Apple can remove apps that have outdated
                        or missing privacy policies. Keeping your policy
                        current is not optional. Treat it as part of your
                        release checklist alongside testing and QA.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  For platform-specific templates, see the{" "}
                  <Link
                    href="/ios-app-privacy-policy-template"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    iOS app privacy policy template
                  </Link>{" "}
                  and the{" "}
                  <Link
                    href="/android-app-privacy-policy-template"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    Android app privacy policy template
                  </Link>
                  .
                </p>
              </section>

              {/* Section 6: Common Template Mistakes */}
              <section id="common-template-mistakes" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Template Mistakes
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Using a template saves time, but only if you avoid
                  these common mistakes that cause apps to get rejected
                  during app store review.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Not disclosing third-party SDKs
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        The most common reason for privacy-related app
                        rejections. Developers integrate Firebase, Crashlytics,
                        or an ad network but forget to mention them in the
                        privacy policy. Both Apple and Google require you to
                        disclose every third-party service that receives user
                        data. Check your Podfile, build.gradle, or package.json
                        for every SDK dependency and make sure each one
                        appears in your policy.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Privacy nutrition labels do not match
                        the policy
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Apple&apos;s privacy nutrition labels and Google&apos;s
                        data safety form must match your privacy policy. If
                        your policy says you collect location data but your
                        App Store listing does not declare it, or vice versa,
                        your app will be flagged. Fill out the store forms
                        and write your policy at the same time, using one
                        to verify the other.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: No account deletion option
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        If your app allows users to create an account, both
                        Apple and Google now require that you also provide a
                        way to delete that account and its data. Many
                        developers include account creation but forget to
                        build the deletion flow. Your privacy policy must
                        explain how users can delete their account. If the
                        deletion option is missing from your app, it will be
                        rejected regardless of what your policy says.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Using a website privacy policy for a
                        mobile app
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        A website privacy policy covers cookies, web forms,
                        and server logs. It does not cover device permissions,
                        push notifications, in-app purchases, SDK integrations,
                        or platform-specific requirements like Apple&apos;s
                        ATT framework. Mobile apps have fundamentally
                        different data access patterns than websites. Your
                        policy must be written specifically for a mobile
                        app, not adapted from a website template.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Mistake: Leaving placeholder text in the published
                        policy
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Developers copy a template, replace some placeholders,
                        and miss others. Your published policy ends up with
                        text like &quot;[Your App Name]&quot; or &quot;[describe
                        your data types]&quot; still visible. App store
                        reviewers check for this. Search your final policy
                        for every bracket character before publishing. If any
                        placeholder text remains, your app will be rejected.
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
                      Is a free mobile app privacy policy template
                      legally valid?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      A free template can be legally valid if you customize
                      it to accurately describe your app&apos;s actual data
                      practices. The legal validity depends on accuracy and
                      completeness, not on whether you paid for the template.
                      A well-customized free template is better than no
                      policy at all. Apps handling sensitive data like health
                      or financial information should have their policy
                      reviewed by a legal professional.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What must a mobile app privacy policy template
                      include?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your template must include: what data your app
                      collects, how it uses that data, which third-party
                      SDKs receive data, how data is stored and secured,
                      how users can delete their account and data, whether
                      children can use the app, your contact information,
                      and the effective date. For Apple compliance, you need
                      to align with privacy nutrition labels. For Google
                      Play, you need to match the data safety form.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do both free and paid apps need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Both Apple and Google require a privacy policy
                      for all apps, regardless of whether the app is free
                      or paid. Apple requires a privacy policy URL for every
                      app. Google Play requires one for any app that accesses
                      sensitive user data. In practice, every app should
                      have one because even basic analytics or crash
                      reporting involves data collection.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How do I customize this template for my specific app?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Start by listing every SDK and third-party service
                      your app uses. Then identify all data your app
                      collects. Replace every placeholder with your specific
                      details. Remove sections that do not apply. Verify
                      that your final policy matches both the Apple privacy
                      nutrition label and the Google Play data safety form.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Can I use one privacy policy for both iOS and Android?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, if both versions collect the same data and use
                      the same SDKs. Most developers maintain a single
                      policy for both platforms. If your iOS and Android
                      versions use different SDKs or collect different data,
                      create separate policies or clearly indicate which
                      sections apply to which platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if my app is rejected for privacy
                      policy issues?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Apple provides specific rejection reasons under
                      guideline 5.1.1 or 5.1.2 explaining what is missing.
                      You can fix the issue and resubmit. Google Play sends
                      a policy violation notice with a deadline. Repeated
                      violations can lead to app removal and account
                      restrictions. The most common rejection reasons are
                      missing SDK disclosures, no account deletion option,
                      and policies that do not match actual data collection.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      How often should I update my mobile app privacy
                      policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Update it whenever your app&apos;s data handling
                      changes: new SDKs, different analytics providers, new
                      features that collect data, push notifications, or
                      in-app purchases. Also update when Apple or Google
                      change their privacy requirements. At minimum, review
                      your policy with every app update that modifies
                      permissions or data flows.
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
                      desc: "Complete guide to app privacy policy requirements",
                    },
                    {
                      href: "/privacy-policy-for-mobile-apps",
                      title: "Privacy Policy for Mobile Apps",
                      desc: "Everything mobile developers need to know",
                    },
                    {
                      href: "/do-mobile-apps-need-a-privacy-policy",
                      title: "Do Mobile Apps Need a Privacy Policy?",
                      desc: "When and why mobile apps require a privacy policy",
                    },
                    {
                      href: "/apple-app-store-privacy-policy-requirements",
                      title: "Apple App Store Privacy Requirements",
                      desc: "Apple-specific privacy compliance for iOS apps",
                    },
                    {
                      href: "/privacy-policy-for-google-play",
                      title: "Privacy Policy for Google Play",
                      desc: "Google Play data safety and policy requirements",
                    },
                    {
                      href: "/ios-app-privacy-policy-template",
                      title: "iOS App Privacy Policy Template",
                      desc: "Template tailored for Apple App Store submissions",
                    },
                    {
                      href: "/android-app-privacy-policy-template",
                      title: "Android App Privacy Policy Template",
                      desc: "Template tailored for Google Play submissions",
                    },
                    {
                      href: "/generate",
                      title: "Generate Your Privacy Policy",
                      desc: "Create a custom policy in under 60 seconds",
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
                  Want a Policy Customized for Your App?
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Skip the manual customization. Answer a few questions
                  about your mobile app and get a privacy policy tailored
                  to your specific SDKs, data collection, and platform
                  requirements. Takes under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, Apple &amp; Google Play requirements &middot;
                  Customized for mobile apps &middot; Just $4.99
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
