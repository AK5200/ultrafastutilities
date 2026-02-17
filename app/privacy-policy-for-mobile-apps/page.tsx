import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Smartphone,
  CheckCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Camera,
  Bell,
  Fingerprint,
  BarChart3,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Mobile Apps - iOS & Android App Store Ready | ultrafastutilities",
  description: "Create a privacy policy for your mobile app. Meet Apple App Store and Google Play Store requirements. Cover permissions, tracking, GDPR, and CCPA compliance.",
  keywords: "privacy policy for mobile apps, iOS privacy policy, Android privacy policy, app store privacy policy, mobile app GDPR",
};

const tocSections = [
  { id: "permissions-tracking", title: "Permissions & Tracking" },
  { id: "apple-google", title: "Apple & Google Requirements" },
  { id: "gdpr-ccpa", title: "GDPR & CCPA Coverage" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForMobileAppsPage() {
  return (
    <>
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
              <span className="text-slate-600">Privacy Policy for Mobile Apps</span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Smartphone className="w-3.5 h-3.5" />
                iOS &amp; Android Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Mobile Apps
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about privacy compliance for iOS and
                Android apps. Covering permissions, tracking, App Store and Play
                Store requirements, GDPR, and CCPA.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for site owners and developers.
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
                href="/gdpr-privacy-policy-template"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                GDPR Template
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
              {/* Section 1: Permissions and Tracking */}
              <section id="permissions-tracking" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Permissions and Tracking
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Mobile apps request various permissions and track user
                      behavior, requiring comprehensive privacy disclosures.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-6">
                  {/* Device Permissions */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                        <Camera className="w-4 h-4 text-violet-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Device Permissions
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Location data (GPS, network-based, precise/approximate)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Camera and photo library access
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Microphone access
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Contacts and calendar access
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Push notifications and device tokens
                      </li>
                    </ul>
                  </div>

                  {/* Device Identifiers */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <Fingerprint className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Device Identifiers
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Advertising IDs (IDFA on iOS, GAID on Android)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Device IDs and hardware identifiers
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Installation IDs and app instance IDs
                      </li>
                    </ul>
                  </div>

                  {/* Usage and Analytics */}
                  <div className="group rounded-xl border border-slate-200/80 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">
                        Usage and Analytics
                      </h3>
                    </div>
                    <ul className="space-y-2 text-base leading-7 text-slate-600 ml-11">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        App usage patterns and feature interactions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Crash reports and error logs
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Performance metrics and session data
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        In-app purchase and subscription data
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: Apple and Google Requirements */}
              <section id="apple-google" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Apple and Google Requirements
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  {/* Apple App Store */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        Apple App Store Requirements
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Privacy policy URL required during app submission",
                        "Must disclose all data collection practices",
                        "App Tracking Transparency (ATT) framework compliance",
                        "Third-party SDK disclosure (analytics, advertising, payment)",
                        "Data use explanations for each permission requested",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Google Play Store */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        Google Play Store Requirements
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Privacy policy URL required in Play Console",
                        "Must be accessible without user registration",
                        "Data Safety section compliance (data collection, sharing, security)",
                        "Permission explanations and data use disclosures",
                        "Third-party service disclosure (SDKs, analytics, advertising)",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: GDPR and CCPA Coverage */}
              <section id="gdpr-ccpa" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                      >
                        GDPR
                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                      >
                        CCPA
                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                      </Link>{" "}
                      Coverage
                    </h2>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-8">
                  {/* GDPR */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          GDPR
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>{" "}
                        Compliance for Mobile Apps
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 mb-4">
                      EU/UK users require:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Explicit consent before collecting personal data",
                        "Lawful basis disclosure (consent, contractual necessity)",
                        "Clear opt-out mechanisms for tracking",
                        "Data portability and deletion rights",
                        "International data transfer safeguards",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CCPA */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        <Link
                          href="/ccpa-privacy-policy-example"
                          className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          CCPA/CPRA
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>{" "}
                        Compliance for Mobile Apps
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 mb-4">
                      California users require:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Right to know what personal information is collected",
                        "Right to delete personal information",
                        'Right to opt-out of sale or sharing (advertising IDs, location data)',
                        '"Do Not Sell My Personal Information" link if applicable',
                        "Non-discrimination clause",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-base leading-7"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <p className="text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
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
                    <Smartphone className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Generate My Mobile App Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your iOS or Android app in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 h-auto bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Mobile App Privacy Policy – $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Instant access</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>No subscription</span>
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
                      href: "/privacy-policy-for-apps",
                      icon: Smartphone,
                      title: "Privacy Policy for Apps",
                      desc: "General app compliance guide",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template structure",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: ShieldCheck,
                      title: "CCPA Privacy Policy Example",
                      desc: "California privacy rights and disclosures",
                    },
                    {
                      href: "/generate",
                      icon: FileText,
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
