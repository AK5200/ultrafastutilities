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
  Smartphone,
  Lock,
  Eye,
  MapPin,
  Camera,
  Mic,
  BookOpen,
  Users,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Google Play: App Submission Requirements (2026) | ultrafastutilities",
  description:
    "Google Play requires a privacy policy for all apps that collect personal data. Learn the Data Safety section requirements, what Google checks during review, and how to create a compliant policy.",
  keywords:
    "privacy policy for google play, google play privacy policy, google play store privacy policy requirement, android app privacy policy, play store data safety section",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/privacy-policy-for-google-play",
  },
  openGraph: {
    title:
      "Privacy Policy for Google Play: App Submission Requirements (2026) | ultrafastutilities",
    description:
      "Google Play requires a privacy policy for all apps that collect personal data. Learn the Data Safety section requirements, what Google checks during review, and how to create a compliant policy.",
    url: "https://ultrafastutilities.com/privacy-policy-for-google-play",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Google Play | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Google Play: App Submission Requirements (2026) | ultrafastutilities",
    description:
      "Google Play requires a privacy policy for all apps that collect personal data. Learn the Data Safety section requirements, what Google checks during review, and how to create a compliant policy.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "does-google-play-require", title: "Does Google Play Require One?" },
  { id: "data-safety-section", title: "Data Safety Section" },
  { id: "what-google-reviews", title: "What Google Reviews" },
  { id: "app-permissions", title: "App Permissions & Privacy" },
  { id: "childrens-apps", title: "Children's Apps & Families Policy" },
  { id: "common-mistakes", title: "Common Google Play Mistakes" },
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
      name: "Does every Android app need a privacy policy on Google Play?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not technically every app, but in practice yes. Google Play requires a privacy policy for any app that accesses personal or sensitive user data, including device identifiers, location, camera, contacts, and account information. Since almost all apps use at least device identifiers or analytics SDKs, virtually every app needs one. Additionally, the Data Safety section is mandatory for all apps regardless of data collection.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my Google Play app doesn't have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google can reject your app during review, remove your existing app from the Play Store, or suspend your developer account entirely. Since July 2022, Google has been increasingly strict about privacy policy enforcement. Apps without a valid privacy policy URL in the Play Console are flagged during the review process and will not be approved for publication.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I add my privacy policy URL in Google Play Console?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Google Play Console, go to your app's dashboard, then navigate to Policy and then App content and then Privacy policy. Enter the full URL of your hosted privacy policy page. This URL must be publicly accessible, not behind a login, and must load correctly on mobile devices. The same URL appears in your app's Play Store listing.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Google Play Data Safety section?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Data Safety section is a mandatory declaration form in the Google Play Console where you disclose what data your app collects, how it is used, whether it is shared with third parties, and what security measures you implement. This information is displayed publicly on your app's Play Store listing. It must accurately reflect your actual data practices and be consistent with your privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does my privacy policy need to match the Data Safety section?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google reviews your privacy policy for consistency with your Data Safety declarations. If your Data Safety section says you collect location data but your privacy policy does not mention location tracking, Google may flag this inconsistency during review. Both documents must accurately and consistently describe the same data practices.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if my app only stores data locally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you use any third-party SDKs like Firebase Analytics, AdMob, or crash reporting tools. These SDKs collect and transmit data to external servers even if your app's own features only store data on the device. You must also complete the Data Safety section for all apps, which requires disclosing even local data storage practices.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I update my Google Play privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Update your privacy policy whenever you change your app's data practices: adding new permissions, integrating new SDKs, changing how you process user data, or expanding to new markets. At minimum, review it annually. You must also update your Data Safety section in the Play Console whenever your data practices change, and both must remain consistent.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Google Play",
  description:
    "Follow these seven steps to create a compliant privacy policy for your Android app and properly configure the Google Play Data Safety section.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your app's data collection",
      text: "Review every piece of data your app collects, including data from third-party SDKs like Firebase, AdMob, analytics tools, and crash reporters. Document the data types (location, contacts, device identifiers, usage data) and whether each is collected, shared, or both.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Review all app permissions",
      text: "Check your app's AndroidManifest.xml for all declared permissions. Each permission that accesses personal or sensitive data (location, camera, microphone, contacts, storage) must be explained in your privacy policy with a clear purpose statement.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Identify all third-party SDKs",
      text: "List every third-party SDK integrated into your app: analytics (Firebase Analytics, Mixpanel), advertising (AdMob, Facebook Ads), crash reporting (Crashlytics, Sentry), authentication (Google Sign-In, Facebook Login), and any others. Each SDK's data collection must be disclosed.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a comprehensive policy that covers all the data types, permissions, and SDKs you identified. The policy should address GDPR, CCPA, COPPA (if applicable), and Google Play's specific requirements.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Host your privacy policy at a public URL",
      text: "Upload your privacy policy to a publicly accessible web page. The URL must not require a login, must load correctly on mobile devices, and should use HTTPS. Common options include your app's website, a GitHub Pages site, or a dedicated hosting service.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Complete the Data Safety section in Play Console",
      text: "In the Google Play Console, navigate to App content and then Data safety. Answer all questions about what data your app collects, shares, and how it handles security. Ensure your answers are consistent with your privacy policy document.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Add the privacy policy URL to Play Console",
      text: "In the Play Console, go to App content and then Privacy policy. Enter the URL of your hosted privacy policy. Also add a link to your privacy policy within the app itself, typically in a Settings or About screen, so users can access it at any time.",
    },
  ],
};

export default function PrivacyPolicyForGooglePlayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Google Play: App Submission Requirements (2026) | ultrafastutilities",
            description:
              "Google Play requires a privacy policy for all apps that collect personal data. Learn the Data Safety section requirements, what Google checks during review, and how to create a compliant policy.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-03-09",
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
                name: "Privacy Policy for Google Play",
                item: "https://ultrafastutilities.com/privacy-policy-for-google-play",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
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
                Privacy Policy for Google Play
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                App Store Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Google Play
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about privacy policy requirements
                for Android apps on Google Play. Covering the Data Safety
                section, app permissions, review requirements, and compliance
                with GDPR and CCPA.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Android developers and app publishers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Smartphone className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Apps
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-mobile-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Mobile Apps Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Policy Generator
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </header>

        {/* Content Area with Sidebar */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            {/* Sticky Sidebar - Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />

                {/* Sidebar CTA */}
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/80">
                  <p className="text-sm font-semibold text-slate-800">
                    Need an app privacy policy?
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
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <span>Last updated: March 2026</span>
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>11 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800">
                  <strong>
                    Google Play requires a privacy policy for all apps that
                    collect or share personal data.
                  </strong>{" "}
                  Since July 2022, every app must also complete the Data Safety
                  section in the Play Console. Your privacy policy URL must be
                  publicly accessible, consistent with your Data Safety
                  declarations, and linked from both the Play Store listing and
                  within the app itself.
                </p>
              </div>

              {/* Section 1: Does Google Play Require a Privacy Policy? */}
              <section id="does-google-play-require" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Does Google Play Require a Privacy Policy?
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Understanding Google&apos;s privacy requirements for
                      Android app developers.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Yes. Google Play requires a privacy policy for all apps that
                    collect or share user data. This includes personal
                    information like names, email addresses, and phone numbers,
                    as well as device data like identifiers, IP addresses, and
                    usage analytics. Since virtually every modern Android app
                    uses at least one analytics SDK or advertising library, this
                    requirement applies to nearly all apps on the Play Store.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Since July 2022, Google has made the Data Safety section
                    mandatory for all apps, regardless of whether they collect
                    data. Even if your app collects no personal data whatsoever,
                    you still must complete the Data Safety form to declare that
                    fact. For apps that do collect data, both a Data Safety
                    declaration and a privacy policy URL are required.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    The privacy policy URL you provide must be publicly
                    accessible without requiring a login. It must load correctly
                    on mobile devices, and the content must be relevant to the
                    specific app. You cannot simply link to a generic company
                    privacy page that does not mention your app or its data
                    practices. Google reviewers check these URLs during the app
                    review process.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Beyond Google&apos;s own requirements, privacy laws like{" "}
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
                    </Link>{" "}
                    independently require privacy policies for any app that
                    processes personal data of EU residents or California
                    consumers. The consequences of not having a privacy policy
                    include app removal from the Play Store, developer account
                    suspension, and potential regulatory fines. Read more about{" "}
                    <Link
                      href="/what-happens-without-a-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      what happens without a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
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
                          Google removed over 1.2 million apps from the Play
                          Store in 2023 for policy violations, with privacy
                          policy non-compliance being one of the most common
                          reasons for removal. Apps that fail to provide a valid
                          privacy policy URL or have inconsistencies between
                          their Data Safety declarations and actual behavior are
                          increasingly targeted during automated and manual
                          reviews.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Google Play Data Safety Section */}
              <section id="data-safety-section" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Google Play Data Safety Section
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What you must declare and how it connects to your privacy
                      policy.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    The Data Safety section is a structured declaration form in
                    the Google Play Console that tells users exactly what data
                    your app collects, why it collects it, and how it handles
                    that data. This information appears directly on your
                    app&apos;s Play Store listing, giving users transparency
                    before they install. Here is what you must declare:
                  </p>

                  {/* Data Types Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Data Category
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                            Examples
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[35%]">
                            Common Sources
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Location
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Precise location, approximate location
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            GPS, IP-based geolocation, Wi-Fi triangulation
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Personal Info
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Name, email, phone number, address, user IDs
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Registration forms, account creation, profile data
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Financial Info
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Payment info, purchase history, credit score
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            In-app purchases, payment SDKs, billing APIs
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Health &amp; Fitness
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Health data, fitness data, medical records
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Health APIs, wearable integrations, user input
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Messages
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Emails, SMS/MMS, in-app messages
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Chat features, messaging SDKs, notification content
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Photos &amp; Videos
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Photos, videos, image metadata
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Camera access, photo library, media uploads
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Contacts
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Contact names, phone numbers, email addresses
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Contact list access, social features, invite flows
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            App Activity
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Page views, taps, search history, app interactions
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Analytics SDKs, event tracking, usage logs
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Device IDs
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Advertising ID, Android ID, hardware identifiers
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Ad SDKs, analytics tools, crash reporters
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    For each data type you collect, the Data Safety section
                    requires you to specify:
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      {
                        label: "Collection vs. sharing",
                        text: "Whether the data is collected (sent from the app to your servers) or shared (transferred to third parties)",
                      },
                      {
                        label: "Purpose",
                        text: "Why you collect the data (app functionality, analytics, advertising, fraud prevention, personalization)",
                      },
                      {
                        label: "Optional vs. required",
                        text: "Whether users can choose not to provide the data and still use the app",
                      },
                      {
                        label: "Data processing",
                        text: "Whether the data is processed ephemerally (not stored beyond the request) or persistently",
                      },
                      {
                        label: "Security practices",
                        text: "Whether data is encrypted in transit, and whether you provide a way for users to request data deletion",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Your Data Safety declarations and your privacy policy must
                    tell the same story. Google cross-references these documents
                    during review. If your Data Safety section says you do not
                    share data with third parties but your privacy policy
                    mentions sending data to advertising partners, Google will
                    flag the inconsistency.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Do I need to declare data collected by third-party
                        SDKs?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Yes. You are responsible for all data collected by your
                        app, including data collected by third-party libraries
                        and SDKs you integrate. If Firebase Analytics collects
                        device identifiers, you must declare that in both your
                        Data Safety section and your privacy policy.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: What if I am unsure what data an SDK collects?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Check the SDK&apos;s documentation and privacy
                        disclosures. Most major SDKs (Firebase, AdMob, Facebook
                        SDK) publish detailed data collection guides
                        specifically for Google Play Data Safety compliance. When
                        in doubt, declare more rather than less.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: What Google Reviews During App Submission */}
              <section id="what-google-reviews" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Google Reviews During App Submission
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      The specific privacy checks Google performs when you
                      submit or update your app.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Google&apos;s app review process includes both automated
                    scans and manual checks for privacy compliance. Understanding
                    what Google looks for helps you avoid rejections and delays.
                    Here is what the review process examines:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Privacy policy URL accessibility",
                        desc: "Google checks that your privacy policy URL is publicly accessible, loads without errors, is not behind a login wall, and displays correctly on mobile devices. Broken links, expired SSL certificates, or pages that redirect to a homepage will cause rejection.",
                      },
                      {
                        title: "Privacy policy content relevance",
                        desc: "The privacy policy must be relevant to your specific app and mention the types of data your app collects. A generic privacy policy that does not reference your app or its features may be flagged as insufficient.",
                      },
                      {
                        title: "Data Safety consistency",
                        desc: "Google compares your Data Safety declarations with your app's actual behavior and your privacy policy content. All three must be consistent. Automated tools scan your app's code for permission requests and SDK usage, then cross-reference these findings with your declarations.",
                      },
                      {
                        title: "Permission justification",
                        desc: "Every sensitive permission your app requests (location, camera, microphone, contacts) must have a clear justification in your app's functionality. If your app requests location permission but has no location-based features, Google will reject it.",
                      },
                      {
                        title: "COPPA compliance for children's apps",
                        desc: "If your app targets children under 13 or is listed in the Family category, Google applies additional scrutiny. Your privacy policy must address children's data collection, and your app must comply with Google's Families Policy.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-slate-200/80 p-5"
                      >
                        <div className="flex items-start gap-3">
                          <Eye className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold text-slate-900">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-slate-600">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Review times vary, but privacy-related rejections are among
                    the most common reasons for delays. Getting your privacy
                    policy and Data Safety section right before submission saves
                    significant time. If your app is rejected for privacy
                    reasons, you will receive a notification explaining the
                    specific issue, and you must fix it before resubmitting.
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
                          Google uses automated tools to analyze your app&apos;s
                          APK/AAB file and detect what data it actually
                          collects, regardless of what you declare in the Data
                          Safety section. If the automated scan finds your app
                          accessing location data but you did not declare
                          location collection, your submission will be flagged
                          for manual review. This makes it critical to
                          accurately declare all data your app handles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Common App Permissions and Privacy Requirements */}
              <section id="app-permissions" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common App Permissions and Privacy Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      What each Android permission means for your privacy
                      policy.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Each Android permission your app requests has specific
                    privacy policy implications. The table below shows the most
                    common permissions and what your privacy policy must include
                    for each one:
                  </p>

                  {/* Permissions Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Permission
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Data Accessed
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            Privacy Policy Must Include
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Google Sensitivity
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Fine Location
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            GPS coordinates, precise location
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Why location is needed, how it is used, whether it
                            is stored or shared
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (requires justification)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Coarse Location
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Approximate location (city-level)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Purpose of approximate location, retention period
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Camera
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Photos, videos, camera feed
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            What camera is used for, whether images are stored
                            or transmitted
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (requires justification)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Microphone
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Audio recordings, voice input
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Purpose of audio access, whether recordings are
                            stored, who has access
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (requires justification)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Contacts
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Contact list, phone numbers, emails
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Why contacts are accessed, whether contact data
                            leaves the device
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (strict review)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Storage
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Files on device, downloads
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            What files are accessed and why, whether file
                            content is transmitted
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Phone State
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Phone number, device ID, call state
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Purpose of accessing phone state, what identifiers
                            are used
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            High (often flagged)
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Calendar
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Calendar events, reminders
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Why calendar access is needed, whether events are
                            read or modified
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Medium
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    The principle of least privilege applies here. Only request
                    permissions your app genuinely needs. Each unnecessary
                    permission increases your privacy compliance burden and
                    raises red flags during Google&apos;s review. If your app
                    requests camera and microphone access but only uses them for
                    QR code scanning, your privacy policy should clearly state
                    that audio is not recorded and camera access is limited to
                    QR code scanning functionality.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    For a broader look at{" "}
                    <Link
                      href="/privacy-policy-for-mobile-apps"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      mobile app privacy policies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , including how permissions differ between Android and iOS,
                    see our comprehensive guide.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Children's Apps and Families Policy */}
              <section id="childrens-apps" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Children&apos;s Apps and Google&apos;s Families Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Additional requirements for apps that target or are used
                      by children under 13.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    If your app targets children under 13, or if children are
                    among your app&apos;s audience, you face significantly
                    stricter privacy requirements. Google&apos;s Families Policy
                    builds on COPPA (Children&apos;s Online Privacy Protection
                    Act) and adds Google-specific rules that go beyond what
                    federal law requires.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Apps in the &quot;Family&quot; category on Google Play must
                    comply with all of the following:
                  </p>

                  <div className="mt-4 space-y-3">
                    {[
                      {
                        label: "No behavioral advertising",
                        text: "You cannot show interest-based or retargeted advertising to children. Only contextual ads are permitted.",
                      },
                      {
                        label: "Verified parental consent",
                        text: "Before collecting any personal data from a child, you must obtain verifiable parental consent through an approved method.",
                      },
                      {
                        label: "Limited data collection",
                        text: "Collect only the minimum data necessary for the app to function. No profiling, no behavioral tracking, no cross-app data sharing for children.",
                      },
                      {
                        label: "Approved ad SDKs only",
                        text: "You can only use ad SDKs from Google's list of approved family-safe ad networks. Other ad networks are not permitted in children's apps.",
                      },
                      {
                        label: "Teacher Approved program",
                        text: "For apps seeking Google's Teacher Approved badge, additional educational quality standards and stricter privacy requirements apply.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 text-base leading-7"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">
                          <strong className="text-slate-800 font-medium">
                            {item.label}:
                          </strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Your privacy policy for a children&apos;s app must
                    explicitly address how you handle children&apos;s data, what
                    parental controls are available, how parents can request
                    deletion of their child&apos;s data, and what advertising
                    practices you follow. COPPA violations carry penalties of up
                    to $50,000 per violation, and the FTC has been increasingly
                    active in enforcing these rules against app developers.
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
                          In 2023, the FTC fined Epic Games $275 million for
                          COPPA violations related to Fortnite&apos;s data
                          collection from children. Google has also taken action
                          against developers whose apps collect children&apos;s
                          data without proper consent, removing apps and
                          suspending developer accounts. If your app has any
                          appeal to children, it is safer to implement
                          children&apos;s privacy protections proactively.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Common Google Play Privacy Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Google Play Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Misconceptions that lead to app rejections and policy
                      violations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    These five mistakes are responsible for a large share of
                    privacy-related app rejections on Google Play. Avoid them
                    to ensure smooth app submission and ongoing compliance.
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;My app uses a WebView so it&apos;s just
                          a website&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          WebView-based apps are still Android apps and must
                          comply with all Google Play privacy requirements. They
                          need a privacy policy, a completed Data Safety section,
                          and proper permission declarations. The fact that your
                          app renders web content does not exempt it from
                          Google&apos;s app-level privacy requirements. WebView
                          apps often collect device identifiers and may access
                          device features like camera or location through web
                          APIs, all of which must be disclosed.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I use Firebase so Google handles my
                          privacy&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Firebase is a Google product, but using it does not
                          mean Google handles your privacy obligations. Firebase
                          Analytics, Crashlytics, Cloud Messaging, and other
                          Firebase services all collect user data that you must
                          declare in your Data Safety section and disclose in
                          your privacy policy. You are the data controller for
                          the data your app collects through Firebase. Google
                          processes it on your behalf, but the disclosure and
                          consent obligations remain yours.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Free apps don&apos;t need privacy
                          policies&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Whether your app is free or paid has no bearing on
                          privacy policy requirements. In fact, free apps often
                          collect more data than paid apps because they rely on
                          advertising revenue, which requires user tracking,
                          behavioral profiling, and data sharing with ad
                          networks. Free apps with ads typically have higher
                          privacy compliance obligations than paid apps without
                          ads.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I&apos;ll update the Data Safety
                          section later&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          The Data Safety section is checked during every app
                          submission and update. If you submit an app update
                          that adds a new SDK or permission without updating
                          your Data Safety declarations, Google&apos;s automated
                          tools will detect the inconsistency. This can result in
                          your update being rejected, or in some cases, your
                          existing app being flagged for review and potential
                          removal while the issue is resolved.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;My app only stores data locally&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Even if your app&apos;s core features store data
                          locally on the device, you almost certainly use
                          third-party SDKs that transmit data to external
                          servers. Firebase Analytics sends usage data to Google.
                          Crash reporting tools send error logs with device
                          information. Ad SDKs transmit device identifiers and
                          behavioral data. All of this must be disclosed. The
                          Data Safety section also requires you to declare local
                          data collection, not just data transmitted off-device.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Can I use the same privacy policy for my app and my
                        website?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        You can use a single privacy policy if it comprehensively
                        covers both your app and website data practices. However,
                        it must specifically address app-related data collection
                        (permissions, SDKs, device identifiers) in addition to
                        website-related data (cookies, analytics). Many
                        developers find it clearer to have separate sections for
                        app and web data collection within the same document.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: What if Google rejects my app for privacy reasons?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        You will receive a specific rejection notice identifying
                        the policy violation. Fix the identified issue (update
                        your privacy policy, correct your Data Safety
                        declarations, or modify your app&apos;s behavior) and
                        resubmit. Multiple rejections for the same issue can
                        trigger a warning on your developer account.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: How to Create a Privacy Policy for Google Play */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Google Play
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Seven steps to create a compliant privacy policy and
                      properly configure your Play Console.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Follow these seven steps to create a privacy policy that
                    satisfies Google Play requirements and complies with GDPR,
                    CCPA, and COPPA (if applicable). This process covers both
                    the privacy policy document and the Data Safety section.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1",
                        title: "Audit your app's data collection",
                        content:
                          "Review every piece of data your app collects directly or through third-party SDKs. Check your AndroidManifest.xml for all declared permissions. Document each data type: personal information, device identifiers, location data, usage analytics, and any other data your app accesses.",
                      },
                      {
                        step: "Step 2",
                        title: "Review all app permissions",
                        content:
                          "Go through each permission in your manifest and verify it is actually needed. Remove any permissions your app does not actively use. For each remaining permission, document why it is necessary and what data it provides access to. This documentation feeds directly into your privacy policy.",
                      },
                      {
                        step: "Step 3",
                        title: "Identify all third-party SDKs",
                        content:
                          "List every SDK in your app: Firebase Analytics, AdMob, Facebook SDK, Crashlytics, Sentry, authentication libraries, payment SDKs, and any others. For each SDK, check its documentation to understand exactly what data it collects and transmits. This is often the most overlooked step.",
                      },
                      {
                        step: "Step 4",
                        title: "Generate your privacy policy",
                        content:
                          "Use a privacy policy generator to create a comprehensive document that covers all the data types, permissions, and SDKs you identified. Make sure the policy addresses app-specific requirements, including device permissions, push notifications, in-app data collection, and third-party SDK disclosures.",
                      },
                      {
                        step: "Step 5",
                        title: "Host your privacy policy at a public URL",
                        content:
                          "Upload your privacy policy to a publicly accessible web page using HTTPS. The URL must not require authentication, must load on mobile devices, and must remain accessible at all times. Options include your app's website, a GitHub Pages site, or any reliable web hosting service.",
                      },
                      {
                        step: "Step 6",
                        title: "Complete the Data Safety section",
                        content:
                          "In the Google Play Console, navigate to your app's App content section and complete the Data Safety form. Answer every question accurately, ensuring your declarations match your privacy policy and your app's actual behavior. Double-check for consistency across all three.",
                      },
                      {
                        step: "Step 7",
                        title: "Add the privacy policy URL to Play Console",
                        content:
                          "In the Play Console, go to App content, then Privacy policy, and enter your hosted URL. Also add a link to your privacy policy within your app itself, typically in a Settings or About screen, so users can access it at any time after installation.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="rounded-xl border border-slate-200/80 p-5"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                            {item.step}
                          </span>
                          <h3 className="font-semibold text-slate-900">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-base leading-7 text-slate-600 ml-[70px]">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    The{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      policy generation
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    step takes under 60 seconds once you have completed your
                    audit. The most common reason for Google Play rejections is
                    inconsistency between the privacy policy, Data Safety
                    section, and actual app behavior. Getting the audit right
                    is the key to avoiding these issues. Remember to{" "}
                    <Link
                      href="/how-often-should-you-update-your-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      update your policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    whenever you add new SDKs or change permissions.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {faqSchema.mainEntity.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200/80 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {faq.name}
                          </h3>
                          <p className="mt-2 text-base leading-7 text-slate-600">
                            {faq.acceptedAnswer.text}
                          </p>
                        </div>
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
                    <ShieldCheck className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate Your Google Play Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your Android app in under 60 seconds. Covers Data Safety
                      requirements, permissions, and SDKs.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My App Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Play Store ready</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR, CCPA, and COPPA
                      requirements. Not legal advice.
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
                      href: "/privacy-policy-for-apps",
                      icon: Smartphone,
                      title: "Privacy Policy for Apps",
                      desc: "General app compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-mobile-apps",
                      icon: Smartphone,
                      title: "Privacy Policy for Mobile Apps",
                      desc: "Mobile-specific requirements",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance template and guide",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: FileText,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance example",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks and penalties explained",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Website compliance guide",
                    },
                    {
                      href: "/how-often-should-you-update-your-privacy-policy",
                      icon: Clock,
                      title: "How Often to Update Your Policy",
                      desc: "Update frequency and triggers",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      icon: Ban,
                      title: "Can I Copy a Privacy Policy?",
                      desc: "Why copying policies is risky",
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
