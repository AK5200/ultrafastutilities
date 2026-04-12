import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  AlertTriangle,
  Ban,
  ChevronRight,
  FileText,
  Globe,
  BookOpen,
  CreditCard,
  Clock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Kajabi: Course Creators and Membership Sites (2026)",
  description:
    "Running a course or membership site on Kajabi? Learn what your privacy policy must say about student data, Stripe payments, email marketing, and GDPR consent for international students.",
  keywords:
    "privacy policy for kajabi, kajabi privacy policy, kajabi course privacy policy, kajabi membership privacy policy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-kajabi",
  },
  openGraph: {
    title: "Privacy Policy for Kajabi: Course Creators and Membership Sites (2026)",
    description:
      "Kajabi course creators collect student data, process payments via Stripe, and send automated email sequences. Your privacy policy must cover all of this.",
    url: "https://ultrafastutilities.com/privacy-policy-for-kajabi",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Kajabi" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Kajabi: Course Creators and Membership Sites (2026)",
    description:
      "Kajabi course creators collect student data, process payments via Stripe, and send automated email sequences. Here is what your privacy policy must cover.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-kajabi-collects", title: "What Kajabi Collects About Students" },
  { id: "kajabi-vs-creator-responsibility", title: "Kajabi vs. Creator Responsibility" },
  { id: "payment-data", title: "Payment Data and Stripe Integration" },
  { id: "email-marketing", title: "Email Marketing to Students" },
  { id: "membership-access-data", title: "Membership Access and Progress Data" },
  { id: "third-party-integrations", title: "Third-Party Integrations" },
  { id: "gdpr-for-kajabi", title: "GDPR for International Students" },
  { id: "common-mistakes", title: "5 Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Kajabi have a privacy policy I can use for my site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kajabi has its own privacy policy that governs how Kajabi (the company) handles data. However, this is not a privacy policy for your course or membership site. As a Kajabi course creator, you are a separate data controller responsible for your own privacy policy that discloses how you collect, use, and share your students' personal data.",
      },
    },
    {
      "@type": "Question",
      name: "What data does Kajabi give course creators access to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kajabi provides course creators with access to student names, email addresses, purchase history, course enrollment status, course progress (lessons completed, quizzes taken), login activity, and any information students submit through forms or assessments. You are responsible for disclosing the collection and use of all this data in your privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need GDPR compliance if I have European students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If any of your students are based in the EU or EEA, GDPR applies to your processing of their personal data regardless of where you are located. You need a GDPR-compliant privacy policy, a lawful basis for processing (typically contract performance for enrolled students), and you must honor EU student rights including access, erasure, and data portability requests.",
      },
    },
    {
      "@type": "Question",
      name: "How does Stripe fit into my Kajabi privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kajabi uses Stripe to process payments. When a student purchases your course, their payment card data is processed by Stripe directly - Kajabi and you as the creator do not store raw card numbers. Your privacy policy should disclose that payments are processed by Stripe, a PCI DSS-compliant payment processor, and optionally link to Stripe's privacy policy. Stripe does receive the purchaser's name, email, billing address, and transaction amount.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use student email addresses to market other products to them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can send marketing emails to students who have purchased from you under certain conditions. In the US, CAN-SPAM allows this as long as you provide an unsubscribe option. In the EU, you typically need explicit consent for marketing beyond the course they purchased. Your privacy policy must clearly state how you use student email addresses and whether you send promotional content.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy for Kajabi: Course Creators and Membership Sites",
  description:
    "A complete guide to privacy policy requirements for Kajabi course creators and membership site owners, covering student data, Stripe payments, email marketing, and GDPR.",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "Ultra Fast Utilities" },
  publisher: { "@type": "Organization", name: "Ultra Fast Utilities" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy for Kajabi",
      item: "https://ultrafastutilities.com/privacy-policy-for-kajabi",
    },
  ],
};

export default function KajabiPrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ReadingProgress />
      <main className="min-h-screen">
        <header className="relative overflow-hidden border-b border-slate-200/60">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white" />
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-blue-50/60 blur-3xl" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600">Privacy Policy for Kajabi</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Course Creator Guide
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Kajabi Creators
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                As a Kajabi creator, you collect student names, emails, payment information, course progress, and behavioral data. Kajabi's own privacy policy does not cover your obligations to your students - you need your own.
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={tocSections} />
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/80">
                  <p className="text-sm font-semibold text-slate-800">Need your own policy?</p>
                  <p className="text-xs text-slate-500 mt-1">Generate in under 60 seconds</p>
                  <Link href="/generate"><Button size="sm" className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg">Generate Policy</Button></Link>
                </div>
              </div>
            </aside>
            <article className="max-w-[720px] prose prose-slate">
              <div className="not-prose flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">AK</div>
                  <span>Written by{" "}<span className="font-semibold text-slate-800">Anupam Kumar</span></span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <span>Last updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>13 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

            {/* Featured snippet */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-8 not-prose">
              <h2 className="text-blue-900 font-bold text-lg mb-3">Quick Answer: What a Kajabi Privacy Policy Must Cover</h2>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li><strong>Student account data:</strong> Name, email, password, profile information</li>
                <li><strong>Course progress:</strong> Lessons completed, quiz scores, certificates issued</li>
                <li><strong>Payment data:</strong> Processed by Stripe; what billing data is retained</li>
                <li><strong>Email marketing:</strong> Which platform (Kajabi's built-in, ActiveCampaign, Mailchimp) and what data is used</li>
                <li><strong>Analytics:</strong> How student behavior is tracked within the course platform</li>
                <li><strong>GDPR:</strong> Legal basis for processing EU student data and how to exercise rights</li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="what-kajabi-collects">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Kajabi Collects About Your Students (and Shares with You)</h2>
              <p className="text-slate-700 mb-4">
                Kajabi is an all-in-one platform that handles course delivery, payments, email marketing, landing pages, and community features. When students interact with your Kajabi site, substantial data is collected - and much of it is made available to you as the creator.
              </p>
              <p className="text-slate-700 mb-4">
                As a Kajabi creator, you are the data controller for your students' data. Kajabi acts as your data processor. This means you are legally responsible for that data under privacy laws, and Kajabi's own privacy policy does not fulfill your obligations to your students.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Data You Have Access to in Your Kajabi Dashboard</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Data Type</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">What It Includes</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Must Disclose?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Account information</td>
                      <td className="border border-slate-200 p-3">Name, email, password (hashed), profile photo</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Purchase history</td>
                      <td className="border border-slate-200 p-3">Products purchased, amounts, purchase dates, refund status</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Course progress</td>
                      <td className="border border-slate-200 p-3">Lessons viewed, completion percentage, quiz scores, last login</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Engagement data</td>
                      <td className="border border-slate-200 p-3">Email open rates, click rates, login frequency</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Assessment submissions</td>
                      <td className="border border-slate-200 p-3">Quiz answers, assignment submissions, feedback responses</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Community activity</td>
                      <td className="border border-slate-200 p-3">Posts, comments, likes, direct messages (if Community feature is used)</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Device and access data</td>
                      <td className="border border-slate-200 p-3">IP address, device type, browser, geographic location</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">Kajabi's analytics dashboard shows you exactly which students have logged in recently, which lessons they have completed, and even their email engagement rates. This granular behavioral data is "personal data" under GDPR and must be disclosed in your privacy policy. Many creators are surprised to learn the extent of what Kajabi tracks and surfaces.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="kajabi-vs-creator-responsibility">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Kajabi vs. Creator: Who Is Responsible for What</h2>
              <p className="text-slate-700 mb-4">
                Understanding the data controller vs. data processor distinction is essential for writing an accurate privacy policy and understanding your legal obligations.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Responsibility</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Kajabi (Data Processor)</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">You as Creator (Data Controller)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Platform security</td>
                      <td className="border border-slate-200 p-3 text-green-700">Kajabi is responsible</td>
                      <td className="border border-slate-200 p-3 text-yellow-700">You must mention it in policy</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Privacy policy for your site</td>
                      <td className="border border-slate-200 p-3 text-red-700">Not Kajabi's responsibility</td>
                      <td className="border border-slate-200 p-3 text-green-700">Your responsibility entirely</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Responding to data access requests</td>
                      <td className="border border-slate-200 p-3 text-yellow-700">Kajabi can assist on request</td>
                      <td className="border border-slate-200 p-3 text-green-700">You must handle these requests</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Consent for marketing emails</td>
                      <td className="border border-slate-200 p-3 text-red-700">Not Kajabi's responsibility</td>
                      <td className="border border-slate-200 p-3 text-green-700">You must obtain and manage consent</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">GDPR compliance for EU students</td>
                      <td className="border border-slate-200 p-3 text-yellow-700">Kajabi provides GDPR tools</td>
                      <td className="border border-slate-200 p-3 text-green-700">You are the data controller</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-700 mb-4">
                Kajabi provides a Data Processing Agreement (DPA) for creators who need to demonstrate GDPR compliance. Under GDPR Article 28, you are required to have a DPA in place with all data processors, including Kajabi. You can sign Kajabi's DPA in your account settings under Legal.
              </p>
            </section>

            {/* Section 3 */}
            <section id="payment-data">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Payment Data and Stripe Integration</h2>
              <p className="text-slate-700 mb-4">
                Kajabi processes payments through Stripe. When a student purchases a course, their card details are handled directly by Stripe - neither Kajabi nor you as the creator ever have access to raw card numbers. This is an important distinction that your privacy policy should clarify to build student trust.
              </p>
              <p className="text-slate-700 mb-4">
                However, Stripe does pass billing data back to Kajabi: the purchaser's name, email address, billing address, and transaction amount are stored in your Kajabi dashboard. If students purchase via PayPal (if you have enabled it), PayPal similarly processes the payment but shares the transaction details.
              </p>
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">What to Include in Your Kajabi Policy About Payments</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                <li>That payments are processed by Stripe (and PayPal if enabled), not by you directly</li>
                <li>That Stripe is PCI DSS compliant and handles card security</li>
                <li>What billing information you retain (name, email, billing address, transaction history)</li>
                <li>How long you retain purchase records (for tax and accounting purposes, typically 7 years)</li>
                <li>Your refund policy and how refund requests affect data retention</li>
                <li>Whether you use subscription billing and how recurring payment data is handled</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">If you offer payment plans on Kajabi, Stripe stores the customer's payment method for recurring charges. Your privacy policy should note that payment method details are stored by Stripe (not you) for the duration of any installment plan or subscription. Students have the right to request deletion of their payment methods in the Stripe system once their obligations are complete.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="email-marketing">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Email Marketing to Students</h2>
              <p className="text-slate-700 mb-4">
                Email is the primary communication channel for Kajabi creators. Kajabi has a built-in email system, but many creators also integrate ConvertKit, ActiveCampaign, Drip, or Mailchimp. Each integration creates additional data sharing that must be disclosed.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Types of Emails You Send and Their Legal Basis</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Email Type</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Example</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">GDPR Basis</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">US Law</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Transactional</td>
                      <td className="border border-slate-200 p-3">Purchase receipt, course access link</td>
                      <td className="border border-slate-200 p-3 text-green-700">Contract performance</td>
                      <td className="border border-slate-200 p-3 text-green-700">Permitted</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Course onboarding</td>
                      <td className="border border-slate-200 p-3">Welcome sequence, lesson reminders</td>
                      <td className="border border-slate-200 p-3 text-green-700">Contract performance</td>
                      <td className="border border-slate-200 p-3 text-green-700">Permitted</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Promotional</td>
                      <td className="border border-slate-200 p-3">New course launch, discount offer</td>
                      <td className="border border-slate-200 p-3 text-red-700">Requires explicit consent (EU)</td>
                      <td className="border border-slate-200 p-3 text-yellow-700">CAN-SPAM: unsubscribe required</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Re-engagement</td>
                      <td className="border border-slate-200 p-3">Win-back campaigns for inactive students</td>
                      <td className="border border-slate-200 p-3 text-red-700">Requires explicit consent (EU)</td>
                      <td className="border border-slate-200 p-3 text-yellow-700">CAN-SPAM: unsubscribe required</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 mb-4">
                Your privacy policy must clearly state what types of emails students will receive after purchasing, how they can manage their email preferences, and how to unsubscribe from marketing communications without affecting their course access.
              </p>
            </section>

            {/* Section 5 */}
            <section id="membership-access-data">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Membership Access and Course Progress Data</h2>
              <p className="text-slate-700 mb-4">
                Kajabi tracks detailed student engagement data that goes beyond simple enrollment. This includes lesson completion, video watch time, quiz performance, community post activity, and login frequency. Creators use this data to improve course completion rates and to follow up with disengaged students.
              </p>
              <p className="text-slate-700 mb-4">
                Under GDPR, course progress data constitutes personal data because it can be linked to an identified individual. Your privacy policy must disclose that you collect and analyze engagement data, the purposes for which you use it (improving course delivery, student outreach, course completion optimization), and how long you retain it.
              </p>
              <p className="text-slate-700 mb-4">
                If you use course completion data to issue certificates, this is another element that should be disclosed - particularly because certificates often contain the student's full name and may be shared publicly.
              </p>
            </section>

            {/* Section 6 */}
            <section id="third-party-integrations">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Third-Party Integrations and Data Sharing</h2>
              <p className="text-slate-700 mb-4">
                Kajabi integrates with a wide range of third-party tools. Every integration you activate is a potential data sharing arrangement that must be disclosed in your privacy policy.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Integration</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">What Data Is Shared</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Google Analytics</td>
                      <td className="border border-slate-200 p-3">Page views, session data, device info</td>
                      <td className="border border-slate-200 p-3">Site analytics and optimization</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Facebook Pixel</td>
                      <td className="border border-slate-200 p-3">Purchase events, page views, email (hashed)</td>
                      <td className="border border-slate-200 p-3">Retargeting and conversion tracking</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">ConvertKit / ActiveCampaign</td>
                      <td className="border border-slate-200 p-3">Name, email, tags, purchase data</td>
                      <td className="border border-slate-200 p-3">Email marketing automation</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Zapier</td>
                      <td className="border border-slate-200 p-3">Any data in triggers/actions</td>
                      <td className="border border-slate-200 p-3">Workflow automation between tools</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Zoom</td>
                      <td className="border border-slate-200 p-3">Name, email, attendance</td>
                      <td className="border border-slate-200 p-3">Live coaching calls and webinars</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Circle / Slack (community)</td>
                      <td className="border border-slate-200 p-3">Name, email, community activity</td>
                      <td className="border border-slate-200 p-3">Community engagement outside Kajabi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section id="gdpr-for-kajabi">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">GDPR for International Students on Kajabi</h2>
              <p className="text-slate-700 mb-4">
                Many successful Kajabi creators teach students globally, including from the EU and UK. GDPR applies as soon as you have EU or UK students, regardless of where you or your business are located.
              </p>
              <p className="text-slate-700 mb-4">
                Your privacy policy needs to address all of the following for EU/UK student compliance:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                <li>Legal basis for processing student enrollment data: contract performance (course delivery)</li>
                <li>Legal basis for marketing emails: explicit consent (separate from enrollment)</li>
                <li>How students can exercise their rights: access, erasure, portability, objection, and rectification</li>
                <li>Retention periods for each category of student data</li>
                <li>Any international transfers (Kajabi is a US company, so EU student data flows to the US)</li>
                <li>Your contact details or those of your EU representative if applicable</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">Kajabi is headquartered in California, USA. When EU students enroll in your course, their data flows to Kajabi's US servers. Under GDPR, this is an international data transfer. Kajabi handles this through Standard Contractual Clauses (SCCs), which you can reference in your privacy policy as the transfer mechanism for EU student data.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5 Common Mistakes */}
            <section id="common-mistakes">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5 Common Kajabi Privacy Policy Mistakes</h2>
              <div className="space-y-3 mb-8 not-prose">
                {[
                  {
                    title: "Linking to Kajabi's own privacy policy instead of writing your own",
                    desc: "Kajabi's privacy policy governs how Kajabi (the company) handles data. It does not substitute for your own privacy policy as a course creator. You need a separate policy that discloses how you specifically collect and use student data.",
                  },
                  {
                    title: "Not disclosing third-party integrations like Facebook Pixel or ConvertKit",
                    desc: "If you install Facebook Pixel on your Kajabi site, student browsing data is sent to Meta. If you sync enrollments to ConvertKit, student names and emails go to ConvertKit. Both must be disclosed in your privacy policy.",
                  },
                  {
                    title: "Treating course progress data as non-personal operational data",
                    desc: "Lesson completion rates, quiz scores, and login activity are personal data because they are linked to identified students. GDPR requires these to be disclosed and subject to the same rights as other personal data.",
                  },
                  {
                    title: "Adding students to marketing sequences without clear consent for EU students",
                    desc: "Automatically enrolling EU students in a promotional email sequence upon course purchase is not valid GDPR consent for marketing. Transactional course emails are fine, but promotional content requires a separate, explicit opt-in.",
                  },
                  {
                    title: "Not including a clear data deletion process for students who request it",
                    desc: "GDPR gives EU students the right to erasure. Your policy must explain how they can request deletion of their account and data. Note that you may retain purchase records for legal and tax purposes even after account deletion, and your policy should explain this exception.",
                  },
                ].map((mistake, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <Ban className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900 text-sm">{mistake.title}</p>
                      <p className="text-red-700 text-sm mt-1">{mistake.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {faqSchema.mainEntity.map((item, i) => (
                  <details key={i} className="border border-slate-200 rounded-lg">
                    <summary className="p-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                      {item.name}
                      <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 text-slate-700 text-sm leading-relaxed">
                      {item.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white not-prose">
              <div className="flex items-start gap-4">
                <CreditCard className="w-10 h-10 text-violet-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Generate a Kajabi Privacy Policy in Minutes</h2>
                  <p className="text-slate-300 mb-6">
                    Cover student data, Stripe payments, email marketing, course progress tracking, and GDPR compliance for international students in one tailored document.
                  </p>
                  <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold">
                    <Link href="/">Generate Your Privacy Policy Free</Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* Resource links */}
            <section className="mt-10 not-prose">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Related Resources</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { href: "/privacy-policy-for-online-course", label: "Privacy Policy for Online Courses" },
                  { href: "/privacy-policy-for-convertkit", label: "Privacy Policy for ConvertKit Users" },
                  { href: "/gdpr-privacy-policy", label: "GDPR Privacy Policy Requirements" },
                  { href: "/privacy-policy-for-membership-site", label: "Privacy Policy for Membership Sites" },
                  { href: "/privacy-policy-for-coaches", label: "Privacy Policy for Coaches" },
                  { href: "/ccpa-privacy-policy", label: "CCPA Privacy Policy Requirements" },
                  { href: "/privacy-policy-fines-and-penalties", label: "Privacy Policy Fines and Penalties" },
                  { href: "/privacy-policy-generator", label: "Free Privacy Policy Generator" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 text-sm text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    {link.label}
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
