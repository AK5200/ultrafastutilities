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
  title: "Privacy Policy for AI Chatbot: GDPR & CCPA Rules (2026)",
  description: "AI chatbots collect prompts, personal data, and conversation history. See what your privacy policy must disclose under GDPR and CCPA, and how to handle training data.",
  keywords: "privacy policy for ai chatbot, chatbot privacy policy, ai chatbot gdpr, llm chatbot privacy, conversation data privacy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-ai-chatbot",
  },
  openGraph: {
    title: "Privacy Policy for AI Chatbot: GDPR & CCPA Rules (2026)",
    description: "AI chatbots collect prompts, personal data, and conversation history. See what your privacy policy must disclose under GDPR and CCPA, and how to handle training data.",
    url: "https://ultrafastutilities.com/privacy-policy-for-ai-chatbot",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for AI Chatbot: GDPR & CCPA Rules (2026)" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for AI Chatbot: GDPR & CCPA Rules (2026)",
    description: "AI chatbots collect prompts, personal data, and conversation history. See what your privacy policy must disclose under GDPR and CCPA, and how to handle training data.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-chatbots-collect", title: "What an AI Chatbot Actually Collects" },
  { id: "model-provider-disclosure", title: "Disclosing the Underlying Model Provider" },
  { id: "training-and-retention", title: "Training, Retention, and Opt Out" },
  { id: "gdpr-and-ccpa", title: "GDPR and CCPA Specifics for Chatbots" },
  { id: "common-mistakes", title: "Common Privacy Policy Mistakes Chatbots Make" }
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need a privacy policy if my AI chatbot is free and has no accounts?","acceptedAnswer":{"@type":"Answer","text":"Yes. Even an anonymous chatbot collects data: IP address, browser metadata, the prompt text itself, and any cookies or analytics on the page. Privacy laws like GDPR and CCPA apply to that data regardless of whether the user has an account."}},{"@type":"Question","name":"Can I just point users to OpenAI's privacy policy if my chatbot uses the OpenAI API?","acceptedAnswer":{"@type":"Answer","text":"No. You are the data controller for your service. You must publish your own privacy policy that names OpenAI as a processor and links to the OpenAI policy as supplementary. Pointing users at OpenAI alone fails GDPR controller obligations and confuses users."}},{"@type":"Question","name":"What if my chatbot uses an open source model running on my own server?","acceptedAnswer":{"@type":"Answer","text":"Then there is no third party processor for the model itself, which simplifies the disclosure. You still need to describe what is collected, how it is stored, and how users can request deletion. If you use any cloud hosting, GPU vendor, or inference platform, name them as processors."}},{"@type":"Question","name":"Are there special rules for AI chatbots aimed at children?","acceptedAnswer":{"@type":"Answer","text":"Yes. COPPA in the US, GDPR Article 8 in the EU, and the UK Age Appropriate Design Code all impose stricter rules on services aimed at users under 13. AI chatbots for children require parental consent for data collection and additional protections in the privacy policy."}}]};

const articleSchema = {"@context":"https://schema.org","@type":"Article","headline":"Privacy Policy for AI Chatbot: GDPR & CCPA Rules (2026)","description":"AI chatbots collect prompts, personal data, and conversation history. See what your privacy policy must disclose under GDPR and CCPA, and how to handle training data.","datePublished":"2026-04-11","dateModified":"2026-04-11","author":{"@type":"Person","name":"Anupam Kumar"},"publisher":{"@type":"Organization","name":"ultrafastutilities","url":"https://ultrafastutilities.com"}};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ultrafastutilities.com"},{"@type":"ListItem","position":2,"name":"Privacy Policy for AI Chatbot","item":"https://ultrafastutilities.com/privacy-policy-for-ai-chatbot"}]};

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
              <span className="text-slate-600">Privacy Policy for AI Chatbot</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                AI Chatbot Compliance
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for an{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">AI Chatbot</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                AI chatbots present a privacy challenge that traditional websites do not. Users type sensitive content into a prompt, that content is processed by a language model, and it may be stored or used to improve the system. Your privacy policy must cover all of this clearly.
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
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>9 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-xs font-medium text-slate-500 mb-2">
                  <time dateTime="2026-04-11">April 11, 2026</time> &mdash;{" "}
                  <span className="text-slate-400">2026 AI chatbot compliance</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>Yes, every AI chatbot that collects user prompts, account data, or conversation history needs a privacy policy that discloses how that data is processed, stored, and used.</strong>{" "}Under GDPR, CCPA, and emerging AI specific regulation, chatbot operators must explain what is collected from prompts, who processes the data (including any underlying model providers), how long it is retained, whether it is used for training, and how users can opt out or request deletion.
                </p>
              </div>

            <section id="what-chatbots-collect">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What an AI Chatbot Actually Collects</h2>
              <p className="text-slate-700 mb-4">Prompts and responses are the most sensitive data an AI chatbot processes. Users frequently paste personal information into prompts: names, emails, employment details, health concerns, financial questions, and proprietary work content. Even if your chatbot is a wrapper around a third party model, the prompt text is personal data the moment a user includes anything that identifies them.</p>
              <p className="text-slate-700 mb-4">Account data is the next layer: email address, login credentials, billing information for paid plans, IP address, and any profile fields you collect. This data is governed by the same privacy laws as any other web service.</p>
              <p className="text-slate-700 mb-4">Conversation history is the third layer. Many chatbots persist past conversations so users can return to them. This creates a long term store of personal data that must be covered in the privacy policy and protected with appropriate security.</p>

            </section>

            <section id="model-provider-disclosure">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Disclosing the Underlying Model Provider</h2>
              <p className="text-slate-700 mb-4">If your chatbot is built on top of OpenAI, Anthropic, Google, or any other language model API, you must disclose this in your privacy policy. Users have a right to know that their prompts are being sent to a third party processor.</p>
              <p className="text-slate-700 mb-4">Name the provider explicitly. State what data is sent (typically the prompt and any system context), what is returned (the model response), and what the provider says about retention. Most major providers offer enterprise terms that exclude prompt data from training; if you use those terms, say so in your policy.</p>
              <p className="text-slate-700 mb-4">If you fine tune a model on user data, this is a much bigger disclosure. Tell users what data is used for fine tuning, how they can opt out, and what happens if they later request deletion. Trained model weights cannot be selectively deleted, which is a known limitation under GDPR&apos;s right to erasure that you should explain clearly.</p>

            </section>

            <section id="training-and-retention">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Training, Retention, and Opt Out</h2>
              <p className="text-slate-700 mb-4">If you use user prompts to improve your chatbot, this is a sensitive disclosure. State explicitly whether prompt data is used for training, what kind of training, who has access to the raw data, and how a user can opt out.</p>
              <p className="text-slate-700 mb-4">Retention periods must be specific. Vague language like we keep your data as long as necessary is not GDPR friendly. Use real numbers: prompts deleted after 30 days, account data retained for the life of the account, billing records kept for seven years for tax purposes.</p>
              <p className="text-slate-700 mb-4">Provide a clear path for users to delete their conversations and account. The path must be self serve where possible. Manual email requests are acceptable for edge cases but should not be the only option.</p>

            </section>

            <section id="gdpr-and-ccpa">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">GDPR and CCPA Specifics for Chatbots</h2>
              <p className="text-slate-700 mb-4">Under GDPR, you must identify a lawful basis for processing prompt data. For paid users, contract performance is usually correct. For free users, consent or legitimate interests can apply, but legitimate interests need a balancing test that you should be ready to show.</p>
              <p className="text-slate-700 mb-4">GDPR also requires you to identify your role as data controller, list any joint controllers, and name any data processors (including the model provider). Provide a contact for data protection requests.</p>
              <p className="text-slate-700 mb-4">Under CCPA, California residents have a right to know, delete, and opt out of sale or sharing for advertising. Most chatbots do not sell data, but if you share with any analytics or ad partner, you must offer the Do Not Sell or Share My Personal Information link on the homepage.</p>

            </section>

            <section id="common-mistakes">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Common Privacy Policy Mistakes Chatbots Make</h2>
              <p className="text-slate-700 mb-4">Hiding the model provider. Reviewers and regulators have started flagging chatbots that fail to mention they are routing prompts to a third party API. Always name the provider.</p>
              <p className="text-slate-700 mb-4">Claiming end to end encryption when prompts are processed by a third party. Encryption in transit is fine to claim if true, but the prompt is decrypted at the model provider, which is the relevant disclosure.</p>
              <p className="text-slate-700 mb-4">Promising deletion without describing the model training caveat. If you fine tune on user data, deletion of the user account does not remove the data from the trained model. This must be explained in plain language.</p>

            </section>


              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do I need a privacy policy if my AI chatbot is free and has no accounts?</h3>
                <p className="text-slate-700">Yes. Even an anonymous chatbot collects data: IP address, browser metadata, the prompt text itself, and any cookies or analytics on the page. Privacy laws like GDPR and CCPA apply to that data regardless of whether the user has an account.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I just point users to OpenAI&apos;s privacy policy if my chatbot uses the OpenAI API?</h3>
                <p className="text-slate-700">No. You are the data controller for your service. You must publish your own privacy policy that names OpenAI as a processor and links to the OpenAI policy as supplementary. Pointing users at OpenAI alone fails GDPR controller obligations and confuses users.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What if my chatbot uses an open source model running on my own server?</h3>
                <p className="text-slate-700">Then there is no third party processor for the model itself, which simplifies the disclosure. You still need to describe what is collected, how it is stored, and how users can request deletion. If you use any cloud hosting, GPU vendor, or inference platform, name them as processors.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Are there special rules for AI chatbots aimed at children?</h3>
                <p className="text-slate-700">Yes. COPPA in the US, GDPR Article 8 in the EU, and the UK Age Appropriate Design Code all impose stricter rules on services aimed at users under 13. AI chatbots for children require parental consent for data collection and additional protections in the privacy policy.</p>
              </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">Generate an AI chatbot privacy policy in 60 seconds</h2>
                <p className="text-blue-100 mb-4">Covers prompt handling, model provider disclosure, training opt out, and GDPR plus CCPA rights.</p>
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
                <Link href="/privacy-policy-for-ai-tools" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Privacy Policy for AI Tools</p>
                  <p className="text-sm text-slate-500 mt-1">Broader AI tool category guide.</p>
                </Link>
                <Link href="/chatgpt-privacy-policy-risks" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">ChatGPT Privacy Policy Risks</p>
                  <p className="text-sm text-slate-500 mt-1">Why generic AI generated policies fail.</p>
                </Link>
                <Link href="/gdpr-privacy-policy-template" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">GDPR Privacy Policy Template</p>
                  <p className="text-sm text-slate-500 mt-1">EU and UK aligned base template.</p>
                </Link>
                <Link href="/ccpa-privacy-policy-example" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">CCPA Privacy Policy Example</p>
                  <p className="text-sm text-slate-500 mt-1">California consumer rights covered.</p>
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
