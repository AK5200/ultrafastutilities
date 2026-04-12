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
  title: "Edge Extension Privacy Policy Requirements (Microsoft 2026 Rules)",
  description: "Microsoft Edge Add ons store requires a privacy policy for extensions that handle user data. See the rules, what to disclose, and how to pass review.",
  keywords: "edge extension privacy policy, microsoft edge add ons privacy, edge extension privacy requirements, edge developer policies privacy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/edge-extension-privacy-policy-requirements",
  },
  openGraph: {
    title: "Edge Extension Privacy Policy Requirements (Microsoft 2026 Rules)",
    description: "Microsoft Edge Add ons store requires a privacy policy for extensions that handle user data. See the rules, what to disclose, and how to pass review.",
    url: "https://ultrafastutilities.com/edge-extension-privacy-policy-requirements",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Edge Extension Privacy Policy Requirements (Microsoft 2026 Rules)" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edge Extension Privacy Policy Requirements (Microsoft 2026 Rules)",
    description: "Microsoft Edge Add ons store requires a privacy policy for extensions that handle user data. See the rules, what to disclose, and how to pass review.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "edge-vs-chrome", title: "How Edge Privacy Rules Differ From Chrome" },
  { id: "what-to-disclose", title: "What an Edge Extension Privacy Policy Must Disclose" },
  { id: "common-rejections", title: "Common Reasons Edge Reviewers Reject Extensions" },
  { id: "submit-and-update", title: "Submitting and Updating Through Partner Center" }
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I use my Chrome extension privacy policy for Edge as well?","acceptedAnswer":{"@type":"Answer","text":"Yes, if the policy is generic enough to apply to both browsers and you update the references. Many developers maintain a single policy that names both browsers. Edge reviewers will accept this as long as the policy is specific to the extension and not a generic boilerplate."}},{"@type":"Question","name":"Does Edge require a privacy policy for extensions that collect zero user data?","acceptedAnswer":{"@type":"Answer","text":"Technically no, if your extension truly accesses no user data and requests no data permissions. In practice, Microsoft recommends having one anyway, even if it just states no data is collected. This avoids confusion during review."}},{"@type":"Question","name":"What encryption standard does Microsoft expect for Edge extensions?","acceptedAnswer":{"@type":"Answer","text":"Edge developer policies require TLS for any data transmitted off the user device. Most modern HTTPS deployments use TLS 1.2 or 1.3, which satisfy this. Disable older TLS versions on any backend your extension contacts."}},{"@type":"Question","name":"Can my Edge extension share data with third parties?","acceptedAnswer":{"@type":"Answer","text":"Only after obtaining opt in consent from the user. The default must be no sharing. The user must take an explicit action to allow it. Your privacy policy must describe the consent flow and the categories of data that may be shared."}}]};

const articleSchema = {"@context":"https://schema.org","@type":"Article","headline":"Edge Extension Privacy Policy Requirements (Microsoft 2026 Rules)","description":"Microsoft Edge Add ons store requires a privacy policy for extensions that handle user data. See the rules, what to disclose, and how to pass review.","datePublished":"2026-04-11","dateModified":"2026-04-11","author":{"@type":"Person","name":"Anupam Kumar"},"publisher":{"@type":"Organization","name":"ultrafastutilities","url":"https://ultrafastutilities.com"}};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ultrafastutilities.com"},{"@type":"ListItem","position":2,"name":"Edge Extension Privacy Policy","item":"https://ultrafastutilities.com/edge-extension-privacy-policy-requirements"}]};

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
              <span className="text-slate-600">Edge Extension Privacy Policy</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Microsoft Edge
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Edge Extension Privacy Policy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Requirements</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Microsoft Edge Add ons store has its own developer policies for browser extensions. They overlap with Chrome Web Store rules but have important differences. Here is what your privacy policy must cover for Edge in 2026.
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
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>8 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-xs font-medium text-slate-500 mb-2">
                  <time dateTime="2026-04-11">April 11, 2026</time> &mdash;{" "}
                  <span className="text-slate-400">Microsoft Edge 2026 rules</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>Microsoft Edge requires every extension that collects or accesses user data to publish a clear, comprehensive privacy policy that explains data handling practices and any third party services involved.</strong>{" "}The policy must be specific to your extension, must not reuse the Microsoft privacy statement, must use HTTPS, and must accurately describe data minimisation, security controls, and user controls. Reviewers compare it against the certification you submit through Partner Center.
                </p>
              </div>

            <section id="edge-vs-chrome">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How Edge Privacy Rules Differ From Chrome</h2>
              <p className="text-slate-700 mb-4">Edge extensions are based on the same WebExtensions API as Chrome, so most code ports directly. The privacy review, however, is run by Microsoft and follows the Microsoft Edge Add ons Developer Policies, not the Chrome Web Store policies.</p>
              <p className="text-slate-700 mb-4">Edge places stronger emphasis on data minimisation. Microsoft expects extensions to collect only what is strictly necessary for the stated function and to aggregate or anonymise data wherever possible. A privacy policy that lists broad data categories without specific justifications is more likely to draw questions from Edge reviewers than from Chrome.</p>
              <p className="text-slate-700 mb-4">Edge also requires that user sensitive data is encrypted in transit, that data sharing with any third party requires opt in consent, and that the privacy policy refer specifically to the Edge browser when it discusses data flows tied to that browser.</p>

            </section>

            <section id="what-to-disclose">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What an Edge Extension Privacy Policy Must Disclose</h2>
              <p className="text-slate-700 mb-4">Describe every category of user data your extension collects or accesses. This includes browsing history, page content, form data, identity, cookies, location, and any other category covered by your manifest permissions.</p>
              <p className="text-slate-700 mb-4">Describe how data is used, who it is shared with, and how users can exercise control. Microsoft expects an explicit description of how a user can opt out, request deletion, or see what is stored.</p>
              <p className="text-slate-700 mb-4">Describe security measures. At minimum, name the transport encryption used (TLS 1.2 or higher) and any storage encryption applied to sensitive data. If you do not encrypt at rest, say so and explain why it is acceptable for the data type.</p>
              <p className="text-slate-700 mb-4">Identify any third party services your extension communicates with. Include analytics, error reporting, and any backend you operate. Reviewers cross check by inspecting network traffic and will reject extensions whose policy omits a service that the extension actually contacts.</p>

            </section>

            <section id="common-rejections">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Common Reasons Edge Reviewers Reject Extensions</h2>
              <p className="text-slate-700 mb-4">Reusing the Microsoft privacy statement instead of writing your own. Edge developer policies explicitly prohibit this unless your extension is an official Microsoft product. Always write or generate a policy that names your extension and your company.</p>
              <p className="text-slate-700 mb-4">Vague data descriptions. Phrases like we may collect some information that helps us improve the product are not enough. Be specific about what is collected, why, and where it goes.</p>
              <p className="text-slate-700 mb-4">Missing third party disclosures. If your extension uses Google Analytics, Sentry, Mixpanel, or any other service, name it in the policy. Reviewers compare network traffic against the policy and a mismatch fails the review.</p>

            </section>

            <section id="submit-and-update">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Submitting and Updating Through Partner Center</h2>
              <p className="text-slate-700 mb-4">Edge extensions are submitted through Microsoft Partner Center. The privacy policy URL field is on the Properties tab of your extension submission. Paste the public HTTPS URL where your policy is hosted.</p>
              <p className="text-slate-700 mb-4">Submit the privacy questionnaire alongside the policy. The questionnaire asks the same kinds of questions as Chrome&apos;s data handling certification. Make sure your answers match what your policy says.</p>
              <p className="text-slate-700 mb-4">When you update the extension code, review the privacy policy at the same time. If your update adds new data collection, network endpoints, or permissions, the policy must be updated before the new version is submitted.</p>

            </section>


              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I use my Chrome extension privacy policy for Edge as well?</h3>
                <p className="text-slate-700">Yes, if the policy is generic enough to apply to both browsers and you update the references. Many developers maintain a single policy that names both browsers. Edge reviewers will accept this as long as the policy is specific to the extension and not a generic boilerplate.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Does Edge require a privacy policy for extensions that collect zero user data?</h3>
                <p className="text-slate-700">Technically no, if your extension truly accesses no user data and requests no data permissions. In practice, Microsoft recommends having one anyway, even if it just states no data is collected. This avoids confusion during review.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What encryption standard does Microsoft expect for Edge extensions?</h3>
                <p className="text-slate-700">Edge developer policies require TLS for any data transmitted off the user device. Most modern HTTPS deployments use TLS 1.2 or 1.3, which satisfy this. Disable older TLS versions on any backend your extension contacts.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can my Edge extension share data with third parties?</h3>
                <p className="text-slate-700">Only after obtaining opt in consent from the user. The default must be no sharing. The user must take an explicit action to allow it. Your privacy policy must describe the consent flow and the categories of data that may be shared.</p>
              </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">Generate an Edge ready privacy policy</h2>
                <p className="text-blue-100 mb-4">Covers Microsoft Edge Add ons developer policies, data minimisation, and Partner Center certification.</p>
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
                <Link href="/privacy-policy-for-chrome-extension" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Privacy Policy for Chrome Extension</p>
                  <p className="text-sm text-slate-500 mt-1">Sister browser extension guide.</p>
                </Link>
                <Link href="/chrome-extension-privacy-policy-template" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension Privacy Policy Template</p>
                  <p className="text-sm text-slate-500 mt-1">Reusable template that works on Edge too.</p>
                </Link>
                <Link href="/chrome-extension-gdpr-compliance" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension GDPR Compliance</p>
                  <p className="text-sm text-slate-500 mt-1">EU and UK user rights for browser extensions.</p>
                </Link>
                <Link href="/chrome-extension-privacy-best-practices" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Chrome Extension Privacy Best Practices</p>
                  <p className="text-sm text-slate-500 mt-1">Patterns that pass review on the first try.</p>
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
