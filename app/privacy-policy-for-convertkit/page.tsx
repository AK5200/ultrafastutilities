import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  Ban,
  ChevronRight,
  FileText,
  Globe,
  Mail,
  Users,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for ConvertKit (Kit) Email Marketing Users (2026)",
  description:
    "Using ConvertKit (now Kit) for email marketing? Learn what your privacy policy must say about subscriber data, forms, automations, tagging, GDPR consent, and CAN-SPAM compliance.",
  keywords:
    "privacy policy for convertkit, convertkit privacy policy, kit email marketing privacy policy, convertkit forms privacy policy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-convertkit",
  },
  openGraph: {
    title: "Privacy Policy for ConvertKit (Kit) Email Marketing Users (2026)",
    description:
      "ConvertKit (Kit) passes subscriber data to you as the list owner. Your privacy policy must disclose what data is collected, how it is used, and how subscribers can opt out.",
    url: "https://ultrafastutilities.com/privacy-policy-for-convertkit",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for ConvertKit" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for ConvertKit (Kit) Email Marketing Users (2026)",
    description:
      "ConvertKit (Kit) passes subscriber data to you. Your privacy policy must disclose what data is collected, how it is used, and how subscribers can opt out.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "convertkit-and-your-privacy-obligations", title: "ConvertKit and Your Privacy Obligations" },
  { id: "what-convertkit-shares-with-creators", title: "What ConvertKit Shares with You" },
  { id: "subscriber-data-handling", title: "Subscriber Data Handling" },
  { id: "forms-and-landing-pages", title: "Forms and Landing Pages Data" },
  { id: "automations-and-tagging", title: "Automations and Tagging" },
  { id: "gdpr-subscriber-consent", title: "GDPR Subscriber Consent" },
  { id: "can-spam-requirements", title: "CAN-SPAM Requirements" },
  { id: "common-mistakes", title: "5 Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need my own privacy policy if I use ConvertKit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ConvertKit has its own privacy policy that governs how ConvertKit (the company) handles data. But as the list owner - the person who collects subscriber emails and sends them marketing content - you are a data controller and need your own privacy policy. ConvertKit's policy does not cover your obligations to your subscribers. Your policy must explain what you collect, why, how you use it, and how subscribers can opt out.",
      },
    },
    {
      "@type": "Question",
      name: "What subscriber data does ConvertKit give me access to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a ConvertKit account owner, you have access to subscriber email addresses, names (if collected), custom fields you have created, tags applied to subscribers, sequences they are enrolled in, forms they signed up through, email open rates, click rates, and purchase history if you sell products through ConvertKit Commerce. All of this is personal data that your privacy policy must address.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get GDPR-compliant consent using ConvertKit forms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For GDPR compliance, your ConvertKit signup form must: clearly describe what subscribers are signing up for, not use pre-checked consent boxes, include a link to your privacy policy, and use double opt-in (ConvertKit's confirmed opt-in feature) for EU subscribers. The signup form itself is not enough - you must also have a privacy policy that discloses your use of ConvertKit and how subscriber data is handled.",
      },
    },
    {
      "@type": "Question",
      name: "Does ConvertKit's double opt-in satisfy GDPR consent requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Double opt-in (or confirmed opt-in as ConvertKit calls it) is strongly recommended for GDPR compliance because it provides a verifiable record that the subscriber actively confirmed their signup. However, double opt-in alone is not sufficient for GDPR compliance. The initial signup form must also clearly state what the subscriber is consenting to, and the consent must be granular - separate consents for different types of communications if you send both newsletters and promotional content.",
      },
    },
    {
      "@type": "Question",
      name: "ConvertKit rebranded as Kit - do I need to update my privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your privacy policy mentions ConvertKit by name and you want to keep it accurate, you should update it to reflect the Kit rebrand. However, the legal entity and data processing relationships remain the same. The most important thing is that your policy accurately describes the email marketing platform you use and the data it processes. Whether you call it ConvertKit or Kit, you should name the platform in your policy.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy for ConvertKit (Kit) Email Marketing Users",
  description:
    "A complete guide to privacy policy requirements for ConvertKit users, covering subscriber data, forms, automations, GDPR consent, and CAN-SPAM compliance.",
  dateModified: "2026-03-31",
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
      name: "Privacy Policy for ConvertKit",
      item: "https://ultrafastutilities.com/privacy-policy-for-convertkit",
    },
  ],
};

export default function ConvertKitPrivacyPolicyPage() {
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
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-200">Privacy Policy for ConvertKit</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-orange-400" />
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wide">Email Marketing Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Privacy Policy for ConvertKit (Kit) Users: What Your Policy Must Cover in 2026
            </h1>
            <p className="text-xl text-slate-300 mb-6 max-w-3xl">
              ConvertKit (now rebranded as Kit) makes you a data controller for every subscriber on your list. That means you need your own privacy policy - not just a link to ConvertKit's. Here is exactly what it must say.
            </p>
            <p className="text-slate-400 text-sm">Last updated: March 2026</p>
          </div>
        </section>

        {/* Author trust bar */}
        <div className="border-b bg-slate-50 py-3 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Covers GDPR, CAN-SPAM, and CASL</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>ConvertKit / Kit, forms, automations, and commerce</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-600" />
              <span>Updated March 2026</span>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-4 gap-8">

          {/* TOC Sidebar */}
          <aside className="col-span-1">
            <TableOfContents sections={tocSections} />
          </aside>

          {/* Article */}
          <article className="col-span-3 prose prose-slate max-w-none">

            {/* Featured snippet */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-8 not-prose">
              <h2 className="text-blue-900 font-bold text-lg mb-3">Quick Answer: What a ConvertKit User's Privacy Policy Must Cover</h2>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li><strong>Email collection:</strong> What you collect on signup (email, name, custom fields)</li>
                <li><strong>How you use it:</strong> Newsletters, promotional emails, automated sequences</li>
                <li><strong>Platform disclosure:</strong> That ConvertKit (Kit) processes subscriber data on your behalf</li>
                <li><strong>Tagging and segmentation:</strong> That you track subscriber behavior and apply tags</li>
                <li><strong>GDPR consent:</strong> Legal basis for processing EU subscribers' data</li>
                <li><strong>Unsubscribe rights:</strong> How subscribers can opt out of communications</li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="convertkit-and-your-privacy-obligations">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">ConvertKit, Kit, and Your Privacy Obligations</h2>
              <p className="text-slate-700 mb-4">
                ConvertKit rebranded to Kit in 2024, but the legal and privacy landscape for users remains the same. When someone subscribes to your email list through a ConvertKit form, their personal data flows into ConvertKit's systems. You, as the list owner, become the data controller for that subscriber's information.
              </p>
              <p className="text-slate-700 mb-4">
                ConvertKit acts as a data processor - it stores and sends emails on your behalf, following your instructions. But the legal responsibility for how that data is collected, used, and protected rests with you. ConvertKit's own privacy policy covers Convertkit-the-company's data practices, not yours.
              </p>
              <p className="text-slate-700 mb-4">
                This means you need your own privacy policy linked from your website, your signup forms, and your email footer. Without it, you are likely in violation of GDPR (if you have EU subscribers), CAN-SPAM (if you send commercial email to US subscribers), and possibly CASL (Canadian anti-spam law).
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">ConvertKit's terms of service require list owners to comply with applicable privacy laws including GDPR and CAN-SPAM. If your account is reported for spam or privacy violations, ConvertKit can suspend your account. Having an accurate, accessible privacy policy is one of the most important steps to staying in good standing with ConvertKit (Kit) as well as with regulators.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="what-convertkit-shares-with-creators">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What ConvertKit Shares with You as the List Owner</h2>
              <p className="text-slate-700 mb-4">
                As a ConvertKit account holder, you have access to a significant amount of subscriber data through your dashboard. All of this data is personal data under GDPR and must be covered in your privacy policy.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Data Type</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">What It Includes</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Collection Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Subscriber identity</td>
                      <td className="border border-slate-200 p-3">Email address, first name, last name</td>
                      <td className="border border-slate-200 p-3">Signup form</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Custom fields</td>
                      <td className="border border-slate-200 p-3">Any fields you add to forms (job title, website, preferences)</td>
                      <td className="border border-slate-200 p-3">Signup form or landing page</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Tags</td>
                      <td className="border border-slate-200 p-3">Labels applied based on behavior, signup source, or segments</td>
                      <td className="border border-slate-200 p-3">Automation rules, manual tagging</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Email engagement</td>
                      <td className="border border-slate-200 p-3">Open rates, click rates per campaign and per subscriber</td>
                      <td className="border border-slate-200 p-3">ConvertKit tracking pixels and links</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Sequence enrollment</td>
                      <td className="border border-slate-200 p-3">Which automations or sequences a subscriber is in</td>
                      <td className="border border-slate-200 p-3">Signup triggers, automation rules</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Purchase data</td>
                      <td className="border border-slate-200 p-3">Products purchased via ConvertKit Commerce</td>
                      <td className="border border-slate-200 p-3">ConvertKit Commerce transactions</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Subscriber status</td>
                      <td className="border border-slate-200 p-3">Active, unsubscribed, bounced, complained</td>
                      <td className="border border-slate-200 p-3">Tracked automatically by ConvertKit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="subscriber-data-handling">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Subscriber Data Handling: What Your Policy Must Say</h2>
              <p className="text-slate-700 mb-4">
                Your privacy policy must clearly explain how you handle subscriber data from the moment someone signs up until their data is deleted. Key elements to cover include:
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Data Collection</h3>
              <p className="text-slate-700 mb-4">
                Describe what personal data you collect when someone subscribes. At minimum this is an email address, but if your forms collect names, company names, website URLs, or other custom fields, those must all be disclosed. Be specific about which forms collect which data.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Purpose of Collection</h3>
              <p className="text-slate-700 mb-4">
                Your policy must explain why you collect subscriber data. Common purposes include: sending newsletters and content updates, sending promotional emails about products or services, personalizing email content based on subscriber interests, and analyzing open and click rates to improve content.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Retention Period</h3>
              <p className="text-slate-700 mb-4">
                How long do you keep subscriber data? Best practice is to retain active subscriber data as long as they remain subscribed, and to purge unsubscribed or inactive subscribers after a defined period (commonly 12-24 months). Your policy should state your retention approach clearly.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">ConvertKit as a Data Processor</h3>
              <p className="text-slate-700 mb-4">
                Your privacy policy must name ConvertKit (Kit) as the email marketing platform you use and describe it as a third-party processor that stores and sends emails on your behalf. You should note that ConvertKit operates under its own privacy policy and security measures, and optionally provide a link to their privacy policy.
              </p>
            </section>

            {/* Section 4 */}
            <section id="forms-and-landing-pages">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Forms and Landing Pages Data</h2>
              <p className="text-slate-700 mb-4">
                ConvertKit forms and landing pages are the primary data collection points on your site. Each form or landing page that collects data is subject to privacy requirements, and your privacy policy must accurately describe what each one collects.
              </p>
              <p className="text-slate-700 mb-4">
                When a visitor fills out a ConvertKit form embedded on your website, their data flows to ConvertKit's servers. If the form is embedded on your domain, this is transparent to the visitor. If you use ConvertKit's hosted landing pages (on app.kit.com or your custom domain), it is still your responsibility to have a privacy policy linked from that page.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Privacy Policy Link Requirements for Forms</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                <li>GDPR requires a clearly visible privacy policy link on or near any form that collects personal data from EU residents</li>
                <li>CalOPPA (California) requires a conspicuous link to your privacy policy on your homepage and any page where personal data is collected</li>
                <li>Good practice: include a brief disclosure near the form button such as "By subscribing you agree to our Privacy Policy and consent to receiving our newsletter"</li>
                <li>ConvertKit's own terms encourage but do not technically require a privacy link on embedded forms, but legal requirements override this</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">ConvertKit's landing page builder allows you to add custom text below the subscribe button. This is the ideal place to add a privacy disclosure and link: "We respect your privacy. Unsubscribe at any time. View our Privacy Policy." This single line satisfies multiple requirements under GDPR, CAN-SPAM, and CASL simultaneously.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="automations-and-tagging">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Automations, Tagging, and Behavioral Tracking</h2>
              <p className="text-slate-700 mb-4">
                ConvertKit's automation and tagging system allows you to build detailed behavioral profiles of your subscribers. Automations can apply tags when subscribers click specific links, open (or do not open) certain emails, visit specific pages on your site (via ConvertKit's Subscriber Identification feature), or purchase products.
              </p>
              <p className="text-slate-700 mb-4">
                Under GDPR, this kind of behavioral tracking and profiling constitutes personal data processing that must be disclosed. Your privacy policy must explain:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                <li>That you use automated email sequences that deliver content based on subscriber behavior</li>
                <li>That you apply tags or segments to subscribers based on their interactions with your emails or website</li>
                <li>What the tags or segments are used for (personalizing content, triggering different email sequences, identifying purchase intent)</li>
                <li>Whether you use ConvertKit's Subscriber Identification feature to track what pages tagged subscribers visit on your site</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">ConvertKit Subscriber Identification</h3>
              <p className="text-slate-700 mb-4">
                ConvertKit's Subscriber Identification (or Site Tracking) feature allows you to track what pages on your website a subscriber visits after they have clicked through from an email. This creates a link between a subscriber's email address and their browsing behavior on your site. Under GDPR, this is personal data processing that requires explicit disclosure and a lawful basis (typically consent or legitimate interests, depending on how it is used).
              </p>
              <p className="text-slate-700 mb-4">
                If you use this feature, your privacy policy must specifically disclose that you track subscriber page visits on your website using ConvertKit, and explain the purpose (typically, to send more relevant content based on what they are reading about).
              </p>
            </section>

            {/* Section 6 */}
            <section id="gdpr-subscriber-consent">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">GDPR Subscriber Consent for ConvertKit Users</h2>
              <p className="text-slate-700 mb-4">
                If any of your subscribers are based in the EU or EEA, GDPR applies. This requires a lawful basis for processing subscriber data. For email marketing, the most appropriate lawful basis is consent - and GDPR sets strict requirements for what constitutes valid consent.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">GDPR Consent Requirements for Email Signups</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Requirement</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">What It Means</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">How to Implement in ConvertKit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Freely given</td>
                      <td className="border border-slate-200 p-3">Subscribing cannot be required to access a product or service they paid for</td>
                      <td className="border border-slate-200 p-3">Do not gate paid products behind newsletter consent</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Specific</td>
                      <td className="border border-slate-200 p-3">Consent for newsletters is separate from consent for promotional emails</td>
                      <td className="border border-slate-200 p-3">Use separate forms or checkboxes for different content types</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Informed</td>
                      <td className="border border-slate-200 p-3">Subscribers must know what they are signing up for and who is sending</td>
                      <td className="border border-slate-200 p-3">Clear form description + privacy policy link</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Unambiguous</td>
                      <td className="border border-slate-200 p-3">No pre-checked boxes; requires an active opt-in</td>
                      <td className="border border-slate-200 p-3">ConvertKit forms require active submission; enable double opt-in</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Withdrawable</td>
                      <td className="border border-slate-200 p-3">Easy to unsubscribe; unsubscribing must not be harder than subscribing</td>
                      <td className="border border-slate-200 p-3">ConvertKit's unsubscribe link is required in every email</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 mb-4">
                Your privacy policy must document the legal basis you rely on for each type of processing. For EU subscribers who sign up for marketing content, this should be: "Legal basis: Consent. Subscribers may withdraw consent at any time by clicking the unsubscribe link in any email or by contacting us at [your email]."
              </p>
            </section>

            {/* Section 7 */}
            <section id="can-spam-requirements">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">CAN-SPAM Requirements for ConvertKit Users</h2>
              <p className="text-slate-700 mb-4">
                The US CAN-SPAM Act applies to all commercial email sent to US recipients. Unlike GDPR, it does not require prior consent to send marketing emails, but it does impose several requirements that must be reflected in both your email practices and your privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">CAN-SPAM Compliance Checklist for ConvertKit Users</h3>
              <div className="space-y-3 mb-6 not-prose">
                {[
                  { step: "1", title: "Include your physical mailing address in every email", desc: "CAN-SPAM requires a valid physical postal address in every commercial email. ConvertKit has a field for this in your account settings. It can be a PO Box or registered business address." },
                  { step: "2", title: "Include a clear and functional unsubscribe mechanism", desc: "ConvertKit automatically includes an unsubscribe link in all emails, which satisfies this requirement. Your privacy policy should describe this unsubscribe mechanism." },
                  { step: "3", title: "Honor unsubscribe requests within 10 business days", desc: "ConvertKit processes unsubscribes immediately, which exceeds the CAN-SPAM 10-day requirement. Your privacy policy should note that unsubscribe requests are honored promptly." },
                  { step: "4", title: "Use accurate From name and subject lines", desc: "Misleading From names (using a celebrity's name or a brand you are not affiliated with) or deceptive subject lines violate CAN-SPAM. Your policy does not need to detail this, but your practices must comply." },
                  { step: "5", title: "Identify the message as an advertisement if applicable", desc: "Not required for every email, but clearly promotional emails should be identifiable as such. Your privacy policy can note that you may send promotional content and that subscribers can opt out." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">CASL (Canada's Anti-Spam Legislation) is stricter than CAN-SPAM and more similar to GDPR in that it requires express or implied consent before sending commercial emails to Canadian recipients. If you have Canadian subscribers, your privacy policy should address how you obtain and document consent for Canadian subscribers, and note that they can withdraw consent at any time.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5 Common Mistakes */}
            <section id="common-mistakes">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5 Common ConvertKit Privacy Policy Mistakes</h2>
              <div className="space-y-3 mb-8 not-prose">
                {[
                  {
                    title: "Not having a privacy policy at all and relying on ConvertKit's terms",
                    desc: "ConvertKit's privacy policy governs the company's data practices, not yours as the list owner. Every ConvertKit user who collects email subscribers needs their own privacy policy to meet legal requirements and ConvertKit's own terms of service.",
                  },
                  {
                    title: "Not disclosing behavioral tracking through tags and automations",
                    desc: "If you use ConvertKit automations to tag subscribers based on which links they click or which pages they visit, this behavioral profiling is personal data processing under GDPR. It must be disclosed in your privacy policy with the purpose and legal basis.",
                  },
                  {
                    title: "Using ConvertKit for both a free newsletter and paid product promotions without separate GDPR consent",
                    desc: "Under GDPR, consent for a free newsletter does not automatically extend to promotional emails for paid products. If you plan to send both, your signup form and privacy policy should distinguish between the two types of content and how subscribers can opt out of one but not the other.",
                  },
                  {
                    title: "Not linking to your privacy policy from ConvertKit landing pages and forms",
                    desc: "If someone subscribes through a ConvertKit hosted landing page and your privacy policy is only on your main website, EU visitors may not see it before subscribing. GDPR requires the privacy policy to be easily accessible at the point of data collection.",
                  },
                  {
                    title: "Not updating the privacy policy when switching between ConvertKit plans or enabling new features",
                    desc: "Upgrading to a ConvertKit plan that enables Subscriber Identification or Commerce features means new categories of data are being processed. Each new feature that processes subscriber data requires a review and potential update of your privacy policy.",
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
                <Users className="w-10 h-10 text-orange-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Generate a ConvertKit-Ready Privacy Policy in Minutes</h2>
                  <p className="text-slate-300 mb-6">
                    Cover subscriber data handling, ConvertKit as a processor, GDPR consent, CAN-SPAM compliance, and behavioral tracking disclosures in one compliant privacy policy tailored to your email marketing setup.
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
                  { href: "/privacy-policy-for-newsletter", label: "Privacy Policy for Email Newsletters" },
                  { href: "/gdpr-privacy-policy", label: "GDPR Privacy Policy Requirements" },
                  { href: "/privacy-policy-for-kajabi", label: "Privacy Policy for Kajabi" },
                  { href: "/privacy-policy-for-blog", label: "Privacy Policy for Blogs" },
                  { href: "/can-spam-compliance", label: "CAN-SPAM Compliance Guide" },
                  { href: "/privacy-policy-for-affiliate-marketing", label: "Privacy Policy for Affiliate Marketing" },
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
      </main>
    </>
  );
}
