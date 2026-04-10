import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck, AlertTriangle, CheckCircle, FileText, ArrowRight,
  ArrowUpRight, HelpCircle, Clock, Ban, Info, Users, Globe, Mic, Mail,
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";

export const metadata = {
  title: "Privacy Policy for a Podcast: Complete Guide (2026) | ultrafastutilities",
  description: "Running a podcast? Your website, email list, and hosting platform all collect listener data. Learn exactly what your podcast privacy policy must cover and how to comply.",
  keywords: "privacy policy for podcast, podcast privacy policy, podcast website privacy policy, podcast hosting privacy policy, podcaster privacy policy",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ultrafastutilities.com/privacy-policy-for-podcast" },
  openGraph: {
    title: "Privacy Policy for a Podcast: Complete Guide (2026) | ultrafastutilities",
    description: "Running a podcast? Your website, email list, and hosting platform all collect listener data. Learn what your podcast privacy policy must cover.",
    url: "https://ultrafastutilities.com/privacy-policy-for-podcast",
    siteName: "ultrafastutilities",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Privacy Policy for Podcast" }],
    locale: "en_US", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy for a Podcast: Complete Guide (2026) | ultrafastutilities",
    description: "Running a podcast? Learn what your podcast privacy policy must cover.",
    images: ["/og-image.png"],
  },
};

const tocSections = [
  { id: "why-podcasters-need", title: "Why Podcasters Need a Policy" },
  { id: "hosting-platforms", title: "Podcast Hosting Platforms" },
  { id: "website-analytics", title: "Website and Analytics Data" },
  { id: "email-list", title: "Email List for Listeners" },
  { id: "dynamic-ads", title: "Dynamic Ad Insertion" },
  { id: "supporter-data", title: "Patreon and Supporter Data" },
  { id: "common-mistakes", title: "Common Mistakes" },
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
      name: "Does a podcast need a privacy policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you have a podcast website, email list, or collect listener data in any way. Podcast hosting platforms collect download and listener analytics on your behalf. If you have a website with contact forms, newsletter signups, or run ads, you are collecting personal data and need a privacy policy under GDPR, CCPA, and similar laws.",
      },
    },
    {
      "@type": "Question",
      name: "Does my podcast hosting platform handle privacy compliance for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Platforms like Buzzsprout, Anchor, or Transistor have their own privacy policies covering their platform. But you are responsible for your own website, email list, sponsorship data, and any data you collect from listeners directly. You need your own privacy policy for these.",
      },
    },
    {
      "@type": "Question",
      name: "What data does a podcast website collect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A podcast website typically collects: IP addresses and browser data via server logs, analytics data via Google Analytics or similar, email addresses from newsletter signups, name and email from contact forms, and potentially payment data if you sell merchandise or memberships.",
      },
    },
    {
      "@type": "Question",
      name: "Do podcast download stats count as personal data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download statistics collected by podcast hosting platforms may include IP addresses, which are considered personal data under GDPR. Your podcast hosting provider handles this data under their own privacy policy. However, if you access per-listener analytics that identify individuals, this falls under your responsibility.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Privacy Policy for a Podcast: Complete Guide (2026)",
  description: "Complete guide to privacy policy requirements for podcasters, covering hosting platforms, websites, email lists, and listener data.",
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
    { "@type": "ListItem", position: 2, name: "Privacy Policy for Podcast", item: "https://ultrafastutilities.com/privacy-policy-for-podcast" },
  ],
};

export default function PrivacyPolicyForPodcast() {
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
              <span className="text-slate-600">Privacy Policy for Podcast</span>
            </nav>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-medium mb-6">
                <Mic className="w-3.5 h-3.5" />
                Podcaster Privacy Guide
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Privacy Policy for a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Podcast</span>
              </h1>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">Your podcast website, email list, and hosting platform all collect listener data. Here is what your privacy policy must cover and why it matters.</p>
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
                <span>Last updated: April 2026</span>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" /><span>10 min read</span></div>
                <span className="text-slate-300 hidden sm:inline">&middot;</span>
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" /><span>Reviewed for compliance</span></div>
              </div>

              <div id="why-podcasters-need" className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2"><Info className="w-5 h-5" />Quick Answer: Does a Podcast Need a Privacy Policy?</h2>
                <p className="text-blue-800">Yes - if you have a podcast website, collect listener emails, run a Patreon, or use analytics, you are collecting personal data. GDPR applies if any listeners are in the EU. CCPA applies if you have California listeners. Most email marketing platforms also require a privacy policy. Even a simple podcast website with Google Analytics is collecting personal data (IP addresses) and needs to disclose this.</p>
              </div>

              <section id="hosting-platforms">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Podcast Hosting Platforms and Privacy</h2>
                <p className="text-slate-700 mb-4">Every podcast hosting platform collects analytics data on your behalf. Understanding what each platform collects helps you write an accurate privacy policy.</p>
                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Platform</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Data Collected</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Creator Responsibility</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Buzzsprout","Downloads, listener location, device type, IP","Disclose Buzzsprout as analytics provider"],
                        ["Spotify / Anchor","Plays, listener demographics, engagement","Spotify handles via their policy; disclose use"],
                        ["Transistor","Per-episode downloads, subscriber analytics","Disclose Transistor as data processor"],
                        ["Podbean","Downloads, geographic data, app analytics","Disclose Podbean in your privacy policy"],
                        ["Captivate","IAB-certified download stats, listener data","Disclose Captivate as analytics provider"],
                      ].map(([p,d,c]) => (
                        <tr key={p}><td className="p-3 font-medium text-slate-800">{p}</td><td className="p-3 text-slate-600">{d}</td><td className="p-3 text-slate-600">{c}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900">Did you know?</p>
                      <p className="text-amber-800 mt-1">Your podcast hosting platform's privacy policy covers their handling of listener data. But if you embed a player on your own website, that website's analytics also collect visitor data independently. You need to disclose both your hosting platform and your own website analytics in your privacy policy.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="website-analytics">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Website and Analytics Data</h2>
                <p className="text-slate-700 mb-4">Most podcasters have a companion website with show notes, episode pages, and contact forms. This website collects its own data independently of your hosting platform.</p>
                <div className="space-y-3">
                  {[
                    { item: "Google Analytics or similar", detail: "Collects IP addresses, session data, device and browser info, pages visited. Under GDPR, requires cookie consent before firing." },
                    { item: "Contact forms", detail: "Name and email submitted via contact or booking forms. Must disclose how these are used and stored." },
                    { item: "Server logs", detail: "IP addresses and request data are automatically logged by web servers. Must be mentioned in your policy." },
                    { item: "Embedded podcast player", detail: "Third-party players (Spotify, Apple Podcasts embeds) may set cookies on your website visitors." },
                  ].map((i, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div><p className="font-semibold text-slate-800 text-sm">{i.item}</p><p className="text-slate-600 text-sm mt-1">{i.detail}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="email-list">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Email List for Listeners</h2>
                <p className="text-slate-700 mb-4">Many podcasters build an email list to notify listeners of new episodes and share bonus content. This is one of the most significant privacy obligations for podcasters.</p>
                <p className="text-slate-700 mb-4">Your privacy policy must disclose:</p>
                <ul className="space-y-2 text-slate-700 mb-4">
                  {["How you collect listener emails (website form, lead magnet, show notes link)","Which email service provider you use (Mailchimp, ConvertKit, Beehiiv, etc.)","What types of emails you send and how frequently","How listeners can unsubscribe","How long you keep email data after unsubscribing"].map(i => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{i}</li>
                  ))}
                </ul>
              </section>

              <section id="dynamic-ads">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Dynamic Ad Insertion and Advertising Data</h2>
                <p className="text-slate-700 mb-4">If you use dynamic ad insertion (DAI) through your hosting platform or a third-party ad network, this involves targeting listeners based on their data.</p>
                <p className="text-slate-700 mb-4">Dynamic ad insertion may involve:</p>
                <ul className="space-y-2 text-slate-700">
                  {["Geographic targeting based on listener IP addresses","Device-type targeting","Behavioral targeting through ad network cookies","Listener frequency and engagement scoring"].map(i => (
                    <li key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />{i}</li>
                  ))}
                </ul>
                <p className="text-slate-700 mt-4">If you monetize your podcast through programmatic advertising or host-read ads arranged through a network, your privacy policy should disclose the advertising relationship and link to your ad network's data practices.</p>
              </section>

              <section id="supporter-data">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Patreon, Supercast, and Supporter Data</h2>
                <p className="text-slate-700 mb-4">Many podcasters offer paid supporter tiers through Patreon, Supercast, Supporting Cast, or direct membership. Each platform shares different supporter data with you.</p>
                <div className="overflow-x-auto">
                  <table className="w-full border border-slate-200 rounded-lg text-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-3 font-semibold text-slate-700">Platform</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Data You Receive</th>
                        <th className="text-left p-3 font-semibold text-slate-700">Disclose In Policy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Patreon","Name, email, tier, pledge amount","Yes - you are a data controller for this data"],
                        ["Supercast","Email, subscription status, feed access","Yes - Supercast as processor"],
                        ["Buy Me a Coffee","Name, email, payment amount","Yes - supporter financial data"],
                        ["Apple Podcasts Subscriptions","Limited - Apple anonymizes","Minimal disclosure needed"],
                      ].map(([p,d,c]) => (
                        <tr key={p}><td className="p-3 font-medium text-slate-800">{p}</td><td className="p-3 text-slate-600">{d}</td><td className="p-3 text-slate-600">{c}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="common-mistakes">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5 Common Podcast Privacy Policy Mistakes</h2>
                <div className="space-y-4">
                  {[
                    { title: "Assuming the hosting platform's policy covers everything", desc: "Buzzsprout, Anchor, and Transistor cover their own platforms. Your website, email list, Patreon, and any direct listener data collection require your own privacy policy." },
                    { title: "No disclosure of Google Analytics or website tracking", desc: "Every podcast website with analytics is collecting IP addresses and behavioral data. Under GDPR, this requires cookie consent and disclosure in your privacy policy." },
                    { title: "Not disclosing your email service provider", desc: "When listeners sign up to your email list, their data is stored at your ESP (Mailchimp, ConvertKit, etc.). Your policy must name this provider and note that data is processed by them." },
                    { title: "Forgetting about Patreon or supporter platform data", desc: "Supporter platforms share patron names, emails, and financial data with you. This data is your responsibility under GDPR once you receive it, and must be disclosed in your policy." },
                    { title: "No policy link on the podcast website at all", desc: "Many podcasters have a website but no privacy policy link in the footer. This is non-compliant with GDPR, CCPA, and the terms of most email marketing platforms." },
                  ].map((m, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                      <Ban className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div><p className="font-semibold text-red-800">{m.title}</p><p className="text-red-700 text-sm mt-1">{m.desc}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "Does a podcast need a privacy policy?", a: "Yes, if you have a podcast website, email list, or collect listener data. Your hosting platform's policy does not cover your website or email list." },
                    { q: "Does my podcast hosting platform handle privacy compliance for me?", a: "No. Platforms like Buzzsprout or Transistor cover their own analytics. Your website, email list, and supporter platform data are your responsibility." },
                    { q: "What data does a podcast website collect?", a: "IP addresses via server logs, analytics data via Google Analytics, email addresses from newsletter signups, and name/email from contact forms." },
                    { q: "Do podcast download stats count as personal data?", a: "Download stats collected by hosting platforms may include IP addresses, which are personal data under GDPR. Your hosting provider handles this, but you should reference them in your policy." },
                  ].map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-5">
                      <h3 className="font-semibold text-slate-800 flex items-start gap-2"><HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />{item.q}</h3>
                      <p className="text-slate-600 mt-2 ml-7 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="generate" className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Generate Your Podcast Privacy Policy</h2>
                <p className="text-slate-300 mb-6">Create a complete privacy policy for your podcast in under 2 minutes. Covers your website, email list, hosting platform, and supporter data.</p>
                <ul className="space-y-2 text-slate-300 mb-6 text-sm">
                  {["Podcast hosting platform disclosures","Email list and newsletter sections","GDPR and CCPA compliant","Free to generate, no account required"].map(i => (
                    <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />{i}</li>
                  ))}
                </ul>
                <Link href="/generate"><Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 text-lg">Generate Free Privacy Policy<ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
              </section>

              <section id="resources">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Resources</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Privacy Policy for Patreon", desc: "Creator membership privacy requirements", href: "/privacy-policy-for-patreon" },
                    { title: "Privacy Policy for Substack", desc: "Newsletter and paid subscription guide", href: "/privacy-policy-for-substack" },
                    { title: "Do I Need a Privacy Policy for a Newsletter?", desc: "Email newsletter privacy requirements", href: "/do-i-need-a-privacy-policy-for-a-newsletter" },
                    { title: "Privacy Policy for YouTube Channel", desc: "Video content creator privacy guide", href: "/privacy-policy-for-youtube-channel" },
                    { title: "Privacy Policy for Small Business", desc: "Solo creator privacy requirements", href: "/privacy-policy-for-small-business" },
                    { title: "Privacy Policy for Beehiiv", desc: "Beehiiv newsletter privacy guide", href: "/privacy-policy-for-beehiiv" },
                    { title: "GDPR Privacy Policy Template", desc: "EU-compliant privacy policy template", href: "/gdpr-privacy-policy-template" },
                    { title: "How to Write a Privacy Policy", desc: "Step-by-step writing guide", href: "/how-to-write-a-privacy-policy" },
                  ].map((r) => (
                    <Link key={r.href} href={r.href} className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                      <ArrowUpRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div><p className="font-medium text-slate-800 group-hover:text-blue-700">{r.title}</p><p className="text-slate-500 text-sm">{r.desc}</p></div>
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
