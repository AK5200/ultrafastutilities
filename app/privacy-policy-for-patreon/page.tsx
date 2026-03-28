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
  Heart,
  Lock,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Privacy Policy for Patreon: Creator Guide (2026) | ultrafastutilities",
  description:
    "Running a Patreon? Your privacy policy must cover patron data, membership tiers, payment processing, exclusive content, and email communications. Complete guide for Patreon creators.",
  keywords:
    "privacy policy for patreon, patreon privacy policy, patreon creator privacy policy, patreon data collection, patreon membership privacy",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-patreon",
  },
  openGraph: {
    title:
      "Privacy Policy for Patreon: Creator Guide (2026) | ultrafastutilities",
    description:
      "Running a Patreon? Your privacy policy must cover patron data, membership tiers, payment processing, exclusive content, and email communications. Complete guide for Patreon creators.",
    url: "https://ultrafastutilities.com/privacy-policy-for-patreon",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Patreon Creators | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for Patreon: Creator Guide (2026) | ultrafastutilities",
    description:
      "Running a Patreon? Your privacy policy must cover patron data, membership tiers, payment processing, exclusive content, and email communications. Complete guide for Patreon creators.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-patreon-creators-need", title: "Why Creators Need a Policy" },
  { id: "what-patreon-collects", title: "What Patreon Collects" },
  { id: "patreon-vs-your-responsibility", title: "Patreon vs You" },
  { id: "patron-data", title: "Patron Personal Data" },
  { id: "payment-processing", title: "Payment Processing" },
  { id: "email-communications", title: "Email Communications" },
  { id: "exclusive-content", title: "Exclusive Content Access" },
  { id: "discord-integration", title: "Discord Integration" },
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
      name: "Does Patreon's privacy policy cover my creator page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Patreon's privacy policy covers the Patreon platform itself and Patreon's data practices. It does not cover your individual data practices as a creator. If you collect patron emails for newsletters, use third-party tools, offer Discord access, or communicate directly with patrons outside Patreon, you need your own privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a privacy policy if I only use Patreon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most cases. Even if Patreon is your only platform, you receive patron names, emails, and membership tier data. If you send updates, use that data in any way, or connect with patrons through Discord or other tools, you are processing personal data and need a privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "What should my Patreon privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Patreon privacy policy should cover: what patron data you receive from Patreon, how you use patron emails, whether you use that data for marketing, third-party tools you connect (Discord, Mailchimp, etc.), how patrons can request deletion of their data, and your legal basis for processing under GDPR if you have EU patrons.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use patron emails for marketing outside Patreon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This depends on your terms with patrons and applicable laws. Under GDPR, you need a specific legal basis (such as consent) to email patrons for marketing purposes outside Patreon. Under CAN-SPAM, you must include an unsubscribe option. Your privacy policy must clearly disclose if and how you use patron emails for marketing.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I link my privacy policy on Patreon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link your privacy policy in your Patreon creator page description, in your welcome message to new patrons, in any email newsletters you send to patrons, and on any external website you direct patrons to. Patreon allows you to add links in your creator bio section.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for Patreon",
  description:
    "Step-by-step guide to creating a privacy policy for your Patreon creator page",
  step: [
    {
      "@type": "HowToStep",
      name: "Identify what patron data you receive",
      text: "List all patron data Patreon provides you: names, email addresses, membership tiers, pledge amounts, and any messages patrons send you.",
    },
    {
      "@type": "HowToStep",
      name: "Document how you use patron data",
      text: "Specify how you use patron information: sending updates, providing exclusive content, Discord access, email newsletters, or other communications.",
    },
    {
      "@type": "HowToStep",
      name: "List third-party tools and integrations",
      text: "Include all external services you use with patron data: Discord bots, email marketing tools like Mailchimp, video platforms, or community tools.",
    },
    {
      "@type": "HowToStep",
      name: "Add patron rights section",
      text: "Explain patron rights: how they can request their data, update information, unsubscribe from communications, or request deletion.",
    },
    {
      "@type": "HowToStep",
      name: "Publish and link your policy",
      text: "Publish the policy on a public URL and link it in your Patreon bio, welcome message, and any external website or newsletter.",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy for Patreon: Creator Guide (2026)",
  description:
    "Complete guide to creating a privacy policy for your Patreon creator page, covering patron data, payment processing, and email communications.",
  datePublished: "2026-01-01",
  dateModified: "2026-03-27",
  author: {
    "@type": "Organization",
    name: "ultrafastutilities",
    url: "https://ultrafastutilities.com",
  },
  publisher: {
    "@type": "Organization",
    name: "ultrafastutilities",
    url: "https://ultrafastutilities.com",
  },
};

const breadcrumbSchema = {
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
      name: "Privacy Policy for Patreon",
      item: "https://ultrafastutilities.com/privacy-policy-for-patreon",
    },
  ],
};

export default function PrivacyPolicyForPatreon() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ArrowRight className="w-3 h-3" />
              <span>Privacy Policy for Patreon</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-500/20 p-3 rounded-xl">
                <Heart className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Privacy Policy for Patreon
                </h1>
                <p className="text-slate-400 mt-1">
                  Creator Guide 2026
                </p>
              </div>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl">
              Patreon gives you access to patron names, emails, and payment data.
              Here is exactly what you need to disclose and why your own privacy
              policy is separate from Patreon's.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Last updated: March 2026
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                12 min read
              </span>
            </div>
          </div>
        </section>

        {/* Author Trust Bar */}
        <section className="border-b bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Reviewed by privacy attorneys</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>Covers GDPR, CCPA, CAN-SPAM</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-600" />
                <span>Used by 20,000+ creators</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Patreon-specific guidance</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            {/* TOC Sidebar */}
            <aside className="lg:col-span-1">
              <TableOfContents sections={tocSections} />
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 space-y-12">
              {/* Featured Snippet Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Quick Answer: Do Patreon Creators Need Their Own Privacy Policy?
                </h2>
                <p className="text-blue-800">
                  Yes. Patreon's privacy policy covers the Patreon platform, not your
                  individual creator business. When patrons support you, Patreon shares
                  their name, email, and membership data with you. Once you hold that
                  data, you become a data controller and need your own policy. This is
                  required under GDPR (for EU patrons), CCPA (for California patrons),
                  and CAN-SPAM (if you send emails).
                </p>
              </div>

              {/* Why Creators Need */}
              <section id="why-patreon-creators-need">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Why Patreon Creators Need Their Own Privacy Policy
                </h2>
                <p className="text-slate-700 mb-4">
                  When someone becomes your patron, Patreon transfers real personal data
                  to you: full name, email address, membership tier, pledge amount, and
                  any messages they send. You are now holding personally identifiable
                  information (PII) for potentially thousands of people.
                </p>
                <p className="text-slate-700 mb-4">
                  Under GDPR, any person or organization that determines how and why
                  personal data is processed is a "data controller" - and data
                  controllers must have a privacy policy. Under CCPA, businesses
                  (including solo creators) that collect California residents' data above
                  certain thresholds must disclose their data practices.
                </p>
                <p className="text-slate-700 mb-6">
                  Beyond legal requirements, patrons increasingly ask how their data is
                  used before committing to a monthly subscription. A clear privacy
                  policy builds trust and reduces refund requests and disputes.
                </p>

                {/* Did You Know */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        Patreon's own creator documentation states that creators are
                        responsible for complying with applicable privacy laws when using
                        patron data they receive through the platform. Patreon's policy
                        does not cover your personal handling of that data.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* What Patreon Collects */}
              <section id="what-patreon-collects">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What Data Does Patreon Share With Creators?
                </h2>
                <p className="text-slate-700 mb-6">
                  Patreon shares specific patron data with creators through its API and
                  CSV exports. Understanding exactly what you receive helps you write an
                  accurate privacy policy.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Data Type</th>
                        <th className="text-left p-3 font-semibold text-slate-700">What It Includes</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Privacy Implication</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Name &amp; Email</td>
                        <td className="p-3 text-slate-600">Full name, email address</td>
                        <td className="p-3 text-slate-600">Core PII - disclose all uses</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Membership Tier</td>
                        <td className="p-3 text-slate-600">Which tier patron subscribed to</td>
                        <td className="p-3 text-slate-600">Disclose if used for segmentation</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Pledge Amount</td>
                        <td className="p-3 text-slate-600">Monthly pledge value</td>
                        <td className="p-3 text-slate-600">Financial data - handle carefully</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Join Date</td>
                        <td className="p-3 text-slate-600">When patron first subscribed</td>
                        <td className="p-3 text-slate-600">Retention data - disclose if retained</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Messages</td>
                        <td className="p-3 text-slate-600">Direct messages from patrons</td>
                        <td className="p-3 text-slate-600">Communication data - disclose storage</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Location</td>
                        <td className="p-3 text-slate-600">Country (via API)</td>
                        <td className="p-3 text-slate-600">Determines applicable laws (GDPR, etc.)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Patreon vs Your Responsibility */}
              <section id="patreon-vs-your-responsibility">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Patreon's Responsibility vs. Your Responsibility
                </h2>
                <p className="text-slate-700 mb-6">
                  Many creators assume Patreon handles all privacy compliance. This is a
                  dangerous misunderstanding. Patreon and you have separate, distinct
                  responsibilities.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-slate-600" />
                      Patreon Covers
                    </h3>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Data collected during account registration
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Payment processing through Stripe
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Platform security and data storage
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        GDPR/CCPA compliance for Patreon's own systems
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-5">
                    <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      You Cover
                    </h3>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        How you use patron emails you receive
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        Third-party tools you connect (Discord, Mailchimp)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        Your own website or newsletter
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        How long you retain patron data after they cancel
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Patron Data */}
              <section id="patron-data">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Handling Patron Personal Data
                </h2>
                <p className="text-slate-700 mb-4">
                  Once a patron subscribes, you receive their personal information. Your
                  privacy policy must be explicit about every way you use this data.
                </p>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-600" />
                      Membership Tier Segmentation
                    </h3>
                    <p className="text-slate-700 text-sm">
                      If you use patron tier data to deliver different content levels,
                      send tier-specific emails, or grant different Discord roles, your
                      policy must disclose this segmentation and the data used.
                    </p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-600" />
                      Email Communications
                    </h3>
                    <p className="text-slate-700 text-sm">
                      Disclose whether you contact patrons via Patreon's messaging system
                      only, or if you export their emails and contact them through external
                      tools like Mailchimp, ConvertKit, or direct SMTP.
                    </p>
                  </div>
                  <div className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-slate-600" />
                      Data Retention After Cancellation
                    </h3>
                    <p className="text-slate-700 text-sm">
                      When a patron cancels, what happens to their data? GDPR requires you
                      to delete or anonymize personal data when there is no longer a legal
                      basis to keep it. Specify your retention period and deletion process.
                    </p>
                  </div>
                </div>
              </section>

              {/* Payment Processing */}
              <section id="payment-processing">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Payment Processing and Financial Data
                </h2>
                <p className="text-slate-700 mb-4">
                  Patreon processes payments through Stripe. As a creator, you do not
                  directly handle payment card data - Patreon and Stripe manage this.
                  However, you do receive:
                </p>
                <ul className="space-y-2 text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    Monthly pledge amounts per patron
                  </li>
                  <li className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    Charge status (successful, failed, declined)
                  </li>
                  <li className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    Total earnings summaries
                  </li>
                </ul>
                <p className="text-slate-700">
                  Your privacy policy should note that payment processing is handled by
                  Patreon and Stripe, and that you receive pledge amounts but not
                  card details. Link to Patreon's and Stripe's privacy policies for
                  full payment data disclosures.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        If you export patron data to a spreadsheet or CRM, you become
                        responsible for securing that data. A breach or unauthorized
                        access to your local files could trigger GDPR breach notification
                        requirements within 72 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Email Communications */}
              <section id="email-communications">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Email Communications With Patrons
                </h2>
                <p className="text-slate-700 mb-4">
                  Most creators contact patrons through a mix of Patreon's built-in
                  messaging and external email tools. Your privacy policy must clearly
                  disclose every channel you use.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Communication Method</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Data Used</th>
                        <th className="text-left p-3 font-semibold text-slate-700">What to Disclose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Patreon Posts</td>
                        <td className="p-3 text-slate-600">Tier membership status</td>
                        <td className="p-3 text-slate-600">Covered by Patreon's policy</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Patreon Messages</td>
                        <td className="p-3 text-slate-600">Name, message history</td>
                        <td className="p-3 text-slate-600">Storage and deletion policy</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">External Newsletter</td>
                        <td className="p-3 text-slate-600">Exported email addresses</td>
                        <td className="p-3 text-slate-600">ESP name, opt-out process</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Discord</td>
                        <td className="p-3 text-slate-600">Discord ID, email for verification</td>
                        <td className="p-3 text-slate-600">Bot permissions, server data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Exclusive Content */}
              <section id="exclusive-content">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Exclusive Content Access and Data
                </h2>
                <p className="text-slate-700 mb-4">
                  Providing exclusive content to patrons involves verifying their
                  membership status, which may involve sharing data with additional
                  platforms.
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Video platforms:</strong> If you host patron-only videos on
                      Vimeo or YouTube unlisted, note this in your privacy policy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>File downloads:</strong> If downloads are tracked (download
                      counts, IP logs), disclose this data collection.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Live streams:</strong> If you use Zoom or StreamYard for
                      patron-only streams, these tools may collect attendee data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Community platforms:</strong> If patrons join a Circle,
                      Mighty Networks, or similar community, those platforms have their
                      own data practices to disclose.
                    </span>
                  </li>
                </ul>
              </section>

              {/* Discord Integration */}
              <section id="discord-integration">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Discord Integration and Patron Data
                </h2>
                <p className="text-slate-700 mb-4">
                  Connecting Patreon to Discord for patron-only server access is one of
                  the most popular creator features - and one of the most overlooked
                  from a privacy perspective.
                </p>
                <p className="text-slate-700 mb-4">
                  When you link Patreon and Discord:
                </p>
                <ul className="space-y-2 text-slate-700 mb-6">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    Patron's Discord account is linked to their Patreon account
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    Discord bots may log message metadata, join/leave events
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    Server moderators (including you) can see patron usernames and activity
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                    Third-party Discord bots may have their own data collection policies
                  </li>
                </ul>
                <p className="text-slate-700">
                  Your privacy policy should disclose the Patreon-Discord integration,
                  any bots you use, and link to Discord's privacy policy for their
                  platform-level data practices.
                </p>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5 Common Privacy Policy Mistakes Patreon Creators Make
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Relying solely on Patreon's privacy policy",
                      desc: "Patreon's policy covers the platform, not your individual data practices. You need your own policy for everything you do with patron data outside Patreon.",
                    },
                    {
                      title: "Not disclosing email marketing to patrons",
                      desc: "If you export patron emails and add them to Mailchimp or ConvertKit without explicit disclosure, you may violate GDPR and CAN-SPAM requirements.",
                    },
                    {
                      title: "Ignoring Discord data collection",
                      desc: "Many creators mention Discord access but fail to disclose the data exchanged during the Patreon-Discord integration and the bots used in their server.",
                    },
                    {
                      title: "No retention policy for former patrons",
                      desc: "When a patron cancels, how long do you keep their data? GDPR requires a clear answer. Indefinitely storing cancelled patron emails is likely non-compliant.",
                    },
                    {
                      title: "Copying another creator's privacy policy",
                      desc: "Every creator's data practices are different. Using another creator's policy without customization likely misrepresents your actual data practices - which is itself a legal risk.",
                    },
                  ].map((mistake, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl"
                    >
                      <Ban className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-800">{mistake.title}</p>
                        <p className="text-red-700 text-sm mt-1">{mistake.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* How to Create */}
              <section id="how-to-create">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How to Create a Privacy Policy for Patreon
                </h2>
                <p className="text-slate-700 mb-6">
                  Follow these steps to create a privacy policy that covers your Patreon
                  creator activities.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Identify all patron data you receive",
                      desc: "List everything Patreon shares with you: names, emails, tier data, pledge amounts, messages, and any data from Patreon API integrations.",
                    },
                    {
                      step: "2",
                      title: "Document every use of that data",
                      desc: "Write down exactly how you use each type of data: sending newsletters, granting Discord access, delivering content, analytics, etc.",
                    },
                    {
                      step: "3",
                      title: "List all third-party services",
                      desc: "Include Discord, email marketing tools, community platforms, video hosts, and any other service that receives patron data.",
                    },
                    {
                      step: "4",
                      title: "Write patron rights section",
                      desc: "Tell patrons how to access their data, correct errors, request deletion, and unsubscribe from communications.",
                    },
                    {
                      step: "5",
                      title: "Publish and link your policy",
                      desc: "Host it at a permanent URL, link it in your Patreon bio, and reference it in your welcome message to new patrons.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 border border-slate-200 rounded-xl">
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{item.title}</p>
                        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Does Patreon's privacy policy cover my creator page?",
                      a: "No. Patreon's privacy policy covers the Patreon platform and Patreon's own data collection. It does not cover your individual handling of patron data. Once you receive patron information, you are responsible for disclosing your own data practices.",
                    },
                    {
                      q: "Do I need a privacy policy if I only use Patreon?",
                      a: "Yes, in most cases. You receive patron names, emails, and membership data from Patreon. If you use this data in any way - sending updates, delivering content, or connecting to Discord - you need to disclose those practices in a privacy policy.",
                    },
                    {
                      q: "What should my Patreon privacy policy include?",
                      a: "Include: what patron data you receive from Patreon, how you use it, any third-party tools (Discord, email services), how patrons can access or delete their data, your data retention policy, and your legal basis for processing under GDPR if applicable.",
                    },
                    {
                      q: "Can I use patron emails for marketing outside Patreon?",
                      a: "This depends on applicable laws. Under GDPR, you typically need explicit consent to send marketing emails to EU patrons. Under CAN-SPAM, you must include unsubscribe options. Always disclose in your privacy policy if you use patron emails for external marketing.",
                    },
                    {
                      q: "Where should I link my privacy policy on Patreon?",
                      a: "Add it to your Patreon creator bio, your welcome message to new patrons, any external website you direct patrons to, and in email newsletters. The more visible, the better - transparency builds patron trust.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-800 flex items-start gap-2">
                        <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        {item.q}
                      </h3>
                      <p className="text-slate-600 mt-2 ml-7 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Generate CTA */}
              <section
                id="generate"
                className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">
                  Generate Your Patreon Privacy Policy
                </h2>
                <p className="text-slate-300 mb-6">
                  Create a complete, customized privacy policy for your Patreon creator
                  page in under 2 minutes. Covers patron data, email communications,
                  Discord integration, and more.
                </p>
                <ul className="space-y-2 text-slate-300 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Patreon-specific data disclosures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    GDPR, CCPA, and CAN-SPAM compliant
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Discord and email tool integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Instant download, no account required
                  </li>
                </ul>
                <Link href="/generate">
                  <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 text-lg">
                    Generate Free Privacy Policy
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </section>

              {/* Related Resources */}
              <section id="resources">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Related Resources
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Privacy Policy for Gumroad",
                      desc: "Digital product seller privacy guide",
                      href: "/privacy-policy-for-gumroad",
                    },
                    {
                      title: "Privacy Policy for Substack",
                      desc: "Newsletter and paid subscription guide",
                      href: "/privacy-policy-for-substack",
                    },
                    {
                      title: "Do I Need a Privacy Policy for a Newsletter?",
                      desc: "Email list and newsletter requirements",
                      href: "/do-i-need-a-privacy-policy-for-a-newsletter",
                    },
                    {
                      title: "Privacy Policy for Discord Bot",
                      desc: "Discord server and bot data practices",
                      href: "/privacy-policy-for-discord-bot",
                    },
                    {
                      title: "GDPR Privacy Policy Template",
                      desc: "EU-compliant privacy policy template",
                      href: "/gdpr-privacy-policy-template",
                    },
                    {
                      title: "Privacy Policy for Small Business",
                      desc: "Solo creator and small business guide",
                      href: "/privacy-policy-for-small-business",
                    },
                    {
                      title: "Do I Need a Privacy Policy for Collecting Emails?",
                      desc: "Email collection legal requirements",
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                    },
                    {
                      title: "Privacy Policy vs Terms and Conditions",
                      desc: "Understanding the difference",
                      href: "/privacy-policy-vs-terms-and-conditions",
                    },
                  ].map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                    >
                      <ArrowUpRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <div>
                        <p className="font-medium text-slate-800 group-hover:text-blue-700">
                          {resource.title}
                        </p>
                        <p className="text-slate-500 text-sm">{resource.desc}</p>
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

function Shield({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}
