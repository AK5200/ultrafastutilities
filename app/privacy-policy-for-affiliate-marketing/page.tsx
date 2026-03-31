import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  Ban,
  ChevronRight,
  FileText,
  Globe,
  Link2,
  DollarSign,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for Affiliate Marketing Websites (2026 Guide)",
  description:
    "Does your affiliate marketing website need a privacy policy? Yes - and it must cover FTC disclosure, cookie tracking, affiliate network requirements, and GDPR for EU visitors. Learn what to include.",
  keywords:
    "privacy policy for affiliate marketing, affiliate marketing privacy policy, affiliate website privacy policy, affiliate links privacy policy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-affiliate-marketing",
  },
  openGraph: {
    title: "Privacy Policy for Affiliate Marketing Websites (2026 Guide)",
    description:
      "Affiliate sites need privacy policies covering FTC disclosure, cookie tracking, affiliate networks, and GDPR. Here is exactly what your policy must say.",
    url: "https://ultrafastutilities.com/privacy-policy-for-affiliate-marketing",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Affiliate Marketing" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for Affiliate Marketing Websites (2026 Guide)",
    description:
      "Affiliate sites need privacy policies covering FTC disclosure, cookie tracking, affiliate networks, and GDPR.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-affiliate-sites-need-a-policy", title: "Why Affiliate Sites Need a Privacy Policy" },
  { id: "ftc-disclosure-requirements", title: "FTC Disclosure Requirements" },
  { id: "cookie-and-tracking-disclosure", title: "Cookie and Tracking Disclosure" },
  { id: "affiliate-network-requirements", title: "Affiliate Network Requirements" },
  { id: "data-collected-by-affiliate-tracking", title: "Data Collected by Affiliate Tracking" },
  { id: "gdpr-for-eu-visitors", title: "GDPR for EU Visitors" },
  { id: "what-to-include", title: "What to Include in Your Policy" },
  { id: "common-mistakes", title: "5 Common Mistakes" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does an affiliate marketing blog need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any website that collects personal data - including through Google Analytics, cookies, or email newsletter signups - needs a privacy policy. Affiliate sites also have specific FTC obligations to disclose their affiliate relationships, and most affiliate networks contractually require a privacy policy as a condition of joining their program.",
      },
    },
    {
      "@type": "Question",
      name: "What does the FTC require affiliate marketers to disclose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FTC requires that any material connection between an endorser and a brand be clearly and conspicuously disclosed. For affiliate marketing, this means disclosing that you earn a commission if readers click your links and make a purchase. The disclosure must be near the affiliate link - not just buried in your privacy policy. The FTC updated its endorsement guides in 2023 to make these requirements stricter.",
      },
    },
    {
      "@type": "Question",
      name: "Do Amazon Associates require a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amazon Associates Operating Agreement requires participants to have a legally sufficient privacy notice on their site that discloses the use of cookies and data collection. Amazon also requires you to include specific language about your participation in the Associates program.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to disclose affiliate cookies to EU visitors under GDPR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Affiliate tracking cookies are third-party cookies that collect personal data about browsing behavior. Under GDPR and the ePrivacy Directive, you must obtain explicit consent before placing non-essential cookies on EU visitors' devices. Your privacy policy must explain what affiliate cookies do, who sets them, and how visitors can opt out.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the same privacy policy for multiple affiliate sites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can use a template across multiple sites, but each policy must be customized to reflect the specific data practices, affiliate networks, and tools used on that particular site. A single generic policy applied to multiple sites with different practices can create compliance issues if the policy does not accurately describe what each site actually does.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy for Affiliate Marketing Websites",
  description:
    "A complete guide to privacy policy requirements for affiliate marketing websites, covering FTC disclosure, cookie tracking, affiliate network requirements, and GDPR.",
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
      name: "Privacy Policy for Affiliate Marketing",
      item: "https://ultrafastutilities.com/privacy-policy-for-affiliate-marketing",
    },
  ],
};

export default function AffiliateMarketingPrivacyPolicyPage() {
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
        <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-200">Privacy Policy for Affiliate Marketing</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <Link2 className="w-8 h-8 text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">Affiliate Marketing Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Privacy Policy for Affiliate Marketing Websites: Complete 2026 Guide
            </h1>
            <p className="text-xl text-slate-300 mb-6 max-w-3xl">
              Affiliate sites have unique privacy policy requirements - from FTC disclosure rules and cookie tracking transparency to Amazon Associates terms and GDPR consent for EU visitors. Here is exactly what your policy must cover.
            </p>
            <p className="text-slate-400 text-sm">Last updated: March 2026</p>
          </div>
        </section>

        {/* Author trust bar */}
        <div className="border-b bg-slate-50 py-3 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Covers FTC, GDPR, and affiliate network requirements</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Amazon Associates, ShareASale, CJ Affiliate, Impact</span>
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
              <h2 className="text-blue-900 font-bold text-lg mb-3">Quick Answer: What Affiliate Sites Must Include in Their Privacy Policy</h2>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li><strong>Affiliate disclosure:</strong> That you earn commissions from affiliate links</li>
                <li><strong>Cookie tracking:</strong> What affiliate cookies do and who sets them</li>
                <li><strong>Third-party data sharing:</strong> That clicks may be tracked by affiliate networks</li>
                <li><strong>Analytics data:</strong> What Google Analytics or similar tools collect</li>
                <li><strong>Email marketing:</strong> How subscriber data is used (if you have a newsletter)</li>
                <li><strong>GDPR compliance:</strong> Consent mechanism for EU visitors</li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="why-affiliate-sites-need-a-policy">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Affiliate Marketing Sites Need a Privacy Policy</h2>
              <p className="text-slate-700 mb-4">
                Many affiliate marketers assume they do not need a privacy policy because they are not directly selling products. This is a misconception. Affiliate sites collect personal data in several ways - through analytics, contact forms, email newsletter signups, and through the affiliate tracking cookies that are placed on visitor devices when links are clicked.
              </p>
              <p className="text-slate-700 mb-4">
                Beyond legal obligations, affiliate network contracts typically require a privacy policy as a condition of participation. Amazon Associates, ShareASale, CJ Affiliate, Impact, and Awin all require publishers to have and maintain a privacy policy. Failure to have one can result in termination from the program and clawback of earned commissions.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">Amazon Associates regularly audits publisher websites for compliance with their operating agreement. Sites found to be missing required disclosures or privacy policies can have their accounts suspended without warning, losing access to earned commissions that have not yet been paid out.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Legal Basis for the Requirement</h3>
              <p className="text-slate-700 mb-4">The legal requirements come from multiple sources:</p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                <li><strong>FTC Act Section 5:</strong> Requires disclosure of material connections and prohibits deceptive practices</li>
                <li><strong>GDPR Article 13:</strong> Requires transparency about data collection for EU visitors</li>
                <li><strong>ePrivacy Directive:</strong> Requires consent for non-essential cookies in the EU</li>
                <li><strong>CCPA:</strong> Requires California consumer disclosures if traffic thresholds are met</li>
                <li><strong>Affiliate network terms of service:</strong> Contractual requirement to maintain a privacy policy</li>
                <li><strong>CalOPPA:</strong> California Online Privacy Protection Act requires any site collecting data from California residents to post a policy</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="ftc-disclosure-requirements">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">FTC Disclosure Requirements for Affiliate Marketers</h2>
              <p className="text-slate-700 mb-4">
                The FTC's Guides Concerning the Use of Endorsements and Testimonials in Advertising, updated in 2023, require that any material connection between an endorser and a brand be clearly and conspicuously disclosed. For affiliate marketing, this means readers must be told you earn a commission if they click your links and buy.
              </p>
              <p className="text-slate-700 mb-4">
                The FTC is explicit that a disclosure buried in your privacy policy alone does not satisfy this requirement. The disclosure must appear near the affiliate link itself - typically at the top of any content containing affiliate links - in language that is clear to an average consumer.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">What Your Privacy Policy Must Say About Affiliates</h3>
              <p className="text-slate-700 mb-3">Your privacy policy should include a dedicated affiliate disclosure section covering:</p>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
                <li>That the site participates in affiliate programs and earns commissions from qualifying purchases</li>
                <li>Which affiliate networks you work with (Amazon Associates, ShareASale, CJ Affiliate, etc.)</li>
                <li>That affiliate links use tracking cookies to attribute sales to your site</li>
                <li>How long those affiliate cookies persist (Amazon: 24 hours; other networks often 30-90 days)</li>
                <li>That clicking an affiliate link and purchasing does not cost the reader anything extra</li>
                <li>Where readers can find per-article affiliate disclosures</li>
              </ul>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Affiliate Network</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Cookie Duration</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Privacy Policy Required?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Amazon Associates</td>
                      <td className="border border-slate-200 p-3">24 hours (90 days if added to cart)</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - required by operating agreement</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">ShareASale</td>
                      <td className="border border-slate-200 p-3">Varies by merchant (typically 30-90 days)</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - required</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">CJ Affiliate (Commission Junction)</td>
                      <td className="border border-slate-200 p-3">Varies by advertiser (typically 30 days)</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - required</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Impact Radius</td>
                      <td className="border border-slate-200 p-3">Varies by program (typically 30 days)</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - required</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Awin</td>
                      <td className="border border-slate-200 p-3">Varies by advertiser</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - required for GDPR compliance</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">ClickBank</td>
                      <td className="border border-slate-200 p-3">60 days</td>
                      <td className="border border-slate-200 p-3 text-green-700 font-medium">Yes - required</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="cookie-and-tracking-disclosure">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Cookie and Tracking Disclosure for Affiliate Sites</h2>
              <p className="text-slate-700 mb-4">
                Affiliate tracking relies on cookies. When a visitor clicks an affiliate link, a cookie is placed on their device that identifies your site as the source of the referral. When they later complete a purchase (within the cookie window), you earn the commission. This entire process involves personal data and must be disclosed.
              </p>
              <p className="text-slate-700 mb-4">
                Your privacy policy must explain the types of cookies your site uses, who sets them (first-party vs. third-party), what they do, how long they persist, and how visitors can control or delete them.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Types of Cookies Typically on Affiliate Sites</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Cookie Type</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Set By</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Purpose</th>
                      <th className="border border-slate-200 p-3 text-left font-semibold">Consent Required?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-200 p-3">Analytics cookies</td>
                      <td className="border border-slate-200 p-3">Google Analytics</td>
                      <td className="border border-slate-200 p-3">Track page views, sessions, traffic sources</td>
                      <td className="border border-slate-200 p-3 text-yellow-700">Yes (EU)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Affiliate tracking cookies</td>
                      <td className="border border-slate-200 p-3">Amazon, ShareASale, etc.</td>
                      <td className="border border-slate-200 p-3">Attribute referrals and track conversions</td>
                      <td className="border border-slate-200 p-3 text-red-700">Yes (EU)</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-200 p-3">Advertising cookies</td>
                      <td className="border border-slate-200 p-3">Google AdSense, Mediavine</td>
                      <td className="border border-slate-200 p-3">Serve targeted ads based on behavior</td>
                      <td className="border border-slate-200 p-3 text-red-700">Yes (EU)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-200 p-3">Essential cookies</td>
                      <td className="border border-slate-200 p-3">Your server / CMS</td>
                      <td className="border border-slate-200 p-3">Session management, security, preferences</td>
                      <td className="border border-slate-200 p-3 text-green-700">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section id="affiliate-network-requirements">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Affiliate Network Privacy Policy Requirements</h2>
              <p className="text-slate-700 mb-4">
                Beyond legal requirements, the affiliate networks themselves impose contractual privacy policy requirements. Here is what the major networks require:
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Amazon Associates</h3>
              <p className="text-slate-700 mb-4">
                The Amazon Associates Operating Agreement requires participants to have a privacy notice on their site that (1) discloses the use of cookies and (2) notifies users that third parties may set cookies. Amazon also requires you to include the specific statement: "As an Amazon Associate I earn from qualifying purchases." This must appear on your site, not just in your privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">ShareASale and Awin</h3>
              <p className="text-slate-700 mb-4">
                ShareASale (owned by Awin) requires publishers to maintain a privacy policy and to comply with all applicable privacy laws. For European traffic, publishers working with Awin must sign a Data Processing Agreement and ensure their privacy policy meets GDPR standards, including disclosure of Awin's tracking mechanisms.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Google AdSense (Display Advertising)</h3>
              <p className="text-slate-700 mb-4">
                If you run Google AdSense alongside affiliate links, Google requires you to have a privacy policy that discloses the use of advertising cookies. Google specifically requires you to provide notice that Google uses cookies to serve ads based on a user's prior visits to your website or other websites, and to provide a link to Google's opt-out page.
              </p>
            </section>

            {/* Section 5 */}
            <section id="data-collected-by-affiliate-tracking">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Data Collected by Affiliate Tracking Systems</h2>
              <p className="text-slate-700 mb-4">
                When a visitor to your affiliate site clicks a link, multiple pieces of data are collected by various parties. Your privacy policy must accurately describe this data flow, even though much of it is controlled by the affiliate network rather than by you.
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
                <li><strong>Click data:</strong> Time of click, referring page on your site, affiliate link ID</li>
                <li><strong>Device data:</strong> Browser type, operating system, screen resolution, IP address</li>
                <li><strong>Behavioral data:</strong> Pages visited on your site before clicking the affiliate link</li>
                <li><strong>Purchase data:</strong> Whether a purchase was completed, purchase amount (shared back with you for commission calculation)</li>
                <li><strong>Geographic data:</strong> Country and sometimes city of the visitor, derived from IP address</li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Did you know?</p>
                    <p className="text-amber-800 text-sm">Even if your affiliate site does not have a contact form or email signup, simply having Google Analytics installed means you are collecting personal data (specifically, hashed IP addresses and browsing behavior). This alone is enough to trigger privacy policy requirements in most jurisdictions.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="gdpr-for-eu-visitors">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">GDPR Requirements for EU Visitors to Your Affiliate Site</h2>
              <p className="text-slate-700 mb-4">
                If your affiliate site receives visitors from the EU - which most English-language sites do - GDPR applies to you regardless of where your site is hosted. This means you need a cookie consent banner, a GDPR-compliant privacy policy, and a legal basis for processing the personal data you collect.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">What GDPR Requires for Affiliate Sites Specifically</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
                <li>Explicit consent before placing non-essential cookies (analytics, affiliate tracking, advertising)</li>
                <li>A cookie consent banner that is genuinely easy to decline (not just an accept button)</li>
                <li>Your privacy policy must list the legal basis for each type of processing</li>
                <li>Disclosure of every third-party service that receives personal data (Google, Amazon, your affiliate network)</li>
                <li>Data subject rights section covering access, erasure, portability, and objection</li>
                <li>Contact details for submitting data subject requests</li>
              </ul>

              <p className="text-slate-700 mb-4">
                If you operate from outside the EU but target EU visitors (for example, you write reviews of products available in Germany), you may also need to designate an EU representative under GDPR Article 27. Failure to do so is itself a violation that can result in fines.
              </p>
            </section>

            {/* Section 7 */}
            <section id="what-to-include">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What to Include in an Affiliate Site Privacy Policy</h2>
              <div className="space-y-4 mb-6 not-prose">
                {[
                  { step: "1", title: "Affiliate relationship disclosure", desc: "Clearly state that the site participates in affiliate programs and earns commissions. List the specific networks: Amazon Associates, ShareASale, CJ Affiliate, Impact, etc." },
                  { step: "2", title: "Cookie policy section", desc: "Describe each category of cookie: essential, analytics, affiliate tracking, advertising. For each, explain what it does, who sets it, and how long it lasts." },
                  { step: "3", title: "Analytics disclosure", desc: "Name any analytics services you use (Google Analytics 4, Plausible, Fathom, etc.) and explain what data they collect and how you use it." },
                  { step: "4", title: "Email marketing section (if applicable)", desc: "If you have a newsletter, explain what data you collect on signup, which email platform you use (Mailchimp, ConvertKit, Beehiiv, etc.), and how subscribers can unsubscribe." },
                  { step: "5", title: "Third-party links notice", desc: "Explain that your site contains links to third-party websites and that you are not responsible for their privacy practices. Encourage users to read the privacy policies of linked sites." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 Common Mistakes */}
            <section id="common-mistakes">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5 Common Privacy Policy Mistakes by Affiliate Marketers</h2>
              <div className="space-y-3 mb-8 not-prose">
                {[
                  {
                    title: "Relying only on an in-content affiliate disclosure without a privacy policy",
                    desc: "A disclosure like 'This post contains affiliate links' satisfies FTC requirements for per-article disclosure, but it does not substitute for a full privacy policy covering data collection, cookies, and user rights.",
                  },
                  {
                    title: "Not disclosing all the affiliate networks they participate in",
                    desc: "If you list Amazon Associates but not ShareASale or Impact, the policy is incomplete. Every affiliate network whose cookies are placed on visitors' devices must be disclosed.",
                  },
                  {
                    title: "Using a no-consent cookie banner that does not actually offer a real opt-out",
                    desc: "A cookie banner with only an 'Accept All' button does not meet GDPR requirements. Users must be able to decline non-essential cookies as easily as they can accept them.",
                  },
                  {
                    title: "Not updating the policy when joining new affiliate programs",
                    desc: "Every time you join a new affiliate network, new tracking cookies may be placed on your visitors' devices. This requires an update to your privacy policy before you start publishing affiliate links from that network.",
                  },
                  {
                    title: "Copying the affiliate disclosure language from the network without customizing it",
                    desc: "Amazon and other networks provide sample disclosure language, but this covers their legal needs, not yours. Your privacy policy needs to be tailored to your specific site, traffic, and data practices.",
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
                <DollarSign className="w-10 h-10 text-emerald-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Generate an Affiliate Site Privacy Policy in Minutes</h2>
                  <p className="text-slate-300 mb-6">
                    Cover FTC disclosure, cookie tracking, affiliate network requirements, and GDPR in one compliant document. Customize for your specific affiliate networks and data practices.
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
                  { href: "/privacy-policy-for-blog", label: "Privacy Policy for a Blog" },
                  { href: "/gdpr-privacy-policy", label: "GDPR Privacy Policy Requirements" },
                  { href: "/cookie-policy-for-websites", label: "Cookie Policy for Websites" },
                  { href: "/ftc-disclosure-requirements", label: "FTC Disclosure Requirements" },
                  { href: "/privacy-policy-for-website", label: "Privacy Policy for Websites" },
                  { href: "/do-i-need-a-privacy-policy", label: "Do I Need a Privacy Policy?" },
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
