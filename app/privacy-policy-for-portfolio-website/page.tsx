import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  FileText,
  ArrowRight,
  Clock,
  BookOpen,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for a Portfolio Website (Free Template, 2026)",
  description: "Portfolio sites collect contact form data, analytics, and visitor IPs. See exactly what your privacy policy must disclose under GDPR and CCPA. Free template included.",
  keywords: "privacy policy for portfolio website, portfolio privacy policy, designer portfolio privacy, freelance portfolio privacy policy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-portfolio-website",
  },
  openGraph: {
    title: "Privacy Policy for a Portfolio Website (Free Template, 2026)",
    description: "Portfolio sites collect contact form data, analytics, and visitor IPs. See exactly what your privacy policy must disclose under GDPR and CCPA. Free template included.",
    url: "https://ultrafastutilities.com/privacy-policy-for-portfolio-website",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for a Portfolio Website (Free Template, 2026)" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for a Portfolio Website (Free Template, 2026)",
    description: "Portfolio sites collect contact form data, analytics, and visitor IPs. See exactly what your privacy policy must disclose under GDPR and CCPA. Free template included.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-portfolios-collect", title: "What a Typical Portfolio Site Actually Collects" },
  { id: "what-must-be-in-policy", title: "What Must Be in Your Portfolio Privacy Policy" },
  { id: "common-mistakes", title: "Common Portfolio Privacy Policy Mistakes" },
  { id: "where-to-display", title: "Where to Display the Policy on a Portfolio Site" }
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need a privacy policy for a portfolio site that has no contact form?","acceptedAnswer":{"@type":"Answer","text":"If you use any analytics, embedded fonts from a CDN, or any third party widget, yes. Pure static sites with no analytics, no fonts CDN, and no third party assets are the only portfolios that can skip a policy, and almost no real portfolio is that bare."}},{"@type":"Question","name":"Can I just use the privacy policy from another designer's site?","acceptedAnswer":{"@type":"Answer","text":"No. It will reference services that designer uses, not yours. It is also a copyright infringement and a compliance failure. Use a generator or write your own based on what your site actually does."}},{"@type":"Question","name":"What if my portfolio site is not for business and is just a hobby?","acceptedAnswer":{"@type":"Answer","text":"Privacy laws apply to data collection regardless of commercial intent. A hobby site that uses Google Analytics is collecting personal data and needs a privacy policy under GDPR and CCPA."}},{"@type":"Question","name":"How long does a portfolio privacy policy need to be?","acceptedAnswer":{"@type":"Answer","text":"A clear policy for a typical portfolio is one to two pages. Cover the basics: who you are, what you collect, who processes it, how to contact you, and the user's rights. Length is not the goal; accuracy and clarity are."}}]};

const articleSchema = {"@context":"https://schema.org","@type":"Article","headline":"Privacy Policy for a Portfolio Website (Free Template, 2026)","description":"Portfolio sites collect contact form data, analytics, and visitor IPs. See exactly what your privacy policy must disclose under GDPR and CCPA. Free template included.","datePublished":"2026-04-11","dateModified":"2026-04-11","author":{"@type":"Person","name":"Anupam Kumar"},"publisher":{"@type":"Organization","name":"ultrafastutilities","url":"https://ultrafastutilities.com"}};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ultrafastutilities.com"},{"@type":"ListItem","position":2,"name":"Privacy Policy for Portfolio Website","item":"https://ultrafastutilities.com/privacy-policy-for-portfolio-website"}]};

export default function Page() {
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
              <span className="text-slate-600">Privacy Policy for Portfolio Website</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Portfolio Site Guide
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Portfolio Website</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Even a simple portfolio site collects visitor data through analytics, contact forms, and embedded fonts. Privacy laws apply the moment any of that touches a user. Here is what your portfolio policy must say.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="2026-04-11">April 11, 2026</time> &middot; Reviewed for compliance
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
                  <p className="text-sm font-semibold text-slate-800">Need a privacy policy?</p>
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
                <span>Updated <time dateTime="2026-04-11">April 11, 2026</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>7 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-xs font-medium text-slate-500 mb-2">
                  <time dateTime="2026-04-11">April 11, 2026</time> &mdash;{" "}
                  <span className="text-slate-400">Designer and freelancer rules</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, portfolio websites need a privacy policy if they use any analytics, contact form, embedded fonts, comments, or cookies, which is true for almost every modern portfolio site.</strong>{" "}Under GDPR, CCPA, and CalOPPA, the legal trigger is data collection, not commercial activity. Personal portfolios, freelancer sites, and creative case study pages all qualify the moment they include Google Analytics, a contact form, or even Google Fonts loaded from Google&apos;s CDN.
                </p>
              </div>

            <section id="what-portfolios-collect">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What a Typical Portfolio Site Actually Collects</h2>
              <p className="text-slate-700 mb-4">Most portfolio sites use Google Analytics or a similar tool. Analytics collects IP addresses, page views, referrers, browser metadata, and a unique visitor identifier. All of this is personal data under GDPR.</p>
              <p className="text-slate-700 mb-4">Most portfolios have a contact form. The form collects at least a name and an email address, often a message body. If the form is hosted by Formspree, Typeform, Tally, or similar, that vendor is a data processor and must be named in the policy.</p>
              <p className="text-slate-700 mb-4">Many portfolios use embedded Google Fonts loaded from Google&apos;s CDN. A 2022 German court ruling treated this as a data transfer and required disclosure. Self hosting fonts avoids the issue, but if you embed from the CDN, your policy must mention it.</p>

            </section>

            <section id="what-must-be-in-policy">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Must Be in Your Portfolio Privacy Policy</h2>
              <p className="text-slate-700 mb-4">Identify yourself by name and provide a contact email. If you operate as a freelancer or sole trader, you can use your personal name; if you have a registered business, use the business name. Either way, the user must be able to reach you about privacy questions.</p>
              <p className="text-slate-700 mb-4">List every category of data you collect, every tool that processes it, and the purpose for each. Use plain language. Avoid legal jargon that obscures what you actually do.</p>
              <p className="text-slate-700 mb-4">Describe how a visitor can request access, correction, or deletion of their data. Give a real email address that you check. A contact form is acceptable as long as it actually reaches you.</p>
              <p className="text-slate-700 mb-4">Add a last updated date and a short statement about how you will notify visitors of material changes. For most portfolios this just means updating the date when you change the policy.</p>

            </section>

            <section id="common-mistakes">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Common Portfolio Privacy Policy Mistakes</h2>
              <p className="text-slate-700 mb-4">Copying a generic template that mentions services or products you do not offer. Reviewers and savvy users notice immediately and it undermines trust.</p>
              <p className="text-slate-700 mb-4">Forgetting Google Analytics. The single most common omission. If you have GA on your site, name it in the policy. Same for Plausible, Fathom, or any other analytics vendor.</p>
              <p className="text-slate-700 mb-4">Forgetting Google Fonts loaded from the CDN. Easy to overlook. Self hosting fonts is the cleanest fix; otherwise list the CDN as a third party.</p>
              <p className="text-slate-700 mb-4">Skipping the contact form processor. If you use Formspree, Tally, or Typeform, name the vendor and link to their privacy policy.</p>

            </section>

            <section id="where-to-display">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Where to Display the Policy on a Portfolio Site</h2>
              <p className="text-slate-700 mb-4">Add a Privacy link to your site footer so it appears on every page. This is the standard pattern users expect and the easiest way to make the policy discoverable.</p>
              <p className="text-slate-700 mb-4">Link the contact form to the policy with a small note saying that submitted information is handled in accordance with the privacy policy. This is sometimes legally required and is always good practice.</p>
              <p className="text-slate-700 mb-4">If your site uses cookies for analytics, add a small consent banner that links to the policy. For EU visitors, this is required by the ePrivacy Directive.</p>

            </section>


              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do I need a privacy policy for a portfolio site that has no contact form?</h3>
                <p className="text-slate-700">If you use any analytics, embedded fonts from a CDN, or any third party widget, yes. Pure static sites with no analytics, no fonts CDN, and no third party assets are the only portfolios that can skip a policy, and almost no real portfolio is that bare.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I just use the privacy policy from another designer&apos;s site?</h3>
                <p className="text-slate-700">No. It will reference services that designer uses, not yours. It is also a copyright infringement and a compliance failure. Use a generator or write your own based on what your site actually does.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What if my portfolio site is not for business and is just a hobby?</h3>
                <p className="text-slate-700">Privacy laws apply to data collection regardless of commercial intent. A hobby site that uses Google Analytics is collecting personal data and needs a privacy policy under GDPR and CCPA.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How long does a portfolio privacy policy need to be?</h3>
                <p className="text-slate-700">A clear policy for a typical portfolio is one to two pages. Cover the basics: who you are, what you collect, who processes it, how to contact you, and the user&apos;s rights. Length is not the goal; accuracy and clarity are.</p>
              </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">Generate a portfolio privacy policy in 60 seconds</h2>
                <p className="text-blue-100 mb-4">Covers analytics, contact form, fonts CDN, GDPR, and CCPA. Free preview, $4.99 to download.</p>
                <Link href="/generate">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate My Policy
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Related */}
              <section className="mt-12">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Related Resources</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/privacy-policy-for-personal-website" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Privacy Policy for Personal Website</p>
                  <p className="text-sm text-slate-500 mt-1">Sister guide for personal sites.</p>
                </Link>
                <Link href="/privacy-policy-for-websites" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Privacy Policy for Websites</p>
                  <p className="text-sm text-slate-500 mt-1">General website privacy policy guide.</p>
                </Link>
                <Link href="/do-i-need-a-privacy-policy-for-a-free-website" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Do I Need a Privacy Policy for a Free Website?</p>
                  <p className="text-sm text-slate-500 mt-1">When the requirement applies even without commerce.</p>
                </Link>
                <Link href="/cookie-policy-for-websites" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Cookie Policy for Websites</p>
                  <p className="text-sm text-slate-500 mt-1">EU cookie consent requirements explained.</p>
                </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
