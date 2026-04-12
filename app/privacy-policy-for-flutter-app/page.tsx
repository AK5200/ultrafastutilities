import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Smartphone,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Globe,
  Lock,
  Code,
  Cpu,
  Bell,
  Clock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Flutter Apps [Developer Guide 2026]",
  description:
    "Create a privacy policy for your Flutter app. Covers Google Play and App Store requirements, Firebase, Crashlytics, device permissions, and cross-platform data.",
  keywords:
    "privacy policy for flutter app, flutter privacy policy, flutter app store requirements, flutter firebase privacy, flutter GDPR compliance",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-flutter-app",
  },
  openGraph: {
    title: "Privacy Policy for Flutter Apps [Developer Guide 2026]",
    description:
      "Create a privacy policy for your Flutter app. Covers Google Play and App Store requirements, Firebase, Crashlytics, device permissions, and cross-platform data.",
    url: "https://ultrafastutilities.com/privacy-policy-for-flutter-app",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Flutter Apps | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Flutter Apps [Developer Guide 2026]",
    description:
      "Create a privacy policy for your Flutter app. Covers Google Play and App Store requirements, Firebase, Crashlytics, device permissions, and cross-platform data.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-flutter-needs-policy", title: "Why Flutter Apps Need a Policy" },
  { id: "store-requirements", title: "App Store Requirements" },
  { id: "flutter-data-collection", title: "Flutter Data Collection" },
  { id: "permissions", title: "Platform Permissions" },
  { id: "what-to-include", title: "What to Include" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForFlutterAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Flutter Apps [Developer Guide 2026]",
            description:
              "Create a privacy policy for your Flutter app. Covers Google Play and App Store requirements, Firebase, Crashlytics, device permissions, and cross-platform data.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2025-01-01",
            dateModified: "2026-04-11",
            publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Flutter Apps", item: "https://ultrafastutilities.com/privacy-policy-for-flutter-app" },
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
              <span className="text-slate-600">Privacy Policy for Flutter Apps</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Code className="w-3.5 h-3.5" />
                Developer Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Flutter Apps
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Flutter deploys to iOS, Android, and web from a single codebase --
                but each platform has its own privacy requirements. Here is what
                your privacy policy needs to cover for all targets.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Flutter developers, indie makers, and app publishers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-mobile-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Smartphone className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Mobile App Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-android-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Cpu className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Android App Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/generate"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4" />
                Generate Policy
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
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>9 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: Why Flutter Apps Need a Privacy Policy */}
              <section id="why-flutter-needs-policy" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Flutter Apps Need a Privacy Policy
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Flutter is a cross-platform framework that compiles to native
                    code for iOS, Android, web, and desktop. Because a single
                    Flutter codebase can deploy to multiple platforms, your privacy
                    policy must address the requirements of each store and
                    jurisdiction. Both{" "}
                    <Link
                      href="/privacy-policy-for-android-apps"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Google Play
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and Apple App Store require a privacy policy URL before your
                    app can be published.
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Key point:</strong>{" "}
                        Google Play requires all apps to have a privacy policy --
                        even apps that do not collect user data. Apple requires a
                        privacy policy for all apps that access user data or use
                        third-party SDKs. Since nearly every Flutter app uses at
                        least one plugin that accesses device data, you need one.
                      </div>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-slate-700 mt-6">
                    Flutter apps commonly use Firebase for authentication,
                    analytics, and crash reporting. Each of these services collects
                    personal data that must be disclosed in your privacy policy. The
                    typical Flutter app collects more data than developers realize
                    because plugins and SDKs operate at the native platform level.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: App Store Requirements */}
              <section id="store-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Google Play and Apple App Store Requirements
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Both stores have specific privacy policy requirements
                      that apply to all Flutter apps.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Requirement</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Google Play</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Apple App Store</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { req: "Privacy policy URL", google: "Required for all apps", apple: "Required for all apps" },
                          { req: "Data Safety Section", google: "Required -- must declare all data types collected", apple: "Privacy Nutrition Labels required" },
                          { req: "In-app access", google: "Recommended -- link in app settings", apple: "Required -- must be accessible within the app" },
                          { req: "Third-party SDK disclosure", google: "Must disclose all SDKs that collect data", apple: "Must declare in App Privacy details" },
                          { req: "Account deletion", google: "Required if app supports account creation", apple: "Required if app supports account creation" },
                          { req: "Children's data", google: "Must comply with Families Policy if targeting children", apple: "COPPA compliance required -- no tracking under 13" },
                        ].map((row, i) => (
                          <tr key={row.req} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="py-3 px-4 font-medium text-slate-800">{row.req}</td>
                            <td className="py-3 px-4 text-slate-600">{row.google}</td>
                            <td className="py-3 px-4 text-slate-600">{row.apple}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Important:</strong>{" "}
                        Google Play&apos;s Data Safety Section must match your actual
                        data practices. If you use Firebase Analytics but do not
                        declare analytics data collection, your app can be removed.
                        Audit your pubspec.yaml dependencies before filling this out.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Flutter-Specific Data Collection */}
              <section id="flutter-data-collection" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Flutter-Specific Data Collection
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Common Flutter packages and SDKs that collect personal
                      data you must disclose.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* Firebase Analytics */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Firebase Analytics (firebase_analytics)
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Automatically collects device model, OS version, screen resolution, and app version
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Generates a Firebase Instance ID and app instance identifier
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Tracks user engagement events, session duration, and screen views
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Data sent to Google servers in the US -- must disclose for GDPR
                      </li>
                    </ul>
                  </div>

                  {/* Crashlytics */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Firebase Crashlytics (firebase_crashlytics)
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Collects crash stack traces, device state, and memory usage at time of crash
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Records Crashlytics installation UUID -- a unique device identifier
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Custom keys and logs may inadvertently capture user data if not sanitized
                      </li>
                    </ul>
                  </div>

                  {/* device_info and other plugins */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Cpu className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Device Info and Common Plugins
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        device_info_plus exposes device model, manufacturer, OS version, and unique identifiers
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        package_info_plus reveals app version and build number
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        shared_preferences stores data locally that may include user settings or tokens
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        connectivity_plus and geolocator access network state and GPS coordinates
                      </li>
                    </ul>
                  </div>

                  {/* Push Notifications and In-App Purchases */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Bell className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Push Notifications and In-App Purchases
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        firebase_messaging generates FCM tokens -- unique per-device notification identifiers
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        in_app_purchase collects transaction data including purchase history and receipts
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        RevenueCat (purchases_flutter) syncs subscription data to external servers
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        OneSignal and other notification SDKs may collect advertising identifiers
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Platform Permissions */}
              <section id="permissions" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Platform Permissions to Disclose
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Flutter apps request permissions at the native platform level.
                    Each permission grants access to personal data that must be
                    disclosed in your privacy policy. Check your AndroidManifest.xml
                    and Info.plist for the permissions your app actually uses.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80">
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Permission</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Data Accessed</th>
                          <th className="text-left py-3 px-4 font-semibold text-slate-900">Disclosure Needed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { perm: "Camera", data: "Photos, videos from device camera", disclosure: "Why you need camera access and where images are stored or transmitted" },
                          { perm: "Location", data: "GPS coordinates, approximate location", disclosure: "Whether location is used in foreground only or background, and who receives it" },
                          { perm: "Contacts", data: "Names, phone numbers, emails from address book", disclosure: "Why you access contacts and whether data leaves the device" },
                          { perm: "Microphone", data: "Audio recordings", disclosure: "When recording occurs, where audio is stored, and whether it is processed by third parties" },
                          { perm: "Storage", data: "Files on the device", disclosure: "What files you read or write and whether any are uploaded to servers" },
                          { perm: "IDFA / GAID", data: "Advertising identifier", disclosure: "Required for Apple ATT prompt -- must explain ad tracking and allow opt-out" },
                        ].map((row, i) => (
                          <tr key={row.perm} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                            <td className="py-3 px-4 font-medium text-slate-800">{row.perm}</td>
                            <td className="py-3 px-4 text-slate-600">{row.data}</td>
                            <td className="py-3 px-4 text-slate-600">{row.disclosure}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: What to Include */}
              <section id="what-to-include" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Your Flutter App Privacy Policy Must Include
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <div className="space-y-4">
                    {[
                      {
                        icon: FileText,
                        iconBg: "bg-blue-50",
                        iconColor: "text-blue-600",
                        title: "SDK and Plugin Data Disclosure",
                        desc: "List every Flutter package and SDK that collects data -- Firebase Analytics, Crashlytics, AdMob, RevenueCat, Sentry, and any others in your pubspec.yaml.",
                      },
                      {
                        icon: Smartphone,
                        iconBg: "bg-emerald-50",
                        iconColor: "text-emerald-600",
                        title: "Per-Platform Data Practices",
                        desc: "Explain any differences in data collection between iOS, Android, and web builds. iOS ATT requirements, Android advertising ID usage, and web cookies each need separate disclosure.",
                      },
                      {
                        icon: Lock,
                        iconBg: "bg-violet-50",
                        iconColor: "text-violet-600",
                        title: "Authentication Data",
                        desc: "If you use Firebase Auth, Google Sign-In, Apple Sign-In, or other providers, disclose what profile data you receive and store (name, email, profile photo, provider ID).",
                      },
                      {
                        icon: Globe,
                        iconBg: "bg-orange-50",
                        iconColor: "text-orange-600",
                        title: "Server-Side Data Processing",
                        desc: "Disclose your backend infrastructure -- Firebase, Supabase, AWS, or custom servers. Include where data is stored geographically and your data processing agreements.",
                      },
                      {
                        icon: Bell,
                        iconBg: "bg-rose-50",
                        iconColor: "text-rose-600",
                        title: "Push Notification Tokens",
                        desc: "FCM and APNs tokens are personal data. Disclose that you collect them, what notifications you send, and how users can opt out of push notifications.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}
                        >
                          <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 text-[15px]">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-500 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                      Generate Your Flutter App Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized privacy policy that covers your Flutter
                      app&apos;s SDK usage, platform permissions, and store
                      requirements.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Flutter-specific disclosures</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
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
                      href: "/privacy-policy-for-mobile-apps",
                      icon: Smartphone,
                      title: "Privacy Policy for Mobile Apps",
                      desc: "General mobile app compliance",
                    },
                    {
                      href: "/privacy-policy-for-android-apps",
                      icon: Cpu,
                      title: "Privacy Policy for Android Apps",
                      desc: "Google Play compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-ios-apps",
                      icon: Smartphone,
                      title: "Privacy Policy for iOS Apps",
                      desc: "Apple App Store compliance",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance requirements",
                    },
                    {
                      href: "/privacy-policy-for-firebase",
                      icon: Globe,
                      title: "Privacy Policy for Firebase",
                      desc: "Firebase data compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-react-native-app",
                      icon: Code,
                      title: "Privacy Policy for React Native",
                      desc: "Cross-platform alternative guide",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance requirements",
                    },
                    {
                      href: "/generate",
                      icon: ShieldCheck,
                      title: "Policy Generator",
                      desc: "Create your compliant privacy policy",
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
