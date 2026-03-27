import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Flame,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  BarChart3,
  Bell,
  Lock,
  Database,
  Zap,
  Clock,
  XCircle,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Firebase: App Developer Guide (2026) | ultrafastutilities",
  description: "Using Firebase in your app? Your privacy policy must disclose it. Learn what each Firebase service collects, from Analytics to Crashlytics to Cloud Messaging, and how to properly disclose it.",
  keywords: "privacy policy for firebase, firebase privacy policy, firebase data collection, firebase analytics privacy, firebase app privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-firebase",
  },
  openGraph: {
    title: "Privacy Policy for Firebase: App Developer Guide (2026) | ultrafastutilities",
    description: "Using Firebase in your app? Your privacy policy must disclose it. Learn what each Firebase service collects, from Analytics to Crashlytics to Cloud Messaging, and how to properly disclose it.",
    url: "https://ultrafastutilities.com/privacy-policy-for-firebase",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Firebase | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Firebase: App Developer Guide (2026) | ultrafastutilities",
    description: "Using Firebase in your app? Your privacy policy must disclose it. Learn what each Firebase service collects, from Analytics to Crashlytics to Cloud Messaging, and how to properly disclose it.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-disclosure", title: "Why Firebase Requires Disclosure" },
  { id: "firebase-services", title: "Firebase Services Data Table" },
  { id: "google-data-terms", title: "Google Data Processing Terms" },
  { id: "firebase-analytics", title: "Firebase Analytics & GA4" },
  { id: "crashlytics", title: "Crashlytics Data Collection" },
  { id: "cloud-messaging", title: "Cloud Messaging & Push" },
  { id: "authentication", title: "Firebase Authentication Data" },
  { id: "app-store-requirements", title: "App Store Requirements" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "howto", title: "How to Write Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForFirebasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Privacy Policy for Firebase: App Developer Guide (2026) | ultrafastutilities",
            description: "Using Firebase in your app? Your privacy policy must disclose it. Learn what each Firebase service collects, from Analytics to Crashlytics to Cloud Messaging, and how to properly disclose it.",
            author: { "@type": "Person", name: "Anupam Kumar" },
            datePublished: "2026-03-27",
            dateModified: "2026-03-27",
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
              { "@type": "ListItem", position: 2, name: "Privacy Policy for Firebase", item: "https://ultrafastutilities.com/privacy-policy-for-firebase" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Write a Firebase Privacy Policy",
            description: "Step-by-step guide to creating a privacy policy that properly discloses Firebase service usage in your app.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Audit your Firebase services", text: "List every Firebase service enabled in your project console. Each service collects different data and requires separate disclosure." },
              { "@type": "HowToStep", position: 2, name: "Map data collection per service", text: "For each active Firebase service, document exactly what data it collects, including device identifiers, IP addresses, crash logs, and user properties." },
              { "@type": "HowToStep", position: 3, name: "Identify Google's data processing role", text: "Determine whether Google acts as a data processor or controller for each service and reference the appropriate Data Processing Terms." },
              { "@type": "HowToStep", position: 4, name: "Draft service-specific disclosures", text: "Write clear sections explaining what each Firebase service collects, why it collects it, and how long data is retained." },
              { "@type": "HowToStep", position: 5, name: "Add opt-out and user rights sections", text: "Include instructions for users to opt out of analytics tracking, delete their data, and exercise their privacy rights under GDPR and CCPA." },
              { "@type": "HowToStep", position: 6, name: "Test and validate your disclosures", text: "Review your policy against Google Play and Apple App Store requirements. Verify that your app's data safety declarations match your privacy policy." },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need a privacy policy if I only use Firebase Authentication?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Firebase Authentication collects email addresses, phone numbers, OAuth tokens, and IP addresses. Even this single service requires a privacy policy that discloses what data is collected and how it is processed." },
              },
              {
                "@type": "Question",
                name: "Does Firebase Analytics collect data automatically without code?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Once the Firebase SDK is added, Analytics automatically collects certain events and user properties including device model, OS version, app version, and session data. You must disclose this even if you have not written any custom analytics code." },
              },
              {
                "@type": "Question",
                name: "Is Firebase GDPR compliant?",
                acceptedAnswer: { "@type": "Answer", text: "Firebase provides tools and Data Processing Terms to support GDPR compliance, but compliance depends on how you implement and disclose Firebase in your app. You must configure data retention settings, provide opt-out mechanisms, and include proper disclosures in your privacy policy." },
              },
              {
                "@type": "Question",
                name: "What Firebase data do I need to declare in Google Play's Data Safety section?",
                acceptedAnswer: { "@type": "Answer", text: "You must declare all data types collected by each Firebase service you use. This includes device identifiers, crash logs, analytics data, authentication tokens, and any user-generated content stored in Firestore or Realtime Database. Google provides a Firebase-specific guide for Data Safety declarations." },
              },
              {
                "@type": "Question",
                name: "Can I use Firebase without collecting personal data?",
                acceptedAnswer: { "@type": "Answer", text: "Most Firebase services collect some form of personal data by default, such as device identifiers and IP addresses. While you can disable certain collection features (like Analytics) and configure data retention, it is very difficult to use Firebase with zero personal data collection." },
              },
              {
                "@type": "Question",
                name: "How do I handle Firebase data deletion requests?",
                acceptedAnswer: { "@type": "Answer", text: "For Authentication data, you can delete user accounts through the Firebase console or Admin SDK. For Analytics data, you can use the user deletion API. For Firestore and Realtime Database, you must implement your own deletion logic. Your privacy policy should explain your deletion process for each service." },
              },
              {
                "@type": "Question",
                name: "Does Firebase transfer data outside the EU?",
                acceptedAnswer: { "@type": "Answer", text: "Yes. Firebase services process data on Google's global infrastructure, which means data may be transferred outside the EU. Google's Data Processing Terms include Standard Contractual Clauses to provide a legal basis for these transfers under GDPR." },
              },
            ],
          }),
        }}
      />
      <ReadingProgress />
      <main className="min-h-screen">
        {/* Hero Section */}
        <header className="relative overflow-hidden border-b border-slate-200/60">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-white to-white" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-orange-50/60 blur-3xl" />
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
              <span className="text-slate-600">Privacy Policy for Firebase</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-medium mb-6">
                <Flame className="w-3.5 h-3.5" />
                Firebase Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                  Firebase
                </span>
                : What App Developers Must Disclose About Firebase Services
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Firebase powers millions of apps, but each service collects
                different data. Your privacy policy must disclose exactly which
                Firebase services you use and what they collect.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for app developers and mobile teams.
              </p>
            </div>

            {/* Featured Snippet */}
            <div className="mt-8 max-w-2xl rounded-xl border border-orange-200/80 bg-orange-50/50 p-5">
              <div className="flex gap-3">
                <Flame className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed text-slate-700">
                  <strong className="text-slate-900">Quick answer:</strong>{" "}
                  If your app uses any Firebase service, you need a privacy
                  policy. Firebase services like Analytics, Crashlytics, and
                  Authentication automatically collect personal data including
                  device identifiers, IP addresses, and usage patterns. Both
                  Google Play and the Apple App Store require you to disclose
                  this data collection in a privacy policy.
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-apps"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Apps
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-google-analytics"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <BarChart3 className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Google Analytics Policy
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
                <span>Last updated: March 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>12 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>Reviewed for compliance</span>
                </div>
              </div>

              {/* Section 1: Why Firebase Requires Privacy Disclosure */}
              <section id="why-disclosure" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Firebase Requires Privacy Disclosure
                    </h2>
                  </div>
                </div>
                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Firebase is not a single product. It is a suite of over a
                    dozen services, each with its own data collection practices.
                    When you add the Firebase SDK to your app, multiple services
                    may begin collecting data automatically, even before you
                    write a single line of custom code. Both{" "}
                    <Link
                      href="/privacy-policy-for-google-play"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Google Play
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and the Apple App Store require apps to have a privacy policy
                    that accurately describes all data collection.
                  </p>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        Firebase Analytics automatically collects screen views,
                        session data, device model, OS version, and app version
                        the moment the SDK is initialized. Many developers do not
                        realize this data collection begins before any custom
                        events are logged.
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-7 text-slate-700">
                    Google requires developers who use Firebase to maintain a
                    privacy policy. This is not optional. If your{" "}
                    <Link
                      href="/privacy-policy-for-mobile-apps"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      mobile app
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    uses any Firebase service, your policy must name Firebase,
                    describe what data each service collects, and explain how
                    that data is processed and stored.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Firebase Services Data Table */}
              <section id="firebase-services" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Firebase Services and Data Collection
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Each Firebase service collects different types of data.
                      Your privacy policy must account for every service you use.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200/60">
                          <th className="text-left px-4 py-3 font-semibold text-slate-900">Service</th>
                          <th className="text-left px-4 py-3 font-semibold text-slate-900">Data Collected</th>
                          <th className="text-left px-4 py-3 font-semibold text-slate-900">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/60">
                        {[
                          { service: "Analytics", data: "Device ID, session data, screen views, events, user properties", purpose: "Usage tracking and reporting" },
                          { service: "Crashlytics", data: "Crash logs, stack traces, device state, OS version", purpose: "Crash reporting and stability monitoring" },
                          { service: "Cloud Messaging", data: "Device tokens, message metadata, delivery data", purpose: "Push notifications" },
                          { service: "Authentication", data: "Email, phone number, OAuth tokens, IP address", purpose: "User identity and sign-in" },
                          { service: "Firestore", data: "User-defined document data, read/write metadata", purpose: "Cloud database storage" },
                          { service: "Realtime Database", data: "User-defined JSON data, connection metadata", purpose: "Real-time data sync" },
                          { service: "Remote Config", data: "Device info, app version, country", purpose: "Feature flags and A/B config" },
                          { service: "Performance Monitoring", data: "App startup time, HTTP request traces, device info", purpose: "App performance tracking" },
                          { service: "A/B Testing", data: "Experiment assignments, Analytics events", purpose: "Experiment management" },
                          { service: "Dynamic Links", data: "Link metadata, device info, referrer data", purpose: "Deep linking across platforms" },
                          { service: "Cloud Functions", data: "Request data, execution logs", purpose: "Server-side logic execution" },
                          { service: "ML Kit", data: "Image/text data (on-device or cloud), model usage", purpose: "Machine learning features" },
                          { service: "AdMob", data: "Ad interactions, device ID, location (if permitted)", purpose: "Ad serving and revenue" },
                        ].map((row) => (
                          <tr key={row.service} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-800">{row.service}</td>
                            <td className="px-4 py-3 text-slate-600">{row.data}</td>
                            <td className="px-4 py-3 text-slate-600">{row.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        AdMob integration triggers additional data collection
                        beyond what other Firebase services gather. If you
                        monetize with AdMob, your privacy policy must also
                        disclose ad tracking, device advertising IDs, and
                        potential location data access.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Google's Data Processing Terms */}
              <section id="google-data-terms" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Google's Data Processing Terms
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Google offers Firebase Data Processing Terms that govern how
                    Google handles data collected through Firebase services. These
                    terms are important for{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR compliance
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    because they establish Google's role as a data processor for
                    most Firebase services.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Data processor services",
                        text: "For Crashlytics, Cloud Firestore, Authentication, and Cloud Functions, Google acts as your data processor and only processes data on your instructions.",
                      },
                      {
                        label: "Data controller services",
                        text: "For Firebase Analytics (when linked to Google Analytics), Google may act as an independent data controller, using data for its own purposes like benchmarking.",
                      },
                      {
                        label: "Standard Contractual Clauses",
                        text: "Google's Data Processing Terms include SCCs for international data transfers, providing a legal mechanism for EU data to be processed on Google's global infrastructure.",
                      },
                      {
                        label: "Data retention controls",
                        text: "You can configure retention periods for Analytics data (2 or 14 months) and request deletion of user data through the Firebase console or API.",
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

                  {/* Mini-FAQ 1 */}
                  <div className="mt-6 rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
                    <p className="text-sm font-semibold text-slate-900 mb-2">
                      Do I need to sign Google's Data Processing Terms separately?
                    </p>
                    <p className="text-sm leading-relaxed text-slate-700">
                      No. The Firebase Data Processing Terms are automatically
                      included when you accept the Firebase Terms of Service. However,
                      you should review them to understand your obligations and
                      reference them in your privacy policy when explaining how Google
                      processes data on your behalf.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Firebase Analytics and Google Analytics 4 */}
              <section id="firebase-analytics" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Firebase Analytics and Google Analytics 4
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Firebase Analytics is now powered by{" "}
                    <Link
                      href="/privacy-policy-for-google-analytics"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Google Analytics 4
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    . This means your app's analytics data flows into the same
                    Google Analytics infrastructure used by websites. Your privacy
                    policy must reflect this connection.
                  </p>

                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        What Firebase Analytics Collects Automatically
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        App instance ID (unique per device installation)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Screen views and session duration
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Device model, brand, OS version, and app version
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Country, region, and language settings
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        First open time, app update events, and in-app purchases
                      </li>
                    </ul>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    If you link your Firebase project to Google Analytics, the
                    data sharing settings in your GA4 property also apply. Review
                    both your Firebase and Google Analytics configurations to
                    ensure your privacy policy covers all data flows.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Crashlytics Data Collection */}
              <section id="crashlytics" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Crashlytics Data Collection
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Crashlytics is one of the most widely used Firebase services,
                    and it collects significant device and app data when crashes
                    occur. Many developers underestimate how much information
                    Crashlytics captures.
                  </p>

                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-red-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Crashlytics Data Points
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Crash traces and stack traces
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Crashlytics installation UUID
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Device state at crash time (orientation, free RAM, disk space)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Operating system version and device model
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Custom keys and logs (if you add them in your code)
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-amber-200/80 bg-amber-50/50 p-5">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Did you know?</strong>{" "}
                        If you use custom keys or custom log messages in
                        Crashlytics, you could inadvertently send personal data
                        (like user IDs or email addresses) in crash reports. Always
                        audit your Crashlytics logging to ensure you are not
                        transmitting sensitive information unintentionally.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Cloud Messaging and Push Notifications */}
              <section id="cloud-messaging" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Cloud Messaging and Push Notifications
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Firebase Cloud Messaging (FCM) enables push notifications, but
                    it also collects data that must be disclosed. Each device that
                    registers for push notifications receives a unique token, and
                    FCM tracks delivery metadata.
                  </p>

                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Bell className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        FCM Data Collection
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Device registration tokens (unique per app installation)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Message delivery status and timestamps
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Topic subscriptions and device group memberships
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Message open and interaction analytics (if linked to Analytics)
                      </li>
                    </ul>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    Your privacy policy should explain that you use push
                    notifications, what triggers them, and how users can opt out
                    by disabling notifications in their device settings.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Firebase Authentication Data */}
              <section id="authentication" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Firebase Authentication Data
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Firebase Authentication stores user identity data that is
                    clearly personal information under every major privacy law.
                    The specific data depends on which sign-in methods you enable.
                  </p>

                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Authentication Data by Sign-in Method
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Email/password: email address, password hash, account creation date
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Phone authentication: phone number, verification codes
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Google/Facebook/Apple sign-in: OAuth tokens, display name, profile photo URL
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Anonymous authentication: unique user ID and IP address
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        All methods: last sign-in time, user agent, and IP address
                      </li>
                    </ul>
                  </div>

                  {/* Mini-FAQ 2 */}
                  <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-5">
                    <p className="text-sm font-semibold text-slate-900 mb-2">
                      Does anonymous authentication still collect personal data?
                    </p>
                    <p className="text-sm leading-relaxed text-slate-700">
                      Yes. Even anonymous authentication creates a persistent user
                      ID and logs the IP address. Under GDPR, IP addresses are
                      considered personal data, so anonymous authentication still
                      requires disclosure in your privacy policy.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: App Store Requirements for Firebase */}
              <section id="app-store-requirements" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      App Store Requirements for Firebase
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Both Google Play and the Apple App Store have specific
                    requirements for apps that use Firebase. Your{" "}
                    <Link
                      href="/privacy-policy-for-apps"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      app privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    must align with your store listing declarations.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Google Play Data Safety",
                        text: "You must declare all data types collected by Firebase services in your Data Safety section. Google provides a Firebase-specific mapping guide to help you complete this accurately.",
                      },
                      {
                        label: "Apple App Privacy Labels",
                        text: "Apple requires you to declare data collection for each Firebase SDK in your App Privacy nutrition labels. This includes analytics identifiers, crash data, and authentication information.",
                      },
                      {
                        label: "Privacy policy link requirement",
                        text: "Both stores require a working privacy policy URL in your app listing. Apps without a privacy policy link will be rejected or removed.",
                      },
                      {
                        label: "Consistency requirement",
                        text: "Your privacy policy text must match your store listing declarations. If your policy says you do not collect location data but your app includes Firebase services that access location, your app may be flagged.",
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

                  <p className="text-base leading-7 text-slate-700">
                    For{" "}
                    <Link
                      href="/android-app-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Android apps
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , pay special attention to the Google Play Data Safety form,
                    which requires you to declare whether data is collected,
                    shared, or processed for each Firebase service individually.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 9: Common Mistakes */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    9
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Mistakes Developers Make
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-4">
                  {[
                    {
                      mistake: "Not listing Firebase by name",
                      detail: "Generic phrases like \"we use third-party analytics\" are insufficient. Your policy must name Firebase and each specific service you use.",
                    },
                    {
                      mistake: "Ignoring automatic data collection",
                      detail: "Firebase Analytics collects data the moment the SDK initializes. If you added the Firebase SDK, you are collecting data, even without custom event code.",
                    },
                    {
                      mistake: "Forgetting about Crashlytics disclosures",
                      detail: "Crashlytics collects device identifiers and crash data that qualify as personal information. Many developers forget to mention crash reporting in their privacy policies.",
                    },
                    {
                      mistake: "Mismatched store declarations",
                      detail: "Your Google Play Data Safety or Apple Privacy Labels must match your privacy policy. Inconsistencies can lead to app removal or rejection.",
                    },
                    {
                      mistake: "No opt-out mechanism for analytics",
                      detail: "GDPR requires a way for users to opt out of analytics tracking. Firebase provides APIs to disable Analytics collection, but you must implement and disclose them.",
                    },
                  ].map((item) => (
                    <div
                      key={item.mistake}
                      className="flex items-start gap-3 rounded-xl border border-red-100/80 bg-red-50/30 p-4"
                    >
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">
                          {item.mistake}
                        </p>
                        <p className="text-sm leading-relaxed text-slate-600 mt-1">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 10: HowTo - Write Your Firebase Privacy Policy */}
              <section id="howto" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Write Your Firebase Privacy Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Follow these six steps to create a compliant privacy policy
                      for your Firebase-powered app.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Audit your Firebase services",
                      text: "Open your Firebase console and review the list of enabled services. Check your build.gradle or Podfile for Firebase SDK dependencies. Every imported Firebase library represents a service that may collect data.",
                    },
                    {
                      step: 2,
                      title: "Map data collection per service",
                      text: "For each active service, document the specific data types collected. Use the table above as a starting reference, then check Google's official documentation for the most current list of data points.",
                    },
                    {
                      step: 3,
                      title: "Identify Google's data processing role",
                      text: "Determine whether Google acts as a processor or controller for each service. This distinction affects your GDPR disclosures and your legal basis for processing.",
                    },
                    {
                      step: 4,
                      title: "Draft service-specific disclosures",
                      text: "Write clear, plain-language sections for each Firebase service. Explain what data is collected, why, how long it is retained, and whether it is shared with Google or other parties.",
                    },
                    {
                      step: 5,
                      title: "Add opt-out and user rights sections",
                      text: "Include instructions for disabling analytics collection, deleting accounts, and exercising data rights under GDPR and CCPA. Reference the Firebase APIs that support these actions.",
                    },
                    {
                      step: 6,
                      title: "Validate against store requirements",
                      text: "Cross-reference your privacy policy with your Google Play Data Safety and Apple App Privacy declarations. Ensure every data type you disclose in the stores is also covered in your policy.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-base leading-7 text-slate-700 mt-1">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      q: "Do I need a privacy policy if I only use Firebase Authentication?",
                      a: "Yes. Firebase Authentication collects email addresses, phone numbers, OAuth tokens, and IP addresses. Even this single service requires a privacy policy that discloses what data is collected and how it is processed.",
                    },
                    {
                      q: "Does Firebase Analytics collect data automatically without code?",
                      a: "Yes. Once the Firebase SDK is added, Analytics automatically collects certain events and user properties including device model, OS version, app version, and session data. You must disclose this even if you have not written any custom analytics code.",
                    },
                    {
                      q: "Is Firebase GDPR compliant?",
                      a: "Firebase provides tools and Data Processing Terms to support GDPR compliance, but compliance depends on how you implement and disclose Firebase in your app. You must configure data retention settings, provide opt-out mechanisms, and include proper disclosures in your privacy policy.",
                    },
                    {
                      q: "What Firebase data do I need to declare in Google Play's Data Safety section?",
                      a: "You must declare all data types collected by each Firebase service you use. This includes device identifiers, crash logs, analytics data, authentication tokens, and any user-generated content stored in Firestore or Realtime Database.",
                    },
                    {
                      q: "Can I use Firebase without collecting personal data?",
                      a: "Most Firebase services collect some form of personal data by default, such as device identifiers and IP addresses. While you can disable certain collection features and configure data retention, it is very difficult to use Firebase with zero personal data collection.",
                    },
                    {
                      q: "How do I handle Firebase data deletion requests?",
                      a: "For Authentication data, delete user accounts through the Firebase console or Admin SDK. For Analytics data, use the user deletion API. For Firestore and Realtime Database, implement your own deletion logic. Your privacy policy should explain your deletion process for each service.",
                    },
                    {
                      q: "Does Firebase transfer data outside the EU?",
                      a: "Yes. Firebase services process data on Google's global infrastructure, which means data may be transferred outside the EU. Google's Data Processing Terms include Standard Contractual Clauses to provide a legal basis for these transfers under GDPR.",
                    },
                  ].map((item) => (
                    <div
                      key={item.q}
                      className="rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all"
                    >
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.q}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Dark CTA Section */}
              <section id="generate" className="scroll-mt-24">
                <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 p-8 sm:p-10 text-center relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                  >
                    <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-orange-500/10 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
                  </div>

                  <div className="relative">
                    <Flame className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate My Firebase Privacy Policy
                    </h2>
                    <p className="mt-3 text-slate-300 text-base max-w-md mx-auto">
                      Create a customized privacy policy that properly discloses
                      every Firebase service your app uses. Ready in under 60
                      seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-orange-500 text-white hover:bg-orange-600 font-semibold rounded-xl shadow-lg shadow-orange-900/20"
                      >
                        Generate My Firebase Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-slate-400">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-slate-500/50" />
                      <span>Firebase-ready structure</span>
                    </div>

                    <p className="text-xs text-slate-500 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR, CCPA, and app store
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
                      icon: FileText,
                      title: "Privacy Policy for Apps",
                      desc: "General app privacy compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-mobile-apps",
                      icon: FileText,
                      title: "Privacy Policy for Mobile Apps",
                      desc: "Mobile-specific requirements and disclosures",
                    },
                    {
                      href: "/privacy-policy-for-google-play",
                      icon: ShieldCheck,
                      title: "Privacy Policy for Google Play",
                      desc: "Google Play Data Safety requirements",
                    },
                    {
                      href: "/privacy-policy-for-google-analytics",
                      icon: BarChart3,
                      title: "Privacy Policy for Google Analytics",
                      desc: "GA4 data collection and disclosure guide",
                    },
                    {
                      href: "/android-app-privacy-policy-template",
                      icon: FileText,
                      title: "Android App Privacy Policy Template",
                      desc: "Template for Android app compliance",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template structure",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks and consequences of non-compliance",
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
