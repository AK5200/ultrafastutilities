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
  Globe,
  Clock,
  BookOpen,
  Cookie,
  Ban,
  Users,
  Scale,
  Info,
  Layers,
  Lock,
  Database,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "What Should a Privacy Policy Include? Complete Checklist (2026) | ultrafastutilities",
  description:
    "Complete checklist of what every privacy policy must include. Covers data collection, usage, sharing, cookies, user rights, contact info, and requirements by law (GDPR, CCPA, COPPA).",
  keywords:
    "what should a privacy policy include, privacy policy checklist, privacy policy requirements, privacy policy sections, what to include in privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/what-should-a-privacy-policy-include",
  },
  openGraph: {
    title:
      "What Should a Privacy Policy Include? Complete Checklist (2026) | ultrafastutilities",
    description:
      "Complete checklist of what every privacy policy must include. Covers data collection, usage, sharing, cookies, user rights, contact info, and requirements by law (GDPR, CCPA, COPPA).",
    url: "https://ultrafastutilities.com/what-should-a-privacy-policy-include",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "What Should a Privacy Policy Include? | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What Should a Privacy Policy Include? Complete Checklist (2026)",
    description:
      "Complete checklist of what every privacy policy must include. Covers data collection, usage, sharing, cookies, user rights, and legal requirements.",
    images: ["/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A privacy policy should include 12 essential sections: types of personal data collected, how data is collected, purposes of data use, legal basis for processing (GDPR), third-party sharing and recipients, cookie and tracking disclosure, data retention periods, user rights (access, deletion, correction), children's privacy protections, international data transfers, security measures, and contact information for the data controller. The exact requirements depend on which laws apply to your website or app.",
      },
    },
    {
      "@type": "Question",
      name: "What are the legal requirements for a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GDPR requires disclosure of data controller identity, DPO contact, processing purposes, legal basis, data recipients, retention periods, user rights, and international transfers. CCPA requires disclosure of data categories collected, purposes, third-party sharing, consumer rights, and opt-out instructions. COPPA requires parental consent mechanisms and limits on children's data collection. CalOPPA requires conspicuous posting and disclosure of PII categories and third-party sharing.",
      },
    },
    {
      "@type": "Question",
      name: "Does a privacy policy need to mention cookies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your website uses any cookies, including analytics cookies from Google Analytics, advertising cookies, or even session cookies, you must disclose this in your privacy policy. Under GDPR and the ePrivacy Directive, you also need to obtain consent before setting non-essential cookies. Many websites include a separate cookie policy or a detailed cookies section within the privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a privacy policy be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no required length. A privacy policy should be as long as necessary to cover all required disclosures and no longer. A simple blog might need 800 to 1,200 words. An e-commerce site or SaaS application typically needs 1,500 to 3,000 words. The key is completeness and clarity, not brevity. GDPR Article 12 requires that information be provided in a concise, transparent, intelligible, and easily accessible form.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a separate cookie policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. You can include cookie disclosures within your privacy policy rather than creating a separate document. However, many websites use a separate cookie policy for clarity, especially if they use numerous cookies or need granular consent management. Under GDPR and the ePrivacy Directive, what matters is that users can easily find and understand your cookie practices, not whether it is in a separate document.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my privacy policy is incomplete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An incomplete privacy policy can be treated the same as having no privacy policy under enforcement actions. GDPR regulators have fined organizations for inadequate disclosures, not just for missing policies entirely. If your policy fails to mention data sharing with third parties, does not list user rights, or omits your legal basis for processing, it does not meet compliance requirements and exposes you to the same fines and penalties.",
      },
    },
    {
      "@type": "Question",
      name: "Should a privacy policy include information about third-party services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You must disclose which third parties receive user data and for what purpose. This includes analytics providers (Google Analytics), payment processors (Stripe, PayPal), advertising networks (Google Ads, Meta Pixel), email services (Mailchimp, SendGrid), hosting providers, CDN services, and any other service that processes user data on your behalf. GDPR requires naming categories of recipients, and best practice is to name specific services.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Write a Complete Privacy Policy",
  description:
    "Follow these 12 steps to include every required section in your privacy policy.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "List the types of personal data you collect",
      text: "Document every category of personal data your website or app collects, including names, email addresses, IP addresses, device identifiers, payment information, and browsing behavior.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Explain how you collect data",
      text: "Describe each method of data collection: forms, cookies, analytics scripts, third-party integrations, server logs, and user account creation.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "State the purpose for each type of data",
      text: "For each data category, explain why you collect it: service delivery, analytics, marketing, personalization, fraud prevention, or legal compliance.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Identify your legal basis for processing",
      text: "Under GDPR, specify the legal basis for each processing activity: consent, contract performance, legitimate interest, legal obligation, vital interest, or public task.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Disclose third-party data sharing",
      text: "List the categories of third parties you share data with and name specific services where possible: analytics providers, payment processors, advertising networks, and hosting services.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Describe cookie and tracking practices",
      text: "Detail which cookies your site uses, their purposes, duration, and how users can manage or opt out of cookies.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Define data retention periods",
      text: "State how long you keep each category of personal data and your criteria for determining retention periods.",
    },
    {
      "@type": "HowToStep",
      position: 8,
      name: "Explain user rights",
      text: "List all rights users have under applicable laws: access, rectification, erasure, restriction, portability, objection, and the right to withdraw consent.",
    },
    {
      "@type": "HowToStep",
      position: 9,
      name: "Address children's privacy",
      text: "State your policy on collecting data from children. If you do not target children under 13 (COPPA) or 16 (GDPR), state this explicitly. If you do, describe parental consent mechanisms.",
    },
    {
      "@type": "HowToStep",
      position: 10,
      name: "Disclose international data transfers",
      text: "If data is transferred outside the user's country (especially outside the EU/EEA), describe the safeguards in place: Standard Contractual Clauses, adequacy decisions, or other transfer mechanisms.",
    },
    {
      "@type": "HowToStep",
      position: 11,
      name: "Describe security measures",
      text: "Outline the technical and organizational measures you use to protect personal data: encryption, access controls, regular audits, and incident response procedures.",
    },
    {
      "@type": "HowToStep",
      position: 12,
      name: "Provide contact information",
      text: "Include the name, email address, and physical address of the data controller. If applicable, provide contact details for your Data Protection Officer (DPO) and the relevant supervisory authority.",
    },
  ],
};

const tocSections = [
  { id: "featured-answer", title: "The 12 Sections" },
  { id: "essential-sections", title: "Essential Sections Explained" },
  { id: "requirements-by-law", title: "Requirements by Law" },
  { id: "industry-additions", title: "Industry Additions" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "generate", title: "Generate Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

export default function WhatShouldAPrivacyPolicyIncludePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "What Should a Privacy Policy Include? Complete Checklist (2026)",
            description:
              "Complete checklist of what every privacy policy must include. Covers data collection, usage, sharing, cookies, user rights, contact info, and requirements by law (GDPR, CCPA, COPPA).",
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
                name: "What Should a Privacy Policy Include?",
                item: "https://ultrafastutilities.com/what-should-a-privacy-policy-include",
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
                What Should a Privacy Policy Include?
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <CheckCircle className="w-3.5 h-3.5" />
                Complete Checklist
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                What Should a Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Include?
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Every privacy policy needs 12 essential sections to be
                compliant with GDPR, CCPA, COPPA, and other data protection
                laws. Here is the complete checklist of what to include, what
                each law specifically requires, and the common mistakes that
                leave your policy non-compliant.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For website owners, app developers, and business operators.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated: March 2026 &middot; Reviewed for GDPR, CCPA &amp; COPPA compliance
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/how-to-write-a-privacy-policy"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Writing Guide
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
                  <span>14 min read</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span>GDPR &amp; CCPA reviewed</span>
                </div>
              </div>

              {/* Featured Snippet Box */}
              <div id="featured-answer" className="scroll-mt-24 mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-base leading-7 text-slate-800 mb-3">
                  <strong>Every privacy policy should include these 12 sections:</strong>
                </p>
                <ol className="space-y-1.5 text-sm text-slate-700 list-decimal list-inside">
                  <li>Types of personal data collected</li>
                  <li>How data is collected (methods and sources)</li>
                  <li>Purpose for each type of data use</li>
                  <li>Legal basis for processing (required by GDPR)</li>
                  <li>Third-party data sharing and recipients</li>
                  <li>Cookie and tracking technology disclosure</li>
                  <li>Data retention periods</li>
                  <li>User rights (access, deletion, correction, portability)</li>
                  <li>Children&apos;s privacy protections</li>
                  <li>International data transfers</li>
                  <li>Security measures</li>
                  <li>Contact information for the data controller</li>
                </ol>
                <p className="mt-3 text-sm text-slate-600">
                  The exact requirements depend on which laws apply to your
                  website or app. GDPR, CCPA, COPPA, CalOPPA, and PIPEDA each
                  have specific disclosure mandates. Missing even one required
                  section can make your entire policy non-compliant.
                </p>
              </div>

              {/* ── Section 1: 12 Essential Sections Explained ── */}
              <section id="essential-sections" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      12 Essential Sections Every Privacy Policy Must Include
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A detailed breakdown of each required section.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    A privacy policy is not a single block of text. It is a
                    structured document with distinct sections, each addressing
                    a specific legal requirement. Omitting any section can make
                    the entire policy non-compliant. Here is what each section
                    must contain and why it matters.
                  </p>

                  {[
                    {
                      num: "1",
                      title: "Types of Personal Data Collected",
                      icon: Database,
                      desc: "List every category of personal data your website or app collects. This includes obvious data like names, email addresses, and phone numbers, but also less obvious data like IP addresses, browser fingerprints, device identifiers, geolocation data, and behavioral data from analytics. Under GDPR, even a cookie identifier is personal data. Under CCPA, categories include identifiers, commercial information, internet activity, geolocation, audio/visual data, professional information, and inferences drawn from other data. Be specific. 'We collect personal information' is insufficient. You must list exactly what types of data you collect.",
                    },
                    {
                      num: "2",
                      title: "How Data Is Collected",
                      icon: Layers,
                      desc: "Describe every method through which you collect personal data. Common methods include: forms (contact, sign-up, checkout), cookies and tracking technologies, analytics scripts (Google Analytics, Plausible), server logs, third-party integrations (social login, payment processors), user account creation, API calls, and mobile device sensors. Users need to understand not just what data you collect, but how it reaches you. A user who fills out a form understands that data exchange. A user whose IP address is logged by an analytics script may not.",
                    },
                    {
                      num: "3",
                      title: "Purpose of Data Use",
                      icon: FileText,
                      desc: "For each category of data, explain why you collect and process it. Legitimate purposes include service delivery, account management, payment processing, customer support, analytics and performance improvement, marketing communications (with consent), fraud prevention, legal compliance, and personalization. GDPR Article 5(1)(b) requires that data be collected for specified, explicit, and legitimate purposes. Vague statements like 'to improve our services' are not sufficient. State the specific improvement: 'to analyze page load times and optimize site performance.'",
                    },
                    {
                      num: "4",
                      title: "Legal Basis for Processing (GDPR)",
                      icon: Scale,
                      desc: "Under GDPR, you must identify a lawful basis for each processing activity. The six legal bases are: consent (user actively opts in), contract performance (processing is necessary to fulfill an agreement), legitimate interest (your business interest, balanced against user rights), legal obligation (required by law), vital interest (protecting someone's life), and public task (official authority). Most websites rely on consent for marketing, contract performance for service delivery, and legitimate interest for analytics. You must specify which basis applies to each type of processing. This section is mandatory under GDPR but also demonstrates good practice for CCPA and other laws.",
                    },
                    {
                      num: "5",
                      title: "Third-Party Data Sharing",
                      icon: Users,
                      desc: "Disclose every third party that receives user data. Organize by category: analytics providers (Google Analytics, Mixpanel), payment processors (Stripe, PayPal), advertising partners (Google Ads, Meta Pixel), email service providers (Mailchimp, SendGrid), hosting providers (AWS, Vercel), CDN services (Cloudflare), and any other data processors. For each category, state the purpose of sharing and whether data is transferred outside the user's jurisdiction. CCPA requires you to state whether you 'sell' or 'share' personal information as defined by the law. GDPR requires you to name categories of recipients.",
                    },
                    {
                      num: "6",
                      title: "Cookie and Tracking Disclosure",
                      icon: Cookie,
                      desc: "Detail every cookie and tracking technology your site uses. For each cookie, disclose: its name, purpose (essential, analytics, marketing, functional), duration (session or persistent and how long), and whether it is first-party or third-party. Under the ePrivacy Directive and GDPR, you must obtain consent before setting non-essential cookies. Common cookies to disclose include Google Analytics (_ga, _gid), session cookies, login tokens, preference cookies, and advertising cookies. Many sites include a cookie table for clarity. This section can be part of the privacy policy or a separate cookie policy linked from the main document.",
                    },
                    {
                      num: "7",
                      title: "Data Retention Periods",
                      icon: Clock,
                      desc: "State how long you retain each category of personal data. GDPR Article 5(1)(e) requires that data be kept no longer than necessary for the purposes for which it is processed. Typical retention periods: account data is kept for the duration of the account plus a defined period after deletion (e.g., 30 days), transaction records are kept for the legally required period (often 7 years for tax purposes), analytics data is kept for 14 to 26 months, server logs are kept for 30 to 90 days, and marketing consent records are kept for the duration of consent plus a documentation period. 'We retain data as long as necessary' is not specific enough.",
                    },
                    {
                      num: "8",
                      title: "User Rights",
                      icon: ShieldCheck,
                      desc: "List every right users have under applicable laws and explain how to exercise each one. Under GDPR: right of access, rectification, erasure ('right to be forgotten'), restriction of processing, data portability, objection, and rights related to automated decision-making. Under CCPA: right to know, right to delete, right to correct, right to opt out of sale/sharing, and right to non-discrimination. Include the method for submitting requests (email, web form, postal address), expected response time (GDPR requires within one month, CCPA within 45 days), and verification procedures. Also state the right to lodge a complaint with a supervisory authority.",
                    },
                    {
                      num: "9",
                      title: "Children's Privacy",
                      icon: Users,
                      desc: "Address how your service handles data from children. COPPA (US) prohibits collecting data from children under 13 without verifiable parental consent. GDPR sets the age at 16 in most EU countries (some lower it to 13). If your service does not target children, state this explicitly: 'Our service is not directed to individuals under the age of 13. We do not knowingly collect personal data from children under 13.' If you do collect children's data, describe your parental consent mechanism, what data is collected, and how parents can review or delete their child's data.",
                    },
                    {
                      num: "10",
                      title: "International Data Transfers",
                      icon: Globe,
                      desc: "If you transfer personal data outside the user's country (especially outside the EU/EEA), disclose this and explain the safeguards in place. Under GDPR, transfers to countries without an 'adequacy decision' from the European Commission require specific safeguards: Standard Contractual Clauses (SCCs), Binding Corporate Rules (BCRs), or explicit consent. The EU-US Data Privacy Framework provides a mechanism for transfers to certified US organizations. Name the countries where data is transferred and the legal mechanism that authorizes each transfer.",
                    },
                    {
                      num: "11",
                      title: "Security Measures",
                      icon: Lock,
                      desc: "Describe the technical and organizational measures you use to protect personal data. GDPR Article 32 requires 'appropriate technical and organisational measures' including: encryption of data in transit (TLS/SSL) and at rest, access controls and authentication, regular security assessments and penetration testing, employee training on data protection, incident response procedures, and data backup and recovery. You do not need to reveal specific technical details that could compromise security (such as exact encryption algorithms or firewall configurations), but you should provide enough information to assure users their data is protected.",
                    },
                    {
                      num: "12",
                      title: "Contact Information",
                      icon: HelpCircle,
                      desc: "Provide clear contact details for privacy-related inquiries. Under GDPR, you must disclose: the identity and contact details of the data controller (name, address, email), the contact details for your Data Protection Officer (DPO), if one is required, and the relevant supervisory authority where users can lodge complaints. Under CCPA, provide at least two methods for consumers to submit requests (e.g., toll-free phone number and email or web form). Include a physical mailing address. Make it easy for users to reach you about their data.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200/80 bg-white/60 p-5"
                    >
                      <h3 className="font-semibold text-slate-900 text-base flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-blue-600" />
                        {item.num}. {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  {/* Did you know box 1 */}
                  <div className="my-8 rounded-xl bg-blue-50/60 border border-blue-100 p-5">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">
                          Did you know?
                        </p>
                        <p className="text-sm text-slate-700">
                          A 2024 study by the International Association of
                          Privacy Professionals (IAPP) found that 67% of privacy
                          policies reviewed were missing at least one section
                          required by the laws applicable to them. The most
                          commonly omitted sections were data retention periods
                          (missing in 52% of policies), legal basis for
                          processing (missing in 44%), and international data
                          transfer disclosures (missing in 61%). An incomplete
                          policy carries the same legal risk as having no policy
                          at all.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mini FAQ */}
                  <div className="space-y-3">
                    {[
                      {
                        q: "Do I need to include all 12 sections if I only operate in the US?",
                        a: "You should include all 12 sections regardless of location. Even if GDPR does not apply (which is unlikely for any website indexed by search engines), CCPA, CalOPPA, and multiple state privacy laws require most of the same disclosures. Including all sections also protects you if your audience expands internationally. The cost of including extra sections is zero. The cost of missing required ones is significant.",
                      },
                      {
                        q: "Can I use plain language or do I need legal jargon?",
                        a: "Use plain language. GDPR Article 12 explicitly requires information to be provided in a 'concise, transparent, intelligible and easily accessible form, using clear and plain language.' Legal jargon makes your policy harder to understand and does not make it more enforceable. Write for your users, not for lawyers. A privacy policy that users cannot understand fails its primary purpose.",
                      },
                    ].map((item) => (
                      <div
                        key={item.q}
                        className="rounded-lg bg-slate-50 border border-slate-200/70 px-4 py-3"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {item.q}
                        </p>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 2: Requirements by Law ── */}
              <section id="requirements-by-law" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Each Law Specifically Requires
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A side-by-side comparison of disclosure requirements.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    Different privacy laws require different disclosures. The
                    table below shows which sections are mandatory under each
                    major law. Including all 12 sections ensures compliance with
                    every law simultaneously.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            Section
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            GDPR
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            CCPA
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            CalOPPA
                          </th>
                          <th className="text-left px-5 py-3 font-semibold text-slate-700">
                            COPPA
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {[
                          ["Types of data collected", "Required", "Required", "Required", "Required"],
                          ["How data is collected", "Required", "Recommended", "Recommended", "Required"],
                          ["Purpose of data use", "Required", "Required", "Recommended", "Required"],
                          ["Legal basis for processing", "Required", "N/A", "N/A", "N/A"],
                          ["Third-party sharing", "Required", "Required", "Required", "Required"],
                          ["Cookie disclosure", "Required", "Recommended", "Required", "Required"],
                          ["Data retention periods", "Required", "Recommended", "N/A", "Required"],
                          ["User rights", "Required", "Required", "Required", "Required"],
                          ["Children's privacy", "Required", "Recommended", "N/A", "Required"],
                          ["International transfers", "Required", "N/A", "N/A", "N/A"],
                          ["Security measures", "Required", "Recommended", "N/A", "Required"],
                          ["Contact information", "Required", "Required", "Required", "Required"],
                        ].map(([section, gdpr, ccpa, caloppa, coppa]) => (
                          <tr key={section} className="hover:bg-slate-50/50">
                            <td className="px-5 py-3 font-medium text-slate-800">
                              {section}
                            </td>
                            <td className="px-5 py-3 text-slate-600">
                              {gdpr}
                            </td>
                            <td className="px-5 py-3 text-slate-600">
                              {ccpa}
                            </td>
                            <td className="px-5 py-3 text-slate-600">
                              {caloppa}
                            </td>
                            <td className="px-5 py-3 text-slate-600">
                              {coppa}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    &quot;Recommended&quot; means the law does not explicitly
                    mandate the section, but including it is considered best
                    practice and may be required under certain enforcement
                    interpretations. Including all sections regardless of legal
                    mandate provides the strongest compliance position.
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
                          GDPR Article 13 lists 13 specific items that must be
                          provided to data subjects when personal data is
                          collected directly from them, and Article 14 adds
                          additional requirements when data is obtained from
                          third-party sources. Failure to include even one
                          required item constitutes a transparency violation,
                          which carries the same maximum penalty as any other
                          GDPR infringement: up to 20 million euros or 4% of
                          global annual turnover.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 3: Industry-Specific Additions ── */}
              <section id="industry-additions" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Industry-Specific Additions
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Extra sections your industry may require beyond the 12
                      essentials.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px] space-y-5">
                  <p className="text-base leading-7 text-slate-700">
                    The 12 sections above cover the universal requirements.
                    Depending on your industry, additional disclosures may be
                    required by sector-specific regulations or platform policies.
                  </p>

                  {[
                    {
                      title: "E-commerce and Online Stores",
                      desc: "If you sell products online, your privacy policy should additionally cover: payment data handling and PCI-DSS compliance, order and shipping information processing, return and refund data retention, loyalty program data practices, and how you handle customer reviews. Payment processors like Stripe and PayPal have their own privacy requirements that your policy should reference. If you use Shopify, WooCommerce, or another e-commerce platform, their specific data practices should be disclosed as well.",
                    },
                    {
                      title: "Healthcare and HIPAA",
                      desc: "If you handle protected health information (PHI), HIPAA requires a Notice of Privacy Practices that is separate from (or in addition to) a standard privacy policy. This must cover: uses and disclosures of PHI, patient rights (access, amendment, accounting of disclosures, restriction requests), your duties regarding PHI, and how to file complaints. Telehealth services, health apps, and wellness platforms may fall under HIPAA or FTC Health Breach Notification rules depending on the data they handle.",
                    },
                    {
                      title: "Mobile Apps",
                      desc: "Mobile apps collect data that websites typically do not: device identifiers (IDFA, GAID), precise geolocation, camera and microphone access, contact lists, photo library access, push notification tokens, and app usage patterns. Apple App Store requires privacy nutrition labels and an App Tracking Transparency prompt. Google Play Store requires a data safety section. Your privacy policy must disclose all device permissions requested and how the resulting data is used.",
                    },
                    {
                      title: "SaaS and B2B Applications",
                      desc: "SaaS privacy policies often need additional sections for: sub-processor lists (GDPR requirement), data processing agreements (DPA) availability, data residency and hosting location, uptime SLA data handling, API data practices, multi-tenant architecture disclosures, and customer data ownership and portability. Enterprise customers frequently audit SaaS privacy policies as part of vendor assessment, so completeness is particularly important.",
                    },
                    {
                      title: "Financial Services and Fintech",
                      desc: "The Gramm-Leach-Bliley Act (GLBA) requires financial institutions to provide customers with a privacy notice explaining data sharing practices, the right to opt out of certain sharing, and safeguards for sensitive financial data. State money transmitter regulations add further requirements. If you handle financial data, credit information, or facilitate transactions, additional disclosures beyond the 12 standard sections are necessary.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200/80 bg-white/60 p-5"
                    >
                      <h3 className="font-semibold text-slate-900 text-base">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  <p className="text-sm text-slate-500 leading-relaxed">
                    Need a privacy policy tailored to your industry? Learn{" "}
                    <Link
                      href="/how-to-write-a-privacy-policy"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      how to write a privacy policy
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    or{" "}
                    <Link
                      href="/how-to-create-a-privacy-policy-for-free"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      create one for free
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
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
                          Apple&apos;s App Tracking Transparency framework,
                          introduced in iOS 14.5, requires apps to request
                          permission before tracking users across other apps and
                          websites. This single change reduced mobile ad
                          tracking revenue by an estimated $10 billion in its
                          first year. If your mobile app requests any tracking
                          permissions, your privacy policy must explain exactly
                          what data is tracked, how it is used, and how users
                          can opt out. The privacy policy must match what your
                          App Store privacy nutrition labels declare.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Section 4: Common Mistakes ── */}
              <section id="common-mistakes" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <Layers className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Mistakes That Make Your Policy Non-Compliant
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      These errors are found in the majority of privacy
                      policies online.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px] space-y-5">
                  {[
                    {
                      title: "Being vague about data collection",
                      desc: "Statements like 'we may collect personal information' or 'we collect data to improve our services' fail to meet the specificity requirements of GDPR, CCPA, and CalOPPA. You must list exact data categories, exact purposes, and exact recipients. 'May collect' is not a disclosure. Either you collect it or you do not. Regulators interpret vague language as an attempt to obscure data practices, which increases enforcement risk rather than reducing it.",
                    },
                    {
                      title: "Copying another website's privacy policy",
                      desc: "A privacy policy must accurately describe your specific data practices. Copying another site's policy means it describes their data practices, not yours. If you use Stripe but the copied policy mentions PayPal, your policy is inaccurate. If you use Google Analytics but the copied policy does not mention it, you have an undisclosed data practice. Inaccurate privacy policies have been the basis for FTC enforcement actions and GDPR fines. See why this approach fails in detail.",
                    },
                    {
                      title: "Omitting third-party services",
                      desc: "Every third-party service that processes user data must be disclosed. This includes analytics (Google Analytics, Mixpanel), advertising (Google Ads, Meta Pixel), payments (Stripe, PayPal), email (Mailchimp), hosting (AWS, Vercel), CDN (Cloudflare), and customer support tools (Intercom, Zendesk). Many website owners forget to include their hosting provider, CDN, or embedded services like YouTube and Google Maps. Each of these transmits user data to a third party.",
                    },
                    {
                      title: "Forgetting to update after adding new tools",
                      desc: "Your privacy policy must reflect your current data practices. When you add Google Analytics, switch payment processors, install a new WordPress plugin, or start using a new email marketing service, your privacy policy must be updated to disclose the new data processing. Set a quarterly review schedule. Every time you add or change a tool that touches user data, update your policy before deployment.",
                    },
                    {
                      title: "Not including an effective date or update history",
                      desc: "CalOPPA explicitly requires an effective date on your privacy policy. GDPR requires that users be notified of material changes to data processing. Without a visible date, users and regulators cannot determine whether your policy reflects current practices. Best practice is to include both the original publication date and the most recent update date. Some organizations maintain a changelog of material updates.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl bg-slate-50 border border-slate-200/80 p-5"
                    >
                      <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <Ban className="w-4 h-4 text-red-500" />
                        {item.title}
                      </h3>
                      <p className="text-base leading-7 text-slate-700">
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  {/* Warning Box */}
                  <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-amber-900 text-sm">
                          An incomplete policy is as risky as no policy
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-amber-800">
                          GDPR regulators have fined organizations specifically
                          for inadequate privacy disclosures, not just for
                          missing policies. In 2023, the Italian DPA fined a
                          company &euro;20,000 for having a privacy policy that
                          failed to mention its use of Google Analytics and
                          third-party advertising cookies. The policy existed
                          but was incomplete. Missing sections carry the same
                          enforcement risk as a missing policy. See the full{" "}
                          <Link
                            href="/what-happens-without-a-privacy-policy"
                            className="font-medium text-amber-900 underline underline-offset-2 hover:text-amber-700 transition-colors"
                          >
                            consequences breakdown
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── CTA Section ── */}
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
                      Generate a Policy With All 12 Sections
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Answer a few questions about your website or app and get
                      a complete privacy policy covering every required section
                      for GDPR, CCPA, COPPA, and CalOPPA compliance in under
                      60 seconds.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>All 12 sections included</span>
                    </div>

                    <p className="text-xs text-blue-300/80 mt-3 max-w-lg mx-auto">
                      Structured around widely accepted{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        GDPR
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/ccpa-privacy-policy-example"
                        className="text-blue-200 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        CCPA
                      </Link>{" "}
                      requirements. Not legal advice.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── FAQ Section ── */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-8">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    <HelpCircle className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>

                <div className="pl-0 sm:pl-[52px] space-y-6">
                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What should a privacy policy include?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      A privacy policy should include 12 essential sections:
                      types of personal data collected, how data is collected,
                      purposes of data use, legal basis for processing,
                      third-party data sharing, cookie and tracking disclosure,
                      data retention periods, user rights, children&apos;s
                      privacy, international data transfers, security measures,
                      and contact information. The exact requirements depend on
                      which laws apply. See our{" "}
                      <Link
                        href="/what-is-a-privacy-policy"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        what is a privacy policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      guide for fundamentals.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What are the legal requirements for a privacy policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      GDPR requires disclosure of data controller identity,
                      processing purposes, legal basis, data recipients,
                      retention periods, user rights, and international
                      transfers. CCPA requires disclosure of data categories,
                      purposes, third-party sharing, and consumer rights.
                      CalOPPA requires conspicuous posting and PII category
                      disclosure. COPPA requires parental consent mechanisms
                      for children&apos;s data. See our{" "}
                      <Link
                        href="/gdpr-privacy-policy-template"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        GDPR template
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      for a complete compliance structure.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Does a privacy policy need to mention cookies?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. If your website uses any cookies, you must disclose
                      this in your privacy policy. Under GDPR and the ePrivacy
                      Directive, you also need to obtain consent before setting
                      non-essential cookies. Your disclosure should list each
                      cookie by name, its purpose, duration, and whether it is
                      first-party or third-party. Many websites maintain a
                      separate cookie policy for detailed disclosure while
                      summarizing cookie practices in the main privacy policy.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      How long should a privacy policy be?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      A privacy policy should be as long as necessary to cover
                      all required disclosures. A simple blog may need 800 to
                      1,200 words. An e-commerce site typically needs 1,500 to
                      3,000 words. A SaaS application with complex data
                      practices may need 3,000 to 5,000 words. GDPR Article 12
                      requires information to be concise, transparent, and
                      easily accessible. Prioritize completeness and clarity
                      over brevity.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Do I need a separate cookie policy?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Not necessarily. You can include cookie disclosures
                      within your privacy policy. However, many websites create
                      a separate cookie policy for clarity, especially with
                      numerous cookies or granular consent management. What
                      matters under the law is that cookie information is
                      easily accessible, not whether it lives in a separate
                      document.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      What happens if my privacy policy is incomplete?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      An incomplete privacy policy carries the same legal risk
                      as having no privacy policy at all. GDPR regulators
                      have fined organizations for inadequate disclosures.
                      If your policy fails to mention data sharing with third
                      parties, does not list user rights, or omits your legal
                      basis for processing, it does not meet compliance
                      requirements. See our{" "}
                      <Link
                        href="/what-happens-without-a-privacy-policy"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        consequences guide
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      for the full enforcement landscape.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-white/60 p-5">
                    <h3 className="font-semibold text-slate-900 text-base leading-snug">
                      Should a privacy policy include information about third-party services?
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Yes. You must disclose which third parties receive user
                      data and for what purpose. This includes analytics
                      providers, payment processors, advertising networks,
                      email services, hosting providers, CDN services, and any
                      service that processes user data on your behalf. GDPR
                      requires naming categories of recipients, and best
                      practice is to name specific services. You can{" "}
                      <Link
                        href="/generate"
                        className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                      >
                        generate a policy
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>{" "}
                      that automatically includes your specific third-party
                      services.
                    </p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-12" />

              {/* ── Related Resources ── */}
              <section id="resources" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/how-to-write-a-privacy-policy",
                      icon: FileText,
                      title: "How to Write a Privacy Policy",
                      desc: "Step-by-step writing guide",
                    },
                    {
                      href: "/how-to-create-a-privacy-policy-for-free",
                      icon: BookOpen,
                      title: "Create a Privacy Policy for Free",
                      desc: "5 free methods compared",
                    },
                    {
                      href: "/what-is-a-privacy-policy",
                      icon: HelpCircle,
                      title: "What Is a Privacy Policy?",
                      desc: "Fundamentals explained",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU and UK compliance template",
                    },
                    {
                      href: "/ccpa-privacy-policy-example",
                      icon: Scale,
                      title: "CCPA Privacy Policy Example",
                      desc: "California compliance example",
                    },
                    {
                      href: "/privacy-policy-for-websites",
                      icon: Globe,
                      title: "Privacy Policy for Websites",
                      desc: "Complete website compliance guide",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without One",
                      desc: "Fines, platform bans, and legal risks",
                    },
                    {
                      href: "/can-i-copy-someone-elses-privacy-policy",
                      icon: FileText,
                      title: "Can I Copy a Privacy Policy?",
                      desc: "Why copying policies creates liability",
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
