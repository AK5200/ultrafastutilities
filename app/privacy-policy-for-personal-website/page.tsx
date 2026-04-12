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
  title: "Privacy Policy for a Personal Website (2026 Free Guide)",
  description: "Personal websites need a privacy policy if they use analytics, fonts, or contact forms. See what to disclose under GDPR and CCPA, and grab a free template.",
  keywords: "privacy policy for personal website, personal blog privacy policy, hobby website privacy policy, gdpr personal website",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-personal-website",
  },
  openGraph: {
    title: "Privacy Policy for a Personal Website (2026 Free Guide)",
    description: "Personal websites need a privacy policy if they use analytics, fonts, or contact forms. See what to disclose under GDPR and CCPA, and grab a free template.",
    url: "https://ultrafastutilities.com/privacy-policy-for-personal-website",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for a Personal Website (2026 Free Guide)" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for a Personal Website (2026 Free Guide)",
    description: "Personal websites need a privacy policy if they use analytics, fonts, or contact forms. See what to disclose under GDPR and CCPA, and grab a free template.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "trigger", title: "What Triggers the Requirement on a Personal Site" },
  { id: "what-to-include", title: "What Your Personal Site Privacy Policy Must Include" },
  { id: "minimal-version", title: "A Minimal Privacy Policy for a Simple Personal Site" },
  { id: "common-questions", title: "Questions Personal Site Owners Often Ask" }
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does a static personal site need a privacy policy?","acceptedAnswer":{"@type":"Answer","text":"If the site loads anything from a third party CDN (fonts, scripts, embedded videos), yes. If the site is genuinely standalone with no third party assets and no analytics, you can skip the policy, though it remains a good idea to include a one paragraph statement."}},{"@type":"Question","name":"Can I use the same privacy policy across all my personal projects?","acceptedAnswer":{"@type":"Answer","text":"Yes, if every project has the same data flows. In practice, projects differ enough that a per project policy is clearer and more accurate. If you maintain one shared policy, name each project and the specific tools each one uses."}},{"@type":"Question","name":"Does my personal site need a CCPA section if I am not in California?","acceptedAnswer":{"@type":"Answer","text":"If any of your visitors might be in California, yes. CCPA applies based on where the user is located, not where the operator is. Most US English language sites get California traffic, so a short CCPA section is the safe default."}},{"@type":"Question","name":"I am 16 and run a personal blog. Do the rules still apply to me?","acceptedAnswer":{"@type":"Answer","text":"Yes. Privacy laws do not exempt minors who run websites. If your blog has analytics or a contact form, you have the same obligations as an adult site owner. A simple privacy policy is enough; you do not need a lawyer."}}]};

const articleSchema = {"@context":"https://schema.org","@type":"Article","headline":"Privacy Policy for a Personal Website (2026 Free Guide)","description":"Personal websites need a privacy policy if they use analytics, fonts, or contact forms. See what to disclose under GDPR and CCPA, and grab a free template.","datePublished":"2026-04-11","dateModified":"2026-04-11","author":{"@type":"Person","name":"Anupam Kumar"},"publisher":{"@type":"Organization","name":"ultrafastutilities","url":"https://ultrafastutilities.com"}};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ultrafastutilities.com"},{"@type":"ListItem","position":2,"name":"Privacy Policy for Personal Website","item":"https://ultrafastutilities.com/privacy-policy-for-personal-website"}]};

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
              <span className="text-slate-600">Privacy Policy for Personal Website</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Personal Site Guide
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Personal Website</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                A personal website does not need to be commercial to fall under privacy law. Analytics, embedded fonts, and contact forms are enough to trigger GDPR and CCPA obligations. Here is the simplest way to comply.
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
                  <span className="text-slate-400">GDPR and CCPA personal site rules</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, personal websites need a privacy policy if they collect any data from visitors, which is true the moment they use Google Analytics, a contact form, or fonts loaded from a third party CDN.</strong>{" "}Privacy laws like GDPR and CCPA apply to data collection rather than commercial activity. A hobby site with Google Analytics is collecting personal data and is subject to the same disclosure requirements as a business website, even if no money changes hands.
                </p>
              </div>

            <section id="trigger">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Triggers the Requirement on a Personal Site</h2>
              <p className="text-slate-700 mb-4">Any analytics tool that uses cookies or collects IP addresses triggers the requirement. Google Analytics is the most common example. Plausible and Fathom are lighter on data but still require disclosure.</p>
              <p className="text-slate-700 mb-4">Any contact form, comment system, or newsletter signup. These collect identifying information directly and are clear data collection events.</p>
              <p className="text-slate-700 mb-4">Any embedded third party content that loads from a remote server: YouTube videos, Vimeo embeds, Twitter or X embeds, Disqus comments, embedded maps, Google Fonts from the CDN. Each of these contacts a third party server that may set cookies or log the visitor&apos;s IP.</p>

            </section>

            <section id="what-to-include">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What Your Personal Site Privacy Policy Must Include</h2>
              <p className="text-slate-700 mb-4">Identify yourself. Personal name and contact email is enough for a personal site. If you do not want to publish your home address, you do not have to; an email contact for privacy questions is sufficient.</p>
              <p className="text-slate-700 mb-4">List the data types you collect, who processes them, how long they are kept, and the legal basis under GDPR. For a typical personal site, the basis is consent (for analytics that require it) or legitimate interests (for analytics that respect Do Not Track and store no IP).</p>
              <p className="text-slate-700 mb-4">Describe how visitors can ask you what data you hold, request correction, or request deletion. Provide a clear contact channel.</p>
              <p className="text-slate-700 mb-4">Add a last updated date. Update it whenever you change the policy.</p>

            </section>

            <section id="minimal-version">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">A Minimal Privacy Policy for a Simple Personal Site</h2>
              <p className="text-slate-700 mb-4">If your site is genuinely simple (one analytics tool, no contact form, no embeds), your privacy policy can be short. A single page covering what is collected, who processes it, retention, and contact details is enough.</p>
              <p className="text-slate-700 mb-4">Keep the language plain. The goal is to inform a visitor in a few minutes, not to write a contract. Bullet points and short paragraphs work better than dense legal prose.</p>
              <p className="text-slate-700 mb-4">Reuse a generator and customise it. Resist the temptation to copy from a big company&apos;s policy. Their policies cover services your site does not offer and miss things your site does.</p>

            </section>

            <section id="common-questions">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Questions Personal Site Owners Often Ask</h2>
              <p className="text-slate-700 mb-4">Do I need a cookie banner on a personal site? If you use analytics or other cookies that count as non essential, EU visitors must give consent before those cookies are set. A simple banner that links to your privacy policy is the standard solution.</p>
              <p className="text-slate-700 mb-4">Do I need to register as a data controller anywhere? In most jurisdictions, no. Personal sites are not required to register with a data protection authority. The exception is some EU member states that have additional rules for sites that process certain categories of data.</p>
              <p className="text-slate-700 mb-4">Can I host the privacy policy on a different domain? Technically yes, but it is much better to host it on the same domain as the site. Keep it accessible from every page through a footer link.</p>

            </section>


              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Does a static personal site need a privacy policy?</h3>
                <p className="text-slate-700">If the site loads anything from a third party CDN (fonts, scripts, embedded videos), yes. If the site is genuinely standalone with no third party assets and no analytics, you can skip the policy, though it remains a good idea to include a one paragraph statement.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I use the same privacy policy across all my personal projects?</h3>
                <p className="text-slate-700">Yes, if every project has the same data flows. In practice, projects differ enough that a per project policy is clearer and more accurate. If you maintain one shared policy, name each project and the specific tools each one uses.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Does my personal site need a CCPA section if I am not in California?</h3>
                <p className="text-slate-700">If any of your visitors might be in California, yes. CCPA applies based on where the user is located, not where the operator is. Most US English language sites get California traffic, so a short CCPA section is the safe default.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">I am 16 and run a personal blog. Do the rules still apply to me?</h3>
                <p className="text-slate-700">Yes. Privacy laws do not exempt minors who run websites. If your blog has analytics or a contact form, you have the same obligations as an adult site owner. A simple privacy policy is enough; you do not need a lawyer.</p>
              </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">Generate a personal site privacy policy</h2>
                <p className="text-blue-100 mb-4">Free preview, $4.99 to download. Covers analytics, fonts CDN, contact form, GDPR, and CCPA.</p>
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
                <Link href="/privacy-policy-for-portfolio-website" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Privacy Policy for Portfolio Website</p>
                  <p className="text-sm text-slate-500 mt-1">Sister guide for portfolio sites.</p>
                </Link>
                <Link href="/do-i-need-a-privacy-policy-for-a-blog" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Do I Need a Privacy Policy for a Blog?</p>
                  <p className="text-sm text-slate-500 mt-1">When the requirement applies to bloggers.</p>
                </Link>
                <Link href="/do-i-need-a-privacy-policy-for-a-free-website" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Do I Need a Privacy Policy for a Free Website?</p>
                  <p className="text-sm text-slate-500 mt-1">When non commercial sites still qualify.</p>
                </Link>
                <Link href="/privacy-policy-for-websites" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Privacy Policy for Websites</p>
                  <p className="text-sm text-slate-500 mt-1">General website privacy policy guide.</p>
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
