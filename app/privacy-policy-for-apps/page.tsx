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
  HelpCircle,
  Store,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Mobile Apps (iOS & Android) GDPR & CCPA | ultrafastutilities",
  description: "Create a privacy policy for your mobile app. Meet App Store and Play Store requirements. Get GDPR & CCPA-ready documents for iOS and Android apps.",
  keywords: "privacy policy for apps, mobile app privacy policy, iOS privacy policy, Android privacy policy, app store privacy policy",
  robots: {
    index: true,
    follow: true,
  },
};

const tocSections = [
  { id: "why-apps-require", title: "Why Apps Require Policies" },
  { id: "app-store-expectations", title: "App Store Expectations" },
  { id: "gdpr-ccpa", title: "GDPR & CCPA for Apps" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function PrivacyPolicyForAppsPage() {
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
                Mobile App Compliance
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Mobile Apps
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything you need to know about privacy compliance for iOS and
                Android apps. Meet App Store and Play Store requirements with
                GDPR and CCPA-ready documents.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Ideal for site owners and developers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-websites"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Privacy Policy for Websites
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
              {/* Section 1: Why Apps Require Privacy Policies */}
              <section id="why-apps-require" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Apps Require Privacy Policies
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Mobile apps collect a significant amount of personal data,
                      making privacy policies not just recommended but legally
                      required.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Mobile apps collect a significant amount of personal data, from
                    device identifiers to location data, making privacy policies not
                    just recommended but legally required under{" "}
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
                    regulations.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-6 mb-4">
                    Mobile apps typically collect:
                  </p>

                  <ul className="space-y-2.5 text-base leading-7 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                      Device identifiers (UDID, advertising IDs)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                      Location data (GPS, network-based)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                      User account information (email, username, profile data)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                      In-app purchase and payment data
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                      Analytics and crash reporting data
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                      Push notification tokens
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                      Camera, microphone, and photo library access
                    </li>
                  </ul>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: App Store and Play Store Expectations */}
              <section id="app-store-expectations" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      App Store and Play Store Expectations
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  {/* Warning callout */}
                  <div className="rounded-xl border border-red-200/60 bg-red-50/30 p-5 mb-8">
                    <div className="flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm leading-relaxed text-slate-700">
                        <strong className="text-slate-900">Important:</strong>{" "}
                        Apps without clear and compliant privacy policies risk
                        rejection or removal from app stores.
                      </div>
                    </div>
                  </div>

                  {/* Apple App Store */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Store className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        Apple App Store Requirements
                      </h3>
                    </div>
                    <ul className="space-y-2.5 text-base leading-7 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Privacy policy URL must be provided during app submission
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Must disclose all data collection practices
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Must explain how data is used and shared
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Must comply with App Tracking Transparency (ATT) framework
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Must disclose third party SDKs and their data practices
                      </li>
                    </ul>
                  </div>

                  {/* Google Play Store */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Store className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        Google Play Store Requirements
                      </h3>
                    </div>
                    <ul className="space-y-2.5 text-base leading-7 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Privacy policy URL required in Play Console
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Must be accessible without requiring user registration
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Must disclose data collection, sharing, and security practices
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Must comply with Google Play&apos;s Data Safety section requirements
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0 mt-[10px]" />
                        Must explain permissions requested by the app
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: GDPR and CCPA Implications for Apps */}
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
                      Implications for Apps
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
                        Compliance for Apps
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 mb-4">
                      If your app has users in the EU or UK, you must comply with{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      requirements:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Obtain consent where required and clearly explain the lawful basis for processing personal data",
                        "Explain lawful basis for processing (consent, contractual necessity)",
                        "Provide clear opt out mechanisms",
                        "Allow data portability and deletion requests",
                        "Disclose international data transfers and safeguards",
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
                        Compliance for Apps
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-600 mb-4">
                      If your app has California users, you must comply with{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        CCPA/CPRA
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      requirements:
                    </p>
                    <div className="space-y-3">
                      {[
                        "Disclose what personal information is collected",
                        "Allow users to opt out of sale or sharing of data",
                        'Provide a "Do Not Sell My Personal Information" link',
                        "Respond to deletion requests within 45 days",
                        "Not discriminate against users who exercise their rights",
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

              {/* Section 4: Common Mistakes Developers Make */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Mistakes Developers Make
                    </h2>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  {/* Warning box */}
                  <div className="rounded-xl border border-red-200/60 bg-red-50/30 p-5 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        <h3 className="font-semibold text-slate-900">
                          Using Generic Templates
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-700">
                        Copy-pasting a generic privacy policy without customizing
                        it for your app&apos;s specific data collection practices can
                        lead to compliance violations and app store rejections.
                        This is especially common with generic{" "}
                        <Link
                          href="/chatgpt-privacy-policy-risks"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          AI-generated policies
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        .
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        <h3 className="font-semibold text-slate-900">
                          Not Disclosing Third Party SDKs
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-700">
                        Failing to mention analytics SDKs (Firebase, Mixpanel),
                        advertising SDKs (Google Ads, Facebook Audience Network),
                        or payment processors (Stripe, Apple Pay) creates legal
                        risk.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        <h3 className="font-semibold text-slate-900">
                          Vague Permission Explanations
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-700">
                        Simply stating &quot;we collect location data&quot; isn&apos;t enough.
                        You must explain why (navigation, local recommendations)
                        and how long it&apos;s retained.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                        <h3 className="font-semibold text-slate-900">
                          Missing Data Retention Policies
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-slate-700">
                        Not specifying how long you retain user data violates{" "}
                        <Link
                          href="/gdpr-privacy-policy-template"
                          className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                        >
                          GDPR
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>{" "}
                        requirements and can lead to regulatory fines.
                      </p>
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
                      Generate My App Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your mobile app in under 60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 h-auto bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My App Privacy Policy — $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>App Store & Play Store ready</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted GDPR and CCPA
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* FAQ Section */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-8">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <HelpCircle className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="pl-0 sm:pl-[52px] space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Is a privacy policy required to publish an app on the App
                      Store or Play Store?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes, both Apple App Store and Google Play Store require a
                      privacy policy URL during app submission. Apps without a
                      compliant privacy policy will be rejected or removed from
                      the stores.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Does this work for both iOS and Android apps?
                    </h3>
                    <p className="text-base leading-7 text-slate-700">
                      Yes, our privacy policy generator creates policies that meet
                      the requirements for both iOS (App Store) and Android (Play
                      Store) apps, including compliance with{" "}
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
                      regulations.
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
                      href: "/privacy-policy-for-websites",
                      icon: FileText,
                      title: "Privacy Policy for Websites",
                      desc: "Website compliance guide",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance guide and template structure",
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
