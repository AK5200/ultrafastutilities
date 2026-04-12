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
  Scale,
  Smartphone,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do Mobile Apps Need a Privacy Policy? Yes, Here's Why (2026) | ultrafastutilities",
  description:
    "Yes, all mobile apps need a privacy policy. Both Apple App Store and Google Play Store require one. Learn when it's mandatory, what laws apply, and how to create one fast.",
  keywords:
    "do mobile apps need a privacy policy, mobile app privacy policy required, does my app need a privacy policy, app store privacy policy requirement, mobile app privacy law",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-mobile-apps-need-a-privacy-policy",
  },
  openGraph: {
    title:
      "Do Mobile Apps Need a Privacy Policy? Yes, Here's Why (2026) | ultrafastutilities",
    description:
      "Yes, all mobile apps need a privacy policy. Both Apple App Store and Google Play Store require one. Learn when it's mandatory, what laws apply, and how to create one fast.",
    url: "https://ultrafastutilities.com/do-mobile-apps-need-a-privacy-policy",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Do Mobile Apps Need a Privacy Policy? | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do Mobile Apps Need a Privacy Policy? Yes, Here's Why (2026)",
    description:
      "Yes, all mobile apps need a privacy policy. Both Apple App Store and Google Play Store require one. Learn when it's mandatory, what laws apply, and how to create one fast.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do mobile apps need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all mobile apps need a privacy policy. Both Apple App Store and Google Play Store require one for every app submission. Beyond store requirements, privacy laws like GDPR, CCPA, COPPA, and PIPEDA independently mandate a privacy policy if your app collects or processes any personal data from users in regulated jurisdictions.",
      },
    },
    {
      "@type": "Question",
      name: "Does Apple App Store require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Apple requires a privacy policy for every app submitted to the App Store, regardless of whether the app collects personal data. Since December 2020, Apple also requires privacy nutrition labels that detail exactly what data your app collects. Apps without a privacy policy URL will be rejected during App Store review.",
      },
    },
    {
      "@type": "Question",
      name: "Does Google Play Store require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Google Play requires a privacy policy for all apps that access sensitive user data or device permissions. Since 2022, Google also requires a Data Safety section that discloses data collection, sharing, and security practices. Apps that handle personal data without a privacy policy can be removed from Google Play.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my app does not have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without a privacy policy, your app will be rejected by both Apple App Store and Google Play Store during review. Existing apps can be removed during compliance audits. Beyond store consequences, you face legal risks including GDPR fines up to 20 million euros, CCPA penalties up to $7,500 per violation, and potential user lawsuits in various jurisdictions.",
      },
    },
    {
      "@type": "Question",
      name: "Does my app need a privacy policy if it does not collect data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apple requires a privacy policy for all apps regardless of data collection. Google Play requires one for all apps that request any device permissions. Even if your app collects zero personal data, you should still have a privacy policy stating that fact. Many apps also unknowingly collect data through third-party SDKs, analytics, or crash reporting tools included in their builds.",
      },
    },
    {
      "@type": "Question",
      name: "What personal data do mobile apps typically collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile apps commonly collect device identifiers (IDFA, GAID), IP addresses, location data, contacts, photos, camera and microphone access, app usage analytics, crash logs, account information like name and email, payment data, and health or fitness data. Third-party SDKs for ads, analytics, and social login often collect additional data that developers must disclose.",
      },
    },
    {
      "@type": "Question",
      name: "Do free apps need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, free apps need a privacy policy just like paid apps. The requirement is based on data handling, not monetization. In fact, free apps often collect more data than paid apps because they rely on advertising SDKs that track users across apps. Both app stores require a privacy policy regardless of whether your app is free or paid.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Mobile App",
  description:
    "Follow these five steps to create a compliant privacy policy for your iOS or Android mobile app.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your app's data collection",
      text: "Review every piece of data your app collects, accesses, or processes. This includes data collected directly through forms and inputs, data collected through device permissions like camera, location, and contacts, and data collected by third-party SDKs such as analytics, advertising, and crash reporting tools. Document each data type and its purpose.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify all third-party SDKs and services",
      text: "List every third-party SDK integrated into your app, including analytics tools like Firebase or Mixpanel, advertising networks, social login providers, crash reporting services, and payment processors. Each SDK may collect its own data, and your privacy policy must disclose all third-party data sharing.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Determine which privacy laws apply",
      text: "Identify the jurisdictions where your users are located. If you have EU users, GDPR applies. If you have California users, CCPA applies. If your app targets children under 13, COPPA applies. If you have Canadian users, PIPEDA applies. Your privacy policy must comply with all applicable laws.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate or draft your privacy policy",
      text: "Create a privacy policy that covers all collected data types, purposes of collection, third-party sharing, user rights, data retention periods, and contact information. Use a privacy policy generator to ensure you cover all required sections for both app stores and applicable privacy laws.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add the privacy policy to your app and store listings",
      text: "Host your privacy policy at a publicly accessible URL. Add the URL to your Apple App Store Connect and Google Play Console listings. Also make the privacy policy accessible within your app, typically in the settings or about section. Complete the Apple privacy nutrition labels and Google Data Safety section based on your audit.",
    },
  ],
};

const tocSections = [
  { id: "short-answer", title: "The Short Answer" },
  { id: "when-required", title: "When a Privacy Policy Is Required" },
  { id: "app-store-comparison", title: "App Store Requirements Compared" },
  { id: "legal-requirements", title: "Legal Requirements by Region" },
  { id: "personal-data", title: "What Counts as Personal Data" },
  { id: "consequences", title: "Consequences of Not Having One" },
  { id: "myths-debunked", title: "Common Myths Debunked" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function DoMobileAppsNeedAPrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do Mobile Apps Need a Privacy Policy? Yes, and Both App Stores Require One",
            description:
              "Yes, all mobile apps need a privacy policy. Both Apple App Store and Google Play Store require one. Learn when it's mandatory, what laws apply, and how to create one fast.",
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
                name: "Do Mobile Apps Need a Privacy Policy?",
                item: "https://ultrafastutilities.com/do-mobile-apps-need-a-privacy-policy",
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
                Do Mobile Apps Need a Privacy Policy?
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Smartphone className="w-3.5 h-3.5" />
                Mobile App Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do Mobile Apps Need a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Privacy Policy?
                </span>{" "}
                Yes, and Both App Stores Require One
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes, every mobile app needs a privacy policy. Both the Apple App
                Store and Google Play Store require one for every submission.
                Privacy laws like GDPR, CCPA, and COPPA may also independently
                require one based on your users and the data you collect.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For mobile app developers, indie makers, and teams publishing to
                the Apple App Store or Google Play Store.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA, COPPA &amp;
                app store compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                App Privacy Guide
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/mobile-app-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Mobile App Policy Template
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
                    Need a privacy policy?
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Generate one in 60 seconds
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
                  <span>GDPR, CCPA &amp; COPPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, all mobile apps need a privacy policy.</strong>{" "}
                  Both the Apple App Store and Google Play Store require a
                  privacy policy for every app. Apple mandates one for all apps
                  regardless of data collection. Google Play requires one for
                  any app that accesses personal or sensitive user data. Beyond
                  store requirements, GDPR applies if you have EU users, CCPA
                  applies if you have California users, and COPPA applies if
                  your app is directed at children under 13. There is no
                  scenario where publishing a mobile app without a privacy
                  policy is a good idea.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                The question &quot;do mobile apps need a privacy policy?&quot;
                is one of the most common questions app developers ask before
                publishing. The answer is straightforward: yes, every mobile
                app should have one, and both major app stores require it as a
                condition of distribution.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                Mobile apps have deep access to personal data. They can access
                device identifiers, location data, contacts, camera, microphone,
                photos, health data, and much more. This level of access is
                exactly why both Apple and Google take privacy policies
                seriously and enforce strict requirements for every app
                published on their platforms.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers when a privacy policy is required, how Apple
                and Google Play requirements compare, which privacy laws apply
                to your app, what counts as personal data, what happens if you
                skip it, and common myths that mislead developers.
              </p>

              {/* Section 1: The Short Answer */}
              <section id="short-answer" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Short Answer: Both Stores Require It, Period
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Unlike some platforms where privacy policies are only required
                  in certain scenarios, both the Apple App Store and Google Play
                  Store require a privacy policy for virtually every app. Apple
                  requires one for all apps, no exceptions. Google Play requires
                  one for any app that accesses personal or sensitive user data,
                  which covers nearly every app since most request at least one
                  device permission.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The requirement exists because mobile apps have far more
                  access to personal data than websites. Your app can access
                  GPS location, contact lists, photos, camera, microphone,
                  device identifiers, and health data. Even apps that seem
                  simple often include third-party SDKs for analytics,
                  advertising, or crash reporting that collect data behind the
                  scenes.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The requirement comes from two separate sources. First, both
                  app stores have platform policies mandating a privacy policy.
                  Second, privacy laws like GDPR, CCPA, COPPA, and PIPEDA
                  independently require one if your users are in regulated
                  jurisdictions, regardless of what the app stores require.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Required</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Both app stores mandate it
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Public</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Must be a publicly accessible URL
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Scale className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Legal</p>
                    <p className="text-xs text-slate-500 mt-1">
                      GDPR, CCPA, and COPPA may apply
                    </p>
                  </div>
                </div>

                {/* Mini FAQ 1 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: My app is free and has no ads. Do I still need one?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes. The privacy policy requirement is about data handling,
                      not monetization. Free apps, ad-free apps, and open source
                      apps all need a privacy policy. Being free does not exempt
                      you from app store policies or privacy laws. In fact, Apple
                      requires a privacy policy for every app regardless of
                      whether it collects any data at all.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if my app only works offline?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Even offline apps typically need a privacy policy. If your
                      app stores any data on the device, accesses device
                      features like the camera or file system, or includes any
                      third-party SDKs, you need one. Apple requires a privacy
                      policy for all apps regardless of connectivity. The only
                      truly exempt case would be an app with zero data access
                      and zero permissions, which is extremely rare.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: When a Privacy Policy Is Required */}
              <section id="when-required" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  When a Privacy Policy Is Required
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The following table covers the most common app types and
                  whether they require a privacy policy. The answer depends on
                  what data your app collects and what permissions it requests.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          App Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Data Collected
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[15%]">
                          Required?
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Reason
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Social media app
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name, email, photos, contacts, location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Extensive personal data collection and sharing
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          E-commerce app
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Name, address, payment info, browsing
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Collects financial and identity data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Fitness or health app
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Health metrics, location, biometric data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Sensitive health data requires strict compliance
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Game with analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Device ID, usage data, ad tracking
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Analytics and ad SDKs collect personal data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Utility app (calculator, flashlight)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crash logs, device info via SDKs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Third-party SDKs often collect device data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Kids or educational app
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Varies, but often usage data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          COPPA applies to apps directed at children
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Static content app (no permissions)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          None
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (Apple) / Recommended (Google)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Apple requires it for all apps regardless
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                        A study of the top 1,000 free apps on both stores found
                        that 92% include at least one third-party SDK that
                        collects personal data. Even developers who believe their
                        app collects no data are often surprised to learn that
                        Firebase, Google Analytics, Facebook SDK, or crash
                        reporting tools bundled in their app are collecting
                        device identifiers, IP addresses, and usage patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: App Store Requirements Compared */}
              <section id="app-store-comparison" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  App Store Requirements Compared
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Both Apple and Google require privacy policies, but their
                  specific requirements differ. The following table compares
                  the two platforms side by side.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Requirement
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Apple App Store
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                          Google Play Store
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Privacy policy required?
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes, for all apps
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes, for apps accessing personal/sensitive data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Privacy policy URL
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required in App Store Connect
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required in Google Play Console
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          In-app access required?
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Strongly recommended
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required for apps with personal data access
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Data disclosure labels
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Privacy Nutrition Labels (since Dec 2020)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Data Safety Section (since July 2022)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Enforcement
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          App rejected during review
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          App rejected or removed during review
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Third-party SDK disclosure
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required in privacy labels
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Required in Data Safety section
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Account deletion requirement
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Must offer account and data deletion
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Must offer account and data deletion
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 my-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">
                        Important note
                      </p>
                      <p className="text-sm text-slate-700">
                        If you publish on both stores, your privacy policy must
                        satisfy both sets of requirements simultaneously. Apple
                        and Google have different disclosure formats (privacy
                        labels vs. Data Safety section), but both must be
                        consistent with your privacy policy. Inconsistencies
                        between your policy and your store disclosures can
                        trigger rejection or removal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mini FAQ 2 */}
                <div className="rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Do I need separate privacy policies for iOS and Android?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      No, a single well-written privacy policy can cover both
                      platforms. However, it must address the specific data
                      handling on each platform if they differ. For example, if
                      your iOS app uses Apple HealthKit data but your Android app
                      does not, your policy should reflect that. Most developers
                      use one policy URL for both store listings.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: Can I link to a privacy policy on my website?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      Yes, both app stores accept a URL pointing to a privacy
                      policy hosted on your website. The URL must be publicly
                      accessible without requiring a login. The page must load
                      correctly and the policy must be clearly visible. Broken
                      links or pages behind authentication walls will cause
                      your submission to be rejected.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Legal Requirements by Region */}
              <section id="legal-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Legal Requirements by Region
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Beyond app store requirements, multiple privacy laws
                  independently require a privacy policy for mobile apps. These
                  laws apply based on where your users are located, not where
                  your business is based.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      EU
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        GDPR (European Union)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        The General Data Protection Regulation applies to any
                        app that processes personal data of EU residents. It
                        requires a privacy policy that discloses the legal basis
                        for processing, data retention periods, user rights
                        (access, deletion, portability), and details of any
                        international data transfers. Fines can reach 20 million
                        euros or 4% of annual global revenue. GDPR applies even
                        if your company is not based in the EU.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      CA
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        CCPA / CPRA (California)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        The California Consumer Privacy Act applies to
                        businesses that collect personal information from
                        California residents and meet certain revenue or data
                        volume thresholds. It requires disclosing categories of
                        personal information collected, purposes of collection,
                        categories of third parties data is shared with, and
                        consumer rights including the right to opt out of data
                        sales. Penalties are up to $7,500 per intentional
                        violation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      US
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        COPPA (United States)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        The Children&apos;s Online Privacy Protection Act
                        applies to any app directed at children under 13, or
                        any app that knowingly collects data from children under
                        13. It requires verifiable parental consent before
                        collecting data from children, a clear privacy policy
                        describing data practices, and limits on data collection
                        to what is reasonably necessary. Fines can exceed
                        $50,000 per violation, and the FTC actively enforces
                        COPPA against mobile app developers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      CAN
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        PIPEDA (Canada)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        The Personal Information Protection and Electronic
                        Documents Act applies to commercial activities involving
                        the personal information of Canadian residents. It
                        requires meaningful consent for data collection, a
                        clear description of purposes, and limits on retention.
                        Organizations must appoint a privacy officer and make
                        their privacy policies publicly available. The Office
                        of the Privacy Commissioner can investigate complaints
                        and refer matters to the Federal Court.
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
                        Mobile apps distributed through the App Store and Google
                        Play are available globally by default. Unless you
                        actively restrict distribution to specific countries,
                        your app can be downloaded by users in the EU, California,
                        Canada, and dozens of other regulated jurisdictions.
                        This means multiple privacy laws likely apply to your
                        app simultaneously, even if your business is based in a
                        single country.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: What Counts as Personal Data */}
              <section id="personal-data" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Counts as Personal Data in Mobile Apps
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Mobile apps have access to far more personal data than most
                  developers realize. The following table covers the data types
                  that mobile apps commonly access and whether each requires
                  disclosure in your privacy policy.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Data Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Personal Data?
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[50%]">
                          Why It Counts
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Device identifiers (IDFA, GAID)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Uniquely identifies a device and can track users across apps
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          GPS location
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Reveals where a user lives, works, and travels
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contacts and address book
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contains names, phone numbers, and email addresses of third parties
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Photos and camera access
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Photos contain faces, locations (EXIF data), and personal moments
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          IP address
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Personal data under GDPR, reveals approximate location
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Health and fitness data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes (sensitive)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Classified as sensitive personal data requiring extra protection
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App usage analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Usage patterns linked to device IDs constitute personal data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Crash logs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Often yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crash logs often contain device identifiers, OS version, and stack traces
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Email and account info
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Directly identifies a person
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Non-personal app settings
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Usually no
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Generic preferences like theme or language are not personal unless linked to a user
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                        Apple&apos;s App Tracking Transparency (ATT) framework
                        requires apps to ask permission before tracking users
                        across other apps and websites. But ATT does not replace
                        the need for a privacy policy. Even if a user opts out
                        of tracking, your app still needs a privacy policy to
                        disclose what data it collects for its own purposes.
                        ATT and your privacy policy serve different but
                        complementary roles in protecting user privacy.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Consequences */}
              <section id="consequences" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Consequences of Not Having a Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Skipping the privacy policy is not just a minor oversight.
                  There are concrete consequences at both the platform level
                  and the legal level that can seriously impact your app
                  business.
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  App Store Consequences
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <p className="text-sm font-bold text-red-800 mb-1">
                      New Apps
                    </p>
                    <p className="text-lg font-bold text-red-700">
                      Rejected
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      Both stores reject apps without a privacy policy
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
                      Can be taken down during compliance audits
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Submission rejection:</strong> New apps and updates
                      submitted without a valid privacy policy URL will be
                      rejected during the review process on both stores.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Store removal:</strong> Existing apps can be
                      removed from both stores without warning during compliance
                      enforcement sweeps, resulting in immediate loss of
                      downloads and revenue.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Account suspension:</strong> Repeated violations
                      can lead to permanent suspension of your developer account
                      on either platform, blocking you from publishing any
                      future apps.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Loss of users and revenue:</strong> If your app is
                      removed, existing users lose access. Re-publishing under
                      a new listing means starting over with zero downloads,
                      ratings, and reviews.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-3 mt-6">
                  Legal Consequences
                </h3>
                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>GDPR fines:</strong> Up to 20 million euros or 4%
                      of annual global revenue, whichever is higher. Even small
                      app developers can be fined for clear GDPR violations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>CCPA penalties:</strong> Up to $7,500 per
                      intentional violation and $2,500 per unintentional
                      violation. California consumers can also bring private
                      lawsuits for certain data breaches.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>COPPA enforcement:</strong> The FTC actively
                      pursues mobile app developers who violate COPPA. Fines
                      can exceed $50,000 per violation, and settlements in
                      recent cases have reached millions of dollars.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>User lawsuits:</strong> In some jurisdictions,
                      users can sue directly if their data is mishandled or if
                      required disclosures are missing. Class action lawsuits
                      against app developers for privacy violations are
                      becoming more common.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Section 7: Common Myths Debunked */}
              <section id="myths-debunked" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Myths Debunked
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These five myths are the most common misconceptions that lead
                  mobile app developers to skip the privacy policy. Every one
                  of them is wrong.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My app does not collect any data, so I do
                        not need a privacy policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Apple requires a privacy policy for all apps regardless
                        of data collection. And most apps unknowingly collect
                        data through third-party SDKs. If your app includes
                        Firebase, Google Analytics, a crash reporter, or any
                        advertising SDK, data is being collected even if you did
                        not write the code that collects it. You are still
                        responsible for disclosing it.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Only apps with user accounts need a privacy
                        policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        User accounts are not the trigger. The trigger is any
                        access to personal data, which includes device
                        identifiers, IP addresses, location, crash logs, and
                        analytics data. An app with no user accounts but with
                        Google Analytics SDK still collects personal data. Both
                        stores require a privacy policy based on data access,
                        not on whether you have a login screen.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Apple or Google&apos;s privacy policy covers
                        my app&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Apple&apos;s and Google&apos;s privacy policies cover
                        their own platforms and services, not your app. You are
                        the data controller for your app&apos;s data handling.
                        You are responsible for your own privacy disclosures.
                        Pointing to Apple or Google&apos;s privacy policy will
                        not satisfy the requirement. Each app must have its own
                        privacy policy specific to its data practices.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Privacy policies are only for big
                        companies&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Privacy policy requirements apply to every developer
                        publishing on the App Store or Google Play, from solo
                        indie developers to large corporations. Neither store
                        differentiates based on company size. GDPR applies to
                        all data controllers regardless of size. If your app
                        handles user data, you need a privacy policy whether
                        you are a student project or a Fortune 500 company.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;I can add a privacy policy later after
                        launch&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Your app will not pass review without a privacy policy
                        URL on either store. You cannot publish first and add
                        one later. Apple requires the URL in App Store Connect
                        before submission. Google Play requires it in the Play
                        Console. Even if an earlier version was published
                        without one, submitting an update will trigger the
                        requirement. Create your policy before you submit for
                        review.
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
                      Do mobile apps need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, all mobile apps need a privacy policy. Both the
                      Apple App Store and Google Play Store require one. Apple
                      mandates it for all apps regardless of data collection.
                      Google Play requires it for apps accessing personal or
                      sensitive data. Privacy laws like GDPR, CCPA, and COPPA
                      also independently require one based on your users and
                      data practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Apple App Store require a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, Apple requires a privacy policy for every app
                      submitted to the App Store, with no exceptions. You must
                      provide a privacy policy URL in App Store Connect and
                      complete the privacy nutrition labels that detail your
                      data collection practices. Apps without a valid privacy
                      policy URL will be rejected during review.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Google Play Store require a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, Google Play requires a privacy policy for all apps
                      that access personal or sensitive user data, which
                      includes nearly every app that requests device
                      permissions. You must also complete the Data Safety
                      section in the Google Play Console. Apps that handle
                      personal data without a privacy policy can be removed
                      from Google Play.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if my app does not have a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your app will be rejected by both stores during review.
                      Existing apps can be removed during compliance audits.
                      Your developer account may face suspension for repeated
                      violations. Legal consequences under GDPR, CCPA, and
                      COPPA are also possible, including significant fines.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my app need a privacy policy if it does not collect data?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Apple requires a privacy policy for all apps regardless
                      of data collection. Even if your app truly collects zero
                      data, you should have a policy stating that. Most apps
                      also unknowingly collect data through third-party SDKs
                      for analytics, crash reporting, or advertising. Check
                      every SDK in your app to verify what data is collected.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What personal data do mobile apps typically collect?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Mobile apps commonly collect device identifiers, IP
                      addresses, location data, contacts, photos, camera and
                      microphone access, app usage analytics, crash logs,
                      account information, and payment data. Third-party SDKs
                      for ads, analytics, and social login often collect
                      additional data that developers must disclose in their
                      privacy policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do free apps need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes, free apps need a privacy policy just like paid apps.
                      The requirement is based on data handling, not
                      monetization. Free apps often collect more data than paid
                      apps because they rely on advertising SDKs that track
                      users. Both stores require a privacy policy regardless of
                      whether your app is free or paid.
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
                      desc: "Complete guide to app store privacy requirements",
                    },
                    {
                      href: "/privacy-policy-for-mobile-apps",
                      title: "Privacy Policy for Mobile Apps",
                      desc: "Detailed guide for iOS and Android apps",
                    },
                    {
                      href: "/privacy-policy-for-google-play",
                      title: "Privacy Policy for Google Play",
                      desc: "Google Play Console requirements explained",
                    },
                    {
                      href: "/apple-app-store-privacy-policy-requirements",
                      title: "Apple App Store Privacy Requirements",
                      desc: "Apple's privacy policy and nutrition label rules",
                    },
                    {
                      href: "/mobile-app-privacy-policy-template",
                      title: "Mobile App Privacy Policy Template",
                      desc: "Ready-to-use template for your mobile app",
                    },
                    {
                      href: "/is-a-privacy-policy-legally-required",
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "Legal requirements across jurisdictions",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      title: "What Happens Without a Privacy Policy",
                      desc: "Real consequences of operating without one",
                    },
                    {
                      href: "/generate",
                      title: "Generate Your Privacy Policy",
                      desc: "Create a compliant policy in under 60 seconds",
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
                  Your App Needs a Privacy Policy. Get One Now.
                </h2>
                <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
                  Do not let a missing privacy policy block your app store
                  submission or put you at legal risk. Generate a compliant
                  policy tailored to your mobile app in under 60 seconds.
                </p>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 h-auto text-base rounded-xl">
                    Generate My Privacy Policy
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-slate-400 text-xs mt-4">
                  Covers GDPR, CCPA, COPPA &amp; app store requirements &middot;
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
