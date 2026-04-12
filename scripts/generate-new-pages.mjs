// Generates lean SEO pages from data configs.
// Each page follows the same structure: hero with date, featured snippet box
// with date prefix, TOC, body sections, FAQ, related resources, CTA.
//
// CRITICAL: No hyphens (-) or em dashes in body text. The user explicitly
// asked for clean prose. Slugs and JSX attributes are exempt.
//
// Run: node scripts/generate-new-pages.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PAGES } from "./new-pages-data.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_DIR = path.resolve(__dirname, "..", "app");

const TODAY_ISO = "2026-04-11";
const TODAY_HUMAN = "April 11, 2026";

function escapeJsxText(s) {
  // Apostrophes need to be escaped in JSX text. Use &apos; to be safe.
  return s.replace(/'/g, "&apos;");
}

function renderParagraphs(paragraphs) {
  return paragraphs
    .map(
      (p) =>
        `              <p className="text-slate-700 mb-4">${escapeJsxText(p)}</p>`
    )
    .join("\n");
}

function renderList(items) {
  if (!items || items.length === 0) return "";
  return `              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
${items
  .map(
    (item) =>
      `                <li>${escapeJsxText(item)}</li>`
  )
  .join("\n")}
              </ul>`;
}

function renderSnippetList(items) {
  return items
    .map(
      (item) =>
        `                <li>${escapeJsxText(item)}</li>`
    )
    .join("\n");
}

function renderSection(section) {
  return `            <section id="${section.id}">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">${escapeJsxText(section.h2)}</h2>
${renderParagraphs(section.paragraphs)}
${section.list ? renderList(section.list) : ""}
            </section>
`;
}

function renderTocSections(sections) {
  return sections
    .map(
      (s) =>
        `  { id: "${s.id}", title: "${s.tocTitle || s.h2}" }`
    )
    .join(",\n");
}

function renderFaqSchema(faq) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  });
}

function renderFaqBlock(faq) {
  return faq
    .map(
      (item) => `              <div className="border-b border-slate-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">${escapeJsxText(item.q)}</h3>
                <p className="text-slate-700">${escapeJsxText(item.a)}</p>
              </div>`
    )
    .join("\n");
}

function renderRelated(related) {
  return related
    .map(
      (r) => `                <Link href="${r.href}" className="group p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <p className="font-semibold text-slate-900 group-hover:text-blue-700">${escapeJsxText(r.title)}</p>
                  <p className="text-sm text-slate-500 mt-1">${escapeJsxText(r.desc)}</p>
                </Link>`
    )
    .join("\n");
}

function renderPage(page) {
  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    datePublished: TODAY_ISO,
    dateModified: TODAY_ISO,
    author: { "@type": "Person", name: "Anupam Kumar" },
    publisher: { "@type": "Organization", name: "ultrafastutilities", url: "https://ultrafastutilities.com" },
  });

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ultrafastutilities.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: page.breadcrumbName,
        item: `https://ultrafastutilities.com/${page.slug}`,
      },
    ],
  });

  const faqSchemaJson = renderFaqSchema(page.faq);

  return `import { Button } from "@/components/ui/button";
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
  title: ${JSON.stringify(page.title)},
  description: ${JSON.stringify(page.description)},
  keywords: ${JSON.stringify(page.keywords)},
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ultrafastutilities.com/${page.slug}",
  },
  openGraph: {
    title: ${JSON.stringify(page.title)},
    description: ${JSON.stringify(page.description)},
    url: "https://ultrafastutilities.com/${page.slug}",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: ${JSON.stringify(page.title)} }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: ${JSON.stringify(page.title)},
    description: ${JSON.stringify(page.description)},
    images: ["/og-image.png"],
  },
};

const tocSections = [
${renderTocSections(page.sections)}
];

const faqSchema = ${faqSchemaJson};

const articleSchema = ${articleSchema};

const breadcrumbSchema = ${breadcrumbSchema};

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
              <span className="text-slate-600">${escapeJsxText(page.breadcrumbName)}</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                ${escapeJsxText(page.heroBadge)}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                ${escapeJsxText(page.heroH1Pre)}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">${escapeJsxText(page.heroH1Highlight)}</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                ${escapeJsxText(page.heroSubtitle)}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Last updated <time dateTime="${TODAY_ISO}">${TODAY_HUMAN}</time> &middot; Reviewed for compliance
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
                <span>Updated <time dateTime="${TODAY_ISO}">${TODAY_HUMAN}</time></span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>${page.readTime} min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              {/* Featured Snippet Box */}
              <div className="mb-10 rounded-xl border border-blue-200/80 bg-blue-50/40 p-5">
                <p className="text-xs font-medium text-slate-500 mb-2">
                  <time dateTime="${TODAY_ISO}">${TODAY_HUMAN}</time> &mdash;{" "}
                  <span className="text-slate-400">${escapeJsxText(page.snippetTag)}</span>
                </p>
                <p className="text-base leading-7 text-slate-800">
                  <strong>${escapeJsxText(page.snippetLead)}</strong>{" "}${escapeJsxText(page.snippetBody)}
                </p>
              </div>

${page.sections.map(renderSection).join("\n")}

              {/* FAQ */}
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
${renderFaqBlock(page.faq)}
                </div>
              </section>

              {/* CTA */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <h2 className="text-2xl font-bold mb-2">${escapeJsxText(page.ctaTitle)}</h2>
                <p className="text-blue-100 mb-4">${escapeJsxText(page.ctaSubtitle)}</p>
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
${renderRelated(page.related)}
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
`;
}

let written = 0;
for (const page of PAGES) {
  const dir = path.join(APP_DIR, page.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "page.tsx");
  const content = renderPage(page);
  fs.writeFileSync(file, content);
  written++;
  console.log(`wrote ${path.relative(path.resolve(__dirname, ".."), file)} (${content.length} bytes)`);
}
console.log(`\ndone. ${written} pages generated.`);
