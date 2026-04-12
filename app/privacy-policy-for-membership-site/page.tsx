import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  FileText,
  ArrowRight,
  Info,
  Users,
  Globe,
  Lock,
  Ban,
  Clock,
  CreditCard,
  MessageSquare,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Membership Sites and Subscription Communities (2026) | ultrafastutilities",
  description:
    "Membership sites collect profile data, payment information, community content, and behavioral data. Learn exactly what your privacy policy must cover for subscription and community platforms.",
  keywords:
    "privacy policy for membership site, membership site privacy policy, subscription site privacy policy, online community privacy policy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-membership-site",
  },
  openGraph: {
    title: "Privacy Policy for Membership Sites and Subscription Communities (2026) | ultrafastutilities",
    description:
      "Membership sites collect profile data, payment information, community content, and behavioral data. Learn exactly what your privacy policy must cover for subscription and community platforms.",
    url: "https://ultrafastutilities.com/privacy-policy-for-membership-site",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Membership Sites | ultrafastutilities" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Membership Sites and Subscription Communities (2026) | ultrafastutilities",
    description:
      "Membership sites collect profile data, payment information, community content, and behavioral data. Learn exactly what your privacy policy must cover for subscription and community platforms.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "data-collected", title: "What Data Membership Sites Collect" },
  { id: "recurring-billing", title: "Recurring Billing Data" },
  { id: "community-content", title: "Community Content and DMs" },
  { id: "access-tiers", title: "Access Tiers and Segmentation" },
  { id: "third-party-integrations", title: "Third-Party Integrations" },
  { id: "cancellation-retention", title: "Cancellation and Data Retention" },
  { id: "gdpr-eu", title: "GDPR for EU Members" },
  { id: "common-mistakes", title: "5 Common Mistakes" },
  { id: "how-to-create", title: "How to Create Your Policy" },
  { id: "faq", title: "FAQ" },
  { id: "resources", title: "Related Resources" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do membership sites need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Membership sites collect significantly more personal data than typical websites: account profiles, payment and billing information, content engagement history, community posts and direct messages, and behavioral data used to personalize the experience. GDPR requires a privacy policy if any members are in the EU. CCPA applies if you have California members and meet revenue or data volume thresholds. Payment processors like Stripe also contractually require you to have a privacy policy. Most membership platforms (Memberful, Kajabi, Circle) require publishers to maintain their own privacy policies.",
      },
    },
    {
      "@type": "Question",
      name: "What data does a typical membership site collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical membership site collects: account information (name, email, username, profile photo), payment and billing data (processed through Stripe or similar), content engagement data (courses watched, resources downloaded, progress tracking), community activity (posts, comments, likes, reactions), direct messages between members, device and browser information, login timestamps and session data, and subscription tier and renewal history. Each of these categories requires disclosure in your privacy policy.",
      },
    },
    {
      "@type": "Question",
      name: "Are member direct messages private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Member direct messages on your membership platform are stored in your platform's database and are accessible to platform administrators. They are not end-to-end encrypted in most membership platforms. Your privacy policy must disclose that direct messages are stored on the platform, that platform administrators may access them for safety, moderation, and legal compliance purposes, and how long message data is retained. Members should be informed that DMs on your platform are not the same as encrypted messaging apps.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to member data after cancellation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your privacy policy must explicitly state what happens to member data after they cancel their subscription. Common approaches include: immediate deletion of all personal data upon request, retention of anonymized activity data for analytics, retention of billing records for accounting and tax compliance (typically 7 years), retention of community posts and content the member created (which may become orphaned content visible to other members), and offering a data export before deletion. GDPR requires that you honor deletion requests from EU members within 30 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to disclose Stripe in my membership site privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you use Stripe (or PayPal, Braintree, or any other payment processor) for membership billing, you must disclose this in your privacy policy. Members want to know who has access to their payment information. Your policy should name the payment processor, link to their privacy policy, explain what billing data is stored on your platform versus what is stored by the payment processor, and cover how recurring billing works and what happens to payment data when a subscription is cancelled.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy for Membership Sites and Subscription Communities (2026)",
  description:
    "Complete guide to privacy policy requirements for membership sites and subscription communities, covering profile data, recurring billing, community content, third-party integrations, data retention, and GDPR.",
  datePublished: "2026-01-01",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
  publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy for Membership Site", item: "https://ultrafastutilities.com/privacy-policy-for-membership-site" },
  ],
};

export default function PrivacyPolicyMembershipSite() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
              <span className="text-slate-600">Privacy Policy for Membership Site</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Users className="w-3.5 h-3.5" />
                Membership Site Privacy Requirements 2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Membership Sites
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Membership sites collect far more data than standard websites: profile information, recurring payment history,
                community posts, direct messages, and detailed behavioral analytics. Your privacy policy must address each of
                these categories to stay compliant with GDPR and payment processor requirements.
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
            <article className="max-w-[720px]">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500">
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
              <div id="quick-answer" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Quick Answer: Do Membership Sites Need a Privacy Policy?
                </h2>
                <p className="text-blue-800">
                  <strong>Yes, and it needs to be more detailed than most.</strong> Membership sites collect account profiles,
                  recurring payment data, content engagement history, community posts, and direct messages. GDPR requires a
                  privacy policy if any members are in the EU. CCPA may apply for California members. Stripe and other
                  payment processors contractually require you to maintain a privacy policy. Most membership platforms
                  (Kajabi, Circle, Memberful, MightyNetworks) also require operators to publish their own privacy policy.
                  A generic template will likely miss several critical membership-specific data categories.
                </p>
              </div>

              <section id="data-collected">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Data Membership Sites Collect</h2>
                <p className="text-slate-700 mb-4">
                  Membership sites are among the most data-intensive web businesses. Unlike a static website that might only
                  collect a contact form submission, a membership site builds a detailed profile of each member over time.
                  Your privacy policy must account for all of these data categories.
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-slate-200 rounded-lg">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Data Category</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Examples</th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-800">Primary Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Account profile data</td>
                        <td className="border border-slate-200 px-4 py-3">Name, email, username, profile photo, bio, social links</td>
                        <td className="border border-slate-200 px-4 py-3">Identity, authentication, community presence</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Payment and billing data</td>
                        <td className="border border-slate-200 px-4 py-3">Subscription tier, billing date, payment status, billing country</td>
                        <td className="border border-slate-200 px-4 py-3">Access control, invoicing, revenue reporting</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Content engagement</td>
                        <td className="border border-slate-200 px-4 py-3">Courses watched, progress %, resources downloaded, time spent</td>
                        <td className="border border-slate-200 px-4 py-3">Personalization, progress tracking, churn prediction</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Community activity</td>
                        <td className="border border-slate-200 px-4 py-3">Posts, comments, likes, reactions, forum threads</td>
                        <td className="border border-slate-200 px-4 py-3">Community participation, moderation, reputation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Direct messages</td>
                        <td className="border border-slate-200 px-4 py-3">Private messages between members or with staff</td>
                        <td className="border border-slate-200 px-4 py-3">Member communication, support, moderation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Device and session data</td>
                        <td className="border border-slate-200 px-4 py-3">IP address, browser, device type, login timestamps</td>
                        <td className="border border-slate-200 px-4 py-3">Security, fraud prevention, analytics</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="border border-slate-200 px-4 py-3 font-medium">Preference data</td>
                        <td className="border border-slate-200 px-4 py-3">Notification settings, email preferences, topic interests</td>
                        <td className="border border-slate-200 px-4 py-3">Personalization, email segmentation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    Many membership platform operators use engagement data (content watched, resources downloaded, login frequency)
                    to predict member churn and trigger retention campaigns. Under GDPR, using personal data for automated
                    decision-making or profiling requires explicit disclosure and, in some cases, the right to opt out of
                    automated decisions that significantly affect the individual.
                  </p>
                </div>
              </section>

              <section id="recurring-billing">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Recurring Billing Data</h2>
                <p className="text-slate-700 mb-4">
                  Recurring billing is the cornerstone of membership site revenue. When members subscribe, they authorize
                  future charges to their payment method. This ongoing billing relationship creates specific data privacy
                  obligations that must be addressed in your privacy policy.
                </p>
                <p className="text-slate-700 mb-4">
                  Most membership platforms use Stripe for payment processing, though some support PayPal, Braintree,
                  or custom payment providers. Regardless of which processor you use, your privacy policy must cover:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Required recurring billing disclosures:</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Name your payment processor (Stripe, PayPal, etc.) and link to their privacy policy. This covers the storage of card details, which your platform never sees directly.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Explain what billing data your platform retains: subscription status, billing interval (monthly/annual), renewal date, failed payment history, and billing country.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Disclose how dunning management works: if you send payment failure emails and retry failed charges, this involves using member contact and payment data in a specific way that should be disclosed.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Explain free trial data handling: if you collect payment details upfront for a free trial, members want to know when charges begin and how to cancel before being billed.</span></li>
                    <li className="flex items-start gap-3"><CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>State your refund policy and how refund processing affects stored billing data.</span></li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    In several US states (California, New York, North Carolina, Vermont), automatic renewal laws require
                    subscription businesses to obtain affirmative consent before charging, clearly disclose the renewal
                    terms, and provide a simple cancellation mechanism. Failure to comply with these laws can result in
                    the subscription charges being deemed unauthorized. Your privacy policy should reference your subscription
                    terms and renewal disclosure practices.
                  </p>
                </div>
              </section>

              <section id="community-content">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Community Content: Posts, Comments, and Direct Messages</h2>
                <p className="text-slate-700 mb-4">
                  If your membership site includes a community component (discussion forums, comment sections, group channels,
                  or direct messaging), you are storing user-generated content that constitutes personal data. This content
                  requires specific disclosures in your privacy policy.
                </p>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Public and Semi-Public Community Content</h3>
                <p className="text-slate-700 mb-4">
                  Posts, comments, and reactions within your membership community may be visible to all members or to
                  members at a specific tier. Your privacy policy should explain:
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Who can see community posts: all members, members at a specific tier, or only platform administrators.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Whether community content is indexed by search engines or accessible to non-members.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>What happens to community posts when a member cancels: are posts deleted, anonymized, or retained under the member's username?</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Whether you use community content for AI training, internal research, or product improvement.</span></li>
                </ul>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Direct Messages</h3>
                <p className="text-slate-700 mb-4">
                  Direct messages between members create a particularly sensitive privacy consideration. Members often assume
                  DMs are private, but on most membership platforms they are stored in a database accessible to administrators.
                  Your privacy policy must be clear about this.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2"><MessageSquare className="w-5 h-5 text-blue-600" />Required DM disclosures:</h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Direct messages are stored on the platform and are not end-to-end encrypted unless specifically stated.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Platform administrators may access DMs for safety investigations, abuse reports, or legal compliance purposes.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />DM content may be retained even after a member cancels their subscription, particularly if the conversation involves another active member.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Members can request deletion of their direct messages, subject to legitimate interests such as ongoing dispute resolution.</li>
                  </ul>
                </div>
              </section>

              <section id="access-tiers">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Access Tiers and Member Segmentation</h2>
                <p className="text-slate-700 mb-4">
                  Most membership sites use tiered access: free members, monthly subscribers, annual subscribers, and
                  premium or lifetime tiers. This tiered structure creates a form of data segmentation that your privacy
                  policy should acknowledge.
                </p>
                <p className="text-slate-700 mb-4">
                  Tier segmentation affects privacy in several ways:
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span><strong>Content access control:</strong> Your platform uses subscription tier data to gate content. This processing of subscription status to make access decisions must be disclosed as a core use of billing data.</span></li>
                  <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span><strong>Email segmentation:</strong> Many membership operators send different email sequences to different tiers (free member upgrade campaigns vs. paid member retention emails). This segmentation involves profiling members by subscription status, which must be disclosed.</span></li>
                  <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span><strong>Analytics by tier:</strong> Reporting on content engagement, churn rates, or community activity often breaks down by subscription tier. While this is typically aggregate data, your privacy policy should note that you analyze member behavior at a segment level.</span></li>
                  <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span><strong>Upsell targeting:</strong> If you use behavioral data (content watched, logins per month, community participation) to identify members likely to upgrade or likely to churn, this behavioral profiling for marketing purposes requires GDPR disclosure and a legitimate interests or consent basis.</span></li>
                </ul>
              </section>

              <section id="third-party-integrations">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Integrations: Stripe, Discord, and Zoom</h2>
                <p className="text-slate-700 mb-4">
                  Modern membership sites rarely operate in isolation. They integrate with payment processors, community
                  platforms, video conferencing tools, email marketing systems, and analytics platforms. Each integration
                  creates a data flow that must be disclosed in your privacy policy.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Stripe</h3>
                    <p className="text-slate-700 text-sm">Payment processor for membership subscriptions. Stores card details, billing addresses, and payment history. Members should be directed to Stripe's privacy policy for payment data specifics. Your platform retains subscription status and billing summary data.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Discord</h3>
                    <p className="text-slate-700 text-sm">Many membership communities use Discord for real-time community interaction. When members join your Discord server, their Discord account data is governed by Discord's own privacy policy. Your policy should note that you operate a Discord community and that participation is subject to Discord's terms. Bot automations (like granting roles based on membership status) involve sharing membership tier data with Discord.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Zoom / Video Conferencing</h3>
                    <p className="text-slate-700 text-sm">Live calls, webinars, and coaching sessions via Zoom, Google Meet, or similar tools involve Zoom collecting attendee data (name, email, IP address, recording consent). If you record calls and share them with members, this creates additional data considerations. Disclose your video conferencing provider, whether calls are recorded, and how recordings are stored and shared.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Email Marketing (Mailchimp, ConvertKit, ActiveCampaign)</h3>
                    <p className="text-slate-700 text-sm">Member email addresses are typically synced to an email marketing platform for newsletters, onboarding sequences, and upgrade campaigns. Name your email provider, explain what member data is synced (email, name, subscription status, tags), and confirm you maintain opt-out preferences across both systems.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">Analytics (Mixpanel, Amplitude, Google Analytics)</h3>
                    <p className="text-slate-700 text-sm">Product analytics tools help you understand how members use your platform. These tools may receive member identifiers, behavioral events, and session data. Disclose which analytics tools you use, whether member data is pseudonymized or identifiable, and whether EU member data is transferred to US-based analytics providers.</p>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <p className="text-amber-900 font-semibold flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5" />Did you know?</p>
                  <p className="text-amber-800">
                    Under GDPR, every third-party service that receives personal data about your EU members is either a
                    data processor (acting on your behalf under your instructions) or a separate data controller (using
                    the data for their own purposes). You need a Data Processing Agreement with processors, and you must
                    disclose joint controllers in your privacy policy. Most analytics platforms are data processors;
                    Discord and Zoom are typically independent data controllers.
                  </p>
                </div>
              </section>

              <section id="cancellation-retention">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Cancellation and Data Retention</h2>
                <p className="text-slate-700 mb-4">
                  What happens to member data when they cancel is one of the most frequently asked questions members
                  have about privacy. Your privacy policy must clearly and specifically answer this question.
                </p>
                <p className="text-slate-700 mb-4">
                  Data retention after cancellation typically involves balancing three competing interests:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                    <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-900 mb-1 text-sm">Member Privacy Rights</h3>
                    <p className="text-blue-800 text-xs">Right to deletion and data minimization under GDPR and good data ethics</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                    <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-900 mb-1 text-sm">Legal Compliance</h3>
                    <p className="text-green-800 text-xs">Financial records must be retained for 7 years for tax purposes; legal claims may require data preservation</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-purple-900 mb-1 text-sm">Community Continuity</h3>
                    <p className="text-purple-800 text-xs">Threads and posts by cancelled members may be embedded in ongoing community discussions</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4">
                  Your privacy policy should specify:
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>When access to the membership area is revoked after cancellation (immediately vs. at the end of the billing period).</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Whether a data export is available before deletion, and how to request it.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>How long personal data is retained after cancellation before deletion (common practice is 30 to 90 days, with an option to request immediate deletion).</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>That billing records (invoices, payment history) are retained for a longer period (typically 7 years) for tax and accounting compliance.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>The treatment of community posts: whether they are deleted, anonymized (e.g., shown as "Deleted Member"), or retained with the member's name.</span></li>
                </ul>
              </section>

              <section id="gdpr-eu">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">GDPR for EU Members</h2>
                <p className="text-slate-700 mb-4">
                  GDPR applies to membership sites that have EU members, regardless of where the membership site operator
                  is based. Given the global nature of online communities, most membership sites with more than a handful
                  of members will have some EU member representation.
                </p>
                <ul className="space-y-3 mb-6 text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Legal basis for processing:</strong> For members who signed up voluntarily, consent and/or contract performance are the primary legal bases. For marketing emails to existing members, legitimate interests may apply. Document your legal basis for each processing activity.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Data subject rights:</strong> EU members have the right to access their data (obtain a copy of everything stored about them), correct inaccurate data, delete their account and data, restrict processing, data portability (receive their data in a machine-readable format), and object to processing for marketing purposes.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Automated decision-making:</strong> If you use algorithms to predict churn, generate personalized recommendations, or automatically restrict accounts, EU members have rights related to these automated decisions under GDPR Article 22.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Data transfers:</strong> If your membership platform (Kajabi, Circle, Memberful) is US-based, EU member data is being transferred to the US. Reference the transfer mechanism (Standard Contractual Clauses) used by your platform provider.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span><strong>Children:</strong> If your membership site could be accessed by children under 16 in the EU, GDPR requires verifiable parental consent for their data processing. Membership sites should clearly state a minimum age requirement in their terms and privacy policy.</span></li>
                </ul>
              </section>

              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">5 Common Privacy Policy Mistakes by Membership Site Operators</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Not disclosing that DMs are accessible to administrators",
                      description: "Members frequently assume that direct messages on a membership platform are private. When they discover that admins can read their messages (often during a moderation situation), it creates significant trust damage. Your privacy policy must proactively disclose admin access to DMs, even if you rarely exercise it.",
                    },
                    {
                      title: "Failing to explain what happens to community posts after cancellation",
                      description: "When a member cancels and their posts remain visible in community discussions attributed to their name, other members often point out the privacy concern. Your privacy policy should specify exactly what happens: posts are deleted, posts are anonymized, or posts remain with attribution. Choose a policy and document it clearly.",
                    },
                    {
                      title: "Not listing Discord, Zoom, and other community tools as third-party processors",
                      description: "Many membership site operators build their platform across Kajabi plus Discord plus Zoom plus Mailchimp but write a privacy policy that only references Kajabi. Each tool that receives member data is a subprocessor that must be named and disclosed. An incomplete list misleads members about where their data goes.",
                    },
                    {
                      title: "Using a generic e-commerce privacy policy that misses membership specifics",
                      description: "Privacy policy templates written for online stores cover product purchases but not recurring subscriptions, community content, course progress tracking, member behavioral profiling, or the unique data retention questions that arise when a subscription is cancelled. These are critical gaps for membership sites.",
                    },
                    {
                      title: "Not providing a data export or deletion mechanism",
                      description: "GDPR requires that EU members be able to export their data and request deletion. Many membership site operators have no process for handling these requests. Your privacy policy must specify how to make these requests and set realistic response timeframes. Ignoring GDPR data subject requests can result in regulatory complaints.",
                    },
                  ].map((mistake, index) => (
                    <div key={index} className="flex items-start gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
                      <Ban className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-900 mb-1">Mistake {index + 1}: {mistake.title}</p>
                        <p className="text-red-800 text-sm">{mistake.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="how-to-create">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Create a Privacy Policy for Your Membership Site</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Inventory all data you collect and store", description: "Create a data map covering every field in your member database: profile data, billing data, content engagement metrics, community posts, DMs, and behavioral analytics events. This inventory becomes the foundation of your privacy policy content." },
                    { step: "2", title: "List every third-party integration by name", description: "Go through your membership platform settings and identify every connected service: payment processor, email marketing tool, community platform (Discord, Slack), video conferencing (Zoom), analytics platform, and any CRM or marketing automation tool that receives member data." },
                    { step: "3", title: "Write a clear cancellation and data retention section", description: "Decide and document your policies before writing them: when access is revoked, how long personal data is retained, what happens to community posts, how billing records are handled, and how members can request data export or deletion." },
                    { step: "4", title: "Address community content visibility and DM access", description: "Write explicit language about who can see community posts (members, non-members, search engines), that administrators can access DMs for moderation purposes, and what happens to all user-generated content after account termination." },
                    { step: "5", title: "Link the policy from the signup flow and member area", description: "Add a privacy policy link to your checkout or signup page. Include it in your member dashboard footer and in your welcome email. Update it whenever you add new integrations, change how you use member data, or make changes to your community platform." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                        <p className="text-slate-700 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "Do membership sites need a privacy policy?", a: "Yes. Membership sites collect significantly more personal data than typical websites: account profiles, payment and billing information, content engagement history, community posts and direct messages, and behavioral data used to personalize the experience. GDPR, CCPA, and payment processor requirements all mandate a privacy policy." },
                    { q: "What data does a typical membership site collect?", a: "A typical membership site collects account information (name, email, username, profile photo), payment and billing data, content engagement data (courses watched, progress, resources downloaded), community activity (posts, comments, likes), direct messages, device and browser information, login timestamps, and subscription tier and renewal history." },
                    { q: "Are member direct messages private?", a: "Direct messages on membership platforms are stored in a database and are accessible to platform administrators. They are not end-to-end encrypted in most membership platforms. Your privacy policy must disclose that administrators may access DMs for safety, moderation, and legal compliance purposes." },
                    { q: "What happens to member data after cancellation?", a: "Your privacy policy must specify when access is revoked, how long personal data is retained before deletion, what happens to community posts, how billing records are handled (typically retained 7 years for tax compliance), and how members can request data export or deletion. GDPR requires honoring deletion requests within 30 days." },
                    { q: "Do I need to disclose Stripe in my membership site privacy policy?", a: "Yes. If you use Stripe for membership billing, you must name Stripe as a payment processor, link to Stripe's privacy policy, explain what billing data your platform retains versus what Stripe retains, and cover how recurring billing and cancellation affect stored payment data." },
                  ].map((item, index) => (
                    <div key={index} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                      <p className="text-slate-700 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 text-center">
                <ShieldCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-3">Generate Your Membership Site Privacy Policy</h2>
                <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                  Create a privacy policy tailored for membership sites and subscription communities in minutes.
                  Covers member profiles, recurring billing, community content, third-party integrations, GDPR, and data retention.
                </p>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/">Generate Free Privacy Policy</Link>
                </Button>
              </section>

              <section id="resources">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Privacy Policy for Ghost Newsletter", href: "/privacy-policy-for-ghost" },
                    { title: "Privacy Policy for Beehiiv", href: "/privacy-policy-for-beehiiv" },
                    { title: "GDPR Privacy Policy Template", href: "/gdpr-privacy-policy-template" },
                    { title: "CCPA Privacy Policy Example", href: "/ccpa-privacy-policy-example" },
                    { title: "Cookie Policy for Websites", href: "/cookie-policy-for-websites" },
                    { title: "Do I Need a Privacy Policy for an Online Store?", href: "/do-i-need-a-privacy-policy-for-an-online-store" },
                    { title: "Privacy Policy for Nonprofit", href: "/privacy-policy-for-nonprofit" },
                    { title: "Free Privacy Policy Generator", href: "/" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-2 p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 hover:text-blue-600 text-sm font-medium">
                      <FileText className="w-4 h-4 flex-shrink-0" />
                      {link.title}
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
