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
  title: "Privacy Policy for an LLM App: 2026 Compliance Guide",
  description: "LLM powered apps process prompts, embeddings, and user data through model APIs. See exactly what your privacy policy must disclose under GDPR, CCPA, and the EU AI Act.",
  keywords: "privacy policy for llm app, llm privacy policy, large language model privacy, openai api privacy policy, anthropic api privacy",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/privacy-policy-for-llm-app",
  },
  openGraph: {
    title: "Privacy Policy for an LLM App: 2026 Compliance Guide",
    description: "LLM powered apps process prompts, embeddings, and user data through model APIs. See exactly what your privacy policy must disclose under GDPR, CCPA, and the EU AI Act.",
    url: "https://ultrafastutilities.com/privacy-policy-for-llm-app",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for an LLM App: 2026 Compliance Guide" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for an LLM App: 2026 Compliance Guide",
    description: "LLM powered apps process prompts, embeddings, and user data through model APIs. See exactly what your privacy policy must disclose under GDPR, CCPA, and the EU AI Act.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "what-llm-apps-do", title: "What an LLM App Actually Does With User Data" },
  { id: "who-is-controller", title: "Who Is the Data Controller and Who Is the Processor" },
  { id: "training-disclosure", title: "Training and Improvement Disclosure" },
  { id: "vector-storage", title: "Vector Stores and Personal Embeddings" },
  { id: "eu-ai-act", title: "EU AI Act and Transparency Obligations" }
];

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need a separate privacy policy for my LLM app or can I reuse my main website policy?","acceptedAnswer":{"@type":"Answer","text":"If the LLM app is a separate product or has materially different data flows from your main website, write a separate policy or a clearly marked section. Combining everything into one policy is acceptable only if every flow is described accurately."}},{"@type":"Question","name":"How do I describe a model provider that says they do not train on my data?","acceptedAnswer":{"@type":"Answer","text":"State the fact and link to the provider's documentation. For example: prompts and responses are sent to OpenAI under their API enterprise terms, which exclude this data from model training. This is a strong claim and users appreciate the link to verify it."}},{"@type":"Question","name":"What if I cannot afford a lawyer to review my LLM app privacy policy?","acceptedAnswer":{"@type":"Answer","text":"Use a generator that produces a structurally sound policy and customize the AI specific sections yourself. For high risk uses (health, finance, legal, employment), invest in a lawyer review. For consumer or productivity tools, a well written generated policy plus careful customisation is enough to start."}},{"@type":"Question","name":"Does a self hosted open source LLM still need a privacy policy?","acceptedAnswer":{"@type":"Answer","text":"Yes. The legal requirement comes from collecting personal data, not from using a third party API. If users send prompts that include personal information, you have a privacy policy obligation regardless of where the model runs."}}]};

const articleSchema = {"@context":"https://schema.org","@type":"Article","headline":"Privacy Policy for an LLM App: 2026 Compliance Guide","description":"LLM powered apps process prompts, embeddings, and user data through model APIs. See exactly what your privacy policy must disclose under GDPR, CCPA, and the EU AI Act.","datePublished":"2026-04-11","dateModified":"2026-04-11","author":{"@type":"Person","name":"Anupam Kumar"},"publisher":{"@type":"Organization","name":"ultrafastutilities","url":"https://ultrafastutilities.com"}};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ultrafastutilities.com"},{"@type":"ListItem","position":2,"name":"Privacy Policy for LLM App","item":"https://ultrafastutilities.com/privacy-policy-for-llm-app"}]};

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
              <span className="text-slate-600">Privacy Policy for LLM App</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                LLM App Compliance
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for an{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">LLM App</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                Apps built on large language models route user input to a third party model provider, often store embeddings of personal content, and may use the data for product improvement. Your privacy policy must explain all of this.
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
                  <span className="text-slate-400">2026 LLM compliance</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>An LLM app privacy policy must disclose every data flow tied to the model, including prompts, embeddings, vector storage, model provider processing, and any training or evaluation use of user content.</strong>{" "}Under GDPR, CCPA, and the EU AI Act provisions taking effect in 2026, LLM app operators must identify themselves as the data controller, name the model provider as a processor, describe retention specifically, and provide a workable path for users to delete their data.
                </p>
              </div>

            <section id="what-llm-apps-do">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What an LLM App Actually Does With User Data</h2>
              <p className="text-slate-700 mb-4">An LLM app typically takes a user prompt, optionally enriches it with context from a vector database or knowledge base, sends the combined prompt to a model provider API, and returns the response to the user. Each of those steps touches data that may be personal.</p>
              <p className="text-slate-700 mb-4">If your app stores user uploaded documents or notes and creates vector embeddings for retrieval, those embeddings are derived from the original content. Under GDPR, embeddings of personal content are considered personal data even though they look like numbers.</p>
              <p className="text-slate-700 mb-4">If your app maintains conversation history, that history is a long term store of user prompts and model responses. It is fully personal data and must be handled with appropriate security and retention controls.</p>

            </section>

            <section id="who-is-controller">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Who Is the Data Controller and Who Is the Processor</h2>
              <p className="text-slate-700 mb-4">You, the operator of the LLM app, are the data controller. You decide what data is collected, why, and what is done with it. You are responsible to users and regulators.</p>
              <p className="text-slate-700 mb-4">The model provider (OpenAI, Anthropic, Google, an open source model on a cloud GPU, or anything else) is a data processor. They process data on your instructions. Your contract with them sets the boundaries.</p>
              <p className="text-slate-700 mb-4">If you use a vector database hosted by a third party, that vendor is also a processor. The same is true for your hosting provider, your authentication provider, your payment processor, and any analytics tool you embed. The privacy policy must list each one.</p>

            </section>

            <section id="training-disclosure">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Training and Improvement Disclosure</h2>
              <p className="text-slate-700 mb-4">If you do not use user data to train any model, say so explicitly. This is often the strongest privacy claim a small LLM app can make and users value it.</p>
              <p className="text-slate-700 mb-4">If you do use user data, describe: what data is used, what kind of training or fine tuning, who has access to the raw data, how a user can opt out, and what happens to data already used in training when a user later requests deletion.</p>
              <p className="text-slate-700 mb-4">Be honest about the limits of deletion. Trained model weights cannot be selectively unlearned. If a user&apos;s data has been used to fine tune a model, that influence is baked in. You can stop using the user&apos;s data going forward, but the historical training cannot be reversed. Privacy regulators are increasingly focused on this gap and your policy should address it directly.</p>

            </section>

            <section id="vector-storage">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Vector Stores and Personal Embeddings</h2>
              <p className="text-slate-700 mb-4">If your app uses retrieval augmented generation, you almost certainly have a vector database holding embeddings of user content. List the vendor (Pinecone, Weaviate, Qdrant, pgvector, or similar) and where it is hosted.</p>
              <p className="text-slate-700 mb-4">Describe what gets embedded, how long the embeddings are retained, and what happens when a user deletes the source content. Best practice is to delete the embeddings at the same time as the source.</p>
              <p className="text-slate-700 mb-4">Embeddings are not anonymisation. Two papers from 2023 and 2024 showed that embeddings of personal text can be inverted to recover meaningful portions of the original. Treat embeddings as personal data for GDPR purposes.</p>

            </section>

            <section id="eu-ai-act">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">EU AI Act and Transparency Obligations</h2>
              <p className="text-slate-700 mb-4">The EU AI Act introduces transparency requirements that overlap with privacy disclosure. Users interacting with an AI system must be informed of that fact, and certain high risk uses require additional documentation.</p>
              <p className="text-slate-700 mb-4">Most general purpose LLM apps fall into the limited or minimal risk category, which means transparency obligations apply but not the heavy compliance burden of high risk AI. Your privacy policy and a clear in product disclosure together usually satisfy the transparency requirement.</p>
              <p className="text-slate-700 mb-4">If your LLM app is used in employment screening, education, credit scoring, or law enforcement, you may be in a higher risk category and additional documentation is required outside the privacy policy.</p>

            </section>


              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do I need a separate privacy policy for my LLM app or can I reuse my main website policy?</h3>
                <p className="text-slate-700">If the LLM app is a separate product or has materially different data flows from your main website, write a separate policy or a clearly marked section. Combining everything into one policy is acceptable only if every flow is described accurately.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How do I describe a model provider that says they do not train on my data?</h3>
                <p className="text-slate-700">State the fact and link to the provider&apos;s documentation. For example: prompts and responses are sent to OpenAI under their API enterprise terms, which exclude this data from model training. This is a strong claim and users appreciate the link to verify it.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What if I cannot afford a lawyer to review my LLM app privacy policy?</h3>
                <p className="text-slate-700">Use a generator that produces a structurally sound policy and customize the AI specific sections yourself. For high risk uses (health, finance, legal, employment), invest in a lawyer review. For consumer or productivity tools, a well written generated policy plus careful customisation is enough to start.</p>
              </div>
              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Does a self hosted open source LLM still need a privacy policy?</h3>
                <p className="text-slate-700">Yes. The legal requirement comes from collecting personal data, not from using a third party API. If users send prompts that include personal information, you have a privacy policy obligation regardless of where the model runs.</p>
              </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">Generate an LLM app privacy policy</h2>
                <p className="text-blue-100 mb-4">Vector store, model provider, training opt out, and EU AI Act disclosure, all covered.</p>
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
                <Link href="/privacy-policy-for-ai-chatbot" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Privacy Policy for AI Chatbot</p>
                  <p className="text-sm text-slate-500 mt-1">Sister guide focused on conversational AI.</p>
                </Link>
                <Link href="/privacy-policy-for-ai-tools" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">Privacy Policy for AI Tools</p>
                  <p className="text-sm text-slate-500 mt-1">Broader AI tool category guide.</p>
                </Link>
                <Link href="/gdpr-privacy-policy-template" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">GDPR Privacy Policy Template</p>
                  <p className="text-sm text-slate-500 mt-1">EU and UK aligned base template.</p>
                </Link>
                <Link href="/chatgpt-privacy-policy-risks" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">ChatGPT Privacy Policy Risks</p>
                  <p className="text-sm text-slate-500 mt-1">Why generic AI generated policies fail.</p>
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
