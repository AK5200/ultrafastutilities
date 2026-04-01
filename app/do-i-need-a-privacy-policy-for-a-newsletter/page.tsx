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
  Mail,
  Lock,
  UserCheck,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title:
    "Do I Need a Privacy Policy for a Newsletter? (2026) | ultrafastutilities",
  description:
    "Yes - email newsletters require a privacy policy under GDPR, CAN-SPAM, and CASL. Learn exactly what your newsletter privacy policy must include and how to comply.",
  keywords:
    "do i need a privacy policy for a newsletter, newsletter privacy policy, email newsletter privacy policy, email list privacy policy, newsletter gdpr compliance",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-newsletter",
  },
  openGraph: {
    title:
      "Do I Need a Privacy Policy for a Newsletter? (2026) | ultrafastutilities",
    description:
      "Yes - email newsletters require a privacy policy under GDPR, CAN-SPAM, and CASL. Learn exactly what your newsletter privacy policy must include and how to comply.",
    url: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-newsletter",
    siteName: "ultrafastutilities",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy for Email Newsletters | ultrafastutilities",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Do I Need a Privacy Policy for a Newsletter? (2026) | ultrafastutilities",
    description:
      "Yes - email newsletters require a privacy policy under GDPR, CAN-SPAM, and CASL. Learn exactly what your newsletter privacy policy must include and how to comply.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "gdpr-newsletter", title: "GDPR Requirements" },
  { id: "can-spam", title: "CAN-SPAM Act" },
  { id: "casl", title: "CASL (Canada)" },
  { id: "what-to-include", title: "What to Include" },
  { id: "consent-and-signup", title: "Signup Forms and Consent" },
  { id: "esp-requirements", title: "Email Service Provider Requirements" },
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
      name: "Do I need a privacy policy for an email newsletter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Running an email newsletter requires a privacy policy under multiple laws. GDPR requires a privacy policy if any subscribers are in the EU. CAN-SPAM requires clear identification and opt-out mechanisms. CASL covers Canadian subscribers. Most email service providers (Mailchimp, ConvertKit, Substack) also require you to have a privacy policy before using their platforms for commercial emails.",
      },
    },
    {
      "@type": "Question",
      name: "What must a newsletter privacy policy include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your newsletter privacy policy must include: how you collect email addresses (signup form, website, etc.), what you use them for (newsletters, promotional emails), whether you share them with third parties (your email service provider), how long you keep subscriber data, how subscribers can unsubscribe and request deletion, and your legal basis for processing under GDPR if you have EU subscribers.",
      },
    },
    {
      "@type": "Question",
      name: "Does a free newsletter need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Whether your newsletter is free or paid, if you collect email addresses you are processing personal data. GDPR, CAN-SPAM, and CASL apply regardless of whether you charge for the newsletter. Even a personal hobby newsletter with subscribers in the EU technically needs to disclose how you use subscriber data.",
      },
    },
    {
      "@type": "Question",
      name: "Does Mailchimp require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mailchimp's Terms of Use require you to have a privacy policy and an unsubscribe mechanism in every email. Mailchimp automatically adds an unsubscribe footer, but you are responsible for creating and linking your own privacy policy. The same applies to ConvertKit, Klaviyo, Constant Contact, and other major email service providers.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I link my newsletter privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link your newsletter privacy policy in: your email signup form (before or near the subscribe button), the footer of every email you send, your website footer, and any landing page where people can sign up for your list. Under GDPR, subscribers must be informed of the privacy policy before providing their email address.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create a Privacy Policy for an Email Newsletter",
  description:
    "Step-by-step guide to creating a newsletter privacy policy that meets GDPR, CAN-SPAM, and ESP requirements",
  step: [
    {
      "@type": "HowToStep",
      name: "Document how you collect email addresses",
      text: "List every method you use to collect subscriber emails: website signup forms, lead magnets, checkout opt-ins, social media, referrals, or imported lists.",
    },
    {
      "@type": "HowToStep",
      name: "Specify how you use subscriber data",
      text: "Describe exactly what emails you send: newsletters, promotional offers, product updates, transactional emails. Specify whether you segment lists or personalize content.",
    },
    {
      "@type": "HowToStep",
      name: "Name your email service provider",
      text: "Disclose which email service provider you use (Mailchimp, ConvertKit, etc.) and note that subscriber data is stored on their servers. Link to their privacy policy.",
    },
    {
      "@type": "HowToStep",
      name: "Add unsubscribe and deletion instructions",
      text: "Explain how subscribers can unsubscribe from emails and how they can request complete deletion of their personal data from your list.",
    },
    {
      "@type": "HowToStep",
      name: "Link the policy from signup forms",
      text: "Add a link to your privacy policy near every signup form with text like: 'By subscribing, you agree to our Privacy Policy.'",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Do I Need a Privacy Policy for a Newsletter? (2026)",
  description:
    "Complete guide to privacy policy requirements for email newsletters, covering GDPR, CAN-SPAM, CASL, and email service provider requirements.",
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
      name: "Do I Need a Privacy Policy for a Newsletter?",
      item: "https://ultrafastutilities.com/do-i-need-a-privacy-policy-for-a-newsletter",
    },
  ],
};

export default function PrivacyPolicyNewsletter() {
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
      <main className="min-h-screen">
        {/* Hero Section */}
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
              <span className="text-slate-600">Privacy Policy for Newsletter</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Mail className="w-3.5 h-3.5" />
                Newsletter Privacy Requirements
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Do I Need a Privacy Policy for a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Newsletter?
                </span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Yes - email newsletters require a privacy policy. GDPR, CAN-SPAM, CASL,
                and every major email platform require it. Here is exactly what to include
                and where to link it.
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
                  <Link href="/generate">
                    <Button size="sm" className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg">Generate Policy</Button>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="max-w-[720px]">
              {/* Author + Trust Signals */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 pb-8 border-b border-slate-200/60 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xs flex-shrink-0">AK</div>
                  <span>Written by{" "}<span className="font-semibold text-slate-800">Anupam Kumar</span></span>
                </div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <span>Last updated: March 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>11 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>
              {/* Featured Snippet Box */}
              <div id="quick-answer" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Quick Answer: Do Newsletters Need a Privacy Policy?
                </h2>
                <p className="text-blue-800">
                  <strong>Yes.</strong> If you collect email addresses for a newsletter,
                  you are processing personal data. This triggers privacy policy requirements
                  under GDPR (for EU subscribers), CAN-SPAM (for US commercial emails), CASL
                  (for Canadian subscribers), and most email service provider terms. You need
                  a privacy policy regardless of whether your newsletter is free, paid, personal,
                  or professional.
                </p>
              </div>

              {/* GDPR Newsletter */}
              <section id="gdpr-newsletter">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  GDPR Requirements for Newsletter Operators
                </h2>
                <p className="text-slate-700 mb-4">
                  The General Data Protection Regulation (GDPR) applies to anyone who
                  sends emails to people in the European Union - regardless of where you
                  are located. If even one subscriber is based in the EU, GDPR applies.
                </p>
                <p className="text-slate-700 mb-6">
                  Under GDPR, before collecting an email address for marketing purposes
                  you must:
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    {
                      req: "Obtain explicit, informed consent",
                      detail: "Pre-ticked boxes and implied consent are not valid. The subscriber must take a clear, affirmative action.",
                    },
                    {
                      req: "Provide a privacy notice at the point of collection",
                      detail: "Link your privacy policy near the signup form, before the user submits their email.",
                    },
                    {
                      req: "State your purpose",
                      detail: "Tell subscribers exactly what you will use their email for - newsletter type, frequency, any additional marketing.",
                    },
                    {
                      req: "Make unsubscribing easy",
                      detail: "Every email must include an unsubscribe link. Processing time for unsubscribe requests cannot exceed 10 business days.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{item.req}</p>
                        <p className="text-slate-600 text-sm mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        Under GDPR, you must be able to demonstrate that you have valid
                        consent for every subscriber on your list. If you cannot prove
                        when and how someone consented, that subscriber's data must be
                        deleted. This makes maintaining clear consent records as important
                        as the privacy policy itself.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* CAN-SPAM */}
              <section id="can-spam">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  CAN-SPAM Act Requirements for US Newsletters
                </h2>
                <p className="text-slate-700 mb-4">
                  The CAN-SPAM Act governs commercial email in the United States. It
                  applies to any commercial message sent to US recipients, and violations
                  can result in fines up to $51,744 per email.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">CAN-SPAM Requirement</th>
                        <th className="text-left p-3 font-semibold text-slate-700">What It Means</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Identify yourself</td>
                        <td className="p-3 text-slate-600">From name and email must accurately identify the sender</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">No deceptive subject lines</td>
                        <td className="p-3 text-slate-600">Subject line must reflect the actual content</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Physical address</td>
                        <td className="p-3 text-slate-600">Every email must include your physical mailing address</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Opt-out mechanism</td>
                        <td className="p-3 text-slate-600">Every email must include a working unsubscribe link</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Honor opt-outs within 10 days</td>
                        <td className="p-3 text-slate-600">Process unsubscribe requests within 10 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 mt-4">
                  Note: CAN-SPAM does not require opt-in consent (unlike GDPR), but you
                  must always include an unsubscribe option and honor it promptly.
                </p>
              </section>

              {/* CASL */}
              <section id="casl">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  CASL Requirements for Canadian Subscribers
                </h2>
                <p className="text-slate-700 mb-4">
                  Canada's Anti-Spam Legislation (CASL) is one of the strictest email
                  laws in the world. It requires express or implied consent before
                  sending commercial electronic messages to Canadian recipients.
                </p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Express consent:</strong> User actively opts in, with clear
                      disclosure of what they are consenting to receive.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Implied consent:</strong> Existing business relationships
                      may provide implied consent for a limited period (usually 2 years).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Consent records:</strong> You must keep records of when
                      and how consent was obtained for each subscriber.
                    </span>
                  </li>
                </ul>
                <p className="text-slate-700">
                  CASL violations can result in fines up to CAD $1 million for
                  individuals and CAD $10 million for organizations.
                </p>
              </section>

              {/* What to Include */}
              <section id="what-to-include">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What to Include in Your Newsletter Privacy Policy
                </h2>
                <p className="text-slate-700 mb-6">
                  A newsletter privacy policy needs to cover these specific areas
                  in addition to standard privacy policy content:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "How you collect email addresses",
                      detail: "Website signup form, lead magnet, checkout opt-in, event registration, referral program, or imported lists from another source.",
                      icon: <UserCheck className="w-4 h-4 text-blue-600" />,
                    },
                    {
                      title: "What you send to subscribers",
                      detail: "Newsletter type (weekly digest, product updates, promotional offers), frequency, and any segmentation or personalization you use.",
                      icon: <Mail className="w-4 h-4 text-blue-600" />,
                    },
                    {
                      title: "Your email service provider",
                      detail: "Name the ESP you use (Mailchimp, ConvertKit, Klaviyo, Substack) and note that subscriber data is stored on their servers. Link to their privacy policy.",
                      icon: <Lock className="w-4 h-4 text-blue-600" />,
                    },
                    {
                      title: "Data retention and deletion",
                      detail: "How long you keep subscriber data after they unsubscribe. Many operators keep data for 30-90 days after unsubscribing; GDPR generally requires deletion upon request.",
                      icon: <FileText className="w-4 h-4 text-blue-600" />,
                    },
                    {
                      title: "How to unsubscribe and request deletion",
                      detail: "Explain the unsubscribe process (link in every email), and how subscribers can request complete deletion of their data from your list and CRM.",
                      icon: <CheckCircle className="w-4 h-4 text-blue-600" />,
                    },
                  ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Consent and Signup */}
              <section id="consent-and-signup">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Signup Forms, Consent, and Privacy Policy Links
                </h2>
                <p className="text-slate-700 mb-4">
                  The signup form is where legal compliance starts. Best practices for
                  GDPR-compliant newsletter signup:
                </p>
                <div className="bg-slate-50 rounded-xl p-5 mb-6">
                  <h3 className="font-semibold text-slate-800 mb-3 text-sm">Example Compliant Signup Form Text</h3>
                  <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
                    <p className="mb-2">
                      <strong>Subscribe to our weekly newsletter</strong>
                    </p>
                    <p className="mb-3 text-slate-500">Get tips, insights, and updates every Tuesday. No spam.</p>
                    <div className="border border-slate-200 rounded px-3 py-2 mb-2 text-slate-400">
                      your@email.com
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm mb-2">Subscribe</button>
                    <p className="text-xs text-slate-500">
                      By subscribing, you agree to our{" "}
                      <span className="text-blue-600 underline">Privacy Policy</span>. We will only send you
                      the content described above. Unsubscribe anytime.
                    </p>
                  </div>
                </div>
                <p className="text-slate-700">
                  The key elements: clear description of what they are signing up for,
                  a link to your privacy policy, and an easy-to-find unsubscribe option.
                  Under GDPR, do not pre-tick any checkboxes - consent must be active.
                </p>
              </section>

              {/* ESP Requirements */}
              <section id="esp-requirements">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Email Service Provider Requirements
                </h2>
                <p className="text-slate-700 mb-6">
                  Most email service providers require you to have a privacy policy
                  as a condition of using their platform for commercial email.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">ESP</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Privacy Policy Required?</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Mailchimp</td>
                        <td className="p-3 text-slate-600">Yes</td>
                        <td className="p-3 text-slate-600">Required in ToS for commercial email</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">ConvertKit / Kit</td>
                        <td className="p-3 text-slate-600">Yes</td>
                        <td className="p-3 text-slate-600">Required for broadcast emails</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Klaviyo</td>
                        <td className="p-3 text-slate-600">Yes</td>
                        <td className="p-3 text-slate-600">Required for all list-based emails</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Substack</td>
                        <td className="p-3 text-slate-600">Yes</td>
                        <td className="p-3 text-slate-600">Required; their policy covers some aspects</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-slate-800">Beehiiv</td>
                        <td className="p-3 text-slate-600">Yes</td>
                        <td className="p-3 text-slate-600">Required for newsletter publication</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">
                        Mailchimp and ConvertKit both have their own privacy policies that
                        cover how they handle your subscriber data - but these do not
                        replace your own policy. Your policy must disclose that you use
                        these tools and that subscriber data is processed by them. You
                        must have both your policy and the ESP's policy in the picture.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5 Common Newsletter Privacy Policy Mistakes
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "No privacy policy link near the signup form",
                      desc: "Under GDPR, subscribers must be informed of your privacy policy before they subscribe. A footer-only link may not satisfy the 'at the time of collection' requirement. Link it directly near every signup form.",
                    },
                    {
                      title: "Not naming your email service provider",
                      desc: "When you use Mailchimp or ConvertKit, subscriber data is stored on their servers. Your privacy policy must name the ESP as a third-party data processor and note that data is transferred to them.",
                    },
                    {
                      title: "No data retention policy for unsubscribers",
                      desc: "When someone unsubscribes, how long do you keep their email in your system? GDPR requires you to delete data upon request. Your policy must state your retention period and deletion process.",
                    },
                    {
                      title: "Adding subscribers without their consent",
                      desc: "Purchasing email lists, adding business card contacts without consent, or importing contacts from other sources without confirming consent violates GDPR and most ESP terms of service.",
                    },
                    {
                      title: "Using a generic policy not specific to email marketing",
                      desc: "A policy written for an ecommerce store may not cover newsletter-specific practices like consent records, email frequency, segmentation, or the specific data your ESP processes.",
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
                  How to Create a Newsletter Privacy Policy
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Document your email collection methods",
                      desc: "List every place subscribers can join: website forms, landing pages, checkout opt-ins, lead magnets, social media, or in-person signup sheets.",
                    },
                    {
                      step: "2",
                      title: "Describe what you send",
                      desc: "Be specific: 'Weekly newsletter with industry tips and occasional product updates.' Include how often you send and whether you segment or personalize.",
                    },
                    {
                      step: "3",
                      title: "Name your ESP and any other tools",
                      desc: "List your email service provider (Mailchimp, ConvertKit, etc.), any CRM that stores subscriber data, and any segmentation or automation tools.",
                    },
                    {
                      step: "4",
                      title: "Add subscriber rights",
                      desc: "Explain how to unsubscribe, how to request data access, and how to request complete deletion. Include your contact email for privacy requests.",
                    },
                    {
                      step: "5",
                      title: "Link everywhere subscribers encounter your signup",
                      desc: "Add the privacy policy link to every signup form, near every subscribe button, and in the footer of every email you send.",
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
                      q: "Do I need a privacy policy for an email newsletter?",
                      a: "Yes. Collecting email addresses triggers privacy law requirements. GDPR applies for EU subscribers, CAN-SPAM for US commercial emails, and CASL for Canadian subscribers. Most email service providers also require a privacy policy in their terms of service.",
                    },
                    {
                      q: "What must a newsletter privacy policy include?",
                      a: "Include: how you collect email addresses, what you use them for, whether you share them with third parties (name your ESP), how long you keep subscriber data, how to unsubscribe, and how to request data deletion.",
                    },
                    {
                      q: "Does a free newsletter need a privacy policy?",
                      a: "Yes. Whether your newsletter is free or paid, if you collect emails you are processing personal data. GDPR, CAN-SPAM, and CASL apply regardless of whether you charge for the newsletter.",
                    },
                    {
                      q: "Does Mailchimp require a privacy policy?",
                      a: "Yes. Mailchimp's Terms of Use require you to have a privacy policy. Mailchimp automatically adds an unsubscribe footer, but you must create and link your own privacy policy. The same applies to ConvertKit, Klaviyo, and other major ESPs.",
                    },
                    {
                      q: "Where should I link my newsletter privacy policy?",
                      a: "Link it near every signup form, in the footer of every email, on your website footer, and on any landing page where people can subscribe. Under GDPR, subscribers must see the privacy policy before submitting their email.",
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
                  Generate Your Newsletter Privacy Policy
                </h2>
                <p className="text-slate-300 mb-6">
                  Create a complete privacy policy for your email newsletter in under
                  2 minutes. Covers GDPR, CAN-SPAM, CASL, email service provider
                  disclosures, and subscriber rights.
                </p>
                <ul className="space-y-2 text-slate-300 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    GDPR, CAN-SPAM, and CASL compliant
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    ESP-specific disclosures (Mailchimp, ConvertKit, etc.)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Subscriber rights and unsubscribe instructions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    Free to generate, no account required
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
                      title: "Do I Need a Privacy Policy for Collecting Emails?",
                      desc: "Email collection legal requirements",
                      href: "/do-i-need-a-privacy-policy-for-collecting-emails",
                    },
                    {
                      title: "Privacy Policy for Mailchimp",
                      desc: "Mailchimp-specific privacy disclosures",
                      href: "/privacy-policy-for-mailchimp",
                    },
                    {
                      title: "Privacy Policy for Substack",
                      desc: "Substack newsletter privacy requirements",
                      href: "/privacy-policy-for-substack",
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
                      title: "Privacy Policy for Patreon",
                      desc: "Creator membership privacy requirements",
                      href: "/privacy-policy-for-patreon",
                    },
                    {
                      title: "Is a Privacy Policy Legally Required?",
                      desc: "When a privacy policy is mandatory by law",
                      href: "/is-a-privacy-policy-legally-required",
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
