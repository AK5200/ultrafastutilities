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
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do I Need a Privacy Policy for My App? Yes, Here's Why (2026) | ultrafastutilities",
  description:
    "Yes, you need a privacy policy for your app. Apple and Google both require it for app store listing. Learn when it's legally required, what to include, and how to create one in minutes.",
  keywords:
    "do i need a privacy policy for my app, app privacy policy required, does my app need privacy policy, mobile app privacy policy, app store privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-my-app",
  },
  openGraph: {
    title:
      "Do I Need a Privacy Policy for My App? Yes, Here's Why (2026) | ultrafastutilities",
    description:
      "Yes, you need a privacy policy for your app. Apple and Google both require it for app store listing. Learn when it's legally required, what to include, and how to create one in minutes.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-my-app",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Do I Need a Privacy Policy for My App? | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do I Need a Privacy Policy for My App? Yes, Here's Why (2026)",
    description:
      "Yes, you need a privacy policy for your app. Apple and Google both require it for app store listing. Learn when it's legally required, what to include, and how to create one in minutes.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a privacy policy for my app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both Apple and Google require a privacy policy for any app published on their stores. Apple requires a privacy policy URL before you can submit your app for review. Google Play requires one for any app that accesses personal or sensitive user data. Beyond store requirements, laws like GDPR, CCPA, and COPPA independently require a privacy policy if your app processes personal data.",
      },
    },
    {
      "@type": "Question",
      name: "Does my free app need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The privacy policy requirement is based on data handling, not monetization. Free apps, ad-supported apps, and paid apps all need a privacy policy if they access any personal data. Both Apple and Google enforce this requirement regardless of whether your app is free or paid.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my app doesn't have a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without a privacy policy, your app can be rejected during review, removed from the app store, or your developer account can be suspended. Apple will reject your app submission outright. Google Play can remove your app during compliance sweeps. You may also face legal penalties under GDPR (fines up to 20 million euros), CCPA (fines up to $7,500 per violation), or COPPA (fines up to $50,120 per violation for apps used by children).",
      },
    },
    {
      "@type": "Question",
      name: "Does Apple require a privacy policy for all apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As of Apple's updated App Store Review Guidelines, all apps submitted to the App Store must include a privacy policy. This applies to all apps regardless of whether they collect user data. Apple also requires you to complete App Tracking Transparency declarations and privacy nutrition labels detailing all data your app collects.",
      },
    },
    {
      "@type": "Question",
      name: "Does Google Play require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google Play requires a privacy policy for any app that accesses personal or sensitive user data. This includes apps that use permissions like camera, microphone, location, contacts, or storage. Google also requires a Data Safety section where you must declare all data collection and sharing practices. Apps without a privacy policy that handle user data can be removed from Google Play.",
      },
    },
    {
      "@type": "Question",
      name: "What should my app's privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your app's privacy policy should include: what personal data your app collects, how the data is used, whether data is shared with third parties, how data is stored and protected, user rights regarding their data, your contact information, and your data retention policy. If your app targets children, you must also address COPPA compliance. Both Apple and Google review your privacy policy for completeness.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a separate privacy policy for iOS and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do not need separate privacy policies for iOS and Android versions of the same app, as long as a single policy accurately describes the data practices of both versions. However, if the iOS and Android versions collect different data or use different third-party SDKs, your privacy policy must cover all variations. Most developers use one policy that addresses both platforms.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your App",
  description:
    "Follow these five steps to create a compliant privacy policy for your mobile app before submitting to the App Store or Google Play.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your app's data collection",
      text: "Review every piece of data your app collects, accesses, or processes. This includes data from permissions like camera, microphone, location, contacts, and storage. Also check for data collected by third-party SDKs, analytics tools, ad networks, and crash reporting services integrated into your app.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identify third-party services and SDKs",
      text: "List every third-party SDK and service your app uses, such as Firebase, Google Analytics, Facebook SDK, AdMob, Crashlytics, or any payment processors. Each of these services may collect user data independently, and your privacy policy must disclose all third-party data sharing.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Determine which laws apply to your app",
      text: "Identify which privacy laws apply based on your users' locations. GDPR applies if you have EU users. CCPA applies if you have California users and meet business thresholds. COPPA applies if your app is directed at children under 13. CalOPPA applies to any app accessible to California residents.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate or draft your privacy policy",
      text: "Use a privacy policy generator to create a policy that covers all data collection, third-party sharing, user rights, and legal requirements specific to your app. Make sure it specifically describes your app's behavior rather than using generic language that could be flagged during review.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Host and link your privacy policy",
      text: "Host your privacy policy at a publicly accessible URL that does not require authentication. Add the URL to your App Store Connect listing and Google Play Console. Both platforms require the URL to be active and accessible at all times. Submit your app for review with the privacy policy in place.",
    },
  ],
};

const tocSections = [
  { id: "short-answer", title: "The Short Answer" },
  { id: "when-required", title: "When It's Required" },
  { id: "app-store-requirements", title: "App Store Requirements" },
  { id: "legal-requirements", title: "Legal Requirements" },
  { id: "what-to-include", title: "What Your Policy Must Cover" },
  { id: "common-data", title: "Common Data Apps Collect" },
  { id: "consequences", title: "Consequences of Not Having One" },
  { id: "myths-debunked", title: "Common Myths Debunked" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "resources", title: "Related Resources" },
];

export default function DoINeedAPrivacyPolicyForMyAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Do I Need a Privacy Policy for My App? Yes, Here's Why (2026)",
            description:
              "Yes, you need a privacy policy for your app. Apple and Google both require it for app store listing. Learn when it's legally required, what to include, and how to create one in minutes.",
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
                name: "Do I Need a Privacy Policy for My App?",
                item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-my-app",
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
                Do I Need a Privacy Policy for My App?
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Mobile App Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for My App?{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Yes, Both App Stores Require One
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes, you need a privacy policy for your app. Apple requires one
                for every app submitted to the App Store, and Google Play
                requires one for any app that handles personal data. Privacy
                laws like GDPR, CCPA, and COPPA add additional requirements.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For mobile app developers, indie makers, and teams publishing
                to the Apple App Store or Google Play.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for GDPR, CCPA,
                COPPA &amp; app store compliance
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
                App Policy Template
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
                  <strong>Yes, you need a privacy policy for your app.</strong>{" "}
                  Apple requires a privacy policy for every app submitted to
                  the App Store, regardless of whether it collects data.
                  Google Play requires one for any app that accesses personal
                  or sensitive user data. Beyond store requirements, GDPR
                  applies if you have EU users, CCPA applies if you have
                  California users, and COPPA applies if your app is used by
                  children under 13. In practice, every app published on
                  either store needs a privacy policy.
                </p>
              </div>

              {/* Introduction */}
              <p className="text-slate-700 leading-7 mb-4">
                &quot;Do I need a privacy policy for my app?&quot; is one of
                the most common questions app developers ask before
                publishing. The answer is straightforward: yes, you almost
                certainly do. Both major app stores require one, and multiple
                privacy laws may independently mandate it based on where your
                users are located.
              </p>
              <p className="text-slate-700 leading-7 mb-4">
                Mobile apps have deep access to personal data. They can read
                contacts, access camera and microphone, track location, store
                files, and connect to the internet. This level of access is
                exactly why Apple, Google, and privacy regulators worldwide
                require transparency about how your app handles user data.
              </p>
              <p className="text-slate-700 leading-7 mb-8">
                This guide covers exactly when a privacy policy is required,
                what Apple and Google each demand, which laws apply to your
                app, what your policy must include, what happens if you skip
                it, and the most common myths that trip developers up.
              </p>

              {/* Section 1: The Short Answer */}
              <section id="short-answer" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  The Short Answer: Yes, Your App Needs One
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  If you are publishing an app on the Apple App Store or
                  Google Play, you need a privacy policy. Apple requires a
                  privacy policy for all apps, no exceptions. Google Play
                  requires one for any app that accesses personal or sensitive
                  user data, which covers virtually all apps since most
                  request at least one data-related permission.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  In practice, even the simplest app typically collects some
                  form of data. If your app connects to the internet, uses
                  analytics, displays ads, or requests any device permission,
                  it handles user data. An app that uses Firebase for crash
                  reporting is collecting device information. An app that
                  displays AdMob ads is sharing data with Google. An app
                  that stores user preferences locally is still handling
                  user data.
                </p>
                <p className="text-slate-700 leading-7 mb-4">
                  The requirement comes from two separate sources. First,
                  Apple and Google have platform policies requiring a privacy
                  policy. Second, privacy laws like GDPR, CCPA, COPPA, and
                  CalOPPA independently require one based on your users and
                  your app&apos;s behavior.
                </p>

                {/* Quick summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                    <Lock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">Yes</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Both app stores require it
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
                      apps all need a privacy policy if they access user data.
                      Apple requires one for every app regardless of business
                      model. Being free does not exempt you from app store
                      policies or privacy laws.
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-slate-800 text-sm">
                      Q: What if my app only works offline?
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      If your app truly works entirely offline with zero data
                      collection, zero analytics, and zero device permissions,
                      Google Play may not strictly require a privacy policy. But
                      Apple still requires one for all apps. And if your app
                      stores any user-generated content locally, that still
                      counts as data handling. The safest approach is to always
                      have a privacy policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: When It's Required */}
              <section id="when-required" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  When a Privacy Policy Is Required
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  The following table covers the most common app types and
                  whether they require a privacy policy. In almost every
                  scenario, the answer is yes.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          App Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                          Privacy Policy Required?
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[40%]">
                          Reason
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App with user accounts or login
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Collects email, name, and authentication data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App using location services
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Location is sensitive personal data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App with in-app purchases
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Processes transaction and payment-related data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App with analytics or crash reporting
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Third-party SDKs collect device and usage data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App displaying ads
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Ad networks collect and share user data for targeting
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App using camera or microphone
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Access to camera/mic is sensitive data access
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          App targeting children
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Yes
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          COPPA requires strict privacy disclosures
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Fully offline utility app with no permissions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Apple: Yes, Google: Recommended
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Apple requires it for all apps; Google recommends it
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
                        A study of the top 1,000 apps on both stores found that
                        over 92% request at least one permission that accesses
                        personal data. The most common are internet access,
                        storage, camera, location, and contacts. Even a simple
                        flashlight app often requests camera permission, which
                        triggers the privacy policy requirement on Google Play.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: App Store Requirements */}
              <section id="app-store-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  App Store Requirements: Apple vs Google
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Apple and Google both require privacy policies, but their
                  specific requirements differ. Here is what each platform
                  demands.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      A
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Apple App Store (iOS, iPadOS, macOS, watchOS, tvOS)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        Apple requires a privacy policy for all apps submitted
                        to the App Store. This is not optional and applies
                        regardless of whether your app collects user data. You
                        must provide a privacy policy URL in App Store Connect
                        before submitting for review.
                      </p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Privacy policy URL required in App Store Connect</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Privacy nutrition labels must be completed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>App Tracking Transparency required for tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Policy must be accessible without login</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      G
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        Google Play Store (Android)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        Google Play requires a privacy policy for any app that
                        accesses personal or sensitive user data. Since most
                        apps request at least one data-related permission, this
                        effectively applies to nearly all apps. You must provide
                        the privacy policy URL in the Google Play Console.
                      </p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Privacy policy URL required in Google Play Console</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Data Safety section must be completed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Must disclose all data collection and sharing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Policy must match Data Safety declarations</span>
                        </li>
                      </ul>
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
                        Apple began requiring privacy nutrition labels in
                        December 2020 and has steadily increased enforcement.
                        As of 2026, Apple reviewers actively check that your
                        privacy policy matches your nutrition label declarations.
                        Inconsistencies between your policy and your declared
                        data practices can result in app rejection.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Legal Requirements */}
              <section id="legal-requirements" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Legal Requirements: GDPR, CCPA, COPPA, and CalOPPA
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  Beyond app store policies, multiple privacy laws
                  independently require your app to have a privacy policy.
                  These laws apply based on your users&apos; locations, not
                  your business location.
                </p>

                <div className="space-y-5">
                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        GDPR (EU users)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If any of your app users are in the European Union,
                        GDPR requires a privacy policy that explains what data
                        you collect, why you collect it, how long you keep it,
                        and what rights users have. GDPR applies regardless of
                        where your business is based. Fines can reach 20
                        million euros or 4% of annual global revenue.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        CCPA (California users)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If any of your users are in California and your
                        business meets CCPA thresholds, you must provide a
                        privacy policy that includes specific disclosures about
                        data categories collected, the purposes of collection,
                        and whether data is sold or shared. Penalties can reach
                        $7,500 per intentional violation.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        COPPA (apps used by children under 13)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If your app is directed at children under 13 or if you
                        have actual knowledge that children use your app, COPPA
                        requires a privacy policy with specific disclosures
                        about data collected from children, parental consent
                        mechanisms, and data deletion rights. Violations can
                        result in fines up to $50,120 per violation. Both Apple
                        and Google have additional requirements for
                        children&apos;s apps.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 p-5 rounded-xl border border-slate-200 bg-white">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-sm flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">
                        CalOPPA (apps accessible to California residents)
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        CalOPPA requires any commercial app or website
                        accessible to California residents to conspicuously
                        post a privacy policy. Since mobile apps are available
                        globally through app stores, CalOPPA effectively
                        applies to most apps. Your policy must describe the
                        categories of personal information collected and the
                        categories of third parties with whom it is shared.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 my-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">
                        Important
                      </p>
                      <p className="text-sm text-slate-700">
                        These laws apply based on where your users are, not
                        where you are. Since apps are distributed globally
                        through Apple and Google, it is nearly impossible to
                        guarantee you have zero users in the EU, California, or
                        other regulated jurisdictions. The practical approach is
                        to comply with all major privacy laws from the start.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: What Your Policy Must Cover */}
              <section id="what-to-include" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Your App&apos;s Privacy Policy Must Cover
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Both Apple and Google review your privacy policy for
                  completeness. A vague or generic policy that does not
                  address your app&apos;s specific data practices can be
                  flagged during review. Your privacy policy should cover
                  the following areas.
                </p>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>What data your app collects:</strong> List every
                      type of personal data your app collects, including data
                      from device permissions, user inputs, and third-party
                      SDKs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>How data is used:</strong> Explain the purpose
                      of each data collection. Is it for core functionality,
                      analytics, advertising, personalization, or something
                      else?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Third-party data sharing:</strong> Disclose
                      every third party that receives user data, including ad
                      networks, analytics providers, and cloud services.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data storage and security:</strong> Describe
                      how data is stored (locally, in the cloud, or both)
                      and what security measures protect it.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>User rights:</strong> Explain how users can
                      access, correct, delete, or export their data. GDPR
                      and CCPA both grant specific rights.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Data retention:</strong> State how long you
                      keep user data and what happens when users delete
                      their account or uninstall the app.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Contact information:</strong> Provide a way
                      for users to contact you with privacy questions or
                      data requests.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Children&apos;s privacy (if applicable):</strong>{" "}
                      If your app is used by children under 13, include
                      COPPA-specific disclosures about parental consent and
                      data collection from children.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Section 6: Common Data Apps Collect */}
              <section id="common-data" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Data Mobile Apps Collect
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Many developers underestimate how much data their app
                  collects, especially when third-party SDKs are involved.
                  The following table covers the most common data types
                  collected by mobile apps.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-left">
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                          Data Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                          Common Source
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-700 w-[45%]">
                          Why It Matters
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Device identifiers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Analytics SDKs, ad networks
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Used for tracking and attribution across apps
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Location data
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          GPS, Wi-Fi, cell towers
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Reveals physical movements and habits
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Contacts
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contacts permission
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contains names, phone numbers, and email addresses
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Photos and files
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Storage/media permissions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Access to personal photos, documents, and files
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Camera and microphone
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Camera/mic permissions
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Can capture images, video, and audio recordings
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Usage analytics
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Firebase, Mixpanel, Amplitude
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Tracks screens viewed, features used, and session data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          Crash logs
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Crashlytics, Sentry, Bugsnag
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Contains device info, OS version, and app state data
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-800">
                          IP address
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Any network request
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Personal data under GDPR; reveals approximate location
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 leading-7 mb-4">
                  The key takeaway: third-party SDKs often collect data that
                  you did not explicitly code for. If you integrate Firebase,
                  AdMob, Facebook SDK, or any analytics tool, those services
                  collect data independently. Your privacy policy must
                  disclose all data collection, including data collected by
                  third-party code in your app.
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
                        A 2025 study found that the average mobile app includes
                        7 third-party SDKs, each of which may independently
                        collect user data. Many developers are unaware of the
                        full scope of data collection happening through these
                        SDKs. Both Apple and Google now require you to declare
                        data collected by all third-party code in your app, not
                        just your own code.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Consequences */}
              <section id="consequences" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Consequences of Not Having a Privacy Policy
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Skipping the privacy policy is not a minor oversight. There
                  are concrete consequences at both the platform level and
                  the legal level that can derail your app business.
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
                      Both Apple and Google will reject apps without a policy
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
                      Can be taken down during compliance enforcement sweeps
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-slate-700 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Submission rejection:</strong> Apple rejects all
                      apps without a privacy policy URL. Google Play rejects
                      apps that handle user data without one.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Store removal:</strong> Existing apps can be
                      removed from both stores without warning during
                      compliance enforcement sweeps.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Account suspension:</strong> Repeated violations
                      can lead to permanent suspension of your developer
                      account on either platform.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Loss of users and revenue:</strong> If your app
                      is removed, you lose all existing users, ratings, and
                      reviews. Re-publishing under a new listing means
                      starting from zero.
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
                      of annual global revenue, whichever is higher.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>CCPA penalties:</strong> Up to $7,500 per
                      intentional violation and $2,500 per unintentional
                      violation. Consumers can also bring private lawsuits
                      for data breaches.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>COPPA fines:</strong> Up to $50,120 per violation
                      for apps that collect data from children without proper
                      disclosures and parental consent.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>User lawsuits:</strong> In some jurisdictions,
                      users can sue directly if their data is mishandled or
                      required disclosures are missing.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Section 8: Common Myths Debunked */}
              <section id="myths-debunked" className="mb-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Myths Debunked
                </h2>
                <p className="text-slate-700 leading-7 mb-6">
                  These five myths are the most common misconceptions that
                  lead app developers to skip the privacy policy. Every one
                  of them is wrong.
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My app does not collect data, so I do not
                        need a privacy policy&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Apple requires a privacy policy for all apps,
                        regardless of data collection. On Google Play, even if
                        your own code collects nothing, third-party SDKs like
                        Firebase or AdMob may collect device data, crash logs,
                        and analytics. If your app makes any network request,
                        the server logs the user&apos;s IP address, which is
                        personal data under GDPR.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;My app only stores data on the
                        device, so no policy is needed&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Local storage still counts as data handling. Whether
                        your app uses SQLite, SharedPreferences, Core Data, or
                        the file system, you are storing user data on the
                        user&apos;s device. Your privacy policy must disclose
                        what data is stored and for what purpose. And if the
                        device backs up to iCloud or Google Drive, that local
                        data may be synced to the cloud automatically.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        Myth: &quot;Apple&apos;s or Google&apos;s privacy
                        policy covers my app&quot;
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        Apple&apos;s and Google&apos;s privacy policies cover
                        their own platforms and services. They do not cover
                        your app. You are the data controller for your
                        app&apos;s data handling. Pointing to Apple&apos;s or
                        Google&apos;s policy will not satisfy the app store
                        requirement or any privacy law. You need your own
                        policy that specifically describes your app&apos;s
                        data practices.
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
                        indie developers to large corporations. Apple and
                        Google do not differentiate based on company size.
                        GDPR applies to all data controllers regardless of
                        size. If your app handles user data, you need a
                        privacy policy whether you are a hobbyist or a
                        Fortune 500 company.
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
                        Apple will not let you submit your app without a
                        privacy policy URL. Google Play will reject apps that
                        handle user data without one. You cannot publish first
                        and add one later. Even if an earlier version was
                        published without one, submitting an update without
                        a privacy policy will trigger rejection. Create your
                        policy before you submit for review.
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
                      Do I need a privacy policy for my app?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Both Apple and Google require a privacy policy for
                      apps published on their stores. Apple requires one for
                      all apps. Google Play requires one for any app that
                      handles personal data. Privacy laws like GDPR, CCPA,
                      and COPPA may also independently require one.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does my free app need a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. The requirement is based on data handling, not
                      whether your app is free or paid. Free apps, ad-supported
                      apps, and paid apps all need a privacy policy if they
                      access personal data. Apple requires one regardless of
                      business model.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Apple require a privacy policy for all apps?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Apple requires a privacy policy URL for every app
                      submitted to the App Store. This applies to all apps
                      regardless of whether they collect user data. You must
                      also complete privacy nutrition labels and App Tracking
                      Transparency declarations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Does Google Play require a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Yes. Google Play requires a privacy policy for any app
                      that accesses personal or sensitive user data. You must
                      also complete the Data Safety section in the Google
                      Play Console. Apps without a privacy policy that handle
                      user data can be removed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What happens if my app does not have a privacy policy?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your app can be rejected during review, removed from
                      the store, or your developer account can be suspended.
                      You may also face legal penalties under GDPR (up to 20
                      million euros), CCPA (up to $7,500 per violation), or
                      COPPA (up to $50,120 per violation).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      What should my app&apos;s privacy policy include?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      Your policy should include what data your app collects,
                      how data is used, third-party data sharing, data storage
                      and security measures, user rights, data retention
                      practices, and your contact information. If your app
                      targets children, you must also address COPPA compliance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-2">
                      Do I need a separate privacy policy for iOS and Android?
                    </h3>
                    <p className="text-slate-600 leading-7 text-sm">
                      You do not need separate policies if a single policy
                      accurately covers both versions. However, if the iOS and
                      Android versions collect different data or use different
                      SDKs, your policy must address all variations. Most
                      developers use one policy for both platforms.
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
                      desc: "Mobile-specific privacy policy guidance",
                    },
                    {
                      href: "/do-mobile-apps-need-a-privacy-policy",
                      title: "Do Mobile Apps Need a Privacy Policy?",
                      desc: "Detailed breakdown of when apps need one",
                    },
                    {
                      href: "/apple-app-store-privacy-policy-requirements",
                      title: "Apple App Store Privacy Requirements",
                      desc: "Everything Apple requires for app privacy",
                    },
                    {
                      href: "/privacy-policy-for-google-play",
                      title: "Privacy Policy for Google Play",
                      desc: "Google Play Console privacy requirements",
                    },
                    {
                      href: "/mobile-app-privacy-policy-template",
                      title: "Mobile App Privacy Policy Template",
                      desc: "Ready-to-use template for your app",
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
                  policy tailored to your app in under 60 seconds.
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
