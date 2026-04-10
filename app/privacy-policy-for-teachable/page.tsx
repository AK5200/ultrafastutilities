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
  Users,
  Globe,
  CreditCard,
  Mail,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Teachable: Course Creator Guide (2026) | ultrafastutilities",
  description:
    "Selling courses on Teachable? Your privacy policy must cover student data, payment processing, email marketing, and completion tracking. Complete guide for Teachable course creators.",
  keywords:
    "privacy policy for teachable, teachable privacy policy, online course privacy policy, teachable student data, course creator privacy policy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-teachable",
  },
  openGraph: {
    title:
      "Privacy Policy for Teachable: Course Creator Guide (2026) | ultrafastutilities",
    description:
      "Selling courses on Teachable? Your privacy policy must cover student data, payment processing, email marketing, and completion tracking. Complete guide for Teachable course creators.",
    url: "https://ultrafastutilities.com/privacy-policy-for-teachable",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Teachable Course Creators | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Teachable: Course Creator Guide (2026) | ultrafastutilities",
    description:
      "Selling courses on Teachable? Your privacy policy must cover student data, payment processing, email marketing, and completion tracking. Complete guide for Teachable course creators.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-teachable-creators-need", title: "Why Creators Need a Policy" },
  { id: "what-teachable-collects", title: "What Teachable Collects" },
  { id: "payment-processing", title: "Payment Processing" },
  { id: "student-data", title: "Student Data" },
  { id: "email-marketing", title: "Email Marketing" },
  { id: "coaching", title: "Coaching & Live Sessions" },
  { id: "teachable-vs-your-responsibility", title: "Teachable vs You" },
  { id: "affiliate-data", title: "Affiliate Data" },
  { id: "common-mistakes", title: "Common Mistakes" },
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
      name: "Does Teachable's privacy policy cover my courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Teachable's privacy policy covers the Teachable platform and Teachable's own data collection. It does not cover your individual data practices as a course creator. If you collect student emails for marketing, use third-party analytics, run coaching sessions, or track course completion data, you need your own privacy policy that discloses how you handle student data independently of Teachable.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if I only sell on Teachable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most cases. Even if Teachable is your only course platform, you receive student emails, names, enrollment data, and course progress information with every sign-up. If you send promotional emails, use Teachable's built-in email features, track course completion rates, or offer coaching sessions, you are processing personal data and need your own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Does GDPR apply to Teachable course creators?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if any of your students are located in the EU or UK. Teachable is a global platform, and online courses are particularly likely to attract international students since there are no geographic restrictions on enrollment. GDPR applies based on where your students are, not where you are located. When GDPR applies, your privacy policy must include your lawful basis for processing, data retention periods, third-party data sharing, and information about students' rights.",
      },
    },
    {
      "@type": "Question",
      name: "What student data do Teachable course creators receive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teachable course creators receive student email addresses, names, enrollment dates, course progress and completion data, quiz and assessment scores, payment confirmation details, coaching call records, comment and discussion data, and any custom form data collected during enrollment. The exact data depends on your course type and school configuration.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to disclose Teachable's payment processing in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your privacy policy should explain that payments are processed through Teachable and its payment processors (Stripe and PayPal). You should clarify that you do not directly access or store full payment card details. Students' payment information is handled by Teachable and its payment partners, and your policy should direct students to those services' respective privacy policies for payment data details.",
      },
    },
    {
      "@type": "Question",
      name: "How should I handle course completion data in my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Course completion data includes lesson progress, quiz scores, assignment submissions, certificates issued, and time spent on each module. Your privacy policy must disclose that you collect and store this data, explain how you use it (improving course content, issuing certificates, measuring engagement), and clarify how long you retain student progress records after enrollment ends or a student requests data deletion.",
      },
    },
    {
      "@type": "Question",
      name: "What about Teachable's affiliate program and privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you use Teachable's affiliate program, your privacy policy should disclose that affiliate referral data is collected, including which affiliate referred the student and the referral URL. This data is used to calculate affiliate commissions. Students should know that their enrollment may be linked to an affiliate partner and what data is shared with affiliates for commission tracking purposes.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Your Teachable Courses",
  description:
    "Follow these six steps to create a compliant privacy policy for your Teachable courses that covers student data handling, course progress tracking, email marketing, and coaching sessions.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit all student data you collect",
      text: "Document every type of student data you receive through Teachable: email addresses, names, enrollment records, course progress, quiz scores, coaching session details, payment confirmations, and any custom form data collected during enrollment or within courses.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Map your third-party integrations",
      text: "List every external service connected to your Teachable school: email marketing platforms (ConvertKit, Mailchimp, ActiveCampaign), analytics tools (Google Analytics), webinar platforms (Zoom, Crowdcast), payment processors (Stripe, PayPal through Teachable), and any tools that receive student data through Teachable's integrations or Zapier.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Identify applicable privacy laws",
      text: "Online courses sold on Teachable reach students worldwide. If you have EU students, GDPR applies. If you have California students, CCPA may apply. Since online courses have no geographic barriers, most Teachable creators with meaningful enrollment will have international students triggering multiple privacy regulations.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Generate your privacy policy",
      text: "Use a privacy policy generator to create a document tailored to your Teachable school. Include details about student enrollment data, course progress tracking, email marketing practices, coaching session recordings, and all third-party tools that handle student data.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Publish and link your policy",
      text: "Host your privacy policy on your Teachable school site or your own website. Add the link to your school footer, course sales pages, enrollment checkout, and any email communications you send to students. Teachable allows you to add custom pages and footer links for this purpose.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Review and update regularly",
      text: "Review your privacy policy whenever you launch new courses, add coaching features, change your email marketing approach, integrate new third-party tools, or modify your enrollment process. At minimum, conduct an annual review to keep your policy accurate and current.",
    },
  ],
};

export default function PrivacyPolicyForTeachablePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Privacy Policy for Teachable: Course Creator Guide (2026) | ultrafastutilities",
            description:
              "Selling courses on Teachable? Your privacy policy must cover student data, payment processing, email marketing, and completion tracking. Complete guide for Teachable course creators.",
            author: { "@type": "Person", name: "Anupam Kumar" },
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
                name: "Privacy Policy for Teachable",
                item: "https://ultrafastutilities.com/privacy-policy-for-teachable",
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
                Privacy Policy for Teachable
              </span>
            </nav>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <GraduationCap className="w-3.5 h-3.5" />
                Course Creator Guide
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Teachable
                </span>
                : What Course Creators Must Disclose
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Everything Teachable course creators need to know about privacy
                compliance. Covering student data, payment processing, email
                marketing, course completion tracking, coaching sessions, and
                affiliate programs.
              </p>

              <p className="mt-3 text-sm text-slate-400">
                For Teachable creators, online course sellers, and coaching
                professionals.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/privacy-policy-for-gumroad"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Gumroad Privacy Policy
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <Link
                href="/privacy-policy-for-patreon"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                Patreon Privacy Policy
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
                    Need a Teachable privacy policy?
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
                <span>Last updated: April 2026</span>
                <span className="text-slate-300 hidden sm:inline">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>13 min read</span>
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
                    Teachable course creators who collect student data need their
                    own privacy policy, separate from Teachable&apos;s platform
                    policy.
                  </strong>{" "}
                  If you sell online courses, collect student emails, track
                  course completion, run coaching sessions, or use
                  Teachable&apos;s email marketing features, you must disclose
                  your data practices in a privacy policy. Teachable&apos;s own
                  privacy policy covers the platform, not your individual
                  school.
                </p>
              </div>

              {/* Section 1: Why Teachable Creators Need a Privacy Policy */}
              <section id="why-teachable-creators-need" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    1
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Teachable Creators Need a Privacy Policy
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Understanding the gap between Teachable&apos;s platform
                      policy and your obligations as a course creator.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Teachable makes it easy to create and sell online courses,
                    but the platform&apos;s privacy policy only covers Teachable
                    as a company. It does not address how you, as an individual
                    course creator, handle the student data you receive through
                    every enrollment. Every time someone signs up for your
                    course, you receive their email address, name, and enrollment
                    details. What you do with that data is your responsibility
                    to disclose.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Online courses create unique privacy considerations that many
                    other digital products do not. Course completion tracking,
                    quiz scores, assignment submissions, coaching session
                    recordings, and student discussion forum posts all constitute
                    personal data processing. If you sell courses, coaching
                    programs, or membership content on Teachable, the data trail
                    extends well beyond the initial enrollment.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Teachable also provides built-in email marketing tools that
                    let you send updates and promotional content to enrolled
                    students. Using these features means you are actively
                    processing student data for marketing purposes, which
                    requires explicit disclosure in a privacy policy. Under{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , marketing emails require a lawful basis (typically
                    consent), and your privacy policy must explain this. The
                    consequences of operating without proper disclosures can be
                    significant. Learn more about{" "}
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
                          Teachable hosts over 100,000 active courses and has
                          facilitated billions of dollars in course sales. Since
                          online courses have no geographic enrollment
                          restrictions, Teachable creators tend to attract
                          students from around the world. This means most
                          Teachable creators with any meaningful enrollment will
                          have EU students, triggering GDPR compliance
                          obligations regardless of the creator&apos;s location.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 2: What Teachable Collects */}
              <section id="what-teachable-collects" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    2
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What Data Teachable Collects From Students
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A complete breakdown of student data that flows through
                      your Teachable school.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    As a Teachable course creator, you have access to more
                    student data than you might expect. Understanding each data
                    type is the first step toward building an accurate privacy
                    policy.
                  </p>

                  {/* Data Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-left">
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Data Type
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[30%]">
                            How You Receive It
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[25%]">
                            Your Responsibility
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-700 w-[20%]">
                            Disclosure Required
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Student Email
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Every enrollment, sign-up form
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Course access, updates, marketing (with consent)
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Student Name
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Enrollment form (required by default)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Student records, certificates, support
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Payment Info
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Teachable/Stripe/PayPal processes (you see confirmation only)
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Handled by Teachable and payment processors
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Clarify Teachable handles this
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Course Progress
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Tracked automatically per student
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Completion certificates, engagement analysis
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Quiz Scores
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Student quiz and assessment submissions
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Grading, course completion requirements
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Coaching Data
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Session bookings, call recordings
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Service delivery, session notes
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Discussion Posts
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Student comments within course lessons
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Community management, content moderation
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-slate-800">
                            Affiliate Referrals
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Teachable affiliate tracking system
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            Commission tracking, referral source data
                          </td>
                          <td className="px-4 py-3 text-slate-600">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-base leading-7 text-slate-700">
                    The key distinction for Teachable creators is that online
                    courses create an ongoing data relationship. Unlike a
                    one-time purchase where the transaction ends at delivery,
                    courses involve continuous progress tracking, repeated logins,
                    quiz submissions, discussion posts, and potentially coaching
                    interactions over weeks or months. Each of these touchpoints
                    generates data that must be disclosed.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you use Teachable&apos;s custom fields or forms to collect
                    additional information (company name, learning goals, or
                    professional background), you have full data controller
                    responsibility for that data. Your privacy policy must
                    explain what custom data you collect and why. For broader
                    guidance on{" "}
                    <Link
                      href="/privacy-policy-for-saas"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      SaaS privacy policies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    , see our dedicated guide.
                  </p>

                  {/* Mini FAQ */}
                  <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 divide-y divide-slate-100">
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: Does Teachable share student emails with creators?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Yes. Teachable provides creators with student email
                        addresses for every enrollment. This is a core part of
                        the platform since creators need to communicate with
                        students about course access, updates, and support. Your
                        privacy policy must disclose how you use these email
                        addresses, especially if you use them for marketing
                        beyond course-related communication.
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-slate-800 text-sm">
                        Q: What about students who enroll in free courses?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Even if a student enrolls in a free course, Teachable
                        still collects their email address and name, and you
                        receive this data. Free course enrollments generate the
                        same data collection obligations as paid enrollments.
                        Your privacy policy must cover data collected from both
                        free and paid students.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 3: Payment Processing */}
              <section id="payment-processing" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    3
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Payment Processing on Teachable
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How student payment data is handled and what your policy
                      must disclose.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Teachable offers two payment options: Teachable Payments
                    (powered by Stripe) and PayPal. When a student enters their
                    credit card or PayPal information, that data goes directly to
                    the payment processor. You, as the course creator, never see
                    or have access to full payment card numbers, CVVs, or
                    banking details. What you do receive is payment confirmation
                    data: the amount paid, the student&apos;s email, the
                    transaction ID, and the enrollment date.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy should clearly state that payment
                    processing is handled by Teachable and its payment partners
                    (Stripe and PayPal), that you do not store full payment card
                    information, and that students should refer to
                    Teachable&apos;s, Stripe&apos;s, and PayPal&apos;s privacy
                    policies for details about how their payment data is
                    processed. This transparency builds student trust and
                    satisfies the disclosure requirements under both GDPR and
                    CCPA.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you offer subscription-based courses or payment plans on
                    Teachable, recurring billing is also handled by the payment
                    processors. However, you should disclose in your privacy
                    policy that students who subscribe will have their payment
                    information stored by Teachable&apos;s payment processor for
                    recurring charges, and explain how students can cancel their
                    subscriptions or payment plans.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 4: Student Data */}
              <section id="student-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    4
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Student Data and Course Progress
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How course completion tracking and student performance
                      data affect your privacy obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    One of the most significant privacy considerations for
                    Teachable creators is course progress data. Teachable
                    automatically tracks which lessons each student has
                    completed, how far through the course they are, quiz and
                    assessment scores, assignment submissions, and certificate
                    issuance. All of this data is visible in your Teachable
                    admin dashboard and constitutes personal data processing.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Under GDPR, processing student performance data requires a
                    lawful basis. For course delivery and progress tracking, your
                    lawful basis is typically contractual necessity (the student
                    enrolled in a course that includes progress tracking and
                    assessments). However, if you use course completion data for
                    other purposes, such as marketing case studies, testimonials,
                    or aggregate analytics shared publicly, you may need a
                    different lawful basis such as legitimate interest or
                    consent.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy should clearly explain what student
                    performance data you collect, how you use it, how long you
                    retain it after a student completes or leaves a course, and
                    what happens to their data if they request deletion. If you
                    issue completion certificates, note that certificate records
                    are also personal data that must be accounted for in your
                    retention policy.
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
                          Teachable&apos;s course completion tracking records not
                          just whether a lesson was completed, but also when
                          each lesson was accessed and in what order. This
                          detailed engagement data can reveal student learning
                          patterns and study habits. Under GDPR, this
                          behavioral tracking constitutes profiling, and your
                          privacy policy should disclose that such detailed
                          engagement data is collected even if you primarily use
                          it to improve your course content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 5: Email Marketing */}
              <section id="email-marketing" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    5
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Email Marketing and Communications
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Teachable&apos;s email features and your disclosure
                      obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Teachable provides built-in email tools that let you send
                    course updates, announcements, and promotional content to
                    enrolled students. Every student who enrolls in your course
                    is automatically added to your Teachable student list, and
                    you can send them emails directly through the platform. This
                    is one of the most important features to address in your
                    privacy policy.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Under GDPR, sending marketing emails requires a lawful
                    basis. For transactional emails (enrollment confirmations,
                    course access details, important course updates), your lawful
                    basis is contractual necessity. For promotional emails (new
                    course launches, discounts, cross-sells to other courses),
                    you typically need consent as your lawful basis. Your privacy
                    policy should differentiate between these two types of
                    communication and explain the legal basis for each.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    If you also use external email marketing tools like
                    ConvertKit, Mailchimp, or ActiveCampaign alongside
                    Teachable&apos;s built-in features, your privacy policy must
                    disclose each platform that receives student email addresses.
                    Many Teachable creators connect their schools to external
                    tools via Zapier or direct integrations, which means student
                    data flows to additional third parties that students should
                    know about. Creators on platforms like{" "}
                    <Link
                      href="/privacy-policy-for-substack"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Substack
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    face similar email list disclosure requirements.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 6: Coaching */}
              <section id="coaching" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    6
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Coaching and Live Sessions
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Privacy implications of offering coaching or live sessions
                      through Teachable.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Teachable supports coaching products where students can book
                    one-on-one sessions with you. When a student books a
                    coaching session, additional personal data is collected:
                    scheduling preferences, session topics, and any information
                    the student shares during intake forms. If you record
                    coaching sessions using tools like Zoom or Google Meet,
                    the recordings contain personal data that must be addressed
                    in your privacy policy.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    From a privacy perspective, coaching sessions create several
                    data processing activities that must be disclosed. Session
                    recordings capture the student&apos;s voice, image (if
                    video), and any personal information discussed during the
                    call. Session notes taken by you or the student become part
                    of the data you process. Third-party scheduling tools (like
                    Calendly) that you integrate with Teachable also receive
                    student data.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy should explain whether you record
                    coaching sessions, where recordings are stored, how long
                    you retain them, and whether students can request deletion
                    of their session recordings. If you use third-party tools
                    for scheduling or video calls, each of those services should
                    be listed as a data processor in your policy. This level of
                    transparency is especially important for{" "}
                    <Link
                      href="/privacy-policy-for-small-business"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      small business privacy policies
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 7: Teachable vs Your Responsibility */}
              <section
                id="teachable-vs-your-responsibility"
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    7
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Teachable&apos;s Role vs Yours
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Clarifying where Teachable&apos;s data obligations end
                      and yours begin.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Teachable and you are separate data controllers under
                    privacy law. Teachable handles platform-level data
                    processing (hosting infrastructure, payment processing
                    through Stripe and PayPal, platform analytics), while you
                    are responsible for how you use student data once you
                    receive it. Neither party&apos;s privacy policy covers the
                    other&apos;s practices.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    This shared responsibility model is common across online
                    course platforms. Similar to how{" "}
                    <Link
                      href="/privacy-policy-for-gumroad"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Gumroad sellers
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy-for-patreon"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      Patreon creators
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    need their own policies, Teachable course creators must
                    independently disclose their data practices to students.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    The practical impact is straightforward: you need your own
                    privacy policy that covers everything you do with student
                    data after Teachable delivers it to you. Teachable&apos;s
                    policy covers the enrollment and payment infrastructure. Your
                    policy covers your email marketing, course progress usage,
                    coaching sessions, customer support interactions, and any
                    third-party tools you connect to your Teachable school.
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
                          Under Teachable&apos;s terms, course creators are
                          considered independent data controllers, not data
                          processors acting on Teachable&apos;s behalf. This
                          means you bear full legal responsibility for how you
                          handle student data obtained through the platform. If
                          a student files a GDPR complaint about how you used
                          their data, the complaint is directed at you, not at
                          Teachable.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 8: Affiliate Data */}
              <section id="affiliate-data" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    8
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Affiliate Data
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      How Teachable&apos;s affiliate system impacts your privacy
                      obligations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700">
                    Teachable allows creators to set up affiliate programs where
                    third parties earn commissions for referring students to your
                    courses. When a student arrives through an affiliate link,
                    Teachable tracks the referral using cookies and URL
                    parameters. This tracking data connects the student&apos;s
                    enrollment to the specific affiliate who referred them.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Your privacy policy must disclose that affiliate tracking
                    occurs, what data is collected through affiliate links
                    (referral URL, affiliate ID, enrollment amount), and that
                    this data is shared with the referring affiliate for
                    commission calculation. Students have a right to know that
                    their enrollment may be linked to a third-party affiliate
                    and what information that affiliate receives.
                  </p>

                  <p className="text-base leading-7 text-slate-700 mt-4">
                    Under GDPR, affiliate tracking cookies require consent
                    before being placed on a student&apos;s device. While
                    Teachable manages the cookie placement as part of its
                    platform, your privacy policy should still reference the use
                    of affiliate tracking cookies and link to Teachable&apos;s
                    cookie policy for technical details. This ensures full
                    transparency with your students about all tracking that
                    occurs in connection with your courses.
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
                      Common Teachable Privacy Mistakes
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      Misconceptions that put Teachable course creators at legal
                      risk.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    These five privacy mistakes are common among Teachable
                    creators and can lead to GDPR violations, student
                    complaints, or loss of trust.
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Teachable&apos;s privacy policy covers
                          my courses&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Teachable&apos;s privacy policy covers the Teachable
                          platform. It does not cover how you use student emails,
                          track course progress, record coaching sessions, or
                          send marketing communications. If you use student data
                          for any purpose beyond what Teachable handles
                          automatically, you need your own privacy policy.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Course progress tracking is not data
                          collection&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Course progress data includes lesson completion times,
                          quiz scores, assignment submissions, and learning
                          patterns. This is personal data tied to identifiable
                          students. Tracking which lessons a student completed,
                          when they accessed them, and how they performed on
                          assessments all constitute personal data processing
                          that requires disclosure in your privacy policy.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;I only send course updates, not
                          marketing&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          The line between course updates and marketing is
                          thinner than most creators think. If your
                          &quot;course update&quot; email includes links to your
                          new courses, upsells, or promotional content, it
                          qualifies as marketing under GDPR and CAN-SPAM. Your
                          privacy policy should clearly define what types of
                          emails you send and provide an unsubscribe mechanism
                          for promotional content.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Recording coaching sessions does not
                          require consent&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Coaching session recordings capture voice, video, and
                          personal information discussed during the call. Under
                          GDPR and many state laws, recording a conversation
                          requires consent from all participants. Your privacy
                          policy must disclose that sessions may be recorded,
                          explain where recordings are stored, and provide
                          students with the option to decline recording.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 flex gap-4">
                      <div className="flex-shrink-0">
                        <Ban className="w-5 h-5 text-red-500 mt-0.5" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          Mistake: &quot;Free course students do not need
                          privacy protection&quot;
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Students who enroll in free courses provide the same
                          personal data as paying students: email, name, and
                          course progress data. Privacy laws do not distinguish
                          between free and paid services. If you collect personal
                          data from free course students, you have the same
                          disclosure and data protection obligations as you do
                          for paid students.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 10: How to Create Your Policy */}
              <section id="how-to-create" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    10
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      How to Create a Privacy Policy for Your Teachable Courses
                    </h2>
                    <p className="mt-2 text-base text-slate-500">
                      A step-by-step process tailored to online course creators
                      on Teachable.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pl-0 sm:pl-[52px]">
                  <p className="text-base leading-7 text-slate-700 mb-6">
                    Creating a privacy policy for your Teachable school is
                    straightforward. Follow these six steps to create a policy
                    that covers your student data handling, course progress
                    tracking, and email marketing practices.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1",
                        title: "Audit all student data you collect",
                        content:
                          "Document every type of student data you receive through Teachable: email addresses, names, enrollment records, course progress, quiz scores, coaching session details, payment confirmations, discussion posts, and any custom form data collected during enrollment or within courses.",
                      },
                      {
                        step: "Step 2",
                        title: "Map your third-party integrations",
                        content:
                          "List every external service that receives student data from your Teachable school: email marketing platforms (ConvertKit, Mailchimp, ActiveCampaign), webinar tools (Zoom, Crowdcast), analytics services (Google Analytics), scheduling tools (Calendly), and any tools connected through Zapier or Teachable's integrations.",
                      },
                      {
                        step: "Step 3",
                        title: "Identify applicable privacy laws",
                        content:
                          "Since online courses reach students worldwide without geographic restrictions, most Teachable creators with any meaningful enrollment will have EU students (triggering GDPR) and California students (potentially triggering CCPA). Check your Teachable analytics to confirm your student locations.",
                      },
                      {
                        step: "Step 4",
                        title: "Generate your privacy policy",
                        content:
                          "Use a privacy policy generator to create a document tailored to your Teachable school. Include details about student enrollment data, course progress tracking, email marketing practices, coaching session recordings, and all third-party tools that handle student data.",
                      },
                      {
                        step: "Step 5",
                        title: "Publish and link your policy",
                        content:
                          "Host your privacy policy on your Teachable school site using a custom page. Add the link to your school footer, course sales pages, enrollment checkout, and any email communications. Teachable allows you to add custom pages and footer links for this purpose.",
                      },
                      {
                        step: "Step 6",
                        title: "Review and update regularly",
                        content:
                          "Update your privacy policy when you launch new courses, add coaching features, change email marketing tools, integrate new third-party services, or modify your enrollment process. At minimum, conduct an annual review to keep your policy current and accurate.",
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
                    The process should take about 20 to 30 minutes total. The{" "}
                    <Link
                      href="/generate"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      policy generation
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    itself takes under 60 seconds once you have your data
                    practices documented. Use a{" "}
                    <Link
                      href="/gdpr-privacy-policy-template"
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5"
                    >
                      GDPR privacy policy template
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>{" "}
                    as a starting reference if you have EU students.
                  </p>
                </div>
              </section>

              <hr className="border-slate-200/60 my-14" />

              {/* Section 11: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-blue-100 text-blue-700 text-sm font-semibold flex items-center justify-center mt-0.5">
                    11
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
                      Generate Your Teachable Privacy Policy
                    </h2>
                    <p className="mt-3 text-blue-100 text-base max-w-md mx-auto">
                      Create a customized, legally compliant privacy policy for
                      your Teachable courses in under 60 seconds. Covers student
                      data, course progress, email marketing, and coaching.
                    </p>

                    <Link href="/generate">
                      <Button
                        size="lg"
                        className="mt-6 text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-6 h-auto max-w-full whitespace-normal text-center bg-white text-blue-700 hover:bg-blue-50 font-semibold rounded-xl shadow-lg shadow-blue-900/20"
                      >
                        Generate My Teachable Privacy Policy - $4.99
                      </Button>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-blue-200">
                      <span>Free preview</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>One-time payment</span>
                      <span className="w-1 h-1 rounded-full bg-blue-300/50" />
                      <span>Course creator ready</span>
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
                      href: "/privacy-policy-for-saas",
                      icon: Globe,
                      title: "Privacy Policy for SaaS",
                      desc: "SaaS platform compliance guide",
                    },
                    {
                      href: "/privacy-policy-for-gumroad",
                      icon: FileText,
                      title: "Privacy Policy for Gumroad",
                      desc: "Digital product seller guide",
                    },
                    {
                      href: "/privacy-policy-for-patreon",
                      icon: Users,
                      title: "Privacy Policy for Patreon",
                      desc: "Creator membership platform guide",
                    },
                    {
                      href: "/privacy-policy-for-substack",
                      icon: Mail,
                      title: "Privacy Policy for Substack",
                      desc: "Newsletter platform compliance",
                    },
                    {
                      href: "/privacy-policy-for-small-business",
                      icon: BookOpen,
                      title: "Privacy Policy for Small Business",
                      desc: "Small business compliance guide",
                    },
                    {
                      href: "/gdpr-privacy-policy-template",
                      icon: ShieldCheck,
                      title: "GDPR Privacy Policy Template",
                      desc: "EU compliance template and guide",
                    },
                    {
                      href: "/what-happens-without-a-privacy-policy",
                      icon: AlertTriangle,
                      title: "What Happens Without a Privacy Policy",
                      desc: "Risks and penalties explained",
                    },
                    {
                      href: "/generate",
                      icon: CreditCard,
                      title: "Privacy Policy Generator",
                      desc: "Generate your policy in 60 seconds",
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
